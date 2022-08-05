"use strict";
exports.id = 103;
exports.ids = [103];
exports.modules = {

/***/ 9593:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Bj": () => (/* binding */ password),
/* harmony export */   "EA": () => (/* binding */ user),
/* harmony export */   "Fs": () => (/* binding */ database),
/* harmony export */   "N0": () => (/* binding */ port),
/* harmony export */   "fw": () => (/* binding */ server),
/* harmony export */   "ho": () => (/* binding */ host)
/* harmony export */ });
/* unused harmony exports api, defaultDockElementIDs, defaultDescription, defaultLanguage, defaultOpenGraphImage, defaultFavicon, months, imageFallback */
//    TURTLE - TEKI
//    (°-°) _______
//      \ \/ - - - \_
//       \_  ___  ___>
//         \__) \__)
const dev = "production" !== "production";
const api = "http://localhost:3000";
const server = dev ? "http://localhost:3000" : "https://www.kekesi.dev";
// dock elements
const defaultDockElementIDs = (/* unused pure expression or super */ null && ([
    1,
    2,
    5,
    9,
    6
]));
// db credentials
const user = "kristofkekesi";
const password = "";
const host = "localhost";
const port = "5432";
const database = "portfolio";
// metadata
const defaultDescription = "";
const defaultLanguage = "en";
const defaultOpenGraphImage = server + "/opengarph.jpg";
const defaultFavicon = server + "/favicon.png";
// months
const months = (/* unused pure expression or super */ null && ([
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December"
]));
// fallbacks
const imageFallback = "bg.jpeg";


/***/ }),

/***/ 9103:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var pg__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5900);
/* harmony import */ var pg__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(pg__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(9593);


let conn;
if (!conn) {
    conn = new pg__WEBPACK_IMPORTED_MODULE_0__.Pool({
        user: _config__WEBPACK_IMPORTED_MODULE_1__/* .user */ .EA,
        password: _config__WEBPACK_IMPORTED_MODULE_1__/* .password */ .Bj,
        host: _config__WEBPACK_IMPORTED_MODULE_1__/* .host */ .ho,
        port: _config__WEBPACK_IMPORTED_MODULE_1__/* .port */ .N0,
        database: _config__WEBPACK_IMPORTED_MODULE_1__/* .database */ .Fs
    });
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (conn);


/***/ })

};
;