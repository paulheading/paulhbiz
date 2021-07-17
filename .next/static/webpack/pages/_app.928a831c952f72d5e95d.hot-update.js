/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/_app",{

/***/ "./components/spotify/feed.js":
/*!************************************!*\
  !*** ./components/spotify/feed.js ***!
  \************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ SpotifyFeed; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-redux */ \"./node_modules/react-redux/es/index.js\");\n/* harmony import */ var react_bootstrap_Card__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-bootstrap/Card */ \"./node_modules/react-bootstrap/esm/Card.js\");\n/* harmony import */ var logos__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! logos */ \"./logos/index.js\");\n/* harmony import */ var react_bootstrap__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-bootstrap */ \"./node_modules/react-bootstrap/esm/index.js\");\n/* module decorator */ module = __webpack_require__.hmd(module);\n\n\nvar _jsxFileName = \"/Users/pheading/Sites/paulhbiz/components/spotify/feed.js\",\n    _s = $RefreshSig$();\n\n\n\n\n\n\nfunction SpotifyFeed() {\n  _s();\n\n  var _this = this;\n\n  var spotify = (0,react_redux__WEBPACK_IMPORTED_MODULE_2__.useSelector)(function (_ref) {\n    var spotify = _ref.spotify;\n    return spotify;\n  });\n  var placeholder = !spotify.ready ? \"placeholder\" : \"\";\n  var profile = spotify.profile;\n  var playlist = spotify.playlist;\n  var is = {\n    tooLong: function tooLong(title) {\n      var limit = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 18;\n      return title.length > limit ? title.slice(0, limit) + \" ...\" : title;\n    }\n  };\n  var print = {\n    track: function track(value, index) {\n      return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_bootstrap__WEBPACK_IMPORTED_MODULE_4__.Row, {\n        className: \"spotify-feed\",\n        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n          className: \"title track-position \".concat(placeholder),\n          children: index + 1\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 21,\n          columnNumber: 11\n        }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n          className: \"wrap track-info\",\n          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            className: \"title track-name\",\n            children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n              href: value.url,\n              className: \"link track-name \".concat(placeholder),\n              children: is.tooLong(value.name)\n            }, void 0, false, {\n              fileName: _jsxFileName,\n              lineNumber: 24,\n              columnNumber: 15\n            }, _this)\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 23,\n            columnNumber: 13\n          }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            className: \"title track-artist\",\n            children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n              className: \"link track-artist \".concat(placeholder),\n              href: value.artist.url,\n              children: is.tooLong(value.artist.name)\n            }, void 0, false, {\n              fileName: _jsxFileName,\n              lineNumber: 27,\n              columnNumber: 15\n            }, _this)\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 26,\n            columnNumber: 13\n          }, _this)]\n        }, void 0, true, {\n          fileName: _jsxFileName,\n          lineNumber: 22,\n          columnNumber: 11\n        }, _this)]\n      }, \"track-\".concat(index), true, {\n        fileName: _jsxFileName,\n        lineNumber: 20,\n        columnNumber: 9\n      }, _this);\n    }\n  };\n  print.track.displayName = 'PrintTrack';\n  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n    className: \"component spotify-feed\",\n    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_bootstrap_Card__WEBPACK_IMPORTED_MODULE_5__.default, {\n      className: \"spotify-feed\",\n      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"wrap spotify-header\",\n        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n          href: playlist.url,\n          className: \"link spotify-playlist\",\n          children: playlist.image && /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n            src: playlist.image,\n            alt: playlist.owner,\n            className: \"img spotify-playlist\"\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 42,\n            columnNumber: 33\n          }, this)\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 41,\n          columnNumber: 11\n        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n          className: \"wrap spotify-playlist\",\n          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            className: \"wrap playlist-info\",\n            children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n              className: \"title playlist-name\",\n              children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n                href: playlist.url,\n                className: \"link playlist-name \".concat(placeholder),\n                children: playlist.name\n              }, void 0, false, {\n                fileName: _jsxFileName,\n                lineNumber: 47,\n                columnNumber: 17\n              }, this)\n            }, void 0, false, {\n              fileName: _jsxFileName,\n              lineNumber: 46,\n              columnNumber: 15\n            }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n              className: \"title playlist-owner\",\n              children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n                href: profile,\n                className: \"link playlist-owner \".concat(placeholder),\n                children: playlist.owner\n              }, void 0, false, {\n                fileName: _jsxFileName,\n                lineNumber: 50,\n                columnNumber: 17\n              }, this)\n            }, void 0, false, {\n              fileName: _jsxFileName,\n              lineNumber: 49,\n              columnNumber: 15\n            }, this)]\n          }, void 0, true, {\n            fileName: _jsxFileName,\n            lineNumber: 45,\n            columnNumber: 13\n          }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            className: \"wrap spotify-logo\",\n            children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(logos__WEBPACK_IMPORTED_MODULE_3__.SpotifyLogo, {}, void 0, false, {\n              fileName: _jsxFileName,\n              lineNumber: 54,\n              columnNumber: 15\n            }, this)\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 53,\n            columnNumber: 13\n          }, this)]\n        }, void 0, true, {\n          fileName: _jsxFileName,\n          lineNumber: 44,\n          columnNumber: 11\n        }, this)]\n      }, void 0, true, {\n        fileName: _jsxFileName,\n        lineNumber: 40,\n        columnNumber: 9\n      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"wrap spotify-tracks\",\n        children: spotify.tracks.map(print.track)\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 58,\n        columnNumber: 9\n      }, this)]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 39,\n      columnNumber: 7\n    }, this)\n  }, void 0, false, {\n    fileName: _jsxFileName,\n    lineNumber: 38,\n    columnNumber: 5\n  }, this);\n}\n\n_s(SpotifyFeed, \"4yz5jEPbbNaGH7bdtuZxSeXdVag=\", false, function () {\n  return [react_redux__WEBPACK_IMPORTED_MODULE_2__.useSelector];\n});\n\n_c = SpotifyFeed;\n;\n\nvar _c;\n\n$RefreshReg$(_c, \"SpotifyFeed\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9zcG90aWZ5L2ZlZWQuanM/ZTAwMCJdLCJuYW1lcyI6WyJTcG90aWZ5RmVlZCIsInNwb3RpZnkiLCJ1c2VTZWxlY3RvciIsInBsYWNlaG9sZGVyIiwicmVhZHkiLCJwcm9maWxlIiwicGxheWxpc3QiLCJpcyIsInRvb0xvbmciLCJ0aXRsZSIsImxpbWl0IiwibGVuZ3RoIiwic2xpY2UiLCJwcmludCIsInRyYWNrIiwidmFsdWUiLCJpbmRleCIsInVybCIsIm5hbWUiLCJhcnRpc3QiLCJkaXNwbGF5TmFtZSIsImltYWdlIiwib3duZXIiLCJ0cmFja3MiLCJtYXAiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFZSxTQUFTQSxXQUFULEdBQXVCO0FBQUE7O0FBQUE7O0FBQ3BDLE1BQU1DLE9BQU8sR0FBR0Msd0RBQVcsQ0FBQztBQUFBLFFBQUdELE9BQUgsUUFBR0EsT0FBSDtBQUFBLFdBQWlCQSxPQUFqQjtBQUFBLEdBQUQsQ0FBM0I7QUFDQSxNQUFNRSxXQUFXLEdBQUcsQ0FBQ0YsT0FBTyxDQUFDRyxLQUFULEdBQWlCLGFBQWpCLEdBQWlDLEVBQXJEO0FBQ0EsTUFBTUMsT0FBTyxHQUFHSixPQUFPLENBQUNJLE9BQXhCO0FBQ0EsTUFBTUMsUUFBUSxHQUFHTCxPQUFPLENBQUNLLFFBQXpCO0FBRUEsTUFBTUMsRUFBRSxHQUFHO0FBQ1RDLFdBQU8sRUFBRSxpQkFBQ0MsS0FBRDtBQUFBLFVBQVFDLEtBQVIsdUVBQWdCLEVBQWhCO0FBQUEsYUFBdUJELEtBQUssQ0FBQ0UsTUFBTixHQUFlRCxLQUFmLEdBQXVCRCxLQUFLLENBQUNHLEtBQU4sQ0FBWSxDQUFaLEVBQWVGLEtBQWYsSUFBd0IsTUFBL0MsR0FBd0RELEtBQS9FO0FBQUE7QUFEQSxHQUFYO0FBSUEsTUFBTUksS0FBSyxHQUFHO0FBQ1pDLFNBQUssRUFBRSxlQUFDQyxLQUFELEVBQVFDLEtB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ZUMsR0FBZixDQUFtQlgsS0FBSyxDQUFDQyxLQUF6QjtBQURKO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FuQkY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQSxVQURGO0FBMkJEOztHQXpEdUJkLFc7VUFDTkUsb0Q7OztLQURNRixXO0FBeUR2QiIsImZpbGUiOiIuL2NvbXBvbmVudHMvc3BvdGlmeS9mZWVkLmpzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHsgdXNlU2VsZWN0b3IgfSBmcm9tIFwicmVhY3QtcmVkdXhcIjtcbmltcG9ydCBDYXJkIGZyb20gJ3JlYWN0LWJvb3RzdHJhcC9DYXJkJztcbmltcG9ydCB7IFNwb3RpZnlMb2dvIH0gZnJvbSBcImxvZ29zXCI7XG5pbXBvcnQgeyBSb3cgfSBmcm9tIFwicmVhY3QtYm9vdHN0cmFwXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIFNwb3RpZnlGZWVkKCkge1xuICBjb25zdCBzcG90aWZ5ID0gdXNlU2VsZWN0b3IoKHsgc3BvdGlmeSB9KSA9PiBzcG90aWZ5KTtcbiAgY29uc3QgcGxhY2Vob2xkZXIgPSAhc3BvdGlmeS5yZWFkeSA/IFwicGxhY2Vob2xkZXJcIiA6IFwiXCI7XG4gIGNvbnN0IHByb2ZpbGUgPSBzcG90aWZ5LnByb2ZpbGU7XG4gIGNvbnN0IHBsYXlsaXN0ID0gc3BvdGlmeS5wbGF5bGlzdDtcblxuICBjb25zdCBpcyA9IHtcbiAgICB0b29Mb25nOiAodGl0bGUsIGxpbWl0ID0gMTgpID0+IHRpdGxlLmxlbmd0aCA+IGxpbWl0ID8gdGl0bGUuc2xpY2UoMCwgbGltaXQpICsgXCIgLi4uXCIgOiB0aXRsZSxcbiAgfTtcblxuICBjb25zdCBwcmludCA9IHtcbiAgICB0cmFjazogKHZhbHVlLCBpbmRleCkgPT4ge1xuICAgICAgcmV0dXJuIChcbiAgICAgICAgPFJvdyBjbGFzc05hbWU9XCJzcG90aWZ5LWZlZWRcIiBrZXk9e2B0cmFjay0ke2luZGV4fWB9PlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtgdGl0bGUgdHJhY2stcG9zaXRpb24gJHtwbGFjZWhvbGRlcn1gfT57aW5kZXggKyAxfTwvZGl2PlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwid3JhcCB0cmFjay1pbmZvXCI+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInRpdGxlIHRyYWNrLW5hbWVcIj5cbiAgICAgICAgICAgICAgPGEgaHJlZj17dmFsdWUudXJsfSBjbGFzc05hbWU9e2BsaW5rIHRyYWNrLW5hbWUgJHtwbGFjZWhvbGRlcn1gfT57aXMudG9vTG9uZyh2YWx1ZS5uYW1lKX08L2E+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidGl0bGUgdHJhY2stYXJ0aXN0XCI+XG4gICAgICAgICAgICAgIDxhIGNsYXNzTmFtZT17YGxpbmsgdHJhY2stYXJ0aXN0ICR7cGxhY2Vob2xkZXJ9YH0gaHJlZj17dmFsdWUuYXJ0aXN0LnVybH0+e2lzLnRvb0xvbmcodmFsdWUuYXJ0aXN0Lm5hbWUpfTwvYT5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L1Jvdz5cbiAgICAgICk7XG4gICAgfVxuICB9O1xuXG4gIHByaW50LnRyYWNrLmRpc3BsYXlOYW1lID0gJ1ByaW50VHJhY2snO1xuXG4gIHJldHVybiAoXG4gICAgPGRpdiBjbGFzc05hbWU9XCJjb21wb25lbnQgc3BvdGlmeS1mZWVkXCI+XG4gICAgICA8Q2FyZCBjbGFzc05hbWU9XCJzcG90aWZ5LWZlZWRcIj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ3cmFwIHNwb3RpZnktaGVhZGVyXCI+XG4gICAgICAgICAgPGEgaHJlZj17cGxheWxpc3QudXJsfSBjbGFzc05hbWU9XCJsaW5rIHNwb3RpZnktcGxheWxpc3RcIj5cbiAgICAgICAgICAgIHsgcGxheWxpc3QuaW1hZ2UgJiYgPGltZyBzcmM9e3BsYXlsaXN0LmltYWdlfSBhbHQ9e3BsYXlsaXN0Lm93bmVyfSBjbGFzc05hbWU9XCJpbWcgc3BvdGlmeS1wbGF5bGlzdFwiIC8+IH1cbiAgICAgICAgICA8L2E+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ3cmFwIHNwb3RpZnktcGxheWxpc3RcIj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwid3JhcCBwbGF5bGlzdC1pbmZvXCI+XG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidGl0bGUgcGxheWxpc3QtbmFtZVwiPlxuICAgICAgICAgICAgICAgIDxhIGhyZWY9e3BsYXlsaXN0LnVybH0gY2xhc3NOYW1lPXtgbGluayBwbGF5bGlzdC1uYW1lICR7cGxhY2Vob2xkZXJ9YH0+e3BsYXlsaXN0Lm5hbWV9PC9hPlxuICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ0aXRsZSBwbGF5bGlzdC1vd25lclwiPlxuICAgICAgICAgICAgICAgIDxhIGhyZWY9e3Byb2ZpbGV9IGNsYXNzTmFtZT17YGxpbmsgcGxheWxpc3Qtb3duZXIgJHtwbGFjZWhvbGRlcn1gfT57cGxheWxpc3Qub3duZXJ9PC9hPlxuICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ3cmFwIHNwb3RpZnktbG9nb1wiPlxuICAgICAgICAgICAgICA8U3BvdGlmeUxvZ28gLz5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ3cmFwIHNwb3RpZnktdHJhY2tzXCI+XG4gICAgICAgICAgeyBzcG90aWZ5LnRyYWNrcy5tYXAocHJpbnQudHJhY2spIH1cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L0NhcmQ+XG4gICAgPC9kaXY+XG4gICk7XG59O1xuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./components/spotify/feed.js\n");

/***/ })

});