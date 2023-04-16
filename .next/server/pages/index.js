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

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {\n__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ Index)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var swr__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! swr */ \"swr\");\nvar __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([swr__WEBPACK_IMPORTED_MODULE_1__]);\nswr__WEBPACK_IMPORTED_MODULE_1__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];\n\n\n//Write a fetcher function to wrap the native fetch function and return the result of a call to url in json format\nconst fetcher = (url)=>fetch(url).then((res)=>res.json());\nfunction Index() {\n    //Set up SWR to run the fetcher function when calling \"/api/staticdata\"\n    //There are 3 possible states: (1) loading when data is null (2) ready when the data is returned (3) error when there was an error fetching the data\n    const { data , error  } = (0,swr__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(\"/api/staticdata\", fetcher);\n    //Handle the error state\n    if (error) return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        children: \"Failed to load\"\n    }, void 0, false, {\n        fileName: \"/Users/racheltongco/front-end-mentor/time-tracking-dashboard/pages/index.js\",\n        lineNumber: 12,\n        columnNumber: 21\n    }, this);\n    //Handle the loading state\n    if (!data) return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        children: \"Loading...\"\n    }, void 0, false, {\n        fileName: \"/Users/racheltongco/front-end-mentor/time-tracking-dashboard/pages/index.js\",\n        lineNumber: 14,\n        columnNumber: 21\n    }, this);\n    //Handle the ready state and display the result contained in the data object mapped to the structure of the json file\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                children: \"My Framework from file\"\n            }, void 0, false, {\n                fileName: \"/Users/racheltongco/front-end-mentor/time-tracking-dashboard/pages/index.js\",\n                lineNumber: 18,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"ul\", {\n                children: data.map((item, idx)=>{\n                    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n                        children: item.title\n                    }, idx, false, {\n                        fileName: \"/Users/racheltongco/front-end-mentor/time-tracking-dashboard/pages/index.js\",\n                        lineNumber: 22,\n                        columnNumber: 13\n                    }, this);\n                })\n            }, void 0, false, {\n                fileName: \"/Users/racheltongco/front-end-mentor/time-tracking-dashboard/pages/index.js\",\n                lineNumber: 19,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/racheltongco/front-end-mentor/time-tracking-dashboard/pages/index.js\",\n        lineNumber: 17,\n        columnNumber: 5\n    }, this);\n}\n\n__webpack_async_result__();\n} catch(e) { __webpack_async_result__(e); } });//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9pbmRleC5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7OztBQUF5QjtBQUV6QixrSEFBa0g7QUFDbEgsTUFBTUMsVUFBVSxDQUFDQyxNQUFRQyxNQUFNRCxLQUFLRSxJQUFJLENBQUMsQ0FBQ0MsTUFBUUEsSUFBSUMsSUFBSTtBQUUzQyxTQUFTQyxRQUFRO0lBQzlCLHVFQUF1RTtJQUN2RSxvSkFBb0o7SUFDcEosTUFBTSxFQUFFQyxLQUFJLEVBQUVDLE1BQUssRUFBRSxHQUFHVCwrQ0FBTUEsQ0FBQyxtQkFBbUJDO0lBRWxELHdCQUF3QjtJQUN4QixJQUFJUSxPQUFPLHFCQUFPLDhEQUFDQztrQkFBSTs7Ozs7O0lBQ3ZCLDBCQUEwQjtJQUMxQixJQUFJLENBQUNGLE1BQU0scUJBQU8sOERBQUNFO2tCQUFJOzs7Ozs7SUFDdkIscUhBQXFIO0lBQ3JILHFCQUNFLDhEQUFDQTs7MEJBQ0MsOERBQUNDOzBCQUFHOzs7Ozs7MEJBQ0osOERBQUNDOzBCQUNFSixLQUFLSyxHQUFHLENBQUMsQ0FBQ0MsTUFBTUMsTUFBUTtvQkFDdkIscUJBQ0UsOERBQUNDO2tDQUFjRixLQUFLRyxLQUFLO3VCQUFoQkY7Ozs7O2dCQUViOzs7Ozs7Ozs7Ozs7QUFJUixDQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vLy4vcGFnZXMvaW5kZXguanM/YmVlNyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgdXNlU1dSIGZyb20gJ3N3cic7XG5cbi8vV3JpdGUgYSBmZXRjaGVyIGZ1bmN0aW9uIHRvIHdyYXAgdGhlIG5hdGl2ZSBmZXRjaCBmdW5jdGlvbiBhbmQgcmV0dXJuIHRoZSByZXN1bHQgb2YgYSBjYWxsIHRvIHVybCBpbiBqc29uIGZvcm1hdFxuY29uc3QgZmV0Y2hlciA9ICh1cmwpID0+IGZldGNoKHVybCkudGhlbigocmVzKSA9PiByZXMuanNvbigpKTtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gSW5kZXgoKSB7XG4gIC8vU2V0IHVwIFNXUiB0byBydW4gdGhlIGZldGNoZXIgZnVuY3Rpb24gd2hlbiBjYWxsaW5nIFwiL2FwaS9zdGF0aWNkYXRhXCJcbiAgLy9UaGVyZSBhcmUgMyBwb3NzaWJsZSBzdGF0ZXM6ICgxKSBsb2FkaW5nIHdoZW4gZGF0YSBpcyBudWxsICgyKSByZWFkeSB3aGVuIHRoZSBkYXRhIGlzIHJldHVybmVkICgzKSBlcnJvciB3aGVuIHRoZXJlIHdhcyBhbiBlcnJvciBmZXRjaGluZyB0aGUgZGF0YVxuICBjb25zdCB7IGRhdGEsIGVycm9yIH0gPSB1c2VTV1IoJy9hcGkvc3RhdGljZGF0YScsIGZldGNoZXIpO1xuICBcbiAgLy9IYW5kbGUgdGhlIGVycm9yIHN0YXRlXG4gIGlmIChlcnJvcikgcmV0dXJuIDxkaXY+RmFpbGVkIHRvIGxvYWQ8L2Rpdj47XG4gIC8vSGFuZGxlIHRoZSBsb2FkaW5nIHN0YXRlXG4gIGlmICghZGF0YSkgcmV0dXJuIDxkaXY+TG9hZGluZy4uLjwvZGl2PjtcbiAgLy9IYW5kbGUgdGhlIHJlYWR5IHN0YXRlIGFuZCBkaXNwbGF5IHRoZSByZXN1bHQgY29udGFpbmVkIGluIHRoZSBkYXRhIG9iamVjdCBtYXBwZWQgdG8gdGhlIHN0cnVjdHVyZSBvZiB0aGUganNvbiBmaWxlXG4gIHJldHVybiAoXG4gICAgPGRpdj5cbiAgICAgIDxoMT5NeSBGcmFtZXdvcmsgZnJvbSBmaWxlPC9oMT5cbiAgICAgIDx1bD5cbiAgICAgICAge2RhdGEubWFwKChpdGVtLCBpZHgpID0+IHtcbiAgICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgPGxpIGtleT17aWR4fT57aXRlbS50aXRsZX08L2xpPlxuICAgICAgICAgIClcbiAgICAgICAgfSl9XG4gICAgICA8L3VsPlxuICAgIDwvZGl2PlxuICApO1xufSJdLCJuYW1lcyI6WyJ1c2VTV1IiLCJmZXRjaGVyIiwidXJsIiwiZmV0Y2giLCJ0aGVuIiwicmVzIiwianNvbiIsIkluZGV4IiwiZGF0YSIsImVycm9yIiwiZGl2IiwiaDEiLCJ1bCIsIm1hcCIsIml0ZW0iLCJpZHgiLCJsaSIsInRpdGxlIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/index.js\n");

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
var __webpack_exports__ = (__webpack_exec__("./pages/index.js"));
module.exports = __webpack_exports__;

})();