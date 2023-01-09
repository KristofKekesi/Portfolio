/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(() => {
var exports = {};
exports.id = "pages/_app";
exports.ids = ["pages/_app"];
exports.modules = {

/***/ "./components/Label/Label.js":
/*!***********************************!*\
  !*** ./components/Label/Label.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ Label)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../config */ \"./config.js\");\n\n\n\n//    TURTLE - TEKI\n//    (°-°) _______\n//      \\ \\/ - - - \\_\n//       \\_  ___  ___>\n//         \\__) \\__)\nfunction Label(props) {\n    // PROPS:\n    // size, theme, name, image, href, id, cropName, selectable\n    console.log(\"size: \" + props.size + \", theme\" + props.theme + \", name: \" + props.name + \", image: \" + props.image + \", href: \" + props.href + \", id: \" + props.id);\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        window.removeEventListener(\"popstate\", function() {\n            window.location.reload();\n        });\n        window.addEventListener(\"popstate\", function() {\n            window.location.reload();\n        });\n    }, [\n        props.id\n    ]);\n    let labelName = props.cropName ? props.name.substring(0, 12) : props.name;\n    ;\n    if (props.name !== labelName) {\n        labelName += \"...\";\n    }\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n        href: props.href,\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            className: (props.size == \"md\" ? \"label-md\" : \"label-xl\") + \" \" + (props.href ? \"target\" : \"\"),\n            id: props.id,\n            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"center\", {\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n                        src: _config__WEBPACK_IMPORTED_MODULE_2__.server + \"/\" + props.image.path,\n                        alt: props.name\n                    }, void 0, false, {\n                        fileName: \"/Users/kristofkekesi/Developer/Web/Portfolio/components/Label/Label.js\",\n                        lineNumber: 36,\n                        columnNumber: 6\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                        className: `nowrap basis-full h-0 ${props.theme == \"dark\" ? \"text-black\" : \"text-white\"}`,\n                        children: labelName\n                    }, void 0, false, {\n                        fileName: \"/Users/kristofkekesi/Developer/Web/Portfolio/components/Label/Label.js\",\n                        lineNumber: 37,\n                        columnNumber: 6\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/kristofkekesi/Developer/Web/Portfolio/components/Label/Label.js\",\n                lineNumber: 35,\n                columnNumber: 5\n            }, this)\n        }, void 0, false, {\n            fileName: \"/Users/kristofkekesi/Developer/Web/Portfolio/components/Label/Label.js\",\n            lineNumber: 34,\n            columnNumber: 4\n        }, this)\n    }, void 0, false, {\n        fileName: \"/Users/kristofkekesi/Developer/Web/Portfolio/components/Label/Label.js\",\n        lineNumber: 33,\n        columnNumber: 3\n    }, this);\n}\n;\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL0xhYmVsL0xhYmVsLmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUFBO0FBQXlDO0FBRUg7QUFHdEMsbUJBQW1CO0FBQ25CLG1CQUFtQjtBQUNuQixxQkFBcUI7QUFDckIsc0JBQXNCO0FBQ3RCLG9CQUFvQjtBQUdMLFNBQVNHLE1BQU1DLEtBQUssRUFBRTtJQUNqQyxTQUFTO0lBQ1QsMkRBQTJEO0lBQzNEQyxRQUFRQyxHQUFHLENBQUMsV0FBV0YsTUFBTUcsSUFBSSxHQUFHLFlBQVlILE1BQU1JLEtBQUssR0FBRyxhQUFhSixNQUFNSyxJQUFJLEdBQUcsY0FBY0wsTUFBTU0sS0FBSyxHQUFHLGFBQWFOLE1BQU1PLElBQUksR0FBRyxXQUFXUCxNQUFNUSxFQUFFO0lBRXBLWCxnREFBU0EsQ0FBQyxJQUFNO1FBQ2ZZLE9BQU9DLG1CQUFtQixDQUFDLFlBQVksV0FBWTtZQUNsREQsT0FBT0UsUUFBUSxDQUFDQyxNQUFNO1FBQ3ZCO1FBQ0FILE9BQU9JLGdCQUFnQixDQUFDLFlBQVksV0FBWTtZQUMvQ0osT0FBT0UsUUFBUSxDQUFDQyxNQUFNO1FBQ3ZCO0lBQ0QsR0FBRztRQUFDWixNQUFNUSxFQUFFO0tBQUM7SUFFYixJQUFJTSxZQUFhZCxNQUFNZSxRQUFRLEdBQUdmLE1BQU1LLElBQUksQ0FBQ1csU0FBUyxDQUFDLEdBQUcsTUFBTWhCLE1BQU1LLElBQUk7O0lBQzFFLElBQUlMLE1BQU1LLElBQUksS0FBS1MsV0FBVztRQUM3QkEsYUFBYTtJQUNkLENBQUM7SUFFRCxxQkFDQyw4REFBQ0c7UUFBRVYsTUFBT1AsTUFBTU8sSUFBSTtrQkFDbkIsNEVBQUNXO1lBQUlDLFdBQVcsQ0FBQyxNQUFPaEIsSUFBSSxJQUFJLE9BQVEsYUFBYSxVQUFVLElBQUksTUFBT0gsQ0FBQUEsTUFBTU8sSUFBSSxHQUFHLFdBQVcsRUFBRTtZQUFJQyxJQUFLUixNQUFNUSxFQUFFO3NCQUNwSCw0RUFBQ1k7O2tDQUNBLDhEQUFDQzt3QkFBSUMsS0FBTXhCLDJDQUFNQSxHQUFHLE1BQU1FLE1BQU1NLEtBQUssQ0FBQ2lCLElBQUk7d0JBQUdDLEtBQU14QixNQUFNSyxJQUFJOzs7Ozs7a0NBQzdELDhEQUFDb0I7d0JBQUVOLFdBQVksQ0FBQyxzQkFBc0IsRUFBRW5CLE1BQU1JLEtBQUssSUFBSSxTQUFTLGVBQWUsWUFBWSxDQUFDLENBQUM7a0NBQUtVOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBS3ZHLENBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9wb3J0Zm9saW8tMy8uL2NvbXBvbmVudHMvTGFiZWwvTGFiZWwuanM/MzgyMCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlRWZmZWN0IH0gZnJvbSBcInJlYWN0XCI7XG5cbmltcG9ydCB7IHNlcnZlciB9IGZyb20gXCIuLi8uLi9jb25maWdcIjtcblxuXG4vLyAgICBUVVJUTEUgLSBURUtJXG4vLyAgICAowrAtwrApIF9fX19fX19cbi8vICAgICAgXFwgXFwvIC0gLSAtIFxcX1xuLy8gICAgICAgXFxfICBfX18gIF9fXz5cbi8vICAgICAgICAgXFxfXykgXFxfXylcblxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBMYWJlbChwcm9wcykge1xuICAgIC8vIFBST1BTOlxuICAgIC8vIHNpemUsIHRoZW1lLCBuYW1lLCBpbWFnZSwgaHJlZiwgaWQsIGNyb3BOYW1lLCBzZWxlY3RhYmxlXG4gICAgY29uc29sZS5sb2coXCJzaXplOiBcIiArIHByb3BzLnNpemUgKyBcIiwgdGhlbWVcIiArIHByb3BzLnRoZW1lICsgXCIsIG5hbWU6IFwiICsgcHJvcHMubmFtZSArIFwiLCBpbWFnZTogXCIgKyBwcm9wcy5pbWFnZSArIFwiLCBocmVmOiBcIiArIHByb3BzLmhyZWYgKyBcIiwgaWQ6IFwiICsgcHJvcHMuaWQpO1xuXG5cdHVzZUVmZmVjdCgoKSA9PiB7XG5cdFx0d2luZG93LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ3BvcHN0YXRlJywgZnVuY3Rpb24gKCkge1xuXHRcdFx0d2luZG93LmxvY2F0aW9uLnJlbG9hZCgpO1xuXHRcdH0pO1xuXHRcdHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdwb3BzdGF0ZScsIGZ1bmN0aW9uICgpIHtcblx0XHRcdHdpbmRvdy5sb2NhdGlvbi5yZWxvYWQoKTtcblx0XHR9KTtcblx0fSwgW3Byb3BzLmlkXSk7XG5cblx0bGV0IGxhYmVsTmFtZSA9IChwcm9wcy5jcm9wTmFtZSA/IHByb3BzLm5hbWUuc3Vic3RyaW5nKDAsIDEyKSA6IHByb3BzLm5hbWUpOztcblx0aWYgKHByb3BzLm5hbWUgIT09IGxhYmVsTmFtZSkge1xuXHRcdGxhYmVsTmFtZSArPSBcIi4uLlwiO1xuXHR9XG5cblx0cmV0dXJuKFxuXHRcdDxhIGhyZWY9eyBwcm9wcy5ocmVmIH0+XG5cdFx0XHQ8ZGl2IGNsYXNzTmFtZT17KChwcm9wcy5zaXplID09IFwibWRcIikgPyBcImxhYmVsLW1kXCIgOiBcImxhYmVsLXhsXCIpICsgXCIgXCIgKyAocHJvcHMuaHJlZiA/IFwidGFyZ2V0XCIgOiBcIlwiKSB9IGlkPXsgcHJvcHMuaWQgfT5cblx0XHRcdFx0PGNlbnRlcj5cblx0XHRcdFx0XHQ8aW1nIHNyYz17IHNlcnZlciArIFwiL1wiICsgcHJvcHMuaW1hZ2UucGF0aCB9IGFsdD17IHByb3BzLm5hbWUgfS8+XG5cdFx0XHRcdFx0PHAgY2xhc3NOYW1lPXsgYG5vd3JhcCBiYXNpcy1mdWxsIGgtMCAke3Byb3BzLnRoZW1lID09IFwiZGFya1wiID8gXCJ0ZXh0LWJsYWNrXCIgOiBcInRleHQtd2hpdGVcIn1gIH0+eyBsYWJlbE5hbWUgfTwvcD5cblx0XHRcdFx0PC9jZW50ZXI+XG5cdFx0XHQ8L2Rpdj5cblx0XHQ8L2E+XG5cdCk7XG59OyJdLCJuYW1lcyI6WyJSZWFjdCIsInVzZUVmZmVjdCIsInNlcnZlciIsIkxhYmVsIiwicHJvcHMiLCJjb25zb2xlIiwibG9nIiwic2l6ZSIsInRoZW1lIiwibmFtZSIsImltYWdlIiwiaHJlZiIsImlkIiwid2luZG93IiwicmVtb3ZlRXZlbnRMaXN0ZW5lciIsImxvY2F0aW9uIiwicmVsb2FkIiwiYWRkRXZlbnRMaXN0ZW5lciIsImxhYmVsTmFtZSIsImNyb3BOYW1lIiwic3Vic3RyaW5nIiwiYSIsImRpdiIsImNsYXNzTmFtZSIsImNlbnRlciIsImltZyIsInNyYyIsInBhdGgiLCJhbHQiLCJwIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./components/Label/Label.js\n");

/***/ }),

/***/ "./config.js":
/*!*******************!*\
  !*** ./config.js ***!
  \*******************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"api\": () => (/* binding */ api),\n/* harmony export */   \"database\": () => (/* binding */ database),\n/* harmony export */   \"defaultDescription\": () => (/* binding */ defaultDescription),\n/* harmony export */   \"defaultDockElementIDs\": () => (/* binding */ defaultDockElementIDs),\n/* harmony export */   \"defaultFavicon\": () => (/* binding */ defaultFavicon),\n/* harmony export */   \"defaultLanguage\": () => (/* binding */ defaultLanguage),\n/* harmony export */   \"defaultOpenGraphImage\": () => (/* binding */ defaultOpenGraphImage),\n/* harmony export */   \"host\": () => (/* binding */ host),\n/* harmony export */   \"imageFallback\": () => (/* binding */ imageFallback),\n/* harmony export */   \"months\": () => (/* binding */ months),\n/* harmony export */   \"password\": () => (/* binding */ password),\n/* harmony export */   \"port\": () => (/* binding */ port),\n/* harmony export */   \"server\": () => (/* binding */ server),\n/* harmony export */   \"user\": () => (/* binding */ user)\n/* harmony export */ });\n//    TURTLE - TEKI\n//    (°-°) _______\n//      \\ \\/ - - - \\_\n//       \\_  ___  ___>\n//         \\__) \\__)\nconst dev = \"development\" !== \"production\";\nconst api = \"http://localhost:3000\";\nconst server = dev ? \"http://localhost:3000\" : \"https://www.kekesi.dev\";\n// dock elements\nconst defaultDockElementIDs = [\n    1,\n    2,\n    5,\n    6,\n    7\n];\n// db credentials\nconst user = \"kristofkekesi\";\nconst password = \"\";\nconst host = \"localhost\";\nconst port = \"5432\";\nconst database = \"portfolio\";\n// metadata\nconst defaultDescription = \"\";\nconst defaultLanguage = \"en\";\nconst defaultOpenGraphImage = server + \"/opengarph.jpg\";\nconst defaultFavicon = server + \"/favicon.png\";\n// months\nconst months = [\n    \"January\",\n    \"February\",\n    \"March\",\n    \"April\",\n    \"May\",\n    \"June\",\n    \"July\",\n    \"August\",\n    \"September\",\n    \"October\",\n    \"November\",\n    \"December\"\n];\n// fallbacks\nconst imageFallback = \"bg.jpeg\";\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb25maWcuanMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxtQkFBbUI7QUFDbkIsbUJBQW1CO0FBQ25CLHFCQUFxQjtBQUNyQixzQkFBc0I7QUFDdEIsb0JBQW9CO0FBR3BCLE1BQU1BLE1BQU1DLGtCQUF5QjtBQUU5QixNQUFNQyxNQUFNLHdCQUF3QjtBQUNwQyxNQUFNQyxTQUFTSCxNQUFNLDBCQUEwQix3QkFBd0IsQ0FBQztBQUUvRSxnQkFBZ0I7QUFDVCxNQUFNSSx3QkFBd0I7SUFBQztJQUFHO0lBQUc7SUFBRztJQUFHO0NBQUUsQ0FBQztBQUdyRCxpQkFBaUI7QUFDVixNQUFNQyxPQUFPLGdCQUFnQjtBQUM3QixNQUFNQyxXQUFXLEdBQUc7QUFDcEIsTUFBTUMsT0FBTyxZQUFZO0FBQ3pCLE1BQU1DLE9BQU8sT0FBTztBQUNwQixNQUFNQyxXQUFXLFlBQVk7QUFHcEMsV0FBVztBQUNKLE1BQU1DLHFCQUFxQixHQUFHO0FBQzlCLE1BQU1DLGtCQUFrQixLQUFLO0FBQzdCLE1BQU1DLHdCQUF3QlQsU0FBUyxpQkFBaUI7QUFDeEQsTUFBTVUsaUJBQWlCVixTQUFTLGVBQWU7QUFHdEQsU0FBUztBQUNGLE1BQU1XLFNBQVM7SUFBRTtJQUFXO0lBQVk7SUFBUztJQUFTO0lBQU87SUFBUTtJQUFRO0lBQVU7SUFBYTtJQUFXO0lBQVk7Q0FBWSxDQUFDO0FBRW5KLFlBQVk7QUFDTCxNQUFNQyxnQkFBZ0IsVUFBVSIsInNvdXJjZXMiOlsid2VicGFjazovL3BvcnRmb2xpby0zLy4vY29uZmlnLmpzP2MyYjMiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gICAgVFVSVExFIC0gVEVLSVxuLy8gICAgKMKwLcKwKSBfX19fX19fXG4vLyAgICAgIFxcIFxcLyAtIC0gLSBcXF9cbi8vICAgICAgIFxcXyAgX19fICBfX18+XG4vLyAgICAgICAgIFxcX18pIFxcX18pXG5cblxuY29uc3QgZGV2ID0gcHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09IFwicHJvZHVjdGlvblwiO1xuXG5leHBvcnQgY29uc3QgYXBpID0gXCJodHRwOi8vbG9jYWxob3N0OjMwMDBcIjtcbmV4cG9ydCBjb25zdCBzZXJ2ZXIgPSBkZXYgPyBcImh0dHA6Ly9sb2NhbGhvc3Q6MzAwMFwiIDogXCJodHRwczovL3d3dy5rZWtlc2kuZGV2XCI7XG5cbi8vIGRvY2sgZWxlbWVudHNcbmV4cG9ydCBjb25zdCBkZWZhdWx0RG9ja0VsZW1lbnRJRHMgPSBbMSwgMiwgNSwgNiwgN107XG5cblxuLy8gZGIgY3JlZGVudGlhbHNcbmV4cG9ydCBjb25zdCB1c2VyID0gXCJrcmlzdG9ma2VrZXNpXCI7XG5leHBvcnQgY29uc3QgcGFzc3dvcmQgPSBcIlwiO1xuZXhwb3J0IGNvbnN0IGhvc3QgPSBcImxvY2FsaG9zdFwiO1xuZXhwb3J0IGNvbnN0IHBvcnQgPSBcIjU0MzJcIjtcbmV4cG9ydCBjb25zdCBkYXRhYmFzZSA9IFwicG9ydGZvbGlvXCI7XG5cblxuLy8gbWV0YWRhdGFcbmV4cG9ydCBjb25zdCBkZWZhdWx0RGVzY3JpcHRpb24gPSBcIlwiO1xuZXhwb3J0IGNvbnN0IGRlZmF1bHRMYW5ndWFnZSA9IFwiZW5cIjtcbmV4cG9ydCBjb25zdCBkZWZhdWx0T3BlbkdyYXBoSW1hZ2UgPSBzZXJ2ZXIgKyBcIi9vcGVuZ2FycGguanBnXCI7XG5leHBvcnQgY29uc3QgZGVmYXVsdEZhdmljb24gPSBzZXJ2ZXIgKyBcIi9mYXZpY29uLnBuZ1wiO1xuXG5cbi8vIG1vbnRoc1xuZXhwb3J0IGNvbnN0IG1vbnRocyA9IFsgXCJKYW51YXJ5XCIsIFwiRmVicnVhcnlcIiwgXCJNYXJjaFwiLCBcIkFwcmlsXCIsIFwiTWF5XCIsIFwiSnVuZVwiLCBcIkp1bHlcIiwgXCJBdWd1c3RcIiwgXCJTZXB0ZW1iZXJcIiwgXCJPY3RvYmVyXCIsIFwiTm92ZW1iZXJcIiwgXCJEZWNlbWJlclwiIF07XG5cbi8vIGZhbGxiYWNrc1xuZXhwb3J0IGNvbnN0IGltYWdlRmFsbGJhY2sgPSBcImJnLmpwZWdcIjsiXSwibmFtZXMiOlsiZGV2IiwicHJvY2VzcyIsImFwaSIsInNlcnZlciIsImRlZmF1bHREb2NrRWxlbWVudElEcyIsInVzZXIiLCJwYXNzd29yZCIsImhvc3QiLCJwb3J0IiwiZGF0YWJhc2UiLCJkZWZhdWx0RGVzY3JpcHRpb24iLCJkZWZhdWx0TGFuZ3VhZ2UiLCJkZWZhdWx0T3BlbkdyYXBoSW1hZ2UiLCJkZWZhdWx0RmF2aWNvbiIsIm1vbnRocyIsImltYWdlRmFsbGJhY2siXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./config.js\n");

/***/ }),

/***/ "./pages/_app.js":
/*!***********************!*\
  !*** ./pages/_app.js ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ MyApp)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _styles_legacy_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../styles/legacy.css */ \"./styles/legacy.css\");\n/* harmony import */ var _styles_legacy_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_styles_legacy_css__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _styles_globals_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../styles/globals.css */ \"./styles/globals.css\");\n/* harmony import */ var _styles_globals_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_styles_globals_css__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _components_Label_Label__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/Label/Label */ \"./components/Label/Label.js\");\n/* harmony import */ var _components_Dock_Dock_css__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/Dock/Dock.css */ \"./components/Dock/Dock.css\");\n/* harmony import */ var _components_Dock_Dock_css__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_components_Dock_Dock_css__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _components_Award_Award_css__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../components/Award/Award.css */ \"./components/Award/Award.css\");\n/* harmony import */ var _components_Award_Award_css__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_components_Award_Award_css__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _components_Quote_Quote_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../components/Quote/Quote.css */ \"./components/Quote/Quote.css\");\n/* harmony import */ var _components_Quote_Quote_css__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_components_Quote_Quote_css__WEBPACK_IMPORTED_MODULE_6__);\n/* harmony import */ var _components_Bundle_Bundle_css__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../components/Bundle/Bundle.css */ \"./components/Bundle/Bundle.css\");\n/* harmony import */ var _components_Bundle_Bundle_css__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_components_Bundle_Bundle_css__WEBPACK_IMPORTED_MODULE_7__);\n/* harmony import */ var _components_Cursor_Cursor_css__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../components/Cursor/Cursor.css */ \"./components/Cursor/Cursor.css\");\n/* harmony import */ var _components_Cursor_Cursor_css__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_components_Cursor_Cursor_css__WEBPACK_IMPORTED_MODULE_8__);\n/* harmony import */ var _components_Navbar_Navbar_css__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../components/Navbar/Navbar.css */ \"./components/Navbar/Navbar.css\");\n/* harmony import */ var _components_Navbar_Navbar_css__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(_components_Navbar_Navbar_css__WEBPACK_IMPORTED_MODULE_9__);\n/* harmony import */ var _components_Footer_Footer_css__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../components/Footer/Footer.css */ \"./components/Footer/Footer.css\");\n/* harmony import */ var _components_Footer_Footer_css__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(_components_Footer_Footer_css__WEBPACK_IMPORTED_MODULE_10__);\n/* harmony import */ var _components_Article_Article_css__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../components/Article/Article.css */ \"./components/Article/Article.css\");\n/* harmony import */ var _components_Article_Article_css__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(_components_Article_Article_css__WEBPACK_IMPORTED_MODULE_11__);\n/* harmony import */ var _components_Terminal_Terminal_css__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../components/Terminal/Terminal.css */ \"./components/Terminal/Terminal.css\");\n/* harmony import */ var _components_Terminal_Terminal_css__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(_components_Terminal_Terminal_css__WEBPACK_IMPORTED_MODULE_12__);\n/* harmony import */ var _components_MoreTooltip_MoreTooltip_css__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../components/MoreTooltip/MoreTooltip.css */ \"./components/MoreTooltip/MoreTooltip.css\");\n/* harmony import */ var _components_MoreTooltip_MoreTooltip_css__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(_components_MoreTooltip_MoreTooltip_css__WEBPACK_IMPORTED_MODULE_13__);\n/* harmony import */ var _components_ImageGallery_ImageGallery_css__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../components/ImageGallery/ImageGallery.css */ \"./components/ImageGallery/ImageGallery.css\");\n/* harmony import */ var _components_ImageGallery_ImageGallery_css__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(_components_ImageGallery_ImageGallery_css__WEBPACK_IMPORTED_MODULE_14__);\n/* harmony import */ var _components_ProjectTooltip_ProjectTooltip_css__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../components/ProjectTooltip/ProjectTooltip.css */ \"./components/ProjectTooltip/ProjectTooltip.css\");\n/* harmony import */ var _components_ProjectTooltip_ProjectTooltip_css__WEBPACK_IMPORTED_MODULE_15___default = /*#__PURE__*/__webpack_require__.n(_components_ProjectTooltip_ProjectTooltip_css__WEBPACK_IMPORTED_MODULE_15__);\n/* harmony import */ var _components_ArticlePreview_ArticlePreviewBig_css__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ../components/ArticlePreview/ArticlePreviewBig.css */ \"./components/ArticlePreview/ArticlePreviewBig.css\");\n/* harmony import */ var _components_ArticlePreview_ArticlePreviewBig_css__WEBPACK_IMPORTED_MODULE_16___default = /*#__PURE__*/__webpack_require__.n(_components_ArticlePreview_ArticlePreviewBig_css__WEBPACK_IMPORTED_MODULE_16__);\n/* harmony import */ var _components_ArticlePreview_ArticlePreviewSmoll_css__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ../components/ArticlePreview/ArticlePreviewSmoll.css */ \"./components/ArticlePreview/ArticlePreviewSmoll.css\");\n/* harmony import */ var _components_ArticlePreview_ArticlePreviewSmoll_css__WEBPACK_IMPORTED_MODULE_17___default = /*#__PURE__*/__webpack_require__.n(_components_ArticlePreview_ArticlePreviewSmoll_css__WEBPACK_IMPORTED_MODULE_17__);\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n//    TURTLE - TEKI\n//    (°-°) _______\n//      \\ \\/ - - - \\_\n//       \\_  ___  ___>\n//         \\__) \\__)\nfunction MyApp({ Component , pageProps  }) {\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Component, {\n        ...pageProps\n    }, void 0, false, {\n        fileName: \"/Users/kristofkekesi/Developer/Web/Portfolio/pages/_app.js\",\n        lineNumber: 29,\n        columnNumber: 10\n    }, this);\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9fYXBwLmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQThCO0FBQ0M7QUFFSTtBQUNFO0FBQ0U7QUFDQTtBQUNFO0FBQ0E7QUFDQTtBQUNBO0FBQ0U7QUFDRTtBQUNNO0FBQ0U7QUFDSTtBQUNHO0FBQ0U7QUFHOUQsbUJBQW1CO0FBQ25CLG1CQUFtQjtBQUNuQixxQkFBcUI7QUFDckIsc0JBQXNCO0FBQ3RCLG9CQUFvQjtBQUdMLFNBQVNBLE1BQU0sRUFBRUMsVUFBUyxFQUFFQyxVQUFTLEVBQUUsRUFBRTtJQUN0RCxxQkFBTyw4REFBQ0Q7UUFBVyxHQUFHQyxTQUFTOzs7Ozs7QUFDakMsQ0FBQyIsInNvdXJjZXMiOlsid2VicGFjazovL3BvcnRmb2xpby0zLy4vcGFnZXMvX2FwcC5qcz9lMGFkIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCAnLi4vc3R5bGVzL2xlZ2FjeS5jc3MnO1xuaW1wb3J0ICcuLi9zdHlsZXMvZ2xvYmFscy5jc3MnO1xuXG5pbXBvcnQgJy4uL2NvbXBvbmVudHMvTGFiZWwvTGFiZWwnO1xuaW1wb3J0ICcuLi9jb21wb25lbnRzL0RvY2svRG9jay5jc3MnO1xuaW1wb3J0ICcuLi9jb21wb25lbnRzL0F3YXJkL0F3YXJkLmNzcyc7XG5pbXBvcnQgJy4uL2NvbXBvbmVudHMvUXVvdGUvUXVvdGUuY3NzJztcbmltcG9ydCAnLi4vY29tcG9uZW50cy9CdW5kbGUvQnVuZGxlLmNzcyc7XG5pbXBvcnQgJy4uL2NvbXBvbmVudHMvQ3Vyc29yL0N1cnNvci5jc3MnO1xuaW1wb3J0ICcuLi9jb21wb25lbnRzL05hdmJhci9OYXZiYXIuY3NzJztcbmltcG9ydCAnLi4vY29tcG9uZW50cy9Gb290ZXIvRm9vdGVyLmNzcyc7XG5pbXBvcnQgJy4uL2NvbXBvbmVudHMvQXJ0aWNsZS9BcnRpY2xlLmNzcyc7XG5pbXBvcnQgJy4uL2NvbXBvbmVudHMvVGVybWluYWwvVGVybWluYWwuY3NzJztcbmltcG9ydCAnLi4vY29tcG9uZW50cy9Nb3JlVG9vbHRpcC9Nb3JlVG9vbHRpcC5jc3MnO1xuaW1wb3J0ICcuLi9jb21wb25lbnRzL0ltYWdlR2FsbGVyeS9JbWFnZUdhbGxlcnkuY3NzJztcbmltcG9ydCAnLi4vY29tcG9uZW50cy9Qcm9qZWN0VG9vbHRpcC9Qcm9qZWN0VG9vbHRpcC5jc3MnO1xuaW1wb3J0ICcuLi9jb21wb25lbnRzL0FydGljbGVQcmV2aWV3L0FydGljbGVQcmV2aWV3QmlnLmNzcyc7XG5pbXBvcnQgJy4uL2NvbXBvbmVudHMvQXJ0aWNsZVByZXZpZXcvQXJ0aWNsZVByZXZpZXdTbW9sbC5jc3MnO1xuXG5cbi8vICAgIFRVUlRMRSAtIFRFS0lcbi8vICAgICjCsC3CsCkgX19fX19fX1xuLy8gICAgICBcXCBcXC8gLSAtIC0gXFxfXG4vLyAgICAgICBcXF8gIF9fXyAgX19fPlxuLy8gICAgICAgICBcXF9fKSBcXF9fKVxuXG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIE15QXBwKHsgQ29tcG9uZW50LCBwYWdlUHJvcHMgfSkge1xuICByZXR1cm4gPENvbXBvbmVudCB7Li4ucGFnZVByb3BzfSAvPlxufVxuIl0sIm5hbWVzIjpbIk15QXBwIiwiQ29tcG9uZW50IiwicGFnZVByb3BzIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/_app.js\n");

/***/ }),

/***/ "./components/Article/Article.css":
/*!****************************************!*\
  !*** ./components/Article/Article.css ***!
  \****************************************/
/***/ (() => {



/***/ }),

/***/ "./components/ArticlePreview/ArticlePreviewBig.css":
/*!*********************************************************!*\
  !*** ./components/ArticlePreview/ArticlePreviewBig.css ***!
  \*********************************************************/
/***/ (() => {



/***/ }),

/***/ "./components/ArticlePreview/ArticlePreviewSmoll.css":
/*!***********************************************************!*\
  !*** ./components/ArticlePreview/ArticlePreviewSmoll.css ***!
  \***********************************************************/
/***/ (() => {



/***/ }),

/***/ "./components/Award/Award.css":
/*!************************************!*\
  !*** ./components/Award/Award.css ***!
  \************************************/
/***/ (() => {



/***/ }),

/***/ "./components/Bundle/Bundle.css":
/*!**************************************!*\
  !*** ./components/Bundle/Bundle.css ***!
  \**************************************/
/***/ (() => {



/***/ }),

/***/ "./components/Cursor/Cursor.css":
/*!**************************************!*\
  !*** ./components/Cursor/Cursor.css ***!
  \**************************************/
/***/ (() => {



/***/ }),

/***/ "./components/Dock/Dock.css":
/*!**********************************!*\
  !*** ./components/Dock/Dock.css ***!
  \**********************************/
/***/ (() => {



/***/ }),

/***/ "./components/Footer/Footer.css":
/*!**************************************!*\
  !*** ./components/Footer/Footer.css ***!
  \**************************************/
/***/ (() => {



/***/ }),

/***/ "./components/ImageGallery/ImageGallery.css":
/*!**************************************************!*\
  !*** ./components/ImageGallery/ImageGallery.css ***!
  \**************************************************/
/***/ (() => {



/***/ }),

/***/ "./components/MoreTooltip/MoreTooltip.css":
/*!************************************************!*\
  !*** ./components/MoreTooltip/MoreTooltip.css ***!
  \************************************************/
/***/ (() => {



/***/ }),

/***/ "./components/Navbar/Navbar.css":
/*!**************************************!*\
  !*** ./components/Navbar/Navbar.css ***!
  \**************************************/
/***/ (() => {



/***/ }),

/***/ "./components/ProjectTooltip/ProjectTooltip.css":
/*!******************************************************!*\
  !*** ./components/ProjectTooltip/ProjectTooltip.css ***!
  \******************************************************/
/***/ (() => {



/***/ }),

/***/ "./components/Quote/Quote.css":
/*!************************************!*\
  !*** ./components/Quote/Quote.css ***!
  \************************************/
/***/ (() => {



/***/ }),

/***/ "./components/Terminal/Terminal.css":
/*!******************************************!*\
  !*** ./components/Terminal/Terminal.css ***!
  \******************************************/
/***/ (() => {



/***/ }),

/***/ "./styles/globals.css":
/*!****************************!*\
  !*** ./styles/globals.css ***!
  \****************************/
/***/ (() => {



/***/ }),

/***/ "./styles/legacy.css":
/*!***************************!*\
  !*** ./styles/legacy.css ***!
  \***************************/
/***/ (() => {



/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/***/ ((module) => {

"use strict";
module.exports = require("react");

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/***/ ((module) => {

"use strict";
module.exports = require("react/jsx-dev-runtime");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("./pages/_app.js"));
module.exports = __webpack_exports__;

})();