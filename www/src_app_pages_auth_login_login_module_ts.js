"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_pages_auth_login_login_module_ts"],{

/***/ 80097:
/*!************************************************************************************************************************************************************!*\
  !*** ./node_modules/@angular-devkit/build-angular/node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./src/app/pages/auth/login/login.page.html ***!
  \************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<ion-content>\n  <app-toolbar></app-toolbar>\n  <ion-grid class=\"login-grid\">\n    <ion-row>\n      <ion-col>\n        <app-card-title-bar [backButton]=\"false\" title=\"{{ 'LOGIN.title' | translate }}\"></app-card-title-bar>\n        <ion-card color=\"light\">\n          <ion-card-content>\n            <ion-grid class=\"inside-card-grid\">\n              <ion-row>\n                <ion-col>\n                  <form [formGroup]=\"loginForm\" (ngSubmit)=\"login()\">\n                    <ion-label color=\"danger\" class=\"ion-padding\" *ngIf=\"sessionExpired\">\n                      {{ 'GENERAL.ERRORS.sessionExpired' | translate }}\n                      <br>\n                    </ion-label>\n\n                    <ion-item color=\"light\">\n                      <ion-input type=\"email\" formControlName=\"email\" placeholder=\"{{ 'LOGIN.INPUT.email' | translate }}\"></ion-input>\n                    </ion-item>\n                    <app-form-error [errors]=\"errorControl.email.errors\"></app-form-error>\n\n                    <ion-item color=\"light\">\n                      <ion-input (keypress)=\"keyPressEventHandler($event.key)\" type=\"password\" formControlName=\"password\" placeholder=\"{{ 'LOGIN.INPUT.password' | translate }}\"></ion-input>\n                    </ion-item>\n                    <app-form-error [errors]=\"errorControl.password.errors\"></app-form-error>\n                    <div id=\"forgot-password\">\n                      <a [routerLink]=\"['/forgot-password']\" class=\"animated-link\">{{ 'LOGIN.forgotPassword' | translate }}</a>\n                    </div>\n\n                    <ion-checkbox class=\"invisible\" formControlName=\"fax\"></ion-checkbox>\n\n                    <div class=\"ion-padding\">\n                      <ion-button *ngIf=\"!isProcessed\" type=\"submit\" [disabled]=\"loginForm.invalid || isProcessed\" class=\"ion-no-margin\" expand=\"block\" color=\"primary\">{{ 'LOGIN.INPUT.loginButton' | translate }}</ion-button>\n                      <ion-button *ngIf=\"isProcessed\" type=\"submit\" [disabled]=\"loginForm.invalid || isProcessed\" class=\"ion-no-margin\" expand=\"block\" color=\"primary\"><ion-spinner name=\"crescent\"></ion-spinner></ion-button>\n                    </div>\n                  </form>\n\n                  <ion-label id=\"or\">{{ 'LOGIN.or' | translate }}</ion-label>\n\n                  <div class=\"ion-padding\">\n                    <ion-button [routerLink]=\"['/register']\" fill=\"outline\" color=\"primary\" class=\"ion-no-margin\" expand=\"block\">{{ 'LOGIN.registerButton' | translate }}</ion-button>\n                  </div>\n                </ion-col>\n              </ion-row>\n            </ion-grid>\n          </ion-card-content>\n        </ion-card>\n      </ion-col>\n    </ion-row>\n  </ion-grid>\n  <app-footer class=\"fixed-footer\"></app-footer>\n</ion-content>\n");

/***/ }),

/***/ 52947:
/*!**********************************************************!*\
  !*** ./src/app/pages/auth/login/login-routing.module.ts ***!
  \**********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "LoginPageRoutingModule": () => (/* binding */ LoginPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 21838);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 789);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 9538);
/* harmony import */ var _login_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./login.page */ 70673);




const routes = [
    {
        path: '',
        component: _login_page__WEBPACK_IMPORTED_MODULE_0__.LoginPage
    }
];
let LoginPageRoutingModule = class LoginPageRoutingModule {
};
LoginPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], LoginPageRoutingModule);



/***/ }),

/***/ 41454:
/*!**************************************************!*\
  !*** ./src/app/pages/auth/login/login.module.ts ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "LoginPageModule": () => (/* binding */ LoginPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! tslib */ 21838);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 789);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ 2006);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/forms */ 43459);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/common/http */ 45331);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ionic/angular */ 30585);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @ngx-translate/core */ 52784);
/* harmony import */ var _login_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./login-routing.module */ 52947);
/* harmony import */ var _components_components_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../components/components.module */ 96453);
/* harmony import */ var _login_page__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./login.page */ 70673);
/* harmony import */ var src_app_app_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/app.module */ 92014);











let LoginPageModule = class LoginPageModule {
};
LoginPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_5__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_6__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_7__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_8__.IonicModule,
            _login_routing_module__WEBPACK_IMPORTED_MODULE_0__.LoginPageRoutingModule,
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
        declarations: [_login_page__WEBPACK_IMPORTED_MODULE_2__.LoginPage]
    })
], LoginPageModule);



/***/ }),

/***/ 70673:
/*!************************************************!*\
  !*** ./src/app/pages/auth/login/login.page.ts ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "LoginPage": () => (/* binding */ LoginPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! tslib */ 21838);
/* harmony import */ var _home_vagrant_projects_Vnint_node_modules_angular_devkit_build_angular_node_modules_ngtools_webpack_src_loaders_direct_resource_js_login_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !./node_modules/@angular-devkit/build-angular/node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./login.page.html */ 80097);
/* harmony import */ var _login_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./login.page.scss */ 58709);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/core */ 789);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ 9538);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 43459);
/* harmony import */ var src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/auth.service */ 56898);
/* harmony import */ var src_app_services_error_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/error.service */ 55729);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ngx-translate/core */ 52784);
/* harmony import */ var _services_alert_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../services/alert.service */ 92677);










let LoginPage = class LoginPage {
    constructor(formBuilder, auth, router, errorService, translate, alertService) {
        this.formBuilder = formBuilder;
        this.auth = auth;
        this.router = router;
        this.errorService = errorService;
        this.translate = translate;
        this.alertService = alertService;
        this.isProcessed = false;
        this.sessionExpired = false;
    }
    ngOnInit() {
        this.loginForm = this.formBuilder.group({
            email: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_5__.Validators.required],
            password: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_5__.Validators.required],
            fax: []
        });
    }
    get errorControl() {
        return this.loginForm.controls;
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
        this.sessionExpired = this.auth.getSessionExpired;
    }
    keyPressEventHandler(key) {
        if (key == 'Enter' && !this.isProcessed) {
            this.login();
        }
    }
    login() {
        if (!this.isProcessed && !this.loginForm.value.fax && this.loginForm.valid) {
            this.isProcessed = true;
            if (!this.loginForm.valid) {
                return false;
            }
            else {
                this.auth.login(this.loginForm.value).subscribe({
                    error: error => {
                        if (error.error.message == 'The given data was invalid.') {
                            for (const errorType in error.error.errors) {
                                const errors = [];
                                for (const errorMessage in error.error.errors[errorType]) {
                                    errors.push({ [error.error.errors[errorType][errorMessage]]: true });
                                }
                                this.loginForm.controls[errorType].setErrors(errors);
                            }
                        }
                        else if (error.error.message == 'missingPermissions') {
                            this.alertService.alert("danger", this.translate.instant('GENERAL.ERRORS.missingPermissions'), '', 'lock-closed');
                        }
                        else {
                            this.errorService.errorOccurred.emit(error);
                        }
                        this.isProcessed = false;
                        this.loginForm.patchValue({
                            'password': ''
                        });
                    },
                    next: () => { },
                    complete: () => {
                        this.loginForm.reset();
                        this.auth.setLoggedIn = true;
                        this.auth.setSessionExpired = false;
                        this.router.navigate(['/dashboard']);
                        this.isProcessed = false;
                        this.auth.authChanged.emit('login');
                    },
                });
            }
        }
    }
};
LoginPage.ctorParameters = () => [
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormBuilder },
    { type: src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_2__.AuthService },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_6__.Router },
    { type: src_app_services_error_service__WEBPACK_IMPORTED_MODULE_3__.ErrorService },
    { type: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_7__.TranslateService },
    { type: _services_alert_service__WEBPACK_IMPORTED_MODULE_4__.AlertService }
];
LoginPage = (0,tslib__WEBPACK_IMPORTED_MODULE_8__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_9__.Component)({
        selector: 'app-login',
        template: _home_vagrant_projects_Vnint_node_modules_angular_devkit_build_angular_node_modules_ngtools_webpack_src_loaders_direct_resource_js_login_page_html__WEBPACK_IMPORTED_MODULE_0__["default"],
        styles: [_login_page_scss__WEBPACK_IMPORTED_MODULE_1__]
    })
], LoginPage);



/***/ }),

/***/ 58709:
/*!**************************************************!*\
  !*** ./src/app/pages/auth/login/login.page.scss ***!
  \**************************************************/
/***/ ((module) => {

module.exports = "form {\n  padding-top: 10px;\n}\n\n.login-grid {\n  max-width: 500px;\n}\n\n#forgot-password {\n  margin-top: 10px;\n  margin-bottom: 15px;\n  margin-left: 16px;\n  text-align: center;\n}\n\nion-item {\n  padding-left: 16px;\n  padding-right: 16px;\n}\n\n#or {\n  margin-left: calc(50% - 13px) !important;\n  transform: translateX(-50%) !important;\n}\n\n.ion-padding {\n  padding-top: 16px;\n}\n\n@media (max-width: 400px) {\n  #or {\n    margin-left: calc(50% - 8px);\n    transform: translateX(-50%);\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImxvZ2luLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGlCQUFBO0FBQ0Y7O0FBRUE7RUFDRSxnQkFBQTtBQUNGOztBQUVBO0VBQ0UsZ0JBQUE7RUFDQSxtQkFBQTtFQUNBLGlCQUFBO0VBQ0Esa0JBQUE7QUFDRjs7QUFFQTtFQUNFLGtCQUFBO0VBQ0EsbUJBQUE7QUFDRjs7QUFFQTtFQUNFLHdDQUFBO0VBQ0Esc0NBQUE7QUFDRjs7QUFFQTtFQUNFLGlCQUFBO0FBQ0Y7O0FBRUE7RUFDRTtJQUNFLDRCQUFBO0lBQ0EsMkJBQUE7RUFDRjtBQUNGIiwiZmlsZSI6ImxvZ2luLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbImZvcm0ge1xuICBwYWRkaW5nLXRvcDogMTBweDtcbn1cblxuLmxvZ2luLWdyaWQge1xuICBtYXgtd2lkdGg6IDUwMHB4O1xufVxuXG4jZm9yZ290LXBhc3N3b3JkIHtcbiAgbWFyZ2luLXRvcDogMTBweDtcbiAgbWFyZ2luLWJvdHRvbTogMTVweDtcbiAgbWFyZ2luLWxlZnQ6IDE2cHg7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cblxuaW9uLWl0ZW0ge1xuICBwYWRkaW5nLWxlZnQ6IDE2cHg7XG4gIHBhZGRpbmctcmlnaHQ6IDE2cHg7XG59XG5cbiNvciB7XG4gIG1hcmdpbi1sZWZ0OiBjYWxjKDUwJSAtIDEzcHgpICFpbXBvcnRhbnQ7XG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgtNTAlKSAhaW1wb3J0YW50O1xufVxuXG4uaW9uLXBhZGRpbmcge1xuICBwYWRkaW5nLXRvcDogMTZweDtcbn1cblxuQG1lZGlhIChtYXgtd2lkdGg6IDQwMHB4KSB7XG4gICNvciB7XG4gICAgbWFyZ2luLWxlZnQ6IGNhbGMoNTAlIC0gOHB4KTtcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoLTUwJSk7XG4gIH1cbn1cbiJdfQ== */";

/***/ })

}]);
//# sourceMappingURL=src_app_pages_auth_login_login_module_ts.js.map