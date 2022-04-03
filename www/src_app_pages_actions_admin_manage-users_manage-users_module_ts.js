"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_pages_actions_admin_manage-users_manage-users_module_ts"],{

/***/ 53625:
/*!***********************************************************************************************************************************************************************************!*\
  !*** ./node_modules/@angular-devkit/build-angular/node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./src/app/pages/actions/admin/manage-users/manage-users.page.html ***!
  \***********************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<ion-content>\n  <app-toolbar></app-toolbar>\n  <ion-grid>\n    <ion-row>\n      <ion-col>\n        <app-card-title-bar title=\"{{ 'ACTIONS.MANAGE_USERS.title' | translate }}\"></app-card-title-bar>\n        <ion-card color=\"light\">\n          <ion-card-content>\n            <ion-grid class=\"inside-card-grid\">\n              <ion-row>\n                <ion-col>\n                  <form [formGroup]=\"searchUsersForm\">\n                    <ion-searchbar color=\"light\" (ionChange)=\"searchUsers()\" placeholder=\"{{ 'ACTIONS.MANAGE_USERS.INPUT.searchUsersPlaceholder' | translate }}\" formControlName=\"email\" showCancelButton=\"focus\"></ion-searchbar>\n                    <ion-select (ionChange)=\"searchUsers()\" multiple=\"true\" formControlName=\"roles\" okText=\"{{ 'GENERAL.POPUPS.ok' | translate }}\" cancelText=\"{{ 'GENERAL.POPUPS.cancel' | translate }}\" placeholder=\"{{ role_names }}\">\n                      <ion-select-option *ngFor=\"let role_name of role_names\" value=\"{{ role_name }}\">{{ role_name }}</ion-select-option>\n                    </ion-select>\n                  </form>\n                  <ng-container *ngIf=\"users.length > 0\">\n                    <ion-card *ngFor=\"let user of filteredUsers\" color=\"light\">\n                      <ion-card-header>\n                        <ion-card-title class=\"user-email\">\n                          {{ user.email }}\n                        </ion-card-title>\n                        <ion-card-subtitle>\n                          <ng-container *ngFor=\"let role of user.roles\">\n                            <ion-label class=\"subtitle-labels\" color=\"primary\"><b>{{ role.name }} </b></ion-label>\n                          </ng-container>\n                          <ion-label class=\"subtitle-labels\">- {{ user.created_at | date :( 'GENERAL.exactTimeDisplayFormat' | translate ) }}</ion-label>\n                          <ng-container *ngFor=\"let role of user.roles\">\n                            <ng-container *ngIf=\"role.name == 'attendant'\">\n                              <br>\n                              <hr>\n                              <ion-row>\n                                <ion-chip (click)=\"convertToGuestAttendant(user.id)\">\n                                  <ion-icon name=\"sync\"></ion-icon>\n                                  <ion-label>Convert to guestAttendant</ion-label>\n                                </ion-chip>\n                              </ion-row>\n                            </ng-container>\n                          </ng-container>\n                        </ion-card-subtitle>\n                      </ion-card-header>\n                    </ion-card>\n                  </ng-container>\n                </ion-col>\n              </ion-row>\n            </ion-grid>\n          </ion-card-content>\n        </ion-card>\n      </ion-col>\n    </ion-row>\n  </ion-grid>\n</ion-content>\n\n");

/***/ }),

/***/ 76367:
/*!*********************************************************************************!*\
  !*** ./src/app/pages/actions/admin/manage-users/manage-users-routing.module.ts ***!
  \*********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ManageUsersPageRoutingModule": () => (/* binding */ ManageUsersPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 21838);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 789);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 9538);
/* harmony import */ var _manage_users_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./manage-users.page */ 33280);




const routes = [
    {
        path: '',
        component: _manage_users_page__WEBPACK_IMPORTED_MODULE_0__.ManageUsersPage
    }
];
let ManageUsersPageRoutingModule = class ManageUsersPageRoutingModule {
};
ManageUsersPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], ManageUsersPageRoutingModule);



/***/ }),

/***/ 91174:
/*!*************************************************************************!*\
  !*** ./src/app/pages/actions/admin/manage-users/manage-users.module.ts ***!
  \*************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ManageUsersPageModule": () => (/* binding */ ManageUsersPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! tslib */ 21838);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 789);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ 2006);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/forms */ 43459);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/common/http */ 45331);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ionic/angular */ 30585);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @ngx-translate/core */ 52784);
/* harmony import */ var _manage_users_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./manage-users-routing.module */ 76367);
/* harmony import */ var _components_components_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../components/components.module */ 96453);
/* harmony import */ var _manage_users_page__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./manage-users.page */ 33280);
/* harmony import */ var src_app_app_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/app.module */ 92014);











let ManageUsersPageModule = class ManageUsersPageModule {
};
ManageUsersPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_5__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_6__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_7__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_8__.IonicModule,
            _manage_users_routing_module__WEBPACK_IMPORTED_MODULE_0__.ManageUsersPageRoutingModule,
            _components_components_module__WEBPACK_IMPORTED_MODULE_1__.ComponentsModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_7__.ReactiveFormsModule,
            _ngx_translate_core__WEBPACK_IMPORTED_MODULE_9__.TranslateModule.forChild({
                loader: {
                    provide: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_9__.TranslateLoader,
                    useFactory: src_app_app_module__WEBPACK_IMPORTED_MODULE_3__.createTranslateLoader,
                    deps: [_angular_common_http__WEBPACK_IMPORTED_MODULE_10__.HttpClient]
                }
            })
        ],
        declarations: [_manage_users_page__WEBPACK_IMPORTED_MODULE_2__.ManageUsersPage]
    })
], ManageUsersPageModule);



/***/ }),

/***/ 33280:
/*!***********************************************************************!*\
  !*** ./src/app/pages/actions/admin/manage-users/manage-users.page.ts ***!
  \***********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ManageUsersPage": () => (/* binding */ ManageUsersPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! tslib */ 21838);
/* harmony import */ var _home_vagrant_projects_Vnint_node_modules_angular_devkit_build_angular_node_modules_ngtools_webpack_src_loaders_direct_resource_js_manage_users_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !./node_modules/@angular-devkit/build-angular/node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./manage-users.page.html */ 53625);
/* harmony import */ var _manage_users_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./manage-users.page.scss */ 47256);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/core */ 789);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/forms */ 43459);
/* harmony import */ var src_app_services_error_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/error.service */ 55729);
/* harmony import */ var src_app_services_roles_and_permissions_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/roles-and-permissions.service */ 27094);
/* harmony import */ var src_app_services_user_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/services/user.service */ 88481);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ngx-translate/core */ 52784);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @ionic/angular */ 30585);
/* harmony import */ var _services_alert_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../services/alert.service */ 92677);











let ManageUsersPage = class ManageUsersPage {
    constructor(userService, formBuilder, translate, alertController, alertService, rolesAndPermissionsService, errorService) {
        this.userService = userService;
        this.formBuilder = formBuilder;
        this.translate = translate;
        this.alertController = alertController;
        this.alertService = alertService;
        this.rolesAndPermissionsService = rolesAndPermissionsService;
        this.errorService = errorService;
        this.users = [];
        this.filteredUsers = [];
        this.role_names = [];
    }
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
                const resp = response;
                this.role_names = [];
                this.role_names = resp.roles.map(role => role.name);
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
                const resp = response;
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
        for (let i = 0; i < minLength; i++) {
            if (email[i] == input[i]) {
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
    arrayContainsArray(superset, subset) {
        return subset.every(function (value) {
            return (superset.includes(value));
        });
    }
    convertToGuestAttendant(id) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_6__.__awaiter)(this, void 0, void 0, function* () {
            const alert = yield this.alertController.create({
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
                                    }
                                    else if (error.error.message == 'userCanNotBeConverted') {
                                        this.alertService.alert("danger", this.translate.instant('ACTIONS.MANAGE_USERS.title'), 'This user can not be converted to guestAttendant', 'lock-closed');
                                    }
                                    else {
                                        this.errorService.errorOccurred.emit(error);
                                    }
                                },
                                next: response => {
                                    const resp = response;
                                    this.alertService.alert("success", this.translate.instant('ACTIONS.MANAGE_USERS.title'), resp.message, "checkmark");
                                },
                                complete: () => {
                                    this.getUsers();
                                },
                            });
                        }
                    }
                ]
            });
            yield alert.present();
        });
    }
};
ManageUsersPage.ctorParameters = () => [
    { type: src_app_services_user_service__WEBPACK_IMPORTED_MODULE_4__.UserService },
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_7__.FormBuilder },
    { type: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_8__.TranslateService },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_9__.AlertController },
    { type: _services_alert_service__WEBPACK_IMPORTED_MODULE_5__.AlertService },
    { type: src_app_services_roles_and_permissions_service__WEBPACK_IMPORTED_MODULE_3__.RolesAndPermissionsService },
    { type: src_app_services_error_service__WEBPACK_IMPORTED_MODULE_2__.ErrorService }
];
ManageUsersPage = (0,tslib__WEBPACK_IMPORTED_MODULE_6__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_10__.Component)({
        selector: 'app-manage-users',
        template: _home_vagrant_projects_Vnint_node_modules_angular_devkit_build_angular_node_modules_ngtools_webpack_src_loaders_direct_resource_js_manage_users_page_html__WEBPACK_IMPORTED_MODULE_0__["default"],
        styles: [_manage_users_page_scss__WEBPACK_IMPORTED_MODULE_1__]
    })
], ManageUsersPage);



/***/ }),

/***/ 47256:
/*!*************************************************************************!*\
  !*** ./src/app/pages/actions/admin/manage-users/manage-users.page.scss ***!
  \*************************************************************************/
/***/ ((module) => {

module.exports = ".user-email {\n  font-size: 14pt;\n}\n\nhr {\n  background-color: var(--ion-color-step-550, #737373);\n}\n\n.subtitle-labels {\n  font-size: 12pt;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm1hbmFnZS11c2Vycy5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxlQUFBO0FBQ0Y7O0FBQ0E7RUFDRSxvREFBQTtBQUVGOztBQUVBO0VBQ0UsZUFBQTtBQUNGIiwiZmlsZSI6Im1hbmFnZS11c2Vycy5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIudXNlci1lbWFpbCB7XG4gIGZvbnQtc2l6ZTogMTRwdDtcbn1cbmhyIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0taW9uLWNvbG9yLXN0ZXAtNTUwLCAjNzM3MzczKTtcbn1cblxuXG4uc3VidGl0bGUtbGFiZWxzIHtcbiAgZm9udC1zaXplOiAxMnB0O1xufVxuIl19 */";

/***/ })

}]);
//# sourceMappingURL=src_app_pages_actions_admin_manage-users_manage-users_module_ts.js.map