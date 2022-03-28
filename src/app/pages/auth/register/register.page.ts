import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';
import { ErrorService } from 'src/app/services/error.service';
import {TranslateService} from "@ngx-translate/core";
import {AlertService} from "../../../services/alert.service";

@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
})
export class RegisterPage implements OnInit {
  registerForm: FormGroup;
  isProcessed = false;

  constructor(public formBuilder: FormBuilder,
              private auth: AuthService,
              private router: Router,
              private errorService: ErrorService,
              private translate: TranslateService,
              private alertService: AlertService) { }

  ngOnInit() {
    this.registerForm = this.formBuilder.group({
      name: ['', Validators.required],
      email: ['', Validators.required],
      password: ['', Validators.required],
      password_confirmation: ['', Validators.required],
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

  get errorControl() {
    return this.registerForm.controls;
  }

  keyPressEventHandler(key) {
    if (key == "Enter" && !this.isProcessed) {
      this.register();
    }
  }

  register() {
    if (!this.isProcessed && !this.registerForm.value.fax && this.registerForm.valid) {
      this.isProcessed = true;
      if (!this.registerForm.valid) {
        return false;
      } else {
        this.auth.register(this.registerForm.value).subscribe({
          error: error => {
            if (error.error.message == 'The given data was invalid.') {
              for (const errorType in error.error.errors) {
                let errors: any = [];
                for (const errorMessage in error.error.errors[errorType]) {
                  errors.push({[error.error.errors[errorType][errorMessage]]: true})
                }
                this.registerForm.controls[errorType].setErrors(errors)
              }
            } else if (error.error.message == 'missingPermissions') {
              this.alertService.alert("danger", this.translate.instant('GENERAL.ERRORS.missingPermissions'), '', 'lock-closed');
            } else {
              this.errorService.errorOccurred.emit(error);
            }
            this.isProcessed = false;
          },
          next: () => {},
          complete: () => {
            this.registerForm.reset();
            this.auth.setLoggedIn = true;
            this.router.navigate(['/dashboard']);
            this.isProcessed = false;
            this.auth.authChanged.emit('register');
          },
        });
      }
    }
  }
}
