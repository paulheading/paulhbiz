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
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ DesktopLayout; },\n/* harmony export */   \"getStaticProps\": function() { return /* binding */ getStaticProps; }\n/* harmony export */ });\n/* harmony import */ var _Users_pheading_Sites_paulhbiz_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/regenerator */ \"./node_modules/@babel/runtime/regenerator/index.js\");\n/* harmony import */ var _Users_pheading_Sites_paulhbiz_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_Users_pheading_Sites_paulhbiz_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _Users_pheading_Sites_paulhbiz_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator */ \"./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js\");\n/* harmony import */ var _Users_pheading_Sites_paulhbiz_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/defineProperty */ \"./node_modules/@babel/runtime/helpers/esm/defineProperty.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-redux */ \"./node_modules/react-redux/es/index.js\");\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! axios */ \"./node_modules/axios/index.js\");\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_6__);\n/* harmony import */ var components__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! components */ \"./components/index.js\");\n/* harmony import */ var hooks__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! hooks */ \"./hooks/index.js\");\n/* harmony import */ var layouts__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! layouts */ \"./layouts/index.js\");\n/* harmony import */ var gsap__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! gsap */ \"./node_modules/gsap/index.js\");\n/* harmony import */ var gsap_dist_Draggable__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! gsap/dist/Draggable */ \"./node_modules/gsap/dist/Draggable.js\");\n/* harmony import */ var gsap_dist_Draggable__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(gsap_dist_Draggable__WEBPACK_IMPORTED_MODULE_11__);\n/* module decorator */ module = __webpack_require__.hmd(module);\n\n\n\n\n\nvar _jsxFileName = \"/Users/pheading/Sites/paulhbiz/layouts/desktop.js\",\n    _s = $RefreshSig$();\n\nfunction ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }\n\nfunction _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { (0,_Users_pheading_Sites_paulhbiz_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_2__.default)(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }\n\n\n // import Button from \"react-bootstrap/Button\";\n\n\n\n // import { PauseSvg, PlaySvg } from \"icons\";\n\n\n\n\nfunction DesktopLayout(_ref) {\n  _s();\n\n  var test = _ref.test;\n  console.log(\"test: \", test);\n  var store = {\n    pause: (0,react_redux__WEBPACK_IMPORTED_MODULE_5__.useSelector)(function (_ref2) {\n      var pause = _ref2.pause;\n      return pause;\n    }),\n    gem: (0,react_redux__WEBPACK_IMPORTED_MODULE_5__.useSelector)(function (_ref3) {\n      var gem = _ref3.gem;\n      return gem;\n    }),\n    npm: (0,react_redux__WEBPACK_IMPORTED_MODULE_5__.useSelector)(function (_ref4) {\n      var npm = _ref4.npm;\n      return npm;\n    })\n  };\n  var ref = {\n    desktop: (0,react__WEBPACK_IMPORTED_MODULE_4__.useRef)(null),\n    spotify: (0,react__WEBPACK_IMPORTED_MODULE_4__.useRef)(null),\n    trello: (0,react__WEBPACK_IMPORTED_MODULE_4__.useRef)(null)\n  };\n\n  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_4__.useState)(true),\n      spotifyFolder = _useState[0],\n      setSpotifyFolder = _useState[1];\n\n  var _useState2 = (0,react__WEBPACK_IMPORTED_MODULE_4__.useState)(true),\n      trelloFolder = _useState2[0],\n      setTrelloFolder = _useState2[1];\n\n  (0,react__WEBPACK_IMPORTED_MODULE_4__.useEffect)(function () {\n    gsap__WEBPACK_IMPORTED_MODULE_10__.default.registerPlugin(gsap_dist_Draggable__WEBPACK_IMPORTED_MODULE_11__.Draggable);\n\n    var makeDraggable = function makeDraggable(target) {\n      return gsap_dist_Draggable__WEBPACK_IMPORTED_MODULE_11__.Draggable.create(target.children);\n    };\n\n    makeDraggable(ref.desktop.current);\n  }, [ref.desktop]);\n  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)(\"div\", {\n    className: \"component desktop-block\",\n    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)(hooks__WEBPACK_IMPORTED_MODULE_8__.DesktopHook, {}, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 41,\n      columnNumber: 7\n    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)(\"div\", {\n      className: \"container desktop-block\",\n      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)(\"div\", {\n        className: \"wrap desktop-block\",\n        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)(\"div\", {\n          ref: ref.desktop,\n          className: \"container desktop-windows\",\n          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)(\"div\", {\n            className: \"position spotify-feed\",\n            ref: ref.spotify,\n            children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)(components__WEBPACK_IMPORTED_MODULE_7__.SpotifyFeed, {}, void 0, false, {\n              fileName: _jsxFileName,\n              lineNumber: 47,\n              columnNumber: 15\n            }, this)\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 46,\n            columnNumber: 13\n          }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)(\"div\", {\n            className: \"position trello-feed\",\n            ref: ref.trello,\n            children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)(components__WEBPACK_IMPORTED_MODULE_7__.TrelloFeed, {}, void 0, false, {\n              fileName: _jsxFileName,\n              lineNumber: 50,\n              columnNumber: 15\n            }, this)\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 49,\n            columnNumber: 13\n          }, this)]\n        }, void 0, true, {\n          fileName: _jsxFileName,\n          lineNumber: 45,\n          columnNumber: 11\n        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)(\"div\", {\n          className: \"container desktop-folders\",\n          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)(\"div\", {\n            className: \"wrap desktop-folders\",\n            children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)(components__WEBPACK_IMPORTED_MODULE_7__.Folder, {\n              title: \"Spotify\",\n              target: ref.spotify.current,\n              input: spotifyFolder,\n              output: setSpotifyFolder\n            }, void 0, false, {\n              fileName: _jsxFileName,\n              lineNumber: 58,\n              columnNumber: 15\n            }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)(components__WEBPACK_IMPORTED_MODULE_7__.Folder, {\n              title: \"Trello\",\n              target: ref.trello.current,\n              input: trelloFolder,\n              output: setTrelloFolder\n            }, void 0, false, {\n              fileName: _jsxFileName,\n              lineNumber: 63,\n              columnNumber: 15\n            }, this)]\n          }, void 0, true, {\n            fileName: _jsxFileName,\n            lineNumber: 56,\n            columnNumber: 13\n          }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)(components__WEBPACK_IMPORTED_MODULE_7__.Downloads, _objectSpread({}, store.gem), void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 71,\n            columnNumber: 13\n          }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)(components__WEBPACK_IMPORTED_MODULE_7__.Downloads, _objectSpread({}, store.npm), void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 72,\n            columnNumber: 13\n          }, this)]\n        }, void 0, true, {\n          fileName: _jsxFileName,\n          lineNumber: 54,\n          columnNumber: 11\n        }, this)]\n      }, void 0, true, {\n        fileName: _jsxFileName,\n        lineNumber: 44,\n        columnNumber: 9\n      }, this)\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 43,\n      columnNumber: 7\n    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)(layouts__WEBPACK_IMPORTED_MODULE_9__.Credit, {}, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 78,\n      columnNumber: 7\n    }, this)]\n  }, void 0, true, {\n    fileName: _jsxFileName,\n    lineNumber: 39,\n    columnNumber: 5\n  }, this);\n}\n\n_s(DesktopLayout, \"dtvlN7+4jVmUcx4EvvX0NEowjL4=\", false, function () {\n  return [react_redux__WEBPACK_IMPORTED_MODULE_5__.useSelector, react_redux__WEBPACK_IMPORTED_MODULE_5__.useSelector, react_redux__WEBPACK_IMPORTED_MODULE_5__.useSelector];\n});\n\n_c = DesktopLayout;\n;\nvar getStaticProps = /*#__PURE__*/function () {\n  var _ref5 = (0,_Users_pheading_Sites_paulhbiz_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__.default)( /*#__PURE__*/_Users_pheading_Sites_paulhbiz_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee() {\n    var res, test;\n    return _Users_pheading_Sites_paulhbiz_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee$(_context) {\n      while (1) {\n        switch (_context.prev = _context.next) {\n          case 0:\n            _context.next = 2;\n            return fetch(\"https://jsonplaceholder.typicode.com/posts?_limit=6\");\n\n          case 2:\n            res = _context.sent;\n            _context.next = 5;\n            return res.json();\n\n          case 5:\n            test = _context.sent;\n            return _context.abrupt(\"return\", {\n              props: {\n                test: test\n              }\n            });\n\n          case 7:\n          case \"end\":\n            return _context.stop();\n        }\n      }\n    }, _callee);\n  }));\n\n  return function getStaticProps() {\n    return _ref5.apply(this, arguments);\n  };\n}();\n\nvar _c;\n\n$RefreshReg$(_c, \"DesktopLayout\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vbGF5b3V0cy9kZXNrdG9wLmpzPzA3YTUiXSwibmFtZXMiOlsiRGVza3RvcExheW91dCIsInRlc3QiLCJjb25zb2xlIiwibG9nIiwic3RvcmUiLCJwYXVzZSIsInVzZVNlbGVjdG9yIiwiZ2VtIiwibnBtIiwicmVmIiwiZGVza3RvcCIsInVzZVJlZiIsInNwb3RpZnkiLCJ0cmVsbG8iLCJ1c2VTdGF0ZSIsInNwb3RpZnlGb2xkZXIiLCJzZXRTcG90aWZ5Rm9sZGVyIiwidHJlbGxvRm9sZGVyIiwic2V0VHJlbGxvRm9sZGVyIiwidXNlRWZmZWN0IiwiZ3NhcCIsIkRyYWdnYWJsZSIsIm1ha2VEcmFnZ2FibGUiLCJ0YXJnZXQiLCJjaGlsZHJlbiIsImN1cnJlbnQiLCJnZXRTdGF0aWNQcm9wcyIsImZldGNoIiwicmVzIiwianNvbiIsInByb3BzIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0NBRUE7O0FBQ0E7QUFFQTtDQUdBOztBQUNBO0FBRUE7QUFDQTtBQUVlLFNBQVNBLGFBQVQsT0FBaUM7QUFBQTs7QUFBQSxNQUFSQyxJQUFRLFFBQVJBLElBQVE7QUFDOUNDLFNBQU8sQ0FBQ0MsR0FBUixDQUFZLFFBQVosRUFBc0JGLElBQXRCO0FBQ0EsTUFBTUcsS0FBSyxHQUFHO0FBQ1pDLFNBQUssRUFBRUMsd0RBQVcsQ0FBQztBQUFBLFVBQUdELEtBQUgsU0FBR0EsS0FBSDtBQUFBLGFBQWVBLEtBQWY7QUFBQSxLQUFELENBRE47QUFFWkUsT0FBRyxFQUFFRCx3REFBVyxDQUFDO0FBQUEsVUFBR0MsR0FBSCxTQUFHQSxHQUFIO0FBQUEsYUFBYUEsR0FBYjtBQUFBLEtBQUQsQ0FGSjtBQUdaQyxPQUFHLEVBQUVGLHdEQUFXLENBQUM7QUFBQSxVQUFHRSxHQUFILFNBQUdBLEdBQUg7QUFBQSxhQUFhQSxHQUFiO0FBQUEsS0FBRDtBQUhKLEdBQWQ7QUFNQSxNQUFNQyxHQUFHLEdBQUc7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MEIsY0FBYztBQUFBLDhRQUFHO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsbUJBQ1ZDLEtBQUssdURBREs7O0FBQUE7QUFDdEJDLGVBRHNCO0FBQUE7QUFBQSxtQkFFVEEsR0FBRyxDQUFDQyxJQUFKLEVBRlM7O0FBQUE7QUFFdEI1QixnQkFGc0I7QUFBQSw2Q0FtQnJCO0FBQ0w2QixtQkFBSyxFQUFFO0FBQ0w3QixvQkFBSSxFQUFKQTtBQURLO0FBREYsYUFuQnFCOztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEdBQUg7O0FBQUEsa0JBQWR5QixjQUFjO0FBQUE7QUFBQTtBQUFBLEdBQXBCIiwiZmlsZSI6Ii4vbGF5b3V0cy9kZXNrdG9wLmpzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgdXNlU3RhdGUsIHVzZUVmZmVjdCwgdXNlUmVmIH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgeyB1c2VTZWxlY3RvciB9IGZyb20gXCJyZWFjdC1yZWR1eFwiO1xuLy8gaW1wb3J0IEJ1dHRvbiBmcm9tIFwicmVhY3QtYm9vdHN0cmFwL0J1dHRvblwiO1xuaW1wb3J0IGF4aW9zIGZyb20gJ2F4aW9zJ1xuXG5pbXBvcnQgeyBTcG90aWZ5RmVlZCwgVHJlbGxvRmVlZCwgRm9sZGVyLCBEb3dubG9hZHMgfSBmcm9tIFwiY29tcG9uZW50c1wiO1xuaW1wb3J0IHsgRGVza3RvcEhvb2sgfSBmcm9tIFwiaG9va3NcIjtcblxuLy8gaW1wb3J0IHsgUGF1c2VTdmcsIFBsYXlTdmcgfSBmcm9tIFwiaWNvbnNcIjtcbmltcG9ydCB7IENyZWRpdCB9IGZyb20gXCJsYXlvdXRzXCI7XG5cbmltcG9ydCBnc2FwIGZyb20gJ2dzYXAnO1xuaW1wb3J0IHsgRHJhZ2dhYmxlIH0gZnJvbSAnZ3NhcC9kaXN0L0RyYWdnYWJsZSc7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIERlc2t0b3BMYXlvdXQoeyB0ZXN0IH0pIHtcbiAgY29uc29sZS5sb2coXCJ0ZXN0OiBcIiwgdGVzdCk7XG4gIGNvbnN0IHN0b3JlID0ge1xuICAgIHBhdXNlOiB1c2VTZWxlY3RvcigoeyBwYXVzZSB9KSA9PiBwYXVzZSksXG4gICAgZ2VtOiB1c2VTZWxlY3RvcigoeyBnZW0gfSkgPT4gZ2VtKSxcbiAgICBucG06IHVzZVNlbGVjdG9yKCh7IG5wbSB9KSA9PiBucG0pLFxuICB9O1xuXG4gIGNvbnN0IHJlZiA9IHtcbiAgICBkZXNrdG9wOiB1c2VSZWYobnVsbCksXG4gICAgc3BvdGlmeTogdXNlUmVmKG51bGwpLFxuICAgIHRyZWxsbzogdXNlUmVmKG51bGwpLFxuICB9O1xuXG4gIGNvbnN0IFtzcG90aWZ5Rm9sZGVyLCBzZXRTcG90aWZ5Rm9sZGVyXSA9IHVzZVN0YXRlKHRydWUpO1xuICBjb25zdCBbdHJlbGxvRm9sZGVyLCBzZXRUcmVsbG9Gb2xkZXJdID0gdXNlU3RhdGUodHJ1ZSk7XG5cbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBnc2FwLnJlZ2lzdGVyUGx1Z2luKERyYWdnYWJsZSk7XG4gICAgY29uc3QgbWFrZURyYWdnYWJsZSA9IHRhcmdldCA9PiBEcmFnZ2FibGUuY3JlYXRlKHRhcmdldC5jaGlsZHJlbik7XG4gICAgbWFrZURyYWdnYWJsZShyZWYuZGVza3RvcC5jdXJyZW50KTtcbiAgfSwgW3JlZi5kZXNrdG9wXSk7XG5cbiAgcmV0dXJuIChcbiAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbXBvbmVudCBkZXNrdG9wLWJsb2NrXCI+XG5cbiAgICAgIDxEZXNrdG9wSG9vayAvPlxuXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRhaW5lciBkZXNrdG9wLWJsb2NrXCI+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwid3JhcCBkZXNrdG9wLWJsb2NrXCI+XG4gICAgICAgICAgPGRpdiByZWY9e3JlZi5kZXNrdG9wfSBjbGFzc05hbWU9XCJjb250YWluZXIgZGVza3RvcC13aW5kb3dzXCI+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInBvc2l0aW9uIHNwb3RpZnktZmVlZFwiIHJlZj17cmVmLnNwb3RpZnl9PlxuICAgICAgICAgICAgICA8U3BvdGlmeUZlZWQgLz5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJwb3NpdGlvbiB0cmVsbG8tZmVlZFwiIHJlZj17cmVmLnRyZWxsb30+XG4gICAgICAgICAgICAgIDxUcmVsbG9GZWVkIC8+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8L2Rpdj5cblxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29udGFpbmVyIGRlc2t0b3AtZm9sZGVyc1wiPlxuXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIndyYXAgZGVza3RvcC1mb2xkZXJzXCI+XG5cbiAgICAgICAgICAgICAgPEZvbGRlclxuICAgICAgICAgICAgICAgIHRpdGxlPVwiU3BvdGlmeVwiXG4gICAgICAgICAgICAgICAgdGFyZ2V0PXtyZWYuc3BvdGlmeS5jdXJyZW50fVxuICAgICAgICAgICAgICAgIGlucHV0PXtzcG90aWZ5Rm9sZGVyfVxuICAgICAgICAgICAgICAgIG91dHB1dD17c2V0U3BvdGlmeUZvbGRlcn0gLz5cbiAgICAgICAgICAgICAgPEZvbGRlclxuICAgICAgICAgICAgICAgIHRpdGxlPVwiVHJlbGxvXCJcbiAgICAgICAgICAgICAgICB0YXJnZXQ9e3JlZi50cmVsbG8uY3VycmVudH1cbiAgICAgICAgICAgICAgICBpbnB1dD17dHJlbGxvRm9sZGVyfVxuICAgICAgICAgICAgICAgIG91dHB1dD17c2V0VHJlbGxvRm9sZGVyfSAvPlxuXG4gICAgICAgICAgICA8L2Rpdj5cblxuICAgICAgICAgICAgPERvd25sb2FkcyB7IC4uLnN0b3JlLmdlbSB9IC8+XG4gICAgICAgICAgICA8RG93bmxvYWRzIHsgLi4uc3RvcmUubnBtIH0gLz5cblxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvZGl2PlxuXG4gICAgICA8Q3JlZGl0IC8+XG5cbiAgICA8L2Rpdj5cbiAgKTtcbn07XG5cbmV4cG9ydCBjb25zdCBnZXRTdGF0aWNQcm9wcyA9IGFzeW5jICgpID0+IHtcbiAgY29uc3QgcmVzID0gYXdhaXQgZmV0Y2goYGh0dHBzOi8vanNvbnBsYWNlaG9sZGVyLnR5cGljb2RlLmNvbS9wb3N0cz9fbGltaXQ9NmApXG4gIGNvbnN0IHRlc3QgPSBhd2FpdCByZXMuanNvbigpXG5cbiAgLy8gY29uc3QgcmVzID0gYXdhaXQgYXhpb3NcbiAgLy8gLmdldChcImh0dHBzOi8vYXBpLm5wbXMuaW8vdjIvcGFja2FnZS9iYXJiaWNhbi1yZXNldFwiLCB7IGhlYWRlcnM6IHsgQWNjZXB0OiBcImFwcGxpY2F0aW9uL2pzb25cIiB9fSlcbiAgLy8gLnRoZW4oKHsgZGF0YSB9KSA9PiB7XG4gIC8vICAgZGF0YSA9IGRhdGEuY29sbGVjdGVkO1xuICAvLyAgIGRhdGEgPSB7XG4gIC8vICAgICBkb3dubG9hZHM6IGRhdGEubnBtLmRvd25sb2Fkc1s1XS5jb3VudCxcbiAgLy8gICAgIHJlYWR5OiB0cnVlLFxuICAvLyAgICAgdHlwZTogXCJucG1cIixcbiAgLy8gICAgIG5hbWU6IGRhdGEubWV0YWRhdGEubmFtZSxcbiAgLy8gICAgIHVybDogZGF0YS5tZXRhZGF0YS5saW5rcy5ucG1cbiAgLy8gICB9XG4gIC8vICAgcmV0dXJuIGRhdGE7XG4gIC8vIH0pXG4gIC8vIC5jYXRjaChlcnIgPT4gY29uc29sZS5sb2coZXJyKSk7XG5cbiAgcmV0dXJuIHtcbiAgICBwcm9wczoge1xuICAgICAgdGVzdFxuICAgIH1cbiAgfVxufSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./layouts/desktop.js\n");

/***/ })

});