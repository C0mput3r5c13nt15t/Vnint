"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_pages_auth_forgot-password_forgot-password_module_ts"],{

/***/ 57526:
/*!********************************************************************************************************************************************************************************!*\
  !*** ./node_modules/@angular-devkit/build-angular/node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./src/app/pages/auth/forgot-password/forgot-password.page.html ***!
  \********************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<ion-content>\n  <app-toolbar></app-toolbar>\n  <ion-grid class=\"forgot-password-grid\">\n    <ion-row>\n      <ion-col>\n        <app-card-title-bar title=\"{{ 'FORGOT_PASSWORD.title' | translate }}\"></app-card-title-bar>\n        <ion-card color=\"light\">\n          <ion-card-content>\n            <ion-grid class=\"inside-card-grid\">\n              <ion-row>\n                <ion-col>\n                  <form [formGroup]=\"forgotPasswordForm\" (ngSubmit)=\"forgotPassword()\">\n                    <ion-item color=\"light\">\n                      <ion-input type=\"email\" name=\"email\" formControlName=\"email\" placeholder=\"{{ 'LOGIN.INPUT.email' | translate }}\"></ion-input>\n                    </ion-item>\n                    <app-form-error [errors]=\"errorControl.email.errors\"></app-form-error>\n\n                    <ion-checkbox class=\"invisible\" formControlName=\"fax\"></ion-checkbox>\n\n                    <div class=\"ion-padding\">\n                      <ion-button *ngIf=\"!isProcessed\" type=\"submit\" [disabled]=\"forgotPasswordForm.invalid || isProcessed\" class=\"ion-no-margin\" expand=\"block\" color=\"primary\">{{ 'FORGOT_PASSWORD.INPUT.resetButton' | translate }}</ion-button>\n                      <ion-button *ngIf=\"isProcessed\" type=\"submit\" [disabled]=\"forgotPasswordForm.invalid || isProcessed\" class=\"ion-no-margin\" expand=\"block\" color=\"primary\"><ion-spinner name=\"crescent\"></ion-spinner></ion-button>\n                    </div>\n                  </form>\n                </ion-col>\n              </ion-row>\n            </ion-grid>\n          </ion-card-content>\n        </ion-card>\n      </ion-col>\n    </ion-row>\n  </ion-grid>\n  <app-footer class=\"fixed-footer\"></app-footer>\n</ion-content>\n");

/***/ }),

/***/ 37756:
/*!******************************************************************************!*\
  !*** ./src/app/pages/auth/forgot-password/forgot-password-routing.module.ts ***!
  \******************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ForgotPasswordPageRoutingModule": () => (/* binding */ ForgotPasswordPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 21838);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 789);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 9538);
/* harmony import */ var _forgot_password_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./forgot-password.page */ 12819);




const routes = [
    {
        path: '',
        component: _forgot_password_page__WEBPACK_IMPORTED_MODULE_0__.ForgotPasswordPage
    }
];
let ForgotPasswordPageRoutingModule = class ForgotPasswordPageRoutingModule {
};
ForgotPasswordPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], ForgotPasswordPageRoutingModule);



/***/ }),

/***/ 67556:
/*!**********************************************************************!*\
  !*** ./src/app/pages/auth/forgot-password/forgot-password.module.ts ***!
  \**********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ForgotPasswordPageModule": () => (/* binding */ ForgotPasswordPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! tslib */ 21838);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 789);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ 2006);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/forms */ 43459);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/common/http */ 45331);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ionic/angular */ 30585);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @ngx-translate/core */ 52784);
/* harmony import */ var _forgot_password_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./forgot-password-routing.module */ 37756);
/* harmony import */ var _components_components_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../components/components.module */ 96453);
/* harmony import */ var _forgot_password_page__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./forgot-password.page */ 12819);
/* harmony import */ var src_app_app_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/app.module */ 92014);











let ForgotPasswordPageModule = class ForgotPasswordPageModule {
};
ForgotPasswordPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_5__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_6__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_7__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_8__.IonicModule,
            _forgot_password_routing_module__WEBPACK_IMPORTED_MODULE_0__.ForgotPasswordPageRoutingModule,
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
        declarations: [_forgot_password_page__WEBPACK_IMPORTED_MODULE_2__.ForgotPasswordPage]
    })
], ForgotPasswordPageModule);



/***/ }),

/***/ 12819:
/*!********************************************************************!*\
  !*** ./src/app/pages/auth/forgot-password/forgot-password.page.ts ***!
  \********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ForgotPasswordPage": () => (/* binding */ ForgotPasswordPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! tslib */ 21838);
/* harmony import */ var _home_vagrant_projects_Vnint_node_modules_angular_devkit_build_angular_node_modules_ngtools_webpack_src_loaders_direct_resource_js_forgot_password_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !./node_modules/@angular-devkit/build-angular/node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./forgot-password.page.html */ 57526);
/* harmony import */ var _forgot_password_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./forgot-password.page.scss */ 79573);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/core */ 789);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 43459);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ 9538);
/* harmony import */ var src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/auth.service */ 56898);
/* harmony import */ var src_app_services_error_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/error.service */ 55729);
/* harmony import */ var _services_alert_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../services/alert.service */ 92677);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ngx-translate/core */ 52784);










let ForgotPasswordPage = class ForgotPasswordPage {
    constructor(formBuilder, auth, router, errorService, alertService, translate) {
        this.formBuilder = formBuilder;
        this.auth = auth;
        this.router = router;
        this.errorService = errorService;
        this.alertService = alertService;
        this.translate = translate;
        this.isProcessed = false;
    }
    get errorControl() {
        return this.forgotPasswordForm.controls;
    }
    ngOnInit() {
        this.forgotPasswordForm = this.formBuilder.group({
            email: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_5__.Validators.required],
            fax: []
        });
    }
    ionViewWillEnter() {
        this.isProcessed = false;
        this.auth.authenticated().subscribe({
            error: error => {
                this.errorService.errorOccurred.emit(error);
            },
            next: response => {
                const resp = response;
                if (resp.authenticated == true) {
                    this.auth.setLoggedIn = true;
                    this.router.navigate(['/dashboard']);
                }
            },
        });
    }
    forgotPassword() {
        if (!this.isProcessed && !this.forgotPasswordForm.value.fax && this.forgotPasswordForm.valid) {
            this.isProcessed = true;
            if (!this.forgotPasswordForm.valid) {
                return false;
            }
            else {
                this.auth.sendForgotPasswordEmail(this.forgotPasswordForm.value).subscribe({
                    error: error => {
                        if (error.error.message == 'The given data was invalid.') {
                            for (const errorType in error.error.errors) {
                                const errors = [];
                                for (const errorMessage in error.error.errors[errorType]) {
                                    errors.push({ [error.error.errors[errorType][errorMessage]]: true });
                                }
                                this.forgotPasswordForm.controls[errorType].setErrors(errors);
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
                        this.alertService.alert("success", this.translate.instant('FORGOT_PASSWORD.title'), resp.message, "send");
                    },
                    complete: () => {
                        this.forgotPasswordForm.reset();
                        this.auth.setLoggedIn = false;
                        this.auth.setSessionExpired = false;
                        this.isProcessed = false;
                        this.router.navigate(['/login']);
                    },
                });
            }
        }
    }
};
ForgotPasswordPage.ctorParameters = () => [
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormBuilder },
    { type: src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_2__.AuthService },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_6__.Router },
    { type: src_app_services_error_service__WEBPACK_IMPORTED_MODULE_3__.ErrorService },
    { type: _services_alert_service__WEBPACK_IMPORTED_MODULE_4__.AlertService },
    { type: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_7__.TranslateService }
];
ForgotPasswordPage = (0,tslib__WEBPACK_IMPORTED_MODULE_8__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_9__.Component)({
        selector: 'app-forgot-password',
        template: _home_vagrant_projects_Vnint_node_modules_angular_devkit_build_angular_node_modules_ngtools_webpack_src_loaders_direct_resource_js_forgot_password_page_html__WEBPACK_IMPORTED_MODULE_0__["default"],
        styles: [_forgot_password_page_scss__WEBPACK_IMPORTED_MODULE_1__]
    })
], ForgotPasswordPage);



/***/ }),

/***/ 79573:
/*!**********************************************************************!*\
  !*** ./src/app/pages/auth/forgot-password/forgot-password.page.scss ***!
  \**********************************************************************/
/***/ ((module) => {

module.exports = ".forgot-password-grid {\n  max-width: 500px;\n}\n\nion-item {\n  padding-left: 16px;\n  padding-right: 16px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImZvcmdvdC1wYXNzd29yZC5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxnQkFBQTtBQUNKOztBQUVBO0VBQ0Usa0JBQUE7RUFDQSxtQkFBQTtBQUNGIiwiZmlsZSI6ImZvcmdvdC1wYXNzd29yZC5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuZm9yZ290LXBhc3N3b3JkLWdyaWQge1xuICAgIG1heC13aWR0aDogNTAwcHg7XG59XG5cbmlvbi1pdGVtIHtcbiAgcGFkZGluZy1sZWZ0OiAxNnB4O1xuICBwYWRkaW5nLXJpZ2h0OiAxNnB4O1xufVxuIl19 */";

/***/ })

}]);
//# sourceMappingURL=src_app_pages_auth_forgot-password_forgot-password_module_ts.js.map