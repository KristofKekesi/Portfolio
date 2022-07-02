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

/***/ 25:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _db__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(9103);

//    TURTLE - TEKI
//    (°-°) _______
//      \ \/ - - - \_
//       \_  ___  ___>
//         \__) \__)
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (async (req, res)=>{
    const { method ,  } = req;
    try {
        const keywords = [
            "Krist\xf3f K\xe9kesi"
        ];
        const toolsQuery = 'SELECT "name" FROM "tools";';
        const toolsResult = await _db__WEBPACK_IMPORTED_MODULE_0__/* ["default"].query */ .Z.query(toolsQuery);
        toolsResult.rows.forEach((tool)=>{
            keywords.push(tool.name);
        });
        const projectsQuery = 'SELECT "name" FROM "projects";';
        const projectsResult = await _db__WEBPACK_IMPORTED_MODULE_0__/* ["default"].query */ .Z.query(projectsQuery);
        projectsResult.rows.forEach((project)=>{
            keywords.push(project.name);
        });
        const skillsQuery = 'SELECT "skill" FROM "project_skills" GROUP BY "skill";';
        const skillsResult = await _db__WEBPACK_IMPORTED_MODULE_0__/* ["default"].query */ .Z.query(skillsQuery);
        skillsResult.rows.forEach((skill)=>{
            keywords.push(skill.skill);
        });
        return res.status(200).json(keywords);
    } catch (error) {
    //console.log( error );
    }
});


/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [103], () => (__webpack_exec__(25)));
module.exports = __webpack_exports__;

})();