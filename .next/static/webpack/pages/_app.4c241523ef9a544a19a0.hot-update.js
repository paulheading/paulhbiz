/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/_app",{

/***/ "./layouts/desktop.js":
/*!****************************!*\
  !*** ./layouts/desktop.js ***!
  \****************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ DesktopLayout; }\n/* harmony export */ });\n/* harmony import */ var _Users_pheading_Sites_paulhbiz_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/defineProperty */ \"./node_modules/@babel/runtime/helpers/esm/defineProperty.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-redux */ \"./node_modules/react-redux/es/index.js\");\n/* harmony import */ var components__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! components */ \"./components/index.js\");\n/* harmony import */ var hooks__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! hooks */ \"./hooks/index.js\");\n/* harmony import */ var layouts__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! layouts */ \"./layouts/index.js\");\n/* harmony import */ var gsap__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! gsap */ \"./node_modules/gsap/index.js\");\n/* harmony import */ var gsap_dist_Draggable__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! gsap/dist/Draggable */ \"./node_modules/gsap/dist/Draggable.js\");\n/* harmony import */ var gsap_dist_Draggable__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(gsap_dist_Draggable__WEBPACK_IMPORTED_MODULE_8__);\n/* module decorator */ module = __webpack_require__.hmd(module);\n\n\n\nvar _jsxFileName = \"/Users/pheading/Sites/paulhbiz/layouts/desktop.js\",\n    _s = $RefreshSig$();\n\nfunction ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }\n\nfunction _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { (0,_Users_pheading_Sites_paulhbiz_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__.default)(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }\n\n\n // import Button from \"react-bootstrap/Button\";\n\n\n // import { PauseSvg, PlaySvg } from \"icons\";\n\n\n\n\nfunction DesktopLayout() {\n  _s();\n\n  console.log(\"test: \", test);\n  var store = {\n    pause: (0,react_redux__WEBPACK_IMPORTED_MODULE_3__.useSelector)(function (_ref) {\n      var pause = _ref.pause;\n      return pause;\n    }),\n    gem: (0,react_redux__WEBPACK_IMPORTED_MODULE_3__.useSelector)(function (_ref2) {\n      var gem = _ref2.gem;\n      return gem;\n    }),\n    npm: (0,react_redux__WEBPACK_IMPORTED_MODULE_3__.useSelector)(function (_ref3) {\n      var npm = _ref3.npm;\n      return npm;\n    })\n  };\n  var ref = {\n    desktop: (0,react__WEBPACK_IMPORTED_MODULE_2__.useRef)(null),\n    spotify: (0,react__WEBPACK_IMPORTED_MODULE_2__.useRef)(null),\n    trello: (0,react__WEBPACK_IMPORTED_MODULE_2__.useRef)(null)\n  };\n\n  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(true),\n      spotifyFolder = _useState[0],\n      setSpotifyFolder = _useState[1];\n\n  var _useState2 = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(true),\n      trelloFolder = _useState2[0],\n      setTrelloFolder = _useState2[1];\n\n  (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(function () {\n    gsap__WEBPACK_IMPORTED_MODULE_7__.default.registerPlugin(gsap_dist_Draggable__WEBPACK_IMPORTED_MODULE_8__.Draggable);\n\n    var makeDraggable = function makeDraggable(target) {\n      return gsap_dist_Draggable__WEBPACK_IMPORTED_MODULE_8__.Draggable.create(target.children);\n    };\n\n    makeDraggable(ref.desktop.current);\n  }, [ref.desktop]);\n  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n    className: \"component desktop-block\",\n    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(hooks__WEBPACK_IMPORTED_MODULE_5__.DesktopHook, {}, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 40,\n      columnNumber: 7\n    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n      className: \"container desktop-block\",\n      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n        className: \"wrap desktop-block\",\n        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n          ref: ref.desktop,\n          className: \"container desktop-windows\",\n          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n            className: \"position spotify-feed\",\n            ref: ref.spotify,\n            children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(components__WEBPACK_IMPORTED_MODULE_4__.SpotifyFeed, {}, void 0, false, {\n              fileName: _jsxFileName,\n              lineNumber: 46,\n              columnNumber: 15\n            }, this)\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 45,\n            columnNumber: 13\n          }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n            className: \"position trello-feed\",\n            ref: ref.trello,\n            children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(components__WEBPACK_IMPORTED_MODULE_4__.TrelloFeed, {}, void 0, false, {\n              fileName: _jsxFileName,\n              lineNumber: 49,\n              columnNumber: 15\n            }, this)\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 48,\n            columnNumber: 13\n          }, this)]\n        }, void 0, true, {\n          fileName: _jsxFileName,\n          lineNumber: 44,\n          columnNumber: 11\n        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n          className: \"container desktop-folders\",\n          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n            className: \"wrap desktop-folders\",\n            children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(components__WEBPACK_IMPORTED_MODULE_4__.Folder, {\n              title: \"Spotify\",\n              target: ref.spotify.current,\n              input: spotifyFolder,\n              output: setSpotifyFolder\n            }, void 0, false, {\n              fileName: _jsxFileName,\n              lineNumber: 57,\n              columnNumber: 15\n            }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(components__WEBPACK_IMPORTED_MODULE_4__.Folder, {\n              title: \"Trello\",\n              target: ref.trello.current,\n              input: trelloFolder,\n              output: setTrelloFolder\n            }, void 0, false, {\n              fileName: _jsxFileName,\n              lineNumber: 62,\n              columnNumber: 15\n            }, this)]\n          }, void 0, true, {\n            fileName: _jsxFileName,\n            lineNumber: 55,\n            columnNumber: 13\n          }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(components__WEBPACK_IMPORTED_MODULE_4__.Downloads, _objectSpread({}, store.gem), void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 70,\n            columnNumber: 13\n          }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(components__WEBPACK_IMPORTED_MODULE_4__.Downloads, _objectSpread({}, store.npm), void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 71,\n            columnNumber: 13\n          }, this)]\n        }, void 0, true, {\n          fileName: _jsxFileName,\n          lineNumber: 53,\n          columnNumber: 11\n        }, this)]\n      }, void 0, true, {\n        fileName: _jsxFileName,\n        lineNumber: 43,\n        columnNumber: 9\n      }, this)\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 42,\n      columnNumber: 7\n    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(layouts__WEBPACK_IMPORTED_MODULE_6__.Credit, {}, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 77,\n      columnNumber: 7\n    }, this)]\n  }, void 0, true, {\n    fileName: _jsxFileName,\n    lineNumber: 38,\n    columnNumber: 5\n  }, this);\n}\n\n_s(DesktopLayout, \"dtvlN7+4jVmUcx4EvvX0NEowjL4=\", false, function () {\n  return [react_redux__WEBPACK_IMPORTED_MODULE_3__.useSelector, react_redux__WEBPACK_IMPORTED_MODULE_3__.useSelector, react_redux__WEBPACK_IMPORTED_MODULE_3__.useSelector];\n});\n\n_c = DesktopLayout;\n;\n\nvar _c;\n\n$RefreshReg$(_c, \"DesktopLayout\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vbGF5b3V0cy9kZXNrdG9wLmpzPzA3YTUiXSwibmFtZXMiOlsiRGVza3RvcExheW91dCIsImNvbnNvbGUiLCJsb2ciLCJ0ZXN0Iiwic3RvcmUiLCJwYXVzZSIsInVzZVNlbGVjdG9yIiwiZ2VtIiwibnBtIiwicmVmIiwiZGVza3RvcCIsInVzZVJlZiIsInNwb3RpZnkiLCJ0cmVsbG8iLCJ1c2VTdGF0ZSIsInNwb3RpZnlGb2xkZXIiLCJzZXRTcG90aWZ5Rm9sZGVyIiwidHJlbGxvRm9sZGVyIiwic2V0VHJlbGxvRm9sZGVyIiwidXNlRWZmZWN0IiwiZ3NhcCIsIkRyYWdnYWJsZSIsIm1ha2VEcmFnZ2FibGUiLCJ0YXJnZXQiLCJjaGlsZHJlbiIsImN1cnJlbnQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0NBRUE7O0FBRUE7Q0FHQTs7QUFDQTtBQUVBO0FBQ0E7QUFFZSxTQUFTQSxhQUFULEdBQXlCO0FBQUE7O0FBQ3RDQyxTQUFPLENBQUNDLEdBQVIsQ0FBWSxRQUFaLEVBQXNCQyxJQUF0QjtBQUNBLE1BQU1DLEtBQUssR0FBRztBQUNaQyxTQUFLLEVBQUVDLHdEQUFXLENBQUM7QUFBQSxVQUFHRCxLQUFILFFBQUdBLEtBQUg7QUFBQSxhQUFlQSxLQUFmO0FBQUEsS0FBRCxDQUROO0FBRVpFLE9BQUcsRUFBRUQsd0RBQVcsQ0FBQztBQUFBLFVBQUdDLEdBQUgsU0FBR0EsR0FBSDtBQUFBLGFBQWFBLEdBQWI7QUFBQSxLQUFELENBRko7QUFHWkMsT0FBRyxFQUFFRix3REFBVyxDQUFDO0FBQUEsVUFBR0UsR0FBSCxTQUFHQSxHQUFIO0FBQUEsYUFBYUEsR0FBYjtBQUFBLEtBQUQ7QUFISixHQUFkO0FBTUEsTUFBTUMsR0FBRyxHQUFHO0FBQ1ZDLFdBQU8sRUFBRUMsNkNBQU0sQ0FBQyxJQUFELENBREw7QUFFVkMsV0FBTyxFQUFFRCw2Q0FBTSxDQUFDLElBQUQsQ0FGTDtBQUdWRSxVQUFNLEVBQUVGLDZDQUFNLENBQUMsSUFBRDtBQUhKLEdBQVo7O0FBUnNDLGtCQWNJRywrQ0FBUSxDQUFDLElBQUQsQ0FkWjtBQUFBLE1BYy9CQyxhQWQrQjtBQUFBLE1BY2hCQyxnQkFkZ0I7O0FBQUEsbUJBZUVGLCtDQUFRLENBQUMsSUFBRCxDQWZWO0FBQUEsTUFlL0JHLFlBZitCO0FBQUEsTUFlakJDLGVBZmlCOztBQWlCdENDLGtEQUFTLENBQUMsWUFBTTtBQUNkQyw0REFBQSxDQUFvQkMsMERBQXBCOztBQUNBLFFBQU1DLGFBQWEsR0FBRyxTQUFoQkEsYUFBZ0IsQ0FBQUMsTUFBTTtBQUFBLGFBQUlGLGlFQUFBLENBQWlCRSxNQUFNLENBQUNDLFFBQXhCLENBQUo7QUFBQSxLQUE1Qjs7QUFDQUYsaUJBQWEsQ0FBQ2IsR0FBRyxDQUFDQyxPQUFKLENBQVllLE9BQWIsQ0FBYjtBQUNELEdBSlEsRUFJTixDQUFDaEIsR0FBRyxDQUFDQyxPQUFMLENBSk0sQ0FBVDtBQU1BLHNCQUNFO0FBQUssYUFBUyxFQUFDLHlCQUFmO0FBQUEsNEJBRUUsOERBQUMsOENBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQUZGLGVBSUU7QUFBSyxlQUFTLEVBQUMseUJBQWY7QUFBQSw2QkFDRTtBQUFLLGlCQUFTLEVBQUMsb0JBQWY7QUFBQSxnQ0FDRTtBQUFLLGFBQUcsRUFBRUQsR0FBRyxDQUFDQyxPQUFkO0FBQXVCLG1CQUFTLEVBQUMsMkJBQWpDO0FBQUEsa0NBQ0U7QUFBSyxxQkFBUyxFQUFDLHVCQUFmO0FBQXVDLGVBQUcsRUFBRUQsR0FBRyxDQUFDRyxPQUFoRDtBQUFBLG1DQUNFLDhEQUFDLG1EQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBLGtCQURGLGVBSUU7QUFBSyxxQkFBUyxFQUFDLHNCQUFmO0FBQXNDLGVBQUcsRUFBRUgsR0FBRyxDQUFDSSxNQUEvQztBQUFBLG1DQUNFLDhEQUFDLGtEQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBLGtCQUpGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxnQkFERixlQVVFO0FBQUssbUJBQVMsRUFBQywyQkFBZjtBQUFBLGtDQUVFO0FBQUsscUJBQVMsRUFBQyxzQkFBZjtBQUFBLG9DQUVFLDhEQUFDLDhDQUFEO0FBQ0UsbUJBQUssRUFBQyxTQURSO0FBRUUsb0JBQU0sRUFBRUosR0FBRyxDQUFDRyxPQUFKLENBQVlhLE9BRnRCO0FBR0UsbUJBQUssRUFBRVYsYUFIVDtBQUlFLG9CQUFNLEVBQUVDO0FBSlY7QUFBQTtBQUFBO0FBQUE7QUFBQSxvQkFGRixlQU9FLDhEQUFDLDhDQUFEO0FBQ0UsbUJBQUssRUFBQyxRQURSO0FBRUUsb0JBQU0sRUFBRVAsR0FBRyxDQUFDSSxNQUFKLENBQVdZLE9BRnJCO0FBR0UsbUJBQUssRUFBRVIsWUFIVDtBQUlFLG9CQUFNLEVBQUVDO0FBSlY7QUFBQTtBQUFBO0FBQUE7QUFBQSxvQkFQRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsa0JBRkYsZUFpQkUsOERBQUMsaURBQUQsb0JBQWdCZCxLQUFLLENBQUNHLEdBQXRCO0FBQUE7QUFBQTtBQUFBO0FBQUEsa0JBakJGLGVBa0JFLDhEQUFDLGlEQUFELG9CQUFnQkgsS0FBSyxDQUFDSSxHQUF0QjtBQUFBO0FBQUE7QUFBQTtBQUFBLGtCQWxCRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsZ0JBVkY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQUpGLGVBdUNFLDhEQUFDLDJDQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUF2Q0Y7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFVBREY7QUE0Q0Q7O0dBbkV1QlIsYTtVQUdiTSxvRCxFQUNGQSxvRCxFQUNBQSxvRDs7O0tBTGVOLGE7QUFtRXZCIiwiZmlsZSI6Ii4vbGF5b3V0cy9kZXNrdG9wLmpzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgdXNlU3RhdGUsIHVzZUVmZmVjdCwgdXNlUmVmIH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgeyB1c2VTZWxlY3RvciB9IGZyb20gXCJyZWFjdC1yZWR1eFwiO1xuLy8gaW1wb3J0IEJ1dHRvbiBmcm9tIFwicmVhY3QtYm9vdHN0cmFwL0J1dHRvblwiO1xuXG5pbXBvcnQgeyBTcG90aWZ5RmVlZCwgVHJlbGxvRmVlZCwgRm9sZGVyLCBEb3dubG9hZHMgfSBmcm9tIFwiY29tcG9uZW50c1wiO1xuaW1wb3J0IHsgRGVza3RvcEhvb2sgfSBmcm9tIFwiaG9va3NcIjtcblxuLy8gaW1wb3J0IHsgUGF1c2VTdmcsIFBsYXlTdmcgfSBmcm9tIFwiaWNvbnNcIjtcbmltcG9ydCB7IENyZWRpdCB9IGZyb20gXCJsYXlvdXRzXCI7XG5cbmltcG9ydCBnc2FwIGZyb20gJ2dzYXAnO1xuaW1wb3J0IHsgRHJhZ2dhYmxlIH0gZnJvbSAnZ3NhcC9kaXN0L0RyYWdnYWJsZSc7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIERlc2t0b3BMYXlvdXQoKSB7XG4gIGNvbnNvbGUubG9nKFwidGVzdDogXCIsIHRlc3QpO1xuICBjb25zdCBzdG9yZSA9IHtcbiAgICBwYXVzZTogdXNlU2VsZWN0b3IoKHsgcGF1c2UgfSkgPT4gcGF1c2UpLFxuICAgIGdlbTogdXNlU2VsZWN0b3IoKHsgZ2VtIH0pID0+IGdlbSksXG4gICAgbnBtOiB1c2VTZWxlY3RvcigoeyBucG0gfSkgPT4gbnBtKSxcbiAgfTtcblxuICBjb25zdCByZWYgPSB7XG4gICAgZGVza3RvcDogdXNlUmVmKG51bGwpLFxuICAgIHNwb3RpZnk6IHVzZVJlZihudWxsKSxcbiAgICB0cmVsbG86IHVzZVJlZihudWxsKSxcbiAgfTtcblxuICBjb25zdCBbc3BvdGlmeUZvbGRlciwgc2V0U3BvdGlmeUZvbGRlcl0gPSB1c2VTdGF0ZSh0cnVlKTtcbiAgY29uc3QgW3RyZWxsb0ZvbGRlciwgc2V0VHJlbGxvRm9sZGVyXSA9IHVzZVN0YXRlKHRydWUpO1xuXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgZ3NhcC5yZWdpc3RlclBsdWdpbihEcmFnZ2FibGUpO1xuICAgIGNvbnN0IG1ha2VEcmFnZ2FibGUgPSB0YXJnZXQgPT4gRHJhZ2dhYmxlLmNyZWF0ZSh0YXJnZXQuY2hpbGRyZW4pO1xuICAgIG1ha2VEcmFnZ2FibGUocmVmLmRlc2t0b3AuY3VycmVudCk7XG4gIH0sIFtyZWYuZGVza3RvcF0pO1xuXG4gIHJldHVybiAoXG4gICAgPGRpdiBjbGFzc05hbWU9XCJjb21wb25lbnQgZGVza3RvcC1ibG9ja1wiPlxuXG4gICAgICA8RGVza3RvcEhvb2sgLz5cblxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb250YWluZXIgZGVza3RvcC1ibG9ja1wiPlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIndyYXAgZGVza3RvcC1ibG9ja1wiPlxuICAgICAgICAgIDxkaXYgcmVmPXtyZWYuZGVza3RvcH0gY2xhc3NOYW1lPVwiY29udGFpbmVyIGRlc2t0b3Atd2luZG93c1wiPlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJwb3NpdGlvbiBzcG90aWZ5LWZlZWRcIiByZWY9e3JlZi5zcG90aWZ5fT5cbiAgICAgICAgICAgICAgPFNwb3RpZnlGZWVkIC8+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicG9zaXRpb24gdHJlbGxvLWZlZWRcIiByZWY9e3JlZi50cmVsbG99PlxuICAgICAgICAgICAgICA8VHJlbGxvRmVlZCAvPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRhaW5lciBkZXNrdG9wLWZvbGRlcnNcIj5cblxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ3cmFwIGRlc2t0b3AtZm9sZGVyc1wiPlxuXG4gICAgICAgICAgICAgIDxGb2xkZXJcbiAgICAgICAgICAgICAgICB0aXRsZT1cIlNwb3RpZnlcIlxuICAgICAgICAgICAgICAgIHRhcmdldD17cmVmLnNwb3RpZnkuY3VycmVudH1cbiAgICAgICAgICAgICAgICBpbnB1dD17c3BvdGlmeUZvbGRlcn1cbiAgICAgICAgICAgICAgICBvdXRwdXQ9e3NldFNwb3RpZnlGb2xkZXJ9IC8+XG4gICAgICAgICAgICAgIDxGb2xkZXJcbiAgICAgICAgICAgICAgICB0aXRsZT1cIlRyZWxsb1wiXG4gICAgICAgICAgICAgICAgdGFyZ2V0PXtyZWYudHJlbGxvLmN1cnJlbnR9XG4gICAgICAgICAgICAgICAgaW5wdXQ9e3RyZWxsb0ZvbGRlcn1cbiAgICAgICAgICAgICAgICBvdXRwdXQ9e3NldFRyZWxsb0ZvbGRlcn0gLz5cblxuICAgICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgICAgIDxEb3dubG9hZHMgeyAuLi5zdG9yZS5nZW0gfSAvPlxuICAgICAgICAgICAgPERvd25sb2FkcyB7IC4uLnN0b3JlLm5wbSB9IC8+XG5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L2Rpdj5cblxuICAgICAgPENyZWRpdCAvPlxuXG4gICAgPC9kaXY+XG4gICk7XG59OyJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./layouts/desktop.js\n");

/***/ })

});