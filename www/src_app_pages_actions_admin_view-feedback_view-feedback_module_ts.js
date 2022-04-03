"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_pages_actions_admin_view-feedback_view-feedback_module_ts"],{

/***/ 86088:
/*!*************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/@angular-devkit/build-angular/node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./src/app/pages/actions/admin/view-feedback/view-feedback.page.html ***!
  \*************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<ion-content>\n  <app-toolbar></app-toolbar>\n  <ion-grid>\n    <ion-row>\n      <ion-col>\n        <app-card-title-bar title=\"{{ 'ACTIONS.VIEW_FEEDBACK.title' | translate }}\"></app-card-title-bar>\n        <ion-card color=\"light\">\n          <ion-card-content>\n            <ion-grid class=\"inside-card-grid\">\n              <ion-row>\n                <ion-col>\n                  <form [formGroup]=\"searchFeedbackForm\">\n                    <ion-searchbar color=\"light\" (ionChange)=\"searchFeedback()\" placeholder=\"{{ 'ACTIONS.VIEW_FEEDBACK.INPUT.searchFeedbackPlaceholder' | translate }}\" formControlName=\"short_description\" showCancelButton=\"focus\"></ion-searchbar>\n                    <ion-select (ionChange)=\"searchFeedback()\" multiple=\"true\" formControlName=\"type\" okText=\"{{ 'GENERAL.POPUPS.ok' | translate }}\" cancelText=\"{{ 'GENERAL.POPUPS.cancel' | translate }}\">\n                      <ion-select-option value=\"general\">{{ 'GENERAL.FEEDBACK_TYPES.general' | translate }}</ion-select-option>\n                      <ion-select-option value=\"feature\">{{ 'GENERAL.FEEDBACK_TYPES.feature' | translate }}</ion-select-option>\n                      <ion-select-option value=\"translation\">{{ 'GENERAL.FEEDBACK_TYPES.translation' | translate }}</ion-select-option>\n                      <ion-select-option value=\"typo\">{{ 'GENERAL.FEEDBACK_TYPES.typo' | translate }}</ion-select-option>\n                      <ion-select-option value=\"bug\">{{ 'GENERAL.FEEDBACK_TYPES.bug' | translate }}</ion-select-option>\n                      <ion-select-option value=\"other\">{{ 'GENERAL.FEEDBACK_TYPES.other' | translate }}</ion-select-option>\n                    </ion-select>\n                  </form>\n                  <ng-container *ngIf=\"feedback.length > 0\">\n                    <ion-card color=\"light\" button=true routerLink=\"/feedback/{{ feedback.id }}\" *ngFor=\"let feedback of filteredFeedback\">\n                      <ion-card-header>\n                        <ion-card-title>\n                          {{ feedback.short_description }}\n                        </ion-card-title>\n                        <ion-card-subtitle>\n                          <ion-label class=\"subtitle-labels\" color=\"primary\" *ngIf=\"feedback.type == 'general'\"><b>{{ 'GENERAL.FEEDBACK_TYPES.general' | translate }}</b></ion-label>\n                          <ion-label class=\"subtitle-labels\" color=\"primary\" *ngIf=\"feedback.type == 'feature'\"><b>{{ 'GENERAL.FEEDBACK_TYPES.feature' | translate }}</b></ion-label>\n                          <ion-label class=\"subtitle-labels\" color=\"danger\" *ngIf=\"feedback.type == 'translation'\"><b>{{ 'GENERAL.FEEDBACK_TYPES.translation' | translate }}</b></ion-label>\n                          <ion-label class=\"subtitle-labels\" color=\"danger\" *ngIf=\"feedback.type == 'typo'\"><b>{{ 'GENERAL.FEEDBACK_TYPES.typo' | translate }}</b></ion-label>\n                          <ion-label class=\"subtitle-labels\" color=\"danger\" *ngIf=\"feedback.type == 'bug'\"><b>{{ 'GENERAL.FEEDBACK_TYPES.bug' | translate }}</b></ion-label>\n                          <ion-label class=\"subtitle-labels\" color=\"primary\" *ngIf=\"feedback.type == 'other'\"><b>{{ 'GENERAL.FEEDBACK_TYPES.other' | translate }}</b></ion-label>\n                          <ion-label class=\"subtitle-labels\"> - {{ feedback.created_at | date :( 'GENERAL.exactTimeDisplayFormat' | translate ) }}</ion-label>\n                        </ion-card-subtitle>\n                        <ion-label class=\"long-description-label\">\n                          {{ feedback.full_description }}\n                        </ion-label>\n                      </ion-card-header>\n                    </ion-card>\n                  </ng-container>\n                  <ng-container *ngIf=\"feedback.length == 0\">\n                    <app-empty-card message=\"{{ 'ACTIONS.VIEW_FEEDBACK.noFeedback' | translate }}\"></app-empty-card><br>\n                  </ng-container>\n                </ion-col>\n              </ion-row>\n            </ion-grid>\n          </ion-card-content>\n        </ion-card>\n      </ion-col>\n    </ion-row>\n  </ion-grid>\n</ion-content>\n");

/***/ }),

/***/ 60746:
/*!***********************************************************************************!*\
  !*** ./src/app/pages/actions/admin/view-feedback/view-feedback-routing.module.ts ***!
  \***********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ViewFeedbackPageRoutingModule": () => (/* binding */ ViewFeedbackPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 21838);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 789);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 9538);
/* harmony import */ var _view_feedback_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./view-feedback.page */ 44681);




const routes = [
    {
        path: '',
        component: _view_feedback_page__WEBPACK_IMPORTED_MODULE_0__.ViewFeedbackPage
    }
];
let ViewFeedbackPageRoutingModule = class ViewFeedbackPageRoutingModule {
};
ViewFeedbackPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], ViewFeedbackPageRoutingModule);



/***/ }),

/***/ 50742:
/*!***************************************************************************!*\
  !*** ./src/app/pages/actions/admin/view-feedback/view-feedback.module.ts ***!
  \***************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ViewFeedbackPageModule": () => (/* binding */ ViewFeedbackPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! tslib */ 21838);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 789);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ 2006);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/forms */ 43459);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/common/http */ 45331);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ionic/angular */ 30585);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @ngx-translate/core */ 52784);
/* harmony import */ var _view_feedback_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./view-feedback-routing.module */ 60746);
/* harmony import */ var _components_components_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../components/components.module */ 96453);
/* harmony import */ var _view_feedback_page__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./view-feedback.page */ 44681);
/* harmony import */ var src_app_app_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/app.module */ 92014);











let ViewFeedbackPageModule = class ViewFeedbackPageModule {
};
ViewFeedbackPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_5__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_6__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_7__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_8__.IonicModule,
            _view_feedback_routing_module__WEBPACK_IMPORTED_MODULE_0__.ViewFeedbackPageRoutingModule,
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
        declarations: [_view_feedback_page__WEBPACK_IMPORTED_MODULE_2__.ViewFeedbackPage]
    })
], ViewFeedbackPageModule);



/***/ }),

/***/ 44681:
/*!*************************************************************************!*\
  !*** ./src/app/pages/actions/admin/view-feedback/view-feedback.page.ts ***!
  \*************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ViewFeedbackPage": () => (/* binding */ ViewFeedbackPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! tslib */ 21838);
/* harmony import */ var _home_vagrant_projects_Vnint_node_modules_angular_devkit_build_angular_node_modules_ngtools_webpack_src_loaders_direct_resource_js_view_feedback_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !./node_modules/@angular-devkit/build-angular/node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./view-feedback.page.html */ 86088);
/* harmony import */ var _view_feedback_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./view-feedback.page.scss */ 53827);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/core */ 789);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 43459);
/* harmony import */ var src_app_services_feedback_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/feedback.service */ 78834);
/* harmony import */ var src_app_services_error_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/error.service */ 55729);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ngx-translate/core */ 52784);
/* harmony import */ var _services_alert_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../services/alert.service */ 92677);









let ViewFeedbackPage = class ViewFeedbackPage {
    constructor(feedbackService, formBuilder, errorService, translate, alertService) {
        this.feedbackService = feedbackService;
        this.formBuilder = formBuilder;
        this.errorService = errorService;
        this.translate = translate;
        this.alertService = alertService;
        this.feedback = [];
        this.filteredFeedback = [];
    }
    ngOnInit() {
        this.searchFeedbackForm = this.formBuilder.group({
            type: [''],
            short_description: [''],
        });
        this.searchFeedbackForm.patchValue({
            type: ['general', 'feature', 'translation', 'typo', 'bug', 'other']
        });
    }
    ionViewWillEnter() {
        this.getFeedback();
    }
    searchFeedback() {
        this.filteredFeedback = [];
        this.feedback.forEach(feedback => {
            if (this.searchFeedbackForm.value.type.includes(feedback.type) && this.similar(feedback.short_description, this.searchFeedbackForm.value.short_description) > 0.3) {
                this.filteredFeedback.push(feedback);
            }
        });
    }
    similar(short_description, input) {
        if (!input) {
            return 1;
        }
        let equivalency = 0;
        const minLength = (short_description.length > input.length) ? input.length : short_description.length;
        const maxLength = (short_description.length < input.length) ? input.length : short_description.length;
        for (let i = 0; i < minLength; i++) {
            if (short_description[i] == input[i]) {
                equivalency++;
            }
        }
        return equivalency / maxLength;
    }
    getFeedback() {
        this.feedbackService.getFeedback().subscribe({
            error: error => {
                this.errorService.errorOccurred.emit(error);
            },
            next: response => {
                const resp = response;
                this.feedback = resp.feedback;
                this.filteredFeedback = resp.feedback;
            },
        });
    }
    deleteFeedback(feedbackId) {
        this.feedbackService.deleteFeedback(feedbackId).subscribe({
            error: error => {
                this.errorService.errorOccurred.emit(error);
            },
            next: () => { },
            complete: () => {
                this.getFeedback();
            },
        });
    }
};
ViewFeedbackPage.ctorParameters = () => [
    { type: src_app_services_feedback_service__WEBPACK_IMPORTED_MODULE_2__.FeedbackService },
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormBuilder },
    { type: src_app_services_error_service__WEBPACK_IMPORTED_MODULE_3__.ErrorService },
    { type: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_6__.TranslateService },
    { type: _services_alert_service__WEBPACK_IMPORTED_MODULE_4__.AlertService }
];
ViewFeedbackPage = (0,tslib__WEBPACK_IMPORTED_MODULE_7__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_8__.Component)({
        selector: 'app-view-feedback',
        template: _home_vagrant_projects_Vnint_node_modules_angular_devkit_build_angular_node_modules_ngtools_webpack_src_loaders_direct_resource_js_view_feedback_page_html__WEBPACK_IMPORTED_MODULE_0__["default"],
        styles: [_view_feedback_page_scss__WEBPACK_IMPORTED_MODULE_1__]
    })
], ViewFeedbackPage);



/***/ }),

/***/ 53827:
/*!***************************************************************************!*\
  !*** ./src/app/pages/actions/admin/view-feedback/view-feedback.page.scss ***!
  \***************************************************************************/
/***/ ((module) => {

module.exports = "ion-card-subtitle {\n  margin-top: -1px;\n  margin-bottom: 2px;\n}\n\n.subtitle-labels {\n  display: inline;\n}\n\n.long-description-label {\n  margin: 0;\n  display: block;\n  overflow: hidden;\n  flex: 1;\n  font-size: inherit;\n  text-overflow: ellipsis;\n  white-space: nowrap;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInZpZXctZmVlZGJhY2sucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsZ0JBQUE7RUFDQSxrQkFBQTtBQUNGOztBQUVBO0VBQ0UsZUFBQTtBQUNGOztBQUVBO0VBQ0UsU0FBQTtFQUNBLGNBQUE7RUFDQSxnQkFBQTtFQUlBLE9BQUE7RUFDQSxrQkFBQTtFQUNBLHVCQUFBO0VBQ0EsbUJBQUE7QUFDRiIsImZpbGUiOiJ2aWV3LWZlZWRiYWNrLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbImlvbi1jYXJkLXN1YnRpdGxlIHtcbiAgbWFyZ2luLXRvcDogLTFweDtcbiAgbWFyZ2luLWJvdHRvbTogMnB4O1xufVxuXG4uc3VidGl0bGUtbGFiZWxzIHtcbiAgZGlzcGxheTogaW5saW5lO1xufVxuXG4ubG9uZy1kZXNjcmlwdGlvbi1sYWJlbCB7XG4gIG1hcmdpbjogMDtcbiAgZGlzcGxheTogYmxvY2s7XG4gIG92ZXJmbG93OiBoaWRkZW47XG4gIC13ZWJraXQtYm94LWZsZXg6IDE7XG4gIC13ZWJraXQtZmxleDogMTtcbiAgLW1zLWZsZXg6IDE7XG4gIGZsZXg6IDE7XG4gIGZvbnQtc2l6ZTogaW5oZXJpdDtcbiAgdGV4dC1vdmVyZmxvdzogZWxsaXBzaXM7XG4gIHdoaXRlLXNwYWNlOiBub3dyYXA7XG59XG4iXX0= */";

/***/ })

}]);
//# sourceMappingURL=src_app_pages_actions_admin_view-feedback_view-feedback_module_ts.js.map