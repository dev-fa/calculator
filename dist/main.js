/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/js/index.js":
/*!*************************!*\
  !*** ./src/js/index.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _modules_localStorage__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modules/localStorage */ \"./src/js/modules/localStorage.js\");\n/* harmony import */ var _modules_calculator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modules/calculator */ \"./src/js/modules/calculator.js\");\n/* eslint-disable no-console */\n\n\n\nconst ls = new _modules_localStorage__WEBPACK_IMPORTED_MODULE_0__[\"default\"]();\ndocument.onload = ls.loadThemeStorage();\n\nconst calculator = new _modules_calculator__WEBPACK_IMPORTED_MODULE_1__[\"default\"]();\nconsole.log(calculator.getCurrentValue());\n// calculator.setCurrentValue(1);\n// calculator.setCurrentValue(2);\n// console.log(calculator.getCurrentValue());\n// calculator.add(7);\n// console.log(calculator.getCurrentValue());\n// calculator.subtract(5);\n// console.log(calculator.getCurrentValue());\n// calculator.multiply(3);\n// console.log(calculator.getCurrentValue());\n// calculator.delete();\n// console.log(calculator.getCurrentValue());\n// calculator.clear();\n// console.log(calculator.getCurrentValue());\n\n\n//# sourceURL=webpack://calculator/./src/js/index.js?");

/***/ }),

/***/ "./src/js/modules/calculator.js":
/*!**************************************!*\
  !*** ./src/js/modules/calculator.js ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ Calculator)\n/* harmony export */ });\nclass Calculator {\n  constructor() {\n    this.currentValue = 0;\n  }\n\n  getCurrentValue() {\n    return this.currentValue;\n  }\n\n  setCurrentValue(number) {\n    const tempValue = String(this.currentValue);\n    const tempNumber = String(number);\n    const newValue = Number(tempValue + tempNumber);\n    this.currentValue = newValue;\n  }\n\n  clear() {\n    this.currentValue = 0;\n  }\n\n  delete() {\n    const tempValue = String(this.currentValue);\n    if (tempValue.length === 1) {\n      this.currentValue = 0;\n    } else {\n      const newValue = tempValue.substring(0, tempValue.length - 1);\n      this.currentValue = Number(newValue);\n    }\n  }\n\n  add(number) {\n    this.currentValue += number;\n  }\n\n  subtract(number) {\n    this.currentValue -= number;\n  }\n\n  multiply(number) {\n    this.currentValue *= number;\n  }\n\n  divide(number) {\n    if (number === 0) {\n      throw new Error('Cannot divide by zero');\n    }\n\n    this.currentValue /= number;\n  }\n}\n\n\n//# sourceURL=webpack://calculator/./src/js/modules/calculator.js?");

/***/ }),

/***/ "./src/js/modules/localStorage.js":
/*!****************************************!*\
  !*** ./src/js/modules/localStorage.js ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ LocalStorage)\n/* harmony export */ });\nclass LocalStorage {\n  constructor() {\n    this.colorThemes = document.querySelectorAll('[name=\"theme\"]');\n  }\n\n  loadThemeStorage() {\n    LocalStorage.assignListener(this.colorThemes);\n    LocalStorage.setTheme(this.colorThemes);\n  }\n\n  static storeTheme(theme) {\n    localStorage.setItem('theme', theme);\n  }\n\n  static assignListener(colorThemes) {\n    colorThemes.forEach((themeOption) => {\n      themeOption.addEventListener('click', () => {\n        LocalStorage.storeTheme(themeOption.id);\n      });\n    });\n  }\n\n  static setTheme(colorThemes) {\n    const activeTheme = localStorage.getItem('theme');\n    colorThemes.forEach((themeOption) => {\n      if (themeOption.id === activeTheme) {\n        // eslint-disable-next-line no-param-reassign\n        themeOption.checked = true;\n      }\n    });\n    // fallback\n    document.documentElement.className = activeTheme;\n  }\n}\n\n\n//# sourceURL=webpack://calculator/./src/js/modules/localStorage.js?");

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
/******/ 	var __webpack_exports__ = __webpack_require__("./src/js/index.js");
/******/ 	
/******/ })()
;