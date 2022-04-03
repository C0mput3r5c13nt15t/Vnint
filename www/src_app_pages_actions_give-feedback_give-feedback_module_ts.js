"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_pages_actions_give-feedback_give-feedback_module_ts"],{

/***/ 4927:
/*!*******************************************************************************************************************************************************************************!*\
  !*** ./node_modules/@angular-devkit/build-angular/node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./src/app/pages/actions/give-feedback/give-feedback.page.html ***!
  \*******************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<ion-content>\n  <app-toolbar></app-toolbar>\n  <ion-grid>\n    <ion-row>\n      <ion-col>\n        <app-card-title-bar *ngIf=\"!success\" title=\"{{ 'ACTIONS.GIVE_FEEDBACK.title' | translate }}\"></app-card-title-bar>\n        <ion-card *ngIf=\"!success\" color=\"light\">\n          <ion-card-content>\n            <ion-grid class=\"inside-card-grid\">\n              <ion-row>\n                <ion-col>\n                  <form [formGroup]=\"giveFeedbackForm\" (ngSubmit)=\"giveFeedback()\">\n                    <ion-item color=\"light\">\n                      <ion-label>{{ 'ACTIONS.GIVE_FEEDBACK.INPUT.type' | translate }}</ion-label>\n                      <ion-select formControlName=\"type\" okText=\"{{ 'GENERAL.POPUPS.ok' | translate }}\" cancelText=\"{{ 'GENERAL.POPUPS.cancel' | translate }}\">\n                        <ion-select-option value=\"general\">{{ 'GENERAL.FEEDBACK_TYPES.general' | translate }}</ion-select-option>\n                        <ion-select-option value=\"feature\">{{ 'GENERAL.FEEDBACK_TYPES.feature' | translate }}</ion-select-option>\n                        <ion-select-option value=\"translation\">{{ 'GENERAL.FEEDBACK_TYPES.translation' | translate }}</ion-select-option>\n                        <ion-select-option value=\"typo\">{{ 'GENERAL.FEEDBACK_TYPES.typo' | translate }}</ion-select-option>\n                        <ion-select-option value=\"bug\">{{ 'GENERAL.FEEDBACK_TYPES.bug' | translate }}</ion-select-option>\n                        <ion-select-option value=\"other\">{{ 'GENERAL.FEEDBACK_TYPES.other' | translate }}</ion-select-option>\n                      </ion-select>\n                    </ion-item>\n\n                    <ion-item color=\"light\">\n                      <ion-input formControlName=\"short_description\" type=\"text\" placeholder=\"{{ 'ACTIONS.GIVE_FEEDBACK.INPUT.shortDescription' | translate }}\"></ion-input>\n                    </ion-item>\n                    <app-form-error [errors]=\"errorControl.short_description.errors\"></app-form-error>\n\n                    <ion-item lines=\"none\" color=\"light\">\n                      <ion-textarea formControlName=\"full_description\" type=\"text\" rows=\"5\" placeholder=\"{{ 'ACTIONS.GIVE_FEEDBACK.INPUT.fullDescription' | translate }}\"></ion-textarea>\n                    </ion-item>\n                    <app-form-error [errors]=\"errorControl.full_description.errors\"></app-form-error>\n\n                    <ion-checkbox class=\"invisible\" formControlName=\"fax\"></ion-checkbox>\n\n                    <div class=\"ion-padding\">\n                      <ion-button *ngIf=\"!isProcessed\" type=\"submit\" [disabled]=\"giveFeedbackForm.invalid || isProcessed\" class=\"ion-no-margin\" expand=\"block\" color=\"primary\">{{ 'ACTIONS.GIVE_FEEDBACK.INPUT.submitButton' | translate }}</ion-button>\n                      <ion-button *ngIf=\"isProcessed\" type=\"submit\" [disabled]=\"giveFeedbackForm.invalid || isProcessed\" class=\"ion-no-margin\" expand=\"block\" color=\"primary\"><ion-spinner name=\"crescent\"></ion-spinner></ion-button>\n                    </div>\n                  </form>\n                </ion-col>\n              </ion-row>\n            </ion-grid>\n          </ion-card-content>\n        </ion-card>\n      </ion-col>\n    </ion-row>\n  </ion-grid>\n</ion-content>\n");

/***/ }),

/***/ 61111:
/*!*****************************************************************************!*\
  !*** ./src/app/pages/actions/give-feedback/give-feedback-routing.module.ts ***!
  \*****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "GiveFeedbackPageRoutingModule": () => (/* binding */ GiveFeedbackPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 21838);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 789);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 9538);
/* harmony import */ var _give_feedback_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./give-feedback.page */ 5445);




const routes = [
    {
        path: '',
        component: _give_feedback_page__WEBPACK_IMPORTED_MODULE_0__.GiveFeedbackPage
    }
];
let GiveFeedbackPageRoutingModule = class GiveFeedbackPageRoutingModule {
};
GiveFeedbackPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], GiveFeedbackPageRoutingModule);



/***/ }),

/***/ 35477:
/*!*********************************************************************!*\
  !*** ./src/app/pages/actions/give-feedback/give-feedback.module.ts ***!
  \*********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "GiveFeedbackPageModule": () => (/* binding */ GiveFeedbackPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! tslib */ 21838);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 789);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ 2006);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/forms */ 43459);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/common/http */ 45331);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ionic/angular */ 30585);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @ngx-translate/core */ 52784);
/* harmony import */ var _give_feedback_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./give-feedback-routing.module */ 61111);
/* harmony import */ var _components_components_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../components/components.module */ 96453);
/* harmony import */ var _give_feedback_page__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./give-feedback.page */ 5445);
/* harmony import */ var src_app_app_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/app.module */ 92014);











let GiveFeedbackPageModule = class GiveFeedbackPageModule {
};
GiveFeedbackPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_5__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_6__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_7__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_8__.IonicModule,
            _give_feedback_routing_module__WEBPACK_IMPORTED_MODULE_0__.GiveFeedbackPageRoutingModule,
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
        declarations: [_give_feedback_page__WEBPACK_IMPORTED_MODULE_2__.GiveFeedbackPage]
    })
], GiveFeedbackPageModule);



/***/ }),

/***/ 5445:
/*!*******************************************************************!*\
  !*** ./src/app/pages/actions/give-feedback/give-feedback.page.ts ***!
  \*******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "GiveFeedbackPage": () => (/* binding */ GiveFeedbackPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! tslib */ 21838);
/* harmony import */ var _home_vagrant_projects_Vnint_node_modules_angular_devkit_build_angular_node_modules_ngtools_webpack_src_loaders_direct_resource_js_give_feedback_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !./node_modules/@angular-devkit/build-angular/node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./give-feedback.page.html */ 4927);
/* harmony import */ var _give_feedback_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./give-feedback.page.scss */ 87990);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/core */ 789);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 43459);
/* harmony import */ var src_app_services_feedback_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/feedback.service */ 78834);
/* harmony import */ var src_app_services_error_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/error.service */ 55729);
/* harmony import */ var _services_alert_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../services/alert.service */ 92677);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ngx-translate/core */ 52784);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/router */ 9538);










let GiveFeedbackPage = class GiveFeedbackPage {
    constructor(feedbackService, formBuilder, errorService, alertService, translate, router) {
        this.feedbackService = feedbackService;
        this.formBuilder = formBuilder;
        this.errorService = errorService;
        this.alertService = alertService;
        this.translate = translate;
        this.router = router;
        this.success = false;
        this.isProcessed = false;
    }
    ngOnInit() {
        this.giveFeedbackForm = this.formBuilder.group({
            type: ['general', _angular_forms__WEBPACK_IMPORTED_MODULE_5__.Validators.required],
            short_description: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_5__.Validators.required],
            full_description: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_5__.Validators.required],
            fax: [false]
        });
    }
    ionViewWillEnter() {
        this.isProcessed = false;
    }
    get errorControl() {
        return this.giveFeedbackForm.controls;
    }
    giveFeedback() {
        if (!this.isProcessed && !this.giveFeedbackForm.value.fax && this.giveFeedbackForm.valid) {
            this.isProcessed = true;
            this.feedbackService.giveFeedback(this.giveFeedbackForm.value).subscribe({
                error: error => {
                    if (error.error.message == 'The given data was invalid.') {
                        for (const errorType in error.error.errors) {
                            let errors = [];
                            for (const errorMessage in error.error.errors[errorType]) {
                                errors.push({ [error.error.errors[errorType][errorMessage]]: true });
                            }
                            this.giveFeedbackForm.controls[errorType].setErrors(errors);
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
                    this.alertService.alert("success", this.translate.instant('ACTIONS.GIVE_FEEDBACK.SUCCESS.thankYou'), resp.message, "heart");
                },
                complete: () => {
                    this.success = true;
                    this.giveFeedbackForm.reset();
                    this.isProcessed = false;
                    this.router.navigate(['/dashboard']);
                },
            });
        }
    }
};
GiveFeedbackPage.ctorParameters = () => [
    { type: src_app_services_feedback_service__WEBPACK_IMPORTED_MODULE_2__.FeedbackService },
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormBuilder },
    { type: src_app_services_error_service__WEBPACK_IMPORTED_MODULE_3__.ErrorService },
    { type: _services_alert_service__WEBPACK_IMPORTED_MODULE_4__.AlertService },
    { type: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_6__.TranslateService },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_7__.Router }
];
GiveFeedbackPage = (0,tslib__WEBPACK_IMPORTED_MODULE_8__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_9__.Component)({
        selector: 'app-give-feedback',
        template: _home_vagrant_projects_Vnint_node_modules_angular_devkit_build_angular_node_modules_ngtools_webpack_src_loaders_direct_resource_js_give_feedback_page_html__WEBPACK_IMPORTED_MODULE_0__["default"],
        styles: [_give_feedback_page_scss__WEBPACK_IMPORTED_MODULE_1__]
    })
], GiveFeedbackPage);



/***/ }),

/***/ 87990:
/*!*********************************************************************!*\
  !*** ./src/app/pages/actions/give-feedback/give-feedback.page.scss ***!
  \*********************************************************************/
/***/ ((module) => {

module.exports = "form {\n  padding-top: 10px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImdpdmUtZmVlZGJhY2sucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsaUJBQUE7QUFDRiIsImZpbGUiOiJnaXZlLWZlZWRiYWNrLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbImZvcm0ge1xuICBwYWRkaW5nLXRvcDogMTBweDtcbn1cbiJdfQ== */";

/***/ })

}]);
//# sourceMappingURL=src_app_pages_actions_give-feedback_give-feedback_module_ts.js.map