"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_pages_actions_project_create-project_create-project_module_ts"],{

/***/ 64226:
/*!*****************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/@angular-devkit/build-angular/node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./src/app/pages/actions/project/create-project/create-project.page.html ***!
  \*****************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<ion-content>\n  <app-toolbar></app-toolbar>\n  <ion-grid>\n    <ion-row>\n      <ion-col>\n        <app-card-title-bar title=\"{{ 'ACTIONS.CREATE_PROJECT.title' | translate }}\"></app-card-title-bar>\n        <ion-card color=\"light\">\n          <ion-card-content>\n            <ion-grid class=\"inside-card-grid\">\n              <ion-row>\n                <ion-col>\n                  <form [formGroup]=\"createProjectForm\" (ngSubmit)=\"createProject()\">\n                    <ion-item color=\"light\">\n                      <ion-label>{{ 'ACTIONS.CREATE_PROJECT.INPUT.topic' | translate }}</ion-label>\n                      <ion-select placeholder=\"{{ 'ACTIONS.CREATE_PROJECT.topicPlaceholder' | translate }}\" formControlName=\"topic\" okText=\"{{ 'GENERAL.POPUPS.ok' | translate }}\" cancelText=\"{{ 'GENERAL.POPUPS.cancel' | translate }}\">\n                        <ion-select-option *ngFor=\"let topic of ('GENERAL.PROJECT_TOPICS' | translate) | keyvalue\" value=\"{{ topic.key }}\">{{ topic.value }}</ion-select-option>\n                      </ion-select>\n                    </ion-item>\n\n                    <ion-item color=\"light\">\n                      <ion-input formControlName=\"title\" type=\"text\" placeholder=\"{{ 'ACTIONS.CREATE_PROJECT.INPUT.title' | translate }}\"></ion-input>\n                    </ion-item>\n                    <app-form-error [errors]=\"errorControl.title.errors\"></app-form-error>\n\n                    <ion-item color=\"light\">\n                      <ion-textarea formControlName=\"description\" type=\"text\" rows=\"7\" placeholder=\"{{ 'ACTIONS.CREATE_PROJECT.INPUT.description' | translate }}\"></ion-textarea>\n                    </ion-item>\n                    <app-form-error [errors]=\"errorControl.description.errors\"></app-form-error>\n\n                    <ion-item color=\"light\">\n                      <ion-label position=\"floating\">{{ 'ACTIONS.CREATE_PROJECT.INPUT.cost' | translate }}</ion-label>\n                      <ion-input formControlName=\"cost\" type=\"text\"></ion-input>\n                    </ion-item>\n                    <app-form-error [errors]=\"errorControl.cost.errors\"></app-form-error>\n\n                    <ion-list>\n                      <ion-item lines=\"none\" color=\"light\">\n                        <ion-label>{{ 'ACTIONS.CREATE_PROJECT.INPUT.image' | translate }}</ion-label>\n                      </ion-item>\n                      <ion-item color=\"light\">\n                        <ion-input (change)=\"changeFile($event)\" formControlName=\"image\" accept=\".png, .jpg\" type=\"file\"></ion-input>\n                      </ion-item>\n                      <app-form-error [errors]=\"errorControl.image.errors\"></app-form-error>\n                    </ion-list>\n\n                    <ion-list>\n                      <ion-item lines=\"none\" color=\"light\">\n                        <ion-label>{{ 'ACTIONS.CREATE_PROJECT.INPUT.timeframe' | translate }}</ion-label>\n                      </ion-item>\n                      <div class=\"addTimeframeCards\">\n                        <ion-grid class=\"inside-card-grid\">\n                          <ion-row>\n                            <ng-container *ngFor=\"let timeframe of timeframes\">\n                              <ion-col sizeXl=\"6\" sizeLg=\"6\" sizeMd=\"12\" sizeSm=\"12\" sizeXs=\"12\">\n                                <ion-card color=\"light\">\n                                  <ion-card-content>\n                                    <ion-datetime minuteValues=\"0,5,10,15,20,25,30,35,40,45,50,55\" color=\"primary\" [hourCycle]=\"( 'GENERAL.hourCycle' | translate )\" [locale]=\"( 'GENERAL.locale' | translate )\" [(ngModel)]=\"timeframe.from\" [ngModelOptions]=\"{standalone: true}\" doneText=\"{{ 'GENERAL.POPUPS.done' | translate }}\" cancelText=\"{{ 'GENERAL.POPUPS.cancel' | translate }}\"></ion-datetime>\n\n                                    <ion-datetime minuteValues=\"0,5,10,15,20,25,30,35,40,45,50,55\" color=\"primary\" [hourCycle]=\"( 'GENERAL.hourCycle' | translate )\" [locale]=\"( 'GENERAL.locale' | translate )\" [(ngModel)]=\"timeframe.until\" [ngModelOptions]=\"{standalone: true}\" doneText=\"{{ 'GENERAL.POPUPS.done' | translate }}\" cancelText=\"{{ 'GENERAL.POPUPS.cancel' | translate }}\"></ion-datetime>\n                                  </ion-card-content>\n\n                                  <div class=\"ion-padding\">\n                                    <ion-button color=\"danger\" (click)=\"deleteTimeframe(timeframe)\" expand=\"block\" class=\"ion-no-margin\">delete</ion-button>\n                                  </div>\n                                </ion-card>\n                              </ion-col>\n                            </ng-container>\n                            <ion-col>\n                              <ion-card color=\"light\">\n                                <div>\n                                  <ion-fab horizontal=\"center\" vertical=\"center\" slot=\"fixed\">\n                                  <ion-fab-button color=\"light\" (click)=\"addTimeframe()\">\n                                    <ion-icon name=\"add\"></ion-icon>\n                                  </ion-fab-button>\n                                </ion-fab>\n                                </div>\n                              </ion-card>\n                            </ion-col>\n                          </ion-row>\n                        </ion-grid>\n                      </div>\n                      <br><hr>\n                    </ion-list>\n\n                    <ion-list>\n                      <ion-item lines=\"none\" color=\"light\">\n                        <ion-label>{{ 'ACTIONS.CREATE_PROJECT.INPUT.grade' | translate }}</ion-label>\n                      </ion-item>\n                      <ion-item color=\"light\">\n                        <ion-label>{{ 'ACTIONS.CREATE_PROJECT.INPUT.from' | translate }}</ion-label>\n                        <ion-input formControlName=\"min_grade\" type=\"text\"></ion-input>\n                      </ion-item>\n                      <app-form-error [errors]=\"errorControl.min_grade.errors\"></app-form-error>\n\n                      <ion-item color=\"light\">\n                        <ion-label>{{ 'ACTIONS.CREATE_PROJECT.INPUT.until' | translate }}</ion-label>\n                        <ion-input formControlName=\"max_grade\" type=\"text\"></ion-input>\n                      </ion-item>\n                      <app-form-error [errors]=\"errorControl.max_grade.errors\"></app-form-error>\n                    </ion-list>\n\n                    <ion-list>\n                      <ion-item lines=\"none\" color=\"light\">\n                        <ion-label>{{ 'ACTIONS.CREATE_PROJECT.INPUT.capacity' | translate }}</ion-label>\n                      </ion-item>\n                      <ion-item color=\"light\">\n                        <ion-label>{{ 'ACTIONS.CREATE_PROJECT.INPUT.from' | translate }}</ion-label><ion-input formControlName=\"min_participants\" type=\"number\"></ion-input>\n                      </ion-item>\n                      <app-form-error [errors]=\"errorControl.min_participants.errors\"></app-form-error>\n                      <ion-item color=\"light\">\n                        <ion-label>{{ 'ACTIONS.CREATE_PROJECT.INPUT.until' | translate }}</ion-label><ion-input formControlName=\"max_participants\" type=\"number\"></ion-input>\n                      </ion-item>\n                      <app-form-error [errors]=\"errorControl.max_participants.errors\"></app-form-error>\n                    </ion-list>\n                    <div class=\"ion-padding\">\n                      <ion-button color=\"primary\" [disabled]=\"createProjectForm.invalid\" expand=\"block\" type=\"submit\" class=\"ion-no-margin\">{{ 'ACTIONS.CREATE_PROJECT.INPUT.submitButton' | translate }}</ion-button>\n                    </div>\n                  </form>\n                </ion-col>\n              </ion-row>\n            </ion-grid>\n          </ion-card-content>\n        </ion-card>\n      </ion-col>\n    </ion-row>\n  </ion-grid>\n</ion-content>\n");

/***/ }),

/***/ 41177:
/*!***************************************************************************************!*\
  !*** ./src/app/pages/actions/project/create-project/create-project-routing.module.ts ***!
  \***************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CreateProjectPageRoutingModule": () => (/* binding */ CreateProjectPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 21838);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 789);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 9538);
/* harmony import */ var _create_project_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./create-project.page */ 35665);




const routes = [
    {
        path: '',
        component: _create_project_page__WEBPACK_IMPORTED_MODULE_0__.CreateProjectPage
    }
];
let CreateProjectPageRoutingModule = class CreateProjectPageRoutingModule {
};
CreateProjectPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], CreateProjectPageRoutingModule);



/***/ }),

/***/ 3037:
/*!*******************************************************************************!*\
  !*** ./src/app/pages/actions/project/create-project/create-project.module.ts ***!
  \*******************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CreateProjectPageModule": () => (/* binding */ CreateProjectPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! tslib */ 21838);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 789);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ 2006);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/forms */ 43459);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/common/http */ 45331);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ionic/angular */ 30585);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @ngx-translate/core */ 52784);
/* harmony import */ var _create_project_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./create-project-routing.module */ 41177);
/* harmony import */ var _components_components_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../components/components.module */ 96453);
/* harmony import */ var _create_project_page__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./create-project.page */ 35665);
/* harmony import */ var src_app_app_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/app.module */ 92014);











let CreateProjectPageModule = class CreateProjectPageModule {
};
CreateProjectPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_5__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_6__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_7__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_8__.IonicModule,
            _create_project_routing_module__WEBPACK_IMPORTED_MODULE_0__.CreateProjectPageRoutingModule,
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
        declarations: [_create_project_page__WEBPACK_IMPORTED_MODULE_2__.CreateProjectPage]
    })
], CreateProjectPageModule);



/***/ }),

/***/ 35665:
/*!*****************************************************************************!*\
  !*** ./src/app/pages/actions/project/create-project/create-project.page.ts ***!
  \*****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CreateProjectPage": () => (/* binding */ CreateProjectPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! tslib */ 21838);
/* harmony import */ var _home_vagrant_projects_Vnint_node_modules_angular_devkit_build_angular_node_modules_ngtools_webpack_src_loaders_direct_resource_js_create_project_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !./node_modules/@angular-devkit/build-angular/node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./create-project.page.html */ 64226);
/* harmony import */ var _create_project_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./create-project.page.scss */ 85046);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/core */ 789);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ 43459);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/router */ 9538);
/* harmony import */ var src_app_services_project_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/project.service */ 81856);
/* harmony import */ var src_app_services_timeframe_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/timeframe.service */ 39290);
/* harmony import */ var src_app_services_error_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/services/error.service */ 55729);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ngx-translate/core */ 52784);
/* harmony import */ var _services_alert_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../services/alert.service */ 92677);











let CreateProjectPage = class CreateProjectPage {
    constructor(formBuilder, projectService, router, timeframeService, errorService, translate, alertService) {
        this.formBuilder = formBuilder;
        this.projectService = projectService;
        this.router = router;
        this.timeframeService = timeframeService;
        this.errorService = errorService;
        this.translate = translate;
        this.alertService = alertService;
        this.timeframes = [];
        this.isProcessed = false;
    }
    ngOnInit() {
        this.createProjectForm = this.formBuilder.group({
            topic: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_6__.Validators.required],
            title: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_6__.Validators.required],
            image: null,
            description: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_6__.Validators.required],
            cost: [0, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.Validators.required],
            min_grade: [5, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.Validators.required],
            max_grade: [12, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.Validators.required],
            min_participants: [5, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.Validators.required],
            max_participants: [20, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.Validators.required],
        });
    }
    ionViewWillEnter() {
        this.isProcessed = false;
    }
    get errorControl() {
        return this.createProjectForm.controls;
    }
    changeFile(event) {
        const file = event.target.files[0];
        if (file) {
            this.createProjectForm.patchValue({
                image: file
            });
        }
    }
    createProject() {
        if (!this.isProcessed && this.createProjectForm.valid) {
            this.isProcessed = true;
            this.projectService.createProject(this.createProjectForm.value).subscribe({
                error: error => {
                    if (error.error.message == 'The given data was invalid.') {
                        for (const errorType in error.error.errors) {
                            let errors = [];
                            for (const errorMessage in error.error.errors[errorType]) {
                                errors.push({ [error.error.errors[errorType][errorMessage]]: true });
                            }
                            this.createProjectForm.controls[errorType].setErrors(errors);
                        }
                    }
                    else if (error.error.message == 'alreadyHasProject') {
                        this.alertService.alert("danger", this.translate.instant('ACTIONS.CREATE_PROJECT.title'), this.translate.instant('ACTIONS.CREATE_PROJECT.ERRORS.alreadyHasProject'), 'close');
                    }
                    else if (error.status == 413) {
                        this.alertService.alert("danger", this.translate.instant('ACTIONS.CREATE_PROJECT.title'), this.translate.instant('ACTIONS.CREATE_PROJECT.ERRORS.uploadTooLarge'), 'cloud-upload');
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
                    this.alertService.alert("success", this.translate.instant('ACTIONS.CREATE_PROJECT.title'), resp.message, "checkmark");
                },
                complete: () => {
                    this.timeframes.forEach(timeframe => {
                        this.timeframeService.createTimeframe(timeframe).subscribe({
                            error: error => {
                                this.errorService.errorOccurred.emit(error);
                            }
                        });
                    });
                    this.createProjectForm.reset();
                    this.isProcessed = false;
                    this.router.navigate(['/dashboard']);
                },
            });
        }
    }
    addTimeframe() {
        this.timeframes.push({ from: null, until: null });
    }
    deleteTimeframe(timeframe) {
        this.timeframes = this.timeframes.filter(function (loop_timeframe) { return loop_timeframe != timeframe; });
    }
};
CreateProjectPage.ctorParameters = () => [
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormBuilder },
    { type: src_app_services_project_service__WEBPACK_IMPORTED_MODULE_2__.ProjectService },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_7__.Router },
    { type: src_app_services_timeframe_service__WEBPACK_IMPORTED_MODULE_3__.TimeframeService },
    { type: src_app_services_error_service__WEBPACK_IMPORTED_MODULE_4__.ErrorService },
    { type: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_8__.TranslateService },
    { type: _services_alert_service__WEBPACK_IMPORTED_MODULE_5__.AlertService }
];
CreateProjectPage = (0,tslib__WEBPACK_IMPORTED_MODULE_9__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_10__.Component)({
        selector: 'app-create-project',
        template: _home_vagrant_projects_Vnint_node_modules_angular_devkit_build_angular_node_modules_ngtools_webpack_src_loaders_direct_resource_js_create_project_page_html__WEBPACK_IMPORTED_MODULE_0__["default"],
        styles: [_create_project_page_scss__WEBPACK_IMPORTED_MODULE_1__]
    })
], CreateProjectPage);



/***/ }),

/***/ 85046:
/*!*******************************************************************************!*\
  !*** ./src/app/pages/actions/project/create-project/create-project.page.scss ***!
  \*******************************************************************************/
/***/ ((module) => {

module.exports = ".addTimeframeCards ion-card {\n  height: 100%;\n  min-height: 100px;\n}\n\nhr {\n  background-color: #dedede;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNyZWF0ZS1wcm9qZWN0LnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFDRTtFQUNFLFlBQUE7RUFDQSxpQkFBQTtBQUFKOztBQUlBO0VBQ0UseUJBQUE7QUFERiIsImZpbGUiOiJjcmVhdGUtcHJvamVjdC5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuYWRkVGltZWZyYW1lQ2FyZHMge1xuICBpb24tY2FyZCB7XG4gICAgaGVpZ2h0OiAxMDAlO1xuICAgIG1pbi1oZWlnaHQ6IDEwMHB4O1xuICB9XG59XG5cbmhyIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2RlZGVkZTtcbn1cbiJdfQ== */";

/***/ })

}]);
//# sourceMappingURL=src_app_pages_actions_project_create-project_create-project_module_ts.js.map