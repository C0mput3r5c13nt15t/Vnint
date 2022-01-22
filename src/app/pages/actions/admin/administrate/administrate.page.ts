import { Component, OnInit } from '@angular/core';
import { AlertController } from '@ionic/angular';
import { TranslateService } from '@ngx-translate/core';
import { trigger, state, style, animate, transition } from '@angular/animations';
import { RolesAndPermissionsService } from 'src/app/services/roles-and-permissions.service';
import { Role } from 'src/app/interfaces/role';
import { Permission } from 'src/app/interfaces/permission';
import { ErrorService } from 'src/app/services/error.service';

@Component({
  selector: 'app-administrate',
  templateUrl: './administrate.page.html',
  styleUrls: ['./administrate.page.scss'],
  animations: [
    trigger('openClose', [
      state('open', style({
        opacity: 1,
      })),
      state('closed', style({
        opacity: 0,
        height: '0px',
      })),
      transition('* => closed', [
        animate('0.3s')
      ]),
      transition('* => open', [
        animate('0.3s')
      ]),
    ]),
  ],
})
export class AdministratePage implements OnInit {
  roles: Role[] = [];
  permissions: Permission[] = [];

  constructor(private translate: TranslateService,
              private alertCtrl: AlertController,
              private rolesAndPermissionsService: RolesAndPermissionsService,
              private alertController: AlertController,
              private errorService: ErrorService) { }

  ngOnInit() {
  }

  ionViewWillEnter() {
    this.getPermissions();
    this.getRoles();
  }

  getRoles() {
    this.rolesAndPermissionsService.getRoles().subscribe({
      error: error => {
        this.errorService.errorOccurred.emit(error);
      },
      next: response => {
        const resp: any = response;
        resp.roles.forEach(role => {
          role.permissions_names = role.permissions.map(permission => permission.name);
          role.show_permissions = false;
        });
        this.roles = resp.roles;
      }
    });
  }

  getPermissions() {
    this.rolesAndPermissionsService.getPermissions().subscribe({
      error: error => {
        this.errorService.errorOccurred.emit(error);
      },
      next: response => {
        const resp: any = response;
        this.permissions = resp.permissions;
      },
    });
  }

  addRole() {
    let alert = this.alertCtrl.create({
      header: this.translate.instant('ACTIONS.ADMINISTRATE.ADD_ROLE_ALERT.header'),
      backdropDismiss: true,
      inputs: [
        {
          name: 'name',
          placeholder: this.translate.instant('ACTIONS.ADMINISTRATE.ADD_ROLE_ALERT.name'),
        }
      ],
      buttons: [
        {
          cssClass: 'cancel-text',
          text: this.translate.instant('GENERAL.POPUPS.cancel'),
          role: 'cancel'
        },
        {
          text: this.translate.instant('ACTIONS.ADMINISTRATE.ADD_ROLE_ALERT.addButton'),
          handler: input => {
            this.rolesAndPermissionsService.createRole({name: input.name}).subscribe({
              error: error => {
                if (error.error.message == 'The given data was invalid.') {
                  let errors: any = [];
                  for (const errorType in error.error.errors) {
                    for (const errorMessage in error.error.errors[errorType]) {
                      errors.push(error.error.errors[errorType][errorMessage] + '\n');
                    }
                  }
                } else {
                  this.errorService.errorOccurred.emit(error);
                }
              },
              next: response => {
                const resp: any = response;
                if (resp.created_role) {
                  resp.created_role.permissions_names = resp.created_role.permissions.map(permission => permission.name);
                  resp.created_role.show_permissions = true;
                  this.roles.push(resp.created_role);
                } else {
                  this.getRoles();
                }
              },
            });
          }
        }
      ]
    });
    alert.then(addFriendAlert => {
      addFriendAlert.present();
    });
  }

  togglePermission(roleId, permissionName) {
    this.rolesAndPermissionsService.togglePermission(roleId, {name: permissionName}).subscribe({
      error: error => {
        this.errorService.errorOccurred.emit(error);
      },
      next: () => {}
    });
  }

  async removeRole(roleId) {
    const alert = await this.alertController.create({
      header: this.translate.instant('ACTIONS.ADMINISTRATE.REMOVE_ROLE_ALERT.alertHeader'),
      message: this.translate.instant('ACTIONS.ADMINISTRATE.REMOVE_ROLE_ALERT.alertText'),
      buttons: [
        {
          cssClass: 'cancel-text',
          text: this.translate.instant('GENERAL.POPUPS.cancel'),
          role: 'cancel',
        }, {
          text: this.translate.instant('ACTIONS.ADMINISTRATE.REMOVE_ROLE_ALERT.deleteButton'),
          handler: () => {
            this.rolesAndPermissionsService.deleteRole(roleId).subscribe({
              error: error => {
                if (error.error.message == 'The given data was invalid.') {
                  const role = this.roles.filter(function(role) {return role.id == roleId})[0];
                  role.errors = [];
                  for (const errorType in error.error.errors) {
                    for (const errorMessage in error.error.errors[errorType]) {
                      role.errors.push({[error.error.errors[errorType][errorMessage]]: true})
                    }
                  }
                } else {
                  this.errorService.errorOccurred.emit(error);
                }
              },
              next: () => { },
              complete: () => {
                this.roles = this.roles.filter(role => role.id != roleId);
              },
            });
          }
        }
      ]
    });
    await alert.present();
  }

}
