(function() {
var exports = {};
exports.id = 888;
exports.ids = [888];
exports.modules = {

/***/ 4436:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": function() { return /* binding */ App; }
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(5282);
// EXTERNAL MODULE: external "react-redux"
var external_react_redux_ = __webpack_require__(79);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(9297);
;// CONCATENATED MODULE: external "redux"
var external_redux_namespaceObject = require("redux");;
;// CONCATENATED MODULE: external "redux-devtools-extension"
var external_redux_devtools_extension_namespaceObject = require("redux-devtools-extension");;
;// CONCATENATED MODULE: external "redux-thunk"
var external_redux_thunk_namespaceObject = require("redux-thunk");;
var external_redux_thunk_default = /*#__PURE__*/__webpack_require__.n(external_redux_thunk_namespaceObject);
// EXTERNAL MODULE: ./scripts/helpers/index.js + 2 modules
var helpers = __webpack_require__(2110);
// EXTERNAL MODULE: ./store/init.js
var init = __webpack_require__(4604);
;// CONCATENATED MODULE: ./store/reducers.js



let cards = init/* default.trello.projects.cards */.Z.trello.projects.cards;
cards = helpers/* filter.in.hero */.hX.in.hero(cards);

const hero = (data = {
  feed: cards,
  card: cards[init/* default.count */.Z.count]
}, {
  type,
  payload
}) => {
  if (type === "HERO") {
    return payload;
  }

  return data;
};

const width = (data = "width data", {
  type,
  payload
}) => {
  if (type === "WIDTH") {
    return payload;
  }

  return data;
};

const count = (data = init/* default.count */.Z.count, {
  type,
  payload
}) => {
  if (type === "COUNT") {
    return payload;
  }

  return data;
};

const test = (data = "test data", {
  type,
  payload
}) => {
  if (type === "TEST") {
    return payload;
  }

  return data;
};

const pause = (data = init/* default.pause */.Z.pause, {
  type,
  payload
}) => {
  if (type === "PAUSE") {
    return payload;
  }

  return data;
};

const menu = (data = "menu data", {
  type,
  payload
}) => {
  if (type === "MENU") {
    return payload;
  }

  return data;
};

const npm = (data = init/* default.npm */.Z.npm, {
  type,
  payload
}) => {
  if (type === "NPM") {
    return payload;
  }

  return data;
};

const gem = (data = init/* default.gem */.Z.gem, {
  type,
  payload
}) => {
  if (type === "GEM") {
    return payload;
  }

  return data;
};

const timezone = (data = init/* default.timezone */.Z.timezone, {
  type,
  payload
}) => {
  if (type === "TIMEZONE") {
    return payload;
  }

  return data;
};

const trello = (data = init/* default.trello */.Z.trello, {
  type,
  payload
}) => {
  if (type === "TRELLO") {
    return payload;
  }

  return data;
};

const medium = (data = "medium data", {
  type,
  payload
}) => {
  if (type === "MEDIUM") {
    return payload;
  }

  return data;
};

const spotify = (data = init/* default.spotify */.Z.spotify, {
  type,
  payload
}) => {
  if (type === "SPOTIFY") {
    return payload;
  }

  return data;
};

const github = (data = "github data", {
  type,
  payload
}) => {
  if (type === "GITHUB") {
    return payload;
  }

  return data;
};

const treehouse = (data = init/* default.treehouse */.Z.treehouse, {
  type,
  payload
}) => {
  if (type === "TREEHOUSE") {
    return payload;
  }

  return data;
};

/* harmony default export */ var reducers = ((0,external_redux_namespaceObject.combineReducers)({
  hero,
  width,
  count,
  test,
  pause,
  menu,
  npm,
  gem,
  timezone,
  trello,
  medium,
  spotify,
  github,
  treehouse
}));
;// CONCATENATED MODULE: ./store/index.js
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }






let store;

function initStore(initialState) {
  return (0,external_redux_namespaceObject.createStore)(reducers, initialState, (0,external_redux_devtools_extension_namespaceObject.composeWithDevTools)((0,external_redux_namespaceObject.applyMiddleware)((external_redux_thunk_default()))));
}

;
const initializeStore = preloadedState => {
  var _store2;

  let _store = (_store2 = store) !== null && _store2 !== void 0 ? _store2 : initStore(preloadedState); // After navigating to a page with an initial Redux state, merge that state
  // with the current state in the store, and create a new store


  if (preloadedState && store) {
    _store = initStore(_objectSpread(_objectSpread({}, store.getState()), preloadedState)); // Reset the current store

    store = undefined;
  } // For SSG and SSR always create a new store


  if (true) return _store; // Create the store once in the client

  if (!store) store = _store;
  return _store;
};
function useStore(initialState) {
  const store = (0,external_react_.useMemo)(() => initializeStore(initialState), [initialState]);
  return store;
}
;
// EXTERNAL MODULE: ./layouts/index.js + 17 modules
var layouts = __webpack_require__(6199);
;// CONCATENATED MODULE: external "focus-visible/dist/focus-visible.min.js"
var focus_visible_min_js_namespaceObject = require("focus-visible/dist/focus-visible.min.js");;
;// CONCATENATED MODULE: ./pages/_app.js


function _app_ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _app_objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { _app_ownKeys(Object(source), true).forEach(function (key) { _app_defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { _app_ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _app_defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }






function App({
  Component,
  pageProps
}) {
  const store = useStore(pageProps.initialReduxState);
  return /*#__PURE__*/jsx_runtime_.jsx(external_react_redux_.Provider, {
    store: store,
    children: /*#__PURE__*/jsx_runtime_.jsx(layouts/* Main */.or, {
      children: /*#__PURE__*/jsx_runtime_.jsx(Component, _app_objectSpread({}, pageProps))
    })
  });
}

/***/ }),

/***/ 2376:
/***/ (function(module) {

"use strict";
module.exports = require("axios");;

/***/ }),

/***/ 9015:
/***/ (function(module) {

"use strict";
module.exports = require("gsap");;

/***/ }),

/***/ 3812:
/***/ (function(module) {

"use strict";
module.exports = require("gsap/dist/Draggable");;

/***/ }),

/***/ 5841:
/***/ (function(module) {

"use strict";
module.exports = require("gsap/dist/DrawSVGPlugin");;

/***/ }),

/***/ 7051:
/***/ (function(module) {

"use strict";
module.exports = require("html-react-parser");;

/***/ }),

/***/ 2470:
/***/ (function(module) {

"use strict";
module.exports = require("moment");;

/***/ }),

/***/ 5273:
/***/ (function(module) {

"use strict";
module.exports = require("next/dist/next-server/lib/head.js");;

/***/ }),

/***/ 8417:
/***/ (function(module) {

"use strict";
module.exports = require("next/dist/next-server/lib/router-context.js");;

/***/ }),

/***/ 2238:
/***/ (function(module) {

"use strict";
module.exports = require("next/dist/next-server/lib/router/utils/get-asset-path-from-route.js");;

/***/ }),

/***/ 5519:
/***/ (function(module) {

"use strict";
module.exports = require("next/dist/next-server/lib/to-base-64.js");;

/***/ }),

/***/ 444:
/***/ (function(module) {

"use strict";
module.exports = require("next/dist/next-server/server/image-config.js");;

/***/ }),

/***/ 701:
/***/ (function(module) {

"use strict";
module.exports = require("next/head");;

/***/ }),

/***/ 6731:
/***/ (function(module) {

"use strict";
module.exports = require("next/router");;

/***/ }),

/***/ 9297:
/***/ (function(module) {

"use strict";
module.exports = require("react");;

/***/ }),

/***/ 9226:
/***/ (function(module) {

"use strict";
module.exports = require("react-bootstrap");;

/***/ }),

/***/ 4939:
/***/ (function(module) {

"use strict";
module.exports = require("react-bootstrap/Badge");;

/***/ }),

/***/ 5777:
/***/ (function(module) {

"use strict";
module.exports = require("react-bootstrap/Button");;

/***/ }),

/***/ 7707:
/***/ (function(module) {

"use strict";
module.exports = require("react-bootstrap/Col");;

/***/ }),

/***/ 8622:
/***/ (function(module) {

"use strict";
module.exports = require("react-bootstrap/Container");;

/***/ }),

/***/ 3406:
/***/ (function(module) {

"use strict";
module.exports = require("react-bootstrap/Row");;

/***/ }),

/***/ 2662:
/***/ (function(module) {

"use strict";
module.exports = require("react-hook-form");;

/***/ }),

/***/ 79:
/***/ (function(module) {

"use strict";
module.exports = require("react-redux");;

/***/ }),

/***/ 5282:
/***/ (function(module) {

"use strict";
module.exports = require("react/jsx-runtime");;

/***/ }),

/***/ 5060:
/***/ (function(module) {

"use strict";
module.exports = require("showdown");;

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = function(moduleId) { return __webpack_require__(__webpack_require__.s = moduleId); }
var __webpack_exports__ = __webpack_require__.X(0, [821,61,230,604], function() { return __webpack_exec__(4436); });
module.exports = __webpack_exports__;

})();