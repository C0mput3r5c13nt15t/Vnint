"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_pages_actions_project_edit-project_edit-project_module_ts"],{

/***/ 54071:
/*!*************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/@angular-devkit/build-angular/node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./src/app/pages/actions/project/edit-project/edit-project.page.html ***!
  \*************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<ion-content>\n  <app-toolbar></app-toolbar>\n  <ion-grid>\n    <ion-row>\n      <ion-col>\n        <app-card-title-bar title=\"{{ 'ACTIONS.EDIT_PROJECT.title' | translate }}\"></app-card-title-bar>\n        <ion-card color=\"light\">\n          <ion-card-content>\n            <ion-grid class=\"inside-card-grid\">\n              <ion-row>\n                <ion-col>\n                  <form [formGroup]=\"editProjectForm\" (ngSubmit)=\"editProject()\">\n                    <ion-item color=\"light\">\n                      <ion-label>{{ 'ACTIONS.EDIT_PROJECT.INPUT.topic' | translate }}</ion-label>\n                      <ion-select formControlName=\"topic\" okText=\"{{ 'GENERAL.POPUPS.ok' | translate }}\" cancelText=\"{{ 'GENERAL.POPUPS.cancel' | translate }}\">\n                        <ion-select-option *ngFor=\"let topic of ('GENERAL.PROJECT_TOPICS' | translate) | keyvalue\" value=\"{{ topic.key }}\">{{ topic.value }}</ion-select-option>\n                      </ion-select>\n                    </ion-item>\n\n                    <ion-item color=\"light\">\n                      <ion-input formControlName=\"title\" type=\"text\" placeholder=\"{{ 'ACTIONS.EDIT_PROJECT.INPUT.title' | translate }}\"></ion-input>\n                    </ion-item>\n                    <app-form-error [errors]=\"errorControl.title.errors\"></app-form-error>\n\n                    <ion-item color=\"light\">\n                      <ion-textarea formControlName=\"description\" type=\"text\" rows=\"7\" placeholder=\"{{ 'ACTIONS.EDIT_PROJECT.INPUT.description' | translate }}\"></ion-textarea>\n                    </ion-item>\n                    <app-form-error [errors]=\"errorControl.description.errors\"></app-form-error>\n\n                    <ion-item color=\"light\">\n                      <ion-label position=\"floating\">{{ 'ACTIONS.EDIT_PROJECT.INPUT.cost' | translate }}</ion-label>\n                      <ion-input formControlName=\"cost\" type=\"text\"></ion-input>\n                    </ion-item>\n                    <app-form-error [errors]=\"errorControl.cost.errors\"></app-form-error>\n\n                    <ion-list>\n                      <ion-item lines=\"none\" color=\"light\">\n                        <ion-label>{{ 'ACTIONS.EDIT_PROJECT.INPUT.timeframe' | translate }}</ion-label>\n                      </ion-item>\n                      <div class=\"addTimeframeCards\">\n                        <ion-grid class=\"inside-card-grid\">\n                          <ion-row>\n                            <ng-container *ngFor=\"let timeframe of timeframes\">\n                              <ion-col sizeXl=\"6\" sizeLg=\"6\" sizeMd=\"12\" sizeSm=\"12\" sizeXs=\"12\">\n                                <ion-card color=\"light\">\n                                  <ion-card-content>\n                                    <ion-datetime minuteValues=\"0,5,10,15,20,25,30,35,40,45,50,55\" color=\"primary\" [hourCycle]=\"( 'GENERAL.hourCycle' | translate )\" [locale]=\"( 'GENERAL.locale' | translate )\" [(ngModel)]=\"timeframe.from\" [ngModelOptions]=\"{standalone: true}\" doneText=\"{{ 'GENERAL.POPUPS.done' | translate }}\" cancelText=\"{{ 'GENERAL.POPUPS.cancel' | translate }}\"></ion-datetime>\n\n                                    <ion-datetime minuteValues=\"0,5,10,15,20,25,30,35,40,45,50,55\" color=\"primary\" [hourCycle]=\"( 'GENERAL.hourCycle' | translate )\" [locale]=\"( 'GENERAL.locale' | translate )\" [(ngModel)]=\"timeframe.until\" [ngModelOptions]=\"{standalone: true}\" doneText=\"{{ 'GENERAL.POPUPS.done' | translate }}\" cancelText=\"{{ 'GENERAL.POPUPS.cancel' | translate }}\"></ion-datetime>\n                                  </ion-card-content>\n\n                                  <div class=\"ion-padding\">\n                                    <ion-button color=\"danger\" (click)=\"deleteTimeframe(timeframe)\" expand=\"block\" class=\"ion-no-margin\">delete</ion-button>\n                                  </div>\n                                </ion-card>\n                              </ion-col>\n                            </ng-container>\n                            <ion-col>\n                              <ion-card color=\"light\">\n                                <div>\n                                  <ion-fab horizontal=\"center\" vertical=\"center\" slot=\"fixed\">\n                                  <ion-fab-button color=\"light\" (click)=\"addTimeframe()\">\n                                    <ion-icon name=\"add\"></ion-icon>\n                                  </ion-fab-button>\n                                </ion-fab>\n                                </div>\n                              </ion-card>\n                            </ion-col>\n                          </ion-row>\n                        </ion-grid>\n                      </div>\n                      <br><hr>\n                    </ion-list>\n\n                    <ion-list>\n                      <ion-item lines=\"none\" color=\"light\">\n                        <ion-label>{{ 'ACTIONS.EDIT_PROJECT.INPUT.grade' | translate }}</ion-label>\n                      </ion-item>\n                      <ion-item color=\"light\">\n                        <ion-label>{{ 'ACTIONS.EDIT_PROJECT.INPUT.from' | translate }}</ion-label>\n                        <ion-input formControlName=\"min_grade\" type=\"text\"></ion-input>\n                      </ion-item>\n                      <app-form-error [errors]=\"errorControl.min_grade.errors\"></app-form-error>\n\n                      <ion-item color=\"light\">\n                        <ion-label>{{ 'ACTIONS.EDIT_PROJECT.INPUT.until' | translate }}</ion-label>\n                        <ion-input formControlName=\"max_grade\" type=\"text\"></ion-input>\n                      </ion-item>\n                      <app-form-error [errors]=\"errorControl.max_grade.errors\"></app-form-error>\n                    </ion-list>\n\n                    <ion-list>\n                      <ion-item lines=\"none\" color=\"light\">\n                        <ion-label>{{ 'ACTIONS.EDIT_PROJECT.INPUT.capacity' | translate }}</ion-label>\n                      </ion-item>\n                      <ion-item color=\"light\">\n                        <ion-label>{{ 'ACTIONS.EDIT_PROJECT.INPUT.from' | translate }}</ion-label><ion-input formControlName=\"min_participants\" type=\"number\"></ion-input>\n                      </ion-item>\n                      <app-form-error [errors]=\"errorControl.min_participants.errors\"></app-form-error>\n                      <ion-item color=\"light\">\n                        <ion-label>{{ 'ACTIONS.EDIT_PROJECT.INPUT.until' | translate }}</ion-label><ion-input formControlName=\"max_participants\" type=\"number\"></ion-input>\n                      </ion-item>\n                      <app-form-error [errors]=\"errorControl.max_participants.errors\"></app-form-error>\n                    </ion-list>\n                    <div class=\"ion-padding\">\n                      <ion-button color=\"primary\" [disabled]=\"editProjectForm.invalid\" expand=\"block\" type=\"submit\" class=\"ion-no-margin\">{{ 'ACTIONS.EDIT_PROJECT.INPUT.submitButton' | translate }}</ion-button>\n                    </div>\n                  </form>\n                </ion-col>\n              </ion-row>\n            </ion-grid>\n          </ion-card-content>\n        </ion-card>\n      </ion-col>\n    </ion-row>\n  </ion-grid>\n</ion-content>\n");

/***/ }),

/***/ 12541:
/*!*****************************************************************!*\
  !*** ./node_modules/date-fns/esm/_lib/addLeadingZeros/index.js ***!
  \*****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ addLeadingZeros)
/* harmony export */ });
function addLeadingZeros(number, targetLength) {
  var sign = number < 0 ? '-' : '';
  var output = Math.abs(number).toString();

  while (output.length < targetLength) {
    output = '0' + output;
  }

  return sign + output;
}

/***/ }),

/***/ 70854:
/*!**************************************************************!*\
  !*** ./node_modules/date-fns/esm/_lib/requiredArgs/index.js ***!
  \**************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ requiredArgs)
/* harmony export */ });
function requiredArgs(required, args) {
  if (args.length < required) {
    throw new TypeError(required + ' argument' + (required > 1 ? 's' : '') + ' required, but only ' + args.length + ' present');
  }
}

/***/ }),

/***/ 31204:
/*!***********************************************************!*\
  !*** ./node_modules/date-fns/esm/_lib/toInteger/index.js ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ toInteger)
/* harmony export */ });
function toInteger(dirtyNumber) {
  if (dirtyNumber === null || dirtyNumber === true || dirtyNumber === false) {
    return NaN;
  }

  var number = Number(dirtyNumber);

  if (isNaN(number)) {
    return number;
  }

  return number < 0 ? Math.ceil(number) : Math.floor(number);
}

/***/ }),

/***/ 64899:
/*!******************************************************!*\
  !*** ./node_modules/date-fns/esm/constants/index.js ***!
  \******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "daysInWeek": () => (/* binding */ daysInWeek),
/* harmony export */   "maxTime": () => (/* binding */ maxTime),
/* harmony export */   "millisecondsInMinute": () => (/* binding */ millisecondsInMinute),
/* harmony export */   "millisecondsInHour": () => (/* binding */ millisecondsInHour),
/* harmony export */   "millisecondsInSecond": () => (/* binding */ millisecondsInSecond),
/* harmony export */   "minTime": () => (/* binding */ minTime),
/* harmony export */   "minutesInHour": () => (/* binding */ minutesInHour),
/* harmony export */   "monthsInQuarter": () => (/* binding */ monthsInQuarter),
/* harmony export */   "monthsInYear": () => (/* binding */ monthsInYear),
/* harmony export */   "quartersInYear": () => (/* binding */ quartersInYear),
/* harmony export */   "secondsInHour": () => (/* binding */ secondsInHour),
/* harmony export */   "secondsInMinute": () => (/* binding */ secondsInMinute)
/* harmony export */ });
/**
 * Days in 1 week.
 *
 * @name daysInWeek
 * @constant
 * @type {number}
 * @default
 */
var daysInWeek = 7;
/**
 * Maximum allowed time.
 *
 * @name maxTime
 * @constant
 * @type {number}
 * @default
 */

var maxTime = Math.pow(10, 8) * 24 * 60 * 60 * 1000;
/**
 * Milliseconds in 1 minute
 *
 * @name millisecondsInMinute
 * @constant
 * @type {number}
 * @default
 */

var millisecondsInMinute = 60000;
/**
 * Milliseconds in 1 hour
 *
 * @name millisecondsInHour
 * @constant
 * @type {number}
 * @default
 */

var millisecondsInHour = 3600000;
/**
 * Milliseconds in 1 second
 *
 * @name millisecondsInSecond
 * @constant
 * @type {number}
 * @default
 */

var millisecondsInSecond = 1000;
/**
 * Minimum allowed time.
 *
 * @name minTime
 * @constant
 * @type {number}
 * @default
 */

var minTime = -maxTime;
/**
 * Minutes in 1 hour
 *
 * @name minutesInHour
 * @constant
 * @type {number}
 * @default
 */

var minutesInHour = 60;
/**
 * Months in 1 quarter
 *
 * @name monthsInQuarter
 * @constant
 * @type {number}
 * @default
 */

var monthsInQuarter = 3;
/**
 * Months in 1 year
 *
 * @name monthsInYear
 * @constant
 * @type {number}
 * @default
 */

var monthsInYear = 12;
/**
 * Quarters in 1 year
 *
 * @name quartersInYear
 * @constant
 * @type {number}
 * @default
 */

var quartersInYear = 4;
/**
 * Seconds in 1 hour
 *
 * @name secondsInHour
 * @constant
 * @type {number}
 * @default
 */

var secondsInHour = 3600;
/**
 * Seconds in 1 minute
 *
 * @name secondsInMinute
 * @constant
 * @type {number}
 * @default
 */

var secondsInMinute = 60;

/***/ }),

/***/ 53670:
/*!******************************************************!*\
  !*** ./node_modules/date-fns/esm/formatISO/index.js ***!
  \******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ formatISO)
/* harmony export */ });
/* harmony import */ var _toDate_index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../toDate/index.js */ 189);
/* harmony import */ var _lib_addLeadingZeros_index_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../_lib/addLeadingZeros/index.js */ 12541);
/* harmony import */ var _lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../_lib/requiredArgs/index.js */ 70854);



/**
 * @name formatISO
 * @category Common Helpers
 * @summary Format the date according to the ISO 8601 standard (https://support.sas.com/documentation/cdl/en/lrdict/64316/HTML/default/viewer.htm#a003169814.htm).
 *
 * @description
 * Return the formatted date string in ISO 8601 format. Options may be passed to control the parts and notations of the date.
 *
 * @param {Date|Number} date - the original date
 * @param {Object} [options] - an object with options.
 * @param {'extended'|'basic'} [options.format='extended'] - if 'basic', hide delimiters between date and time values.
 * @param {'complete'|'date'|'time'} [options.representation='complete'] - format date, time with local time zone, or both.
 * @returns {String} the formatted date string (in local time zone)
 * @throws {TypeError} 1 argument required
 * @throws {RangeError} `date` must not be Invalid Date
 * @throws {RangeError} `options.format` must be 'extended' or 'basic'
 * @throws {RangeError} `options.represenation` must be 'date', 'time' or 'complete'
 *
 * @example
 * // Represent 18 September 2019 in ISO 8601 format (local time zone is UTC):
 * const result = formatISO(new Date(2019, 8, 18, 19, 0, 52))
 * //=> '2019-09-18T19:00:52Z'
 *
 * @example
 * // Represent 18 September 2019 in ISO 8601, short format (local time zone is UTC):
 * const result = formatISO(new Date(2019, 8, 18, 19, 0, 52), { format: 'basic' })
 * //=> '20190918T190052'
 *
 * @example
 * // Represent 18 September 2019 in ISO 8601 format, date only:
 * const result = formatISO(new Date(2019, 8, 18, 19, 0, 52), { representation: 'date' })
 * //=> '2019-09-18'
 *
 * @example
 * // Represent 18 September 2019 in ISO 8601 format, time only (local time zone is UTC):
 * const result = formatISO(new Date(2019, 8, 18, 19, 0, 52), { representation: 'time' })
 * //=> '19:00:52Z'
 */

function formatISO(date, options) {
  (0,_lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__["default"])(1, arguments);
  var originalDate = (0,_toDate_index_js__WEBPACK_IMPORTED_MODULE_1__["default"])(date);

  if (isNaN(originalDate.getTime())) {
    throw new RangeError('Invalid time value');
  }

  var format = !(options !== null && options !== void 0 && options.format) ? 'extended' : String(options.format);
  var representation = !(options !== null && options !== void 0 && options.representation) ? 'complete' : String(options.representation);

  if (format !== 'extended' && format !== 'basic') {
    throw new RangeError("format must be 'extended' or 'basic'");
  }

  if (representation !== 'date' && representation !== 'time' && representation !== 'complete') {
    throw new RangeError("representation must be 'date', 'time', or 'complete'");
  }

  var result = '';
  var tzOffset = '';
  var dateDelimiter = format === 'extended' ? '-' : '';
  var timeDelimiter = format === 'extended' ? ':' : ''; // Representation is either 'date' or 'complete'

  if (representation !== 'time') {
    var day = (0,_lib_addLeadingZeros_index_js__WEBPACK_IMPORTED_MODULE_2__["default"])(originalDate.getDate(), 2);
    var month = (0,_lib_addLeadingZeros_index_js__WEBPACK_IMPORTED_MODULE_2__["default"])(originalDate.getMonth() + 1, 2);
    var year = (0,_lib_addLeadingZeros_index_js__WEBPACK_IMPORTED_MODULE_2__["default"])(originalDate.getFullYear(), 4); // yyyyMMdd or yyyy-MM-dd.

    result = "".concat(year).concat(dateDelimiter).concat(month).concat(dateDelimiter).concat(day);
  } // Representation is either 'time' or 'complete'


  if (representation !== 'date') {
    // Add the timezone.
    var offset = originalDate.getTimezoneOffset();

    if (offset !== 0) {
      var absoluteOffset = Math.abs(offset);
      var hourOffset = (0,_lib_addLeadingZeros_index_js__WEBPACK_IMPORTED_MODULE_2__["default"])(Math.floor(absoluteOffset / 60), 2);
      var minuteOffset = (0,_lib_addLeadingZeros_index_js__WEBPACK_IMPORTED_MODULE_2__["default"])(absoluteOffset % 60, 2); // If less than 0, the sign is +, because it is ahead of time.

      var sign = offset < 0 ? '+' : '-';
      tzOffset = "".concat(sign).concat(hourOffset, ":").concat(minuteOffset);
    } else {
      tzOffset = 'Z';
    }

    var hour = (0,_lib_addLeadingZeros_index_js__WEBPACK_IMPORTED_MODULE_2__["default"])(originalDate.getHours(), 2);
    var minute = (0,_lib_addLeadingZeros_index_js__WEBPACK_IMPORTED_MODULE_2__["default"])(originalDate.getMinutes(), 2);
    var second = (0,_lib_addLeadingZeros_index_js__WEBPACK_IMPORTED_MODULE_2__["default"])(originalDate.getSeconds(), 2); // If there's also date, separate it with time with 'T'

    var separator = result === '' ? '' : 'T'; // Creates a time string consisting of hour, minute, and second, separated by delimiters, if defined.

    var time = [hour, minute, second].join(timeDelimiter); // HHmmss or HH:mm:ss.

    result = "".concat(result).concat(separator).concat(time).concat(tzOffset);
  }

  return result;
}

/***/ }),

/***/ 49410:
/*!*****************************************************!*\
  !*** ./node_modules/date-fns/esm/parseISO/index.js ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ parseISO)
/* harmony export */ });
/* harmony import */ var _constants_index_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../constants/index.js */ 64899);
/* harmony import */ var _lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../_lib/requiredArgs/index.js */ 70854);
/* harmony import */ var _lib_toInteger_index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../_lib/toInteger/index.js */ 31204);



/**
 * @name parseISO
 * @category Common Helpers
 * @summary Parse ISO string
 *
 * @description
 * Parse the given string in ISO 8601 format and return an instance of Date.
 *
 * Function accepts complete ISO 8601 formats as well as partial implementations.
 * ISO 8601: http://en.wikipedia.org/wiki/ISO_8601
 *
 * If the argument isn't a string, the function cannot parse the string or
 * the values are invalid, it returns Invalid Date.
 *
 * ### v2.0.0 breaking changes:
 *
 * - [Changes that are common for the whole library](https://github.com/date-fns/date-fns/blob/master/docs/upgradeGuide.md#Common-Changes).
 *
 * - The previous `parse` implementation was renamed to `parseISO`.
 *
 *   ```javascript
 *   // Before v2.0.0
 *   parse('2016-01-01')
 *
 *   // v2.0.0 onward
 *   parseISO('2016-01-01')
 *   ```
 *
 * - `parseISO` now validates separate date and time values in ISO-8601 strings
 *   and returns `Invalid Date` if the date is invalid.
 *
 *   ```javascript
 *   parseISO('2018-13-32')
 *   //=> Invalid Date
 *   ```
 *
 * - `parseISO` now doesn't fall back to `new Date` constructor
 *   if it fails to parse a string argument. Instead, it returns `Invalid Date`.
 *
 * @param {String} argument - the value to convert
 * @param {Object} [options] - an object with options.
 * @param {0|1|2} [options.additionalDigits=2] - the additional number of digits in the extended year format
 * @returns {Date} the parsed date in the local time zone
 * @throws {TypeError} 1 argument required
 * @throws {RangeError} `options.additionalDigits` must be 0, 1 or 2
 *
 * @example
 * // Convert string '2014-02-11T11:30:30' to date:
 * const result = parseISO('2014-02-11T11:30:30')
 * //=> Tue Feb 11 2014 11:30:30
 *
 * @example
 * // Convert string '+02014101' to date,
 * // if the additional number of digits in the extended year format is 1:
 * const result = parseISO('+02014101', { additionalDigits: 1 })
 * //=> Fri Apr 11 2014 00:00:00
 */

function parseISO(argument, dirtyOptions) {
  (0,_lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__["default"])(1, arguments);
  var options = dirtyOptions || {};
  var additionalDigits = options.additionalDigits == null ? 2 : (0,_lib_toInteger_index_js__WEBPACK_IMPORTED_MODULE_1__["default"])(options.additionalDigits);

  if (additionalDigits !== 2 && additionalDigits !== 1 && additionalDigits !== 0) {
    throw new RangeError('additionalDigits must be 0, 1 or 2');
  }

  if (!(typeof argument === 'string' || Object.prototype.toString.call(argument) === '[object String]')) {
    return new Date(NaN);
  }

  var dateStrings = splitDateString(argument);
  var date;

  if (dateStrings.date) {
    var parseYearResult = parseYear(dateStrings.date, additionalDigits);
    date = parseDate(parseYearResult.restDateString, parseYearResult.year);
  }

  if (!date || isNaN(date.getTime())) {
    return new Date(NaN);
  }

  var timestamp = date.getTime();
  var time = 0;
  var offset;

  if (dateStrings.time) {
    time = parseTime(dateStrings.time);

    if (isNaN(time)) {
      return new Date(NaN);
    }
  }

  if (dateStrings.timezone) {
    offset = parseTimezone(dateStrings.timezone);

    if (isNaN(offset)) {
      return new Date(NaN);
    }
  } else {
    var dirtyDate = new Date(timestamp + time); // js parsed string assuming it's in UTC timezone
    // but we need it to be parsed in our timezone
    // so we use utc values to build date in our timezone.
    // Year values from 0 to 99 map to the years 1900 to 1999
    // so set year explicitly with setFullYear.

    var result = new Date(0);
    result.setFullYear(dirtyDate.getUTCFullYear(), dirtyDate.getUTCMonth(), dirtyDate.getUTCDate());
    result.setHours(dirtyDate.getUTCHours(), dirtyDate.getUTCMinutes(), dirtyDate.getUTCSeconds(), dirtyDate.getUTCMilliseconds());
    return result;
  }

  return new Date(timestamp + time + offset);
}
var patterns = {
  dateTimeDelimiter: /[T ]/,
  timeZoneDelimiter: /[Z ]/i,
  timezone: /([Z+-].*)$/
};
var dateRegex = /^-?(?:(\d{3})|(\d{2})(?:-?(\d{2}))?|W(\d{2})(?:-?(\d{1}))?|)$/;
var timeRegex = /^(\d{2}(?:[.,]\d*)?)(?::?(\d{2}(?:[.,]\d*)?))?(?::?(\d{2}(?:[.,]\d*)?))?$/;
var timezoneRegex = /^([+-])(\d{2})(?::?(\d{2}))?$/;

function splitDateString(dateString) {
  var dateStrings = {};
  var array = dateString.split(patterns.dateTimeDelimiter);
  var timeString; // The regex match should only return at maximum two array elements.
  // [date], [time], or [date, time].

  if (array.length > 2) {
    return dateStrings;
  }

  if (/:/.test(array[0])) {
    timeString = array[0];
  } else {
    dateStrings.date = array[0];
    timeString = array[1];

    if (patterns.timeZoneDelimiter.test(dateStrings.date)) {
      dateStrings.date = dateString.split(patterns.timeZoneDelimiter)[0];
      timeString = dateString.substr(dateStrings.date.length, dateString.length);
    }
  }

  if (timeString) {
    var token = patterns.timezone.exec(timeString);

    if (token) {
      dateStrings.time = timeString.replace(token[1], '');
      dateStrings.timezone = token[1];
    } else {
      dateStrings.time = timeString;
    }
  }

  return dateStrings;
}

function parseYear(dateString, additionalDigits) {
  var regex = new RegExp('^(?:(\\d{4}|[+-]\\d{' + (4 + additionalDigits) + '})|(\\d{2}|[+-]\\d{' + (2 + additionalDigits) + '})$)');
  var captures = dateString.match(regex); // Invalid ISO-formatted year

  if (!captures) return {
    year: NaN,
    restDateString: ''
  };
  var year = captures[1] ? parseInt(captures[1]) : null;
  var century = captures[2] ? parseInt(captures[2]) : null; // either year or century is null, not both

  return {
    year: century === null ? year : century * 100,
    restDateString: dateString.slice((captures[1] || captures[2]).length)
  };
}

function parseDate(dateString, year) {
  // Invalid ISO-formatted year
  if (year === null) return new Date(NaN);
  var captures = dateString.match(dateRegex); // Invalid ISO-formatted string

  if (!captures) return new Date(NaN);
  var isWeekDate = !!captures[4];
  var dayOfYear = parseDateUnit(captures[1]);
  var month = parseDateUnit(captures[2]) - 1;
  var day = parseDateUnit(captures[3]);
  var week = parseDateUnit(captures[4]);
  var dayOfWeek = parseDateUnit(captures[5]) - 1;

  if (isWeekDate) {
    if (!validateWeekDate(year, week, dayOfWeek)) {
      return new Date(NaN);
    }

    return dayOfISOWeekYear(year, week, dayOfWeek);
  } else {
    var date = new Date(0);

    if (!validateDate(year, month, day) || !validateDayOfYearDate(year, dayOfYear)) {
      return new Date(NaN);
    }

    date.setUTCFullYear(year, month, Math.max(dayOfYear, day));
    return date;
  }
}

function parseDateUnit(value) {
  return value ? parseInt(value) : 1;
}

function parseTime(timeString) {
  var captures = timeString.match(timeRegex);
  if (!captures) return NaN; // Invalid ISO-formatted time

  var hours = parseTimeUnit(captures[1]);
  var minutes = parseTimeUnit(captures[2]);
  var seconds = parseTimeUnit(captures[3]);

  if (!validateTime(hours, minutes, seconds)) {
    return NaN;
  }

  return hours * _constants_index_js__WEBPACK_IMPORTED_MODULE_2__.millisecondsInHour + minutes * _constants_index_js__WEBPACK_IMPORTED_MODULE_2__.millisecondsInMinute + seconds * 1000;
}

function parseTimeUnit(value) {
  return value && parseFloat(value.replace(',', '.')) || 0;
}

function parseTimezone(timezoneString) {
  if (timezoneString === 'Z') return 0;
  var captures = timezoneString.match(timezoneRegex);
  if (!captures) return 0;
  var sign = captures[1] === '+' ? -1 : 1;
  var hours = parseInt(captures[2]);
  var minutes = captures[3] && parseInt(captures[3]) || 0;

  if (!validateTimezone(hours, minutes)) {
    return NaN;
  }

  return sign * (hours * _constants_index_js__WEBPACK_IMPORTED_MODULE_2__.millisecondsInHour + minutes * _constants_index_js__WEBPACK_IMPORTED_MODULE_2__.millisecondsInMinute);
}

function dayOfISOWeekYear(isoWeekYear, week, day) {
  var date = new Date(0);
  date.setUTCFullYear(isoWeekYear, 0, 4);
  var fourthOfJanuaryDay = date.getUTCDay() || 7;
  var diff = (week - 1) * 7 + day + 1 - fourthOfJanuaryDay;
  date.setUTCDate(date.getUTCDate() + diff);
  return date;
} // Validation functions
// February is null to handle the leap year (using ||)


var daysInMonths = [31, null, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];

function isLeapYearIndex(year) {
  return year % 400 === 0 || year % 4 === 0 && year % 100 !== 0;
}

function validateDate(year, month, date) {
  return month >= 0 && month <= 11 && date >= 1 && date <= (daysInMonths[month] || (isLeapYearIndex(year) ? 29 : 28));
}

function validateDayOfYearDate(year, dayOfYear) {
  return dayOfYear >= 1 && dayOfYear <= (isLeapYearIndex(year) ? 366 : 365);
}

function validateWeekDate(_year, week, day) {
  return week >= 1 && week <= 53 && day >= 0 && day <= 6;
}

function validateTime(hours, minutes, seconds) {
  if (hours === 24) {
    return minutes === 0 && seconds === 0;
  }

  return seconds >= 0 && seconds < 60 && minutes >= 0 && minutes < 60 && hours >= 0 && hours < 25;
}

function validateTimezone(_hours, minutes) {
  return minutes >= 0 && minutes <= 59;
}

/***/ }),

/***/ 189:
/*!***************************************************!*\
  !*** ./node_modules/date-fns/esm/toDate/index.js ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ toDate)
/* harmony export */ });
/* harmony import */ var _lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../_lib/requiredArgs/index.js */ 70854);

/**
 * @name toDate
 * @category Common Helpers
 * @summary Convert the given argument to an instance of Date.
 *
 * @description
 * Convert the given argument to an instance of Date.
 *
 * If the argument is an instance of Date, the function returns its clone.
 *
 * If the argument is a number, it is treated as a timestamp.
 *
 * If the argument is none of the above, the function returns Invalid Date.
 *
 * **Note**: *all* Date arguments passed to any *date-fns* function is processed by `toDate`.
 *
 * @param {Date|Number} argument - the value to convert
 * @returns {Date} the parsed date in the local time zone
 * @throws {TypeError} 1 argument required
 *
 * @example
 * // Clone the date:
 * const result = toDate(new Date(2014, 1, 11, 11, 30, 30))
 * //=> Tue Feb 11 2014 11:30:30
 *
 * @example
 * // Convert the timestamp to date:
 * const result = toDate(1392098430000)
 * //=> Tue Feb 11 2014 11:30:30
 */

function toDate(argument) {
  (0,_lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__["default"])(1, arguments);
  var argStr = Object.prototype.toString.call(argument); // Clone the date

  if (argument instanceof Date || typeof argument === 'object' && argStr === '[object Date]') {
    // Prevent the date to lose the milliseconds when passed to new Date() in IE10
    return new Date(argument.getTime());
  } else if (typeof argument === 'number' || argStr === '[object Number]') {
    return new Date(argument);
  } else {
    if ((typeof argument === 'string' || argStr === '[object String]') && typeof console !== 'undefined') {
      // eslint-disable-next-line no-console
      console.warn("Starting with v2.0.0-beta.1 date-fns doesn't accept strings as date arguments. Please use `parseISO` to parse strings. See: https://git.io/fjule"); // eslint-disable-next-line no-console

      console.warn(new Error().stack);
    }

    return new Date(NaN);
  }
}

/***/ }),

/***/ 20536:
/*!***********************************************************************************!*\
  !*** ./src/app/pages/actions/project/edit-project/edit-project-routing.module.ts ***!
  \***********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "EditProjectPageRoutingModule": () => (/* binding */ EditProjectPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 21838);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 789);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 9538);
/* harmony import */ var _edit_project_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./edit-project.page */ 22193);




const routes = [
    {
        path: '',
        component: _edit_project_page__WEBPACK_IMPORTED_MODULE_0__.EditProjectPage
    }
];
let EditProjectPageRoutingModule = class EditProjectPageRoutingModule {
};
EditProjectPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], EditProjectPageRoutingModule);



/***/ }),

/***/ 26285:
/*!***************************************************************************!*\
  !*** ./src/app/pages/actions/project/edit-project/edit-project.module.ts ***!
  \***************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "EditProjectPageModule": () => (/* binding */ EditProjectPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! tslib */ 21838);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 789);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ 2006);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/forms */ 43459);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/common/http */ 45331);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ionic/angular */ 30585);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @ngx-translate/core */ 52784);
/* harmony import */ var _edit_project_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./edit-project-routing.module */ 20536);
/* harmony import */ var _components_components_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../components/components.module */ 96453);
/* harmony import */ var _edit_project_page__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./edit-project.page */ 22193);
/* harmony import */ var src_app_app_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/app.module */ 92014);











let EditProjectPageModule = class EditProjectPageModule {
};
EditProjectPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_5__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_6__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_7__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_8__.IonicModule,
            _edit_project_routing_module__WEBPACK_IMPORTED_MODULE_0__.EditProjectPageRoutingModule,
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
        declarations: [_edit_project_page__WEBPACK_IMPORTED_MODULE_2__.EditProjectPage]
    })
], EditProjectPageModule);



/***/ }),

/***/ 22193:
/*!*************************************************************************!*\
  !*** ./src/app/pages/actions/project/edit-project/edit-project.page.ts ***!
  \*************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "EditProjectPage": () => (/* binding */ EditProjectPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! tslib */ 21838);
/* harmony import */ var _home_vagrant_projects_Vnint_node_modules_angular_devkit_build_angular_node_modules_ngtools_webpack_src_loaders_direct_resource_js_edit_project_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !./node_modules/@angular-devkit/build-angular/node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./edit-project.page.html */ 54071);
/* harmony import */ var _edit_project_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./edit-project.page.scss */ 92958);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/core */ 789);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ 43459);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/router */ 9538);
/* harmony import */ var src_app_services_project_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/project.service */ 81856);
/* harmony import */ var src_app_services_timeframe_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/timeframe.service */ 39290);
/* harmony import */ var src_app_services_error_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/services/error.service */ 55729);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @ngx-translate/core */ 52784);
/* harmony import */ var date_fns__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! date-fns */ 49410);
/* harmony import */ var date_fns__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! date-fns */ 53670);
/* harmony import */ var _services_alert_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../services/alert.service */ 92677);



/* eslint-disable @typescript-eslint/naming-convention */









let EditProjectPage = class EditProjectPage {
    constructor(projectService, timeframeService, formBuilder, router, errorService, translate, alertService) {
        this.projectService = projectService;
        this.timeframeService = timeframeService;
        this.formBuilder = formBuilder;
        this.router = router;
        this.errorService = errorService;
        this.translate = translate;
        this.alertService = alertService;
        this.isProcessed = false;
        this.timeframes = [];
        this.deleteTimeframes = [];
    }
    ngOnInit() {
        this.editProjectForm = this.formBuilder.group({
            topic: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_6__.Validators.required],
            title: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_6__.Validators.required],
            image: null,
            description: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_6__.Validators.required],
            cost: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_6__.Validators.required],
            min_grade: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_6__.Validators.required],
            max_grade: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_6__.Validators.required],
            min_participants: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_6__.Validators.required],
            max_participants: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_6__.Validators.required],
        });
    }
    ionViewWillEnter() {
        this.isProcessed = false;
        this.getProject();
    }
    get errorControl() {
        return this.editProjectForm.controls;
    }
    getProject() {
        this.projectService.getAssociatedProject().subscribe({
            error: error => {
                this.errorService.errorOccurred.emit(error);
            },
            next: response => {
                const resp = response;
                for (const timeframe of resp.project.timeframes) {
                    const fromCopy = new Date((0,date_fns__WEBPACK_IMPORTED_MODULE_7__["default"])(timeframe.from).getTime());
                    fromCopy.setHours(fromCopy.getHours() - 2);
                    timeframe.from = (0,date_fns__WEBPACK_IMPORTED_MODULE_8__["default"])(fromCopy);
                    const untilCopy = new Date((0,date_fns__WEBPACK_IMPORTED_MODULE_7__["default"])(timeframe.until).getTime());
                    untilCopy.setHours(untilCopy.getHours() - 2);
                    timeframe.until = (0,date_fns__WEBPACK_IMPORTED_MODULE_8__["default"])(untilCopy);
                }
                this.editProjectForm.patchValue(resp.project);
                if (resp.project.timeframes) {
                    this.timeframes = resp.project.timeframes;
                }
            },
        });
    }
    editProject() {
        if (!this.isProcessed && this.editProjectForm.valid) {
            this.isProcessed = true;
            this.updateProject();
            this.timeframes.forEach(timeframe => {
                if (!timeframe.id) {
                    this.timeframeService.createTimeframe(timeframe).subscribe({
                        error: error => {
                            if (error.error.message == 'The given data was invalid.') {
                                for (const errorType in error.error.errors) {
                                    for (const errorMessage in error.error.errors[errorType]) {
                                        this.alertService.alert("danger", this.translate.instant('ACTIONS.EDIT_PROJECT.title'), error.error.errors[errorType][errorMessage], 'close');
                                    }
                                }
                            }
                            else if (error.error.message == 'missingPermissions') {
                                this.alertService.alert("danger", this.translate.instant('GENERAL.ERRORS.missingPermissions'), '', 'lock-closed');
                            }
                            else {
                                this.errorService.errorOccurred.emit(error);
                            }
                        }
                    });
                }
                else {
                    this.timeframeService.updateTimeframe(timeframe).subscribe({
                        error: error => {
                            if (error.error.message == 'The given data was invalid.') {
                                for (const errorType in error.error.errors) {
                                    for (const errorMessage in error.error.errors[errorType]) {
                                        this.alertService.alert("danger", this.translate.instant('ACTIONS.EDIT_PROJECT.title'), error.error.errors[errorType][errorMessage], 'close');
                                    }
                                }
                            }
                            else if (error.error.message == 'missingPermissions') {
                                this.alertService.alert("danger", this.translate.instant('GENERAL.ERRORS.missingPermissions'), '', 'lock-closed');
                            }
                            else {
                                this.errorService.errorOccurred.emit(error);
                            }
                        }
                    });
                }
            });
            this.deleteTimeframes.forEach(timeframe => {
                this.timeframeService.deleteTimeframe(timeframe.id).subscribe({
                    error: error => {
                        if (error.error.message == 'The given data was invalid.') {
                            for (const errorType in error.error.errors) {
                                for (const errorMessage in error.error.errors[errorType]) {
                                    this.alertService.alert("danger", this.translate.instant('ACTIONS.EDIT_PROJECT.title'), error.error.errors[errorType][errorMessage], 'close');
                                }
                            }
                        }
                        else if (error.error.message == 'missingPermissions') {
                            this.alertService.alert("danger", this.translate.instant('GENERAL.ERRORS.missingPermissions'), '', 'lock-closed');
                        }
                        else {
                            this.errorService.errorOccurred.emit(error);
                        }
                    }
                });
            });
        }
    }
    updateProject() {
        this.projectService.updateProject(this.editProjectForm.value).subscribe({
            error: error => {
                if (error.error.message == 'The given data was invalid.') {
                    for (const errorType in error.error.errors) {
                        const errors = [];
                        for (const errorMessage in error.error.errors[errorType]) {
                            errors.push({ [error.error.errors[errorType][errorMessage]]: true });
                        }
                        this.editProjectForm.controls[errorType].setErrors(errors);
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
                this.alertService.alert("success", this.translate.instant('ACTIONS.EDIT_PROJECT.title'), resp.message, "checkmark");
            },
            complete: () => {
                this.editProjectForm.reset();
                this.isProcessed = false;
                this.router.navigate(['/manage-project']);
            },
        });
    }
    addTimeframe() {
        this.timeframes.push({ from: null, until: null });
    }
    deleteTimeframe(timeframe) {
        if (timeframe.id) {
            this.deleteTimeframes.push(timeframe);
            this.timeframes = this.timeframes.filter(loopTimeframe => { return loopTimeframe.id != timeframe.id; });
        }
        else {
            this.timeframes = this.timeframes.filter(loopTimeframe => { return loopTimeframe != timeframe; });
        }
    }
};
EditProjectPage.ctorParameters = () => [
    { type: src_app_services_project_service__WEBPACK_IMPORTED_MODULE_2__.ProjectService },
    { type: src_app_services_timeframe_service__WEBPACK_IMPORTED_MODULE_3__.TimeframeService },
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormBuilder },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_9__.Router },
    { type: src_app_services_error_service__WEBPACK_IMPORTED_MODULE_4__.ErrorService },
    { type: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_10__.TranslateService },
    { type: _services_alert_service__WEBPACK_IMPORTED_MODULE_5__.AlertService }
];
EditProjectPage = (0,tslib__WEBPACK_IMPORTED_MODULE_11__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_12__.Component)({
        selector: 'app-edit-project',
        template: _home_vagrant_projects_Vnint_node_modules_angular_devkit_build_angular_node_modules_ngtools_webpack_src_loaders_direct_resource_js_edit_project_page_html__WEBPACK_IMPORTED_MODULE_0__["default"],
        styles: [_edit_project_page_scss__WEBPACK_IMPORTED_MODULE_1__]
    })
], EditProjectPage);



/***/ }),

/***/ 92958:
/*!***************************************************************************!*\
  !*** ./src/app/pages/actions/project/edit-project/edit-project.page.scss ***!
  \***************************************************************************/
/***/ ((module) => {

module.exports = ".addTimeframeCards ion-card {\n  height: 100%;\n  min-height: 100px;\n}\n\nhr {\n  background-color: #dedede;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImVkaXQtcHJvamVjdC5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQ0U7RUFDRSxZQUFBO0VBQ0EsaUJBQUE7QUFBSjs7QUFJQTtFQUNFLHlCQUFBO0FBREYiLCJmaWxlIjoiZWRpdC1wcm9qZWN0LnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5hZGRUaW1lZnJhbWVDYXJkcyB7XG4gIGlvbi1jYXJkIHtcbiAgICBoZWlnaHQ6IDEwMCU7XG4gICAgbWluLWhlaWdodDogMTAwcHg7XG4gIH1cbn1cblxuaHIge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZGVkZWRlO1xufVxuIl19 */";

/***/ })

}]);
//# sourceMappingURL=src_app_pages_actions_project_edit-project_edit-project_module_ts.js.map