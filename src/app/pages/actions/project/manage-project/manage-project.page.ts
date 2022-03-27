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

  constructor(private projectService: ProjectService,
              private router: Router,
              private errorService: ErrorService,
              private auth: AuthService,
              private preferencesService: PreferencesService,
              private alertService: AlertService,
              private translate: TranslateService) { }

  ngOnInit() {
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
                this.alertService.alert("danger", this.translate.instant('GENERAL.missingPermissions'), '', 'lock-closed');
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
}
