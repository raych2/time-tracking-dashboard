"use strict";
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
exports.id = "pages/index";
exports.ids = ["pages/index"];
exports.modules = {

/***/ "./pages/index.tsx":
/*!*************************!*\
  !*** ./pages/index.tsx ***!
  \*************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {\n__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ Index)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var swr__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! swr */ \"swr\");\nvar __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([swr__WEBPACK_IMPORTED_MODULE_1__]);\nswr__WEBPACK_IMPORTED_MODULE_1__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];\n\n\nconst fetcher = (url)=>fetch(url).then((res)=>res.json());\nfunction Index() {\n    const { data , error  } = (0,swr__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(\"/api/staticdata\", fetcher);\n    if (error) return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        children: \"Failed to load\"\n    }, void 0, false, {\n        fileName: \"/Users/racheltongco/front-end-mentor/time-tracking-dashboard/pages/index.tsx\",\n        lineNumber: 17,\n        columnNumber: 21\n    }, this);\n    if (!data) return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        children: \"Loading...\"\n    }, void 0, false, {\n        fileName: \"/Users/racheltongco/front-end-mentor/time-tracking-dashboard/pages/index.tsx\",\n        lineNumber: 18,\n        columnNumber: 21\n    }, this);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        children: data.map((item, index)=>{\n            return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                children: [\n                    item.title,\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        children: [\n                            \"Current: \",\n                            item.timeframes.daily.current\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/Users/racheltongco/front-end-mentor/time-tracking-dashboard/pages/index.tsx\",\n                        lineNumber: 26,\n                        columnNumber: 13\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        children: [\n                            \"Previous: \",\n                            item.timeframes.daily.previous\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/Users/racheltongco/front-end-mentor/time-tracking-dashboard/pages/index.tsx\",\n                        lineNumber: 27,\n                        columnNumber: 13\n                    }, this)\n                ]\n            }, index, true, {\n                fileName: \"/Users/racheltongco/front-end-mentor/time-tracking-dashboard/pages/index.tsx\",\n                lineNumber: 24,\n                columnNumber: 11\n            }, this);\n        })\n    }, void 0, false, {\n        fileName: \"/Users/racheltongco/front-end-mentor/time-tracking-dashboard/pages/index.tsx\",\n        lineNumber: 21,\n        columnNumber: 5\n    }, this);\n}\n\n__webpack_async_result__();\n} catch(e) { __webpack_async_result__(e); } });//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9pbmRleC50c3guanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7QUFBeUI7QUFZekIsTUFBTUMsVUFBVSxDQUFDQyxNQUFhQyxNQUFNRCxLQUFLRSxJQUFJLENBQUMsQ0FBQ0MsTUFBUUEsSUFBSUMsSUFBSTtBQUVoRCxTQUFTQyxRQUFRO0lBQzlCLE1BQU0sRUFBRUMsS0FBSSxFQUFFQyxNQUFLLEVBQUUsR0FBR1QsK0NBQU1BLENBQWEsbUJBQW1CQztJQUM5RCxJQUFJUSxPQUFPLHFCQUFPLDhEQUFDQztrQkFBSTs7Ozs7O0lBQ3ZCLElBQUksQ0FBQ0YsTUFBTSxxQkFBTyw4REFBQ0U7a0JBQUk7Ozs7OztJQUV2QixxQkFDRSw4REFBQ0E7a0JBQ0VGLEtBQUtHLEdBQUcsQ0FBQyxDQUFDQyxNQUFNQyxRQUFVO1lBQ3pCLHFCQUNFLDhEQUFDSDs7b0JBQ0VFLEtBQUtFLEtBQUs7a0NBQ1gsOERBQUNKOzs0QkFBSTs0QkFBVUUsS0FBS0csVUFBVSxDQUFDQyxLQUFLLENBQUNDLE9BQU87Ozs7Ozs7a0NBQzVDLDhEQUFDUDs7NEJBQUk7NEJBQVdFLEtBQUtHLFVBQVUsQ0FBQ0MsS0FBSyxDQUFDRSxRQUFROzs7Ozs7OztlQUh0Q0w7Ozs7O1FBTWQ7Ozs7OztBQUdOLENBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9wYWdlcy9pbmRleC50c3g/MDdmZiJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgdXNlU1dSIGZyb20gXCJzd3JcIjtcblxuaW50ZXJmYWNlIFRpbWUge1xuICBjdXJyZW50OiBudW1iZXI7XG4gIHByZXZpb3VzOiBudW1iZXI7XG59XG5pbnRlcmZhY2UgQWN0aXZpdHkge1xuICB0aXRsZTogc3RyaW5nO1xuICB0aW1lZnJhbWVzOiB7XG4gICAgW2tleTogc3RyaW5nXTogVGltZTtcbiAgfTtcbn1cbmNvbnN0IGZldGNoZXIgPSAodXJsOiBVUkwpID0+IGZldGNoKHVybCkudGhlbigocmVzKSA9PiByZXMuanNvbigpKTtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gSW5kZXgoKSB7XG4gIGNvbnN0IHsgZGF0YSwgZXJyb3IgfSA9IHVzZVNXUjxBY3Rpdml0eVtdPihcIi9hcGkvc3RhdGljZGF0YVwiLCBmZXRjaGVyKTtcbiAgaWYgKGVycm9yKSByZXR1cm4gPGRpdj5GYWlsZWQgdG8gbG9hZDwvZGl2PjtcbiAgaWYgKCFkYXRhKSByZXR1cm4gPGRpdj5Mb2FkaW5nLi4uPC9kaXY+O1xuXG4gIHJldHVybiAoXG4gICAgPGRpdj5cbiAgICAgIHtkYXRhLm1hcCgoaXRlbSwgaW5kZXgpID0+IHtcbiAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICA8ZGl2IGtleT17aW5kZXh9PlxuICAgICAgICAgICAge2l0ZW0udGl0bGV9XG4gICAgICAgICAgICA8ZGl2PkN1cnJlbnQ6IHtpdGVtLnRpbWVmcmFtZXMuZGFpbHkuY3VycmVudH08L2Rpdj5cbiAgICAgICAgICAgIDxkaXY+UHJldmlvdXM6IHtpdGVtLnRpbWVmcmFtZXMuZGFpbHkucHJldmlvdXN9PC9kaXY+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgICk7XG4gICAgICB9KX1cbiAgICA8L2Rpdj5cbiAgKTtcbn1cbiJdLCJuYW1lcyI6WyJ1c2VTV1IiLCJmZXRjaGVyIiwidXJsIiwiZmV0Y2giLCJ0aGVuIiwicmVzIiwianNvbiIsIkluZGV4IiwiZGF0YSIsImVycm9yIiwiZGl2IiwibWFwIiwiaXRlbSIsImluZGV4IiwidGl0bGUiLCJ0aW1lZnJhbWVzIiwiZGFpbHkiLCJjdXJyZW50IiwicHJldmlvdXMiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/index.tsx\n");

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/***/ ((module) => {

module.exports = require("react/jsx-dev-runtime");

/***/ }),

/***/ "swr":
/*!**********************!*\
  !*** external "swr" ***!
  \**********************/
/***/ ((module) => {

module.exports = import("swr");;

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("./pages/index.tsx"));
module.exports = __webpack_exports__;

})();