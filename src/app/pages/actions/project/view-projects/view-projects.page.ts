import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup} from '@angular/forms';
import {Project} from 'src/app/interfaces/project';
import {ProjectService} from 'src/app/services/project.service';
import {Router} from '@angular/router';
import {AuthService} from 'src/app/services/auth.service';
import {User} from 'src/app/interfaces/user';
import {Preference} from 'src/app/interfaces/preference';
import {PreferencesService} from 'src/app/services/preference.service';
import {ErrorService} from 'src/app/services/error.service';
import {TranslateService} from "@ngx-translate/core";
import {AlertService} from "../../../../services/alert.service";

@Component({
  selector: 'app-view-projects',
  templateUrl: './view-projects.page.html',
  styleUrls: ['./view-projects.page.scss'],
})
export class ViewProjectsPage implements OnInit {
  searchProjectForm: FormGroup;
  projects: Project[] = [];
  user: User;
  permissions: string[] = [];
  preference_ids: Number[] = [];
  preferences: Preference[];
  filteredProjects: Project[] = [];

  constructor(private projectService: ProjectService,
              private formBuilder: FormBuilder,
              private auth: AuthService,
              private router: Router,
              private preferencesService: PreferencesService,
              private errorService: ErrorService,
              private translate: TranslateService,
              private alertService: AlertService) { }

  ngOnInit() {
    this.searchProjectForm = this.formBuilder.group({
      topic: [['sports', 'nature', 'games', 'other']],
      title: [''],
    });
  }

  ionViewWillEnter() {
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
    this.getProjects();
  }

  searchProject() {
    this.filteredProjects = [];
    this.projects.forEach(project => {
      if (this.searchProjectForm.value.topic.includes(project.topic) && this.similar(project.title, this.searchProjectForm.value.title) > 0.3) {
        this.filteredProjects.push(project);
      }
    });
  }

  similar(title, input) {
    if (!input) {
      return 1;
    }

    let equivalency = 0;
    const minLength = (title.length > input.length) ? input.length : title.length;
    const maxLength = (title.length < input.length) ? input.length : title.length;
    for(let i = 0; i < minLength; i++) {
        if(title[i] == input[i]) {
            equivalency++;
        }
    }
    return equivalency / maxLength;
  }

  getProjects() {
    this.projectService.getProjects().subscribe({
      error: error => {
        this.errorService.errorOccurred.emit(error);
      },
      next: response => {
        const resp: any = response;
        this.projects = resp.projects;
        this.filteredProjects = resp.projects;
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

}
