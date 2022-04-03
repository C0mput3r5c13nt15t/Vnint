"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_pages_other_impressum_impressum_module_ts"],{

/***/ 30187:
/*!*********************************************************************************************************************************************************************!*\
  !*** ./node_modules/@angular-devkit/build-angular/node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./src/app/pages/other/impressum/impressum.page.html ***!
  \*********************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<ion-content>\n  <app-toolbar></app-toolbar>\n  <ion-grid>\n    <ion-row>\n      <ion-col>\n        <app-card-title-bar title=\"{{ 'OTHER.IMPRESSUM.title' | translate }}\"></app-card-title-bar>\n        <ion-card color=\"light\">\n          <ion-card-content>\n            <ion-grid class=\"inside-card-grid\">\n              <ion-row *ngIf=\"('OTHER.IMPRESSUM.CONTACT' | translate) != 'OTHER.IMPRESSUM.CONTACT'\">\n                <ion-col size=\"12\" *ngFor=\"let contact of ('OTHER.IMPRESSUM.CONTACT' | translate)\">\n                  <ion-label *ngIf=\"contact.name\">\n                    <b>{{ contact.name }}</b><br>\n                  </ion-label>\n                  <ion-label *ngIf=\"contact.address1\">\n                    {{ contact.address1 }}<br>\n                  </ion-label>\n                  <ion-label *ngIf=\"contact.address2\">\n                    {{ contact.address2 }}<br>\n                  </ion-label>\n                  <ion-label *ngIf=\"contact.telephone\">\n                    {{ ('OTHER.IMPRESSUM.telephone' | translate) }} {{ contact.telephone }}<br>\n                  </ion-label>\n                  <ion-label *ngIf=\"contact.mobile\">\n                    {{ ('OTHER.IMPRESSUM.mobile' | translate) }} {{ contact.mobile }}<br>\n                  </ion-label>\n                  <ion-label *ngIf=\"contact.fax\">\n                    {{ ('OTHER.IMPRESSUM.fax' | translate) }} {{ contact.fax }}<br>\n                  </ion-label>\n                  <ion-label *ngIf=\"contact.email\">\n                    <a [attr.href]=\"'mailto:' + contact.email\">{{ contact.email }}</a>\n                  </ion-label>\n                </ion-col>\n              </ion-row>\n              <ion-row *ngIf=\"('OTHER.IMPRESSUM.CONTACT' | translate) == 'OTHER.IMPRESSUM.CONTACT'\">\n                <ion-col>\n                  <ion-label>\n                    Loading impress... This should not take too long. If it takes longer that 5 minutes please refresh the page. If the error continues to exist contact the system administrator.\n                  </ion-label>\n                </ion-col>\n              </ion-row>\n            </ion-grid>\n          </ion-card-content>\n        </ion-card>\n      </ion-col>\n    </ion-row>\n  </ion-grid>\n  <app-footer class=\"fixed-footer\"></app-footer>\n</ion-content>\n");

/***/ }),

/***/ 80611:
/*!*******************************************************************!*\
  !*** ./src/app/pages/other/impressum/impressum-routing.module.ts ***!
  \*******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ImpressPageRoutingModule": () => (/* binding */ ImpressPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 21838);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 789);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 9538);
/* harmony import */ var _impressum_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./impressum.page */ 32359);




const routes = [
    {
        path: '',
        component: _impressum_page__WEBPACK_IMPORTED_MODULE_0__.ImpressumPage
    }
];
let ImpressPageRoutingModule = class ImpressPageRoutingModule {
};
ImpressPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], ImpressPageRoutingModule);



/***/ }),

/***/ 67138:
/*!***********************************************************!*\
  !*** ./src/app/pages/other/impressum/impressum.module.ts ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ImpressumPageModule": () => (/* binding */ ImpressumPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! tslib */ 21838);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 789);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ 2006);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/forms */ 43459);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/common/http */ 45331);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ionic/angular */ 30585);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @ngx-translate/core */ 52784);
/* harmony import */ var _impressum_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./impressum-routing.module */ 80611);
/* harmony import */ var _components_components_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../components/components.module */ 96453);
/* harmony import */ var _impressum_page__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./impressum.page */ 32359);
/* harmony import */ var src_app_app_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/app.module */ 92014);











let ImpressumPageModule = class ImpressumPageModule {
};
ImpressumPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_5__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_6__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_7__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_8__.IonicModule,
            _impressum_routing_module__WEBPACK_IMPORTED_MODULE_0__.ImpressPageRoutingModule,
            _components_components_module__WEBPACK_IMPORTED_MODULE_1__.ComponentsModule,
            _ngx_translate_core__WEBPACK_IMPORTED_MODULE_9__.TranslateModule.forChild({
                loader: {
                    provide: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_9__.TranslateLoader,
                    useFactory: src_app_app_module__WEBPACK_IMPORTED_MODULE_3__.createTranslateLoader,
                    deps: [_angular_common_http__WEBPACK_IMPORTED_MODULE_10__.HttpClient]
                }
            })
        ],
        declarations: [_impressum_page__WEBPACK_IMPORTED_MODULE_2__.ImpressumPage]
    })
], ImpressumPageModule);



/***/ }),

/***/ 32359:
/*!*********************************************************!*\
  !*** ./src/app/pages/other/impressum/impressum.page.ts ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ImpressumPage": () => (/* binding */ ImpressumPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 21838);
/* harmony import */ var _home_vagrant_projects_Vnint_node_modules_angular_devkit_build_angular_node_modules_ngtools_webpack_src_loaders_direct_resource_js_impressum_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !./node_modules/@angular-devkit/build-angular/node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./impressum.page.html */ 30187);
/* harmony import */ var _impressum_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./impressum.page.scss */ 99943);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 789);
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../services/auth.service */ 56898);





let ImpressumPage = class ImpressumPage {
    constructor(auth) {
        this.auth = auth;
    }
    ngOnInit() {
    }
};
ImpressumPage.ctorParameters = () => [
    { type: _services_auth_service__WEBPACK_IMPORTED_MODULE_2__.AuthService }
];
ImpressumPage = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.Component)({
        selector: 'app-impressum',
        template: _home_vagrant_projects_Vnint_node_modules_angular_devkit_build_angular_node_modules_ngtools_webpack_src_loaders_direct_resource_js_impressum_page_html__WEBPACK_IMPORTED_MODULE_0__["default"],
        styles: [_impressum_page_scss__WEBPACK_IMPORTED_MODULE_1__]
    })
], ImpressumPage);



/***/ }),

/***/ 99943:
/*!***********************************************************!*\
  !*** ./src/app/pages/other/impressum/impressum.page.scss ***!
  \***********************************************************/
/***/ ((module) => {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJpbXByZXNzdW0ucGFnZS5zY3NzIn0= */";

/***/ })

}]);
//# sourceMappingURL=src_app_pages_other_impressum_impressum_module_ts.js.map