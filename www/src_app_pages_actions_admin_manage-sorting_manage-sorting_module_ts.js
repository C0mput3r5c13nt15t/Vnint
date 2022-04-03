"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_pages_actions_admin_manage-sorting_manage-sorting_module_ts"],{

/***/ 89297:
/*!***************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/@angular-devkit/build-angular/node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./src/app/pages/actions/admin/manage-sorting/manage-sorting.page.html ***!
  \***************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<ion-content>\n  <app-toolbar></app-toolbar>\n  <ion-grid>\n    <ion-row>\n      <ion-col>\n        <app-card-title-bar title=\"{{ 'ACTIONS.MANAGE_SORTING.title' | translate }}\"></app-card-title-bar>\n        <ion-card color=\"light\">\n          <ion-card-content>\n            <ion-grid class=\"inside-card-grid\">\n              <ion-row>\n                <ion-col>\n                  <ion-reorder-group (ionItemReorder)=\"reorderProjects($event)\" *ngIf=\"projects.length > 0\" disabled=\"false\">\n                      <ion-card *ngFor=\"let project of projects\" color=\"light\">\n                        <ion-card-header>\n                          <ion-card-title>\n                            {{ project.id }} - {{ project.title }} <ion-reorder style=\"position:absolute; top: 0; right: 0;\"><ion-icon name=\"move\"></ion-icon></ion-reorder>\n                          </ion-card-title>\n                          <ion-card-subtitle>\n                            <ion-label class=\"subtitle-labels\">{{ 'ACTIONS.VIEW_PROJECTS.by' | translate }} </ion-label>\n                            <ion-label class=\"subtitle-labels\" color=\"primary\"><b>{{ project.leader.email }}</b></ion-label><br>\n                            <ion-label class=\"subtitle-labels\">{{ 'ACTIONS.VIEW_PROJECT.grade' | translate }} </ion-label><ion-label><b>{{ project.min_grade }}</b></ion-label><b>-</b><ion-label><b>{{ project.max_grade }}</b></ion-label>\n                          </ion-card-subtitle>\n                          <ion-card-subtitle>\n                            <ion-badge color=\"danger\" *ngIf=\"!project.authorized\"><ion-label class=\"white-font\">{{ 'ACTIONS.VIEW_PROJECTS.unauthorized' | translate }}</ion-label></ion-badge>\n                            <ion-badge color=\"success\" *ngIf=\"project.authorized\"><ion-label class=\"white-font\">{{ 'ACTIONS.VIEW_PROJECTS.authorized' | translate }}</ion-label></ion-badge>\n\n                            <ion-badge color=\"danger\" *ngIf=\"project.participants.length > project.max_participants\"><ion-label class=\"white-font\">{{ project.participants.length - project.max_participants }} {{ 'ACTIONS.MANAGE_SORTING.tooMany' | translate }}</ion-label></ion-badge>\n                            <ion-badge color=\"danger\" *ngIf=\"project.participants.length < project.min_participants\"><ion-label class=\"white-font\">{{ project.min_participants - project.participants.length }} {{ 'ACTIONS.MANAGE_SORTING.tooFew' | translate }}</ion-label></ion-badge>\n                            <ion-badge color=\"success\" *ngIf=\"project.participants.length <= project.max_participants && project.participants.length >= project.min_participants\"><ion-label class=\"white-font\">{{ 'ACTIONS.MANAGE_SORTING.exact' | translate }}</ion-label></ion-badge>\n                          </ion-card-subtitle>\n                        </ion-card-header>\n                        <ion-card-content>\n                          <ng-container *ngIf=\"project.leader\">\n                            <ion-item color=\"light\" lines=\"none\">\n                              <ion-label>{{ project.leader.email }}</ion-label>\n                              <ion-icon size=\"small\" name=\"star\" slot=\"end\" color=\"warning\"></ion-icon>\n                            </ion-item>\n                          </ng-container>\n                          <ng-container *ngIf=\"project.assistants.length > 0\">\n                            <ion-item *ngFor=\"let assistant of project.assistants\" color=\"light\" lines=\"none\">\n                              <ion-label>{{ assistant.email }}</ion-label>\n                              <ion-icon size=\"small\" name=\"star\" slot=\"end\" color=\"warning\"></ion-icon>\n                            </ion-item>\n                          </ng-container>\n                          <ng-container *ngIf=\"project.participants.length > 0\">\n                            <ion-item *ngFor=\"let participant of project.participants\" color=\"light\" lines=\"none\">\n                              <ion-label>{{ participant.email }}</ion-label>\n                              <ion-badge [color]=\"participant.grade_level.grade_level >= project.min_grade && participant.grade_level.grade_level <= project.max_grade ? 'success' : 'danger'\"><ion-label class=\"white-font\">{{ participant.grade_level.grade_level }}{{ 'ACTIONS.MANAGE_SORTING.nthGrade' | translate }}</ion-label></ion-badge>\n                              <ng-container *ngFor=\"let preference of participant.preferences\">\n                                <ion-badge [color]=\"preference.project_id == project.id ? 'success' : 'danger'\"><ion-label class=\"white-font\">{{ preference.project_id }}</ion-label></ion-badge>\n                              </ng-container>\n                              <ion-select (ionChange)=\"moveUser(participant, $event.detail.value)\" interface=\"popover\">\n                                <ion-select-option [value]=\"project.id\" *ngFor=\"let project of projects\">{{ project.id }} - {{ project.title }}</ion-select-option>\n                                <ion-select-option value=\"0\">{{ 'ACTIONS.MANAGE_SORTING.removeFromProject' | translate }}</ion-select-option>\n                              </ion-select>\n                            </ion-item>\n                          </ng-container>\n                        </ion-card-content>\n                      </ion-card>\n                  </ion-reorder-group>\n                </ion-col>\n              </ion-row>\n            </ion-grid>\n          </ion-card-content>\n        </ion-card>\n      </ion-col>\n    </ion-row>\n    <ion-row>\n      <ion-col *ngIf=\"unsortedUsers.length > 0\">\n        <ion-card style=\"min-width: 600px\">\n          <ion-card-content>\n            <ion-grid class=\"inside-card-grid\">\n              <ion-row>\n                <ion-col>\n                  <ng-container>\n                    <ion-item *ngFor=\"let user of unsortedUsers\" color=\"light\" lines=\"none\">\n                      <ion-label>{{ user.email }}</ion-label>\n                      <ion-badge color=\"primary\"><ion-label class=\"white-font\">{{ user.grade_level.grade_level }}{{ 'ACTIONS.MANAGE_SORTING.nthGrade' | translate }}</ion-label></ion-badge>\n                      <ng-container *ngFor=\"let preference of user.preferences\">\n                        <ion-badge color=\"primary\"><ion-label class=\"white-font\">{{ preference.project_id }}</ion-label></ion-badge>\n                      </ng-container>\n                      <ion-select (ionChange)=\"moveUser(user, $event.detail.value)\" interface=\"popover\">\n                        <ion-select-option [value]=\"project.id\" *ngFor=\"let project of projects\">{{ project.id }} - {{ project.title }}</ion-select-option>\n                      </ion-select>\n                    </ion-item>\n                  </ng-container>\n                </ion-col>\n              </ion-row>\n            </ion-grid>\n          </ion-card-content>\n        </ion-card>\n      </ion-col>\n      <ion-col>\n        <ion-card color=\"light\">\n          <ion-card-content>\n            <ion-grid class=\"inside-card-grid\">\n              <ion-row>\n                <ion-col>\n                  <div class=\"ion-padding\">\n                    <ion-button *ngIf=\"isProcessed\" type=\"submit\" [disabled]=\"isProcessed\" class=\"ion-no-margin\" expand=\"block\" color=\"primary\"><ion-spinner name=\"crescent\"></ion-spinner></ion-button>\n                    <ion-button *ngIf=\"!isProcessed\" color=\"primary\" (click)=\"sortUsers()\" expand=\"block\" type=\"submit\" class=\"ion-no-margin\">{{ 'ACTIONS.MANAGE_SORTING.applySorting' | translate }}</ion-button>\n                  </div>\n                </ion-col>\n              </ion-row>\n            </ion-grid>\n          </ion-card-content>\n        </ion-card>\n      </ion-col>\n    </ion-row>\n  </ion-grid>\n</ion-content>\n\n");

/***/ }),

/***/ 76456:
/*!*************************************************************************************!*\
  !*** ./src/app/pages/actions/admin/manage-sorting/manage-sorting-routing.module.ts ***!
  \*************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ManageSortingPageRoutingModule": () => (/* binding */ ManageSortingPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 21838);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 789);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 9538);
/* harmony import */ var _manage_sorting_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./manage-sorting.page */ 49138);




const routes = [
    {
        path: '',
        component: _manage_sorting_page__WEBPACK_IMPORTED_MODULE_0__.ManageSortingPage
    }
];
let ManageSortingPageRoutingModule = class ManageSortingPageRoutingModule {
};
ManageSortingPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], ManageSortingPageRoutingModule);



/***/ }),

/***/ 23677:
/*!*****************************************************************************!*\
  !*** ./src/app/pages/actions/admin/manage-sorting/manage-sorting.module.ts ***!
  \*****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ManageSortingPageModule": () => (/* binding */ ManageSortingPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! tslib */ 21838);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 789);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ 2006);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/forms */ 43459);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ionic/angular */ 30585);
/* harmony import */ var _manage_sorting_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./manage-sorting-routing.module */ 76456);
/* harmony import */ var _manage_sorting_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./manage-sorting.page */ 49138);
/* harmony import */ var _components_components_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../components/components.module */ 96453);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @ngx-translate/core */ 52784);
/* harmony import */ var _app_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../app.module */ 92014);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/common/http */ 45331);











let ManageSortingPageModule = class ManageSortingPageModule {
};
ManageSortingPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_5__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_6__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_7__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_8__.IonicModule,
            _manage_sorting_routing_module__WEBPACK_IMPORTED_MODULE_0__.ManageSortingPageRoutingModule,
            _components_components_module__WEBPACK_IMPORTED_MODULE_2__.ComponentsModule,
            _ngx_translate_core__WEBPACK_IMPORTED_MODULE_9__.TranslateModule.forChild({
                loader: {
                    provide: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_9__.TranslateLoader,
                    useFactory: _app_module__WEBPACK_IMPORTED_MODULE_3__.createTranslateLoader,
                    deps: [_angular_common_http__WEBPACK_IMPORTED_MODULE_10__.HttpClient]
                }
            })
        ],
        declarations: [_manage_sorting_page__WEBPACK_IMPORTED_MODULE_1__.ManageSortingPage]
    })
], ManageSortingPageModule);



/***/ }),

/***/ 49138:
/*!***************************************************************************!*\
  !*** ./src/app/pages/actions/admin/manage-sorting/manage-sorting.page.ts ***!
  \***************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ManageSortingPage": () => (/* binding */ ManageSortingPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! tslib */ 21838);
/* harmony import */ var _home_vagrant_projects_Vnint_node_modules_angular_devkit_build_angular_node_modules_ngtools_webpack_src_loaders_direct_resource_js_manage_sorting_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !./node_modules/@angular-devkit/build-angular/node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./manage-sorting.page.html */ 89297);
/* harmony import */ var _manage_sorting_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./manage-sorting.page.scss */ 81413);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/core */ 789);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ngx-translate/core */ 52784);
/* harmony import */ var _services_user_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../services/user.service */ 88481);
/* harmony import */ var _services_error_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../services/error.service */ 55729);
/* harmony import */ var _services_project_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../services/project.service */ 81856);
/* harmony import */ var _services_alert_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../services/alert.service */ 92677);









let ManageSortingPage = class ManageSortingPage {
    constructor(translate, userService, errorService, projectService, alertService) {
        this.translate = translate;
        this.userService = userService;
        this.errorService = errorService;
        this.projectService = projectService;
        this.alertService = alertService;
        this.unsortedUsers = [];
        this.projects = [];
        this.isProcessed = false;
    }
    ngOnInit() {
        this.getUsers();
        this.getProjects();
    }
    getUsers() {
        this.userService.getUnsortedUsers().subscribe({
            error: error => {
                this.errorService.errorOccurred.emit(error);
            },
            next: response => {
                const resp = response;
                resp.users.forEach(user => {
                    user.role_names = user.roles.map(role => role.name);
                });
                this.unsortedUsers = resp.users;
            },
        });
    }
    getProjects() {
        this.projectService.getProjectsDetailed().subscribe({
            error: error => {
                this.errorService.errorOccurred.emit(error);
            },
            next: response => {
                const resp = response;
                this.projects = resp.projects;
            },
        });
    }
    moveUser(user, projectId) {
        for (let i = 0; i < this.projects.length; i++) {
            let index = this.projects[i].participants.findIndex(loopUser => loopUser == user);
            index != -1 && this.projects[i].participants.splice(index, 1);
        }
        let indexInUnused = this.unsortedUsers.findIndex(loopUser => loopUser == user);
        indexInUnused != -1 && this.unsortedUsers.splice(indexInUnused, 1);
        if (projectId == 0) {
            this.unsortedUsers.push(user);
        }
        else {
            let project = this.projects.find(loopProject => loopProject.id == projectId);
            project.participants.push(user);
        }
    }
    reorderProjects(ev) {
        const itemMove = this.projects.splice(ev.detail.from, 1)[0];
        this.projects.splice(ev.detail.to, 0, itemMove);
        ev.detail.complete();
    }
    sortUsers() {
        if (this.isProcessed == false) {
            this.isProcessed = true;
            for (let j = 0; j < this.unsortedUsers.length; j++) {
                this.userService.makeParticipant(this.unsortedUsers[j].id, 0).subscribe({
                    error: error => {
                        if (error.error.message == 'missingPermissions') {
                            this.alertService.alert("danger", this.translate.instant('GENERAL.ERRORS.missingPermissions'), '', 'lock-closed');
                        }
                        else if (error.error.message == 'userCanNotBeConverted') {
                            this.alertService.alert("danger", this.translate.instant('ACTIONS.MANAGE_USERS.title'), 'This user can not be enlisted as a participant.', 'lock-closed');
                        }
                        else {
                            this.errorService.errorOccurred.emit(error);
                        }
                    },
                    next: response => {
                        const resp = response;
                        this.alertService.alert("success", this.translate.instant('ACTIONS.MANAGE_USERS.title'), resp.message, "checkmark");
                    },
                });
            }
            for (let i = 0; i < this.projects.length; i++) {
                for (let j = 0; j < this.projects[i].participants.length; j++) {
                    this.userService.makeParticipant(this.projects[i].participants[j].id, this.projects[i].id).subscribe({
                        error: error => {
                            if (error.error.message == 'missingPermissions') {
                                this.alertService.alert("danger", this.translate.instant('GENERAL.ERRORS.missingPermissions'), '', 'lock-closed');
                            }
                            else if (error.error.message == 'userCanNotBeConverted') {
                                this.alertService.alert("danger", this.translate.instant('ACTIONS.MANAGE_USERS.title'), 'This user can not be enlisted as a participant.', 'lock-closed');
                            }
                            else {
                                this.errorService.errorOccurred.emit(error);
                            }
                        },
                        next: response => {
                            const resp = response;
                            this.alertService.alert("success", this.translate.instant('ACTIONS.MANAGE_USERS.title'), resp.message, "checkmark");
                        },
                    });
                }
            }
            this.isProcessed = false;
        }
    }
};
ManageSortingPage.ctorParameters = () => [
    { type: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_6__.TranslateService },
    { type: _services_user_service__WEBPACK_IMPORTED_MODULE_2__.UserService },
    { type: _services_error_service__WEBPACK_IMPORTED_MODULE_3__.ErrorService },
    { type: _services_project_service__WEBPACK_IMPORTED_MODULE_4__.ProjectService },
    { type: _services_alert_service__WEBPACK_IMPORTED_MODULE_5__.AlertService }
];
ManageSortingPage = (0,tslib__WEBPACK_IMPORTED_MODULE_7__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_8__.Component)({
        selector: 'app-manage-sorting',
        template: _home_vagrant_projects_Vnint_node_modules_angular_devkit_build_angular_node_modules_ngtools_webpack_src_loaders_direct_resource_js_manage_sorting_page_html__WEBPACK_IMPORTED_MODULE_0__["default"],
        styles: [_manage_sorting_page_scss__WEBPACK_IMPORTED_MODULE_1__]
    })
], ManageSortingPage);



/***/ }),

/***/ 81413:
/*!*****************************************************************************!*\
  !*** ./src/app/pages/actions/admin/manage-sorting/manage-sorting.page.scss ***!
  \*****************************************************************************/
/***/ ((module) => {

module.exports = ".subtitle-labels {\n  display: inline;\n}\n\n.long-description-label {\n  margin: 0;\n  display: block;\n  overflow: hidden;\n  flex: 1;\n  text-overflow: ellipsis;\n  white-space: nowrap;\n}\n\nion-badge {\n  margin-right: 5px;\n}\n\nion-badge ion-label {\n  font-weight: normal !important;\n}\n\n.white-font {\n  color: #fff;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm1hbmFnZS1zb3J0aW5nLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGVBQUE7QUFDRjs7QUFFQTtFQUNFLFNBQUE7RUFDQSxjQUFBO0VBQ0EsZ0JBQUE7RUFJQSxPQUFBO0VBQ0EsdUJBQUE7RUFDQSxtQkFBQTtBQUNGOztBQUVBO0VBQ0UsaUJBQUE7QUFDRjs7QUFBRTtFQUNFLDhCQUFBO0FBRUo7O0FBRUE7RUFDRSxXQUFBO0FBQ0YiLCJmaWxlIjoibWFuYWdlLXNvcnRpbmcucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnN1YnRpdGxlLWxhYmVscyB7XG4gIGRpc3BsYXk6IGlubGluZTtcbn1cblxuLmxvbmctZGVzY3JpcHRpb24tbGFiZWwge1xuICBtYXJnaW46IDA7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICBvdmVyZmxvdzogaGlkZGVuO1xuICAtd2Via2l0LWJveC1mbGV4OiAxO1xuICAtd2Via2l0LWZsZXg6IDE7XG4gIC1tcy1mbGV4OiAxO1xuICBmbGV4OiAxO1xuICB0ZXh0LW92ZXJmbG93OiBlbGxpcHNpcztcbiAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcbn1cblxuaW9uLWJhZGdlIHtcbiAgbWFyZ2luLXJpZ2h0OiA1cHg7XG4gIGlvbi1sYWJlbCB7XG4gICAgZm9udC13ZWlnaHQ6IG5vcm1hbCAhaW1wb3J0YW50O1xuICB9XG59XG5cbi53aGl0ZS1mb250IHtcbiAgY29sb3I6ICNmZmY7XG59XG4iXX0= */";

/***/ })

}]);
//# sourceMappingURL=src_app_pages_actions_admin_manage-sorting_manage-sorting_module_ts.js.map