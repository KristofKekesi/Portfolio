exports.id = 706;
exports.ids = [706];
exports.modules = {

/***/ 5431:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _Terminal_Terminal__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(4207);
/* harmony import */ var _ImageGallery_ImageGallery__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(6382);
/* harmony import */ var _ProjectBundle_ProjectBundle__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(3233);
/* harmony import */ var _ArticlePreview_index__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(6137);
/* harmony import */ var _MadeWith_MadeWith__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(7966);
/* harmony import */ var _Quote_Quote__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(7392);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(1664);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _config_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(1838);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_Terminal_Terminal__WEBPACK_IMPORTED_MODULE_1__]);
_Terminal_Terminal__WEBPACK_IMPORTED_MODULE_1__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];









//    TURTLE - TEKI
//    (°-°) _______
//      \ \/ - - - \_
//       \_  ___  ___>
//         \__) \__)
function Article(props) {
    // PROPS
    // content, madeWith, published, edited
    let terminalId = 0;
    const content = props.content ?? [];
    const skills = props.skills ?? [];
    function Bookmark(props) {
        switch(props.weight){
            case "bold":
                return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_7___default()), {
                    href: "#" + props.id.replace(/(<([^>]+)>)/ig, ""),
                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
                        className: "target",
                        style: {
                            height: "1em",
                            width: "1em"
                        },
                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("img", {
                            className: "group-hover:inline hidden",
                            style: {
                                height: "1em",
                                width: "1em"
                            },
                            src: "icon_add_link_bold.svg",
                            alt: "bookmark"
                        })
                    })
                });
            case "medium":
                return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_7___default()), {
                    href: "#" + props.id.replace(/(<([^>]+)>)/ig, ""),
                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
                        className: "target",
                        style: {
                            height: "1em",
                            width: "1em"
                        },
                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("img", {
                            className: "group-hover:inline hidden",
                            style: {
                                height: "1em",
                                width: "1em"
                            },
                            src: "icon_add_link_medium.svg",
                            alt: "bookmark"
                        })
                    })
                });
            default:
                return null;
        }
    }
    let articleContent = [];
    for(let i1 = 0; i1 < content.length; i1++){
        if ((i1 === 0 || content[i1 - 1].type === "section") && content[i1].type !== "section") {}
        if ((i1 === content.length - 1 || content[i1 + 1].type === "section") && content[i1].type !== "selection" || content[i1].type === "selection" && i1 === content.length) {}
        switch(content[i1].type){
            case "text-title":
                articleContent.push(/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("h1", {
                    id: content[i1]["value"].toLowerCase().replaceAll(" ", "-").replace(/(<([^>]+)>)/ig, ""),
                    className: "selectable text-title nosection group flex items-center gap-2",
                    children: [
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                            dangerouslySetInnerHTML: {
                                __html: content[i1]["value"]
                            }
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(Bookmark, {
                            weight: "bold",
                            id: content[i1]["value"].toLowerCase().replaceAll(" ", "-")
                        })
                    ]
                }, i1));
                break;
            case "text-subtitle":
                articleContent.push(/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("h2", {
                    id: content[i1]["value"].toLowerCase().replaceAll(" ", "-").replace(/(<([^>]+)>)/ig, ""),
                    className: "selectable text-subtitle nosection group flex items-center gap-2",
                    children: [
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                            dangerouslySetInnerHTML: {
                                __html: content[i1]["value"]
                            }
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(Bookmark, {
                            weight: "medium",
                            id: content[i1]["value"].toLowerCase().replaceAll(" ", "-")
                        })
                    ]
                }, i1));
                break;
            case "text-subsubtitle":
                articleContent.push(/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h3", {
                    className: "selectable text-subtitle nosection",
                    dangerouslySetInnerHTML: {
                        __html: content[i1]["value"]
                    }
                }, i1));
                break;
            case "text":
                articleContent.push(/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                    className: "selectable text nosection",
                    dangerouslySetInnerHTML: {
                        __html: content[i1]["value"]
                    }
                }, i1));
                break;
            case "terminal":
                articleContent.push(/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_Terminal_Terminal__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z, {
                    id: terminalId,
                    className: "terminal nosection",
                    language: content[i1]["language"],
                    code: content[i1]["code"]
                }, i1));
                terminalId++;
                break;
            case "gallery":
                articleContent.push(/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_ImageGallery_ImageGallery__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z, {
                    className: "nosection",
                    dataClass: "max",
                    images: content[i1]["images"],
                    dataKey: i1
                }, i1));
                break;
            case "project-bundle":
                articleContent.push(/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_ProjectBundle_ProjectBundle__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z, {
                    projectBundle: content[i1]["projectBundle"]
                }, i1));
                break;
            case "article-preview-big":
                articleContent.push(/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_ArticlePreview_index__WEBPACK_IMPORTED_MODULE_4__/* .ArticlePreviewsBig */ .g0, {
                    articles: content[i1]["articles"]
                }, i1));
                break;
            case "article-preview-smoll":
                articleContent.push(/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_ArticlePreview_index__WEBPACK_IMPORTED_MODULE_4__/* .ArticlePreviewsSmoll */ .U2, {
                    articles: content[i1]["articles"]
                }, i1));
                break;
            case "made-with":
                articleContent.push(/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_MadeWith_MadeWith__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z, {
                    tools: content[i1]["value"],
                    title: content[i1]["title"]
                }, i1));
                break;
            case "quote":
                articleContent.push(/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_Quote_Quote__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .Z, {
                    quote: content[i1]["quote"],
                    name: content[i1]["name"],
                    image: content[i1]["image"]
                }, i1));
                break;
            case "section":
                let sectionContent = [];
                sectionContent.push(/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                    className: "mb-10 h-px"
                }, i1 + "-first"));
                for(let k = 0; k < content[i1]["content"].length; k++){
                    switch(content[i1]["content"][k].type){
                        case "text-title":
                            sectionContent.push(/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("h1", {
                                id: content[i1]["content"][k]["value"].toLowerCase().replaceAll(" ", "-").replace(/(<([^>]+)>)/ig, ""),
                                className: "selectable text-title nosection group flex items-center gap-2",
                                children: [
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                        dangerouslySetInnerHTML: {
                                            __html: content[i1]["content"][k]["value"]
                                        }
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(Bookmark, {
                                        weight: "bold",
                                        id: content[i1]["content"][k]["value"].toLowerCase().replaceAll(" ", "-")
                                    })
                                ]
                            }, k));
                            break;
                        case "text-subtitle":
                            sectionContent.push(/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("h2", {
                                id: content[i1]["content"][k]["value"].toLowerCase().replaceAll(" ", "-").replace(/(<([^>]+)>)/ig, ""),
                                className: "selectable text-subtitle nosection group flex items-center gap-2",
                                children: [
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                        dangerouslySetInnerHTML: {
                                            __html: content[i1]["content"][k]["value"]
                                        }
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(Bookmark, {
                                        weight: "medium",
                                        id: content[i1]["content"][k]["value"].toLowerCase().replaceAll(" ", "-")
                                    })
                                ]
                            }, k));
                            break;
                        case "text-subsubtitle":
                            sectionContent.push(/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h3", {
                                className: "selectable text-subsubtitle",
                                dangerouslySetInnerHTML: {
                                    __html: content[i1]["content"][k]["value"]
                                }
                            }, k));
                            break;
                        case "text":
                            sectionContent.push(/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                className: "selectable text",
                                dangerouslySetInnerHTML: {
                                    __html: content[i1]["content"][k]["value"]
                                }
                            }, k));
                            break;
                        case "terminal":
                            sectionContent.push(/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_Terminal_Terminal__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z, {
                                id: terminalId,
                                className: "terminal",
                                language: content[i1]["content"][k]["language"],
                                code: content[i1]["content"][k]["code"]
                            }, k));
                            terminalId++;
                            break;
                        case "gallery":
                            sectionContent.push(/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_ImageGallery_ImageGallery__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z, {
                                images: content[i1]["content"][k]["images"],
                                dataKey: k
                            }, k));
                            break;
                        default:
                            console.warn(content[i1]["content"][k]);
                            break;
                    }
                }
                sectionContent.push(/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                    className: "mt-10 h-px"
                }, i1 + "a"));
                articleContent.push(/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                    className: "section",
                    children: sectionContent
                }, i1 + "b"));
                break;
            default:
                console.warn(content[i1]);
                break;
        }
    }
    if (props.madeWith !== null && props.madeWith !== undefined && props.madeWith.length > 0) {
        articleContent.push(/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_MadeWith_MadeWith__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z, {
            tools: props.madeWith,
            title: "Tools I used"
        }, i));
    }
    let published = new Date(props.published);
    published = new Date(published.getFullYear(), published.getMonth(), published.getDate());
    let edited = new Date(props.edited);
    edited = new Date(edited.getFullYear(), edited.getMonth(), edited.getDate());
    let publishedString = "";
    if (props.published != undefined) {
        publishedString += "Published " + published.getFullYear() + " " + _config_js__WEBPACK_IMPORTED_MODULE_8__/* .months */ .e7[published.getMonth()] + " " + published.getDate();
    }
    if (props.edited != undefined && edited.getTime() > published.getTime()) {
        publishedString += ", edited " + edited.getFullYear() + " " + _config_js__WEBPACK_IMPORTED_MODULE_8__/* .months */ .e7[edited.getMonth()] + " " + edited.getDate();
    }
    publishedString += '<span class="md:inline hidden">,</span>';
    const skillTags = [];
    skills.forEach((skill)=>{
        skillTags.push(/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
            className: "mx-2",
            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                className: "rounded-full text-base font-inter bg-secondaryLight px-3 line-clamp-1",
                children: skill
            })
        }, skill));
    });
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("article", {
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                className: "article-content pt-6 px-12",
                dangerouslySetInnerHTML: {
                    __html: publishedString
                }
            }),
            skills.length != 0 ? /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                className: "article-content flex md:px-12 px-7 pt-2 items-center",
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                        className: "md:inline hidden",
                        children: "Contains"
                    }),
                    " ",
                    skillTags
                ]
            }) : null,
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                className: "article-content",
                children: [
                    articleContent,
                    props.children,
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                        className: "mt-10 h-px"
                    })
                ]
            })
        ]
    });
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Article);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 6137:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "g0": () => (/* binding */ ArticlePreviewsBig),
  "U2": () => (/* binding */ ArticlePreviewsSmoll)
});

// UNUSED EXPORTS: ArticlePreviewBig, ArticlePreviewSmoll

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: ./config.js
var config = __webpack_require__(1838);
;// CONCATENATED MODULE: ./components/ArticlePreview/ArticlePreviewBig.js


//    TURTLE - TEKI
//    (°-°) _______
//      \ \/ - - - \_
//       \_  ___  ___>
//         \__) \__)
function ArticlePreviewBig(props) {
    return /*#__PURE__*/ jsx_runtime_.jsx("article", {
        style: props.style,
        className: "article-preview-big target w-96 flex flex-col bg-secondaryLight font-bold",
        children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
            href: config/* server */.fw + "/" + props.article.redirect,
            children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                className: "w-full h-full bg-secondaryLight",
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx("img", {
                        layout: "fill",
                        className: "max-w-full max-h-96",
                        src: config/* server */.fw + "/" + props.article.cover.path,
                        alt: "Article cover"
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("h1", {
                        className: "text-title",
                        dangerouslySetInnerHTML: {
                            __html: props.article.name.replace(/(<([^>]+)>)/ig, "")
                        }
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("h2", {
                        className: "text-smallsubtitle",
                        dangerouslySetInnerHTML: {
                            __html: props.article.description.replace(/(<([^>]+)>)/ig, "")
                        }
                    })
                ]
            })
        })
    });
}
/* harmony default export */ const ArticlePreview_ArticlePreviewBig = (ArticlePreviewBig);

;// CONCATENATED MODULE: ./components/ArticlePreview/ArticlePreviewSmoll.js


//    TURTLE - TEKI
//    (°-°) _______
//      \ \/ - - - \_
//       \_  ___  ___>
//         \__) \__)
function ArticlePreviewSmoll(props) {
    const redirect = props.article.redirect ? props.article.redirect ?? "#" : "#";
    const coverPath = props.article ? props.article.cover.path ?? config/* imageFallback */.tt : config/* imageFallback */.tt;
    const name = props.article ? (props.article.name ?? "").replace(/(<([^>]+)>)/ig, "") : "";
    return /*#__PURE__*/ jsx_runtime_.jsx("article", {
        style: props.style,
        className: "article-preview-smoll target font-bold",
        children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
            href: config/* server */.fw + "/" + redirect,
            children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                className: "article-preview-link-smoll flex w-full h-full bg-secondaryLight",
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx("img", {
                        className: "w-28 h-28 bg-cover",
                        src: config/* server */.fw + "/" + coverPath,
                        alt: "Article cover"
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                        className: "justify-center pb-2",
                        children: /*#__PURE__*/ jsx_runtime_.jsx("h1", {
                            className: "text-title nowrap",
                            dangerouslySetInnerHTML: {
                                __html: name
                            }
                        })
                    })
                ]
            })
        })
    });
}
/* harmony default export */ const ArticlePreview_ArticlePreviewSmoll = (ArticlePreviewSmoll);

;// CONCATENATED MODULE: ./components/ArticlePreview/index.js



//    TURTLE - TEKI
//    (°-°) _______
//      \ \/ - - - \_
//       \_  ___  ___>
//         \__) \__)
function ArticlePreviewsBig(props) {
    const previews = [];
    const articles = props.articles ?? [];
    articles.forEach((article, index)=>{
        previews.push(/*#__PURE__*/ jsx_runtime_.jsx(ArticlePreview_ArticlePreviewBig, {
            article: article
        }, index));
    });
    return /*#__PURE__*/ jsx_runtime_.jsx("div", {
        className: "article-preview-smoll-container flex flex-wrap justify-start gap-10 px-12 my-12",
        children: previews
    });
}
function ArticlePreviewsSmoll(props) {
    const previews = [];
    const articles = props.articles ?? [];
    articles.forEach((article, index)=>{
        previews.push(/*#__PURE__*/ jsx_runtime_.jsx(ArticlePreview_ArticlePreviewSmoll, {
            article: article
        }, index));
    });
    return /*#__PURE__*/ jsx_runtime_.jsx("div", {
        className: "article-preview-smoll-container flex flex-wrap justify-start gap-10 px-12 my-2",
        children: previews
    });
}



/***/ }),

/***/ 3233:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": () => (/* binding */ ProjectBundle_ProjectBundle)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: ./config.js
var config = __webpack_require__(1838);
;// CONCATENATED MODULE: ./components/ProjectBundle/ProjectBundleContent.js


//    TURTLE - TEKI
//    (°-°) _______
//      \ \/ - - - \_
//       \_  ___  ___>
//         \__) \__)
function ProjectBundleContent(props) {
    const projects = [];
    props.projects.forEach((project)=>{
        projects.push(/*#__PURE__*/ jsx_runtime_.jsx("a", {
            href: "projects/" + encodeURIComponent(project.name),
            children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                className: "target flex flex-col items-center",
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx("img", {
                        className: "w-auto h-24",
                        src: config/* server */.fw + "/" + project.logo.path,
                        alt: project.name
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("h2", {
                        className: "text null-padding nowrap w-auto mt-3 text-white text-center",
                        children: project.name
                    })
                ]
            })
        }, project.id));
    });
    return /*#__PURE__*/ jsx_runtime_.jsx(jsx_runtime_.Fragment, {
        children: projects
    });
}
/* harmony default export */ const ProjectBundle_ProjectBundleContent = (ProjectBundleContent);

;// CONCATENATED MODULE: ./components/ProjectBundle/ProjectBundle.js


//    TURTLE - TEKI
//    (°-°) _______
//      \ \/ - - - \_
//       \_  ___  ___>
//         \__) \__)
function ProjectBundle(props) {
    if (props.projectBundle == undefined || props.projectBundle.projects == undefined) {
        return null;
    }
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
        className: "project-bundle text-white my-10",
        style: props.projectBundle.background ? {
            background: `linear-gradient(${props.projectBundle.background.split(";")[2]}, ${props.projectBundle.background.split(";")[0]} 0%, ${props.projectBundle.background.split(";")[1]} 75%)`
        } : null,
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                className: "mb-10 h-px"
            }),
            props.projectBundle.name ? /*#__PURE__*/ jsx_runtime_.jsx("h1", {
                className: "text-title",
                children: props.projectBundle.name
            }) : null,
            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                className: "project-bundle-content w-full flex justify-between px-12 mb-10",
                children: /*#__PURE__*/ jsx_runtime_.jsx(ProjectBundle_ProjectBundleContent, {
                    projects: props.projectBundle.projects
                })
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                className: "mt-10 h-px"
            })
        ]
    });
}
/* harmony default export */ const ProjectBundle_ProjectBundle = (ProjectBundle);


/***/ }),

/***/ 7392:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(1838);

//    TURTLE - TEKI
//    (°-°) _______
//      \ \/ - - - \_
//       \_  ___  ___>
//         \__) \__)

function Quote(props) {
    // PROPS
    // quote, name, image
    if (props.quote == undefined || props.name == undefined) {
        return null;
    }
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
        className: "section",
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                className: "mb-10 h-px"
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                className: "text-9xl italic text-gray-500 absolute opacity-20 ml-4",
                children: "'"
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("blockquote", {
                className: "text-subtitle pt-8 font-interBold indent-1 text-justify",
                dangerouslySetInnerHTML: {
                    __html: props.quote
                }
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                className: "flex flex-row justify-end",
                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("cite", {
                    className: "text-subsubtitle flex content-center gap-4",
                    children: [
                        props.name,
                        props.image ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("img", {
                            alt: props.name,
                            className: "h-8 w-8",
                            src: props.image.includes("://") ? props.image : _config__WEBPACK_IMPORTED_MODULE_1__/* .server */ .fw + "/" + props.image
                        }) : null
                    ]
                })
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                className: "mt-8 h-px"
            })
        ]
    });
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Quote);


/***/ }),

/***/ 4207:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var highlight_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(1000);
/* harmony import */ var highlight_js_styles_github_dark_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(8403);
/* harmony import */ var highlight_js_styles_github_dark_css__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(highlight_js_styles_github_dark_css__WEBPACK_IMPORTED_MODULE_3__);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([highlight_js__WEBPACK_IMPORTED_MODULE_2__]);
highlight_js__WEBPACK_IMPORTED_MODULE_2__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];




const languageMap = {
    "html": "HTML",
    "js": "JavaScript",
    "json": "JSON",
    "shell": "Shell"
};
function Terminal(props) {
    const id = props.id ? "terminal-" + props.id : "terminal";
    if (languageMap[props.language] == undefined) {
        console.warn("Unknown language: " + props.language);
        return null;
    }
    if (props.code == undefined) {
        console.warn("No code provided");
        return null;
    }
    let html = highlight_js__WEBPACK_IMPORTED_MODULE_2__["default"].highlight(props.code, {
        language: props.language
    }).value;
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
        id: id,
        className: "terminal",
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("pre", {
                className: "terminal-inner text-white p-4 rounded-2xl",
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("code", {
                    dangerouslySetInnerHTML: {
                        __html: html
                    }
                })
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("center", {
                className: "font-bold m-0 pb-6",
                children: languageMap[props.language] ?? props.language
            })
        ]
    });
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Terminal);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 1032:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": () => (/* binding */ articles)
});

// EXTERNAL MODULE: ./db.js
var db = __webpack_require__(7781);
// EXTERNAL MODULE: ./config.js
var config = __webpack_require__(1838);
;// CONCATENATED MODULE: ./functions/api/bundles.js

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
        const mainResult = await db/* default.query */.Z.query(mainQuery);
        for(let i = 0; i < mainResult.rows.length; i++){
            mainResult.rows[i].projects = [];
            // Projects
            const projectsSideQuery = 'SELECT * FROM "project_bundles" WHERE "bundleID" = ' + mainResult.rows[i].id + ";";
            const projectsSideResult = await db/* default.query */.Z.query(projectsSideQuery);
            for(let j = 0; j < projectsSideResult.rows.length; j++){
                // Project
                const projectSideQuery = 'SELECT * FROM "projects" WHERE "id" = ' + projectsSideResult.rows[j].projectID + ";";
                const projectSideResult = await db/* default.query */.Z.query(projectSideQuery);
                // Project date added
                projectSideResult.rows[i].dateAdded = new Date(projectSideResult.rows[i].dateAdded).toString();
                const project = projectSideResult.rows[0];
                // Logo
                const logoSideQuery = 'SELECT * FROM "images" WHERE "id" = ' + projectSideResult.rows[0].logoID + ";";
                const logoSideResult = await db/* default.query */.Z.query(logoSideQuery);
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
/* harmony default export */ const bundles = (getBundles);

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
                const projectBundleResult = await bundles(projectBundle.id, undefined, undefined);
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
/* harmony default export */ const articles = (getArticles);


/***/ }),

/***/ 8403:
/***/ (() => {



/***/ })

};
;