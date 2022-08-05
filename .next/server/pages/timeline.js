"use strict";
(() => {
var exports = {};
exports.id = 463;
exports.ids = [463];
exports.modules = {

/***/ 2258:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ Timeline),
  "getStaticProps": () => (/* binding */ getStaticProps)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
// EXTERNAL MODULE: ./node_modules/next/link.js
var next_link = __webpack_require__(1664);
var link_default = /*#__PURE__*/__webpack_require__.n(next_link);
// EXTERNAL MODULE: ./components/Navbar/Navbar.js + 3 modules
var Navbar = __webpack_require__(263);
// EXTERNAL MODULE: ./components/Dock/Dock.js + 2 modules
var Dock = __webpack_require__(3197);
// EXTERNAL MODULE: ./components/Footer/Footer.js
var Footer = __webpack_require__(1561);
// EXTERNAL MODULE: ./components/Cursor/Cursor.js
var Cursor = __webpack_require__(7377);
// EXTERNAL MODULE: ./components/Head/Head.js
var Head = __webpack_require__(9188);
// EXTERNAL MODULE: ./functions/navbar.js
var navbar = __webpack_require__(2802);
var navbar_default = /*#__PURE__*/__webpack_require__.n(navbar);
// EXTERNAL MODULE: ./functions/cursor.js
var cursor = __webpack_require__(4966);
var cursor_default = /*#__PURE__*/__webpack_require__.n(cursor);
// EXTERNAL MODULE: ./functions/project-tooltip-state.js
var project_tooltip_state = __webpack_require__(1343);
// EXTERNAL MODULE: ./functions/project-tooltip-position.js
var project_tooltip_position = __webpack_require__(6128);
// EXTERNAL MODULE: ./config.js
var config = __webpack_require__(1838);
// EXTERNAL MODULE: ./db.js
var db = __webpack_require__(7781);
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
/* harmony default export */ const timeline = (getTimeline);

// EXTERNAL MODULE: ./functions/api/projects.js
var projects = __webpack_require__(4684);
// EXTERNAL MODULE: ./functions/api/keywords.js
var api_keywords = __webpack_require__(290);
;// CONCATENATED MODULE: ./pages/timeline.js
















//    TURTLE - TEKI
//    (°-°) _______
//      \ \/ - - - \_
//       \_  ___  ___>
//         \__) \__)
function Timeline({ timestamps , dockElements , keywords  }) {
    (0,external_react_.useEffect)(()=>{
        navbar_default()();
        cursor_default()();
        //setImageGalleries();
        (0,project_tooltip_position/* default */.Z)();
        dockElements.map((dockElement)=>{
            (0,project_tooltip_state/* default */.Z)(dockElement[0].id);
        });
        console.log("%cHello there!\n\n%cIf you are interested in the source code check out this site's repo at https://www.github.com/KristofKekesi/Portfolio.", "color:#ffffff;font-family:system-ui;font-size:2rem;font-weight:bold;text-shadow:2px 2px 0 #5ebd3e, 4px 4px 0 #ffbb00, 6px 6px 0 #f78400, 8px 8px 0 #e23838, 10px 10px 0 #973999, 12px 12px 0 #009cdf", "color:auto;font-size:1rem; font-family:monospace;");
    }, [
        dockElements
    ]);
    timestamps.map((timestamp)=>{
        timestamp.date = new Date(timestamp.date);
    });
    const years = [];
    timestamps.forEach((timestamp)=>{
        if (!years.includes(timestamp.date.getFullYear())) {
            years.push(timestamp.date.getFullYear());
        }
    });
    const yearpicker = /*#__PURE__*/ jsx_runtime_.jsx("div", {
        className: "hidden md:flex mt-10 flex-col",
        children: years.map((year)=>{
            return /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                href: "#" + year,
                children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                    className: "text-title target",
                    children: year
                })
            }, year);
        })
    });
    const organisedTimestamps = {};
    timestamps.forEach((timestamp)=>{
        // Years
        if (!organisedTimestamps[timestamp.date.getFullYear()]) {
            organisedTimestamps[timestamp.date.getFullYear()] = {};
        }
        if (!timestamp.showMonth) {
            if (!organisedTimestamps[timestamp.date.getFullYear()]["undefined"]) {
                organisedTimestamps[timestamp.date.getFullYear()]["undefined"] = [];
            }
            organisedTimestamps[timestamp.date.getFullYear()]["undefined"].push(timestamp);
            return;
        }
        // Months
        if (!organisedTimestamps[timestamp.date.getFullYear()][timestamp.date.getMonth()]) {
            organisedTimestamps[timestamp.date.getFullYear()][timestamp.date.getMonth()] = {};
        }
        if (timestamp.showMonth && !timestamp.showDay) {
            if (!organisedTimestamps[timestamp.date.getFullYear()][timestamp.date.getMonth()]["undefined"]) {
                organisedTimestamps[timestamp.date.getFullYear()][timestamp.date.getMonth()]["undefined"] = [];
            }
            organisedTimestamps[timestamp.date.getFullYear()][timestamp.date.getMonth()]["undefined"].push(timestamp);
            return;
        }
        // Days
        if (!organisedTimestamps[timestamp.date.getFullYear()][timestamp.date.getMonth()][timestamp.date.getDate()]) {
            organisedTimestamps[timestamp.date.getFullYear()][timestamp.date.getMonth()][timestamp.date.getDate()] = [];
        }
        organisedTimestamps[timestamp.date.getFullYear()][timestamp.date.getMonth()][timestamp.date.getDate()].push(timestamp);
    });
    const timeline = /*#__PURE__*/ (0,jsx_runtime_.jsxs)("article", {
        id: "timeline",
        className: "flex flex-nowrap flex-row items-start justify-center bg-white",
        children: [
            yearpicker,
            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                className: "sticky mt-10 hidden md:flex",
                style: {
                    backgroundImage: `url('bg.jpeg')`,
                    top: "50px",
                    left: "0px",
                    width: "1rem",
                    height: "calc(100vh)",
                    marginBottom: "40px"
                },
                children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                    className: "sticky blur-dark",
                    style: {
                        width: "1rem",
                        height: "100"
                    }
                })
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                children: Object.keys(organisedTimestamps).map((year)=>{
                    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                        className: "m-10 section",
                        children: [
                            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                className: "h-px mb-10"
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                id: year,
                                className: "text-title selectable",
                                children: year
                            }),
                            organisedTimestamps[year]["undefined"] ? organisedTimestamps[year]["undefined"].map((timestamp)=>{
                                return /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                    className: "text selectable",
                                    dangerouslySetInnerHTML: {
                                        __html: timestamp.name
                                    }
                                }, timestamp.id);
                            }) : null,
                            Object.keys(organisedTimestamps[year]).map((month)=>{
                                if (month == "undefined") {
                                    {
                                        organisedTimestamps[year][month].map((timestamp)=>{
                                            return /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                className: "text selectable",
                                                dangerouslySetInnerHTML: {
                                                    __html: timestamp.name
                                                }
                                            }, timestamp.id);
                                        });
                                    }
                                } else {
                                    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                        children: [
                                            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                className: "text-subtitle selectable",
                                                style: {
                                                    paddingTop: "0"
                                                },
                                                children: config/* months */.e7[month]
                                            }),
                                            Object.keys(organisedTimestamps[year][month]).map((day)=>{
                                                if (day == "undefined") {
                                                    return organisedTimestamps[year][month][day].map((timestamp)=>{
                                                        return /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                            className: "text selectable",
                                                            dangerouslySetInnerHTML: {
                                                                __html: timestamp.name
                                                            }
                                                        }, timestamp.id);
                                                    });
                                                } else {
                                                    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                                        children: [
                                                            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                                className: "text-subsubtitle selectable",
                                                                children: config/* months */.e7[month] + " " + day
                                                            }),
                                                            organisedTimestamps[year][month][day].map((timestamp)=>{
                                                                return /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                                    className: "text selectable",
                                                                    dangerouslySetInnerHTML: {
                                                                        __html: timestamp.name
                                                                    }
                                                                }, timestamp.id);
                                                            })
                                                        ]
                                                    }, day);
                                                }
                                            })
                                        ]
                                    }, month);
                                }
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                className: "h-px mt-10"
                            })
                        ]
                    }, year);
                })
            })
        ]
    });
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)(jsx_runtime_.Fragment, {
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx(Head/* default */.Z, {
                title: "Timeline",
                description: "Important dates and events in my career.",
                keywords: keywords
            }),
            /*#__PURE__*/ jsx_runtime_.jsx(Navbar/* default */.Z, {}),
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("main", {
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx("center", {
                        className: "w-screen bg-cover",
                        style: {
                            paddingTop: "150px",
                            paddingBottom: "75px",
                            backgroundImage: `url('bg.jpeg')`
                        },
                        children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                            className: "w-max",
                            children: /*#__PURE__*/ jsx_runtime_.jsx("h1", {
                                className: "text-white text-7xl font-bold text-left font-interBold",
                                style: {
                                    paddingTop: "0vh",
                                    textShadow: "6px 6px 12px rgba(0, 0, 0, .5)"
                                },
                                children: "Timeline"
                            })
                        })
                    }),
                    timeline
                ]
            }),
            /*#__PURE__*/ jsx_runtime_.jsx(Dock/* default */.Z, {
                elements: dockElements
            }),
            /*#__PURE__*/ jsx_runtime_.jsx(Footer/* default */.Z, {}),
            /*#__PURE__*/ jsx_runtime_.jsx(Cursor/* default */.Z, {})
        ]
    });
};
const getStaticProps = async (_)=>{
    const timestamps = await timeline();
    const dockElements = [];
    for(let i = 0; i < config/* defaultDockElementIDs.length */.hU.length; i++){
        const project = await (0,projects/* default */.Z)(config/* defaultDockElementIDs */.hU[i]);
        dockElements.push(project);
    }
    const keywords = await (0,api_keywords/* default */.Z)();
    return {
        props: {
            timestamps: timestamps,
            dockElements: dockElements,
            keywords: keywords.join(", ")
        }
    };
};


/***/ }),

/***/ 3280:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/app-router-context.js");

/***/ }),

/***/ 2796:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/head-manager-context.js");

/***/ }),

/***/ 4014:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/i18n/normalize-locale-path.js");

/***/ }),

/***/ 8524:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/is-plain-object.js");

/***/ }),

/***/ 8020:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/mitt.js");

/***/ }),

/***/ 4406:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/page-path/denormalize-page-path.js");

/***/ }),

/***/ 4964:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router-context.js");

/***/ }),

/***/ 1751:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/add-path-prefix.js");

/***/ }),

/***/ 299:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/format-next-pathname-info.js");

/***/ }),

/***/ 3938:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/format-url.js");

/***/ }),

/***/ 9565:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/get-asset-path-from-route.js");

/***/ }),

/***/ 5789:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/get-next-pathname-info.js");

/***/ }),

/***/ 1428:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/is-dynamic.js");

/***/ }),

/***/ 8854:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/parse-path.js");

/***/ }),

/***/ 1292:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/parse-relative-url.js");

/***/ }),

/***/ 4567:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/path-has-prefix.js");

/***/ }),

/***/ 979:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/querystring.js");

/***/ }),

/***/ 3297:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/remove-trailing-slash.js");

/***/ }),

/***/ 6052:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/resolve-rewrites.js");

/***/ }),

/***/ 4226:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/route-matcher.js");

/***/ }),

/***/ 5052:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/route-regex.js");

/***/ }),

/***/ 9232:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/utils.js");

/***/ }),

/***/ 968:
/***/ ((module) => {

module.exports = require("next/head");

/***/ }),

/***/ 1853:
/***/ ((module) => {

module.exports = require("next/router");

/***/ }),

/***/ 5900:
/***/ ((module) => {

module.exports = require("pg");

/***/ }),

/***/ 6689:
/***/ ((module) => {

module.exports = require("react");

/***/ }),

/***/ 997:
/***/ ((module) => {

module.exports = require("react/jsx-runtime");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [952,835,509,561,290], () => (__webpack_exec__(2258)));
module.exports = __webpack_exports__;

})();