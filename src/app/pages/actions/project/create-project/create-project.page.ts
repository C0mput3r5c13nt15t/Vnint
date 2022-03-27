import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ProjectService } from 'src/app/services/project.service';
import { Timeframe } from 'src/app/interfaces/timeframe';
import { TimeframeService } from 'src/app/services/timeframe.service';
import { ErrorService } from 'src/app/services/error.service';
import { TranslateService } from '@ngx-translate/core';
import {AlertService} from "../../../../services/alert.service";
import {formatISO, parseISO} from "date-fns";

@Component({
  selector: 'app-create-project',
  templateUrl: './create-project.page.html',
  styleUrls: ['./create-project.page.scss'],
})
export class CreateProjectPage implements OnInit {
  createProjectForm: FormGroup;
  timeframes: Timeframe[] = [];
  isProcessed = false;

  constructor(private formBuilder: FormBuilder,
              private projectService: ProjectService,
              private router: Router,
              private timeframeService: TimeframeService,
              private errorService: ErrorService,
              private translate: TranslateService,
              private alertService: AlertService) { }

  ngOnInit() {
    this.createProjectForm = this.formBuilder.group({
      topic: ['', Validators.required],
      title: ['', Validators.required],
      image: null,
      description: ['', Validators.required],
      cost: [0, Validators.required],
      min_grade: [5, Validators.required],
      max_grade: [12, Validators.required],
      min_participants: [5, Validators.required],
      max_participants: [20, Validators.required],
    });
  }

  ionViewWillEnter () {
    this.isProcessed = false;
  }

  get errorControl() {
    return this.createProjectForm.controls;
  }

  changeFile(event) {
    const file = event.target.files[0];

    if (file) {
      this.createProjectForm.patchValue({
        image: file
      })
    }
  }

  createProject() {
    if (!this.isProcessed && this.createProjectForm.valid) {
      this.isProcessed = true;

      this.projectService.createProject(this.createProjectForm.value).subscribe({
        error: error => {
          if (error.error.message == 'The given data was invalid.') {
            for (const errorType in error.error.errors) {
              let errors: any = [];
              for (const errorMessage in error.error.errors[errorType]) {
                errors.push({[error.error.errors[errorType][errorMessage]]: true})
              }
              this.createProjectForm.controls[errorType].setErrors(errors)
            }

          } else if (error.error.message == 'alreadyHasProject') {
            this.alertService.alert("danger", this.translate.instant('ACTIONS.CREATE_PROJECT.title'), this.translate.instant('ACTIONS.CREATE_PROJECT.ERRORS.alreadyHasProject'), 'close')
          } else if (error.status == 413) {
            this.alertService.alert("danger", this.translate.instant('ACTIONS.CREATE_PROJECT.title'), this.translate.instant('ACTIONS.CREATE_PROJECT.ERRORS.uploadTooLarge'), 'cloud-upload');
          } else if (error.error.message == 'missingPermissions') {
            this.alertService.alert("danger", this.translate.instant('GENERAL.missingPermissions'), '', 'lock-closed');
          } else {
            this.errorService.errorOccurred.emit(error);
          }
          this.isProcessed = false;
        },
        next: response => {
          const resp: any = response;
          this.alertService.alert("success", this.translate.instant('ACTIONS.CREATE_PROJECT.title'), resp.message, "checkmark")
        },
        complete: () => {
          this.timeframes.forEach(timeframe => {
            this.timeframeService.createTimeframe(timeframe).subscribe({
              error: error => {
                this.errorService.errorOccurred.emit(error);
              }
            })
          })

          this.createProjectForm.reset();
          this.isProcessed = false;
          this.router.navigate(['/dashboard']);
        },
      });
    }
  }

  addTimeframe() {
    this.timeframes.push({date: null, from: null, until: null});
  }

  deleteTimeframe(timeframe) {
    this.timeframes = this.timeframes.filter(function(loop_timeframe) {return loop_timeframe != timeframe});
  }

}
