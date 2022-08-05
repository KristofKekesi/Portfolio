"use strict";
exports.id = 290;
exports.ids = [290];
exports.modules = {

/***/ 290:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _db__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(7781);

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
        return keywords;
    } catch (error) {
        console.log(error);
    }
}
;
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (getKeywords);


/***/ })

};
;