"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/index",{

/***/ "./scripts/getters/trello/_projects.js":
/*!*********************************************!*\
  !*** ./scripts/getters/trello/_projects.js ***!
  \*********************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _Users_pheading_Sites_paulhbiz_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/regenerator */ \"./node_modules/@babel/runtime/regenerator/index.js\");\n/* harmony import */ var _Users_pheading_Sites_paulhbiz_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_Users_pheading_Sites_paulhbiz_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _Users_pheading_Sites_paulhbiz_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator */ \"./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js\");\n/* harmony import */ var scripts_helpers__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! scripts/helpers */ \"./scripts/helpers/index.js\");\n/* harmony import */ var scripts_getters_trello_shared__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! scripts/getters/trello/_shared */ \"./scripts/getters/trello/_shared.js\");\n/* harmony import */ var scripts_getters__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! scripts/getters */ \"./scripts/getters/index.js\");\n/* module decorator */ module = __webpack_require__.hmd(module);\n\n\n\n\n\n\nvar getBlogDesc = /*#__PURE__*/function () {\n  var _ref = (0,_Users_pheading_Sites_paulhbiz_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__.default)( /*#__PURE__*/_Users_pheading_Sites_paulhbiz_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee(blog_id) {\n    var blog;\n    return _Users_pheading_Sites_paulhbiz_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee$(_context) {\n      while (1) {\n        switch (_context.prev = _context.next) {\n          case 0:\n            _context.next = 2;\n            return scripts_getters__WEBPACK_IMPORTED_MODULE_4__.default.Medium();\n\n          case 2:\n            blog = _context.sent;\n            blog_id = blog_id.split('-');\n            blog_id = blog_id[blog_id.length - 1];\n            card.desc = blog.items.filter(function (_ref2) {\n              var guid = _ref2.guid;\n              guid = guid.split('/');\n              guid = guid[guid.length - 1];\n              return guid === blog_id ? true : false;\n            })[0].description;\n\n            if (card.desc.startsWith(\"\\n\")) {\n              card.desc = card.desc.substring(1);\n\n              if (card.desc.startsWith(\"<blockquote>\")) {\n                card.desc = card.desc.split(\"</blockquote>\");\n                card.desc = card.desc[1];\n              }\n            }\n\n          case 7:\n          case \"end\":\n            return _context.stop();\n        }\n      }\n    }, _callee);\n  }));\n\n  return function getBlogDesc(_x) {\n    return _ref.apply(this, arguments);\n  };\n}();\n\nvar getProjectCards = /*#__PURE__*/function () {\n  var _ref3 = (0,_Users_pheading_Sites_paulhbiz_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__.default)( /*#__PURE__*/_Users_pheading_Sites_paulhbiz_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee3() {\n    var cards;\n    return _Users_pheading_Sites_paulhbiz_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee3$(_context3) {\n      while (1) {\n        switch (_context3.prev = _context3.next) {\n          case 0:\n            _context3.next = 2;\n            return scripts_getters_trello_shared__WEBPACK_IMPORTED_MODULE_3__.get.cardsOnList(scripts_getters_trello_shared__WEBPACK_IMPORTED_MODULE_3__.TRELLO.LIST.PROJECTS);\n\n          case 2:\n            cards = _context3.sent;\n\n            if (!cards) {\n              _context3.next = 6;\n              break;\n            }\n\n            cards = cards.map( /*#__PURE__*/function () {\n              var _ref4 = (0,_Users_pheading_Sites_paulhbiz_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__.default)( /*#__PURE__*/_Users_pheading_Sites_paulhbiz_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee2(card) {\n                var actions, attachments, route, more;\n                return _Users_pheading_Sites_paulhbiz_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee2$(_context2) {\n                  while (1) {\n                    switch (_context2.prev = _context2.next) {\n                      case 0:\n                        _context2.next = 2;\n                        return scripts_getters_trello_shared__WEBPACK_IMPORTED_MODULE_3__.data.trello(\"cards/\".concat(card.id, \"/actions\"));\n\n                      case 2:\n                        actions = _context2.sent;\n                        _context2.next = 5;\n                        return scripts_getters_trello_shared__WEBPACK_IMPORTED_MODULE_3__.data.trello(\"cards/\".concat(card.id, \"/attachments\"));\n\n                      case 5:\n                        attachments = _context2.sent;\n                        route = \"/projects/\".concat((0,scripts_helpers__WEBPACK_IMPORTED_MODULE_2__.pathify)(scripts_helpers__WEBPACK_IMPORTED_MODULE_2__.remove.hero(card.name)));\n                        more = scripts_helpers__WEBPACK_IMPORTED_MODULE_2__.filter.in.more(attachments);\n\n                        if (more) {\n                          _context2.next = 13;\n                          break;\n                        }\n\n                        attachments.push({\n                          name: \"Read more\",\n                          url: route\n                        });\n                        card.desc = scripts_getters_trello_shared__WEBPACK_IMPORTED_MODULE_3__.converter.makeHtml(card.desc);\n                        _context2.next = 16;\n                        break;\n\n                      case 13:\n                        _context2.next = 15;\n                        return getBlogDesc(more.url);\n\n                      case 15:\n                        card.desc = _context2.sent;\n\n                      case 16:\n                        card.route = route;\n                        card.actions = actions;\n                        card.attachments = attachments;\n                        card.list = {\n                          name: \"Projects\"\n                        };\n                        card.svg = scripts_getters_trello_shared__WEBPACK_IMPORTED_MODULE_3__.get.svgsOnCard(actions);\n                        card[\"class\"] = \"card-\".concat(card.id);\n                        card.placeholder = false;\n                        scripts_getters_trello_shared__WEBPACK_IMPORTED_MODULE_3__.get.animation(card);\n                        return _context2.abrupt(\"return\", card);\n\n                      case 25:\n                      case \"end\":\n                        return _context2.stop();\n                    }\n                  }\n                }, _callee2);\n              }));\n\n              return function (_x2) {\n                return _ref4.apply(this, arguments);\n              };\n            }());\n            return _context3.abrupt(\"return\", scripts_getters_trello_shared__WEBPACK_IMPORTED_MODULE_3__.data.promise(cards));\n\n          case 6:\n            return _context3.abrupt(\"return\", null);\n\n          case 7:\n          case \"end\":\n            return _context3.stop();\n        }\n      }\n    }, _callee3);\n  }));\n\n  return function getProjectCards() {\n    return _ref3.apply(this, arguments);\n  };\n}();\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (getProjectCards);\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUFBQTtBQUFBO0FBQUEsK0JBVUlQLFdBQVcsQ0FBQzBCLElBQUksQ0FBQ0UsR0FBTixDQVZmOztBQUFBO0FBVWR0Qix3QkFBQUEsSUFBSSxDQUFDQyxJQVZTOztBQUFBO0FBYWhCRCx3QkFBQUEsSUFBSSxDQUFDaUIsS0FBTCxHQUFhQSxLQUFiO0FBQ0FqQix3QkFBQUEsSUFBSSxDQUFDZSxPQUFMLEdBQWVBLE9BQWY7QUFDQWYsd0JBQUFBLElBQUksQ0FBQ2dCLFdBQUwsR0FBbUJBLFdBQW5CO0FBQ0FoQix3QkFBQUEsSUFBSSxDQUFDd0IsSUFBTCxHQUFZO0FBQUVMLDBCQUFBQSxJQUFJLEVBQUU7QUFBUix5QkFBWjtBQUNBbkIsd0JBQUFBLElBQUksQ0FBQ3lCLEdBQUwsR0FBV2xDLHlFQUFBLENBQWV3QixPQUFmLENBQVg7QUFDQWYsd0JBQUFBLElBQUksU0FBSixrQkFBcUJBLElBQUksQ0FBQ2MsRUFBMUI7QUFDQWQsd0JBQUFBLElBQUksQ0FBQzJCLFdBQUwsR0FBbUIsS0FBbkI7QUFDQXBDLHdCQUFBQSx3RUFBQSxDQUFjUyxJQUFkO0FBcEJnQiwwREFzQlRBLElBdEJTOztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBQVY7O0FBQUE7QUFBQTtBQUFBO0FBQUEsZ0JBQVI7QUFKb0IsOENBNEJiVix1RUFBQSxDQUFhcUIsS0FBYixDQTVCYTs7QUFBQTtBQUFBLDhDQTZCYixJQTdCYTs7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxHQUFIOztBQUFBLGtCQUFmSixlQUFlO0FBQUE7QUFBQTtBQUFBLEdBQXJCOztBQWdDQSwrREFBZUEsZUFBZiIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9zY3JpcHRzL2dldHRlcnMvdHJlbGxvL19wcm9qZWN0cy5qcz8yZTY1Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IGZpbHRlciwgcmVtb3ZlLCBwYXRoaWZ5IH0gZnJvbSAnc2NyaXB0cy9oZWxwZXJzJ1xuaW1wb3J0IHsgVFJFTExPLCBkYXRhLCBnZXQsIGNvbnZlcnRlciB9IGZyb20gJ3NjcmlwdHMvZ2V0dGVycy90cmVsbG8vX3NoYXJlZCdcbmltcG9ydCBwdWxsIGZyb20gJ3NjcmlwdHMvZ2V0dGVycydcblxuY29uc3QgZ2V0QmxvZ0Rlc2MgPSBhc3luYyBibG9nX2lkID0+IHtcbiAgY29uc3QgYmxvZyA9IGF3YWl0IHB1bGwuTWVkaXVtKCk7XG4gIGJsb2dfaWQgPSBibG9nX2lkLnNwbGl0KCctJyk7XG4gIGJsb2dfaWQgPSBibG9nX2lkW2Jsb2dfaWQubGVuZ3RoIC0gMV07XG4gIGNhcmQuZGVzYyA9IGJsb2cuaXRlbXMuZmlsdGVyKCh7IGd1aWQgfSkgPT4ge1xuICAgIGd1aWQgPSBndWlkLnNwbGl0KCcvJyk7XG4gICAgZ3VpZCA9IGd1aWRbZ3VpZC5sZW5ndGggLSAxXTtcbiAgICByZXR1cm4gZ3VpZCA9PT0gYmxvZ19pZCA/IHRydWUgOiBmYWxzZTtcbiAgfSlbMF0uZGVzY3JpcHRpb247XG4gIGlmIChjYXJkLmRlc2Muc3RhcnRzV2l0aChgXFxuYCkpIHtcbiAgICBjYXJkLmRlc2MgPSBjYXJkLmRlc2Muc3Vic3RyaW5nKDEpO1xuICAgIGlmIChjYXJkLmRlc2Muc3RhcnRzV2l0aChgPGJsb2NrcXVvdGU+YCkpIHtcbiAgICAgIGNhcmQuZGVzYyA9IGNhcmQuZGVzYy5zcGxpdChgPC9ibG9ja3F1b3RlPmApO1xuICAgICAgY2FyZC5kZXNjID0gY2FyZC5kZXNjWzFdO1xuICAgIH1cbiAgfVxufVxuXG5jb25zdCBnZXRQcm9qZWN0Q2FyZHMgPSBhc3luYyAoKSA9PiB7XG4gIGxldCBjYXJkcyA9IGF3YWl0IGdldC5jYXJkc09uTGlzdChUUkVMTE8uTElTVC5QUk9KRUNUUyk7XG5cbiAgaWYgKGNhcmRzKSB7XG4gICAgY2FyZHMgPSBjYXJkcy5tYXAoYXN5bmMgY2FyZCA9PiB7XG4gICAgICBjb25zdCBhY3Rpb25zID0gYXdhaXQgZGF0YS50cmVsbG8oYGNhcmRzLyR7Y2FyZC5pZH0vYWN0aW9uc2ApO1xuICAgICAgY29uc3QgYXR0YWNobWVudHMgPSBhd2FpdCBkYXRhLnRyZWxsbyhgY2FyZHMvJHtjYXJkLmlkfS9hdHRhY2htZW50c2ApO1xuICAgICAgY29uc3Qgcm91dGUgPSBgL3Byb2plY3RzLyR7cGF0aGlmeShyZW1vdmUuaGVybyhjYXJkLm5hbWUpKX1gO1xuICAgICAgY29uc3QgbW9yZSA9IGZpbHRlci5pbi5tb3JlKGF0dGFjaG1lbnRzKTtcblxuICAgICAgaWYgKCFtb3JlKSB7IFxuICAgICAgICBhdHRhY2htZW50cy5wdXNoKHsgbmFtZTogXCJSZWFkIG1vcmVcIiwgdXJsOiByb3V0ZSB9KTtcbiAgICAgICAgY2FyZC5kZXNjID0gY29udmVydGVyLm1ha2VIdG1sKGNhcmQuZGVzYyk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBjYXJkLmRlc2MgPSBhd2FpdCBnZXRCbG9nRGVzYyhtb3JlLnVybCk7XG4gICAgICB9XG5cbiAgICAgIGNhcmQucm91dGUgPSByb3V0ZTtcbiAgICAgIGNhcmQuYWN0aW9ucyA9IGFjdGlvbnM7XG4gICAgICBjYXJkLmF0dGFjaG1lbnRzID0gYXR0YWNobWVudHM7XG4gICAgICBjYXJkLmxpc3QgPSB7IG5hbWU6IFwiUHJvamVjdHNcIiB9O1xuICAgICAgY2FyZC5zdmcgPSBnZXQuc3Znc09uQ2FyZChhY3Rpb25zKTtcbiAgICAgIGNhcmQuY2xhc3MgPSBgY2FyZC0ke2NhcmQuaWR9YDtcbiAgICAgIGNhcmQucGxhY2Vob2xkZXIgPSBmYWxzZTtcbiAgICAgIGdldC5hbmltYXRpb24oY2FyZCk7XG5cbiAgICAgIHJldHVybiBjYXJkO1xuICAgIH0pO1xuICAgIHJldHVybiBkYXRhLnByb21pc2UoY2FyZHMpOyAgICBcbiAgfSByZXR1cm4gbnVsbDtcbn1cblxuZXhwb3J0IGRlZmF1bHQgZ2V0UHJvamVjdENhcmRzOyJdLCJuYW1lcyI6WyJmaWx0ZXIiLCJyZW1vdmUiLCJwYXRoaWZ5IiwiVFJFTExPIiwiZGF0YSIsImdldCIsImNvbnZlcnRlciIsInB1bGwiLCJnZXRCbG9nRGVzYyIsImJsb2dfaWQiLCJNZWRpdW0iLCJibG9nIiwic3BsaXQiLCJsZW5ndGgiLCJjYXJkIiwiZGVzYyIsIml0ZW1zIiwiZ3VpZCIsImRlc2NyaXB0aW9uIiwic3RhcnRzV2l0aCIsInN1YnN0cmluZyIsImdldFByb2plY3RDYXJkcyIsImNhcmRzT25MaXN0IiwiTElTVCIsIlBST0pFQ1RTIiwiY2FyZHMiLCJtYXAiLCJ0cmVsbG8iLCJpZCIsImFjdGlvbnMiLCJhdHRhY2htZW50cyIsInJvdXRlIiwiaGVybyIsIm5hbWUiLCJtb3JlIiwicHVzaCIsInVybCIsIm1ha2VIdG1sIiwibGlzdCIsInN2ZyIsInN2Z3NPbkNhcmQiLCJwbGFjZWhvbGRlciIsImFuaW1hdGlvbiIsInByb21pc2UiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./scripts/getters/trello/_projects.js\n");

/***/ })

});