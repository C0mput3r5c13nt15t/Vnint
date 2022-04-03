"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_pages_actions_admin_manage-schedule_manage-schedule_module_ts"],{

/***/ 91853:
/*!*****************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/@angular-devkit/build-angular/node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./src/app/pages/actions/admin/manage-schedule/manage-schedule.page.html ***!
  \*****************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<ion-content>\n  <app-toolbar></app-toolbar>\n  <ion-grid>\n    <ion-row>\n      <ion-col>\n        <app-card-title-bar title=\"{{ 'ACTIONS.MANAGE_SCHEDULE.title' | translate }}\"></app-card-title-bar>\n        <ion-card *ngIf=\"events\" color=\"light\">\n          <ion-card-content>\n            <div class=\"timeline\">\n              <ng-container *ngFor=\"let event of events\">\n                <div class=\"container {{ event.id % 2 == 0 ? 'right' : 'left' }}\">\n                  <ion-card color=\"light\">\n                    <ion-card-header>\n                      <ion-card-title>\n                        {{ event.title }}\n                      </ion-card-title>\n                      <ion-card-subtitle>\n                        {{ event.from | date:( 'GENERAL.timeDisplayFormat' | translate ):( 'GENERAL.timezone' | translate ):( 'GENERAL.locale' | translate ) }} - {{ event.until | date:( 'GENERAL.timeDisplayFormat' | translate ):( 'GENERAL.timezone' | translate ):( 'GENERAL.locale' | translate ) }}\n                      </ion-card-subtitle>\n                    </ion-card-header>\n                    <ion-card-content>\n                      <div *ngIf=\"event.permissions.length > 0\" class=\"ion-margin-bottom\">\n                        <ion-badge *ngFor=\"let permission of event.permissions\"><ion-label>{{ ('GENERAL.PERMISSIONS.' + permission.name) | translate }}</ion-label></ion-badge>\n                      </div>\n                      <ion-label>\n                        {{ event.description }}\n                      </ion-label>\n                      <hr>\n                      <ion-chip *ngIf=\"updateEventForm.value.id != event.id\" [disabled]=\"updateEventForm.value.id || showAddEvent\" (click)=\"editEvent(event)\" color=\"primary\">\n                        <ion-icon name=\"pencil\"></ion-icon>\n                        <ion-label>{{ 'ACTIONS.MANAGE_SCHEDULE.edit' | translate }}</ion-label>\n                      </ion-chip>\n                      <ion-chip *ngIf=\"updateEventForm.value.id == event.id\" (click)=\"updateEventForm.patchValue({id: 0, title:'', description:'', from: null, until: null})\" color=\"danger\">\n                        <ion-icon name=\"close\"></ion-icon>\n                        <ion-label>{{ 'ACTIONS.MANAGE_SCHEDULE.abortEditing' | translate }}</ion-label>\n                      </ion-chip>\n                      <ion-chip (click)=\"deleteEvent(event.id)\" color=\"danger\">\n                        <ion-icon name=\"trash\"></ion-icon>\n                        <ion-label>{{ 'ACTIONS.MANAGE_SCHEDULE.delete' | translate }}</ion-label>\n                      </ion-chip>\n                    </ion-card-content>\n                  </ion-card>\n                </div>\n              </ng-container>\n              <ion-fab vertical=\"bottom\" horizontal=\"{{ isDesktop ? 'center' : 'left' }}\" slot=\"fixed\">\n                <ion-fab-button [disabled]=\"updateEventForm.value.id\" *ngIf=\"!showAddEvent\" (click)=\"showAddEvent = true\" color=\"primary\">\n                  <ion-icon name=\"add\"></ion-icon>\n                </ion-fab-button>\n                <ion-fab-button *ngIf=\"showAddEvent\" (click)=\"showAddEvent = false\" color=\"danger\">\n                  <ion-icon name=\"close\"></ion-icon>\n                </ion-fab-button>\n              </ion-fab>\n            </div>\n            <ion-card [@openClose]=\"showAddEvent ? 'open' : 'closed'\" color=\"light\">\n              <ion-card-header>\n                <ion-card-title>\n                  {{ 'ACTIONS.MANAGE_SCHEDULE.addEvent' | translate }}\n                </ion-card-title>\n              </ion-card-header>\n              <ion-card-content>\n                <form [formGroup]=\"addEventForm\" (ngSubmit)=\"addEvent(addEventForm)\">\n                  <ion-item color=\"light\">\n                    <ion-input formControlName=\"title\" type=\"text\" placeholder=\"{{ 'ACTIONS.MANAGE_SCHEDULE.INPUT.title' | translate }}\"></ion-input>\n                  </ion-item>\n                  <app-form-error [errors]=\"addEventErrorControl.title.errors\"></app-form-error>\n\n                  <ion-item color=\"light\">\n                    <ion-input formControlName=\"description\" type=\"text\" placeholder=\"{{ 'ACTIONS.MANAGE_SCHEDULE.INPUT.description' | translate }}\"></ion-input>\n                  </ion-item>\n                  <app-form-error [errors]=\"addEventErrorControl.description.errors\"></app-form-error>\n\n                  <ion-item color=\"light\" lines=\"none\">\n                    <ion-label>{{ 'ACTIONS.MANAGE_SCHEDULE.INPUT.from' | translate }} {{ addEventForm.value.from | date:( 'GENERAL.timeDisplayFormat' | translate ):( 'GENERAL.timezone' | translate ):( 'GENERAL.locale' | translate ) }}</ion-label>\n                  </ion-item>\n                  <ion-datetime presentation=\"date\" [locale]=\"( 'GENERAL.locale' | translate )\" formControlName=\"from\" doneText=\"{{ 'GENERAL.POPUPS.done' | translate }}\" cancelText=\"{{ 'GENERAL.POPUPS.cancel' | translate }}\"></ion-datetime>\n                  <app-form-error [errors]=\"addEventErrorControl.from.errors\"></app-form-error>\n\n                  <ion-item color=\"light\" lines=\"none\">\n                    <ion-label>{{ 'ACTIONS.MANAGE_SCHEDULE.INPUT.until' | translate }} {{ addEventForm.value.until | date:( 'GENERAL.timeDisplayFormat' | translate ):( 'GENERAL.timezone' | translate ):( 'GENERAL.locale' | translate ) }}</ion-label>\n                  </ion-item>\n                  <ion-datetime presentation=\"date\" [locale]=\"( 'GENERAL.locale' | translate )\" formControlName=\"until\" doneText=\"{{ 'GENERAL.POPUPS.done' | translate }}\" cancelText=\"{{ 'GENERAL.POPUPS.cancel' | translate }}\"></ion-datetime>\n                  <app-form-error [errors]=\"addEventErrorControl.until.errors\"></app-form-error>\n\n                  <ion-list *ngIf=\"addEventPermissions.length > 0\">\n                    <ion-item color=\"light\" lines=\"none\" *ngFor=\"let permission of addEventPermissions\">\n                      <ion-label>{{ ('GENERAL.PERMISSIONS.' + permission.name) | translate }}</ion-label>\n                      <ion-checkbox slot=\"start\" [(ngModel)]=\"permission.isChecked\" [ngModelOptions]=\"{standalone: true}\"></ion-checkbox>\n                    </ion-item>\n                  </ion-list>\n\n                  <div class=\"ion-padding\">\n                    <ion-button *ngIf=\"!isProcessed\" type=\"submit\" [disabled]=\"addEventForm.invalid || isProcessed\" class=\"ion-no-margin\" expand=\"block\" color=\"primary\">{{ 'ACTIONS.MANAGE_SCHEDULE.INPUT.addEventButton' | translate }}</ion-button>\n                    <ion-button *ngIf=\"isProcessed\" type=\"submit\" [disabled]=\"addEventForm.invalid || isProcessed\" class=\"ion-no-margin\" expand=\"block\" color=\"primary\"><ion-spinner name=\"crescent\"></ion-spinner></ion-button>\n                  </div>\n                </form>\n              </ion-card-content>\n            </ion-card>\n            <ion-card [@openClose]=\"updateEventForm.value.id ? 'open' : 'closed'\" color=\"light\">\n              <ion-card-header>\n                <ion-card-title>\n                  {{ 'ACTIONS.MANAGE_SCHEDULE.updateEvent' | translate }}\n                </ion-card-title>\n              </ion-card-header>\n              <ion-card-content>\n                <form [formGroup]=\"updateEventForm\" (ngSubmit)=\"updateEvent()\">\n                  <ion-item color=\"light\">\n                    <ion-input formControlName=\"title\" type=\"text\" placeholder=\"{{ 'ACTIONS.MANAGE_SCHEDULE.INPUT.title' | translate }}\"></ion-input>\n                  </ion-item>\n                  <app-form-error [errors]=\"updateEventErrorControl.title.errors\"></app-form-error>\n\n                  <ion-item color=\"light\">\n                    <ion-input formControlName=\"description\" type=\"text\" placeholder=\"{{ 'ACTIONS.MANAGE_SCHEDULE.INPUT.description' | translate }}\"></ion-input>\n                  </ion-item>\n                  <app-form-error [errors]=\"updateEventErrorControl.description.errors\"></app-form-error>\n\n                  <ion-item color=\"light\" lines=\"none\">\n                    <ion-label>{{ 'ACTIONS.MANAGE_SCHEDULE.INPUT.from' | translate }} {{ updateEventForm.value.from | date:( 'GENERAL.timeDisplayFormat' | translate ):( 'GENERAL.timezone' | translate ):( 'GENERAL.locale' | translate ) }}</ion-label>\n                  </ion-item>\n                  <ion-datetime presentation=\"date\" [locale]=\"( 'GENERAL.locale' | translate )\" formControlName=\"from\" doneText=\"{{ 'GENERAL.POPUPS.done' | translate }}\" cancelText=\"{{ 'GENERAL.POPUPS.cancel' | translate }}\"></ion-datetime>\n                  <app-form-error [errors]=\"updateEventErrorControl.from.errors\"></app-form-error>\n\n                  <ion-item color=\"light\" lines=\"none\">\n                    <ion-label>{{ 'ACTIONS.MANAGE_SCHEDULE.INPUT.until' | translate }} {{ updateEventForm.value.until | date:( 'GENERAL.timeDisplayFormat' | translate ):( 'GENERAL.timezone' | translate ):( 'GENERAL.locale' | translate ) }}</ion-label>\n                  </ion-item>\n                  <ion-datetime presentation=\"date\" [locale]=\"( 'GENERAL.locale' | translate )\" formControlName=\"until\" doneText=\"{{ 'GENERAL.POPUPS.done' | translate }}\" cancelText=\"{{ 'GENERAL.POPUPS.cancel' | translate }}\"></ion-datetime>\n                  <app-form-error [errors]=\"updateEventErrorControl.until.errors\"></app-form-error>\n\n                  <ion-list *ngIf=\"updateEventPermissions.length > 0\">\n                    <ion-item color=\"light\" lines=\"none\" *ngFor=\"let permission of updateEventPermissions\">\n                      <ion-label>{{ ('GENERAL.PERMISSIONS.' + permission.name) | translate }}</ion-label>\n                      <ion-checkbox slot=\"start\" [(ngModel)]=\"permission.isChecked\" [ngModelOptions]=\"{standalone: true}\"></ion-checkbox>\n                    </ion-item>\n                  </ion-list>\n\n                  <div class=\"ion-padding\">\n                    <ion-button *ngIf=\"!isProcessed\" type=\"submit\" [disabled]=\"updateEventForm.invalid || isProcessed\" class=\"ion-no-margin\" expand=\"block\" color=\"primary\">{{ 'ACTIONS.MANAGE_SCHEDULE.INPUT.updateEventButton' | translate }}</ion-button>\n                    <ion-button *ngIf=\"isProcessed\" type=\"submit\" [disabled]=\"updateEventForm.invalid || isProcessed\" class=\"ion-no-margin\" expand=\"block\" color=\"primary\"><ion-spinner name=\"crescent\"></ion-spinner></ion-button>\n                  </div>\n                </form>\n              </ion-card-content>\n            </ion-card>\n          </ion-card-content>\n        </ion-card>\n      </ion-col>\n    </ion-row>\n  </ion-grid>\n</ion-content>\n\n");

/***/ }),

/***/ 25052:
/*!***************************************************************************************!*\
  !*** ./src/app/pages/actions/admin/manage-schedule/manage-schedule-routing.module.ts ***!
  \***************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ManageSchedulePageRoutingModule": () => (/* binding */ ManageSchedulePageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 21838);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 789);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 9538);
/* harmony import */ var _manage_schedule_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./manage-schedule.page */ 76144);




const routes = [
    {
        path: '',
        component: _manage_schedule_page__WEBPACK_IMPORTED_MODULE_0__.ManageSchedulePage
    }
];
let ManageSchedulePageRoutingModule = class ManageSchedulePageRoutingModule {
};
ManageSchedulePageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], ManageSchedulePageRoutingModule);



/***/ }),

/***/ 50078:
/*!*******************************************************************************!*\
  !*** ./src/app/pages/actions/admin/manage-schedule/manage-schedule.module.ts ***!
  \*******************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ManageSchedulePageModule": () => (/* binding */ ManageSchedulePageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! tslib */ 21838);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 789);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ 2006);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/forms */ 43459);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/common/http */ 45331);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ionic/angular */ 30585);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @ngx-translate/core */ 52784);
/* harmony import */ var _manage_schedule_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./manage-schedule-routing.module */ 25052);
/* harmony import */ var _components_components_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../components/components.module */ 96453);
/* harmony import */ var _manage_schedule_page__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./manage-schedule.page */ 76144);
/* harmony import */ var src_app_app_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/app.module */ 92014);











let ManageSchedulePageModule = class ManageSchedulePageModule {
};
ManageSchedulePageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_5__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_6__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_7__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_8__.IonicModule,
            _manage_schedule_routing_module__WEBPACK_IMPORTED_MODULE_0__.ManageSchedulePageRoutingModule,
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
        declarations: [_manage_schedule_page__WEBPACK_IMPORTED_MODULE_2__.ManageSchedulePage]
    })
], ManageSchedulePageModule);



/***/ }),

/***/ 76144:
/*!*****************************************************************************!*\
  !*** ./src/app/pages/actions/admin/manage-schedule/manage-schedule.page.ts ***!
  \*****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ManageSchedulePage": () => (/* binding */ ManageSchedulePage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! tslib */ 21838);
/* harmony import */ var _home_vagrant_projects_Vnint_node_modules_angular_devkit_build_angular_node_modules_ngtools_webpack_src_loaders_direct_resource_js_manage_schedule_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !./node_modules/@angular-devkit/build-angular/node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./manage-schedule.page.html */ 91853);
/* harmony import */ var _manage_schedule_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./manage-schedule.page.scss */ 81282);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/core */ 789);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/forms */ 43459);
/* harmony import */ var src_app_services_event_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/event.service */ 61068);
/* harmony import */ var _angular_animations__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/animations */ 24038);
/* harmony import */ var src_app_services_screensize_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/screensize.service */ 35436);
/* harmony import */ var src_app_services_roles_and_permissions_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/services/roles-and-permissions.service */ 27094);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/common */ 2006);
/* harmony import */ var src_app_services_error_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/services/error.service */ 55729);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @ngx-translate/core */ 52784);
/* harmony import */ var _services_alert_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../../services/alert.service */ 92677);













let ManageSchedulePage = class ManageSchedulePage {
    constructor(formBuilder, eventService, rolesAndPermissionsService, screenSizeService, datePipe, errorService, translate, alertService) {
        this.formBuilder = formBuilder;
        this.eventService = eventService;
        this.rolesAndPermissionsService = rolesAndPermissionsService;
        this.screenSizeService = screenSizeService;
        this.datePipe = datePipe;
        this.errorService = errorService;
        this.translate = translate;
        this.alertService = alertService;
        this.showAddEvent = false;
        this.events = [];
        this.addEventPermissions = [];
        this.updateEventPermissions = [];
        this.isProcessed = false;
        this.screenSizeService.isDesktopView().subscribe(isDesktop => {
            if (this.isDesktop && !isDesktop) {
                window.location.reload();
            }
            this.isDesktop = isDesktop;
        });
    }
    get addEventErrorControl() {
        return this.addEventForm.controls;
    }
    get updateEventErrorControl() {
        return this.updateEventForm.controls;
    }
    ngOnInit() {
        this.addEventForm = this.formBuilder.group({
            title: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_7__.Validators.required],
            description: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_7__.Validators.required],
            from: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_7__.Validators.required],
            until: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_7__.Validators.required],
        });
        this.updateEventForm = this.formBuilder.group({
            id: [],
            title: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_7__.Validators.required],
            description: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_7__.Validators.required],
            from: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_7__.Validators.required],
            until: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_7__.Validators.required],
        });
    }
    ionViewWillEnter() {
        this.isProcessed = false;
        this.getPermissions();
        this.getEvents();
    }
    getEvents() {
        this.eventService.getEvents().subscribe({
            error: error => {
                this.errorService.errorOccurred.emit(error);
            },
            next: response => {
                const resp = response;
                this.events = resp.events;
                resp.events.forEach(event => {
                    event.permissions_names = event.permissions.map(permission => permission.name);
                });
                this.events = resp.events;
            },
        });
    }
    getPermissions() {
        this.rolesAndPermissionsService.getPermissions().subscribe({
            error: error => {
                this.errorService.errorOccurred.emit(error);
            },
            next: response => {
                const resp = response;
                resp.permissions.forEach(permission => {
                    this.addEventPermissions.push({ name: permission.name, isChecked: false });
                    this.updateEventPermissions.push({ name: permission.name, isChecked: false });
                });
            },
        });
    }
    addEvent(form) {
        if (!this.isProcessed && this.addEventForm.valid) {
            this.isProcessed = true;
            this.addEventForm.patchValue({
                from: this.datePipe.transform(this.addEventForm.value.from, 'yyyy-MM-dd'),
                until: this.datePipe.transform(this.addEventForm.value.until, 'yyyy-MM-dd'),
            });
            this.eventService.createEvent(this.addEventForm.value).subscribe({
                error: error => {
                    if (error.error.message == 'The given data was invalid.') {
                        for (const errorType in error.error.errors) {
                            const errors = [];
                            for (const errorMessage in error.error.errors[errorType]) {
                                errors.push({ [error.error.errors[errorType][errorMessage]]: true });
                            }
                            this.addEventForm.controls[errorType].setErrors(errors);
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
                    this.addEventForm.reset();
                    this.isProcessed = false;
                    const addEventPermissionsNames = this.addEventPermissions.filter(permission => permission.isChecked).map(permissions => permissions.name);
                    this.eventService.syncPermissions(resp.event.id, { permissions: addEventPermissionsNames }).subscribe({
                        error: error => {
                            if (error.error.message == 'missingPermissions') {
                                this.alertService.alert("danger", this.translate.instant('GENERAL.ERRORS.missingPermissions'), '', 'lock-closed');
                            }
                            else {
                                this.errorService.errorOccurred.emit(error);
                            }
                        },
                        complete: () => {
                            this.getEvents();
                            this.showAddEvent = false;
                        }
                    });
                    this.alertService.alert("success", this.translate.instant('ACTIONS.MANAGE_SCHEDULE.title'), resp.message, "checkmark");
                    form.reset();
                },
            });
        }
    }
    editEvent(event) {
        this.updateEventForm.patchValue(event);
        this.updateEventPermissions.forEach(permission => {
            permission.isChecked = !!event.permissions_names.includes(permission.name);
        });
    }
    updateEvent() {
        if (!this.isProcessed && this.updateEventForm.valid) {
            this.isProcessed = true;
            this.updateEventForm.patchValue({
                from: this.datePipe.transform(this.updateEventForm.value.from, 'yyyy-MM-dd'),
                until: this.datePipe.transform(this.updateEventForm.value.until, 'yyyy-MM-dd'),
            });
            const updateEventPermissionsNames = this.updateEventPermissions.filter(permission => permission.isChecked).map(permissions => permissions.name);
            this.eventService.syncPermissions(this.updateEventForm.value.id, { permissions: updateEventPermissionsNames }).subscribe({
                error: error => {
                    this.errorService.errorOccurred.emit(error);
                }
            });
            this.eventService.updateEvent(this.updateEventForm.value).subscribe({
                error: error => {
                    if (error.error.message == 'The given data was invalid.') {
                        for (const errorType in error.error.errors) {
                            const errors = [];
                            for (const errorMessage in error.error.errors[errorType]) {
                                errors.push({ [error.error.errors[errorType][errorMessage]]: true });
                            }
                            this.updateEventForm.controls[errorType].setErrors(errors);
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
                    this.alertService.alert("success", this.translate.instant('ACTIONS.MANAGE_SCHEDULE.title'), resp.message, "checkmark");
                },
                complete: () => {
                    this.updateEventForm.reset();
                    this.isProcessed = false;
                    this.getEvents();
                },
            });
        }
    }
    deleteEvent(eventId) {
        this.eventService.deleteEvent(eventId).subscribe({
            error: error => {
                this.errorService.errorOccurred.emit(error);
            },
            next: response => {
                const resp = response;
                this.alertService.alert("success", this.translate.instant('ACTIONS.MANAGE_SCHEDULE.title'), resp.message, "checkmark");
            },
            complete: () => {
                this.getEvents();
            }
        });
    }
};
ManageSchedulePage.ctorParameters = () => [
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_7__.FormBuilder },
    { type: src_app_services_event_service__WEBPACK_IMPORTED_MODULE_2__.EventService },
    { type: src_app_services_roles_and_permissions_service__WEBPACK_IMPORTED_MODULE_4__.RolesAndPermissionsService },
    { type: src_app_services_screensize_service__WEBPACK_IMPORTED_MODULE_3__.ScreenSizeService },
    { type: _angular_common__WEBPACK_IMPORTED_MODULE_8__.DatePipe },
    { type: src_app_services_error_service__WEBPACK_IMPORTED_MODULE_5__.ErrorService },
    { type: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_9__.TranslateService },
    { type: _services_alert_service__WEBPACK_IMPORTED_MODULE_6__.AlertService }
];
ManageSchedulePage = (0,tslib__WEBPACK_IMPORTED_MODULE_10__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_11__.Component)({
        selector: 'app-manage-schedule',
        template: _home_vagrant_projects_Vnint_node_modules_angular_devkit_build_angular_node_modules_ngtools_webpack_src_loaders_direct_resource_js_manage_schedule_page_html__WEBPACK_IMPORTED_MODULE_0__["default"],
        providers: [_angular_common__WEBPACK_IMPORTED_MODULE_8__.DatePipe],
        animations: [
            (0,_angular_animations__WEBPACK_IMPORTED_MODULE_12__.trigger)('openClose', [
                (0,_angular_animations__WEBPACK_IMPORTED_MODULE_12__.state)('open', (0,_angular_animations__WEBPACK_IMPORTED_MODULE_12__.style)({
                    opacity: 1,
                })),
                (0,_angular_animations__WEBPACK_IMPORTED_MODULE_12__.state)('closed', (0,_angular_animations__WEBPACK_IMPORTED_MODULE_12__.style)({
                    opacity: 0,
                    height: '0px',
                })),
                (0,_angular_animations__WEBPACK_IMPORTED_MODULE_12__.transition)('* => closed', [
                    (0,_angular_animations__WEBPACK_IMPORTED_MODULE_12__.animate)('0.3s')
                ]),
                (0,_angular_animations__WEBPACK_IMPORTED_MODULE_12__.transition)('* => open', [
                    (0,_angular_animations__WEBPACK_IMPORTED_MODULE_12__.animate)('0.3s')
                ]),
            ]),
        ],
        styles: [_manage_schedule_page_scss__WEBPACK_IMPORTED_MODULE_1__]
    })
], ManageSchedulePage);



/***/ }),

/***/ 81282:
/*!*******************************************************************************!*\
  !*** ./src/app/pages/actions/admin/manage-schedule/manage-schedule.page.scss ***!
  \*******************************************************************************/
/***/ ((module) => {

module.exports = "/** Ionic CSS Variables **/\n@font-face {\n  font-family: \"Montserrat\", sans-serif;\n}\n:root {\n  --ion-font-family: \"Montserrat\", sans-serif;\n}\n/*\n* Light Colors\n* -------------------------------------------\n*/\n:root {\n  --ion-color-primary: #6411D9;\n  --ion-color-primary-rgb: 100,17,217;\n  --ion-color-primary-contrast: #ffffff;\n  --ion-color-primary-contrast-rgb: 255,255,255;\n  --ion-color-primary-shade: #580fbf;\n  --ion-color-primary-tint: #7429dd;\n  --ion-color-secondary: #622BD9;\n  --ion-color-secondary-rgb: 98,43,217;\n  --ion-color-secondary-contrast: #ffffff;\n  --ion-color-secondary-contrast-rgb: 255,255,255;\n  --ion-color-secondary-shade: #5626bf;\n  --ion-color-secondary-tint: #7240dd;\n  --ion-color-tertiary: #752BDF;\n  --ion-color-tertiary-rgb: 117,43,223;\n  --ion-color-tertiary-contrast: #ffffff;\n  --ion-color-tertiary-contrast-rgb: 255,255,255;\n  --ion-color-tertiary-shade: #6726c4;\n  --ion-color-tertiary-tint: #8340e2;\n  --ion-color-success: #33cc73;\n  --ion-color-success-rgb: 51,204,115;\n  --ion-color-success-contrast: #ffffff;\n  --ion-color-success-contrast-rgb: 0,0,0;\n  --ion-color-success-shade: #2db465;\n  --ion-color-success-tint: #47d181;\n  --ion-color-warning: #f2e231;\n  --ion-color-warning-rgb: 242,226,49;\n  --ion-color-warning-contrast: #fff;\n  --ion-color-warning-contrast-rgb: 255,255,255;\n  --ion-color-warning-shade: #d5c72b;\n  --ion-color-warning-tint: #f3e546;\n  --ion-color-danger: #e53e3e;\n  --ion-color-danger-rgb: 229,62,62;\n  --ion-color-danger-contrast: #ffffff;\n  --ion-color-danger-contrast-rgb: 255,255,255;\n  --ion-color-danger-shade: #ca3737;\n  --ion-color-danger-tint: #e85151;\n  --ion-color-medium: #fcfaff;\n  --ion-color-medium-rgb: 252,250,255;\n  --ion-color-medium-contrast: #000000;\n  --ion-color-medium-contrast-rgb: 0,0,0;\n  --ion-color-medium-shade: #dedce0;\n  --ion-color-medium-tint: #fcfbff;\n  --ion-color-light: #FFFFFF;\n  --ion-color-light-rgb: 255,255,255;\n  --ion-color-light-contrast: #1a1a1a;\n  --ion-color-light-contrast-rgb: 0,0,0;\n  --ion-color-light-shade: #e0e0e0;\n  --ion-color-light-tint: #ffffff;\n  --ion-text-color: #1c1c1c;\n  --ion-item-background: var(--ion-color-light);\n}\n/*\n* Dark Colors\n* -------------------------------------------\n*/\nbody.dark {\n  --ion-color-primary: #7924f0;\n  --ion-color-primary-rgb: 121,36,240;\n  --ion-color-primary-contrast: #ffffff;\n  --ion-color-primary-contrast-rgb: 255,255,255;\n  --ion-color-primary-shade: #6a20d3;\n  --ion-color-primary-tint: #863af2;\n  --ion-color-secondary: #622BD9;\n  --ion-color-secondary-rgb: 98,43,217;\n  --ion-color-secondary-contrast: #ffffff;\n  --ion-color-secondary-contrast-rgb: 255,255,255;\n  --ion-color-secondary-shade: #5626bf;\n  --ion-color-secondary-tint: #7240dd;\n  --ion-color-tertiary: #752BDF;\n  --ion-color-tertiary-rgb: 117,43,223;\n  --ion-color-tertiary-contrast: #ffffff;\n  --ion-color-tertiary-contrast-rgb: 255,255,255;\n  --ion-color-tertiary-shade: #6726c4;\n  --ion-color-tertiary-tint: #8340e2;\n  --ion-color-success: #33cc73;\n  --ion-color-success-rgb: 51,204,115;\n  --ion-color-success-contrast: #ffffff;\n  --ion-color-success-contrast-rgb: 0,0,0;\n  --ion-color-success-shade: #2db465;\n  --ion-color-success-tint: #47d181;\n  --ion-color-warning: #f2e231;\n  --ion-color-warning-rgb: 242,226,49;\n  --ion-color-warning-contrast: #fff;\n  --ion-color-warning-contrast-rgb: 255,255,255;\n  --ion-color-warning-shade: #d5c72b;\n  --ion-color-warning-tint: #f3e546;\n  --ion-color-danger: #e53e3e;\n  --ion-color-danger-rgb: 229,62,62;\n  --ion-color-danger-contrast: #ffffff;\n  --ion-color-danger-contrast-rgb: 255,255,255;\n  --ion-color-danger-shade: #ca3737;\n  --ion-color-danger-tint: #e85151;\n  --ion-color-medium: #121212;\n  --ion-color-medium-rgb: 18,18,18;\n  --ion-color-medium-contrast: #ffffff;\n  --ion-color-medium-contrast-rgb: 255,255,255;\n  --ion-color-medium-shade: #101010;\n  --ion-color-medium-tint: #2a2a2a;\n  --ion-color-light: #1d1d1d;\n  --ion-color-light-rgb: 29,29,29;\n  --ion-color-light-contrast: #ffffff;\n  --ion-color-light-contrast-rgb: 255,255,255;\n  --ion-color-light-shade: #1a1a1a;\n  --ion-color-light-tint: #343434;\n  --ion-text-color: #fff;\n  --ion-item-background: var(--ion-color-light);\n}\nion-list {\n  --ion-background-color: var(--ion-color-light);\n}\n* {\n  box-sizing: border-box;\n}\n/* The actual timeline (the vertical ruler) */\n.timeline {\n  position: relative;\n  max-width: 1200px;\n  margin: 0 auto;\n  min-height: 70px;\n}\n/* The actual timeline (the vertical ruler) */\n.timeline::after {\n  content: \"\";\n  position: absolute;\n  width: 6px;\n  background-color: var(--ion-color-primary);\n  top: 20px;\n  bottom: 66px;\n  left: 50%;\n  margin-left: -3px;\n}\n/* Container around content */\n.container {\n  padding: 10px 40px;\n  position: relative;\n  background-color: inherit;\n  width: 50%;\n}\n/* The circles on the timeline */\n.container::after {\n  content: \"\";\n  position: absolute;\n  width: 25px;\n  height: 25px;\n  right: -17px;\n  background-color: var(--ion-color-light);\n  border: 4px solid var(--ion-color-primary);\n  top: 15px;\n  border-radius: 50%;\n  z-index: 1;\n}\n/* Place the container to the left */\n.left {\n  left: 0;\n}\n/* Place the container to the right */\n.right {\n  left: 50%;\n}\n/* Fix the circle for containers on the right side */\n.right::after {\n  left: -16px;\n}\n/* The actual content */\n.content {\n  padding: 20px 30px;\n  background-color: var(--ion-background-color, #fff);\n  position: relative;\n  border-radius: 6px;\n}\n/* Media queries - Responsive timeline on screens less than 600px wide */\n@media screen and (max-width: 600px) {\n  /* Place the timeline to the left */\n  .timeline::after {\n    left: 31px;\n  }\n\n  /* Full-width containers */\n  .container {\n    width: 100%;\n    padding-left: 70px;\n    padding-right: 25px;\n  }\n\n  /* Make sure all circles are at the same spot */\n  .left::after, .right::after {\n    left: 15px;\n  }\n\n  /* Make all right containers behave like the left ones */\n  .right {\n    left: 0;\n  }\n}\nhr {\n  background-color: var(--ion-color-step-550, #737373);\n}\nion-badge {\n  margin-right: 5px;\n}\nion-badge ion-label {\n  color: #fff;\n  font-weight: normal !important;\n}\nion-datetime {\n  display: inline;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uL3RoZW1lL3ZhcmlhYmxlcy5zY3NzIiwibWFuYWdlLXNjaGVkdWxlLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFHQSwwQkFBQTtBQUVBO0VBQ0UscUNBQUE7QUNIRjtBRE1BO0VBQ0UsMkNBQUE7QUNKRjtBRE9BOzs7Q0FBQTtBQUtBO0VBQ0UsNEJBQUE7RUFDQSxtQ0FBQTtFQUNBLHFDQUFBO0VBQ0EsNkNBQUE7RUFDQSxrQ0FBQTtFQUNBLGlDQUFBO0VBRUEsOEJBQUE7RUFDQSxvQ0FBQTtFQUNBLHVDQUFBO0VBQ0EsK0NBQUE7RUFDQSxvQ0FBQTtFQUNBLG1DQUFBO0VBRUEsNkJBQUE7RUFDQSxvQ0FBQTtFQUNBLHNDQUFBO0VBQ0EsOENBQUE7RUFDQSxtQ0FBQTtFQUNBLGtDQUFBO0VBRUEsNEJBQUE7RUFDQSxtQ0FBQTtFQUNBLHFDQUFBO0VBQ0EsdUNBQUE7RUFDQSxrQ0FBQTtFQUNBLGlDQUFBO0VBRUEsNEJBQUE7RUFDQSxtQ0FBQTtFQUNBLGtDQUFBO0VBQ0EsNkNBQUE7RUFDQSxrQ0FBQTtFQUNBLGlDQUFBO0VBRUEsMkJBQUE7RUFDQSxpQ0FBQTtFQUNBLG9DQUFBO0VBQ0EsNENBQUE7RUFDQSxpQ0FBQTtFQUNBLGdDQUFBO0VBRUEsMkJBQUE7RUFDQSxtQ0FBQTtFQUNBLG9DQUFBO0VBQ0Esc0NBQUE7RUFDQSxpQ0FBQTtFQUNBLGdDQUFBO0VBRUEsMEJBQUE7RUFDQSxrQ0FBQTtFQUNBLG1DQUFBO0VBQ0EscUNBQUE7RUFDQSxnQ0FBQTtFQUNBLCtCQUFBO0VBRUEseUJBQUE7RUFDQSw2Q0FBQTtBQ2JGO0FEZ0JBOzs7Q0FBQTtBQUtBO0VBQ0UsNEJBQUE7RUFDQSxtQ0FBQTtFQUNBLHFDQUFBO0VBQ0EsNkNBQUE7RUFDQSxrQ0FBQTtFQUNBLGlDQUFBO0VBRUEsOEJBQUE7RUFDQSxvQ0FBQTtFQUNBLHVDQUFBO0VBQ0EsK0NBQUE7RUFDQSxvQ0FBQTtFQUNBLG1DQUFBO0VBRUEsNkJBQUE7RUFDQSxvQ0FBQTtFQUNBLHNDQUFBO0VBQ0EsOENBQUE7RUFDQSxtQ0FBQTtFQUNBLGtDQUFBO0VBRUEsNEJBQUE7RUFDQSxtQ0FBQTtFQUNBLHFDQUFBO0VBQ0EsdUNBQUE7RUFDQSxrQ0FBQTtFQUNBLGlDQUFBO0VBRUEsNEJBQUE7RUFDQSxtQ0FBQTtFQUNBLGtDQUFBO0VBQ0EsNkNBQUE7RUFDQSxrQ0FBQTtFQUNBLGlDQUFBO0VBRUEsMkJBQUE7RUFDQSxpQ0FBQTtFQUNBLG9DQUFBO0VBQ0EsNENBQUE7RUFDQSxpQ0FBQTtFQUNBLGdDQUFBO0VBRUEsMkJBQUE7RUFDQSxnQ0FBQTtFQUNBLG9DQUFBO0VBQ0EsNENBQUE7RUFDQSxpQ0FBQTtFQUNBLGdDQUFBO0VBRUEsMEJBQUE7RUFDQSwrQkFBQTtFQUNBLG1DQUFBO0VBQ0EsMkNBQUE7RUFDQSxnQ0FBQTtFQUNBLCtCQUFBO0VBRUEsc0JBQUE7RUFDQSw2Q0FBQTtBQ3RCRjtBQXRIQTtFQUNFLDhDQUFBO0FBeUhGO0FBdEhBO0VBQ0Usc0JBQUE7QUF5SEY7QUF0SEEsNkNBQUE7QUFDQTtFQUNFLGtCQUFBO0VBQ0EsaUJBQUE7RUFDQSxjQUFBO0VBQ0EsZ0JBQUE7QUF5SEY7QUF0SEEsNkNBQUE7QUFDQTtFQUNFLFdBQUE7RUFDQSxrQkFBQTtFQUNBLFVBQUE7RUFDQSwwQ0FBQTtFQUNBLFNBQUE7RUFDQSxZQUFBO0VBQ0EsU0FBQTtFQUNBLGlCQUFBO0FBeUhGO0FBdEhBLDZCQUFBO0FBQ0E7RUFDRSxrQkFBQTtFQUNBLGtCQUFBO0VBQ0EseUJBQUE7RUFDQSxVQUFBO0FBeUhGO0FBdEhBLGdDQUFBO0FBQ0E7RUFDRSxXQUFBO0VBQ0Esa0JBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLFlBQUE7RUFDQSx3Q0FBQTtFQUNBLDBDQUFBO0VBQ0EsU0FBQTtFQUNBLGtCQUFBO0VBQ0EsVUFBQTtBQXlIRjtBQXRIQSxvQ0FBQTtBQUNBO0VBQ0UsT0FBQTtBQXlIRjtBQXRIQSxxQ0FBQTtBQUNBO0VBQ0UsU0FBQTtBQXlIRjtBQXRIQSxvREFBQTtBQUNBO0VBQ0UsV0FBQTtBQXlIRjtBQXRIQSx1QkFBQTtBQUNBO0VBQ0Usa0JBQUE7RUFDQSxtREFBQTtFQUNBLGtCQUFBO0VBQ0Esa0JBQUE7QUF5SEY7QUF0SEEsd0VBQUE7QUFDQTtFQUNBLG1DQUFBO0VBQ0U7SUFDRSxVQUFBO0VBeUhGOztFQXRIRiwwQkFBQTtFQUNFO0lBQ0UsV0FBQTtJQUNBLGtCQUFBO0lBQ0EsbUJBQUE7RUF5SEY7O0VBdEhGLCtDQUFBO0VBQ0U7SUFDRSxVQUFBO0VBeUhGOztFQXRIRix3REFBQTtFQUNFO0lBQ0UsT0FBQTtFQXlIRjtBQUNGO0FBdEhBO0VBQ0Usb0RBQUE7QUF3SEY7QUFySEE7RUFDRSxpQkFBQTtBQXdIRjtBQXRIRTtFQUNFLFdBQUE7RUFDQSw4QkFBQTtBQXdISjtBQXBIQTtFQUNFLGVBQUE7QUF1SEYiLCJmaWxlIjoibWFuYWdlLXNjaGVkdWxlLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi8vIElvbmljIFZhcmlhYmxlcyBhbmQgVGhlbWluZy4gRm9yIG1vcmUgaW5mbywgcGxlYXNlIHNlZTpcbi8vIGh0dHA6Ly9pb25pY2ZyYW1ld29yay5jb20vZG9jcy90aGVtaW5nL1xuXG4vKiogSW9uaWMgQ1NTIFZhcmlhYmxlcyAqKi9cblxuQGZvbnQtZmFjZSB7XG4gIGZvbnQtZmFtaWx5OiAnTW9udHNlcnJhdCcsIHNhbnMtc2VyaWY7XG59XG5cbjpyb290IHtcbiAgLS1pb24tZm9udC1mYW1pbHk6ICdNb250c2VycmF0Jywgc2Fucy1zZXJpZjtcbn1cblxuLypcbiogTGlnaHQgQ29sb3JzXG4qIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiovXG5cbjpyb290IHtcbiAgLS1pb24tY29sb3ItcHJpbWFyeTogIzY0MTFEOTtcbiAgLS1pb24tY29sb3ItcHJpbWFyeS1yZ2I6IDEwMCwxNywyMTc7XG4gIC0taW9uLWNvbG9yLXByaW1hcnktY29udHJhc3Q6ICNmZmZmZmY7XG4gIC0taW9uLWNvbG9yLXByaW1hcnktY29udHJhc3QtcmdiOiAyNTUsMjU1LDI1NTtcbiAgLS1pb24tY29sb3ItcHJpbWFyeS1zaGFkZTogIzU4MGZiZjtcbiAgLS1pb24tY29sb3ItcHJpbWFyeS10aW50OiAjNzQyOWRkO1xuXG4gIC0taW9uLWNvbG9yLXNlY29uZGFyeTogIzYyMkJEOTtcbiAgLS1pb24tY29sb3Itc2Vjb25kYXJ5LXJnYjogOTgsNDMsMjE3O1xuICAtLWlvbi1jb2xvci1zZWNvbmRhcnktY29udHJhc3Q6ICNmZmZmZmY7XG4gIC0taW9uLWNvbG9yLXNlY29uZGFyeS1jb250cmFzdC1yZ2I6IDI1NSwyNTUsMjU1O1xuICAtLWlvbi1jb2xvci1zZWNvbmRhcnktc2hhZGU6ICM1NjI2YmY7XG4gIC0taW9uLWNvbG9yLXNlY29uZGFyeS10aW50OiAjNzI0MGRkO1xuXG4gIC0taW9uLWNvbG9yLXRlcnRpYXJ5OiAjNzUyQkRGO1xuICAtLWlvbi1jb2xvci10ZXJ0aWFyeS1yZ2I6IDExNyw0MywyMjM7XG4gIC0taW9uLWNvbG9yLXRlcnRpYXJ5LWNvbnRyYXN0OiAjZmZmZmZmO1xuICAtLWlvbi1jb2xvci10ZXJ0aWFyeS1jb250cmFzdC1yZ2I6IDI1NSwyNTUsMjU1O1xuICAtLWlvbi1jb2xvci10ZXJ0aWFyeS1zaGFkZTogIzY3MjZjNDtcbiAgLS1pb24tY29sb3ItdGVydGlhcnktdGludDogIzgzNDBlMjtcblxuICAtLWlvbi1jb2xvci1zdWNjZXNzOiAjMzNjYzczO1xuICAtLWlvbi1jb2xvci1zdWNjZXNzLXJnYjogNTEsMjA0LDExNTtcbiAgLS1pb24tY29sb3Itc3VjY2Vzcy1jb250cmFzdDogI2ZmZmZmZjtcbiAgLS1pb24tY29sb3Itc3VjY2Vzcy1jb250cmFzdC1yZ2I6IDAsMCwwO1xuICAtLWlvbi1jb2xvci1zdWNjZXNzLXNoYWRlOiAjMmRiNDY1O1xuICAtLWlvbi1jb2xvci1zdWNjZXNzLXRpbnQ6ICM0N2QxODE7XG5cbiAgLS1pb24tY29sb3Itd2FybmluZzogI2YyZTIzMTtcbiAgLS1pb24tY29sb3Itd2FybmluZy1yZ2I6IDI0MiwyMjYsNDk7XG4gIC0taW9uLWNvbG9yLXdhcm5pbmctY29udHJhc3Q6ICNmZmY7XG4gIC0taW9uLWNvbG9yLXdhcm5pbmctY29udHJhc3QtcmdiOiAyNTUsMjU1LDI1NTtcbiAgLS1pb24tY29sb3Itd2FybmluZy1zaGFkZTogI2Q1YzcyYjtcbiAgLS1pb24tY29sb3Itd2FybmluZy10aW50OiAjZjNlNTQ2O1xuXG4gIC0taW9uLWNvbG9yLWRhbmdlcjogI2U1M2UzZTtcbiAgLS1pb24tY29sb3ItZGFuZ2VyLXJnYjogMjI5LDYyLDYyO1xuICAtLWlvbi1jb2xvci1kYW5nZXItY29udHJhc3Q6ICNmZmZmZmY7XG4gIC0taW9uLWNvbG9yLWRhbmdlci1jb250cmFzdC1yZ2I6IDI1NSwyNTUsMjU1O1xuICAtLWlvbi1jb2xvci1kYW5nZXItc2hhZGU6ICNjYTM3Mzc7XG4gIC0taW9uLWNvbG9yLWRhbmdlci10aW50OiAjZTg1MTUxO1xuXG4gIC0taW9uLWNvbG9yLW1lZGl1bTogI2ZjZmFmZjtcbiAgLS1pb24tY29sb3ItbWVkaXVtLXJnYjogMjUyLDI1MCwyNTU7XG4gIC0taW9uLWNvbG9yLW1lZGl1bS1jb250cmFzdDogIzAwMDAwMDtcbiAgLS1pb24tY29sb3ItbWVkaXVtLWNvbnRyYXN0LXJnYjogMCwwLDA7XG4gIC0taW9uLWNvbG9yLW1lZGl1bS1zaGFkZTogI2RlZGNlMDtcbiAgLS1pb24tY29sb3ItbWVkaXVtLXRpbnQ6ICNmY2ZiZmY7XG5cbiAgLS1pb24tY29sb3ItbGlnaHQ6ICNGRkZGRkY7XG4gIC0taW9uLWNvbG9yLWxpZ2h0LXJnYjogMjU1LDI1NSwyNTU7XG4gIC0taW9uLWNvbG9yLWxpZ2h0LWNvbnRyYXN0OiAjMWExYTFhO1xuICAtLWlvbi1jb2xvci1saWdodC1jb250cmFzdC1yZ2I6IDAsMCwwO1xuICAtLWlvbi1jb2xvci1saWdodC1zaGFkZTogI2UwZTBlMDtcbiAgLS1pb24tY29sb3ItbGlnaHQtdGludDogI2ZmZmZmZjtcblxuICAtLWlvbi10ZXh0LWNvbG9yOiAjMWMxYzFjO1xuICAtLWlvbi1pdGVtLWJhY2tncm91bmQ6IHZhcigtLWlvbi1jb2xvci1saWdodCk7XG59XG5cbi8qXG4qIERhcmsgQ29sb3JzXG4qIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiovXG5cbmJvZHkuZGFyayB7XG4gIC0taW9uLWNvbG9yLXByaW1hcnk6ICM3OTI0ZjA7XG4gIC0taW9uLWNvbG9yLXByaW1hcnktcmdiOiAxMjEsMzYsMjQwO1xuICAtLWlvbi1jb2xvci1wcmltYXJ5LWNvbnRyYXN0OiAjZmZmZmZmO1xuICAtLWlvbi1jb2xvci1wcmltYXJ5LWNvbnRyYXN0LXJnYjogMjU1LDI1NSwyNTU7XG4gIC0taW9uLWNvbG9yLXByaW1hcnktc2hhZGU6ICM2YTIwZDM7XG4gIC0taW9uLWNvbG9yLXByaW1hcnktdGludDogIzg2M2FmMjtcblxuICAtLWlvbi1jb2xvci1zZWNvbmRhcnk6ICM2MjJCRDk7XG4gIC0taW9uLWNvbG9yLXNlY29uZGFyeS1yZ2I6IDk4LDQzLDIxNztcbiAgLS1pb24tY29sb3Itc2Vjb25kYXJ5LWNvbnRyYXN0OiAjZmZmZmZmO1xuICAtLWlvbi1jb2xvci1zZWNvbmRhcnktY29udHJhc3QtcmdiOiAyNTUsMjU1LDI1NTtcbiAgLS1pb24tY29sb3Itc2Vjb25kYXJ5LXNoYWRlOiAjNTYyNmJmO1xuICAtLWlvbi1jb2xvci1zZWNvbmRhcnktdGludDogIzcyNDBkZDtcblxuICAtLWlvbi1jb2xvci10ZXJ0aWFyeTogIzc1MkJERjtcbiAgLS1pb24tY29sb3ItdGVydGlhcnktcmdiOiAxMTcsNDMsMjIzO1xuICAtLWlvbi1jb2xvci10ZXJ0aWFyeS1jb250cmFzdDogI2ZmZmZmZjtcbiAgLS1pb24tY29sb3ItdGVydGlhcnktY29udHJhc3QtcmdiOiAyNTUsMjU1LDI1NTtcbiAgLS1pb24tY29sb3ItdGVydGlhcnktc2hhZGU6ICM2NzI2YzQ7XG4gIC0taW9uLWNvbG9yLXRlcnRpYXJ5LXRpbnQ6ICM4MzQwZTI7XG5cbiAgLS1pb24tY29sb3Itc3VjY2VzczogIzMzY2M3MztcbiAgLS1pb24tY29sb3Itc3VjY2Vzcy1yZ2I6IDUxLDIwNCwxMTU7XG4gIC0taW9uLWNvbG9yLXN1Y2Nlc3MtY29udHJhc3Q6ICNmZmZmZmY7XG4gIC0taW9uLWNvbG9yLXN1Y2Nlc3MtY29udHJhc3QtcmdiOiAwLDAsMDtcbiAgLS1pb24tY29sb3Itc3VjY2Vzcy1zaGFkZTogIzJkYjQ2NTtcbiAgLS1pb24tY29sb3Itc3VjY2Vzcy10aW50OiAjNDdkMTgxO1xuXG4gIC0taW9uLWNvbG9yLXdhcm5pbmc6ICNmMmUyMzE7XG4gIC0taW9uLWNvbG9yLXdhcm5pbmctcmdiOiAyNDIsMjI2LDQ5O1xuICAtLWlvbi1jb2xvci13YXJuaW5nLWNvbnRyYXN0OiAjZmZmO1xuICAtLWlvbi1jb2xvci13YXJuaW5nLWNvbnRyYXN0LXJnYjogMjU1LDI1NSwyNTU7XG4gIC0taW9uLWNvbG9yLXdhcm5pbmctc2hhZGU6ICNkNWM3MmI7XG4gIC0taW9uLWNvbG9yLXdhcm5pbmctdGludDogI2YzZTU0NjtcblxuICAtLWlvbi1jb2xvci1kYW5nZXI6ICNlNTNlM2U7XG4gIC0taW9uLWNvbG9yLWRhbmdlci1yZ2I6IDIyOSw2Miw2MjtcbiAgLS1pb24tY29sb3ItZGFuZ2VyLWNvbnRyYXN0OiAjZmZmZmZmO1xuICAtLWlvbi1jb2xvci1kYW5nZXItY29udHJhc3QtcmdiOiAyNTUsMjU1LDI1NTtcbiAgLS1pb24tY29sb3ItZGFuZ2VyLXNoYWRlOiAjY2EzNzM3O1xuICAtLWlvbi1jb2xvci1kYW5nZXItdGludDogI2U4NTE1MTtcblxuICAtLWlvbi1jb2xvci1tZWRpdW06ICMxMjEyMTI7XG4gIC0taW9uLWNvbG9yLW1lZGl1bS1yZ2I6IDE4LDE4LDE4O1xuICAtLWlvbi1jb2xvci1tZWRpdW0tY29udHJhc3Q6ICNmZmZmZmY7XG4gIC0taW9uLWNvbG9yLW1lZGl1bS1jb250cmFzdC1yZ2I6IDI1NSwyNTUsMjU1O1xuICAtLWlvbi1jb2xvci1tZWRpdW0tc2hhZGU6ICMxMDEwMTA7XG4gIC0taW9uLWNvbG9yLW1lZGl1bS10aW50OiAjMmEyYTJhO1xuXG4gIC0taW9uLWNvbG9yLWxpZ2h0OiAjMWQxZDFkO1xuICAtLWlvbi1jb2xvci1saWdodC1yZ2I6IDI5LDI5LDI5O1xuICAtLWlvbi1jb2xvci1saWdodC1jb250cmFzdDogI2ZmZmZmZjtcbiAgLS1pb24tY29sb3ItbGlnaHQtY29udHJhc3QtcmdiOiAyNTUsMjU1LDI1NTtcbiAgLS1pb24tY29sb3ItbGlnaHQtc2hhZGU6ICMxYTFhMWE7XG4gIC0taW9uLWNvbG9yLWxpZ2h0LXRpbnQ6ICMzNDM0MzQ7XG5cbiAgLS1pb24tdGV4dC1jb2xvcjogI2ZmZjtcbiAgLS1pb24taXRlbS1iYWNrZ3JvdW5kOiB2YXIoLS1pb24tY29sb3ItbGlnaHQpO1xufVxuIiwiQGltcG9ydCBcIi4uLy4uLy4uLy4uLy4uL3RoZW1lL3ZhcmlhYmxlcy5zY3NzXCI7XG5cbmlvbi1saXN0IHtcbiAgLS1pb24tYmFja2dyb3VuZC1jb2xvcjogdmFyKC0taW9uLWNvbG9yLWxpZ2h0KTtcbn1cblxuKiB7XG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG59XG5cbi8qIFRoZSBhY3R1YWwgdGltZWxpbmUgKHRoZSB2ZXJ0aWNhbCBydWxlcikgKi9cbi50aW1lbGluZSB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgbWF4LXdpZHRoOiAxMjAwcHg7XG4gIG1hcmdpbjogMCBhdXRvO1xuICBtaW4taGVpZ2h0OiA3MHB4O1xufVxuXG4vKiBUaGUgYWN0dWFsIHRpbWVsaW5lICh0aGUgdmVydGljYWwgcnVsZXIpICovXG4udGltZWxpbmU6OmFmdGVyIHtcbiAgY29udGVudDogJyc7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgd2lkdGg6IDZweDtcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0taW9uLWNvbG9yLXByaW1hcnkpO1xuICB0b3A6IDIwcHg7XG4gIGJvdHRvbTogNjZweDtcbiAgbGVmdDogNTAlO1xuICBtYXJnaW4tbGVmdDogLTNweDtcbn1cblxuLyogQ29udGFpbmVyIGFyb3VuZCBjb250ZW50ICovXG4uY29udGFpbmVyIHtcbiAgcGFkZGluZzogMTBweCA0MHB4O1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIGJhY2tncm91bmQtY29sb3I6IGluaGVyaXQ7XG4gIHdpZHRoOiA1MCU7XG59XG5cbi8qIFRoZSBjaXJjbGVzIG9uIHRoZSB0aW1lbGluZSAqL1xuLmNvbnRhaW5lcjo6YWZ0ZXIge1xuICBjb250ZW50OiAnJztcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB3aWR0aDogMjVweDtcbiAgaGVpZ2h0OiAyNXB4O1xuICByaWdodDogLTE3cHg7XG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWlvbi1jb2xvci1saWdodCk7XG4gIGJvcmRlcjogNHB4IHNvbGlkIHZhcigtLWlvbi1jb2xvci1wcmltYXJ5KTtcbiAgdG9wOiAxNXB4O1xuICBib3JkZXItcmFkaXVzOiA1MCU7XG4gIHotaW5kZXg6IDE7XG59XG5cbi8qIFBsYWNlIHRoZSBjb250YWluZXIgdG8gdGhlIGxlZnQgKi9cbi5sZWZ0IHtcbiAgbGVmdDogMDtcbn1cblxuLyogUGxhY2UgdGhlIGNvbnRhaW5lciB0byB0aGUgcmlnaHQgKi9cbi5yaWdodCB7XG4gIGxlZnQ6IDUwJTtcbn1cblxuLyogRml4IHRoZSBjaXJjbGUgZm9yIGNvbnRhaW5lcnMgb24gdGhlIHJpZ2h0IHNpZGUgKi9cbi5yaWdodDo6YWZ0ZXIge1xuICBsZWZ0OiAtMTZweDtcbn1cblxuLyogVGhlIGFjdHVhbCBjb250ZW50ICovXG4uY29udGVudCB7XG4gIHBhZGRpbmc6IDIwcHggMzBweDtcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0taW9uLWJhY2tncm91bmQtY29sb3IsICNmZmYpO1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIGJvcmRlci1yYWRpdXM6IDZweDtcbn1cblxuLyogTWVkaWEgcXVlcmllcyAtIFJlc3BvbnNpdmUgdGltZWxpbmUgb24gc2NyZWVucyBsZXNzIHRoYW4gNjAwcHggd2lkZSAqL1xuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogNjAwcHgpIHtcbi8qIFBsYWNlIHRoZSB0aW1lbGluZSB0byB0aGUgbGVmdCAqL1xuICAudGltZWxpbmU6OmFmdGVyIHtcbiAgICBsZWZ0OiAzMXB4O1xuICB9XG5cbi8qIEZ1bGwtd2lkdGggY29udGFpbmVycyAqL1xuICAuY29udGFpbmVyIHtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBwYWRkaW5nLWxlZnQ6IDcwcHg7XG4gICAgcGFkZGluZy1yaWdodDogMjVweDtcbiAgfVxuXG4vKiBNYWtlIHN1cmUgYWxsIGNpcmNsZXMgYXJlIGF0IHRoZSBzYW1lIHNwb3QgKi9cbiAgLmxlZnQ6OmFmdGVyLCAucmlnaHQ6OmFmdGVyIHtcbiAgICBsZWZ0OiAxNXB4O1xuICB9XG5cbi8qIE1ha2UgYWxsIHJpZ2h0IGNvbnRhaW5lcnMgYmVoYXZlIGxpa2UgdGhlIGxlZnQgb25lcyAqL1xuICAucmlnaHQge1xuICAgIGxlZnQ6IDA7XG4gIH1cbn1cblxuaHIge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1pb24tY29sb3Itc3RlcC01NTAsICM3MzczNzMpO1xufVxuXG5pb24tYmFkZ2Uge1xuICBtYXJnaW4tcmlnaHQ6IDVweDtcblxuICBpb24tbGFiZWwge1xuICAgIGNvbG9yOiAjZmZmO1xuICAgIGZvbnQtd2VpZ2h0OiBub3JtYWwgIWltcG9ydGFudDtcbiAgfVxufVxuXG5pb24tZGF0ZXRpbWUge1xuICBkaXNwbGF5OiBpbmxpbmU7XG59XG4iXX0= */";

/***/ })

}]);
//# sourceMappingURL=src_app_pages_actions_admin_manage-schedule_manage-schedule_module_ts.js.map