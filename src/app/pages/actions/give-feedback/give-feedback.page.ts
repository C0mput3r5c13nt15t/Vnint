import { Component, OnInit } from '@angular/core';
import { Validators, FormGroup, FormBuilder } from '@angular/forms';
import { FeedbackService } from 'src/app/services/feedback.service';
import { ErrorService } from 'src/app/services/error.service';
import {AlertService} from "../../../services/alert.service";
import {TranslateService} from "@ngx-translate/core";
import {Router} from "@angular/router";

@Component({
  selector: 'app-give-feedback',
  templateUrl: './give-feedback.page.html',
  styleUrls: ['./give-feedback.page.scss'],
})
export class GiveFeedbackPage implements OnInit {
  success = false;
  giveFeedbackForm: FormGroup;
  isProcessed = false;

  constructor(private feedbackService: FeedbackService,
              private formBuilder: FormBuilder,
              private errorService: ErrorService,
              private alertService: AlertService,
              private translateService: TranslateService,
              private router: Router) { }

  ngOnInit() {
    this.giveFeedbackForm = this.formBuilder.group({
      type: ['general', Validators.required],
      short_description: ['', Validators.required],
      full_description: ['', Validators.required],
      fax: [false]
    });
  }

  ionViewWillEnter() {
    this.isProcessed = false;
  }

  get errorControl() {
    return this.giveFeedbackForm.controls;
  }

  giveFeedback() {
    if (!this.isProcessed && !this.giveFeedbackForm.value.fax && this.giveFeedbackForm.valid) {
      this.isProcessed = true;
      this.feedbackService.giveFeedback(this.giveFeedbackForm.value).subscribe({
        error: error => {
          if (error.error.message == 'The given data was invalid.') {
            for (const errorType in error.error.errors) {
              let errors: any = [];
              for (const errorMessage in error.error.errors[errorType]) {
                errors.push({[error.error.errors[errorType][errorMessage]]: true})
              }
              this.giveFeedbackForm.controls[errorType].setErrors(errors)
            }
          } else {
            this.errorService.errorOccurred.emit(error);
          }
          this.isProcessed = false;
        },
        next: response => {
          const resp: any = response;
          this.alertService.alert("success", this.translateService.instant('ACTIONS.GIVE_FEEDBACK.SUCCESS.thankYou'), resp.message, "heart")
        },
        complete: () => {
          this.success = true;
          this.giveFeedbackForm.reset();
          this.isProcessed = false;
          this.router.navigate(['/dashboard']);
        },
      });
    }
  }

}
