"use strict";
(() => {
var exports = {};
exports.id = 254;
exports.ids = [254];
exports.modules = {

/***/ 5900:
/***/ ((module) => {

module.exports = require("pg");

/***/ }),

/***/ 7818:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ pages_api_keywords)
});

// EXTERNAL MODULE: ./db.js
var db = __webpack_require__(9103);
;// CONCATENATED MODULE: ./functions/api/keywords.js

//    TURTLE - TEKI
//    (°-°) _______
//      \ \/ - - - \_
//       \_  ___  ___>
//         \__) \__)
async function getKeywords() {
    try {
        const keywords = [
            "Krist\xf3f K\xe9kesi"
        ];
        const toolsQuery = 'SELECT "name" FROM "tools";';
        const toolsResult = await db/* default.query */.Z.query(toolsQuery);
        toolsResult.rows.forEach((tool)=>{
            keywords.push(tool.name);
        });
        const projectsQuery = 'SELECT "name" FROM "projects";';
        const projectsResult = await db/* default.query */.Z.query(projectsQuery);
        projectsResult.rows.forEach((project)=>{
            keywords.push(project.name);
        });
        const skillsQuery = 'SELECT "skill" FROM "project_skills" GROUP BY "skill";';
        const skillsResult = await db/* default.query */.Z.query(skillsQuery);
        skillsResult.rows.forEach((skill)=>{
            keywords.push(skill.skill);
        });
        return keywords;
    } catch (error) {
        console.log(error);
    }
}
;
/* harmony default export */ const api_keywords = (getKeywords);

;// CONCATENATED MODULE: ./pages/api/keywords.js

//    TURTLE - TEKI
//    (°-°) _______
//      \ \/ - - - \_
//       \_  ___  ___>
//         \__) \__)
const keywords = async (req, res)=>{
    const { method ,  } = req;
    const keywords = await api_keywords();
    return res.status(200).json(keywords);
};
/* harmony default export */ const pages_api_keywords = (keywords);


/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [103], () => (__webpack_exec__(7818)));
module.exports = __webpack_exports__;

})();