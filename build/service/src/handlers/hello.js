/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it uses a non-standard name for the exports (exports).
(() => {
var exports = __webpack_exports__;
/*!*******************************!*\
  !*** ./src/handlers/hello.ts ***!
  \*******************************/

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.handler = void 0;
const handler = async (event, _context) => {
    return {
        statusCode: 200,
        body: JSON.stringify({
            message: 'Hello from TypeScript!',
            input: event,
        }),
    };
};
exports.handler = handler;

})();

var __webpack_export_target__ = exports;
for(var i in __webpack_exports__) __webpack_export_target__[i] = __webpack_exports__[i];
if(__webpack_exports__.__esModule) Object.defineProperty(__webpack_export_target__, "__esModule", { value: true });
/******/ })()
;
//# sourceMappingURL=hello.js.map