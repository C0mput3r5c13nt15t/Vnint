"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_pages_actions_project_view-projects_view-projects_module_ts"],{

/***/ 37131:
/*!***************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/@angular-devkit/build-angular/node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./src/app/pages/actions/project/view-projects/view-projects.page.html ***!
  \***************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<ion-content>\n  <app-toolbar></app-toolbar>\n  <ion-grid>\n    <ion-row>\n      <ion-col>\n        <app-card-title-bar title=\"{{ 'ACTIONS.VIEW_PROJECTS.title' | translate }}\"></app-card-title-bar>\n        <ion-card *ngIf=\"projects\" color=\"light\">\n          <ion-card-content>\n            <ion-grid class=\"inside-card-grid\">\n              <ion-row>\n                <ion-col>\n                  <form [formGroup]=\"searchProjectForm\">\n                    <ion-searchbar color=\"light\" (ionChange)=\"searchProject()\" placeholder=\"{{ 'ACTIONS.VIEW_PROJECTS.INPUT.searchProjectPlaceholder' | translate }}\" formControlName=\"title\" showCancelButton=\"focus\"></ion-searchbar>\n                    <ion-select (ionChange)=\"searchProject()\" multiple=\"true\" formControlName=\"topic\" okText=\"{{ 'GENERAL.POPUPS.ok' | translate }}\" cancelText=\"{{ 'GENERAL.POPUPS.cancel' | translate }}\">\n                      <ion-select-option *ngFor=\"let topic of ('GENERAL.PROJECT_TOPICS' | translate) | keyvalue\" value=\"{{ topic.key }}\">{{ topic.value }}</ion-select-option>\n                    </ion-select>\n                  </form>\n                  <ng-container *ngIf=\"projects.length > 0\">\n                    <ng-container *ngFor=\"let project of filteredProjects\">\n                      <ion-card color=\"light\" button=true routerLink=\"/project/{{ project.id }}\" [disabled]=\"!permissions.includes('projects.toggle_authorized') && !project.authorized\">\n                        <ion-card-header>\n                          <ion-card-title>\n                            {{ project.title }}\n                          </ion-card-title>\n                          <ion-card-subtitle>\n                            <ion-label class=\"subtitle-labels\">{{ 'ACTIONS.VIEW_PROJECTS.by' | translate }} </ion-label>\n                            <ion-label class=\"subtitle-labels\" color=\"primary\"><b>{{ project.leader.email }}</b></ion-label><br>\n                            <ion-label class=\"subtitle-labels\">{{ 'ACTIONS.VIEW_PROJECTS.topic' | translate }} </ion-label>\n                            <ng-container *ngFor=\"let topic of ('GENERAL.PROJECT_TOPICS' | translate) | keyvalue\">\n                              <ion-label class=\"subtitle-labels\" color=\"primary\" *ngIf=\"project.topic == topic.key\"><b>{{ topic.value }}</b></ion-label>\n                            </ng-container>\n                          </ion-card-subtitle>\n                          <ion-label class=\"long-description-label\">\n                            {{ project.description }}\n                          </ion-label>\n                          <ion-card-subtitle>\n                            <ion-badge color=\"danger\" *ngIf=\"permissions.includes('projects.toggle_authorized') && !project.authorized\"><ion-label class=\"white-font\">{{ 'ACTIONS.VIEW_PROJECTS.unauthorized' | translate }}</ion-label></ion-badge>\n                            <ion-badge color=\"success\" *ngIf=\"permissions.includes('projects.toggle_authorized') && project.authorized\"><ion-label class=\"white-font\">{{ 'ACTIONS.VIEW_PROJECTS.authorized' | translate }}</ion-label></ion-badge>\n                            <ion-badge color=\"light\" *ngIf=\"permissions.includes('preferences.store') && preference_ids.includes(project.id)\"><ion-label>{{ 'ACTIONS.VIEW_PROJECTS.isPreference' | translate }}</ion-label></ion-badge>\n                          </ion-card-subtitle>\n                        </ion-card-header>\n                      </ion-card>\n                    </ng-container>\n                  </ng-container>\n                  <ng-container *ngIf=\"projects.length == 0\">\n                    <app-empty-card message=\"{{ 'ACTIONS.VIEW_PROJECTS.noProjects' | translate }}\"></app-empty-card><br>\n                  </ng-container>\n                </ion-col>\n              </ion-row>\n            </ion-grid>\n          </ion-card-content>\n        </ion-card>\n      </ion-col>\n    </ion-row>\n  </ion-grid>\n</ion-content>\n");

/***/ }),

/***/ 99303:
/*!*************************************************************************************!*\
  !*** ./src/app/pages/actions/project/view-projects/view-projects-routing.module.ts ***!
  \*************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ViewProjectsPageRoutingModule": () => (/* binding */ ViewProjectsPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 21838);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 789);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 9538);
/* harmony import */ var _view_projects_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./view-projects.page */ 66457);




const routes = [
    {
        path: '',
        component: _view_projects_page__WEBPACK_IMPORTED_MODULE_0__.ViewProjectsPage
    }
];
let ViewProjectsPageRoutingModule = class ViewProjectsPageRoutingModule {
};
ViewProjectsPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], ViewProjectsPageRoutingModule);



/***/ }),

/***/ 60681:
/*!*****************************************************************************!*\
  !*** ./src/app/pages/actions/project/view-projects/view-projects.module.ts ***!
  \*****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ViewProjectsPageModule": () => (/* binding */ ViewProjectsPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! tslib */ 21838);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 789);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ 2006);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/forms */ 43459);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/common/http */ 45331);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ionic/angular */ 30585);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @ngx-translate/core */ 52784);
/* harmony import */ var _view_projects_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./view-projects-routing.module */ 99303);
/* harmony import */ var _components_components_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../components/components.module */ 96453);
/* harmony import */ var _view_projects_page__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./view-projects.page */ 66457);
/* harmony import */ var src_app_app_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/app.module */ 92014);











let ViewProjectsPageModule = class ViewProjectsPageModule {
};
ViewProjectsPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_5__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_6__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_7__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_8__.IonicModule,
            _view_projects_routing_module__WEBPACK_IMPORTED_MODULE_0__.ViewProjectsPageRoutingModule,
            _components_components_module__WEBPACK_IMPORTED_MODULE_1__.ComponentsModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_7__.ReactiveFormsModule,
            _ngx_translate_core__WEBPACK_IMPORTED_MODULE_9__.TranslateModule.forChild({
                loader: {
                    provide: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_9__.TranslateLoader,
                    useFactory: src_app_app_module__WEBPACK_IMPORTED_MODULE_3__.createTranslateLoader,
                    deps: [_angular_common_http__WEBPACK_IMPORTED_MODULE_10__.HttpClient]
                }
            }),
        ],
        declarations: [_view_projects_page__WEBPACK_IMPORTED_MODULE_2__.ViewProjectsPage]
    })
], ViewProjectsPageModule);



/***/ }),

/***/ 66457:
/*!***************************************************************************!*\
  !*** ./src/app/pages/actions/project/view-projects/view-projects.page.ts ***!
  \***************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ViewProjectsPage": () => (/* binding */ ViewProjectsPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! tslib */ 21838);
/* harmony import */ var _home_vagrant_projects_Vnint_node_modules_angular_devkit_build_angular_node_modules_ngtools_webpack_src_loaders_direct_resource_js_view_projects_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !./node_modules/@angular-devkit/build-angular/node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./view-projects.page.html */ 37131);
/* harmony import */ var _view_projects_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./view-projects.page.scss */ 50966);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/core */ 789);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/forms */ 43459);
/* harmony import */ var src_app_services_project_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/project.service */ 81856);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/router */ 9538);
/* harmony import */ var src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/auth.service */ 56898);
/* harmony import */ var src_app_services_preference_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/services/preference.service */ 93271);
/* harmony import */ var src_app_services_error_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/services/error.service */ 55729);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @ngx-translate/core */ 52784);
/* harmony import */ var _services_alert_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../../services/alert.service */ 92677);












let ViewProjectsPage = class ViewProjectsPage {
    constructor(projectService, formBuilder, auth, router, preferencesService, errorService, translate, alertService) {
        this.projectService = projectService;
        this.formBuilder = formBuilder;
        this.auth = auth;
        this.router = router;
        this.preferencesService = preferencesService;
        this.errorService = errorService;
        this.translate = translate;
        this.alertService = alertService;
        this.projects = [];
        this.permissions = [];
        this.preference_ids = [];
        this.filteredProjects = [];
    }
    ngOnInit() {
        this.searchProjectForm = this.formBuilder.group({
            topic: [['sports', 'nature', 'games', 'other']],
            title: [''],
        });
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
                    this.user = resp.user;
                    this.auth.permissions().subscribe({
                        error: error => {
                            if (error.error.message == 'missingPermissions') {
                                this.alertService.alert("danger", this.translate.instant('GENERAL.ERRORS.missingPermissions'), '', 'lock-closed');
                            }
                            else {
                                this.errorService.errorOccurred.emit(error);
                            }
                        },
                        next: response => {
                            const resp = response;
                            this.permissions = [];
                            this.permissions = resp.permissions;
                            if (this.permissions.includes('preferences.show_associated')) {
                                this.getPreferences();
                            }
                        },
                    });
                }
            },
        });
        this.getProjects();
    }
    searchProject() {
        this.filteredProjects = [];
        this.projects.forEach(project => {
            if (this.searchProjectForm.value.topic.includes(project.topic) && this.similar(project.title, this.searchProjectForm.value.title) > 0.3) {
                this.filteredProjects.push(project);
            }
        });
    }
    similar(title, input) {
        if (!input) {
            return 1;
        }
        let equivalency = 0;
        const minLength = (title.length > input.length) ? input.length : title.length;
        const maxLength = (title.length < input.length) ? input.length : title.length;
        for (let i = 0; i < minLength; i++) {
            if (title[i] == input[i]) {
                equivalency++;
            }
        }
        return equivalency / maxLength;
    }
    getProjects() {
        this.projectService.getProjects().subscribe({
            error: error => {
                this.errorService.errorOccurred.emit(error);
            },
            next: response => {
                const resp = response;
                this.projects = resp.projects;
                this.filteredProjects = resp.projects;
            },
        });
    }
    getPreferences() {
        this.preferencesService.getAssociatedPreferences().subscribe({
            error: error => {
                this.errorService.errorOccurred.emit(error);
            },
            next: response => {
                const resp = response;
                this.preferences = resp.preferences;
                this.preference_ids = [];
                resp.preferences.forEach(preference => {
                    this.preference_ids.push(preference.project_id);
                });
            },
        });
    }
};
ViewProjectsPage.ctorParameters = () => [
    { type: src_app_services_project_service__WEBPACK_IMPORTED_MODULE_2__.ProjectService },
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_7__.FormBuilder },
    { type: src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_3__.AuthService },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_8__.Router },
    { type: src_app_services_preference_service__WEBPACK_IMPORTED_MODULE_4__.PreferencesService },
    { type: src_app_services_error_service__WEBPACK_IMPORTED_MODULE_5__.ErrorService },
    { type: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_9__.TranslateService },
    { type: _services_alert_service__WEBPACK_IMPORTED_MODULE_6__.AlertService }
];
ViewProjectsPage = (0,tslib__WEBPACK_IMPORTED_MODULE_10__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_11__.Component)({
        selector: 'app-view-projects',
        template: _home_vagrant_projects_Vnint_node_modules_angular_devkit_build_angular_node_modules_ngtools_webpack_src_loaders_direct_resource_js_view_projects_page_html__WEBPACK_IMPORTED_MODULE_0__["default"],
        styles: [_view_projects_page_scss__WEBPACK_IMPORTED_MODULE_1__]
    })
], ViewProjectsPage);



/***/ }),

/***/ 50966:
/*!*****************************************************************************!*\
  !*** ./src/app/pages/actions/project/view-projects/view-projects.page.scss ***!
  \*****************************************************************************/
/***/ ((module) => {

module.exports = ".subtitle-labels {\n  display: inline;\n}\n\n.long-description-label {\n  margin: 0;\n  display: block;\n  overflow: hidden;\n  flex: 1;\n  text-overflow: ellipsis;\n  white-space: nowrap;\n}\n\nion-badge {\n  margin-right: 5px;\n}\n\nion-badge ion-label {\n  font-weight: normal !important;\n}\n\n.white-font {\n  color: #fff;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInZpZXctcHJvamVjdHMucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0csZUFBQTtBQUNIOztBQUVBO0VBQ0UsU0FBQTtFQUNBLGNBQUE7RUFDQSxnQkFBQTtFQUlBLE9BQUE7RUFDQSx1QkFBQTtFQUNBLG1CQUFBO0FBQ0Y7O0FBRUE7RUFDRSxpQkFBQTtBQUNGOztBQUFFO0VBQ0UsOEJBQUE7QUFFSjs7QUFFQTtFQUNFLFdBQUE7QUFDRiIsImZpbGUiOiJ2aWV3LXByb2plY3RzLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5zdWJ0aXRsZS1sYWJlbHMge1xuICAgZGlzcGxheTogaW5saW5lO1xuIH1cblxuLmxvbmctZGVzY3JpcHRpb24tbGFiZWwge1xuICBtYXJnaW46IDA7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICBvdmVyZmxvdzogaGlkZGVuO1xuICAtd2Via2l0LWJveC1mbGV4OiAxO1xuICAtd2Via2l0LWZsZXg6IDE7XG4gIC1tcy1mbGV4OiAxO1xuICBmbGV4OiAxO1xuICB0ZXh0LW92ZXJmbG93OiBlbGxpcHNpcztcbiAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcbn1cblxuaW9uLWJhZGdlIHtcbiAgbWFyZ2luLXJpZ2h0OiA1cHg7XG4gIGlvbi1sYWJlbCB7XG4gICAgZm9udC13ZWlnaHQ6IG5vcm1hbCAhaW1wb3J0YW50O1xuICB9XG59XG5cbi53aGl0ZS1mb250IHtcbiAgY29sb3I6ICNmZmY7XG59XG4iXX0= */";

/***/ })

}]);
//# sourceMappingURL=src_app_pages_actions_project_view-projects_view-projects_module_ts.js.map