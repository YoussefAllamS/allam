 
(()=>{"use strict";function t(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function e(t){return e="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},e(t)}function n(t){var n=function(t,n){if("object"!=e(t)||!t)return t;var r=t[Symbol.toPrimitive];if(void 0!==r){var o=r.call(t,"string");if("object"!=e(o))return o;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(t)}(t);return"symbol"==e(n)?n:String(n)}function r(t,e){for(var r=0;r<e.length;r++){var o=e[r];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(t,n(o.key),o)}}function o(t,e,n){return e&&r(t.prototype,e),n&&r(t,n),Object.defineProperty(t,"prototype",{writable:!1}),t}function i(t){return i=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(t){return t.__proto__||Object.getPrototypeOf(t)},i(t)}function u(t,e){return u=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(t,e){return t.__proto__=e,t},u(t,e)}var a=function(){function e(){t(this,e)}return o(e,[{key:"onReady",value:function(){}},{key:"registerEvents",value:function(){}},{key:"initiate",value:function(t){if(t&&!t.includes(salla.config.get("page.slug")))return app.log("The Class For (".concat(t.join(","),") Skipped."));this.onReady(),this.registerEvents(),app.log("The Class For (".concat((null==t?void 0:t.join(","))||"*",") Loaded🎉"))}}]),e}();function c(t,n,r){return n=i(n),function(t,n){if(n&&("object"===e(n)||"function"==typeof n))return n;if(void 0!==n)throw new TypeError("Derived constructors may only return object or undefined");return function(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}(t)}(t,l()?Reflect.construct(n,r||[],i(t).constructor):n.apply(t,r))}function l(){try{var t=!Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){})))}catch(t){}return(l=function(){return!!t})()}a.initiateWhenReady=function(){var t,e=this,n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:null;"ready"===(null===(t=window.app)||void 0===t?void 0:t.status)?(new this).initiate(n):document.addEventListener("theme::ready",(function(){return(new e).initiate(n)}))},function(e){function n(){return t(this,n),c(this,n,arguments)}return function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),Object.defineProperty(t,"prototype",{writable:!1}),e&&u(t,e)}(n,e),o(n,[{key:"onReady",value:function(){app.on("change","#testimonials-filter",(function(t){return window.location.href=salla.helpers.addParamToUrl("sort",t.target.value)}));var t=new URLSearchParams(window.location.search);t.has("sort")&&(app.element("#testimonials-filter").value=t.get("sort"))}}]),n}(a).initiateWhenReady(["store.testimonials"])})();
 
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

/***/ "./src/assets/js/base-page.js":
/*!************************************!*\
  !*** ./src/assets/js/base-page.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("{__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nObject(function webpackMissingModule() { var e = new Error(\"Cannot find module '@babel/runtime/helpers/classCallCheck'\"); e.code = 'MODULE_NOT_FOUND'; throw e; }());\nObject(function webpackMissingModule() { var e = new Error(\"Cannot find module '@babel/runtime/helpers/createClass'\"); e.code = 'MODULE_NOT_FOUND'; throw e; }());\n\n\nvar BasePage = /*#__PURE__*/function () {\n  function BasePage() {\n    Object(function webpackMissingModule() { var e = new Error(\"Cannot find module '@babel/runtime/helpers/classCallCheck'\"); e.code = 'MODULE_NOT_FOUND'; throw e; }())(this, BasePage);\n  }\n  return Object(function webpackMissingModule() { var e = new Error(\"Cannot find module '@babel/runtime/helpers/createClass'\"); e.code = 'MODULE_NOT_FOUND'; throw e; }())(BasePage, [{\n    key: \"onReady\",\n    value: function onReady() {\n      //\n    }\n  }, {\n    key: \"registerEvents\",\n    value: function registerEvents() {\n      //\n    }\n\n    /**\n     * To avoid loading unwanted classes, unless it's wanted page\n     * @param {null|string[]} allowedPages\n     * @return {*}\n     */\n  }, {\n    key: \"initiate\",\n    value: function initiate(allowedPages) {\n      if (allowedPages && !allowedPages.includes(salla.config.get('page.slug'))) {\n        return app.log(\"The Class For (\".concat(allowedPages.join(','), \") Skipped.\"));\n      }\n      this.onReady();\n      this.registerEvents();\n      app.log(\"The Class For (\".concat((allowedPages === null || allowedPages === void 0 ? void 0 : allowedPages.join(',')) || '*', \") Loaded\\uD83C\\uDF89\"));\n    }\n  }]);\n}();\n/**\n * Because we merged multi classes into one file, there is no need to initiate all of them\n */\nBasePage.initiateWhenReady = function () {\n  var _window$app,\n    _this = this;\n  var allowedPages = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : null;\n  if (((_window$app = window.app) === null || _window$app === void 0 ? void 0 : _window$app.status) === 'ready') {\n    new this().initiate(allowedPages);\n  } else {\n    document.addEventListener('theme::ready', function () {\n      return new _this().initiate(allowedPages);\n    });\n  }\n};\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (BasePage);\n\n//# sourceURL=webpack://theme-raed/./src/assets/js/base-page.js?\n}");

/***/ }),

/***/ "./src/assets/js/testimonials.js":
/*!***************************************!*\
  !*** ./src/assets/js/testimonials.js ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("{__webpack_require__.r(__webpack_exports__);\nObject(function webpackMissingModule() { var e = new Error(\"Cannot find module '@babel/runtime/helpers/classCallCheck'\"); e.code = 'MODULE_NOT_FOUND'; throw e; }());\nObject(function webpackMissingModule() { var e = new Error(\"Cannot find module '@babel/runtime/helpers/createClass'\"); e.code = 'MODULE_NOT_FOUND'; throw e; }());\nObject(function webpackMissingModule() { var e = new Error(\"Cannot find module '@babel/runtime/helpers/possibleConstructorReturn'\"); e.code = 'MODULE_NOT_FOUND'; throw e; }());\nObject(function webpackMissingModule() { var e = new Error(\"Cannot find module '@babel/runtime/helpers/getPrototypeOf'\"); e.code = 'MODULE_NOT_FOUND'; throw e; }());\nObject(function webpackMissingModule() { var e = new Error(\"Cannot find module '@babel/runtime/helpers/inherits'\"); e.code = 'MODULE_NOT_FOUND'; throw e; }());\n/* harmony import */ var _base_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./base-page */ \"./src/assets/js/base-page.js\");\n\n\n\n\n\nfunction _callSuper(t, o, e) { return o = Object(function webpackMissingModule() { var e = new Error(\"Cannot find module '@babel/runtime/helpers/getPrototypeOf'\"); e.code = 'MODULE_NOT_FOUND'; throw e; }())(o), Object(function webpackMissingModule() { var e = new Error(\"Cannot find module '@babel/runtime/helpers/possibleConstructorReturn'\"); e.code = 'MODULE_NOT_FOUND'; throw e; }())(t, _isNativeReflectConstruct() ? Reflect.construct(o, e || [], Object(function webpackMissingModule() { var e = new Error(\"Cannot find module '@babel/runtime/helpers/getPrototypeOf'\"); e.code = 'MODULE_NOT_FOUND'; throw e; }())(t).constructor) : o.apply(t, e)); }\nfunction _isNativeReflectConstruct() { try { var t = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); } catch (t) {} return (_isNativeReflectConstruct = function _isNativeReflectConstruct() { return !!t; })(); }\n\nvar Testimonials = /*#__PURE__*/function (_BasePage) {\n  function Testimonials() {\n    Object(function webpackMissingModule() { var e = new Error(\"Cannot find module '@babel/runtime/helpers/classCallCheck'\"); e.code = 'MODULE_NOT_FOUND'; throw e; }())(this, Testimonials);\n    return _callSuper(this, Testimonials, arguments);\n  }\n  Object(function webpackMissingModule() { var e = new Error(\"Cannot find module '@babel/runtime/helpers/inherits'\"); e.code = 'MODULE_NOT_FOUND'; throw e; }())(Testimonials, _BasePage);\n  return Object(function webpackMissingModule() { var e = new Error(\"Cannot find module '@babel/runtime/helpers/createClass'\"); e.code = 'MODULE_NOT_FOUND'; throw e; }())(Testimonials, [{\n    key: \"onReady\",\n    value: function onReady() {\n      // Sort Testimonials\n      app.on('change', '#testimonials-filter', function (event) {\n        return window.location.href = salla.helpers.addParamToUrl('sort', event.target.value);\n      });\n      var urlParams = new URLSearchParams(window.location.search);\n      if (urlParams.has('sort')) {\n        app.element('#testimonials-filter').value = urlParams.get('sort');\n      }\n    }\n  }]);\n}(_base_page__WEBPACK_IMPORTED_MODULE_1__[\"default\"]);\nTestimonials.initiateWhenReady(['store.testimonials']);\n\n//# sourceURL=webpack://theme-raed/./src/assets/js/testimonials.js?\n}");

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
/******/ 	var __webpack_exports__ = __webpack_require__("./src/assets/js/testimonials.js");
/******/ 	
/******/ })()
;
 
