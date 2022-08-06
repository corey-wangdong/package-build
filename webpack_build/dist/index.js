/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./src/es6.js":
/*!********************!*\
  !*** ./src/es6.js ***!
  \********************/
/***/ (() => {

throw new Error("Module build failed (from ./node_modules/.pnpm/registry.npmmirror.com+babel-loader@8.2.5_xc6oct4hcywdrbo4ned6ytbybm/node_modules/babel-loader/lib/index.js):\nSyntaxError: /Users/corey/Documents/code盘/myGitHub/package-build/webpack_build/src/es6.js: Decorators must not be followed by a semicolon. (14:13)\n\n\u001b[0m \u001b[90m 12 |\u001b[39m   name \u001b[33m=\u001b[39m \u001b[32m'corey'\u001b[39m\u001b[33m;\u001b[39m\u001b[0m\n\u001b[0m \u001b[90m 13 |\u001b[39m   age \u001b[33m=\u001b[39m \u001b[32m'25'\u001b[39m\u001b[33m;\u001b[39m\u001b[0m\n\u001b[0m\u001b[31m\u001b[1m>\u001b[22m\u001b[39m\u001b[90m 14 |\u001b[39m   \u001b[33m@\u001b[39mdecorator\u001b[33m;\u001b[39m\u001b[0m\n\u001b[0m \u001b[90m    |\u001b[39m              \u001b[31m\u001b[1m^\u001b[22m\u001b[39m\u001b[0m\n\u001b[0m \u001b[90m 15 |\u001b[39m   changeName \u001b[33m=\u001b[39m (name) \u001b[33m=>\u001b[39m {\u001b[0m\n\u001b[0m \u001b[90m 16 |\u001b[39m     console\u001b[33m.\u001b[39mlog(\u001b[32m`之前名字是:${this.name},现在名字是${name}`\u001b[39m)\u001b[33m;\u001b[39m\u001b[0m\n\u001b[0m \u001b[90m 17 |\u001b[39m   }\u001b[0m\n    at instantiate (/Users/corey/Documents/code盘/myGitHub/package-build/webpack_build/node_modules/.pnpm/registry.npmmirror.com+@babel+parser@7.18.11/node_modules/@babel/parser/lib/index.js:72:32)\n    at constructor (/Users/corey/Documents/code盘/myGitHub/package-build/webpack_build/node_modules/.pnpm/registry.npmmirror.com+@babel+parser@7.18.11/node_modules/@babel/parser/lib/index.js:366:12)\n    at Parser.raise (/Users/corey/Documents/code盘/myGitHub/package-build/webpack_build/node_modules/.pnpm/registry.npmmirror.com+@babel+parser@7.18.11/node_modules/@babel/parser/lib/index.js:3453:19)\n    at /Users/corey/Documents/code盘/myGitHub/package-build/webpack_build/node_modules/.pnpm/registry.npmmirror.com+@babel+parser@7.18.11/node_modules/@babel/parser/lib/index.js:15636:24\n    at Parser.withSmartMixTopicForbiddingContext (/Users/corey/Documents/code盘/myGitHub/package-build/webpack_build/node_modules/.pnpm/registry.npmmirror.com+@babel+parser@7.18.11/node_modules/@babel/parser/lib/index.js:14457:14)\n    at Parser.parseClassBody (/Users/corey/Documents/code盘/myGitHub/package-build/webpack_build/node_modules/.pnpm/registry.npmmirror.com+@babel+parser@7.18.11/node_modules/@babel/parser/lib/index.js:15632:10)\n    at Parser.parseClass (/Users/corey/Documents/code盘/myGitHub/package-build/webpack_build/node_modules/.pnpm/registry.npmmirror.com+@babel+parser@7.18.11/node_modules/@babel/parser/lib/index.js:15606:22)\n    at Parser.parseExportDefaultExpression (/Users/corey/Documents/code盘/myGitHub/package-build/webpack_build/node_modules/.pnpm/registry.npmmirror.com+@babel+parser@7.18.11/node_modules/@babel/parser/lib/index.js:16131:19)\n    at Parser.parseExport (/Users/corey/Documents/code盘/myGitHub/package-build/webpack_build/node_modules/.pnpm/registry.npmmirror.com+@babel+parser@7.18.11/node_modules/@babel/parser/lib/index.js:16039:31)\n    at Parser.parseStatementContent (/Users/corey/Documents/code盘/myGitHub/package-build/webpack_build/node_modules/.pnpm/registry.npmmirror.com+@babel+parser@7.18.11/node_modules/@babel/parser/lib/index.js:14893:27)");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be in strict mode.
(() => {
"use strict";
/*!******************!*\
  !*** ./index.js ***!
  \******************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _src_es6__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./src/es6 */ "./src/es6.js");
/* harmony import */ var _src_es6__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_src_es6__WEBPACK_IMPORTED_MODULE_0__);

var person1 = new (_src_es6__WEBPACK_IMPORTED_MODULE_0___default())();
console.log(person1.changeAge(27));
console.log(person1.changeName('鹤博'));
console.log('对着镜子里的那个人，说声抱歉');
})();

/******/ })()
;
//# sourceMappingURL=index.js.map