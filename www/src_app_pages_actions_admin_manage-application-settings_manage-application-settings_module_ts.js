"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_pages_actions_admin_manage-application-settings_manage-application-settings_module_ts"],{

/***/ 52799:
/*!*****************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/@angular-devkit/build-angular/node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./src/app/pages/actions/admin/manage-application-settings/manage-application-settings.page.html ***!
  \*****************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<ion-content>\n  <app-toolbar></app-toolbar>\n  <ion-grid>\n    <ion-row>\n      <ion-col>\n        <app-card-title-bar title=\"{{ 'ACTIONS.MANAGE_APPLICATION_SETTINGS.title' | translate }}\"></app-card-title-bar>\n        <ion-card color=\"light\">\n          <ion-card-content>\n            <ion-grid class=\"inside-card-grid\">\n              <ion-row>\n                <ion-col>\n                  <form [formGroup]=\"updateApplicationSettingsForm\" (ngSubmit)=\"updateApplicationSettings()\">\n                    <ion-item color=\"light\">\n                      <ion-label position=\"floating\">{{ 'ACTIONS.MANAGE_APPLICATION_SETTINGS.INPUT.non_guest_email_domain' | translate }}</ion-label>\n                      <ion-input formControlName=\"non_guest_email_domain\" type=\"text\"></ion-input>\n                    </ion-item>\n                    <app-form-error [errors]=\"errorControl.non_guest_email_domain.errors\"></app-form-error>\n\n                    <br>\n\n                    <ion-item color=\"light\">\n                      <ion-label position=\"floating\">{{ 'ACTIONS.MANAGE_APPLICATION_SETTINGS.INPUT.max_friends' | translate }}</ion-label>\n                      <ion-input formControlName=\"max_friends\" type=\"number\"></ion-input>\n                    </ion-item>\n                    <app-form-error [errors]=\"errorControl.max_friends.errors\"></app-form-error>\n\n                    <br>\n\n                    <ion-item color=\"light\">\n                      <ion-label position=\"floating\">{{ 'ACTIONS.MANAGE_APPLICATION_SETTINGS.INPUT.min_preferences' | translate }}</ion-label>\n                      <ion-input formControlName=\"min_preferences\" type=\"number\"></ion-input>\n                    </ion-item>\n                    <app-form-error [errors]=\"errorControl.min_preferences.errors\"></app-form-error>\n\n                    <br>\n\n                    <ion-item color=\"light\">\n                      <ion-label position=\"floating\">{{ 'ACTIONS.MANAGE_APPLICATION_SETTINGS.INPUT.max_preferences' | translate }}</ion-label>\n                      <ion-input formControlName=\"max_preferences\" type=\"number\"></ion-input>\n                    </ion-item>\n                    <app-form-error [errors]=\"errorControl.max_preferences.errors\"></app-form-error>\n\n                    <div class=\"ion-padding\">\n                      <ion-button *ngIf=\"!isProcessed\" type=\"submit\" [disabled]=\"updateApplicationSettingsForm.invalid || isProcessed || !permissions.includes('applicationsettings.update') || !eventPermissions.includes('applicationsettings.update')\" class=\"ion-no-margin\" expand=\"block\" color=\"primary\">{{ 'ACTIONS.MANAGE_APPLICATION_SETTINGS.INPUT.submitButton' | translate }}</ion-button>\n                      <ion-button *ngIf=\"isProcessed\" type=\"submit\" [disabled]=\"updateApplicationSettingsForm.invalid || isProcessed\" class=\"ion-no-margin\" expand=\"block\" color=\"primary\"><ion-spinner name=\"crescent\"></ion-spinner></ion-button>\n                    </div>\n                  </form>\n                </ion-col>\n              </ion-row>\n            </ion-grid>\n          </ion-card-content>\n        </ion-card>\n      </ion-col>\n    </ion-row>\n  </ion-grid>\n</ion-content>\n");

/***/ }),

/***/ 76683:
/*!***************************************************************************************************************!*\
  !*** ./src/app/pages/actions/admin/manage-application-settings/manage-application-settings-routing.module.ts ***!
  \***************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ManageApplicationSettingsPageRoutingModule": () => (/* binding */ ManageApplicationSettingsPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 21838);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 789);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 9538);
/* harmony import */ var _manage_application_settings_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./manage-application-settings.page */ 29830);




const routes = [
    {
        path: '',
        component: _manage_application_settings_page__WEBPACK_IMPORTED_MODULE_0__.ManageApplicationSettingsPage
    }
];
let ManageApplicationSettingsPageRoutingModule = class ManageApplicationSettingsPageRoutingModule {
};
ManageApplicationSettingsPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], ManageApplicationSettingsPageRoutingModule);



/***/ }),

/***/ 4835:
/*!*******************************************************************************************************!*\
  !*** ./src/app/pages/actions/admin/manage-application-settings/manage-application-settings.module.ts ***!
  \*******************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ManageApplicationSettingsPageModule": () => (/* binding */ ManageApplicationSettingsPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! tslib */ 21838);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 789);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ 2006);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/forms */ 43459);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ionic/angular */ 30585);
/* harmony import */ var _manage_application_settings_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./manage-application-settings-routing.module */ 76683);
/* harmony import */ var _manage_application_settings_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./manage-application-settings.page */ 29830);
/* harmony import */ var _components_components_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../components/components.module */ 96453);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @ngx-translate/core */ 52784);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/common/http */ 45331);
/* harmony import */ var src_app_app_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/app.module */ 92014);











let ManageApplicationSettingsPageModule = class ManageApplicationSettingsPageModule {
};
ManageApplicationSettingsPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_5__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_6__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_7__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_8__.IonicModule,
            _manage_application_settings_routing_module__WEBPACK_IMPORTED_MODULE_0__.ManageApplicationSettingsPageRoutingModule,
            _components_components_module__WEBPACK_IMPORTED_MODULE_2__.ComponentsModule,
            _ngx_translate_core__WEBPACK_IMPORTED_MODULE_9__.TranslateModule.forChild({
                loader: {
                    provide: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_9__.TranslateLoader,
                    useFactory: src_app_app_module__WEBPACK_IMPORTED_MODULE_3__.createTranslateLoader,
                    deps: [_angular_common_http__WEBPACK_IMPORTED_MODULE_10__.HttpClient]
                }
            }),
            _angular_forms__WEBPACK_IMPORTED_MODULE_7__.ReactiveFormsModule
        ],
        declarations: [_manage_application_settings_page__WEBPACK_IMPORTED_MODULE_1__.ManageApplicationSettingsPage]
    })
], ManageApplicationSettingsPageModule);



/***/ }),

/***/ 29830:
/*!*****************************************************************************************************!*\
  !*** ./src/app/pages/actions/admin/manage-application-settings/manage-application-settings.page.ts ***!
  \*****************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ManageApplicationSettingsPage": () => (/* binding */ ManageApplicationSettingsPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! tslib */ 21838);
/* harmony import */ var _home_vagrant_projects_Vnint_node_modules_angular_devkit_build_angular_node_modules_ngtools_webpack_src_loaders_direct_resource_js_manage_application_settings_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !./node_modules/@angular-devkit/build-angular/node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./manage-application-settings.page.html */ 52799);
/* harmony import */ var _manage_application_settings_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./manage-application-settings.page.scss */ 84650);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/core */ 789);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ 43459);
/* harmony import */ var _services_application_settings_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../services/application-settings.service */ 31515);
/* harmony import */ var _services_error_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../services/error.service */ 55729);
/* harmony import */ var _services_alert_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../services/alert.service */ 92677);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ngx-translate/core */ 52784);
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../services/auth.service */ 56898);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/router */ 9538);











let ManageApplicationSettingsPage = class ManageApplicationSettingsPage {
    constructor(formBuilder, errorService, translate, alertService, auth, router, applicationSettingsService) {
        this.formBuilder = formBuilder;
        this.errorService = errorService;
        this.translate = translate;
        this.alertService = alertService;
        this.auth = auth;
        this.router = router;
        this.applicationSettingsService = applicationSettingsService;
        this.isProcessed = false;
        this.permissions = [];
        this.eventPermissions = [];
    }
    ngOnInit() {
        this.auth.authenticated().subscribe({
            error: () => {
                this.auth.setLoggedIn = false;
                this.auth.setSessionExpired = true;
                this.router.navigate(['/login']);
            },
            next: response => {
                const resp = response;
                if (resp.authenticated == false) {
                    this.auth.setLoggedIn = false;
                    this.auth.setSessionExpired = true;
                    this.router.navigate(['/login']);
                }
                else {
                    this.getPermissions();
                    this.getEventPermissions();
                }
            },
        });
        this.updateApplicationSettingsForm = this.formBuilder.group({
            non_guest_email_domain: ['@s.school.com', _angular_forms__WEBPACK_IMPORTED_MODULE_6__.Validators.required],
            max_friends: [2, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.Validators.required],
            min_preferences: [3, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.Validators.required],
            max_preferences: [5, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.Validators.required],
        });
        this.getApplicationSettings();
    }
    getApplicationSettings() {
        this.applicationSettingsService.getApplicationSettings().subscribe({
            error: error => {
                this.errorService.errorOccurred.emit(error);
            },
            next: response => {
                const resp = response;
                this.updateApplicationSettingsForm.patchValue(resp.settings);
            },
        });
    }
    get errorControl() {
        return this.updateApplicationSettingsForm.controls;
    }
    updateApplicationSettings() {
        if (!this.isProcessed && this.updateApplicationSettingsForm.valid) {
            this.isProcessed = true;
            this.applicationSettingsService.updateEvent(this.updateApplicationSettingsForm.value).subscribe({
                error: error => {
                    if (error.error.message == 'The given data was invalid.') {
                        for (const errorType in error.error.errors) {
                            const errors = [];
                            for (const errorMessage in error.error.errors[errorType]) {
                                errors.push({ [error.error.errors[errorType][errorMessage]]: true });
                            }
                            this.updateApplicationSettingsForm.controls[errorType].setErrors(errors);
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
                    this.alertService.alert("success", this.translate.instant('ACTIONS.MANAGE_SCHEDULE.title'), resp.message, "checkmark");
                },
                complete: () => {
                    this.updateApplicationSettingsForm.reset();
                    this.isProcessed = false;
                    this.getApplicationSettings();
                },
            });
        }
    }
    getPermissions() {
        this.auth.permissions().subscribe({
            error: error => {
                this.errorService.errorOccurred.emit(error);
            },
            next: response => {
                const resp = response;
                this.permissions = resp.permissions;
            },
        });
    }
    getEventPermissions() {
        this.auth.eventPermissions().subscribe({
            error: error => {
                this.errorService.errorOccurred.emit(error);
            },
            next: response => {
                const resp = response;
                this.eventPermissions = resp.permissions;
            },
        });
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
};
ManageApplicationSettingsPage.ctorParameters = () => [
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormBuilder },
    { type: _services_error_service__WEBPACK_IMPORTED_MODULE_3__.ErrorService },
    { type: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_7__.TranslateService },
    { type: _services_alert_service__WEBPACK_IMPORTED_MODULE_4__.AlertService },
    { type: _services_auth_service__WEBPACK_IMPORTED_MODULE_5__.AuthService },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_8__.Router },
    { type: _services_application_settings_service__WEBPACK_IMPORTED_MODULE_2__.ApplicationSettingsService }
];
ManageApplicationSettingsPage = (0,tslib__WEBPACK_IMPORTED_MODULE_9__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_10__.Component)({
        selector: 'app-manage-application-settings',
        template: _home_vagrant_projects_Vnint_node_modules_angular_devkit_build_angular_node_modules_ngtools_webpack_src_loaders_direct_resource_js_manage_application_settings_page_html__WEBPACK_IMPORTED_MODULE_0__["default"],
        styles: [_manage_application_settings_page_scss__WEBPACK_IMPORTED_MODULE_1__]
    })
], ManageApplicationSettingsPage);



/***/ }),

/***/ 31515:
/*!**********************************************************!*\
  !*** ./src/app/services/application-settings.service.ts ***!
  \**********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ApplicationSettingsService": () => (/* binding */ ApplicationSettingsService)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 21838);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 789);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common/http */ 45331);



let ApplicationSettingsService = class ApplicationSettingsService {
    constructor(http) {
        this.http = http;
        this.headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_0__.HttpHeaders({
            accept: 'application/json',
            contentType: 'application/json',
        });
        this.options = { this: this.headers, withCredentials: true };
    }
    getApplicationSettings() {
        return this.http.get('/api/application-settings', this.options);
    }
    updateEvent(applicationSettingCredentials) {
        return this.http.put('/api/application-settings', applicationSettingCredentials, this.options);
    }
};
ApplicationSettingsService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_0__.HttpClient }
];
ApplicationSettingsService = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.Injectable)({
        providedIn: 'root'
    })
], ApplicationSettingsService);



/***/ }),

/***/ 84650:
/*!*******************************************************************************************************!*\
  !*** ./src/app/pages/actions/admin/manage-application-settings/manage-application-settings.page.scss ***!
  \*******************************************************************************************************/
/***/ ((module) => {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJtYW5hZ2UtYXBwbGljYXRpb24tc2V0dGluZ3MucGFnZS5zY3NzIn0= */";

/***/ })

}]);
//# sourceMappingURL=src_app_pages_actions_admin_manage-application-settings_manage-application-settings_module_ts.js.map