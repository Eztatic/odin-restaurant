"use strict";
(self["webpackChunkodin_restaurant"] = self["webpackChunkodin_restaurant"] || []).push([["home"],{

/***/ "./src/js/home.js":
/*!************************!*\
  !*** ./src/js/home.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _images_hero_background_jpg__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../images/hero-background.jpg */ "./src/images/hero-background.jpg");


const heroSection = document.createElement('section');
heroSection.classList.add('hero');

const heroImg = new Image();
heroImg.src = _images_hero_background_jpg__WEBPACK_IMPORTED_MODULE_0__;
heroImg.alt = 'donut-background';
heroImg.setAttribute('id', 'donut-bg');

const contents = document.createElement('div');
contents.classList.add('hero-contents');

const title = document.createElement('p');
title.innerText = 'Check out our Lovely Donuts';

const description = document.createElement('p');
description.innerText = 'These donuts are baked with love so start ordering now.';

const btn = document.createElement('button');
btn.innerText = 'Check Menu';

contents.appendChild(title);
contents.appendChild(description);
contents.appendChild(btn);

heroSection.appendChild(heroImg);
heroSection.appendChild(contents);

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (heroSection);


/***/ }),

/***/ "./src/images/hero-background.jpg":
/*!****************************************!*\
  !*** ./src/images/hero-background.jpg ***!
  \****************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "dc50f9bc17861cbba210.jpg";

/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ __webpack_require__.O(0, ["shared"], () => (__webpack_exec__("./src/js/home.js")));
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ }
]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaG9tZS5idW5kbGUuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7QUFBb0Q7QUFDcEQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGNBQWMsd0RBQU87QUFDckI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpRUFBZSxXQUFXLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9vZGluLXJlc3RhdXJhbnQvLi9zcmMvanMvaG9tZS5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgYmdJbWFnZSBmcm9tICcuLi9pbWFnZXMvaGVyby1iYWNrZ3JvdW5kLmpwZyc7XHJcblxyXG5jb25zdCBoZXJvU2VjdGlvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NlY3Rpb24nKTtcclxuaGVyb1NlY3Rpb24uY2xhc3NMaXN0LmFkZCgnaGVybycpO1xyXG5cclxuY29uc3QgaGVyb0ltZyA9IG5ldyBJbWFnZSgpO1xyXG5oZXJvSW1nLnNyYyA9IGJnSW1hZ2U7XHJcbmhlcm9JbWcuYWx0ID0gJ2RvbnV0LWJhY2tncm91bmQnO1xyXG5oZXJvSW1nLnNldEF0dHJpYnV0ZSgnaWQnLCAnZG9udXQtYmcnKTtcclxuXHJcbmNvbnN0IGNvbnRlbnRzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbmNvbnRlbnRzLmNsYXNzTGlzdC5hZGQoJ2hlcm8tY29udGVudHMnKTtcclxuXHJcbmNvbnN0IHRpdGxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xyXG50aXRsZS5pbm5lclRleHQgPSAnQ2hlY2sgb3V0IG91ciBMb3ZlbHkgRG9udXRzJztcclxuXHJcbmNvbnN0IGRlc2NyaXB0aW9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xyXG5kZXNjcmlwdGlvbi5pbm5lclRleHQgPSAnVGhlc2UgZG9udXRzIGFyZSBiYWtlZCB3aXRoIGxvdmUgc28gc3RhcnQgb3JkZXJpbmcgbm93Lic7XHJcblxyXG5jb25zdCBidG4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcclxuYnRuLmlubmVyVGV4dCA9ICdDaGVjayBNZW51JztcclxuXHJcbmNvbnRlbnRzLmFwcGVuZENoaWxkKHRpdGxlKTtcclxuY29udGVudHMuYXBwZW5kQ2hpbGQoZGVzY3JpcHRpb24pO1xyXG5jb250ZW50cy5hcHBlbmRDaGlsZChidG4pO1xyXG5cclxuaGVyb1NlY3Rpb24uYXBwZW5kQ2hpbGQoaGVyb0ltZyk7XHJcbmhlcm9TZWN0aW9uLmFwcGVuZENoaWxkKGNvbnRlbnRzKTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGhlcm9TZWN0aW9uO1xyXG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=