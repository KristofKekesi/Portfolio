"use strict";
(() => {
var exports = {};
exports.id = 793;
exports.ids = [793];
exports.modules = {

/***/ 5900:
/***/ ((module) => {

module.exports = require("pg");

/***/ }),

/***/ 6431:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _functions_api_bundles__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(4833);

//    TURTLE - TEKI
//    (°-°) _______
//      \ \/ - - - \_
//       \_  ___  ___>
//         \__) \__)
const bundles = async (req, res)=>{
    const { query: { id , name , app  } , method ,  } = req;
    const bundles = await (0,_functions_api_bundles__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .Z)(id, name, app);
    if (bundles == "No results found") {
        return res.status(404).send(bundles);
    } else {
        return res.status(200).json(bundles);
    }
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (bundles);


/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [103,833], () => (__webpack_exec__(6431)));
module.exports = __webpack_exports__;

})();