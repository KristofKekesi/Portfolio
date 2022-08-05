"use strict";
(() => {
var exports = {};
exports.id = 553;
exports.ids = [553];
exports.modules = {

/***/ 743:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ ArticlePage),
  "getStaticPaths": () => (/* binding */ getStaticPaths),
  "getStaticProps": () => (/* binding */ getStaticProps)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
;// CONCATENATED MODULE: external "qrcode.react"
const external_qrcode_react_namespaceObject = require("qrcode.react");
// EXTERNAL MODULE: ./components/MadeWith/MadeWith.js
var MadeWith = __webpack_require__(7966);
// EXTERNAL MODULE: ./components/Navbar/Navbar.js + 3 modules
var Navbar = __webpack_require__(263);
// EXTERNAL MODULE: ./components/Cursor/Cursor.js
var Cursor = __webpack_require__(7377);
// EXTERNAL MODULE: ./components/ImageGallery/ImageGallery.js
var ImageGallery = __webpack_require__(6382);
// EXTERNAL MODULE: ./components/Dock/Dock.js + 2 modules
var Dock = __webpack_require__(3197);
// EXTERNAL MODULE: ./components/Footer/Footer.js
var Footer = __webpack_require__(1561);
// EXTERNAL MODULE: ./components/Head/Head.js
var Head = __webpack_require__(9188);
// EXTERNAL MODULE: ./config.js
var config = __webpack_require__(1838);
;// CONCATENATED MODULE: ./components/Badges/Badges.js


//    TURTLE - TEKI
//    (°-°) _______
//      \ \/ - - - \_
//       \_  ___  ___>
//         \__) \__)
function Badges(props) {
    let final = [];
    const downloads = props.downloads ?? [];
    const projectName = props.projectName ?? "";
    for(let i = 0; i < downloads.length; i++){
        let badge;
        let platform;
        switch(downloads[i]["type"]){
            case "appleTvAppStore":
                badge = "apple_tv_app_store.svg";
                platform = "Apple TV App Store";
                break;
            case "appStore":
                badge = "app_store.svg";
                platform = "App Store";
                break;
            case "macAppStore":
                badge = "mac_app_store.svg";
                platform = "Mac App Store";
                break;
            case "playStore":
                badge = "google_play_store.png";
                platform = "Google Play Store";
                break;
            case "microsoftStore":
                badge = "microsoft_store.png";
                platform = "Microsoft Store";
                break;
            case "website":
                break;
            default:
                console.log("Unknown download type: " + downloads[i].type);
                break;
        }
        if (downloads[i].isAvailable == downloads[i].isAvailable) {
            if (downloads[i].type == "website") {
                final.push(/*#__PURE__*/ jsx_runtime_.jsx("a", {
                    className: "target",
                    href: downloads[i].value,
                    children: "Website"
                }, i));
            } else {
                final.push(/*#__PURE__*/ jsx_runtime_.jsx("a", {
                    className: "target",
                    href: downloads[i].value,
                    children: /*#__PURE__*/ jsx_runtime_.jsx("img", {
                        className: "h-16",
                        alt: "Download " + projectName + " from " + platform + ".",
                        src: config/* server */.fw + "/" + badge
                    })
                }, i));
            }
        }
    }
    return /*#__PURE__*/ jsx_runtime_.jsx("div", {
        className: "flex flex-wrap gap-3 px-12",
        children: final
    });
};

// EXTERNAL MODULE: ./functions/cursor.js
var cursor = __webpack_require__(4966);
var cursor_default = /*#__PURE__*/__webpack_require__.n(cursor);
// EXTERNAL MODULE: ./functions/navbar.js
var navbar = __webpack_require__(2802);
var navbar_default = /*#__PURE__*/__webpack_require__.n(navbar);
// EXTERNAL MODULE: ./functions/copyright.js
var copyright = __webpack_require__(565);
// EXTERNAL MODULE: ./functions/image-gallery.js
var image_gallery = __webpack_require__(4354);
var image_gallery_default = /*#__PURE__*/__webpack_require__.n(image_gallery);
// EXTERNAL MODULE: ./functions/project-tooltip-position.js
var project_tooltip_position = __webpack_require__(6128);
// EXTERNAL MODULE: ./functions/project-tooltip-state.js
var project_tooltip_state = __webpack_require__(1343);
// EXTERNAL MODULE: ./functions/api/projects.js
var api_projects = __webpack_require__(4684);
;// CONCATENATED MODULE: ./pages/projects/[name].js



















//    TURTLE - TEKI
//    (°-°) _______
//      \ \/ - - - \_
//       \_  ___  ___>
//         \__) \__)
const getStaticPaths = async ()=>{
    const projects = await (0,api_projects/* default */.Z)();
    const paths = [];
    for(let i = 0; i < projects.length; i++){
        paths.push("/projects/" + projects[i].name);
    }
    return {
        paths: paths,
        fallback: false
    };
};
function ArticlePage({ project , dockElements , keywords  }) {
    (0,external_react_.useEffect)(()=>{
        navbar_default()();
        cursor_default()();
        (0,copyright/* default */.Z)([
            project.logo,
            project.screenshots
        ]);
        image_gallery_default()();
        (0,project_tooltip_position/* default */.Z)();
        dockElements.map((dockElement)=>{
            (0,project_tooltip_state/* default */.Z)(dockElement[0].id);
        });
        console.log("%cHello there!\n\n%cIf you are interested in the source code check out this site's repo at https://www.github.com/KristofKekesi/Portfolio.", "color:#ffffff;font-family:system-ui;font-size:2rem;font-weight:bold;text-shadow:2px 2px 0 #5ebd3e, 4px 4px 0 #ffbb00, 6px 6px 0 #f78400, 8px 8px 0 #e23838, 10px 10px 0 #973999, 12px 12px 0 #009cdf", "color:auto;font-size:1rem; font-family:monospace;");
    }, [
        project.logo,
        project.screenshots,
        dockElements
    ]);
    // version
    let versionDiv = null;
    if (project.version != null) {
        versionDiv = /*#__PURE__*/ (0,jsx_runtime_.jsxs)(jsx_runtime_.Fragment, {
            children: [
                /*#__PURE__*/ jsx_runtime_.jsx("h1", {
                    className: "text-subtitle selectable pb-0",
                    children: "Latest version"
                }),
                /*#__PURE__*/ jsx_runtime_.jsx("div", {
                    className: "text selectable",
                    children: project.version
                })
            ]
        });
    }
    // platforms
    let platformDiv = null;
    if (project.platforms.length > 0) {
        platformDiv = /*#__PURE__*/ (0,jsx_runtime_.jsxs)(jsx_runtime_.Fragment, {
            children: [
                /*#__PURE__*/ jsx_runtime_.jsx("h1", {
                    className: "text-subtitle selectable pb-0",
                    children: "Available for"
                }),
                /*#__PURE__*/ jsx_runtime_.jsx("div", {
                    className: "text selectable",
                    children: project.platforms.join(", ").replace(/,([^,]*)$/, " and $1")
                })
            ]
        });
    }
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)(jsx_runtime_.Fragment, {
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx(Head/* default */.Z, {
                title: project.name,
                description: project.description,
                keywords: keywords
            }),
            /*#__PURE__*/ jsx_runtime_.jsx(Navbar/* default */.Z, {}),
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("main", {
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx("center", {
                        className: "w-full bg-cover",
                        style: {
                            paddingTop: "150px",
                            paddingBottom: "75px",
                            backgroundImage: "url(" + config/* server */.fw + "/bg.jpeg)"
                        },
                        children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                            className: "w-max",
                            children: /*#__PURE__*/ jsx_runtime_.jsx("h1", {
                                className: "text-white text-7xl font-bold text-left font-interBold",
                                style: {
                                    paddingTop: "0vh",
                                    textShadow: "6px 6px 12px rgba(0, 0, 0, .5)"
                                },
                                children: project.name
                            })
                        })
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("article", {
                        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                            className: "article-content",
                            children: [
                                /*#__PURE__*/ jsx_runtime_.jsx("h1", {
                                    className: "text-title nosection selectable",
                                    children: project.name
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                    className: "text nosection selectable",
                                    children: project.description
                                }),
                                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                    className: "section",
                                    children: [
                                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                            className: "flex",
                                            children: [
                                                /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                    className: "w-auto h-auto ml-12 mr-0 py-12",
                                                    style: {
                                                        width: "7.5rem",
                                                        height: "7.5rem"
                                                    },
                                                    children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                                        className: "relative flex items-center justify-center",
                                                        style: {
                                                            width: "7.5rem",
                                                            height: "7.5rem"
                                                        },
                                                        children: [
                                                            /*#__PURE__*/ jsx_runtime_.jsx(external_qrcode_react_namespaceObject.QRCodeSVG, {
                                                                value: project.downloads[0].value,
                                                                bgColor: "#ffffff",
                                                                level: "Q",
                                                                className: "fade2 bg-transparent absolute",
                                                                style: {
                                                                    width: "7.5rem",
                                                                    height: "7.5rem",
                                                                    boxSizing: "content-box"
                                                                }
                                                            }),
                                                            /*#__PURE__*/ jsx_runtime_.jsx("img", {
                                                                src: config/* server */.fw + "/" + project.logo.path,
                                                                alt: project.name,
                                                                className: "fade1 absolute",
                                                                style: {
                                                                    maxWidth: "7.5rem",
                                                                    maxHeight: "7.5rem",
                                                                    boxSizing: "content-box"
                                                                }
                                                            })
                                                        ]
                                                    })
                                                }),
                                                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                                    children: [
                                                        /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                            className: "mt-8 h-px"
                                                        }),
                                                        versionDiv,
                                                        /*#__PURE__*/ jsx_runtime_.jsx("h1", {
                                                            className: "text-subtitle selectable pb-0",
                                                            children: "Worked on as"
                                                        }),
                                                        /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                            className: "text selectable",
                                                            children: project.roles.join(", ").replace(/,([^,]*)$/, " and $1")
                                                        }),
                                                        platformDiv,
                                                        /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                            className: "mb-4 h-px"
                                                        }),
                                                        /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                            className: "hidden sm:block",
                                                            children: /*#__PURE__*/ jsx_runtime_.jsx(Badges, {
                                                                className: "mx-20 mb-20",
                                                                downloads: project.downloads,
                                                                projectName: project.name
                                                            })
                                                        })
                                                    ]
                                                })
                                            ]
                                        }),
                                        /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                            className: "block sm:hidden",
                                            children: /*#__PURE__*/ jsx_runtime_.jsx(Badges, {
                                                className: "mx-20 mb-20",
                                                downloads: project.downloads,
                                                projectName: project.name
                                            })
                                        }),
                                        /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                            className: "mt-12 h-px"
                                        })
                                    ]
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx(ImageGallery/* default */.Z, {
                                    galleryTag: "max",
                                    className: "nosection",
                                    images: project.screenshots
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx(MadeWith/* default */.Z, {
                                    tools: project.tools,
                                    title: "Tools that I used while working on " + project.name
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                    className: "mt-10 h-px"
                                })
                            ]
                        })
                    })
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
const getStaticProps = async (params)=>{
    const project = await (0,api_projects/* default */.Z)(undefined, params.params.name);
    const keywords = [
        "Krist\xf3f K\xe9kesi"
    ];
    keywords.push.apply(keywords, project[0].skills);
    project[0].tools.forEach((tool)=>{
        keywords.push(tool.name);
    });
    const dockElements = [];
    for(let i = 0; i < config/* defaultDockElementIDs.length */.hU.length; i++){
        const project1 = await (0,api_projects/* default */.Z)(config/* defaultDockElementIDs */.hU[i]);
        dockElements.push(project1);
    }
    return {
        props: {
            project: project[0],
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
var __webpack_require__ = require("../../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [952,835,509,561,863], () => (__webpack_exec__(743)));
module.exports = __webpack_exports__;

})();