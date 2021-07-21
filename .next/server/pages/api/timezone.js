(function() {
var exports = {};
exports.id = 496;
exports.ids = [496];
exports.modules = {

/***/ 1438:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
const timezone = (req, res) => res.status(200).json({
  ready: true,
  time: '12:34',
  location: 'London'
});

/* harmony default export */ __webpack_exports__["default"] = (timezone);

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = function(moduleId) { return __webpack_require__(__webpack_require__.s = moduleId); }
var __webpack_exports__ = (__webpack_exec__(1438));
module.exports = __webpack_exports__;

})();