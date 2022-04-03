"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["common"],{

/***/ 34198:
/*!*********************************************************************!*\
  !*** ./node_modules/@ionic/core/dist/esm/focus-visible-02bf7a99.js ***!
  \*********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "startFocusVisible": () => (/* binding */ startFocusVisible)
/* harmony export */ });
/*!
 * (C) Ionic http://ionicframework.com - MIT License
 */
const ION_FOCUSED = 'ion-focused';
const ION_FOCUSABLE = 'ion-focusable';
const FOCUS_KEYS = ['Tab', 'ArrowDown', 'Space', 'Escape', ' ', 'Shift', 'Enter', 'ArrowLeft', 'ArrowRight', 'ArrowUp', 'Home', 'End'];
const startFocusVisible = (rootEl) => {
  let currentFocus = [];
  let keyboardMode = true;
  const ref = (rootEl) ? rootEl.shadowRoot : document;
  const root = (rootEl) ? rootEl : document.body;
  const setFocus = (elements) => {
    currentFocus.forEach(el => el.classList.remove(ION_FOCUSED));
    elements.forEach(el => el.classList.add(ION_FOCUSED));
    currentFocus = elements;
  };
  const pointerDown = () => {
    keyboardMode = false;
    setFocus([]);
  };
  const onKeydown = (ev) => {
    keyboardMode = FOCUS_KEYS.includes(ev.key);
    if (!keyboardMode) {
      setFocus([]);
    }
  };
  const onFocusin = (ev) => {
    if (keyboardMode && ev.composedPath) {
      const toFocus = ev.composedPath().filter((el) => {
        if (el.classList) {
          return el.classList.contains(ION_FOCUSABLE);
        }
        return false;
      });
      setFocus(toFocus);
    }
  };
  const onFocusout = () => {
    if (ref.activeElement === root) {
      setFocus([]);
    }
  };
  ref.addEventListener('keydown', onKeydown);
  ref.addEventListener('focusin', onFocusin);
  ref.addEventListener('focusout', onFocusout);
  ref.addEventListener('touchstart', pointerDown);
  ref.addEventListener('mousedown', pointerDown);
  const destroy = () => {
    ref.removeEventListener('keydown', onKeydown);
    ref.removeEventListener('focusin', onFocusin);
    ref.removeEventListener('focusout', onFocusout);
    ref.removeEventListener('touchstart', pointerDown);
    ref.removeEventListener('mousedown', pointerDown);
  };
  return {
    destroy,
    setFocus
  };
};




/***/ }),

/***/ 77217:
/*!*************************************************************!*\
  !*** ./node_modules/@ionic/core/dist/esm/index-3f6412b6.js ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "a": () => (/* binding */ arrowDown),
/* harmony export */   "b": () => (/* binding */ chevronForwardOutline),
/* harmony export */   "c": () => (/* binding */ caretBackSharp),
/* harmony export */   "d": () => (/* binding */ chevronBack),
/* harmony export */   "e": () => (/* binding */ ellipsisHorizontal),
/* harmony export */   "f": () => (/* binding */ chevronForward),
/* harmony export */   "g": () => (/* binding */ chevronDown),
/* harmony export */   "h": () => (/* binding */ caretUpSharp),
/* harmony export */   "i": () => (/* binding */ caretDownSharp)
/* harmony export */ });
/*!
 * (C) Ionic http://ionicframework.com - MIT License
 */
/* Ionicons v6.0.0, ES Modules */
const arrowDown = "data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><title>Arrow Down</title><path stroke-linecap='round' stroke-linejoin='round' stroke-width='48' d='M112 268l144 144 144-144M256 392V100' class='ionicon-fill-none'/></svg>";
const caretBackSharp = "data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><title>Caret Back</title><path d='M368 64L144 256l224 192V64z'/></svg>";
const caretDownSharp = "data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><title>Caret Down</title><path d='M64 144l192 224 192-224H64z'/></svg>";
const caretUpSharp = "data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><title>Caret Up</title><path d='M448 368L256 144 64 368h384z'/></svg>";
const chevronBack = "data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><title>Chevron Back</title><path stroke-linecap='round' stroke-linejoin='round' stroke-width='48' d='M328 112L184 256l144 144' class='ionicon-fill-none'/></svg>";
const chevronDown = "data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><title>Chevron Down</title><path stroke-linecap='round' stroke-linejoin='round' stroke-width='48' d='M112 184l144 144 144-144' class='ionicon-fill-none'/></svg>";
const chevronForward = "data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><title>Chevron Forward</title><path stroke-linecap='round' stroke-linejoin='round' stroke-width='48' d='M184 112l144 144-144 144' class='ionicon-fill-none'/></svg>";
const chevronForwardOutline = "data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><title>Chevron Forward</title><path stroke-linecap='round' stroke-linejoin='round' stroke-width='48' d='M184 112l144 144-144 144' class='ionicon-fill-none'/></svg>";
const ellipsisHorizontal = "data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><title>Ellipsis Horizontal</title><circle cx='256' cy='256' r='48'/><circle cx='416' cy='256' r='48'/><circle cx='96' cy='256' r='48'/></svg>";




/***/ }),

/***/ 61068:
/*!*******************************************!*\
  !*** ./src/app/services/event.service.ts ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "EventService": () => (/* binding */ EventService)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 21838);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common/http */ 45331);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 789);



let EventService = class EventService {
    constructor(http) {
        this.http = http;
        this.headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_0__.HttpHeaders({
            accept: 'application/json',
            contentType: 'application/json',
        });
        this.options = { this: this.headers, withCredentials: true };
    }
    getEvents() {
        return this.http.get('/api/events', this.options);
    }
    createEvent(eventCredentials) {
        return this.http.post('/api/events', eventCredentials, this.options);
    }
    updateEvent(eventCredentials) {
        return this.http.put('/api/events/' + eventCredentials.id, eventCredentials, this.options);
    }
    syncPermissions(eventId, permissionCredentials) {
        return this.http.patch('/api/events/' + eventId, permissionCredentials, this.options);
    }
    deleteEvent(eventId) {
        return this.http.delete('/api/events/' + eventId, this.options);
    }
};
EventService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_0__.HttpClient }
];
EventService = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.Injectable)({
        providedIn: 'root'
    })
], EventService);



/***/ }),

/***/ 78834:
/*!**********************************************!*\
  !*** ./src/app/services/feedback.service.ts ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "FeedbackService": () => (/* binding */ FeedbackService)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 21838);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common/http */ 45331);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 789);



let FeedbackService = class FeedbackService {
    constructor(http) {
        this.http = http;
        this.headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_0__.HttpHeaders({
            accept: 'application/json',
            contentType: 'application/json',
        });
        this.options = { this: this.headers, withCredentials: true };
    }
    getFeedback() {
        return this.http.get('/api/feedback', this.options);
    }
    getSingleFeedback(feedbackId) {
        return this.http.get('/api/feedback/' + feedbackId, this.options);
    }
    giveFeedback(feedbackCredentials) {
        return this.http.post('/api/feedback', feedbackCredentials, this.options);
    }
    deleteFeedback(feedbackId) {
        return this.http.delete('/api/feedback/' + JSON.stringify(feedbackId), this.options);
    }
};
FeedbackService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_0__.HttpClient }
];
FeedbackService = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.Injectable)({
        providedIn: 'root'
    })
], FeedbackService);



/***/ }),

/***/ 1060:
/*!************************************************!*\
  !*** ./src/app/services/friendship.service.ts ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "FriendshipService": () => (/* binding */ FriendshipService)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 21838);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common/http */ 45331);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 789);



let FriendshipService = class FriendshipService {
    constructor(http) {
        this.http = http;
        this.headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_0__.HttpHeaders({
            accept: 'application/json',
            contentType: 'application/json',
        });
        this.options = { this: this.headers, withCredentials: true };
    }
    getFriendships() {
        return this.http.get('/api/friendships', this.options);
    }
    getFriendship(friendshipId) {
        return this.http.get('/api/friendships/' + friendshipId, this.options);
    }
    getAssociatedFriendship() {
        return this.http.get('/api/user/friendships', this.options);
    }
    createFriendship(friendshipCredentials) {
        return this.http.post('/api/user/friendships', friendshipCredentials, this.options);
    }
    acceptFriendship(friendshipId) {
        return this.http.put('/api/user/friendships/accept/' + friendshipId, this.options);
    }
    authorizeFriendship(friendshipId) {
        return this.http.put('/api/friendships/authorise/' + friendshipId, this.options);
    }
    declineFriendship(friendshipId) {
        return this.http.put('/api/friendships/decline/' + friendshipId, this.options);
    }
    deleteFriendship(friendshipId) {
        return this.http.delete('/api/user/friendships/' + friendshipId, this.options);
    }
};
FriendshipService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_0__.HttpClient }
];
FriendshipService = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.Injectable)({
        providedIn: 'root'
    })
], FriendshipService);



/***/ }),

/***/ 93271:
/*!************************************************!*\
  !*** ./src/app/services/preference.service.ts ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PreferencesService": () => (/* binding */ PreferencesService)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 21838);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common/http */ 45331);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 789);



let PreferencesService = class PreferencesService {
    constructor(http) {
        this.http = http;
        this.headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_0__.HttpHeaders({
            accept: 'application/json',
            contentType: 'application/json',
        });
        this.options = { this: this.headers, withCredentials: true };
    }
    getPreferences() {
        return this.http.get('/api/preferences', this.options);
    }
    getPreference(preferenceId) {
        return this.http.get('/api/preferences/' + preferenceId, this.options);
    }
    getAssociatedPreferences() {
        return this.http.get('/api/user/preferences', this.options);
    }
    createPreference(preferenceId) {
        return this.http.post('/api/user/preferences/' + preferenceId, null, this.options);
    }
    deletePreference(preferenceId) {
        return this.http.delete('/api/user/preferences/' + preferenceId, this.options);
    }
};
PreferencesService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_0__.HttpClient }
];
PreferencesService = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.Injectable)({
        providedIn: 'root'
    })
], PreferencesService);



/***/ }),

/***/ 81856:
/*!*********************************************!*\
  !*** ./src/app/services/project.service.ts ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ProjectService": () => (/* binding */ ProjectService)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 21838);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common/http */ 45331);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 789);



let ProjectService = class ProjectService {
    constructor(http) {
        this.http = http;
        this.headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_0__.HttpHeaders({
            accept: 'application/json',
            contentType: 'application/json',
        });
        this.options = { this: this.headers, withCredentials: true };
    }
    getProjects() {
        return this.http.get('/api/projects', this.options);
    }
    getProjectsDetailed() {
        return this.http.get('/api/projects_detailed', this.options);
    }
    getProject(projectId) {
        return this.http.get('/api/projects/' + projectId, this.options);
    }
    getAssociatedProject() {
        return this.http.get('/api/user/project', this.options);
    }
    createProject(projectCredentials) {
        const headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_0__.HttpHeaders({
            accept: 'application/json',
        });
        const options = { headers, withCredentials: true };
        const formData = new FormData();
        formData.append('topic', projectCredentials.topic);
        formData.append('title', projectCredentials.title);
        formData.append('image', projectCredentials.image);
        formData.append('description', projectCredentials.description);
        formData.append('cost', projectCredentials.cost);
        formData.append('min_grade', projectCredentials.min_grade);
        formData.append('max_grade', projectCredentials.max_grade);
        formData.append('min_participants', projectCredentials.min_participants);
        formData.append('max_participants', projectCredentials.max_participants);
        return this.http.post('/api/user/project', formData, options);
    }
    promoteAssistant(assistantCredentials) {
        return this.http.post('/api/user/project/assistant', assistantCredentials, this.options);
    }
    demoteAssistant(userId) {
        return this.http.delete('/api/user/project/assistant/' + userId, this.options);
    }
    updateProject(projectCredentials) {
        return this.http.put('/api/user/project', projectCredentials, this.options);
    }
    toggleAuthorizedOfProject(projectId) {
        return this.http.patch('/api/projects/' + projectId, null, this.options);
    }
    deleteProject(projectId) {
        return this.http.delete('/api/projects/' + projectId, this.options);
    }
};
ProjectService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_0__.HttpClient }
];
ProjectService = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.Injectable)({
        providedIn: 'root'
    })
], ProjectService);



/***/ }),

/***/ 27094:
/*!***********************************************************!*\
  !*** ./src/app/services/roles-and-permissions.service.ts ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "RolesAndPermissionsService": () => (/* binding */ RolesAndPermissionsService)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 21838);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common/http */ 45331);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 789);



let RolesAndPermissionsService = class RolesAndPermissionsService {
    constructor(http) {
        this.http = http;
        this.headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_0__.HttpHeaders({
            accept: 'application/json',
            contentType: 'application/json',
        });
        this.options = { this: this.headers, withCredentials: true };
    }
    getPermissions() {
        return this.http.get('/api/permissions', this.options);
    }
    getRoles() {
        return this.http.get('/api/roles', this.options);
    }
    createRole(roleCredentials) {
        return this.http.post('/api/roles', roleCredentials, this.options);
    }
    togglePermission(roleId, permissionCredentials) {
        return this.http.patch('/api/roles/' + roleId, permissionCredentials, this.options);
    }
    deleteRole(roleId) {
        return this.http.delete('/api/roles/' + JSON.stringify(roleId), this.options);
    }
};
RolesAndPermissionsService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_0__.HttpClient }
];
RolesAndPermissionsService = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.Injectable)({
        providedIn: 'root'
    })
], RolesAndPermissionsService);



/***/ }),

/***/ 39290:
/*!***********************************************!*\
  !*** ./src/app/services/timeframe.service.ts ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "TimeframeService": () => (/* binding */ TimeframeService)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 21838);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common/http */ 45331);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 789);



let TimeframeService = class TimeframeService {
    constructor(http) {
        this.http = http;
        this.headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_0__.HttpHeaders({
            accept: 'application/json',
            contentType: 'application/json',
        });
        this.options = { this: this.headers, withCredentials: true };
    }
    getTimeframes(projectId) {
        return this.http.get('projects/' + projectId + '/timeframes', this.options);
    }
    createTimeframe(timeframeCredentials) {
        return this.http.post('/api/user/project/timeframes', timeframeCredentials, this.options);
    }
    updateTimeframe(timeframeCredentials) {
        return this.http.put('/api/user/project/timeframes/' + timeframeCredentials.id, timeframeCredentials, this.options);
    }
    deleteTimeframe(timeframeId) {
        return this.http.delete('/api/user/project/timeframes/' + JSON.stringify(timeframeId), this.options);
    }
};
TimeframeService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_0__.HttpClient }
];
TimeframeService = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.Injectable)({
        providedIn: 'root'
    })
], TimeframeService);



/***/ }),

/***/ 88481:
/*!******************************************!*\
  !*** ./src/app/services/user.service.ts ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "UserService": () => (/* binding */ UserService)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 21838);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common/http */ 45331);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 789);



let UserService = class UserService {
    constructor(http) {
        this.http = http;
        this.headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_0__.HttpHeaders({
            accept: 'application/json',
            contentType: 'application/json',
        });
        this.options = { this: this.headers, withCredentials: true };
    }
    getUsers() {
        return this.http.get('/api/users', this.options);
    }
    getGradeLevel() {
        return this.http.get('/api/user/grade_level', this.options);
    }
    setGradeLevel(gradeLevel) {
        return this.http.patch('/api/user/grade_level/' + gradeLevel, this.options);
    }
    convertSelfToGuestAttendant() {
        return this.http.patch('/api/user/convert_self_to_guestAttendant', this.options);
    }
    getUnsortedUsers() {
        return this.http.get('/api/users_unsorted', this.options);
    }
    convertToGuestAttendant(id) {
        return this.http.patch('/api/users/convert_to_guestAttendant/' + id, null, this.options);
    }
    makeParticipant(id, projectId) {
        return this.http.patch('/api/users/' + id + '/make_participant/' + projectId, null, this.options);
    }
};
UserService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_0__.HttpClient }
];
UserService = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.Injectable)({
        providedIn: 'root'
    })
], UserService);



/***/ })

}]);
//# sourceMappingURL=common.js.map