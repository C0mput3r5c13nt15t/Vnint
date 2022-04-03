"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_pages_actions_project_manage-project_manage-project_module_ts"],{

/***/ 83627:
/*!*****************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/@angular-devkit/build-angular/node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./src/app/pages/actions/project/manage-project/manage-project.page.html ***!
  \*****************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<ion-content>\n  <app-toolbar></app-toolbar>\n  <ion-grid>\n    <ion-row>\n      <ion-col>\n        <app-card-title-bar *ngIf=\"project\" [title]=\"project.title\"></app-card-title-bar>\n        <app-card-title-bar *ngIf=\"!project\" title=\"{{ 'ACTIONS.MANAGE_PROJECT.title' | translate }}\"></app-card-title-bar>\n        <ion-card *ngIf=\"project\" color=\"light\">\n          <img class=\"project-thumbnail\" *ngIf=\"project.image\" src=\"/images/{{ project.image }}\" [alt]=\"project.image\">\n          <ion-card-content>\n            <ion-grid class=\"inside-card-grid\">\n              <ion-row>\n                <ion-col>\n                  <ion-label>{{ 'ACTIONS.MANAGE_PROJECT.topic' | translate }} </ion-label>\n                  <ng-container *ngFor=\"let topic of ('GENERAL.PROJECT_TOPICS' | translate) | keyvalue\">\n                    <ion-label class=\"subtitle-labels\" color=\"primary\" *ngIf=\"project.topic == topic.key\"><b>{{ topic.value }}</b></ion-label>\n                  </ng-container>\n                  <br><br>\n                  <ion-label>\n                    {{ project.description }}\n                  </ion-label>\n                  <br>\n                  <ng-container *ngIf=\"project.timeframes.length > 0\">\n                    <br>\n                    <ion-label>{{ 'ACTIONS.MANAGE_PROJECT.timeframes' | translate }}</ion-label>\n                    <div *ngFor=\"let timeframe of project.timeframes\">\n                      <ion-card class=\"timeframe-card\" color=\"light\">\n                        <ion-card-content>\n                          <ion-label>{{ 'ACTIONS.MANAGE_PROJECT.from' | translate }} <ion-label>{{ timeframe.from | date:( 'GENERAL.exactTimeDisplayFormat' | translate ):( 'GENERAL.timezone' | translate ):( 'GENERAL.locale' | translate ) }}</ion-label></ion-label><br>\n                          <ion-label>{{ 'ACTIONS.MANAGE_PROJECT.until' | translate }} <ion-label>{{ timeframe.until | date:( 'GENERAL.exactTimeDisplayFormat' | translate ):( 'GENERAL.timezone' | translate ):( 'GENERAL.locale' | translate ) }}</ion-label></ion-label>\n                        </ion-card-content>\n                      </ion-card>\n                    </div>\n                  </ng-container>\n                  <br>\n                  <ion-label>{{ 'ACTIONS.MANAGE_PROJECT.leader' | translate }} </ion-label><ion-label color=\"primary\"><b>{{ project.leader.email }}</b></ion-label>\n                  <br>\n                  <ion-label>{{ 'ACTIONS.MANAGE_PROJECT.cost' | translate }} </ion-label><ion-label><b>{{ project.cost }} €</b></ion-label>\n                  <br><br>\n                  <ion-label>{{ 'ACTIONS.MANAGE_PROJECT.grade' | translate }} </ion-label><ion-label><b>{{ project.min_grade }}</b></ion-label><b>-</b><ion-label><b>{{ project.max_grade }}</b></ion-label>\n                  <br>\n                  <ion-label>{{ 'ACTIONS.MANAGE_PROJECT.capacity' | translate }} </ion-label><ion-label><b>{{ project.min_participants }}</b></ion-label><b>-</b><ion-label><b>{{ project.max_participants }}</b></ion-label>\n                  <br><br>\n                  <ion-label>{{ 'GENERAL.createdAt' | translate }} </ion-label><ion-label>{{ project.created_at | date:( 'GENERAL.timeDisplayFormat' | translate ):( 'GENERAL.timezone' | translate ):( 'GENERAL.locale' | translate ) }}</ion-label><br>\n                  <ion-label>{{ 'GENERAL.updatedAt' | translate }} </ion-label><ion-label>{{ project.updated_at | date:( 'GENERAL.timeDisplayFormat' | translate ):( 'GENERAL.timezone' | translate ):( 'GENERAL.locale' | translate ) }}</ion-label>\n                </ion-col>\n              </ion-row>\n              <ng-container *ngIf=\"permissions.includes('projects.update_associated') || permissions.includes('projects.destroy')\">\n                <br>\n                <hr>\n                <ion-row>\n                  <ion-chip *ngIf=\"permissions.includes('projects.update_associated')\" [routerLink]=\"['/edit-project']\" color=\"primary\">\n                    <ion-icon name=\"pencil\"></ion-icon>\n                    <ion-label>{{ 'ACTIONS.MANAGE_PROJECT.edit' | translate }}</ion-label>\n                  </ion-chip>\n                  <ion-chip *ngIf=\"permissions.includes('projects.destroy')\" (click)=\"deleteProject()\" color=\"danger\">\n                    <ion-icon name=\"trash\"></ion-icon>\n                    <ion-label>{{ 'ACTIONS.MANAGE_PROJECT.delete' | translate }}</ion-label>\n                  </ion-chip>\n                </ion-row>\n              </ng-container>\n            </ion-grid>\n          </ion-card-content>\n        </ion-card>\n      </ion-col>\n    </ion-row>\n    <ion-row>\n      <ion-col *ngIf=\"project\">\n        <ion-card color=\"light\">\n          <ion-card-header>\n            <ion-card-title>\n              {{ 'ACTIONS.MANAGE_PROJECT.participants' | translate }}\n            </ion-card-title>\n          </ion-card-header>\n          <ion-card-content>\n            <ion-grid class=\"inside-card-grid\">\n              <ion-row>\n                <ion-col>\n                  <ion-card color=\"light\">\n                    <ion-card-header>\n                      <ion-card-title class=\"user-email\">\n                        {{ project.leader.email }}\n                      </ion-card-title>\n                      <ion-card-subtitle>\n                        <ion-label color=\"primary\" class=\"subtitle-labels\">{{ 'ACTIONS.MANAGE_PROJECT.ROLES.leader' | translate }}</ion-label>\n                      </ion-card-subtitle>\n                    </ion-card-header>\n                  </ion-card>\n                  <ng-container *ngIf=\"project.assistants.length > 0\">\n                    <ng-container *ngIf=\"permissions.includes('projects.promote_assistant')\">\n                      <ion-card button=\"true\" (click)=\"removeAssistent(assistant.id)\" *ngFor=\"let assistant of project.assistants\" color=\"light\">\n                        <ion-card-header>\n                          <ion-card-title class=\"user-email\">\n                            {{ assistant.email }}\n                          </ion-card-title>\n                          <ion-card-subtitle>\n                            <ion-label color=\"primary\" class=\"subtitle-labels\">{{ 'ACTIONS.MANAGE_PROJECT.ROLES.assistent' | translate }}</ion-label>\n                          </ion-card-subtitle>\n                        </ion-card-header>\n                      </ion-card>\n                    </ng-container>\n                    <ng-container *ngIf=\"!permissions.includes('projects.promote_assistant')\">\n                      <ion-card *ngFor=\"let assistant of project.assistants\" color=\"light\">\n                        <ion-card-header>\n                          <ion-card-title class=\"user-email\">\n                            {{ assistant.email }}\n                          </ion-card-title>\n                          <ion-card-subtitle>\n                            <ion-label color=\"primary\" class=\"subtitle-labels\">{{ 'ACTIONS.MANAGE_PROJECT.ROLES.assistent' | translate }}</ion-label>\n                          </ion-card-subtitle>\n                        </ion-card-header>\n                      </ion-card>\n                    </ng-container>\n                  </ng-container>\n                  <ng-container *ngIf=\"project.participants.length > 0\">\n                    <ion-card *ngFor=\"let participant of project.participants\" color=\"light\">\n                      <ion-card-header>\n                        <ion-card-title class=\"user-email\">\n                          {{ participant.email }}\n                        </ion-card-title>\n                        <ion-label color=\"primary\" class=\"subtitle-labels\">{{ 'ACTIONS.MANAGE_PROJECT.ROLES.participant' | translate }}</ion-label>\n                      </ion-card-header>\n                    </ion-card>\n                  </ng-container>\n                </ion-col>\n              </ion-row>\n            </ion-grid>\n          </ion-card-content>\n        </ion-card>\n      </ion-col>\n      <ion-col *ngIf=\"permissions.includes('projects.promote_assistant')\">\n        <ion-card color=\"light\">\n          <ion-card-content>\n            <ion-grid class=\"inside-card-grid\">\n              <ion-row>\n                <ion-col>\n                  <form [formGroup]=\"addAssistentForm\" (ngSubmit)=\"addAssistent()\">\n\n                    <ion-item color=\"light\">\n                      <ion-input type=\"email\" formControlName=\"attendant_email\" placeholder=\"{{ 'LOGIN.INPUT.email' | translate }}\"></ion-input>\n                    </ion-item>\n                    <app-form-error [errors]=\"errorControl.attendant_email.errors\"></app-form-error>\n\n                    <ion-checkbox class=\"invisible\" formControlName=\"fax\"></ion-checkbox>\n\n                    <div class=\"ion-padding\">\n                      <ion-button *ngIf=\"isProcessed\" type=\"submit\" [disabled]=\"addAssistentForm.invalid || isProcessed\" class=\"ion-no-margin\" expand=\"block\" color=\"primary\"><ion-spinner name=\"crescent\"></ion-spinner></ion-button>\n                      <ion-button *ngIf=\"!isProcessed\" color=\"primary\" [disabled]=\"addAssistentForm.invalid\" (click)=\"addAssistent()\" expand=\"block\" type=\"submit\" class=\"ion-no-margin\">+ {{ 'ACTIONS.MANAGE_PROJECT.addAssistant' | translate }}</ion-button>\n                    </div>\n\n                    <ion-label>\n                      {{ 'ACTIONS.MANAGE_PROJECT.removeAssistants' | translate }}\n                    </ion-label>\n                  </form>\n                </ion-col>\n              </ion-row>\n            </ion-grid>\n          </ion-card-content>\n        </ion-card>\n      </ion-col>\n    </ion-row>\n  </ion-grid>\n</ion-content>\n");

/***/ }),

/***/ 24461:
/*!***************************************************************************************!*\
  !*** ./src/app/pages/actions/project/manage-project/manage-project-routing.module.ts ***!
  \***************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ManageProjectPageRoutingModule": () => (/* binding */ ManageProjectPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 21838);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 789);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 9538);
/* harmony import */ var _manage_project_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./manage-project.page */ 20520);




const routes = [
    {
        path: '',
        component: _manage_project_page__WEBPACK_IMPORTED_MODULE_0__.ManageProjectPage
    }
];
let ManageProjectPageRoutingModule = class ManageProjectPageRoutingModule {
};
ManageProjectPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], ManageProjectPageRoutingModule);



/***/ }),

/***/ 68785:
/*!*******************************************************************************!*\
  !*** ./src/app/pages/actions/project/manage-project/manage-project.module.ts ***!
  \*******************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ManageProjectPageModule": () => (/* binding */ ManageProjectPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! tslib */ 21838);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 789);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ 2006);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/forms */ 43459);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/common/http */ 45331);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ionic/angular */ 30585);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @ngx-translate/core */ 52784);
/* harmony import */ var _manage_project_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./manage-project-routing.module */ 24461);
/* harmony import */ var _components_components_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../components/components.module */ 96453);
/* harmony import */ var _manage_project_page__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./manage-project.page */ 20520);
/* harmony import */ var src_app_app_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/app.module */ 92014);











let ManageProjectPageModule = class ManageProjectPageModule {
};
ManageProjectPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_5__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_6__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_7__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_8__.IonicModule,
            _manage_project_routing_module__WEBPACK_IMPORTED_MODULE_0__.ManageProjectPageRoutingModule,
            _components_components_module__WEBPACK_IMPORTED_MODULE_1__.ComponentsModule,
            _ngx_translate_core__WEBPACK_IMPORTED_MODULE_9__.TranslateModule.forChild({
                loader: {
                    provide: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_9__.TranslateLoader,
                    useFactory: src_app_app_module__WEBPACK_IMPORTED_MODULE_3__.createTranslateLoader,
                    deps: [_angular_common_http__WEBPACK_IMPORTED_MODULE_10__.HttpClient]
                }
            }),
            _angular_forms__WEBPACK_IMPORTED_MODULE_7__.ReactiveFormsModule,
        ],
        declarations: [_manage_project_page__WEBPACK_IMPORTED_MODULE_2__.ManageProjectPage]
    })
], ManageProjectPageModule);



/***/ }),

/***/ 20520:
/*!*****************************************************************************!*\
  !*** ./src/app/pages/actions/project/manage-project/manage-project.page.ts ***!
  \*****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ManageProjectPage": () => (/* binding */ ManageProjectPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! tslib */ 21838);
/* harmony import */ var _home_vagrant_projects_Vnint_node_modules_angular_devkit_build_angular_node_modules_ngtools_webpack_src_loaders_direct_resource_js_manage_project_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !./node_modules/@angular-devkit/build-angular/node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./manage-project.page.html */ 83627);
/* harmony import */ var _manage_project_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./manage-project.page.scss */ 94520);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/core */ 789);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/router */ 9538);
/* harmony import */ var src_app_services_project_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/project.service */ 81856);
/* harmony import */ var src_app_services_error_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/error.service */ 55729);
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../services/auth.service */ 56898);
/* harmony import */ var _services_preference_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../services/preference.service */ 93271);
/* harmony import */ var _services_alert_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../../services/alert.service */ 92677);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @ngx-translate/core */ 52784);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/forms */ 43459);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @ionic/angular */ 30585);













let ManageProjectPage = class ManageProjectPage {
    constructor(formBuilder, projectService, router, alertController, errorService, auth, preferencesService, alertService, translate) {
        this.formBuilder = formBuilder;
        this.projectService = projectService;
        this.router = router;
        this.alertController = alertController;
        this.errorService = errorService;
        this.auth = auth;
        this.preferencesService = preferencesService;
        this.alertService = alertService;
        this.translate = translate;
        this.permissions = [];
        this.preference_ids = [];
        this.isProcessed = false;
    }
    ngOnInit() {
        this.addAssistentForm = this.formBuilder.group({
            attendant_email: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_7__.Validators.required],
            fax: []
        });
    }
    get errorControl() {
        return this.addAssistentForm.controls;
    }
    ionViewWillEnter() {
        this.getProject();
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
    getProject() {
        this.projectService.getAssociatedProject().subscribe({
            error: error => {
                this.errorService.errorOccurred.emit(error);
            },
            next: response => {
                const resp = response;
                this.project = resp.project;
            },
        });
    }
    deleteProject() {
        this.projectService.deleteProject(this.project.id).subscribe({
            error: error => {
                this.errorService.errorOccurred.emit(error);
            },
            next: () => { },
            complete: () => {
                this.router.navigate(['/dashboard']);
            }
        });
    }
    addAssistent() {
        this.isProcessed = true;
        if (!this.addAssistentForm.value.fax && this.addAssistentForm.valid) {
            this.projectService.promoteAssistant({ attendant_email: this.addAssistentForm.value.attendant_email }).subscribe({
                error: error => {
                    if (error.error.message == 'The given data was invalid.') {
                        for (const errorType in error.error.errors) {
                            const errors = [];
                            for (const errorMessage in error.error.errors[errorType]) {
                                errors.push({ [error.error.errors[errorType][errorMessage]]: true });
                            }
                            console.log(this.addAssistentForm.controls);
                            this.addAssistentForm.controls[errorType].setErrors(errors);
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
                    this.alertService.alert("success", this.translate.instant('ACTIONS.MANAGE_FRIENDS.title'), resp.message, "checkmark");
                },
                complete: () => {
                    this.addAssistentForm.reset();
                    this.isProcessed = false;
                    this.getProject();
                },
            });
        }
    }
    removeAssistent(id) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_8__.__awaiter)(this, void 0, void 0, function* () {
            const alert = yield this.alertController.create({
                header: this.translate.instant('ACTIONS.MANAGE_PROJECT.REMOVE_ASSISTANT_POPUP.alertHeader'),
                message: this.translate.instant('ACTIONS.MANAGE_PROJECT.REMOVE_ASSISTANT_POPUP.alertText'),
                buttons: [
                    {
                        cssClass: 'cancel-text',
                        text: this.translate.instant('GENERAL.POPUPS.cancel'),
                        role: 'cancel',
                    }, {
                        text: this.translate.instant('ACTIONS.MANAGE_PROJECT.REMOVE_ASSISTANT_POPUP.removeButton'),
                        handler: () => {
                            this.projectService.demoteAssistant(id).subscribe({
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
                                    this.alertService.alert("success", this.translate.instant('ACTIONS.MANAGE_PROJECT.title'), resp.message, "checkmark");
                                },
                                complete: () => {
                                    this.getProject();
                                },
                            });
                        }
                    }
                ]
            });
            yield alert.present();
        });
    }
};
ManageProjectPage.ctorParameters = () => [
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_7__.FormBuilder },
    { type: src_app_services_project_service__WEBPACK_IMPORTED_MODULE_2__.ProjectService },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_9__.Router },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_10__.AlertController },
    { type: src_app_services_error_service__WEBPACK_IMPORTED_MODULE_3__.ErrorService },
    { type: _services_auth_service__WEBPACK_IMPORTED_MODULE_4__.AuthService },
    { type: _services_preference_service__WEBPACK_IMPORTED_MODULE_5__.PreferencesService },
    { type: _services_alert_service__WEBPACK_IMPORTED_MODULE_6__.AlertService },
    { type: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_11__.TranslateService }
];
ManageProjectPage = (0,tslib__WEBPACK_IMPORTED_MODULE_8__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_12__.Component)({
        selector: 'app-manage-project',
        template: _home_vagrant_projects_Vnint_node_modules_angular_devkit_build_angular_node_modules_ngtools_webpack_src_loaders_direct_resource_js_manage_project_page_html__WEBPACK_IMPORTED_MODULE_0__["default"],
        styles: [_manage_project_page_scss__WEBPACK_IMPORTED_MODULE_1__]
    })
], ManageProjectPage);



/***/ }),

/***/ 94520:
/*!*******************************************************************************!*\
  !*** ./src/app/pages/actions/project/manage-project/manage-project.page.scss ***!
  \*******************************************************************************/
/***/ ((module) => {

module.exports = "/** Ionic CSS Variables **/\n@font-face {\n  font-family: \"Montserrat\", sans-serif;\n}\n:root {\n  --ion-font-family: \"Montserrat\", sans-serif;\n}\n/*\n* Light Colors\n* -------------------------------------------\n*/\n:root {\n  --ion-color-primary: #6411D9;\n  --ion-color-primary-rgb: 100,17,217;\n  --ion-color-primary-contrast: #ffffff;\n  --ion-color-primary-contrast-rgb: 255,255,255;\n  --ion-color-primary-shade: #580fbf;\n  --ion-color-primary-tint: #7429dd;\n  --ion-color-secondary: #622BD9;\n  --ion-color-secondary-rgb: 98,43,217;\n  --ion-color-secondary-contrast: #ffffff;\n  --ion-color-secondary-contrast-rgb: 255,255,255;\n  --ion-color-secondary-shade: #5626bf;\n  --ion-color-secondary-tint: #7240dd;\n  --ion-color-tertiary: #752BDF;\n  --ion-color-tertiary-rgb: 117,43,223;\n  --ion-color-tertiary-contrast: #ffffff;\n  --ion-color-tertiary-contrast-rgb: 255,255,255;\n  --ion-color-tertiary-shade: #6726c4;\n  --ion-color-tertiary-tint: #8340e2;\n  --ion-color-success: #33cc73;\n  --ion-color-success-rgb: 51,204,115;\n  --ion-color-success-contrast: #ffffff;\n  --ion-color-success-contrast-rgb: 0,0,0;\n  --ion-color-success-shade: #2db465;\n  --ion-color-success-tint: #47d181;\n  --ion-color-warning: #f2e231;\n  --ion-color-warning-rgb: 242,226,49;\n  --ion-color-warning-contrast: #fff;\n  --ion-color-warning-contrast-rgb: 255,255,255;\n  --ion-color-warning-shade: #d5c72b;\n  --ion-color-warning-tint: #f3e546;\n  --ion-color-danger: #e53e3e;\n  --ion-color-danger-rgb: 229,62,62;\n  --ion-color-danger-contrast: #ffffff;\n  --ion-color-danger-contrast-rgb: 255,255,255;\n  --ion-color-danger-shade: #ca3737;\n  --ion-color-danger-tint: #e85151;\n  --ion-color-medium: #fcfaff;\n  --ion-color-medium-rgb: 252,250,255;\n  --ion-color-medium-contrast: #000000;\n  --ion-color-medium-contrast-rgb: 0,0,0;\n  --ion-color-medium-shade: #dedce0;\n  --ion-color-medium-tint: #fcfbff;\n  --ion-color-light: #FFFFFF;\n  --ion-color-light-rgb: 255,255,255;\n  --ion-color-light-contrast: #1a1a1a;\n  --ion-color-light-contrast-rgb: 0,0,0;\n  --ion-color-light-shade: #e0e0e0;\n  --ion-color-light-tint: #ffffff;\n  --ion-text-color: #1c1c1c;\n  --ion-item-background: var(--ion-color-light);\n}\n/*\n* Dark Colors\n* -------------------------------------------\n*/\nbody.dark {\n  --ion-color-primary: #7924f0;\n  --ion-color-primary-rgb: 121,36,240;\n  --ion-color-primary-contrast: #ffffff;\n  --ion-color-primary-contrast-rgb: 255,255,255;\n  --ion-color-primary-shade: #6a20d3;\n  --ion-color-primary-tint: #863af2;\n  --ion-color-secondary: #622BD9;\n  --ion-color-secondary-rgb: 98,43,217;\n  --ion-color-secondary-contrast: #ffffff;\n  --ion-color-secondary-contrast-rgb: 255,255,255;\n  --ion-color-secondary-shade: #5626bf;\n  --ion-color-secondary-tint: #7240dd;\n  --ion-color-tertiary: #752BDF;\n  --ion-color-tertiary-rgb: 117,43,223;\n  --ion-color-tertiary-contrast: #ffffff;\n  --ion-color-tertiary-contrast-rgb: 255,255,255;\n  --ion-color-tertiary-shade: #6726c4;\n  --ion-color-tertiary-tint: #8340e2;\n  --ion-color-success: #33cc73;\n  --ion-color-success-rgb: 51,204,115;\n  --ion-color-success-contrast: #ffffff;\n  --ion-color-success-contrast-rgb: 0,0,0;\n  --ion-color-success-shade: #2db465;\n  --ion-color-success-tint: #47d181;\n  --ion-color-warning: #f2e231;\n  --ion-color-warning-rgb: 242,226,49;\n  --ion-color-warning-contrast: #fff;\n  --ion-color-warning-contrast-rgb: 255,255,255;\n  --ion-color-warning-shade: #d5c72b;\n  --ion-color-warning-tint: #f3e546;\n  --ion-color-danger: #e53e3e;\n  --ion-color-danger-rgb: 229,62,62;\n  --ion-color-danger-contrast: #ffffff;\n  --ion-color-danger-contrast-rgb: 255,255,255;\n  --ion-color-danger-shade: #ca3737;\n  --ion-color-danger-tint: #e85151;\n  --ion-color-medium: #121212;\n  --ion-color-medium-rgb: 18,18,18;\n  --ion-color-medium-contrast: #ffffff;\n  --ion-color-medium-contrast-rgb: 255,255,255;\n  --ion-color-medium-shade: #101010;\n  --ion-color-medium-tint: #2a2a2a;\n  --ion-color-light: #1d1d1d;\n  --ion-color-light-rgb: 29,29,29;\n  --ion-color-light-contrast: #ffffff;\n  --ion-color-light-contrast-rgb: 255,255,255;\n  --ion-color-light-shade: #1a1a1a;\n  --ion-color-light-tint: #343434;\n  --ion-text-color: #fff;\n  --ion-item-background: var(--ion-color-light);\n}\nhr {\n  background-color: var(--ion-color-step-550, #737373);\n}\n.timeframe-card {\n  display: inline-block;\n  margin-bottom: 0;\n  box-shadow: 0 0 15px rgba(0, 0, 0, 0.1);\n}\n.user-email {\n  font-size: 14pt;\n}\n.subtitle-labels {\n  font-size: 12pt;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uL3RoZW1lL3ZhcmlhYmxlcy5zY3NzIiwibWFuYWdlLXByb2plY3QucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUdBLDBCQUFBO0FBRUE7RUFDRSxxQ0FBQTtBQ0hGO0FETUE7RUFDRSwyQ0FBQTtBQ0pGO0FET0E7OztDQUFBO0FBS0E7RUFDRSw0QkFBQTtFQUNBLG1DQUFBO0VBQ0EscUNBQUE7RUFDQSw2Q0FBQTtFQUNBLGtDQUFBO0VBQ0EsaUNBQUE7RUFFQSw4QkFBQTtFQUNBLG9DQUFBO0VBQ0EsdUNBQUE7RUFDQSwrQ0FBQTtFQUNBLG9DQUFBO0VBQ0EsbUNBQUE7RUFFQSw2QkFBQTtFQUNBLG9DQUFBO0VBQ0Esc0NBQUE7RUFDQSw4Q0FBQTtFQUNBLG1DQUFBO0VBQ0Esa0NBQUE7RUFFQSw0QkFBQTtFQUNBLG1DQUFBO0VBQ0EscUNBQUE7RUFDQSx1Q0FBQTtFQUNBLGtDQUFBO0VBQ0EsaUNBQUE7RUFFQSw0QkFBQTtFQUNBLG1DQUFBO0VBQ0Esa0NBQUE7RUFDQSw2Q0FBQTtFQUNBLGtDQUFBO0VBQ0EsaUNBQUE7RUFFQSwyQkFBQTtFQUNBLGlDQUFBO0VBQ0Esb0NBQUE7RUFDQSw0Q0FBQTtFQUNBLGlDQUFBO0VBQ0EsZ0NBQUE7RUFFQSwyQkFBQTtFQUNBLG1DQUFBO0VBQ0Esb0NBQUE7RUFDQSxzQ0FBQTtFQUNBLGlDQUFBO0VBQ0EsZ0NBQUE7RUFFQSwwQkFBQTtFQUNBLGtDQUFBO0VBQ0EsbUNBQUE7RUFDQSxxQ0FBQTtFQUNBLGdDQUFBO0VBQ0EsK0JBQUE7RUFFQSx5QkFBQTtFQUNBLDZDQUFBO0FDYkY7QURnQkE7OztDQUFBO0FBS0E7RUFDRSw0QkFBQTtFQUNBLG1DQUFBO0VBQ0EscUNBQUE7RUFDQSw2Q0FBQTtFQUNBLGtDQUFBO0VBQ0EsaUNBQUE7RUFFQSw4QkFBQTtFQUNBLG9DQUFBO0VBQ0EsdUNBQUE7RUFDQSwrQ0FBQTtFQUNBLG9DQUFBO0VBQ0EsbUNBQUE7RUFFQSw2QkFBQTtFQUNBLG9DQUFBO0VBQ0Esc0NBQUE7RUFDQSw4Q0FBQTtFQUNBLG1DQUFBO0VBQ0Esa0NBQUE7RUFFQSw0QkFBQTtFQUNBLG1DQUFBO0VBQ0EscUNBQUE7RUFDQSx1Q0FBQTtFQUNBLGtDQUFBO0VBQ0EsaUNBQUE7RUFFQSw0QkFBQTtFQUNBLG1DQUFBO0VBQ0Esa0NBQUE7RUFDQSw2Q0FBQTtFQUNBLGtDQUFBO0VBQ0EsaUNBQUE7RUFFQSwyQkFBQTtFQUNBLGlDQUFBO0VBQ0Esb0NBQUE7RUFDQSw0Q0FBQTtFQUNBLGlDQUFBO0VBQ0EsZ0NBQUE7RUFFQSwyQkFBQTtFQUNBLGdDQUFBO0VBQ0Esb0NBQUE7RUFDQSw0Q0FBQTtFQUNBLGlDQUFBO0VBQ0EsZ0NBQUE7RUFFQSwwQkFBQTtFQUNBLCtCQUFBO0VBQ0EsbUNBQUE7RUFDQSwyQ0FBQTtFQUNBLGdDQUFBO0VBQ0EsK0JBQUE7RUFFQSxzQkFBQTtFQUNBLDZDQUFBO0FDdEJGO0FBdEhBO0VBQ0Usb0RBQUE7QUF5SEY7QUF0SEE7RUFDRSxxQkFBQTtFQUNBLGdCQUFBO0VBQ0EsdUNBQUE7QUF5SEY7QUF0SEE7RUFDRSxlQUFBO0FBeUhGO0FBdkhBO0VBQ0UsZUFBQTtBQTBIRiIsImZpbGUiOiJtYW5hZ2UtcHJvamVjdC5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIvLyBJb25pYyBWYXJpYWJsZXMgYW5kIFRoZW1pbmcuIEZvciBtb3JlIGluZm8sIHBsZWFzZSBzZWU6XG4vLyBodHRwOi8vaW9uaWNmcmFtZXdvcmsuY29tL2RvY3MvdGhlbWluZy9cblxuLyoqIElvbmljIENTUyBWYXJpYWJsZXMgKiovXG5cbkBmb250LWZhY2Uge1xuICBmb250LWZhbWlseTogJ01vbnRzZXJyYXQnLCBzYW5zLXNlcmlmO1xufVxuXG46cm9vdCB7XG4gIC0taW9uLWZvbnQtZmFtaWx5OiAnTW9udHNlcnJhdCcsIHNhbnMtc2VyaWY7XG59XG5cbi8qXG4qIExpZ2h0IENvbG9yc1xuKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4qL1xuXG46cm9vdCB7XG4gIC0taW9uLWNvbG9yLXByaW1hcnk6ICM2NDExRDk7XG4gIC0taW9uLWNvbG9yLXByaW1hcnktcmdiOiAxMDAsMTcsMjE3O1xuICAtLWlvbi1jb2xvci1wcmltYXJ5LWNvbnRyYXN0OiAjZmZmZmZmO1xuICAtLWlvbi1jb2xvci1wcmltYXJ5LWNvbnRyYXN0LXJnYjogMjU1LDI1NSwyNTU7XG4gIC0taW9uLWNvbG9yLXByaW1hcnktc2hhZGU6ICM1ODBmYmY7XG4gIC0taW9uLWNvbG9yLXByaW1hcnktdGludDogIzc0MjlkZDtcblxuICAtLWlvbi1jb2xvci1zZWNvbmRhcnk6ICM2MjJCRDk7XG4gIC0taW9uLWNvbG9yLXNlY29uZGFyeS1yZ2I6IDk4LDQzLDIxNztcbiAgLS1pb24tY29sb3Itc2Vjb25kYXJ5LWNvbnRyYXN0OiAjZmZmZmZmO1xuICAtLWlvbi1jb2xvci1zZWNvbmRhcnktY29udHJhc3QtcmdiOiAyNTUsMjU1LDI1NTtcbiAgLS1pb24tY29sb3Itc2Vjb25kYXJ5LXNoYWRlOiAjNTYyNmJmO1xuICAtLWlvbi1jb2xvci1zZWNvbmRhcnktdGludDogIzcyNDBkZDtcblxuICAtLWlvbi1jb2xvci10ZXJ0aWFyeTogIzc1MkJERjtcbiAgLS1pb24tY29sb3ItdGVydGlhcnktcmdiOiAxMTcsNDMsMjIzO1xuICAtLWlvbi1jb2xvci10ZXJ0aWFyeS1jb250cmFzdDogI2ZmZmZmZjtcbiAgLS1pb24tY29sb3ItdGVydGlhcnktY29udHJhc3QtcmdiOiAyNTUsMjU1LDI1NTtcbiAgLS1pb24tY29sb3ItdGVydGlhcnktc2hhZGU6ICM2NzI2YzQ7XG4gIC0taW9uLWNvbG9yLXRlcnRpYXJ5LXRpbnQ6ICM4MzQwZTI7XG5cbiAgLS1pb24tY29sb3Itc3VjY2VzczogIzMzY2M3MztcbiAgLS1pb24tY29sb3Itc3VjY2Vzcy1yZ2I6IDUxLDIwNCwxMTU7XG4gIC0taW9uLWNvbG9yLXN1Y2Nlc3MtY29udHJhc3Q6ICNmZmZmZmY7XG4gIC0taW9uLWNvbG9yLXN1Y2Nlc3MtY29udHJhc3QtcmdiOiAwLDAsMDtcbiAgLS1pb24tY29sb3Itc3VjY2Vzcy1zaGFkZTogIzJkYjQ2NTtcbiAgLS1pb24tY29sb3Itc3VjY2Vzcy10aW50OiAjNDdkMTgxO1xuXG4gIC0taW9uLWNvbG9yLXdhcm5pbmc6ICNmMmUyMzE7XG4gIC0taW9uLWNvbG9yLXdhcm5pbmctcmdiOiAyNDIsMjI2LDQ5O1xuICAtLWlvbi1jb2xvci13YXJuaW5nLWNvbnRyYXN0OiAjZmZmO1xuICAtLWlvbi1jb2xvci13YXJuaW5nLWNvbnRyYXN0LXJnYjogMjU1LDI1NSwyNTU7XG4gIC0taW9uLWNvbG9yLXdhcm5pbmctc2hhZGU6ICNkNWM3MmI7XG4gIC0taW9uLWNvbG9yLXdhcm5pbmctdGludDogI2YzZTU0NjtcblxuICAtLWlvbi1jb2xvci1kYW5nZXI6ICNlNTNlM2U7XG4gIC0taW9uLWNvbG9yLWRhbmdlci1yZ2I6IDIyOSw2Miw2MjtcbiAgLS1pb24tY29sb3ItZGFuZ2VyLWNvbnRyYXN0OiAjZmZmZmZmO1xuICAtLWlvbi1jb2xvci1kYW5nZXItY29udHJhc3QtcmdiOiAyNTUsMjU1LDI1NTtcbiAgLS1pb24tY29sb3ItZGFuZ2VyLXNoYWRlOiAjY2EzNzM3O1xuICAtLWlvbi1jb2xvci1kYW5nZXItdGludDogI2U4NTE1MTtcblxuICAtLWlvbi1jb2xvci1tZWRpdW06ICNmY2ZhZmY7XG4gIC0taW9uLWNvbG9yLW1lZGl1bS1yZ2I6IDI1MiwyNTAsMjU1O1xuICAtLWlvbi1jb2xvci1tZWRpdW0tY29udHJhc3Q6ICMwMDAwMDA7XG4gIC0taW9uLWNvbG9yLW1lZGl1bS1jb250cmFzdC1yZ2I6IDAsMCwwO1xuICAtLWlvbi1jb2xvci1tZWRpdW0tc2hhZGU6ICNkZWRjZTA7XG4gIC0taW9uLWNvbG9yLW1lZGl1bS10aW50OiAjZmNmYmZmO1xuXG4gIC0taW9uLWNvbG9yLWxpZ2h0OiAjRkZGRkZGO1xuICAtLWlvbi1jb2xvci1saWdodC1yZ2I6IDI1NSwyNTUsMjU1O1xuICAtLWlvbi1jb2xvci1saWdodC1jb250cmFzdDogIzFhMWExYTtcbiAgLS1pb24tY29sb3ItbGlnaHQtY29udHJhc3QtcmdiOiAwLDAsMDtcbiAgLS1pb24tY29sb3ItbGlnaHQtc2hhZGU6ICNlMGUwZTA7XG4gIC0taW9uLWNvbG9yLWxpZ2h0LXRpbnQ6ICNmZmZmZmY7XG5cbiAgLS1pb24tdGV4dC1jb2xvcjogIzFjMWMxYztcbiAgLS1pb24taXRlbS1iYWNrZ3JvdW5kOiB2YXIoLS1pb24tY29sb3ItbGlnaHQpO1xufVxuXG4vKlxuKiBEYXJrIENvbG9yc1xuKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4qL1xuXG5ib2R5LmRhcmsge1xuICAtLWlvbi1jb2xvci1wcmltYXJ5OiAjNzkyNGYwO1xuICAtLWlvbi1jb2xvci1wcmltYXJ5LXJnYjogMTIxLDM2LDI0MDtcbiAgLS1pb24tY29sb3ItcHJpbWFyeS1jb250cmFzdDogI2ZmZmZmZjtcbiAgLS1pb24tY29sb3ItcHJpbWFyeS1jb250cmFzdC1yZ2I6IDI1NSwyNTUsMjU1O1xuICAtLWlvbi1jb2xvci1wcmltYXJ5LXNoYWRlOiAjNmEyMGQzO1xuICAtLWlvbi1jb2xvci1wcmltYXJ5LXRpbnQ6ICM4NjNhZjI7XG5cbiAgLS1pb24tY29sb3Itc2Vjb25kYXJ5OiAjNjIyQkQ5O1xuICAtLWlvbi1jb2xvci1zZWNvbmRhcnktcmdiOiA5OCw0MywyMTc7XG4gIC0taW9uLWNvbG9yLXNlY29uZGFyeS1jb250cmFzdDogI2ZmZmZmZjtcbiAgLS1pb24tY29sb3Itc2Vjb25kYXJ5LWNvbnRyYXN0LXJnYjogMjU1LDI1NSwyNTU7XG4gIC0taW9uLWNvbG9yLXNlY29uZGFyeS1zaGFkZTogIzU2MjZiZjtcbiAgLS1pb24tY29sb3Itc2Vjb25kYXJ5LXRpbnQ6ICM3MjQwZGQ7XG5cbiAgLS1pb24tY29sb3ItdGVydGlhcnk6ICM3NTJCREY7XG4gIC0taW9uLWNvbG9yLXRlcnRpYXJ5LXJnYjogMTE3LDQzLDIyMztcbiAgLS1pb24tY29sb3ItdGVydGlhcnktY29udHJhc3Q6ICNmZmZmZmY7XG4gIC0taW9uLWNvbG9yLXRlcnRpYXJ5LWNvbnRyYXN0LXJnYjogMjU1LDI1NSwyNTU7XG4gIC0taW9uLWNvbG9yLXRlcnRpYXJ5LXNoYWRlOiAjNjcyNmM0O1xuICAtLWlvbi1jb2xvci10ZXJ0aWFyeS10aW50OiAjODM0MGUyO1xuXG4gIC0taW9uLWNvbG9yLXN1Y2Nlc3M6ICMzM2NjNzM7XG4gIC0taW9uLWNvbG9yLXN1Y2Nlc3MtcmdiOiA1MSwyMDQsMTE1O1xuICAtLWlvbi1jb2xvci1zdWNjZXNzLWNvbnRyYXN0OiAjZmZmZmZmO1xuICAtLWlvbi1jb2xvci1zdWNjZXNzLWNvbnRyYXN0LXJnYjogMCwwLDA7XG4gIC0taW9uLWNvbG9yLXN1Y2Nlc3Mtc2hhZGU6ICMyZGI0NjU7XG4gIC0taW9uLWNvbG9yLXN1Y2Nlc3MtdGludDogIzQ3ZDE4MTtcblxuICAtLWlvbi1jb2xvci13YXJuaW5nOiAjZjJlMjMxO1xuICAtLWlvbi1jb2xvci13YXJuaW5nLXJnYjogMjQyLDIyNiw0OTtcbiAgLS1pb24tY29sb3Itd2FybmluZy1jb250cmFzdDogI2ZmZjtcbiAgLS1pb24tY29sb3Itd2FybmluZy1jb250cmFzdC1yZ2I6IDI1NSwyNTUsMjU1O1xuICAtLWlvbi1jb2xvci13YXJuaW5nLXNoYWRlOiAjZDVjNzJiO1xuICAtLWlvbi1jb2xvci13YXJuaW5nLXRpbnQ6ICNmM2U1NDY7XG5cbiAgLS1pb24tY29sb3ItZGFuZ2VyOiAjZTUzZTNlO1xuICAtLWlvbi1jb2xvci1kYW5nZXItcmdiOiAyMjksNjIsNjI7XG4gIC0taW9uLWNvbG9yLWRhbmdlci1jb250cmFzdDogI2ZmZmZmZjtcbiAgLS1pb24tY29sb3ItZGFuZ2VyLWNvbnRyYXN0LXJnYjogMjU1LDI1NSwyNTU7XG4gIC0taW9uLWNvbG9yLWRhbmdlci1zaGFkZTogI2NhMzczNztcbiAgLS1pb24tY29sb3ItZGFuZ2VyLXRpbnQ6ICNlODUxNTE7XG5cbiAgLS1pb24tY29sb3ItbWVkaXVtOiAjMTIxMjEyO1xuICAtLWlvbi1jb2xvci1tZWRpdW0tcmdiOiAxOCwxOCwxODtcbiAgLS1pb24tY29sb3ItbWVkaXVtLWNvbnRyYXN0OiAjZmZmZmZmO1xuICAtLWlvbi1jb2xvci1tZWRpdW0tY29udHJhc3QtcmdiOiAyNTUsMjU1LDI1NTtcbiAgLS1pb24tY29sb3ItbWVkaXVtLXNoYWRlOiAjMTAxMDEwO1xuICAtLWlvbi1jb2xvci1tZWRpdW0tdGludDogIzJhMmEyYTtcblxuICAtLWlvbi1jb2xvci1saWdodDogIzFkMWQxZDtcbiAgLS1pb24tY29sb3ItbGlnaHQtcmdiOiAyOSwyOSwyOTtcbiAgLS1pb24tY29sb3ItbGlnaHQtY29udHJhc3Q6ICNmZmZmZmY7XG4gIC0taW9uLWNvbG9yLWxpZ2h0LWNvbnRyYXN0LXJnYjogMjU1LDI1NSwyNTU7XG4gIC0taW9uLWNvbG9yLWxpZ2h0LXNoYWRlOiAjMWExYTFhO1xuICAtLWlvbi1jb2xvci1saWdodC10aW50OiAjMzQzNDM0O1xuXG4gIC0taW9uLXRleHQtY29sb3I6ICNmZmY7XG4gIC0taW9uLWl0ZW0tYmFja2dyb3VuZDogdmFyKC0taW9uLWNvbG9yLWxpZ2h0KTtcbn1cbiIsIkBpbXBvcnQgXCIuLi8uLi8uLi8uLi8uLi90aGVtZS92YXJpYWJsZXMuc2Nzc1wiO1xuXG5ociB7XG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWlvbi1jb2xvci1zdGVwLTU1MCwgIzczNzM3Myk7XG59XG5cbi50aW1lZnJhbWUtY2FyZCB7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgbWFyZ2luLWJvdHRvbTogMDtcbiAgYm94LXNoYWRvdzogMCAwIDE1cHggcmdiKDAgMCAwIC8gMTAlKTtcbn1cblxuLnVzZXItZW1haWwge1xuICBmb250LXNpemU6IDE0cHQ7XG59XG4uc3VidGl0bGUtbGFiZWxzIHtcbiAgZm9udC1zaXplOiAxMnB0O1xufVxuXG4iXX0= */";

/***/ })

}]);
//# sourceMappingURL=src_app_pages_actions_project_manage-project_manage-project_module_ts.js.map