/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/_app",{

/***/ "./components/downloads.js":
/*!*********************************!*\
  !*** ./components/downloads.js ***!
  \*********************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Downloads; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var logos__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! logos */ \"./logos/index.js\");\n/* module decorator */ module = __webpack_require__.hmd(module);\n\nvar _jsxFileName = \"/Users/pheading/Sites/paulhbiz/components/downloads.js\";\n\nfunction Downloads(_ref) {\n  var ready = _ref.ready,\n      type = _ref.type,\n      url = _ref.url,\n      name = _ref.name,\n      downloads = _ref.downloads;\n  var placeholder = !ready ? \"placeholder\" : \"\";\n  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n    className: \"downloads component\",\n    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n      className: \"link downloads \".concat(placeholder),\n      href: url,\n      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"svg downloads\",\n        children: type === \"gem\" ? /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(logos__WEBPACK_IMPORTED_MODULE_1__.GemLogo, {}, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 11,\n          columnNumber: 30\n        }, this) : /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(logos__WEBPACK_IMPORTED_MODULE_1__.NpmLogo, {}, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 11,\n          columnNumber: 44\n        }, this)\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 10,\n        columnNumber: 9\n      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"info downloads\",\n        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n          className: \"title downloads \".concat(placeholder),\n          children: name\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 14,\n          columnNumber: 11\n        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n          className: \"figure downloads \".concat(placeholder),\n          children: downloads\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 15,\n          columnNumber: 11\n        }, this)]\n      }, void 0, true, {\n        fileName: _jsxFileName,\n        lineNumber: 13,\n        columnNumber: 9\n      }, this)]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 9,\n      columnNumber: 7\n    }, this)\n  }, void 0, false, {\n    fileName: _jsxFileName,\n    lineNumber: 8,\n    columnNumber: 5\n  }, this);\n}\n_c = Downloads;\n\nvar _c;\n\n$RefreshReg$(_c, \"Downloads\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9kb3dubG9hZHMuanM/NzQ4NSJdLCJuYW1lcyI6WyJEb3dubG9hZHMiLCJyZWFkeSIsInR5cGUiLCJ1cmwiLCJuYW1lIiwiZG93bmxvYWRzIiwicGxhY2Vob2xkZXIiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBQTtBQUVlLFNBQVNBLFNBQVQsT0FBMEQ7QUFBQSxNQUFyQ0MsS0FBcUMsUUFBckNBLEtBQXFDO0FBQUEsTUFBOUJDLElBQThCLFFBQTlCQSxJQUE4QjtBQUFBLE1BQXhCQyxHQUF3QixRQUF4QkEsR0FBd0I7QUFBQSxNQUFuQkMsSUFBbUIsUUFBbkJBLElBQW1CO0FBQUEsTUFBYkMsU0FBYSxRQUFiQSxTQUFhO0FBRXZFLE1BQU1DLFdBQVcsR0FBRyxDQUFDTCxLQUFELEdBQVMsYUFBVCxHQUF5QixFQUE3QztBQUVBLHNCQUNFO0FBQUssYUFBUyxFQUFDLHFCQUFmO0FBQUEsMkJBQ0U7QUFBRyxlQUFTLDJCQUFvQkssV0FBcEIsQ0FBWjtBQUErQyxVQUFJLEVBQUVILEdBQXJEO0FBQUEsOEJBQ0U7QUFBSyxpQkFBUyxFQUFDLGVBQWY7QUFBQSxrQkFDSUQsSUFBSSxLQUFLLEtBQVQsZ0JBQWlCLDhEQUFDLDBDQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUEsZ0JBQWpCLGdCQUErQiw4REFBQywwQ0FBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBRG5DO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FERixlQUlFO0FBQUssaUJBQVMsRUFBQyxnQkFBZjtBQUFBLGdDQUNFO0FBQUssbUJBQVMsNEJBQXFCSSxXQUFyQixDQUFkO0FBQUEsb0JBQW9ERjtBQUFwRDtBQUFBO0FBQUE7QUFBQTtBQUFBLGdCQURGLGVBRUU7QUFBSyxtQkFBUyw2QkFBc0JFLFdBQXRCLENBQWQ7QUFBQSxvQkFBcUREO0FBQXJEO0FBQUE7QUFBQTtBQUFBO0FBQUEsZ0JBRkY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBSkY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQSxVQURGO0FBYUQ7S0FqQnVCTCxTIiwiZmlsZSI6Ii4vY29tcG9uZW50cy9kb3dubG9hZHMuanMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBHZW1Mb2dvLCBOcG1Mb2dvIH0gZnJvbSAnbG9nb3MnXG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIERvd25sb2Fkcyh7IHJlYWR5LCB0eXBlLCB1cmwsIG5hbWUsIGRvd25sb2FkcyB9KSB7XG5cbiAgY29uc3QgcGxhY2Vob2xkZXIgPSAhcmVhZHkgPyBcInBsYWNlaG9sZGVyXCIgOiBcIlwiO1xuXG4gIHJldHVybiAoXG4gICAgPGRpdiBjbGFzc05hbWU9XCJkb3dubG9hZHMgY29tcG9uZW50XCI+XG4gICAgICA8YSBjbGFzc05hbWU9e2BsaW5rIGRvd25sb2FkcyAke3BsYWNlaG9sZGVyfWB9IGhyZWY9e3VybH0+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwic3ZnIGRvd25sb2Fkc1wiPlxuICAgICAgICAgIHsgdHlwZSA9PT0gXCJnZW1cIiA/IDxHZW1Mb2dvIC8+IDogPE5wbUxvZ28gLz4gfVxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJpbmZvIGRvd25sb2Fkc1wiPlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtgdGl0bGUgZG93bmxvYWRzICR7cGxhY2Vob2xkZXJ9YH0+eyBuYW1lIH08L2Rpdj5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17YGZpZ3VyZSBkb3dubG9hZHMgJHtwbGFjZWhvbGRlcn1gfT57IGRvd25sb2FkcyB9PC9kaXY+ICAgICAgICAgICAgICBcbiAgICAgICAgPC9kaXY+XG4gICAgICA8L2E+XG4gICAgPC9kaXY+XG4gICk7XG59Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./components/downloads.js\n");

/***/ })

});