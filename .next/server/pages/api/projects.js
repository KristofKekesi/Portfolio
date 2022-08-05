"use strict";
(() => {
var exports = {};
exports.id = 646;
exports.ids = [646];
exports.modules = {

/***/ 5900:
/***/ ((module) => {

module.exports = require("pg");

/***/ }),

/***/ 2113:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ pages_api_projects)
});

// EXTERNAL MODULE: ./db.js
var db = __webpack_require__(9103);
;// CONCATENATED MODULE: ./functions/api/projects.js

//    TURTLE - TEKI
//    (°-°) _______
//      \ \/ - - - \_
//       \_  ___  ___>
//         \__) \__)
async function getProjects(id, name, version, role, platform, bundle, download, skill, tool) {
    //console.log("ID: " + id + " Name: " + name + " Version: " + version + " Role: " + role + " Platform: " + platform + " Bundle: " + bundle + " Download: " + download + " Skill: " + skill + " Tool: " + tool);
    let imports = [
        '"projects"'
    ];
    let selectorQueries = [];
    if (id != undefined) {
        selectorQueries.push('"projects"."id" = ' + id);
    }
    if (name != undefined) {
        selectorQueries.push('LOWER("projects"."name") = LOWER(\'' + name + "')");
    }
    if (version != undefined) {
        selectorQueries.push('"projects"."version" = \'' + version + "'");
    }
    if (role != undefined) {
        imports.push('"project_roles"');
        selectorQueries.push('(LOWER("project_roles"."role") = LOWER(\'' + role + '\') AND "projects"."id" = "project_roles"."projectID")');
    }
    if (platform != undefined) {
        imports.push('"project_platforms"');
        selectorQueries.push('(LOWER("project_platforms"."platform") = LOWER(\'' + platform + '\') AND "projects"."id" = "project_platforms"."projectID")');
    }
    if (bundle != undefined) {
        imports.push('"project_bundles"');
        selectorQueries.push('("project_bundles"."bundleID" = \'' + bundle + '\' AND "projects"."id" = "project_bundles"."projectID")');
    }
    if (download != undefined) {
        imports.push('"project_downloads"');
        selectorQueries.push('(LOWER("project_downloads"."type") = LOWER(\'' + download + '\') AND "projects"."id" = "project_downloads"."projectID")');
    }
    if (skill != undefined) {
        imports.push('"project_skills"');
        selectorQueries.push('(LOWER("project_skills"."skill") = LOWER(\'' + skill + '\') AND "projects"."id" = "project_skills"."projectID")');
    }
    if (tool != undefined) {
        imports.push('"project_tools"');
        selectorQueries.push('("project_tools"."toolID" = ' + tool + ' AND "projects"."id" = "project_tools"."projectID")');
    }
    imports = "FROM " + imports.join(", ");
    if (selectorQueries.length > 0) {
        selectorQueries = "WHERE " + selectorQueries.join(" AND ");
    } else {
        selectorQueries = "";
    }
    try {
        const mainQuery = 'SELECT "projects".* ' + imports + " " + selectorQueries + ' ORDER BY "projects"."id";';
        //console.log(mainQuery);
        const mainResult = await db/* default.query */.Z.query(mainQuery);
        for(let i = 0; i < mainResult.rows.length; i++){
            mainResult.rows[i].bundleIDs = [];
            mainResult.rows[i].downloads = [];
            mainResult.rows[i].platforms = [];
            mainResult.rows[i].roles = [];
            mainResult.rows[i].screenshots = [];
            mainResult.rows[i].skills = [];
            mainResult.rows[i].tools = [];
            // Project Bundles
            const bundlesSideQuery = 'SELECT * FROM "project_bundles" WHERE "projectID" = ' + mainResult.rows[i].id + ";";
            const bundlesSideResult = await db/* default.query */.Z.query(bundlesSideQuery);
            for(let j = 0; j < bundlesSideResult.rows.length; j++){
                mainResult.rows[i].bundleIDs.push(bundlesSideResult.rows[j].bundleID);
            }
            // Downloads
            const downloadsSideQuery = 'SELECT * FROM "project_downloads" WHERE "projectID" = ' + mainResult.rows[i].id + ";";
            const downloadsSideResult = await db/* default.query */.Z.query(downloadsSideQuery);
            for(let j1 = 0; j1 < downloadsSideResult.rows.length; j1++){
                delete downloadsSideResult.rows[j1].projectID;
                mainResult.rows[i].downloads.push(downloadsSideResult.rows[j1]);
            }
            // Platforms
            const platformsSideQuery = 'SELECT * FROM "project_platforms" WHERE "projectID" = ' + mainResult.rows[i].id + ";";
            const platformsSideResult = await db/* default.query */.Z.query(platformsSideQuery);
            for(let j2 = 0; j2 < platformsSideResult.rows.length; j2++){
                mainResult.rows[i].platforms.push(platformsSideResult.rows[j2].platform);
            }
            // Roles
            const rolesSideQuery = 'SELECT * FROM "project_roles" WHERE "projectID" = ' + mainResult.rows[i].id + ";";
            const rolesSideResult = await db/* default.query */.Z.query(rolesSideQuery);
            for(let j3 = 0; j3 < rolesSideResult.rows.length; j3++){
                mainResult.rows[i].roles.push(rolesSideResult.rows[j3].role);
            }
            // Screenshots
            const screenshotsSideQuery = 'SELECT * FROM "project_screenshots" WHERE "projectID" = ' + mainResult.rows[i].id + ";";
            const screenshotsSideResult = await db/* default.query */.Z.query(screenshotsSideQuery);
            for(let j4 = 0; j4 < screenshotsSideResult.rows.length; j4++){
                const screenshotSideQuery = 'SELECT * FROM images WHERE "id" = ' + screenshotsSideResult.rows[j4].imageID + ";";
                const screenshotSideResult = await db/* default.query */.Z.query(screenshotSideQuery);
                const screenshot = screenshotSideResult.rows[0];
                delete screenshot.id;
                mainResult.rows[i].screenshots.push(screenshot);
            }
            // Skills
            const skillsSideQuery = 'SELECT * FROM "project_skills" WHERE "projectID" = ' + mainResult.rows[i].id + ";";
            const skillsSideResult = await db/* default.query */.Z.query(skillsSideQuery);
            for(let j5 = 0; j5 < skillsSideResult.rows.length; j5++){
                mainResult.rows[i].skills.push(skillsSideResult.rows[j5].skill);
            }
            // Tools
            const toolsSideQuery = 'SELECT * FROM "project_tools" WHERE "projectID" = ' + mainResult.rows[i].id + ";";
            const toolsSideResult = await db/* default.query */.Z.query(toolsSideQuery);
            for(let j6 = 0; j6 < toolsSideResult.rows.length; j6++){
                // Tool
                const toolSideQuery = 'SELECT * FROM "tools" WHERE "id" = ' + toolsSideResult.rows[j6].toolID + ";";
                const toolSideResult = await db/* default.query */.Z.query(toolSideQuery);
                const tool1 = toolSideResult.rows[0];
                delete tool1.id;
                // Logo
                const logoSideQuery = 'SELECT * FROM "images" WHERE "id" = ' + tool1.imageID + ";";
                const logoSideResult = await db/* default.query */.Z.query(logoSideQuery);
                const logo = logoSideResult.rows[0];
                delete logo.id;
                tool1.logo = logo;
                delete tool1.imageID;
                mainResult.rows[i].tools.push(tool1);
            }
            // Logo
            const logoSideQuery1 = 'SELECT * FROM "images" WHERE "id" = ' + mainResult.rows[i].logoID + ";";
            const logoSideResult1 = await db/* default.query */.Z.query(logoSideQuery1);
            const logo1 = logoSideResult1.rows[0];
            delete logo1.id;
            mainResult.rows[i].logo = logo1;
            delete mainResult.rows[i].logoID;
            // Date added
            mainResult.rows[i].dateAdded = new Date(mainResult.rows[i].dateAdded).toString();
            if (i === mainResult.rows.length - 1) {
                return mainResult.rows;
            }
        }
        return "No results found";
    } catch (error) {
        console.log(error);
    }
}
/* harmony default export */ const api_projects = (getProjects);

;// CONCATENATED MODULE: ./pages/api/projects.js

//    TURTLE - TEKI
//    (°-°) _______
//      \ \/ - - - \_
//       \_  ___  ___>
//         \__) \__)
const projects = async (req, res)=>{
    const { query: { id , name , version , role , platform , bundle , download , skill , tool  } , method ,  } = req;
    const projects = await api_projects(id, name, version, role, platform, bundle, download, skill, tool);
    if (projects == "No results found") {
        return res.status(404).send(projects);
    } else {
        return res.status(200).json(projects);
    }
};
/* harmony default export */ const pages_api_projects = (projects);


/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [103], () => (__webpack_exec__(2113)));
module.exports = __webpack_exports__;

})();