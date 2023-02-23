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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _modules_localStorage__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modules/localStorage */ \"./src/js/modules/localStorage.js\");\n/* harmony import */ var _modules_ui__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modules/ui */ \"./src/js/modules/ui.js\");\n\n\n\nconst keypadKeys = document.querySelectorAll('[data-key]');\n\nconst ui = new _modules_ui__WEBPACK_IMPORTED_MODULE_1__[\"default\"]();\n\nkeypadKeys.forEach((key) => {\n  key.addEventListener('click', () => {\n    ui.useKeypad(key.getAttribute('data-key'));\n  });\n});\n\nconst ls = new _modules_localStorage__WEBPACK_IMPORTED_MODULE_0__[\"default\"]();\ndocument.onload = ls.loadThemeStorage();\n\n\n//# sourceURL=webpack://calculator/./src/js/index.js?");

/***/ }),

/***/ "./src/js/modules/calculator.js":
/*!**************************************!*\
  !*** ./src/js/modules/calculator.js ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ Calculator)\n/* harmony export */ });\nclass Calculator {\n  constructor() {\n    this.currentValue = 0;\n  }\n\n  getCurrentValue() {\n    return String(this.currentValue);\n  }\n\n  setCurrentValue(number) {\n    this.currentValue = Number(number);\n  }\n\n  reset() {\n    this.currentValue = 0;\n  }\n\n  delete() {\n    const tempValue = String(this.currentValue);\n    if (tempValue.length === 1) {\n      this.currentValue = 0;\n    } else {\n      const newValue = tempValue.substring(0, tempValue.length - 1);\n      this.currentValue = newValue;\n    }\n  }\n\n  add(number) {\n    const firstOperand = Number(this.currentValue);\n    const secondOperand = Number(number);\n    this.currentValue = Number((firstOperand + secondOperand).toFixed(2));\n  }\n\n  subtract(number) {\n    const firstOperand = Number(this.currentValue);\n    const secondOperand = Number(number);\n    this.currentValue = Number((firstOperand - secondOperand).toFixed(2));\n  }\n\n  multiply(number) {\n    const firstOperand = Number(this.currentValue);\n    const secondOperand = Number(number);\n    this.currentValue = Number((firstOperand * secondOperand).toFixed(2));\n  }\n\n  divide(number) {\n    if (number !== '0') {\n      const firstOperand = Number(this.currentValue);\n      const secondOperand = Number(number);\n      this.currentValue = Number((firstOperand / secondOperand).toFixed(2));\n    }\n  }\n}\n\n\n//# sourceURL=webpack://calculator/./src/js/modules/calculator.js?");

/***/ }),

/***/ "./src/js/modules/localStorage.js":
/*!****************************************!*\
  !*** ./src/js/modules/localStorage.js ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ LocalStorage)\n/* harmony export */ });\nclass LocalStorage {\n  constructor() {\n    this.colorThemes = document.querySelectorAll('[name=\"theme\"]');\n  }\n\n  loadThemeStorage() {\n    LocalStorage.assignListener(this.colorThemes);\n    LocalStorage.setTheme(this.colorThemes);\n  }\n\n  static storeTheme(theme) {\n    localStorage.setItem('theme', theme);\n  }\n\n  static assignListener(colorThemes) {\n    colorThemes.forEach((themeOption) => {\n      themeOption.addEventListener('click', () => {\n        LocalStorage.storeTheme(themeOption.id);\n      });\n    });\n  }\n\n  static setTheme(colorThemes) {\n    const activeTheme = localStorage.getItem('theme');\n    colorThemes.forEach((themeOption) => {\n      if (themeOption.id === activeTheme) {\n        // eslint-disable-next-line no-param-reassign\n        themeOption.checked = true;\n      }\n    });\n    // fallback\n    document.documentElement.className = activeTheme;\n  }\n}\n\n\n//# sourceURL=webpack://calculator/./src/js/modules/localStorage.js?");

/***/ }),

/***/ "./src/js/modules/ui.js":
/*!******************************!*\
  !*** ./src/js/modules/ui.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ UI)\n/* harmony export */ });\n/* harmony import */ var _calculator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./calculator */ \"./src/js/modules/calculator.js\");\n\n\nconst calculator = new _calculator__WEBPACK_IMPORTED_MODULE_0__[\"default\"]();\n\nclass UI {\n  static screen = document.getElementById('calculator-number');\n\n  static numberKeys = {\n    one: 1,\n    two: 2,\n    three: 3,\n    four: 4,\n    five: 5,\n    six: 6,\n    seven: 7,\n    eight: 8,\n    nine: 9,\n    zero: 0,\n    decimal: '.',\n  };\n\n  static functionKeys = {\n    add: '+',\n    subtract: '-',\n    multiply: '×',\n    divide: '/',\n  };\n\n  // eslint-disable-next-line class-methods-use-this\n  useKeypad(key) {\n    if (key in UI.numberKeys) {\n      UI.useNumbers(key);\n    } else if (key in UI.functionKeys) {\n      UI.useFunction(key);\n    } else if (key === 'delete') {\n      UI.useDelete();\n    } else if (key === 'reset') {\n      UI.useReset();\n    } else if (key === 'enter') {\n      UI.useEnter();\n    }\n  }\n\n  static useNumbers(key) {\n    const numLastIndex = UI.screen.textContent.length - 1;\n    // If key is decimal\n    if (key === 'decimal') {\n      // Execute if decimal is not last index or already within string\n      if (\n        UI.screen.textContent.indexOf('.') !== numLastIndex &&\n        UI.screen.textContent.indexOf('.') === -1\n      ) {\n        UI.screen.textContent = `${calculator.getCurrentValue()}.`;\n      }\n      // If number has decimal before\n    } else if (UI.screen.textContent.substring(numLastIndex) === '.') {\n      calculator.currentValue = `${calculator.getCurrentValue()}.${\n        UI.numberKeys[key]\n      }`;\n      UI.screen.textContent = calculator.getCurrentValue();\n      // If current value is not zero\n    } else if (calculator.currentValue !== 0) {\n      calculator.currentValue = String(\n        calculator.getCurrentValue() + UI.numberKeys[key]\n      );\n      UI.screen.textContent = calculator.getCurrentValue();\n      // Replace current value if it is zero\n    } else {\n      calculator.currentValue = UI.numberKeys[key];\n      UI.screen.textContent = calculator.getCurrentValue();\n    }\n  }\n\n  static useFunction(key) {\n    const functions = ['+', '-', '×', '/'];\n    for (let i = 0; i < functions.length; i += 1) {\n      if (UI.screen.textContent.indexOf(functions[i]) !== -1) {\n        const operands = calculator.currentValue.split(functions[i]);\n        let num;\n        [calculator.currentValue, num] = operands;\n        if (functions[i] === '+') {\n          calculator.add(num);\n        } else if (functions[i] === '-') {\n          calculator.subtract(num);\n        } else if (functions[i] === '×') {\n          calculator.multiply(num);\n        } else if (functions[i] === '/') {\n          calculator.divide(num);\n        }\n        UI.screen.textContent = `${calculator.getCurrentValue()}${\n          UI.functionKeys[key]\n        }`;\n        calculator.currentValue = `${calculator.getCurrentValue()}${\n          UI.functionKeys[key]\n        }`;\n        return;\n      }\n    }\n    calculator.currentValue += UI.functionKeys[key];\n    UI.screen.textContent = calculator.getCurrentValue();\n  }\n\n  static useEnter() {\n    const functions = ['+', '-', '×', '/'];\n    for (let i = 0; i < functions.length; i += 1) {\n      if (UI.screen.textContent.indexOf(functions[i]) !== -1) {\n        const operands = calculator.currentValue.split(functions[i]);\n        let num;\n        [calculator.currentValue, num] = operands;\n        if (functions[i] === '+') {\n          calculator.add(num);\n        } else if (functions[i] === '-') {\n          calculator.subtract(num);\n        } else if (functions[i] === '×') {\n          calculator.multiply(num);\n        } else if (functions[i] === '/') {\n          calculator.divide(num);\n        }\n        UI.screen.textContent = `${calculator.getCurrentValue()}`;\n        return;\n      }\n    }\n  }\n\n  static useDelete() {\n    calculator.delete();\n    UI.screen.textContent = calculator.getCurrentValue();\n  }\n\n  static useReset() {\n    calculator.reset();\n    UI.screen.textContent = calculator.getCurrentValue();\n  }\n}\n\n\n//# sourceURL=webpack://calculator/./src/js/modules/ui.js?");

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