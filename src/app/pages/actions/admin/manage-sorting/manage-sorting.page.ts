import { Component, OnInit } from '@angular/core';
import {User} from "../../../../interfaces/user";
import {TranslateService} from "@ngx-translate/core";
import {UserService} from "../../../../services/user.service";
import {ErrorService} from "../../../../services/error.service";
import {ProjectService} from "../../../../services/project.service";
import {Project} from "../../../../interfaces/project";
import {AlertService} from "../../../../services/alert.service";

@Component({
  selector: 'app-manage-sorting',
  templateUrl: './manage-sorting.page.html',
  styleUrls: ['./manage-sorting.page.scss'],
})
export class ManageSortingPage implements OnInit {
  unsortedUsers: User[] = [];
  projects: Project[] = [];
  isProcessed: boolean = false;

  constructor(private translate: TranslateService,
              private userService: UserService,
              private errorService: ErrorService,
              private projectService: ProjectService,
              private alertService: AlertService) { }

  ngOnInit() {
    this.getUsers();
    this.getProjects();
  }

  getUsers() {
    this.userService.getUnsortedUsers().subscribe({
      error: error => {
        this.errorService.errorOccurred.emit(error);
      },
      next: response => {
        const resp: any = response;
        resp.users.forEach(user => {
          user.role_names = user.roles.map(role => role.name);
        });
        this.unsortedUsers = resp.users;
      },
    });
  }

  getProjects() {
    this.projectService.getProjectsDetailed().subscribe({
      error: error => {
        this.errorService.errorOccurred.emit(error);
      },
      next: response => {
        const resp: any = response;
        this.projects = resp.projects;
      },
    });
  }

  moveUser(user: User, projectId) {
    for(let i=0; i<this.projects.length; i++){
      let index = this.projects[i].participants.findIndex(loopUser => loopUser == user)
      index != -1 && this.projects[i].participants.splice(index, 1)
    }
    let indexInUnused = this.unsortedUsers.findIndex(loopUser => loopUser == user)
    indexInUnused != -1 && this.unsortedUsers.splice(indexInUnused, 1);
    if (projectId == 0) {
      this.unsortedUsers.push(user)
    } else {
      let project = this.projects.find(loopProject => loopProject.id == projectId)
      project.participants.push(user);
    }
  }

  reorderProjects(ev) {
    const itemMove = this.projects.splice(ev.detail.from, 1)[0];
    this.projects.splice(ev.detail.to, 0, itemMove);
    ev.detail.complete();
  }

  sortUsers() {
    if (this.isProcessed == false) {
      this.isProcessed = true;
      for(let j=0; j<this.unsortedUsers.length; j++) {
        this.userService.makeParticipant(this.unsortedUsers[j].id, 0).subscribe({
          error: error => {
            if (error.error.message == 'missingPermissions') {
              this.alertService.alert("danger", this.translate.instant('GENERAL.ERRORS.missingPermissions'), '', 'lock-closed');
            } else if (error.error.message == 'userCanNotBeConverted') {
              this.alertService.alert("danger", this.translate.instant('ACTIONS.MANAGE_USERS.title'), 'This user can not be enlisted as a participant.', 'lock-closed');
            } else {
              this.errorService.errorOccurred.emit(error);
            }
          },
          next: response => {
            const resp: any = response;
            this.alertService.alert("success", this.translate.instant('ACTIONS.MANAGE_USERS.title'), resp.message, "checkmark")
          },
        });
      }
      for(let i=0; i<this.projects.length; i++){
        for(let j=0; j<this.projects[i].participants.length; j++) {
          this.userService.makeParticipant(this.projects[i].participants[j].id, this.projects[i].id).subscribe({
            error: error => {
              if (error.error.message == 'missingPermissions') {
                this.alertService.alert("danger", this.translate.instant('GENERAL.ERRORS.missingPermissions'), '', 'lock-closed');
              } else if (error.error.message == 'userCanNotBeConverted') {
                this.alertService.alert("danger", this.translate.instant('ACTIONS.MANAGE_USERS.title'), 'This user can not be enlisted as a participant.', 'lock-closed');
              } else {
                this.errorService.errorOccurred.emit(error);
              }
            },
            next: response => {
              const resp: any = response;
              this.alertService.alert("success", this.translate.instant('ACTIONS.MANAGE_USERS.title'), resp.message, "checkmark")
            },
          });
        }
      }
      this.isProcessed = false;
    }
  }

}
