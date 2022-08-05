"use strict";
exports.id = 863;
exports.ids = [863];
exports.modules = {

/***/ 6382:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (/* binding */ ImageGallery)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _functions_image_gallery__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(4354);
/* harmony import */ var _functions_image_gallery__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_functions_image_gallery__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(1838);



//    TURTLE - TEKI
//    (°-°) _______
//      \ \/ - - - \_
//       \_  ___  ___>
//         \__) \__)
function ImageGallery(props) {
    if (props.images == undefined || props.images.length == 0) {
        return null;
    }
    const content = [];
    for(let i = 0; i < props.images.length; i++){
        content.push(/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
            style: {
                flex: props.images[i].width / props.images[i].height
            },
            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("img", {
                src: _config__WEBPACK_IMPORTED_MODULE_2__/* .server */ .fw + "/" + props.images[i].path,
                alt: props.images[i].name
            })
        }, i));
    }
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("center", {
        id: "gallery-" + props.dataKey,
        className: "gallery overflow-hidden flex gap-3 " + props.galleryTag,
        children: content
    });
};
;


/***/ }),

/***/ 7966:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _config_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(1838);


//    TURTLE - TEKI
//    (°-°) _______
//      \ \/ - - - \_
//       \_  ___  ___>
//         \__) \__)
function MadeWith(props) {
    if (props.tools == undefined || props.tools.length == 0) {
        return null;
    }
    function TechnologyElement(props) {
        return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
            className: "technologies-content",
            children: [
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("img", {
                    src: _config_js__WEBPACK_IMPORTED_MODULE_1__/* .server */ .fw + "/" + props.tool.logo.path,
                    alt: props.tool.name
                }),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h3", {
                    className: "text selectable null-padding text-center",
                    children: props.tool.name
                })
            ]
        }, props.tool.name);
    }
    let technologyTypes = {};
    props.tools.forEach((tool)=>{
        if (tool.type in technologyTypes) {
            technologyTypes[tool.type].push(tool);
        } else {
            technologyTypes[tool.type] = [
                tool
            ];
        }
    });
    let content = [];
    for(let technologyType in technologyTypes){
        content.push(/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h1", {
            className: "text-subtitle selectable pt-4 pb-2",
            children: technologyType
        }, technologyType + "-title"));
        let typeContent = [];
        for(let i in technologyTypes[technologyType]){
            typeContent.push(/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(TechnologyElement, {
                tool: technologyTypes[technologyType][i]
            }, i));
        }
        content.push(/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
            className: "w-full flex flex-wrap flex-row gap-8 px-12",
            children: typeContent
        }, technologyType + "-content"));
    }
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
        className: "section",
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                className: "mh-10 h-px"
            }),
            props.title ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h1", {
                className: "text-title",
                children: props.title
            }) : null,
            content,
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                className: "mt-10 w-full bg-white h-px"
            })
        ]
    });
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (MadeWith);


/***/ }),

/***/ 565:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (/* export default binding */ __WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _cursor__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(4966);
/* harmony import */ var _cursor__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_cursor__WEBPACK_IMPORTED_MODULE_0__);

//    TURTLE - TEKI
//    (°-°) _______
//      \ \/ - - - \_
//       \_  ___  ___>
//         \__) \__)
function setCopyright(json) {
    function checkBranch(json) {
        function checkContent(json, key) {
            if (typeof json[key] === "object") {
                checkBranch(json[key]);
            } else {
                if (json.copyrightHolder !== undefined && json.copyrightHolder !== null) {
                    addCopyright(json.name, json.copyrightHolder, json.copyrightURL || "");
                }
            }
        }
        for(let key in json){
            if (typeof json === "object") {
                checkContent(json, key);
            }
        }
    }
    checkBranch(json);
    function addCopyright(product, name, link) {
        let copyright = document.getElementById("copyright");
        let content = document.getElementById("copyright-content");
        if (link == null || link === "undefined") {
            link = "";
        }
        let finalString;
        if (product == null || product === "undefined") {
            finalString = name;
        } else {
            finalString = product + " - " + name;
        }
        try {
            copyright.classList.toggle = "hidden";
            for(let i = 0; i < content.children.length; i++){
                if (content.children[i].children[0].innerHTML === finalString) {
                    return;
                }
            }
            content.insertAdjacentHTML("beforeend", "<li><a class='target nowrap' href='" + link + "'>" + finalString + "</a></li>");
        } catch (error) {
            console.log(error);
        }
    }
}
/* harmony default export */ function __WEBPACK_DEFAULT_EXPORT__() {};
;


/***/ }),

/***/ 4354:
/***/ ((module) => {


//TODO: refactor
//    TURTLE - TEKI
//    (°-°) _______
//      \ \/ - - - \_
//       \_  ___  ___>
//         \__) \__)
function finalize(galleryId) {
    window.removeEventListener("resize", function() {
        setImageGallery(galleryId);
    });
    window.addEventListener("resize", function() {
        setImageGallery(galleryId);
    });
    setImageGallery(galleryId);
}
function setImageGalleryHeight(galleryId) {
    setTimeout(function() {
        let height = document.getElementById(galleryId).children[0].children[0].clientHeight.toString();
        if (height > "0") {
            document.getElementById(galleryId).style.height = height + "px";
        } else {
            setImageGalleryHeight(galleryId);
        }
    }, 500);
}
function setImageGalleries() {
    var galleryImages = document.querySelectorAll("center.gallery");
    for(let i = 0; i < galleryImages.length; i++){
        finalize(galleryImages[i].id);
    }
}
function setImageGallery(id) {
    var galleryImages = document.querySelectorAll("center#" + id + ".gallery img");
    let counter = 0;
    [].forEach.call(galleryImages, function(img) {
        if (img.complete) {
            incrementCounter();
        } else {
            if (img.getAttribute("listener") !== "true") {
                img.addEventListener("load", incrementCounter, false);
                img.setAttribute("listener", true);
            }
        }
    });
    function incrementCounter() {
        counter++;
        if (counter === galleryImages.length) {
            setImageGalleryHeight(id);
        }
    }
}
module.exports = setImageGalleries;


/***/ })

};
;