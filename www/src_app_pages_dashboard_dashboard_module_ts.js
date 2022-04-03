"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_pages_dashboard_dashboard_module_ts"],{

/***/ 77818:
/*!***************************************************************************************************************************************************************!*\
  !*** ./node_modules/@angular-devkit/build-angular/node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./src/app/pages/dashboard/dashboard.page.html ***!
  \***************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<ion-content>\n  <app-toolbar></app-toolbar>\n  <div class=\"dashboard-row\">\n    <ng-container *ngIf=\"('DASHBOARD.GREETINGS' | translate) != 'DASHBOARD.GREETINGS'\">\n      <ng-container *ngFor=\"let greeting of ('DASHBOARD.GREETINGS' | translate)\">\n        <ng-container>\n          <ion-card class=\"greeting-card\" color=\"light\" *ngIf=\"curHr >= greeting.hours[0] && curHr < greeting.hours[1]\">\n            <ion-card-content>\n              <ion-card-header>\n                <ion-card-title>\n                  {{ greeting.title }}\n                </ion-card-title>\n              </ion-card-header>\n              <ion-card-content *ngIf=\"quoteOfTheDay\">\n                <ion-label>\n                  {{ quoteOfTheDay.quote }} <b>- {{ quoteOfTheDay.author }}</b>\n                </ion-label><br>\n                <ion-label class=\"copyright\">{{ quoteOfTheDay.copyright }}</ion-label>\n              </ion-card-content>\n              <ion-card-content *ngIf=\"!quoteOfTheDay\">\n                <ion-label>\n                  Loading inspirational quote ...\n                </ion-label><br>\n                <ion-label class=\"copyright\">Copyright © 2024 https://theysaidso.com</ion-label>\n              </ion-card-content>\n            </ion-card-content>\n          </ion-card>\n        </ng-container>\n      </ng-container>\n    </ng-container>\n  </div>\n  <div class=\"dashboard-row\">\n    <ng-container  *ngIf=\"error || ('DASHBOARD.CARDS' | translate) == 'DASHBOARD.CARDS'\">\n      <ion-card>\n        <ion-card-header>\n          <ion-card-title>\n            Error\n          </ion-card-title>\n        </ion-card-header>\n        <ion-card-content>\n          <ion-label>\n            We are sorry but there seems to be some kind of error. Click <a routerLink=\"/give-feedback\">here</a> to report it.\n          </ion-label>\n        </ion-card-content>\n      </ion-card>\n    </ng-container>\n    <ng-container *ngIf=\"('DASHBOARD.CARDS' | translate) != 'DASHBOARD.CARDS'\">\n      <ng-container *ngFor=\"let card of ('DASHBOARD.CARDS' | translate)\">\n        <ng-container *ngIf=\"card.requiredPermissions.length == 0 || hasOneSetOfPermissions(permissions, card.requiredPermissions)\">\n          <app-nav-card cardTitle=\"{{ card.title }}\" cardIcon=\"{{ card.icon_name }}\" cardButtons=\"{{ card.BUTTONS | json}}\" [permissions]=\"permissions\" [eventPermissions]=\"eventPermissions\"></app-nav-card>\n        </ng-container>\n      </ng-container>\n    </ng-container>\n  </div>\n</ion-content>\n\n<!-- *ngIf=\"!card.requiredPermissions || hasOneSetOfPermissions(permissions, card.requiredPermissions)\" -->\n<!--  *ngIf=\"arrayContainsArray(permissions, card.requiredPermissions) && arrayContainsArray(eventPermissions, card.requiredPermissions)\" -->\n");

/***/ }),

/***/ 35376:
/*!*************************************************************!*\
  !*** ./src/app/pages/dashboard/dashboard-routing.module.ts ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DashboardPageRoutingModule": () => (/* binding */ DashboardPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 21838);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 789);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 9538);
/* harmony import */ var _dashboard_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./dashboard.page */ 55803);




const routes = [
    {
        path: '',
        component: _dashboard_page__WEBPACK_IMPORTED_MODULE_0__.DashboardPage
    }
];
let DashboardPageRoutingModule = class DashboardPageRoutingModule {
};
DashboardPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], DashboardPageRoutingModule);



/***/ }),

/***/ 7945:
/*!*****************************************************!*\
  !*** ./src/app/pages/dashboard/dashboard.module.ts ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DashboardPageModule": () => (/* binding */ DashboardPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! tslib */ 21838);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 789);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ 2006);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/forms */ 43459);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/common/http */ 45331);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ionic/angular */ 30585);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @ngx-translate/core */ 52784);
/* harmony import */ var _dashboard_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./dashboard-routing.module */ 35376);
/* harmony import */ var _components_components_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../components/components.module */ 96453);
/* harmony import */ var _dashboard_page__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./dashboard.page */ 55803);
/* harmony import */ var src_app_app_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/app.module */ 92014);











let DashboardPageModule = class DashboardPageModule {
};
DashboardPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_5__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_6__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_7__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_8__.IonicModule,
            _dashboard_routing_module__WEBPACK_IMPORTED_MODULE_0__.DashboardPageRoutingModule,
            _components_components_module__WEBPACK_IMPORTED_MODULE_1__.ComponentsModule,
            _ngx_translate_core__WEBPACK_IMPORTED_MODULE_9__.TranslateModule.forChild({
                loader: {
                    provide: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_9__.TranslateLoader,
                    useFactory: src_app_app_module__WEBPACK_IMPORTED_MODULE_3__.createTranslateLoader,
                    deps: [_angular_common_http__WEBPACK_IMPORTED_MODULE_10__.HttpClient]
                }
            })
        ],
        declarations: [_dashboard_page__WEBPACK_IMPORTED_MODULE_2__.DashboardPage]
    })
], DashboardPageModule);



/***/ }),

/***/ 55803:
/*!***************************************************!*\
  !*** ./src/app/pages/dashboard/dashboard.page.ts ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DashboardPage": () => (/* binding */ DashboardPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! tslib */ 21838);
/* harmony import */ var _home_vagrant_projects_Vnint_node_modules_angular_devkit_build_angular_node_modules_ngtools_webpack_src_loaders_direct_resource_js_dashboard_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !./node_modules/@angular-devkit/build-angular/node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./dashboard.page.html */ 77818);
/* harmony import */ var _dashboard_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./dashboard.page.scss */ 7489);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/core */ 789);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/router */ 9538);
/* harmony import */ var src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/auth.service */ 56898);
/* harmony import */ var src_app_services_alert_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/alert.service */ 92677);
/* harmony import */ var src_app_services_quote_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/services/quote.service */ 77199);
/* harmony import */ var _services_error_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../services/error.service */ 55729);
/* harmony import */ var _services_user_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../services/user.service */ 88481);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @ionic/angular */ 30585);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @ngx-translate/core */ 52784);












let DashboardPage = class DashboardPage {
    constructor(auth, router, translate, alertService, alertController, quoteService, errorService, userService) {
        this.auth = auth;
        this.router = router;
        this.translate = translate;
        this.alertService = alertService;
        this.alertController = alertController;
        this.quoteService = quoteService;
        this.errorService = errorService;
        this.userService = userService;
        this.error = false;
        this.permissions = [];
        this.eventPermissions = [];
        this.today = new Date();
        this.curHr = this.today.getHours();
    }
    ngOnInit() {
        this.quoteService.getQuote().subscribe({
            next: response => {
                const resp = response;
                this.quoteOfTheDay = {
                    quote: resp.contents.quotes[0].quote,
                    author: resp.contents.quotes[0].author,
                    copyright: 'Copyright © ' + resp.copyright.year.toString() + ' ' + resp.copyright.url,
                };
            }
        });
        this.getGradeLevel();
    }
    ionViewWillEnter() {
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
    getGradeLevel() {
        this.userService.getGradeLevel().subscribe({
            error: error => {
                this.errorService.errorOccurred.emit(error);
            },
            next: response => {
                const resp = response;
                if (!resp.grade_level) {
                    this.setGradeAlert();
                }
            },
        });
    }
    setGradeAlert() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_7__.__awaiter)(this, void 0, void 0, function* () {
            const alert = yield this.alertController.create({
                header: this.translate.instant('DASHBOARD.SET_GRADE_POPUP.alertHeader'),
                message: this.translate.instant('DASHBOARD.SET_GRADE_POPUP.alertMessage'),
                inputs: [
                    {
                        name: 'grade_level',
                        type: 'number',
                        min: 0,
                        max: 14
                    }
                ],
                buttons: [
                    {
                        text: this.translate.instant('DASHBOARD.SET_GRADE_POPUP.external'),
                        handler: () => {
                            this.userService.convertSelfToGuestAttendant().subscribe({
                                error: error => {
                                    this.errorService.errorOccurred.emit(error);
                                },
                                next: response => {
                                    const resp = response;
                                    this.alertService.alert("success", resp.message, "", "checkmark");
                                }
                            });
                        }
                    }, {
                        text: this.translate.instant('GENERAL.POPUPS.ok'),
                        handler: data => {
                            this.userService.setGradeLevel(data.grade_level).subscribe({
                                error: error => {
                                    this.errorService.errorOccurred.emit(error);
                                },
                                next: response => {
                                    const resp = response;
                                    this.alertService.alert("success", resp.message, "", "checkmark");
                                }
                            });
                        }
                    }
                ]
            });
            yield alert.present();
        });
    }
    hasOneSetOfPermissions(permissions, setsOfRequiredPermissions) {
        for (const setOfRequiredPermissions of setsOfRequiredPermissions) {
            if (this.arrayContainsArray(permissions, setOfRequiredPermissions)) {
                return true;
            }
        }
        return false;
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
DashboardPage.ctorParameters = () => [
    { type: src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_2__.AuthService },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_8__.Router },
    { type: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_9__.TranslateService },
    { type: src_app_services_alert_service__WEBPACK_IMPORTED_MODULE_3__.AlertService },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_10__.AlertController },
    { type: src_app_services_quote_service__WEBPACK_IMPORTED_MODULE_4__.QuoteService },
    { type: _services_error_service__WEBPACK_IMPORTED_MODULE_5__.ErrorService },
    { type: _services_user_service__WEBPACK_IMPORTED_MODULE_6__.UserService }
];
DashboardPage = (0,tslib__WEBPACK_IMPORTED_MODULE_7__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_11__.Component)({
        selector: 'app-dashboard',
        template: _home_vagrant_projects_Vnint_node_modules_angular_devkit_build_angular_node_modules_ngtools_webpack_src_loaders_direct_resource_js_dashboard_page_html__WEBPACK_IMPORTED_MODULE_0__["default"],
        styles: [_dashboard_page_scss__WEBPACK_IMPORTED_MODULE_1__]
    })
], DashboardPage);



/***/ }),

/***/ 77199:
/*!*******************************************!*\
  !*** ./src/app/services/quote.service.ts ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "QuoteService": () => (/* binding */ QuoteService)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 21838);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 789);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common/http */ 45331);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ngx-translate/core */ 52784);




let QuoteService = class QuoteService {
    constructor(http, translate) {
        this.http = http;
        this.translate = translate;
        this.headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_0__.HttpHeaders({
            accept: 'application/json',
            contentType: 'application/json',
        });
        this.options = { this: this.headers, withCredentials: false };
    }
    getQuote() {
        return this.http.get('https://quotes.rest/qod?language=en', this.options);
    }
};
QuoteService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_0__.HttpClient },
    { type: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_1__.TranslateService }
];
QuoteService = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.Injectable)({
        providedIn: 'root'
    })
], QuoteService);



/***/ }),

/***/ 7489:
/*!*****************************************************!*\
  !*** ./src/app/pages/dashboard/dashboard.page.scss ***!
  \*****************************************************/
/***/ ((module) => {

module.exports = "/** Ionic CSS Variables **/\n@font-face {\n  font-family: \"Montserrat\", sans-serif;\n}\n:root {\n  --ion-font-family: \"Montserrat\", sans-serif;\n}\n/*\n* Light Colors\n* -------------------------------------------\n*/\n:root {\n  --ion-color-primary: #6411D9;\n  --ion-color-primary-rgb: 100,17,217;\n  --ion-color-primary-contrast: #ffffff;\n  --ion-color-primary-contrast-rgb: 255,255,255;\n  --ion-color-primary-shade: #580fbf;\n  --ion-color-primary-tint: #7429dd;\n  --ion-color-secondary: #622BD9;\n  --ion-color-secondary-rgb: 98,43,217;\n  --ion-color-secondary-contrast: #ffffff;\n  --ion-color-secondary-contrast-rgb: 255,255,255;\n  --ion-color-secondary-shade: #5626bf;\n  --ion-color-secondary-tint: #7240dd;\n  --ion-color-tertiary: #752BDF;\n  --ion-color-tertiary-rgb: 117,43,223;\n  --ion-color-tertiary-contrast: #ffffff;\n  --ion-color-tertiary-contrast-rgb: 255,255,255;\n  --ion-color-tertiary-shade: #6726c4;\n  --ion-color-tertiary-tint: #8340e2;\n  --ion-color-success: #33cc73;\n  --ion-color-success-rgb: 51,204,115;\n  --ion-color-success-contrast: #ffffff;\n  --ion-color-success-contrast-rgb: 0,0,0;\n  --ion-color-success-shade: #2db465;\n  --ion-color-success-tint: #47d181;\n  --ion-color-warning: #f2e231;\n  --ion-color-warning-rgb: 242,226,49;\n  --ion-color-warning-contrast: #fff;\n  --ion-color-warning-contrast-rgb: 255,255,255;\n  --ion-color-warning-shade: #d5c72b;\n  --ion-color-warning-tint: #f3e546;\n  --ion-color-danger: #e53e3e;\n  --ion-color-danger-rgb: 229,62,62;\n  --ion-color-danger-contrast: #ffffff;\n  --ion-color-danger-contrast-rgb: 255,255,255;\n  --ion-color-danger-shade: #ca3737;\n  --ion-color-danger-tint: #e85151;\n  --ion-color-medium: #fcfaff;\n  --ion-color-medium-rgb: 252,250,255;\n  --ion-color-medium-contrast: #000000;\n  --ion-color-medium-contrast-rgb: 0,0,0;\n  --ion-color-medium-shade: #dedce0;\n  --ion-color-medium-tint: #fcfbff;\n  --ion-color-light: #FFFFFF;\n  --ion-color-light-rgb: 255,255,255;\n  --ion-color-light-contrast: #1a1a1a;\n  --ion-color-light-contrast-rgb: 0,0,0;\n  --ion-color-light-shade: #e0e0e0;\n  --ion-color-light-tint: #ffffff;\n  --ion-text-color: #1c1c1c;\n  --ion-item-background: var(--ion-color-light);\n}\n/*\n* Dark Colors\n* -------------------------------------------\n*/\nbody.dark {\n  --ion-color-primary: #7924f0;\n  --ion-color-primary-rgb: 121,36,240;\n  --ion-color-primary-contrast: #ffffff;\n  --ion-color-primary-contrast-rgb: 255,255,255;\n  --ion-color-primary-shade: #6a20d3;\n  --ion-color-primary-tint: #863af2;\n  --ion-color-secondary: #622BD9;\n  --ion-color-secondary-rgb: 98,43,217;\n  --ion-color-secondary-contrast: #ffffff;\n  --ion-color-secondary-contrast-rgb: 255,255,255;\n  --ion-color-secondary-shade: #5626bf;\n  --ion-color-secondary-tint: #7240dd;\n  --ion-color-tertiary: #752BDF;\n  --ion-color-tertiary-rgb: 117,43,223;\n  --ion-color-tertiary-contrast: #ffffff;\n  --ion-color-tertiary-contrast-rgb: 255,255,255;\n  --ion-color-tertiary-shade: #6726c4;\n  --ion-color-tertiary-tint: #8340e2;\n  --ion-color-success: #33cc73;\n  --ion-color-success-rgb: 51,204,115;\n  --ion-color-success-contrast: #ffffff;\n  --ion-color-success-contrast-rgb: 0,0,0;\n  --ion-color-success-shade: #2db465;\n  --ion-color-success-tint: #47d181;\n  --ion-color-warning: #f2e231;\n  --ion-color-warning-rgb: 242,226,49;\n  --ion-color-warning-contrast: #fff;\n  --ion-color-warning-contrast-rgb: 255,255,255;\n  --ion-color-warning-shade: #d5c72b;\n  --ion-color-warning-tint: #f3e546;\n  --ion-color-danger: #e53e3e;\n  --ion-color-danger-rgb: 229,62,62;\n  --ion-color-danger-contrast: #ffffff;\n  --ion-color-danger-contrast-rgb: 255,255,255;\n  --ion-color-danger-shade: #ca3737;\n  --ion-color-danger-tint: #e85151;\n  --ion-color-medium: #121212;\n  --ion-color-medium-rgb: 18,18,18;\n  --ion-color-medium-contrast: #ffffff;\n  --ion-color-medium-contrast-rgb: 255,255,255;\n  --ion-color-medium-shade: #101010;\n  --ion-color-medium-tint: #2a2a2a;\n  --ion-color-light: #1d1d1d;\n  --ion-color-light-rgb: 29,29,29;\n  --ion-color-light-contrast: #ffffff;\n  --ion-color-light-contrast-rgb: 255,255,255;\n  --ion-color-light-shade: #1a1a1a;\n  --ion-color-light-tint: #343434;\n  --ion-text-color: #fff;\n  --ion-item-background: var(--ion-color-light);\n}\n.dashboard-row {\n  display: flex;\n  flex-flow: row wrap;\n  justify-content: flex-start;\n  align-items: stretch;\n  align-content: stretch;\n  margin-top: 30px;\n  margin-left: 15px;\n  margin-bottom: 30px;\n  flex-grow: 1;\n  width: calc(100% - 30px);\n}\n.dashboard-row:first-of-type {\n  margin-top: calc(30px + 4rem);\n}\n@media (max-width: 991px) {\n  .dashboard-row {\n    margin-top: 15px;\n    margin-left: 0;\n    margin-bottom: 15px;\n    width: 100%;\n  }\n\n  .dashboard-row:first-of-type {\n    margin-top: calc(30px + 2.5rem);\n  }\n}\napp-nav-card {\n  display: flex;\n  flex-grow: 1;\n  max-width: max(50%, 500px);\n}\n.greeting-card {\n  background: url(\"https://www.transparenttextures.com/patterns/gplay.png\"), linear-gradient(to right top, var(--ion-color-primary), var(--ion-color-primary));\n  display: flex;\n  flex-direction: row;\n  align-items: flex-start;\n  transition: all 0.1s;\n  margin: 0 15px 15px;\n  flex-grow: 1 !important;\n  text-align: left;\n  height: calc(100% - 30px);\n  min-width: 200px;\n  box-shadow: 0 0 20px rgba(0, 0, 0, 0.3) !important;\n}\n.greeting-card ion-card-title {\n  font-weight: 550;\n  font-size: 5em;\n  display: inline-block;\n  margin-bottom: 0;\n}\n@media (max-width: 400px) {\n  .greeting-card ion-card-title {\n    font-size: 3em;\n  }\n}\n.greeting-card ion-card-title:first-of-type {\n  background: white;\n  -webkit-background-clip: text;\n  -webkit-text-fill-color: transparent;\n}\n.greeting-card ion-label {\n  color: white;\n  font-size: 1.2rem;\n}\n@media (max-width: 400px) {\n  .greeting-card ion-label {\n    font-size: 1em;\n  }\n}\n.greeting-card .copyright {\n  display: inline-block;\n  margin-top: 5px;\n  font-size: 0.8rem !important;\n}\n@media (max-width: 400px) {\n  .greeting-card .copyright {\n    font-size: 0.7em !important;\n  }\n}\n.greeting-card:hover {\n  box-shadow: 0 0 30px rgba(0, 0, 0, 0.27);\n  transform: scale(1.01);\n}\nhr {\n  width: 85%;\n  max-width: 1000px;\n  background-color: var(--ion-text-color, #000);\n  margin-top: 20px;\n  margin-bottom: 30px;\n  position: relative;\n}\nion-title {\n  font-size: 1.5rem;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3RoZW1lL3ZhcmlhYmxlcy5zY3NzIiwiZGFzaGJvYXJkLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFHQSwwQkFBQTtBQUVBO0VBQ0UscUNBQUE7QUNIRjtBRE1BO0VBQ0UsMkNBQUE7QUNKRjtBRE9BOzs7Q0FBQTtBQUtBO0VBQ0UsNEJBQUE7RUFDQSxtQ0FBQTtFQUNBLHFDQUFBO0VBQ0EsNkNBQUE7RUFDQSxrQ0FBQTtFQUNBLGlDQUFBO0VBRUEsOEJBQUE7RUFDQSxvQ0FBQTtFQUNBLHVDQUFBO0VBQ0EsK0NBQUE7RUFDQSxvQ0FBQTtFQUNBLG1DQUFBO0VBRUEsNkJBQUE7RUFDQSxvQ0FBQTtFQUNBLHNDQUFBO0VBQ0EsOENBQUE7RUFDQSxtQ0FBQTtFQUNBLGtDQUFBO0VBRUEsNEJBQUE7RUFDQSxtQ0FBQTtFQUNBLHFDQUFBO0VBQ0EsdUNBQUE7RUFDQSxrQ0FBQTtFQUNBLGlDQUFBO0VBRUEsNEJBQUE7RUFDQSxtQ0FBQTtFQUNBLGtDQUFBO0VBQ0EsNkNBQUE7RUFDQSxrQ0FBQTtFQUNBLGlDQUFBO0VBRUEsMkJBQUE7RUFDQSxpQ0FBQTtFQUNBLG9DQUFBO0VBQ0EsNENBQUE7RUFDQSxpQ0FBQTtFQUNBLGdDQUFBO0VBRUEsMkJBQUE7RUFDQSxtQ0FBQTtFQUNBLG9DQUFBO0VBQ0Esc0NBQUE7RUFDQSxpQ0FBQTtFQUNBLGdDQUFBO0VBRUEsMEJBQUE7RUFDQSxrQ0FBQTtFQUNBLG1DQUFBO0VBQ0EscUNBQUE7RUFDQSxnQ0FBQTtFQUNBLCtCQUFBO0VBRUEseUJBQUE7RUFDQSw2Q0FBQTtBQ2JGO0FEZ0JBOzs7Q0FBQTtBQUtBO0VBQ0UsNEJBQUE7RUFDQSxtQ0FBQTtFQUNBLHFDQUFBO0VBQ0EsNkNBQUE7RUFDQSxrQ0FBQTtFQUNBLGlDQUFBO0VBRUEsOEJBQUE7RUFDQSxvQ0FBQTtFQUNBLHVDQUFBO0VBQ0EsK0NBQUE7RUFDQSxvQ0FBQTtFQUNBLG1DQUFBO0VBRUEsNkJBQUE7RUFDQSxvQ0FBQTtFQUNBLHNDQUFBO0VBQ0EsOENBQUE7RUFDQSxtQ0FBQTtFQUNBLGtDQUFBO0VBRUEsNEJBQUE7RUFDQSxtQ0FBQTtFQUNBLHFDQUFBO0VBQ0EsdUNBQUE7RUFDQSxrQ0FBQTtFQUNBLGlDQUFBO0VBRUEsNEJBQUE7RUFDQSxtQ0FBQTtFQUNBLGtDQUFBO0VBQ0EsNkNBQUE7RUFDQSxrQ0FBQTtFQUNBLGlDQUFBO0VBRUEsMkJBQUE7RUFDQSxpQ0FBQTtFQUNBLG9DQUFBO0VBQ0EsNENBQUE7RUFDQSxpQ0FBQTtFQUNBLGdDQUFBO0VBRUEsMkJBQUE7RUFDQSxnQ0FBQTtFQUNBLG9DQUFBO0VBQ0EsNENBQUE7RUFDQSxpQ0FBQTtFQUNBLGdDQUFBO0VBRUEsMEJBQUE7RUFDQSwrQkFBQTtFQUNBLG1DQUFBO0VBQ0EsMkNBQUE7RUFDQSxnQ0FBQTtFQUNBLCtCQUFBO0VBRUEsc0JBQUE7RUFDQSw2Q0FBQTtBQ3RCRjtBQXRIQTtFQUNFLGFBQUE7RUFDQSxtQkFBQTtFQUNBLDJCQUFBO0VBQ0Esb0JBQUE7RUFDQSxzQkFBQTtFQUNBLGdCQUFBO0VBQ0EsaUJBQUE7RUFDQSxtQkFBQTtFQUNBLFlBQUE7RUFDQSx3QkFBQTtBQXlIRjtBQXRIQTtFQUNFLDZCQUFBO0FBeUhGO0FBdEhBO0VBQ0U7SUFDRSxnQkFBQTtJQUNBLGNBQUE7SUFDQSxtQkFBQTtJQUNBLFdBQUE7RUF5SEY7O0VBdkhBO0lBQ0UsK0JBQUE7RUEwSEY7QUFDRjtBQXZIQTtFQUNFLGFBQUE7RUFDQSxZQUFBO0VBQ0EsMEJBQUE7QUF5SEY7QUF0SEE7RUFFRSw0SkFBQTtFQUNBLGFBQUE7RUFDQSxtQkFBQTtFQUNBLHVCQUFBO0VBQ0Esb0JBQUE7RUFDQSxtQkFBQTtFQUNBLHVCQUFBO0VBQ0EsZ0JBQUE7RUFDQSx5QkFBQTtFQUNBLGdCQUFBO0VBQ0Esa0RBQUE7QUF3SEY7QUF0SEU7RUFDRSxnQkFBQTtFQUNBLGNBQUE7RUFDQSxxQkFBQTtFQUNBLGdCQUFBO0FBd0hKO0FBdEhJO0VBTkY7SUFPSSxjQUFBO0VBeUhKO0FBQ0Y7QUF0SEU7RUFDRSxpQkFBQTtFQUNBLDZCQUFBO0VBQ0Esb0NBQUE7QUF3SEo7QUFySEU7RUFDRSxZQUFBO0VBQ0EsaUJBQUE7QUF1SEo7QUF0SEk7RUFIRjtJQUlJLGNBQUE7RUF5SEo7QUFDRjtBQXRIRTtFQUNFLHFCQUFBO0VBQ0EsZUFBQTtFQUNBLDRCQUFBO0FBd0hKO0FBdEhJO0VBTEY7SUFNSSwyQkFBQTtFQXlISjtBQUNGO0FBckhBO0VBQ0Usd0NBQUE7RUFDQSxzQkFBQTtBQXdIRjtBQXJIQTtFQUNFLFVBQUE7RUFDQSxpQkFBQTtFQUNBLDZDQUFBO0VBQ0EsZ0JBQUE7RUFDQSxtQkFBQTtFQUNBLGtCQUFBO0FBd0hGO0FBckhBO0VBQ0UsaUJBQUE7QUF3SEYiLCJmaWxlIjoiZGFzaGJvYXJkLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi8vIElvbmljIFZhcmlhYmxlcyBhbmQgVGhlbWluZy4gRm9yIG1vcmUgaW5mbywgcGxlYXNlIHNlZTpcbi8vIGh0dHA6Ly9pb25pY2ZyYW1ld29yay5jb20vZG9jcy90aGVtaW5nL1xuXG4vKiogSW9uaWMgQ1NTIFZhcmlhYmxlcyAqKi9cblxuQGZvbnQtZmFjZSB7XG4gIGZvbnQtZmFtaWx5OiAnTW9udHNlcnJhdCcsIHNhbnMtc2VyaWY7XG59XG5cbjpyb290IHtcbiAgLS1pb24tZm9udC1mYW1pbHk6ICdNb250c2VycmF0Jywgc2Fucy1zZXJpZjtcbn1cblxuLypcbiogTGlnaHQgQ29sb3JzXG4qIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiovXG5cbjpyb290IHtcbiAgLS1pb24tY29sb3ItcHJpbWFyeTogIzY0MTFEOTtcbiAgLS1pb24tY29sb3ItcHJpbWFyeS1yZ2I6IDEwMCwxNywyMTc7XG4gIC0taW9uLWNvbG9yLXByaW1hcnktY29udHJhc3Q6ICNmZmZmZmY7XG4gIC0taW9uLWNvbG9yLXByaW1hcnktY29udHJhc3QtcmdiOiAyNTUsMjU1LDI1NTtcbiAgLS1pb24tY29sb3ItcHJpbWFyeS1zaGFkZTogIzU4MGZiZjtcbiAgLS1pb24tY29sb3ItcHJpbWFyeS10aW50OiAjNzQyOWRkO1xuXG4gIC0taW9uLWNvbG9yLXNlY29uZGFyeTogIzYyMkJEOTtcbiAgLS1pb24tY29sb3Itc2Vjb25kYXJ5LXJnYjogOTgsNDMsMjE3O1xuICAtLWlvbi1jb2xvci1zZWNvbmRhcnktY29udHJhc3Q6ICNmZmZmZmY7XG4gIC0taW9uLWNvbG9yLXNlY29uZGFyeS1jb250cmFzdC1yZ2I6IDI1NSwyNTUsMjU1O1xuICAtLWlvbi1jb2xvci1zZWNvbmRhcnktc2hhZGU6ICM1NjI2YmY7XG4gIC0taW9uLWNvbG9yLXNlY29uZGFyeS10aW50OiAjNzI0MGRkO1xuXG4gIC0taW9uLWNvbG9yLXRlcnRpYXJ5OiAjNzUyQkRGO1xuICAtLWlvbi1jb2xvci10ZXJ0aWFyeS1yZ2I6IDExNyw0MywyMjM7XG4gIC0taW9uLWNvbG9yLXRlcnRpYXJ5LWNvbnRyYXN0OiAjZmZmZmZmO1xuICAtLWlvbi1jb2xvci10ZXJ0aWFyeS1jb250cmFzdC1yZ2I6IDI1NSwyNTUsMjU1O1xuICAtLWlvbi1jb2xvci10ZXJ0aWFyeS1zaGFkZTogIzY3MjZjNDtcbiAgLS1pb24tY29sb3ItdGVydGlhcnktdGludDogIzgzNDBlMjtcblxuICAtLWlvbi1jb2xvci1zdWNjZXNzOiAjMzNjYzczO1xuICAtLWlvbi1jb2xvci1zdWNjZXNzLXJnYjogNTEsMjA0LDExNTtcbiAgLS1pb24tY29sb3Itc3VjY2Vzcy1jb250cmFzdDogI2ZmZmZmZjtcbiAgLS1pb24tY29sb3Itc3VjY2Vzcy1jb250cmFzdC1yZ2I6IDAsMCwwO1xuICAtLWlvbi1jb2xvci1zdWNjZXNzLXNoYWRlOiAjMmRiNDY1O1xuICAtLWlvbi1jb2xvci1zdWNjZXNzLXRpbnQ6ICM0N2QxODE7XG5cbiAgLS1pb24tY29sb3Itd2FybmluZzogI2YyZTIzMTtcbiAgLS1pb24tY29sb3Itd2FybmluZy1yZ2I6IDI0MiwyMjYsNDk7XG4gIC0taW9uLWNvbG9yLXdhcm5pbmctY29udHJhc3Q6ICNmZmY7XG4gIC0taW9uLWNvbG9yLXdhcm5pbmctY29udHJhc3QtcmdiOiAyNTUsMjU1LDI1NTtcbiAgLS1pb24tY29sb3Itd2FybmluZy1zaGFkZTogI2Q1YzcyYjtcbiAgLS1pb24tY29sb3Itd2FybmluZy10aW50OiAjZjNlNTQ2O1xuXG4gIC0taW9uLWNvbG9yLWRhbmdlcjogI2U1M2UzZTtcbiAgLS1pb24tY29sb3ItZGFuZ2VyLXJnYjogMjI5LDYyLDYyO1xuICAtLWlvbi1jb2xvci1kYW5nZXItY29udHJhc3Q6ICNmZmZmZmY7XG4gIC0taW9uLWNvbG9yLWRhbmdlci1jb250cmFzdC1yZ2I6IDI1NSwyNTUsMjU1O1xuICAtLWlvbi1jb2xvci1kYW5nZXItc2hhZGU6ICNjYTM3Mzc7XG4gIC0taW9uLWNvbG9yLWRhbmdlci10aW50OiAjZTg1MTUxO1xuXG4gIC0taW9uLWNvbG9yLW1lZGl1bTogI2ZjZmFmZjtcbiAgLS1pb24tY29sb3ItbWVkaXVtLXJnYjogMjUyLDI1MCwyNTU7XG4gIC0taW9uLWNvbG9yLW1lZGl1bS1jb250cmFzdDogIzAwMDAwMDtcbiAgLS1pb24tY29sb3ItbWVkaXVtLWNvbnRyYXN0LXJnYjogMCwwLDA7XG4gIC0taW9uLWNvbG9yLW1lZGl1bS1zaGFkZTogI2RlZGNlMDtcbiAgLS1pb24tY29sb3ItbWVkaXVtLXRpbnQ6ICNmY2ZiZmY7XG5cbiAgLS1pb24tY29sb3ItbGlnaHQ6ICNGRkZGRkY7XG4gIC0taW9uLWNvbG9yLWxpZ2h0LXJnYjogMjU1LDI1NSwyNTU7XG4gIC0taW9uLWNvbG9yLWxpZ2h0LWNvbnRyYXN0OiAjMWExYTFhO1xuICAtLWlvbi1jb2xvci1saWdodC1jb250cmFzdC1yZ2I6IDAsMCwwO1xuICAtLWlvbi1jb2xvci1saWdodC1zaGFkZTogI2UwZTBlMDtcbiAgLS1pb24tY29sb3ItbGlnaHQtdGludDogI2ZmZmZmZjtcblxuICAtLWlvbi10ZXh0LWNvbG9yOiAjMWMxYzFjO1xuICAtLWlvbi1pdGVtLWJhY2tncm91bmQ6IHZhcigtLWlvbi1jb2xvci1saWdodCk7XG59XG5cbi8qXG4qIERhcmsgQ29sb3JzXG4qIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiovXG5cbmJvZHkuZGFyayB7XG4gIC0taW9uLWNvbG9yLXByaW1hcnk6ICM3OTI0ZjA7XG4gIC0taW9uLWNvbG9yLXByaW1hcnktcmdiOiAxMjEsMzYsMjQwO1xuICAtLWlvbi1jb2xvci1wcmltYXJ5LWNvbnRyYXN0OiAjZmZmZmZmO1xuICAtLWlvbi1jb2xvci1wcmltYXJ5LWNvbnRyYXN0LXJnYjogMjU1LDI1NSwyNTU7XG4gIC0taW9uLWNvbG9yLXByaW1hcnktc2hhZGU6ICM2YTIwZDM7XG4gIC0taW9uLWNvbG9yLXByaW1hcnktdGludDogIzg2M2FmMjtcblxuICAtLWlvbi1jb2xvci1zZWNvbmRhcnk6ICM2MjJCRDk7XG4gIC0taW9uLWNvbG9yLXNlY29uZGFyeS1yZ2I6IDk4LDQzLDIxNztcbiAgLS1pb24tY29sb3Itc2Vjb25kYXJ5LWNvbnRyYXN0OiAjZmZmZmZmO1xuICAtLWlvbi1jb2xvci1zZWNvbmRhcnktY29udHJhc3QtcmdiOiAyNTUsMjU1LDI1NTtcbiAgLS1pb24tY29sb3Itc2Vjb25kYXJ5LXNoYWRlOiAjNTYyNmJmO1xuICAtLWlvbi1jb2xvci1zZWNvbmRhcnktdGludDogIzcyNDBkZDtcblxuICAtLWlvbi1jb2xvci10ZXJ0aWFyeTogIzc1MkJERjtcbiAgLS1pb24tY29sb3ItdGVydGlhcnktcmdiOiAxMTcsNDMsMjIzO1xuICAtLWlvbi1jb2xvci10ZXJ0aWFyeS1jb250cmFzdDogI2ZmZmZmZjtcbiAgLS1pb24tY29sb3ItdGVydGlhcnktY29udHJhc3QtcmdiOiAyNTUsMjU1LDI1NTtcbiAgLS1pb24tY29sb3ItdGVydGlhcnktc2hhZGU6ICM2NzI2YzQ7XG4gIC0taW9uLWNvbG9yLXRlcnRpYXJ5LXRpbnQ6ICM4MzQwZTI7XG5cbiAgLS1pb24tY29sb3Itc3VjY2VzczogIzMzY2M3MztcbiAgLS1pb24tY29sb3Itc3VjY2Vzcy1yZ2I6IDUxLDIwNCwxMTU7XG4gIC0taW9uLWNvbG9yLXN1Y2Nlc3MtY29udHJhc3Q6ICNmZmZmZmY7XG4gIC0taW9uLWNvbG9yLXN1Y2Nlc3MtY29udHJhc3QtcmdiOiAwLDAsMDtcbiAgLS1pb24tY29sb3Itc3VjY2Vzcy1zaGFkZTogIzJkYjQ2NTtcbiAgLS1pb24tY29sb3Itc3VjY2Vzcy10aW50OiAjNDdkMTgxO1xuXG4gIC0taW9uLWNvbG9yLXdhcm5pbmc6ICNmMmUyMzE7XG4gIC0taW9uLWNvbG9yLXdhcm5pbmctcmdiOiAyNDIsMjI2LDQ5O1xuICAtLWlvbi1jb2xvci13YXJuaW5nLWNvbnRyYXN0OiAjZmZmO1xuICAtLWlvbi1jb2xvci13YXJuaW5nLWNvbnRyYXN0LXJnYjogMjU1LDI1NSwyNTU7XG4gIC0taW9uLWNvbG9yLXdhcm5pbmctc2hhZGU6ICNkNWM3MmI7XG4gIC0taW9uLWNvbG9yLXdhcm5pbmctdGludDogI2YzZTU0NjtcblxuICAtLWlvbi1jb2xvci1kYW5nZXI6ICNlNTNlM2U7XG4gIC0taW9uLWNvbG9yLWRhbmdlci1yZ2I6IDIyOSw2Miw2MjtcbiAgLS1pb24tY29sb3ItZGFuZ2VyLWNvbnRyYXN0OiAjZmZmZmZmO1xuICAtLWlvbi1jb2xvci1kYW5nZXItY29udHJhc3QtcmdiOiAyNTUsMjU1LDI1NTtcbiAgLS1pb24tY29sb3ItZGFuZ2VyLXNoYWRlOiAjY2EzNzM3O1xuICAtLWlvbi1jb2xvci1kYW5nZXItdGludDogI2U4NTE1MTtcblxuICAtLWlvbi1jb2xvci1tZWRpdW06ICMxMjEyMTI7XG4gIC0taW9uLWNvbG9yLW1lZGl1bS1yZ2I6IDE4LDE4LDE4O1xuICAtLWlvbi1jb2xvci1tZWRpdW0tY29udHJhc3Q6ICNmZmZmZmY7XG4gIC0taW9uLWNvbG9yLW1lZGl1bS1jb250cmFzdC1yZ2I6IDI1NSwyNTUsMjU1O1xuICAtLWlvbi1jb2xvci1tZWRpdW0tc2hhZGU6ICMxMDEwMTA7XG4gIC0taW9uLWNvbG9yLW1lZGl1bS10aW50OiAjMmEyYTJhO1xuXG4gIC0taW9uLWNvbG9yLWxpZ2h0OiAjMWQxZDFkO1xuICAtLWlvbi1jb2xvci1saWdodC1yZ2I6IDI5LDI5LDI5O1xuICAtLWlvbi1jb2xvci1saWdodC1jb250cmFzdDogI2ZmZmZmZjtcbiAgLS1pb24tY29sb3ItbGlnaHQtY29udHJhc3QtcmdiOiAyNTUsMjU1LDI1NTtcbiAgLS1pb24tY29sb3ItbGlnaHQtc2hhZGU6ICMxYTFhMWE7XG4gIC0taW9uLWNvbG9yLWxpZ2h0LXRpbnQ6ICMzNDM0MzQ7XG5cbiAgLS1pb24tdGV4dC1jb2xvcjogI2ZmZjtcbiAgLS1pb24taXRlbS1iYWNrZ3JvdW5kOiB2YXIoLS1pb24tY29sb3ItbGlnaHQpO1xufVxuIiwiQGltcG9ydCBcIi4uLy4uLy4uL3RoZW1lL3ZhcmlhYmxlcy5zY3NzXCI7XG5cbi5kYXNoYm9hcmQtcm93IHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1mbG93OiByb3cgd3JhcDtcbiAganVzdGlmeS1jb250ZW50OiBmbGV4LXN0YXJ0O1xuICBhbGlnbi1pdGVtczogc3RyZXRjaDtcbiAgYWxpZ24tY29udGVudDogc3RyZXRjaDtcbiAgbWFyZ2luLXRvcDogMzBweDtcbiAgbWFyZ2luLWxlZnQ6IDE1cHg7XG4gIG1hcmdpbi1ib3R0b206IDMwcHg7XG4gIGZsZXgtZ3JvdzogMTtcbiAgd2lkdGg6IGNhbGMoMTAwJSAtIDMwcHgpO1xufVxuXG4uZGFzaGJvYXJkLXJvdzpmaXJzdC1vZi10eXBlIHtcbiAgbWFyZ2luLXRvcDogY2FsYygzMHB4ICsgNHJlbSlcbn1cblxuQG1lZGlhIChtYXgtd2lkdGg6IDk5MXB4KSB7XG4gIC5kYXNoYm9hcmQtcm93IHtcbiAgICBtYXJnaW4tdG9wOiAxNXB4O1xuICAgIG1hcmdpbi1sZWZ0OiAwO1xuICAgIG1hcmdpbi1ib3R0b206IDE1cHg7XG4gICAgd2lkdGg6IDEwMCU7XG4gIH1cbiAgLmRhc2hib2FyZC1yb3c6Zmlyc3Qtb2YtdHlwZSB7XG4gICAgbWFyZ2luLXRvcDogY2FsYygzMHB4ICsgMi41cmVtKVxuICB9XG59XG5cbmFwcC1uYXYtY2FyZCB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZ3JvdzogMTtcbiAgbWF4LXdpZHRoOiBtYXgoNTAlLCA1MDBweCk7XG59XG5cbi5ncmVldGluZy1jYXJkIHtcbiAgLy8gYmFja2dyb3VuZDogdXJsKFwiaHR0cHM6Ly93d3cudHJhbnNwYXJlbnR0ZXh0dXJlcy5jb20vcGF0dGVybnMvZXNjaGVyZXNxdWUucG5nXCIpLCBsaW5lYXItZ3JhZGllbnQodG8gcmlnaHQgdG9wLCAjY2Y0YWYzLCAjZTczYmQ3LCAjZjYzMWJjLCAjZmQzMWEyLCAjZmYzYThiLCAjZmY0Yjc4LCAjZmY1ZTY4LCAjZmY3MDVjLCAjZmY4YzUxLCAjZmZhYTQ5LCAjZmZjODQ4LCAjZmZlNjUyKTtcbiAgYmFja2dyb3VuZDogdXJsKFwiaHR0cHM6Ly93d3cudHJhbnNwYXJlbnR0ZXh0dXJlcy5jb20vcGF0dGVybnMvZ3BsYXkucG5nXCIpLCBsaW5lYXItZ3JhZGllbnQodG8gcmlnaHQgdG9wLCB2YXIoLS1pb24tY29sb3ItcHJpbWFyeSksIHZhcigtLWlvbi1jb2xvci1wcmltYXJ5KSk7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7XG4gIGFsaWduLWl0ZW1zOiBmbGV4LXN0YXJ0O1xuICB0cmFuc2l0aW9uOiBhbGwgMC4xcztcbiAgbWFyZ2luOiAwIDE1cHggMTVweDtcbiAgZmxleC1ncm93OiAxICFpbXBvcnRhbnQ7XG4gIHRleHQtYWxpZ246IGxlZnQ7XG4gIGhlaWdodDogY2FsYygxMDAlIC0gMzBweCk7XG4gIG1pbi13aWR0aDogMjAwcHg7XG4gIGJveC1zaGFkb3c6IDAgMCAyMHB4IHJnYmEoMCwgMCwgMCwgMC4zKSAhaW1wb3J0YW50O1xuXG4gIGlvbi1jYXJkLXRpdGxlIHtcbiAgICBmb250LXdlaWdodDogNTUwO1xuICAgIGZvbnQtc2l6ZTogNWVtO1xuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgICBtYXJnaW4tYm90dG9tOiAwO1xuXG4gICAgQG1lZGlhIChtYXgtd2lkdGg6IDQwMHB4KSB7XG4gICAgICBmb250LXNpemU6IDNlbTtcbiAgICB9XG4gIH1cblxuICBpb24tY2FyZC10aXRsZTpmaXJzdC1vZi10eXBlIHtcbiAgICBiYWNrZ3JvdW5kOiB3aGl0ZTtcbiAgICAtd2Via2l0LWJhY2tncm91bmQtY2xpcDogdGV4dDtcbiAgICAtd2Via2l0LXRleHQtZmlsbC1jb2xvcjogdHJhbnNwYXJlbnQ7XG4gIH1cblxuICBpb24tbGFiZWwge1xuICAgIGNvbG9yOiB3aGl0ZTtcbiAgICBmb250LXNpemU6IDEuMnJlbTtcbiAgICBAbWVkaWEgKG1heC13aWR0aDogNDAwcHgpIHtcbiAgICAgIGZvbnQtc2l6ZTogMWVtO1xuICAgIH1cbiAgfVxuXG4gIC5jb3B5cmlnaHQge1xuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgICBtYXJnaW4tdG9wOiA1cHg7XG4gICAgZm9udC1zaXplOiAwLjhyZW0gIWltcG9ydGFudDtcblxuICAgIEBtZWRpYSAobWF4LXdpZHRoOiA0MDBweCkge1xuICAgICAgZm9udC1zaXplOiAwLjdlbSAhaW1wb3J0YW50O1xuICAgIH1cbiAgfVxufVxuXG4uZ3JlZXRpbmctY2FyZDpob3ZlciB7XG4gIGJveC1zaGFkb3c6IDAgMCAzMHB4IHJnYmEoMCwgMCwgMCwgMC4yNyk7XG4gIHRyYW5zZm9ybTogc2NhbGUoMS4wMSk7XG59XG5cbmhyIHtcbiAgd2lkdGg6IDg1JTtcbiAgbWF4LXdpZHRoOiAxMDAwcHg7XG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWlvbi10ZXh0LWNvbG9yLCAjMDAwKTtcbiAgbWFyZ2luLXRvcDogMjBweDtcbiAgbWFyZ2luLWJvdHRvbTogMzBweDtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xufVxuXG5pb24tdGl0bGUge1xuICBmb250LXNpemU6IDEuNXJlbVxufTtcbiJdfQ== */";

/***/ })

}]);
//# sourceMappingURL=src_app_pages_dashboard_dashboard_module_ts.js.map