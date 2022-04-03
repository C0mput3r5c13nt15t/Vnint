"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_pages_actions_manage-friends_manage-friends_module_ts"],{

/***/ 84559:
/*!*********************************************************************************************************************************************************************************!*\
  !*** ./node_modules/@angular-devkit/build-angular/node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./src/app/pages/actions/manage-friends/manage-friends.page.html ***!
  \*********************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<ion-content>\n  <app-toolbar></app-toolbar>\n  <ion-grid>\n    <ion-row>\n      <ion-col>\n        <app-card-title-bar title=\"{{ 'ACTIONS.MANAGE_FRIENDS.title' | translate }}\"></app-card-title-bar>\n        <ion-card color=\"light\">\n          <ion-card-content>\n            <ion-grid class=\"inside-card-grid\">\n              <ion-row>\n                <ion-col>\n                  <ng-container *ngIf=\"offered_friendships.length > 0\">\n                    <ion-label>{{ 'ACTIONS.MANAGE_FRIENDS.proposedFriendships' | translate }}</ion-label>\n                    <ion-card *ngFor=\"let friendship of offered_friendships\">\n                      <ion-item color=\"light\">\n                        <ion-icon *ngIf=\"friendship.state == 0\" color=\"danger\" slot=\"start\" name=\"hourglass\"></ion-icon>\n                        <ion-icon *ngIf=\"friendship.state == 1\" color=\"warning\" slot=\"start\" name=\"checkmark\"></ion-icon>\n                        <ion-icon *ngIf=\"friendship.state == 2\" color=\"success\" slot=\"start\" name=\"checkmark-done\"></ion-icon>\n                        <ion-card-header>\n                          <ion-card-title>{{ friendship.respondent.email }}</ion-card-title>\n                          <ion-card-subtitle>\n                            {{ 'ACTIONS.MANAGE_FRIENDS.FRIENDS.proposedOn' | translate }} <ion-label color=\"primary\" class=\"subtitle-labels\">{{ friendship.created_at | date:( 'GENERAL.timeDisplayFormat' | translate ):( 'GENERAL.timezone' | translate ):( 'GENERAL.locale' | translate ) }}</ion-label> {{ 'ACTIONS.MANAGE_FRIENDS.FRIENDS.to' | translate }} <ion-label color=\"primary\" class=\"subtitle-labels\">{{ friendship.respondent.email }}</ion-label>\n                          </ion-card-subtitle>\n                          <ion-card-subtitle>\n                            <ion-chip color=\"danger\" (click)=\"removeFriend(friendship.id)\">\n                              <ion-icon name=\"close\"></ion-icon>\n                              <ion-label>{{ 'ACTIONS.MANAGE_FRIENDS.FRIENDS.removeFriend' | translate }}</ion-label>\n                            </ion-chip>\n                          </ion-card-subtitle>\n                        </ion-card-header>\n                      </ion-item>\n                    </ion-card>\n                    <br>\n                  </ng-container>\n                  <ng-container *ngIf=\"received_friendships.length > 0\">\n                    <ion-label>{{ 'ACTIONS.MANAGE_FRIENDS.receivedFriendships' | translate }}</ion-label>\n                    <ion-card *ngFor=\"let friendship of received_friendships\">\n                      <ion-item color=\"light\">\n                        <ion-icon *ngIf=\"friendship.state == 0\" color=\"danger\" slot=\"start\" name=\"hourglass\"></ion-icon>\n                        <ion-icon *ngIf=\"friendship.state == 1\" color=\"warning\" slot=\"start\" name=\"checkmark\"></ion-icon>\n                        <ion-icon *ngIf=\"friendship.state == 2\" color=\"success\" slot=\"start\" name=\"checkmark-done\"></ion-icon>\n                        <ion-card-header>\n                          <ion-card-title>{{ friendship.applicant.email }}</ion-card-title>\n                          <ion-card-subtitle>\n                            {{ 'ACTIONS.MANAGE_FRIENDS.FRIENDS.receivedOn' | translate }} <ion-label color=\"primary\" class=\"subtitle-labels\">{{ friendship.created_at | date:( 'GENERAL.timeDisplayFormat' | translate ):( 'GENERAL.timezone' | translate ):( 'GENERAL.locale' | translate ) }}</ion-label> {{ 'ACTIONS.MANAGE_FRIENDS.FRIENDS.from' | translate }} <ion-label color=\"primary\" class=\"subtitle-labels\">{{ friendship.applicant.email }}</ion-label>\n                          </ion-card-subtitle>\n                          <ion-card-subtitle>\n                            <ion-chip *ngIf=\"friendship.state == 0\" color=\"success\" (click)=\"acceptFriend(friendship.id)\">\n                              <ion-icon name=\"checkmark\"></ion-icon>\n                              <ion-label>{{ 'ACTIONS.MANAGE_FRIENDS.FRIENDS.acceptFriend' | translate }}</ion-label>\n                            </ion-chip>\n                            <ion-chip color=\"danger\" (click)=\"removeFriend(friendship.id)\">\n                              <ion-icon name=\"close\"></ion-icon>\n                              <ion-label>{{ 'ACTIONS.MANAGE_FRIENDS.FRIENDS.removeFriend' | translate }}</ion-label>\n                            </ion-chip>\n                          </ion-card-subtitle>\n                        </ion-card-header>\n                      </ion-item>\n                    </ion-card><br>\n                  </ng-container>\n                  <ng-container *ngIf=\"offered_friendships.length == 0 && received_friendships.length == 0\">\n                    <app-empty-card message=\"{{ 'ACTIONS.MANAGE_FRIENDS.noFriends' | translate }}\"></app-empty-card><br>\n                  </ng-container>\n                </ion-col>\n              </ion-row>\n            </ion-grid>\n          </ion-card-content>\n        </ion-card>\n      </ion-col>\n    </ion-row>\n    <ion-row>\n      <ion-col *ngIf=\"offered_friendships.length > 0 || received_friendships.length > 0\">\n        <ion-card color=\"light\">\n          <ion-card-content>\n            <ion-grid class=\"inside-card-grid\">\n              <ion-row>\n                <ion-col>\n                  <ion-label>\n                    {{ 'ACTIONS.MANAGE_FRIENDS.LEGEND.yourFriendshipRequest' | translate }}<br>\n                    <ion-icon color=\"danger\" slot=\"start\" name=\"hourglass\"></ion-icon> {{ 'ACTIONS.MANAGE_FRIENDS.LEGEND.hourglass' | translate }}<br>\n                    <ion-icon color=\"warning\" slot=\"start\" name=\"checkmark\"></ion-icon> {{ 'ACTIONS.MANAGE_FRIENDS.LEGEND.check' | translate }}<br>\n                    <ion-icon color=\"success\" slot=\"start\" name=\"checkmark-done\"></ion-icon> {{ 'ACTIONS.MANAGE_FRIENDS.LEGEND.doubleCheck' | translate }}\n                  </ion-label>\n                </ion-col>\n              </ion-row>\n            </ion-grid>\n          </ion-card-content>\n        </ion-card>\n      </ion-col>\n      <ion-col>\n        <ion-card color=\"light\">\n          <ion-card-content>\n            <ion-grid class=\"inside-card-grid\">\n              <ion-row>\n                <ion-col>\n                  <form [formGroup]=\"addFriendForm\" (ngSubmit)=\"addFriend()\">\n\n                    <ion-item color=\"light\">\n                      <ion-input type=\"email\" formControlName=\"respondent_email\" placeholder=\"{{ 'LOGIN.INPUT.email' | translate }}\"></ion-input>\n                    </ion-item>\n                    <app-form-error [errors]=\"errorControl.respondent_email.errors\"></app-form-error>\n\n                    <ion-checkbox class=\"invisible\" formControlName=\"fax\"></ion-checkbox>\n\n                    <div class=\"ion-padding\">\n                      <ion-button *ngIf=\"isProcessed\" type=\"submit\" [disabled]=\"addFriendForm.invalid || isProcessed\" class=\"ion-no-margin\" expand=\"block\" color=\"primary\"><ion-spinner name=\"crescent\"></ion-spinner></ion-button>\n                      <ion-button *ngIf=\"!isProcessed\" color=\"primary\" [disabled]=\"addFriendForm.invalid\" (click)=\"addFriend()\" expand=\"block\" type=\"submit\" class=\"ion-no-margin\">+ {{ 'ACTIONS.MANAGE_FRIENDS.FRIENDS.add' | translate }}</ion-button>\n                    </div>\n                  </form>\n                </ion-col>\n              </ion-row>\n            </ion-grid>\n          </ion-card-content>\n        </ion-card>\n      </ion-col>\n    </ion-row>\n  </ion-grid>\n</ion-content>\n");

/***/ }),

/***/ 21824:
/*!*******************************************************************************!*\
  !*** ./src/app/pages/actions/manage-friends/manage-friends-routing.module.ts ***!
  \*******************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ManageFriendsPageRoutingModule": () => (/* binding */ ManageFriendsPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 21838);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 789);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 9538);
/* harmony import */ var _manage_friends_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./manage-friends.page */ 83933);




const routes = [
    {
        path: '',
        component: _manage_friends_page__WEBPACK_IMPORTED_MODULE_0__.ManageFriendsPage
    }
];
let ManageFriendsPageRoutingModule = class ManageFriendsPageRoutingModule {
};
ManageFriendsPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], ManageFriendsPageRoutingModule);



/***/ }),

/***/ 94709:
/*!***********************************************************************!*\
  !*** ./src/app/pages/actions/manage-friends/manage-friends.module.ts ***!
  \***********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ManageFriendsPageModule": () => (/* binding */ ManageFriendsPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! tslib */ 21838);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 789);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ 2006);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/forms */ 43459);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/common/http */ 45331);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ionic/angular */ 30585);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @ngx-translate/core */ 52784);
/* harmony import */ var _manage_friends_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./manage-friends-routing.module */ 21824);
/* harmony import */ var _components_components_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../components/components.module */ 96453);
/* harmony import */ var _manage_friends_page__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./manage-friends.page */ 83933);
/* harmony import */ var src_app_app_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/app.module */ 92014);











let ManageFriendsPageModule = class ManageFriendsPageModule {
};
ManageFriendsPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_5__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_6__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_7__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_8__.IonicModule,
            _manage_friends_routing_module__WEBPACK_IMPORTED_MODULE_0__.ManageFriendsPageRoutingModule,
            _components_components_module__WEBPACK_IMPORTED_MODULE_1__.ComponentsModule,
            _ngx_translate_core__WEBPACK_IMPORTED_MODULE_9__.TranslateModule.forChild({
                loader: {
                    provide: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_9__.TranslateLoader,
                    useFactory: src_app_app_module__WEBPACK_IMPORTED_MODULE_3__.createTranslateLoader,
                    deps: [_angular_common_http__WEBPACK_IMPORTED_MODULE_10__.HttpClient]
                }
            }),
            _angular_forms__WEBPACK_IMPORTED_MODULE_7__.ReactiveFormsModule
        ],
        declarations: [_manage_friends_page__WEBPACK_IMPORTED_MODULE_2__.ManageFriendsPage]
    })
], ManageFriendsPageModule);



/***/ }),

/***/ 83933:
/*!*********************************************************************!*\
  !*** ./src/app/pages/actions/manage-friends/manage-friends.page.ts ***!
  \*********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ManageFriendsPage": () => (/* binding */ ManageFriendsPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! tslib */ 21838);
/* harmony import */ var _home_vagrant_projects_Vnint_node_modules_angular_devkit_build_angular_node_modules_ngtools_webpack_src_loaders_direct_resource_js_manage_friends_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !./node_modules/@angular-devkit/build-angular/node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./manage-friends.page.html */ 84559);
/* harmony import */ var _manage_friends_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./manage-friends.page.scss */ 28611);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/core */ 789);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 30585);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ngx-translate/core */ 52784);
/* harmony import */ var src_app_services_friendship_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/friendship.service */ 1060);
/* harmony import */ var src_app_services_error_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/error.service */ 55729);
/* harmony import */ var _services_alert_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../services/alert.service */ 92677);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 43459);










let ManageFriendsPage = class ManageFriendsPage {
    constructor(formBuilder, alertCtrl, translate, friendshipService, errorService, alertService) {
        this.formBuilder = formBuilder;
        this.alertCtrl = alertCtrl;
        this.translate = translate;
        this.friendshipService = friendshipService;
        this.errorService = errorService;
        this.alertService = alertService;
        this.isProcessed = false;
        this.offered_friendships = [];
        this.received_friendships = [];
    }
    ngOnInit() {
        this.addFriendForm = this.formBuilder.group({
            respondent_email: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_5__.Validators.required],
            fax: []
        });
    }
    get errorControl() {
        return this.addFriendForm.controls;
    }
    ionViewWillEnter() {
        this.getFriends();
    }
    getFriends() {
        this.friendshipService.getAssociatedFriendship().subscribe({
            error: error => {
                this.errorService.errorOccurred.emit(error);
            },
            next: response => {
                const resp = response;
                this.offered_friendships = resp.offered_friendships;
                this.received_friendships = resp.received_friendships;
            },
        });
    }
    removeFriend(friendshipId) {
        this.friendshipService.deleteFriendship(friendshipId).subscribe({
            error: error => {
                if (error.error.message == 'missingPermissions') {
                    this.alertService.alert("danger", this.translate.instant('GENERAL.ERRORS.missingPermissions'), '', 'lock-closed');
                }
                else {
                    this.errorService.errorOccurred.emit(error);
                }
            },
            next: response => {
                const resp = response;
                this.alertService.alert("success", this.translate.instant('ACTIONS.MANAGE_FRIENDS.title'), resp.message, "checkmark");
            },
            complete: () => {
                this.getFriends();
            },
        });
    }
    addFriend() {
        this.isProcessed = true;
        if (!this.addFriendForm.value.fax && this.addFriendForm.valid) {
            this.friendshipService.createFriendship({ respondent_email: this.addFriendForm.value.respondent_email }).subscribe({
                error: error => {
                    if (error.error.message == 'The given data was invalid.') {
                        for (const errorType in error.error.errors) {
                            const errors = [];
                            for (const errorMessage in error.error.errors[errorType]) {
                                errors.push({ [error.error.errors[errorType][errorMessage]]: true });
                            }
                            console.log(this.addFriendForm.controls);
                            this.addFriendForm.controls[errorType].setErrors(errors);
                        }
                    }
                    else if (error.error.message == 'missingPermissions') {
                        this.alertService.alert("danger", this.translate.instant('GENERAL.ERRORS.missingPermissions'), '', 'lock-closed');
                    }
                    else {
                        this.errorService.errorOccurred.emit(error);
                    }
                    this.isProcessed = false;
                },
                next: response => {
                    const resp = response;
                    this.alertService.alert("success", this.translate.instant('ACTIONS.MANAGE_FRIENDS.title'), resp.message, "checkmark");
                },
                complete: () => {
                    this.addFriendForm.reset();
                    this.isProcessed = false;
                    this.getFriends();
                },
            });
        }
    }
    acceptFriend(friendshipId) {
        this.friendshipService.acceptFriendship(friendshipId).subscribe({
            error: error => {
                if (error.error.message == 'missingPermissions') {
                    this.alertService.alert("danger", this.translate.instant('GENERAL.ERRORS.missingPermissions'), '', 'lock-closed');
                }
                else {
                    this.errorService.errorOccurred.emit(error);
                }
            },
            next: response => {
                const resp = response;
                this.alertService.alert("success", this.translate.instant('ACTIONS.MANAGE_FRIENDS.title'), resp.message, "checkmark");
            },
            complete: () => {
                console.log('Friend accepted');
                this.getFriends();
            },
        });
    }
};
ManageFriendsPage.ctorParameters = () => [
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormBuilder },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.AlertController },
    { type: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_7__.TranslateService },
    { type: src_app_services_friendship_service__WEBPACK_IMPORTED_MODULE_2__.FriendshipService },
    { type: src_app_services_error_service__WEBPACK_IMPORTED_MODULE_3__.ErrorService },
    { type: _services_alert_service__WEBPACK_IMPORTED_MODULE_4__.AlertService }
];
ManageFriendsPage = (0,tslib__WEBPACK_IMPORTED_MODULE_8__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_9__.Component)({
        selector: 'app-manage-friends',
        template: _home_vagrant_projects_Vnint_node_modules_angular_devkit_build_angular_node_modules_ngtools_webpack_src_loaders_direct_resource_js_manage_friends_page_html__WEBPACK_IMPORTED_MODULE_0__["default"],
        styles: [_manage_friends_page_scss__WEBPACK_IMPORTED_MODULE_1__]
    })
], ManageFriendsPage);



/***/ }),

/***/ 28611:
/*!***********************************************************************!*\
  !*** ./src/app/pages/actions/manage-friends/manage-friends.page.scss ***!
  \***********************************************************************/
/***/ ((module) => {

module.exports = "/** Ionic CSS Variables **/\n@font-face {\n  font-family: \"Montserrat\", sans-serif;\n}\n:root {\n  --ion-font-family: \"Montserrat\", sans-serif;\n}\n/*\n* Light Colors\n* -------------------------------------------\n*/\n:root {\n  --ion-color-primary: #6411D9;\n  --ion-color-primary-rgb: 100,17,217;\n  --ion-color-primary-contrast: #ffffff;\n  --ion-color-primary-contrast-rgb: 255,255,255;\n  --ion-color-primary-shade: #580fbf;\n  --ion-color-primary-tint: #7429dd;\n  --ion-color-secondary: #622BD9;\n  --ion-color-secondary-rgb: 98,43,217;\n  --ion-color-secondary-contrast: #ffffff;\n  --ion-color-secondary-contrast-rgb: 255,255,255;\n  --ion-color-secondary-shade: #5626bf;\n  --ion-color-secondary-tint: #7240dd;\n  --ion-color-tertiary: #752BDF;\n  --ion-color-tertiary-rgb: 117,43,223;\n  --ion-color-tertiary-contrast: #ffffff;\n  --ion-color-tertiary-contrast-rgb: 255,255,255;\n  --ion-color-tertiary-shade: #6726c4;\n  --ion-color-tertiary-tint: #8340e2;\n  --ion-color-success: #33cc73;\n  --ion-color-success-rgb: 51,204,115;\n  --ion-color-success-contrast: #ffffff;\n  --ion-color-success-contrast-rgb: 0,0,0;\n  --ion-color-success-shade: #2db465;\n  --ion-color-success-tint: #47d181;\n  --ion-color-warning: #f2e231;\n  --ion-color-warning-rgb: 242,226,49;\n  --ion-color-warning-contrast: #fff;\n  --ion-color-warning-contrast-rgb: 255,255,255;\n  --ion-color-warning-shade: #d5c72b;\n  --ion-color-warning-tint: #f3e546;\n  --ion-color-danger: #e53e3e;\n  --ion-color-danger-rgb: 229,62,62;\n  --ion-color-danger-contrast: #ffffff;\n  --ion-color-danger-contrast-rgb: 255,255,255;\n  --ion-color-danger-shade: #ca3737;\n  --ion-color-danger-tint: #e85151;\n  --ion-color-medium: #fcfaff;\n  --ion-color-medium-rgb: 252,250,255;\n  --ion-color-medium-contrast: #000000;\n  --ion-color-medium-contrast-rgb: 0,0,0;\n  --ion-color-medium-shade: #dedce0;\n  --ion-color-medium-tint: #fcfbff;\n  --ion-color-light: #FFFFFF;\n  --ion-color-light-rgb: 255,255,255;\n  --ion-color-light-contrast: #1a1a1a;\n  --ion-color-light-contrast-rgb: 0,0,0;\n  --ion-color-light-shade: #e0e0e0;\n  --ion-color-light-tint: #ffffff;\n  --ion-text-color: #1c1c1c;\n  --ion-item-background: var(--ion-color-light);\n}\n/*\n* Dark Colors\n* -------------------------------------------\n*/\nbody.dark {\n  --ion-color-primary: #7924f0;\n  --ion-color-primary-rgb: 121,36,240;\n  --ion-color-primary-contrast: #ffffff;\n  --ion-color-primary-contrast-rgb: 255,255,255;\n  --ion-color-primary-shade: #6a20d3;\n  --ion-color-primary-tint: #863af2;\n  --ion-color-secondary: #622BD9;\n  --ion-color-secondary-rgb: 98,43,217;\n  --ion-color-secondary-contrast: #ffffff;\n  --ion-color-secondary-contrast-rgb: 255,255,255;\n  --ion-color-secondary-shade: #5626bf;\n  --ion-color-secondary-tint: #7240dd;\n  --ion-color-tertiary: #752BDF;\n  --ion-color-tertiary-rgb: 117,43,223;\n  --ion-color-tertiary-contrast: #ffffff;\n  --ion-color-tertiary-contrast-rgb: 255,255,255;\n  --ion-color-tertiary-shade: #6726c4;\n  --ion-color-tertiary-tint: #8340e2;\n  --ion-color-success: #33cc73;\n  --ion-color-success-rgb: 51,204,115;\n  --ion-color-success-contrast: #ffffff;\n  --ion-color-success-contrast-rgb: 0,0,0;\n  --ion-color-success-shade: #2db465;\n  --ion-color-success-tint: #47d181;\n  --ion-color-warning: #f2e231;\n  --ion-color-warning-rgb: 242,226,49;\n  --ion-color-warning-contrast: #fff;\n  --ion-color-warning-contrast-rgb: 255,255,255;\n  --ion-color-warning-shade: #d5c72b;\n  --ion-color-warning-tint: #f3e546;\n  --ion-color-danger: #e53e3e;\n  --ion-color-danger-rgb: 229,62,62;\n  --ion-color-danger-contrast: #ffffff;\n  --ion-color-danger-contrast-rgb: 255,255,255;\n  --ion-color-danger-shade: #ca3737;\n  --ion-color-danger-tint: #e85151;\n  --ion-color-medium: #121212;\n  --ion-color-medium-rgb: 18,18,18;\n  --ion-color-medium-contrast: #ffffff;\n  --ion-color-medium-contrast-rgb: 255,255,255;\n  --ion-color-medium-shade: #101010;\n  --ion-color-medium-tint: #2a2a2a;\n  --ion-color-light: #1d1d1d;\n  --ion-color-light-rgb: 29,29,29;\n  --ion-color-light-contrast: #ffffff;\n  --ion-color-light-contrast-rgb: 255,255,255;\n  --ion-color-light-shade: #1a1a1a;\n  --ion-color-light-tint: #343434;\n  --ion-text-color: #fff;\n  --ion-item-background: var(--ion-color-light);\n}\nion-card {\n  color: var(--ion-text-color) !important;\n}\n.subtitle-labels {\n  display: inline;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3RoZW1lL3ZhcmlhYmxlcy5zY3NzIiwibWFuYWdlLWZyaWVuZHMucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUdBLDBCQUFBO0FBRUE7RUFDRSxxQ0FBQTtBQ0hGO0FETUE7RUFDRSwyQ0FBQTtBQ0pGO0FET0E7OztDQUFBO0FBS0E7RUFDRSw0QkFBQTtFQUNBLG1DQUFBO0VBQ0EscUNBQUE7RUFDQSw2Q0FBQTtFQUNBLGtDQUFBO0VBQ0EsaUNBQUE7RUFFQSw4QkFBQTtFQUNBLG9DQUFBO0VBQ0EsdUNBQUE7RUFDQSwrQ0FBQTtFQUNBLG9DQUFBO0VBQ0EsbUNBQUE7RUFFQSw2QkFBQTtFQUNBLG9DQUFBO0VBQ0Esc0NBQUE7RUFDQSw4Q0FBQTtFQUNBLG1DQUFBO0VBQ0Esa0NBQUE7RUFFQSw0QkFBQTtFQUNBLG1DQUFBO0VBQ0EscUNBQUE7RUFDQSx1Q0FBQTtFQUNBLGtDQUFBO0VBQ0EsaUNBQUE7RUFFQSw0QkFBQTtFQUNBLG1DQUFBO0VBQ0Esa0NBQUE7RUFDQSw2Q0FBQTtFQUNBLGtDQUFBO0VBQ0EsaUNBQUE7RUFFQSwyQkFBQTtFQUNBLGlDQUFBO0VBQ0Esb0NBQUE7RUFDQSw0Q0FBQTtFQUNBLGlDQUFBO0VBQ0EsZ0NBQUE7RUFFQSwyQkFBQTtFQUNBLG1DQUFBO0VBQ0Esb0NBQUE7RUFDQSxzQ0FBQTtFQUNBLGlDQUFBO0VBQ0EsZ0NBQUE7RUFFQSwwQkFBQTtFQUNBLGtDQUFBO0VBQ0EsbUNBQUE7RUFDQSxxQ0FBQTtFQUNBLGdDQUFBO0VBQ0EsK0JBQUE7RUFFQSx5QkFBQTtFQUNBLDZDQUFBO0FDYkY7QURnQkE7OztDQUFBO0FBS0E7RUFDRSw0QkFBQTtFQUNBLG1DQUFBO0VBQ0EscUNBQUE7RUFDQSw2Q0FBQTtFQUNBLGtDQUFBO0VBQ0EsaUNBQUE7RUFFQSw4QkFBQTtFQUNBLG9DQUFBO0VBQ0EsdUNBQUE7RUFDQSwrQ0FBQTtFQUNBLG9DQUFBO0VBQ0EsbUNBQUE7RUFFQSw2QkFBQTtFQUNBLG9DQUFBO0VBQ0Esc0NBQUE7RUFDQSw4Q0FBQTtFQUNBLG1DQUFBO0VBQ0Esa0NBQUE7RUFFQSw0QkFBQTtFQUNBLG1DQUFBO0VBQ0EscUNBQUE7RUFDQSx1Q0FBQTtFQUNBLGtDQUFBO0VBQ0EsaUNBQUE7RUFFQSw0QkFBQTtFQUNBLG1DQUFBO0VBQ0Esa0NBQUE7RUFDQSw2Q0FBQTtFQUNBLGtDQUFBO0VBQ0EsaUNBQUE7RUFFQSwyQkFBQTtFQUNBLGlDQUFBO0VBQ0Esb0NBQUE7RUFDQSw0Q0FBQTtFQUNBLGlDQUFBO0VBQ0EsZ0NBQUE7RUFFQSwyQkFBQTtFQUNBLGdDQUFBO0VBQ0Esb0NBQUE7RUFDQSw0Q0FBQTtFQUNBLGlDQUFBO0VBQ0EsZ0NBQUE7RUFFQSwwQkFBQTtFQUNBLCtCQUFBO0VBQ0EsbUNBQUE7RUFDQSwyQ0FBQTtFQUNBLGdDQUFBO0VBQ0EsK0JBQUE7RUFFQSxzQkFBQTtFQUNBLDZDQUFBO0FDdEJGO0FBdEhBO0VBQ0UsdUNBQUE7QUF5SEY7QUF0SEE7RUFDRSxlQUFBO0FBeUhGIiwiZmlsZSI6Im1hbmFnZS1mcmllbmRzLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi8vIElvbmljIFZhcmlhYmxlcyBhbmQgVGhlbWluZy4gRm9yIG1vcmUgaW5mbywgcGxlYXNlIHNlZTpcbi8vIGh0dHA6Ly9pb25pY2ZyYW1ld29yay5jb20vZG9jcy90aGVtaW5nL1xuXG4vKiogSW9uaWMgQ1NTIFZhcmlhYmxlcyAqKi9cblxuQGZvbnQtZmFjZSB7XG4gIGZvbnQtZmFtaWx5OiAnTW9udHNlcnJhdCcsIHNhbnMtc2VyaWY7XG59XG5cbjpyb290IHtcbiAgLS1pb24tZm9udC1mYW1pbHk6ICdNb250c2VycmF0Jywgc2Fucy1zZXJpZjtcbn1cblxuLypcbiogTGlnaHQgQ29sb3JzXG4qIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiovXG5cbjpyb290IHtcbiAgLS1pb24tY29sb3ItcHJpbWFyeTogIzY0MTFEOTtcbiAgLS1pb24tY29sb3ItcHJpbWFyeS1yZ2I6IDEwMCwxNywyMTc7XG4gIC0taW9uLWNvbG9yLXByaW1hcnktY29udHJhc3Q6ICNmZmZmZmY7XG4gIC0taW9uLWNvbG9yLXByaW1hcnktY29udHJhc3QtcmdiOiAyNTUsMjU1LDI1NTtcbiAgLS1pb24tY29sb3ItcHJpbWFyeS1zaGFkZTogIzU4MGZiZjtcbiAgLS1pb24tY29sb3ItcHJpbWFyeS10aW50OiAjNzQyOWRkO1xuXG4gIC0taW9uLWNvbG9yLXNlY29uZGFyeTogIzYyMkJEOTtcbiAgLS1pb24tY29sb3Itc2Vjb25kYXJ5LXJnYjogOTgsNDMsMjE3O1xuICAtLWlvbi1jb2xvci1zZWNvbmRhcnktY29udHJhc3Q6ICNmZmZmZmY7XG4gIC0taW9uLWNvbG9yLXNlY29uZGFyeS1jb250cmFzdC1yZ2I6IDI1NSwyNTUsMjU1O1xuICAtLWlvbi1jb2xvci1zZWNvbmRhcnktc2hhZGU6ICM1NjI2YmY7XG4gIC0taW9uLWNvbG9yLXNlY29uZGFyeS10aW50OiAjNzI0MGRkO1xuXG4gIC0taW9uLWNvbG9yLXRlcnRpYXJ5OiAjNzUyQkRGO1xuICAtLWlvbi1jb2xvci10ZXJ0aWFyeS1yZ2I6IDExNyw0MywyMjM7XG4gIC0taW9uLWNvbG9yLXRlcnRpYXJ5LWNvbnRyYXN0OiAjZmZmZmZmO1xuICAtLWlvbi1jb2xvci10ZXJ0aWFyeS1jb250cmFzdC1yZ2I6IDI1NSwyNTUsMjU1O1xuICAtLWlvbi1jb2xvci10ZXJ0aWFyeS1zaGFkZTogIzY3MjZjNDtcbiAgLS1pb24tY29sb3ItdGVydGlhcnktdGludDogIzgzNDBlMjtcblxuICAtLWlvbi1jb2xvci1zdWNjZXNzOiAjMzNjYzczO1xuICAtLWlvbi1jb2xvci1zdWNjZXNzLXJnYjogNTEsMjA0LDExNTtcbiAgLS1pb24tY29sb3Itc3VjY2Vzcy1jb250cmFzdDogI2ZmZmZmZjtcbiAgLS1pb24tY29sb3Itc3VjY2Vzcy1jb250cmFzdC1yZ2I6IDAsMCwwO1xuICAtLWlvbi1jb2xvci1zdWNjZXNzLXNoYWRlOiAjMmRiNDY1O1xuICAtLWlvbi1jb2xvci1zdWNjZXNzLXRpbnQ6ICM0N2QxODE7XG5cbiAgLS1pb24tY29sb3Itd2FybmluZzogI2YyZTIzMTtcbiAgLS1pb24tY29sb3Itd2FybmluZy1yZ2I6IDI0MiwyMjYsNDk7XG4gIC0taW9uLWNvbG9yLXdhcm5pbmctY29udHJhc3Q6ICNmZmY7XG4gIC0taW9uLWNvbG9yLXdhcm5pbmctY29udHJhc3QtcmdiOiAyNTUsMjU1LDI1NTtcbiAgLS1pb24tY29sb3Itd2FybmluZy1zaGFkZTogI2Q1YzcyYjtcbiAgLS1pb24tY29sb3Itd2FybmluZy10aW50OiAjZjNlNTQ2O1xuXG4gIC0taW9uLWNvbG9yLWRhbmdlcjogI2U1M2UzZTtcbiAgLS1pb24tY29sb3ItZGFuZ2VyLXJnYjogMjI5LDYyLDYyO1xuICAtLWlvbi1jb2xvci1kYW5nZXItY29udHJhc3Q6ICNmZmZmZmY7XG4gIC0taW9uLWNvbG9yLWRhbmdlci1jb250cmFzdC1yZ2I6IDI1NSwyNTUsMjU1O1xuICAtLWlvbi1jb2xvci1kYW5nZXItc2hhZGU6ICNjYTM3Mzc7XG4gIC0taW9uLWNvbG9yLWRhbmdlci10aW50OiAjZTg1MTUxO1xuXG4gIC0taW9uLWNvbG9yLW1lZGl1bTogI2ZjZmFmZjtcbiAgLS1pb24tY29sb3ItbWVkaXVtLXJnYjogMjUyLDI1MCwyNTU7XG4gIC0taW9uLWNvbG9yLW1lZGl1bS1jb250cmFzdDogIzAwMDAwMDtcbiAgLS1pb24tY29sb3ItbWVkaXVtLWNvbnRyYXN0LXJnYjogMCwwLDA7XG4gIC0taW9uLWNvbG9yLW1lZGl1bS1zaGFkZTogI2RlZGNlMDtcbiAgLS1pb24tY29sb3ItbWVkaXVtLXRpbnQ6ICNmY2ZiZmY7XG5cbiAgLS1pb24tY29sb3ItbGlnaHQ6ICNGRkZGRkY7XG4gIC0taW9uLWNvbG9yLWxpZ2h0LXJnYjogMjU1LDI1NSwyNTU7XG4gIC0taW9uLWNvbG9yLWxpZ2h0LWNvbnRyYXN0OiAjMWExYTFhO1xuICAtLWlvbi1jb2xvci1saWdodC1jb250cmFzdC1yZ2I6IDAsMCwwO1xuICAtLWlvbi1jb2xvci1saWdodC1zaGFkZTogI2UwZTBlMDtcbiAgLS1pb24tY29sb3ItbGlnaHQtdGludDogI2ZmZmZmZjtcblxuICAtLWlvbi10ZXh0LWNvbG9yOiAjMWMxYzFjO1xuICAtLWlvbi1pdGVtLWJhY2tncm91bmQ6IHZhcigtLWlvbi1jb2xvci1saWdodCk7XG59XG5cbi8qXG4qIERhcmsgQ29sb3JzXG4qIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiovXG5cbmJvZHkuZGFyayB7XG4gIC0taW9uLWNvbG9yLXByaW1hcnk6ICM3OTI0ZjA7XG4gIC0taW9uLWNvbG9yLXByaW1hcnktcmdiOiAxMjEsMzYsMjQwO1xuICAtLWlvbi1jb2xvci1wcmltYXJ5LWNvbnRyYXN0OiAjZmZmZmZmO1xuICAtLWlvbi1jb2xvci1wcmltYXJ5LWNvbnRyYXN0LXJnYjogMjU1LDI1NSwyNTU7XG4gIC0taW9uLWNvbG9yLXByaW1hcnktc2hhZGU6ICM2YTIwZDM7XG4gIC0taW9uLWNvbG9yLXByaW1hcnktdGludDogIzg2M2FmMjtcblxuICAtLWlvbi1jb2xvci1zZWNvbmRhcnk6ICM2MjJCRDk7XG4gIC0taW9uLWNvbG9yLXNlY29uZGFyeS1yZ2I6IDk4LDQzLDIxNztcbiAgLS1pb24tY29sb3Itc2Vjb25kYXJ5LWNvbnRyYXN0OiAjZmZmZmZmO1xuICAtLWlvbi1jb2xvci1zZWNvbmRhcnktY29udHJhc3QtcmdiOiAyNTUsMjU1LDI1NTtcbiAgLS1pb24tY29sb3Itc2Vjb25kYXJ5LXNoYWRlOiAjNTYyNmJmO1xuICAtLWlvbi1jb2xvci1zZWNvbmRhcnktdGludDogIzcyNDBkZDtcblxuICAtLWlvbi1jb2xvci10ZXJ0aWFyeTogIzc1MkJERjtcbiAgLS1pb24tY29sb3ItdGVydGlhcnktcmdiOiAxMTcsNDMsMjIzO1xuICAtLWlvbi1jb2xvci10ZXJ0aWFyeS1jb250cmFzdDogI2ZmZmZmZjtcbiAgLS1pb24tY29sb3ItdGVydGlhcnktY29udHJhc3QtcmdiOiAyNTUsMjU1LDI1NTtcbiAgLS1pb24tY29sb3ItdGVydGlhcnktc2hhZGU6ICM2NzI2YzQ7XG4gIC0taW9uLWNvbG9yLXRlcnRpYXJ5LXRpbnQ6ICM4MzQwZTI7XG5cbiAgLS1pb24tY29sb3Itc3VjY2VzczogIzMzY2M3MztcbiAgLS1pb24tY29sb3Itc3VjY2Vzcy1yZ2I6IDUxLDIwNCwxMTU7XG4gIC0taW9uLWNvbG9yLXN1Y2Nlc3MtY29udHJhc3Q6ICNmZmZmZmY7XG4gIC0taW9uLWNvbG9yLXN1Y2Nlc3MtY29udHJhc3QtcmdiOiAwLDAsMDtcbiAgLS1pb24tY29sb3Itc3VjY2Vzcy1zaGFkZTogIzJkYjQ2NTtcbiAgLS1pb24tY29sb3Itc3VjY2Vzcy10aW50OiAjNDdkMTgxO1xuXG4gIC0taW9uLWNvbG9yLXdhcm5pbmc6ICNmMmUyMzE7XG4gIC0taW9uLWNvbG9yLXdhcm5pbmctcmdiOiAyNDIsMjI2LDQ5O1xuICAtLWlvbi1jb2xvci13YXJuaW5nLWNvbnRyYXN0OiAjZmZmO1xuICAtLWlvbi1jb2xvci13YXJuaW5nLWNvbnRyYXN0LXJnYjogMjU1LDI1NSwyNTU7XG4gIC0taW9uLWNvbG9yLXdhcm5pbmctc2hhZGU6ICNkNWM3MmI7XG4gIC0taW9uLWNvbG9yLXdhcm5pbmctdGludDogI2YzZTU0NjtcblxuICAtLWlvbi1jb2xvci1kYW5nZXI6ICNlNTNlM2U7XG4gIC0taW9uLWNvbG9yLWRhbmdlci1yZ2I6IDIyOSw2Miw2MjtcbiAgLS1pb24tY29sb3ItZGFuZ2VyLWNvbnRyYXN0OiAjZmZmZmZmO1xuICAtLWlvbi1jb2xvci1kYW5nZXItY29udHJhc3QtcmdiOiAyNTUsMjU1LDI1NTtcbiAgLS1pb24tY29sb3ItZGFuZ2VyLXNoYWRlOiAjY2EzNzM3O1xuICAtLWlvbi1jb2xvci1kYW5nZXItdGludDogI2U4NTE1MTtcblxuICAtLWlvbi1jb2xvci1tZWRpdW06ICMxMjEyMTI7XG4gIC0taW9uLWNvbG9yLW1lZGl1bS1yZ2I6IDE4LDE4LDE4O1xuICAtLWlvbi1jb2xvci1tZWRpdW0tY29udHJhc3Q6ICNmZmZmZmY7XG4gIC0taW9uLWNvbG9yLW1lZGl1bS1jb250cmFzdC1yZ2I6IDI1NSwyNTUsMjU1O1xuICAtLWlvbi1jb2xvci1tZWRpdW0tc2hhZGU6ICMxMDEwMTA7XG4gIC0taW9uLWNvbG9yLW1lZGl1bS10aW50OiAjMmEyYTJhO1xuXG4gIC0taW9uLWNvbG9yLWxpZ2h0OiAjMWQxZDFkO1xuICAtLWlvbi1jb2xvci1saWdodC1yZ2I6IDI5LDI5LDI5O1xuICAtLWlvbi1jb2xvci1saWdodC1jb250cmFzdDogI2ZmZmZmZjtcbiAgLS1pb24tY29sb3ItbGlnaHQtY29udHJhc3QtcmdiOiAyNTUsMjU1LDI1NTtcbiAgLS1pb24tY29sb3ItbGlnaHQtc2hhZGU6ICMxYTFhMWE7XG4gIC0taW9uLWNvbG9yLWxpZ2h0LXRpbnQ6ICMzNDM0MzQ7XG5cbiAgLS1pb24tdGV4dC1jb2xvcjogI2ZmZjtcbiAgLS1pb24taXRlbS1iYWNrZ3JvdW5kOiB2YXIoLS1pb24tY29sb3ItbGlnaHQpO1xufVxuIiwiQGltcG9ydCBcIi4uLy4uLy4uLy4uL3RoZW1lL3ZhcmlhYmxlcy5zY3NzXCI7XG5cbmlvbi1jYXJkICB7XG4gIGNvbG9yOiB2YXIoLS1pb24tdGV4dC1jb2xvcikgIWltcG9ydGFudDtcbn1cblxuLnN1YnRpdGxlLWxhYmVscyB7XG4gIGRpc3BsYXk6IGlubGluZTtcbn1cbiJdfQ== */";

/***/ })

}]);
//# sourceMappingURL=src_app_pages_actions_manage-friends_manage-friends_module_ts.js.map