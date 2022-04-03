"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_pages_other_terms_terms_module_ts"],{

/***/ 68484:
/*!*************************************************************************************************************************************************************!*\
  !*** ./node_modules/@angular-devkit/build-angular/node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./src/app/pages/other/terms/terms.page.html ***!
  \*************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<ion-content>\n  <app-toolbar></app-toolbar>\n  <ion-grid>\n    <ion-row>\n      <ion-col>\n        <app-card-title-bar title=\"{{ 'OTHER.TERMS.title' | translate }}\"></app-card-title-bar>\n        <ion-card color=\"light\">\n          <ion-card-content>\n            <ion-grid class=\"inside-card-grid\">\n                <ion-row *ngIf=\"('OTHER.TERMS.LEGAL' | translate) != 'OTHER.TERMS.LEGAL'\">\n                  <ng-container *ngFor=\"let term of ('OTHER.TERMS.LEGAL' | translate)\">\n                    <ion-col sizeXl=\"9\" sizeLg=\"9\" sizeMd=\"9\" sizeSm=\"12\" sizeXs=\"12\">\n                      <ion-title *ngIf=\"term.title\">\n                        <b>{{ term.title }}</b>\n                      </ion-title>\n                      <ion-label *ngIf=\"term.term\">\n                        {{ term.term }}\n                      </ion-label>\n                    </ion-col>\n                    <ion-col sizeXl=\"3\" sizeLg=\"3\" sizeMd=\"3\" sizeSm=\"12\" sizeXs=\"12\" *ngIf=\"term.summary\">\n                      <ion-label color=\"primary\">\n                        <b>{{ term.summary }}</b>\n                      </ion-label>\n                    </ion-col>\n                  </ng-container>\n                </ion-row>\n                <ion-row *ngIf=\"('OTHER.TERMS.LEGAL' | translate) == 'OTHER.TERMS.LEGAL'\">\n                  <ion-col>\n                    <ion-label>\n                      Loading terms... This should not take too long. If it takes longer that 5 minutes please refresh the page. If the error continues to exist contact the system administrator.\n                    </ion-label>\n                  </ion-col>\n                </ion-row>\n            </ion-grid>\n          </ion-card-content>\n        </ion-card>\n      </ion-col>\n    </ion-row>\n  </ion-grid>\n  <app-footer></app-footer>\n</ion-content>\n");

/***/ }),

/***/ 62140:
/*!***********************************************************!*\
  !*** ./src/app/pages/other/terms/terms-routing.module.ts ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "TermsPageRoutingModule": () => (/* binding */ TermsPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 21838);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 789);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 9538);
/* harmony import */ var _terms_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./terms.page */ 29446);




const routes = [
    {
        path: '',
        component: _terms_page__WEBPACK_IMPORTED_MODULE_0__.TermsPage
    }
];
let TermsPageRoutingModule = class TermsPageRoutingModule {
};
TermsPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], TermsPageRoutingModule);



/***/ }),

/***/ 465:
/*!***************************************************!*\
  !*** ./src/app/pages/other/terms/terms.module.ts ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "TermsPageModule": () => (/* binding */ TermsPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! tslib */ 21838);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 789);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ 2006);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/forms */ 43459);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/common/http */ 45331);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ionic/angular */ 30585);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @ngx-translate/core */ 52784);
/* harmony import */ var _terms_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./terms-routing.module */ 62140);
/* harmony import */ var _components_components_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../components/components.module */ 96453);
/* harmony import */ var _terms_page__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./terms.page */ 29446);
/* harmony import */ var src_app_app_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/app.module */ 92014);











let TermsPageModule = class TermsPageModule {
};
TermsPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_5__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_6__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_7__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_8__.IonicModule,
            _terms_routing_module__WEBPACK_IMPORTED_MODULE_0__.TermsPageRoutingModule,
            _components_components_module__WEBPACK_IMPORTED_MODULE_1__.ComponentsModule,
            _ngx_translate_core__WEBPACK_IMPORTED_MODULE_9__.TranslateModule.forChild({
                loader: {
                    provide: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_9__.TranslateLoader,
                    useFactory: src_app_app_module__WEBPACK_IMPORTED_MODULE_3__.createTranslateLoader,
                    deps: [_angular_common_http__WEBPACK_IMPORTED_MODULE_10__.HttpClient]
                }
            })
        ],
        declarations: [_terms_page__WEBPACK_IMPORTED_MODULE_2__.TermsPage]
    })
], TermsPageModule);



/***/ }),

/***/ 29446:
/*!*************************************************!*\
  !*** ./src/app/pages/other/terms/terms.page.ts ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "TermsPage": () => (/* binding */ TermsPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 21838);
/* harmony import */ var _home_vagrant_projects_Vnint_node_modules_angular_devkit_build_angular_node_modules_ngtools_webpack_src_loaders_direct_resource_js_terms_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !./node_modules/@angular-devkit/build-angular/node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./terms.page.html */ 68484);
/* harmony import */ var _terms_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./terms.page.scss */ 5649);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 789);
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../services/auth.service */ 56898);





let TermsPage = class TermsPage {
    constructor(auth) {
        this.auth = auth;
    }
    ngOnInit() {
    }
};
TermsPage.ctorParameters = () => [
    { type: _services_auth_service__WEBPACK_IMPORTED_MODULE_2__.AuthService }
];
TermsPage = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.Component)({
        selector: 'app-terms',
        template: _home_vagrant_projects_Vnint_node_modules_angular_devkit_build_angular_node_modules_ngtools_webpack_src_loaders_direct_resource_js_terms_page_html__WEBPACK_IMPORTED_MODULE_0__["default"],
        styles: [_terms_page_scss__WEBPACK_IMPORTED_MODULE_1__]
    })
], TermsPage);



/***/ }),

/***/ 5649:
/*!***************************************************!*\
  !*** ./src/app/pages/other/terms/terms.page.scss ***!
  \***************************************************/
/***/ ((module) => {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJ0ZXJtcy5wYWdlLnNjc3MifQ== */";

/***/ })

}]);
//# sourceMappingURL=src_app_pages_other_terms_terms_module_ts.js.map