"use strict";
exports.id = 509;
exports.ids = [509];
exports.modules = {

/***/ 7377:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (/* binding */ Cursor)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);


//    TURTLE - TEKI
//    (°-°) _______
//      \ \/ - - - \_
//       \_  ___  ___>
//         \__) \__)
class Cursor extends react__WEBPACK_IMPORTED_MODULE_1__.Component {
    render() {
        return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
            className: "z-50 fixed rounded-full -translate-x-1/2 -translate-y-1/2 pointer-events-none top-1/2 -left-full opacity-100 h-8 w-8",
            id: "cursor"
        });
    }
};


/***/ }),

/***/ 3197:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": () => (/* binding */ Dock)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
// EXTERNAL MODULE: ./config.js
var config = __webpack_require__(1838);
;// CONCATENATED MODULE: ./components/DockElement/DockElement.js



//    TURTLE - TEKI
//    (°-°) _______
//      \ \/ - - - \_
//       \_  ___  ___>
//         \__) \__)
function DockElement(props) {
    (0,external_react_.useEffect)(()=>{
        window.removeEventListener("popstate", function() {
            window.location.reload();
        });
        window.addEventListener("popstate", function() {
            window.location.reload();
        });
    }, [
        props.id
    ]);
    let projectName = props.project.name.substring(0, 12);
    ;
    if (props.project.name !== projectName) {
        projectName += "...";
    }
    return /*#__PURE__*/ jsx_runtime_.jsx("a", {
        href: config/* server */.fw + "/projects/" + encodeURIComponent(props.project.name),
        children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
            className: "radius24 dock-element target",
            id: "dock-element-id-" + props.project.id,
            children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("center", {
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx("img", {
                        src: config/* server */.fw + "/" + props.project.logo.path,
                        alt: projectName
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("p", {
                        className: "nowrap basis-full h-0 text-white",
                        children: projectName
                    })
                ]
            })
        })
    });
};
;

;// CONCATENATED MODULE: ./components/ProjectTooltip/ProjectTooltip.js

//    TURTLE - TEKI
//    (°-°) _______
//      \ \/ - - - \_
//       \_  ___  ___>
//         \__) \__)
function ProjectTooltip(props) {
    let platforms = null;
    if (props.project.platforms.length != 0) {
        platforms = /*#__PURE__*/ (0,jsx_runtime_.jsxs)(jsx_runtime_.Fragment, {
            children: [
                /*#__PURE__*/ jsx_runtime_.jsx("hr", {
                    width: "100%"
                }),
                /*#__PURE__*/ jsx_runtime_.jsx("li", {
                    children: /*#__PURE__*/ jsx_runtime_.jsx("center", {
                        children: /*#__PURE__*/ jsx_runtime_.jsx("span", {
                            className: "nowrap",
                            children: props.project.platforms.join(" \xb7 ")
                        })
                    })
                })
            ]
        });
    }
    return /*#__PURE__*/ jsx_runtime_.jsx("div", {
        style: {
            overflow: "hidden"
        },
        children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
            id: "project-tooltip-id-" + props.project.id,
            style: {
                position: "fixed",
                display: "none"
            },
            className: "blur-dark project-tooltip z-40 w-min sticky rounded-2xl text-primaryLightHover",
            children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("ul", {
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx("li", {
                        children: /*#__PURE__*/ jsx_runtime_.jsx("center", {
                            className: "nowrap",
                            id: "project-tooltip-id-" + props.project.id + "-name",
                            children: props.project["name"]
                        })
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("hr", {
                        width: "100%"
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("li", {
                        children: /*#__PURE__*/ jsx_runtime_.jsx("center", {
                            children: /*#__PURE__*/ jsx_runtime_.jsx("q", {
                                style: {
                                    textAlign: "justify"
                                },
                                children: props.project["description"]
                            })
                        })
                    }),
                    platforms
                ]
            })
        })
    });
}
/* harmony default export */ const ProjectTooltip_ProjectTooltip = (ProjectTooltip);

;// CONCATENATED MODULE: ./components/Dock/Dock.js



//    TURTLE - TEKI
//    (°-°) _______
//      \ \/ - - - \_
//       \_  ___  ___>
//         \__) \__)
function Dock(props) {
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)(jsx_runtime_.Fragment, {
        children: [
            props.elements.map((element)=>/*#__PURE__*/ jsx_runtime_.jsx(ProjectTooltip_ProjectTooltip, {
                    project: element[0]
                }, element[0].id)),
            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                id: "dock",
                className: "blur-dark z-30 fixed inline-block text-primaryLightHover bottom-0 md:bottom-3 left-1/2 p-3 rounded-none md:rounded-2xl",
                children: /*#__PURE__*/ jsx_runtime_.jsx("center", {
                    children: props.elements.map((element)=>/*#__PURE__*/ jsx_runtime_.jsx(DockElement, {
                            project: element[0]
                        }, element[0].id))
                })
            })
        ]
    });
};
;


/***/ }),

/***/ 9188:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (/* binding */ AutoHead)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(968);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_script__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(4298);
/* harmony import */ var next_script__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_script__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(1838);




//    TURTLE - TEKI
//    (°-°) _______
//      \ \/ - - - \_
//       \_  ___  ___>
//         \__) \__)
function AutoHead(props) {
    const description = props.description || _config__WEBPACK_IMPORTED_MODULE_3__/* .defaultDescription */ .H6;
    const opengraph = props.opengraph || _config__WEBPACK_IMPORTED_MODULE_3__/* .defaultOpenGraphImage */ .VI;
    const favicon = props.favicon || _config__WEBPACK_IMPORTED_MODULE_3__/* .defaultFavicon */ .iI;
    const keywords = props.keywords;
    const title = props.title;
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
        children: [
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)((next_head__WEBPACK_IMPORTED_MODULE_1___default()), {
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("meta", {
                        charSet: "utf-8"
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("link", {
                        rel: "icon",
                        href: favicon
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("meta", {
                        name: "viewport",
                        content: "width=device-width, initial-scale=1"
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("meta", {
                        name: "theme-color",
                        content: "#ffffff"
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("meta", {
                        name: "author",
                        content: "Krist\xf3f K\xe9kesi"
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("meta", {
                        name: "description",
                        content: description
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("meta", {
                        name: "keywords",
                        content: keywords
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("meta", {
                        name: "twitter:card",
                        content: "summary"
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("meta", {
                        name: "twitter:site",
                        content: "@KristofKekesi"
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("meta", {
                        name: "twitter:title",
                        content: "Krist\xf3f K\xe9kesi"
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("meta", {
                        name: "twitter:description",
                        content: description.replace(/(<([^>]+)>)/ig, "")
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("meta", {
                        name: "twitter:image",
                        content: opengraph
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("meta", {
                        name: "og:url",
                        content: _config__WEBPACK_IMPORTED_MODULE_3__/* .server */ .fw
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("meta", {
                        name: "og:type",
                        content: "website"
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("meta", {
                        name: "og:description",
                        content: description.replace(/(<([^>]+)>)/ig, "")
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("meta", {
                        name: "og:image",
                        content: opengraph
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("link", {
                        rel: "apple-touch-icon",
                        href: favicon
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("meta", {
                        name: "apple-mobile-web-app-status-bar",
                        content: "#ffffff"
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("link", {
                        rel: "manifest",
                        href: _config__WEBPACK_IMPORTED_MODULE_3__/* .server */ .fw + "/manifest.json"
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("title", {
                        children: title.replace(/(<([^>]+)>)/ig, "")
                    })
                ]
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_script__WEBPACK_IMPORTED_MODULE_2___default()), {
                async: "",
                src: "https://www.googletagmanager.com/gtag/js?id=G-NMTQ12KGY9"
            })
        ]
    });
};


/***/ }),

/***/ 263:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": () => (/* binding */ Navbar_Navbar)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: ./config.js
var config = __webpack_require__(1838);
;// CONCATENATED MODULE: ./components/Hamburger/Hamburger.js


//    TURTLE - TEKI
//    (°-°) _______
//      \ \/ - - - \_
//       \_  ___  ___>
//         \__) \__)
function Hamburger() {
    return /*#__PURE__*/ jsx_runtime_.jsx("div", {
        className: "target relative md:hidden mr-10 h-7 w-7",
        children: /*#__PURE__*/ jsx_runtime_.jsx("img", {
            src: config/* server */.fw + "/hamburger.svg",
            id: "hamburger",
            alt: "Hamburger",
            layout: "fill"
        })
    });
};

// EXTERNAL MODULE: ./node_modules/next/link.js
var next_link = __webpack_require__(1664);
var link_default = /*#__PURE__*/__webpack_require__.n(next_link);
;// CONCATENATED MODULE: ./components/MoreTooltip/MoreTooltip.js


//    TURTLE - TEKI
//    (°-°) _______
//      \ \/ - - - \_
//       \_  ___  ___>
//         \__) \__)
function MoreTooltip() {
    return /*#__PURE__*/ jsx_runtime_.jsx("div", {
        className: "hidden md:block",
        children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
            id: "more-tooltip",
            className: "blur-dark fixed right-3 hidden rounded-2xl z-10",
            children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("ul", {
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx("li", {
                        children: /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                            href: "/translations",
                            children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                className: "target",
                                children: "Translations"
                            })
                        })
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("li", {
                        children: /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                            href: "/photography",
                            children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                className: "target",
                                children: "Photography"
                            })
                        })
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("hr", {
                        className: "w-full"
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("li", {
                        children: /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                            href: "/timeline",
                            children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                className: "target",
                                children: "Timeline"
                            })
                        })
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("li", {
                        children: /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                            href: "/about",
                            children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                className: "target",
                                children: "About"
                            })
                        })
                    })
                ]
            })
        })
    });
}
/* harmony default export */ const MoreTooltip_MoreTooltip = (MoreTooltip);

// EXTERNAL MODULE: ./functions/more-tooltip.js
var more_tooltip = __webpack_require__(7625);
var more_tooltip_default = /*#__PURE__*/__webpack_require__.n(more_tooltip);
// EXTERNAL MODULE: external "next/router"
var router_ = __webpack_require__(1853);
;// CONCATENATED MODULE: ./components/Navbar/NavbarLink.js



//    TURTLE - TEKI
//    (°-°) _______
//      \ \/ - - - \_
//       \_  ___  ___>
//         \__) \__)
function NavbarLink(props) {
    const router = (0,router_.useRouter)() ?? "";
    if (router.pathname === "/" && props.path === "/") {
        return /*#__PURE__*/ jsx_runtime_.jsx("a", {
            href: props.path,
            className: "target text-homeAccentLight font-normal font-interBold md:font-bold",
            children: props.children
        });
    } else if (router.pathname !== "/" && props.path === "/") {
        return /*#__PURE__*/ jsx_runtime_.jsx("a", {
            href: props.path,
            className: "text-homeAccentLight font-normal font-interBold md:font-bold",
            children: props.children
        });
    } else if (router.pathname === props.path) {
        return /*#__PURE__*/ jsx_runtime_.jsx("a", {
            href: props.path,
            className: "text-white md:text-activeAccentLight font-normal md:font-bold",
            children: props.children
        });
    } else {
        return /*#__PURE__*/ jsx_runtime_.jsx("a", {
            href: props.path,
            className: "target text-white md:text-black",
            children: props.children
        });
    }
};

;// CONCATENATED MODULE: ./components/Navbar/Navbar.js





//    TURTLE - TEKI
//    (°-°) _______
//      \ \/ - - - \_
//       \_  ___  ___>
//         \__) \__)
function Navbar() {
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)(jsx_runtime_.Fragment, {
        children: [
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("nav", {
                className: "bg-white text-black visited:text-black top blur-white text-xl fixed flex justify-between items-center w-screen h-16 z-40",
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx(NavbarLink, {
                        className: "first ml-20 text-homeAccentLight",
                        path: "/",
                        children: "Home"
                    }),
                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("ul", {
                        id: "navbar-links",
                        className: "flex",
                        children: [
                            /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                children: /*#__PURE__*/ jsx_runtime_.jsx(NavbarLink, {
                                    path: "/mobile",
                                    children: "Mobile Development"
                                })
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                children: /*#__PURE__*/ jsx_runtime_.jsx(NavbarLink, {
                                    path: "/web",
                                    children: "Web Development"
                                })
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                className: "block md:hidden",
                                children: /*#__PURE__*/ jsx_runtime_.jsx(NavbarLink, {
                                    path: "/translations",
                                    children: "Translations"
                                })
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                className: "block md:hidden",
                                children: /*#__PURE__*/ jsx_runtime_.jsx(NavbarLink, {
                                    path: "/photography",
                                    children: "Photography"
                                })
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                className: "block md:hidden",
                                children: /*#__PURE__*/ jsx_runtime_.jsx(NavbarLink, {
                                    path: "/timeline",
                                    children: "Timeline"
                                })
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                className: "block md:hidden",
                                children: /*#__PURE__*/ jsx_runtime_.jsx(NavbarLink, {
                                    path: "/about",
                                    children: "About"
                                })
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                className: "hidden md:block",
                                children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                    id: "more-button",
                                    onClick: (more_tooltip_default()),
                                    className: "inactive target last",
                                    children: "More"
                                })
                            })
                        ]
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx(Hamburger, {})
                ]
            }),
            /*#__PURE__*/ jsx_runtime_.jsx(MoreTooltip_MoreTooltip, {})
        ]
    });
}
/* harmony default export */ const Navbar_Navbar = (Navbar);


/***/ }),

/***/ 1838:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Bj": () => (/* binding */ password),
/* harmony export */   "EA": () => (/* binding */ user),
/* harmony export */   "Fs": () => (/* binding */ database),
/* harmony export */   "H6": () => (/* binding */ defaultDescription),
/* harmony export */   "N0": () => (/* binding */ port),
/* harmony export */   "VI": () => (/* binding */ defaultOpenGraphImage),
/* harmony export */   "e7": () => (/* binding */ months),
/* harmony export */   "fw": () => (/* binding */ server),
/* harmony export */   "hU": () => (/* binding */ defaultDockElementIDs),
/* harmony export */   "ho": () => (/* binding */ host),
/* harmony export */   "iI": () => (/* binding */ defaultFavicon),
/* harmony export */   "tt": () => (/* binding */ imageFallback)
/* harmony export */ });
/* unused harmony exports api, defaultLanguage */
//    TURTLE - TEKI
//    (°-°) _______
//      \ \/ - - - \_
//       \_  ___  ___>
//         \__) \__)
const dev = "production" !== "production";
const api = "http://localhost:3000";
const server = dev ? "http://localhost:3000" : "https://www.kekesi.dev";
// dock elements
const defaultDockElementIDs = [
    1,
    2,
    5,
    9,
    6
];
// db credentials
const user = "kristofkekesi";
const password = "";
const host = "localhost";
const port = "5432";
const database = "portfolio";
// metadata
const defaultDescription = "";
const defaultLanguage = "en";
const defaultOpenGraphImage = server + "/opengarph.jpg";
const defaultFavicon = server + "/favicon.png";
// months
const months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December"
];
// fallbacks
const imageFallback = "bg.jpeg";


/***/ }),

/***/ 7781:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var pg__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5900);
/* harmony import */ var pg__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(pg__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(1838);


let conn;
if (!conn) {
    conn = new pg__WEBPACK_IMPORTED_MODULE_0__.Pool({
        user: _config__WEBPACK_IMPORTED_MODULE_1__/* .user */ .EA,
        password: _config__WEBPACK_IMPORTED_MODULE_1__/* .password */ .Bj,
        host: _config__WEBPACK_IMPORTED_MODULE_1__/* .host */ .ho,
        port: _config__WEBPACK_IMPORTED_MODULE_1__/* .port */ .N0,
        database: _config__WEBPACK_IMPORTED_MODULE_1__/* .database */ .Fs
    });
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (conn);


/***/ }),

/***/ 4684:
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
        const mainResult = await _db__WEBPACK_IMPORTED_MODULE_0__/* ["default"].query */ .Z.query(mainQuery);
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
            const bundlesSideResult = await _db__WEBPACK_IMPORTED_MODULE_0__/* ["default"].query */ .Z.query(bundlesSideQuery);
            for(let j = 0; j < bundlesSideResult.rows.length; j++){
                mainResult.rows[i].bundleIDs.push(bundlesSideResult.rows[j].bundleID);
            }
            // Downloads
            const downloadsSideQuery = 'SELECT * FROM "project_downloads" WHERE "projectID" = ' + mainResult.rows[i].id + ";";
            const downloadsSideResult = await _db__WEBPACK_IMPORTED_MODULE_0__/* ["default"].query */ .Z.query(downloadsSideQuery);
            for(let j1 = 0; j1 < downloadsSideResult.rows.length; j1++){
                delete downloadsSideResult.rows[j1].projectID;
                mainResult.rows[i].downloads.push(downloadsSideResult.rows[j1]);
            }
            // Platforms
            const platformsSideQuery = 'SELECT * FROM "project_platforms" WHERE "projectID" = ' + mainResult.rows[i].id + ";";
            const platformsSideResult = await _db__WEBPACK_IMPORTED_MODULE_0__/* ["default"].query */ .Z.query(platformsSideQuery);
            for(let j2 = 0; j2 < platformsSideResult.rows.length; j2++){
                mainResult.rows[i].platforms.push(platformsSideResult.rows[j2].platform);
            }
            // Roles
            const rolesSideQuery = 'SELECT * FROM "project_roles" WHERE "projectID" = ' + mainResult.rows[i].id + ";";
            const rolesSideResult = await _db__WEBPACK_IMPORTED_MODULE_0__/* ["default"].query */ .Z.query(rolesSideQuery);
            for(let j3 = 0; j3 < rolesSideResult.rows.length; j3++){
                mainResult.rows[i].roles.push(rolesSideResult.rows[j3].role);
            }
            // Screenshots
            const screenshotsSideQuery = 'SELECT * FROM "project_screenshots" WHERE "projectID" = ' + mainResult.rows[i].id + ";";
            const screenshotsSideResult = await _db__WEBPACK_IMPORTED_MODULE_0__/* ["default"].query */ .Z.query(screenshotsSideQuery);
            for(let j4 = 0; j4 < screenshotsSideResult.rows.length; j4++){
                const screenshotSideQuery = 'SELECT * FROM images WHERE "id" = ' + screenshotsSideResult.rows[j4].imageID + ";";
                const screenshotSideResult = await _db__WEBPACK_IMPORTED_MODULE_0__/* ["default"].query */ .Z.query(screenshotSideQuery);
                const screenshot = screenshotSideResult.rows[0];
                delete screenshot.id;
                mainResult.rows[i].screenshots.push(screenshot);
            }
            // Skills
            const skillsSideQuery = 'SELECT * FROM "project_skills" WHERE "projectID" = ' + mainResult.rows[i].id + ";";
            const skillsSideResult = await _db__WEBPACK_IMPORTED_MODULE_0__/* ["default"].query */ .Z.query(skillsSideQuery);
            for(let j5 = 0; j5 < skillsSideResult.rows.length; j5++){
                mainResult.rows[i].skills.push(skillsSideResult.rows[j5].skill);
            }
            // Tools
            const toolsSideQuery = 'SELECT * FROM "project_tools" WHERE "projectID" = ' + mainResult.rows[i].id + ";";
            const toolsSideResult = await _db__WEBPACK_IMPORTED_MODULE_0__/* ["default"].query */ .Z.query(toolsSideQuery);
            for(let j6 = 0; j6 < toolsSideResult.rows.length; j6++){
                // Tool
                const toolSideQuery = 'SELECT * FROM "tools" WHERE "id" = ' + toolsSideResult.rows[j6].toolID + ";";
                const toolSideResult = await _db__WEBPACK_IMPORTED_MODULE_0__/* ["default"].query */ .Z.query(toolSideQuery);
                const tool1 = toolSideResult.rows[0];
                delete tool1.id;
                // Logo
                const logoSideQuery = 'SELECT * FROM "images" WHERE "id" = ' + tool1.imageID + ";";
                const logoSideResult = await _db__WEBPACK_IMPORTED_MODULE_0__/* ["default"].query */ .Z.query(logoSideQuery);
                const logo = logoSideResult.rows[0];
                delete logo.id;
                tool1.logo = logo;
                delete tool1.imageID;
                mainResult.rows[i].tools.push(tool1);
            }
            // Logo
            const logoSideQuery1 = 'SELECT * FROM "images" WHERE "id" = ' + mainResult.rows[i].logoID + ";";
            const logoSideResult1 = await _db__WEBPACK_IMPORTED_MODULE_0__/* ["default"].query */ .Z.query(logoSideQuery1);
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
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (getProjects);


/***/ }),

/***/ 4966:
/***/ ((module) => {


//    TURTLE - TEKI
//    (°-°) _______
//      \ \/ - - - \_
//       \_  ___  ___>
//         \__) \__)
let isMobile = false;
function cursorSetup() {
    window.addEventListener("touchstart", function() {
        isMobile = true;
    });
    var cursor = document.getElementById("cursor");
    function n(t) {
        if (!cursor.classList.contains("click")) {
            cursor.classList.add("hover");
        }
    }
    function s(t) {
        cursor.classList.remove("hover");
    }
    s();
    for(var r = document.querySelectorAll(".target"), a = r.length - 1; a >= 0; a--){
        o(r[a]);
    }
    function o(t) {
        t.removeEventListener("mouseover", n);
        t.removeEventListener("mouseout", s);
        t.addEventListener("mouseover", n);
        t.addEventListener("mouseout", s);
    }
    document.getElementsByTagName("body")[0].addEventListener("mousemove", function(n) {
        if (!isMobile) {
            cursor.style.top = n.clientY + "px";
            cursor.style.left = n.clientX + "px";
        }
    });
    // cursor on click
    document.body.onmousedown = function() {
        cursor.classList.add("click");
    };
    document.body.onmouseup = function() {
        cursor.classList.remove("click");
    };
}
module.exports = cursorSetup;


/***/ }),

/***/ 7625:
/***/ ((module) => {


//    TURTLE - TEKI
//    (°-°) _______
//      \ \/ - - - \_
//       \_  ___  ___>
//         \__) \__)
function moreTooltipToggle() {
    const moreButton = document.getElementById("more-button");
    const moreTooltip = document.getElementById("more-tooltip");
    if (moreTooltip.classList.contains("hidden")) {
        moreTooltip.classList.toggle("hidden");
        moreTooltip.style.opacity = "0";
        setTimeout(()=>{
            moreTooltip.style.opacity = "1";
        }, 0);
        moreButton.style.textShadow = "1px 0px 0px black";
    } else {
        // wait for animation to complete
        setTimeout(()=>{
            moreTooltip.classList.toggle("hidden");
        }, 150);
        moreTooltip.style.opacity = "0";
        moreButton.style.textShadow = "none";
    }
}
module.exports = moreTooltipToggle;


/***/ }),

/***/ 2802:
/***/ ((module) => {


//    TURTLE - TEKI
//    (°-°) _______
//      \ \/ - - - \_
//       \_  ___  ___>
//         \__) \__)
function navbarToggle() {
    // navbar
    document.getElementById("navbar-links").classList.toggle("navbar-links-active");
    // dock
    if (document.getElementById("navbar-links").classList.value.includes("navbar-links-active")) {
        document.getElementById("dock").classList.add("inactive");
        document.getElementsByTagName("body")[0].style.height = "100%";
        document.getElementsByTagName("body")[0].style.overflowY = "visible";
    }
    if (!document.getElementById("navbar-links").classList.value.includes("navbar-links-active")) {
        document.getElementById("dock").classList.remove("inactive");
        document.getElementsByTagName("body")[0].style.height = "";
        document.getElementsByTagName("body")[0].style.overflowY = "auto";
    }
}
function main() {
    document.getElementById("hamburger").removeEventListener("click", navbarToggle);
    document.getElementById("hamburger").addEventListener("click", navbarToggle);
}
module.exports = main;


/***/ }),

/***/ 6128:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (/* binding */ projectTooltipPosition)
/* harmony export */ });
//    TURTLE - TEKI
//    (°-°) _______
//      \ \/ - - - \_
//       \_  ___  ___>
//         \__) \__)
function projectTooltipPosition() {
    let dockTop = window.scrollX + document.getElementById("dock").getBoundingClientRect().top; // upper position of the dock element
    for(var i = 0; i < document.querySelectorAll(".project-tooltip").length; i++){
        document.querySelectorAll(".project-tooltip")[i].style.bottom = window.innerHeight - dockTop + 10 + "px";
        let dockElementLeft = document.querySelectorAll(".dock-element")[i].getBoundingClientRect().left;
        let dockElementWidth = window.scrollX + document.querySelectorAll(".dock-element")[i].offsetWidth;
        let projectTooltipLeft = dockElementLeft + dockElementWidth / 2;
        if (projectTooltipLeft < 10 + document.querySelectorAll(".project-tooltip")[i].offsetWidth / 2) {
            projectTooltipLeft = 10 + document.querySelectorAll(".project-tooltip")[i].offsetWidth / 2;
        }
        if (projectTooltipLeft >= window.innerWidth - document.querySelectorAll(".project-tooltip")[i].offsetWidth / 2 - 10) {
            const scrollbarVisible = (element)=>{
                return element.scrollHeight > element.clientHeight;
            };
            if (scrollbarVisible(document.querySelectorAll("html")[0])) {
                projectTooltipLeft = window.innerWidth - document.querySelectorAll(".project-tooltip")[i].offsetWidth / 2 - 20;
            } else {
                projectTooltipLeft = window.innerWidth - document.querySelectorAll(".project-tooltip")[i].offsetWidth / 2 - 10;
            }
        }
        document.querySelectorAll(".project-tooltip")[i].style.left = projectTooltipLeft + "px";
    }
};
if (false) {}


/***/ }),

/***/ 1343:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (/* binding */ setProjectTooltipState)
/* harmony export */ });
//    TURTLE - TEKI
//    (°-°) _______
//      \ \/ - - - \_
//       \_  ___  ___>
//         \__) \__)
function setProjectTooltipState(projectID) {
    document.getElementById("dock-element-id-" + projectID).addEventListener("mouseenter", function() {
        var projectTooltip = document.getElementById("project-tooltip-id-" + projectID);
        document.getElementById("project-tooltip-id-" + projectID).style.display = "inline";
        projectTooltip.style.opacity = "0";
        setTimeout(()=>{
            projectTooltip.style.opacity = "1";
        }, 0);
    });
    document.getElementById("dock-element-id-" + projectID).addEventListener("mouseleave", function() {
        var projectTooltip = document.getElementById("project-tooltip-id-" + projectID);
        setTimeout(()=>{
            projectTooltip.style.display = "none";
        }, 150);
        projectTooltip.style.opacity = "0";
    });
};


/***/ })

};
;