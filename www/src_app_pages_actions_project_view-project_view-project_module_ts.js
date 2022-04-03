"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_pages_actions_project_view-project_view-project_module_ts"],{

/***/ 18081:
/*!*************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/@angular-devkit/build-angular/node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./src/app/pages/actions/project/view-project/view-project.page.html ***!
  \*************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<ion-content>\n  <app-toolbar></app-toolbar>\n  <ion-grid>\n    <ion-row>\n      <ion-col>\n        <app-card-title-bar *ngIf=\"project\" [title]=\"project.title\"></app-card-title-bar>\n        <app-card-title-bar *ngIf=\"!project\" title=\"{{ 'ACTIONS.VIEW_PROJECT.title' | translate }}\"></app-card-title-bar>\n        <ion-card *ngIf=\"project\" color=\"light\">\n          <img class=\"project-thumbnail\" *ngIf=\"project.image\" src=\"/images/{{ project.image }}\" [alt]=\"project.image\">\n          <ion-card-content>\n            <ion-grid class=\"inside-card-grid\">\n              <ion-row>\n                <ion-col>\n                  <ion-label>{{ 'ACTIONS.VIEW_PROJECT.topic' | translate }} </ion-label>\n                  <ng-container *ngFor=\"let topic of ('GENERAL.PROJECT_TOPICS' | translate) | keyvalue\">\n                    <ion-label class=\"subtitle-labels\" color=\"primary\" *ngIf=\"project.topic == topic.key\"><b>{{ topic.value }}</b></ion-label>\n                  </ng-container>\n                  <br><br>\n                  <ion-label>\n                    {{ project.description }}\n                  </ion-label>\n                  <br>\n                  <ng-container *ngIf=\"project.timeframes.length > 0\">\n                    <br>\n                    <ion-label>{{ 'ACTIONS.VIEW_PROJECT.timeframes' | translate }}</ion-label>\n                    <div *ngFor=\"let timeframe of project.timeframes\">\n                      <ion-card class=\"timeframe-card\" color=\"light\">\n                        <ion-card-content>\n                          <ion-label>{{ 'ACTIONS.MANAGE_PROJECT.from' | translate }} <ion-label>{{ timeframe.from | date:( 'GENERAL.exactTimeDisplayFormat' | translate ):( 'GENERAL.timezone' | translate ):( 'GENERAL.locale' | translate ) }}</ion-label></ion-label><br>\n                          <ion-label>{{ 'ACTIONS.MANAGE_PROJECT.until' | translate }} <ion-label>{{ timeframe.until | date:( 'GENERAL.exactTimeDisplayFormat' | translate ):( 'GENERAL.timezone' | translate ):( 'GENERAL.locale' | translate ) }}</ion-label></ion-label>\n                        </ion-card-content>\n                      </ion-card>\n                    </div>\n                  </ng-container>\n                  <br>\n                  <ion-label>{{ 'ACTIONS.VIEW_PROJECT.leader' | translate }} </ion-label><ion-label color=\"primary\"><b>{{ project.leader.email }}</b></ion-label>\n                  <br>\n                  <ion-label>{{ 'ACTIONS.VIEW_PROJECT.cost' | translate }} </ion-label><ion-label><b>{{ project.cost }} €</b></ion-label>\n                  <br>\n                  <br>\n                  <ion-label>{{ 'ACTIONS.VIEW_PROJECT.grade' | translate }} </ion-label><ion-label><b>{{ project.min_grade }}</b></ion-label><b>-</b><ion-label><b>{{ project.max_grade }}</b></ion-label>\n                  <br>\n                  <ion-label>{{ 'ACTIONS.VIEW_PROJECT.capacity' | translate }} </ion-label><ion-label><b>{{ project.min_participants }}</b></ion-label><b>-</b><ion-label><b>{{ project.max_participants }}</b></ion-label>\n                </ion-col>\n              </ion-row>\n              <br>\n              <hr>\n              <ion-row>\n                <ion-chip disabled=\"true\" *ngIf=\"permissions.includes('preferences.store') && project.id != user.project_id && !preference_ids.includes(project.id) && !project.authorized\" (click)=\"addProjectToPreferences()\">\n                  <ion-icon name=\"star\"></ion-icon>\n                  <ion-label>project not authorized</ion-label>\n                </ion-chip>\n                <ion-chip *ngIf=\"permissions.includes('preferences.store') && project.id != user.project_id && !preference_ids.includes(project.id) && project.authorized\" (click)=\"addProjectToPreferences()\">\n                  <ion-icon name=\"star\" color=\"warning\"></ion-icon>\n                  <ion-label>{{ 'ACTIONS.VIEW_PROJECT.addToPreferences' | translate }}</ion-label>\n                </ion-chip>\n                <ion-chip color=\"danger\" *ngIf=\"permissions.includes('preferences.store') && project.id != user.project_id && preference_ids.includes(project.id)\" (click)=\"removeProjectFromPreferences(this.project.id)\">\n                  <ion-icon name=\"close\"></ion-icon>\n                  <ion-label>{{ 'ACTIONS.VIEW_PROJECT.removeFromPreferences' | translate }}</ion-label>\n                </ion-chip>\n                <ion-chip *ngIf=\"permissions.includes('projects.toggle_authorized') && !project.authorized\" (click)=\"toggleAuthorized()\" color=\"success\">\n                  <ion-icon name=\"checkmark-circle\"></ion-icon>\n                  <ion-label>{{ 'ACTIONS.VIEW_PROJECT.authorize' | translate }}</ion-label>\n                </ion-chip>\n                <ion-chip *ngIf=\"permissions.includes('projects.toggle_authorized') && project.authorized\" (click)=\"toggleAuthorized()\" color=\"danger\">\n                  <ion-icon name=\"close-circle\"></ion-icon>\n                  <ion-label>{{ 'ACTIONS.VIEW_PROJECT.deauthorize' | translate }}</ion-label>\n                </ion-chip>\n                <ion-chip *ngIf=\"permissions.includes('projects.destroy')\" (click)=\"deleteProject()\" color=\"danger\">\n                  <ion-icon name=\"trash\"></ion-icon>\n                  <ion-label>{{ 'ACTIONS.VIEW_PROJECT.delete' | translate }}</ion-label>\n                </ion-chip>\n              </ion-row>\n            </ion-grid>\n          </ion-card-content>\n        </ion-card>\n      </ion-col>\n    </ion-row>\n    <ion-row>\n      <ion-col *ngIf=\"project\">\n        <ion-card color=\"light\">\n          <ion-card-header>\n            <ion-card-title>\n              {{ 'ACTIONS.MANAGE_PROJECT.participants' | translate }}\n            </ion-card-title>\n          </ion-card-header>\n          <ion-card-content>\n            <ion-grid class=\"inside-card-grid\">\n              <ion-row>\n                <ion-col>\n                  <ion-card color=\"light\">\n                    <ion-card-header>\n                      <ion-card-title class=\"user-email\">\n                        {{ project.leader.email }}\n                      </ion-card-title>\n                      <ion-card-subtitle>\n                        <ion-label color=\"primary\" class=\"subtitle-labels\">{{ 'ACTIONS.MANAGE_PROJECT.ROLES.leader' | translate }}</ion-label>\n                      </ion-card-subtitle>\n                    </ion-card-header>\n                  </ion-card>\n                  <ng-container *ngIf=\"project.assistants.length > 0\">\n                    <ion-card *ngFor=\"let assistant of project.assistants\" color=\"light\">\n                      <ion-card-header>\n                        <ion-card-title class=\"user-email\">\n                          {{ assistant.email }}\n                        </ion-card-title>\n                        <ion-card-subtitle>\n                          <ion-label color=\"primary\" class=\"subtitle-labels\">{{ 'ACTIONS.MANAGE_PROJECT.ROLES.assistent' | translate }}</ion-label>\n                        </ion-card-subtitle>\n                      </ion-card-header>\n                    </ion-card>\n                  </ng-container>\n                  <ng-container *ngIf=\"project.participants.length > 0\">\n                    <ion-card *ngFor=\"let participant of project.participants\" color=\"light\">\n                      <ion-card-header>\n                        <ion-card-title class=\"user-email\">\n                          {{ participant.email }}\n                        </ion-card-title>\n                        <ion-label color=\"primary\" class=\"subtitle-labels\">{{ 'ACTIONS.MANAGE_PROJECT.ROLES.participant' | translate }}</ion-label>\n                      </ion-card-header>\n                    </ion-card>\n                  </ng-container>\n                </ion-col>\n              </ion-row>\n            </ion-grid>\n          </ion-card-content>\n        </ion-card>\n      </ion-col>\n    </ion-row>\n  </ion-grid>\n</ion-content>\n");

/***/ }),

/***/ 64717:
/*!***********************************************************************************!*\
  !*** ./src/app/pages/actions/project/view-project/view-project-routing.module.ts ***!
  \***********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ViewProjectPageRoutingModule": () => (/* binding */ ViewProjectPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 21838);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 789);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 9538);
/* harmony import */ var _view_project_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./view-project.page */ 12785);




const routes = [
    {
        path: '',
        component: _view_project_page__WEBPACK_IMPORTED_MODULE_0__.ViewProjectPage
    }
];
let ViewProjectPageRoutingModule = class ViewProjectPageRoutingModule {
};
ViewProjectPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], ViewProjectPageRoutingModule);



/***/ }),

/***/ 778:
/*!***************************************************************************!*\
  !*** ./src/app/pages/actions/project/view-project/view-project.module.ts ***!
  \***************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ViewProjectPageModule": () => (/* binding */ ViewProjectPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! tslib */ 21838);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 789);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ 2006);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/forms */ 43459);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/common/http */ 45331);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ionic/angular */ 30585);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @ngx-translate/core */ 52784);
/* harmony import */ var _view_project_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./view-project-routing.module */ 64717);
/* harmony import */ var _components_components_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../components/components.module */ 96453);
/* harmony import */ var _view_project_page__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./view-project.page */ 12785);
/* harmony import */ var src_app_app_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/app.module */ 92014);











let ViewProjectPageModule = class ViewProjectPageModule {
};
ViewProjectPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_5__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_6__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_7__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_8__.IonicModule,
            _view_project_routing_module__WEBPACK_IMPORTED_MODULE_0__.ViewProjectPageRoutingModule,
            _components_components_module__WEBPACK_IMPORTED_MODULE_1__.ComponentsModule,
            _ngx_translate_core__WEBPACK_IMPORTED_MODULE_9__.TranslateModule.forChild({
                loader: {
                    provide: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_9__.TranslateLoader,
                    useFactory: src_app_app_module__WEBPACK_IMPORTED_MODULE_3__.createTranslateLoader,
                    deps: [_angular_common_http__WEBPACK_IMPORTED_MODULE_10__.HttpClient]
                }
            }),
        ],
        declarations: [_view_project_page__WEBPACK_IMPORTED_MODULE_2__.ViewProjectPage]
    })
], ViewProjectPageModule);



/***/ }),

/***/ 12785:
/*!*************************************************************************!*\
  !*** ./src/app/pages/actions/project/view-project/view-project.page.ts ***!
  \*************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ViewProjectPage": () => (/* binding */ ViewProjectPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! tslib */ 21838);
/* harmony import */ var _home_vagrant_projects_Vnint_node_modules_angular_devkit_build_angular_node_modules_ngtools_webpack_src_loaders_direct_resource_js_view_project_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !./node_modules/@angular-devkit/build-angular/node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./view-project.page.html */ 18081);
/* harmony import */ var _view_project_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./view-project.page.scss */ 35614);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/core */ 789);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/router */ 9538);
/* harmony import */ var src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/auth.service */ 56898);
/* harmony import */ var src_app_services_preference_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/preference.service */ 93271);
/* harmony import */ var src_app_services_project_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/services/project.service */ 81856);
/* harmony import */ var src_app_services_error_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/services/error.service */ 55729);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ngx-translate/core */ 52784);
/* harmony import */ var _services_alert_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../../services/alert.service */ 92677);











let ViewProjectPage = class ViewProjectPage {
    constructor(activatedRoute, router, projectService, preferencesService, auth, errorService, translate, alertService) {
        this.activatedRoute = activatedRoute;
        this.router = router;
        this.projectService = projectService;
        this.preferencesService = preferencesService;
        this.auth = auth;
        this.errorService = errorService;
        this.translate = translate;
        this.alertService = alertService;
        this.permissions = [];
        this.preference_ids = [];
    }
    ngOnInit() {
    }
    ionViewWillEnter() {
        this.activatedRoute.paramMap.subscribe(paramMap => {
            if (paramMap.has('projectId')) {
                this.getProject(Number(this.activatedRoute.snapshot.paramMap.get('projectId')));
            }
            else {
                this.router.navigate(['/view projects']);
            }
        });
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
    }
    getProject(projectId) {
        this.projectService.getProject(projectId).subscribe({
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
                this.project = resp.project;
            },
        });
    }
    getPreferences() {
        this.preferencesService.getAssociatedPreferences().subscribe({
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
                this.preferences = resp.preferences;
                this.preference_ids = [];
                resp.preferences.forEach(preference => {
                    this.preference_ids.push(preference.project_id);
                });
            },
        });
    }
    addProjectToPreferences() {
        this.preferencesService.createPreference(this.project.id).subscribe({
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
                this.alertService.alert("success", this.translate.instant('ACTIONS.VIEW_PROJECT.title'), resp.message, "checkmark");
            },
            complete: () => {
                this.getPreferences();
            }
        });
    }
    removeProjectFromPreferences(projectId) {
        let preferenceId;
        const preference = this.preferences.filter(function (preference) { return preference.project_id == projectId; })[0];
        preferenceId = preference.id;
        this.preferencesService.deletePreference(preferenceId).subscribe({
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
                this.alertService.alert("success", this.translate.instant('ACTIONS.VIEW_PROJECT.title'), resp.message, "checkmark");
            },
            complete: () => {
                this.getPreferences();
            }
        });
    }
    toggleAuthorized() {
        this.projectService.toggleAuthorizedOfProject(this.project.id).subscribe({
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
                this.alertService.alert("success", this.translate.instant('ACTIONS.VIEW_PROJECT.title'), resp.message, "checkmark");
            },
            complete: () => {
                this.getProject(this.project.id);
            }
        });
    }
    deleteProject() {
        this.projectService.deleteProject(this.project.id).subscribe({
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
                this.alertService.alert("success", this.translate.instant('ACTIONS.VIEW_PROJECT.title'), resp.message, "checkmark");
                this.router.navigate(['/view-projects']);
            },
        });
    }
};
ViewProjectPage.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_7__.ActivatedRoute },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_7__.Router },
    { type: src_app_services_project_service__WEBPACK_IMPORTED_MODULE_4__.ProjectService },
    { type: src_app_services_preference_service__WEBPACK_IMPORTED_MODULE_3__.PreferencesService },
    { type: src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_2__.AuthService },
    { type: src_app_services_error_service__WEBPACK_IMPORTED_MODULE_5__.ErrorService },
    { type: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_8__.TranslateService },
    { type: _services_alert_service__WEBPACK_IMPORTED_MODULE_6__.AlertService }
];
ViewProjectPage = (0,tslib__WEBPACK_IMPORTED_MODULE_9__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_10__.Component)({
        selector: 'app-view-project',
        template: _home_vagrant_projects_Vnint_node_modules_angular_devkit_build_angular_node_modules_ngtools_webpack_src_loaders_direct_resource_js_view_project_page_html__WEBPACK_IMPORTED_MODULE_0__["default"],
        styles: [_view_project_page_scss__WEBPACK_IMPORTED_MODULE_1__]
    })
], ViewProjectPage);



/***/ }),

/***/ 35614:
/*!***************************************************************************!*\
  !*** ./src/app/pages/actions/project/view-project/view-project.page.scss ***!
  \***************************************************************************/
/***/ ((module) => {

module.exports = "/** Ionic CSS Variables **/\n@font-face {\n  font-family: \"Montserrat\", sans-serif;\n}\n:root {\n  --ion-font-family: \"Montserrat\", sans-serif;\n}\n/*\n* Light Colors\n* -------------------------------------------\n*/\n:root {\n  --ion-color-primary: #6411D9;\n  --ion-color-primary-rgb: 100,17,217;\n  --ion-color-primary-contrast: #ffffff;\n  --ion-color-primary-contrast-rgb: 255,255,255;\n  --ion-color-primary-shade: #580fbf;\n  --ion-color-primary-tint: #7429dd;\n  --ion-color-secondary: #622BD9;\n  --ion-color-secondary-rgb: 98,43,217;\n  --ion-color-secondary-contrast: #ffffff;\n  --ion-color-secondary-contrast-rgb: 255,255,255;\n  --ion-color-secondary-shade: #5626bf;\n  --ion-color-secondary-tint: #7240dd;\n  --ion-color-tertiary: #752BDF;\n  --ion-color-tertiary-rgb: 117,43,223;\n  --ion-color-tertiary-contrast: #ffffff;\n  --ion-color-tertiary-contrast-rgb: 255,255,255;\n  --ion-color-tertiary-shade: #6726c4;\n  --ion-color-tertiary-tint: #8340e2;\n  --ion-color-success: #33cc73;\n  --ion-color-success-rgb: 51,204,115;\n  --ion-color-success-contrast: #ffffff;\n  --ion-color-success-contrast-rgb: 0,0,0;\n  --ion-color-success-shade: #2db465;\n  --ion-color-success-tint: #47d181;\n  --ion-color-warning: #f2e231;\n  --ion-color-warning-rgb: 242,226,49;\n  --ion-color-warning-contrast: #fff;\n  --ion-color-warning-contrast-rgb: 255,255,255;\n  --ion-color-warning-shade: #d5c72b;\n  --ion-color-warning-tint: #f3e546;\n  --ion-color-danger: #e53e3e;\n  --ion-color-danger-rgb: 229,62,62;\n  --ion-color-danger-contrast: #ffffff;\n  --ion-color-danger-contrast-rgb: 255,255,255;\n  --ion-color-danger-shade: #ca3737;\n  --ion-color-danger-tint: #e85151;\n  --ion-color-medium: #fcfaff;\n  --ion-color-medium-rgb: 252,250,255;\n  --ion-color-medium-contrast: #000000;\n  --ion-color-medium-contrast-rgb: 0,0,0;\n  --ion-color-medium-shade: #dedce0;\n  --ion-color-medium-tint: #fcfbff;\n  --ion-color-light: #FFFFFF;\n  --ion-color-light-rgb: 255,255,255;\n  --ion-color-light-contrast: #1a1a1a;\n  --ion-color-light-contrast-rgb: 0,0,0;\n  --ion-color-light-shade: #e0e0e0;\n  --ion-color-light-tint: #ffffff;\n  --ion-text-color: #1c1c1c;\n  --ion-item-background: var(--ion-color-light);\n}\n/*\n* Dark Colors\n* -------------------------------------------\n*/\nbody.dark {\n  --ion-color-primary: #7924f0;\n  --ion-color-primary-rgb: 121,36,240;\n  --ion-color-primary-contrast: #ffffff;\n  --ion-color-primary-contrast-rgb: 255,255,255;\n  --ion-color-primary-shade: #6a20d3;\n  --ion-color-primary-tint: #863af2;\n  --ion-color-secondary: #622BD9;\n  --ion-color-secondary-rgb: 98,43,217;\n  --ion-color-secondary-contrast: #ffffff;\n  --ion-color-secondary-contrast-rgb: 255,255,255;\n  --ion-color-secondary-shade: #5626bf;\n  --ion-color-secondary-tint: #7240dd;\n  --ion-color-tertiary: #752BDF;\n  --ion-color-tertiary-rgb: 117,43,223;\n  --ion-color-tertiary-contrast: #ffffff;\n  --ion-color-tertiary-contrast-rgb: 255,255,255;\n  --ion-color-tertiary-shade: #6726c4;\n  --ion-color-tertiary-tint: #8340e2;\n  --ion-color-success: #33cc73;\n  --ion-color-success-rgb: 51,204,115;\n  --ion-color-success-contrast: #ffffff;\n  --ion-color-success-contrast-rgb: 0,0,0;\n  --ion-color-success-shade: #2db465;\n  --ion-color-success-tint: #47d181;\n  --ion-color-warning: #f2e231;\n  --ion-color-warning-rgb: 242,226,49;\n  --ion-color-warning-contrast: #fff;\n  --ion-color-warning-contrast-rgb: 255,255,255;\n  --ion-color-warning-shade: #d5c72b;\n  --ion-color-warning-tint: #f3e546;\n  --ion-color-danger: #e53e3e;\n  --ion-color-danger-rgb: 229,62,62;\n  --ion-color-danger-contrast: #ffffff;\n  --ion-color-danger-contrast-rgb: 255,255,255;\n  --ion-color-danger-shade: #ca3737;\n  --ion-color-danger-tint: #e85151;\n  --ion-color-medium: #121212;\n  --ion-color-medium-rgb: 18,18,18;\n  --ion-color-medium-contrast: #ffffff;\n  --ion-color-medium-contrast-rgb: 255,255,255;\n  --ion-color-medium-shade: #101010;\n  --ion-color-medium-tint: #2a2a2a;\n  --ion-color-light: #1d1d1d;\n  --ion-color-light-rgb: 29,29,29;\n  --ion-color-light-contrast: #ffffff;\n  --ion-color-light-contrast-rgb: 255,255,255;\n  --ion-color-light-shade: #1a1a1a;\n  --ion-color-light-tint: #343434;\n  --ion-text-color: #fff;\n  --ion-item-background: var(--ion-color-light);\n}\nhr {\n  background-color: var(--ion-color-step-550, #737373);\n}\n.timeframe-card {\n  display: inline-block;\n  margin-bottom: 0;\n  box-shadow: 0 0 15px rgba(0, 0, 0, 0.1);\n}\n.user-email {\n  font-size: 14pt;\n}\n.subtitle-labels {\n  font-size: 12pt;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uL3RoZW1lL3ZhcmlhYmxlcy5zY3NzIiwidmlldy1wcm9qZWN0LnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFHQSwwQkFBQTtBQUVBO0VBQ0UscUNBQUE7QUNIRjtBRE1BO0VBQ0UsMkNBQUE7QUNKRjtBRE9BOzs7Q0FBQTtBQUtBO0VBQ0UsNEJBQUE7RUFDQSxtQ0FBQTtFQUNBLHFDQUFBO0VBQ0EsNkNBQUE7RUFDQSxrQ0FBQTtFQUNBLGlDQUFBO0VBRUEsOEJBQUE7RUFDQSxvQ0FBQTtFQUNBLHVDQUFBO0VBQ0EsK0NBQUE7RUFDQSxvQ0FBQTtFQUNBLG1DQUFBO0VBRUEsNkJBQUE7RUFDQSxvQ0FBQTtFQUNBLHNDQUFBO0VBQ0EsOENBQUE7RUFDQSxtQ0FBQTtFQUNBLGtDQUFBO0VBRUEsNEJBQUE7RUFDQSxtQ0FBQTtFQUNBLHFDQUFBO0VBQ0EsdUNBQUE7RUFDQSxrQ0FBQTtFQUNBLGlDQUFBO0VBRUEsNEJBQUE7RUFDQSxtQ0FBQTtFQUNBLGtDQUFBO0VBQ0EsNkNBQUE7RUFDQSxrQ0FBQTtFQUNBLGlDQUFBO0VBRUEsMkJBQUE7RUFDQSxpQ0FBQTtFQUNBLG9DQUFBO0VBQ0EsNENBQUE7RUFDQSxpQ0FBQTtFQUNBLGdDQUFBO0VBRUEsMkJBQUE7RUFDQSxtQ0FBQTtFQUNBLG9DQUFBO0VBQ0Esc0NBQUE7RUFDQSxpQ0FBQTtFQUNBLGdDQUFBO0VBRUEsMEJBQUE7RUFDQSxrQ0FBQTtFQUNBLG1DQUFBO0VBQ0EscUNBQUE7RUFDQSxnQ0FBQTtFQUNBLCtCQUFBO0VBRUEseUJBQUE7RUFDQSw2Q0FBQTtBQ2JGO0FEZ0JBOzs7Q0FBQTtBQUtBO0VBQ0UsNEJBQUE7RUFDQSxtQ0FBQTtFQUNBLHFDQUFBO0VBQ0EsNkNBQUE7RUFDQSxrQ0FBQTtFQUNBLGlDQUFBO0VBRUEsOEJBQUE7RUFDQSxvQ0FBQTtFQUNBLHVDQUFBO0VBQ0EsK0NBQUE7RUFDQSxvQ0FBQTtFQUNBLG1DQUFBO0VBRUEsNkJBQUE7RUFDQSxvQ0FBQTtFQUNBLHNDQUFBO0VBQ0EsOENBQUE7RUFDQSxtQ0FBQTtFQUNBLGtDQUFBO0VBRUEsNEJBQUE7RUFDQSxtQ0FBQTtFQUNBLHFDQUFBO0VBQ0EsdUNBQUE7RUFDQSxrQ0FBQTtFQUNBLGlDQUFBO0VBRUEsNEJBQUE7RUFDQSxtQ0FBQTtFQUNBLGtDQUFBO0VBQ0EsNkNBQUE7RUFDQSxrQ0FBQTtFQUNBLGlDQUFBO0VBRUEsMkJBQUE7RUFDQSxpQ0FBQTtFQUNBLG9DQUFBO0VBQ0EsNENBQUE7RUFDQSxpQ0FBQTtFQUNBLGdDQUFBO0VBRUEsMkJBQUE7RUFDQSxnQ0FBQTtFQUNBLG9DQUFBO0VBQ0EsNENBQUE7RUFDQSxpQ0FBQTtFQUNBLGdDQUFBO0VBRUEsMEJBQUE7RUFDQSwrQkFBQTtFQUNBLG1DQUFBO0VBQ0EsMkNBQUE7RUFDQSxnQ0FBQTtFQUNBLCtCQUFBO0VBRUEsc0JBQUE7RUFDQSw2Q0FBQTtBQ3RCRjtBQXRIQTtFQUNFLG9EQUFBO0FBeUhGO0FBdEhBO0VBQ0UscUJBQUE7RUFDQSxnQkFBQTtFQUNBLHVDQUFBO0FBeUhGO0FBdEhBO0VBQ0UsZUFBQTtBQXlIRjtBQXZIQTtFQUNFLGVBQUE7QUEwSEYiLCJmaWxlIjoidmlldy1wcm9qZWN0LnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi8vIElvbmljIFZhcmlhYmxlcyBhbmQgVGhlbWluZy4gRm9yIG1vcmUgaW5mbywgcGxlYXNlIHNlZTpcbi8vIGh0dHA6Ly9pb25pY2ZyYW1ld29yay5jb20vZG9jcy90aGVtaW5nL1xuXG4vKiogSW9uaWMgQ1NTIFZhcmlhYmxlcyAqKi9cblxuQGZvbnQtZmFjZSB7XG4gIGZvbnQtZmFtaWx5OiAnTW9udHNlcnJhdCcsIHNhbnMtc2VyaWY7XG59XG5cbjpyb290IHtcbiAgLS1pb24tZm9udC1mYW1pbHk6ICdNb250c2VycmF0Jywgc2Fucy1zZXJpZjtcbn1cblxuLypcbiogTGlnaHQgQ29sb3JzXG4qIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiovXG5cbjpyb290IHtcbiAgLS1pb24tY29sb3ItcHJpbWFyeTogIzY0MTFEOTtcbiAgLS1pb24tY29sb3ItcHJpbWFyeS1yZ2I6IDEwMCwxNywyMTc7XG4gIC0taW9uLWNvbG9yLXByaW1hcnktY29udHJhc3Q6ICNmZmZmZmY7XG4gIC0taW9uLWNvbG9yLXByaW1hcnktY29udHJhc3QtcmdiOiAyNTUsMjU1LDI1NTtcbiAgLS1pb24tY29sb3ItcHJpbWFyeS1zaGFkZTogIzU4MGZiZjtcbiAgLS1pb24tY29sb3ItcHJpbWFyeS10aW50OiAjNzQyOWRkO1xuXG4gIC0taW9uLWNvbG9yLXNlY29uZGFyeTogIzYyMkJEOTtcbiAgLS1pb24tY29sb3Itc2Vjb25kYXJ5LXJnYjogOTgsNDMsMjE3O1xuICAtLWlvbi1jb2xvci1zZWNvbmRhcnktY29udHJhc3Q6ICNmZmZmZmY7XG4gIC0taW9uLWNvbG9yLXNlY29uZGFyeS1jb250cmFzdC1yZ2I6IDI1NSwyNTUsMjU1O1xuICAtLWlvbi1jb2xvci1zZWNvbmRhcnktc2hhZGU6ICM1NjI2YmY7XG4gIC0taW9uLWNvbG9yLXNlY29uZGFyeS10aW50OiAjNzI0MGRkO1xuXG4gIC0taW9uLWNvbG9yLXRlcnRpYXJ5OiAjNzUyQkRGO1xuICAtLWlvbi1jb2xvci10ZXJ0aWFyeS1yZ2I6IDExNyw0MywyMjM7XG4gIC0taW9uLWNvbG9yLXRlcnRpYXJ5LWNvbnRyYXN0OiAjZmZmZmZmO1xuICAtLWlvbi1jb2xvci10ZXJ0aWFyeS1jb250cmFzdC1yZ2I6IDI1NSwyNTUsMjU1O1xuICAtLWlvbi1jb2xvci10ZXJ0aWFyeS1zaGFkZTogIzY3MjZjNDtcbiAgLS1pb24tY29sb3ItdGVydGlhcnktdGludDogIzgzNDBlMjtcblxuICAtLWlvbi1jb2xvci1zdWNjZXNzOiAjMzNjYzczO1xuICAtLWlvbi1jb2xvci1zdWNjZXNzLXJnYjogNTEsMjA0LDExNTtcbiAgLS1pb24tY29sb3Itc3VjY2Vzcy1jb250cmFzdDogI2ZmZmZmZjtcbiAgLS1pb24tY29sb3Itc3VjY2Vzcy1jb250cmFzdC1yZ2I6IDAsMCwwO1xuICAtLWlvbi1jb2xvci1zdWNjZXNzLXNoYWRlOiAjMmRiNDY1O1xuICAtLWlvbi1jb2xvci1zdWNjZXNzLXRpbnQ6ICM0N2QxODE7XG5cbiAgLS1pb24tY29sb3Itd2FybmluZzogI2YyZTIzMTtcbiAgLS1pb24tY29sb3Itd2FybmluZy1yZ2I6IDI0MiwyMjYsNDk7XG4gIC0taW9uLWNvbG9yLXdhcm5pbmctY29udHJhc3Q6ICNmZmY7XG4gIC0taW9uLWNvbG9yLXdhcm5pbmctY29udHJhc3QtcmdiOiAyNTUsMjU1LDI1NTtcbiAgLS1pb24tY29sb3Itd2FybmluZy1zaGFkZTogI2Q1YzcyYjtcbiAgLS1pb24tY29sb3Itd2FybmluZy10aW50OiAjZjNlNTQ2O1xuXG4gIC0taW9uLWNvbG9yLWRhbmdlcjogI2U1M2UzZTtcbiAgLS1pb24tY29sb3ItZGFuZ2VyLXJnYjogMjI5LDYyLDYyO1xuICAtLWlvbi1jb2xvci1kYW5nZXItY29udHJhc3Q6ICNmZmZmZmY7XG4gIC0taW9uLWNvbG9yLWRhbmdlci1jb250cmFzdC1yZ2I6IDI1NSwyNTUsMjU1O1xuICAtLWlvbi1jb2xvci1kYW5nZXItc2hhZGU6ICNjYTM3Mzc7XG4gIC0taW9uLWNvbG9yLWRhbmdlci10aW50OiAjZTg1MTUxO1xuXG4gIC0taW9uLWNvbG9yLW1lZGl1bTogI2ZjZmFmZjtcbiAgLS1pb24tY29sb3ItbWVkaXVtLXJnYjogMjUyLDI1MCwyNTU7XG4gIC0taW9uLWNvbG9yLW1lZGl1bS1jb250cmFzdDogIzAwMDAwMDtcbiAgLS1pb24tY29sb3ItbWVkaXVtLWNvbnRyYXN0LXJnYjogMCwwLDA7XG4gIC0taW9uLWNvbG9yLW1lZGl1bS1zaGFkZTogI2RlZGNlMDtcbiAgLS1pb24tY29sb3ItbWVkaXVtLXRpbnQ6ICNmY2ZiZmY7XG5cbiAgLS1pb24tY29sb3ItbGlnaHQ6ICNGRkZGRkY7XG4gIC0taW9uLWNvbG9yLWxpZ2h0LXJnYjogMjU1LDI1NSwyNTU7XG4gIC0taW9uLWNvbG9yLWxpZ2h0LWNvbnRyYXN0OiAjMWExYTFhO1xuICAtLWlvbi1jb2xvci1saWdodC1jb250cmFzdC1yZ2I6IDAsMCwwO1xuICAtLWlvbi1jb2xvci1saWdodC1zaGFkZTogI2UwZTBlMDtcbiAgLS1pb24tY29sb3ItbGlnaHQtdGludDogI2ZmZmZmZjtcblxuICAtLWlvbi10ZXh0LWNvbG9yOiAjMWMxYzFjO1xuICAtLWlvbi1pdGVtLWJhY2tncm91bmQ6IHZhcigtLWlvbi1jb2xvci1saWdodCk7XG59XG5cbi8qXG4qIERhcmsgQ29sb3JzXG4qIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiovXG5cbmJvZHkuZGFyayB7XG4gIC0taW9uLWNvbG9yLXByaW1hcnk6ICM3OTI0ZjA7XG4gIC0taW9uLWNvbG9yLXByaW1hcnktcmdiOiAxMjEsMzYsMjQwO1xuICAtLWlvbi1jb2xvci1wcmltYXJ5LWNvbnRyYXN0OiAjZmZmZmZmO1xuICAtLWlvbi1jb2xvci1wcmltYXJ5LWNvbnRyYXN0LXJnYjogMjU1LDI1NSwyNTU7XG4gIC0taW9uLWNvbG9yLXByaW1hcnktc2hhZGU6ICM2YTIwZDM7XG4gIC0taW9uLWNvbG9yLXByaW1hcnktdGludDogIzg2M2FmMjtcblxuICAtLWlvbi1jb2xvci1zZWNvbmRhcnk6ICM2MjJCRDk7XG4gIC0taW9uLWNvbG9yLXNlY29uZGFyeS1yZ2I6IDk4LDQzLDIxNztcbiAgLS1pb24tY29sb3Itc2Vjb25kYXJ5LWNvbnRyYXN0OiAjZmZmZmZmO1xuICAtLWlvbi1jb2xvci1zZWNvbmRhcnktY29udHJhc3QtcmdiOiAyNTUsMjU1LDI1NTtcbiAgLS1pb24tY29sb3Itc2Vjb25kYXJ5LXNoYWRlOiAjNTYyNmJmO1xuICAtLWlvbi1jb2xvci1zZWNvbmRhcnktdGludDogIzcyNDBkZDtcblxuICAtLWlvbi1jb2xvci10ZXJ0aWFyeTogIzc1MkJERjtcbiAgLS1pb24tY29sb3ItdGVydGlhcnktcmdiOiAxMTcsNDMsMjIzO1xuICAtLWlvbi1jb2xvci10ZXJ0aWFyeS1jb250cmFzdDogI2ZmZmZmZjtcbiAgLS1pb24tY29sb3ItdGVydGlhcnktY29udHJhc3QtcmdiOiAyNTUsMjU1LDI1NTtcbiAgLS1pb24tY29sb3ItdGVydGlhcnktc2hhZGU6ICM2NzI2YzQ7XG4gIC0taW9uLWNvbG9yLXRlcnRpYXJ5LXRpbnQ6ICM4MzQwZTI7XG5cbiAgLS1pb24tY29sb3Itc3VjY2VzczogIzMzY2M3MztcbiAgLS1pb24tY29sb3Itc3VjY2Vzcy1yZ2I6IDUxLDIwNCwxMTU7XG4gIC0taW9uLWNvbG9yLXN1Y2Nlc3MtY29udHJhc3Q6ICNmZmZmZmY7XG4gIC0taW9uLWNvbG9yLXN1Y2Nlc3MtY29udHJhc3QtcmdiOiAwLDAsMDtcbiAgLS1pb24tY29sb3Itc3VjY2Vzcy1zaGFkZTogIzJkYjQ2NTtcbiAgLS1pb24tY29sb3Itc3VjY2Vzcy10aW50OiAjNDdkMTgxO1xuXG4gIC0taW9uLWNvbG9yLXdhcm5pbmc6ICNmMmUyMzE7XG4gIC0taW9uLWNvbG9yLXdhcm5pbmctcmdiOiAyNDIsMjI2LDQ5O1xuICAtLWlvbi1jb2xvci13YXJuaW5nLWNvbnRyYXN0OiAjZmZmO1xuICAtLWlvbi1jb2xvci13YXJuaW5nLWNvbnRyYXN0LXJnYjogMjU1LDI1NSwyNTU7XG4gIC0taW9uLWNvbG9yLXdhcm5pbmctc2hhZGU6ICNkNWM3MmI7XG4gIC0taW9uLWNvbG9yLXdhcm5pbmctdGludDogI2YzZTU0NjtcblxuICAtLWlvbi1jb2xvci1kYW5nZXI6ICNlNTNlM2U7XG4gIC0taW9uLWNvbG9yLWRhbmdlci1yZ2I6IDIyOSw2Miw2MjtcbiAgLS1pb24tY29sb3ItZGFuZ2VyLWNvbnRyYXN0OiAjZmZmZmZmO1xuICAtLWlvbi1jb2xvci1kYW5nZXItY29udHJhc3QtcmdiOiAyNTUsMjU1LDI1NTtcbiAgLS1pb24tY29sb3ItZGFuZ2VyLXNoYWRlOiAjY2EzNzM3O1xuICAtLWlvbi1jb2xvci1kYW5nZXItdGludDogI2U4NTE1MTtcblxuICAtLWlvbi1jb2xvci1tZWRpdW06ICMxMjEyMTI7XG4gIC0taW9uLWNvbG9yLW1lZGl1bS1yZ2I6IDE4LDE4LDE4O1xuICAtLWlvbi1jb2xvci1tZWRpdW0tY29udHJhc3Q6ICNmZmZmZmY7XG4gIC0taW9uLWNvbG9yLW1lZGl1bS1jb250cmFzdC1yZ2I6IDI1NSwyNTUsMjU1O1xuICAtLWlvbi1jb2xvci1tZWRpdW0tc2hhZGU6ICMxMDEwMTA7XG4gIC0taW9uLWNvbG9yLW1lZGl1bS10aW50OiAjMmEyYTJhO1xuXG4gIC0taW9uLWNvbG9yLWxpZ2h0OiAjMWQxZDFkO1xuICAtLWlvbi1jb2xvci1saWdodC1yZ2I6IDI5LDI5LDI5O1xuICAtLWlvbi1jb2xvci1saWdodC1jb250cmFzdDogI2ZmZmZmZjtcbiAgLS1pb24tY29sb3ItbGlnaHQtY29udHJhc3QtcmdiOiAyNTUsMjU1LDI1NTtcbiAgLS1pb24tY29sb3ItbGlnaHQtc2hhZGU6ICMxYTFhMWE7XG4gIC0taW9uLWNvbG9yLWxpZ2h0LXRpbnQ6ICMzNDM0MzQ7XG5cbiAgLS1pb24tdGV4dC1jb2xvcjogI2ZmZjtcbiAgLS1pb24taXRlbS1iYWNrZ3JvdW5kOiB2YXIoLS1pb24tY29sb3ItbGlnaHQpO1xufVxuIiwiQGltcG9ydCBcIi4uLy4uLy4uLy4uLy4uL3RoZW1lL3ZhcmlhYmxlcy5zY3NzXCI7XG5cbmhyIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0taW9uLWNvbG9yLXN0ZXAtNTUwLCAjNzM3MzczKTtcbn1cblxuLnRpbWVmcmFtZS1jYXJkIHtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICBtYXJnaW4tYm90dG9tOiAwO1xuICBib3gtc2hhZG93OiAwIDAgMTVweCByZ2IoMCAwIDAgLyAxMCUpO1xufVxuXG4udXNlci1lbWFpbCB7XG4gIGZvbnQtc2l6ZTogMTRwdDtcbn1cbi5zdWJ0aXRsZS1sYWJlbHMge1xuICBmb250LXNpemU6IDEycHQ7XG59XG4iXX0= */";

/***/ })

}]);
//# sourceMappingURL=src_app_pages_actions_project_view-project_view-project_module_ts.js.map