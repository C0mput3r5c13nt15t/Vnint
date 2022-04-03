(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["main"],{

/***/ 66224:
/*!**********************************************************************************************************************************************!*\
  !*** ./node_modules/@angular-devkit/build-angular/node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./src/app/app.component.html ***!
  \**********************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<ion-app>\n  <ion-split-pane contentId=\"main-content\">\n    <ion-menu [disabled]=\"!auth.getLoggedIn\" contentId=\"main-content\" type=\"push\" color=\"light\">\n      <div>\n        <ion-toolbar [routerLink]=\"['/dashboard']\" color=\"light\"><ion-title class=\"app-title\" slot=\"start\">Diribitio</ion-title></ion-toolbar>\n      </div>\n      <ion-content color=\"light\">\n        <ion-list id=\"inbox-list\">\n          <ion-item color=\"light\" id=\"avatar\" lines=\"none\">\n            <ion-avatar slot=\"start\">\n              <app-text-avatar [name]=\"user.name\" [email]=\"user.email\"></app-text-avatar>\n            </ion-avatar>\n            <ion-label>\n              <h2>{{ user.name }}</h2>\n              <h3>{{ user.email }}</h3>\n            </ion-label>\n          </ion-item>\n\n          <br>\n\n          <ion-menu-toggle auto-hide=\"false\" *ngFor=\"let p of ('MENU.PAGES' | translate)\">\n            <ion-item color=\"light\" class=\"routes\" routerDirection=\"root\" [routerLink]=\"[p.url]\" lines=\"none\" routerLinkActive=\"selected\">\n              <ion-icon slot=\"start\" [name]=\"p.icon\" size=\"small\"></ion-icon>\n              <ion-label>{{ p.title }}</ion-label>\n            </ion-item>\n          </ion-menu-toggle>\n        </ion-list>\n        <div class=\"ion-padding\">\n          <ion-button color=\"primary\" shape=\"round\" fill=\"outline\" (click)=\"logout()\">\n            <ion-icon slot=\"start\" name=\"log-out\"></ion-icon>\n            <ion-label color=\"primary\">{{ 'MENU.ACTIONS.logout' | translate }}</ion-label>\n          </ion-button>\n        </div>\n        <app-menu-footer></app-menu-footer>\n      </ion-content>\n    </ion-menu>\n    <ion-router-outlet id=\"main-content\"></ion-router-outlet>\n  </ion-split-pane>\n</ion-app>\n");

/***/ }),

/***/ 42486:
/*!***************************************************************************************************************************************************************************!*\
  !*** ./node_modules/@angular-devkit/build-angular/node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./src/app/components/alert-card/alert-card.component.html ***!
  \***************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<div class=\"alerts-card-div\">\n  <ion-card color=\"light\" button=\"true\" (click)=\"details = !details\" [style]=\"alert.color == 'success' ? 'border-left: 10px var(--ion-color-success) solid;' : alert.color == 'danger' ? 'border-left: 10px var(--ion-color-danger) solid;' : 'border-left: 10px var(--ion-color-primary) solid;'\">\n    <ion-card-header >\n      <ion-card-title>\n        {{ alert.title }} <ion-icon [name]=\"alert.icon\" [color]=\"alert.color\"></ion-icon>\n      </ion-card-title>\n    </ion-card-header>\n    <ion-card-content [@openClose]=\"details ? 'open' : 'closed'\">\n      <ion-label text-wrap>{{ alert.created_at | date:( 'GENERAL.exactTimeDisplayFormat' | translate ):( 'GENERAL.timezone' | translate ):( 'GENERAL.locale' | translate ) }}: {{ alert.message }}</ion-label>\n    </ion-card-content>\n  </ion-card>\n</div>\n<!-- *ngIf=\"arrayContainsArray(permissions, button.requiredPermissions) && arrayContainsArray(eventPermissions, button.requiredPermissions)\" -->\n<!--[style]=\"'border-left: 5px solid var(&#45;&#45;ion-color-' + alert.color + ');'\"-->\n");

/***/ }),

/***/ 75309:
/*!*****************************************************************************************************************************************************************************!*\
  !*** ./node_modules/@angular-devkit/build-angular/node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./src/app/components/back-button/back-button.component.html ***!
  \*****************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<!--<a  class=\"animated-link\" routerDirection=\"back\">{{ 'GENERAL.back' | translate }}</a>-->\n<ion-button (click)=\"back()\">\n  <ion-icon slot=\"icon-only\" name=\"arrow-back\"></ion-icon>\n</ion-button>\n<!--<ion-button slot=\"icon-only\" color=\"primary\"   fill=\"outline\"><ion-icon name=\"chevron-back\"></ion-icon></ion-button>-->\n\n");

/***/ }),

/***/ 72994:
/*!***********************************************************************************************************************************************************************************!*\
  !*** ./node_modules/@angular-devkit/build-angular/node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./src/app/components/card-title-bar/card-title-bar.component.html ***!
  \***********************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<ion-toolbar [color]=\"color\">\n  <ion-buttons slot=\"start\" *ngIf=\"backButton == true\">\n    <app-back-button></app-back-button>\n  </ion-buttons>\n  <ion-title [style]=\"backButton == true ? 'margin-left: 10px' : 'margin-left: 20px'\">{{ title }}</ion-title>\n  <ion-buttons slot=\"end\" *ngIf=\"help\">\n    <ion-button (click)=\"presentHelp()\">\n      <ion-icon slot=\"icon-only\" name=\"help-circle\"></ion-icon>\n    </ion-button>\n  </ion-buttons>\n</ion-toolbar>\n\n\n");

/***/ }),

/***/ 12533:
/*!***************************************************************************************************************************************************************************!*\
  !*** ./node_modules/@angular-devkit/build-angular/node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./src/app/components/empty-card/empty-card.component.html ***!
  \***************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<div>\n  <h1><span><fa-icon icon=\"ghost\"></fa-icon></span></h1>\n  <h2>{{ message }}</h2>\n</div>\n");

/***/ }),

/***/ 40765:
/*!*******************************************************************************************************************************************************************!*\
  !*** ./node_modules/@angular-devkit/build-angular/node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./src/app/components/footer/footer.component.html ***!
  \*******************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<div class=\"app-footer\" *ngIf=\"!auth.getLoggedIn\">\n  <ion-toolbar color=\"light\">\n    <ion-grid class=\"footer-grid\">\n      <ion-row>\n        <ion-col sizeXl=\"3\" sizeLg=\"3\" sizeMd=\"6\" sizeSm=\"6\" sizeXs=\"12\"><ion-label id=\"legal\">{{ 'OTHER.FOOTER.copyright' | translate }}</ion-label></ion-col>\n        <ion-col sizeXl=\"3\" sizeLg=\"3\" sizeMd=\"6\" sizeSm=\"6\" sizeXs=\"12\"><a class=\"animated-link\" [routerLink]=\"['/terms']\" routerDirection=\"root\">{{ 'OTHER.FOOTER.terms' | translate }}</a></ion-col>\n        <ion-col sizeXl=\"3\" sizeLg=\"3\" sizeMd=\"6\" sizeSm=\"6\" sizeXs=\"12\"><a class=\"animated-link\" [routerLink]=\"['/impressum']\" routerDirection=\"root\">{{ 'OTHER.FOOTER.impressum' | translate }}</a></ion-col>\n        <ion-col sizeXl=\"3\" sizeLg=\"3\" sizeMd=\"6\" sizeSm=\"6\" sizeXs=\"12\"><a class=\"animated-link\" [routerLink]=\"['/settings']\" routerDirection=\"root\">{{ 'OTHER.FOOTER.settings' | translate }}</a></ion-col>\n      </ion-row>\n    </ion-grid>\n  </ion-toolbar>\n</div>\n\n\n");

/***/ }),

/***/ 2465:
/*!***************************************************************************************************************************************************************************!*\
  !*** ./node_modules/@angular-devkit/build-angular/node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./src/app/components/form-error/form-error.component.html ***!
  \***************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<!--suppress TypeScriptValidateTypes -->\n<div *ngFor=\"let error of errors | keyvalue\" class=\"error\">\n  <span *ngFor=\"let errorMessage of errors[error.key] | keyvalue\">\n    <ion-label color=\"danger\">{{ errorMessage.key }}</ion-label><br>\n  </span>\n</div>\n");

/***/ }),

/***/ 42:
/*!*****************************************************************************************************************************************************************************!*\
  !*** ./node_modules/@angular-devkit/build-angular/node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./src/app/components/menu-footer/menu-footer.component.html ***!
  \*****************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<div class=\"menu-footer\">\n  <ion-toolbar color=\"light\">\n    <ion-grid>\n      <ion-row>\n        <ion-col size=\"6\"><a class=\"animated-link\" [routerLink]=\"['/terms']\">{{ 'OTHER.FOOTER.terms' | translate }}</a></ion-col>\n        <ion-col size=\"6\"><a class=\"animated-link\" [routerLink]=\"['/impressum']\">{{ 'OTHER.FOOTER.impressum' | translate }}</a></ion-col>\n        <ion-col size=\"12\"><ion-label class=\"copyright\">{{ 'OTHER.FOOTER.copyright' | translate }}</ion-label></ion-col>\n      </ion-row>\n    </ion-grid>\n  </ion-toolbar>\n</div>\n");

/***/ }),

/***/ 60838:
/*!***********************************************************************************************************************************************************************!*\
  !*** ./node_modules/@angular-devkit/build-angular/node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./src/app/components/nav-card/nav-card.component.html ***!
  \***********************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<div class=\"nav-card-div\">\n  <ion-card color=\"light\">\n    <ion-card-content *ngIf=\"cardButtonsArray\">\n      <div class=\"type\">\n        <h1>{{ cardTitle }}</h1><ion-icon name=\"{{ cardIcon }}\"></ion-icon>\n      </div>\n      <ng-container *ngFor=\"let button of cardButtonsArray\">\n        <ng-container *ngIf=\"arrayContainsArray(permissions, button.requiredPermissions) && arrayContainsArray(eventPermissions, button.requiredPermissions)\">\n          <ion-chip color=\"primary\" (click)=\"route(button.link)\">\n            <ion-icon color=\"primary\" name=\"{{ button.icon }}\"></ion-icon>\n            <ion-label>{{ button.title }}</ion-label>\n          </ion-chip>\n        </ng-container>\n      </ng-container>\n    </ion-card-content>\n  </ion-card>\n</div>\n<!-- *ngIf=\"arrayContainsArray(permissions, button.requiredPermissions) && arrayContainsArray(eventPermissions, button.requiredPermissions)\" -->\n");

/***/ }),

/***/ 8946:
/*!*****************************************************************************************************************************************************************************!*\
  !*** ./node_modules/@angular-devkit/build-angular/node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./src/app/components/text-avatar/text-avatar.component.html ***!
  \*****************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<p>\n  <!-- [style.background]=\"calculateColor(name)\" -->\n  <span class=\"avatar\" >{{ name.slice(0, 2).toUpperCase() }}</span>\n</p>\n");

/***/ }),

/***/ 92074:
/*!*********************************************************************************************************************************************************************!*\
  !*** ./node_modules/@angular-devkit/build-angular/node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./src/app/components/toolbar/toolbar.component.html ***!
  \*********************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<div>\n  <ion-toolbar class=\"primary-toolbar\" color=\"light\">\n    <ion-title [routerLink]=\"['/login']\" *ngIf=\"!auth.getLoggedIn\" class=\"app-title\" slot=\"start\">Diribitio</ion-title>\n    <ion-buttons slot=\"start\">\n      <ion-menu-button></ion-menu-button>\n    </ion-buttons>\n    <ion-grid *ngIf=\"auth.getLoggedIn && isDesktop\">\n      <ion-row>\n        <ng-container *ngIf=\"auth.getLoggedIn\">\n          <ion-col *ngFor=\"let page of navigationService.getHistory\">\n            <ion-chip color=\"primary\" [routerLink]=\"[page]\" routerDirection=\"root\">\n              <ion-label color=\"primary\">\n                <b>{{ page[1].toUpperCase() + page.substr(2).toLowerCase() }}</b>\n              </ion-label>\n            </ion-chip>\n          </ion-col>\n        </ng-container>\n      </ion-row>\n    </ion-grid>\n    <ion-buttons slot=\"end\">\n      <ion-button [routerLink]=\"['/settings']\" routerDirection=\"forward\" color=\"primary\">\n        <ion-icon name=\"settings\" size=\"medium\"></ion-icon>\n      </ion-button>\n      <ion-button (click)=\"themeChange()\" color=\"primary\">\n        <ion-icon *ngIf=\"styleService.getDarkMode\" name=\"moon\" size=\"medium\" color=\"primary\"></ion-icon>\n        <ion-icon *ngIf=\"!styleService.getDarkMode\" name=\"sunny\" size=\"medium\" color=\"primary\"></ion-icon>\n      </ion-button>\n    </ion-buttons>\n  </ion-toolbar>\n</div>\n");

/***/ }),

/***/ 68438:
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AppRoutingModule": () => (/* binding */ AppRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 21838);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 789);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 9538);
/* harmony import */ var _guards_auth_guard__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./guards/auth.guard */ 5903);




const routes = [
    {
        path: '',
        redirectTo: 'login',
        pathMatch: 'full'
    },
    {
        path: 'login',
        loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_pages_auth_login_login_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./pages/auth/login/login.module */ 41454)).then(m => m.LoginPageModule)
    },
    {
        path: 'forgot-password',
        loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_pages_auth_forgot-password_forgot-password_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./pages/auth/forgot-password/forgot-password.module */ 67556)).then(m => m.ForgotPasswordPageModule)
    },
    {
        path: 'register',
        loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_pages_auth_register_register_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./pages/auth/register/register.module */ 69111)).then(m => m.RegisterPageModule)
    },
    {
        path: 'settings',
        loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_pages_settings_settings_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./pages/settings/settings.module */ 16699)).then(m => m.SettingsPageModule)
    },
    {
        path: 'terms',
        loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_pages_other_terms_terms_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./pages/other/terms/terms.module */ 465)).then(m => m.TermsPageModule)
    },
    {
        path: 'impressum',
        loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_pages_other_impressum_impressum_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./pages/other/impressum/impressum.module */ 67138)).then(m => m.ImpressumPageModule)
    },
    {
        path: 'help',
        loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_pages_other_help_help_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./pages/other/help/help.module */ 15762)).then(m => m.HelpPageModule)
    },
    {
        path: 'about',
        loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_pages_other_about_about_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./pages/other/about/about.module */ 21049)).then(m => m.AboutPageModule)
    },
    {
        path: 'reset-password/:ResetToken',
        loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_pages_auth_reset-password_reset-password_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./pages/auth/reset-password/reset-password.module */ 77807)).then(m => m.ResetPasswordPageModule)
    },
    {
        path: 'dashboard',
        loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("common"), __webpack_require__.e("src_app_pages_dashboard_dashboard_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./pages/dashboard/dashboard.module */ 7945)).then(m => m.DashboardPageModule)
    },
    {
        path: 'notifications',
        canActivate: [_guards_auth_guard__WEBPACK_IMPORTED_MODULE_0__.AuthGuard],
        loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_pages_notifications_notifications_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./pages/notifications/notifications.module */ 27483)).then(m => m.NotificationsPageModule)
    },
    {
        path: 'account',
        canActivate: [_guards_auth_guard__WEBPACK_IMPORTED_MODULE_0__.AuthGuard],
        loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_pages_account_account_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./pages/account/account.module */ 30944)).then(m => m.AccountPageModule)
    },
    {
        path: 'create-project',
        canActivate: [_guards_auth_guard__WEBPACK_IMPORTED_MODULE_0__.AuthGuard],
        loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("common"), __webpack_require__.e("src_app_pages_actions_project_create-project_create-project_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./pages/actions/project/create-project/create-project.module */ 3037)).then(m => m.CreateProjectPageModule)
    },
    {
        path: 'give-feedback',
        loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("common"), __webpack_require__.e("src_app_pages_actions_give-feedback_give-feedback_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./pages/actions/give-feedback/give-feedback.module */ 35477)).then(m => m.GiveFeedbackPageModule)
    },
    {
        path: 'verify-email',
        canActivate: [_guards_auth_guard__WEBPACK_IMPORTED_MODULE_0__.AuthGuard],
        loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_pages_actions_verify-email_verify-email_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./pages/actions/verify-email/verify-email.module */ 93607)).then(m => m.VerifyEmailPageModule)
    },
    {
        path: 'manage-friends',
        canActivate: [_guards_auth_guard__WEBPACK_IMPORTED_MODULE_0__.AuthGuard],
        loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("common"), __webpack_require__.e("src_app_pages_actions_manage-friends_manage-friends_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./pages/actions/manage-friends/manage-friends.module */ 94709)).then(m => m.ManageFriendsPageModule)
    },
    {
        path: 'view-schedule',
        canActivate: [_guards_auth_guard__WEBPACK_IMPORTED_MODULE_0__.AuthGuard],
        loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("common"), __webpack_require__.e("src_app_pages_actions_view-schedule_view-schedule_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./pages/actions/view-schedule/view-schedule.module */ 58520)).then(m => m.ViewSchedulePageModule)
    },
    {
        path: 'data-use',
        canActivate: [_guards_auth_guard__WEBPACK_IMPORTED_MODULE_0__.AuthGuard],
        loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_pages_other_data-use_data-use_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./pages/other/data-use/data-use.module */ 74691)).then(m => m.DataUsePageModule)
    },
    {
        path: 'manage-user-roles',
        canActivate: [_guards_auth_guard__WEBPACK_IMPORTED_MODULE_0__.AuthGuard],
        loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("common"), __webpack_require__.e("src_app_pages_actions_admin_manage-user-roles_manage-user-roles_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./pages/actions/admin/manage-user-roles/manage-user-roles.module */ 3582)).then(m => m.AdministratePageModule)
    },
    {
        path: 'manage-application-settings',
        canActivate: [_guards_auth_guard__WEBPACK_IMPORTED_MODULE_0__.AuthGuard],
        loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_pages_actions_admin_manage-application-settings_manage-application-settings_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./pages/actions/admin/manage-application-settings/manage-application-settings.module */ 4835)).then(m => m.ManageApplicationSettingsPageModule)
    },
    {
        path: 'view-feedback',
        canActivate: [_guards_auth_guard__WEBPACK_IMPORTED_MODULE_0__.AuthGuard],
        loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("common"), __webpack_require__.e("src_app_pages_actions_admin_view-feedback_view-feedback_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./pages/actions/admin/view-feedback/view-feedback.module */ 50742)).then(m => m.ViewFeedbackPageModule)
    },
    {
        path: 'project/:projectId',
        canActivate: [_guards_auth_guard__WEBPACK_IMPORTED_MODULE_0__.AuthGuard],
        loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("common"), __webpack_require__.e("src_app_pages_actions_project_view-project_view-project_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./pages/actions/project/view-project/view-project.module */ 778)).then(m => m.ViewProjectPageModule)
    },
    {
        path: 'view-projects',
        canActivate: [_guards_auth_guard__WEBPACK_IMPORTED_MODULE_0__.AuthGuard],
        loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("common"), __webpack_require__.e("src_app_pages_actions_project_view-projects_view-projects_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./pages/actions/project/view-projects/view-projects.module */ 60681)).then(m => m.ViewProjectsPageModule)
    },
    {
        path: 'feedback/:feedbackId',
        canActivate: [_guards_auth_guard__WEBPACK_IMPORTED_MODULE_0__.AuthGuard],
        loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("common"), __webpack_require__.e("src_app_pages_actions_admin_view-single-feedback_view-single-feedback_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./pages/actions/admin/view-single-feedback/view-single-feedback.module */ 68876)).then(m => m.ViewSingleFeedbackPageModule)
    },
    {
        path: 'manage-project',
        canActivate: [_guards_auth_guard__WEBPACK_IMPORTED_MODULE_0__.AuthGuard],
        loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("common"), __webpack_require__.e("src_app_pages_actions_project_manage-project_manage-project_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./pages/actions/project/manage-project/manage-project.module */ 68785)).then(m => m.ManageProjectPageModule)
    },
    {
        path: 'edit-project',
        canActivate: [_guards_auth_guard__WEBPACK_IMPORTED_MODULE_0__.AuthGuard],
        loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("common"), __webpack_require__.e("src_app_pages_actions_project_edit-project_edit-project_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./pages/actions/project/edit-project/edit-project.module */ 26285)).then(m => m.EditProjectPageModule)
    },
    {
        path: 'manage-events',
        canActivate: [_guards_auth_guard__WEBPACK_IMPORTED_MODULE_0__.AuthGuard],
        loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("common"), __webpack_require__.e("src_app_pages_actions_admin_manage-schedule_manage-schedule_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./pages/actions/admin/manage-schedule/manage-schedule.module */ 50078)).then(m => m.ManageSchedulePageModule)
    },
    {
        path: 'manage-friendships',
        canActivate: [_guards_auth_guard__WEBPACK_IMPORTED_MODULE_0__.AuthGuard],
        loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("common"), __webpack_require__.e("src_app_pages_actions_admin_manage-friendships_manage-friendships_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./pages/actions/admin/manage-friendships/manage-friendships.module */ 32452)).then(m => m.ManageFriendshipsPageModule)
    },
    {
        path: 'manage-preferences',
        canActivate: [_guards_auth_guard__WEBPACK_IMPORTED_MODULE_0__.AuthGuard],
        loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("common"), __webpack_require__.e("src_app_pages_actions_manage-preferences_manage-preferences_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./pages/actions/manage-preferences/manage-preferences.module */ 77614)).then(m => m.ManagePreferencesPageModule)
    },
    {
        path: 'manage-users',
        canActivate: [_guards_auth_guard__WEBPACK_IMPORTED_MODULE_0__.AuthGuard],
        loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("common"), __webpack_require__.e("src_app_pages_actions_admin_manage-users_manage-users_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./pages/actions/admin/manage-users/manage-users.module */ 91174)).then(m => m.ManageUsersPageModule)
    },
    {
        path: 'manage-sorting',
        canActivate: [_guards_auth_guard__WEBPACK_IMPORTED_MODULE_0__.AuthGuard],
        loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("common"), __webpack_require__.e("src_app_pages_actions_admin_manage-sorting_manage-sorting_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./pages/actions/admin/manage-sorting/manage-sorting.module */ 23677)).then(m => m.ManageSortingPageModule)
    },
    {
        path: 'notifications',
        loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_pages_notifications_notifications_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./pages/notifications/notifications.module */ 27483)).then(m => m.NotificationsPageModule)
    },
    {
        path: 'manage-application-settings',
        loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_pages_actions_admin_manage-application-settings_manage-application-settings_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./pages/actions/admin/manage-application-settings/manage-application-settings.module */ 4835)).then(m => m.ManageApplicationSettingsPageModule)
    },
];
let AppRoutingModule = class AppRoutingModule {
};
AppRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [
            _angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forRoot(routes, { preloadingStrategy: _angular_router__WEBPACK_IMPORTED_MODULE_3__.PreloadAllModules })
        ],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule]
    })
], AppRoutingModule);



/***/ }),

/***/ 36104:
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AppComponent": () => (/* binding */ AppComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! tslib */ 21838);
/* harmony import */ var _home_vagrant_projects_Vnint_node_modules_angular_devkit_build_angular_node_modules_ngtools_webpack_src_loaders_direct_resource_js_app_component_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !./node_modules/@angular-devkit/build-angular/node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./app.component.html */ 66224);
/* harmony import */ var _app_component_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./app.component.scss */ 58746);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/core */ 789);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ngx-translate/core */ 52784);
/* harmony import */ var ngx_cookie_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ngx-cookie-service */ 20819);
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./services/auth.service */ 56898);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @ionic/angular */ 30585);
/* harmony import */ var _services_screensize_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./services/screensize.service */ 35436);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/router */ 9538);
/* harmony import */ var _services_error_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./services/error.service */ 55729);
/* harmony import */ var _services_style_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./services/style.service */ 7324);
/* eslint-disable @typescript-eslint/naming-convention */












let AppComponent = class AppComponent {
    constructor(translate, auth, cookieService, platform, screenSizeService, alertController, menuController, router, errorService, styleService) {
        this.translate = translate;
        this.auth = auth;
        this.cookieService = cookieService;
        this.platform = platform;
        this.screenSizeService = screenSizeService;
        this.alertController = alertController;
        this.menuController = menuController;
        this.router = router;
        this.errorService = errorService;
        this.styleService = styleService;
        this.user = {
            id: 0,
            name: 'username',
            email: 'email@email.com',
            project_id: 0,
        };
        this.initializeApp();
    }
    onResize(event) {
        this.screenSizeService.onResize(event.target.innerWidth);
    }
    ngOnInit() {
        this.authenticate();
        if ('scrollRestoration' in history) {
            history.scrollRestoration = 'manual';
        }
        this.getCookies();
    }
    initializeApp() {
        this.platform.ready().then(() => {
            this.screenSizeService.onResize(this.platform.width());
        });
        this.translate.setDefaultLang('de');
        this.setApiLanguage('de');
        this.auth.authChanged.subscribe(() => this.authenticate());
    }
    authenticate() {
        this.auth.authenticated().subscribe({
            error: error => {
                this.errorService.errorOccurred.emit(error);
            },
            next: response => {
                const resp = response;
                if (resp.authenticated == true) {
                    this.auth.setLoggedIn = true;
                    this.user = resp.user;
                }
                else {
                    this.user = {
                        id: 0,
                        name: 'username',
                        email: 'email@email.com',
                        project_id: 0,
                    };
                }
            },
        });
    }
    getCookies() {
        const cookieLanguage = this.cookieService.get('language');
        if (cookieLanguage) {
            this.translate.use(cookieLanguage);
            this.setApiLanguage(cookieLanguage);
        }
        else {
            this.setApiLanguage('de');
        }
        const cookiePrefersDark = this.cookieService.get('dark');
        this.styleService.setDarkMode = (cookiePrefersDark == 'true');
    }
    setApiLanguage(language) {
        this.auth.setAPILanguage(language).subscribe({
            error: error => {
                if (error.error.message != 'languageNotSupported') {
                    this.errorService.errorOccurred.emit(error);
                }
            },
            next: () => { }
        });
    }
    logout() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_6__.__awaiter)(this, void 0, void 0, function* () {
            const alert = yield this.alertController.create({
                header: this.translate.instant('MENU.LOGOUT_POPUP.alertHeader'),
                message: this.translate.instant('MENU.LOGOUT_POPUP.alertText'),
                buttons: [
                    {
                        cssClass: 'cancel-text',
                        text: this.translate.instant('GENERAL.POPUPS.cancel'),
                        role: 'cancel',
                    }, {
                        text: this.translate.instant('MENU.LOGOUT_POPUP.logoutButton'),
                        handler: () => {
                            this.auth.logout().subscribe({
                                next: () => { },
                                complete: () => {
                                    this.menuController.toggle();
                                    this.auth.setLoggedIn = false;
                                    this.auth.setSessionExpired = false;
                                    this.router.navigate(['/login']);
                                    this.auth.authChanged.emit('logout');
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
AppComponent.ctorParameters = () => [
    { type: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_7__.TranslateService },
    { type: _services_auth_service__WEBPACK_IMPORTED_MODULE_2__.AuthService },
    { type: ngx_cookie_service__WEBPACK_IMPORTED_MODULE_8__.CookieService },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_9__.Platform },
    { type: _services_screensize_service__WEBPACK_IMPORTED_MODULE_3__.ScreenSizeService },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_9__.AlertController },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_9__.MenuController },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_10__.Router },
    { type: _services_error_service__WEBPACK_IMPORTED_MODULE_4__.ErrorService },
    { type: _services_style_service__WEBPACK_IMPORTED_MODULE_5__.StyleService }
];
AppComponent.propDecorators = {
    onResize: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_11__.HostListener, args: ['window:resize', ['$event'],] }]
};
AppComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_6__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_11__.Component)({
        selector: 'app-root',
        template: _home_vagrant_projects_Vnint_node_modules_angular_devkit_build_angular_node_modules_ngtools_webpack_src_loaders_direct_resource_js_app_component_html__WEBPACK_IMPORTED_MODULE_0__["default"],
        styles: [_app_component_scss__WEBPACK_IMPORTED_MODULE_1__]
    })
], AppComponent);



/***/ }),

/***/ 92014:
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "createTranslateLoader": () => (/* binding */ createTranslateLoader),
/* harmony export */   "AppModule": () => (/* binding */ AppModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! tslib */ 21838);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/core */ 789);
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/platform-browser */ 35241);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @angular/router */ 9538);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/common/http */ 45331);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ 2006);
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/platform-browser/animations */ 2545);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @ionic/angular */ 30585);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @ngx-translate/core */ 52784);
/* harmony import */ var _ngx_translate_http_loader__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ngx-translate/http-loader */ 32727);
/* harmony import */ var ngx_cookie_service__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ngx-cookie-service */ 20819);
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./app.component */ 36104);
/* harmony import */ var _components_components_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./components/components.module */ 96453);
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app-routing.module */ 68438);
/* harmony import */ var _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @fortawesome/angular-fontawesome */ 1205);
/* harmony import */ var _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @fortawesome/free-solid-svg-icons */ 85557);
/* harmony import */ var _fortawesome_free_regular_svg_icons__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @fortawesome/free-regular-svg-icons */ 69211);
/* harmony import */ var _angular_common_locales_de__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common/locales/de */ 93796);
/* harmony import */ var _angular_common_locales_extra_de__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common/locales/extra/de */ 98570);

















function createTranslateLoader(http) {
    return new _ngx_translate_http_loader__WEBPACK_IMPORTED_MODULE_3__.TranslateHttpLoader(http, './assets/i18n/', '.json');
}



(0,_angular_common__WEBPACK_IMPORTED_MODULE_6__.registerLocaleData)(_angular_common_locales_de__WEBPACK_IMPORTED_MODULE_4__["default"], _angular_common_locales_extra_de__WEBPACK_IMPORTED_MODULE_5__["default"]);
let AppModule = class AppModule {
    constructor(library) {
        library.addIconPacks(_fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_7__.fas, _fortawesome_free_regular_svg_icons__WEBPACK_IMPORTED_MODULE_8__.far);
    }
};
AppModule.ctorParameters = () => [
    { type: _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_9__.FaIconLibrary }
];
AppModule = (0,tslib__WEBPACK_IMPORTED_MODULE_10__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_11__.NgModule)({
        declarations: [_app_component__WEBPACK_IMPORTED_MODULE_0__.AppComponent],
        entryComponents: [],
        imports: [
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_12__.BrowserModule,
            _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_9__.FontAwesomeModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_13__.IonicModule.forRoot(),
            _app_routing_module__WEBPACK_IMPORTED_MODULE_2__.AppRoutingModule,
            _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_14__.BrowserAnimationsModule,
            _angular_common_http__WEBPACK_IMPORTED_MODULE_15__.HttpClientModule,
            _components_components_module__WEBPACK_IMPORTED_MODULE_1__.ComponentsModule,
            _ngx_translate_core__WEBPACK_IMPORTED_MODULE_16__.TranslateModule.forRoot({
                loader: {
                    provide: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_16__.TranslateLoader,
                    useFactory: (createTranslateLoader),
                    deps: [_angular_common_http__WEBPACK_IMPORTED_MODULE_15__.HttpClient]
                }
            })
        ],
        providers: [
            { provide: _angular_router__WEBPACK_IMPORTED_MODULE_17__.RouteReuseStrategy, useClass: _ionic_angular__WEBPACK_IMPORTED_MODULE_13__.IonicRouteStrategy },
            { provide: _angular_common__WEBPACK_IMPORTED_MODULE_6__.LocationStrategy, useClass: _angular_common__WEBPACK_IMPORTED_MODULE_6__.HashLocationStrategy },
            ngx_cookie_service__WEBPACK_IMPORTED_MODULE_18__.CookieService,
        ],
        bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_0__.AppComponent]
    })
], AppModule);



/***/ }),

/***/ 24431:
/*!***************************************************************!*\
  !*** ./src/app/components/alert-card/alert-card.component.ts ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AlertCardComponent": () => (/* binding */ AlertCardComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 21838);
/* harmony import */ var _home_vagrant_projects_Vnint_node_modules_angular_devkit_build_angular_node_modules_ngtools_webpack_src_loaders_direct_resource_js_alert_card_component_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !./node_modules/@angular-devkit/build-angular/node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./alert-card.component.html */ 42486);
/* harmony import */ var _alert_card_component_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./alert-card.component.scss */ 91541);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 789);
/* harmony import */ var _angular_animations__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/animations */ 24038);





let AlertCardComponent = class AlertCardComponent {
    constructor() {
        this.details = false;
    }
    ngOnInit() {
    }
};
AlertCardComponent.ctorParameters = () => [];
AlertCardComponent.propDecorators = {
    alert: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Input }]
};
AlertCardComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.Component)({
        selector: 'app-alert-card',
        template: _home_vagrant_projects_Vnint_node_modules_angular_devkit_build_angular_node_modules_ngtools_webpack_src_loaders_direct_resource_js_alert_card_component_html__WEBPACK_IMPORTED_MODULE_0__["default"],
        animations: [
            (0,_angular_animations__WEBPACK_IMPORTED_MODULE_4__.trigger)('openClose', [
                (0,_angular_animations__WEBPACK_IMPORTED_MODULE_4__.state)('open', (0,_angular_animations__WEBPACK_IMPORTED_MODULE_4__.style)({
                    opacity: 1,
                })),
                (0,_angular_animations__WEBPACK_IMPORTED_MODULE_4__.state)('closed', (0,_angular_animations__WEBPACK_IMPORTED_MODULE_4__.style)({
                    opacity: 0,
                    height: '0px',
                    padding: '0px',
                })),
                (0,_angular_animations__WEBPACK_IMPORTED_MODULE_4__.transition)('* => closed', [
                    (0,_angular_animations__WEBPACK_IMPORTED_MODULE_4__.animate)('0.3s')
                ]),
                (0,_angular_animations__WEBPACK_IMPORTED_MODULE_4__.transition)('* => open', [
                    (0,_angular_animations__WEBPACK_IMPORTED_MODULE_4__.animate)('0.3s')
                ]),
            ]),
        ],
        styles: [_alert_card_component_scss__WEBPACK_IMPORTED_MODULE_1__]
    })
], AlertCardComponent);



/***/ }),

/***/ 44010:
/*!*****************************************************************!*\
  !*** ./src/app/components/back-button/back-button.component.ts ***!
  \*****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "BackButtonComponent": () => (/* binding */ BackButtonComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 21838);
/* harmony import */ var _home_vagrant_projects_Vnint_node_modules_angular_devkit_build_angular_node_modules_ngtools_webpack_src_loaders_direct_resource_js_back_button_component_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !./node_modules/@angular-devkit/build-angular/node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./back-button.component.html */ 75309);
/* harmony import */ var _back_button_component_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./back-button.component.scss */ 29004);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 789);
/* harmony import */ var src_app_services_navigation_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/navigation.service */ 14885);





let BackButtonComponent = class BackButtonComponent {
    constructor(navigationService) {
        this.navigationService = navigationService;
    }
    ngOnInit() { }
    back() {
        this.navigationService.back();
    }
};
BackButtonComponent.ctorParameters = () => [
    { type: src_app_services_navigation_service__WEBPACK_IMPORTED_MODULE_2__.NavigationService }
];
BackButtonComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.Component)({
        selector: 'app-back-button',
        template: _home_vagrant_projects_Vnint_node_modules_angular_devkit_build_angular_node_modules_ngtools_webpack_src_loaders_direct_resource_js_back_button_component_html__WEBPACK_IMPORTED_MODULE_0__["default"],
        styles: [_back_button_component_scss__WEBPACK_IMPORTED_MODULE_1__]
    })
], BackButtonComponent);



/***/ }),

/***/ 15980:
/*!***********************************************************************!*\
  !*** ./src/app/components/card-title-bar/card-title-bar.component.ts ***!
  \***********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CardTitleBarComponent": () => (/* binding */ CardTitleBarComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 21838);
/* harmony import */ var _home_vagrant_projects_Vnint_node_modules_angular_devkit_build_angular_node_modules_ngtools_webpack_src_loaders_direct_resource_js_card_title_bar_component_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !./node_modules/@angular-devkit/build-angular/node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./card-title-bar.component.html */ 72994);
/* harmony import */ var _card_title_bar_component_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./card-title-bar.component.scss */ 76412);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 789);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/angular */ 30585);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ngx-translate/core */ 52784);






let CardTitleBarComponent = class CardTitleBarComponent {
    constructor(alertController, translateService) {
        this.alertController = alertController;
        this.translateService = translateService;
        this.title = '';
        this.backButton = true;
        this.help = '';
        this.color = 'primary';
    }
    ngOnInit() { }
    presentHelp() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__awaiter)(this, void 0, void 0, function* () {
            const alert = yield this.alertController.create({
                header: this.translateService.instant('GENERAL.help'),
                message: this.help,
                buttons: ['OK']
            });
            yield alert.present();
            const { role } = yield alert.onDidDismiss();
            console.log('onDidDismiss resolved with role', role);
        });
    }
};
CardTitleBarComponent.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__.AlertController },
    { type: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_4__.TranslateService }
];
CardTitleBarComponent.propDecorators = {
    title: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_5__.Input }],
    backButton: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_5__.Input }],
    help: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_5__.Input }],
    color: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_5__.Input }]
};
CardTitleBarComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_5__.Component)({
        selector: 'app-card-title-bar',
        template: _home_vagrant_projects_Vnint_node_modules_angular_devkit_build_angular_node_modules_ngtools_webpack_src_loaders_direct_resource_js_card_title_bar_component_html__WEBPACK_IMPORTED_MODULE_0__["default"],
        styles: [_card_title_bar_component_scss__WEBPACK_IMPORTED_MODULE_1__]
    })
], CardTitleBarComponent);



/***/ }),

/***/ 96453:
/*!*************************************************!*\
  !*** ./src/app/components/components.module.ts ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ComponentsModule": () => (/* binding */ ComponentsModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! tslib */ 21838);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/core */ 789);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/common */ 2006);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/router */ 9538);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @angular/common/http */ 45331);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @ionic/angular */ 30585);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @ngx-translate/core */ 52784);
/* harmony import */ var _empty_card_empty_card_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./empty-card/empty-card.component */ 42932);
/* harmony import */ var _footer_footer_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./footer/footer.component */ 23829);
/* harmony import */ var _menu_footer_menu_footer_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./menu-footer/menu-footer.component */ 87051);
/* harmony import */ var _nav_card_nav_card_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./nav-card/nav-card.component */ 54826);
/* harmony import */ var _toolbar_toolbar_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./toolbar/toolbar.component */ 46733);
/* harmony import */ var _back_button_back_button_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./back-button/back-button.component */ 44010);
/* harmony import */ var _text_avatar_text_avatar_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./text-avatar/text-avatar.component */ 95914);
/* harmony import */ var _alert_card_alert_card_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./alert-card/alert-card.component */ 24431);
/* harmony import */ var _card_title_bar_card_title_bar_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./card-title-bar/card-title-bar.component */ 15980);
/* harmony import */ var _form_error_form_error_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./form-error/form-error.component */ 51750);
/* harmony import */ var _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @fortawesome/angular-fontawesome */ 1205);
/* harmony import */ var src_app_app_module__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! src/app/app.module */ 92014);



















let ComponentsModule = class ComponentsModule {
};
ComponentsModule = (0,tslib__WEBPACK_IMPORTED_MODULE_11__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_12__.NgModule)({
        imports: [
            _ionic_angular__WEBPACK_IMPORTED_MODULE_13__.IonicModule,
            _angular_common__WEBPACK_IMPORTED_MODULE_14__.CommonModule,
            _angular_router__WEBPACK_IMPORTED_MODULE_15__.RouterModule,
            _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_16__.FontAwesomeModule,
            _ngx_translate_core__WEBPACK_IMPORTED_MODULE_17__.TranslateModule.forChild({
                loader: {
                    provide: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_17__.TranslateLoader,
                    useFactory: src_app_app_module__WEBPACK_IMPORTED_MODULE_10__.createTranslateLoader,
                    deps: [_angular_common_http__WEBPACK_IMPORTED_MODULE_18__.HttpClient]
                }
            })
        ],
        declarations: [_empty_card_empty_card_component__WEBPACK_IMPORTED_MODULE_0__.EmptyCardComponent, _footer_footer_component__WEBPACK_IMPORTED_MODULE_1__.FooterComponent, _menu_footer_menu_footer_component__WEBPACK_IMPORTED_MODULE_2__.MenuFooterComponent, _nav_card_nav_card_component__WEBPACK_IMPORTED_MODULE_3__.NavCardComponent, _alert_card_alert_card_component__WEBPACK_IMPORTED_MODULE_7__.AlertCardComponent,
            _toolbar_toolbar_component__WEBPACK_IMPORTED_MODULE_4__.ToolbarComponent, _back_button_back_button_component__WEBPACK_IMPORTED_MODULE_5__.BackButtonComponent, _text_avatar_text_avatar_component__WEBPACK_IMPORTED_MODULE_6__.TextAvatarComponent, _card_title_bar_card_title_bar_component__WEBPACK_IMPORTED_MODULE_8__.CardTitleBarComponent, _form_error_form_error_component__WEBPACK_IMPORTED_MODULE_9__.FormErrorComponent],
        exports: [_empty_card_empty_card_component__WEBPACK_IMPORTED_MODULE_0__.EmptyCardComponent, _footer_footer_component__WEBPACK_IMPORTED_MODULE_1__.FooterComponent, _menu_footer_menu_footer_component__WEBPACK_IMPORTED_MODULE_2__.MenuFooterComponent, _nav_card_nav_card_component__WEBPACK_IMPORTED_MODULE_3__.NavCardComponent, _alert_card_alert_card_component__WEBPACK_IMPORTED_MODULE_7__.AlertCardComponent,
            _toolbar_toolbar_component__WEBPACK_IMPORTED_MODULE_4__.ToolbarComponent, _back_button_back_button_component__WEBPACK_IMPORTED_MODULE_5__.BackButtonComponent, _text_avatar_text_avatar_component__WEBPACK_IMPORTED_MODULE_6__.TextAvatarComponent, _card_title_bar_card_title_bar_component__WEBPACK_IMPORTED_MODULE_8__.CardTitleBarComponent, _form_error_form_error_component__WEBPACK_IMPORTED_MODULE_9__.FormErrorComponent, _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_16__.FontAwesomeModule]
    })
], ComponentsModule);



/***/ }),

/***/ 42932:
/*!***************************************************************!*\
  !*** ./src/app/components/empty-card/empty-card.component.ts ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "EmptyCardComponent": () => (/* binding */ EmptyCardComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 21838);
/* harmony import */ var _home_vagrant_projects_Vnint_node_modules_angular_devkit_build_angular_node_modules_ngtools_webpack_src_loaders_direct_resource_js_empty_card_component_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !./node_modules/@angular-devkit/build-angular/node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./empty-card.component.html */ 12533);
/* harmony import */ var _empty_card_component_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./empty-card.component.scss */ 25163);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 789);




let EmptyCardComponent = class EmptyCardComponent {
    constructor() { }
    ngOnInit() { }
};
EmptyCardComponent.ctorParameters = () => [];
EmptyCardComponent.propDecorators = {
    message: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Input }]
};
EmptyCardComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.Component)({
        selector: 'app-empty-card',
        template: _home_vagrant_projects_Vnint_node_modules_angular_devkit_build_angular_node_modules_ngtools_webpack_src_loaders_direct_resource_js_empty_card_component_html__WEBPACK_IMPORTED_MODULE_0__["default"],
        styles: [_empty_card_component_scss__WEBPACK_IMPORTED_MODULE_1__]
    })
], EmptyCardComponent);



/***/ }),

/***/ 23829:
/*!*******************************************************!*\
  !*** ./src/app/components/footer/footer.component.ts ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "FooterComponent": () => (/* binding */ FooterComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 21838);
/* harmony import */ var _home_vagrant_projects_Vnint_node_modules_angular_devkit_build_angular_node_modules_ngtools_webpack_src_loaders_direct_resource_js_footer_component_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !./node_modules/@angular-devkit/build-angular/node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./footer.component.html */ 40765);
/* harmony import */ var _footer_component_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./footer.component.scss */ 21038);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 789);
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/auth.service */ 56898);





let FooterComponent = class FooterComponent {
    constructor(auth) {
        this.auth = auth;
    }
    ngOnInit() { }
};
FooterComponent.ctorParameters = () => [
    { type: _services_auth_service__WEBPACK_IMPORTED_MODULE_2__.AuthService }
];
FooterComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.Component)({
        selector: 'app-footer',
        template: _home_vagrant_projects_Vnint_node_modules_angular_devkit_build_angular_node_modules_ngtools_webpack_src_loaders_direct_resource_js_footer_component_html__WEBPACK_IMPORTED_MODULE_0__["default"],
        styles: [_footer_component_scss__WEBPACK_IMPORTED_MODULE_1__]
    })
], FooterComponent);



/***/ }),

/***/ 51750:
/*!***************************************************************!*\
  !*** ./src/app/components/form-error/form-error.component.ts ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "FormErrorComponent": () => (/* binding */ FormErrorComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 21838);
/* harmony import */ var _home_vagrant_projects_Vnint_node_modules_angular_devkit_build_angular_node_modules_ngtools_webpack_src_loaders_direct_resource_js_form_error_component_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !./node_modules/@angular-devkit/build-angular/node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./form-error.component.html */ 2465);
/* harmony import */ var _form_error_component_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./form-error.component.scss */ 93307);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 789);




let FormErrorComponent = class FormErrorComponent {
    constructor() { }
    ngOnInit() { }
};
FormErrorComponent.ctorParameters = () => [];
FormErrorComponent.propDecorators = {
    errors: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Input }]
};
FormErrorComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.Component)({
        selector: 'app-form-error',
        template: _home_vagrant_projects_Vnint_node_modules_angular_devkit_build_angular_node_modules_ngtools_webpack_src_loaders_direct_resource_js_form_error_component_html__WEBPACK_IMPORTED_MODULE_0__["default"],
        styles: [_form_error_component_scss__WEBPACK_IMPORTED_MODULE_1__]
    })
], FormErrorComponent);



/***/ }),

/***/ 87051:
/*!*****************************************************************!*\
  !*** ./src/app/components/menu-footer/menu-footer.component.ts ***!
  \*****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "MenuFooterComponent": () => (/* binding */ MenuFooterComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 21838);
/* harmony import */ var _home_vagrant_projects_Vnint_node_modules_angular_devkit_build_angular_node_modules_ngtools_webpack_src_loaders_direct_resource_js_menu_footer_component_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !./node_modules/@angular-devkit/build-angular/node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./menu-footer.component.html */ 42);
/* harmony import */ var _menu_footer_component_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./menu-footer.component.scss */ 76816);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 789);




let MenuFooterComponent = class MenuFooterComponent {
    constructor() { }
    ngOnInit() { }
};
MenuFooterComponent.ctorParameters = () => [];
MenuFooterComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.Component)({
        selector: 'app-menu-footer',
        template: _home_vagrant_projects_Vnint_node_modules_angular_devkit_build_angular_node_modules_ngtools_webpack_src_loaders_direct_resource_js_menu_footer_component_html__WEBPACK_IMPORTED_MODULE_0__["default"],
        styles: [_menu_footer_component_scss__WEBPACK_IMPORTED_MODULE_1__]
    })
], MenuFooterComponent);



/***/ }),

/***/ 54826:
/*!***********************************************************!*\
  !*** ./src/app/components/nav-card/nav-card.component.ts ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "NavCardComponent": () => (/* binding */ NavCardComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! tslib */ 21838);
/* harmony import */ var _home_vagrant_projects_Vnint_node_modules_angular_devkit_build_angular_node_modules_ngtools_webpack_src_loaders_direct_resource_js_nav_card_component_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !./node_modules/@angular-devkit/build-angular/node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./nav-card.component.html */ 60838);
/* harmony import */ var _nav_card_component_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./nav-card.component.scss */ 45636);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 789);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ 9538);





let NavCardComponent = class NavCardComponent {
    constructor(router) {
        this.router = router;
        this.permissions = [];
        this.eventPermissions = [];
    }
    ngOnInit() {
        this.cardButtonsArray = JSON.parse(this.cardButtons);
    }
    route(route) {
        this.router.navigate([route]);
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
NavCardComponent.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__.Router }
];
NavCardComponent.propDecorators = {
    cardTitle: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__.Input }],
    cardIcon: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__.Input }],
    cardButtons: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__.Input }],
    permissions: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__.Input }],
    eventPermissions: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__.Input }]
};
NavCardComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.Component)({
        selector: 'app-nav-card',
        template: _home_vagrant_projects_Vnint_node_modules_angular_devkit_build_angular_node_modules_ngtools_webpack_src_loaders_direct_resource_js_nav_card_component_html__WEBPACK_IMPORTED_MODULE_0__["default"],
        styles: [_nav_card_component_scss__WEBPACK_IMPORTED_MODULE_1__]
    })
], NavCardComponent);



/***/ }),

/***/ 95914:
/*!*****************************************************************!*\
  !*** ./src/app/components/text-avatar/text-avatar.component.ts ***!
  \*****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "TextAvatarComponent": () => (/* binding */ TextAvatarComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 21838);
/* harmony import */ var _home_vagrant_projects_Vnint_node_modules_angular_devkit_build_angular_node_modules_ngtools_webpack_src_loaders_direct_resource_js_text_avatar_component_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !./node_modules/@angular-devkit/build-angular/node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./text-avatar.component.html */ 8946);
/* harmony import */ var _text_avatar_component_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./text-avatar.component.scss */ 77748);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 789);




let TextAvatarComponent = class TextAvatarComponent {
    constructor() {
        this.avatarColor = "#0066FF";
    }
    ngOnInit() {
    }
    calculateColor(str) {
        let hash = 0;
        for (let i = 0; i < str.length; i++) {
            hash = str.charCodeAt(i) + ((hash << 5) - hash);
        }
        let colour = '#';
        for (let i = 0; i < 3; i++) {
            let value = (hash >> (i * 8)) & 0xFF;
            colour += ('00' + value.toString(16)).substr(-2);
        }
        return colour;
    }
};
TextAvatarComponent.ctorParameters = () => [];
TextAvatarComponent.propDecorators = {
    name: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Input }],
    email: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Input }]
};
TextAvatarComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.Component)({
        selector: 'app-text-avatar',
        template: _home_vagrant_projects_Vnint_node_modules_angular_devkit_build_angular_node_modules_ngtools_webpack_src_loaders_direct_resource_js_text_avatar_component_html__WEBPACK_IMPORTED_MODULE_0__["default"],
        styles: [_text_avatar_component_scss__WEBPACK_IMPORTED_MODULE_1__]
    })
], TextAvatarComponent);



/***/ }),

/***/ 46733:
/*!*********************************************************!*\
  !*** ./src/app/components/toolbar/toolbar.component.ts ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ToolbarComponent": () => (/* binding */ ToolbarComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! tslib */ 21838);
/* harmony import */ var _home_vagrant_projects_Vnint_node_modules_angular_devkit_build_angular_node_modules_ngtools_webpack_src_loaders_direct_resource_js_toolbar_component_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !./node_modules/@angular-devkit/build-angular/node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./toolbar.component.html */ 92074);
/* harmony import */ var _toolbar_component_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./toolbar.component.scss */ 20743);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/core */ 789);
/* harmony import */ var src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/auth.service */ 56898);
/* harmony import */ var src_app_services_screensize_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/screensize.service */ 35436);
/* harmony import */ var src_app_services_navigation_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/services/navigation.service */ 14885);
/* harmony import */ var _services_style_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../services/style.service */ 7324);
/* harmony import */ var _services_alert_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../services/alert.service */ 92677);









let ToolbarComponent = class ToolbarComponent {
    constructor(screenSizeService, auth, alertService, navigationService, styleService) {
        this.screenSizeService = screenSizeService;
        this.auth = auth;
        this.alertService = alertService;
        this.navigationService = navigationService;
        this.styleService = styleService;
        this.colors = [];
        this.screenSizeService.isDesktopView().subscribe(isDesktop => {
            if (this.isDesktop && !isDesktop) {
                window.location.reload();
            }
            this.isDesktop = isDesktop;
        });
    }
    ngOnInit() { }
    themeChange() {
        this.styleService.updateDarkMode();
    }
};
ToolbarComponent.ctorParameters = () => [
    { type: src_app_services_screensize_service__WEBPACK_IMPORTED_MODULE_3__.ScreenSizeService },
    { type: src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_2__.AuthService },
    { type: _services_alert_service__WEBPACK_IMPORTED_MODULE_6__.AlertService },
    { type: src_app_services_navigation_service__WEBPACK_IMPORTED_MODULE_4__.NavigationService },
    { type: _services_style_service__WEBPACK_IMPORTED_MODULE_5__.StyleService }
];
ToolbarComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_7__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_8__.Component)({
        selector: 'app-toolbar',
        template: _home_vagrant_projects_Vnint_node_modules_angular_devkit_build_angular_node_modules_ngtools_webpack_src_loaders_direct_resource_js_toolbar_component_html__WEBPACK_IMPORTED_MODULE_0__["default"],
        styles: [_toolbar_component_scss__WEBPACK_IMPORTED_MODULE_1__]
    })
], ToolbarComponent);



/***/ }),

/***/ 5903:
/*!**************************************!*\
  !*** ./src/app/guards/auth.guard.ts ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AuthGuard": () => (/* binding */ AuthGuard)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 21838);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 789);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ 9538);
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../services/auth.service */ 56898);




let AuthGuard = class AuthGuard {
    constructor(auth, router) {
        this.auth = auth;
        this.router = router;
        /**
         * Contains the url to which unauthenticated requests are redirected
         */
        this.redirectUrl = '/dashboard';
    }
    /**
     * Checks if the user is allowed to access the page
     */
    canActivate(route, state) {
        return this.checkLoggedIn();
    }
    /**
     * Checks if the user is logged in
     */
    checkLoggedIn() {
        if (this.auth.getLoggedIn) {
            return true;
        }
        this.router.navigate([this.redirectUrl]);
        return false;
    }
};
AuthGuard.ctorParameters = () => [
    { type: _services_auth_service__WEBPACK_IMPORTED_MODULE_0__.AuthService },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_1__.Router }
];
AuthGuard = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.Injectable)({
        providedIn: 'root'
    })
], AuthGuard);



/***/ }),

/***/ 92677:
/*!*******************************************!*\
  !*** ./src/app/services/alert.service.ts ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AlertService": () => (/* binding */ AlertService)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 21838);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 789);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ 30585);
/* harmony import */ var _error_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./error.service */ 55729);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 9538);





let AlertService = class AlertService {
    constructor(toastController, errorService, router) {
        this.toastController = toastController;
        this.errorService = errorService;
        this.router = router;
        this.alerts = [];
        this.errorService.errorOccurred.subscribe(error => {
            if (error.error.message) {
                this.alert('danger', error.error.message, '', 'warning');
            }
            else {
                this.alert('danger', error.name, error.message, 'warning');
            }
        });
    }
    alert(type, title, message, icon = 'alert') {
        const alert = {
            icon: icon,
            color: type,
            title: title,
            message: message,
            created_at: new Date()
        };
        this.alerts.push(alert);
        this.alertToast(alert);
    }
    close(alertCreatedAt) {
        this.alerts = this.alerts.filter(alert => alert.created_at != alertCreatedAt);
    }
    alertToast(alert) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__awaiter)(this, void 0, void 0, function* () {
            try {
                yield this.toast.dismiss();
            }
            catch (e) { }
            this.toast = yield this.toastController.create({
                header: alert.title,
                message: alert.message,
                icon: alert.icon,
                color: alert.color,
                duration: 5000,
                position: 'top',
                buttons: [
                    {
                        icon: 'bug',
                        handler: () => {
                            this.router.navigate(['/give-feedback']);
                        }
                    }
                ]
            });
            yield this.toast.present();
        });
    }
};
AlertService.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__.ToastController },
    { type: _error_service__WEBPACK_IMPORTED_MODULE_0__.ErrorService },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__.Router }
];
AlertService = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.Injectable)({
        providedIn: 'root'
    })
], AlertService);



/***/ }),

/***/ 56898:
/*!******************************************!*\
  !*** ./src/app/services/auth.service.ts ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AuthService": () => (/* binding */ AuthService)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 21838);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 789);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ 45331);



let AuthService = class AuthService {
    constructor(http) {
        this.http = http;
        this.authChanged = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.EventEmitter();
        this.loggedIn = false;
        this.sessionExpired = false;
        this.headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__.HttpHeaders({
            accept: 'application/json',
            contentType: 'application/json',
        });
        this.options = { this: this.headers, withCredentials: true };
    }
    get getSessionExpired() {
        return this.sessionExpired;
    }
    get getLoggedIn() {
        return this.loggedIn;
    }
    set setLoggedIn(newLoggedIn) {
        this.loggedIn = newLoggedIn;
        if (newLoggedIn == true) {
            this.sessionExpired = false;
        }
    }
    set setSessionExpired(newSessionExpired) {
        this.sessionExpired = newSessionExpired;
    }
    login(loginCredentials) {
        return this.http.post('/api/login', loginCredentials, this.options);
    }
    logout() {
        return this.http.post('/api/logout', this.options);
    }
    register(registerCredentials) {
        return this.http.post('/api/register', registerCredentials, this.options);
    }
    resendVerificationEmail() {
        return this.http.post('/api/email/verification-notification', {}, this.options);
    }
    sendForgotPasswordEmail(forgotPasswordCredentials) {
        return this.http.post('/api/forgot-password', forgotPasswordCredentials, this.options);
    }
    resetPassword(resetPasswordCredentials) {
        return this.http.post('/api/reset-password', resetPasswordCredentials, this.options);
    }
    changePassword(changePasswordCredentials) {
        return this.http.put('/api/user/password', changePasswordCredentials, this.options);
    }
    updateProfile(updateProfileCredentials) {
        return this.http.put('/api/user/profile-information', updateProfileCredentials, this.options);
    }
    authenticated() {
        return this.http.get('/api/authenticated', this.options);
    }
    emailVerifiedAt() {
        return this.http.get('/api/email/verified', this.options);
    }
    user() {
        return this.http.get('/api/user', this.options);
    }
    permissions() {
        return this.http.get('/api/user/permissions', this.options);
    }
    eventPermissions() {
        return this.http.get('/api/events/permissions', this.options);
    }
    setAPILanguage(newLanguage) {
        return this.http.get('/api/lang/' + newLanguage, this.options);
    }
};
AuthService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__.HttpClient }
];
AuthService.propDecorators = {
    authChanged: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Output }]
};
AuthService = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_0__.Injectable)({
        providedIn: 'root'
    })
], AuthService);



/***/ }),

/***/ 55729:
/*!*******************************************!*\
  !*** ./src/app/services/error.service.ts ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ErrorService": () => (/* binding */ ErrorService)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 21838);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 789);


let ErrorService = class ErrorService {
    constructor() {
        this.errorOccurred = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.EventEmitter();
        this.errorOccurred.subscribe(error => {
            this.showError(error);
        });
    }
    showError(error) {
        console.log(error);
    }
};
ErrorService.ctorParameters = () => [];
ErrorService.propDecorators = {
    errorOccurred: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Output }]
};
ErrorService = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_0__.Injectable)({
        providedIn: 'root'
    })
], ErrorService);



/***/ }),

/***/ 14885:
/*!************************************************!*\
  !*** ./src/app/services/navigation.service.ts ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "NavigationService": () => (/* binding */ NavigationService)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 21838);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 789);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ 9538);
/* harmony import */ var _auth_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./auth.service */ 56898);




let NavigationService = class NavigationService {
    constructor(router, auth) {
        this.router = router;
        this.auth = auth;
        this.history = [];
        this.defaultUrl = '/login';
        this.defaultUrlIfAuthenticated = '/dashboard';
        this.router.events.subscribe((event) => {
            if (event instanceof _angular_router__WEBPACK_IMPORTED_MODULE_1__.NavigationEnd) {
                if (event.urlAfterRedirects == '/dashboard') {
                    this.history = ['/dashboard'];
                }
                else if (this.history.includes(event.urlAfterRedirects)) {
                    this.history = this.history.slice(0, this.history.indexOf(event.urlAfterRedirects) + 1);
                }
                else {
                    this.history.push(event.urlAfterRedirects);
                }
            }
        });
    }
    get getHistory() {
        if (this.history[0] != '/dashboard') {
            return ['/dashboard'].concat(this.history);
        }
        return this.history;
    }
    back() {
        this.history.pop();
        const backLocation = this.history.pop();
        if (backLocation) {
            this.router.navigate([backLocation]);
        }
        else {
            if (this.auth.getLoggedIn == true) {
                this.router.navigate([this.defaultUrlIfAuthenticated]);
            }
            else {
                this.router.navigate([this.defaultUrl]);
            }
        }
    }
};
NavigationService.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_1__.Router },
    { type: _auth_service__WEBPACK_IMPORTED_MODULE_0__.AuthService }
];
NavigationService = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.Injectable)({
        providedIn: 'root'
    })
], NavigationService);



/***/ }),

/***/ 35436:
/*!************************************************!*\
  !*** ./src/app/services/screensize.service.ts ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ScreenSizeService": () => (/* binding */ ScreenSizeService)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 21838);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 789);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rxjs */ 96103);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs/operators */ 59137);




let ScreenSizeService = class ScreenSizeService {
    constructor() {
        this.isDesktop = new rxjs__WEBPACK_IMPORTED_MODULE_0__.BehaviorSubject(false);
    }
    onResize(size) {
        if (size < 600) {
            this.isDesktop.next(false);
        }
        else {
            this.isDesktop.next(true);
        }
    }
    isDesktopView() {
        return this.isDesktop.asObservable().pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_1__.distinctUntilChanged)());
    }
};
ScreenSizeService.ctorParameters = () => [];
ScreenSizeService = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.Injectable)({
        providedIn: 'root'
    })
], ScreenSizeService);



/***/ }),

/***/ 7324:
/*!*******************************************!*\
  !*** ./src/app/services/style.service.ts ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "StyleService": () => (/* binding */ StyleService)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 21838);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 789);
/* harmony import */ var ngx_cookie_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ngx-cookie-service */ 20819);



let StyleService = class StyleService {
    constructor(cookieService) {
        this.cookieService = cookieService;
        this.prefersDark = false;
    }
    get getDarkMode() {
        return this.prefersDark;
    }
    set setDarkMode(darkMode) {
        this.prefersDark = darkMode;
        if (darkMode) {
            document.body.classList.toggle('dark', true);
        }
    }
    updateDarkMode() {
        this.prefersDark = !this.prefersDark;
        this.cookieService.set('dark', this.prefersDark.toString(), 365);
        document.body.classList.toggle('dark');
    }
};
StyleService.ctorParameters = () => [
    { type: ngx_cookie_service__WEBPACK_IMPORTED_MODULE_0__.CookieService }
];
StyleService = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.Injectable)({
        providedIn: 'root'
    })
], StyleService);



/***/ }),

/***/ 41251:
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "environment": () => (/* binding */ environment)
/* harmony export */ });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
const environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ 3422:
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 789);
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ 31718);
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./app/app.module */ 92014);
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./environments/environment */ 41251);




if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__.environment.production) {
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.enableProdMode)();
}
(0,_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_3__.platformBrowserDynamic)().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_0__.AppModule)
    .catch(err => console.log(err));


/***/ }),

/***/ 50863:
/*!******************************************************************************************************************************************!*\
  !*** ./node_modules/@ionic/core/dist/esm/ lazy ^\.\/.*\.entry\.js$ include: \.entry\.js$ exclude: \.system\.entry\.js$ namespace object ***!
  \******************************************************************************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var map = {
	"./ion-accordion_2.entry.js": [
		3813,
		"node_modules_ionic_core_dist_esm_ion-accordion_2_entry_js"
	],
	"./ion-action-sheet.entry.js": [
		50211,
		"node_modules_ionic_core_dist_esm_ion-action-sheet_entry_js"
	],
	"./ion-alert.entry.js": [
		26201,
		"node_modules_ionic_core_dist_esm_ion-alert_entry_js"
	],
	"./ion-app_8.entry.js": [
		44250,
		"node_modules_ionic_core_dist_esm_ion-app_8_entry_js"
	],
	"./ion-avatar_3.entry.js": [
		67043,
		"node_modules_ionic_core_dist_esm_ion-avatar_3_entry_js"
	],
	"./ion-back-button.entry.js": [
		18447,
		"node_modules_ionic_core_dist_esm_ion-back-button_entry_js"
	],
	"./ion-backdrop.entry.js": [
		75893,
		"node_modules_ionic_core_dist_esm_ion-backdrop_entry_js"
	],
	"./ion-breadcrumb_2.entry.js": [
		95691,
		"common",
		"node_modules_ionic_core_dist_esm_ion-breadcrumb_2_entry_js"
	],
	"./ion-button_2.entry.js": [
		38430,
		"node_modules_ionic_core_dist_esm_ion-button_2_entry_js"
	],
	"./ion-card_5.entry.js": [
		77592,
		"node_modules_ionic_core_dist_esm_ion-card_5_entry_js"
	],
	"./ion-checkbox.entry.js": [
		439,
		"node_modules_ionic_core_dist_esm_ion-checkbox_entry_js"
	],
	"./ion-chip.entry.js": [
		95714,
		"node_modules_ionic_core_dist_esm_ion-chip_entry_js"
	],
	"./ion-col_3.entry.js": [
		73149,
		"node_modules_ionic_core_dist_esm_ion-col_3_entry_js"
	],
	"./ion-datetime_3.entry.js": [
		2186,
		"common",
		"node_modules_ionic_core_dist_esm_ion-datetime_3_entry_js"
	],
	"./ion-fab_3.entry.js": [
		61310,
		"node_modules_ionic_core_dist_esm_ion-fab_3_entry_js"
	],
	"./ion-img.entry.js": [
		48294,
		"node_modules_ionic_core_dist_esm_ion-img_entry_js"
	],
	"./ion-infinite-scroll_2.entry.js": [
		68388,
		"node_modules_ionic_core_dist_esm_ion-infinite-scroll_2_entry_js"
	],
	"./ion-input.entry.js": [
		52030,
		"node_modules_ionic_core_dist_esm_ion-input_entry_js"
	],
	"./ion-item-option_3.entry.js": [
		58094,
		"node_modules_ionic_core_dist_esm_ion-item-option_3_entry_js"
	],
	"./ion-item_8.entry.js": [
		44733,
		"node_modules_ionic_core_dist_esm_ion-item_8_entry_js"
	],
	"./ion-loading.entry.js": [
		47347,
		"node_modules_ionic_core_dist_esm_ion-loading_entry_js"
	],
	"./ion-menu_3.entry.js": [
		50902,
		"node_modules_ionic_core_dist_esm_ion-menu_3_entry_js"
	],
	"./ion-modal.entry.js": [
		76648,
		"node_modules_ionic_core_dist_esm_ion-modal_entry_js"
	],
	"./ion-nav_2.entry.js": [
		14545,
		"node_modules_ionic_core_dist_esm_ion-nav_2_entry_js"
	],
	"./ion-picker-column-internal.entry.js": [
		93076,
		"node_modules_ionic_core_dist_esm_ion-picker-column-internal_entry_js"
	],
	"./ion-picker-internal.entry.js": [
		16829,
		"node_modules_ionic_core_dist_esm_ion-picker-internal_entry_js"
	],
	"./ion-popover.entry.js": [
		23345,
		"node_modules_ionic_core_dist_esm_ion-popover_entry_js"
	],
	"./ion-progress-bar.entry.js": [
		63093,
		"node_modules_ionic_core_dist_esm_ion-progress-bar_entry_js"
	],
	"./ion-radio_2.entry.js": [
		62904,
		"node_modules_ionic_core_dist_esm_ion-radio_2_entry_js"
	],
	"./ion-range.entry.js": [
		25422,
		"node_modules_ionic_core_dist_esm_ion-range_entry_js"
	],
	"./ion-refresher_2.entry.js": [
		41599,
		"common",
		"node_modules_ionic_core_dist_esm_ion-refresher_2_entry_js"
	],
	"./ion-reorder_2.entry.js": [
		26964,
		"node_modules_ionic_core_dist_esm_ion-reorder_2_entry_js"
	],
	"./ion-ripple-effect.entry.js": [
		84581,
		"node_modules_ionic_core_dist_esm_ion-ripple-effect_entry_js"
	],
	"./ion-route_4.entry.js": [
		85109,
		"node_modules_ionic_core_dist_esm_ion-route_4_entry_js"
	],
	"./ion-searchbar.entry.js": [
		20583,
		"node_modules_ionic_core_dist_esm_ion-searchbar_entry_js"
	],
	"./ion-segment_2.entry.js": [
		23155,
		"node_modules_ionic_core_dist_esm_ion-segment_2_entry_js"
	],
	"./ion-select_3.entry.js": [
		64704,
		"node_modules_ionic_core_dist_esm_ion-select_3_entry_js"
	],
	"./ion-slide_2.entry.js": [
		83884,
		"node_modules_ionic_core_dist_esm_ion-slide_2_entry_js"
	],
	"./ion-spinner.entry.js": [
		66292,
		"node_modules_ionic_core_dist_esm_ion-spinner_entry_js"
	],
	"./ion-split-pane.entry.js": [
		49952,
		"node_modules_ionic_core_dist_esm_ion-split-pane_entry_js"
	],
	"./ion-tab-bar_2.entry.js": [
		61774,
		"node_modules_ionic_core_dist_esm_ion-tab-bar_2_entry_js"
	],
	"./ion-tab_2.entry.js": [
		4347,
		"node_modules_ionic_core_dist_esm_ion-tab_2_entry_js"
	],
	"./ion-text.entry.js": [
		13273,
		"node_modules_ionic_core_dist_esm_ion-text_entry_js"
	],
	"./ion-textarea.entry.js": [
		90157,
		"node_modules_ionic_core_dist_esm_ion-textarea_entry_js"
	],
	"./ion-toast.entry.js": [
		4137,
		"node_modules_ionic_core_dist_esm_ion-toast_entry_js"
	],
	"./ion-toggle.entry.js": [
		67007,
		"node_modules_ionic_core_dist_esm_ion-toggle_entry_js"
	],
	"./ion-virtual-scroll.entry.js": [
		27112,
		"node_modules_ionic_core_dist_esm_ion-virtual-scroll_entry_js"
	]
};
function webpackAsyncContext(req) {
	if(!__webpack_require__.o(map, req)) {
		return Promise.resolve().then(() => {
			var e = new Error("Cannot find module '" + req + "'");
			e.code = 'MODULE_NOT_FOUND';
			throw e;
		});
	}

	var ids = map[req], id = ids[0];
	return Promise.all(ids.slice(1).map(__webpack_require__.e)).then(() => {
		return __webpack_require__(id);
	});
}
webpackAsyncContext.keys = () => (Object.keys(map));
webpackAsyncContext.id = 50863;
module.exports = webpackAsyncContext;

/***/ }),

/***/ 58746:
/*!************************************!*\
  !*** ./src/app/app.component.scss ***!
  \************************************/
/***/ ((module) => {

"use strict";
module.exports = "/** Ionic CSS Variables **/\n@font-face {\n  font-family: \"Montserrat\", sans-serif;\n}\n:root {\n  --ion-font-family: \"Montserrat\", sans-serif;\n}\n/*\n* Light Colors\n* -------------------------------------------\n*/\n:root {\n  --ion-color-primary: #6411D9;\n  --ion-color-primary-rgb: 100,17,217;\n  --ion-color-primary-contrast: #ffffff;\n  --ion-color-primary-contrast-rgb: 255,255,255;\n  --ion-color-primary-shade: #580fbf;\n  --ion-color-primary-tint: #7429dd;\n  --ion-color-secondary: #622BD9;\n  --ion-color-secondary-rgb: 98,43,217;\n  --ion-color-secondary-contrast: #ffffff;\n  --ion-color-secondary-contrast-rgb: 255,255,255;\n  --ion-color-secondary-shade: #5626bf;\n  --ion-color-secondary-tint: #7240dd;\n  --ion-color-tertiary: #752BDF;\n  --ion-color-tertiary-rgb: 117,43,223;\n  --ion-color-tertiary-contrast: #ffffff;\n  --ion-color-tertiary-contrast-rgb: 255,255,255;\n  --ion-color-tertiary-shade: #6726c4;\n  --ion-color-tertiary-tint: #8340e2;\n  --ion-color-success: #33cc73;\n  --ion-color-success-rgb: 51,204,115;\n  --ion-color-success-contrast: #ffffff;\n  --ion-color-success-contrast-rgb: 0,0,0;\n  --ion-color-success-shade: #2db465;\n  --ion-color-success-tint: #47d181;\n  --ion-color-warning: #f2e231;\n  --ion-color-warning-rgb: 242,226,49;\n  --ion-color-warning-contrast: #fff;\n  --ion-color-warning-contrast-rgb: 255,255,255;\n  --ion-color-warning-shade: #d5c72b;\n  --ion-color-warning-tint: #f3e546;\n  --ion-color-danger: #e53e3e;\n  --ion-color-danger-rgb: 229,62,62;\n  --ion-color-danger-contrast: #ffffff;\n  --ion-color-danger-contrast-rgb: 255,255,255;\n  --ion-color-danger-shade: #ca3737;\n  --ion-color-danger-tint: #e85151;\n  --ion-color-medium: #fcfaff;\n  --ion-color-medium-rgb: 252,250,255;\n  --ion-color-medium-contrast: #000000;\n  --ion-color-medium-contrast-rgb: 0,0,0;\n  --ion-color-medium-shade: #dedce0;\n  --ion-color-medium-tint: #fcfbff;\n  --ion-color-light: #FFFFFF;\n  --ion-color-light-rgb: 255,255,255;\n  --ion-color-light-contrast: #1a1a1a;\n  --ion-color-light-contrast-rgb: 0,0,0;\n  --ion-color-light-shade: #e0e0e0;\n  --ion-color-light-tint: #ffffff;\n  --ion-text-color: #1c1c1c;\n  --ion-item-background: var(--ion-color-light);\n}\n/*\n* Dark Colors\n* -------------------------------------------\n*/\nbody.dark {\n  --ion-color-primary: #7924f0;\n  --ion-color-primary-rgb: 121,36,240;\n  --ion-color-primary-contrast: #ffffff;\n  --ion-color-primary-contrast-rgb: 255,255,255;\n  --ion-color-primary-shade: #6a20d3;\n  --ion-color-primary-tint: #863af2;\n  --ion-color-secondary: #622BD9;\n  --ion-color-secondary-rgb: 98,43,217;\n  --ion-color-secondary-contrast: #ffffff;\n  --ion-color-secondary-contrast-rgb: 255,255,255;\n  --ion-color-secondary-shade: #5626bf;\n  --ion-color-secondary-tint: #7240dd;\n  --ion-color-tertiary: #752BDF;\n  --ion-color-tertiary-rgb: 117,43,223;\n  --ion-color-tertiary-contrast: #ffffff;\n  --ion-color-tertiary-contrast-rgb: 255,255,255;\n  --ion-color-tertiary-shade: #6726c4;\n  --ion-color-tertiary-tint: #8340e2;\n  --ion-color-success: #33cc73;\n  --ion-color-success-rgb: 51,204,115;\n  --ion-color-success-contrast: #ffffff;\n  --ion-color-success-contrast-rgb: 0,0,0;\n  --ion-color-success-shade: #2db465;\n  --ion-color-success-tint: #47d181;\n  --ion-color-warning: #f2e231;\n  --ion-color-warning-rgb: 242,226,49;\n  --ion-color-warning-contrast: #fff;\n  --ion-color-warning-contrast-rgb: 255,255,255;\n  --ion-color-warning-shade: #d5c72b;\n  --ion-color-warning-tint: #f3e546;\n  --ion-color-danger: #e53e3e;\n  --ion-color-danger-rgb: 229,62,62;\n  --ion-color-danger-contrast: #ffffff;\n  --ion-color-danger-contrast-rgb: 255,255,255;\n  --ion-color-danger-shade: #ca3737;\n  --ion-color-danger-tint: #e85151;\n  --ion-color-medium: #121212;\n  --ion-color-medium-rgb: 18,18,18;\n  --ion-color-medium-contrast: #ffffff;\n  --ion-color-medium-contrast-rgb: 255,255,255;\n  --ion-color-medium-shade: #101010;\n  --ion-color-medium-tint: #2a2a2a;\n  --ion-color-light: #1d1d1d;\n  --ion-color-light-rgb: 29,29,29;\n  --ion-color-light-contrast: #ffffff;\n  --ion-color-light-contrast-rgb: 255,255,255;\n  --ion-color-light-shade: #1a1a1a;\n  --ion-color-light-tint: #343434;\n  --ion-text-color: #fff;\n  --ion-item-background: var(--ion-color-light);\n}\n.app-title {\n  color: var(--ion-color-primary, #7924f0);\n  font-size: 2rem;\n  margin-left: 0.5rem;\n  cursor: pointer;\n  font-family: \"Fredoka\", sans-serif;\n  font-weight: 500;\n  height: 3.7rem;\n  line-height: 3.7rem;\n}\nion-toolbar {\n  height: 3.7rem;\n  text-align: left;\n  box-shadow: 0 0 20px rgba(0, 0, 0, 0.08);\n}\nion-menu {\n  border: none;\n  --ion-background-color: var(--ion-color-light) !important;\n  box-shadow: 0 0 20px rgba(0, 0, 0, 0.1);\n}\nion-menu ion-content {\n  --ion-background-color: var(--ion-color-light) !important;\n}\n@media (max-width: 991px) {\n  ion-menu ion-content {\n    border: none;\n  }\n}\nion-menu ion-list {\n  background: transparent;\n}\n.split-pane-visible > ion-menu {\n  max-width: 300px !important;\n}\nion-footer {\n  position: fixed;\n  bottom: 0;\n}\n#avatar {\n  padding-left: 10%;\n}\n#avatar ion-label {\n  color: var(--ion-text-color);\n}\n#avatar ion-label h1, #avatar ion-label h2 {\n  font-weight: 550;\n}\n.routes {\n  --ripple-color: transparent !important;\n  --background-hover-opacity: 0;\n  padding-left: 10%;\n}\n.routes ion-label {\n  font-weight: 550;\n  opacity: 0.9;\n  transition: all 0.3s;\n}\n.routes ion-icon {\n  color: var(--ion-text-color);\n  opacity: 0.9;\n  transition: all 0.3s;\n}\n.routes:hover ion-label, .routes:hover ion-icon {\n  opacity: 1;\n  color: var(--ion-color-primary) !important;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3RoZW1lL3ZhcmlhYmxlcy5zY3NzIiwiYXBwLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUdBLDBCQUFBO0FBRUE7RUFDRSxxQ0FBQTtBQ0hGO0FETUE7RUFDRSwyQ0FBQTtBQ0pGO0FET0E7OztDQUFBO0FBS0E7RUFDRSw0QkFBQTtFQUNBLG1DQUFBO0VBQ0EscUNBQUE7RUFDQSw2Q0FBQTtFQUNBLGtDQUFBO0VBQ0EsaUNBQUE7RUFFQSw4QkFBQTtFQUNBLG9DQUFBO0VBQ0EsdUNBQUE7RUFDQSwrQ0FBQTtFQUNBLG9DQUFBO0VBQ0EsbUNBQUE7RUFFQSw2QkFBQTtFQUNBLG9DQUFBO0VBQ0Esc0NBQUE7RUFDQSw4Q0FBQTtFQUNBLG1DQUFBO0VBQ0Esa0NBQUE7RUFFQSw0QkFBQTtFQUNBLG1DQUFBO0VBQ0EscUNBQUE7RUFDQSx1Q0FBQTtFQUNBLGtDQUFBO0VBQ0EsaUNBQUE7RUFFQSw0QkFBQTtFQUNBLG1DQUFBO0VBQ0Esa0NBQUE7RUFDQSw2Q0FBQTtFQUNBLGtDQUFBO0VBQ0EsaUNBQUE7RUFFQSwyQkFBQTtFQUNBLGlDQUFBO0VBQ0Esb0NBQUE7RUFDQSw0Q0FBQTtFQUNBLGlDQUFBO0VBQ0EsZ0NBQUE7RUFFQSwyQkFBQTtFQUNBLG1DQUFBO0VBQ0Esb0NBQUE7RUFDQSxzQ0FBQTtFQUNBLGlDQUFBO0VBQ0EsZ0NBQUE7RUFFQSwwQkFBQTtFQUNBLGtDQUFBO0VBQ0EsbUNBQUE7RUFDQSxxQ0FBQTtFQUNBLGdDQUFBO0VBQ0EsK0JBQUE7RUFFQSx5QkFBQTtFQUNBLDZDQUFBO0FDYkY7QURnQkE7OztDQUFBO0FBS0E7RUFDRSw0QkFBQTtFQUNBLG1DQUFBO0VBQ0EscUNBQUE7RUFDQSw2Q0FBQTtFQUNBLGtDQUFBO0VBQ0EsaUNBQUE7RUFFQSw4QkFBQTtFQUNBLG9DQUFBO0VBQ0EsdUNBQUE7RUFDQSwrQ0FBQTtFQUNBLG9DQUFBO0VBQ0EsbUNBQUE7RUFFQSw2QkFBQTtFQUNBLG9DQUFBO0VBQ0Esc0NBQUE7RUFDQSw4Q0FBQTtFQUNBLG1DQUFBO0VBQ0Esa0NBQUE7RUFFQSw0QkFBQTtFQUNBLG1DQUFBO0VBQ0EscUNBQUE7RUFDQSx1Q0FBQTtFQUNBLGtDQUFBO0VBQ0EsaUNBQUE7RUFFQSw0QkFBQTtFQUNBLG1DQUFBO0VBQ0Esa0NBQUE7RUFDQSw2Q0FBQTtFQUNBLGtDQUFBO0VBQ0EsaUNBQUE7RUFFQSwyQkFBQTtFQUNBLGlDQUFBO0VBQ0Esb0NBQUE7RUFDQSw0Q0FBQTtFQUNBLGlDQUFBO0VBQ0EsZ0NBQUE7RUFFQSwyQkFBQTtFQUNBLGdDQUFBO0VBQ0Esb0NBQUE7RUFDQSw0Q0FBQTtFQUNBLGlDQUFBO0VBQ0EsZ0NBQUE7RUFFQSwwQkFBQTtFQUNBLCtCQUFBO0VBQ0EsbUNBQUE7RUFDQSwyQ0FBQTtFQUNBLGdDQUFBO0VBQ0EsK0JBQUE7RUFFQSxzQkFBQTtFQUNBLDZDQUFBO0FDdEJGO0FBdEhBO0VBQ0Usd0NBQUE7RUFDQSxlQUFBO0VBQ0EsbUJBQUE7RUFDQSxlQUFBO0VBQ0Esa0NBQUE7RUFDQSxnQkFBQTtFQUNBLGNBQUE7RUFDQSxtQkFBQTtBQXlIRjtBQXRIQTtFQUNFLGNBQUE7RUFDQSxnQkFBQTtFQUNBLHdDQUFBO0FBeUhGO0FBdEhBO0VBQ0UsWUFBQTtFQUNBLHlEQUFBO0VBQ0EsdUNBQUE7QUF5SEY7QUF2SEU7RUFDRSx5REFBQTtBQXlISjtBQXRIRTtFQUNFO0lBQ0UsWUFBQTtFQXdISjtBQUNGO0FBckhFO0VBQ0UsdUJBQUE7QUF1SEo7QUFuSEE7RUFDRSwyQkFBQTtBQXNIRjtBQW5IQTtFQUNFLGVBQUE7RUFDQSxTQUFBO0FBc0hGO0FBbkhBO0VBQ0UsaUJBQUE7QUFzSEY7QUFwSEU7RUFDRSw0QkFBQTtBQXNISjtBQXJISTtFQUNFLGdCQUFBO0FBdUhOO0FBbEhBO0VBQ0Usc0NBQUE7RUFDQSw2QkFBQTtFQUNBLGlCQUFBO0FBcUhGO0FBbkhFO0VBQ0UsZ0JBQUE7RUFDQSxZQUFBO0VBQ0Esb0JBQUE7QUFxSEo7QUFuSEU7RUFDRSw0QkFBQTtFQUNBLFlBQUE7RUFDQSxvQkFBQTtBQXFISjtBQWhIRTtFQUNFLFVBQUE7RUFDQSwwQ0FBQTtBQW1ISiIsImZpbGUiOiJhcHAuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIvLyBJb25pYyBWYXJpYWJsZXMgYW5kIFRoZW1pbmcuIEZvciBtb3JlIGluZm8sIHBsZWFzZSBzZWU6XG4vLyBodHRwOi8vaW9uaWNmcmFtZXdvcmsuY29tL2RvY3MvdGhlbWluZy9cblxuLyoqIElvbmljIENTUyBWYXJpYWJsZXMgKiovXG5cbkBmb250LWZhY2Uge1xuICBmb250LWZhbWlseTogJ01vbnRzZXJyYXQnLCBzYW5zLXNlcmlmO1xufVxuXG46cm9vdCB7XG4gIC0taW9uLWZvbnQtZmFtaWx5OiAnTW9udHNlcnJhdCcsIHNhbnMtc2VyaWY7XG59XG5cbi8qXG4qIExpZ2h0IENvbG9yc1xuKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4qL1xuXG46cm9vdCB7XG4gIC0taW9uLWNvbG9yLXByaW1hcnk6ICM2NDExRDk7XG4gIC0taW9uLWNvbG9yLXByaW1hcnktcmdiOiAxMDAsMTcsMjE3O1xuICAtLWlvbi1jb2xvci1wcmltYXJ5LWNvbnRyYXN0OiAjZmZmZmZmO1xuICAtLWlvbi1jb2xvci1wcmltYXJ5LWNvbnRyYXN0LXJnYjogMjU1LDI1NSwyNTU7XG4gIC0taW9uLWNvbG9yLXByaW1hcnktc2hhZGU6ICM1ODBmYmY7XG4gIC0taW9uLWNvbG9yLXByaW1hcnktdGludDogIzc0MjlkZDtcblxuICAtLWlvbi1jb2xvci1zZWNvbmRhcnk6ICM2MjJCRDk7XG4gIC0taW9uLWNvbG9yLXNlY29uZGFyeS1yZ2I6IDk4LDQzLDIxNztcbiAgLS1pb24tY29sb3Itc2Vjb25kYXJ5LWNvbnRyYXN0OiAjZmZmZmZmO1xuICAtLWlvbi1jb2xvci1zZWNvbmRhcnktY29udHJhc3QtcmdiOiAyNTUsMjU1LDI1NTtcbiAgLS1pb24tY29sb3Itc2Vjb25kYXJ5LXNoYWRlOiAjNTYyNmJmO1xuICAtLWlvbi1jb2xvci1zZWNvbmRhcnktdGludDogIzcyNDBkZDtcblxuICAtLWlvbi1jb2xvci10ZXJ0aWFyeTogIzc1MkJERjtcbiAgLS1pb24tY29sb3ItdGVydGlhcnktcmdiOiAxMTcsNDMsMjIzO1xuICAtLWlvbi1jb2xvci10ZXJ0aWFyeS1jb250cmFzdDogI2ZmZmZmZjtcbiAgLS1pb24tY29sb3ItdGVydGlhcnktY29udHJhc3QtcmdiOiAyNTUsMjU1LDI1NTtcbiAgLS1pb24tY29sb3ItdGVydGlhcnktc2hhZGU6ICM2NzI2YzQ7XG4gIC0taW9uLWNvbG9yLXRlcnRpYXJ5LXRpbnQ6ICM4MzQwZTI7XG5cbiAgLS1pb24tY29sb3Itc3VjY2VzczogIzMzY2M3MztcbiAgLS1pb24tY29sb3Itc3VjY2Vzcy1yZ2I6IDUxLDIwNCwxMTU7XG4gIC0taW9uLWNvbG9yLXN1Y2Nlc3MtY29udHJhc3Q6ICNmZmZmZmY7XG4gIC0taW9uLWNvbG9yLXN1Y2Nlc3MtY29udHJhc3QtcmdiOiAwLDAsMDtcbiAgLS1pb24tY29sb3Itc3VjY2Vzcy1zaGFkZTogIzJkYjQ2NTtcbiAgLS1pb24tY29sb3Itc3VjY2Vzcy10aW50OiAjNDdkMTgxO1xuXG4gIC0taW9uLWNvbG9yLXdhcm5pbmc6ICNmMmUyMzE7XG4gIC0taW9uLWNvbG9yLXdhcm5pbmctcmdiOiAyNDIsMjI2LDQ5O1xuICAtLWlvbi1jb2xvci13YXJuaW5nLWNvbnRyYXN0OiAjZmZmO1xuICAtLWlvbi1jb2xvci13YXJuaW5nLWNvbnRyYXN0LXJnYjogMjU1LDI1NSwyNTU7XG4gIC0taW9uLWNvbG9yLXdhcm5pbmctc2hhZGU6ICNkNWM3MmI7XG4gIC0taW9uLWNvbG9yLXdhcm5pbmctdGludDogI2YzZTU0NjtcblxuICAtLWlvbi1jb2xvci1kYW5nZXI6ICNlNTNlM2U7XG4gIC0taW9uLWNvbG9yLWRhbmdlci1yZ2I6IDIyOSw2Miw2MjtcbiAgLS1pb24tY29sb3ItZGFuZ2VyLWNvbnRyYXN0OiAjZmZmZmZmO1xuICAtLWlvbi1jb2xvci1kYW5nZXItY29udHJhc3QtcmdiOiAyNTUsMjU1LDI1NTtcbiAgLS1pb24tY29sb3ItZGFuZ2VyLXNoYWRlOiAjY2EzNzM3O1xuICAtLWlvbi1jb2xvci1kYW5nZXItdGludDogI2U4NTE1MTtcblxuICAtLWlvbi1jb2xvci1tZWRpdW06ICNmY2ZhZmY7XG4gIC0taW9uLWNvbG9yLW1lZGl1bS1yZ2I6IDI1MiwyNTAsMjU1O1xuICAtLWlvbi1jb2xvci1tZWRpdW0tY29udHJhc3Q6ICMwMDAwMDA7XG4gIC0taW9uLWNvbG9yLW1lZGl1bS1jb250cmFzdC1yZ2I6IDAsMCwwO1xuICAtLWlvbi1jb2xvci1tZWRpdW0tc2hhZGU6ICNkZWRjZTA7XG4gIC0taW9uLWNvbG9yLW1lZGl1bS10aW50OiAjZmNmYmZmO1xuXG4gIC0taW9uLWNvbG9yLWxpZ2h0OiAjRkZGRkZGO1xuICAtLWlvbi1jb2xvci1saWdodC1yZ2I6IDI1NSwyNTUsMjU1O1xuICAtLWlvbi1jb2xvci1saWdodC1jb250cmFzdDogIzFhMWExYTtcbiAgLS1pb24tY29sb3ItbGlnaHQtY29udHJhc3QtcmdiOiAwLDAsMDtcbiAgLS1pb24tY29sb3ItbGlnaHQtc2hhZGU6ICNlMGUwZTA7XG4gIC0taW9uLWNvbG9yLWxpZ2h0LXRpbnQ6ICNmZmZmZmY7XG5cbiAgLS1pb24tdGV4dC1jb2xvcjogIzFjMWMxYztcbiAgLS1pb24taXRlbS1iYWNrZ3JvdW5kOiB2YXIoLS1pb24tY29sb3ItbGlnaHQpO1xufVxuXG4vKlxuKiBEYXJrIENvbG9yc1xuKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4qL1xuXG5ib2R5LmRhcmsge1xuICAtLWlvbi1jb2xvci1wcmltYXJ5OiAjNzkyNGYwO1xuICAtLWlvbi1jb2xvci1wcmltYXJ5LXJnYjogMTIxLDM2LDI0MDtcbiAgLS1pb24tY29sb3ItcHJpbWFyeS1jb250cmFzdDogI2ZmZmZmZjtcbiAgLS1pb24tY29sb3ItcHJpbWFyeS1jb250cmFzdC1yZ2I6IDI1NSwyNTUsMjU1O1xuICAtLWlvbi1jb2xvci1wcmltYXJ5LXNoYWRlOiAjNmEyMGQzO1xuICAtLWlvbi1jb2xvci1wcmltYXJ5LXRpbnQ6ICM4NjNhZjI7XG5cbiAgLS1pb24tY29sb3Itc2Vjb25kYXJ5OiAjNjIyQkQ5O1xuICAtLWlvbi1jb2xvci1zZWNvbmRhcnktcmdiOiA5OCw0MywyMTc7XG4gIC0taW9uLWNvbG9yLXNlY29uZGFyeS1jb250cmFzdDogI2ZmZmZmZjtcbiAgLS1pb24tY29sb3Itc2Vjb25kYXJ5LWNvbnRyYXN0LXJnYjogMjU1LDI1NSwyNTU7XG4gIC0taW9uLWNvbG9yLXNlY29uZGFyeS1zaGFkZTogIzU2MjZiZjtcbiAgLS1pb24tY29sb3Itc2Vjb25kYXJ5LXRpbnQ6ICM3MjQwZGQ7XG5cbiAgLS1pb24tY29sb3ItdGVydGlhcnk6ICM3NTJCREY7XG4gIC0taW9uLWNvbG9yLXRlcnRpYXJ5LXJnYjogMTE3LDQzLDIyMztcbiAgLS1pb24tY29sb3ItdGVydGlhcnktY29udHJhc3Q6ICNmZmZmZmY7XG4gIC0taW9uLWNvbG9yLXRlcnRpYXJ5LWNvbnRyYXN0LXJnYjogMjU1LDI1NSwyNTU7XG4gIC0taW9uLWNvbG9yLXRlcnRpYXJ5LXNoYWRlOiAjNjcyNmM0O1xuICAtLWlvbi1jb2xvci10ZXJ0aWFyeS10aW50OiAjODM0MGUyO1xuXG4gIC0taW9uLWNvbG9yLXN1Y2Nlc3M6ICMzM2NjNzM7XG4gIC0taW9uLWNvbG9yLXN1Y2Nlc3MtcmdiOiA1MSwyMDQsMTE1O1xuICAtLWlvbi1jb2xvci1zdWNjZXNzLWNvbnRyYXN0OiAjZmZmZmZmO1xuICAtLWlvbi1jb2xvci1zdWNjZXNzLWNvbnRyYXN0LXJnYjogMCwwLDA7XG4gIC0taW9uLWNvbG9yLXN1Y2Nlc3Mtc2hhZGU6ICMyZGI0NjU7XG4gIC0taW9uLWNvbG9yLXN1Y2Nlc3MtdGludDogIzQ3ZDE4MTtcblxuICAtLWlvbi1jb2xvci13YXJuaW5nOiAjZjJlMjMxO1xuICAtLWlvbi1jb2xvci13YXJuaW5nLXJnYjogMjQyLDIyNiw0OTtcbiAgLS1pb24tY29sb3Itd2FybmluZy1jb250cmFzdDogI2ZmZjtcbiAgLS1pb24tY29sb3Itd2FybmluZy1jb250cmFzdC1yZ2I6IDI1NSwyNTUsMjU1O1xuICAtLWlvbi1jb2xvci13YXJuaW5nLXNoYWRlOiAjZDVjNzJiO1xuICAtLWlvbi1jb2xvci13YXJuaW5nLXRpbnQ6ICNmM2U1NDY7XG5cbiAgLS1pb24tY29sb3ItZGFuZ2VyOiAjZTUzZTNlO1xuICAtLWlvbi1jb2xvci1kYW5nZXItcmdiOiAyMjksNjIsNjI7XG4gIC0taW9uLWNvbG9yLWRhbmdlci1jb250cmFzdDogI2ZmZmZmZjtcbiAgLS1pb24tY29sb3ItZGFuZ2VyLWNvbnRyYXN0LXJnYjogMjU1LDI1NSwyNTU7XG4gIC0taW9uLWNvbG9yLWRhbmdlci1zaGFkZTogI2NhMzczNztcbiAgLS1pb24tY29sb3ItZGFuZ2VyLXRpbnQ6ICNlODUxNTE7XG5cbiAgLS1pb24tY29sb3ItbWVkaXVtOiAjMTIxMjEyO1xuICAtLWlvbi1jb2xvci1tZWRpdW0tcmdiOiAxOCwxOCwxODtcbiAgLS1pb24tY29sb3ItbWVkaXVtLWNvbnRyYXN0OiAjZmZmZmZmO1xuICAtLWlvbi1jb2xvci1tZWRpdW0tY29udHJhc3QtcmdiOiAyNTUsMjU1LDI1NTtcbiAgLS1pb24tY29sb3ItbWVkaXVtLXNoYWRlOiAjMTAxMDEwO1xuICAtLWlvbi1jb2xvci1tZWRpdW0tdGludDogIzJhMmEyYTtcblxuICAtLWlvbi1jb2xvci1saWdodDogIzFkMWQxZDtcbiAgLS1pb24tY29sb3ItbGlnaHQtcmdiOiAyOSwyOSwyOTtcbiAgLS1pb24tY29sb3ItbGlnaHQtY29udHJhc3Q6ICNmZmZmZmY7XG4gIC0taW9uLWNvbG9yLWxpZ2h0LWNvbnRyYXN0LXJnYjogMjU1LDI1NSwyNTU7XG4gIC0taW9uLWNvbG9yLWxpZ2h0LXNoYWRlOiAjMWExYTFhO1xuICAtLWlvbi1jb2xvci1saWdodC10aW50OiAjMzQzNDM0O1xuXG4gIC0taW9uLXRleHQtY29sb3I6ICNmZmY7XG4gIC0taW9uLWl0ZW0tYmFja2dyb3VuZDogdmFyKC0taW9uLWNvbG9yLWxpZ2h0KTtcbn1cbiIsIkBpbXBvcnQgXCIuLi90aGVtZS92YXJpYWJsZXMuc2Nzc1wiO1xuXG4uYXBwLXRpdGxlIHtcbiAgY29sb3I6IHZhcigtLWlvbi1jb2xvci1wcmltYXJ5LCAjNzkyNGYwKTtcbiAgZm9udC1zaXplOiAycmVtO1xuICBtYXJnaW4tbGVmdDogMC41cmVtO1xuICBjdXJzb3I6IHBvaW50ZXI7XG4gIGZvbnQtZmFtaWx5OiAnRnJlZG9rYScsIHNhbnMtc2VyaWY7XG4gIGZvbnQtd2VpZ2h0OiA1MDA7XG4gIGhlaWdodDogMy43cmVtO1xuICBsaW5lLWhlaWdodDogMy43cmVtO1xufVxuXG5pb24tdG9vbGJhciB7XG4gIGhlaWdodDogMy43cmVtO1xuICB0ZXh0LWFsaWduOiBsZWZ0O1xuICBib3gtc2hhZG93OiAwIDAgMjBweCByZ2JhKDAsIDAsIDAsIDAuMDgpO1xufVxuXG5pb24tbWVudSB7XG4gIGJvcmRlcjogbm9uZTtcbiAgLS1pb24tYmFja2dyb3VuZC1jb2xvcjogdmFyKC0taW9uLWNvbG9yLWxpZ2h0KSAhaW1wb3J0YW50O1xuICBib3gtc2hhZG93OiAwIDAgMjBweCByZ2JhKDAsIDAsIDAsIDAuMSk7XG5cbiAgaW9uLWNvbnRlbnQge1xuICAgIC0taW9uLWJhY2tncm91bmQtY29sb3I6IHZhcigtLWlvbi1jb2xvci1saWdodCkgIWltcG9ydGFudDtcbiAgfVxuXG4gIEBtZWRpYSAobWF4LXdpZHRoOiA5OTFweCkge1xuICAgIGlvbi1jb250ZW50IHtcbiAgICAgIGJvcmRlcjogbm9uZTtcbiAgICB9XG4gIH1cblxuICBpb24tbGlzdCB7XG4gICAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XG4gIH1cbn1cblxuLnNwbGl0LXBhbmUtdmlzaWJsZSA+IGlvbi1tZW51IHtcbiAgbWF4LXdpZHRoOiAzMDBweCFpbXBvcnRhbnQ7XG59XG5cbmlvbi1mb290ZXIge1xuICBwb3NpdGlvbjogZml4ZWQ7XG4gIGJvdHRvbTogMDtcbn1cblxuI2F2YXRhciB7XG4gIHBhZGRpbmctbGVmdDogMTAlO1xuXG4gIGlvbi1sYWJlbCB7XG4gICAgY29sb3I6IHZhcigtLWlvbi10ZXh0LWNvbG9yKTtcbiAgICBoMSwgaDIge1xuICAgICAgZm9udC13ZWlnaHQ6IDU1MDtcbiAgICB9XG4gIH1cbn1cblxuLnJvdXRlcyB7XG4gIC0tcmlwcGxlLWNvbG9yOiB0cmFuc3BhcmVudCAhaW1wb3J0YW50O1xuICAtLWJhY2tncm91bmQtaG92ZXItb3BhY2l0eTogMDtcbiAgcGFkZGluZy1sZWZ0OiAxMCU7XG5cbiAgaW9uLWxhYmVsIHtcbiAgICBmb250LXdlaWdodDogNTUwO1xuICAgIG9wYWNpdHk6IDAuOTtcbiAgICB0cmFuc2l0aW9uOiBhbGwgMC4zcztcbiAgfVxuICBpb24taWNvbiB7XG4gICAgY29sb3I6IHZhcigtLWlvbi10ZXh0LWNvbG9yKTtcbiAgICBvcGFjaXR5OiAwLjk7XG4gICAgdHJhbnNpdGlvbjogYWxsIDAuM3M7XG4gIH1cbn1cblxuLnJvdXRlczpob3ZlciB7XG4gIGlvbi1sYWJlbCwgaW9uLWljb24ge1xuICAgIG9wYWNpdHk6IDE7XG4gICAgY29sb3I6IHZhcigtLWlvbi1jb2xvci1wcmltYXJ5KSAhaW1wb3J0YW50O1xuICB9XG59XG4iXX0= */";

/***/ }),

/***/ 91541:
/*!*****************************************************************!*\
  !*** ./src/app/components/alert-card/alert-card.component.scss ***!
  \*****************************************************************/
/***/ ((module) => {

"use strict";
module.exports = "\n@import url(\"https://fonts.googleapis.com/css2?family=Source+Code+Pro:wght@500&display=swap\");\n/** Ionic CSS Variables **/\n@font-face {\n  font-family: \"Montserrat\", sans-serif;\n}\n:root {\n  --ion-font-family: \"Montserrat\", sans-serif;\n}\n/*\n* Light Colors\n* -------------------------------------------\n*/\n:root {\n  --ion-color-primary: #6411D9;\n  --ion-color-primary-rgb: 100,17,217;\n  --ion-color-primary-contrast: #ffffff;\n  --ion-color-primary-contrast-rgb: 255,255,255;\n  --ion-color-primary-shade: #580fbf;\n  --ion-color-primary-tint: #7429dd;\n  --ion-color-secondary: #622BD9;\n  --ion-color-secondary-rgb: 98,43,217;\n  --ion-color-secondary-contrast: #ffffff;\n  --ion-color-secondary-contrast-rgb: 255,255,255;\n  --ion-color-secondary-shade: #5626bf;\n  --ion-color-secondary-tint: #7240dd;\n  --ion-color-tertiary: #752BDF;\n  --ion-color-tertiary-rgb: 117,43,223;\n  --ion-color-tertiary-contrast: #ffffff;\n  --ion-color-tertiary-contrast-rgb: 255,255,255;\n  --ion-color-tertiary-shade: #6726c4;\n  --ion-color-tertiary-tint: #8340e2;\n  --ion-color-success: #33cc73;\n  --ion-color-success-rgb: 51,204,115;\n  --ion-color-success-contrast: #ffffff;\n  --ion-color-success-contrast-rgb: 0,0,0;\n  --ion-color-success-shade: #2db465;\n  --ion-color-success-tint: #47d181;\n  --ion-color-warning: #f2e231;\n  --ion-color-warning-rgb: 242,226,49;\n  --ion-color-warning-contrast: #fff;\n  --ion-color-warning-contrast-rgb: 255,255,255;\n  --ion-color-warning-shade: #d5c72b;\n  --ion-color-warning-tint: #f3e546;\n  --ion-color-danger: #e53e3e;\n  --ion-color-danger-rgb: 229,62,62;\n  --ion-color-danger-contrast: #ffffff;\n  --ion-color-danger-contrast-rgb: 255,255,255;\n  --ion-color-danger-shade: #ca3737;\n  --ion-color-danger-tint: #e85151;\n  --ion-color-medium: #fcfaff;\n  --ion-color-medium-rgb: 252,250,255;\n  --ion-color-medium-contrast: #000000;\n  --ion-color-medium-contrast-rgb: 0,0,0;\n  --ion-color-medium-shade: #dedce0;\n  --ion-color-medium-tint: #fcfbff;\n  --ion-color-light: #FFFFFF;\n  --ion-color-light-rgb: 255,255,255;\n  --ion-color-light-contrast: #1a1a1a;\n  --ion-color-light-contrast-rgb: 0,0,0;\n  --ion-color-light-shade: #e0e0e0;\n  --ion-color-light-tint: #ffffff;\n  --ion-text-color: #1c1c1c;\n  --ion-item-background: var(--ion-color-light);\n}\n/*\n* Dark Colors\n* -------------------------------------------\n*/\nbody.dark {\n  --ion-color-primary: #7924f0;\n  --ion-color-primary-rgb: 121,36,240;\n  --ion-color-primary-contrast: #ffffff;\n  --ion-color-primary-contrast-rgb: 255,255,255;\n  --ion-color-primary-shade: #6a20d3;\n  --ion-color-primary-tint: #863af2;\n  --ion-color-secondary: #622BD9;\n  --ion-color-secondary-rgb: 98,43,217;\n  --ion-color-secondary-contrast: #ffffff;\n  --ion-color-secondary-contrast-rgb: 255,255,255;\n  --ion-color-secondary-shade: #5626bf;\n  --ion-color-secondary-tint: #7240dd;\n  --ion-color-tertiary: #752BDF;\n  --ion-color-tertiary-rgb: 117,43,223;\n  --ion-color-tertiary-contrast: #ffffff;\n  --ion-color-tertiary-contrast-rgb: 255,255,255;\n  --ion-color-tertiary-shade: #6726c4;\n  --ion-color-tertiary-tint: #8340e2;\n  --ion-color-success: #33cc73;\n  --ion-color-success-rgb: 51,204,115;\n  --ion-color-success-contrast: #ffffff;\n  --ion-color-success-contrast-rgb: 0,0,0;\n  --ion-color-success-shade: #2db465;\n  --ion-color-success-tint: #47d181;\n  --ion-color-warning: #f2e231;\n  --ion-color-warning-rgb: 242,226,49;\n  --ion-color-warning-contrast: #fff;\n  --ion-color-warning-contrast-rgb: 255,255,255;\n  --ion-color-warning-shade: #d5c72b;\n  --ion-color-warning-tint: #f3e546;\n  --ion-color-danger: #e53e3e;\n  --ion-color-danger-rgb: 229,62,62;\n  --ion-color-danger-contrast: #ffffff;\n  --ion-color-danger-contrast-rgb: 255,255,255;\n  --ion-color-danger-shade: #ca3737;\n  --ion-color-danger-tint: #e85151;\n  --ion-color-medium: #121212;\n  --ion-color-medium-rgb: 18,18,18;\n  --ion-color-medium-contrast: #ffffff;\n  --ion-color-medium-contrast-rgb: 255,255,255;\n  --ion-color-medium-shade: #101010;\n  --ion-color-medium-tint: #2a2a2a;\n  --ion-color-light: #1d1d1d;\n  --ion-color-light-rgb: 29,29,29;\n  --ion-color-light-contrast: #ffffff;\n  --ion-color-light-contrast-rgb: 255,255,255;\n  --ion-color-light-shade: #1a1a1a;\n  --ion-color-light-tint: #343434;\n  --ion-text-color: #fff;\n  --ion-item-background: var(--ion-color-light);\n}\nion-card {\n  flex-direction: row;\n  align-items: flex-start;\n  transition: all 0.1s;\n  margin: 7.5px 15px;\n  flex-grow: 1 !important;\n  text-align: left;\n  height: calc(100% - 30px);\n  box-shadow: 0 0 20px rgba(0, 0, 0, 0.18);\n  font-family: \"Source Code Pro\", monospace;\n}\nion-card ion-card-title {\n  font-size: 1.3rem;\n}\nion-card ion-icon {\n  color: white;\n}\nion-card:hover {\n  box-shadow: 0 0 30px rgba(0, 0, 0, 0.15);\n}\nion-list {\n  background-color: transparent;\n  padding: 0;\n  margin-top: 0;\n}\nion-list ion-item ion-label {\n  margin: 0;\n  font-size: 1rem;\n  font-family: \"Source Code Pro\", monospace;\n}\nion-icon {\n  float: right;\n  margin-top: 3px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFsZXJ0LWNhcmQuY29tcG9uZW50LnNjc3MiLCIuLi8uLi8uLi90aGVtZS92YXJpYWJsZXMuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQ1EsNkZBQUE7QUNFUiwwQkFBQTtBQUVBO0VBQ0UscUNBQUE7QURGRjtBQ0tBO0VBQ0UsMkNBQUE7QURIRjtBQ01BOzs7Q0FBQTtBQUtBO0VBQ0UsNEJBQUE7RUFDQSxtQ0FBQTtFQUNBLHFDQUFBO0VBQ0EsNkNBQUE7RUFDQSxrQ0FBQTtFQUNBLGlDQUFBO0VBRUEsOEJBQUE7RUFDQSxvQ0FBQTtFQUNBLHVDQUFBO0VBQ0EsK0NBQUE7RUFDQSxvQ0FBQTtFQUNBLG1DQUFBO0VBRUEsNkJBQUE7RUFDQSxvQ0FBQTtFQUNBLHNDQUFBO0VBQ0EsOENBQUE7RUFDQSxtQ0FBQTtFQUNBLGtDQUFBO0VBRUEsNEJBQUE7RUFDQSxtQ0FBQTtFQUNBLHFDQUFBO0VBQ0EsdUNBQUE7RUFDQSxrQ0FBQTtFQUNBLGlDQUFBO0VBRUEsNEJBQUE7RUFDQSxtQ0FBQTtFQUNBLGtDQUFBO0VBQ0EsNkNBQUE7RUFDQSxrQ0FBQTtFQUNBLGlDQUFBO0VBRUEsMkJBQUE7RUFDQSxpQ0FBQTtFQUNBLG9DQUFBO0VBQ0EsNENBQUE7RUFDQSxpQ0FBQTtFQUNBLGdDQUFBO0VBRUEsMkJBQUE7RUFDQSxtQ0FBQTtFQUNBLG9DQUFBO0VBQ0Esc0NBQUE7RUFDQSxpQ0FBQTtFQUNBLGdDQUFBO0VBRUEsMEJBQUE7RUFDQSxrQ0FBQTtFQUNBLG1DQUFBO0VBQ0EscUNBQUE7RUFDQSxnQ0FBQTtFQUNBLCtCQUFBO0VBRUEseUJBQUE7RUFDQSw2Q0FBQTtBRFpGO0FDZUE7OztDQUFBO0FBS0E7RUFDRSw0QkFBQTtFQUNBLG1DQUFBO0VBQ0EscUNBQUE7RUFDQSw2Q0FBQTtFQUNBLGtDQUFBO0VBQ0EsaUNBQUE7RUFFQSw4QkFBQTtFQUNBLG9DQUFBO0VBQ0EsdUNBQUE7RUFDQSwrQ0FBQTtFQUNBLG9DQUFBO0VBQ0EsbUNBQUE7RUFFQSw2QkFBQTtFQUNBLG9DQUFBO0VBQ0Esc0NBQUE7RUFDQSw4Q0FBQTtFQUNBLG1DQUFBO0VBQ0Esa0NBQUE7RUFFQSw0QkFBQTtFQUNBLG1DQUFBO0VBQ0EscUNBQUE7RUFDQSx1Q0FBQTtFQUNBLGtDQUFBO0VBQ0EsaUNBQUE7RUFFQSw0QkFBQTtFQUNBLG1DQUFBO0VBQ0Esa0NBQUE7RUFDQSw2Q0FBQTtFQUNBLGtDQUFBO0VBQ0EsaUNBQUE7RUFFQSwyQkFBQTtFQUNBLGlDQUFBO0VBQ0Esb0NBQUE7RUFDQSw0Q0FBQTtFQUNBLGlDQUFBO0VBQ0EsZ0NBQUE7RUFFQSwyQkFBQTtFQUNBLGdDQUFBO0VBQ0Esb0NBQUE7RUFDQSw0Q0FBQTtFQUNBLGlDQUFBO0VBQ0EsZ0NBQUE7RUFFQSwwQkFBQTtFQUNBLCtCQUFBO0VBQ0EsbUNBQUE7RUFDQSwyQ0FBQTtFQUNBLGdDQUFBO0VBQ0EsK0JBQUE7RUFFQSxzQkFBQTtFQUNBLDZDQUFBO0FEckJGO0FBdEhBO0VBQ0UsbUJBQUE7RUFDQSx1QkFBQTtFQUNBLG9CQUFBO0VBQ0Esa0JBQUE7RUFDQSx1QkFBQTtFQUNBLGdCQUFBO0VBQ0EseUJBQUE7RUFDQSx3Q0FBQTtFQUNBLHlDQUFBO0FBeUhGO0FBdkhFO0VBQ0UsaUJBQUE7QUF5SEo7QUF0SEU7RUFDRSxZQUFBO0FBd0hKO0FBcEhBO0VBQ0Usd0NBQUE7QUF1SEY7QUFwSEE7RUFDRSw2QkFBQTtFQUNBLFVBQUE7RUFDQSxhQUFBO0FBdUhGO0FBcEhJO0VBQ0UsU0FBQTtFQUNBLGVBQUE7RUFDQSx5Q0FBQTtBQXNITjtBQWpIQTtFQUNFLFlBQUE7RUFDQSxlQUFBO0FBb0hGIiwiZmlsZSI6ImFsZXJ0LWNhcmQuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJAaW1wb3J0IFwiLi4vLi4vLi4vdGhlbWUvdmFyaWFibGVzLnNjc3NcIjtcbkBpbXBvcnQgdXJsKCdodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2NzczI/ZmFtaWx5PVNvdXJjZStDb2RlK1Bybzp3Z2h0QDUwMCZkaXNwbGF5PXN3YXAnKTtcblxuaW9uLWNhcmQge1xuICBmbGV4LWRpcmVjdGlvbjogcm93O1xuICBhbGlnbi1pdGVtczogZmxleC1zdGFydDtcbiAgdHJhbnNpdGlvbjogYWxsIDAuMXM7XG4gIG1hcmdpbjogNy41cHggMTVweDtcbiAgZmxleC1ncm93OiAxICFpbXBvcnRhbnQ7XG4gIHRleHQtYWxpZ246IGxlZnQ7XG4gIGhlaWdodDogY2FsYygxMDAlIC0gMzBweCk7XG4gIGJveC1zaGFkb3c6IDAgMCAyMHB4IHJnYmEoMCwgMCwgMCwgMC4xOCk7XG4gIGZvbnQtZmFtaWx5OiAnU291cmNlIENvZGUgUHJvJywgbW9ub3NwYWNlO1xuXG4gIGlvbi1jYXJkLXRpdGxlIHtcbiAgICBmb250LXNpemU6IDEuM3JlbTtcbiAgfVxuXG4gIGlvbi1pY29uIHtcbiAgICBjb2xvcjp3aGl0ZTtcbiAgfVxufVxuXG5pb24tY2FyZDpob3ZlciB7XG4gIGJveC1zaGFkb3c6IDAgMCAzMHB4IHJnYmEoMCwgMCwgMCwgMC4xNSk7XG59XG5cbmlvbi1saXN0IHtcbiAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XG4gIHBhZGRpbmc6IDA7XG4gIG1hcmdpbi10b3A6IDA7XG5cbiAgaW9uLWl0ZW0ge1xuICAgIGlvbi1sYWJlbCB7XG4gICAgICBtYXJnaW46IDA7XG4gICAgICBmb250LXNpemU6IDFyZW07XG4gICAgICBmb250LWZhbWlseTogJ1NvdXJjZSBDb2RlIFBybycsIG1vbm9zcGFjZTtcbiAgICB9XG4gIH1cbn1cblxuaW9uLWljb24ge1xuICBmbG9hdDogcmlnaHQ7XG4gIG1hcmdpbi10b3A6IDNweDtcbn1cbiIsIi8vIElvbmljIFZhcmlhYmxlcyBhbmQgVGhlbWluZy4gRm9yIG1vcmUgaW5mbywgcGxlYXNlIHNlZTpcbi8vIGh0dHA6Ly9pb25pY2ZyYW1ld29yay5jb20vZG9jcy90aGVtaW5nL1xuXG4vKiogSW9uaWMgQ1NTIFZhcmlhYmxlcyAqKi9cblxuQGZvbnQtZmFjZSB7XG4gIGZvbnQtZmFtaWx5OiAnTW9udHNlcnJhdCcsIHNhbnMtc2VyaWY7XG59XG5cbjpyb290IHtcbiAgLS1pb24tZm9udC1mYW1pbHk6ICdNb250c2VycmF0Jywgc2Fucy1zZXJpZjtcbn1cblxuLypcbiogTGlnaHQgQ29sb3JzXG4qIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiovXG5cbjpyb290IHtcbiAgLS1pb24tY29sb3ItcHJpbWFyeTogIzY0MTFEOTtcbiAgLS1pb24tY29sb3ItcHJpbWFyeS1yZ2I6IDEwMCwxNywyMTc7XG4gIC0taW9uLWNvbG9yLXByaW1hcnktY29udHJhc3Q6ICNmZmZmZmY7XG4gIC0taW9uLWNvbG9yLXByaW1hcnktY29udHJhc3QtcmdiOiAyNTUsMjU1LDI1NTtcbiAgLS1pb24tY29sb3ItcHJpbWFyeS1zaGFkZTogIzU4MGZiZjtcbiAgLS1pb24tY29sb3ItcHJpbWFyeS10aW50OiAjNzQyOWRkO1xuXG4gIC0taW9uLWNvbG9yLXNlY29uZGFyeTogIzYyMkJEOTtcbiAgLS1pb24tY29sb3Itc2Vjb25kYXJ5LXJnYjogOTgsNDMsMjE3O1xuICAtLWlvbi1jb2xvci1zZWNvbmRhcnktY29udHJhc3Q6ICNmZmZmZmY7XG4gIC0taW9uLWNvbG9yLXNlY29uZGFyeS1jb250cmFzdC1yZ2I6IDI1NSwyNTUsMjU1O1xuICAtLWlvbi1jb2xvci1zZWNvbmRhcnktc2hhZGU6ICM1NjI2YmY7XG4gIC0taW9uLWNvbG9yLXNlY29uZGFyeS10aW50OiAjNzI0MGRkO1xuXG4gIC0taW9uLWNvbG9yLXRlcnRpYXJ5OiAjNzUyQkRGO1xuICAtLWlvbi1jb2xvci10ZXJ0aWFyeS1yZ2I6IDExNyw0MywyMjM7XG4gIC0taW9uLWNvbG9yLXRlcnRpYXJ5LWNvbnRyYXN0OiAjZmZmZmZmO1xuICAtLWlvbi1jb2xvci10ZXJ0aWFyeS1jb250cmFzdC1yZ2I6IDI1NSwyNTUsMjU1O1xuICAtLWlvbi1jb2xvci10ZXJ0aWFyeS1zaGFkZTogIzY3MjZjNDtcbiAgLS1pb24tY29sb3ItdGVydGlhcnktdGludDogIzgzNDBlMjtcblxuICAtLWlvbi1jb2xvci1zdWNjZXNzOiAjMzNjYzczO1xuICAtLWlvbi1jb2xvci1zdWNjZXNzLXJnYjogNTEsMjA0LDExNTtcbiAgLS1pb24tY29sb3Itc3VjY2Vzcy1jb250cmFzdDogI2ZmZmZmZjtcbiAgLS1pb24tY29sb3Itc3VjY2Vzcy1jb250cmFzdC1yZ2I6IDAsMCwwO1xuICAtLWlvbi1jb2xvci1zdWNjZXNzLXNoYWRlOiAjMmRiNDY1O1xuICAtLWlvbi1jb2xvci1zdWNjZXNzLXRpbnQ6ICM0N2QxODE7XG5cbiAgLS1pb24tY29sb3Itd2FybmluZzogI2YyZTIzMTtcbiAgLS1pb24tY29sb3Itd2FybmluZy1yZ2I6IDI0MiwyMjYsNDk7XG4gIC0taW9uLWNvbG9yLXdhcm5pbmctY29udHJhc3Q6ICNmZmY7XG4gIC0taW9uLWNvbG9yLXdhcm5pbmctY29udHJhc3QtcmdiOiAyNTUsMjU1LDI1NTtcbiAgLS1pb24tY29sb3Itd2FybmluZy1zaGFkZTogI2Q1YzcyYjtcbiAgLS1pb24tY29sb3Itd2FybmluZy10aW50OiAjZjNlNTQ2O1xuXG4gIC0taW9uLWNvbG9yLWRhbmdlcjogI2U1M2UzZTtcbiAgLS1pb24tY29sb3ItZGFuZ2VyLXJnYjogMjI5LDYyLDYyO1xuICAtLWlvbi1jb2xvci1kYW5nZXItY29udHJhc3Q6ICNmZmZmZmY7XG4gIC0taW9uLWNvbG9yLWRhbmdlci1jb250cmFzdC1yZ2I6IDI1NSwyNTUsMjU1O1xuICAtLWlvbi1jb2xvci1kYW5nZXItc2hhZGU6ICNjYTM3Mzc7XG4gIC0taW9uLWNvbG9yLWRhbmdlci10aW50OiAjZTg1MTUxO1xuXG4gIC0taW9uLWNvbG9yLW1lZGl1bTogI2ZjZmFmZjtcbiAgLS1pb24tY29sb3ItbWVkaXVtLXJnYjogMjUyLDI1MCwyNTU7XG4gIC0taW9uLWNvbG9yLW1lZGl1bS1jb250cmFzdDogIzAwMDAwMDtcbiAgLS1pb24tY29sb3ItbWVkaXVtLWNvbnRyYXN0LXJnYjogMCwwLDA7XG4gIC0taW9uLWNvbG9yLW1lZGl1bS1zaGFkZTogI2RlZGNlMDtcbiAgLS1pb24tY29sb3ItbWVkaXVtLXRpbnQ6ICNmY2ZiZmY7XG5cbiAgLS1pb24tY29sb3ItbGlnaHQ6ICNGRkZGRkY7XG4gIC0taW9uLWNvbG9yLWxpZ2h0LXJnYjogMjU1LDI1NSwyNTU7XG4gIC0taW9uLWNvbG9yLWxpZ2h0LWNvbnRyYXN0OiAjMWExYTFhO1xuICAtLWlvbi1jb2xvci1saWdodC1jb250cmFzdC1yZ2I6IDAsMCwwO1xuICAtLWlvbi1jb2xvci1saWdodC1zaGFkZTogI2UwZTBlMDtcbiAgLS1pb24tY29sb3ItbGlnaHQtdGludDogI2ZmZmZmZjtcblxuICAtLWlvbi10ZXh0LWNvbG9yOiAjMWMxYzFjO1xuICAtLWlvbi1pdGVtLWJhY2tncm91bmQ6IHZhcigtLWlvbi1jb2xvci1saWdodCk7XG59XG5cbi8qXG4qIERhcmsgQ29sb3JzXG4qIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiovXG5cbmJvZHkuZGFyayB7XG4gIC0taW9uLWNvbG9yLXByaW1hcnk6ICM3OTI0ZjA7XG4gIC0taW9uLWNvbG9yLXByaW1hcnktcmdiOiAxMjEsMzYsMjQwO1xuICAtLWlvbi1jb2xvci1wcmltYXJ5LWNvbnRyYXN0OiAjZmZmZmZmO1xuICAtLWlvbi1jb2xvci1wcmltYXJ5LWNvbnRyYXN0LXJnYjogMjU1LDI1NSwyNTU7XG4gIC0taW9uLWNvbG9yLXByaW1hcnktc2hhZGU6ICM2YTIwZDM7XG4gIC0taW9uLWNvbG9yLXByaW1hcnktdGludDogIzg2M2FmMjtcblxuICAtLWlvbi1jb2xvci1zZWNvbmRhcnk6ICM2MjJCRDk7XG4gIC0taW9uLWNvbG9yLXNlY29uZGFyeS1yZ2I6IDk4LDQzLDIxNztcbiAgLS1pb24tY29sb3Itc2Vjb25kYXJ5LWNvbnRyYXN0OiAjZmZmZmZmO1xuICAtLWlvbi1jb2xvci1zZWNvbmRhcnktY29udHJhc3QtcmdiOiAyNTUsMjU1LDI1NTtcbiAgLS1pb24tY29sb3Itc2Vjb25kYXJ5LXNoYWRlOiAjNTYyNmJmO1xuICAtLWlvbi1jb2xvci1zZWNvbmRhcnktdGludDogIzcyNDBkZDtcblxuICAtLWlvbi1jb2xvci10ZXJ0aWFyeTogIzc1MkJERjtcbiAgLS1pb24tY29sb3ItdGVydGlhcnktcmdiOiAxMTcsNDMsMjIzO1xuICAtLWlvbi1jb2xvci10ZXJ0aWFyeS1jb250cmFzdDogI2ZmZmZmZjtcbiAgLS1pb24tY29sb3ItdGVydGlhcnktY29udHJhc3QtcmdiOiAyNTUsMjU1LDI1NTtcbiAgLS1pb24tY29sb3ItdGVydGlhcnktc2hhZGU6ICM2NzI2YzQ7XG4gIC0taW9uLWNvbG9yLXRlcnRpYXJ5LXRpbnQ6ICM4MzQwZTI7XG5cbiAgLS1pb24tY29sb3Itc3VjY2VzczogIzMzY2M3MztcbiAgLS1pb24tY29sb3Itc3VjY2Vzcy1yZ2I6IDUxLDIwNCwxMTU7XG4gIC0taW9uLWNvbG9yLXN1Y2Nlc3MtY29udHJhc3Q6ICNmZmZmZmY7XG4gIC0taW9uLWNvbG9yLXN1Y2Nlc3MtY29udHJhc3QtcmdiOiAwLDAsMDtcbiAgLS1pb24tY29sb3Itc3VjY2Vzcy1zaGFkZTogIzJkYjQ2NTtcbiAgLS1pb24tY29sb3Itc3VjY2Vzcy10aW50OiAjNDdkMTgxO1xuXG4gIC0taW9uLWNvbG9yLXdhcm5pbmc6ICNmMmUyMzE7XG4gIC0taW9uLWNvbG9yLXdhcm5pbmctcmdiOiAyNDIsMjI2LDQ5O1xuICAtLWlvbi1jb2xvci13YXJuaW5nLWNvbnRyYXN0OiAjZmZmO1xuICAtLWlvbi1jb2xvci13YXJuaW5nLWNvbnRyYXN0LXJnYjogMjU1LDI1NSwyNTU7XG4gIC0taW9uLWNvbG9yLXdhcm5pbmctc2hhZGU6ICNkNWM3MmI7XG4gIC0taW9uLWNvbG9yLXdhcm5pbmctdGludDogI2YzZTU0NjtcblxuICAtLWlvbi1jb2xvci1kYW5nZXI6ICNlNTNlM2U7XG4gIC0taW9uLWNvbG9yLWRhbmdlci1yZ2I6IDIyOSw2Miw2MjtcbiAgLS1pb24tY29sb3ItZGFuZ2VyLWNvbnRyYXN0OiAjZmZmZmZmO1xuICAtLWlvbi1jb2xvci1kYW5nZXItY29udHJhc3QtcmdiOiAyNTUsMjU1LDI1NTtcbiAgLS1pb24tY29sb3ItZGFuZ2VyLXNoYWRlOiAjY2EzNzM3O1xuICAtLWlvbi1jb2xvci1kYW5nZXItdGludDogI2U4NTE1MTtcblxuICAtLWlvbi1jb2xvci1tZWRpdW06ICMxMjEyMTI7XG4gIC0taW9uLWNvbG9yLW1lZGl1bS1yZ2I6IDE4LDE4LDE4O1xuICAtLWlvbi1jb2xvci1tZWRpdW0tY29udHJhc3Q6ICNmZmZmZmY7XG4gIC0taW9uLWNvbG9yLW1lZGl1bS1jb250cmFzdC1yZ2I6IDI1NSwyNTUsMjU1O1xuICAtLWlvbi1jb2xvci1tZWRpdW0tc2hhZGU6ICMxMDEwMTA7XG4gIC0taW9uLWNvbG9yLW1lZGl1bS10aW50OiAjMmEyYTJhO1xuXG4gIC0taW9uLWNvbG9yLWxpZ2h0OiAjMWQxZDFkO1xuICAtLWlvbi1jb2xvci1saWdodC1yZ2I6IDI5LDI5LDI5O1xuICAtLWlvbi1jb2xvci1saWdodC1jb250cmFzdDogI2ZmZmZmZjtcbiAgLS1pb24tY29sb3ItbGlnaHQtY29udHJhc3QtcmdiOiAyNTUsMjU1LDI1NTtcbiAgLS1pb24tY29sb3ItbGlnaHQtc2hhZGU6ICMxYTFhMWE7XG4gIC0taW9uLWNvbG9yLWxpZ2h0LXRpbnQ6ICMzNDM0MzQ7XG5cbiAgLS1pb24tdGV4dC1jb2xvcjogI2ZmZjtcbiAgLS1pb24taXRlbS1iYWNrZ3JvdW5kOiB2YXIoLS1pb24tY29sb3ItbGlnaHQpO1xufVxuIl19 */";

/***/ }),

/***/ 29004:
/*!*******************************************************************!*\
  !*** ./src/app/components/back-button/back-button.component.scss ***!
  \*******************************************************************/
/***/ ((module) => {

"use strict";
module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJiYWNrLWJ1dHRvbi5jb21wb25lbnQuc2NzcyJ9 */";

/***/ }),

/***/ 76412:
/*!*************************************************************************!*\
  !*** ./src/app/components/card-title-bar/card-title-bar.component.scss ***!
  \*************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = "@import url(\"https://fonts.googleapis.com/css2?family=Fredoka:wght@500&display=swap\");\n/** Ionic CSS Variables **/\n@font-face {\n  font-family: \"Montserrat\", sans-serif;\n}\n:root {\n  --ion-font-family: \"Montserrat\", sans-serif;\n}\n/*\n* Light Colors\n* -------------------------------------------\n*/\n:root {\n  --ion-color-primary: #6411D9;\n  --ion-color-primary-rgb: 100,17,217;\n  --ion-color-primary-contrast: #ffffff;\n  --ion-color-primary-contrast-rgb: 255,255,255;\n  --ion-color-primary-shade: #580fbf;\n  --ion-color-primary-tint: #7429dd;\n  --ion-color-secondary: #622BD9;\n  --ion-color-secondary-rgb: 98,43,217;\n  --ion-color-secondary-contrast: #ffffff;\n  --ion-color-secondary-contrast-rgb: 255,255,255;\n  --ion-color-secondary-shade: #5626bf;\n  --ion-color-secondary-tint: #7240dd;\n  --ion-color-tertiary: #752BDF;\n  --ion-color-tertiary-rgb: 117,43,223;\n  --ion-color-tertiary-contrast: #ffffff;\n  --ion-color-tertiary-contrast-rgb: 255,255,255;\n  --ion-color-tertiary-shade: #6726c4;\n  --ion-color-tertiary-tint: #8340e2;\n  --ion-color-success: #33cc73;\n  --ion-color-success-rgb: 51,204,115;\n  --ion-color-success-contrast: #ffffff;\n  --ion-color-success-contrast-rgb: 0,0,0;\n  --ion-color-success-shade: #2db465;\n  --ion-color-success-tint: #47d181;\n  --ion-color-warning: #f2e231;\n  --ion-color-warning-rgb: 242,226,49;\n  --ion-color-warning-contrast: #fff;\n  --ion-color-warning-contrast-rgb: 255,255,255;\n  --ion-color-warning-shade: #d5c72b;\n  --ion-color-warning-tint: #f3e546;\n  --ion-color-danger: #e53e3e;\n  --ion-color-danger-rgb: 229,62,62;\n  --ion-color-danger-contrast: #ffffff;\n  --ion-color-danger-contrast-rgb: 255,255,255;\n  --ion-color-danger-shade: #ca3737;\n  --ion-color-danger-tint: #e85151;\n  --ion-color-medium: #fcfaff;\n  --ion-color-medium-rgb: 252,250,255;\n  --ion-color-medium-contrast: #000000;\n  --ion-color-medium-contrast-rgb: 0,0,0;\n  --ion-color-medium-shade: #dedce0;\n  --ion-color-medium-tint: #fcfbff;\n  --ion-color-light: #FFFFFF;\n  --ion-color-light-rgb: 255,255,255;\n  --ion-color-light-contrast: #1a1a1a;\n  --ion-color-light-contrast-rgb: 0,0,0;\n  --ion-color-light-shade: #e0e0e0;\n  --ion-color-light-tint: #ffffff;\n  --ion-text-color: #1c1c1c;\n  --ion-item-background: var(--ion-color-light);\n}\n/*\n* Dark Colors\n* -------------------------------------------\n*/\nbody.dark {\n  --ion-color-primary: #7924f0;\n  --ion-color-primary-rgb: 121,36,240;\n  --ion-color-primary-contrast: #ffffff;\n  --ion-color-primary-contrast-rgb: 255,255,255;\n  --ion-color-primary-shade: #6a20d3;\n  --ion-color-primary-tint: #863af2;\n  --ion-color-secondary: #622BD9;\n  --ion-color-secondary-rgb: 98,43,217;\n  --ion-color-secondary-contrast: #ffffff;\n  --ion-color-secondary-contrast-rgb: 255,255,255;\n  --ion-color-secondary-shade: #5626bf;\n  --ion-color-secondary-tint: #7240dd;\n  --ion-color-tertiary: #752BDF;\n  --ion-color-tertiary-rgb: 117,43,223;\n  --ion-color-tertiary-contrast: #ffffff;\n  --ion-color-tertiary-contrast-rgb: 255,255,255;\n  --ion-color-tertiary-shade: #6726c4;\n  --ion-color-tertiary-tint: #8340e2;\n  --ion-color-success: #33cc73;\n  --ion-color-success-rgb: 51,204,115;\n  --ion-color-success-contrast: #ffffff;\n  --ion-color-success-contrast-rgb: 0,0,0;\n  --ion-color-success-shade: #2db465;\n  --ion-color-success-tint: #47d181;\n  --ion-color-warning: #f2e231;\n  --ion-color-warning-rgb: 242,226,49;\n  --ion-color-warning-contrast: #fff;\n  --ion-color-warning-contrast-rgb: 255,255,255;\n  --ion-color-warning-shade: #d5c72b;\n  --ion-color-warning-tint: #f3e546;\n  --ion-color-danger: #e53e3e;\n  --ion-color-danger-rgb: 229,62,62;\n  --ion-color-danger-contrast: #ffffff;\n  --ion-color-danger-contrast-rgb: 255,255,255;\n  --ion-color-danger-shade: #ca3737;\n  --ion-color-danger-tint: #e85151;\n  --ion-color-medium: #121212;\n  --ion-color-medium-rgb: 18,18,18;\n  --ion-color-medium-contrast: #ffffff;\n  --ion-color-medium-contrast-rgb: 255,255,255;\n  --ion-color-medium-shade: #101010;\n  --ion-color-medium-tint: #2a2a2a;\n  --ion-color-light: #1d1d1d;\n  --ion-color-light-rgb: 29,29,29;\n  --ion-color-light-contrast: #ffffff;\n  --ion-color-light-contrast-rgb: 255,255,255;\n  --ion-color-light-shade: #1a1a1a;\n  --ion-color-light-tint: #343434;\n  --ion-text-color: #fff;\n  --ion-item-background: var(--ion-color-light);\n}\nion-toolbar {\n  z-index: 0;\n  color: white;\n  box-shadow: 0 0 20px rgba(0, 0, 0, 0.18);\n  border-radius: 10000px;\n  text-align: left;\n  margin-left: 10px;\n  width: calc(100% - 20px);\n  margin-bottom: 20px;\n}\nion-title {\n  color: white;\n  margin-left: 10px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNhcmQtdGl0bGUtYmFyLmNvbXBvbmVudC5zY3NzIiwiLi4vLi4vLi4vdGhlbWUvdmFyaWFibGVzLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQVEscUZBQUE7QUNHUiwwQkFBQTtBQUVBO0VBQ0UscUNBQUE7QURGRjtBQ0tBO0VBQ0UsMkNBQUE7QURIRjtBQ01BOzs7Q0FBQTtBQUtBO0VBQ0UsNEJBQUE7RUFDQSxtQ0FBQTtFQUNBLHFDQUFBO0VBQ0EsNkNBQUE7RUFDQSxrQ0FBQTtFQUNBLGlDQUFBO0VBRUEsOEJBQUE7RUFDQSxvQ0FBQTtFQUNBLHVDQUFBO0VBQ0EsK0NBQUE7RUFDQSxvQ0FBQTtFQUNBLG1DQUFBO0VBRUEsNkJBQUE7RUFDQSxvQ0FBQTtFQUNBLHNDQUFBO0VBQ0EsOENBQUE7RUFDQSxtQ0FBQTtFQUNBLGtDQUFBO0VBRUEsNEJBQUE7RUFDQSxtQ0FBQTtFQUNBLHFDQUFBO0VBQ0EsdUNBQUE7RUFDQSxrQ0FBQTtFQUNBLGlDQUFBO0VBRUEsNEJBQUE7RUFDQSxtQ0FBQTtFQUNBLGtDQUFBO0VBQ0EsNkNBQUE7RUFDQSxrQ0FBQTtFQUNBLGlDQUFBO0VBRUEsMkJBQUE7RUFDQSxpQ0FBQTtFQUNBLG9DQUFBO0VBQ0EsNENBQUE7RUFDQSxpQ0FBQTtFQUNBLGdDQUFBO0VBRUEsMkJBQUE7RUFDQSxtQ0FBQTtFQUNBLG9DQUFBO0VBQ0Esc0NBQUE7RUFDQSxpQ0FBQTtFQUNBLGdDQUFBO0VBRUEsMEJBQUE7RUFDQSxrQ0FBQTtFQUNBLG1DQUFBO0VBQ0EscUNBQUE7RUFDQSxnQ0FBQTtFQUNBLCtCQUFBO0VBRUEseUJBQUE7RUFDQSw2Q0FBQTtBRFpGO0FDZUE7OztDQUFBO0FBS0E7RUFDRSw0QkFBQTtFQUNBLG1DQUFBO0VBQ0EscUNBQUE7RUFDQSw2Q0FBQTtFQUNBLGtDQUFBO0VBQ0EsaUNBQUE7RUFFQSw4QkFBQTtFQUNBLG9DQUFBO0VBQ0EsdUNBQUE7RUFDQSwrQ0FBQTtFQUNBLG9DQUFBO0VBQ0EsbUNBQUE7RUFFQSw2QkFBQTtFQUNBLG9DQUFBO0VBQ0Esc0NBQUE7RUFDQSw4Q0FBQTtFQUNBLG1DQUFBO0VBQ0Esa0NBQUE7RUFFQSw0QkFBQTtFQUNBLG1DQUFBO0VBQ0EscUNBQUE7RUFDQSx1Q0FBQTtFQUNBLGtDQUFBO0VBQ0EsaUNBQUE7RUFFQSw0QkFBQTtFQUNBLG1DQUFBO0VBQ0Esa0NBQUE7RUFDQSw2Q0FBQTtFQUNBLGtDQUFBO0VBQ0EsaUNBQUE7RUFFQSwyQkFBQTtFQUNBLGlDQUFBO0VBQ0Esb0NBQUE7RUFDQSw0Q0FBQTtFQUNBLGlDQUFBO0VBQ0EsZ0NBQUE7RUFFQSwyQkFBQTtFQUNBLGdDQUFBO0VBQ0Esb0NBQUE7RUFDQSw0Q0FBQTtFQUNBLGlDQUFBO0VBQ0EsZ0NBQUE7RUFFQSwwQkFBQTtFQUNBLCtCQUFBO0VBQ0EsbUNBQUE7RUFDQSwyQ0FBQTtFQUNBLGdDQUFBO0VBQ0EsK0JBQUE7RUFFQSxzQkFBQTtFQUNBLDZDQUFBO0FEckJGO0FBdEhBO0VBQ0UsVUFBQTtFQUNBLFlBQUE7RUFDQSx3Q0FBQTtFQUNBLHNCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxpQkFBQTtFQUNBLHdCQUFBO0VBQ0EsbUJBQUE7QUF5SEY7QUF0SEE7RUFDRSxZQUFBO0VBQ0EsaUJBQUE7QUF5SEYiLCJmaWxlIjoiY2FyZC10aXRsZS1iYXIuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJAaW1wb3J0IHVybCgnaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9jc3MyP2ZhbWlseT1GcmVkb2thOndnaHRANTAwJmRpc3BsYXk9c3dhcCcpO1xuQGltcG9ydCBcIi4uLy4uLy4uL3RoZW1lL3ZhcmlhYmxlcy5zY3NzXCI7XG5cbmlvbi10b29sYmFyIHtcbiAgei1pbmRleDogMDtcbiAgY29sb3I6IHdoaXRlO1xuICBib3gtc2hhZG93OiAwIDAgMjBweCByZ2JhKDAsIDAsIDAsIDAuMTgpO1xuICBib3JkZXItcmFkaXVzOiAxMDAwMHB4O1xuICB0ZXh0LWFsaWduOiBsZWZ0O1xuICBtYXJnaW4tbGVmdDogMTBweDtcbiAgd2lkdGg6IGNhbGMoMTAwJSAtIDIwcHgpO1xuICBtYXJnaW4tYm90dG9tOiAyMHB4O1xufVxuXG5pb24tdGl0bGUge1xuICBjb2xvcjogd2hpdGU7XG4gIG1hcmdpbi1sZWZ0OiAxMHB4O1xufVxuIiwiLy8gSW9uaWMgVmFyaWFibGVzIGFuZCBUaGVtaW5nLiBGb3IgbW9yZSBpbmZvLCBwbGVhc2Ugc2VlOlxuLy8gaHR0cDovL2lvbmljZnJhbWV3b3JrLmNvbS9kb2NzL3RoZW1pbmcvXG5cbi8qKiBJb25pYyBDU1MgVmFyaWFibGVzICoqL1xuXG5AZm9udC1mYWNlIHtcbiAgZm9udC1mYW1pbHk6ICdNb250c2VycmF0Jywgc2Fucy1zZXJpZjtcbn1cblxuOnJvb3Qge1xuICAtLWlvbi1mb250LWZhbWlseTogJ01vbnRzZXJyYXQnLCBzYW5zLXNlcmlmO1xufVxuXG4vKlxuKiBMaWdodCBDb2xvcnNcbiogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuKi9cblxuOnJvb3Qge1xuICAtLWlvbi1jb2xvci1wcmltYXJ5OiAjNjQxMUQ5O1xuICAtLWlvbi1jb2xvci1wcmltYXJ5LXJnYjogMTAwLDE3LDIxNztcbiAgLS1pb24tY29sb3ItcHJpbWFyeS1jb250cmFzdDogI2ZmZmZmZjtcbiAgLS1pb24tY29sb3ItcHJpbWFyeS1jb250cmFzdC1yZ2I6IDI1NSwyNTUsMjU1O1xuICAtLWlvbi1jb2xvci1wcmltYXJ5LXNoYWRlOiAjNTgwZmJmO1xuICAtLWlvbi1jb2xvci1wcmltYXJ5LXRpbnQ6ICM3NDI5ZGQ7XG5cbiAgLS1pb24tY29sb3Itc2Vjb25kYXJ5OiAjNjIyQkQ5O1xuICAtLWlvbi1jb2xvci1zZWNvbmRhcnktcmdiOiA5OCw0MywyMTc7XG4gIC0taW9uLWNvbG9yLXNlY29uZGFyeS1jb250cmFzdDogI2ZmZmZmZjtcbiAgLS1pb24tY29sb3Itc2Vjb25kYXJ5LWNvbnRyYXN0LXJnYjogMjU1LDI1NSwyNTU7XG4gIC0taW9uLWNvbG9yLXNlY29uZGFyeS1zaGFkZTogIzU2MjZiZjtcbiAgLS1pb24tY29sb3Itc2Vjb25kYXJ5LXRpbnQ6ICM3MjQwZGQ7XG5cbiAgLS1pb24tY29sb3ItdGVydGlhcnk6ICM3NTJCREY7XG4gIC0taW9uLWNvbG9yLXRlcnRpYXJ5LXJnYjogMTE3LDQzLDIyMztcbiAgLS1pb24tY29sb3ItdGVydGlhcnktY29udHJhc3Q6ICNmZmZmZmY7XG4gIC0taW9uLWNvbG9yLXRlcnRpYXJ5LWNvbnRyYXN0LXJnYjogMjU1LDI1NSwyNTU7XG4gIC0taW9uLWNvbG9yLXRlcnRpYXJ5LXNoYWRlOiAjNjcyNmM0O1xuICAtLWlvbi1jb2xvci10ZXJ0aWFyeS10aW50OiAjODM0MGUyO1xuXG4gIC0taW9uLWNvbG9yLXN1Y2Nlc3M6ICMzM2NjNzM7XG4gIC0taW9uLWNvbG9yLXN1Y2Nlc3MtcmdiOiA1MSwyMDQsMTE1O1xuICAtLWlvbi1jb2xvci1zdWNjZXNzLWNvbnRyYXN0OiAjZmZmZmZmO1xuICAtLWlvbi1jb2xvci1zdWNjZXNzLWNvbnRyYXN0LXJnYjogMCwwLDA7XG4gIC0taW9uLWNvbG9yLXN1Y2Nlc3Mtc2hhZGU6ICMyZGI0NjU7XG4gIC0taW9uLWNvbG9yLXN1Y2Nlc3MtdGludDogIzQ3ZDE4MTtcblxuICAtLWlvbi1jb2xvci13YXJuaW5nOiAjZjJlMjMxO1xuICAtLWlvbi1jb2xvci13YXJuaW5nLXJnYjogMjQyLDIyNiw0OTtcbiAgLS1pb24tY29sb3Itd2FybmluZy1jb250cmFzdDogI2ZmZjtcbiAgLS1pb24tY29sb3Itd2FybmluZy1jb250cmFzdC1yZ2I6IDI1NSwyNTUsMjU1O1xuICAtLWlvbi1jb2xvci13YXJuaW5nLXNoYWRlOiAjZDVjNzJiO1xuICAtLWlvbi1jb2xvci13YXJuaW5nLXRpbnQ6ICNmM2U1NDY7XG5cbiAgLS1pb24tY29sb3ItZGFuZ2VyOiAjZTUzZTNlO1xuICAtLWlvbi1jb2xvci1kYW5nZXItcmdiOiAyMjksNjIsNjI7XG4gIC0taW9uLWNvbG9yLWRhbmdlci1jb250cmFzdDogI2ZmZmZmZjtcbiAgLS1pb24tY29sb3ItZGFuZ2VyLWNvbnRyYXN0LXJnYjogMjU1LDI1NSwyNTU7XG4gIC0taW9uLWNvbG9yLWRhbmdlci1zaGFkZTogI2NhMzczNztcbiAgLS1pb24tY29sb3ItZGFuZ2VyLXRpbnQ6ICNlODUxNTE7XG5cbiAgLS1pb24tY29sb3ItbWVkaXVtOiAjZmNmYWZmO1xuICAtLWlvbi1jb2xvci1tZWRpdW0tcmdiOiAyNTIsMjUwLDI1NTtcbiAgLS1pb24tY29sb3ItbWVkaXVtLWNvbnRyYXN0OiAjMDAwMDAwO1xuICAtLWlvbi1jb2xvci1tZWRpdW0tY29udHJhc3QtcmdiOiAwLDAsMDtcbiAgLS1pb24tY29sb3ItbWVkaXVtLXNoYWRlOiAjZGVkY2UwO1xuICAtLWlvbi1jb2xvci1tZWRpdW0tdGludDogI2ZjZmJmZjtcblxuICAtLWlvbi1jb2xvci1saWdodDogI0ZGRkZGRjtcbiAgLS1pb24tY29sb3ItbGlnaHQtcmdiOiAyNTUsMjU1LDI1NTtcbiAgLS1pb24tY29sb3ItbGlnaHQtY29udHJhc3Q6ICMxYTFhMWE7XG4gIC0taW9uLWNvbG9yLWxpZ2h0LWNvbnRyYXN0LXJnYjogMCwwLDA7XG4gIC0taW9uLWNvbG9yLWxpZ2h0LXNoYWRlOiAjZTBlMGUwO1xuICAtLWlvbi1jb2xvci1saWdodC10aW50OiAjZmZmZmZmO1xuXG4gIC0taW9uLXRleHQtY29sb3I6ICMxYzFjMWM7XG4gIC0taW9uLWl0ZW0tYmFja2dyb3VuZDogdmFyKC0taW9uLWNvbG9yLWxpZ2h0KTtcbn1cblxuLypcbiogRGFyayBDb2xvcnNcbiogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuKi9cblxuYm9keS5kYXJrIHtcbiAgLS1pb24tY29sb3ItcHJpbWFyeTogIzc5MjRmMDtcbiAgLS1pb24tY29sb3ItcHJpbWFyeS1yZ2I6IDEyMSwzNiwyNDA7XG4gIC0taW9uLWNvbG9yLXByaW1hcnktY29udHJhc3Q6ICNmZmZmZmY7XG4gIC0taW9uLWNvbG9yLXByaW1hcnktY29udHJhc3QtcmdiOiAyNTUsMjU1LDI1NTtcbiAgLS1pb24tY29sb3ItcHJpbWFyeS1zaGFkZTogIzZhMjBkMztcbiAgLS1pb24tY29sb3ItcHJpbWFyeS10aW50OiAjODYzYWYyO1xuXG4gIC0taW9uLWNvbG9yLXNlY29uZGFyeTogIzYyMkJEOTtcbiAgLS1pb24tY29sb3Itc2Vjb25kYXJ5LXJnYjogOTgsNDMsMjE3O1xuICAtLWlvbi1jb2xvci1zZWNvbmRhcnktY29udHJhc3Q6ICNmZmZmZmY7XG4gIC0taW9uLWNvbG9yLXNlY29uZGFyeS1jb250cmFzdC1yZ2I6IDI1NSwyNTUsMjU1O1xuICAtLWlvbi1jb2xvci1zZWNvbmRhcnktc2hhZGU6ICM1NjI2YmY7XG4gIC0taW9uLWNvbG9yLXNlY29uZGFyeS10aW50OiAjNzI0MGRkO1xuXG4gIC0taW9uLWNvbG9yLXRlcnRpYXJ5OiAjNzUyQkRGO1xuICAtLWlvbi1jb2xvci10ZXJ0aWFyeS1yZ2I6IDExNyw0MywyMjM7XG4gIC0taW9uLWNvbG9yLXRlcnRpYXJ5LWNvbnRyYXN0OiAjZmZmZmZmO1xuICAtLWlvbi1jb2xvci10ZXJ0aWFyeS1jb250cmFzdC1yZ2I6IDI1NSwyNTUsMjU1O1xuICAtLWlvbi1jb2xvci10ZXJ0aWFyeS1zaGFkZTogIzY3MjZjNDtcbiAgLS1pb24tY29sb3ItdGVydGlhcnktdGludDogIzgzNDBlMjtcblxuICAtLWlvbi1jb2xvci1zdWNjZXNzOiAjMzNjYzczO1xuICAtLWlvbi1jb2xvci1zdWNjZXNzLXJnYjogNTEsMjA0LDExNTtcbiAgLS1pb24tY29sb3Itc3VjY2Vzcy1jb250cmFzdDogI2ZmZmZmZjtcbiAgLS1pb24tY29sb3Itc3VjY2Vzcy1jb250cmFzdC1yZ2I6IDAsMCwwO1xuICAtLWlvbi1jb2xvci1zdWNjZXNzLXNoYWRlOiAjMmRiNDY1O1xuICAtLWlvbi1jb2xvci1zdWNjZXNzLXRpbnQ6ICM0N2QxODE7XG5cbiAgLS1pb24tY29sb3Itd2FybmluZzogI2YyZTIzMTtcbiAgLS1pb24tY29sb3Itd2FybmluZy1yZ2I6IDI0MiwyMjYsNDk7XG4gIC0taW9uLWNvbG9yLXdhcm5pbmctY29udHJhc3Q6ICNmZmY7XG4gIC0taW9uLWNvbG9yLXdhcm5pbmctY29udHJhc3QtcmdiOiAyNTUsMjU1LDI1NTtcbiAgLS1pb24tY29sb3Itd2FybmluZy1zaGFkZTogI2Q1YzcyYjtcbiAgLS1pb24tY29sb3Itd2FybmluZy10aW50OiAjZjNlNTQ2O1xuXG4gIC0taW9uLWNvbG9yLWRhbmdlcjogI2U1M2UzZTtcbiAgLS1pb24tY29sb3ItZGFuZ2VyLXJnYjogMjI5LDYyLDYyO1xuICAtLWlvbi1jb2xvci1kYW5nZXItY29udHJhc3Q6ICNmZmZmZmY7XG4gIC0taW9uLWNvbG9yLWRhbmdlci1jb250cmFzdC1yZ2I6IDI1NSwyNTUsMjU1O1xuICAtLWlvbi1jb2xvci1kYW5nZXItc2hhZGU6ICNjYTM3Mzc7XG4gIC0taW9uLWNvbG9yLWRhbmdlci10aW50OiAjZTg1MTUxO1xuXG4gIC0taW9uLWNvbG9yLW1lZGl1bTogIzEyMTIxMjtcbiAgLS1pb24tY29sb3ItbWVkaXVtLXJnYjogMTgsMTgsMTg7XG4gIC0taW9uLWNvbG9yLW1lZGl1bS1jb250cmFzdDogI2ZmZmZmZjtcbiAgLS1pb24tY29sb3ItbWVkaXVtLWNvbnRyYXN0LXJnYjogMjU1LDI1NSwyNTU7XG4gIC0taW9uLWNvbG9yLW1lZGl1bS1zaGFkZTogIzEwMTAxMDtcbiAgLS1pb24tY29sb3ItbWVkaXVtLXRpbnQ6ICMyYTJhMmE7XG5cbiAgLS1pb24tY29sb3ItbGlnaHQ6ICMxZDFkMWQ7XG4gIC0taW9uLWNvbG9yLWxpZ2h0LXJnYjogMjksMjksMjk7XG4gIC0taW9uLWNvbG9yLWxpZ2h0LWNvbnRyYXN0OiAjZmZmZmZmO1xuICAtLWlvbi1jb2xvci1saWdodC1jb250cmFzdC1yZ2I6IDI1NSwyNTUsMjU1O1xuICAtLWlvbi1jb2xvci1saWdodC1zaGFkZTogIzFhMWExYTtcbiAgLS1pb24tY29sb3ItbGlnaHQtdGludDogIzM0MzQzNDtcblxuICAtLWlvbi10ZXh0LWNvbG9yOiAjZmZmO1xuICAtLWlvbi1pdGVtLWJhY2tncm91bmQ6IHZhcigtLWlvbi1jb2xvci1saWdodCk7XG59XG4iXX0= */";

/***/ }),

/***/ 25163:
/*!*****************************************************************!*\
  !*** ./src/app/components/empty-card/empty-card.component.scss ***!
  \*****************************************************************/
/***/ ((module) => {

"use strict";
module.exports = "@import url(\"https://fonts.googleapis.com/css?family=Montserrat:400,400i,700\");\ndiv {\n  text-align: center;\n  width: 100%;\n}\nh1 {\n  font-size: 12.5rem;\n  letter-spacing: 0.1em;\n  margin: 1rem 0;\n  text-shadow: 0.05em 0.05em 0 rgba(0, 0, 0, 0.25);\n  white-space: nowrap;\n}\n@media (max-width: 30rem) {\n  h1 {\n    font-size: 8.5rem;\n  }\n}\nh1 > span {\n  animation: spooky 5s alternate infinite linear;\n  color: var(--ion-color-primary);\n  display: inline-block;\n  text-shadow: 0.05em 0.05em 0 rgba(0, 0, 0, 0.25);\n}\nh2 {\n  font-size: 1.2rem;\n  letter-spacing: 0.1em;\n  margin: 1rem 0;\n  white-space: nowrap;\n  font-weight: 500;\n}\nfa-icon {\n  filter: drop-shadow(0.05em 0.05em 0 rgba(0, 0, 0, 0.25));\n}\n@keyframes spooky {\n  from {\n    transform: translatey(0.1em) scaley(0.95);\n  }\n  to {\n    transform: translatey(-0.1em);\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImVtcHR5LWNhcmQuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBS1EsOEVBQUE7QUFMUjtFQUNFLGtCQUFBO0VBQ0EsV0FBQTtBQUVGO0FBR0E7RUFDRSxrQkFBQTtFQUNBLHFCQUFBO0VBQ0EsY0FBQTtFQUNBLGdEQUFBO0VBQ0EsbUJBQUE7QUFBRjtBQUVFO0VBUEY7SUFRSSxpQkFBQTtFQUNGO0FBQ0Y7QUFDRTtFQUNFLDhDQUFBO0VBQ0EsK0JBQUE7RUFDQSxxQkFBQTtFQUNBLGdEQUFBO0FBQ0o7QUFHQTtFQUNFLGlCQUFBO0VBQ0EscUJBQUE7RUFDQSxjQUFBO0VBQ0EsbUJBQUE7RUFDQSxnQkFBQTtBQUFGO0FBR0E7RUFBUSx3REFBQTtBQUNSO0FBQ0E7RUFDRTtJQUNFLHlDQUFBO0VBRUY7RUFDQTtJQUNFLDZCQUFBO0VBQ0Y7QUFDRiIsImZpbGUiOiJlbXB0eS1jYXJkLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiZGl2IHtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICB3aWR0aDogMTAwJTtcbn1cblxuQGltcG9ydCB1cmwoXCJodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2Nzcz9mYW1pbHk9TW9udHNlcnJhdDo0MDAsNDAwaSw3MDBcIik7XG5cbmgxIHtcbiAgZm9udC1zaXplOiAxMi41cmVtO1xuICBsZXR0ZXItc3BhY2luZzogLjEwZW07XG4gIG1hcmdpbjogMXJlbSAwO1xuICB0ZXh0LXNoYWRvdzogLjA1ZW0gLjA1ZW0gMCByZ2JhKDAsMCwwLC4yNSk7XG4gIHdoaXRlLXNwYWNlOiBub3dyYXA7XG5cbiAgQG1lZGlhKG1heC13aWR0aDogMzByZW0pIHtcbiAgICBmb250LXNpemU6IDguNXJlbTtcbiAgfVxuXG4gICYgPiBzcGFuIHtcbiAgICBhbmltYXRpb246IHNwb29reSA1cyBhbHRlcm5hdGUgaW5maW5pdGUgbGluZWFyO1xuICAgIGNvbG9yOiB2YXIoLS1pb24tY29sb3ItcHJpbWFyeSk7XG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICAgIHRleHQtc2hhZG93OiAuMDVlbSAuMDVlbSAwIHJnYmEoMCwwLDAsLjI1KTtcbiAgfVxufVxuXG5oMiB7XG4gIGZvbnQtc2l6ZTogMS4ycmVtO1xuICBsZXR0ZXItc3BhY2luZzogLjEwZW07XG4gIG1hcmdpbjogMXJlbSAwO1xuICB3aGl0ZS1zcGFjZTogbm93cmFwO1xuICBmb250LXdlaWdodDogNTAwO1xufVxuXG5mYS1pY29ue2ZpbHRlcjpkcm9wLXNoYWRvdyguMDVlbSAuMDVlbSAwIHJnYmEoMCwwLDAsLjI1KSl9XG5cbkBrZXlmcmFtZXMgc3Bvb2t5IHtcbiAgZnJvbSB7XG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGV5KC4xZW0pIHNjYWxleSguOTUpO1xuICB9XG5cbiAgdG8ge1xuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRleSgtLjFlbSk7XG4gIH1cbn1cbiJdfQ== */";

/***/ }),

/***/ 21038:
/*!*********************************************************!*\
  !*** ./src/app/components/footer/footer.component.scss ***!
  \*********************************************************/
/***/ ((module) => {

"use strict";
module.exports = ".app-footer {\n  margin-top: 15%;\n  box-shadow: 0 0 20px rgba(0, 0, 0, 0.08);\n}\n\nion-toolbar {\n  text-align: center;\n  margin: 0;\n  padding: 0;\n}\n\n.footer-grid {\n  margin-top: 10px;\n  margin-bottom: 10px;\n}\n\n.legal {\n  cursor: default;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImZvb3Rlci5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGVBQUE7RUFDQSx3Q0FBQTtBQUNGOztBQUVBO0VBQ0Usa0JBQUE7RUFDQSxTQUFBO0VBQ0EsVUFBQTtBQUNGOztBQUVBO0VBQ0UsZ0JBQUE7RUFDQSxtQkFBQTtBQUNGOztBQUVBO0VBQ0UsZUFBQTtBQUNGIiwiZmlsZSI6ImZvb3Rlci5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5hcHAtZm9vdGVyIHtcbiAgbWFyZ2luLXRvcDogMTUlO1xuICBib3gtc2hhZG93OiAwIDAgMjBweCByZ2JhKDAsIDAsIDAsIDAuMDgpO1xufVxuXG5pb24tdG9vbGJhciB7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgbWFyZ2luOiAwO1xuICBwYWRkaW5nOiAwO1xufVxuXG4uZm9vdGVyLWdyaWQge1xuICBtYXJnaW4tdG9wOiAxMHB4O1xuICBtYXJnaW4tYm90dG9tOiAxMHB4O1xufVxuXG4ubGVnYWwge1xuICBjdXJzb3I6IGRlZmF1bHQ7XG59XG4iXX0= */";

/***/ }),

/***/ 93307:
/*!*****************************************************************!*\
  !*** ./src/app/components/form-error/form-error.component.scss ***!
  \*****************************************************************/
/***/ ((module) => {

"use strict";
module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJmb3JtLWVycm9yLmNvbXBvbmVudC5zY3NzIn0= */";

/***/ }),

/***/ 76816:
/*!*******************************************************************!*\
  !*** ./src/app/components/menu-footer/menu-footer.component.scss ***!
  \*******************************************************************/
/***/ ((module) => {

"use strict";
module.exports = ".menu-footer {\n  position: absolute;\n  bottom: 10px;\n}\n\nion-toolbar {\n  text-align: center;\n  margin-top: -5px;\n}\n\n.copyright {\n  font-size: 0.8rem;\n  color: #5c5c5e;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm1lbnUtZm9vdGVyLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0Usa0JBQUE7RUFDQSxZQUFBO0FBQ0Y7O0FBRUE7RUFDRSxrQkFBQTtFQUNBLGdCQUFBO0FBQ0Y7O0FBRUE7RUFDRSxpQkFBQTtFQUNBLGNBQUE7QUFDRiIsImZpbGUiOiJtZW51LWZvb3Rlci5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5tZW51LWZvb3RlciB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgYm90dG9tOiAxMHB4O1xufVxuXG5pb24tdG9vbGJhciB7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgbWFyZ2luLXRvcDogLTVweDtcbn1cblxuLmNvcHlyaWdodCB7XG4gIGZvbnQtc2l6ZTogMC44cmVtO1xuICBjb2xvcjogIzVjNWM1ZTtcbn1cblxuIl19 */";

/***/ }),

/***/ 45636:
/*!*************************************************************!*\
  !*** ./src/app/components/nav-card/nav-card.component.scss ***!
  \*************************************************************/
/***/ ((module) => {

"use strict";
module.exports = "ion-card {\n  display: flex;\n  flex-direction: row;\n  align-items: flex-start;\n  transition: all 0.1s;\n  margin: 0 15px 30px;\n  flex-grow: 1 !important;\n  text-align: left;\n  height: calc(100% - 30px);\n  min-width: 300px;\n  box-shadow: 0 0 20px rgba(0, 0, 0, 0.18);\n}\nion-card ion-card-title {\n  margin-bottom: -10px;\n}\nion-card ion-icon {\n  color: white;\n}\n.nav-card-div {\n  display: flex;\n  flex-grow: 1;\n}\nion-card:hover {\n  box-shadow: 0 0 30px rgba(0, 0, 0, 0.15);\n}\n.nav-card-div:hover {\n  transform: scale(1.01);\n}\n.type {\n  height: 40px;\n  display: block;\n  margin-left: -16px;\n  width: 100%;\n  min-width: 250px !important;\n  border-top-right-radius: 20px;\n  border-bottom-right-radius: 20px;\n  margin-bottom: 20px;\n  background-color: var(--ion-color-primary);\n  color: white;\n  z-index: 10;\n  text-align: right;\n  max-width: 250px;\n}\n.type ion-icon {\n  width: 20px;\n  height: 20px;\n  margin-top: 10px;\n  margin-bottom: 10px;\n  margin-right: 15px;\n  float: right;\n}\n.type h1 {\n  line-height: 40px;\n  height: 40px;\n  margin: 0;\n  font-size: 15pt;\n  width: calc(100% - 50px);\n  float: left;\n}\n.icon-container {\n  background-color: rgba(123, 44, 191, 0.2);\n  text-align: left;\n}\n.icon-container ion-icon {\n  color: var(--ion-color-primary);\n  width: 30px;\n  height: 30px;\n  margin: 7px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5hdi1jYXJkLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsYUFBQTtFQUNBLG1CQUFBO0VBQ0EsdUJBQUE7RUFDQSxvQkFBQTtFQUNBLG1CQUFBO0VBQ0EsdUJBQUE7RUFDQSxnQkFBQTtFQUNBLHlCQUFBO0VBQ0EsZ0JBQUE7RUFDQSx3Q0FBQTtBQUNGO0FBQ0U7RUFDRSxvQkFBQTtBQUNKO0FBRUU7RUFDRSxZQUFBO0FBQUo7QUFJQTtFQUNFLGFBQUE7RUFDQSxZQUFBO0FBREY7QUFJQTtFQUNFLHdDQUFBO0FBREY7QUFJQTtFQUNFLHNCQUFBO0FBREY7QUFJQTtFQUNFLFlBQUE7RUFDQSxjQUFBO0VBQ0Esa0JBQUE7RUFDQSxXQUFBO0VBQ0EsMkJBQUE7RUFDQSw2QkFBQTtFQUNBLGdDQUFBO0VBQ0EsbUJBQUE7RUFDQSwwQ0FBQTtFQUNBLFlBQUE7RUFDQSxXQUFBO0VBQ0EsaUJBQUE7RUFDQSxnQkFBQTtBQURGO0FBR0U7RUFDRSxXQUFBO0VBQ0EsWUFBQTtFQUNBLGdCQUFBO0VBQ0EsbUJBQUE7RUFDQSxrQkFBQTtFQUNBLFlBQUE7QUFESjtBQUlFO0VBQ0UsaUJBQUE7RUFDQSxZQUFBO0VBQ0EsU0FBQTtFQUNBLGVBQUE7RUFDQSx3QkFBQTtFQUNBLFdBQUE7QUFGSjtBQU1BO0VBQ0UseUNBQUE7RUFDQSxnQkFBQTtBQUhGO0FBS0U7RUFDRSwrQkFBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0VBQ0EsV0FBQTtBQUhKIiwiZmlsZSI6Im5hdi1jYXJkLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiaW9uLWNhcmQge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogcm93O1xuICBhbGlnbi1pdGVtczogZmxleC1zdGFydDtcbiAgdHJhbnNpdGlvbjogYWxsIDAuMXM7XG4gIG1hcmdpbjogMCAxNXB4IDMwcHg7XG4gIGZsZXgtZ3JvdzogMSAhaW1wb3J0YW50O1xuICB0ZXh0LWFsaWduOiBsZWZ0O1xuICBoZWlnaHQ6IGNhbGMoMTAwJSAtIDMwcHgpO1xuICBtaW4td2lkdGg6IDMwMHB4O1xuICBib3gtc2hhZG93OiAwIDAgMjBweCByZ2JhKDAsIDAsIDAsIDAuMTgpO1xuXG4gIGlvbi1jYXJkLXRpdGxlIHtcbiAgICBtYXJnaW4tYm90dG9tOiAtMTBweDtcbiAgfVxuXG4gIGlvbi1pY29uIHtcbiAgICBjb2xvcjp3aGl0ZVxuICB9XG59XG5cbi5uYXYtY2FyZC1kaXYge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWdyb3c6IDE7XG59XG5cbmlvbi1jYXJkOmhvdmVyIHtcbiAgYm94LXNoYWRvdzogMCAwIDMwcHggcmdiYSgwLCAwLCAwLCAwLjE1KTtcbn1cblxuLm5hdi1jYXJkLWRpdjpob3ZlciB7XG4gIHRyYW5zZm9ybTogc2NhbGUoMS4wMSk7XG59XG5cbi50eXBlIHtcbiAgaGVpZ2h0OiA0MHB4O1xuICBkaXNwbGF5OiBibG9jaztcbiAgbWFyZ2luLWxlZnQ6IC0xNnB4O1xuICB3aWR0aDogMTAwJTtcbiAgbWluLXdpZHRoOiAyNTBweCAhaW1wb3J0YW50O1xuICBib3JkZXItdG9wLXJpZ2h0LXJhZGl1czogMjBweDtcbiAgYm9yZGVyLWJvdHRvbS1yaWdodC1yYWRpdXM6IDIwcHg7XG4gIG1hcmdpbi1ib3R0b206IDIwcHg7XG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWlvbi1jb2xvci1wcmltYXJ5KTtcbiAgY29sb3I6IHdoaXRlO1xuICB6LWluZGV4OiAxMDtcbiAgdGV4dC1hbGlnbjogcmlnaHQ7XG4gIG1heC13aWR0aDogMjUwcHg7XG5cbiAgaW9uLWljb24ge1xuICAgIHdpZHRoOiAyMHB4O1xuICAgIGhlaWdodDogMjBweDtcbiAgICBtYXJnaW4tdG9wOiAxMHB4O1xuICAgIG1hcmdpbi1ib3R0b206IDEwcHg7XG4gICAgbWFyZ2luLXJpZ2h0OiAxNXB4O1xuICAgIGZsb2F0OiByaWdodDtcbiAgfVxuXG4gIGgxIHtcbiAgICBsaW5lLWhlaWdodDogNDBweDtcbiAgICBoZWlnaHQ6IDQwcHg7XG4gICAgbWFyZ2luOiAwO1xuICAgIGZvbnQtc2l6ZTogMTVwdDtcbiAgICB3aWR0aDogY2FsYygxMDAlIC0gNTBweCk7XG4gICAgZmxvYXQ6IGxlZnQ7XG4gIH1cbn1cblxuLmljb24tY29udGFpbmVyIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgxMjMsIDQ0LCAxOTEsIDAuMik7XG4gIHRleHQtYWxpZ246IGxlZnQ7XG5cbiAgaW9uLWljb24ge1xuICAgIGNvbG9yOiB2YXIoLS1pb24tY29sb3ItcHJpbWFyeSk7XG4gICAgd2lkdGg6IDMwcHg7XG4gICAgaGVpZ2h0OiAzMHB4O1xuICAgIG1hcmdpbjogN3B4O1xuICB9XG59XG4iXX0= */";

/***/ }),

/***/ 77748:
/*!*******************************************************************!*\
  !*** ./src/app/components/text-avatar/text-avatar.component.scss ***!
  \*******************************************************************/
/***/ ((module) => {

"use strict";
module.exports = "p {\n  margin: 0;\n}\n\n.avatar {\n  display: inline-block;\n  width: 40px;\n  height: 40px;\n  border-radius: 50%;\n  text-align: center;\n  line-height: 41px;\n  font-family: Arial, sans-serif;\n  font-weight: 500;\n  color: #fff;\n  background-color: var(--ion-color-primary);\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInRleHQtYXZhdGFyLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsU0FBQTtBQUNGOztBQUVBO0VBQ0UscUJBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLGtCQUFBO0VBQ0Esa0JBQUE7RUFDQSxpQkFBQTtFQUNBLDhCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxXQUFBO0VBQ0EsMENBQUE7QUFDRiIsImZpbGUiOiJ0ZXh0LWF2YXRhci5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbInAge1xuICBtYXJnaW46IDA7XG59XG5cbi5hdmF0YXIge1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gIHdpZHRoOiA0MHB4O1xuICBoZWlnaHQ6IDQwcHg7XG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBsaW5lLWhlaWdodDogNDFweDtcbiAgZm9udC1mYW1pbHk6IEFyaWFsLCBzYW5zLXNlcmlmO1xuICBmb250LXdlaWdodDogNTAwO1xuICBjb2xvcjogI2ZmZjtcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0taW9uLWNvbG9yLXByaW1hcnkpO1xufVxuIl19 */";

/***/ }),

/***/ 20743:
/*!***********************************************************!*\
  !*** ./src/app/components/toolbar/toolbar.component.scss ***!
  \***********************************************************/
/***/ ((module) => {

"use strict";
module.exports = "@import url(\"https://fonts.googleapis.com/css2?family=Varela+Round&display=swap\");\n/** Ionic CSS Variables **/\n@font-face {\n  font-family: \"Montserrat\", sans-serif;\n}\n:root {\n  --ion-font-family: \"Montserrat\", sans-serif;\n}\n/*\n* Light Colors\n* -------------------------------------------\n*/\n:root {\n  --ion-color-primary: #6411D9;\n  --ion-color-primary-rgb: 100,17,217;\n  --ion-color-primary-contrast: #ffffff;\n  --ion-color-primary-contrast-rgb: 255,255,255;\n  --ion-color-primary-shade: #580fbf;\n  --ion-color-primary-tint: #7429dd;\n  --ion-color-secondary: #622BD9;\n  --ion-color-secondary-rgb: 98,43,217;\n  --ion-color-secondary-contrast: #ffffff;\n  --ion-color-secondary-contrast-rgb: 255,255,255;\n  --ion-color-secondary-shade: #5626bf;\n  --ion-color-secondary-tint: #7240dd;\n  --ion-color-tertiary: #752BDF;\n  --ion-color-tertiary-rgb: 117,43,223;\n  --ion-color-tertiary-contrast: #ffffff;\n  --ion-color-tertiary-contrast-rgb: 255,255,255;\n  --ion-color-tertiary-shade: #6726c4;\n  --ion-color-tertiary-tint: #8340e2;\n  --ion-color-success: #33cc73;\n  --ion-color-success-rgb: 51,204,115;\n  --ion-color-success-contrast: #ffffff;\n  --ion-color-success-contrast-rgb: 0,0,0;\n  --ion-color-success-shade: #2db465;\n  --ion-color-success-tint: #47d181;\n  --ion-color-warning: #f2e231;\n  --ion-color-warning-rgb: 242,226,49;\n  --ion-color-warning-contrast: #fff;\n  --ion-color-warning-contrast-rgb: 255,255,255;\n  --ion-color-warning-shade: #d5c72b;\n  --ion-color-warning-tint: #f3e546;\n  --ion-color-danger: #e53e3e;\n  --ion-color-danger-rgb: 229,62,62;\n  --ion-color-danger-contrast: #ffffff;\n  --ion-color-danger-contrast-rgb: 255,255,255;\n  --ion-color-danger-shade: #ca3737;\n  --ion-color-danger-tint: #e85151;\n  --ion-color-medium: #fcfaff;\n  --ion-color-medium-rgb: 252,250,255;\n  --ion-color-medium-contrast: #000000;\n  --ion-color-medium-contrast-rgb: 0,0,0;\n  --ion-color-medium-shade: #dedce0;\n  --ion-color-medium-tint: #fcfbff;\n  --ion-color-light: #FFFFFF;\n  --ion-color-light-rgb: 255,255,255;\n  --ion-color-light-contrast: #1a1a1a;\n  --ion-color-light-contrast-rgb: 0,0,0;\n  --ion-color-light-shade: #e0e0e0;\n  --ion-color-light-tint: #ffffff;\n  --ion-text-color: #1c1c1c;\n  --ion-item-background: var(--ion-color-light);\n}\n/*\n* Dark Colors\n* -------------------------------------------\n*/\nbody.dark {\n  --ion-color-primary: #7924f0;\n  --ion-color-primary-rgb: 121,36,240;\n  --ion-color-primary-contrast: #ffffff;\n  --ion-color-primary-contrast-rgb: 255,255,255;\n  --ion-color-primary-shade: #6a20d3;\n  --ion-color-primary-tint: #863af2;\n  --ion-color-secondary: #622BD9;\n  --ion-color-secondary-rgb: 98,43,217;\n  --ion-color-secondary-contrast: #ffffff;\n  --ion-color-secondary-contrast-rgb: 255,255,255;\n  --ion-color-secondary-shade: #5626bf;\n  --ion-color-secondary-tint: #7240dd;\n  --ion-color-tertiary: #752BDF;\n  --ion-color-tertiary-rgb: 117,43,223;\n  --ion-color-tertiary-contrast: #ffffff;\n  --ion-color-tertiary-contrast-rgb: 255,255,255;\n  --ion-color-tertiary-shade: #6726c4;\n  --ion-color-tertiary-tint: #8340e2;\n  --ion-color-success: #33cc73;\n  --ion-color-success-rgb: 51,204,115;\n  --ion-color-success-contrast: #ffffff;\n  --ion-color-success-contrast-rgb: 0,0,0;\n  --ion-color-success-shade: #2db465;\n  --ion-color-success-tint: #47d181;\n  --ion-color-warning: #f2e231;\n  --ion-color-warning-rgb: 242,226,49;\n  --ion-color-warning-contrast: #fff;\n  --ion-color-warning-contrast-rgb: 255,255,255;\n  --ion-color-warning-shade: #d5c72b;\n  --ion-color-warning-tint: #f3e546;\n  --ion-color-danger: #e53e3e;\n  --ion-color-danger-rgb: 229,62,62;\n  --ion-color-danger-contrast: #ffffff;\n  --ion-color-danger-contrast-rgb: 255,255,255;\n  --ion-color-danger-shade: #ca3737;\n  --ion-color-danger-tint: #e85151;\n  --ion-color-medium: #121212;\n  --ion-color-medium-rgb: 18,18,18;\n  --ion-color-medium-contrast: #ffffff;\n  --ion-color-medium-contrast-rgb: 255,255,255;\n  --ion-color-medium-shade: #101010;\n  --ion-color-medium-tint: #2a2a2a;\n  --ion-color-light: #1d1d1d;\n  --ion-color-light-rgb: 29,29,29;\n  --ion-color-light-contrast: #ffffff;\n  --ion-color-light-contrast-rgb: 255,255,255;\n  --ion-color-light-shade: #1a1a1a;\n  --ion-color-light-tint: #343434;\n  --ion-text-color: #fff;\n  --ion-item-background: var(--ion-color-light);\n}\n.app-title {\n  color: var(--ion-color-primary, #7924f0);\n  font-size: 2rem;\n  margin-left: 0.5rem;\n  cursor: pointer;\n  font-family: \"Varela Round\", sans-serif;\n  font-weight: 700;\n  height: 3.7rem;\n  line-height: 3.7rem;\n}\nion-toolbar {\n  position: fixed;\n  width: 100%;\n  left: 0;\n  height: 3.7rem;\n  text-align: left;\n  box-shadow: 0 0 20px rgba(0, 0, 0, 0.08);\n}\nion-grid {\n  width: fit-content;\n  width: -moz-fit-content;\n  margin-left: 0;\n  margin-top: 0;\n}\n.primary-toolbar {\n  margin-bottom: 0;\n}\nion-chip {\n  width: max-content;\n  border-width: 2px;\n}\nion-label {\n  color: #FFFFFF;\n}\nion-button {\n  --ripple-color: transparent !important;\n  --background-hover-opacity: 0;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInRvb2xiYXIuY29tcG9uZW50LnNjc3MiLCIuLi8uLi8uLi90aGVtZS92YXJpYWJsZXMuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBUSxpRkFBQTtBQ0dSLDBCQUFBO0FBRUE7RUFDRSxxQ0FBQTtBREZGO0FDS0E7RUFDRSwyQ0FBQTtBREhGO0FDTUE7OztDQUFBO0FBS0E7RUFDRSw0QkFBQTtFQUNBLG1DQUFBO0VBQ0EscUNBQUE7RUFDQSw2Q0FBQTtFQUNBLGtDQUFBO0VBQ0EsaUNBQUE7RUFFQSw4QkFBQTtFQUNBLG9DQUFBO0VBQ0EsdUNBQUE7RUFDQSwrQ0FBQTtFQUNBLG9DQUFBO0VBQ0EsbUNBQUE7RUFFQSw2QkFBQTtFQUNBLG9DQUFBO0VBQ0Esc0NBQUE7RUFDQSw4Q0FBQTtFQUNBLG1DQUFBO0VBQ0Esa0NBQUE7RUFFQSw0QkFBQTtFQUNBLG1DQUFBO0VBQ0EscUNBQUE7RUFDQSx1Q0FBQTtFQUNBLGtDQUFBO0VBQ0EsaUNBQUE7RUFFQSw0QkFBQTtFQUNBLG1DQUFBO0VBQ0Esa0NBQUE7RUFDQSw2Q0FBQTtFQUNBLGtDQUFBO0VBQ0EsaUNBQUE7RUFFQSwyQkFBQTtFQUNBLGlDQUFBO0VBQ0Esb0NBQUE7RUFDQSw0Q0FBQTtFQUNBLGlDQUFBO0VBQ0EsZ0NBQUE7RUFFQSwyQkFBQTtFQUNBLG1DQUFBO0VBQ0Esb0NBQUE7RUFDQSxzQ0FBQTtFQUNBLGlDQUFBO0VBQ0EsZ0NBQUE7RUFFQSwwQkFBQTtFQUNBLGtDQUFBO0VBQ0EsbUNBQUE7RUFDQSxxQ0FBQTtFQUNBLGdDQUFBO0VBQ0EsK0JBQUE7RUFFQSx5QkFBQTtFQUNBLDZDQUFBO0FEWkY7QUNlQTs7O0NBQUE7QUFLQTtFQUNFLDRCQUFBO0VBQ0EsbUNBQUE7RUFDQSxxQ0FBQTtFQUNBLDZDQUFBO0VBQ0Esa0NBQUE7RUFDQSxpQ0FBQTtFQUVBLDhCQUFBO0VBQ0Esb0NBQUE7RUFDQSx1Q0FBQTtFQUNBLCtDQUFBO0VBQ0Esb0NBQUE7RUFDQSxtQ0FBQTtFQUVBLDZCQUFBO0VBQ0Esb0NBQUE7RUFDQSxzQ0FBQTtFQUNBLDhDQUFBO0VBQ0EsbUNBQUE7RUFDQSxrQ0FBQTtFQUVBLDRCQUFBO0VBQ0EsbUNBQUE7RUFDQSxxQ0FBQTtFQUNBLHVDQUFBO0VBQ0Esa0NBQUE7RUFDQSxpQ0FBQTtFQUVBLDRCQUFBO0VBQ0EsbUNBQUE7RUFDQSxrQ0FBQTtFQUNBLDZDQUFBO0VBQ0Esa0NBQUE7RUFDQSxpQ0FBQTtFQUVBLDJCQUFBO0VBQ0EsaUNBQUE7RUFDQSxvQ0FBQTtFQUNBLDRDQUFBO0VBQ0EsaUNBQUE7RUFDQSxnQ0FBQTtFQUVBLDJCQUFBO0VBQ0EsZ0NBQUE7RUFDQSxvQ0FBQTtFQUNBLDRDQUFBO0VBQ0EsaUNBQUE7RUFDQSxnQ0FBQTtFQUVBLDBCQUFBO0VBQ0EsK0JBQUE7RUFDQSxtQ0FBQTtFQUNBLDJDQUFBO0VBQ0EsZ0NBQUE7RUFDQSwrQkFBQTtFQUVBLHNCQUFBO0VBQ0EsNkNBQUE7QURyQkY7QUF0SEE7RUFDRSx3Q0FBQTtFQUNBLGVBQUE7RUFDQSxtQkFBQTtFQUNBLGVBQUE7RUFDQSx1Q0FBQTtFQUNBLGdCQUFBO0VBQ0EsY0FBQTtFQUNBLG1CQUFBO0FBeUhGO0FBdEhBO0VBQ0UsZUFBQTtFQUNBLFdBQUE7RUFDQSxPQUFBO0VBQ0EsY0FBQTtFQUNBLGdCQUFBO0VBQ0Esd0NBQUE7QUF5SEY7QUF0SEE7RUFDRSxrQkFBQTtFQUNBLHVCQUFBO0VBQ0EsY0FBQTtFQUNBLGFBQUE7QUF5SEY7QUF0SEE7RUFDRSxnQkFBQTtBQXlIRjtBQXRIQTtFQUNFLGtCQUFBO0VBQ0EsaUJBQUE7QUF5SEY7QUF0SEE7RUFDRSxjQUFBO0FBeUhGO0FBdEhBO0VBQ0Usc0NBQUE7RUFDQSw2QkFBQTtBQXlIRiIsImZpbGUiOiJ0b29sYmFyLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiQGltcG9ydCB1cmwoJ2h0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzMj9mYW1pbHk9VmFyZWxhK1JvdW5kJmRpc3BsYXk9c3dhcCcpO1xuQGltcG9ydCBcIi4uLy4uLy4uL3RoZW1lL3ZhcmlhYmxlcy5zY3NzXCI7XG5cbi5hcHAtdGl0bGUge1xuICBjb2xvcjogdmFyKC0taW9uLWNvbG9yLXByaW1hcnksICM3OTI0ZjApO1xuICBmb250LXNpemU6IDJyZW07XG4gIG1hcmdpbi1sZWZ0OiAwLjVyZW07XG4gIGN1cnNvcjogcG9pbnRlcjtcbiAgZm9udC1mYW1pbHk6ICdWYXJlbGEgUm91bmQnLCBzYW5zLXNlcmlmO1xuICBmb250LXdlaWdodDogNzAwO1xuICBoZWlnaHQ6IDMuN3JlbTtcbiAgbGluZS1oZWlnaHQ6IDMuN3JlbTtcbn1cblxuaW9uLXRvb2xiYXIge1xuICBwb3NpdGlvbjogZml4ZWQ7XG4gIHdpZHRoOiAxMDAlO1xuICBsZWZ0OiAwO1xuICBoZWlnaHQ6IDMuN3JlbTtcbiAgdGV4dC1hbGlnbjogbGVmdDtcbiAgYm94LXNoYWRvdzogMCAwIDIwcHggcmdiYSgwLCAwLCAwLCAwLjA4KTtcbn1cblxuaW9uLWdyaWQge1xuICB3aWR0aDogZml0LWNvbnRlbnQ7XG4gIHdpZHRoOiAtbW96LWZpdC1jb250ZW50O1xuICBtYXJnaW4tbGVmdDogMDtcbiAgbWFyZ2luLXRvcDogMDtcbn1cblxuLnByaW1hcnktdG9vbGJhciB7XG4gIG1hcmdpbi1ib3R0b206IDA7XG59XG5cbmlvbi1jaGlwIHtcbiAgd2lkdGg6IG1heC1jb250ZW50O1xuICBib3JkZXItd2lkdGg6IDJweDtcbn1cblxuaW9uLWxhYmVsIHtcbiAgY29sb3I6ICNGRkZGRkY7XG59XG5cbmlvbi1idXR0b24ge1xuICAtLXJpcHBsZS1jb2xvcjogdHJhbnNwYXJlbnQgIWltcG9ydGFudDtcbiAgLS1iYWNrZ3JvdW5kLWhvdmVyLW9wYWNpdHk6IDA7XG59XG4iLCIvLyBJb25pYyBWYXJpYWJsZXMgYW5kIFRoZW1pbmcuIEZvciBtb3JlIGluZm8sIHBsZWFzZSBzZWU6XG4vLyBodHRwOi8vaW9uaWNmcmFtZXdvcmsuY29tL2RvY3MvdGhlbWluZy9cblxuLyoqIElvbmljIENTUyBWYXJpYWJsZXMgKiovXG5cbkBmb250LWZhY2Uge1xuICBmb250LWZhbWlseTogJ01vbnRzZXJyYXQnLCBzYW5zLXNlcmlmO1xufVxuXG46cm9vdCB7XG4gIC0taW9uLWZvbnQtZmFtaWx5OiAnTW9udHNlcnJhdCcsIHNhbnMtc2VyaWY7XG59XG5cbi8qXG4qIExpZ2h0IENvbG9yc1xuKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4qL1xuXG46cm9vdCB7XG4gIC0taW9uLWNvbG9yLXByaW1hcnk6ICM2NDExRDk7XG4gIC0taW9uLWNvbG9yLXByaW1hcnktcmdiOiAxMDAsMTcsMjE3O1xuICAtLWlvbi1jb2xvci1wcmltYXJ5LWNvbnRyYXN0OiAjZmZmZmZmO1xuICAtLWlvbi1jb2xvci1wcmltYXJ5LWNvbnRyYXN0LXJnYjogMjU1LDI1NSwyNTU7XG4gIC0taW9uLWNvbG9yLXByaW1hcnktc2hhZGU6ICM1ODBmYmY7XG4gIC0taW9uLWNvbG9yLXByaW1hcnktdGludDogIzc0MjlkZDtcblxuICAtLWlvbi1jb2xvci1zZWNvbmRhcnk6ICM2MjJCRDk7XG4gIC0taW9uLWNvbG9yLXNlY29uZGFyeS1yZ2I6IDk4LDQzLDIxNztcbiAgLS1pb24tY29sb3Itc2Vjb25kYXJ5LWNvbnRyYXN0OiAjZmZmZmZmO1xuICAtLWlvbi1jb2xvci1zZWNvbmRhcnktY29udHJhc3QtcmdiOiAyNTUsMjU1LDI1NTtcbiAgLS1pb24tY29sb3Itc2Vjb25kYXJ5LXNoYWRlOiAjNTYyNmJmO1xuICAtLWlvbi1jb2xvci1zZWNvbmRhcnktdGludDogIzcyNDBkZDtcblxuICAtLWlvbi1jb2xvci10ZXJ0aWFyeTogIzc1MkJERjtcbiAgLS1pb24tY29sb3ItdGVydGlhcnktcmdiOiAxMTcsNDMsMjIzO1xuICAtLWlvbi1jb2xvci10ZXJ0aWFyeS1jb250cmFzdDogI2ZmZmZmZjtcbiAgLS1pb24tY29sb3ItdGVydGlhcnktY29udHJhc3QtcmdiOiAyNTUsMjU1LDI1NTtcbiAgLS1pb24tY29sb3ItdGVydGlhcnktc2hhZGU6ICM2NzI2YzQ7XG4gIC0taW9uLWNvbG9yLXRlcnRpYXJ5LXRpbnQ6ICM4MzQwZTI7XG5cbiAgLS1pb24tY29sb3Itc3VjY2VzczogIzMzY2M3MztcbiAgLS1pb24tY29sb3Itc3VjY2Vzcy1yZ2I6IDUxLDIwNCwxMTU7XG4gIC0taW9uLWNvbG9yLXN1Y2Nlc3MtY29udHJhc3Q6ICNmZmZmZmY7XG4gIC0taW9uLWNvbG9yLXN1Y2Nlc3MtY29udHJhc3QtcmdiOiAwLDAsMDtcbiAgLS1pb24tY29sb3Itc3VjY2Vzcy1zaGFkZTogIzJkYjQ2NTtcbiAgLS1pb24tY29sb3Itc3VjY2Vzcy10aW50OiAjNDdkMTgxO1xuXG4gIC0taW9uLWNvbG9yLXdhcm5pbmc6ICNmMmUyMzE7XG4gIC0taW9uLWNvbG9yLXdhcm5pbmctcmdiOiAyNDIsMjI2LDQ5O1xuICAtLWlvbi1jb2xvci13YXJuaW5nLWNvbnRyYXN0OiAjZmZmO1xuICAtLWlvbi1jb2xvci13YXJuaW5nLWNvbnRyYXN0LXJnYjogMjU1LDI1NSwyNTU7XG4gIC0taW9uLWNvbG9yLXdhcm5pbmctc2hhZGU6ICNkNWM3MmI7XG4gIC0taW9uLWNvbG9yLXdhcm5pbmctdGludDogI2YzZTU0NjtcblxuICAtLWlvbi1jb2xvci1kYW5nZXI6ICNlNTNlM2U7XG4gIC0taW9uLWNvbG9yLWRhbmdlci1yZ2I6IDIyOSw2Miw2MjtcbiAgLS1pb24tY29sb3ItZGFuZ2VyLWNvbnRyYXN0OiAjZmZmZmZmO1xuICAtLWlvbi1jb2xvci1kYW5nZXItY29udHJhc3QtcmdiOiAyNTUsMjU1LDI1NTtcbiAgLS1pb24tY29sb3ItZGFuZ2VyLXNoYWRlOiAjY2EzNzM3O1xuICAtLWlvbi1jb2xvci1kYW5nZXItdGludDogI2U4NTE1MTtcblxuICAtLWlvbi1jb2xvci1tZWRpdW06ICNmY2ZhZmY7XG4gIC0taW9uLWNvbG9yLW1lZGl1bS1yZ2I6IDI1MiwyNTAsMjU1O1xuICAtLWlvbi1jb2xvci1tZWRpdW0tY29udHJhc3Q6ICMwMDAwMDA7XG4gIC0taW9uLWNvbG9yLW1lZGl1bS1jb250cmFzdC1yZ2I6IDAsMCwwO1xuICAtLWlvbi1jb2xvci1tZWRpdW0tc2hhZGU6ICNkZWRjZTA7XG4gIC0taW9uLWNvbG9yLW1lZGl1bS10aW50OiAjZmNmYmZmO1xuXG4gIC0taW9uLWNvbG9yLWxpZ2h0OiAjRkZGRkZGO1xuICAtLWlvbi1jb2xvci1saWdodC1yZ2I6IDI1NSwyNTUsMjU1O1xuICAtLWlvbi1jb2xvci1saWdodC1jb250cmFzdDogIzFhMWExYTtcbiAgLS1pb24tY29sb3ItbGlnaHQtY29udHJhc3QtcmdiOiAwLDAsMDtcbiAgLS1pb24tY29sb3ItbGlnaHQtc2hhZGU6ICNlMGUwZTA7XG4gIC0taW9uLWNvbG9yLWxpZ2h0LXRpbnQ6ICNmZmZmZmY7XG5cbiAgLS1pb24tdGV4dC1jb2xvcjogIzFjMWMxYztcbiAgLS1pb24taXRlbS1iYWNrZ3JvdW5kOiB2YXIoLS1pb24tY29sb3ItbGlnaHQpO1xufVxuXG4vKlxuKiBEYXJrIENvbG9yc1xuKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4qL1xuXG5ib2R5LmRhcmsge1xuICAtLWlvbi1jb2xvci1wcmltYXJ5OiAjNzkyNGYwO1xuICAtLWlvbi1jb2xvci1wcmltYXJ5LXJnYjogMTIxLDM2LDI0MDtcbiAgLS1pb24tY29sb3ItcHJpbWFyeS1jb250cmFzdDogI2ZmZmZmZjtcbiAgLS1pb24tY29sb3ItcHJpbWFyeS1jb250cmFzdC1yZ2I6IDI1NSwyNTUsMjU1O1xuICAtLWlvbi1jb2xvci1wcmltYXJ5LXNoYWRlOiAjNmEyMGQzO1xuICAtLWlvbi1jb2xvci1wcmltYXJ5LXRpbnQ6ICM4NjNhZjI7XG5cbiAgLS1pb24tY29sb3Itc2Vjb25kYXJ5OiAjNjIyQkQ5O1xuICAtLWlvbi1jb2xvci1zZWNvbmRhcnktcmdiOiA5OCw0MywyMTc7XG4gIC0taW9uLWNvbG9yLXNlY29uZGFyeS1jb250cmFzdDogI2ZmZmZmZjtcbiAgLS1pb24tY29sb3Itc2Vjb25kYXJ5LWNvbnRyYXN0LXJnYjogMjU1LDI1NSwyNTU7XG4gIC0taW9uLWNvbG9yLXNlY29uZGFyeS1zaGFkZTogIzU2MjZiZjtcbiAgLS1pb24tY29sb3Itc2Vjb25kYXJ5LXRpbnQ6ICM3MjQwZGQ7XG5cbiAgLS1pb24tY29sb3ItdGVydGlhcnk6ICM3NTJCREY7XG4gIC0taW9uLWNvbG9yLXRlcnRpYXJ5LXJnYjogMTE3LDQzLDIyMztcbiAgLS1pb24tY29sb3ItdGVydGlhcnktY29udHJhc3Q6ICNmZmZmZmY7XG4gIC0taW9uLWNvbG9yLXRlcnRpYXJ5LWNvbnRyYXN0LXJnYjogMjU1LDI1NSwyNTU7XG4gIC0taW9uLWNvbG9yLXRlcnRpYXJ5LXNoYWRlOiAjNjcyNmM0O1xuICAtLWlvbi1jb2xvci10ZXJ0aWFyeS10aW50OiAjODM0MGUyO1xuXG4gIC0taW9uLWNvbG9yLXN1Y2Nlc3M6ICMzM2NjNzM7XG4gIC0taW9uLWNvbG9yLXN1Y2Nlc3MtcmdiOiA1MSwyMDQsMTE1O1xuICAtLWlvbi1jb2xvci1zdWNjZXNzLWNvbnRyYXN0OiAjZmZmZmZmO1xuICAtLWlvbi1jb2xvci1zdWNjZXNzLWNvbnRyYXN0LXJnYjogMCwwLDA7XG4gIC0taW9uLWNvbG9yLXN1Y2Nlc3Mtc2hhZGU6ICMyZGI0NjU7XG4gIC0taW9uLWNvbG9yLXN1Y2Nlc3MtdGludDogIzQ3ZDE4MTtcblxuICAtLWlvbi1jb2xvci13YXJuaW5nOiAjZjJlMjMxO1xuICAtLWlvbi1jb2xvci13YXJuaW5nLXJnYjogMjQyLDIyNiw0OTtcbiAgLS1pb24tY29sb3Itd2FybmluZy1jb250cmFzdDogI2ZmZjtcbiAgLS1pb24tY29sb3Itd2FybmluZy1jb250cmFzdC1yZ2I6IDI1NSwyNTUsMjU1O1xuICAtLWlvbi1jb2xvci13YXJuaW5nLXNoYWRlOiAjZDVjNzJiO1xuICAtLWlvbi1jb2xvci13YXJuaW5nLXRpbnQ6ICNmM2U1NDY7XG5cbiAgLS1pb24tY29sb3ItZGFuZ2VyOiAjZTUzZTNlO1xuICAtLWlvbi1jb2xvci1kYW5nZXItcmdiOiAyMjksNjIsNjI7XG4gIC0taW9uLWNvbG9yLWRhbmdlci1jb250cmFzdDogI2ZmZmZmZjtcbiAgLS1pb24tY29sb3ItZGFuZ2VyLWNvbnRyYXN0LXJnYjogMjU1LDI1NSwyNTU7XG4gIC0taW9uLWNvbG9yLWRhbmdlci1zaGFkZTogI2NhMzczNztcbiAgLS1pb24tY29sb3ItZGFuZ2VyLXRpbnQ6ICNlODUxNTE7XG5cbiAgLS1pb24tY29sb3ItbWVkaXVtOiAjMTIxMjEyO1xuICAtLWlvbi1jb2xvci1tZWRpdW0tcmdiOiAxOCwxOCwxODtcbiAgLS1pb24tY29sb3ItbWVkaXVtLWNvbnRyYXN0OiAjZmZmZmZmO1xuICAtLWlvbi1jb2xvci1tZWRpdW0tY29udHJhc3QtcmdiOiAyNTUsMjU1LDI1NTtcbiAgLS1pb24tY29sb3ItbWVkaXVtLXNoYWRlOiAjMTAxMDEwO1xuICAtLWlvbi1jb2xvci1tZWRpdW0tdGludDogIzJhMmEyYTtcblxuICAtLWlvbi1jb2xvci1saWdodDogIzFkMWQxZDtcbiAgLS1pb24tY29sb3ItbGlnaHQtcmdiOiAyOSwyOSwyOTtcbiAgLS1pb24tY29sb3ItbGlnaHQtY29udHJhc3Q6ICNmZmZmZmY7XG4gIC0taW9uLWNvbG9yLWxpZ2h0LWNvbnRyYXN0LXJnYjogMjU1LDI1NSwyNTU7XG4gIC0taW9uLWNvbG9yLWxpZ2h0LXNoYWRlOiAjMWExYTFhO1xuICAtLWlvbi1jb2xvci1saWdodC10aW50OiAjMzQzNDM0O1xuXG4gIC0taW9uLXRleHQtY29sb3I6ICNmZmY7XG4gIC0taW9uLWl0ZW0tYmFja2dyb3VuZDogdmFyKC0taW9uLWNvbG9yLWxpZ2h0KTtcbn1cbiJdfQ== */";

/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ __webpack_require__.O(0, ["vendor"], () => (__webpack_exec__(3422)));
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ }
]);
//# sourceMappingURL=main.js.map