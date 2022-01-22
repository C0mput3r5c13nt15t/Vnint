import { Component, OnInit } from '@angular/core';
import { Validators, FormGroup, FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';
import { ErrorService } from 'src/app/services/error.service';

@Component({
  selector: 'app-forgot-password',
  templateUrl: './forgot-password.page.html',
  styleUrls: ['./forgot-password.page.scss'],
})
export class ForgotPasswordPage implements OnInit {
  success: any;
  forgotPasswordForm: FormGroup;
  isProcessed = false;

  constructor(public formBuilder: FormBuilder,
              private auth: AuthService,
              private router: Router,
              private errorService: ErrorService) { }

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
            } else {
              this.errorService.errorOccurred.emit(error);
            }
            this.isProcessed = false;
          },
          next: response => {
            this.success = response;
          },
          complete: () => {
            this.forgotPasswordForm.reset();
            this.auth.setLoggedIn = false;
            this.auth.setSessionExpired = false;
            this.isProcessed = false;
          },
        });
      }
    }
  }

}
