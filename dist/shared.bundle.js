"use strict";
(self["webpackChunkodin_restaurant"] = self["webpackChunkodin_restaurant"] || []).push([["shared"],{

/***/ "./node_modules/css-loader/dist/cjs.js!./src/style.css":
/*!*************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/style.css ***!
  \*************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/getUrl.js */ "./node_modules/css-loader/dist/runtime/getUrl.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__);
// Imports



var ___CSS_LOADER_URL_IMPORT_0___ = new URL(/* asset import */ __webpack_require__(/*! fonts/Gentle.woff2 */ "./src/fonts/Gentle.woff2"), __webpack_require__.b);
var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
var ___CSS_LOADER_URL_REPLACEMENT_0___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_0___);
// Module
___CSS_LOADER_EXPORT___.push([module.id, `@font-face {
      font-family: Gentle;
      src: url(${___CSS_LOADER_URL_REPLACEMENT_0___}) format('woff2');
      font-style: normal;
}

* {
      box-sizing: border-box;
      margin: 0;
      padding: 0;
      list-style: none;
}

body {
      height: 100vh;
      display: flex;
      flex-direction: column;
      justify-content: space-between;
}

/** HEADER **/

#logo {
      width: 90px;
      height: 90px;
      cursor: pointer;
}

a {
      text-decoration: none;
}

.title {
      font-family: 'Gentle', system-ui, sans-serif;
      font-size: 36px;
      width: fit-content;
      height: fit-content;
      background: linear-gradient(321deg, 
                                rgba(226,0,250,1) 0%, 
                                rgba(229,124,4,1) 100%);
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
}

nav > button {
      background: none;
      border: none;
      font-family: 'Gentle', system-ui, sans-serif;
      font-size: 18px;
      letter-spacing: 1.5px;
      padding: 8px 36px;
      cursor: pointer;
      transition: all 0.3s;
}

header > div > a {
      display: flex;
      justify-content: center;
      align-items: center;
      gap: 16px;
}

header > .hf-container {
      max-width: 1440px;
      padding: 12px 0;
      margin: 0 auto;
      display: flex;
      justify-content: space-between;
      align-items: center;
}

header {
      width: 100%;
      background-color: #e3bc9a;
}

nav > button:hover, nav > button:active {
      background: linear-gradient(321deg, 
                                rgba(226,0,250,1) 0%, 
                                rgba(229,124,4,1) 100%);
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
      transform: scale(1.3);
}

/** CONTENT **/

/** A. HERO **/

#donut-bg {
      width: 100%;
      height: 696px;
      object-fit: cover;
      filter: brightness(60%);
      position: relative;
} 

.hero {
      height: 696px;
}

.hero-contents {
      padding: 48px 36px;
      background: rgba(255, 255, 255, 0.5);
      border-radius: 16px;
      box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
      backdrop-filter: blur(5.6px);
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      text-align: center;
      -webkit-backdrop-filter: blur(5.6px);
}

.hero-contents > p:first-child {
      font-family: 'Gentle', system-ui, sans-serif;
      font-weight: 700;
      font-size: clamp(1.5rem, 5vw, 5rem);
      line-height: 90px;
      letter-spacing: 4px;
}

.hero-contents > p:last-of-type {
      font-family: 'Gentle', system-ui, sans-serif;
      font-size: 1.3rem;
      margin: 0 74px;
}

.hero-contents > button {
      font-family: system-ui, sans-serif;
      font-weight: 700;
      font-size: 1rem;
      color: #fff;
      background: linear-gradient(321deg, 
                                rgba(226,0,250,1) 0%, 
                                rgba(229,124,4,1) 90%);
      width: fit-content;
      padding: 12px 24px;
      border: 2px solid #000;
      border-radius: 50px;
      margin: 32px auto 0 auto;
      cursor: pointer;
      overflow: hidden;
}

.hero-contents > button:hover {
      background: linear-gradient(321deg, 
                                rgba(226,0,250,1) 50%, 
                                rgba(229,124,4,1) 50%);
}

/** B. MENU **/

.section-title {
      font-size: 48px;
      font-weight: 700;
      font-family: 'Gentle', system-ui, sans-serif;
      letter-spacing: 2px;
      text-align: center;
}

.menu > .donut-cont {
      display: grid;
      grid-template: repeat(2, 260px) / repeat(3, 260px);
      gap: 50px;
}

.menu > .donut-cont > div {
      position: relative;
      cursor: pointer;
      overflow: hidden;
      border-radius: 36px;
}

.menu > .donut-cont > div > img {
      width: 100%;
      height: 100%;
      border-radius: 36px;
      object-fit: cover;
      transition: all 0.3s ease-in-out;
}

.menu > .donut-cont > div > p {
      color: #fff;
      font-family: 'Gentle', system-ui, sans-serif;
      font-size: 2rem;
      text-align: center;
      letter-spacing: 2px;
      line-height: 32px;
      width: 100%;
      padding: 0 24px;
      position: absolute;
      top: 90%;
      left: 50%;
      transform: translate(-50%, -90%);
      -webkit-text-stroke-width: 1px;
      -webkit-text-stroke-color: #000;
}

.menu {
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      gap: 36px;
      margin: 36px 0;
}

.menu > .donut-cont > div > img:hover{
      transform: scale(1.2);
}

/** LOCATION **/

.location > iframe {
      width: 600px;
      height: 450px;
      border: 0;
      margin-top: 36px;
}

.location, .about-us {
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      margin: 70px 0;
}

/** ABOUT US **/

.about-us-cont > p {
      max-width: 800px;
      word-wrap: normal;
      text-align: center;
}

/** FOOTER **/

footer > .hf-container > a {
      display: flex;
      flex-direction: column;
      align-items: center;
}

footer a, footer p {
      color: #000;
      font-family: 'system-ui', sans-serif;
      font-weight: 600;
}

footer > .hf-container > ul {
      height: 90px;
      display: flex;
      flex-direction: column;
      flex-wrap: wrap;
      flex-basis: 50%;
      align-content: space-around;
}

footer > .hf-container > div > ul li img {
      width: 42px;
      height: 42px;
}

footer > .hf-container > div > ul {
      display: flex;
      flex-wrap: wrap;
      gap: 12px;
}

footer > .hf-container > div > ul:first-child {
      margin-bottom: 18px;
}

.label {
      flex: 0 0 100%;
}

footer > .hf-container {
      max-width: 1440px;
      margin: 0 auto;
      display: flex;
      flex-wrap: wrap;
      justify-content: space-between;
      align-items: center;
}

footer {
      background-color: #e3bc9a;
      width: 100%;
      padding: 52px;
}






`, "",{"version":3,"sources":["webpack://./src/style.css"],"names":[],"mappings":"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","sourcesContent":["@font-face {\r\n      font-family: Gentle;\r\n      src: url(fonts/Gentle.woff2) format('woff2');\r\n      font-style: normal;\r\n}\r\n\r\n* {\r\n      box-sizing: border-box;\r\n      margin: 0;\r\n      padding: 0;\r\n      list-style: none;\r\n}\r\n\r\nbody {\r\n      height: 100vh;\r\n      display: flex;\r\n      flex-direction: column;\r\n      justify-content: space-between;\r\n}\r\n\r\n/** HEADER **/\r\n\r\n#logo {\r\n      width: 90px;\r\n      height: 90px;\r\n      cursor: pointer;\r\n}\r\n\r\na {\r\n      text-decoration: none;\r\n}\r\n\r\n.title {\r\n      font-family: 'Gentle', system-ui, sans-serif;\r\n      font-size: 36px;\r\n      width: fit-content;\r\n      height: fit-content;\r\n      background: linear-gradient(321deg, \r\n                                rgba(226,0,250,1) 0%, \r\n                                rgba(229,124,4,1) 100%);\r\n      -webkit-background-clip: text;\r\n      -webkit-text-fill-color: transparent;\r\n}\r\n\r\nnav > button {\r\n      background: none;\r\n      border: none;\r\n      font-family: 'Gentle', system-ui, sans-serif;\r\n      font-size: 18px;\r\n      letter-spacing: 1.5px;\r\n      padding: 8px 36px;\r\n      cursor: pointer;\r\n      transition: all 0.3s;\r\n}\r\n\r\nheader > div > a {\r\n      display: flex;\r\n      justify-content: center;\r\n      align-items: center;\r\n      gap: 16px;\r\n}\r\n\r\nheader > .hf-container {\r\n      max-width: 1440px;\r\n      padding: 12px 0;\r\n      margin: 0 auto;\r\n      display: flex;\r\n      justify-content: space-between;\r\n      align-items: center;\r\n}\r\n\r\nheader {\r\n      width: 100%;\r\n      background-color: #e3bc9a;\r\n}\r\n\r\nnav > button:hover, nav > button:active {\r\n      background: linear-gradient(321deg, \r\n                                rgba(226,0,250,1) 0%, \r\n                                rgba(229,124,4,1) 100%);\r\n      -webkit-background-clip: text;\r\n      -webkit-text-fill-color: transparent;\r\n      transform: scale(1.3);\r\n}\r\n\r\n/** CONTENT **/\r\n\r\n/** A. HERO **/\r\n\r\n#donut-bg {\r\n      width: 100%;\r\n      height: 696px;\r\n      object-fit: cover;\r\n      filter: brightness(60%);\r\n      position: relative;\r\n} \r\n\r\n.hero {\r\n      height: 696px;\r\n}\r\n\r\n.hero-contents {\r\n      padding: 48px 36px;\r\n      background: rgba(255, 255, 255, 0.5);\r\n      border-radius: 16px;\r\n      box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);\r\n      backdrop-filter: blur(5.6px);\r\n      position: absolute;\r\n      top: 50%;\r\n      left: 50%;\r\n      transform: translate(-50%, -50%);\r\n      display: flex;\r\n      flex-direction: column;\r\n      justify-content: center;\r\n      align-items: center;\r\n      text-align: center;\r\n      -webkit-backdrop-filter: blur(5.6px);\r\n}\r\n\r\n.hero-contents > p:first-child {\r\n      font-family: 'Gentle', system-ui, sans-serif;\r\n      font-weight: 700;\r\n      font-size: clamp(1.5rem, 5vw, 5rem);\r\n      line-height: 90px;\r\n      letter-spacing: 4px;\r\n}\r\n\r\n.hero-contents > p:last-of-type {\r\n      font-family: 'Gentle', system-ui, sans-serif;\r\n      font-size: 1.3rem;\r\n      margin: 0 74px;\r\n}\r\n\r\n.hero-contents > button {\r\n      font-family: system-ui, sans-serif;\r\n      font-weight: 700;\r\n      font-size: 1rem;\r\n      color: #fff;\r\n      background: linear-gradient(321deg, \r\n                                rgba(226,0,250,1) 0%, \r\n                                rgba(229,124,4,1) 90%);\r\n      width: fit-content;\r\n      padding: 12px 24px;\r\n      border: 2px solid #000;\r\n      border-radius: 50px;\r\n      margin: 32px auto 0 auto;\r\n      cursor: pointer;\r\n      overflow: hidden;\r\n}\r\n\r\n.hero-contents > button:hover {\r\n      background: linear-gradient(321deg, \r\n                                rgba(226,0,250,1) 50%, \r\n                                rgba(229,124,4,1) 50%);\r\n}\r\n\r\n/** B. MENU **/\r\n\r\n.section-title {\r\n      font-size: 48px;\r\n      font-weight: 700;\r\n      font-family: 'Gentle', system-ui, sans-serif;\r\n      letter-spacing: 2px;\r\n      text-align: center;\r\n}\r\n\r\n.menu > .donut-cont {\r\n      display: grid;\r\n      grid-template: repeat(2, 260px) / repeat(3, 260px);\r\n      gap: 50px;\r\n}\r\n\r\n.menu > .donut-cont > div {\r\n      position: relative;\r\n      cursor: pointer;\r\n      overflow: hidden;\r\n      border-radius: 36px;\r\n}\r\n\r\n.menu > .donut-cont > div > img {\r\n      width: 100%;\r\n      height: 100%;\r\n      border-radius: 36px;\r\n      object-fit: cover;\r\n      transition: all 0.3s ease-in-out;\r\n}\r\n\r\n.menu > .donut-cont > div > p {\r\n      color: #fff;\r\n      font-family: 'Gentle', system-ui, sans-serif;\r\n      font-size: 2rem;\r\n      text-align: center;\r\n      letter-spacing: 2px;\r\n      line-height: 32px;\r\n      width: 100%;\r\n      padding: 0 24px;\r\n      position: absolute;\r\n      top: 90%;\r\n      left: 50%;\r\n      transform: translate(-50%, -90%);\r\n      -webkit-text-stroke-width: 1px;\r\n      -webkit-text-stroke-color: #000;\r\n}\r\n\r\n.menu {\r\n      display: flex;\r\n      flex-direction: column;\r\n      justify-content: center;\r\n      align-items: center;\r\n      gap: 36px;\r\n      margin: 36px 0;\r\n}\r\n\r\n.menu > .donut-cont > div > img:hover{\r\n      transform: scale(1.2);\r\n}\r\n\r\n/** LOCATION **/\r\n\r\n.location > iframe {\r\n      width: 600px;\r\n      height: 450px;\r\n      border: 0;\r\n      margin-top: 36px;\r\n}\r\n\r\n.location, .about-us {\r\n      display: flex;\r\n      flex-direction: column;\r\n      justify-content: center;\r\n      align-items: center;\r\n      margin: 70px 0;\r\n}\r\n\r\n/** ABOUT US **/\r\n\r\n.about-us-cont > p {\r\n      max-width: 800px;\r\n      word-wrap: normal;\r\n      text-align: center;\r\n}\r\n\r\n/** FOOTER **/\r\n\r\nfooter > .hf-container > a {\r\n      display: flex;\r\n      flex-direction: column;\r\n      align-items: center;\r\n}\r\n\r\nfooter a, footer p {\r\n      color: #000;\r\n      font-family: 'system-ui', sans-serif;\r\n      font-weight: 600;\r\n}\r\n\r\nfooter > .hf-container > ul {\r\n      height: 90px;\r\n      display: flex;\r\n      flex-direction: column;\r\n      flex-wrap: wrap;\r\n      flex-basis: 50%;\r\n      align-content: space-around;\r\n}\r\n\r\nfooter > .hf-container > div > ul li img {\r\n      width: 42px;\r\n      height: 42px;\r\n}\r\n\r\nfooter > .hf-container > div > ul {\r\n      display: flex;\r\n      flex-wrap: wrap;\r\n      gap: 12px;\r\n}\r\n\r\nfooter > .hf-container > div > ul:first-child {\r\n      margin-bottom: 18px;\r\n}\r\n\r\n.label {\r\n      flex: 0 0 100%;\r\n}\r\n\r\nfooter > .hf-container {\r\n      max-width: 1440px;\r\n      margin: 0 auto;\r\n      display: flex;\r\n      flex-wrap: wrap;\r\n      justify-content: space-between;\r\n      align-items: center;\r\n}\r\n\r\nfooter {\r\n      background-color: #e3bc9a;\r\n      width: 100%;\r\n      padding: 52px;\r\n}\r\n\r\n\r\n\r\n\r\n\r\n\r\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {



/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
module.exports = function (cssWithMappingToString) {
  var list = [];

  // return the list of modules as css string
  list.toString = function toString() {
    return this.map(function (item) {
      var content = "";
      var needLayer = typeof item[5] !== "undefined";
      if (item[4]) {
        content += "@supports (".concat(item[4], ") {");
      }
      if (item[2]) {
        content += "@media ".concat(item[2], " {");
      }
      if (needLayer) {
        content += "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {");
      }
      content += cssWithMappingToString(item);
      if (needLayer) {
        content += "}";
      }
      if (item[2]) {
        content += "}";
      }
      if (item[4]) {
        content += "}";
      }
      return content;
    }).join("");
  };

  // import a list of modules into the list
  list.i = function i(modules, media, dedupe, supports, layer) {
    if (typeof modules === "string") {
      modules = [[null, modules, undefined]];
    }
    var alreadyImportedModules = {};
    if (dedupe) {
      for (var k = 0; k < this.length; k++) {
        var id = this[k][0];
        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }
    for (var _k = 0; _k < modules.length; _k++) {
      var item = [].concat(modules[_k]);
      if (dedupe && alreadyImportedModules[item[0]]) {
        continue;
      }
      if (typeof layer !== "undefined") {
        if (typeof item[5] === "undefined") {
          item[5] = layer;
        } else {
          item[1] = "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {").concat(item[1], "}");
          item[5] = layer;
        }
      }
      if (media) {
        if (!item[2]) {
          item[2] = media;
        } else {
          item[1] = "@media ".concat(item[2], " {").concat(item[1], "}");
          item[2] = media;
        }
      }
      if (supports) {
        if (!item[4]) {
          item[4] = "".concat(supports);
        } else {
          item[1] = "@supports (".concat(item[4], ") {").concat(item[1], "}");
          item[4] = supports;
        }
      }
      list.push(item);
    }
  };
  return list;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/getUrl.js":
/*!********************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/getUrl.js ***!
  \********************************************************/
/***/ ((module) => {



module.exports = function (url, options) {
  if (!options) {
    options = {};
  }
  if (!url) {
    return url;
  }
  url = String(url.__esModule ? url.default : url);

  // If url is already wrapped in quotes, remove them
  if (/^['"].*['"]$/.test(url)) {
    url = url.slice(1, -1);
  }
  if (options.hash) {
    url += options.hash;
  }

  // Should url be wrapped?
  // See https://drafts.csswg.org/css-values-3/#urls
  if (/["'() \t\n]|(%20)/.test(url) || options.needQuotes) {
    return "\"".concat(url.replace(/"/g, '\\"').replace(/\n/g, "\\n"), "\"");
  }
  return url;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/sourceMaps.js":
/*!************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/sourceMaps.js ***!
  \************************************************************/
/***/ ((module) => {



module.exports = function (item) {
  var content = item[1];
  var cssMapping = item[3];
  if (!cssMapping) {
    return content;
  }
  if (typeof btoa === "function") {
    var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(cssMapping))));
    var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
    var sourceMapping = "/*# ".concat(data, " */");
    return [content].concat([sourceMapping]).join("\n");
  }
  return [content].join("\n");
};

/***/ }),

/***/ "./src/style.css":
/*!***********************!*\
  !*** ./src/style.css ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./style.css */ "./node_modules/css-loader/dist/cjs.js!./src/style.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());
options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {



var stylesInDOM = [];
function getIndexByIdentifier(identifier) {
  var result = -1;
  for (var i = 0; i < stylesInDOM.length; i++) {
    if (stylesInDOM[i].identifier === identifier) {
      result = i;
      break;
    }
  }
  return result;
}
function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];
  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var indexByIdentifier = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3],
      supports: item[4],
      layer: item[5]
    };
    if (indexByIdentifier !== -1) {
      stylesInDOM[indexByIdentifier].references++;
      stylesInDOM[indexByIdentifier].updater(obj);
    } else {
      var updater = addElementStyle(obj, options);
      options.byIndex = i;
      stylesInDOM.splice(i, 0, {
        identifier: identifier,
        updater: updater,
        references: 1
      });
    }
    identifiers.push(identifier);
  }
  return identifiers;
}
function addElementStyle(obj, options) {
  var api = options.domAPI(options);
  api.update(obj);
  var updater = function updater(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {
        return;
      }
      api.update(obj = newObj);
    } else {
      api.remove();
    }
  };
  return updater;
}
module.exports = function (list, options) {
  options = options || {};
  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];
    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDOM[index].references--;
    }
    var newLastIdentifiers = modulesToDom(newList, options);
    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];
      var _index = getIndexByIdentifier(_identifier);
      if (stylesInDOM[_index].references === 0) {
        stylesInDOM[_index].updater();
        stylesInDOM.splice(_index, 1);
      }
    }
    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {



var memo = {};

/* istanbul ignore next  */
function getTarget(target) {
  if (typeof memo[target] === "undefined") {
    var styleTarget = document.querySelector(target);

    // Special case to return head of iframe instead of iframe itself
    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
      try {
        // This will throw an exception if access to iframe is blocked
        // due to cross-origin restrictions
        styleTarget = styleTarget.contentDocument.head;
      } catch (e) {
        // istanbul ignore next
        styleTarget = null;
      }
    }
    memo[target] = styleTarget;
  }
  return memo[target];
}

/* istanbul ignore next  */
function insertBySelector(insert, style) {
  var target = getTarget(insert);
  if (!target) {
    throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
  }
  target.appendChild(style);
}
module.exports = insertBySelector;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function insertStyleElement(options) {
  var element = document.createElement("style");
  options.setAttributes(element, options.attributes);
  options.insert(element, options.options);
  return element;
}
module.exports = insertStyleElement;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {



/* istanbul ignore next  */
function setAttributesWithoutAttributes(styleElement) {
  var nonce =  true ? __webpack_require__.nc : 0;
  if (nonce) {
    styleElement.setAttribute("nonce", nonce);
  }
}
module.exports = setAttributesWithoutAttributes;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function apply(styleElement, options, obj) {
  var css = "";
  if (obj.supports) {
    css += "@supports (".concat(obj.supports, ") {");
  }
  if (obj.media) {
    css += "@media ".concat(obj.media, " {");
  }
  var needLayer = typeof obj.layer !== "undefined";
  if (needLayer) {
    css += "@layer".concat(obj.layer.length > 0 ? " ".concat(obj.layer) : "", " {");
  }
  css += obj.css;
  if (needLayer) {
    css += "}";
  }
  if (obj.media) {
    css += "}";
  }
  if (obj.supports) {
    css += "}";
  }
  var sourceMap = obj.sourceMap;
  if (sourceMap && typeof btoa !== "undefined") {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  }

  // For old IE
  /* istanbul ignore if  */
  options.styleTagTransform(css, styleElement, options.options);
}
function removeStyleElement(styleElement) {
  // istanbul ignore if
  if (styleElement.parentNode === null) {
    return false;
  }
  styleElement.parentNode.removeChild(styleElement);
}

/* istanbul ignore next  */
function domAPI(options) {
  if (typeof document === "undefined") {
    return {
      update: function update() {},
      remove: function remove() {}
    };
  }
  var styleElement = options.insertStyleElement(options);
  return {
    update: function update(obj) {
      apply(styleElement, options, obj);
    },
    remove: function remove() {
      removeStyleElement(styleElement);
    }
  };
}
module.exports = domAPI;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function styleTagTransform(css, styleElement) {
  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = css;
  } else {
    while (styleElement.firstChild) {
      styleElement.removeChild(styleElement.firstChild);
    }
    styleElement.appendChild(document.createTextNode(css));
  }
}
module.exports = styleTagTransform;

/***/ }),

/***/ "./src/fonts/Gentle.woff2":
/*!********************************!*\
  !*** ./src/fonts/Gentle.woff2 ***!
  \********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "f80bfba4088d5ef4fe11.woff2";

/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ var __webpack_exports__ = (__webpack_exec__("./src/style.css"));
/******/ }
]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2hhcmVkLmJ1bmRsZS5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDMEc7QUFDakI7QUFDTztBQUNoRyw0Q0FBNEMsbUhBQXFDO0FBQ2pGLDhCQUE4QixtRkFBMkIsQ0FBQyw0RkFBcUM7QUFDL0YseUNBQXlDLHNGQUErQjtBQUN4RTtBQUNBO0FBQ0E7QUFDQSxpQkFBaUIsbUNBQW1DO0FBQ3BEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTyxnRkFBZ0YsWUFBWSxhQUFhLGFBQWEsT0FBTyxLQUFLLFlBQVksV0FBVyxVQUFVLFlBQVksT0FBTyxLQUFLLFVBQVUsVUFBVSxZQUFZLGFBQWEsT0FBTyxXQUFXLEtBQUssVUFBVSxVQUFVLFVBQVUsT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFlBQVksV0FBVyxZQUFZLGFBQWEsT0FBTyxPQUFPLGFBQWEsYUFBYSxPQUFPLEtBQUssWUFBWSxXQUFXLFlBQVksV0FBVyxZQUFZLGFBQWEsV0FBVyxZQUFZLE9BQU8sS0FBSyxVQUFVLFlBQVksYUFBYSxXQUFXLE1BQU0sS0FBSyxZQUFZLFdBQVcsVUFBVSxVQUFVLFlBQVksYUFBYSxPQUFPLEtBQUssVUFBVSxZQUFZLE9BQU8sS0FBSyxNQUFNLE9BQU8sYUFBYSxhQUFhLGFBQWEsT0FBTyxXQUFXLFdBQVcsS0FBSyxVQUFVLFVBQVUsWUFBWSxhQUFhLGFBQWEsT0FBTyxLQUFLLFVBQVUsT0FBTyxLQUFLLFlBQVksYUFBYSxhQUFhLGFBQWEsYUFBYSxhQUFhLFdBQVcsVUFBVSxZQUFZLFdBQVcsWUFBWSxhQUFhLGFBQWEsYUFBYSxhQUFhLE9BQU8sS0FBSyxZQUFZLGFBQWEsYUFBYSxhQUFhLGFBQWEsT0FBTyxLQUFLLFlBQVksYUFBYSxXQUFXLE9BQU8sS0FBSyxZQUFZLGFBQWEsV0FBVyxVQUFVLE1BQU0sT0FBTyxhQUFhLGFBQWEsYUFBYSxhQUFhLGFBQWEsV0FBVyxZQUFZLE9BQU8sS0FBSyxNQUFNLE9BQU8sT0FBTyxXQUFXLEtBQUssVUFBVSxZQUFZLGFBQWEsYUFBYSxhQUFhLE9BQU8sS0FBSyxVQUFVLFlBQVksV0FBVyxNQUFNLEtBQUssWUFBWSxXQUFXLFlBQVksYUFBYSxPQUFPLEtBQUssVUFBVSxVQUFVLFlBQVksYUFBYSxhQUFhLE9BQU8sS0FBSyxVQUFVLFlBQVksV0FBVyxZQUFZLGFBQWEsYUFBYSxXQUFXLFVBQVUsWUFBWSxXQUFXLFVBQVUsWUFBWSxhQUFhLGFBQWEsT0FBTyxLQUFLLFVBQVUsWUFBWSxhQUFhLGFBQWEsV0FBVyxVQUFVLE9BQU8sS0FBSyxZQUFZLE9BQU8sV0FBVyxLQUFLLFVBQVUsVUFBVSxVQUFVLFlBQVksT0FBTyxLQUFLLFVBQVUsWUFBWSxhQUFhLGFBQWEsV0FB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QUFDUjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7OztBQ2pDYTs7QUFFYjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7O0FDVGE7O0FBRWI7QUFDQTtBQUNBLGNBQWMsS0FBd0MsR0FBRyxzQkFBaUIsR0FBRyxDQUFJO0FBQ2pGO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7QUNUYTs7QUFFYjtBQUNBO0FBQ0E7QUFDQTtBQUNBLGtEQUFrRDtBQUNsRDtBQUNBO0FBQ0EsMENBQTBDO0FBQzFDO0FBQ0E7QUFDQTtBQUNBLGlGQUFpRjtBQUNqRjtBQUNBO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7QUFDQTtBQUNBLHlEQUF5RDtBQUN6RDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esa0NBQWtDO0FBQ2xDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7OztBQzVEYTs7QUFFYjtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUk7QUFDSjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSIsInNvdXJjZXMiOlsid2VicGFjazovL29kaW4tcmVzdGF1cmFudC8uL3NyYy9zdHlsZS5jc3MiLCJ3ZWJwYWNrOi8vb2Rpbi1yZXN0YXVyYW50Ly4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qcyIsIndlYnBhY2s6Ly9vZGluLXJlc3RhdXJhbnQvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvZ2V0VXJsLmpzIiwid2VicGFjazovL29kaW4tcmVzdGF1cmFudC8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzIiwid2VicGFjazovL29kaW4tcmVzdGF1cmFudC8uL3NyYy9zdHlsZS5jc3M/NzE2MyIsIndlYnBhY2s6Ly9vZGluLXJlc3RhdXJhbnQvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanMiLCJ3ZWJwYWNrOi8vb2Rpbi1yZXN0YXVyYW50Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qcyIsIndlYnBhY2s6Ly9vZGluLXJlc3RhdXJhbnQvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanMiLCJ3ZWJwYWNrOi8vb2Rpbi1yZXN0YXVyYW50Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzIiwid2VicGFjazovL29kaW4tcmVzdGF1cmFudC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzIiwid2VicGFjazovL29kaW4tcmVzdGF1cmFudC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9nZXRVcmwuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMF9fXyA9IG5ldyBVUkwoXCJmb250cy9HZW50bGUud29mZjJcIiwgaW1wb3J0Lm1ldGEudXJsKTtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8wX19fID0gX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMF9fXyk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgYEBmb250LWZhY2Uge1xyXG4gICAgICBmb250LWZhbWlseTogR2VudGxlO1xyXG4gICAgICBzcmM6IHVybCgke19fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzBfX199KSBmb3JtYXQoJ3dvZmYyJyk7XHJcbiAgICAgIGZvbnQtc3R5bGU6IG5vcm1hbDtcclxufVxyXG5cclxuKiB7XHJcbiAgICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XHJcbiAgICAgIG1hcmdpbjogMDtcclxuICAgICAgcGFkZGluZzogMDtcclxuICAgICAgbGlzdC1zdHlsZTogbm9uZTtcclxufVxyXG5cclxuYm9keSB7XHJcbiAgICAgIGhlaWdodDogMTAwdmg7XHJcbiAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcclxufVxyXG5cclxuLyoqIEhFQURFUiAqKi9cclxuXHJcbiNsb2dvIHtcclxuICAgICAgd2lkdGg6IDkwcHg7XHJcbiAgICAgIGhlaWdodDogOTBweDtcclxuICAgICAgY3Vyc29yOiBwb2ludGVyO1xyXG59XHJcblxyXG5hIHtcclxuICAgICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xyXG59XHJcblxyXG4udGl0bGUge1xyXG4gICAgICBmb250LWZhbWlseTogJ0dlbnRsZScsIHN5c3RlbS11aSwgc2Fucy1zZXJpZjtcclxuICAgICAgZm9udC1zaXplOiAzNnB4O1xyXG4gICAgICB3aWR0aDogZml0LWNvbnRlbnQ7XHJcbiAgICAgIGhlaWdodDogZml0LWNvbnRlbnQ7XHJcbiAgICAgIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCgzMjFkZWcsIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJnYmEoMjI2LDAsMjUwLDEpIDAlLCBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZ2JhKDIyOSwxMjQsNCwxKSAxMDAlKTtcclxuICAgICAgLXdlYmtpdC1iYWNrZ3JvdW5kLWNsaXA6IHRleHQ7XHJcbiAgICAgIC13ZWJraXQtdGV4dC1maWxsLWNvbG9yOiB0cmFuc3BhcmVudDtcclxufVxyXG5cclxubmF2ID4gYnV0dG9uIHtcclxuICAgICAgYmFja2dyb3VuZDogbm9uZTtcclxuICAgICAgYm9yZGVyOiBub25lO1xyXG4gICAgICBmb250LWZhbWlseTogJ0dlbnRsZScsIHN5c3RlbS11aSwgc2Fucy1zZXJpZjtcclxuICAgICAgZm9udC1zaXplOiAxOHB4O1xyXG4gICAgICBsZXR0ZXItc3BhY2luZzogMS41cHg7XHJcbiAgICAgIHBhZGRpbmc6IDhweCAzNnB4O1xyXG4gICAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgICAgIHRyYW5zaXRpb246IGFsbCAwLjNzO1xyXG59XHJcblxyXG5oZWFkZXIgPiBkaXYgPiBhIHtcclxuICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICAgIGdhcDogMTZweDtcclxufVxyXG5cclxuaGVhZGVyID4gLmhmLWNvbnRhaW5lciB7XHJcbiAgICAgIG1heC13aWR0aDogMTQ0MHB4O1xyXG4gICAgICBwYWRkaW5nOiAxMnB4IDA7XHJcbiAgICAgIG1hcmdpbjogMCBhdXRvO1xyXG4gICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XHJcbiAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbn1cclxuXHJcbmhlYWRlciB7XHJcbiAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZTNiYzlhO1xyXG59XHJcblxyXG5uYXYgPiBidXR0b246aG92ZXIsIG5hdiA+IGJ1dHRvbjphY3RpdmUge1xyXG4gICAgICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoMzIxZGVnLCBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZ2JhKDIyNiwwLDI1MCwxKSAwJSwgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmdiYSgyMjksMTI0LDQsMSkgMTAwJSk7XHJcbiAgICAgIC13ZWJraXQtYmFja2dyb3VuZC1jbGlwOiB0ZXh0O1xyXG4gICAgICAtd2Via2l0LXRleHQtZmlsbC1jb2xvcjogdHJhbnNwYXJlbnQ7XHJcbiAgICAgIHRyYW5zZm9ybTogc2NhbGUoMS4zKTtcclxufVxyXG5cclxuLyoqIENPTlRFTlQgKiovXHJcblxyXG4vKiogQS4gSEVSTyAqKi9cclxuXHJcbiNkb251dC1iZyB7XHJcbiAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICBoZWlnaHQ6IDY5NnB4O1xyXG4gICAgICBvYmplY3QtZml0OiBjb3ZlcjtcclxuICAgICAgZmlsdGVyOiBicmlnaHRuZXNzKDYwJSk7XHJcbiAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxufSBcclxuXHJcbi5oZXJvIHtcclxuICAgICAgaGVpZ2h0OiA2OTZweDtcclxufVxyXG5cclxuLmhlcm8tY29udGVudHMge1xyXG4gICAgICBwYWRkaW5nOiA0OHB4IDM2cHg7XHJcbiAgICAgIGJhY2tncm91bmQ6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC41KTtcclxuICAgICAgYm9yZGVyLXJhZGl1czogMTZweDtcclxuICAgICAgYm94LXNoYWRvdzogMCA0cHggMzBweCByZ2JhKDAsIDAsIDAsIDAuMSk7XHJcbiAgICAgIGJhY2tkcm9wLWZpbHRlcjogYmx1cig1LjZweCk7XHJcbiAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgICAgdG9wOiA1MCU7XHJcbiAgICAgIGxlZnQ6IDUwJTtcclxuICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgLTUwJSk7XHJcbiAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICAgIC13ZWJraXQtYmFja2Ryb3AtZmlsdGVyOiBibHVyKDUuNnB4KTtcclxufVxyXG5cclxuLmhlcm8tY29udGVudHMgPiBwOmZpcnN0LWNoaWxkIHtcclxuICAgICAgZm9udC1mYW1pbHk6ICdHZW50bGUnLCBzeXN0ZW0tdWksIHNhbnMtc2VyaWY7XHJcbiAgICAgIGZvbnQtd2VpZ2h0OiA3MDA7XHJcbiAgICAgIGZvbnQtc2l6ZTogY2xhbXAoMS41cmVtLCA1dncsIDVyZW0pO1xyXG4gICAgICBsaW5lLWhlaWdodDogOTBweDtcclxuICAgICAgbGV0dGVyLXNwYWNpbmc6IDRweDtcclxufVxyXG5cclxuLmhlcm8tY29udGVudHMgPiBwOmxhc3Qtb2YtdHlwZSB7XHJcbiAgICAgIGZvbnQtZmFtaWx5OiAnR2VudGxlJywgc3lzdGVtLXVpLCBzYW5zLXNlcmlmO1xyXG4gICAgICBmb250LXNpemU6IDEuM3JlbTtcclxuICAgICAgbWFyZ2luOiAwIDc0cHg7XHJcbn1cclxuXHJcbi5oZXJvLWNvbnRlbnRzID4gYnV0dG9uIHtcclxuICAgICAgZm9udC1mYW1pbHk6IHN5c3RlbS11aSwgc2Fucy1zZXJpZjtcclxuICAgICAgZm9udC13ZWlnaHQ6IDcwMDtcclxuICAgICAgZm9udC1zaXplOiAxcmVtO1xyXG4gICAgICBjb2xvcjogI2ZmZjtcclxuICAgICAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KDMyMWRlZywgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmdiYSgyMjYsMCwyNTAsMSkgMCUsIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJnYmEoMjI5LDEyNCw0LDEpIDkwJSk7XHJcbiAgICAgIHdpZHRoOiBmaXQtY29udGVudDtcclxuICAgICAgcGFkZGluZzogMTJweCAyNHB4O1xyXG4gICAgICBib3JkZXI6IDJweCBzb2xpZCAjMDAwO1xyXG4gICAgICBib3JkZXItcmFkaXVzOiA1MHB4O1xyXG4gICAgICBtYXJnaW46IDMycHggYXV0byAwIGF1dG87XHJcbiAgICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICAgICAgb3ZlcmZsb3c6IGhpZGRlbjtcclxufVxyXG5cclxuLmhlcm8tY29udGVudHMgPiBidXR0b246aG92ZXIge1xyXG4gICAgICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoMzIxZGVnLCBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZ2JhKDIyNiwwLDI1MCwxKSA1MCUsIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJnYmEoMjI5LDEyNCw0LDEpIDUwJSk7XHJcbn1cclxuXHJcbi8qKiBCLiBNRU5VICoqL1xyXG5cclxuLnNlY3Rpb24tdGl0bGUge1xyXG4gICAgICBmb250LXNpemU6IDQ4cHg7XHJcbiAgICAgIGZvbnQtd2VpZ2h0OiA3MDA7XHJcbiAgICAgIGZvbnQtZmFtaWx5OiAnR2VudGxlJywgc3lzdGVtLXVpLCBzYW5zLXNlcmlmO1xyXG4gICAgICBsZXR0ZXItc3BhY2luZzogMnB4O1xyXG4gICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbn1cclxuXHJcbi5tZW51ID4gLmRvbnV0LWNvbnQge1xyXG4gICAgICBkaXNwbGF5OiBncmlkO1xyXG4gICAgICBncmlkLXRlbXBsYXRlOiByZXBlYXQoMiwgMjYwcHgpIC8gcmVwZWF0KDMsIDI2MHB4KTtcclxuICAgICAgZ2FwOiA1MHB4O1xyXG59XHJcblxyXG4ubWVudSA+IC5kb251dC1jb250ID4gZGl2IHtcclxuICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgICAgIG92ZXJmbG93OiBoaWRkZW47XHJcbiAgICAgIGJvcmRlci1yYWRpdXM6IDM2cHg7XHJcbn1cclxuXHJcbi5tZW51ID4gLmRvbnV0LWNvbnQgPiBkaXYgPiBpbWcge1xyXG4gICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAgICBib3JkZXItcmFkaXVzOiAzNnB4O1xyXG4gICAgICBvYmplY3QtZml0OiBjb3ZlcjtcclxuICAgICAgdHJhbnNpdGlvbjogYWxsIDAuM3MgZWFzZS1pbi1vdXQ7XHJcbn1cclxuXHJcbi5tZW51ID4gLmRvbnV0LWNvbnQgPiBkaXYgPiBwIHtcclxuICAgICAgY29sb3I6ICNmZmY7XHJcbiAgICAgIGZvbnQtZmFtaWx5OiAnR2VudGxlJywgc3lzdGVtLXVpLCBzYW5zLXNlcmlmO1xyXG4gICAgICBmb250LXNpemU6IDJyZW07XHJcbiAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgICAgbGV0dGVyLXNwYWNpbmc6IDJweDtcclxuICAgICAgbGluZS1oZWlnaHQ6IDMycHg7XHJcbiAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICBwYWRkaW5nOiAwIDI0cHg7XHJcbiAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgICAgdG9wOiA5MCU7XHJcbiAgICAgIGxlZnQ6IDUwJTtcclxuICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgLTkwJSk7XHJcbiAgICAgIC13ZWJraXQtdGV4dC1zdHJva2Utd2lkdGg6IDFweDtcclxuICAgICAgLXdlYmtpdC10ZXh0LXN0cm9rZS1jb2xvcjogIzAwMDtcclxufVxyXG5cclxuLm1lbnUge1xyXG4gICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgICAgZ2FwOiAzNnB4O1xyXG4gICAgICBtYXJnaW46IDM2cHggMDtcclxufVxyXG5cclxuLm1lbnUgPiAuZG9udXQtY29udCA+IGRpdiA+IGltZzpob3ZlcntcclxuICAgICAgdHJhbnNmb3JtOiBzY2FsZSgxLjIpO1xyXG59XHJcblxyXG4vKiogTE9DQVRJT04gKiovXHJcblxyXG4ubG9jYXRpb24gPiBpZnJhbWUge1xyXG4gICAgICB3aWR0aDogNjAwcHg7XHJcbiAgICAgIGhlaWdodDogNDUwcHg7XHJcbiAgICAgIGJvcmRlcjogMDtcclxuICAgICAgbWFyZ2luLXRvcDogMzZweDtcclxufVxyXG5cclxuLmxvY2F0aW9uLCAuYWJvdXQtdXMge1xyXG4gICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgICAgbWFyZ2luOiA3MHB4IDA7XHJcbn1cclxuXHJcbi8qKiBBQk9VVCBVUyAqKi9cclxuXHJcbi5hYm91dC11cy1jb250ID4gcCB7XHJcbiAgICAgIG1heC13aWR0aDogODAwcHg7XHJcbiAgICAgIHdvcmQtd3JhcDogbm9ybWFsO1xyXG4gICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbn1cclxuXHJcbi8qKiBGT09URVIgKiovXHJcblxyXG5mb290ZXIgPiAuaGYtY29udGFpbmVyID4gYSB7XHJcbiAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbn1cclxuXHJcbmZvb3RlciBhLCBmb290ZXIgcCB7XHJcbiAgICAgIGNvbG9yOiAjMDAwO1xyXG4gICAgICBmb250LWZhbWlseTogJ3N5c3RlbS11aScsIHNhbnMtc2VyaWY7XHJcbiAgICAgIGZvbnQtd2VpZ2h0OiA2MDA7XHJcbn1cclxuXHJcbmZvb3RlciA+IC5oZi1jb250YWluZXIgPiB1bCB7XHJcbiAgICAgIGhlaWdodDogOTBweDtcclxuICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICAgICAgZmxleC13cmFwOiB3cmFwO1xyXG4gICAgICBmbGV4LWJhc2lzOiA1MCU7XHJcbiAgICAgIGFsaWduLWNvbnRlbnQ6IHNwYWNlLWFyb3VuZDtcclxufVxyXG5cclxuZm9vdGVyID4gLmhmLWNvbnRhaW5lciA+IGRpdiA+IHVsIGxpIGltZyB7XHJcbiAgICAgIHdpZHRoOiA0MnB4O1xyXG4gICAgICBoZWlnaHQ6IDQycHg7XHJcbn1cclxuXHJcbmZvb3RlciA+IC5oZi1jb250YWluZXIgPiBkaXYgPiB1bCB7XHJcbiAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgIGZsZXgtd3JhcDogd3JhcDtcclxuICAgICAgZ2FwOiAxMnB4O1xyXG59XHJcblxyXG5mb290ZXIgPiAuaGYtY29udGFpbmVyID4gZGl2ID4gdWw6Zmlyc3QtY2hpbGQge1xyXG4gICAgICBtYXJnaW4tYm90dG9tOiAxOHB4O1xyXG59XHJcblxyXG4ubGFiZWwge1xyXG4gICAgICBmbGV4OiAwIDAgMTAwJTtcclxufVxyXG5cclxuZm9vdGVyID4gLmhmLWNvbnRhaW5lciB7XHJcbiAgICAgIG1heC13aWR0aDogMTQ0MHB4O1xyXG4gICAgICBtYXJnaW46IDAgYXV0bztcclxuICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgZmxleC13cmFwOiB3cmFwO1xyXG4gICAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XHJcbiAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbn1cclxuXHJcbmZvb3RlciB7XHJcbiAgICAgIGJhY2tncm91bmQtY29sb3I6ICNlM2JjOWE7XHJcbiAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICBwYWRkaW5nOiA1MnB4O1xyXG59XHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcbmAsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vc3JjL3N0eWxlLmNzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFBQTtNQUNNLG1CQUFtQjtNQUNuQiw0REFBNEM7TUFDNUMsa0JBQWtCO0FBQ3hCOztBQUVBO01BQ00sc0JBQXNCO01BQ3RCLFNBQVM7TUFDVCxVQUFVO01BQ1YsZ0JBQWdCO0FBQ3RCOztBQUVBO01BQ00sYUFBYTtNQUNiLGFBQWE7TUFDYixzQkFBc0I7TUFDdEIsOEJBQThCO0FBQ3BDOztBQUVBLGFBQWE7O0FBRWI7TUFDTSxXQUFXO01BQ1gsWUFBWTtNQUNaLGVBQWU7QUFDckI7O0FBRUE7TUFDTSxxQkFBcUI7QUFDM0I7O0FBRUE7TUFDTSw0Q0FBNEM7TUFDNUMsZUFBZTtNQUNmLGtCQUFrQjtNQUNsQixtQkFBbUI7TUFDbkI7O3VEQUVpRDtNQUNqRCw2QkFBNkI7TUFDN0Isb0NBQW9DO0FBQzFDOztBQUVBO01BQ00sZ0JBQWdCO01BQ2hCLFlBQVk7TUFDWiw0Q0FBNEM7TUFDNUMsZUFBZTtNQUNmLHFCQUFxQjtNQUNyQixpQkFBaUI7TUFDakIsZUFBZTtNQUNmLG9CQUFvQjtBQUMxQjs7QUFFQTtNQUNNLGFBQWE7TUFDYix1QkFBdUI7TUFDdkIsbUJBQW1CO01BQ25CLFNBQVM7QUFDZjs7QUFFQTtNQUNNLGlCQUFpQjtNQUNqQixlQUFlO01BQ2YsY0FBYztNQUNkLGFBQWE7TUFDYiw4QkFBOEI7TUFDOUIsbUJBQW1CO0FBQ3pCOztBQUVBO01BQ00sV0FBVztNQUNYLHlCQUF5QjtBQUMvQjs7QUFFQTtNQUNNOzt1REFFaUQ7TUFDakQsNkJBQTZCO01BQzdCLG9DQUFvQztNQUNwQyxxQkFBcUI7QUFDM0I7O0FBRUEsY0FBYzs7QUFFZCxjQUFjOztBQUVkO01BQ00sV0FBVztNQUNYLGFBQWE7TUFDYixpQkFBaUI7TUFDakIsdUJBQXVCO01BQ3ZCLGtCQUFrQjtBQUN4Qjs7QUFFQTtNQUNNLGFBQWE7QUFDbkI7O0FBRUE7TUFDTSxrQkFBa0I7TUFDbEIsb0NBQW9DO01BQ3BDLG1CQUFtQjtNQUNuQix5Q0FBeUM7TUFDekMsNEJBQTRCO01BQzVCLGtCQUFrQjtNQUNsQixRQUFRO01BQ1IsU0FBUztNQUNULGdDQUFnQztNQUNoQyxhQUFhO01BQ2Isc0JBQXNCO01BQ3RCLHVCQUF1QjtNQUN2QixtQkFBbUI7TUFDbkIsa0JBQWtCO01BQ2xCLG9DQUFvQztBQUMxQzs7QUFFQTtNQUNNLDRDQUE0QztNQUM1QyxnQkFBZ0I7TUFDaEIsbUNBQW1DO01BQ25DLGlCQUFpQjtNQUNqQixtQkFBbUI7QUFDekI7O0FBRUE7TUFDTSw0Q0FBNEM7TUFDNUMsaUJBQWlCO01BQ2pCLGNBQWM7QUFDcEI7O0FBRUE7TUFDTSxrQ0FBa0M7TUFDbEMsZ0JBQWdCO01BQ2hCLGVBQWU7TUFDZixXQUFXO01BQ1g7O3NEQUVnRDtNQUNoRCxrQkFBa0I7TUFDbEIsa0JBQWtCO01BQ2xCLHNCQUFzQjtNQUN0QixtQkFBbUI7TUFDbkIsd0JBQXdCO01BQ3hCLGVBQWU7TUFDZixnQkFBZ0I7QUFDdEI7O0FBRUE7TUFDTTs7c0RBRWdEO0FBQ3REOztBQUVBLGNBQWM7O0FBRWQ7TUFDTSxlQUFlO01BQ2YsZ0JBQWdCO01BQ2hCLDRDQUE0QztNQUM1QyxtQkFBbUI7TUFDbkIsa0JBQWtCO0FBQ3hCOztBQUVBO01BQ00sYUFBYTtNQUNiLGtEQUFrRDtNQUNsRCxTQUFTO0FBQ2Y7O0FBRUE7TUFDTSxrQkFBa0I7TUFDbEIsZUFBZTtNQUNmLGdCQUFnQjtNQUNoQixtQkFBbUI7QUFDekI7O0FBRUE7TUFDTSxXQUFXO01BQ1gsWUFBWTtNQUNaLG1CQUFtQjtNQUNuQixpQkFBaUI7TUFDakIsZ0NBQWdDO0FBQ3RDOztBQUVBO01BQ00sV0FBVztNQUNYLDRDQUE0QztNQUM1QyxlQUFlO01BQ2Ysa0JBQWtCO01BQ2xCLG1CQUFtQjtNQUNuQixpQkFBaUI7TUFDakIsV0FBVztNQUNYLGVBQWU7TUFDZixrQkFBa0I7TUFDbEIsUUFBUTtNQUNSLFNBQVM7TUFDVCxnQ0FBZ0M7TUFDaEMsOEJBQThCO01BQzlCLCtCQUErQjtBQUNyQzs7QUFFQTtNQUNNLGFBQWE7TUFDYixzQkFBc0I7TUFDdEIsdUJBQXVCO01BQ3ZCLG1CQUFtQjtNQUNuQixTQUFTO01BQ1QsY0FBYztBQUNwQjs7QUFFQTtNQUNNLHFCQUFxQjtBQUMzQjs7QUFFQSxlQUFlOztBQUVmO01BQ00sWUFBWTtNQUNaLGFBQWE7TUFDYixTQUFTO01BQ1QsZ0JBQWdCO0FBQ3RCOztBQUVBO01BQ00sYUFBYTtNQUNiLHNCQUFzQjtNQUN0Qix1QkFBdUI7TUFDdkIsbUJBQW1CO01BQ25CLGNBQWM7QUFDcEI7O0FBRUEsZUFBZTs7QUFFZjtNQUNNLGdCQUFnQjtNQUNoQixpQkFBaUI7TUFDakIsa0JBQWtCO0FBQ3hCOztBQUVBLGFBQWE7O0FBRWI7TUFDTSxhQUFhO01BQ2Isc0JBQXNCO01BQ3RCLG1CQUFtQjtBQUN6Qjs7QUFFQTtNQUNNLFdBQVc7TUFDWCxvQ0FBb0M7TUFDcEMsZ0JBQWdCO0FBQ3RCOztBQUVBO01BQ00sWUFBWTtNQUNaLGFBQWE7TUFDYixzQkFBc0I7TUFDdEIsZUFBZTtNQUNmLGVBQWU7TUFDZiwyQkFBMkI7QUFDakM7O0FBRUE7TUFDTSxXQUFXO01BQ1gsWUFBWTtBQUNsQjs7QUFFQTtNQUNNLGFBQWE7TUFDYixlQUFlO01BQ2YsU0FBUztBQUNmOztBQUVBO01BQ00sbUJBQW1CO0FBQ3pCOztBQUVBO01BQ00sY0FBYztBQUNwQjs7QUFFQTtNQUNNLGlCQUFpQjtNQUNqQixjQUFjO01BQ2QsYUFBYTtNQUNiLGVBQWU7TUFDZiw4QkFBOEI7TUFDOUIsbUJBQW1CO0FBQ3pCOztBQUVBO01BQ00seUJBQXlCO01BQ3pCLFdBQVc7TUFDWCxhQUFhO0FBQ25CXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIkBmb250LWZhY2Uge1xcclxcbiAgICAgIGZvbnQtZmFtaWx5OiBHZW50bGU7XFxyXFxuICAgICAgc3JjOiB1cmwoZm9udHMvR2VudGxlLndvZmYyKSBmb3JtYXQoJ3dvZmYyJyk7XFxyXFxuICAgICAgZm9udC1zdHlsZTogbm9ybWFsO1xcclxcbn1cXHJcXG5cXHJcXG4qIHtcXHJcXG4gICAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcclxcbiAgICAgIG1hcmdpbjogMDtcXHJcXG4gICAgICBwYWRkaW5nOiAwO1xcclxcbiAgICAgIGxpc3Qtc3R5bGU6IG5vbmU7XFxyXFxufVxcclxcblxcclxcbmJvZHkge1xcclxcbiAgICAgIGhlaWdodDogMTAwdmg7XFxyXFxuICAgICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcclxcbiAgICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXHJcXG59XFxyXFxuXFxyXFxuLyoqIEhFQURFUiAqKi9cXHJcXG5cXHJcXG4jbG9nbyB7XFxyXFxuICAgICAgd2lkdGg6IDkwcHg7XFxyXFxuICAgICAgaGVpZ2h0OiA5MHB4O1xcclxcbiAgICAgIGN1cnNvcjogcG9pbnRlcjtcXHJcXG59XFxyXFxuXFxyXFxuYSB7XFxyXFxuICAgICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xcclxcbn1cXHJcXG5cXHJcXG4udGl0bGUge1xcclxcbiAgICAgIGZvbnQtZmFtaWx5OiAnR2VudGxlJywgc3lzdGVtLXVpLCBzYW5zLXNlcmlmO1xcclxcbiAgICAgIGZvbnQtc2l6ZTogMzZweDtcXHJcXG4gICAgICB3aWR0aDogZml0LWNvbnRlbnQ7XFxyXFxuICAgICAgaGVpZ2h0OiBmaXQtY29udGVudDtcXHJcXG4gICAgICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoMzIxZGVnLCBcXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJnYmEoMjI2LDAsMjUwLDEpIDAlLCBcXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJnYmEoMjI5LDEyNCw0LDEpIDEwMCUpO1xcclxcbiAgICAgIC13ZWJraXQtYmFja2dyb3VuZC1jbGlwOiB0ZXh0O1xcclxcbiAgICAgIC13ZWJraXQtdGV4dC1maWxsLWNvbG9yOiB0cmFuc3BhcmVudDtcXHJcXG59XFxyXFxuXFxyXFxubmF2ID4gYnV0dG9uIHtcXHJcXG4gICAgICBiYWNrZ3JvdW5kOiBub25lO1xcclxcbiAgICAgIGJvcmRlcjogbm9uZTtcXHJcXG4gICAgICBmb250LWZhbWlseTogJ0dlbnRsZScsIHN5c3RlbS11aSwgc2Fucy1zZXJpZjtcXHJcXG4gICAgICBmb250LXNpemU6IDE4cHg7XFxyXFxuICAgICAgbGV0dGVyLXNwYWNpbmc6IDEuNXB4O1xcclxcbiAgICAgIHBhZGRpbmc6IDhweCAzNnB4O1xcclxcbiAgICAgIGN1cnNvcjogcG9pbnRlcjtcXHJcXG4gICAgICB0cmFuc2l0aW9uOiBhbGwgMC4zcztcXHJcXG59XFxyXFxuXFxyXFxuaGVhZGVyID4gZGl2ID4gYSB7XFxyXFxuICAgICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXHJcXG4gICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbiAgICAgIGdhcDogMTZweDtcXHJcXG59XFxyXFxuXFxyXFxuaGVhZGVyID4gLmhmLWNvbnRhaW5lciB7XFxyXFxuICAgICAgbWF4LXdpZHRoOiAxNDQwcHg7XFxyXFxuICAgICAgcGFkZGluZzogMTJweCAwO1xcclxcbiAgICAgIG1hcmdpbjogMCBhdXRvO1xcclxcbiAgICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcclxcbiAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxufVxcclxcblxcclxcbmhlYWRlciB7XFxyXFxuICAgICAgd2lkdGg6IDEwMCU7XFxyXFxuICAgICAgYmFja2dyb3VuZC1jb2xvcjogI2UzYmM5YTtcXHJcXG59XFxyXFxuXFxyXFxubmF2ID4gYnV0dG9uOmhvdmVyLCBuYXYgPiBidXR0b246YWN0aXZlIHtcXHJcXG4gICAgICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoMzIxZGVnLCBcXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJnYmEoMjI2LDAsMjUwLDEpIDAlLCBcXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJnYmEoMjI5LDEyNCw0LDEpIDEwMCUpO1xcclxcbiAgICAgIC13ZWJraXQtYmFja2dyb3VuZC1jbGlwOiB0ZXh0O1xcclxcbiAgICAgIC13ZWJraXQtdGV4dC1maWxsLWNvbG9yOiB0cmFuc3BhcmVudDtcXHJcXG4gICAgICB0cmFuc2Zvcm06IHNjYWxlKDEuMyk7XFxyXFxufVxcclxcblxcclxcbi8qKiBDT05URU5UICoqL1xcclxcblxcclxcbi8qKiBBLiBIRVJPICoqL1xcclxcblxcclxcbiNkb251dC1iZyB7XFxyXFxuICAgICAgd2lkdGg6IDEwMCU7XFxyXFxuICAgICAgaGVpZ2h0OiA2OTZweDtcXHJcXG4gICAgICBvYmplY3QtZml0OiBjb3ZlcjtcXHJcXG4gICAgICBmaWx0ZXI6IGJyaWdodG5lc3MoNjAlKTtcXHJcXG4gICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XFxyXFxufSBcXHJcXG5cXHJcXG4uaGVybyB7XFxyXFxuICAgICAgaGVpZ2h0OiA2OTZweDtcXHJcXG59XFxyXFxuXFxyXFxuLmhlcm8tY29udGVudHMge1xcclxcbiAgICAgIHBhZGRpbmc6IDQ4cHggMzZweDtcXHJcXG4gICAgICBiYWNrZ3JvdW5kOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuNSk7XFxyXFxuICAgICAgYm9yZGVyLXJhZGl1czogMTZweDtcXHJcXG4gICAgICBib3gtc2hhZG93OiAwIDRweCAzMHB4IHJnYmEoMCwgMCwgMCwgMC4xKTtcXHJcXG4gICAgICBiYWNrZHJvcC1maWx0ZXI6IGJsdXIoNS42cHgpO1xcclxcbiAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXHJcXG4gICAgICB0b3A6IDUwJTtcXHJcXG4gICAgICBsZWZ0OiA1MCU7XFxyXFxuICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgLTUwJSk7XFxyXFxuICAgICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcclxcbiAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcclxcbiAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xcclxcbiAgICAgIC13ZWJraXQtYmFja2Ryb3AtZmlsdGVyOiBibHVyKDUuNnB4KTtcXHJcXG59XFxyXFxuXFxyXFxuLmhlcm8tY29udGVudHMgPiBwOmZpcnN0LWNoaWxkIHtcXHJcXG4gICAgICBmb250LWZhbWlseTogJ0dlbnRsZScsIHN5c3RlbS11aSwgc2Fucy1zZXJpZjtcXHJcXG4gICAgICBmb250LXdlaWdodDogNzAwO1xcclxcbiAgICAgIGZvbnQtc2l6ZTogY2xhbXAoMS41cmVtLCA1dncsIDVyZW0pO1xcclxcbiAgICAgIGxpbmUtaGVpZ2h0OiA5MHB4O1xcclxcbiAgICAgIGxldHRlci1zcGFjaW5nOiA0cHg7XFxyXFxufVxcclxcblxcclxcbi5oZXJvLWNvbnRlbnRzID4gcDpsYXN0LW9mLXR5cGUge1xcclxcbiAgICAgIGZvbnQtZmFtaWx5OiAnR2VudGxlJywgc3lzdGVtLXVpLCBzYW5zLXNlcmlmO1xcclxcbiAgICAgIGZvbnQtc2l6ZTogMS4zcmVtO1xcclxcbiAgICAgIG1hcmdpbjogMCA3NHB4O1xcclxcbn1cXHJcXG5cXHJcXG4uaGVyby1jb250ZW50cyA+IGJ1dHRvbiB7XFxyXFxuICAgICAgZm9udC1mYW1pbHk6IHN5c3RlbS11aSwgc2Fucy1zZXJpZjtcXHJcXG4gICAgICBmb250LXdlaWdodDogNzAwO1xcclxcbiAgICAgIGZvbnQtc2l6ZTogMXJlbTtcXHJcXG4gICAgICBjb2xvcjogI2ZmZjtcXHJcXG4gICAgICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoMzIxZGVnLCBcXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJnYmEoMjI2LDAsMjUwLDEpIDAlLCBcXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJnYmEoMjI5LDEyNCw0LDEpIDkwJSk7XFxyXFxuICAgICAgd2lkdGg6IGZpdC1jb250ZW50O1xcclxcbiAgICAgIHBhZGRpbmc6IDEycHggMjRweDtcXHJcXG4gICAgICBib3JkZXI6IDJweCBzb2xpZCAjMDAwO1xcclxcbiAgICAgIGJvcmRlci1yYWRpdXM6IDUwcHg7XFxyXFxuICAgICAgbWFyZ2luOiAzMnB4IGF1dG8gMCBhdXRvO1xcclxcbiAgICAgIGN1cnNvcjogcG9pbnRlcjtcXHJcXG4gICAgICBvdmVyZmxvdzogaGlkZGVuO1xcclxcbn1cXHJcXG5cXHJcXG4uaGVyby1jb250ZW50cyA+IGJ1dHRvbjpob3ZlciB7XFxyXFxuICAgICAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KDMyMWRlZywgXFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZ2JhKDIyNiwwLDI1MCwxKSA1MCUsIFxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmdiYSgyMjksMTI0LDQsMSkgNTAlKTtcXHJcXG59XFxyXFxuXFxyXFxuLyoqIEIuIE1FTlUgKiovXFxyXFxuXFxyXFxuLnNlY3Rpb24tdGl0bGUge1xcclxcbiAgICAgIGZvbnQtc2l6ZTogNDhweDtcXHJcXG4gICAgICBmb250LXdlaWdodDogNzAwO1xcclxcbiAgICAgIGZvbnQtZmFtaWx5OiAnR2VudGxlJywgc3lzdGVtLXVpLCBzYW5zLXNlcmlmO1xcclxcbiAgICAgIGxldHRlci1zcGFjaW5nOiAycHg7XFxyXFxuICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xcclxcbn1cXHJcXG5cXHJcXG4ubWVudSA+IC5kb251dC1jb250IHtcXHJcXG4gICAgICBkaXNwbGF5OiBncmlkO1xcclxcbiAgICAgIGdyaWQtdGVtcGxhdGU6IHJlcGVhdCgyLCAyNjBweCkgLyByZXBlYXQoMywgMjYwcHgpO1xcclxcbiAgICAgIGdhcDogNTBweDtcXHJcXG59XFxyXFxuXFxyXFxuLm1lbnUgPiAuZG9udXQtY29udCA+IGRpdiB7XFxyXFxuICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xcclxcbiAgICAgIGN1cnNvcjogcG9pbnRlcjtcXHJcXG4gICAgICBvdmVyZmxvdzogaGlkZGVuO1xcclxcbiAgICAgIGJvcmRlci1yYWRpdXM6IDM2cHg7XFxyXFxufVxcclxcblxcclxcbi5tZW51ID4gLmRvbnV0LWNvbnQgPiBkaXYgPiBpbWcge1xcclxcbiAgICAgIHdpZHRoOiAxMDAlO1xcclxcbiAgICAgIGhlaWdodDogMTAwJTtcXHJcXG4gICAgICBib3JkZXItcmFkaXVzOiAzNnB4O1xcclxcbiAgICAgIG9iamVjdC1maXQ6IGNvdmVyO1xcclxcbiAgICAgIHRyYW5zaXRpb246IGFsbCAwLjNzIGVhc2UtaW4tb3V0O1xcclxcbn1cXHJcXG5cXHJcXG4ubWVudSA+IC5kb251dC1jb250ID4gZGl2ID4gcCB7XFxyXFxuICAgICAgY29sb3I6ICNmZmY7XFxyXFxuICAgICAgZm9udC1mYW1pbHk6ICdHZW50bGUnLCBzeXN0ZW0tdWksIHNhbnMtc2VyaWY7XFxyXFxuICAgICAgZm9udC1zaXplOiAycmVtO1xcclxcbiAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXHJcXG4gICAgICBsZXR0ZXItc3BhY2luZzogMnB4O1xcclxcbiAgICAgIGxpbmUtaGVpZ2h0OiAzMnB4O1xcclxcbiAgICAgIHdpZHRoOiAxMDAlO1xcclxcbiAgICAgIHBhZGRpbmc6IDAgMjRweDtcXHJcXG4gICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxyXFxuICAgICAgdG9wOiA5MCU7XFxyXFxuICAgICAgbGVmdDogNTAlO1xcclxcbiAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIC05MCUpO1xcclxcbiAgICAgIC13ZWJraXQtdGV4dC1zdHJva2Utd2lkdGg6IDFweDtcXHJcXG4gICAgICAtd2Via2l0LXRleHQtc3Ryb2tlLWNvbG9yOiAjMDAwO1xcclxcbn1cXHJcXG5cXHJcXG4ubWVudSB7XFxyXFxuICAgICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcclxcbiAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcclxcbiAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuICAgICAgZ2FwOiAzNnB4O1xcclxcbiAgICAgIG1hcmdpbjogMzZweCAwO1xcclxcbn1cXHJcXG5cXHJcXG4ubWVudSA+IC5kb251dC1jb250ID4gZGl2ID4gaW1nOmhvdmVye1xcclxcbiAgICAgIHRyYW5zZm9ybTogc2NhbGUoMS4yKTtcXHJcXG59XFxyXFxuXFxyXFxuLyoqIExPQ0FUSU9OICoqL1xcclxcblxcclxcbi5sb2NhdGlvbiA+IGlmcmFtZSB7XFxyXFxuICAgICAgd2lkdGg6IDYwMHB4O1xcclxcbiAgICAgIGhlaWdodDogNDUwcHg7XFxyXFxuICAgICAgYm9yZGVyOiAwO1xcclxcbiAgICAgIG1hcmdpbi10b3A6IDM2cHg7XFxyXFxufVxcclxcblxcclxcbi5sb2NhdGlvbiwgLmFib3V0LXVzIHtcXHJcXG4gICAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxyXFxuICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxyXFxuICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG4gICAgICBtYXJnaW46IDcwcHggMDtcXHJcXG59XFxyXFxuXFxyXFxuLyoqIEFCT1VUIFVTICoqL1xcclxcblxcclxcbi5hYm91dC11cy1jb250ID4gcCB7XFxyXFxuICAgICAgbWF4LXdpZHRoOiA4MDBweDtcXHJcXG4gICAgICB3b3JkLXdyYXA6IG5vcm1hbDtcXHJcXG4gICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxyXFxufVxcclxcblxcclxcbi8qKiBGT09URVIgKiovXFxyXFxuXFxyXFxuZm9vdGVyID4gLmhmLWNvbnRhaW5lciA+IGEge1xcclxcbiAgICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXHJcXG4gICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbn1cXHJcXG5cXHJcXG5mb290ZXIgYSwgZm9vdGVyIHAge1xcclxcbiAgICAgIGNvbG9yOiAjMDAwO1xcclxcbiAgICAgIGZvbnQtZmFtaWx5OiAnc3lzdGVtLXVpJywgc2Fucy1zZXJpZjtcXHJcXG4gICAgICBmb250LXdlaWdodDogNjAwO1xcclxcbn1cXHJcXG5cXHJcXG5mb290ZXIgPiAuaGYtY29udGFpbmVyID4gdWwge1xcclxcbiAgICAgIGhlaWdodDogOTBweDtcXHJcXG4gICAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxyXFxuICAgICAgZmxleC13cmFwOiB3cmFwO1xcclxcbiAgICAgIGZsZXgtYmFzaXM6IDUwJTtcXHJcXG4gICAgICBhbGlnbi1jb250ZW50OiBzcGFjZS1hcm91bmQ7XFxyXFxufVxcclxcblxcclxcbmZvb3RlciA+IC5oZi1jb250YWluZXIgPiBkaXYgPiB1bCBsaSBpbWcge1xcclxcbiAgICAgIHdpZHRoOiA0MnB4O1xcclxcbiAgICAgIGhlaWdodDogNDJweDtcXHJcXG59XFxyXFxuXFxyXFxuZm9vdGVyID4gLmhmLWNvbnRhaW5lciA+IGRpdiA+IHVsIHtcXHJcXG4gICAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICAgIGZsZXgtd3JhcDogd3JhcDtcXHJcXG4gICAgICBnYXA6IDEycHg7XFxyXFxufVxcclxcblxcclxcbmZvb3RlciA+IC5oZi1jb250YWluZXIgPiBkaXYgPiB1bDpmaXJzdC1jaGlsZCB7XFxyXFxuICAgICAgbWFyZ2luLWJvdHRvbTogMThweDtcXHJcXG59XFxyXFxuXFxyXFxuLmxhYmVsIHtcXHJcXG4gICAgICBmbGV4OiAwIDAgMTAwJTtcXHJcXG59XFxyXFxuXFxyXFxuZm9vdGVyID4gLmhmLWNvbnRhaW5lciB7XFxyXFxuICAgICAgbWF4LXdpZHRoOiAxNDQwcHg7XFxyXFxuICAgICAgbWFyZ2luOiAwIGF1dG87XFxyXFxuICAgICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAgICBmbGV4LXdyYXA6IHdyYXA7XFxyXFxuICAgICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcclxcbiAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxufVxcclxcblxcclxcbmZvb3RlciB7XFxyXFxuICAgICAgYmFja2dyb3VuZC1jb2xvcjogI2UzYmM5YTtcXHJcXG4gICAgICB3aWR0aDogMTAwJTtcXHJcXG4gICAgICBwYWRkaW5nOiA1MnB4O1xcclxcbn1cXHJcXG5cXHJcXG5cXHJcXG5cXHJcXG5cXHJcXG5cXHJcXG5cXHJcXG5cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qXG4gIE1JVCBMaWNlbnNlIGh0dHA6Ly93d3cub3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvbWl0LWxpY2Vuc2UucGhwXG4gIEF1dGhvciBUb2JpYXMgS29wcGVycyBAc29rcmFcbiovXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKSB7XG4gIHZhciBsaXN0ID0gW107XG5cbiAgLy8gcmV0dXJuIHRoZSBsaXN0IG9mIG1vZHVsZXMgYXMgY3NzIHN0cmluZ1xuICBsaXN0LnRvU3RyaW5nID0gZnVuY3Rpb24gdG9TdHJpbmcoKSB7XG4gICAgcmV0dXJuIHRoaXMubWFwKGZ1bmN0aW9uIChpdGVtKSB7XG4gICAgICB2YXIgY29udGVudCA9IFwiXCI7XG4gICAgICB2YXIgbmVlZExheWVyID0gdHlwZW9mIGl0ZW1bNV0gIT09IFwidW5kZWZpbmVkXCI7XG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIik7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpO1xuICAgICAgfVxuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIik7XG4gICAgICB9XG4gICAgICBjb250ZW50ICs9IGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcoaXRlbSk7XG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIHJldHVybiBjb250ZW50O1xuICAgIH0pLmpvaW4oXCJcIik7XG4gIH07XG5cbiAgLy8gaW1wb3J0IGEgbGlzdCBvZiBtb2R1bGVzIGludG8gdGhlIGxpc3RcbiAgbGlzdC5pID0gZnVuY3Rpb24gaShtb2R1bGVzLCBtZWRpYSwgZGVkdXBlLCBzdXBwb3J0cywgbGF5ZXIpIHtcbiAgICBpZiAodHlwZW9mIG1vZHVsZXMgPT09IFwic3RyaW5nXCIpIHtcbiAgICAgIG1vZHVsZXMgPSBbW251bGwsIG1vZHVsZXMsIHVuZGVmaW5lZF1dO1xuICAgIH1cbiAgICB2YXIgYWxyZWFkeUltcG9ydGVkTW9kdWxlcyA9IHt9O1xuICAgIGlmIChkZWR1cGUpIHtcbiAgICAgIGZvciAodmFyIGsgPSAwOyBrIDwgdGhpcy5sZW5ndGg7IGsrKykge1xuICAgICAgICB2YXIgaWQgPSB0aGlzW2tdWzBdO1xuICAgICAgICBpZiAoaWQgIT0gbnVsbCkge1xuICAgICAgICAgIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaWRdID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgICBmb3IgKHZhciBfayA9IDA7IF9rIDwgbW9kdWxlcy5sZW5ndGg7IF9rKyspIHtcbiAgICAgIHZhciBpdGVtID0gW10uY29uY2F0KG1vZHVsZXNbX2tdKTtcbiAgICAgIGlmIChkZWR1cGUgJiYgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpdGVtWzBdXSkge1xuICAgICAgICBjb250aW51ZTtcbiAgICAgIH1cbiAgICAgIGlmICh0eXBlb2YgbGF5ZXIgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgaWYgKHR5cGVvZiBpdGVtWzVdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAobWVkaWEpIHtcbiAgICAgICAgaWYgKCFpdGVtWzJdKSB7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKHN1cHBvcnRzKSB7XG4gICAgICAgIGlmICghaXRlbVs0XSkge1xuICAgICAgICAgIGl0ZW1bNF0gPSBcIlwiLmNvbmNhdChzdXBwb3J0cyk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzRdID0gc3VwcG9ydHM7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGxpc3QucHVzaChpdGVtKTtcbiAgICB9XG4gIH07XG4gIHJldHVybiBsaXN0O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAodXJsLCBvcHRpb25zKSB7XG4gIGlmICghb3B0aW9ucykge1xuICAgIG9wdGlvbnMgPSB7fTtcbiAgfVxuICBpZiAoIXVybCkge1xuICAgIHJldHVybiB1cmw7XG4gIH1cbiAgdXJsID0gU3RyaW5nKHVybC5fX2VzTW9kdWxlID8gdXJsLmRlZmF1bHQgOiB1cmwpO1xuXG4gIC8vIElmIHVybCBpcyBhbHJlYWR5IHdyYXBwZWQgaW4gcXVvdGVzLCByZW1vdmUgdGhlbVxuICBpZiAoL15bJ1wiXS4qWydcIl0kLy50ZXN0KHVybCkpIHtcbiAgICB1cmwgPSB1cmwuc2xpY2UoMSwgLTEpO1xuICB9XG4gIGlmIChvcHRpb25zLmhhc2gpIHtcbiAgICB1cmwgKz0gb3B0aW9ucy5oYXNoO1xuICB9XG5cbiAgLy8gU2hvdWxkIHVybCBiZSB3cmFwcGVkP1xuICAvLyBTZWUgaHR0cHM6Ly9kcmFmdHMuY3Nzd2cub3JnL2Nzcy12YWx1ZXMtMy8jdXJsc1xuICBpZiAoL1tcIicoKSBcXHRcXG5dfCglMjApLy50ZXN0KHVybCkgfHwgb3B0aW9ucy5uZWVkUXVvdGVzKSB7XG4gICAgcmV0dXJuIFwiXFxcIlwiLmNvbmNhdCh1cmwucmVwbGFjZSgvXCIvZywgJ1xcXFxcIicpLnJlcGxhY2UoL1xcbi9nLCBcIlxcXFxuXCIpLCBcIlxcXCJcIik7XG4gIH1cbiAgcmV0dXJuIHVybDtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0ZW0pIHtcbiAgdmFyIGNvbnRlbnQgPSBpdGVtWzFdO1xuICB2YXIgY3NzTWFwcGluZyA9IGl0ZW1bM107XG4gIGlmICghY3NzTWFwcGluZykge1xuICAgIHJldHVybiBjb250ZW50O1xuICB9XG4gIGlmICh0eXBlb2YgYnRvYSA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgdmFyIGJhc2U2NCA9IGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KGNzc01hcHBpbmcpKSkpO1xuICAgIHZhciBkYXRhID0gXCJzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtjaGFyc2V0PXV0Zi04O2Jhc2U2NCxcIi5jb25jYXQoYmFzZTY0KTtcbiAgICB2YXIgc291cmNlTWFwcGluZyA9IFwiLyojIFwiLmNvbmNhdChkYXRhLCBcIiAqL1wiKTtcbiAgICByZXR1cm4gW2NvbnRlbnRdLmNvbmNhdChbc291cmNlTWFwcGluZ10pLmpvaW4oXCJcXG5cIik7XG4gIH1cbiAgcmV0dXJuIFtjb250ZW50XS5qb2luKFwiXFxuXCIpO1xufTsiLCJcbiAgICAgIGltcG9ydCBBUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgIGltcG9ydCBkb21BUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydEZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qc1wiO1xuICAgICAgaW1wb3J0IHNldEF0dHJpYnV0ZXMgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRTdHlsZUVsZW1lbnQgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanNcIjtcbiAgICAgIGltcG9ydCBzdHlsZVRhZ1RyYW5zZm9ybUZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanNcIjtcbiAgICAgIGltcG9ydCBjb250ZW50LCAqIGFzIG5hbWVkRXhwb3J0IGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUuY3NzXCI7XG4gICAgICBcbiAgICAgIFxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtID0gc3R5bGVUYWdUcmFuc2Zvcm1Gbjtcbm9wdGlvbnMuc2V0QXR0cmlidXRlcyA9IHNldEF0dHJpYnV0ZXM7XG5vcHRpb25zLmluc2VydCA9IGluc2VydEZuLmJpbmQobnVsbCwgXCJoZWFkXCIpO1xub3B0aW9ucy5kb21BUEkgPSBkb21BUEk7XG5vcHRpb25zLmluc2VydFN0eWxlRWxlbWVudCA9IGluc2VydFN0eWxlRWxlbWVudDtcblxudmFyIHVwZGF0ZSA9IEFQSShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbmV4cG9ydCAqIGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUuY3NzXCI7XG4gICAgICAgZXhwb3J0IGRlZmF1bHQgY29udGVudCAmJiBjb250ZW50LmxvY2FscyA/IGNvbnRlbnQubG9jYWxzIDogdW5kZWZpbmVkO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBzdHlsZXNJbkRPTSA9IFtdO1xuZnVuY3Rpb24gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcikge1xuICB2YXIgcmVzdWx0ID0gLTE7XG4gIGZvciAodmFyIGkgPSAwOyBpIDwgc3R5bGVzSW5ET00ubGVuZ3RoOyBpKyspIHtcbiAgICBpZiAoc3R5bGVzSW5ET01baV0uaWRlbnRpZmllciA9PT0gaWRlbnRpZmllcikge1xuICAgICAgcmVzdWx0ID0gaTtcbiAgICAgIGJyZWFrO1xuICAgIH1cbiAgfVxuICByZXR1cm4gcmVzdWx0O1xufVxuZnVuY3Rpb24gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpIHtcbiAgdmFyIGlkQ291bnRNYXAgPSB7fTtcbiAgdmFyIGlkZW50aWZpZXJzID0gW107XG4gIGZvciAodmFyIGkgPSAwOyBpIDwgbGlzdC5sZW5ndGg7IGkrKykge1xuICAgIHZhciBpdGVtID0gbGlzdFtpXTtcbiAgICB2YXIgaWQgPSBvcHRpb25zLmJhc2UgPyBpdGVtWzBdICsgb3B0aW9ucy5iYXNlIDogaXRlbVswXTtcbiAgICB2YXIgY291bnQgPSBpZENvdW50TWFwW2lkXSB8fCAwO1xuICAgIHZhciBpZGVudGlmaWVyID0gXCJcIi5jb25jYXQoaWQsIFwiIFwiKS5jb25jYXQoY291bnQpO1xuICAgIGlkQ291bnRNYXBbaWRdID0gY291bnQgKyAxO1xuICAgIHZhciBpbmRleEJ5SWRlbnRpZmllciA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgIHZhciBvYmogPSB7XG4gICAgICBjc3M6IGl0ZW1bMV0sXG4gICAgICBtZWRpYTogaXRlbVsyXSxcbiAgICAgIHNvdXJjZU1hcDogaXRlbVszXSxcbiAgICAgIHN1cHBvcnRzOiBpdGVtWzRdLFxuICAgICAgbGF5ZXI6IGl0ZW1bNV1cbiAgICB9O1xuICAgIGlmIChpbmRleEJ5SWRlbnRpZmllciAhPT0gLTEpIHtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS5yZWZlcmVuY2VzKys7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0udXBkYXRlcihvYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICB2YXIgdXBkYXRlciA9IGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpO1xuICAgICAgb3B0aW9ucy5ieUluZGV4ID0gaTtcbiAgICAgIHN0eWxlc0luRE9NLnNwbGljZShpLCAwLCB7XG4gICAgICAgIGlkZW50aWZpZXI6IGlkZW50aWZpZXIsXG4gICAgICAgIHVwZGF0ZXI6IHVwZGF0ZXIsXG4gICAgICAgIHJlZmVyZW5jZXM6IDFcbiAgICAgIH0pO1xuICAgIH1cbiAgICBpZGVudGlmaWVycy5wdXNoKGlkZW50aWZpZXIpO1xuICB9XG4gIHJldHVybiBpZGVudGlmaWVycztcbn1cbmZ1bmN0aW9uIGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpIHtcbiAgdmFyIGFwaSA9IG9wdGlvbnMuZG9tQVBJKG9wdGlvbnMpO1xuICBhcGkudXBkYXRlKG9iaik7XG4gIHZhciB1cGRhdGVyID0gZnVuY3Rpb24gdXBkYXRlcihuZXdPYmopIHtcbiAgICBpZiAobmV3T2JqKSB7XG4gICAgICBpZiAobmV3T2JqLmNzcyA9PT0gb2JqLmNzcyAmJiBuZXdPYmoubWVkaWEgPT09IG9iai5tZWRpYSAmJiBuZXdPYmouc291cmNlTWFwID09PSBvYmouc291cmNlTWFwICYmIG5ld09iai5zdXBwb3J0cyA9PT0gb2JqLnN1cHBvcnRzICYmIG5ld09iai5sYXllciA9PT0gb2JqLmxheWVyKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cbiAgICAgIGFwaS51cGRhdGUob2JqID0gbmV3T2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgYXBpLnJlbW92ZSgpO1xuICAgIH1cbiAgfTtcbiAgcmV0dXJuIHVwZGF0ZXI7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChsaXN0LCBvcHRpb25zKSB7XG4gIG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9O1xuICBsaXN0ID0gbGlzdCB8fCBbXTtcbiAgdmFyIGxhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKTtcbiAgcmV0dXJuIGZ1bmN0aW9uIHVwZGF0ZShuZXdMaXN0KSB7XG4gICAgbmV3TGlzdCA9IG5ld0xpc3QgfHwgW107XG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhciBpZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW2ldO1xuICAgICAgdmFyIGluZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleF0ucmVmZXJlbmNlcy0tO1xuICAgIH1cbiAgICB2YXIgbmV3TGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKG5ld0xpc3QsIG9wdGlvbnMpO1xuICAgIGZvciAodmFyIF9pID0gMDsgX2kgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBfaSsrKSB7XG4gICAgICB2YXIgX2lkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbX2ldO1xuICAgICAgdmFyIF9pbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKF9pZGVudGlmaWVyKTtcbiAgICAgIGlmIChzdHlsZXNJbkRPTVtfaW5kZXhdLnJlZmVyZW5jZXMgPT09IDApIHtcbiAgICAgICAgc3R5bGVzSW5ET01bX2luZGV4XS51cGRhdGVyKCk7XG4gICAgICAgIHN0eWxlc0luRE9NLnNwbGljZShfaW5kZXgsIDEpO1xuICAgICAgfVxuICAgIH1cbiAgICBsYXN0SWRlbnRpZmllcnMgPSBuZXdMYXN0SWRlbnRpZmllcnM7XG4gIH07XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgbWVtbyA9IHt9O1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGdldFRhcmdldCh0YXJnZXQpIHtcbiAgaWYgKHR5cGVvZiBtZW1vW3RhcmdldF0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICB2YXIgc3R5bGVUYXJnZXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHRhcmdldCk7XG5cbiAgICAvLyBTcGVjaWFsIGNhc2UgdG8gcmV0dXJuIGhlYWQgb2YgaWZyYW1lIGluc3RlYWQgb2YgaWZyYW1lIGl0c2VsZlxuICAgIGlmICh3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQgJiYgc3R5bGVUYXJnZXQgaW5zdGFuY2VvZiB3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQpIHtcbiAgICAgIHRyeSB7XG4gICAgICAgIC8vIFRoaXMgd2lsbCB0aHJvdyBhbiBleGNlcHRpb24gaWYgYWNjZXNzIHRvIGlmcmFtZSBpcyBibG9ja2VkXG4gICAgICAgIC8vIGR1ZSB0byBjcm9zcy1vcmlnaW4gcmVzdHJpY3Rpb25zXG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gc3R5bGVUYXJnZXQuY29udGVudERvY3VtZW50LmhlYWQ7XG4gICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIC8vIGlzdGFuYnVsIGlnbm9yZSBuZXh0XG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gbnVsbDtcbiAgICAgIH1cbiAgICB9XG4gICAgbWVtb1t0YXJnZXRdID0gc3R5bGVUYXJnZXQ7XG4gIH1cbiAgcmV0dXJuIG1lbW9bdGFyZ2V0XTtcbn1cblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRCeVNlbGVjdG9yKGluc2VydCwgc3R5bGUpIHtcbiAgdmFyIHRhcmdldCA9IGdldFRhcmdldChpbnNlcnQpO1xuICBpZiAoIXRhcmdldCkge1xuICAgIHRocm93IG5ldyBFcnJvcihcIkNvdWxkbid0IGZpbmQgYSBzdHlsZSB0YXJnZXQuIFRoaXMgcHJvYmFibHkgbWVhbnMgdGhhdCB0aGUgdmFsdWUgZm9yIHRoZSAnaW5zZXJ0JyBwYXJhbWV0ZXIgaXMgaW52YWxpZC5cIik7XG4gIH1cbiAgdGFyZ2V0LmFwcGVuZENoaWxkKHN0eWxlKTtcbn1cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0QnlTZWxlY3RvcjsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucykge1xuICB2YXIgZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzdHlsZVwiKTtcbiAgb3B0aW9ucy5zZXRBdHRyaWJ1dGVzKGVsZW1lbnQsIG9wdGlvbnMuYXR0cmlidXRlcyk7XG4gIG9wdGlvbnMuaW5zZXJ0KGVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG4gIHJldHVybiBlbGVtZW50O1xufVxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzKHN0eWxlRWxlbWVudCkge1xuICB2YXIgbm9uY2UgPSB0eXBlb2YgX193ZWJwYWNrX25vbmNlX18gIT09IFwidW5kZWZpbmVkXCIgPyBfX3dlYnBhY2tfbm9uY2VfXyA6IG51bGw7XG4gIGlmIChub25jZSkge1xuICAgIHN0eWxlRWxlbWVudC5zZXRBdHRyaWJ1dGUoXCJub25jZVwiLCBub25jZSk7XG4gIH1cbn1cbm1vZHVsZS5leHBvcnRzID0gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKSB7XG4gIHZhciBjc3MgPSBcIlwiO1xuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQob2JqLnN1cHBvcnRzLCBcIikge1wiKTtcbiAgfVxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwiQG1lZGlhIFwiLmNvbmNhdChvYmoubWVkaWEsIFwiIHtcIik7XG4gIH1cbiAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBvYmoubGF5ZXIgIT09IFwidW5kZWZpbmVkXCI7XG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJAbGF5ZXJcIi5jb25jYXQob2JqLmxheWVyLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQob2JqLmxheWVyKSA6IFwiXCIsIFwiIHtcIik7XG4gIH1cbiAgY3NzICs9IG9iai5jc3M7XG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIHZhciBzb3VyY2VNYXAgPSBvYmouc291cmNlTWFwO1xuICBpZiAoc291cmNlTWFwICYmIHR5cGVvZiBidG9hICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgY3NzICs9IFwiXFxuLyojIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxcIi5jb25jYXQoYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoc291cmNlTWFwKSkpKSwgXCIgKi9cIik7XG4gIH1cblxuICAvLyBGb3Igb2xkIElFXG4gIC8qIGlzdGFuYnVsIGlnbm9yZSBpZiAgKi9cbiAgb3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbn1cbmZ1bmN0aW9uIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpIHtcbiAgLy8gaXN0YW5idWwgaWdub3JlIGlmXG4gIGlmIChzdHlsZUVsZW1lbnQucGFyZW50Tm9kZSA9PT0gbnVsbCkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuICBzdHlsZUVsZW1lbnQucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQpO1xufVxuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGRvbUFQSShvcHRpb25zKSB7XG4gIGlmICh0eXBlb2YgZG9jdW1lbnQgPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICByZXR1cm4ge1xuICAgICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUoKSB7fSxcbiAgICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge31cbiAgICB9O1xuICB9XG4gIHZhciBzdHlsZUVsZW1lbnQgPSBvcHRpb25zLmluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKTtcbiAgcmV0dXJuIHtcbiAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZShvYmopIHtcbiAgICAgIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKTtcbiAgICB9LFxuICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge1xuICAgICAgcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCk7XG4gICAgfVxuICB9O1xufVxubW9kdWxlLmV4cG9ydHMgPSBkb21BUEk7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQpIHtcbiAgaWYgKHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0KSB7XG4gICAgc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQuY3NzVGV4dCA9IGNzcztcbiAgfSBlbHNlIHtcbiAgICB3aGlsZSAoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpIHtcbiAgICAgIHN0eWxlRWxlbWVudC5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCk7XG4gICAgfVxuICAgIHN0eWxlRWxlbWVudC5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShjc3MpKTtcbiAgfVxufVxubW9kdWxlLmV4cG9ydHMgPSBzdHlsZVRhZ1RyYW5zZm9ybTsiXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=