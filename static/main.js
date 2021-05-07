/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./assets/js/main.js":
/*!***************************!*\
  !*** ./assets/js/main.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _partials_sidebar_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./partials/sidebar.js */ \"./assets/js/partials/sidebar.js\");\n/* harmony import */ var _partials_sidebar_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_partials_sidebar_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _partials_userConfirmation_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./partials/userConfirmation.js */ \"./assets/js/partials/userConfirmation.js\");\n/* harmony import */ var _partials_userConfirmation_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_partials_userConfirmation_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _partials_loadStorageInfo_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./partials/loadStorageInfo.js */ \"./assets/js/partials/loadStorageInfo.js\");\n/* harmony import */ var _partials_loadStorageInfo_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_partials_loadStorageInfo_js__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _partials_controlHabits_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./partials/controlHabits.js */ \"./assets/js/partials/controlHabits.js\");\n/* harmony import */ var _partials_controlHabits_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_partials_controlHabits_js__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _partials_controlComment_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./partials/controlComment.js */ \"./assets/js/partials/controlComment.js\");\n/* harmony import */ var _partials_controlComment_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_partials_controlComment_js__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _css_style_css__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../css/style.css */ \"./assets/css/style.css\");\n\n\n\n\n\n\n\n//# sourceURL=webpack://groo/./assets/js/main.js?");

/***/ }),

/***/ "./assets/js/partials/controlComment.js":
/*!**********************************************!*\
  !*** ./assets/js/partials/controlComment.js ***!
  \**********************************************/
/***/ (() => {

eval("var commentContainer = document.querySelector(\".comment__container\");\nvar userComment = document.querySelector(\".user__comment\");\nvar editButton = commentContainer.querySelector(\"button\");\nvar COMMENT = \"comment\";\n\nfunction saveComment(value) {\n  localStorage.setItem(COMMENT, value);\n}\n\nfunction loadComment() {\n  var storageComment = localStorage.getItem(COMMENT);\n\n  if (storageComment) {\n    userComment.value = storageComment;\n    saveComment(storageComment);\n  }\n}\n\nfunction handleClickEdit() {\n  userComment.toggleAttribute(\"disabled\");\n\n  if (userComment.getAttribute(\"disabled\") !== null) {\n    saveComment(userComment.value);\n  }\n}\n\nfunction init() {\n  loadComment();\n  editButton.addEventListener(\"click\", handleClickEdit);\n}\n\nif (commentContainer) {\n  init();\n}\n\n//# sourceURL=webpack://groo/./assets/js/partials/controlComment.js?");

/***/ }),

/***/ "./assets/js/partials/controlHabits.js":
/*!*********************************************!*\
  !*** ./assets/js/partials/controlHabits.js ***!
  \*********************************************/
/***/ (() => {

eval("var habitsContainer = document.querySelector(\".detail__habits__container\");\nvar addHabitForm = document.querySelector(\".add__habit\");\nvar habitList = document.querySelector(\".detail__habit__list\");\nvar inputHabit = addHabitForm.querySelector(\"input\");\nvar LIST = [];\nvar HABIT_LIST = \"habits\";\n\nfunction deleteHabit(event) {\n  var delLi = event.target.parentNode;\n  var newList = LIST.filter(function (item) {\n    return item.id !== parseInt(delLi.id);\n  });\n  LIST = newList;\n  delLi.remove();\n  saveHabits();\n}\n\nfunction saveHabits() {\n  localStorage.setItem(HABIT_LIST, JSON.stringify(LIST));\n}\n\nfunction paintHabit(habit) {\n  var span = document.createElement(\"span\");\n  var li = document.createElement(\"li\");\n  var btn = document.createElement(\"button\");\n  var habitId = LIST.length;\n  btn.innerText = \"x\";\n  btn.addEventListener(\"click\", deleteHabit);\n  span.innerHTML = habit;\n  li.appendChild(span);\n  li.appendChild(btn);\n  li.id = habitId;\n  habitList.appendChild(li);\n  var habitobj = {\n    habit: habit,\n    id: habitId\n  };\n  LIST.push(habitobj);\n  saveHabits();\n}\n\nfunction handleAddHabitSubmit(event) {\n  event.preventDefault();\n  paintHabit(inputHabit.value);\n  inputHabit.value = \"\";\n}\n\nfunction loadHabits() {\n  var habits = JSON.parse(localStorage.getItem(HABIT_LIST));\n\n  if (habits) {\n    habits.forEach(function (element) {\n      paintHabit(element.habit);\n    });\n  }\n}\n\nfunction init() {\n  loadHabits();\n  addHabitForm.addEventListener(\"submit\", handleAddHabitSubmit);\n}\n\nif (habitsContainer) {\n  init();\n}\n\n//# sourceURL=webpack://groo/./assets/js/partials/controlHabits.js?");

/***/ }),

/***/ "./assets/js/partials/loadStorageInfo.js":
/*!***********************************************!*\
  !*** ./assets/js/partials/loadStorageInfo.js ***!
  \***********************************************/
/***/ (() => {

eval("var homeContainer = document.querySelector(\".userConfirmation\");\nvar loadHabitList = document.querySelector(\".load__habit__list\");\nvar treeComment = document.querySelector(\".tree__comment\");\nvar HABIT_LIST = \"habits\";\nvar COMMENT = \"comment\";\n\nfunction handleClickhabits(event) {\n  var target = event.target;\n  target.classList.toggle(\"check\");\n}\n\nfunction paintHomeHabits(habit) {\n  var input = document.createElement(\"input\");\n  input.type = \"button\";\n  input.value = habit;\n  input.classList.add(\"habit__btn\");\n  input.addEventListener(\"click\", handleClickhabits);\n  loadHabitList.appendChild(input);\n}\n\nfunction loadHomeHabits() {\n  var habits = localStorage.getItem(HABIT_LIST);\n\n  if (habits) {\n    var parseHabits = JSON.parse(habits);\n    parseHabits.forEach(function (element) {\n      paintHomeHabits(element.habit);\n    });\n  }\n}\n\nfunction loadHomeComment() {\n  var comment = localStorage.getItem(COMMENT);\n\n  if (comment) {\n    treeComment.innerHTML = comment;\n  }\n}\n\nfunction init() {\n  loadHomeHabits();\n  loadHomeComment();\n}\n\nif (homeContainer) {\n  init();\n}\n\n//# sourceURL=webpack://groo/./assets/js/partials/loadStorageInfo.js?");

/***/ }),

/***/ "./assets/js/partials/sidebar.js":
/*!***************************************!*\
  !*** ./assets/js/partials/sidebar.js ***!
  \***************************************/
/***/ (() => {

eval("var menubar = document.querySelector(\".header__menubar\");\nvar sidebarContainer = document.querySelector(\".sidebar__container\");\n\nfunction handleMenubarClick() {\n  sidebarContainer.classList.toggle(\"none\");\n}\n\nfunction init() {\n  menubar.addEventListener(\"click\", handleMenubarClick);\n}\n\nif (sidebarContainer) {\n  init();\n}\n\n//# sourceURL=webpack://groo/./assets/js/partials/sidebar.js?");

/***/ }),

/***/ "./assets/js/partials/userConfirmation.js":
/*!************************************************!*\
  !*** ./assets/js/partials/userConfirmation.js ***!
  \************************************************/
/***/ (() => {

eval("var firstVisitor = document.querySelector(\".firstvisit\");\nvar userConfirmation = document.querySelector(\".userConfirmation\");\nvar username = firstVisitor.querySelector(\"input\");\nvar USER = \"user\";\nvar NONE = \"none\";\n\nfunction saveName(name) {\n  localStorage.setItem(USER, name);\n}\n\nfunction handleSaveUser(event) {\n  event.preventDefault();\n  var name = username.value;\n  paintPage(name);\n  saveName(name);\n}\n\nfunction paintPage(name) {\n  firstVisitor.classList.add(NONE);\n  userConfirmation.classList.remove(NONE);\n}\n\nfunction createUser() {\n  firstVisitor.classList.remove(NONE);\n  firstVisitor.addEventListener(\"submit\", handleSaveUser);\n}\n\nfunction loadName() {\n  var currentUser = localStorage.getItem(USER);\n\n  if (!currentUser) {\n    createUser();\n    return;\n  }\n\n  paintPage(currentUser);\n}\n\nfunction init() {\n  loadName();\n}\n\nif (firstVisitor) {\n  init();\n}\n\n//# sourceURL=webpack://groo/./assets/js/partials/userConfirmation.js?");

/***/ }),

/***/ "./assets/css/style.css":
/*!******************************!*\
  !*** ./assets/css/style.css ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n// extracted by mini-css-extract-plugin\n\n\n//# sourceURL=webpack://groo/./assets/css/style.css?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./assets/js/main.js");
/******/ 	
/******/ })()
;