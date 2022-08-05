"use strict";
(() => {
var exports = {};
exports.id = 899;
exports.ids = [899,793];
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


/***/ }),

/***/ 1322:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ pages_api_images)
});

// EXTERNAL MODULE: ./db.js
var db = __webpack_require__(9103);
;// CONCATENATED MODULE: ./functions/api/images.js

//    TURTLE - TEKI
//    (°-°) _______
//      \ \/ - - - \_
//       \_  ___  ___>
//         \__) \__)
async function getImages(id, type, copyright) {
    //console.log("ID: " + id + " TYPE: " + type + " COPYRIGHT: " + copyright);
    let selectorQueries = [];
    if (id != undefined) {
        selectorQueries.push('"images"."id" = ' + id);
    }
    if (type != undefined) {
        selectorQueries.push('LOWER("images"."type") = LOWER(\'' + type + "')");
    }
    if (copyright != undefined) {
        selectorQueries.push('(LOWER("images"."copyrightHolder") = LOWER(\'' + copyright + '\') OR LOWER("images"."copyrightURL") = LOWER(\'' + copyright + "'))");
    }
    if (selectorQueries.length > 0) {
        selectorQueries = "WHERE " + selectorQueries.join(" AND ");
    } else {
        return "No query parameters provided";
    }
    try {
        const mainQuery = 'SELECT * FROM "images" ' + selectorQueries + ";";
        //console.log(mainQuery);
        const mainResult = await db/* default.query */.Z.query(mainQuery);
        for(let i = 0; i < mainResult.rows.length; i++){
            if (i === mainResult.rows.length - 1) {
                return mainResult.rows;
            }
        }
        return "No results found";
    } catch (error) {
        console.log(error);
    }
}
;
/* harmony default export */ const api_images = (getImages);

// EXTERNAL MODULE: ./pages/api/bundles.js
var bundles = __webpack_require__(6431);
;// CONCATENATED MODULE: ./pages/api/images.js


//    TURTLE - TEKI
//    (°-°) _______
//      \ \/ - - - \_
//       \_  ___  ___>
//         \__) \__)
const images_images = async (req, res)=>{
    const { query: { id , type , copyright  } , method ,  } = req;
    const images = await api_images(id, type, copyright);
    if (images == "No results found") {
        return res.status(404).send(images);
    } else if (images == "No query parameters provided") {
        return res.status(500).send(images);
    } else {
        return res.status(200).json(images);
    }
};
/* harmony default export */ const pages_api_images = (images_images);


/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [103,833], () => (__webpack_exec__(1322)));
module.exports = __webpack_exports__;

})();