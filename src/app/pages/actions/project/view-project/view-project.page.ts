import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Project } from 'src/app/interfaces/project';
import { User } from 'src/app/interfaces/user';
import { AuthService } from 'src/app/services/auth.service';
import { PreferencesService } from 'src/app/services/preference.service';
import { ProjectService } from 'src/app/services/project.service';
import { Preference } from 'src/app/interfaces/preference';
import { ErrorService } from 'src/app/services/error.service';

@Component({
  selector: 'app-view-project',
  templateUrl: './view-project.page.html',
  styleUrls: ['./view-project.page.scss'],
})
export class ViewProjectPage implements OnInit {
  project: Project;
  user: User;
  permissions: string[] = [];
  preference_ids: Number[] = [];
  preferences: Preference[];

  constructor(private activatedRoute: ActivatedRoute,
              private router: Router,
              private projectService: ProjectService,
              private preferencesService: PreferencesService,
              private auth: AuthService,
              private errorService: ErrorService) { }

  ngOnInit() {
  }

  ionViewWillEnter() {
    this.activatedRoute.paramMap.subscribe(paramMap => {
      if (paramMap.has('projectId')) {
        this.getProject(Number(this.activatedRoute.snapshot.paramMap.get('projectId')));
      } else {
        this.router.navigate(['/view projects']);
      }
    });
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
              this.errorService.errorOccurred.emit(error);
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

  getProject(projectId) {
    this.projectService.getProject(projectId).subscribe({
      error: error => {
        this.errorService.errorOccurred.emit(error);
      },
      next: response => {
        const resp: any = response;
        this.project = resp.project;
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

  addProjectToPreferences() {
    this.preferencesService.createPreference(this.project.id).subscribe({
      error: error => {
        this.errorService.errorOccurred.emit(error);
      },
      next: () => { },
      complete: () => {
        this.getPreferences();
      }
    });
  }

  removeProjectFromPreferences(projectId) {
    let preferenceId: number;
    const preference = this.preferences.filter(function(preference) {return preference.project_id == projectId})[0];
    preferenceId = preference.id;
    this.preferencesService.deletePreference(preferenceId).subscribe({
      error: error => {
        this.errorService.errorOccurred.emit(error);
      },
      next: () => { },
      complete: () => {
        this.getPreferences();
      }
    });
  }

  toggleAuthorized() {
    this.projectService.toggleAuthorizedOfProject(this.project.id).subscribe({
      error: error => {
        this.errorService.errorOccurred.emit(error);
      },
      next: () => { },
      complete: () => {
        this.getProject(this.project.id);
      }
    });
  }

  deleteProject() {
    this.projectService.deleteProject(this.project.id).subscribe({
      error: error => {
        this.errorService.errorOccurred.emit(error);
      },
      next: () => {
        this.router.navigate(['/view-projects']);
      },
    });
  }

}
