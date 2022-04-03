"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_pages_other_help_help_module_ts"],{

/***/ 20012:
/*!***********************************************************************************************************************************************************!*\
  !*** ./node_modules/@angular-devkit/build-angular/node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./src/app/pages/other/help/help.page.html ***!
  \***********************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<ion-content>\n  <app-toolbar></app-toolbar>\n  <ion-grid>\n    <ion-row>\n      <ion-col>\n        <app-card-title-bar title=\"{{ 'OTHER.HELP.title' | translate }}\"></app-card-title-bar>\n        <ion-card color=\"light\">\n          <ion-card-content>\n            <ion-slides>\n              <ion-slide>\n                <div class=\"slide\">\n                  <img src=\"https://raw.githubusercontent.com/ionic-team/ionic-docs/legacy/src/demos/api/slides/slide-1.png\" alt=\"Just imagine a very cool image ...\">\n                  <h2>Welcome</h2>\n                  <p>The <b>ionic conference app</b> is a practical preview of the ionic framework in action, and a demonstration of proper code use.</p>\n                </div>\n              </ion-slide>\n\n              <ion-slide>\n                <img src=\"https://raw.githubusercontent.com/ionic-team/ionic-docs/legacy/src/demos/api/slides/slide-2.png\" alt=\"Just imagine a very cool image ...\">\n                <h2>What is Ionic?</h2>\n                <p><b>Ionic Framework</b> is an open source SDK that enables developers to build high quality mobile apps with web technologies like HTML, CSS, and JavaScript.</p>\n              </ion-slide>\n\n              <ion-slide>\n                <img src=\"https://raw.githubusercontent.com/ionic-team/ionic-docs/legacy/src/demos/api/slides/slide-3.png\" alt=\"Just imagine a very cool image ...\">\n                <h2>What is Appflow?</h2>\n                <p><b>Appflow</b> is a powerful set of services and features built on top of Ionic Framework that brings a totally new level of app development agility to mobile dev teams.</p>\n              </ion-slide>\n\n              <ion-slide>\n                <img src=\"https://raw.githubusercontent.com/ionic-team/ionic-docs/legacy/src/demos/api/slides/slide-4.png\" alt=\"Just imagine a very cool image ...\">\n                <h2>Ready to Play?</h2>\n                <ion-button (click)=\"endIntroduction()\" fill=\"clear\">Continue <ion-icon slot=\"end\" name=\"arrow-forward\"></ion-icon></ion-button>\n              </ion-slide>\n            </ion-slides>\n          </ion-card-content>\n        </ion-card>\n      </ion-col>\n    </ion-row>\n  </ion-grid>\n  <app-footer></app-footer>\n</ion-content>\n");

/***/ }),

/***/ 31708:
/*!*********************************************************!*\
  !*** ./src/app/pages/other/help/help-routing.module.ts ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "HelpPageRoutingModule": () => (/* binding */ HelpPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 21838);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 789);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 9538);
/* harmony import */ var _help_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./help.page */ 30035);




const routes = [
    {
        path: '',
        component: _help_page__WEBPACK_IMPORTED_MODULE_0__.HelpPage
    }
];
let HelpPageRoutingModule = class HelpPageRoutingModule {
};
HelpPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], HelpPageRoutingModule);



/***/ }),

/***/ 15762:
/*!*************************************************!*\
  !*** ./src/app/pages/other/help/help.module.ts ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "HelpPageModule": () => (/* binding */ HelpPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! tslib */ 21838);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 789);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ 2006);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/forms */ 43459);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/common/http */ 45331);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ionic/angular */ 30585);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @ngx-translate/core */ 52784);
/* harmony import */ var _help_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./help-routing.module */ 31708);
/* harmony import */ var _components_components_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../components/components.module */ 96453);
/* harmony import */ var _help_page__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./help.page */ 30035);
/* harmony import */ var src_app_app_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/app.module */ 92014);











let HelpPageModule = class HelpPageModule {
};
HelpPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_5__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_6__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_7__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_8__.IonicModule,
            _help_routing_module__WEBPACK_IMPORTED_MODULE_0__.HelpPageRoutingModule,
            _components_components_module__WEBPACK_IMPORTED_MODULE_1__.ComponentsModule,
            _ngx_translate_core__WEBPACK_IMPORTED_MODULE_9__.TranslateModule.forChild({
                loader: {
                    provide: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_9__.TranslateLoader,
                    useFactory: src_app_app_module__WEBPACK_IMPORTED_MODULE_3__.createTranslateLoader,
                    deps: [_angular_common_http__WEBPACK_IMPORTED_MODULE_10__.HttpClient]
                }
            })
        ],
        declarations: [_help_page__WEBPACK_IMPORTED_MODULE_2__.HelpPage]
    })
], HelpPageModule);



/***/ }),

/***/ 30035:
/*!***********************************************!*\
  !*** ./src/app/pages/other/help/help.page.ts ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "HelpPage": () => (/* binding */ HelpPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 21838);
/* harmony import */ var _home_vagrant_projects_Vnint_node_modules_angular_devkit_build_angular_node_modules_ngtools_webpack_src_loaders_direct_resource_js_help_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !./node_modules/@angular-devkit/build-angular/node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./help.page.html */ 20012);
/* harmony import */ var _help_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./help.page.scss */ 12214);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 789);




let HelpPage = class HelpPage {
    constructor() { }
    ngOnInit() {
    }
    endIntroduction() {
        console.log('Now go!!!');
    }
};
HelpPage.ctorParameters = () => [];
HelpPage = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.Component)({
        selector: 'app-help',
        template: _home_vagrant_projects_Vnint_node_modules_angular_devkit_build_angular_node_modules_ngtools_webpack_src_loaders_direct_resource_js_help_page_html__WEBPACK_IMPORTED_MODULE_0__["default"],
        styles: [_help_page_scss__WEBPACK_IMPORTED_MODULE_1__]
    })
], HelpPage);



/***/ }),

/***/ 12214:
/*!*************************************************!*\
  !*** ./src/app/pages/other/help/help.page.scss ***!
  \*************************************************/
/***/ ((module) => {

module.exports = "ion-slides {\n  height: 100%;\n}\nion-slides .swiper-slide {\n  display: block;\n}\nion-slides .swiper-slide h2 {\n  margin-top: 2.8rem;\n}\nion-slides .swiper-slide img {\n  max-height: 50%;\n  max-width: 80%;\n  margin: 60px 0 40px;\n  pointer-events: none;\n}\nion-slides b {\n  font-weight: 500;\n}\nion-slides p {\n  padding: 0 40px;\n  font-size: 14px;\n  line-height: 1.5;\n  color: var(--ion-color-step-600, #60646b);\n}\nion-slides p b {\n  color: var(--ion-text-color, #000000);\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImhlbHAucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsWUFBQTtBQUNGO0FBQ0U7RUFDRSxjQUFBO0FBQ0o7QUFFRTtFQUNFLGtCQUFBO0FBQUo7QUFHRTtFQUNFLGVBQUE7RUFDQSxjQUFBO0VBQ0EsbUJBQUE7RUFDQSxvQkFBQTtBQURKO0FBSUU7RUFDRSxnQkFBQTtBQUZKO0FBS0U7RUFDRSxlQUFBO0VBQ0EsZUFBQTtFQUNBLGdCQUFBO0VBQ0EseUNBQUE7QUFISjtBQU1FO0VBQ0UscUNBQUE7QUFKSiIsImZpbGUiOiJoZWxwLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbImlvbi1zbGlkZXMge1xuICBoZWlnaHQ6IDEwMCU7XG5cbiAgLnN3aXBlci1zbGlkZSB7XG4gICAgZGlzcGxheTogYmxvY2s7XG4gIH1cblxuICAuc3dpcGVyLXNsaWRlIGgyIHtcbiAgICBtYXJnaW4tdG9wOiAyLjhyZW07XG4gIH1cblxuICAuc3dpcGVyLXNsaWRlIGltZyB7XG4gICAgbWF4LWhlaWdodDogNTAlO1xuICAgIG1heC13aWR0aDogODAlO1xuICAgIG1hcmdpbjogNjBweCAwIDQwcHg7XG4gICAgcG9pbnRlci1ldmVudHM6IG5vbmU7XG4gIH1cblxuICBiIHtcbiAgICBmb250LXdlaWdodDogNTAwO1xuICB9XG5cbiAgcCB7XG4gICAgcGFkZGluZzogMCA0MHB4O1xuICAgIGZvbnQtc2l6ZTogMTRweDtcbiAgICBsaW5lLWhlaWdodDogMS41O1xuICAgIGNvbG9yOiB2YXIoLS1pb24tY29sb3Itc3RlcC02MDAsICM2MDY0NmIpO1xuICB9XG5cbiAgcCBiIHtcbiAgICBjb2xvcjogdmFyKC0taW9uLXRleHQtY29sb3IsICMwMDAwMDApO1xuICB9XG59XG4iXX0= */";

/***/ })

}]);
//# sourceMappingURL=src_app_pages_other_help_help_module_ts.js.map