"use strict";
(() => {
var exports = {};
exports.id = 115;
exports.ids = [115];
exports.modules = {

/***/ 5900:
/***/ ((module) => {

module.exports = require("pg");

/***/ }),

/***/ 7820:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ pages_api_tool)
});

// EXTERNAL MODULE: ./db.js
var db = __webpack_require__(9103);
;// CONCATENATED MODULE: ./functions/api/tool.js

//    TURTLE - TEKI
//    (°-°) _______
//      \ \/ - - - \_
//       \_  ___  ___>
//         \__) \__)
async function getTool(id) {
    //console.log("ID: " + id);
    let selectorQueries = [];
    if (id != undefined) {
        selectorQueries.push('"tools"."id" = ' + id);
    }
    if (selectorQueries.length > 0) {
        selectorQueries = "WHERE " + selectorQueries.join(" AND ");
    } else {
        return "No query parameters provided";
    }
    try {
        const mainQuery = 'SELECT * FROM "tools"' + selectorQueries + ";";
        //console.log(mainQuery);
        const mainResult = await db/* default.query */.Z.query(mainQuery);
        for(let i = 0; i < mainResult.rows.length; i++){
            // Logo
            const logoSideQuery = 'SELECT * FROM "images" WHERE "id" = ' + mainResult.rows[i].imageID + ";";
            const logoSideResult = await db/* default.query */.Z.query(logoSideQuery);
            const logo = logoSideResult.rows[0];
            delete logo.id;
            mainResult.rows[i].logo = logo;
            delete mainResult.rows[i].imageID;
            return mainResult.rows[0];
        }
        return "No results found";
    } catch (error) {
    //console.log( error );
    }
}
;
/* harmony default export */ const api_tool = (getTool);

;// CONCATENATED MODULE: ./pages/api/tool.js

//    TURTLE - TEKI
//    (°-°) _______
//      \ \/ - - - \_
//       \_  ___  ___>
//         \__) \__)
const tool = async (req, res)=>{
    const { query: { id  } , method ,  } = req;
    const tool = await api_tool(id);
    if (tool == "No results found") {
        return res.status(404).send(tool);
    } else if (tool == "No query parameters provided") {
        return res.status(500).send(tool);
    } else {
        return res.status(200).json(tool);
    }
};
/* harmony default export */ const pages_api_tool = (tool);


/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [103], () => (__webpack_exec__(7820)));
module.exports = __webpack_exports__;

})();