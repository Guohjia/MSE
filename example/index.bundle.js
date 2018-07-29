/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./node_modules/_d@1.0.0@d/index.js":
/*!******************************************!*\
  !*** ./node_modules/_d@1.0.0@d/index.js ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nvar assign        = __webpack_require__(/*! es5-ext/object/assign */ \"./node_modules/_es5-ext@0.10.45@es5-ext/object/assign/index.js\")\n  , normalizeOpts = __webpack_require__(/*! es5-ext/object/normalize-options */ \"./node_modules/_es5-ext@0.10.45@es5-ext/object/normalize-options.js\")\n  , isCallable    = __webpack_require__(/*! es5-ext/object/is-callable */ \"./node_modules/_es5-ext@0.10.45@es5-ext/object/is-callable.js\")\n  , contains      = __webpack_require__(/*! es5-ext/string/#/contains */ \"./node_modules/_es5-ext@0.10.45@es5-ext/string/#/contains/index.js\")\n\n  , d;\n\nd = module.exports = function (dscr, value/*, options*/) {\n\tvar c, e, w, options, desc;\n\tif ((arguments.length < 2) || (typeof dscr !== 'string')) {\n\t\toptions = value;\n\t\tvalue = dscr;\n\t\tdscr = null;\n\t} else {\n\t\toptions = arguments[2];\n\t}\n\tif (dscr == null) {\n\t\tc = w = true;\n\t\te = false;\n\t} else {\n\t\tc = contains.call(dscr, 'c');\n\t\te = contains.call(dscr, 'e');\n\t\tw = contains.call(dscr, 'w');\n\t}\n\n\tdesc = { value: value, configurable: c, enumerable: e, writable: w };\n\treturn !options ? desc : assign(normalizeOpts(options), desc);\n};\n\nd.gs = function (dscr, get, set/*, options*/) {\n\tvar c, e, options, desc;\n\tif (typeof dscr !== 'string') {\n\t\toptions = set;\n\t\tset = get;\n\t\tget = dscr;\n\t\tdscr = null;\n\t} else {\n\t\toptions = arguments[3];\n\t}\n\tif (get == null) {\n\t\tget = undefined;\n\t} else if (!isCallable(get)) {\n\t\toptions = get;\n\t\tget = set = undefined;\n\t} else if (set == null) {\n\t\tset = undefined;\n\t} else if (!isCallable(set)) {\n\t\toptions = set;\n\t\tset = undefined;\n\t}\n\tif (dscr == null) {\n\t\tc = true;\n\t\te = false;\n\t} else {\n\t\tc = contains.call(dscr, 'c');\n\t\te = contains.call(dscr, 'e');\n\t}\n\n\tdesc = { get: get, set: set, configurable: c, enumerable: e };\n\treturn !options ? desc : assign(normalizeOpts(options), desc);\n};\n\n\n//# sourceURL=webpack:///./node_modules/_d@1.0.0@d/index.js?");

/***/ }),

/***/ "./node_modules/_es5-ext@0.10.45@es5-ext/function/noop.js":
/*!****************************************************************!*\
  !*** ./node_modules/_es5-ext@0.10.45@es5-ext/function/noop.js ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\n// eslint-disable-next-line no-empty-function\nmodule.exports = function () {};\n\n\n//# sourceURL=webpack:///./node_modules/_es5-ext@0.10.45@es5-ext/function/noop.js?");

/***/ }),

/***/ "./node_modules/_es5-ext@0.10.45@es5-ext/object/assign/index.js":
/*!**********************************************************************!*\
  !*** ./node_modules/_es5-ext@0.10.45@es5-ext/object/assign/index.js ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nmodule.exports = __webpack_require__(/*! ./is-implemented */ \"./node_modules/_es5-ext@0.10.45@es5-ext/object/assign/is-implemented.js\")()\n\t? Object.assign\n\t: __webpack_require__(/*! ./shim */ \"./node_modules/_es5-ext@0.10.45@es5-ext/object/assign/shim.js\");\n\n\n//# sourceURL=webpack:///./node_modules/_es5-ext@0.10.45@es5-ext/object/assign/index.js?");

/***/ }),

/***/ "./node_modules/_es5-ext@0.10.45@es5-ext/object/assign/is-implemented.js":
/*!*******************************************************************************!*\
  !*** ./node_modules/_es5-ext@0.10.45@es5-ext/object/assign/is-implemented.js ***!
  \*******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nmodule.exports = function () {\n\tvar assign = Object.assign, obj;\n\tif (typeof assign !== \"function\") return false;\n\tobj = { foo: \"raz\" };\n\tassign(obj, { bar: \"dwa\" }, { trzy: \"trzy\" });\n\treturn (obj.foo + obj.bar + obj.trzy) === \"razdwatrzy\";\n};\n\n\n//# sourceURL=webpack:///./node_modules/_es5-ext@0.10.45@es5-ext/object/assign/is-implemented.js?");

/***/ }),

/***/ "./node_modules/_es5-ext@0.10.45@es5-ext/object/assign/shim.js":
/*!*********************************************************************!*\
  !*** ./node_modules/_es5-ext@0.10.45@es5-ext/object/assign/shim.js ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nvar keys  = __webpack_require__(/*! ../keys */ \"./node_modules/_es5-ext@0.10.45@es5-ext/object/keys/index.js\")\n  , value = __webpack_require__(/*! ../valid-value */ \"./node_modules/_es5-ext@0.10.45@es5-ext/object/valid-value.js\")\n  , max   = Math.max;\n\nmodule.exports = function (dest, src /*, …srcn*/) {\n\tvar error, i, length = max(arguments.length, 2), assign;\n\tdest = Object(value(dest));\n\tassign = function (key) {\n\t\ttry {\n\t\t\tdest[key] = src[key];\n\t\t} catch (e) {\n\t\t\tif (!error) error = e;\n\t\t}\n\t};\n\tfor (i = 1; i < length; ++i) {\n\t\tsrc = arguments[i];\n\t\tkeys(src).forEach(assign);\n\t}\n\tif (error !== undefined) throw error;\n\treturn dest;\n};\n\n\n//# sourceURL=webpack:///./node_modules/_es5-ext@0.10.45@es5-ext/object/assign/shim.js?");

/***/ }),

/***/ "./node_modules/_es5-ext@0.10.45@es5-ext/object/is-callable.js":
/*!*********************************************************************!*\
  !*** ./node_modules/_es5-ext@0.10.45@es5-ext/object/is-callable.js ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("// Deprecated\n\n\n\nmodule.exports = function (obj) {\n return typeof obj === \"function\";\n};\n\n\n//# sourceURL=webpack:///./node_modules/_es5-ext@0.10.45@es5-ext/object/is-callable.js?");

/***/ }),

/***/ "./node_modules/_es5-ext@0.10.45@es5-ext/object/is-value.js":
/*!******************************************************************!*\
  !*** ./node_modules/_es5-ext@0.10.45@es5-ext/object/is-value.js ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nvar _undefined = __webpack_require__(/*! ../function/noop */ \"./node_modules/_es5-ext@0.10.45@es5-ext/function/noop.js\")(); // Support ES3 engines\n\nmodule.exports = function (val) {\n return (val !== _undefined) && (val !== null);\n};\n\n\n//# sourceURL=webpack:///./node_modules/_es5-ext@0.10.45@es5-ext/object/is-value.js?");

/***/ }),

/***/ "./node_modules/_es5-ext@0.10.45@es5-ext/object/keys/index.js":
/*!********************************************************************!*\
  !*** ./node_modules/_es5-ext@0.10.45@es5-ext/object/keys/index.js ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nmodule.exports = __webpack_require__(/*! ./is-implemented */ \"./node_modules/_es5-ext@0.10.45@es5-ext/object/keys/is-implemented.js\")() ? Object.keys : __webpack_require__(/*! ./shim */ \"./node_modules/_es5-ext@0.10.45@es5-ext/object/keys/shim.js\");\n\n\n//# sourceURL=webpack:///./node_modules/_es5-ext@0.10.45@es5-ext/object/keys/index.js?");

/***/ }),

/***/ "./node_modules/_es5-ext@0.10.45@es5-ext/object/keys/is-implemented.js":
/*!*****************************************************************************!*\
  !*** ./node_modules/_es5-ext@0.10.45@es5-ext/object/keys/is-implemented.js ***!
  \*****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nmodule.exports = function () {\n\ttry {\n\t\tObject.keys(\"primitive\");\n\t\treturn true;\n\t} catch (e) {\n\t\treturn false;\n\t}\n};\n\n\n//# sourceURL=webpack:///./node_modules/_es5-ext@0.10.45@es5-ext/object/keys/is-implemented.js?");

/***/ }),

/***/ "./node_modules/_es5-ext@0.10.45@es5-ext/object/keys/shim.js":
/*!*******************************************************************!*\
  !*** ./node_modules/_es5-ext@0.10.45@es5-ext/object/keys/shim.js ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nvar isValue = __webpack_require__(/*! ../is-value */ \"./node_modules/_es5-ext@0.10.45@es5-ext/object/is-value.js\");\n\nvar keys = Object.keys;\n\nmodule.exports = function (object) { return keys(isValue(object) ? Object(object) : object); };\n\n\n//# sourceURL=webpack:///./node_modules/_es5-ext@0.10.45@es5-ext/object/keys/shim.js?");

/***/ }),

/***/ "./node_modules/_es5-ext@0.10.45@es5-ext/object/normalize-options.js":
/*!***************************************************************************!*\
  !*** ./node_modules/_es5-ext@0.10.45@es5-ext/object/normalize-options.js ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nvar isValue = __webpack_require__(/*! ./is-value */ \"./node_modules/_es5-ext@0.10.45@es5-ext/object/is-value.js\");\n\nvar forEach = Array.prototype.forEach, create = Object.create;\n\nvar process = function (src, obj) {\n\tvar key;\n\tfor (key in src) obj[key] = src[key];\n};\n\n// eslint-disable-next-line no-unused-vars\nmodule.exports = function (opts1 /*, …options*/) {\n\tvar result = create(null);\n\tforEach.call(arguments, function (options) {\n\t\tif (!isValue(options)) return;\n\t\tprocess(Object(options), result);\n\t});\n\treturn result;\n};\n\n\n//# sourceURL=webpack:///./node_modules/_es5-ext@0.10.45@es5-ext/object/normalize-options.js?");

/***/ }),

/***/ "./node_modules/_es5-ext@0.10.45@es5-ext/object/valid-callable.js":
/*!************************************************************************!*\
  !*** ./node_modules/_es5-ext@0.10.45@es5-ext/object/valid-callable.js ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nmodule.exports = function (fn) {\n\tif (typeof fn !== \"function\") throw new TypeError(fn + \" is not a function\");\n\treturn fn;\n};\n\n\n//# sourceURL=webpack:///./node_modules/_es5-ext@0.10.45@es5-ext/object/valid-callable.js?");

/***/ }),

/***/ "./node_modules/_es5-ext@0.10.45@es5-ext/object/valid-value.js":
/*!*********************************************************************!*\
  !*** ./node_modules/_es5-ext@0.10.45@es5-ext/object/valid-value.js ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nvar isValue = __webpack_require__(/*! ./is-value */ \"./node_modules/_es5-ext@0.10.45@es5-ext/object/is-value.js\");\n\nmodule.exports = function (value) {\n\tif (!isValue(value)) throw new TypeError(\"Cannot use null or undefined\");\n\treturn value;\n};\n\n\n//# sourceURL=webpack:///./node_modules/_es5-ext@0.10.45@es5-ext/object/valid-value.js?");

/***/ }),

/***/ "./node_modules/_es5-ext@0.10.45@es5-ext/string/#/contains/index.js":
/*!**************************************************************************!*\
  !*** ./node_modules/_es5-ext@0.10.45@es5-ext/string/#/contains/index.js ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nmodule.exports = __webpack_require__(/*! ./is-implemented */ \"./node_modules/_es5-ext@0.10.45@es5-ext/string/#/contains/is-implemented.js\")()\n\t? String.prototype.contains\n\t: __webpack_require__(/*! ./shim */ \"./node_modules/_es5-ext@0.10.45@es5-ext/string/#/contains/shim.js\");\n\n\n//# sourceURL=webpack:///./node_modules/_es5-ext@0.10.45@es5-ext/string/#/contains/index.js?");

/***/ }),

/***/ "./node_modules/_es5-ext@0.10.45@es5-ext/string/#/contains/is-implemented.js":
/*!***********************************************************************************!*\
  !*** ./node_modules/_es5-ext@0.10.45@es5-ext/string/#/contains/is-implemented.js ***!
  \***********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nvar str = \"razdwatrzy\";\n\nmodule.exports = function () {\n\tif (typeof str.contains !== \"function\") return false;\n\treturn (str.contains(\"dwa\") === true) && (str.contains(\"foo\") === false);\n};\n\n\n//# sourceURL=webpack:///./node_modules/_es5-ext@0.10.45@es5-ext/string/#/contains/is-implemented.js?");

/***/ }),

/***/ "./node_modules/_es5-ext@0.10.45@es5-ext/string/#/contains/shim.js":
/*!*************************************************************************!*\
  !*** ./node_modules/_es5-ext@0.10.45@es5-ext/string/#/contains/shim.js ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nvar indexOf = String.prototype.indexOf;\n\nmodule.exports = function (searchString/*, position*/) {\n\treturn indexOf.call(this, searchString, arguments[1]) > -1;\n};\n\n\n//# sourceURL=webpack:///./node_modules/_es5-ext@0.10.45@es5-ext/string/#/contains/shim.js?");

/***/ }),

/***/ "./node_modules/_event-emitter@0.3.5@event-emitter/index.js":
/*!******************************************************************!*\
  !*** ./node_modules/_event-emitter@0.3.5@event-emitter/index.js ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nvar d        = __webpack_require__(/*! d */ \"./node_modules/_d@1.0.0@d/index.js\")\n  , callable = __webpack_require__(/*! es5-ext/object/valid-callable */ \"./node_modules/_es5-ext@0.10.45@es5-ext/object/valid-callable.js\")\n\n  , apply = Function.prototype.apply, call = Function.prototype.call\n  , create = Object.create, defineProperty = Object.defineProperty\n  , defineProperties = Object.defineProperties\n  , hasOwnProperty = Object.prototype.hasOwnProperty\n  , descriptor = { configurable: true, enumerable: false, writable: true }\n\n  , on, once, off, emit, methods, descriptors, base;\n\non = function (type, listener) {\n\tvar data;\n\n\tcallable(listener);\n\n\tif (!hasOwnProperty.call(this, '__ee__')) {\n\t\tdata = descriptor.value = create(null);\n\t\tdefineProperty(this, '__ee__', descriptor);\n\t\tdescriptor.value = null;\n\t} else {\n\t\tdata = this.__ee__;\n\t}\n\tif (!data[type]) data[type] = listener;\n\telse if (typeof data[type] === 'object') data[type].push(listener);\n\telse data[type] = [data[type], listener];\n\n\treturn this;\n};\n\nonce = function (type, listener) {\n\tvar once, self;\n\n\tcallable(listener);\n\tself = this;\n\ton.call(this, type, once = function () {\n\t\toff.call(self, type, once);\n\t\tapply.call(listener, this, arguments);\n\t});\n\n\tonce.__eeOnceListener__ = listener;\n\treturn this;\n};\n\noff = function (type, listener) {\n\tvar data, listeners, candidate, i;\n\n\tcallable(listener);\n\n\tif (!hasOwnProperty.call(this, '__ee__')) return this;\n\tdata = this.__ee__;\n\tif (!data[type]) return this;\n\tlisteners = data[type];\n\n\tif (typeof listeners === 'object') {\n\t\tfor (i = 0; (candidate = listeners[i]); ++i) {\n\t\t\tif ((candidate === listener) ||\n\t\t\t\t\t(candidate.__eeOnceListener__ === listener)) {\n\t\t\t\tif (listeners.length === 2) data[type] = listeners[i ? 0 : 1];\n\t\t\t\telse listeners.splice(i, 1);\n\t\t\t}\n\t\t}\n\t} else {\n\t\tif ((listeners === listener) ||\n\t\t\t\t(listeners.__eeOnceListener__ === listener)) {\n\t\t\tdelete data[type];\n\t\t}\n\t}\n\n\treturn this;\n};\n\nemit = function (type) {\n\tvar i, l, listener, listeners, args;\n\n\tif (!hasOwnProperty.call(this, '__ee__')) return;\n\tlisteners = this.__ee__[type];\n\tif (!listeners) return;\n\n\tif (typeof listeners === 'object') {\n\t\tl = arguments.length;\n\t\targs = new Array(l - 1);\n\t\tfor (i = 1; i < l; ++i) args[i - 1] = arguments[i];\n\n\t\tlisteners = listeners.slice();\n\t\tfor (i = 0; (listener = listeners[i]); ++i) {\n\t\t\tapply.call(listener, this, args);\n\t\t}\n\t} else {\n\t\tswitch (arguments.length) {\n\t\tcase 1:\n\t\t\tcall.call(listeners, this);\n\t\t\tbreak;\n\t\tcase 2:\n\t\t\tcall.call(listeners, this, arguments[1]);\n\t\t\tbreak;\n\t\tcase 3:\n\t\t\tcall.call(listeners, this, arguments[1], arguments[2]);\n\t\t\tbreak;\n\t\tdefault:\n\t\t\tl = arguments.length;\n\t\t\targs = new Array(l - 1);\n\t\t\tfor (i = 1; i < l; ++i) {\n\t\t\t\targs[i - 1] = arguments[i];\n\t\t\t}\n\t\t\tapply.call(listeners, this, args);\n\t\t}\n\t}\n};\n\nmethods = {\n\ton: on,\n\tonce: once,\n\toff: off,\n\temit: emit\n};\n\ndescriptors = {\n\ton: d(on),\n\tonce: d(once),\n\toff: d(off),\n\temit: d(emit)\n};\n\nbase = defineProperties({}, descriptors);\n\nmodule.exports = exports = function (o) {\n\treturn (o == null) ? create(base) : defineProperties(Object(o), descriptors);\n};\nexports.methods = methods;\n\n\n//# sourceURL=webpack:///./node_modules/_event-emitter@0.3.5@event-emitter/index.js?");

/***/ }),

/***/ "./src/Media/mse.js":
/*!**************************!*\
  !*** ./src/Media/mse.js ***!
  \**************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _task__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./task */ \"./src/Media/task.js\");\n/* harmony import */ var event_emitter__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! event-emitter */ \"./node_modules/_event-emitter@0.3.5@event-emitter/index.js\");\n/* harmony import */ var event_emitter__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(event_emitter__WEBPACK_IMPORTED_MODULE_1__);\n\r\n\r\n// import MP4 from './FMP4';\r\nclass MSE {\r\n    constructor(options) {\r\n        this._state = options.state;\r\n\r\n        this._mimeCodec = this._state.getState('mimeCodec');\r\n        this._video = this._state.getState('video');\r\n        this._url = this._state.getState('url');\r\n        this._bufferLimited = this._state.getState('bufferLimited');\r\n\r\n        this.sourceOpen = this.sourceOpen.bind(this);\r\n        this.appendBuffer = this.appendBuffer.bind(this);\r\n        this.endOfStream = this.endOfStream.bind(this);\r\n        \r\n        event_emitter__WEBPACK_IMPORTED_MODULE_1___default()(this);\r\n        this.on('loadData',finish =>{\r\n            this._task.emit('loadData',finish);\r\n            if( finish ) { this._loadFinsh = finish;}\r\n        });\r\n\r\n        this.bufferQueue = [];\r\n        this._loadFinsh = false;\r\n        this.init();\r\n    }\r\n\r\n    init() {\r\n        if ('MediaSource' in window && MediaSource.isTypeSupported(this._mimeCodec)) {\r\n            this._mediaSource = new MediaSource();\r\n            this._video.src = URL.createObjectURL(this._mediaSource);\r\n            this._mediaSource.addEventListener('sourceopen', this.sourceOpen);\r\n        } else {\r\n            console.error('Unsupported MIME type or codec: ', this._mimeCodec);\r\n        }\r\n    }\r\n\r\n    sourceOpen() {\r\n        this._sourceBuffer = this._mediaSource.addSourceBuffer(this._mimeCodec);\r\n        this._task = new _task__WEBPACK_IMPORTED_MODULE_0__[\"default\"]({\r\n            state:this._state,\r\n            callback:this.appendBuffer\r\n        });\r\n        this._sourceBuffer.addEventListener('updateend', () =>  {\r\n            if( this._loadFinsh ) { this.endOfStream();}\r\n            let buffer = this.bufferQueue.shift();\r\n            if (buffer) {\r\n                // console.log('切换清晰度,添加新的Buffer')\r\n                this._sourceBuffer.appendBuffer(buffer);\r\n            }\r\n        });\r\n    }\r\n\r\n    appendBuffer(buffer) {\r\n        let sourceBuffer =this._sourceBuffer;\r\n        if (sourceBuffer.updating === false && this.state === 'open') {\r\n            sourceBuffer.appendBuffer(buffer)\r\n            return true\r\n        } else {\r\n            this.bufferQueue.push(buffer)\r\n            return false\r\n        }\r\n    }\r\n\r\n    removeBuffer (start, end) {\r\n        console.log('切换清晰度,remove原来的Buffer')\r\n        this.sourceBuffer.remove(start, end)\r\n      }\r\n    \r\n    endOfStream () {\r\n        //在数据请求完成后，我们需要调用 endOfStream()。\r\n        //它会改变 MediaSource.readyState 为 ended 并且触发 sourceended 事件。\r\n        if (this.state === 'open') {\r\n            this._mediaSource.endOfStream();\r\n        }\r\n    }\r\n\r\n    get state () {\r\n        return this._mediaSource.readyState\r\n    }\r\n\r\n    get duration () {\r\n        return this._mediaSource.duration\r\n    }\r\n\r\n    set duration (value) {\r\n        this._mediaSource.duration = value\r\n    }\r\n}\r\n\r\n\r\n/* harmony default export */ __webpack_exports__[\"default\"] = (MSE);\r\n\n\n//# sourceURL=webpack:///./src/Media/mse.js?");

/***/ }),

/***/ "./src/Media/task.js":
/*!***************************!*\
  !*** ./src/Media/task.js ***!
  \***************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var event_emitter__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! event-emitter */ \"./node_modules/_event-emitter@0.3.5@event-emitter/index.js\");\n/* harmony import */ var event_emitter__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(event_emitter__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _player_state__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../player/state */ \"./src/player/state.js\");\n\n\n\n/**\n * [constructor 构造函数参数options]\n * @param {String} url [原播放地址]\n * @param {Function} callback [请求后的回调函数]\n**/\n\nclass Task{\n  constructor(options){\n    event_emitter__WEBPACK_IMPORTED_MODULE_0___default()(this);\n    this._state = options.state;\n\n    this._fetchUrl = this._state.getState('url');\n    this._bufferLimited = this._state.getState('bufferLimited');\n    this._taskCallback = options.callback;\n\n    this.on('loadData',this.fetchData.bind(this));\n\n    this._initByte = 1000000; //第一次请求的区间 =>这个暂不抽离\n    this._postionByte = 0//记下当前字节 \n    this.fetchData();\n  }\n\n  fetchData(finish = false,ranges = `bytes=${this._postionByte}-${(this._postionByte+this._initByte)}` ){\n    //如果不考虑缓冲控制和无缝清晰度切换是否依然必须要FMP4呢？\n    //也就是FMP4是在range请求后还是请求前，它和range分块请求是否有着必然联系，貌似普通FMP4都播不出来，range请求可以成功\n    let sectionByte = this._state.getState('sectionByte');\n    if( sectionByte ){ ranges = `bytes=${this._postionByte}-${(this._postionByte+sectionByte)}`}\n    if( finish ){ ranges = `bytes=${this._postionByte}-`;this.off('loadData',this.fetchData)};\n    fetch(this._fetchUrl,{\n      headers: { range: ranges}\n    }).then( response => {\n      if(!this._state.getState('byteTotal')){\n        //获取视频总字节数\n        let byteTotal = response.headers.get('Content-Range').split('/')[1];\n        this._state.setState({'byteTotal':Math.floor(+byteTotal)})\n      }\n      return response.arrayBuffer();\n    }).then( arrayBuffer => {\n      this._postionByte += arrayBuffer.byteLength;\n      this._taskCallback(arrayBuffer);\n    })\n  }\n}\n\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Task);\n\n\n\n//# sourceURL=webpack:///./src/Media/task.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _player__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./player */ \"./src/player/index.js\");\n\r\n\r\n\r\nvar myPlayer = new _player__WEBPACK_IMPORTED_MODULE_0__[\"default\"]({\r\n    url:'./MP4file/frag_bunny.mp4',\r\n    video:document.getElementById('mseVideo'),\r\n    mimeCodec:'video/mp4;codecs=\"avc1.42E01E,mp4a.40.2\"',\r\n    bufferLimited:2\r\n})\r\n\n\n//# sourceURL=webpack:///./src/index.js?");

/***/ }),

/***/ "./src/player/index.js":
/*!*****************************!*\
  !*** ./src/player/index.js ***!
  \*****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _Media_mse__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../Media/mse */ \"./src/Media/mse.js\");\n/* harmony import */ var event_emitter__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! event-emitter */ \"./node_modules/_event-emitter@0.3.5@event-emitter/index.js\");\n/* harmony import */ var event_emitter__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(event_emitter__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _state__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./state */ \"./src/player/state.js\");\n\r\n\r\n\r\n\r\nclass Player{\r\n    constructor(options){\r\n        this._url = options.url;\r\n        this._video = options.video;\r\n        this._mimeCodec = options.mimeCodec;\r\n        this._bufferLimited = options.bufferLimited;\r\n        this._state = new _state__WEBPACK_IMPORTED_MODULE_2__[\"default\"](options);\r\n\r\n        this.onTimeUpdate = this.onTimeUpdate.bind(this);\r\n        this.onProgress = this.onProgress.bind(this);\r\n\r\n        this._video.addEventListener('timeupdate', this.onTimeUpdate);\r\n        this._video.addEventListener('progress', this.onProgress);\r\n        \r\n        event_emitter__WEBPACK_IMPORTED_MODULE_1___default()(this);\r\n        this._loaded = 0; //已缓冲数据\r\n        this._loading = false; //是否正在缓冲标志,控制缓冲准确性\r\n        this.init();\r\n    }\r\n    \r\n    init(){\r\n        this._MSE = new _Media_mse__WEBPACK_IMPORTED_MODULE_0__[\"default\"]({\r\n            state:this._state\r\n        });\r\n    }\r\n\r\n    onTimeUpdate(){\r\n        if( this._video.duration - this._loaded <= 0 || this._loading ){return;} //缓冲完毕\r\n        if( this._video.duration - this._loaded < this._bufferLimited ){ //再做一次缓冲就好了\r\n            this._loading = true;\r\n            this._MSE.emit('loadData',true); //布尔给出缓冲是否要结束的标志\r\n            return;\r\n        }\r\n        if ( this._loaded > 0 &&this._loaded - this._video.currentTime < 2 ) {\r\n            this._loading = true;\r\n            this._MSE.emit('loadData');\r\n        }\r\n    }\r\n\r\n    onProgress(){\r\n        let buffered = this._video.buffered,\r\n            time = this._video.currentTime\r\n        for(let i = 0; i < buffered.length; ++i) {\r\n            if (time >= buffered.start(i) && time < buffered.end(i)) {\r\n                this._loaded = buffered.end(i);\r\n                break;\r\n            }\r\n        }\r\n        //感觉就算控制每次缓冲的字节大小一样，依然可能因为缓冲的是视频不同段，\r\n        //换成的时间也不一样，很难做到百分百精确吧，稍有误差\r\n        console.log('[media] progress', this._loaded)\r\n        console.log(this._video.duration)\r\n        if(!this._state.getState('duration')) {\r\n            this._state.setState({'duration':this._video.duration})\r\n        }\r\n        this._loading = false;\r\n    }\r\n}\r\n\r\n\r\n/* harmony default export */ __webpack_exports__[\"default\"] = (Player);\n\n//# sourceURL=webpack:///./src/player/index.js?");

/***/ }),

/***/ "./src/player/state.js":
/*!*****************************!*\
  !*** ./src/player/state.js ***!
  \*****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var event_emitter__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! event-emitter */ \"./node_modules/_event-emitter@0.3.5@event-emitter/index.js\");\n/* harmony import */ var event_emitter__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(event_emitter__WEBPACK_IMPORTED_MODULE_0__);\n \r\n\r\n/**\r\n * [State 播放器参数控制]\r\n *  @param {String} section \r\n */\r\nclass State{\r\n    constructor(options){\r\n        event_emitter__WEBPACK_IMPORTED_MODULE_0___default()(this);\r\n\r\n        this.setState = this.setState.bind(this);\r\n        this.getState = this.getState.bind(this);\r\n\r\n        this.on('setState',this.setState);\r\n        this.on('getState',this.getState);\r\n        \r\n        this.setState(options)\r\n    }\r\n    \r\n    setState(state){\r\n       Object.assign(this,state);\r\n       if( this.byteTotal && this.duration ) {\r\n           let sectionByte = this.bufferLimited / this.duration * this.byteTotal;\r\n           this.sectionByte = Math.floor(sectionByte);\r\n           console.log(this.sectionByte)\r\n       }\r\n    }\r\n\r\n    getState(key){\r\n        return this[key]\r\n    }\r\n}\r\n\r\n/* harmony default export */ __webpack_exports__[\"default\"] = (State);\n\n//# sourceURL=webpack:///./src/player/state.js?");

/***/ })

/******/ });