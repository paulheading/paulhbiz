/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/404",{

/***/ "./layouts/desktop.js":
/*!****************************!*\
  !*** ./layouts/desktop.js ***!
  \****************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ DesktopLayout; },\n/* harmony export */   \"getStaticProps\": function() { return /* binding */ getStaticProps; }\n/* harmony export */ });\n/* harmony import */ var _Users_pheading_Sites_paulhbiz_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/regenerator */ \"./node_modules/@babel/runtime/regenerator/index.js\");\n/* harmony import */ var _Users_pheading_Sites_paulhbiz_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_Users_pheading_Sites_paulhbiz_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _Users_pheading_Sites_paulhbiz_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator */ \"./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js\");\n/* harmony import */ var _Users_pheading_Sites_paulhbiz_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/defineProperty */ \"./node_modules/@babel/runtime/helpers/esm/defineProperty.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-redux */ \"./node_modules/react-redux/es/index.js\");\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! axios */ \"./node_modules/axios/index.js\");\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_6__);\n/* harmony import */ var components__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! components */ \"./components/index.js\");\n/* harmony import */ var hooks__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! hooks */ \"./hooks/index.js\");\n/* harmony import */ var layouts__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! layouts */ \"./layouts/index.js\");\n/* harmony import */ var gsap__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! gsap */ \"./node_modules/gsap/index.js\");\n/* harmony import */ var gsap_dist_Draggable__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! gsap/dist/Draggable */ \"./node_modules/gsap/dist/Draggable.js\");\n/* harmony import */ var gsap_dist_Draggable__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(gsap_dist_Draggable__WEBPACK_IMPORTED_MODULE_11__);\n/* module decorator */ module = __webpack_require__.hmd(module);\n\n\n\n\n\nvar _jsxFileName = \"/Users/pheading/Sites/paulhbiz/layouts/desktop.js\",\n    _s = $RefreshSig$();\n\nfunction ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }\n\nfunction _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { (0,_Users_pheading_Sites_paulhbiz_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_2__.default)(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }\n\n\n // import Button from \"react-bootstrap/Button\";\n\n\n\n // import { PauseSvg, PlaySvg } from \"icons\";\n\n\n\n\nfunction DesktopLayout(_ref) {\n  _s();\n\n  var test = _ref.test;\n  var store = {\n    pause: (0,react_redux__WEBPACK_IMPORTED_MODULE_5__.useSelector)(function (_ref2) {\n      var pause = _ref2.pause;\n      return pause;\n    }),\n    gem: (0,react_redux__WEBPACK_IMPORTED_MODULE_5__.useSelector)(function (_ref3) {\n      var gem = _ref3.gem;\n      return gem;\n    }),\n    npm: (0,react_redux__WEBPACK_IMPORTED_MODULE_5__.useSelector)(function (_ref4) {\n      var npm = _ref4.npm;\n      return npm;\n    })\n  };\n  var ref = {\n    desktop: (0,react__WEBPACK_IMPORTED_MODULE_4__.useRef)(null),\n    spotify: (0,react__WEBPACK_IMPORTED_MODULE_4__.useRef)(null),\n    trello: (0,react__WEBPACK_IMPORTED_MODULE_4__.useRef)(null)\n  };\n\n  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_4__.useState)(true),\n      spotifyFolder = _useState[0],\n      setSpotifyFolder = _useState[1];\n\n  var _useState2 = (0,react__WEBPACK_IMPORTED_MODULE_4__.useState)(true),\n      trelloFolder = _useState2[0],\n      setTrelloFolder = _useState2[1];\n\n  (0,react__WEBPACK_IMPORTED_MODULE_4__.useEffect)(function () {\n    gsap__WEBPACK_IMPORTED_MODULE_10__.default.registerPlugin(gsap_dist_Draggable__WEBPACK_IMPORTED_MODULE_11__.Draggable);\n\n    var makeDraggable = function makeDraggable(target) {\n      return gsap_dist_Draggable__WEBPACK_IMPORTED_MODULE_11__.Draggable.create(target.children);\n    };\n\n    makeDraggable(ref.desktop.current);\n  }, [ref.desktop]);\n  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)(\"div\", {\n    className: \"component desktop-block\",\n    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)(hooks__WEBPACK_IMPORTED_MODULE_8__.DesktopHook, {}, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 40,\n      columnNumber: 7\n    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)(\"div\", {\n      className: \"container desktop-block\",\n      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)(\"div\", {\n        className: \"wrap desktop-block\",\n        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)(\"div\", {\n          ref: ref.desktop,\n          className: \"container desktop-windows\",\n          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)(\"div\", {\n            className: \"position spotify-feed\",\n            ref: ref.spotify,\n            children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)(components__WEBPACK_IMPORTED_MODULE_7__.SpotifyFeed, {}, void 0, false, {\n              fileName: _jsxFileName,\n              lineNumber: 46,\n              columnNumber: 15\n            }, this)\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 45,\n            columnNumber: 13\n          }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)(\"div\", {\n            className: \"position trello-feed\",\n            ref: ref.trello,\n            children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)(components__WEBPACK_IMPORTED_MODULE_7__.TrelloFeed, {}, void 0, false, {\n              fileName: _jsxFileName,\n              lineNumber: 49,\n              columnNumber: 15\n            }, this)\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 48,\n            columnNumber: 13\n          }, this)]\n        }, void 0, true, {\n          fileName: _jsxFileName,\n          lineNumber: 44,\n          columnNumber: 11\n        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)(\"div\", {\n          className: \"container desktop-folders\",\n          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)(\"div\", {\n            className: \"wrap desktop-folders\",\n            children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)(components__WEBPACK_IMPORTED_MODULE_7__.Folder, {\n              title: \"Spotify\",\n              target: ref.spotify.current,\n              input: spotifyFolder,\n              output: setSpotifyFolder\n            }, void 0, false, {\n              fileName: _jsxFileName,\n              lineNumber: 57,\n              columnNumber: 15\n            }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)(components__WEBPACK_IMPORTED_MODULE_7__.Folder, {\n              title: \"Trello\",\n              target: ref.trello.current,\n              input: trelloFolder,\n              output: setTrelloFolder\n            }, void 0, false, {\n              fileName: _jsxFileName,\n              lineNumber: 62,\n              columnNumber: 15\n            }, this)]\n          }, void 0, true, {\n            fileName: _jsxFileName,\n            lineNumber: 55,\n            columnNumber: 13\n          }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)(components__WEBPACK_IMPORTED_MODULE_7__.Downloads, _objectSpread({}, store.gem), void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 70,\n            columnNumber: 13\n          }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)(components__WEBPACK_IMPORTED_MODULE_7__.Downloads, _objectSpread({}, store.npm), void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 71,\n            columnNumber: 13\n          }, this)]\n        }, void 0, true, {\n          fileName: _jsxFileName,\n          lineNumber: 53,\n          columnNumber: 11\n        }, this)]\n      }, void 0, true, {\n        fileName: _jsxFileName,\n        lineNumber: 43,\n        columnNumber: 9\n      }, this)\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 42,\n      columnNumber: 7\n    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)(layouts__WEBPACK_IMPORTED_MODULE_9__.Credit, {}, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 77,\n      columnNumber: 7\n    }, this)]\n  }, void 0, true, {\n    fileName: _jsxFileName,\n    lineNumber: 38,\n    columnNumber: 5\n  }, this);\n}\n\n_s(DesktopLayout, \"dtvlN7+4jVmUcx4EvvX0NEowjL4=\", false, function () {\n  return [react_redux__WEBPACK_IMPORTED_MODULE_5__.useSelector, react_redux__WEBPACK_IMPORTED_MODULE_5__.useSelector, react_redux__WEBPACK_IMPORTED_MODULE_5__.useSelector];\n});\n\n_c = DesktopLayout;\n;\nvar getStaticProps = /*#__PURE__*/function () {\n  var _ref5 = (0,_Users_pheading_Sites_paulhbiz_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__.default)( /*#__PURE__*/_Users_pheading_Sites_paulhbiz_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee() {\n    var res, test;\n    return _Users_pheading_Sites_paulhbiz_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee$(_context) {\n      while (1) {\n        switch (_context.prev = _context.next) {\n          case 0:\n            _context.next = 2;\n            return fetch(\"https://jsonplaceholder.typicode.com/posts?_limit=6\");\n\n          case 2:\n            res = _context.sent;\n            _context.next = 5;\n            return res.json();\n\n          case 5:\n            test = _context.sent;\n            return _context.abrupt(\"return\", {\n              props: {\n                test: test\n              }\n            });\n\n          case 7:\n          case \"end\":\n            return _context.stop();\n        }\n      }\n    }, _callee);\n  }));\n\n  return function getStaticProps() {\n    return _ref5.apply(this, arguments);\n  };\n}();\n\nvar _c;\n\n$RefreshReg$(_c, \"DesktopLayout\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vbGF5b3V0cy9kZXNrdG9wLmpzPzA3YTUiXSwibmFtZXMiOlsiRGVza3RvcExheW91dCIsInRlc3QiLCJzdG9yZSIsInBhdXNlIiwidXNlU2VsZWN0b3IiLCJnZW0iLCJucG0iLCJyZWYiLCJkZXNrdG9wIiwidXNlUmVmIiwic3BvdGlmeSIsInRyZWxsbyIsInVzZVN0YXRlIiwic3BvdGlmeUZvbGRlciIsInNldFNwb3RpZnlGb2xkZXIiLCJ0cmVsbG9Gb2xkZXIiLCJzZXRUcmVsbG9Gb2xkZXIiLCJ1c2VFZmZlY3QiLCJnc2FwIiwiRHJhZ2dhYmxlIiwibWFrZURyYWdnYWJsZSIsInRhcmdldCIsImNoaWxkcmVuIiwiY3VycmVudCIsImdldFN0YXRpY1Byb3BzIiwiZmV0Y2giLCJyZXMiLCJqc29uIiwicHJvcHMiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7Q0FFQTs7QUFDQTtBQUVBO0NBR0E7O0FBQ0E7QUFFQTtBQUNBO0FBRWUsU0FBU0EsYUFBVCxPQUFpQztBQUFBOztBQUFBLE1BQVJDLElBQVEsUUFBUkEsSUFBUTtBQUM5QyxNQUFNQyxLQUFLLEdBQUc7QUFDWkMsU0FBSyxFQUFFQyx3REFBVyxDQUFDO0FBQUEsVUFBR0QsS0FBSCxTQUFHQSxLQUFIO0FBQUEsYUFBZUEsS0FBZjtBQUFBLEtBQUQsQ0FETjtBQUVaRSxPQUFHLEVBQUVELHdEQUFXLENBQUM7QUFBQSxVQUFHQyxHQUFILFNBQUdBLEdBQUg7QUFBQSxhQUFhQSxHQUFiO0FBQUEsS0FBRCxDQUZKO0FBR1pDLE9BQUcsRUFBRUYsd0RBQVcsQ0FBQztBQUFBLFVBQUdFLEdBQUgsU0FBR0EsR0FBSDtBQUFBLGFBQWFBLEdBQWI7QUFBQSxLQUFEO0FBSEosR0FBZDtBQU1BLE1BQU1DLEdBQUcsR0FBRztBQUNWQyxXQUFPLEVBQUVDLDZDQUFNLENBQUMsSUFBRCxDQURMO0FBRVZDLFdBQU8sRUFBRUQsNkNBQU0s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S0FBSyx1REFESzs7QUFBQTtBQUN0QkMsZUFEc0I7QUFBQTtBQUFBLG1CQUVUQSxHQUFHLENBQUNDLElBQUosRUFGUzs7QUFBQTtBQUV0QjFCLGdCQUZzQjtBQUFBLDZDQW1CckI7QUFDTDJCLG1CQUFLLEVBQUU7QUFDTDNCLG9CQUFJLEVBQUpBO0FBREs7QUFERixhQW5CcUI7O0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsR0FBSDs7QUFBQSxrQkFBZHVCLGNBQWM7QUFBQTtBQUFBO0FBQUEsR0FBcEIiLCJmaWxlIjoiLi9sYXlvdXRzL2Rlc2t0b3AuanMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyB1c2VTdGF0ZSwgdXNlRWZmZWN0LCB1c2VSZWYgfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCB7IHVzZVNlbGVjdG9yIH0gZnJvbSBcInJlYWN0LXJlZHV4XCI7XG4vLyBpbXBvcnQgQnV0dG9uIGZyb20gXCJyZWFjdC1ib290c3RyYXAvQnV0dG9uXCI7XG5pbXBvcnQgYXhpb3MgZnJvbSAnYXhpb3MnXG5cbmltcG9ydCB7IFNwb3RpZnlGZWVkLCBUcmVsbG9GZWVkLCBGb2xkZXIsIERvd25sb2FkcyB9IGZyb20gXCJjb21wb25lbnRzXCI7XG5pbXBvcnQgeyBEZXNrdG9wSG9vayB9IGZyb20gXCJob29rc1wiO1xuXG4vLyBpbXBvcnQgeyBQYXVzZVN2ZywgUGxheVN2ZyB9IGZyb20gXCJpY29uc1wiO1xuaW1wb3J0IHsgQ3JlZGl0IH0gZnJvbSBcImxheW91dHNcIjtcblxuaW1wb3J0IGdzYXAgZnJvbSAnZ3NhcCc7XG5pbXBvcnQgeyBEcmFnZ2FibGUgfSBmcm9tICdnc2FwL2Rpc3QvRHJhZ2dhYmxlJztcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gRGVza3RvcExheW91dCh7IHRlc3QgfSkge1xuICBjb25zdCBzdG9yZSA9IHtcbiAgICBwYXVzZTogdXNlU2VsZWN0b3IoKHsgcGF1c2UgfSkgPT4gcGF1c2UpLFxuICAgIGdlbTogdXNlU2VsZWN0b3IoKHsgZ2VtIH0pID0+IGdlbSksXG4gICAgbnBtOiB1c2VTZWxlY3RvcigoeyBucG0gfSkgPT4gbnBtKSxcbiAgfTtcblxuICBjb25zdCByZWYgPSB7XG4gICAgZGVza3RvcDogdXNlUmVmKG51bGwpLFxuICAgIHNwb3RpZnk6IHVzZVJlZihudWxsKSxcbiAgICB0cmVsbG86IHVzZVJlZihudWxsKSxcbiAgfTtcblxuICBjb25zdCBbc3BvdGlmeUZvbGRlciwgc2V0U3BvdGlmeUZvbGRlcl0gPSB1c2VTdGF0ZSh0cnVlKTtcbiAgY29uc3QgW3RyZWxsb0ZvbGRlciwgc2V0VHJlbGxvRm9sZGVyXSA9IHVzZVN0YXRlKHRydWUpO1xuXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgZ3NhcC5yZWdpc3RlclBsdWdpbihEcmFnZ2FibGUpO1xuICAgIGNvbnN0IG1ha2VEcmFnZ2FibGUgPSB0YXJnZXQgPT4gRHJhZ2dhYmxlLmNyZWF0ZSh0YXJnZXQuY2hpbGRyZW4pO1xuICAgIG1ha2VEcmFnZ2FibGUocmVmLmRlc2t0b3AuY3VycmVudCk7XG4gIH0sIFtyZWYuZGVza3RvcF0pO1xuXG4gIHJldHVybiAoXG4gICAgPGRpdiBjbGFzc05hbWU9XCJjb21wb25lbnQgZGVza3RvcC1ibG9ja1wiPlxuXG4gICAgICA8RGVza3RvcEhvb2sgLz5cblxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb250YWluZXIgZGVza3RvcC1ibG9ja1wiPlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIndyYXAgZGVza3RvcC1ibG9ja1wiPlxuICAgICAgICAgIDxkaXYgcmVmPXtyZWYuZGVza3RvcH0gY2xhc3NOYW1lPVwiY29udGFpbmVyIGRlc2t0b3Atd2luZG93c1wiPlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJwb3NpdGlvbiBzcG90aWZ5LWZlZWRcIiByZWY9e3JlZi5zcG90aWZ5fT5cbiAgICAgICAgICAgICAgPFNwb3RpZnlGZWVkIC8+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicG9zaXRpb24gdHJlbGxvLWZlZWRcIiByZWY9e3JlZi50cmVsbG99PlxuICAgICAgICAgICAgICA8VHJlbGxvRmVlZCAvPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRhaW5lciBkZXNrdG9wLWZvbGRlcnNcIj5cblxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ3cmFwIGRlc2t0b3AtZm9sZGVyc1wiPlxuXG4gICAgICAgICAgICAgIDxGb2xkZXJcbiAgICAgICAgICAgICAgICB0aXRsZT1cIlNwb3RpZnlcIlxuICAgICAgICAgICAgICAgIHRhcmdldD17cmVmLnNwb3RpZnkuY3VycmVudH1cbiAgICAgICAgICAgICAgICBpbnB1dD17c3BvdGlmeUZvbGRlcn1cbiAgICAgICAgICAgICAgICBvdXRwdXQ9e3NldFNwb3RpZnlGb2xkZXJ9IC8+XG4gICAgICAgICAgICAgIDxGb2xkZXJcbiAgICAgICAgICAgICAgICB0aXRsZT1cIlRyZWxsb1wiXG4gICAgICAgICAgICAgICAgdGFyZ2V0PXtyZWYudHJlbGxvLmN1cnJlbnR9XG4gICAgICAgICAgICAgICAgaW5wdXQ9e3RyZWxsb0ZvbGRlcn1cbiAgICAgICAgICAgICAgICBvdXRwdXQ9e3NldFRyZWxsb0ZvbGRlcn0gLz5cblxuICAgICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgICAgIDxEb3dubG9hZHMgeyAuLi5zdG9yZS5nZW0gfSAvPlxuICAgICAgICAgICAgPERvd25sb2FkcyB7IC4uLnN0b3JlLm5wbSB9IC8+XG5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L2Rpdj5cblxuICAgICAgPENyZWRpdCAvPlxuXG4gICAgPC9kaXY+XG4gICk7XG59O1xuXG5leHBvcnQgY29uc3QgZ2V0U3RhdGljUHJvcHMgPSBhc3luYyAoKSA9PiB7XG4gIGNvbnN0IHJlcyA9IGF3YWl0IGZldGNoKGBodHRwczovL2pzb25wbGFjZWhvbGRlci50eXBpY29kZS5jb20vcG9zdHM/X2xpbWl0PTZgKVxuICBjb25zdCB0ZXN0ID0gYXdhaXQgcmVzLmpzb24oKVxuXG4gIC8vIGNvbnN0IHJlcyA9IGF3YWl0IGF4aW9zXG4gIC8vIC5nZXQoXCJodHRwczovL2FwaS5ucG1zLmlvL3YyL3BhY2thZ2UvYmFyYmljYW4tcmVzZXRcIiwgeyBoZWFkZXJzOiB7IEFjY2VwdDogXCJhcHBsaWNhdGlvbi9qc29uXCIgfX0pXG4gIC8vIC50aGVuKCh7IGRhdGEgfSkgPT4ge1xuICAvLyAgIGRhdGEgPSBkYXRhLmNvbGxlY3RlZDtcbiAgLy8gICBkYXRhID0ge1xuICAvLyAgICAgZG93bmxvYWRzOiBkYXRhLm5wbS5kb3dubG9hZHNbNV0uY291bnQsXG4gIC8vICAgICByZWFkeTogdHJ1ZSxcbiAgLy8gICAgIHR5cGU6IFwibnBtXCIsXG4gIC8vICAgICBuYW1lOiBkYXRhLm1ldGFkYXRhLm5hbWUsXG4gIC8vICAgICB1cmw6IGRhdGEubWV0YWRhdGEubGlua3MubnBtXG4gIC8vICAgfVxuICAvLyAgIHJldHVybiBkYXRhO1xuICAvLyB9KVxuICAvLyAuY2F0Y2goZXJyID0+IGNvbnNvbGUubG9nKGVycikpO1xuXG4gIHJldHVybiB7XG4gICAgcHJvcHM6IHtcbiAgICAgIHRlc3RcbiAgICB9XG4gIH1cbn0iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./layouts/desktop.js\n");

/***/ })

});