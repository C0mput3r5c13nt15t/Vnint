import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup} from '@angular/forms';
import {User} from 'src/app/interfaces/user';
import {ErrorService} from 'src/app/services/error.service';
import {RolesAndPermissionsService} from 'src/app/services/roles-and-permissions.service';
import {UserService} from 'src/app/services/user.service';
import {TranslateService} from "@ngx-translate/core";
import {AlertController} from "@ionic/angular";
import {AlertService} from "../../../../services/alert.service";

@Component({
  selector: 'app-manage-users',
  templateUrl: './manage-users.page.html',
  styleUrls: ['./manage-users.page.scss'],
})
export class ManageUsersPage implements OnInit {
  searchUsersForm: FormGroup;
  users: User[] = [];
  filteredUsers: User[] = [];
  role_names: string[] = [];

  constructor(private userService: UserService,
              private formBuilder: FormBuilder,
              private translate: TranslateService,
              private alertController: AlertController,
              private alertService: AlertService,
              private rolesAndPermissionsService: RolesAndPermissionsService,
              private errorService: ErrorService) { }

  ngOnInit() {
    this.searchUsersForm = this.formBuilder.group({
      roles: [''],
      email: [''],
    });
    this.getRoles();
  }

  ionViewWillEnter() {
    this.getUsers();
    this.getRoles();
  }

  getRoles() {
    this.rolesAndPermissionsService.getRoles().subscribe({
      error: error => {
        this.errorService.errorOccurred.emit(error);
      },
      next: response => {
        const resp: any = response;
        this.role_names = [];
        this.role_names = resp.roles.map(role => role.name)
        this.searchUsersForm.patchValue({
          roles: resp.roles.map(role => role.name),
        });
      }
    });
  }

  getUsers() {
    this.userService.getUsers().subscribe({
      error: error => {
        this.errorService.errorOccurred.emit(error);
      },
      next: response => {
        const resp: any = response;
        resp.users.forEach(user => {
          user.role_names = user.roles.map(role => role.name);
        });
        this.users = resp.users;
        this.filteredUsers = resp.users;
      },
    });
  }

  searchUsers() {
    this.filteredUsers = [];
    this.users.forEach(user => {
      if (this.arrayContainsArray(this.searchUsersForm.value.roles, user.role_names) && this.similar(user.email, this.searchUsersForm.value.email) > 0.3) {
        this.filteredUsers.push(user);
      }
    });
  }

  similar(email, input) {
    if (!input) {
      return 1;
    }

    let equivalency = 0;
    const minLength = (email.length > input.length) ? input.length : email.length;
    const maxLength = (email.length < input.length) ? input.length : email.length;
    for(let i = 0; i < minLength; i++) {
        if(email[i] == input[i]) {
            equivalency++;
        }
    }
    return equivalency / maxLength;
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

  async convertToGuestAttendant(id: number) {
    const alert = await this.alertController.create({
      header: this.translate.instant('ACTIONS.MANAGE_USERS.CONVERT_TO_GUEST_ATTENDANT_POPUP.alertHeader'),
      message: this.translate.instant('ACTIONS.MANAGE_USERS.CONVERT_TO_GUEST_ATTENDANT_POPUP.alertText'),
      buttons: [
        {
          cssClass: 'cancel-text',
          text: this.translate.instant('GENERAL.POPUPS.cancel'),
          role: 'cancel',
        }, {
          text: this.translate.instant('ACTIONS.MANAGE_USERS.CONVERT_TO_GUEST_ATTENDANT_POPUP.convertButton'),
          handler: () => {
            this.userService.convertToGuestAttendant(id).subscribe({
              error: error => {
                if (error.error.message == 'missingPermissions') {
                  this.alertService.alert("danger", this.translate.instant('GENERAL.ERRORS.missingPermissions'), '', 'lock-closed');
                } else if (error.error.message == 'userCanNotBeConverted') {
                  this.alertService.alert("danger", this.translate.instant('ACTIONS.MANAGE_USERS.title'), 'This user can not be converted to guestAttendant', 'lock-closed');
                } else {
                  this.errorService.errorOccurred.emit(error);
                }
              },
              next: response => {
                const resp: any = response;
                this.alertService.alert("success", this.translate.instant('ACTIONS.MANAGE_USERS.title'), resp.message, "checkmark")
              },
              complete: () => {
                this.getUsers();
              },
            });
          }
        }
      ]
    });
    await alert.present();
  }

}
