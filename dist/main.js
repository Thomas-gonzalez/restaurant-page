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

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _load_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./load-page */ \"./src/load-page.js\");\n/* harmony import */ var _util_empty_element__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./util/empty-element */ \"./src/util/empty-element.js\");\n/* harmony import */ var _util_create_element__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./util/create-element */ \"./src/util/create-element.js\");\n\n\n\n\nconst dom = {};\n\n(0,_load_page__WEBPACK_IMPORTED_MODULE_0__[\"default\"])();\ncacheDom();\naddEvents(); \nloadHomeTab();\n\n\nfunction cacheDom() {\n    dom.main = document.getElementById('main');\n    dom.homeBtn = document.getElementById('home-btn');\n    dom.menuBtn = document.getElementById('menu-btn');\n    dom.contactBtn = document.getElementById('contact-btn');\n}\n\nfunction addEvents() {\n    dom.homeBtn.addEventListener('click', () => {\n        loadHomeTab();\n    })\n    dom.menuBtn.addEventListener('click', () => {\n        loadMenuTab();\n    })\n    dom.contactBtn.addEventListener('click', () => {\n        loadContactTab();\n    })\n}\n\nfunction loadHomeTab() {\n    (0,_util_empty_element__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(dom.main);\n    const $dummy = (0,_util_create_element__WEBPACK_IMPORTED_MODULE_2__.div)('Home Tab Text!');\n    dom.main.appendChild($dummy);\n}\n\nfunction loadMenuTab() {\n    (0,_util_empty_element__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(dom.main);\n    const $dummy = (0,_util_create_element__WEBPACK_IMPORTED_MODULE_2__.div)('Menu Tab Text!');\n    dom.main.appendChild($dummy);\n}\n\nfunction loadContactTab() {\n    (0,_util_empty_element__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(dom.main);\n    const $dummy = (0,_util_create_element__WEBPACK_IMPORTED_MODULE_2__.div)('contact tab text!');\n    dom.main.appendChild($dummy);\n}\n\n\n//# sourceURL=webpack://restaurant-page/./src/index.js?");

/***/ }),

/***/ "./src/load-page.js":
/*!**************************!*\
  !*** ./src/load-page.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ loadPage)\n/* harmony export */ });\n/* harmony import */ var _util_create_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./util/create-element */ \"./src/util/create-element.js\");\n\n\nfunction loadPage() {\n    const $content = document.getElementById('content');\n\n    $content.appendChild(header());\n    $content.appendChild(main());\n    $content.appendChild(footer());\n\n    function header() {\n        const $header = (0,_util_create_element__WEBPACK_IMPORTED_MODULE_0__.div)();\n        $header.id = 'header';\n\n        $header.appendChild(home());\n        $header.appendChild(menu());\n        $header.appendChild(contact());\n\n        function home() {\n            const $home = (0,_util_create_element__WEBPACK_IMPORTED_MODULE_0__.button)('Home');\n            $home.id = 'home-btn';\n            return $home;\n        }\n        function menu() {\n            const $menu = (0,_util_create_element__WEBPACK_IMPORTED_MODULE_0__.button)('Menu');\n            $menu.id = 'menu-btn';\n            return $menu;\n        }\n        function contact() {\n            const $contact = (0,_util_create_element__WEBPACK_IMPORTED_MODULE_0__.button)('Contact');\n            $contact.id = 'contact-btn';\n            return $contact;\n        }\n\n        return $header;\n    }\n    \n    function main() {\n        const $main = (0,_util_create_element__WEBPACK_IMPORTED_MODULE_0__.div)('Main text!');\n        $main.id = 'main';\n        return $main;\n    }\n\n    function footer() {\n        const $footer = (0,_util_create_element__WEBPACK_IMPORTED_MODULE_0__.div)('Footer text!');\n        $footer.id = 'footer';\n        return $footer;\n    }\n}\n\n//# sourceURL=webpack://restaurant-page/./src/load-page.js?");

/***/ }),

/***/ "./src/util/create-element.js":
/*!************************************!*\
  !*** ./src/util/create-element.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"button\": () => (/* binding */ button),\n/* harmony export */   \"div\": () => (/* binding */ div)\n/* harmony export */ });\nfunction div(text=null) {\n    const $div = document.createElement('div');\n    if (text) $div.textContent = text;\n    return $div;\n}\n\nfunction button(text='button text') {\n    const $button = document.createElement('button');\n    $button.textContent = text;\n    return $button;\n}\n\n//# sourceURL=webpack://restaurant-page/./src/util/create-element.js?");

/***/ }),

/***/ "./src/util/empty-element.js":
/*!***********************************!*\
  !*** ./src/util/empty-element.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ emptyElement)\n/* harmony export */ });\nfunction emptyElement(element) {\n    if (!element) return;\n    console.log(`type of element: ${typeof element}`);\n    element.innerHTML = '';\n}\n\n//# sourceURL=webpack://restaurant-page/./src/util/empty-element.js?");

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
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;