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

/***/ "./src/Media/mse.js":
/*!**************************!*\
  !*** ./src/Media/mse.js ***!
  \**************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _task__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./task */ \"./src/Media/task.js\");\n\r\n\r\nclass MSE {\r\n    constructor(options) {\r\n        this._mimeCodec = options.mimeCodec;\r\n        this._video = options.video;\r\n        this._url = options.url;\r\n        this.sourceOpen = this.sourceOpen.bind(this);\r\n        this.appendBuffer = this.appendBuffer.bind(this);\r\n\r\n        this.init();\r\n    }\r\n\r\n    init() {\r\n        if ('MediaSource' in window && MediaSource.isTypeSupported(this._mimeCodec)) {\r\n            this._mediaSource = new MediaSource();\r\n            this._video.src = URL.createObjectURL(this._mediaSource);\r\n            this._mediaSource.addEventListener('sourceopen', this.sourceOpen);\r\n        } else {\r\n            console.error('Unsupported MIME type or codec: ', this._mimeCodec);\r\n        }\r\n    }\r\n\r\n    sourceOpen() {\r\n        this._sourceBuffer = this._mediaSource.addSourceBuffer(this._mimeCodec);\r\n        new _task__WEBPACK_IMPORTED_MODULE_0__[\"default\"]({\r\n            url:this._url,\r\n            callback:this.appendBuffer\r\n        });\r\n    }\r\n\r\n    appendBuffer(buf) {\r\n        this._sourceBuffer.addEventListener('updateend', () =>  {\r\n            // console.log(buf)\r\n            if (!this._sourceBuffer.updating && this.state === 'open') {\r\n                this._mediaSource.endOfStream();  //表示流的结束，但为啥一定要end\r\n                this._video.play().then(()=>{\r\n                    console.log('成功播放咯')\r\n                }).catch( err => {\r\n                    console.log('.js-log-mp4', err)\r\n                });\r\n            }\r\n        });\r\n        this._sourceBuffer.appendBuffer(buf);\r\n    }\r\n\r\n    get state () {\r\n        return this._mediaSource.readyState\r\n    }\r\n\r\n    get duration () {\r\n        return this._mediaSource.duration\r\n    }\r\n\r\n    set duration (value) {\r\n        this._mediaSource.duration = value\r\n    }\r\n}\r\n\r\n\r\n/* harmony default export */ __webpack_exports__[\"default\"] = (MSE);\r\n\n\n//# sourceURL=webpack:///./src/Media/mse.js?");

/***/ }),

/***/ "./src/Media/task.js":
/*!***************************!*\
  !*** ./src/Media/task.js ***!
  \***************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\nclass Task{\n  constructor(options){\n    this._fetchUrl = options.url;\n    this._taskCallback = options.callback;\n\n    this.fetchData();\n  }\n\n  fetchData(){\n    var xhr = new XMLHttpRequest;\n    xhr.open('get', this._fetchUrl);\n    xhr.responseType = 'arraybuffer';\n    xhr.onload = ()=>{\n      this._taskCallback(xhr.response);\n    }\n    xhr.send();\n  }\n}\n\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Task);\n\n\n\n//# sourceURL=webpack:///./src/Media/task.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _player__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./player */ \"./src/player/index.js\");\n\r\n\r\n\r\nvar myPlayer = new _player__WEBPACK_IMPORTED_MODULE_0__[\"default\"]({\r\n    url:'./MP4file/frag_bunny.mp4',\r\n    video:document.getElementById('mseVideo'),\r\n    mimeCodec:'video/mp4;codecs=\"avc1.42E01E,mp4a.40.2\"'\r\n})\r\n\n\n//# sourceURL=webpack:///./src/index.js?");

/***/ }),

/***/ "./src/player/index.js":
/*!*****************************!*\
  !*** ./src/player/index.js ***!
  \*****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _Media_mse__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../Media/mse */ \"./src/Media/mse.js\");\n\r\n\r\nclass Player{\r\n    constructor(options){\r\n        this._url = options.url;\r\n        this._video = options.video;\r\n        this._mimeCodec = options.mimeCodec;\r\n\r\n       this.init();\r\n    }\r\n    \r\n    init(){\r\n        this._MSE = new _Media_mse__WEBPACK_IMPORTED_MODULE_0__[\"default\"]({\r\n            url:this._url,\r\n            video:this._video,\r\n            mimeCodec:this._mimeCodec\r\n        });\r\n    }\r\n}\r\n\r\n\r\n/* harmony default export */ __webpack_exports__[\"default\"] = (Player);\n\n//# sourceURL=webpack:///./src/player/index.js?");

/***/ })

/******/ });