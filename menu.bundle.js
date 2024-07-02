"use strict";
(self["webpackChunkodin_restaurant"] = self["webpackChunkodin_restaurant"] || []).push([["menu"],{

/***/ "./src/js/menu.js":
/*!************************!*\
  !*** ./src/js/menu.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
const menuSection = document.createElement('section');
menuSection.classList.add('menu');

const title = document.createElement('p');
title.innerText = 'Doughnaut Menu';
title.classList.add('section-title');

const imagePaths = [
      {src: __webpack_require__(/*! ../images/bavarian.png */ "./src/images/bavarian.png"), alt: 'bavarian-donuts' },
      {src: __webpack_require__(/*! ../images/special-donuts.png */ "./src/images/special-donuts.png"), alt: 'special-donuts' },
      {src: __webpack_require__(/*! ../images/glazed-donuts.png */ "./src/images/glazed-donuts.png"), alt: 'glazed-donuts' },
      {src: __webpack_require__(/*! ../images/classic-donut.png */ "./src/images/classic-donut.png"), alt: 'classic-donuts' },
      {src: __webpack_require__(/*! ../images/donut-holes.png */ "./src/images/donut-holes.png"), alt: 'donut-holes' },
      {src: __webpack_require__(/*! ../images/dunkers.png */ "./src/images/dunkers.png"), alt: 'bavarian-dunkers' },
]

const labels = [
      "Bavarian Donuts",
      "Bakery's Special",
      "Glazed Donuts",
      "Classic Donuts",
      "Donut Holes",
      "Dunkers",
]

const menuContainer = document.createElement('div');
menuContainer.classList.add('donut-cont');

for(let i = 0; i < 6; i++) {
      const div = document.createElement('div');
      const img = new Image();
      img.src = imagePaths[i].src;
      img.alt = imagePaths[i].alt;
      const label = document.createElement('p');
      label.innerText = labels[i];

      div.appendChild(img);
      div.appendChild(label);

      menuContainer.appendChild(div);
}

menuSection.appendChild(title);
menuSection.appendChild(menuContainer);

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (menuSection);

/***/ }),

/***/ "./src/images/bavarian.png":
/*!*********************************!*\
  !*** ./src/images/bavarian.png ***!
  \*********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "7e05d2ee4a01d849daa4.png";

/***/ }),

/***/ "./src/images/classic-donut.png":
/*!**************************************!*\
  !*** ./src/images/classic-donut.png ***!
  \**************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "83498e6afb789d9cde6a.png";

/***/ }),

/***/ "./src/images/donut-holes.png":
/*!************************************!*\
  !*** ./src/images/donut-holes.png ***!
  \************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "831f638afdb28d01b384.png";

/***/ }),

/***/ "./src/images/dunkers.png":
/*!********************************!*\
  !*** ./src/images/dunkers.png ***!
  \********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "a7d45ceb33eb36f08520.png";

/***/ }),

/***/ "./src/images/glazed-donuts.png":
/*!**************************************!*\
  !*** ./src/images/glazed-donuts.png ***!
  \**************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "1ad0e00f0571188dedb1.png";

/***/ }),

/***/ "./src/images/special-donuts.png":
/*!***************************************!*\
  !*** ./src/images/special-donuts.png ***!
  \***************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "373a85669fa169d407ae.png";

/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ __webpack_require__.O(0, ["shared"], () => (__webpack_exec__("./src/js/menu.js")));
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ }
]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWVudS5idW5kbGUuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPLEtBQUssbUJBQU8sQ0FBQyx5REFBd0IsMkJBQTJCO0FBQ3ZFLE9BQU8sS0FBSyxtQkFBTyxDQUFDLHFFQUE4QiwwQkFBMEI7QUFDNUUsT0FBTyxLQUFLLG1CQUFPLENBQUMsbUVBQTZCLHlCQUF5QjtBQUMxRSxPQUFPLEtBQUssbUJBQU8sQ0FBQyxtRUFBNkIsMEJBQTBCO0FBQzNFLE9BQU8sS0FBSyxtQkFBTyxDQUFDLCtEQUEyQix1QkFBdUI7QUFDdEUsT0FBTyxLQUFLLG1CQUFPLENBQUMsdURBQXVCLDRCQUE0QjtBQUN2RTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsZUFBZSxPQUFPO0FBQ3RCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaUVBQWUsV0FBVyIsInNvdXJjZXMiOlsid2VicGFjazovL29kaW4tcmVzdGF1cmFudC8uL3NyYy9qcy9tZW51LmpzIl0sInNvdXJjZXNDb250ZW50IjpbImNvbnN0IG1lbnVTZWN0aW9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc2VjdGlvbicpO1xyXG5tZW51U2VjdGlvbi5jbGFzc0xpc3QuYWRkKCdtZW51Jyk7XHJcblxyXG5jb25zdCB0aXRsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcclxudGl0bGUuaW5uZXJUZXh0ID0gJ0RvdWdobmF1dCBNZW51JztcclxudGl0bGUuY2xhc3NMaXN0LmFkZCgnc2VjdGlvbi10aXRsZScpO1xyXG5cclxuY29uc3QgaW1hZ2VQYXRocyA9IFtcclxuICAgICAge3NyYzogcmVxdWlyZSgnLi4vaW1hZ2VzL2JhdmFyaWFuLnBuZycpLCBhbHQ6ICdiYXZhcmlhbi1kb251dHMnIH0sXHJcbiAgICAgIHtzcmM6IHJlcXVpcmUoJy4uL2ltYWdlcy9zcGVjaWFsLWRvbnV0cy5wbmcnKSwgYWx0OiAnc3BlY2lhbC1kb251dHMnIH0sXHJcbiAgICAgIHtzcmM6IHJlcXVpcmUoJy4uL2ltYWdlcy9nbGF6ZWQtZG9udXRzLnBuZycpLCBhbHQ6ICdnbGF6ZWQtZG9udXRzJyB9LFxyXG4gICAgICB7c3JjOiByZXF1aXJlKCcuLi9pbWFnZXMvY2xhc3NpYy1kb251dC5wbmcnKSwgYWx0OiAnY2xhc3NpYy1kb251dHMnIH0sXHJcbiAgICAgIHtzcmM6IHJlcXVpcmUoJy4uL2ltYWdlcy9kb251dC1ob2xlcy5wbmcnKSwgYWx0OiAnZG9udXQtaG9sZXMnIH0sXHJcbiAgICAgIHtzcmM6IHJlcXVpcmUoJy4uL2ltYWdlcy9kdW5rZXJzLnBuZycpLCBhbHQ6ICdiYXZhcmlhbi1kdW5rZXJzJyB9LFxyXG5dXHJcblxyXG5jb25zdCBsYWJlbHMgPSBbXHJcbiAgICAgIFwiQmF2YXJpYW4gRG9udXRzXCIsXHJcbiAgICAgIFwiQmFrZXJ5J3MgU3BlY2lhbFwiLFxyXG4gICAgICBcIkdsYXplZCBEb251dHNcIixcclxuICAgICAgXCJDbGFzc2ljIERvbnV0c1wiLFxyXG4gICAgICBcIkRvbnV0IEhvbGVzXCIsXHJcbiAgICAgIFwiRHVua2Vyc1wiLFxyXG5dXHJcblxyXG5jb25zdCBtZW51Q29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbm1lbnVDb250YWluZXIuY2xhc3NMaXN0LmFkZCgnZG9udXQtY29udCcpO1xyXG5cclxuZm9yKGxldCBpID0gMDsgaSA8IDY7IGkrKykge1xyXG4gICAgICBjb25zdCBkaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICAgICAgY29uc3QgaW1nID0gbmV3IEltYWdlKCk7XHJcbiAgICAgIGltZy5zcmMgPSBpbWFnZVBhdGhzW2ldLnNyYztcclxuICAgICAgaW1nLmFsdCA9IGltYWdlUGF0aHNbaV0uYWx0O1xyXG4gICAgICBjb25zdCBsYWJlbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcclxuICAgICAgbGFiZWwuaW5uZXJUZXh0ID0gbGFiZWxzW2ldO1xyXG5cclxuICAgICAgZGl2LmFwcGVuZENoaWxkKGltZyk7XHJcbiAgICAgIGRpdi5hcHBlbmRDaGlsZChsYWJlbCk7XHJcblxyXG4gICAgICBtZW51Q29udGFpbmVyLmFwcGVuZENoaWxkKGRpdik7XHJcbn1cclxuXHJcbm1lbnVTZWN0aW9uLmFwcGVuZENoaWxkKHRpdGxlKTtcclxubWVudVNlY3Rpb24uYXBwZW5kQ2hpbGQobWVudUNvbnRhaW5lcik7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBtZW51U2VjdGlvbjsiXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=