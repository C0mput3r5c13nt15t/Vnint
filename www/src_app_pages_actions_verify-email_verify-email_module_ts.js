"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_pages_actions_verify-email_verify-email_module_ts"],{

/***/ 19937:
/*!*****************************************************************************************************************************************************************************!*\
  !*** ./node_modules/@angular-devkit/build-angular/node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./src/app/pages/actions/verify-email/verify-email.page.html ***!
  \*****************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<ion-content>\n  <app-toolbar></app-toolbar>\n  <ion-grid>\n    <ion-row>\n      <ion-col>\n        <app-card-title-bar title=\"{{ 'ACTIONS.VERIFY_EMAIL.title' | translate }}\"></app-card-title-bar>\n        <ion-card color=\"light\">\n          <ion-card-content>\n            <ion-grid class=\"inside-card-grid\">\n              <ion-row>\n                <ion-col>\n                  <ion-label>\n                    {{ 'ACTIONS.VERIFY_EMAIL.explanation' | translate }}\n                  </ion-label>\n                  <br><br>\n                  <ion-label *ngIf=\"verifiedEmail == false\">\n                    <b>{{ 'ACTIONS.VERIFY_EMAIL.notVerified' | translate }}</b>\n                  </ion-label>\n                  <ion-label *ngIf=\"verifiedEmail\">\n                    <b>{{ 'ACTIONS.VERIFY_EMAIL.verified' | translate }}</b>\n                  </ion-label>\n                  <br><br>\n                  <ion-grid class=\"inside-card-grid\">\n                    <ion-row>\n                      <ion-col size=\"2\"><ion-button shape=\"round\" (click)=\"reloadVerification()\" color=\"primary\" expand=\"block\"><ion-icon slot=\"icon-only\" name=\"refresh\"></ion-icon></ion-button></ion-col>\n                      <ion-col><ion-button fill=\"outline\" (click)=\"resendEmailVerification()\" [disabled]=\"sentNotification || verifiedEmail\" color=\"primary\" expand=\"block\">{{ 'ACTIONS.VERIFY_EMAIL.resendButton' | translate }}</ion-button></ion-col>\n                    </ion-row>\n                  </ion-grid>\n                  <!--<div class=\"ion-padding\">\n                    <ion-button (click)=\"reloadVerification()\" color=\"primary\" shape=\"round\" type=\"submit\"><ion-icon name=\"refresh\"></ion-icon></ion-button>\n                    <ion-button (click)=\"resendEmailVerificytion()\" [disabled]=\"sentNotification || verifiedEmail\" color=\"primary\" color=\"primary\" expand=\"block\" class=\"ion-no-margin\">{{ 'ACTIONS.VERIFY_EMAIL.resendButton' | translate }}</ion-button>\n                  </div>-->\n                </ion-col>\n              </ion-row>\n            </ion-grid>\n          </ion-card-content>\n        </ion-card>\n      </ion-col>\n    </ion-row>\n  </ion-grid>\n</ion-content>\n");

/***/ }),

/***/ 40128:
/*!***************************************************************************!*\
  !*** ./src/app/pages/actions/verify-email/verify-email-routing.module.ts ***!
  \***************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "VerifyEmailPageRoutingModule": () => (/* binding */ VerifyEmailPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 21838);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 789);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 9538);
/* harmony import */ var _verify_email_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./verify-email.page */ 60);




const routes = [
    {
        path: '',
        component: _verify_email_page__WEBPACK_IMPORTED_MODULE_0__.VerifyEmailPage
    }
];
let VerifyEmailPageRoutingModule = class VerifyEmailPageRoutingModule {
};
VerifyEmailPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], VerifyEmailPageRoutingModule);



/***/ }),

/***/ 93607:
/*!*******************************************************************!*\
  !*** ./src/app/pages/actions/verify-email/verify-email.module.ts ***!
  \*******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "VerifyEmailPageModule": () => (/* binding */ VerifyEmailPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! tslib */ 21838);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 789);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ 2006);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/forms */ 43459);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/common/http */ 45331);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ionic/angular */ 30585);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @ngx-translate/core */ 52784);
/* harmony import */ var _verify_email_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./verify-email-routing.module */ 40128);
/* harmony import */ var _components_components_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../components/components.module */ 96453);
/* harmony import */ var _verify_email_page__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./verify-email.page */ 60);
/* harmony import */ var src_app_app_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/app.module */ 92014);











let VerifyEmailPageModule = class VerifyEmailPageModule {
};
VerifyEmailPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_5__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_6__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_7__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_8__.IonicModule,
            _verify_email_routing_module__WEBPACK_IMPORTED_MODULE_0__.VerifyEmailPageRoutingModule,
            _components_components_module__WEBPACK_IMPORTED_MODULE_1__.ComponentsModule,
            _ngx_translate_core__WEBPACK_IMPORTED_MODULE_9__.TranslateModule.forChild({
                loader: {
                    provide: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_9__.TranslateLoader,
                    useFactory: src_app_app_module__WEBPACK_IMPORTED_MODULE_3__.createTranslateLoader,
                    deps: [_angular_common_http__WEBPACK_IMPORTED_MODULE_10__.HttpClient]
                }
            })
        ],
        declarations: [_verify_email_page__WEBPACK_IMPORTED_MODULE_2__.VerifyEmailPage]
    })
], VerifyEmailPageModule);



/***/ }),

/***/ 60:
/*!*****************************************************************!*\
  !*** ./src/app/pages/actions/verify-email/verify-email.page.ts ***!
  \*****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "VerifyEmailPage": () => (/* binding */ VerifyEmailPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! tslib */ 21838);
/* harmony import */ var _home_vagrant_projects_Vnint_node_modules_angular_devkit_build_angular_node_modules_ngtools_webpack_src_loaders_direct_resource_js_verify_email_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !./node_modules/@angular-devkit/build-angular/node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./verify-email.page.html */ 19937);
/* harmony import */ var _verify_email_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./verify-email.page.scss */ 69520);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/core */ 789);
/* harmony import */ var src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/auth.service */ 56898);
/* harmony import */ var src_app_services_error_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/error.service */ 55729);
/* harmony import */ var _services_alert_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../services/alert.service */ 92677);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ngx-translate/core */ 52784);








let VerifyEmailPage = class VerifyEmailPage {
    constructor(auth, alertService, translateService, errorService) {
        this.auth = auth;
        this.alertService = alertService;
        this.translateService = translateService;
        this.errorService = errorService;
        this.verifiedEmail = false;
        this.sentNotification = false;
    }
    ngOnInit() {
    }
    ionViewWillEnter() {
        this.auth.emailVerifiedAt().subscribe({
            error: error => {
                this.errorService.errorOccurred.emit(error);
            },
            next: response => {
                const resp = response;
                if (resp.email_verified_at) {
                    this.verifiedEmail = true;
                }
            },
        });
    }
    reloadVerification() {
        this.auth.emailVerifiedAt().subscribe({
            error: error => {
                this.errorService.errorOccurred.emit(error);
            },
            next: response => {
                const resp = response;
                if (resp.email_verified_at) {
                    this.verifiedEmail = true;
                }
            },
        });
    }
    resendEmailVerification() {
        this.sentNotification = true;
        this.auth.resendVerificationEmail().subscribe({
            error: error => {
                this.errorService.errorOccurred.emit(error);
            },
            next: () => { },
            complete: () => {
                this.alertService.alert("primary", this.translateService.instant('ACTIONS.VERIFY_EMAIL.sent_title'), this.translateService.instant('ACTIONS.VERIFY_EMAIL.sent'), "send");
                this.auth.emailVerifiedAt().subscribe({
                    error: () => { },
                    next: response => {
                        const resp = response;
                        if (resp.email_verified_at != null) {
                            this.verifiedEmail = true;
                        }
                    },
                });
            },
        });
    }
};
VerifyEmailPage.ctorParameters = () => [
    { type: src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_2__.AuthService },
    { type: _services_alert_service__WEBPACK_IMPORTED_MODULE_4__.AlertService },
    { type: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_5__.TranslateService },
    { type: src_app_services_error_service__WEBPACK_IMPORTED_MODULE_3__.ErrorService }
];
VerifyEmailPage = (0,tslib__WEBPACK_IMPORTED_MODULE_6__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_7__.Component)({
        selector: 'app-verify-email',
        template: _home_vagrant_projects_Vnint_node_modules_angular_devkit_build_angular_node_modules_ngtools_webpack_src_loaders_direct_resource_js_verify_email_page_html__WEBPACK_IMPORTED_MODULE_0__["default"],
        styles: [_verify_email_page_scss__WEBPACK_IMPORTED_MODULE_1__]
    })
], VerifyEmailPage);



/***/ }),

/***/ 69520:
/*!*******************************************************************!*\
  !*** ./src/app/pages/actions/verify-email/verify-email.page.scss ***!
  \*******************************************************************/
/***/ ((module) => {

module.exports = "#buttons-grid {\n  margin-top: 0;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInZlcmlmeS1lbWFpbC5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxhQUFBO0FBQ0YiLCJmaWxlIjoidmVyaWZ5LWVtYWlsLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIiNidXR0b25zLWdyaWQge1xuICBtYXJnaW4tdG9wOiAwO1xufVxuIl19 */";

/***/ })

}]);
//# sourceMappingURL=src_app_pages_actions_verify-email_verify-email_module_ts.js.map