import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';
import { ErrorService } from 'src/app/services/error.service';
import {TranslateService} from "@ngx-translate/core";
import {AlertService} from "../../../services/alert.service";

@Component({
  selector: 'app-reset-password',
  templateUrl: './reset-password.page.html',
  styleUrls: ['./reset-password.page.scss'],
})
export class ResetPasswordPage implements OnInit {
  resetPasswordForm: FormGroup;
  isProcessed = false;

  constructor(public formBuilder: FormBuilder,
              private activatedRoute: ActivatedRoute,
              private auth: AuthService,
              private router: Router,
              private errorService: ErrorService,
              private translate: TranslateService,
              private alertService: AlertService) { }

  ngOnInit() {
    this.resetPasswordForm = this.formBuilder.group({
      email: ['', Validators.required],
      password: ['', Validators.required],
      password_confirmation: ['', Validators.required],
      token: ['', Validators.required],
      fax: ['']
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

    this.activatedRoute.paramMap.subscribe(paramMap => {
      if (paramMap.has('ResetToken')) {
        this.resetPasswordForm.patchValue({
          token: this.activatedRoute.snapshot.paramMap.get('ResetToken')
        });
      } else {
        this.router.navigate(['/login']);
      }
    });
  }

  get errorControl() {
    return this.resetPasswordForm.controls;
  }

  keyPressEventHandler(key) {
    if (key == "Enter" && !this.isProcessed) {
      this.resetPassword();
    }
  }

  resetPassword() {
    if (!this.isProcessed && !this.resetPasswordForm.value.fax && this.resetPasswordForm.valid) {
      this.isProcessed = true;
      if (!this.resetPasswordForm.valid) {
        return false;
      } else {
        this.auth.resetPassword(this.resetPasswordForm.value).subscribe({
          error: error => {
            if (error.error.message == 'The given data was invalid.') {
              for (const errorType in error.error.errors) {
                let errors: any = [];
                for (const errorMessage in error.error.errors[errorType]) {
                  errors.push({[error.error.errors[errorType][errorMessage]]: true})
                }
                this.resetPasswordForm.controls[errorType].setErrors(errors)
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
            this.alertService.alert("success", this.translate.instant('RESET_PASSWORD.title'), resp.message, "checkmark");
          },
          complete: () => {
            this.resetPasswordForm.reset();
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
