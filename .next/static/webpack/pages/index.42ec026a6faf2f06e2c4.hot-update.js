/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/index",{

/***/ "./layouts/desktop.js":
/*!****************************!*\
  !*** ./layouts/desktop.js ***!
  \****************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ DesktopLayout; },\n/* harmony export */   \"getStaticProps\": function() { return /* binding */ getStaticProps; }\n/* harmony export */ });\n/* harmony import */ var _Users_pheading_Sites_paulhbiz_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/regenerator */ \"./node_modules/@babel/runtime/regenerator/index.js\");\n/* harmony import */ var _Users_pheading_Sites_paulhbiz_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_Users_pheading_Sites_paulhbiz_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _Users_pheading_Sites_paulhbiz_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator */ \"./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js\");\n/* harmony import */ var _Users_pheading_Sites_paulhbiz_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/defineProperty */ \"./node_modules/@babel/runtime/helpers/esm/defineProperty.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-redux */ \"./node_modules/react-redux/es/index.js\");\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! axios */ \"./node_modules/axios/index.js\");\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_6__);\n/* harmony import */ var components__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! components */ \"./components/index.js\");\n/* harmony import */ var hooks__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! hooks */ \"./hooks/index.js\");\n/* harmony import */ var layouts__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! layouts */ \"./layouts/index.js\");\n/* harmony import */ var gsap__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! gsap */ \"./node_modules/gsap/index.js\");\n/* harmony import */ var gsap_dist_Draggable__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! gsap/dist/Draggable */ \"./node_modules/gsap/dist/Draggable.js\");\n/* harmony import */ var gsap_dist_Draggable__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(gsap_dist_Draggable__WEBPACK_IMPORTED_MODULE_11__);\n/* module decorator */ module = __webpack_require__.hmd(module);\n\n\n\n\n\nvar _jsxFileName = \"/Users/pheading/Sites/paulhbiz/layouts/desktop.js\",\n    _s = $RefreshSig$();\n\nfunction ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }\n\nfunction _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { (0,_Users_pheading_Sites_paulhbiz_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_2__.default)(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }\n\n\n // import Button from \"react-bootstrap/Button\";\n\n\n\n // import { PauseSvg, PlaySvg } from \"icons\";\n\n\n\n\nfunction DesktopLayout() {\n  _s();\n\n  var store = {\n    pause: (0,react_redux__WEBPACK_IMPORTED_MODULE_5__.useSelector)(function (_ref) {\n      var pause = _ref.pause;\n      return pause;\n    }),\n    gem: (0,react_redux__WEBPACK_IMPORTED_MODULE_5__.useSelector)(function (_ref2) {\n      var gem = _ref2.gem;\n      return gem;\n    }),\n    npm: (0,react_redux__WEBPACK_IMPORTED_MODULE_5__.useSelector)(function (_ref3) {\n      var npm = _ref3.npm;\n      return npm;\n    })\n  };\n  var ref = {\n    desktop: (0,react__WEBPACK_IMPORTED_MODULE_4__.useRef)(null),\n    spotify: (0,react__WEBPACK_IMPORTED_MODULE_4__.useRef)(null),\n    trello: (0,react__WEBPACK_IMPORTED_MODULE_4__.useRef)(null)\n  };\n\n  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_4__.useState)(true),\n      spotifyFolder = _useState[0],\n      setSpotifyFolder = _useState[1];\n\n  var _useState2 = (0,react__WEBPACK_IMPORTED_MODULE_4__.useState)(true),\n      trelloFolder = _useState2[0],\n      setTrelloFolder = _useState2[1];\n\n  (0,react__WEBPACK_IMPORTED_MODULE_4__.useEffect)(function () {\n    gsap__WEBPACK_IMPORTED_MODULE_10__.default.registerPlugin(gsap_dist_Draggable__WEBPACK_IMPORTED_MODULE_11__.Draggable);\n\n    var makeDraggable = function makeDraggable(target) {\n      return gsap_dist_Draggable__WEBPACK_IMPORTED_MODULE_11__.Draggable.create(target.children);\n    };\n\n    makeDraggable(ref.desktop.current);\n  }, [ref.desktop]);\n  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)(\"div\", {\n    className: \"component desktop-block\",\n    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)(hooks__WEBPACK_IMPORTED_MODULE_8__.DesktopHook, {}, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 40,\n      columnNumber: 7\n    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)(\"div\", {\n      className: \"container desktop-block\",\n      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)(\"div\", {\n        className: \"wrap desktop-block\",\n        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)(\"div\", {\n          ref: ref.desktop,\n          className: \"container desktop-windows\",\n          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)(\"div\", {\n            className: \"position spotify-feed\",\n            ref: ref.spotify,\n            children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)(components__WEBPACK_IMPORTED_MODULE_7__.SpotifyFeed, {}, void 0, false, {\n              fileName: _jsxFileName,\n              lineNumber: 46,\n              columnNumber: 15\n            }, this)\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 45,\n            columnNumber: 13\n          }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)(\"div\", {\n            className: \"position trello-feed\",\n            ref: ref.trello,\n            children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)(components__WEBPACK_IMPORTED_MODULE_7__.TrelloFeed, {}, void 0, false, {\n              fileName: _jsxFileName,\n              lineNumber: 49,\n              columnNumber: 15\n            }, this)\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 48,\n            columnNumber: 13\n          }, this)]\n        }, void 0, true, {\n          fileName: _jsxFileName,\n          lineNumber: 44,\n          columnNumber: 11\n        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)(\"div\", {\n          className: \"container desktop-folders\",\n          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)(\"div\", {\n            className: \"wrap desktop-folders\",\n            children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)(components__WEBPACK_IMPORTED_MODULE_7__.Folder, {\n              title: \"Spotify\",\n              target: ref.spotify.current,\n              input: spotifyFolder,\n              output: setSpotifyFolder\n            }, void 0, false, {\n              fileName: _jsxFileName,\n              lineNumber: 57,\n              columnNumber: 15\n            }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)(components__WEBPACK_IMPORTED_MODULE_7__.Folder, {\n              title: \"Trello\",\n              target: ref.trello.current,\n              input: trelloFolder,\n              output: setTrelloFolder\n            }, void 0, false, {\n              fileName: _jsxFileName,\n              lineNumber: 62,\n              columnNumber: 15\n            }, this)]\n          }, void 0, true, {\n            fileName: _jsxFileName,\n            lineNumber: 55,\n            columnNumber: 13\n          }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)(components__WEBPACK_IMPORTED_MODULE_7__.Downloads, _objectSpread({}, store.gem), void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 70,\n            columnNumber: 13\n          }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)(components__WEBPACK_IMPORTED_MODULE_7__.Downloads, _objectSpread({}, store.npm), void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 71,\n            columnNumber: 13\n          }, this)]\n        }, void 0, true, {\n          fileName: _jsxFileName,\n          lineNumber: 53,\n          columnNumber: 11\n        }, this)]\n      }, void 0, true, {\n        fileName: _jsxFileName,\n        lineNumber: 43,\n        columnNumber: 9\n      }, this)\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 42,\n      columnNumber: 7\n    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)(layouts__WEBPACK_IMPORTED_MODULE_9__.Credit, {}, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 77,\n      columnNumber: 7\n    }, this)]\n  }, void 0, true, {\n    fileName: _jsxFileName,\n    lineNumber: 38,\n    columnNumber: 5\n  }, this);\n}\n\n_s(DesktopLayout, \"dtvlN7+4jVmUcx4EvvX0NEowjL4=\", false, function () {\n  return [react_redux__WEBPACK_IMPORTED_MODULE_5__.useSelector, react_redux__WEBPACK_IMPORTED_MODULE_5__.useSelector, react_redux__WEBPACK_IMPORTED_MODULE_5__.useSelector];\n});\n\n_c = DesktopLayout;\n;\nvar getStaticProps = /*#__PURE__*/function () {\n  var _ref4 = (0,_Users_pheading_Sites_paulhbiz_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__.default)( /*#__PURE__*/_Users_pheading_Sites_paulhbiz_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee() {\n    var res;\n    return _Users_pheading_Sites_paulhbiz_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee$(_context) {\n      while (1) {\n        switch (_context.prev = _context.next) {\n          case 0:\n            _context.next = 2;\n            return axios__WEBPACK_IMPORTED_MODULE_6___default().get(\"https://api.npms.io/v2/package/barbican-reset\", {\n              headers: {\n                Accept: \"application/json\"\n              }\n            }).then(function (_ref5) {\n              var data = _ref5.data;\n              data = data.collected;\n              data = {\n                downloads: data.npm.downloads[5].count,\n                ready: true,\n                type: \"npm\",\n                name: data.metadata.name,\n                url: data.metadata.links.npm\n              };\n              return data;\n            })[\"catch\"](function (err) {\n              return console.log(err);\n            });\n\n          case 2:\n            res = _context.sent;\n            return _context.abrupt(\"return\", {\n              props: {\n                test: test\n              }\n            });\n\n          case 4:\n          case \"end\":\n            return _context.stop();\n        }\n      }\n    }, _callee);\n  }));\n\n  return function getStaticProps() {\n    return _ref4.apply(this, arguments);\n  };\n}();\n\nvar _c;\n\n$RefreshReg$(_c, \"DesktopLayout\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vbGF5b3V0cy9kZXNrdG9wLmpzPzA3YTUiXSwibmFtZXMiOlsiRGVza3RvcExheW91dCIsInN0b3JlIiwicGF1c2UiLCJ1c2VTZWxlY3RvciIsImdlbSIsIm5wbSIsInJlZiIsImRlc2t0b3AiLCJ1c2VSZWYiLCJzcG90aWZ5IiwidHJlbGxvIiwidXNlU3RhdGUiLCJzcG90aWZ5Rm9sZGVyIiwic2V0U3BvdGlmeUZvbGRlciIsInRyZWxsb0ZvbGRlciIsInNldFRyZWxsb0ZvbGRlciIsInVzZUVmZmVjdCIsImdzYXAiLCJEcmFnZ2FibGUiLCJtYWtlRHJhZ2dhYmxlIiwidGFyZ2V0IiwiY2hpbGRyZW4iLCJjdXJyZW50IiwiZ2V0U3RhdGljUHJvcHMiLCJheGlvcyIsImhlYWRlcnMiLCJBY2NlcHQiLCJ0aGVuIiwiZGF0YSIsImNvbGxlY3RlZCIsImRvd25sb2FkcyIsImNvdW50IiwicmVhZHkiLCJ0eXBlIiwibmFtZSIsIm1ldGFkYXRhIiwidXJsIiwibGlua3MiLCJlcnIiLCJjb25zb2xlIiwibG9nIiwicmVzIiwicHJvcHMiLCJ0ZXN0Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0NBRUE7O0FBQ0E7QUFFQTtDQUdBOztBQUNBO0FBRUE7QUFDQTtBQUVlLFNBQVNBLGFBQVQsR0FBeUI7QUFBQTs7QUFDdEMsTUFBTUMsS0FBSyxHQUFHO0FBQ1pDLFNBQUssRUFBRUMsd0RBQVcsQ0FBQztBQUFBLFVBQUdELEtBQUgsUUFBR0EsS0FBSDtBQUFBLGFBQWVBLEtBQWY7QUFBQSxLQUFELENBRE47QUFFWkUsT0FBRyxFQUFFRCx3REFBVyxDQUFDO0FBQUEsVUFBR0MsR0FBSCxTQUFHQSxHQUFIO0FBQUEsYUFBYUEsR0FBYjtBQUFBLEtBQUQsQ0FGSjtBQUdaQyxPQUFHLEVBQUVGLHdEQUFXLENBQUM7QUFBQSxVQUFHRSxHQUFILFNBQUdBLEdBQUg7QUFBQSxhQUFhQSxHQUFiO0FB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LG9ELEVBQ0FBLG9EOzs7S0FKZUgsYTtBQWtFdkI7QUFFTSxJQUFNdUIsY0FBYztBQUFBLDhRQUFHO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsbUJBQ1ZDLGdEQUFBLENBQ2IsK0NBRGEsRUFDb0M7QUFBRUMscUJBQU8sRUFBRTtBQUFFQyxzQkFBTSxFQUFFO0FBQVY7QUFBWCxhQURwQyxFQUVqQkMsSUFGaUIsQ0FFWixpQkFBYztBQUFBLGtCQUFYQyxJQUFXLFNBQVhBLElBQVc7QUFDbEJBLGtCQUFJLEdBQUdBLElBQUksQ0FBQ0MsU0FBWjtBQUNBRCxrQkFBSSxHQUFHO0FBQ0xFLHlCQUFTLEVBQUVGLElBQUksQ0FBQ3ZCLEdBQUwsQ0FBU3lCLFNBQVQsQ0FBbUIsQ0FBbkIsRUFBc0JDLEtBRDVCO0FBRUxDLHFCQUFLLEVBQUUsSUFGRjtBQUdMQyxvQkFBSSxFQUFFLEtBSEQ7QUFJTEMsb0JBQUksRUFBRU4sSUFBSSxDQUFDTyxRQUFMLENBQWNELElBSmY7QUFLTEUsbUJBQUcsRUFBRVIsSUFBSSxDQUFDTyxRQUFMLENBQWNFLEtBQWQsQ0FBb0JoQztBQUxwQixlQUFQO0FBT0EscUJBQU91QixJQUFQO0FBQ0QsYUFaaUIsV0FhWCxVQUFBVSxHQUFHO0FBQUEscUJBQUlDLE9BQU8sQ0FBQ0MsR0FBUixDQUFZRixHQUFaLENBQUo7QUFBQSxhQWJRLENBRFU7O0FBQUE7QUFDdEJHLGVBRHNCO0FBQUEsNkNBZ0JyQjtBQUNMQyxtQkFBSyxFQUFFO0FBQ0xDLG9CQUFJLEVBQUpBO0FBREs7QUFERixhQWhCcUI7O0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsR0FBSDs7QUFBQSxrQkFBZHBCLGNBQWM7QUFBQTtBQUFBO0FBQUEsR0FBcEIiLCJmaWxlIjoiLi9sYXlvdXRzL2Rlc2t0b3AuanMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyB1c2VTdGF0ZSwgdXNlRWZmZWN0LCB1c2VSZWYgfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCB7IHVzZVNlbGVjdG9yIH0gZnJvbSBcInJlYWN0LXJlZHV4XCI7XG4vLyBpbXBvcnQgQnV0dG9uIGZyb20gXCJyZWFjdC1ib290c3RyYXAvQnV0dG9uXCI7XG5pbXBvcnQgYXhpb3MgZnJvbSAnYXhpb3MnXG5cbmltcG9ydCB7IFNwb3RpZnlGZWVkLCBUcmVsbG9GZWVkLCBGb2xkZXIsIERvd25sb2FkcyB9IGZyb20gXCJjb21wb25lbnRzXCI7XG5pbXBvcnQgeyBEZXNrdG9wSG9vayB9IGZyb20gXCJob29rc1wiO1xuXG4vLyBpbXBvcnQgeyBQYXVzZVN2ZywgUGxheVN2ZyB9IGZyb20gXCJpY29uc1wiO1xuaW1wb3J0IHsgQ3JlZGl0IH0gZnJvbSBcImxheW91dHNcIjtcblxuaW1wb3J0IGdzYXAgZnJvbSAnZ3NhcCc7XG5pbXBvcnQgeyBEcmFnZ2FibGUgfSBmcm9tICdnc2FwL2Rpc3QvRHJhZ2dhYmxlJztcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gRGVza3RvcExheW91dCgpIHtcbiAgY29uc3Qgc3RvcmUgPSB7XG4gICAgcGF1c2U6IHVzZVNlbGVjdG9yKCh7IHBhdXNlIH0pID0+IHBhdXNlKSxcbiAgICBnZW06IHVzZVNlbGVjdG9yKCh7IGdlbSB9KSA9PiBnZW0pLFxuICAgIG5wbTogdXNlU2VsZWN0b3IoKHsgbnBtIH0pID0+IG5wbSksXG4gIH07XG5cbiAgY29uc3QgcmVmID0ge1xuICAgIGRlc2t0b3A6IHVzZVJlZihudWxsKSxcbiAgICBzcG90aWZ5OiB1c2VSZWYobnVsbCksXG4gICAgdHJlbGxvOiB1c2VSZWYobnVsbCksXG4gIH07XG5cbiAgY29uc3QgW3Nwb3RpZnlGb2xkZXIsIHNldFNwb3RpZnlGb2xkZXJdID0gdXNlU3RhdGUodHJ1ZSk7XG4gIGNvbnN0IFt0cmVsbG9Gb2xkZXIsIHNldFRyZWxsb0ZvbGRlcl0gPSB1c2VTdGF0ZSh0cnVlKTtcblxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIGdzYXAucmVnaXN0ZXJQbHVnaW4oRHJhZ2dhYmxlKTtcbiAgICBjb25zdCBtYWtlRHJhZ2dhYmxlID0gdGFyZ2V0ID0+IERyYWdnYWJsZS5jcmVhdGUodGFyZ2V0LmNoaWxkcmVuKTtcbiAgICBtYWtlRHJhZ2dhYmxlKHJlZi5kZXNrdG9wLmN1cnJlbnQpO1xuICB9LCBbcmVmLmRlc2t0b3BdKTtcblxuICByZXR1cm4gKFxuICAgIDxkaXYgY2xhc3NOYW1lPVwiY29tcG9uZW50IGRlc2t0b3AtYmxvY2tcIj5cblxuICAgICAgPERlc2t0b3BIb29rIC8+XG5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29udGFpbmVyIGRlc2t0b3AtYmxvY2tcIj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ3cmFwIGRlc2t0b3AtYmxvY2tcIj5cbiAgICAgICAgICA8ZGl2IHJlZj17cmVmLmRlc2t0b3B9IGNsYXNzTmFtZT1cImNvbnRhaW5lciBkZXNrdG9wLXdpbmRvd3NcIj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicG9zaXRpb24gc3BvdGlmeS1mZWVkXCIgcmVmPXtyZWYuc3BvdGlmeX0+XG4gICAgICAgICAgICAgIDxTcG90aWZ5RmVlZCAvPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInBvc2l0aW9uIHRyZWxsby1mZWVkXCIgcmVmPXtyZWYudHJlbGxvfT5cbiAgICAgICAgICAgICAgPFRyZWxsb0ZlZWQgLz5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDwvZGl2PlxuXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb250YWluZXIgZGVza3RvcC1mb2xkZXJzXCI+XG5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwid3JhcCBkZXNrdG9wLWZvbGRlcnNcIj5cblxuICAgICAgICAgICAgICA8Rm9sZGVyXG4gICAgICAgICAgICAgICAgdGl0bGU9XCJTcG90aWZ5XCJcbiAgICAgICAgICAgICAgICB0YXJnZXQ9e3JlZi5zcG90aWZ5LmN1cnJlbnR9XG4gICAgICAgICAgICAgICAgaW5wdXQ9e3Nwb3RpZnlGb2xkZXJ9XG4gICAgICAgICAgICAgICAgb3V0cHV0PXtzZXRTcG90aWZ5Rm9sZGVyfSAvPlxuICAgICAgICAgICAgICA8Rm9sZGVyXG4gICAgICAgICAgICAgICAgdGl0bGU9XCJUcmVsbG9cIlxuICAgICAgICAgICAgICAgIHRhcmdldD17cmVmLnRyZWxsby5jdXJyZW50fVxuICAgICAgICAgICAgICAgIGlucHV0PXt0cmVsbG9Gb2xkZXJ9XG4gICAgICAgICAgICAgICAgb3V0cHV0PXtzZXRUcmVsbG9Gb2xkZXJ9IC8+XG5cbiAgICAgICAgICAgIDwvZGl2PlxuXG4gICAgICAgICAgICA8RG93bmxvYWRzIHsgLi4uc3RvcmUuZ2VtIH0gLz5cbiAgICAgICAgICAgIDxEb3dubG9hZHMgeyAuLi5zdG9yZS5ucG0gfSAvPlxuXG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9kaXY+XG5cbiAgICAgIDxDcmVkaXQgLz5cblxuICAgIDwvZGl2PlxuICApO1xufTtcblxuZXhwb3J0IGNvbnN0IGdldFN0YXRpY1Byb3BzID0gYXN5bmMgKCkgPT4ge1xuICBjb25zdCByZXMgPSBhd2FpdCBheGlvc1xuICAuZ2V0KFwiaHR0cHM6Ly9hcGkubnBtcy5pby92Mi9wYWNrYWdlL2JhcmJpY2FuLXJlc2V0XCIsIHsgaGVhZGVyczogeyBBY2NlcHQ6IFwiYXBwbGljYXRpb24vanNvblwiIH19KVxuICAudGhlbigoeyBkYXRhIH0pID0+IHtcbiAgICBkYXRhID0gZGF0YS5jb2xsZWN0ZWQ7XG4gICAgZGF0YSA9IHtcbiAgICAgIGRvd25sb2FkczogZGF0YS5ucG0uZG93bmxvYWRzWzVdLmNvdW50LFxuICAgICAgcmVhZHk6IHRydWUsXG4gICAgICB0eXBlOiBcIm5wbVwiLFxuICAgICAgbmFtZTogZGF0YS5tZXRhZGF0YS5uYW1lLFxuICAgICAgdXJsOiBkYXRhLm1ldGFkYXRhLmxpbmtzLm5wbVxuICAgIH1cbiAgICByZXR1cm4gZGF0YTtcbiAgfSlcbiAgLmNhdGNoKGVyciA9PiBjb25zb2xlLmxvZyhlcnIpKTtcblxuICByZXR1cm4ge1xuICAgIHByb3BzOiB7XG4gICAgICB0ZXN0XG4gICAgfVxuICB9XG59Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./layouts/desktop.js\n");

/***/ })

});