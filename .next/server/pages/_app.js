/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(() => {
var exports = {};
exports.id = "pages/_app";
exports.ids = ["pages/_app"];
exports.modules = {

/***/ "./pages/_app.js":
/*!***********************!*\
  !*** ./pages/_app.js ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ MyApp)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _styles_legacy_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../styles/legacy.css */ \"./styles/legacy.css\");\n/* harmony import */ var _styles_legacy_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_styles_legacy_css__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _styles_globals_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../styles/globals.css */ \"./styles/globals.css\");\n/* harmony import */ var _styles_globals_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_styles_globals_css__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _components_Cursor_Cursor_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/Cursor/Cursor.css */ \"./components/Cursor/Cursor.css\");\n/* harmony import */ var _components_Cursor_Cursor_css__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_components_Cursor_Cursor_css__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _components_Dock_Dock_css__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/Dock/Dock.css */ \"./components/Dock/Dock.css\");\n/* harmony import */ var _components_Dock_Dock_css__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_components_Dock_Dock_css__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _components_MoreTooltip_MoreTooltip_css__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../components/MoreTooltip/MoreTooltip.css */ \"./components/MoreTooltip/MoreTooltip.css\");\n/* harmony import */ var _components_MoreTooltip_MoreTooltip_css__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_components_MoreTooltip_MoreTooltip_css__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _components_Navbar_Navbar_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../components/Navbar/Navbar.css */ \"./components/Navbar/Navbar.css\");\n/* harmony import */ var _components_Navbar_Navbar_css__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_components_Navbar_Navbar_css__WEBPACK_IMPORTED_MODULE_6__);\n/* harmony import */ var _components_ProjectTooltip_ProjectTooltip_css__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../components/ProjectTooltip/ProjectTooltip.css */ \"./components/ProjectTooltip/ProjectTooltip.css\");\n/* harmony import */ var _components_ProjectTooltip_ProjectTooltip_css__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_components_ProjectTooltip_ProjectTooltip_css__WEBPACK_IMPORTED_MODULE_7__);\n/* harmony import */ var _components_Article_Article_css__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../components/Article/Article.css */ \"./components/Article/Article.css\");\n/* harmony import */ var _components_Article_Article_css__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_components_Article_Article_css__WEBPACK_IMPORTED_MODULE_8__);\n/* harmony import */ var _components_Terminal_Terminal_css__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../components/Terminal/Terminal.css */ \"./components/Terminal/Terminal.css\");\n/* harmony import */ var _components_Terminal_Terminal_css__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(_components_Terminal_Terminal_css__WEBPACK_IMPORTED_MODULE_9__);\n/* harmony import */ var _components_ImageGallery_ImageGallery_css__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../components/ImageGallery/ImageGallery.css */ \"./components/ImageGallery/ImageGallery.css\");\n/* harmony import */ var _components_ImageGallery_ImageGallery_css__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(_components_ImageGallery_ImageGallery_css__WEBPACK_IMPORTED_MODULE_10__);\n/* harmony import */ var _components_ProjectBundle_ProjectBundle_css__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../components/ProjectBundle/ProjectBundle.css */ \"./components/ProjectBundle/ProjectBundle.css\");\n/* harmony import */ var _components_ProjectBundle_ProjectBundle_css__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(_components_ProjectBundle_ProjectBundle_css__WEBPACK_IMPORTED_MODULE_11__);\n/* harmony import */ var _components_ArticlePreview_ArticlePreviewBig_css__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../components/ArticlePreview/ArticlePreviewBig.css */ \"./components/ArticlePreview/ArticlePreviewBig.css\");\n/* harmony import */ var _components_ArticlePreview_ArticlePreviewBig_css__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(_components_ArticlePreview_ArticlePreviewBig_css__WEBPACK_IMPORTED_MODULE_12__);\n/* harmony import */ var _components_ArticlePreview_ArticlePreviewSmoll_css__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../components/ArticlePreview/ArticlePreviewSmoll.css */ \"./components/ArticlePreview/ArticlePreviewSmoll.css\");\n/* harmony import */ var _components_ArticlePreview_ArticlePreviewSmoll_css__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(_components_ArticlePreview_ArticlePreviewSmoll_css__WEBPACK_IMPORTED_MODULE_13__);\n/* harmony import */ var _components_MadeWith_MadeWith_css__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../components/MadeWith/MadeWith.css */ \"./components/MadeWith/MadeWith.css\");\n/* harmony import */ var _components_MadeWith_MadeWith_css__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(_components_MadeWith_MadeWith_css__WEBPACK_IMPORTED_MODULE_14__);\n/* harmony import */ var _components_Footer_Footer_css__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../components/Footer/Footer.css */ \"./components/Footer/Footer.css\");\n/* harmony import */ var _components_Footer_Footer_css__WEBPACK_IMPORTED_MODULE_15___default = /*#__PURE__*/__webpack_require__.n(_components_Footer_Footer_css__WEBPACK_IMPORTED_MODULE_15__);\n/* harmony import */ var _components_Quote_Quote_css__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ../components/Quote/Quote.css */ \"./components/Quote/Quote.css\");\n/* harmony import */ var _components_Quote_Quote_css__WEBPACK_IMPORTED_MODULE_16___default = /*#__PURE__*/__webpack_require__.n(_components_Quote_Quote_css__WEBPACK_IMPORTED_MODULE_16__);\n/* harmony import */ var _components_Award_Award_css__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ../components/Award/Award.css */ \"./components/Award/Award.css\");\n/* harmony import */ var _components_Award_Award_css__WEBPACK_IMPORTED_MODULE_17___default = /*#__PURE__*/__webpack_require__.n(_components_Award_Award_css__WEBPACK_IMPORTED_MODULE_17__);\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n//    TURTLE - TEKI\n//    (°-°) _______\n//      \\ \\/ - - - \\_\n//       \\_  ___  ___>\n//         \\__) \\__)\nfunction MyApp({ Component , pageProps  }) {\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Component, {\n        ...pageProps\n    }, void 0, false, {\n        fileName: \"/Users/kristofkekesi/Developer/Web/Portfolio/pages/_app.js\",\n        lineNumber: 29,\n        columnNumber: 10\n    }, this);\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9fYXBwLmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUE4QjtBQUNDO0FBRVU7QUFDSjtBQUNjO0FBQ1Y7QUFDZ0I7QUFDZDtBQUNFO0FBQ1E7QUFDRTtBQUNLO0FBQ0U7QUFDakI7QUFDSjtBQUNGO0FBQ0E7QUFHdkMsbUJBQW1CO0FBQ25CLG1CQUFtQjtBQUNuQixxQkFBcUI7QUFDckIsc0JBQXNCO0FBQ3RCLG9CQUFvQjtBQUdMLFNBQVNBLE1BQU0sRUFBRUMsVUFBUyxFQUFFQyxVQUFTLEVBQUUsRUFBRTtJQUN0RCxxQkFBTyw4REFBQ0Q7UUFBVyxHQUFHQyxTQUFTOzs7Ozs7QUFDakMsQ0FBQyIsInNvdXJjZXMiOlsid2VicGFjazovL3BvcnRmb2xpby0zLy4vcGFnZXMvX2FwcC5qcz9lMGFkIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCAnLi4vc3R5bGVzL2xlZ2FjeS5jc3MnO1xuaW1wb3J0ICcuLi9zdHlsZXMvZ2xvYmFscy5jc3MnO1xuXG5pbXBvcnQgJy4uL2NvbXBvbmVudHMvQ3Vyc29yL0N1cnNvci5jc3MnO1xuaW1wb3J0ICcuLi9jb21wb25lbnRzL0RvY2svRG9jay5jc3MnO1xuaW1wb3J0ICcuLi9jb21wb25lbnRzL01vcmVUb29sdGlwL01vcmVUb29sdGlwLmNzcyc7XG5pbXBvcnQgJy4uL2NvbXBvbmVudHMvTmF2YmFyL05hdmJhci5jc3MnO1xuaW1wb3J0ICcuLi9jb21wb25lbnRzL1Byb2plY3RUb29sdGlwL1Byb2plY3RUb29sdGlwLmNzcyc7XG5pbXBvcnQgJy4uL2NvbXBvbmVudHMvQXJ0aWNsZS9BcnRpY2xlLmNzcyc7XG5pbXBvcnQgJy4uL2NvbXBvbmVudHMvVGVybWluYWwvVGVybWluYWwuY3NzJztcbmltcG9ydCAnLi4vY29tcG9uZW50cy9JbWFnZUdhbGxlcnkvSW1hZ2VHYWxsZXJ5LmNzcyc7XG5pbXBvcnQgJy4uL2NvbXBvbmVudHMvUHJvamVjdEJ1bmRsZS9Qcm9qZWN0QnVuZGxlLmNzcyc7XG5pbXBvcnQgJy4uL2NvbXBvbmVudHMvQXJ0aWNsZVByZXZpZXcvQXJ0aWNsZVByZXZpZXdCaWcuY3NzJztcbmltcG9ydCAnLi4vY29tcG9uZW50cy9BcnRpY2xlUHJldmlldy9BcnRpY2xlUHJldmlld1Ntb2xsLmNzcyc7XG5pbXBvcnQgJy4uL2NvbXBvbmVudHMvTWFkZVdpdGgvTWFkZVdpdGguY3NzJztcbmltcG9ydCAnLi4vY29tcG9uZW50cy9Gb290ZXIvRm9vdGVyLmNzcyc7XG5pbXBvcnQgJy4uL2NvbXBvbmVudHMvUXVvdGUvUXVvdGUuY3NzJztcbmltcG9ydCAnLi4vY29tcG9uZW50cy9Bd2FyZC9Bd2FyZC5jc3MnO1xuXG5cbi8vICAgIFRVUlRMRSAtIFRFS0lcbi8vICAgICjCsC3CsCkgX19fX19fX1xuLy8gICAgICBcXCBcXC8gLSAtIC0gXFxfXG4vLyAgICAgICBcXF8gIF9fXyAgX19fPlxuLy8gICAgICAgICBcXF9fKSBcXF9fKVxuXG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIE15QXBwKHsgQ29tcG9uZW50LCBwYWdlUHJvcHMgfSkge1xuICByZXR1cm4gPENvbXBvbmVudCB7Li4ucGFnZVByb3BzfSAvPlxufVxuIl0sIm5hbWVzIjpbIk15QXBwIiwiQ29tcG9uZW50IiwicGFnZVByb3BzIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/_app.js\n");

/***/ }),

/***/ "./components/Article/Article.css":
/*!****************************************!*\
  !*** ./components/Article/Article.css ***!
  \****************************************/
/***/ (() => {



/***/ }),

/***/ "./components/ArticlePreview/ArticlePreviewBig.css":
/*!*********************************************************!*\
  !*** ./components/ArticlePreview/ArticlePreviewBig.css ***!
  \*********************************************************/
/***/ (() => {



/***/ }),

/***/ "./components/ArticlePreview/ArticlePreviewSmoll.css":
/*!***********************************************************!*\
  !*** ./components/ArticlePreview/ArticlePreviewSmoll.css ***!
  \***********************************************************/
/***/ (() => {



/***/ }),

/***/ "./components/Award/Award.css":
/*!************************************!*\
  !*** ./components/Award/Award.css ***!
  \************************************/
/***/ (() => {



/***/ }),

/***/ "./components/Cursor/Cursor.css":
/*!**************************************!*\
  !*** ./components/Cursor/Cursor.css ***!
  \**************************************/
/***/ (() => {



/***/ }),

/***/ "./components/Dock/Dock.css":
/*!**********************************!*\
  !*** ./components/Dock/Dock.css ***!
  \**********************************/
/***/ (() => {



/***/ }),

/***/ "./components/Footer/Footer.css":
/*!**************************************!*\
  !*** ./components/Footer/Footer.css ***!
  \**************************************/
/***/ (() => {



/***/ }),

/***/ "./components/ImageGallery/ImageGallery.css":
/*!**************************************************!*\
  !*** ./components/ImageGallery/ImageGallery.css ***!
  \**************************************************/
/***/ (() => {



/***/ }),

/***/ "./components/MadeWith/MadeWith.css":
/*!******************************************!*\
  !*** ./components/MadeWith/MadeWith.css ***!
  \******************************************/
/***/ (() => {



/***/ }),

/***/ "./components/MoreTooltip/MoreTooltip.css":
/*!************************************************!*\
  !*** ./components/MoreTooltip/MoreTooltip.css ***!
  \************************************************/
/***/ (() => {



/***/ }),

/***/ "./components/Navbar/Navbar.css":
/*!**************************************!*\
  !*** ./components/Navbar/Navbar.css ***!
  \**************************************/
/***/ (() => {



/***/ }),

/***/ "./components/ProjectBundle/ProjectBundle.css":
/*!****************************************************!*\
  !*** ./components/ProjectBundle/ProjectBundle.css ***!
  \****************************************************/
/***/ (() => {



/***/ }),

/***/ "./components/ProjectTooltip/ProjectTooltip.css":
/*!******************************************************!*\
  !*** ./components/ProjectTooltip/ProjectTooltip.css ***!
  \******************************************************/
/***/ (() => {



/***/ }),

/***/ "./components/Quote/Quote.css":
/*!************************************!*\
  !*** ./components/Quote/Quote.css ***!
  \************************************/
/***/ (() => {



/***/ }),

/***/ "./components/Terminal/Terminal.css":
/*!******************************************!*\
  !*** ./components/Terminal/Terminal.css ***!
  \******************************************/
/***/ (() => {



/***/ }),

/***/ "./styles/globals.css":
/*!****************************!*\
  !*** ./styles/globals.css ***!
  \****************************/
/***/ (() => {



/***/ }),

/***/ "./styles/legacy.css":
/*!***************************!*\
  !*** ./styles/legacy.css ***!
  \***************************/
/***/ (() => {



/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/***/ ((module) => {

"use strict";
module.exports = require("react/jsx-dev-runtime");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("./pages/_app.js"));
module.exports = __webpack_exports__;

})();