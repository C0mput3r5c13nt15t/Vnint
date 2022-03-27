import { Component, OnInit } from '@angular/core';
import { Validators, FormGroup, FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';
import { ErrorService } from 'src/app/services/error.service';
import {AlertService} from "../../../services/alert.service";
import {TranslateService} from "@ngx-translate/core";

@Component({
  selector: 'app-forgot-password',
  templateUrl: './forgot-password.page.html',
  styleUrls: ['./forgot-password.page.scss'],
})
export class ForgotPasswordPage implements OnInit {
  forgotPasswordForm: FormGroup;
  isProcessed = false;

  constructor(public formBuilder: FormBuilder,
              private auth: AuthService,
              private router: Router,
              private errorService: ErrorService,
              private alertService: AlertService,
              private translate: TranslateService) {
  }

  get errorControl() {
    return this.forgotPasswordForm.controls;
  }

  ngOnInit() {
    this.forgotPasswordForm = this.formBuilder.group({
      email: ['', Validators.required],
      fax: []
    });
  }

  ionViewWillEnter() {
    this.isProcessed = false;
    this.auth.authenticated().subscribe({
      error: error => {
        this.errorService.errorOccurred.emit(error);
      },
      next: response => {
        const resp: any = response;
        if (resp.authenticated == true) {
          this.auth.setLoggedIn = true;
          this.router.navigate(['/dashboard']);
        }
      },
    });
  }

  forgotPassword() {
    if (!this.isProcessed && !this.forgotPasswordForm.value.fax && this.forgotPasswordForm.valid) {
      this.isProcessed = true;
      if (!this.forgotPasswordForm.valid) {
        return false;
      } else {
        this.auth.sendForgotPasswordEmail(this.forgotPasswordForm.value).subscribe({
          error: error => {
            if (error.error.message == 'The given data was invalid.') {
              for (const errorType in error.error.errors) {
                const errors: any = [];
                for (const errorMessage in error.error.errors[errorType]) {
                  errors.push({[error.error.errors[errorType][errorMessage]]: true});
                }
                this.forgotPasswordForm.controls[errorType].setErrors(errors);
              }
            } else if (error.error.message == 'missingPermissions') {
              this.alertService.alert("danger", this.translate.instant('GENERAL.missingPermissions'), '', 'lock-closed');
            } else {
              this.errorService.errorOccurred.emit(error);
            }
            this.isProcessed = false;
          },
          next: response => {
            let resp: any = response;
            this.alertService.alert("success", this.translate.instant('FORGOT_PASSWORD.title'), resp.message, "send");
          },
          complete: () => {
            this.forgotPasswordForm.reset();
            this.auth.setLoggedIn = false;
            this.auth.setSessionExpired = false;
            this.isProcessed = false;
            this.router.navigate(['/login']);
          },
        });
      }
    }
  }

}
