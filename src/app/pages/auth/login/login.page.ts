import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Validators, FormGroup, FormBuilder } from '@angular/forms';
import { AuthService } from 'src/app/services/auth.service';
import { ErrorService } from 'src/app/services/error.service';
import {TranslateService} from "@ngx-translate/core";
import {AlertService} from "../../../services/alert.service";

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  loginForm: FormGroup;
  isProcessed = false;
  sessionExpired = false;

  constructor(public formBuilder: FormBuilder,
              private auth: AuthService,
              private router: Router,
              private errorService: ErrorService,
              private translate: TranslateService,
              private alertService: AlertService) { }

  ngOnInit() {
    this.loginForm = this.formBuilder.group({
      email: ['', Validators.required],
      password: ['', Validators.required],
      fax: []
    });
  }

  get errorControl() {
    return this.loginForm.controls;
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
    this.sessionExpired = this.auth.getSessionExpired;
  }

  keyPressEventHandler(key) {
    if (key == 'Enter' && !this.isProcessed) {
      this.login();
    }
  }

  public login() {
    if (!this.isProcessed && !this.loginForm.value.fax && this.loginForm.valid) {
      this.isProcessed = true;
      if (!this.loginForm.valid) {
        return false;
      } else {
        this.auth.login(this.loginForm.value).subscribe({
          error: error => {
            if (error.error.message == 'The given data was invalid.') {
              for (const errorType in error.error.errors) {
                const errors: any = [];
                for (const errorMessage in error.error.errors[errorType]) {
                  errors.push({[error.error.errors[errorType][errorMessage]]: true});
                }
                this.loginForm.controls[errorType].setErrors(errors);
              }
            } else if (error.error.message == 'missingPermissions') {
              this.alertService.alert("danger", this.translate.instant('GENERAL.ERRORS.missingPermissions'), '', 'lock-closed');
            } else {
              this.errorService.errorOccurred.emit(error);
            }
            this.isProcessed = false;
            this.loginForm.patchValue({
              'password': ''
            })
          },
          next: () => {},
          complete: () => {
            this.loginForm.reset();
            this.auth.setLoggedIn = true;
            this.auth.setSessionExpired = false;
            this.router.navigate(['/dashboard']);
            this.isProcessed = false;
            this.auth.authChanged.emit('login');
          },
        });
      }
    }
  }

}
