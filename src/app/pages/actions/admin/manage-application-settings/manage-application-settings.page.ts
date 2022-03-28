import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {ApplicationSettingsService} from "../../../../services/application-settings.service";
import {ErrorService} from "../../../../services/error.service";
import {AlertService} from "../../../../services/alert.service";
import {TranslateService} from "@ngx-translate/core";
import {AuthService} from "../../../../services/auth.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-manage-application-settings',
  templateUrl: './manage-application-settings.page.html',
  styleUrls: ['./manage-application-settings.page.scss'],
})
export class ManageApplicationSettingsPage implements OnInit {
  updateApplicationSettingsForm: FormGroup;
  isProcessed = false;
  permissions: string[] = [];
  eventPermissions: string[] = [];

  constructor(private formBuilder: FormBuilder,
              private errorService: ErrorService,
              private translate: TranslateService,
              private alertService: AlertService,
              private auth: AuthService,
              private router: Router,
              private applicationSettingsService: ApplicationSettingsService) { }

  ngOnInit() {
    this.auth.authenticated().subscribe({
      error: () => {
        this.auth.setLoggedIn = false;
        this.auth.setSessionExpired = true;
        this.router.navigate(['/login']);
      },
      next: response => {
        const resp: any = response;
        if (resp.authenticated == false) {
          this.auth.setLoggedIn = false;
          this.auth.setSessionExpired = true;
          this.router.navigate(['/login']);
        } else {
          this.getPermissions();
          this.getEventPermissions();
        }
      },
    });
    this.updateApplicationSettingsForm = this.formBuilder.group({
      non_guest_email_domain: ['@s.school.com', Validators.required],
      max_friends: [2, Validators.required],
      min_preferences: [3, Validators.required],
      max_preferences: [5, Validators.required],
    });
    this.getApplicationSettings()
  }

  getApplicationSettings() {
    this.applicationSettingsService.getApplicationSettings().subscribe({
      error: error => {
        this.errorService.errorOccurred.emit(error);
      },
      next: response => {
        const resp: any = response;
        this.updateApplicationSettingsForm.patchValue(resp.settings)
      },
    });
  }

  get errorControl() {
    return this.updateApplicationSettingsForm.controls;
  }

  updateApplicationSettings() {
    if (!this.isProcessed && this.updateApplicationSettingsForm.valid) {
      this.isProcessed = true;
      this.applicationSettingsService.updateEvent(this.updateApplicationSettingsForm.value).subscribe({
        error: error => {
          if (error.error.message == 'The given data was invalid.') {
            for (const errorType in error.error.errors) {
              const errors: any = [];
              for (const errorMessage in error.error.errors[errorType]) {
                errors.push({[error.error.errors[errorType][errorMessage]]: true});
              }
              this.updateApplicationSettingsForm.controls[errorType].setErrors(errors);
            }
          } else if (error.error.message == 'missingPermissions') {
            this.alertService.alert("danger", this.translate.instant('GENERAL.ERRORS.missingPermissions'), '', 'lock-closed');
          } else {
            this.errorService.errorOccurred.emit(error);
          }
          this.isProcessed = false;
        },
        next: response => {
          const resp: any = response;
          this.alertService.alert("success", this.translate.instant('ACTIONS.MANAGE_SCHEDULE.title'), resp.message, "checkmark")
        },
        complete: () => {
          this.updateApplicationSettingsForm.reset();
          this.isProcessed = false;
          this.getApplicationSettings();
        },
      });
    }
  }

  getPermissions() {
    this.auth.permissions().subscribe({
      error: error => {
        this.errorService.errorOccurred.emit(error);
      },
      next: response => {
        const resp: any = response;
        this.permissions = resp.permissions;
      },
    });
  }

  getEventPermissions() {
    this.auth.eventPermissions().subscribe({
      error: error => {
        this.errorService.errorOccurred.emit(error);
      },
      next: response => {
        const resp: any = response;
        this.eventPermissions = resp.permissions;
      },
    });
  }

  /**
   * Returns true if the first specified array contains all elements
   * from the second one. false otherwise.
   *
   * @param {array} superset
   * @param {array} subset
   *
   * @returns {boolean}
   */
  arrayContainsArray (superset, subset) {
    return subset.every(function (value) {
      return (superset.includes(value));
    });
  }
}
