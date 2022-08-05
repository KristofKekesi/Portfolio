"use strict";
(() => {
var exports = {};
exports.id = 100;
exports.ids = [100];
exports.modules = {

/***/ 5900:
/***/ ((module) => {

module.exports = require("pg");

/***/ }),

/***/ 9775:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ pages_api_articles)
});

// EXTERNAL MODULE: ./db.js
var db = __webpack_require__(9103);
// EXTERNAL MODULE: ./config.js
var config = __webpack_require__(9593);
// EXTERNAL MODULE: ./functions/api/bundles.js
var bundles = __webpack_require__(4833);
;// CONCATENATED MODULE: ./functions/api/articles.js



//    TURTLE - TEKI
//    (°-°) _______
//      \ \/ - - - \_
//       \_  ___  ___>
//         \__) \__)
async function getArticles(id, name, redirect, isVisible, content, skill, tool, sitemapChangeFrequency, sitemapPriority) {
    //console.log("ID: " + id + " Name: " + name + " Redirect: " + redirect + " IsVisible: " + isVisible + " Content: " + content + " Skill: " + skill + " Tool: " + tool, "SitemapChangeFrequency: " + sitemapChangeFrequency + " SitemapPriority: " + sitemapPriority);
    let imports = [
        '"articles"'
    ];
    let selectorQueries = [];
    if (id != undefined) {
        selectorQueries.push('"articles"."id" = ' + id);
    }
    if (name != undefined) {
        selectorQueries.push('LOWER("articles"."name") = LOWER(\'' + name + "')");
    }
    if (redirect != undefined) {
        selectorQueries.push('LOWER("articles"."redirect") = LOWER(\'' + redirect + "')");
    }
    if (isVisible != undefined) {
        selectorQueries.push('"articles"."isVisible" = ' + isVisible);
    }
    if (content != undefined) {
        selectorQueries.push('LOWER("articles"."content") = LOWER(\'' + content + "')");
    }
    if (skill != undefined) {
        imports.push('"article_skills"');
        selectorQueries.push('(LOWER("article_skills"."skill") = LOWER(\'' + skill + '\') AND "articles"."id" = "article_skills"."articleID")');
    }
    if (tool != undefined) {
        imports.push('"article_tools"');
        selectorQueries.push('("article_tools"."toolID" = ' + tool + ' AND "articles"."id" = "article_tools"."articleID")');
    }
    if (sitemapChangeFrequency != undefined) {
        selectorQueries.push('LOWER("articles"."sitemapChangeFrequency") = LOWER(\'' + sitemapChangeFrequency + "')");
    }
    if (sitemapPriority != undefined) {
        selectorQueries.push('"articles"."sitemapPriority" = ' + sitemapPriority);
    }
    imports = "FROM " + imports.join(", ");
    if (selectorQueries.length > 0) {
        selectorQueries = "WHERE " + selectorQueries.join(" AND ");
    } else {
        selectorQueries = "";
    }
    try {
        const mainQuery = 'SELECT "articles".* ' + imports + " " + selectorQueries + ' ORDER BY "articles"."id";';
        //console.log(mainQuery);
        const mainResult = await db/* default.query */.Z.query(mainQuery);
        for(let i = 0; i < mainResult.rows.length; i++){
            mainResult.rows[i].dockElements = [];
            mainResult.rows[i].skills = [];
            mainResult.rows[i].tools = [];
            // Dock elements
            const dockElementsSideQuery = 'SELECT * FROM "article_dockElements" WHERE "articleID" = ' + mainResult.rows[i].id + ";";
            const dockElementsSideResult = await db/* default.query */.Z.query(dockElementsSideQuery);
            for(let j = 0; j < dockElementsSideResult.rows.length; j++){
                mainResult.rows[i].dockElements.push(dockElementsSideResult.rows[j].projectID);
            }
            // Skills
            const skillsSideQuery = 'SELECT * FROM "article_skills" WHERE "articleID" = ' + mainResult.rows[i].id + ' ORDER BY "skill";';
            const skillsSideResult = await db/* default.query */.Z.query(skillsSideQuery);
            for(let j1 = 0; j1 < skillsSideResult.rows.length; j1++){
                mainResult.rows[i].skills.push(skillsSideResult.rows[j1].skill);
            }
            // Tools
            // If About article add all tools
            if (id == 14) {
                let toolsSideQuery = 'SELECT * FROM "tools" ORDER BY "name";';
                const toolsSideResult = await db/* default.query */.Z.query(toolsSideQuery);
                for(let j2 = 0; j2 < toolsSideResult.rows.length; j2++){
                    const tool1 = toolsSideResult.rows[j2];
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
            } else {
                let toolsSideQuery1 = 'SELECT * FROM "article_tools" WHERE "articleID" = ' + mainResult.rows[i].id + ' ORDER BY "toolID";';
                const toolsSideResult1 = await db/* default.query */.Z.query(toolsSideQuery1);
                for(let j3 = 0; j3 < toolsSideResult1.rows.length; j3++){
                    // Tool
                    const toolSideQuery = 'SELECT * FROM "tools" WHERE "id" = ' + toolsSideResult1.rows[j3].toolID + 'ORDER BY "name";';
                    const toolSideResult = await db/* default.query */.Z.query(toolSideQuery);
                    const tool2 = toolSideResult.rows[0];
                    delete tool2.id;
                    // Logo
                    const logoSideQuery1 = 'SELECT * FROM "images" WHERE "id" = ' + tool2.imageID + ";";
                    const logoSideResult1 = await db/* default.query */.Z.query(logoSideQuery1);
                    const logo1 = logoSideResult1.rows[0];
                    delete logo1.id;
                    tool2.logo = logo1;
                    delete tool2.imageID;
                    mainResult.rows[i].tools.push(tool2);
                }
            }
            // Cover
            const coverQuery = 'SELECT * FROM "images" WHERE "id" = ' + mainResult.rows[i].coverID + ";";
            const coverResult = await db/* default.query */.Z.query(coverQuery);
            const cover = coverResult.rows[0];
            delete cover.id;
            mainResult.rows[i].cover = cover;
            delete mainResult.rows[i].coverID;
            // Content
            const contentResponse = await fetch(config/* server */.fw + "/" + encodeURIComponent(mainResult.rows[i].content));
            const content1 = await contentResponse.json();
            // Last Modified header from content
            const lastModified = contentResponse.headers.get("last-modified");
            mainResult.rows[i].lastModified = lastModified;
            // Release date
            mainResult.rows[i].releaseDate = mainResult.rows[i].releaseDate.toString();
            // Back to content
            async function setArticlePreviewSmoll(articlePreviewSmoll) {
                articlePreviewSmoll.articles = [];
                for(let j = 0; j < articlePreviewSmoll.articleIDs.length; j++){
                    const articleQuery = 'SELECT * FROM "articles" WHERE "id" = ' + articlePreviewSmoll.articleIDs[j] + ";";
                    const articleResult = await db/* default.query */.Z.query(articleQuery);
                    const article = articleResult.rows[0];
                    delete article.content;
                    // Cover
                    const coverQuery = 'SELECT * FROM "images" WHERE "id" = ' + article.coverID + ";";
                    const coverResult = await db/* default.query */.Z.query(coverQuery);
                    article.cover = coverResult.rows[0];
                    // Release date
                    article.releaseDate = new Date(article.releaseDate).toString();
                    articlePreviewSmoll.articles.push(article);
                }
                delete articlePreviewSmoll.articleIDs;
                return articlePreviewSmoll;
            }
            async function setArticlePreviewBig(articlePreviewBig) {
                articlePreviewBig.articles = [];
                for(let j = 0; j < articlePreviewBig.articleIDs.length; j++){
                    const articleQuery = 'SELECT * FROM "articles" WHERE "id" = ' + articlePreviewBig.articleIDs[j] + ";";
                    const articleResult = await db/* default.query */.Z.query(articleQuery);
                    const article = articleResult.rows[0];
                    delete article.content;
                    // Cover
                    const coverQuery = 'SELECT * FROM "images" WHERE "id" = ' + article.coverID + ";";
                    const coverResult = await db/* default.query */.Z.query(coverQuery);
                    article.cover = coverResult.rows[0];
                    // Release date
                    article.releaseDate = new Date(article.releaseDate).toString();
                    articlePreviewBig.articles.push(article);
                }
                delete articlePreviewBig.articleIDs;
                return articlePreviewBig;
            }
            async function setGallery(gallery) {
                gallery.images = [];
                for(let j = 0; j < gallery.imageIDs.length; j++){
                    const imageQuery = 'SELECT * FROM "images" WHERE "id" = ' + gallery.imageIDs[j] + ";";
                    const imageResult = await db/* default.query */.Z.query(imageQuery);
                    const image = imageResult.rows[0];
                    delete image.id;
                    gallery.images.push(image);
                }
                delete gallery.imageIDs;
                return gallery;
            }
            async function setProjectBundle(projectBundle) {
                const projectBundleResult = await (0,bundles/* default */.Z)(projectBundle.id, undefined, undefined);
                projectBundle.projectBundle = projectBundleResult[0];
                return projectBundle;
            }
            for(let j4 = 0; j4 < content1.length; j4++){
                if (content1[j4].type == "article-preview-smoll") {
                    content1[j4] = await setArticlePreviewSmoll(content1[j4]);
                } else if (content1[j4].type == "article-preview-big") {
                    content1[j4] = await setArticlePreviewBig(content1[j4]);
                } else if (content1[j4].type == "gallery") {
                    content1[j4] = await setGallery(content1[j4]);
                } else if (content1[j4].type == "project-bundle") {
                    content1[j4] = await setProjectBundle(content1[j4]);
                } else if (content1[j4].type == "section") {
                    for(let k = 0; k < content1[j4].content.length; k++){
                        if (content1[j4].content[k].type == "article-preview-smoll") {
                            content1[j4].content[k] = await setArticlePreviewSmoll(content1[j4].content[k]);
                        } else if (content1[j4].content[k].type == "article-preview-big") {
                            content1[j4].content[k] = await setArticlePreviewBig(content1[j4].content[k]);
                        } else if (content1[j4].content[k].type == "gallery") {
                            content1[j4].content[k] = await setGallery(content1[j4].content[k]);
                        }
                    }
                }
            }
            mainResult.rows[i].content = content1;
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
/* harmony default export */ const api_articles = (getArticles);

;// CONCATENATED MODULE: ./pages/api/articles.js

//    TURTLE - TEKI
//    (°-°) _______
//      \ \/ - - - \_
//       \_  ___  ___>
//         \__) \__)
const articles = async (req, res)=>{
    const { query: { id , name , redirect , isVisible , content , skill , tool , sitemapChangeFrequency , sitemapPriority  } , method ,  } = req;
    const articles = await api_articles(id, name, redirect, isVisible, content, skill, tool, sitemapChangeFrequency, sitemapPriority);
    if (articles == "No results found") {
        return res.status(404).send(articles);
    } else {
        return res.status(200).json(articles);
    }
};
/* harmony default export */ const pages_api_articles = (articles);


/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [103,833], () => (__webpack_exec__(9775)));
module.exports = __webpack_exports__;

})();