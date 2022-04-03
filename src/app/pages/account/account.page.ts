import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AlertController } from '@ionic/angular';
import { AuthService } from 'src/app/services/auth.service'
import { TranslateService } from '@ngx-translate/core';
import { User } from 'src/app/interfaces/user';
import { ErrorService } from 'src/app/services/error.service';
import {AlertService} from "../../services/alert.service";

@Component({
  selector: 'app-account',
  templateUrl: './account.page.html',
  styleUrls: ['./account.page.scss'],
})
export class AccountPage implements OnInit {
  updateProfileForm: FormGroup;
  changePasswordForm: FormGroup;
  isProcessed = false;

  user: User = {
    id: 0,
    name: 'Not yet loaded',
    email: 'Not yet loaded',
    email_verified_at: null,
    project_id: 0,
    created_at: null,
    updated_at: null,
  };

  constructor(public formBuilder: FormBuilder,
              private auth: AuthService,
              private alertController: AlertController,
              private translate: TranslateService,
              private errorService: ErrorService,
              private alertService: AlertService) { }

  ngOnInit() {
    this.updateProfileForm = this.formBuilder.group({
      name: ['', Validators.required],
      email: ['', Validators.required],
      fax: ['']
    });
    this.changePasswordForm = this.formBuilder.group({
      password: ['', Validators.required],
      password_confirmation: ['', Validators.required],
      current_password: ['', Validators.required],
      fax: ['']
    });
  }

  ionViewWillEnter() {
    this.isProcessed = false;
    this.getUser();
  }

  get updateProfileErrorControl() {
    return this.updateProfileForm.controls;
  }

  get changePasswordErrorControl() {
    return this.changePasswordForm.controls;
  }

  getUser() {
    this.auth.user().subscribe({
      error: error => {
        this.errorService.errorOccurred.emit(error);
      },
      next: response => {
        const resp: any = response;
        this.user = JSON.parse(JSON.stringify(resp.user));
        this.updateProfileForm.patchValue(resp.user);
      },
    });
  }

  updateProfile() {
    if (!this.isProcessed && !this.updateProfileForm.value.fax && !(this.user.name == this.updateProfileForm.value.name && this.user.email == this.updateProfileForm.value.email)) {
      this.isProcessed = true;
      if (!this.updateProfileForm.valid) {
        return false;
      } else {
        this.auth.updateProfile(this.updateProfileForm.value).subscribe({
          error: error => {
            if (error.error.message == 'The given data was invalid.') {
              for (const errorType in error.error.errors) {
                let errors: any = [];
                for (const errorMessage in error.error.errors[errorType]) {
                  errors.push({[error.error.errors[errorType][errorMessage]]: true})
                }
                this.updateProfileForm.controls[errorType].setErrors(errors)
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
            this.updateProfileForm.reset();
            this.getUser();
            this.isProcessed = false;
            this.auth.authChanged.emit('account updated');
          },
        });
      }
    }
  }

  changePassword() {
    if (!this.isProcessed && !this.changePasswordForm.value.fax) {
      this.isProcessed = true;
      if (!this.changePasswordForm.valid) {
        return false;
      } else {
        this.auth.changePassword(this.changePasswordForm.value).subscribe({
          error: error => {
            if (error.error.message == 'The given data was invalid.') {
              for (const errorType in error.error.errors) {
                let errors: any = [];
                for (const errorMessage in error.error.errors[errorType]) {
                  errors.push({[error.error.errors[errorType][errorMessage]]: true})
                }
                this.changePasswordForm.controls[errorType].setErrors(errors)
              }
            } else if (error.error.message == 'missingPermissions') {
              this.alertService.alert("danger", this.translate.instant('GENERAL.ERRORS.missingPermissions'), '', 'lock-closed');
            } else {
              this.errorService.errorOccurred.emit(error);
            }
            this.isProcessed = false;
          },
          next: response => {
            let resp: any = response;
            this.alertService.alert("success", this.translate.instant('ACCOUNT.CHANGE_PASSWORD.title'), resp.message, 'checkmark')
          },
          complete: () => {
            this.changePasswordForm.reset();
            this.isProcessed = false;
          },
        });
      }
    }
  }

  async deleteAccount() {
    const alert = await this.alertController.create({
      header: this.translate.instant('ACCOUNT.DELETE_ACCOUNT.INPUT.alertHeader'),
      message: this.translate.instant('ACCOUNT.DELETE_ACCOUNT.INPUT.alertText'),
      buttons: [
        {
          cssClass: 'cancel-text',
          text: this.translate.instant('GENERAL.POPUPS.cancel'),
          role: 'cancel',
        }, {
          text: this.translate.instant('ACCOUNT.DELETE_ACCOUNT.INPUT.deleteButton'),
          handler: () => {
            console.log('Confirm Okay');
            console.log('Delete account ... (not yet implemented)');
          }
        }
      ]
    });
    await alert.present();
  }
}
