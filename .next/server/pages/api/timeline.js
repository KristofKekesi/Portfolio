"use strict";
(() => {
var exports = {};
exports.id = 491;
exports.ids = [491];
exports.modules = {

/***/ 5900:
/***/ ((module) => {

module.exports = require("pg");

/***/ }),

/***/ 9698:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ pages_api_timeline)
});

// EXTERNAL MODULE: ./db.js
var db = __webpack_require__(9103);
;// CONCATENATED MODULE: ./functions/api/timeline.js

//    TURTLE - TEKI
//    (°-°) _______
//      \ \/ - - - \_
//       \_  ___  ___>
//         \__) \__)
async function getTimeline(id) {
    console.log("ID: " + id);
    let selectorQueries = [];
    if (id != undefined) {
        selectorQueries.push('"timeline"."id" = ' + id);
    }
    if (selectorQueries.length > 0) {
        selectorQueries = "WHERE " + selectorQueries.join(" AND ");
    } else {
        selectorQueries = "";
    }
    try {
        const mainQuery = 'SELECT * FROM "timeline"' + selectorQueries + ' ORDER BY "date";';
        //console.log(mainQuery);
        const mainResult = await db/* default.query */.Z.query(mainQuery);
        for(let i = 0; i < mainResult.rows.length; i++){
            // Date
            mainResult.rows[i].date = new Date(mainResult.rows[i].date).toString();
            if (i === mainResult.rows.length - 1) {
                return mainResult.rows;
            }
        }
        return "No results found";
    } catch (error) {
        console.log(error);
    }
}
/* harmony default export */ const api_timeline = (getTimeline);

;// CONCATENATED MODULE: ./pages/api/timeline.js

//    TURTLE - TEKI
//    (°-°) _______
//      \ \/ - - - \_
//       \_  ___  ___>
//         \__) \__)
const timeline = async (req, res)=>{
    const { query: { id  } , method ,  } = req;
    const timeline = await api_timeline(id);
    if (timeline == "No results found") {
        return res.status(404).send(timeline);
    } else {
        return res.status(200).json(timeline);
    }
};
/* harmony default export */ const pages_api_timeline = (timeline);


/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [103], () => (__webpack_exec__(9698)));
module.exports = __webpack_exports__;

})();