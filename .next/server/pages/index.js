"use strict";
(() => {
var exports = {};
exports.id = 405;
exports.ids = [405];
exports.modules = {

/***/ 3678:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Home),
/* harmony export */   "getStaticProps": () => (/* binding */ getStaticProps)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _components_Navbar_Navbar__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(263);
/* harmony import */ var _components_Cursor_Cursor__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(7377);
/* harmony import */ var _components_Dock_Dock__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(3197);
/* harmony import */ var _components_Head_Head__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(9188);
/* harmony import */ var _functions_navbar_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(2802);
/* harmony import */ var _functions_navbar_js__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_functions_navbar_js__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _functions_cursor_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(4966);
/* harmony import */ var _functions_cursor_js__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_functions_cursor_js__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _functions_project_tooltip_position_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(6128);
/* harmony import */ var _functions_project_tooltip_state_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(1343);
/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(1838);











//    TURTLE - TEKI
//    (°-°) _______
//      \ \/ - - - \_
//       \_  ___  ___>
//         \__) \__)
function Home({ dockElements , keywords  }) {
    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{
        _functions_navbar_js__WEBPACK_IMPORTED_MODULE_6___default()();
        _functions_cursor_js__WEBPACK_IMPORTED_MODULE_7___default()();
        //setImageGalleries();
        (0,_functions_project_tooltip_position_js__WEBPACK_IMPORTED_MODULE_9__/* ["default"] */ .Z)();
        window.addEventListener("resize", (0,_functions_project_tooltip_position_js__WEBPACK_IMPORTED_MODULE_9__/* ["default"] */ .Z)());
        dockElements.map((dockElement)=>{
            (0,_functions_project_tooltip_state_js__WEBPACK_IMPORTED_MODULE_10__/* ["default"] */ .Z)(dockElement[0].id);
        });
        console.log("%cHello there!\n\n%cIf you are interested in the source code check out this site's repo at https://www.github.com/KristofKekesi/Portfolio.", "color:#ffffff;font-family:system-ui;font-size:2rem;font-weight:bold;text-shadow:2px 2px 0 #5ebd3e, 4px 4px 0 #ffbb00, 6px 6px 0 #f78400, 8px 8px 0 #e23838, 10px 10px 0 #973999, 12px 12px 0 #009cdf", "color:auto;font-size:1rem; font-family:monospace;");
    }, []);
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_Head_Head__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z, {
                title: "Krist\xf3f K\xe9kesi",
                keywords: keywords
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_Navbar_Navbar__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z, {}),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("main", {
                className: "w-full h-screen flex absolute justify-center bg-cover",
                style: {
                    backgroundImage: "url('bg.jpeg')"
                },
                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                    className: "w-max",
                    children: [
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h1", {
                            className: "text-white text-7xl font-bold text-left font-interBold",
                            style: {
                                paddingTop: "33vh",
                                textShadow: "6px 6px 12px rgba(0, 0, 0, .5)"
                            },
                            children: "Krist\xf3f K\xe9kesi"
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h2", {
                            className: "text-white text-4xl font-bold text-left font-interBold",
                            style: {
                                textShadow: "6px 6px 12px rgba(0, 0, 0, .5)"
                            },
                            children: "Mobile Developer"
                        })
                    ]
                })
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_Dock_Dock__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z, {
                elements: dockElements
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_Cursor_Cursor__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z, {})
        ]
    });
};
const getStaticProps = async (_)=>{
    const dockElements = [];
    for(let i = 0; i < _config__WEBPACK_IMPORTED_MODULE_8__/* .defaultDockElementIDs.length */ .hU.length; i++){
        const projectResponse = await fetch(_config__WEBPACK_IMPORTED_MODULE_8__/* .api */ .hi + "/api/projects?id=" + encodeURIComponent(_config__WEBPACK_IMPORTED_MODULE_8__/* .defaultDockElementIDs */ .hU[i]));
        const project = await projectResponse.json();
        dockElements.push(project);
    }
    const response = await fetch(_config__WEBPACK_IMPORTED_MODULE_8__/* .api */ .hi + "/api/keywords");
    const keywords = await response.json();
    return {
        props: {
            dockElements: dockElements,
            keywords: keywords.join(", ")
        }
    };
};


/***/ }),

/***/ 3280:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/app-router-context.js");

/***/ }),

/***/ 2796:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/head-manager-context.js");

/***/ }),

/***/ 4014:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/i18n/normalize-locale-path.js");

/***/ }),

/***/ 8524:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/is-plain-object.js");

/***/ }),

/***/ 8020:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/mitt.js");

/***/ }),

/***/ 4406:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/page-path/denormalize-page-path.js");

/***/ }),

/***/ 4964:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router-context.js");

/***/ }),

/***/ 1751:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/add-path-prefix.js");

/***/ }),

/***/ 299:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/format-next-pathname-info.js");

/***/ }),

/***/ 3938:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/format-url.js");

/***/ }),

/***/ 9565:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/get-asset-path-from-route.js");

/***/ }),

/***/ 5789:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/get-next-pathname-info.js");

/***/ }),

/***/ 1428:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/is-dynamic.js");

/***/ }),

/***/ 8854:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/parse-path.js");

/***/ }),

/***/ 1292:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/parse-relative-url.js");

/***/ }),

/***/ 4567:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/path-has-prefix.js");

/***/ }),

/***/ 979:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/querystring.js");

/***/ }),

/***/ 3297:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/remove-trailing-slash.js");

/***/ }),

/***/ 6052:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/resolve-rewrites.js");

/***/ }),

/***/ 4226:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/route-matcher.js");

/***/ }),

/***/ 5052:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/route-regex.js");

/***/ }),

/***/ 9232:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/utils.js");

/***/ }),

/***/ 968:
/***/ ((module) => {

module.exports = require("next/head");

/***/ }),

/***/ 1853:
/***/ ((module) => {

module.exports = require("next/router");

/***/ }),

/***/ 6689:
/***/ ((module) => {

module.exports = require("react");

/***/ }),

/***/ 997:
/***/ ((module) => {

module.exports = require("react/jsx-runtime");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [952,835,508], () => (__webpack_exec__(3678)));
module.exports = __webpack_exports__;

})();