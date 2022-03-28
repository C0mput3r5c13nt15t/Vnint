import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Project } from 'src/app/interfaces/project';
import { ProjectService } from 'src/app/services/project.service';
import { ErrorService } from 'src/app/services/error.service';
import {User} from "../../../../interfaces/user";
import {Preference} from "../../../../interfaces/preference";
import {AuthService} from "../../../../services/auth.service";
import {PreferencesService} from "../../../../services/preference.service";
import {AlertService} from "../../../../services/alert.service";
import {TranslateService} from "@ngx-translate/core";
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {AlertController} from "@ionic/angular";

@Component({
  selector: 'app-manage-project',
  templateUrl: './manage-project.page.html',
  styleUrls: ['./manage-project.page.scss'],
})
export class ManageProjectPage implements OnInit {
  project: Project;
  user: User;
  permissions: string[] = [];
  preference_ids: Number[] = [];
  preferences: Preference[];
  addAssistentForm: FormGroup;
  isProcessed = false;

  constructor(private formBuilder: FormBuilder,
              private projectService: ProjectService,
              private router: Router,
              private alertController: AlertController,
              private errorService: ErrorService,
              private auth: AuthService,
              private preferencesService: PreferencesService,
              private alertService: AlertService,
              private translate: TranslateService) { }

  ngOnInit() {
    this.addAssistentForm = this.formBuilder.group({
      attendant_email: ['', Validators.required],
      fax: []
    });
  }

  get errorControl() {
    return this.addAssistentForm.controls;
  }

  ionViewWillEnter() {
    this.getProject();
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
          this.user = resp.user;

          this.auth.permissions().subscribe({
            error: error => {
              if (error.error.message == 'missingPermissions') {
                this.alertService.alert("danger", this.translate.instant('GENERAL.ERRORS.missingPermissions'), '', 'lock-closed');
              } else {
                this.errorService.errorOccurred.emit(error);
              }
            },
            next: response => {
              const resp: any = response;
              this.permissions = [];
              this.permissions = resp.permissions;

              if (this.permissions.includes('preferences.show_associated')) {
                this.getPreferences();
              }
            },
          });
        }
      },
    });
  }

  getPreferences() {
    this.preferencesService.getAssociatedPreferences().subscribe({
      error: error => {
        this.errorService.errorOccurred.emit(error);
      },
      next: response => {
        const resp: any = response;
        this.preferences = resp.preferences;
        this.preference_ids = [];
        resp.preferences.forEach(preference => {
          this.preference_ids.push(preference.project_id);
        });
      },
    });
  }

  getProject() {
    this.projectService.getAssociatedProject().subscribe({
      error: error => {
        this.errorService.errorOccurred.emit(error);
      },
      next: response => {
        const resp: any = response;
        this.project = resp.project;
      },
    });
  }

  deleteProject() {
    this.projectService.deleteProject(this.project.id).subscribe({
      error: error => {
        this.errorService.errorOccurred.emit(error);
      },
      next: () => { },
      complete: () => {
        this.router.navigate(['/dashboard']);
      }
    });
  }

  addAssistent() {
    this.isProcessed = true;
    if (!this.addAssistentForm.value.fax && this.addAssistentForm.valid) {
      this.projectService.promoteAssistant({attendant_email: this.addAssistentForm.value.attendant_email}).subscribe({
        error: error => {
          if (error.error.message == 'The given data was invalid.') {
            for (const errorType in error.error.errors) {
              const errors: any = [];
              for (const errorMessage in error.error.errors[errorType]) {
                errors.push({[error.error.errors[errorType][errorMessage]]: true});
              }
              console.log(this.addAssistentForm.controls)
              this.addAssistentForm.controls[errorType].setErrors(errors);
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
          this.alertService.alert("success", this.translate.instant('ACTIONS.MANAGE_FRIENDS.title'), resp.message, "checkmark")
        },
        complete: () => {
          this.addAssistentForm.reset()
          this.isProcessed = false;
          this.getProject();
        },
      });
    }
  }

  async removeAssistent(id: number) {
    const alert = await this.alertController.create({
      header: this.translate.instant('ACTIONS.MANAGE_PROJECT.REMOVE_ASSISTANT_POPUP.alertHeader'),
      message: this.translate.instant('ACTIONS.MANAGE_PROJECT.REMOVE_ASSISTANT_POPUP.alertText'),
      buttons: [
        {
          cssClass: 'cancel-text',
          text: this.translate.instant('GENERAL.POPUPS.cancel'),
          role: 'cancel',
        }, {
          text: this.translate.instant('ACTIONS.MANAGE_PROJECT.REMOVE_ASSISTANT_POPUP.removeButton'),
          handler: () => {
            this.projectService.demoteAssistant(id).subscribe({
              error: error => {
                if (error.error.message == 'missingPermissions') {
                  this.alertService.alert("danger", this.translate.instant('GENERAL.ERRORS.missingPermissions'), '', 'lock-closed');
                } else {
                  this.errorService.errorOccurred.emit(error);
                }
              },
              next: response => {
                const resp: any = response;
                this.alertService.alert("success", this.translate.instant('ACTIONS.MANAGE_PROJECT.title'), resp.message, "checkmark")
              },
              complete: () => {
                this.getProject();
              },
            });
          }
        }
      ]
    });
    await alert.present();
  }
}
