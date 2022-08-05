"use strict";
exports.id = 833;
exports.ids = [833];
exports.modules = {

/***/ 4833:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _db__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(9103);

//    TURTLE - TEKI
//    (°-°) _______
//      \ \/ - - - \_
//       \_  ___  ___>
//         \__) \__)
async function getBundles(id, name, app) {
    //console.log("ID: " + id + " Name: " + name + " App: " + app);
    let imports = [
        '"bundles"'
    ];
    let selectorQueries = [];
    if (id != undefined) {
        selectorQueries.push('"bundles"."id" = ' + id);
    }
    if (name != undefined) {
        selectorQueries.push('LOWER("bundles"."name") = LOWER(\'' + name + "')");
    }
    if (app != undefined) {
        imports.push('"project_bundles"');
        selectorQueries.push('("project_bundles"."projectID" = ' + app + ' AND "bundles"."id" = "project_bundles"."bundleID")');
    }
    if (selectorQueries.length > 0) {
        selectorQueries = "WHERE " + selectorQueries.join(" AND ");
    } else {
        selectorQueries = "";
    }
    try {
        const mainQuery = 'SELECT "bundles".* FROM ' + imports + " " + selectorQueries + ' ORDER BY "bundles"."id";';
        //console.log(mainQuery);
        const mainResult = await _db__WEBPACK_IMPORTED_MODULE_0__/* ["default"].query */ .Z.query(mainQuery);
        for(let i = 0; i < mainResult.rows.length; i++){
            mainResult.rows[i].projects = [];
            // Projects
            const projectsSideQuery = 'SELECT * FROM "project_bundles" WHERE "bundleID" = ' + mainResult.rows[i].id + ";";
            const projectsSideResult = await _db__WEBPACK_IMPORTED_MODULE_0__/* ["default"].query */ .Z.query(projectsSideQuery);
            for(let j = 0; j < projectsSideResult.rows.length; j++){
                // Project
                const projectSideQuery = 'SELECT * FROM "projects" WHERE "id" = ' + projectsSideResult.rows[j].projectID + ";";
                const projectSideResult = await _db__WEBPACK_IMPORTED_MODULE_0__/* ["default"].query */ .Z.query(projectSideQuery);
                // Project date added
                projectSideResult.rows[i].dateAdded = new Date(projectSideResult.rows[i].dateAdded).toString();
                const project = projectSideResult.rows[0];
                // Logo
                const logoSideQuery = 'SELECT * FROM "images" WHERE "id" = ' + projectSideResult.rows[0].logoID + ";";
                const logoSideResult = await _db__WEBPACK_IMPORTED_MODULE_0__/* ["default"].query */ .Z.query(logoSideQuery);
                const logo = logoSideResult.rows[0];
                delete logo.id;
                project.logo = logo;
                delete project.logoID;
                mainResult.rows[i].projects.push(project);
            }
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
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (getBundles);


/***/ })

};
;