"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_pages_account_account_module_ts"],{

/***/ 74695:
/*!***********************************************************************************************************************************************************!*\
  !*** ./node_modules/@angular-devkit/build-angular/node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./src/app/pages/account/account.page.html ***!
  \***********************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<ion-content>\n  <app-toolbar></app-toolbar>\n  <ion-grid>\n    <ion-row>\n      <ion-col>\n<!--        <app-card-title-bar [backButton]=\"false\" title=\"{{ 'ACCOUNT.UPDATE_ACCOUNT_INFORMATION.title' | translate }}\"></app-card-title-bar>\n        <ion-card color=\"light\">\n          <ion-card-content>\n            <ion-grid class=\"inside-card-grid\">\n              <ion-row>\n                <ion-col>\n                  <form [formGroup]=\"updateProfileForm\" (ngSubmit)=\"updateProfile()\" novalidate>\n                    <ion-label color=\"danger\">{{ 'ACCOUNT.UPDATE_ACCOUNT_INFORMATION.warning' | translate }}<br></ion-label>\n                    <br>\n                    <ion-item color=\"light\">\n                      <ion-input formControlName=\"name\" type=\"text\" placeholder=\"{{ 'REGISTER.INPUT.name' | translate }}\"></ion-input>\n                    </ion-item>\n                    <app-form-error [errors]=\"updateProfileErrorControl.name.errors\"></app-form-error>\n\n                    <ion-item color=\"light\">\n                      <ion-input formControlName=\"email\" type=\"email\" placeholder=\"{{ 'REGISTER.INPUT.email' | translate }}\"></ion-input>\n                    </ion-item>\n                    <app-form-error [errors]=\"updateProfileErrorControl.email.errors\"></app-form-error>\n\n                    <br><br>\n\n                    <ion-label>\n                      {{ 'GENERAL.createdAt' | translate }} {{ user.created_at | date:( 'GENERAL.exactTimeDisplayFormat' | translate ):( 'GENERAL.timezone' | translate ):( 'GENERAL.locale' | translate ) }}<br>\n                      {{ 'GENERAL.updatedAt' | translate }} {{ user.updated_at | date:( 'GENERAL.exactTimeDisplayFormat' | translate ):( 'GENERAL.timezone' | translate ):( 'GENERAL.locale' | translate ) }}<br>\n                      <div *ngIf=\"user.email_verified_at\">\n                        {{ 'ACCOUNT.UPDATE_ACCOUNT_INFORMATION.emailVerifiedAt' | translate }} {{ user.email_verified_at | date:( 'GENERAL.exactTimeDisplayFormat' | translate ):( 'GENERAL.timezone' | translate ):( 'GENERAL.locale' | translate ) }}\n                      </div>\n                      <div *ngIf=\"!user.email_verified_at\">\n                        {{ 'ACCOUNT.UPDATE_ACCOUNT_INFORMATION.emailNotVerified' | translate }}\n                      </div>\n                    </ion-label>\n\n                    <ion-checkbox class=\"invisible\" formControlName=\"fax\"></ion-checkbox>\n\n                    <div class=\"ion-padding\">\n                      <ion-button *ngIf=\"!isProcessed\" [disabled]=\"(user.name == updateProfileForm.value.name && user.email == updateProfileForm.value.email) || updateProfileForm.invalid || isProcessed\" type=\"submit\" class=\"ion-no-margin\" expand=\"block\" color=\"primary\">{{ 'ACCOUNT.UPDATE_ACCOUNT_INFORMATION.INPUT.updateButton' | translate }}</ion-button>\n                      <ion-button *ngIf=\"isProcessed\" [disabled]=\"updateProfileForm.invalid || isProcessed\" type=\"submit\" class=\"ion-no-margin\" expand=\"block\" color=\"primary\"><ion-spinner name=\"crescent\"></ion-spinner></ion-button>\n                    </div>\n                  </form>\n                </ion-col>\n              </ion-row>\n            </ion-grid>\n          </ion-card-content>\n        </ion-card>\n        <br><br><br>-->\n        <app-card-title-bar [backButton]=\"false\" title=\"{{ 'ACCOUNT.CHANGE_PASSWORD.title' | translate }}\"></app-card-title-bar>\n        <ion-card color=\"light\">\n          <ion-card-content>\n            <ion-grid class=\"inside-card-grid\">\n              <ion-row>\n                <ion-col>\n                  <form [formGroup]=\"changePasswordForm\" (ngSubmit)=\"changePassword()\" novalidate>\n                    <ion-item color=\"light\">\n                      <ion-input formControlName=\"password\" type=\"password\" placeholder=\"{{ 'ACCOUNT.CHANGE_PASSWORD.INPUT.password' | translate }}\"></ion-input>\n                    </ion-item>\n                    <app-form-error [errors]=\"changePasswordErrorControl.password.errors\"></app-form-error>\n\n                    <ion-item color=\"light\">\n                      <ion-input formControlName=\"password_confirmation\" type=\"password\" placeholder=\"{{ 'ACCOUNT.CHANGE_PASSWORD.INPUT.passwordConfirmation' | translate }}\"></ion-input>\n                    </ion-item>\n                    <app-form-error [errors]=\"changePasswordErrorControl.password_confirmation.errors\"></app-form-error>\n\n                    <ion-item color=\"light\">\n                      <ion-input formControlName=\"current_password\" type=\"password\" placeholder=\"{{ 'ACCOUNT.CHANGE_PASSWORD.INPUT.currentPassword' | translate }}\"></ion-input>\n                    </ion-item>\n                    <app-form-error [errors]=\"changePasswordErrorControl.current_password.errors\"></app-form-error>\n\n                    <ion-checkbox class=\"invisible\" formControlName=\"fax\"></ion-checkbox>\n\n                    <div class=\"ion-padding\">\n                      <ion-button *ngIf=\"!isProcessed\" [disabled]=\"changePasswordForm.invalid || isProcessed\" type=\"submit\" class=\"ion-no-margin\" expand=\"block\" color=\"primary\">{{ 'ACCOUNT.CHANGE_PASSWORD.INPUT.changeButton' | translate }}</ion-button>\n                      <ion-button *ngIf=\"isProcessed\" [disabled]=\"changePasswordForm.invalid || isProcessed\" type=\"submit\" class=\"ion-no-margin\" expand=\"block\" color=\"primary\"><ion-spinner name=\"crescent\"></ion-spinner></ion-button>\n                    </div>\n                  </form>\n                </ion-col>\n              </ion-row>\n            </ion-grid>\n          </ion-card-content>\n        </ion-card>\n        <br><br><br>\n        <app-card-title-bar color=\"danger\" [backButton]=\"false\" title=\"{{ 'ACCOUNT.DELETE_ACCOUNT.title' | translate }}\"></app-card-title-bar>\n        <ion-card color=\"light\">\n          <ion-card-content>\n            <ion-grid class=\"inside-card-grid\">\n              <ion-row>\n                <ion-col>\n                  <ion-label color=\"danger\">{{ 'ACCOUNT.DELETE_ACCOUNT.warning' | translate }}<br></ion-label>\n                  <br>\n                  <div class=\"ion-padding\">\n                    <ion-button color=\"danger\" disabled=\"true\" expand=\"block\" (click)=\"deleteAccount()\" class=\"ion-no-margin\">{{ 'ACCOUNT.DELETE_ACCOUNT.INPUT.deleteButton' | translate }}</ion-button>\n                  </div>\n                </ion-col>\n              </ion-row>\n            </ion-grid>\n          </ion-card-content>\n        </ion-card>\n      </ion-col>\n    </ion-row>\n  </ion-grid>\n</ion-content>\n\n");

/***/ }),

/***/ 95058:
/*!*********************************************************!*\
  !*** ./src/app/pages/account/account-routing.module.ts ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AccountPageRoutingModule": () => (/* binding */ AccountPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 21838);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 789);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 9538);
/* harmony import */ var _account_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./account.page */ 86057);




const routes = [
    {
        path: '',
        component: _account_page__WEBPACK_IMPORTED_MODULE_0__.AccountPage
    }
];
let AccountPageRoutingModule = class AccountPageRoutingModule {
};
AccountPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], AccountPageRoutingModule);



/***/ }),

/***/ 30944:
/*!*************************************************!*\
  !*** ./src/app/pages/account/account.module.ts ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AccountPageModule": () => (/* binding */ AccountPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! tslib */ 21838);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 789);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ 2006);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/forms */ 43459);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/common/http */ 45331);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ionic/angular */ 30585);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @ngx-translate/core */ 52784);
/* harmony import */ var _account_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./account-routing.module */ 95058);
/* harmony import */ var _components_components_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../components/components.module */ 96453);
/* harmony import */ var _account_page__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./account.page */ 86057);
/* harmony import */ var src_app_app_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/app.module */ 92014);











let AccountPageModule = class AccountPageModule {
};
AccountPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_5__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_6__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_7__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_8__.IonicModule,
            _account_routing_module__WEBPACK_IMPORTED_MODULE_0__.AccountPageRoutingModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_7__.ReactiveFormsModule,
            _components_components_module__WEBPACK_IMPORTED_MODULE_1__.ComponentsModule,
            _ngx_translate_core__WEBPACK_IMPORTED_MODULE_9__.TranslateModule.forChild({
                loader: {
                    provide: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_9__.TranslateLoader,
                    useFactory: src_app_app_module__WEBPACK_IMPORTED_MODULE_3__.createTranslateLoader,
                    deps: [_angular_common_http__WEBPACK_IMPORTED_MODULE_10__.HttpClient]
                }
            })
        ],
        declarations: [_account_page__WEBPACK_IMPORTED_MODULE_2__.AccountPage]
    })
], AccountPageModule);



/***/ }),

/***/ 86057:
/*!***********************************************!*\
  !*** ./src/app/pages/account/account.page.ts ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AccountPage": () => (/* binding */ AccountPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! tslib */ 21838);
/* harmony import */ var _home_vagrant_projects_Vnint_node_modules_angular_devkit_build_angular_node_modules_ngtools_webpack_src_loaders_direct_resource_js_account_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !./node_modules/@angular-devkit/build-angular/node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./account.page.html */ 74695);
/* harmony import */ var _account_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./account.page.scss */ 16897);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/core */ 789);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 43459);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ionic/angular */ 30585);
/* harmony import */ var src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/auth.service */ 56898);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ngx-translate/core */ 52784);
/* harmony import */ var src_app_services_error_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/error.service */ 55729);
/* harmony import */ var _services_alert_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../services/alert.service */ 92677);










let AccountPage = class AccountPage {
    constructor(formBuilder, auth, alertController, translate, errorService, alertService) {
        this.formBuilder = formBuilder;
        this.auth = auth;
        this.alertController = alertController;
        this.translate = translate;
        this.errorService = errorService;
        this.alertService = alertService;
        this.isProcessed = false;
        this.user = {
            id: 0,
            name: 'Not yet loaded',
            email: 'Not yet loaded',
            email_verified_at: null,
            project_id: 0,
            created_at: null,
            updated_at: null,
        };
    }
    ngOnInit() {
        this.updateProfileForm = this.formBuilder.group({
            name: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_5__.Validators.required],
            email: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_5__.Validators.required],
            fax: ['']
        });
        this.changePasswordForm = this.formBuilder.group({
            password: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_5__.Validators.required],
            password_confirmation: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_5__.Validators.required],
            current_password: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_5__.Validators.required],
            fax: ['']
        });
    }
    ionViewWillEnter() {
        this.isProcessed = false;
        this.getUser();
    }
    get updateProfileErrorControl() {
        return this.updateProfileForm.controls;
    }
    get changePasswordErrorControl() {
        return this.changePasswordForm.controls;
    }
    getUser() {
        this.auth.user().subscribe({
            error: error => {
                this.errorService.errorOccurred.emit(error);
            },
            next: response => {
                const resp = response;
                this.user = JSON.parse(JSON.stringify(resp.user));
                this.updateProfileForm.patchValue(resp.user);
            },
        });
    }
    updateProfile() {
        if (!this.isProcessed && !this.updateProfileForm.value.fax && !(this.user.name == this.updateProfileForm.value.name && this.user.email == this.updateProfileForm.value.email)) {
            this.isProcessed = true;
            if (!this.updateProfileForm.valid) {
                return false;
            }
            else {
                this.auth.updateProfile(this.updateProfileForm.value).subscribe({
                    error: error => {
                        if (error.error.message == 'The given data was invalid.') {
                            for (const errorType in error.error.errors) {
                                let errors = [];
                                for (const errorMessage in error.error.errors[errorType]) {
                                    errors.push({ [error.error.errors[errorType][errorMessage]]: true });
                                }
                                this.updateProfileForm.controls[errorType].setErrors(errors);
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
                    next: () => { },
                    complete: () => {
                        this.updateProfileForm.reset();
                        this.getUser();
                        this.isProcessed = false;
                        this.auth.authChanged.emit('account updated');
                    },
                });
            }
        }
    }
    changePassword() {
        if (!this.isProcessed && !this.changePasswordForm.value.fax) {
            this.isProcessed = true;
            if (!this.changePasswordForm.valid) {
                return false;
            }
            else {
                this.auth.changePassword(this.changePasswordForm.value).subscribe({
                    error: error => {
                        if (error.error.message == 'The given data was invalid.') {
                            for (const errorType in error.error.errors) {
                                let errors = [];
                                for (const errorMessage in error.error.errors[errorType]) {
                                    errors.push({ [error.error.errors[errorType][errorMessage]]: true });
                                }
                                this.changePasswordForm.controls[errorType].setErrors(errors);
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
                        let resp = response;
                        this.alertService.alert("success", this.translate.instant('ACCOUNT.CHANGE_PASSWORD.title'), resp.message, 'checkmark');
                    },
                    complete: () => {
                        this.changePasswordForm.reset();
                        this.isProcessed = false;
                    },
                });
            }
        }
    }
    deleteAccount() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_6__.__awaiter)(this, void 0, void 0, function* () {
            const alert = yield this.alertController.create({
                header: this.translate.instant('ACCOUNT.DELETE_ACCOUNT.INPUT.alertHeader'),
                message: this.translate.instant('ACCOUNT.DELETE_ACCOUNT.INPUT.alertText'),
                buttons: [
                    {
                        cssClass: 'cancel-text',
                        text: this.translate.instant('GENERAL.POPUPS.cancel'),
                        role: 'cancel',
                    }, {
                        text: this.translate.instant('ACCOUNT.DELETE_ACCOUNT.INPUT.deleteButton'),
                        handler: () => {
                            console.log('Confirm Okay');
                            console.log('Delete account ... (not yet implemented)');
                        }
                    }
                ]
            });
            yield alert.present();
        });
    }
};
AccountPage.ctorParameters = () => [
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormBuilder },
    { type: src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_2__.AuthService },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_7__.AlertController },
    { type: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_8__.TranslateService },
    { type: src_app_services_error_service__WEBPACK_IMPORTED_MODULE_3__.ErrorService },
    { type: _services_alert_service__WEBPACK_IMPORTED_MODULE_4__.AlertService }
];
AccountPage = (0,tslib__WEBPACK_IMPORTED_MODULE_6__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_9__.Component)({
        selector: 'app-account',
        template: _home_vagrant_projects_Vnint_node_modules_angular_devkit_build_angular_node_modules_ngtools_webpack_src_loaders_direct_resource_js_account_page_html__WEBPACK_IMPORTED_MODULE_0__["default"],
        styles: [_account_page_scss__WEBPACK_IMPORTED_MODULE_1__]
    })
], AccountPage);



/***/ }),

/***/ 16897:
/*!*************************************************!*\
  !*** ./src/app/pages/account/account.page.scss ***!
  \*************************************************/
/***/ ((module) => {

module.exports = "/** Ionic CSS Variables **/\n@font-face {\n  font-family: \"Montserrat\", sans-serif;\n}\n:root {\n  --ion-font-family: \"Montserrat\", sans-serif;\n}\n/*\n* Light Colors\n* -------------------------------------------\n*/\n:root {\n  --ion-color-primary: #6411D9;\n  --ion-color-primary-rgb: 100,17,217;\n  --ion-color-primary-contrast: #ffffff;\n  --ion-color-primary-contrast-rgb: 255,255,255;\n  --ion-color-primary-shade: #580fbf;\n  --ion-color-primary-tint: #7429dd;\n  --ion-color-secondary: #622BD9;\n  --ion-color-secondary-rgb: 98,43,217;\n  --ion-color-secondary-contrast: #ffffff;\n  --ion-color-secondary-contrast-rgb: 255,255,255;\n  --ion-color-secondary-shade: #5626bf;\n  --ion-color-secondary-tint: #7240dd;\n  --ion-color-tertiary: #752BDF;\n  --ion-color-tertiary-rgb: 117,43,223;\n  --ion-color-tertiary-contrast: #ffffff;\n  --ion-color-tertiary-contrast-rgb: 255,255,255;\n  --ion-color-tertiary-shade: #6726c4;\n  --ion-color-tertiary-tint: #8340e2;\n  --ion-color-success: #33cc73;\n  --ion-color-success-rgb: 51,204,115;\n  --ion-color-success-contrast: #ffffff;\n  --ion-color-success-contrast-rgb: 0,0,0;\n  --ion-color-success-shade: #2db465;\n  --ion-color-success-tint: #47d181;\n  --ion-color-warning: #f2e231;\n  --ion-color-warning-rgb: 242,226,49;\n  --ion-color-warning-contrast: #fff;\n  --ion-color-warning-contrast-rgb: 255,255,255;\n  --ion-color-warning-shade: #d5c72b;\n  --ion-color-warning-tint: #f3e546;\n  --ion-color-danger: #e53e3e;\n  --ion-color-danger-rgb: 229,62,62;\n  --ion-color-danger-contrast: #ffffff;\n  --ion-color-danger-contrast-rgb: 255,255,255;\n  --ion-color-danger-shade: #ca3737;\n  --ion-color-danger-tint: #e85151;\n  --ion-color-medium: #fcfaff;\n  --ion-color-medium-rgb: 252,250,255;\n  --ion-color-medium-contrast: #000000;\n  --ion-color-medium-contrast-rgb: 0,0,0;\n  --ion-color-medium-shade: #dedce0;\n  --ion-color-medium-tint: #fcfbff;\n  --ion-color-light: #FFFFFF;\n  --ion-color-light-rgb: 255,255,255;\n  --ion-color-light-contrast: #1a1a1a;\n  --ion-color-light-contrast-rgb: 0,0,0;\n  --ion-color-light-shade: #e0e0e0;\n  --ion-color-light-tint: #ffffff;\n  --ion-text-color: #1c1c1c;\n  --ion-item-background: var(--ion-color-light);\n}\n/*\n* Dark Colors\n* -------------------------------------------\n*/\nbody.dark {\n  --ion-color-primary: #7924f0;\n  --ion-color-primary-rgb: 121,36,240;\n  --ion-color-primary-contrast: #ffffff;\n  --ion-color-primary-contrast-rgb: 255,255,255;\n  --ion-color-primary-shade: #6a20d3;\n  --ion-color-primary-tint: #863af2;\n  --ion-color-secondary: #622BD9;\n  --ion-color-secondary-rgb: 98,43,217;\n  --ion-color-secondary-contrast: #ffffff;\n  --ion-color-secondary-contrast-rgb: 255,255,255;\n  --ion-color-secondary-shade: #5626bf;\n  --ion-color-secondary-tint: #7240dd;\n  --ion-color-tertiary: #752BDF;\n  --ion-color-tertiary-rgb: 117,43,223;\n  --ion-color-tertiary-contrast: #ffffff;\n  --ion-color-tertiary-contrast-rgb: 255,255,255;\n  --ion-color-tertiary-shade: #6726c4;\n  --ion-color-tertiary-tint: #8340e2;\n  --ion-color-success: #33cc73;\n  --ion-color-success-rgb: 51,204,115;\n  --ion-color-success-contrast: #ffffff;\n  --ion-color-success-contrast-rgb: 0,0,0;\n  --ion-color-success-shade: #2db465;\n  --ion-color-success-tint: #47d181;\n  --ion-color-warning: #f2e231;\n  --ion-color-warning-rgb: 242,226,49;\n  --ion-color-warning-contrast: #fff;\n  --ion-color-warning-contrast-rgb: 255,255,255;\n  --ion-color-warning-shade: #d5c72b;\n  --ion-color-warning-tint: #f3e546;\n  --ion-color-danger: #e53e3e;\n  --ion-color-danger-rgb: 229,62,62;\n  --ion-color-danger-contrast: #ffffff;\n  --ion-color-danger-contrast-rgb: 255,255,255;\n  --ion-color-danger-shade: #ca3737;\n  --ion-color-danger-tint: #e85151;\n  --ion-color-medium: #121212;\n  --ion-color-medium-rgb: 18,18,18;\n  --ion-color-medium-contrast: #ffffff;\n  --ion-color-medium-contrast-rgb: 255,255,255;\n  --ion-color-medium-shade: #101010;\n  --ion-color-medium-tint: #2a2a2a;\n  --ion-color-light: #1d1d1d;\n  --ion-color-light-rgb: 29,29,29;\n  --ion-color-light-contrast: #ffffff;\n  --ion-color-light-contrast-rgb: 255,255,255;\n  --ion-color-light-shade: #1a1a1a;\n  --ion-color-light-tint: #343434;\n  --ion-text-color: #fff;\n  --ion-item-background: var(--ion-color-light);\n}\nform {\n  padding-top: 10px;\n}\nhr {\n  background-color: var(--ion-color-step-550, #737373);\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3RoZW1lL3ZhcmlhYmxlcy5zY3NzIiwiYWNjb3VudC5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBR0EsMEJBQUE7QUFFQTtFQUNFLHFDQUFBO0FDSEY7QURNQTtFQUNFLDJDQUFBO0FDSkY7QURPQTs7O0NBQUE7QUFLQTtFQUNFLDRCQUFBO0VBQ0EsbUNBQUE7RUFDQSxxQ0FBQTtFQUNBLDZDQUFBO0VBQ0Esa0NBQUE7RUFDQSxpQ0FBQTtFQUVBLDhCQUFBO0VBQ0Esb0NBQUE7RUFDQSx1Q0FBQTtFQUNBLCtDQUFBO0VBQ0Esb0NBQUE7RUFDQSxtQ0FBQTtFQUVBLDZCQUFBO0VBQ0Esb0NBQUE7RUFDQSxzQ0FBQTtFQUNBLDhDQUFBO0VBQ0EsbUNBQUE7RUFDQSxrQ0FBQTtFQUVBLDRCQUFBO0VBQ0EsbUNBQUE7RUFDQSxxQ0FBQTtFQUNBLHVDQUFBO0VBQ0Esa0NBQUE7RUFDQSxpQ0FBQTtFQUVBLDRCQUFBO0VBQ0EsbUNBQUE7RUFDQSxrQ0FBQTtFQUNBLDZDQUFBO0VBQ0Esa0NBQUE7RUFDQSxpQ0FBQTtFQUVBLDJCQUFBO0VBQ0EsaUNBQUE7RUFDQSxvQ0FBQTtFQUNBLDRDQUFBO0VBQ0EsaUNBQUE7RUFDQSxnQ0FBQTtFQUVBLDJCQUFBO0VBQ0EsbUNBQUE7RUFDQSxvQ0FBQTtFQUNBLHNDQUFBO0VBQ0EsaUNBQUE7RUFDQSxnQ0FBQTtFQUVBLDBCQUFBO0VBQ0Esa0NBQUE7RUFDQSxtQ0FBQTtFQUNBLHFDQUFBO0VBQ0EsZ0NBQUE7RUFDQSwrQkFBQTtFQUVBLHlCQUFBO0VBQ0EsNkNBQUE7QUNiRjtBRGdCQTs7O0NBQUE7QUFLQTtFQUNFLDRCQUFBO0VBQ0EsbUNBQUE7RUFDQSxxQ0FBQTtFQUNBLDZDQUFBO0VBQ0Esa0NBQUE7RUFDQSxpQ0FBQTtFQUVBLDhCQUFBO0VBQ0Esb0NBQUE7RUFDQSx1Q0FBQTtFQUNBLCtDQUFBO0VBQ0Esb0NBQUE7RUFDQSxtQ0FBQTtFQUVBLDZCQUFBO0VBQ0Esb0NBQUE7RUFDQSxzQ0FBQTtFQUNBLDhDQUFBO0VBQ0EsbUNBQUE7RUFDQSxrQ0FBQTtFQUVBLDRCQUFBO0VBQ0EsbUNBQUE7RUFDQSxxQ0FBQTtFQUNBLHVDQUFBO0VBQ0Esa0NBQUE7RUFDQSxpQ0FBQTtFQUVBLDRCQUFBO0VBQ0EsbUNBQUE7RUFDQSxrQ0FBQTtFQUNBLDZDQUFBO0VBQ0Esa0NBQUE7RUFDQSxpQ0FBQTtFQUVBLDJCQUFBO0VBQ0EsaUNBQUE7RUFDQSxvQ0FBQTtFQUNBLDRDQUFBO0VBQ0EsaUNBQUE7RUFDQSxnQ0FBQTtFQUVBLDJCQUFBO0VBQ0EsZ0NBQUE7RUFDQSxvQ0FBQTtFQUNBLDRDQUFBO0VBQ0EsaUNBQUE7RUFDQSxnQ0FBQTtFQUVBLDBCQUFBO0VBQ0EsK0JBQUE7RUFDQSxtQ0FBQTtFQUNBLDJDQUFBO0VBQ0EsZ0NBQUE7RUFDQSwrQkFBQTtFQUVBLHNCQUFBO0VBQ0EsNkNBQUE7QUN0QkY7QUF0SEE7RUFDRSxpQkFBQTtBQXlIRjtBQXRIQTtFQUNFLG9EQUFBO0FBeUhGIiwiZmlsZSI6ImFjY291bnQucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLy8gSW9uaWMgVmFyaWFibGVzIGFuZCBUaGVtaW5nLiBGb3IgbW9yZSBpbmZvLCBwbGVhc2Ugc2VlOlxuLy8gaHR0cDovL2lvbmljZnJhbWV3b3JrLmNvbS9kb2NzL3RoZW1pbmcvXG5cbi8qKiBJb25pYyBDU1MgVmFyaWFibGVzICoqL1xuXG5AZm9udC1mYWNlIHtcbiAgZm9udC1mYW1pbHk6ICdNb250c2VycmF0Jywgc2Fucy1zZXJpZjtcbn1cblxuOnJvb3Qge1xuICAtLWlvbi1mb250LWZhbWlseTogJ01vbnRzZXJyYXQnLCBzYW5zLXNlcmlmO1xufVxuXG4vKlxuKiBMaWdodCBDb2xvcnNcbiogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuKi9cblxuOnJvb3Qge1xuICAtLWlvbi1jb2xvci1wcmltYXJ5OiAjNjQxMUQ5O1xuICAtLWlvbi1jb2xvci1wcmltYXJ5LXJnYjogMTAwLDE3LDIxNztcbiAgLS1pb24tY29sb3ItcHJpbWFyeS1jb250cmFzdDogI2ZmZmZmZjtcbiAgLS1pb24tY29sb3ItcHJpbWFyeS1jb250cmFzdC1yZ2I6IDI1NSwyNTUsMjU1O1xuICAtLWlvbi1jb2xvci1wcmltYXJ5LXNoYWRlOiAjNTgwZmJmO1xuICAtLWlvbi1jb2xvci1wcmltYXJ5LXRpbnQ6ICM3NDI5ZGQ7XG5cbiAgLS1pb24tY29sb3Itc2Vjb25kYXJ5OiAjNjIyQkQ5O1xuICAtLWlvbi1jb2xvci1zZWNvbmRhcnktcmdiOiA5OCw0MywyMTc7XG4gIC0taW9uLWNvbG9yLXNlY29uZGFyeS1jb250cmFzdDogI2ZmZmZmZjtcbiAgLS1pb24tY29sb3Itc2Vjb25kYXJ5LWNvbnRyYXN0LXJnYjogMjU1LDI1NSwyNTU7XG4gIC0taW9uLWNvbG9yLXNlY29uZGFyeS1zaGFkZTogIzU2MjZiZjtcbiAgLS1pb24tY29sb3Itc2Vjb25kYXJ5LXRpbnQ6ICM3MjQwZGQ7XG5cbiAgLS1pb24tY29sb3ItdGVydGlhcnk6ICM3NTJCREY7XG4gIC0taW9uLWNvbG9yLXRlcnRpYXJ5LXJnYjogMTE3LDQzLDIyMztcbiAgLS1pb24tY29sb3ItdGVydGlhcnktY29udHJhc3Q6ICNmZmZmZmY7XG4gIC0taW9uLWNvbG9yLXRlcnRpYXJ5LWNvbnRyYXN0LXJnYjogMjU1LDI1NSwyNTU7XG4gIC0taW9uLWNvbG9yLXRlcnRpYXJ5LXNoYWRlOiAjNjcyNmM0O1xuICAtLWlvbi1jb2xvci10ZXJ0aWFyeS10aW50OiAjODM0MGUyO1xuXG4gIC0taW9uLWNvbG9yLXN1Y2Nlc3M6ICMzM2NjNzM7XG4gIC0taW9uLWNvbG9yLXN1Y2Nlc3MtcmdiOiA1MSwyMDQsMTE1O1xuICAtLWlvbi1jb2xvci1zdWNjZXNzLWNvbnRyYXN0OiAjZmZmZmZmO1xuICAtLWlvbi1jb2xvci1zdWNjZXNzLWNvbnRyYXN0LXJnYjogMCwwLDA7XG4gIC0taW9uLWNvbG9yLXN1Y2Nlc3Mtc2hhZGU6ICMyZGI0NjU7XG4gIC0taW9uLWNvbG9yLXN1Y2Nlc3MtdGludDogIzQ3ZDE4MTtcblxuICAtLWlvbi1jb2xvci13YXJuaW5nOiAjZjJlMjMxO1xuICAtLWlvbi1jb2xvci13YXJuaW5nLXJnYjogMjQyLDIyNiw0OTtcbiAgLS1pb24tY29sb3Itd2FybmluZy1jb250cmFzdDogI2ZmZjtcbiAgLS1pb24tY29sb3Itd2FybmluZy1jb250cmFzdC1yZ2I6IDI1NSwyNTUsMjU1O1xuICAtLWlvbi1jb2xvci13YXJuaW5nLXNoYWRlOiAjZDVjNzJiO1xuICAtLWlvbi1jb2xvci13YXJuaW5nLXRpbnQ6ICNmM2U1NDY7XG5cbiAgLS1pb24tY29sb3ItZGFuZ2VyOiAjZTUzZTNlO1xuICAtLWlvbi1jb2xvci1kYW5nZXItcmdiOiAyMjksNjIsNjI7XG4gIC0taW9uLWNvbG9yLWRhbmdlci1jb250cmFzdDogI2ZmZmZmZjtcbiAgLS1pb24tY29sb3ItZGFuZ2VyLWNvbnRyYXN0LXJnYjogMjU1LDI1NSwyNTU7XG4gIC0taW9uLWNvbG9yLWRhbmdlci1zaGFkZTogI2NhMzczNztcbiAgLS1pb24tY29sb3ItZGFuZ2VyLXRpbnQ6ICNlODUxNTE7XG5cbiAgLS1pb24tY29sb3ItbWVkaXVtOiAjZmNmYWZmO1xuICAtLWlvbi1jb2xvci1tZWRpdW0tcmdiOiAyNTIsMjUwLDI1NTtcbiAgLS1pb24tY29sb3ItbWVkaXVtLWNvbnRyYXN0OiAjMDAwMDAwO1xuICAtLWlvbi1jb2xvci1tZWRpdW0tY29udHJhc3QtcmdiOiAwLDAsMDtcbiAgLS1pb24tY29sb3ItbWVkaXVtLXNoYWRlOiAjZGVkY2UwO1xuICAtLWlvbi1jb2xvci1tZWRpdW0tdGludDogI2ZjZmJmZjtcblxuICAtLWlvbi1jb2xvci1saWdodDogI0ZGRkZGRjtcbiAgLS1pb24tY29sb3ItbGlnaHQtcmdiOiAyNTUsMjU1LDI1NTtcbiAgLS1pb24tY29sb3ItbGlnaHQtY29udHJhc3Q6ICMxYTFhMWE7XG4gIC0taW9uLWNvbG9yLWxpZ2h0LWNvbnRyYXN0LXJnYjogMCwwLDA7XG4gIC0taW9uLWNvbG9yLWxpZ2h0LXNoYWRlOiAjZTBlMGUwO1xuICAtLWlvbi1jb2xvci1saWdodC10aW50OiAjZmZmZmZmO1xuXG4gIC0taW9uLXRleHQtY29sb3I6ICMxYzFjMWM7XG4gIC0taW9uLWl0ZW0tYmFja2dyb3VuZDogdmFyKC0taW9uLWNvbG9yLWxpZ2h0KTtcbn1cblxuLypcbiogRGFyayBDb2xvcnNcbiogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuKi9cblxuYm9keS5kYXJrIHtcbiAgLS1pb24tY29sb3ItcHJpbWFyeTogIzc5MjRmMDtcbiAgLS1pb24tY29sb3ItcHJpbWFyeS1yZ2I6IDEyMSwzNiwyNDA7XG4gIC0taW9uLWNvbG9yLXByaW1hcnktY29udHJhc3Q6ICNmZmZmZmY7XG4gIC0taW9uLWNvbG9yLXByaW1hcnktY29udHJhc3QtcmdiOiAyNTUsMjU1LDI1NTtcbiAgLS1pb24tY29sb3ItcHJpbWFyeS1zaGFkZTogIzZhMjBkMztcbiAgLS1pb24tY29sb3ItcHJpbWFyeS10aW50OiAjODYzYWYyO1xuXG4gIC0taW9uLWNvbG9yLXNlY29uZGFyeTogIzYyMkJEOTtcbiAgLS1pb24tY29sb3Itc2Vjb25kYXJ5LXJnYjogOTgsNDMsMjE3O1xuICAtLWlvbi1jb2xvci1zZWNvbmRhcnktY29udHJhc3Q6ICNmZmZmZmY7XG4gIC0taW9uLWNvbG9yLXNlY29uZGFyeS1jb250cmFzdC1yZ2I6IDI1NSwyNTUsMjU1O1xuICAtLWlvbi1jb2xvci1zZWNvbmRhcnktc2hhZGU6ICM1NjI2YmY7XG4gIC0taW9uLWNvbG9yLXNlY29uZGFyeS10aW50OiAjNzI0MGRkO1xuXG4gIC0taW9uLWNvbG9yLXRlcnRpYXJ5OiAjNzUyQkRGO1xuICAtLWlvbi1jb2xvci10ZXJ0aWFyeS1yZ2I6IDExNyw0MywyMjM7XG4gIC0taW9uLWNvbG9yLXRlcnRpYXJ5LWNvbnRyYXN0OiAjZmZmZmZmO1xuICAtLWlvbi1jb2xvci10ZXJ0aWFyeS1jb250cmFzdC1yZ2I6IDI1NSwyNTUsMjU1O1xuICAtLWlvbi1jb2xvci10ZXJ0aWFyeS1zaGFkZTogIzY3MjZjNDtcbiAgLS1pb24tY29sb3ItdGVydGlhcnktdGludDogIzgzNDBlMjtcblxuICAtLWlvbi1jb2xvci1zdWNjZXNzOiAjMzNjYzczO1xuICAtLWlvbi1jb2xvci1zdWNjZXNzLXJnYjogNTEsMjA0LDExNTtcbiAgLS1pb24tY29sb3Itc3VjY2Vzcy1jb250cmFzdDogI2ZmZmZmZjtcbiAgLS1pb24tY29sb3Itc3VjY2Vzcy1jb250cmFzdC1yZ2I6IDAsMCwwO1xuICAtLWlvbi1jb2xvci1zdWNjZXNzLXNoYWRlOiAjMmRiNDY1O1xuICAtLWlvbi1jb2xvci1zdWNjZXNzLXRpbnQ6ICM0N2QxODE7XG5cbiAgLS1pb24tY29sb3Itd2FybmluZzogI2YyZTIzMTtcbiAgLS1pb24tY29sb3Itd2FybmluZy1yZ2I6IDI0MiwyMjYsNDk7XG4gIC0taW9uLWNvbG9yLXdhcm5pbmctY29udHJhc3Q6ICNmZmY7XG4gIC0taW9uLWNvbG9yLXdhcm5pbmctY29udHJhc3QtcmdiOiAyNTUsMjU1LDI1NTtcbiAgLS1pb24tY29sb3Itd2FybmluZy1zaGFkZTogI2Q1YzcyYjtcbiAgLS1pb24tY29sb3Itd2FybmluZy10aW50OiAjZjNlNTQ2O1xuXG4gIC0taW9uLWNvbG9yLWRhbmdlcjogI2U1M2UzZTtcbiAgLS1pb24tY29sb3ItZGFuZ2VyLXJnYjogMjI5LDYyLDYyO1xuICAtLWlvbi1jb2xvci1kYW5nZXItY29udHJhc3Q6ICNmZmZmZmY7XG4gIC0taW9uLWNvbG9yLWRhbmdlci1jb250cmFzdC1yZ2I6IDI1NSwyNTUsMjU1O1xuICAtLWlvbi1jb2xvci1kYW5nZXItc2hhZGU6ICNjYTM3Mzc7XG4gIC0taW9uLWNvbG9yLWRhbmdlci10aW50OiAjZTg1MTUxO1xuXG4gIC0taW9uLWNvbG9yLW1lZGl1bTogIzEyMTIxMjtcbiAgLS1pb24tY29sb3ItbWVkaXVtLXJnYjogMTgsMTgsMTg7XG4gIC0taW9uLWNvbG9yLW1lZGl1bS1jb250cmFzdDogI2ZmZmZmZjtcbiAgLS1pb24tY29sb3ItbWVkaXVtLWNvbnRyYXN0LXJnYjogMjU1LDI1NSwyNTU7XG4gIC0taW9uLWNvbG9yLW1lZGl1bS1zaGFkZTogIzEwMTAxMDtcbiAgLS1pb24tY29sb3ItbWVkaXVtLXRpbnQ6ICMyYTJhMmE7XG5cbiAgLS1pb24tY29sb3ItbGlnaHQ6ICMxZDFkMWQ7XG4gIC0taW9uLWNvbG9yLWxpZ2h0LXJnYjogMjksMjksMjk7XG4gIC0taW9uLWNvbG9yLWxpZ2h0LWNvbnRyYXN0OiAjZmZmZmZmO1xuICAtLWlvbi1jb2xvci1saWdodC1jb250cmFzdC1yZ2I6IDI1NSwyNTUsMjU1O1xuICAtLWlvbi1jb2xvci1saWdodC1zaGFkZTogIzFhMWExYTtcbiAgLS1pb24tY29sb3ItbGlnaHQtdGludDogIzM0MzQzNDtcblxuICAtLWlvbi10ZXh0LWNvbG9yOiAjZmZmO1xuICAtLWlvbi1pdGVtLWJhY2tncm91bmQ6IHZhcigtLWlvbi1jb2xvci1saWdodCk7XG59XG4iLCJAaW1wb3J0IFwiLi4vLi4vLi4vdGhlbWUvdmFyaWFibGVzLnNjc3NcIjtcblxuZm9ybSB7XG4gIHBhZGRpbmctdG9wOiAxMHB4O1xufVxuXG5ociB7XG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWlvbi1jb2xvci1zdGVwLTU1MCwgIzczNzM3Myk7XG59XG4iXX0= */";

/***/ })

}]);
//# sourceMappingURL=src_app_pages_account_account_module_ts.js.map