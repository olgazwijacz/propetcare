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
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./js/main.js":
/*!********************!*\
  !*** ./js/main.js ***!
  \********************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("\r\n\r\n// ANIMATIONS\r\n\r\nconst img = document.querySelectorAll(\".img-slide\");\r\nconst textSlideLeft = document.querySelectorAll(\".flex-text\")\r\n\r\n\r\nTweenMax.from(\".pattern\", 1.5, {\r\n    delay: 1.6,\r\n    width: 0,\r\n    opacity: 0,\r\n    ease: Expo.easeInOut\r\n    }, 0.08);\r\n    \r\n\r\nTweenMax.from(\".nav-list-item\", 1.5, {\r\n    delay: 1.6,\r\n    opacity: 0,\r\n    x:-500,\r\n    ease: Expo.easeInOut,\r\n    }, 0.08);\r\n\r\n\r\n          \r\n  \r\nconst tl = new TimelineMax();\r\nconst controller = new ScrollMagic.Controller();\r\n\r\ntl.from(\".revealOnScroll\",.6, { y: -50, scale: 0.5, opacity: 0})\r\ntl.from(\".revealOnScroll2\", .5, {x: 200, opacity:0})\r\ntl.from(\".imgRedDog\", .5, {x:-300, opacity:0}, \"-=0.4\")\r\n\r\nconst scene = new ScrollMagic.Scene({\r\ntriggerElement: \".scroll\",\r\noffset: -250,\r\n\r\n})\r\n.setTween(tl)\r\n.addTo(controller)\r\n\r\nconst tl2 = new TimelineMax();\r\nconst controller2 = new ScrollMagic.Controller();\r\n\r\ntl2.from(\"#a\", 0.4, {y:-70, opacity:0})\r\ntl2.from(\"#b\", 0.4, {y:-70, opacity:0})\r\ntl2.from(\"#c\", 0.4, {y:-70, opacity:0})\r\ntl2.from(\"#d\", 0.4, {y:-70, opacity:0})\r\n\r\n\r\nconst scene2 = new ScrollMagic.Scene({\r\n    triggerElement:\".container-stuff\"\r\n})\r\n\r\n.setTween(tl2)\r\n.addTo(controller)\r\n\r\nconst tl3 = new TimelineMax();\r\nconst controller3 = new ScrollMagic.Controller();\r\n\r\ntl3.from(img[0], 0.5,{y: -200, opacity:0})\r\n.from(img[2], 0.5,{y: -200, opacity:0}, \"-=.5\")\r\n.from(img[1], 0.5,{y: -200, opacity:0}, \"-=.5\")   \r\n.from(img[3], 0.5,{y: -200, opacity:0}, \"-=.6\")  \r\n.fromTo(\".description\", 1,{x:-100, rotation: 360, opacity:0},{opacity:1, x:-10, ease:Power4.easeOut}, \"=.6\")\r\n.fromTo(\".dot\", 1.2,{scale:0 }, { scale:1.1,  ease: Elastic.easeOut},\"-=1\")\r\n.from(\".acronim\", { rotationY: 180, scale: 0.7, opacity: 0,}, \"-=.5\" )\r\n.to(\".acronim\", 0.3, {rotationY: 360, scale: 0.7, opacity:1, backgroundColor: \"rgba(242, 249, 252, 0.7\" },\"-=.1\")\r\n.from(\".pattern2\", 1.3, { opacity: 0, rotationX: 180,ease: Expo.easeInOut}, \"-=0.90\");\r\n; \r\n\r\n\r\nconst scene3 = new ScrollMagic.Scene({\r\n    triggerElement:\".rec yellow\",\r\n    offset: 300,\r\n})\r\n.setTween(tl3)\r\n.addTo(controller3)\r\n\r\nconst tl4 = new TimelineMax();\r\nconst controller4 = new ScrollMagic.Controller();\r\n\r\ntl4.from(\".wrapper\", .7,  {opacity:0, ease: Expo.easeInOut},\"=0.90\" )\r\n\r\nconst scene4 = new ScrollMagic.Scene({\r\n    triggerElement:\"#d\",\r\n    offset: 400,\r\n})\r\n.setTween(tl4)\r\n.addTo(controller4)\r\n\r\n\r\nconst tl5 = new TimelineMax();\r\nconst controller5 = new ScrollMagic.Controller();\r\n\r\ntl5.from(\".flex .quotation h3 \", 1.5, { delay: .5, opacity: 0, x:-500, ease: Expo.easeInOut}, 0.08)\r\n.from(\".flex .adress h4 \", 1.5, { delay:  .5, opacity: 0, x:-500, ease: Expo.easeInOut}, 0.08)\r\n.from(\".flex .site h4 \", 1.5, { delay:  .5, opacity: 0, x:-500, ease: Expo.easeInOut}, 0.08)\r\n.from(\".flex .follow h4 \", 1.5, { delay:  .5, opacity: 0, x:-500, ease: Expo.easeInOut}, 0.08)\r\nconst scene5 = new ScrollMagic.Scene({\r\n    triggerElement:\"#name\",\r\n    offset: 100,\r\n})\r\n.setTween(tl5)\r\n.addTo(controller5)\r\n\n\n//# sourceURL=webpack:///./js/main.js?");

/***/ }),

/***/ "./scss/styles.scss":
/*!**************************!*\
  !*** ./scss/styles.scss ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = __webpack_require__.p + \"css/styles.styles.css\";\n\n//# sourceURL=webpack:///./scss/styles.scss?");

/***/ }),

/***/ 0:
/*!*********************************************!*\
  !*** multi ./js/main.js ./scss/styles.scss ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("__webpack_require__(/*! ./js/main.js */\"./js/main.js\");\nmodule.exports = __webpack_require__(/*! ./scss/styles.scss */\"./scss/styles.scss\");\n\n\n//# sourceURL=webpack:///multi_./js/main.js_./scss/styles.scss?");

/***/ })

/******/ });