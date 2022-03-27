/* eslint-disable @typescript-eslint/naming-convention */
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ProjectService } from 'src/app/services/project.service';
import { Timeframe } from 'src/app/interfaces/timeframe';
import { TimeframeService } from 'src/app/services/timeframe.service';
import { ErrorService } from 'src/app/services/error.service';
import {TranslateService} from '@ngx-translate/core';
import {formatISO, parseISO} from "date-fns";
import {AlertService} from "../../../../services/alert.service";

@Component({
  selector: 'app-edit-project',
  templateUrl: './edit-project.page.html',
  styleUrls: ['./edit-project.page.scss'],
})
export class EditProjectPage implements OnInit {
  editProjectForm: FormGroup;
  isProcessed = false;
  timeframes: Timeframe[] = [];
  deleteTimeframes: Timeframe[] = [];

  constructor(private projectService: ProjectService,
              private timeframeService: TimeframeService,
              private formBuilder: FormBuilder,
              private router: Router,
              private errorService: ErrorService,
              private translate: TranslateService,
              private alertService: AlertService) { }

  ngOnInit() {
    this.editProjectForm = this.formBuilder.group({
      topic: ['', Validators.required],
      title: ['', Validators.required],
      image: null,
      description: ['', Validators.required],
      cost: ['', Validators.required],
      min_grade: ['', Validators.required],
      max_grade: ['', Validators.required],
      min_participants: ['', Validators.required],
      max_participants: ['', Validators.required],
    });
  }

  ionViewWillEnter() {
    this.isProcessed = false;
    this.getProject();
  }

  get errorControl() {
    return this.editProjectForm.controls;
  }

  getProject() {
    this.projectService.getAssociatedProject().subscribe({
      error: error => {
        this.errorService.errorOccurred.emit(error);
      },
      next: response => {
        const resp: any = response;
        for (const timeframe of resp.project.timeframes) {
          const fromCopy = new Date(parseISO(timeframe.from).getTime());
          fromCopy.setHours(fromCopy.getHours() - 2);
          timeframe.from = formatISO(fromCopy);
          const untilCopy = new Date(parseISO(timeframe.until).getTime());
          untilCopy.setHours(untilCopy.getHours() - 2);
          timeframe.until = formatISO(untilCopy);
        }
        this.editProjectForm.patchValue(resp.project);
        if (resp.project.timeframes) {
          this.timeframes = resp.project.timeframes;
        }

      },
    });
  }

  editProject() {
    if (!this.isProcessed && this.editProjectForm.valid) {
      this.isProcessed = true;

      this.updateProject();

      this.timeframes.forEach(timeframe => {
        if (!timeframe.id) {
          this.timeframeService.createTimeframe(timeframe).subscribe({
            error: error => {
              if (error.error.message == 'The given data was invalid.') {
                for (const errorType in error.error.errors) {
                  for (const errorMessage in error.error.errors[errorType]) {
                    this.alertService.alert("danger", this.translate.instant('ACTIONS.EDIT_PROJECT.title'), error.error.errors[errorType][errorMessage], 'close');
                  }
                }

              } else if (error.error.message == 'missingPermissions') {
                this.alertService.alert("danger", this.translate.instant('GENERAL.missingPermissions'), '', 'lock-closed');
              } else {
                this.errorService.errorOccurred.emit(error);
              }
            }
          });
        } else {
          this.timeframeService.updateTimeframe(timeframe).subscribe({
            error: error => {
              if (error.error.message == 'The given data was invalid.') {
                for (const errorType in error.error.errors) {
                  for (const errorMessage in error.error.errors[errorType]) {
                    this.alertService.alert("danger", this.translate.instant('ACTIONS.EDIT_PROJECT.title'), error.error.errors[errorType][errorMessage], 'close');
                  }
                }

              } else if (error.error.message == 'missingPermissions') {
                this.alertService.alert("danger", this.translate.instant('GENERAL.missingPermissions'), '', 'lock-closed');
              } else {
                this.errorService.errorOccurred.emit(error);
              }
            }
          });
        }
      });

      this.deleteTimeframes.forEach(timeframe => {
        this.timeframeService.deleteTimeframe(timeframe.id).subscribe({
          error: error => {
            if (error.error.message == 'The given data was invalid.') {
              for (const errorType in error.error.errors) {
                for (const errorMessage in error.error.errors[errorType]) {
                  this.alertService.alert("danger", this.translate.instant('ACTIONS.EDIT_PROJECT.title'), error.error.errors[errorType][errorMessage], 'close');
                }
              }

            } else if (error.error.message == 'missingPermissions') {
              this.alertService.alert("danger", this.translate.instant('GENERAL.missingPermissions'), '', 'lock-closed');
            } else {
              this.errorService.errorOccurred.emit(error);
            }
          }
        });
      });
    }
  }

  updateProject() {
    this.projectService.updateProject(this.editProjectForm.value).subscribe({
      error: error => {
        if (error.error.message == 'The given data was invalid.') {
          for (const errorType in error.error.errors) {
            const errors: any = [];
            for (const errorMessage in error.error.errors[errorType]) {
              errors.push({[error.error.errors[errorType][errorMessage]]: true});
            }
            this.editProjectForm.controls[errorType].setErrors(errors);
          }

        } else if (error.error.message == 'missingPermissions') {
          this.alertService.alert("danger", this.translate.instant('GENERAL.missingPermissions'), '', 'lock-closed');
        } else {
          this.errorService.errorOccurred.emit(error);
        }
        this.isProcessed = false;
      },
      next: response => {
        const resp: any = response;
        this.alertService.alert("success", this.translate.instant('ACTIONS.EDIT_PROJECT.title'), resp.message, "checkmark")
      },
      complete: () => {
        this.editProjectForm.reset();
        this.isProcessed = false;
        this.router.navigate(['/manage-project']);
      },
    });
  }

  addTimeframe() {
    this.timeframes.push({date: null, from: null, until: null});
  }

  deleteTimeframe(timeframe) {
    if (timeframe.id) {
      this.deleteTimeframes.push(timeframe);
      this.timeframes = this.timeframes.filter(loopTimeframe => {return loopTimeframe.id != timeframe.id;});
    } else {
      this.timeframes = this.timeframes.filter(loopTimeframe => {return loopTimeframe != timeframe;});
    }
  }
}
