import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { EventService } from 'src/app/services/event.service';
import { trigger, state, style, animate, transition } from '@angular/animations';
import { ScreenSizeService } from 'src/app/services/screensize.service';
import { RolesAndPermissionsService } from 'src/app/services/roles-and-permissions.service';
import { Event } from 'src/app/interfaces/event';
import { DatePipe } from '@angular/common';
import { ErrorService } from 'src/app/services/error.service';
import { TranslateService } from '@ngx-translate/core';

export interface Checkbox {
  name: string;
  isChecked: boolean;
}

@Component({
  selector: 'app-manage-schedule',
  templateUrl: './manage-schedule.page.html',
  styleUrls: ['./manage-schedule.page.scss'],
  providers: [ DatePipe ],
  animations: [
    trigger('openClose', [
      state('open', style({
        opacity: 1,
      })),
      state('closed', style({
        opacity: 0,
        height: '0px',
      })),
      transition('* => closed', [
        animate('0.3s')
      ]),
      transition('* => open', [
        animate('0.3s')
      ]),
    ]),
  ],
})
export class ManageSchedulePage implements OnInit {
  isDesktop: boolean;
  showAddEvent = false;
  events: Event[] = [];
  addEventForm: FormGroup;
  addEventPermissions: Checkbox[] = [];
  updateEventForm: FormGroup;
  updateEventPermissions: Checkbox[] = [];
  isProcessed = false;

  constructor(private formBuilder: FormBuilder,
              private eventService: EventService,
              private rolesAndPermissionsService: RolesAndPermissionsService,
              private screenSizeService: ScreenSizeService,
              private datePipe: DatePipe,
              private errorService: ErrorService,
              public translateService: TranslateService) {
      this.screenSizeService.isDesktopView().subscribe(isDesktop => {
        if (this.isDesktop && !isDesktop) {
        window.location.reload();
      }
      this.isDesktop = isDesktop;
    });
  }

  get errorControl() {
    return this.addEventForm.controls;
  }

  ngOnInit() {
    this.addEventForm = this.formBuilder.group({
      title: ['', Validators.required],
      description: ['', Validators.required],
      from: ['', Validators.required],
      until: ['', Validators.required],
    });
    this.updateEventForm = this.formBuilder.group({
      id: [],
      title: ['', Validators.required],
      description: ['', Validators.required],
      from: ['', Validators.required],
      until: ['', Validators.required],
    });
  }

  ionViewWillEnter() {
    this.isProcessed = false;
    this.getPermissions();
    this.getEvents();
  }

  getEvents() {
    this.eventService.getEvents().subscribe({
      error: error => {
        this.errorService.errorOccurred.emit(error);
      },
      next: response => {
        const resp: any = response;
        this.events = resp.events;
        resp.events.forEach(event => {
          event.permissions_names = event.permissions.map(permission => permission.name);
        });
        this.events = resp.events;
      },
    });
  }

  getPermissions() {
    this.rolesAndPermissionsService.getPermissions().subscribe({
      error: error => {
        this.errorService.errorOccurred.emit(error);
      },
      next: response => {
        const resp: any = response;
        resp.permissions.forEach(permission => {
          this.addEventPermissions.push({ name: permission.name, isChecked: false });
          this.updateEventPermissions.push({ name: permission.name, isChecked: false });
        });
      },
    });
  }

  addEvent(form) {
    if (!this.isProcessed && this.addEventForm.valid) {
      this.isProcessed = true;
      this.addEventForm.patchValue({
        from: this.datePipe.transform(this.addEventForm.value.from, 'yyyy-MM-dd'),
        until: this.datePipe.transform(this.addEventForm.value.until, 'yyyy-MM-dd'),
      });
      this.eventService.createEvent(this.addEventForm.value).subscribe({
        error: error => {
          if (error.error.message == 'The given data was invalid.') {
            for (const errorType in error.error.errors) {
              const errors: any = [];
              for (const errorMessage in error.error.errors[errorType]) {
                errors.push({[error.error.errors[errorType][errorMessage]]: true});
              }
              this.addEventForm.controls[errorType].setErrors(errors);
            }
          } else {
            this.errorService.errorOccurred.emit(error);
          }
          this.isProcessed = false;
        },
        next: response => {
          const resp: any = response;
          this.addEventForm.reset();
          this.isProcessed = false;
          const addEventPermissionsNames = this.addEventPermissions.filter(permission => permission.isChecked).map(permissions => permissions.name);
          this.eventService.syncPermissions(resp.event.id, {permissions: addEventPermissionsNames}).subscribe({
            error: error => {
              this.errorService.errorOccurred.emit(error);
            },
            complete: () => {
              this.getEvents();
            }
          });
        form.reset()
        },
      });
    }
  }

  editEvent(event) {
    this.updateEventForm.patchValue(event);
    this.updateEventPermissions.forEach(permission => {
      permission.isChecked = !!event.permissions_names.includes(permission.name);
    });
  }

  updateEvent() {
    if (!this.isProcessed && this.updateEventForm.valid) {
      this.isProcessed = true;
      this.updateEventForm.patchValue({
        from: this.datePipe.transform(this.updateEventForm.value.from, 'yyyy-MM-dd'),
        until: this.datePipe.transform(this.updateEventForm.value.until, 'yyyy-MM-dd'),
      });
      const updateEventPermissionsNames = this.updateEventPermissions.filter(permission => permission.isChecked).map(permissions => permissions.name);
      this.eventService.syncPermissions(this.updateEventForm.value.id, {permissions: updateEventPermissionsNames}).subscribe({
        error: error => {
          this.errorService.errorOccurred.emit(error);
        }
      });
      this.eventService.updateEvent(this.updateEventForm.value).subscribe({
        error: error => {
          if (error.error.message == 'The given data was invalid.') {
            for (const errorType in error.error.errors) {
              const errors: any = [];
              for (const errorMessage in error.error.errors[errorType]) {
                errors.push({[error.error.errors[errorType][errorMessage]]: true});
              }
              this.addEventForm.controls[errorType].setErrors(errors);
            }
          } else {
            this.errorService.errorOccurred.emit(error);
          }
          this.isProcessed = false;
        },
        next: () => {},
        complete: () => {
          this.updateEventForm.reset();
          this.isProcessed = false;
          this.getEvents();
        },
      });
    }
  }

  deleteEvent(eventId) {
    this.eventService.deleteEvent(eventId).subscribe({
      error: error => {
        this.errorService.errorOccurred.emit(error);
      },
      next: () => {},
      complete: () => {
        this.getEvents();
      }
    });
  }

}
