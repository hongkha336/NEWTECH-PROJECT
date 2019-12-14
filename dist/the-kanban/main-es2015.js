(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./$$_lazy_route_resource lazy recursive":
/*!******************************************************!*\
  !*** ./$$_lazy_route_resource lazy namespace object ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html":
/*!**************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html ***!
  \**************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<app-header></app-header>\n<app-board></app-board>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/board-header/board-header.component.html":
/*!***********************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/board-header/board-header.component.html ***!
  \***********************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"board-header\">\n    <div class=\"row board-header-title\">\n        <h1 [(appContentEdit)]=\"boardModel.name\" (mouseleave)=\"update($event)\" class=\"board-name\">{{boardname}}</h1>\n    </div>\n</div>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/board/board/board.component.html":
/*!***************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/board/board/board.component.html ***!
  \***************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<app-board-header></app-board-header>\n<div class=\"container main-board\" style=\"max-width:inherit;width:auto;height:100%;\">\n    <div class=\"row\">\n      <!-- <div class=\"col-11\"></div>\n      <div class=\"col\"><button (click)=\"saveBoard()\">Save</button></div> -->\n      <div class=\"col custom-col\"\n           style=\"margin:10px;padding:15px;padding-top:15px;padding-bottom:15px;\">\n        <h6 class=\"text-center add-new-list\" (click)=\"addList()\">Add new item...</h6>\n      </div>\n    </div>\n\n\n    <div class=\"row\" style=\"height:inherit;\">\n      <app-list *ngFor=\"let list of lists;let i = index\" [list]=\"list\" [listIndex]=\"i\"\n        (moveCardAcrossList)=\"moveCardAcrossList($event)\"\n        (deleteList)=\"deleteList($event)\"\n        attr.listIndex=\"{{i}}\" \n      ></app-list>\n    </div>\n</div>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/board/list/list.component.html":
/*!*************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/board/list/list.component.html ***!
  \*************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n<div class=\"list col custom-col list-drag-component\"  (dragover)=\"allowCardReplacement($event)\" (drop)=\"dropCard($event)\" (mouseleave)=\"update($event)\" id=\"list-{{listIndex}}\"  >\n    <app-context-menu (contextAction)=\"delete()\" ></app-context-menu>\n    <p class=\"list-name\"  [(appContentEdit)]=\"list.name\"></p>\n    <div    id=\"list-one\"  >\n      <app-card-summary  *ngFor=\"let card of this.list.cards;let i = index\" [card]=\"card\" [listIndex]=\"listIndex\" [cardIndex]=\"i\" attr.cardIndex=\"{{i}}\" ></app-card-summary>\n    </div>\n    <h6 class=\"text-center add-new-card\" (click)=\"addNewCard()\" >Add new card...</h6>\n</div>\n  \n\n\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/card/summary/summary.component.html":
/*!******************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/card/summary/summary.component.html ***!
  \******************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"card\" [draggable]=\"'true'\" (dragstart)=\"identifyCardBeingDragged($event)\"   id=\"list-{{listIndex}}-card-{{cardIndex}}\" attr.listIndex=\"{{listIndex}}\" attr.cardIndex=\"{{cardIndex}}\" (mouseleave)=\"update($event)\" (dragover)=\"allowCardDragToBeDropped($event)\"  >\n    <div class=\"card-body\"  [style.background]=\"color\">\n      <h4 class=\"card-title\" [(appContentEdit)]=\"card.header\" [draggable]=\"'false'\" >  </h4>\n      <h6 class=\"text-muted card-subtitle mb-2\" [(appContentEdit)]=\"card.summary\" [draggable]=\"'false'\" ></h6>\n    </div>\n  </div>\n  ");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/common/contextmenu/contextmenu.component.html":
/*!****************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/common/contextmenu/contextmenu.component.html ***!
  \****************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div style=\"position: relative;\">\n    <div class=\"right\" (click)=\"this.show = true\" style=\"line-height: 5px;float: right;cursor: pointer;\">\n      <svg width=\"15\" height=\"5\">\n        <circle cx=\"2\" cy=\"2\" r=\"1.5\" fill=\"grey\"></circle>\n        <circle cx=\"7\" cy=\"2\" r=\"1.5\" fill=\"grey\"></circle>\n        <circle cx=\"12\" cy=\"2\" r=\"1.5\" fill=\"grey\"></circle>\n      </svg>\n    </div>\n    <div *ngIf=\"show\">\n      <div class=\"dropdown-menu dropdown-menu-sm show\" style=\"position: absolute;top: 5px;left: inherit;right: 0px;padding: .15rem 0;margin: .125rem 0 0;font-size: 0.8rem;min-width: 5rem;\">\n        \n        <a class=\"dropdown-item\" href=\"#\" (click)=\"emitCloseEvent()\">Delete</a>\n      </div>\n    </div>\n    <div class=\"clearfix\"></div>\n  </div>\n  ");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/common/header/header.component.html":
/*!******************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/common/header/header.component.html ***!
  \******************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ul class=\"nav-top\">\n    <li><a class=\"nav-active\" href=\"#home\">SIMPLE KANBAN</a></li>\n</ul>\n\n<div class=\"nav-bot\">\n        <li class=\"nav-right\"><a href=\"\">Email: hongkha336@gmail.com</a></li>\n</div>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/common/select-project/select-project.component.html":
/*!**********************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/common/select-project/select-project.component.html ***!
  \**********************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"select-option\">\n<select class=\"browser-default custom-select\" (change)=\"selectOption($event.target.value)\">\n        <option selected>Select the board</option>\n      \n        <option   *ngFor=\"let item of boardNames\" value=\"{{item.id}}\">{{item.name}}</option>\n        \n</select>\n</div>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/common/use-favicon/use-favicon.component.html":
/*!****************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/common/use-favicon/use-favicon.component.html ***!
  \****************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"user_favi\">\n<label class=\"user-favi-name\">demo_account</label>\n<span class=\"cat_circle\">\n        <img src=\"https://dok7xy59qfw9h.cloudfront.net/447/494/926/-39996975-1stscbd-f4rf7tis1ats4da/original/avatar.jpg\">\n </span> \n</div>");

/***/ }),

/***/ "./node_modules/tslib/tslib.es6.js":
/*!*****************************************!*\
  !*** ./node_modules/tslib/tslib.es6.js ***!
  \*****************************************/
/*! exports provided: __extends, __assign, __rest, __decorate, __param, __metadata, __awaiter, __generator, __exportStar, __values, __read, __spread, __spreadArrays, __await, __asyncGenerator, __asyncDelegator, __asyncValues, __makeTemplateObject, __importStar, __importDefault */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__extends", function() { return __extends; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__assign", function() { return __assign; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__rest", function() { return __rest; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__decorate", function() { return __decorate; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__param", function() { return __param; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__metadata", function() { return __metadata; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__awaiter", function() { return __awaiter; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__generator", function() { return __generator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__exportStar", function() { return __exportStar; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__values", function() { return __values; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__read", function() { return __read; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__spread", function() { return __spread; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__spreadArrays", function() { return __spreadArrays; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__await", function() { return __await; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncGenerator", function() { return __asyncGenerator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncDelegator", function() { return __asyncDelegator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncValues", function() { return __asyncValues; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__makeTemplateObject", function() { return __makeTemplateObject; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__importStar", function() { return __importStar; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__importDefault", function() { return __importDefault; });
/*! *****************************************************************************
Copyright (c) Microsoft Corporation. All rights reserved.
Licensed under the Apache License, Version 2.0 (the "License"); you may not use
this file except in compliance with the License. You may obtain a copy of the
License at http://www.apache.org/licenses/LICENSE-2.0

THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE,
MERCHANTABLITY OR NON-INFRINGEMENT.

See the Apache Version 2.0 License for specific language governing permissions
and limitations under the License.
***************************************************************************** */
/* global Reflect, Promise */

var extendStatics = function(d, b) {
    extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return extendStatics(d, b);
};

function __extends(d, b) {
    extendStatics(d, b);
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
}

var __assign = function() {
    __assign = Object.assign || function __assign(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
        }
        return t;
    }
    return __assign.apply(this, arguments);
}

function __rest(s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
}

function __decorate(decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
}

function __param(paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
}

function __metadata(metadataKey, metadataValue) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(metadataKey, metadataValue);
}

function __awaiter(thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
}

function __generator(thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
}

function __exportStar(m, exports) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}

function __values(o) {
    var m = typeof Symbol === "function" && o[Symbol.iterator], i = 0;
    if (m) return m.call(o);
    return {
        next: function () {
            if (o && i >= o.length) o = void 0;
            return { value: o && o[i++], done: !o };
        }
    };
}

function __read(o, n) {
    var m = typeof Symbol === "function" && o[Symbol.iterator];
    if (!m) return o;
    var i = m.call(o), r, ar = [], e;
    try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
    }
    catch (error) { e = { error: error }; }
    finally {
        try {
            if (r && !r.done && (m = i["return"])) m.call(i);
        }
        finally { if (e) throw e.error; }
    }
    return ar;
}

function __spread() {
    for (var ar = [], i = 0; i < arguments.length; i++)
        ar = ar.concat(__read(arguments[i]));
    return ar;
}

function __spreadArrays() {
    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
    for (var r = Array(s), k = 0, i = 0; i < il; i++)
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
            r[k] = a[j];
    return r;
};

function __await(v) {
    return this instanceof __await ? (this.v = v, this) : new __await(v);
}

function __asyncGenerator(thisArg, _arguments, generator) {
    if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
    var g = generator.apply(thisArg, _arguments || []), i, q = [];
    return i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i;
    function verb(n) { if (g[n]) i[n] = function (v) { return new Promise(function (a, b) { q.push([n, v, a, b]) > 1 || resume(n, v); }); }; }
    function resume(n, v) { try { step(g[n](v)); } catch (e) { settle(q[0][3], e); } }
    function step(r) { r.value instanceof __await ? Promise.resolve(r.value.v).then(fulfill, reject) : settle(q[0][2], r); }
    function fulfill(value) { resume("next", value); }
    function reject(value) { resume("throw", value); }
    function settle(f, v) { if (f(v), q.shift(), q.length) resume(q[0][0], q[0][1]); }
}

function __asyncDelegator(o) {
    var i, p;
    return i = {}, verb("next"), verb("throw", function (e) { throw e; }), verb("return"), i[Symbol.iterator] = function () { return this; }, i;
    function verb(n, f) { i[n] = o[n] ? function (v) { return (p = !p) ? { value: __await(o[n](v)), done: n === "return" } : f ? f(v) : v; } : f; }
}

function __asyncValues(o) {
    if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
    var m = o[Symbol.asyncIterator], i;
    return m ? m.call(o) : (o = typeof __values === "function" ? __values(o) : o[Symbol.iterator](), i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i);
    function verb(n) { i[n] = o[n] && function (v) { return new Promise(function (resolve, reject) { v = o[n](v), settle(resolve, reject, v.done, v.value); }); }; }
    function settle(resolve, reject, d, v) { Promise.resolve(v).then(function(v) { resolve({ value: v, done: d }); }, reject); }
}

function __makeTemplateObject(cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};

function __importStar(mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result.default = mod;
    return result;
}

function __importDefault(mod) {
    return (mod && mod.__esModule) ? mod : { default: mod };
}


/***/ }),

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");



const routes = [];
let AppRoutingModule = class AppRoutingModule {
};
AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })
], AppRoutingModule);



/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuY3NzIn0= */");

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let AppComponent = class AppComponent {
    constructor() {
        this.title = 'the-kanban';
    }
};
AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-root',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./app.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")).default]
    })
], AppComponent);



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm2015/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _components_board_board_board_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/board/board/board.component */ "./src/app/components/board/board/board.component.ts");
/* harmony import */ var _components_board_list_list_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./components/board/list/list.component */ "./src/app/components/board/list/list.component.ts");
/* harmony import */ var _components_common_contextmenu_contextmenu_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./components/common/contextmenu/contextmenu.component */ "./src/app/components/common/contextmenu/contextmenu.component.ts");
/* harmony import */ var _directives_common_content_edit_directive__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./directives/common/content-edit.directive */ "./src/app/directives/common/content-edit.directive.ts");
/* harmony import */ var _components_card_summary_summary_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./components/card/summary/summary.component */ "./src/app/components/card/summary/summary.component.ts");
/* harmony import */ var _components_board_header_board_header_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./components/board-header/board-header.component */ "./src/app/components/board-header/board-header.component.ts");
/* harmony import */ var _components_common_header_header_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./components/common/header/header.component */ "./src/app/components/common/header/header.component.ts");
/* harmony import */ var _components_common_select_project_select_project_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./components/common/select-project/select-project.component */ "./src/app/components/common/select-project/select-project.component.ts");
/* harmony import */ var _components_common_use_favicon_use_favicon_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./components/common/use-favicon/use-favicon.component */ "./src/app/components/common/use-favicon/use-favicon.component.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");















let AppModule = class AppModule {
};
AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
        declarations: [
            _app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"],
            _components_board_board_board_component__WEBPACK_IMPORTED_MODULE_5__["BoardComponent"],
            _components_board_list_list_component__WEBPACK_IMPORTED_MODULE_6__["ListComponent"],
            _components_common_contextmenu_contextmenu_component__WEBPACK_IMPORTED_MODULE_7__["ContextmenuComponent"],
            _directives_common_content_edit_directive__WEBPACK_IMPORTED_MODULE_8__["ContentEditDirective"],
            _components_card_summary_summary_component__WEBPACK_IMPORTED_MODULE_9__["SummaryComponent"],
            _components_board_header_board_header_component__WEBPACK_IMPORTED_MODULE_10__["BoardHeaderComponent"],
            _components_common_header_header_component__WEBPACK_IMPORTED_MODULE_11__["HeaderComponent"],
            _components_common_select_project_select_project_component__WEBPACK_IMPORTED_MODULE_12__["SelectProjectComponent"],
            _components_common_use_favicon_use_favicon_component__WEBPACK_IMPORTED_MODULE_13__["UseFaviconComponent"],
        ],
        imports: [
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
            _app_routing_module__WEBPACK_IMPORTED_MODULE_3__["AppRoutingModule"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_14__["HttpClientModule"],
        ],
        providers: [],
        bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]]
    })
], AppModule);



/***/ }),

/***/ "./src/app/components/board-header/board-header.component.css":
/*!********************************************************************!*\
  !*** ./src/app/components/board-header/board-header.component.css ***!
  \********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".favi{\n  float: right;\n  margin-left:auto; margin-right:30px;\n  margin-top: 20px;\n}\n \n\n  .board-name{\n    padding-top: 20px;\n   text-align: center;\n   margin: auto;\n  }\n \n\n  .board-header{\n    position: -webkit-sticky; /* Safari */\n    position: sticky;\n    top: 0;\n    min-height: 100px;\n    z-index: 999;\n\n    background-color:#345664;\n    color:#fff;\n\n  }\n \n\n  .project-select {\n  margin-top: 10px;\n  }\n \n  \n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9ib2FyZC1oZWFkZXIvYm9hcmQtaGVhZGVyLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxZQUFZO0VBQ1osZ0JBQWdCLEVBQUUsaUJBQWlCO0VBQ25DLGdCQUFnQjtBQUNsQjs7O0VBR0U7SUFDRSxpQkFBaUI7R0FDbEIsa0JBQWtCO0dBQ2xCLFlBQVk7RUFDYjs7O0VBQ0E7SUFDRSx3QkFBd0IsRUFBRSxXQUFXO0lBQ3JDLGdCQUFnQjtJQUNoQixNQUFNO0lBQ04saUJBQWlCO0lBQ2pCLFlBQVk7O0lBRVosd0JBQXdCO0lBQ3hCLFVBQVU7O0VBRVo7OztFQUVBO0VBQ0EsZ0JBQWdCO0VBQ2hCIiwiZmlsZSI6InNyYy9hcHAvY29tcG9uZW50cy9ib2FyZC1oZWFkZXIvYm9hcmQtaGVhZGVyLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuZmF2aXtcbiAgZmxvYXQ6IHJpZ2h0O1xuICBtYXJnaW4tbGVmdDphdXRvOyBtYXJnaW4tcmlnaHQ6MzBweDtcbiAgbWFyZ2luLXRvcDogMjBweDtcbn1cbiBcblxuICAuYm9hcmQtbmFtZXtcbiAgICBwYWRkaW5nLXRvcDogMjBweDtcbiAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgIG1hcmdpbjogYXV0bztcbiAgfVxuICAuYm9hcmQtaGVhZGVye1xuICAgIHBvc2l0aW9uOiAtd2Via2l0LXN0aWNreTsgLyogU2FmYXJpICovXG4gICAgcG9zaXRpb246IHN0aWNreTtcbiAgICB0b3A6IDA7XG4gICAgbWluLWhlaWdodDogMTAwcHg7XG4gICAgei1pbmRleDogOTk5O1xuXG4gICAgYmFja2dyb3VuZC1jb2xvcjojMzQ1NjY0O1xuICAgIGNvbG9yOiNmZmY7XG5cbiAgfVxuXG4gIC5wcm9qZWN0LXNlbGVjdCB7XG4gIG1hcmdpbi10b3A6IDEwcHg7XG4gIH1cbiBcbiAgIl19 */");

/***/ }),

/***/ "./src/app/components/board-header/board-header.component.ts":
/*!*******************************************************************!*\
  !*** ./src/app/components/board-header/board-header.component.ts ***!
  \*******************************************************************/
/*! exports provided: BoardHeaderComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BoardHeaderComponent", function() { return BoardHeaderComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var src_app_service_board_board_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/service/board/board.service */ "./src/app/service/board/board.service.ts");
/* harmony import */ var src_app_model_board_board_model__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/model/board/board.model */ "./src/app/model/board/board.model.ts");




let BoardHeaderComponent = class BoardHeaderComponent {
    constructor(boardServive) {
        this.boardServive = boardServive;
        this.boardname = "";
    }
    ngOnInit() {
        this.boardModel = new src_app_model_board_board_model__WEBPACK_IMPORTED_MODULE_3__["BoardModel"]();
        this.boardModel.name = "";
        this.getBoard();
    }
    getBoard() {
        this.boardServive.getBoard().subscribe(rs => {
            this.boardModel = rs;
            if (this.boardModel.name.length == 0) {
                this.boardModel.name = "DEFAULT NAME";
            }
            this.boardname = this.boardModel.name;
        });
    }
    boardChange(name) {
    }
    update(event) {
        if (this.boardModel.name.length == 0)
            this.boardModel.name = "DEFAULT NAME";
        this.boardServive.updateBoard(this.boardModel).subscribe();
    }
};
BoardHeaderComponent.ctorParameters = () => [
    { type: src_app_service_board_board_service__WEBPACK_IMPORTED_MODULE_2__["BoardService"] }
];
BoardHeaderComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-board-header',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./board-header.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/board-header/board-header.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./board-header.component.css */ "./src/app/components/board-header/board-header.component.css")).default]
    })
], BoardHeaderComponent);



/***/ }),

/***/ "./src/app/components/board/board/board.component.css":
/*!************************************************************!*\
  !*** ./src/app/components/board/board/board.component.css ***!
  \************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".text-center.add-new-list:hover {\n    opacity:0.9;\n    color:#40409A;\n  }\n  \n  .text-center.add-new-list {\n    font-size:14px;\n    color:#767676;\n    cursor:pointer;\n    opacity:0.4;\n  }\n  \n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9ib2FyZC9ib2FyZC9ib2FyZC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksV0FBVztJQUNYLGFBQWE7RUFDZjs7RUFFQTtJQUNFLGNBQWM7SUFDZCxhQUFhO0lBQ2IsY0FBYztJQUNkLFdBQVc7RUFDYiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvYm9hcmQvYm9hcmQvYm9hcmQuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi50ZXh0LWNlbnRlci5hZGQtbmV3LWxpc3Q6aG92ZXIge1xuICAgIG9wYWNpdHk6MC45O1xuICAgIGNvbG9yOiM0MDQwOUE7XG4gIH1cbiAgXG4gIC50ZXh0LWNlbnRlci5hZGQtbmV3LWxpc3Qge1xuICAgIGZvbnQtc2l6ZToxNHB4O1xuICAgIGNvbG9yOiM3Njc2NzY7XG4gICAgY3Vyc29yOnBvaW50ZXI7XG4gICAgb3BhY2l0eTowLjQ7XG4gIH1cbiAgIl19 */");

/***/ }),

/***/ "./src/app/components/board/board/board.component.ts":
/*!***********************************************************!*\
  !*** ./src/app/components/board/board/board.component.ts ***!
  \***********************************************************/
/*! exports provided: BoardComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BoardComponent", function() { return BoardComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _model_list_list_model__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../model/list/list.model */ "./src/app/model/list/list.model.ts");
/* harmony import */ var _model_board_board_model__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../model/board/board.model */ "./src/app/model/board/board.model.ts");
/* harmony import */ var src_app_service_list_list_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/service/list/list.service */ "./src/app/service/list/list.service.ts");





let BoardComponent = class BoardComponent {
    constructor(listService) {
        this.listService = listService;
    }
    ngOnInit() {
        this.lists = [];
        this.getList();
    }
    getList() {
        this.listService.getList().subscribe(mlists => this.lists = mlists);
        console.log(this.lists);
    }
    addList() {
        const newList = new _model_list_list_model__WEBPACK_IMPORTED_MODULE_2__["List"]();
        newList.position = this.lists.length + 1;
        newList.name = `NEW LIST`;
        newList.id = newList.position.toString();
        if (this.lists === undefined) {
            this.lists = [];
        }
        this.lists.push(newList);
        this.listService.addList(newList).subscribe();
    }
    moveCardAcrossList(movementInformation) {
        const cardMoved = this.lists[movementInformation.fromListIdx].cards.splice(movementInformation.fromCardIdx, 1);
        this.lists[movementInformation.toListIdx].cards.splice(movementInformation.toCardIdx, 0, ...cardMoved);
    }
    saveBoard() {
        const boardModel = new _model_board_board_model__WEBPACK_IMPORTED_MODULE_3__["BoardModel"]();
        boardModel.lists = this.lists;
    }
    deleteList(listIndex) {
        this.lists.splice(listIndex, 1);
    }
};
BoardComponent.ctorParameters = () => [
    { type: src_app_service_list_list_service__WEBPACK_IMPORTED_MODULE_4__["ListService"] }
];
BoardComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-board',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./board.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/board/board/board.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./board.component.css */ "./src/app/components/board/board/board.component.css")).default]
    })
], BoardComponent);



/***/ }),

/***/ "./src/app/components/board/list/list.component.css":
/*!**********************************************************!*\
  !*** ./src/app/components/board/list/list.component.css ***!
  \**********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".col {\n    background-color: #F5F5F5;\n    margin: 40px;\n    padding: 5px;\n    padding-top: 10px;\n    padding-bottom: 10px;\n    /* border-top: solid 5px blue; */\n    max-width: 300px;\n    \n  }\n  \n  .text-center.add-new-card:hover {\n    opacity:0.9;\n    color:#767676;\n  \n  }\n  \n  .text-center.add-new-card {\n    font-size:14px;\n    color:#A6A6A6;\n    cursor:pointer;\n    opacity:0.4;\n    min-width: 230px;\n    margin-top: 20px;\n  }\n  \n  .list-name{\n    font-weight: bold;\n    text-align: center;\n  }\n  \n  .list{\n    background-color: #e7e9ea;\n\n  }\n\n  \n  \n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9ib2FyZC9saXN0L2xpc3QuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLHlCQUF5QjtJQUN6QixZQUFZO0lBQ1osWUFBWTtJQUNaLGlCQUFpQjtJQUNqQixvQkFBb0I7SUFDcEIsZ0NBQWdDO0lBQ2hDLGdCQUFnQjs7RUFFbEI7O0VBRUE7SUFDRSxXQUFXO0lBQ1gsYUFBYTs7RUFFZjs7RUFFQTtJQUNFLGNBQWM7SUFDZCxhQUFhO0lBQ2IsY0FBYztJQUNkLFdBQVc7SUFDWCxnQkFBZ0I7SUFDaEIsZ0JBQWdCO0VBQ2xCOztFQUVBO0lBQ0UsaUJBQWlCO0lBQ2pCLGtCQUFrQjtFQUNwQjs7RUFFQTtJQUNFLHlCQUF5Qjs7RUFFM0IiLCJmaWxlIjoic3JjL2FwcC9jb21wb25lbnRzL2JvYXJkL2xpc3QvbGlzdC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmNvbCB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogI0Y1RjVGNTtcbiAgICBtYXJnaW46IDQwcHg7XG4gICAgcGFkZGluZzogNXB4O1xuICAgIHBhZGRpbmctdG9wOiAxMHB4O1xuICAgIHBhZGRpbmctYm90dG9tOiAxMHB4O1xuICAgIC8qIGJvcmRlci10b3A6IHNvbGlkIDVweCBibHVlOyAqL1xuICAgIG1heC13aWR0aDogMzAwcHg7XG4gICAgXG4gIH1cbiAgXG4gIC50ZXh0LWNlbnRlci5hZGQtbmV3LWNhcmQ6aG92ZXIge1xuICAgIG9wYWNpdHk6MC45O1xuICAgIGNvbG9yOiM3Njc2NzY7XG4gIFxuICB9XG4gIFxuICAudGV4dC1jZW50ZXIuYWRkLW5ldy1jYXJkIHtcbiAgICBmb250LXNpemU6MTRweDtcbiAgICBjb2xvcjojQTZBNkE2O1xuICAgIGN1cnNvcjpwb2ludGVyO1xuICAgIG9wYWNpdHk6MC40O1xuICAgIG1pbi13aWR0aDogMjMwcHg7XG4gICAgbWFyZ2luLXRvcDogMjBweDtcbiAgfVxuICBcbiAgLmxpc3QtbmFtZXtcbiAgICBmb250LXdlaWdodDogYm9sZDtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIH1cbiAgXG4gIC5saXN0e1xuICAgIGJhY2tncm91bmQtY29sb3I6ICNlN2U5ZWE7XG5cbiAgfVxuXG4gIFxuICAiXX0= */");

/***/ }),

/***/ "./src/app/components/board/list/list.component.ts":
/*!*********************************************************!*\
  !*** ./src/app/components/board/list/list.component.ts ***!
  \*********************************************************/
/*! exports provided: ListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ListComponent", function() { return ListComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _model_card_card_model__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../model/card/card.model */ "./src/app/model/card/card.model.ts");
/* harmony import */ var src_app_model_card_movement__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/model/card/movement */ "./src/app/model/card/movement.ts");
/* harmony import */ var src_app_service_card_card_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/service/card/card.service */ "./src/app/service/card/card.service.ts");
/* harmony import */ var src_app_service_list_list_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/service/list/list.service */ "./src/app/service/list/list.service.ts");







let ListComponent = class ListComponent {
    constructor(elementRef, document, cardService, listSerivce) {
        this.elementRef = elementRef;
        this.document = document;
        this.cardService = cardService;
        this.listSerivce = listSerivce;
        this.moveCardAcrossList = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.newCardAdded = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.deleteList = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.cardCount = 0;
    }
    ngOnInit() {
        this.list.cards = [];
        this.cardService.getCards(this.list.id).subscribe(rec => this.list.cards = rec);
        this.mList = this.list;
        this.mList.cards = [];
    }
    addNewCard() {
        const card = new _model_card_card_model__WEBPACK_IMPORTED_MODULE_3__["Card"](this.list.id, new Date().valueOf() + "", 'header', 'summary', '', 0, "#fff", "");
        if (this.list.cards == undefined)
            this.list.cards = [];
        this.list.cards.push(card);
        this.newCardAdded.emit(card);
        this.cardService.addCard(card).subscribe();
    }
    allowCardReplacement(dragEvent) {
        dragEvent.dataTransfer.dropEffect = 'move';
        dragEvent.preventDefault();
    }
    delete() {
        this.deleteList.emit(this.listIndex);
        this.listSerivce.removeList(this.list.id).subscribe();
        console.log("I deleted list " + this.list.id);
    }
    update(event) {
        this.mList.name = this.list.name;
        this.listSerivce.updateList(this.mList).subscribe();
    }
    dropCard(dragEvent) {
        const data = JSON.parse(dragEvent.dataTransfer.getData('text'));
        const elements = this.document.elementsFromPoint(dragEvent.x, dragEvent.y);
        const cardElementBeingDroppedOn = elements.find(x => x.tagName.toLowerCase() === 'app-card-summary');
        const listElementBeingDroppedOn = elements.find(x => x.tagName.toLowerCase() === 'app-list');
        const listIndexDroppedOn = parseInt(listElementBeingDroppedOn.getAttribute('listIndex'), 10);
        const cardIndexDroppedOn = cardElementBeingDroppedOn === undefined ? undefined :
            parseInt(cardElementBeingDroppedOn.getAttribute('cardIndex'), 10);
        const listIndexDragged = parseInt(data.listIndex, 10);
        const cardIndexDragged = parseInt(data.cardIndex, 10);
        if (listIndexDragged != listIndexDroppedOn) {
            this.moveCardAcrossList.emit(new src_app_model_card_movement__WEBPACK_IMPORTED_MODULE_4__["Movement"](listIndexDragged, listIndexDroppedOn, cardIndexDragged, cardIndexDroppedOn));
        }
    }
};
ListComponent.ctorParameters = () => [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"] },
    { type: Document, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"], args: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["DOCUMENT"],] }] },
    { type: src_app_service_card_card_service__WEBPACK_IMPORTED_MODULE_5__["CardService"] },
    { type: src_app_service_list_list_service__WEBPACK_IMPORTED_MODULE_6__["ListService"] }
];
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], ListComponent.prototype, "list", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], ListComponent.prototype, "listIndex", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])()
], ListComponent.prototype, "moveCardAcrossList", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])()
], ListComponent.prototype, "newCardAdded", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])()
], ListComponent.prototype, "deleteList", void 0);
ListComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-list',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./list.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/board/list/list.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./list.component.css */ "./src/app/components/board/list/list.component.css")).default]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__param"](1, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"])(_angular_common__WEBPACK_IMPORTED_MODULE_2__["DOCUMENT"]))
], ListComponent);



/***/ }),

/***/ "./src/app/components/card/summary/summary.component.css":
/*!***************************************************************!*\
  !*** ./src/app/components/card/summary/summary.component.css ***!
  \***************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".card {\n    /* margin-bottom: 10px; */\n    width: 230px;\n    max-height: 150px;\n    margin: auto;\n    box-shadow: 0 2px 4px 0 rgba(0,0,0,0.2);\n  }\n  \n  .card-title {\n    font-size: 12px;\n    margin-bottom: .35rem;  \n  }\n  \n  .card-body {\n    max-height: 160px;\n  }\n  \n  p.card-text {\n    max-height: 65px;\n    overflow-y: hidden;\n    text-overflow: ellipsis;\n    font-size: 10px;\n    width: 100%;\n  }\n  \n  .text-muted {\n    font-size: 10px;\n  }\n  \n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9jYXJkL3N1bW1hcnkvc3VtbWFyeS5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0kseUJBQXlCO0lBQ3pCLFlBQVk7SUFDWixpQkFBaUI7SUFDakIsWUFBWTtJQUNaLHVDQUF1QztFQUN6Qzs7RUFFQTtJQUNFLGVBQWU7SUFDZixxQkFBcUI7RUFDdkI7O0VBSUE7SUFDRSxpQkFBaUI7RUFDbkI7O0VBQ0E7SUFDRSxnQkFBZ0I7SUFDaEIsa0JBQWtCO0lBQ2xCLHVCQUF1QjtJQUN2QixlQUFlO0lBQ2YsV0FBVztFQUNiOztFQUNBO0lBQ0UsZUFBZTtFQUNqQiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvY2FyZC9zdW1tYXJ5L3N1bW1hcnkuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5jYXJkIHtcbiAgICAvKiBtYXJnaW4tYm90dG9tOiAxMHB4OyAqL1xuICAgIHdpZHRoOiAyMzBweDtcbiAgICBtYXgtaGVpZ2h0OiAxNTBweDtcbiAgICBtYXJnaW46IGF1dG87XG4gICAgYm94LXNoYWRvdzogMCAycHggNHB4IDAgcmdiYSgwLDAsMCwwLjIpO1xuICB9XG4gIFxuICAuY2FyZC10aXRsZSB7XG4gICAgZm9udC1zaXplOiAxMnB4O1xuICAgIG1hcmdpbi1ib3R0b206IC4zNXJlbTsgIFxuICB9XG4gIFxuICBcbiAgXG4gIC5jYXJkLWJvZHkge1xuICAgIG1heC1oZWlnaHQ6IDE2MHB4O1xuICB9XG4gIHAuY2FyZC10ZXh0IHtcbiAgICBtYXgtaGVpZ2h0OiA2NXB4O1xuICAgIG92ZXJmbG93LXk6IGhpZGRlbjtcbiAgICB0ZXh0LW92ZXJmbG93OiBlbGxpcHNpcztcbiAgICBmb250LXNpemU6IDEwcHg7XG4gICAgd2lkdGg6IDEwMCU7XG4gIH1cbiAgLnRleHQtbXV0ZWQge1xuICAgIGZvbnQtc2l6ZTogMTBweDtcbiAgfVxuICAiXX0= */");

/***/ }),

/***/ "./src/app/components/card/summary/summary.component.ts":
/*!**************************************************************!*\
  !*** ./src/app/components/card/summary/summary.component.ts ***!
  \**************************************************************/
/*! exports provided: SummaryComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SummaryComponent", function() { return SummaryComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var src_app_service_card_card_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/service/card/card.service */ "./src/app/service/card/card.service.ts");



let SummaryComponent = class SummaryComponent {
    constructor(servive) {
        this.servive = servive;
        this.color = '#fff';
        this.color = this.get_random_color();
    }
    get_random_color() {
        return "rgb(" + 255 + "," + 251 + "," + 222 + ")";
    }
    ngOnInit() {
        this.card.colID = this.listIndex + 1;
        this.servive.updateCard(this.card).subscribe();
    }
    update(event) {
        this.servive.updateCard(this.card).subscribe();
    }
    identifyCardBeingDragged(dragEvent) {
        dragEvent.dataTransfer.effectAllowed = 'move';
        dragEvent.dataTransfer.dropEffect = 'move';
        const transferObject = {
            'listIndex': this.listIndex,
            'cardIndex': this.cardIndex
        };
        dragEvent.dataTransfer.setData('text', JSON.stringify(transferObject));
    }
    allowCardDragToBeDropped(dragEvent) {
        dragEvent.dataTransfer.dropEffect = 'move';
        dragEvent.preventDefault();
    }
};
SummaryComponent.ctorParameters = () => [
    { type: src_app_service_card_card_service__WEBPACK_IMPORTED_MODULE_2__["CardService"] }
];
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], SummaryComponent.prototype, "card", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], SummaryComponent.prototype, "listIndex", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], SummaryComponent.prototype, "cardIndex", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], SummaryComponent.prototype, "color", void 0);
SummaryComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-card-summary',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./summary.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/card/summary/summary.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./summary.component.css */ "./src/app/components/card/summary/summary.component.css")).default]
    })
], SummaryComponent);



/***/ }),

/***/ "./src/app/components/common/contextmenu/contextmenu.component.css":
/*!*************************************************************************!*\
  !*** ./src/app/components/common/contextmenu/contextmenu.component.css ***!
  \*************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvY29tbW9uL2NvbnRleHRtZW51L2NvbnRleHRtZW51LmNvbXBvbmVudC5jc3MifQ== */");

/***/ }),

/***/ "./src/app/components/common/contextmenu/contextmenu.component.ts":
/*!************************************************************************!*\
  !*** ./src/app/components/common/contextmenu/contextmenu.component.ts ***!
  \************************************************************************/
/*! exports provided: ContextmenuComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ContextmenuComponent", function() { return ContextmenuComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let ContextmenuComponent = class ContextmenuComponent {
    constructor(elementRef) {
        this.elementRef = elementRef;
        this.show = false;
        this.contextAction = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
    }
    ngOnInit() {
    }
    emitCloseEvent() {
        this.contextAction.emit('DELETE');
        this.show = false;
    }
    closeOutClickOutside(event) {
        if (!this.elementRef.nativeElement.contains(event.target)) {
            this.show = false;
        }
    }
};
ContextmenuComponent.ctorParameters = () => [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"] }
];
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])()
], ContextmenuComponent.prototype, "contextAction", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["HostListener"])('document:click', ['$event'])
], ContextmenuComponent.prototype, "closeOutClickOutside", null);
ContextmenuComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-context-menu',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./contextmenu.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/common/contextmenu/contextmenu.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./contextmenu.component.css */ "./src/app/components/common/contextmenu/contextmenu.component.css")).default]
    })
], ContextmenuComponent);



/***/ }),

/***/ "./src/app/components/common/header/header.component.css":
/*!***************************************************************!*\
  !*** ./src/app/components/common/header/header.component.css ***!
  \***************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".nav-top {\n    list-style-type: none;\n    margin: 0;\n    padding: 0;\n    overflow: hidden;\n    background-color: #333;\n    /* position: -webkit-sticky; \n    position: sticky;\n    top: 0; */\n    z-index: 999;\n  }\n\n  .nav-bot{\n    list-style-type: none;\n    margin: 0;\n    padding: 0;\n    overflow: hidden;\n    background-color: #333;\n    position: fixed;\n    bottom: 0;\n    z-index: 999;\n    width: 100%;\n  }\n\n  li {\n    float: left;\n  }\n\n  li a {\n    display: block;\n    color: white;\n    text-align: center;\n    padding: 14px 16px;\n    text-decoration: none;\n  }\n\n  li a:hover {\n    background-color: #111;\n  }\n\n  .nav-active {\n    background-color: #4CAF50;\n  }\n\n  .nav-right{\n      float: right;\n  }\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9jb21tb24vaGVhZGVyL2hlYWRlci5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0kscUJBQXFCO0lBQ3JCLFNBQVM7SUFDVCxVQUFVO0lBQ1YsZ0JBQWdCO0lBQ2hCLHNCQUFzQjtJQUN0Qjs7YUFFUztJQUNULFlBQVk7RUFDZDs7RUFFQTtJQUNFLHFCQUFxQjtJQUNyQixTQUFTO0lBQ1QsVUFBVTtJQUNWLGdCQUFnQjtJQUNoQixzQkFBc0I7SUFDdEIsZUFBZTtJQUNmLFNBQVM7SUFDVCxZQUFZO0lBQ1osV0FBVztFQUNiOztFQUVBO0lBQ0UsV0FBVztFQUNiOztFQUVBO0lBQ0UsY0FBYztJQUNkLFlBQVk7SUFDWixrQkFBa0I7SUFDbEIsa0JBQWtCO0lBQ2xCLHFCQUFxQjtFQUN2Qjs7RUFFQTtJQUNFLHNCQUFzQjtFQUN4Qjs7RUFFQTtJQUNFLHlCQUF5QjtFQUMzQjs7RUFDQTtNQUNJLFlBQVk7RUFDaEIiLCJmaWxlIjoic3JjL2FwcC9jb21wb25lbnRzL2NvbW1vbi9oZWFkZXIvaGVhZGVyLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIubmF2LXRvcCB7XG4gICAgbGlzdC1zdHlsZS10eXBlOiBub25lO1xuICAgIG1hcmdpbjogMDtcbiAgICBwYWRkaW5nOiAwO1xuICAgIG92ZXJmbG93OiBoaWRkZW47XG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzMzMztcbiAgICAvKiBwb3NpdGlvbjogLXdlYmtpdC1zdGlja3k7IFxuICAgIHBvc2l0aW9uOiBzdGlja3k7XG4gICAgdG9wOiAwOyAqL1xuICAgIHotaW5kZXg6IDk5OTtcbiAgfVxuXG4gIC5uYXYtYm90e1xuICAgIGxpc3Qtc3R5bGUtdHlwZTogbm9uZTtcbiAgICBtYXJnaW46IDA7XG4gICAgcGFkZGluZzogMDtcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xuICAgIGJhY2tncm91bmQtY29sb3I6ICMzMzM7XG4gICAgcG9zaXRpb246IGZpeGVkO1xuICAgIGJvdHRvbTogMDtcbiAgICB6LWluZGV4OiA5OTk7XG4gICAgd2lkdGg6IDEwMCU7XG4gIH1cbiAgXG4gIGxpIHtcbiAgICBmbG9hdDogbGVmdDtcbiAgfVxuICBcbiAgbGkgYSB7XG4gICAgZGlzcGxheTogYmxvY2s7XG4gICAgY29sb3I6IHdoaXRlO1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICBwYWRkaW5nOiAxNHB4IDE2cHg7XG4gICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuICB9XG4gIFxuICBsaSBhOmhvdmVyIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMTExO1xuICB9XG4gIFxuICAubmF2LWFjdGl2ZSB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzRDQUY1MDtcbiAgfVxuICAubmF2LXJpZ2h0e1xuICAgICAgZmxvYXQ6IHJpZ2h0O1xuICB9Il19 */");

/***/ }),

/***/ "./src/app/components/common/header/header.component.ts":
/*!**************************************************************!*\
  !*** ./src/app/components/common/header/header.component.ts ***!
  \**************************************************************/
/*! exports provided: HeaderComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HeaderComponent", function() { return HeaderComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let HeaderComponent = class HeaderComponent {
    constructor() { }
    ngOnInit() {
    }
};
HeaderComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-header',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./header.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/common/header/header.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./header.component.css */ "./src/app/components/common/header/header.component.css")).default]
    })
], HeaderComponent);



/***/ }),

/***/ "./src/app/components/common/select-project/select-project.component.css":
/*!*******************************************************************************!*\
  !*** ./src/app/components/common/select-project/select-project.component.css ***!
  \*******************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".select-option{\n    float: left;\n    margin: 10%;\n    min-width: 200px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9jb21tb24vc2VsZWN0LXByb2plY3Qvc2VsZWN0LXByb2plY3QuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLFdBQVc7SUFDWCxXQUFXO0lBQ1gsZ0JBQWdCO0FBQ3BCIiwiZmlsZSI6InNyYy9hcHAvY29tcG9uZW50cy9jb21tb24vc2VsZWN0LXByb2plY3Qvc2VsZWN0LXByb2plY3QuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5zZWxlY3Qtb3B0aW9ue1xuICAgIGZsb2F0OiBsZWZ0O1xuICAgIG1hcmdpbjogMTAlO1xuICAgIG1pbi13aWR0aDogMjAwcHg7XG59Il19 */");

/***/ }),

/***/ "./src/app/components/common/select-project/select-project.component.ts":
/*!******************************************************************************!*\
  !*** ./src/app/components/common/select-project/select-project.component.ts ***!
  \******************************************************************************/
/*! exports provided: SelectProjectComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SelectProjectComponent", function() { return SelectProjectComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let SelectProjectComponent = class SelectProjectComponent {
    constructor() {
        this.boardName = "";
        this.boardChange = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.boardNames = [
            { "id": 1, "name": "Board 1" },
            { "id": 2, "name": "Board 2" },
            { "id": 3, "name": "Board 3" }
        ];
    }
    ngOnInit() {
    }
    selectOption(id) {
        //getted from event
        for (let item of this.boardNames) {
            if (item.id == id) {
                this.boardName = item.name;
                console.log(this.boardName);
                this.boardChange.emit(this.boardName);
                break;
            }
        }
    }
};
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])()
], SelectProjectComponent.prototype, "boardChange", void 0);
SelectProjectComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-select-project',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./select-project.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/common/select-project/select-project.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./select-project.component.css */ "./src/app/components/common/select-project/select-project.component.css")).default]
    })
], SelectProjectComponent);



/***/ }),

/***/ "./src/app/components/common/use-favicon/use-favicon.component.css":
/*!*************************************************************************!*\
  !*** ./src/app/components/common/use-favicon/use-favicon.component.css ***!
  \*************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".cat_circle {\nfloat: right;\n  border: 3px solid #7E9CC2;\n  border-radius: 50%;\n  width: 50px;\n  height: 50px;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\n\n.cat_circle img {\n  width: 45px;\n  -o-object-fit: cover;\n     object-fit: cover;\n  height: 45px;\n  border-radius: 50%;\n  float: right;\n}\n\n.user-favi{\n  display: flex;\n}\n\n.user-favi-name{\n\n  margin-top: 10px;\n  margin-right: 15px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9jb21tb24vdXNlLWZhdmljb24vdXNlLWZhdmljb24uY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtBQUNBLFlBQVk7RUFDVix5QkFBeUI7RUFDekIsa0JBQWtCO0VBQ2xCLFdBQVc7RUFDWCxZQUFZO0VBQ1osYUFBYTtFQUNiLHVCQUF1QjtFQUN2QixtQkFBbUI7QUFDckI7O0FBRUE7RUFDRSxXQUFXO0VBQ1gsb0JBQWlCO0tBQWpCLGlCQUFpQjtFQUNqQixZQUFZO0VBQ1osa0JBQWtCO0VBQ2xCLFlBQVk7QUFDZDs7QUFDQTtFQUNFLGFBQWE7QUFDZjs7QUFDQTs7RUFFRSxnQkFBZ0I7RUFDaEIsa0JBQWtCO0FBQ3BCIiwiZmlsZSI6InNyYy9hcHAvY29tcG9uZW50cy9jb21tb24vdXNlLWZhdmljb24vdXNlLWZhdmljb24uY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5jYXRfY2lyY2xlIHtcbmZsb2F0OiByaWdodDtcbiAgYm9yZGVyOiAzcHggc29saWQgIzdFOUNDMjtcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xuICB3aWR0aDogNTBweDtcbiAgaGVpZ2h0OiA1MHB4O1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbn1cblxuLmNhdF9jaXJjbGUgaW1nIHtcbiAgd2lkdGg6IDQ1cHg7XG4gIG9iamVjdC1maXQ6IGNvdmVyO1xuICBoZWlnaHQ6IDQ1cHg7XG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgZmxvYXQ6IHJpZ2h0O1xufVxuLnVzZXItZmF2aXtcbiAgZGlzcGxheTogZmxleDtcbn1cbi51c2VyLWZhdmktbmFtZXtcblxuICBtYXJnaW4tdG9wOiAxMHB4O1xuICBtYXJnaW4tcmlnaHQ6IDE1cHg7XG59Il19 */");

/***/ }),

/***/ "./src/app/components/common/use-favicon/use-favicon.component.ts":
/*!************************************************************************!*\
  !*** ./src/app/components/common/use-favicon/use-favicon.component.ts ***!
  \************************************************************************/
/*! exports provided: UseFaviconComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UseFaviconComponent", function() { return UseFaviconComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let UseFaviconComponent = class UseFaviconComponent {
    constructor() { }
    ngOnInit() {
    }
};
UseFaviconComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-use-favicon',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./use-favicon.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/common/use-favicon/use-favicon.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./use-favicon.component.css */ "./src/app/components/common/use-favicon/use-favicon.component.css")).default]
    })
], UseFaviconComponent);



/***/ }),

/***/ "./src/app/directives/common/content-edit.directive.ts":
/*!*************************************************************!*\
  !*** ./src/app/directives/common/content-edit.directive.ts ***!
  \*************************************************************/
/*! exports provided: ContentEditDirective */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ContentEditDirective", function() { return ContentEditDirective; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let ContentEditDirective = class ContentEditDirective {
    constructor(el, renderer2) {
        this.el = el;
        this.renderer2 = renderer2;
        this.appContentEditChange = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.ignoreChange = false;
    }
    ngOnInit() {
        this.makeContentEditable();
    }
    exitContentEditable($event) {
        this.el.nativeElement.blur();
        return false;
    }
    exitContentEditableWithoutChanges($event) {
        this.ignoreChange = true;
        this.el.nativeElement.blur();
        return false;
    }
    propagateChange() {
        if (!this.ignoreChange) {
            this.appContentEditChange.emit(this.el.nativeElement.innerText);
        }
        else {
            this.el.nativeElement.innerText = this.appContentEdit;
        }
        this.ignoreChange = false;
        this.exitChange();
    }
    exitChange() {
        this.renderer2.setAttribute(this.el.nativeElement, 'contenteditable', 'false');
        this.renderer2.removeClass(this.el.nativeElement, 'inline-edit');
        //  this.cardServices.updateCard(this)
    }
    makeContentEditable() {
        this.renderer2.appendChild(this.el.nativeElement, this.renderer2.createText(this.appContentEdit));
        this.renderer2.listen(this.el.nativeElement, 'dblclick', () => {
            this.renderer2.setAttribute(this.el.nativeElement, 'contenteditable', 'true');
            this.renderer2.addClass(this.el.nativeElement, 'inline-edit');
            this.el.nativeElement.focus();
        });
    }
};
ContentEditDirective.ctorParameters = () => [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"] },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"] }
];
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], ContentEditDirective.prototype, "appContentEdit", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])()
], ContentEditDirective.prototype, "appContentEditChange", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["HostListener"])('keydown.enter', [])
], ContentEditDirective.prototype, "exitContentEditable", null);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["HostListener"])('keydown.escape', [])
], ContentEditDirective.prototype, "exitContentEditableWithoutChanges", null);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["HostListener"])('blur', [])
], ContentEditDirective.prototype, "propagateChange", null);
ContentEditDirective = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Directive"])({
        selector: '[appContentEdit]'
    })
], ContentEditDirective);



/***/ }),

/***/ "./src/app/model/board/board.model.ts":
/*!********************************************!*\
  !*** ./src/app/model/board/board.model.ts ***!
  \********************************************/
/*! exports provided: BoardModel */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BoardModel", function() { return BoardModel; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");

class BoardModel {
    constructor() {
    }
}


/***/ }),

/***/ "./src/app/model/card/card.model.ts":
/*!******************************************!*\
  !*** ./src/app/model/card/card.model.ts ***!
  \******************************************/
/*! exports provided: Card */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Card", function() { return Card; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");

class Card {
    constructor(colID, id, header, summary, description, updateTime, ticketColor, asigneeTo) {
        this.colID = colID;
        this.id = id;
        this.header = header;
        this.summary = summary;
        this.description = description;
        this.updateTime = updateTime;
        this.ticketColor = ticketColor;
        this.asigneeTo = asigneeTo;
    }
}


/***/ }),

/***/ "./src/app/model/card/movement.ts":
/*!****************************************!*\
  !*** ./src/app/model/card/movement.ts ***!
  \****************************************/
/*! exports provided: Movement */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Movement", function() { return Movement; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");

class Movement {
    constructor(fromListIdx, toListIdx, fromCardIdx, toCardIdx) {
        this.fromListIdx = fromListIdx;
        this.toListIdx = toListIdx;
        this.fromCardIdx = fromCardIdx;
        this.toCardIdx = toCardIdx;
    }
}


/***/ }),

/***/ "./src/app/model/list/list.model.ts":
/*!******************************************!*\
  !*** ./src/app/model/list/list.model.ts ***!
  \******************************************/
/*! exports provided: List */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "List", function() { return List; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");

class List {
    constructor() {
        this.cards = [];
        this.cards = [];
    }
    addCard(card) {
        if (this.isCardEmpty()) {
            this.cards = [];
        }
        this.cards.push(card);
    }
    removeCard(id) {
        if (this.isCardEmpty()) {
            return null;
        }
        const cardIndex = this.cards.findIndex(x => x.id === id);
        if (cardIndex > -1) {
            const cardInterfaces = this.cards.splice(cardIndex, 1);
            return cardInterfaces[0];
        }
        return null;
    }
    isCardEmpty() {
        return this.cards === undefined || this.cards === null;
    }
}


/***/ }),

/***/ "./src/app/service/board/board.service.ts":
/*!************************************************!*\
  !*** ./src/app/service/board/board.service.ts ***!
  \************************************************/
/*! exports provided: BoardService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BoardService", function() { return BoardService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");



let BoardService = class BoardService {
    constructor(http) {
        this.http = http;
        this.URL = "https://api.kanban.lazycoder.xyz/board/1";
    }
    getBoard() {
        return this.http.get(this.URL).pipe();
    }
    updateBoard(board) {
        const httpOptions = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({ 'Content-Type': 'application/json' })
        };
        return this.http.put(this.URL, board, httpOptions).pipe();
    }
};
BoardService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }
];
BoardService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    })
], BoardService);



/***/ }),

/***/ "./src/app/service/card/card.service.ts":
/*!**********************************************!*\
  !*** ./src/app/service/card/card.service.ts ***!
  \**********************************************/
/*! exports provided: CardService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CardService", function() { return CardService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");



let CardService = class CardService {
    constructor(http) {
        this.http = http;
        this.MAINURL = "https://api.kanban.lazycoder.xyz/";
        this.URL1 = this.MAINURL + "columnsticket/";
        this.URL2 = this.MAINURL + "ticket";
    }
    getCards(colID) {
        return this.http.get(this.URL1 + colID).pipe();
    }
    updateCard(card) {
        const httpOptions = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({ 'Content-Type': 'application/json' })
        };
        return this.http.put(`${this.URL2}/${card.id}`, card, httpOptions).pipe();
    }
    addCard(card) {
        console.log(card);
        const httpOptions = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({ 'Content-Type': 'application/json' })
        };
        return this.http.post(this.URL2, card, httpOptions).pipe();
    }
};
CardService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }
];
CardService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    })
], CardService);



/***/ }),

/***/ "./src/app/service/list/list.service.ts":
/*!**********************************************!*\
  !*** ./src/app/service/list/list.service.ts ***!
  \**********************************************/
/*! exports provided: ListService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ListService", function() { return ListService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");



let ListService = class ListService {
    constructor(http) {
        this.http = http;
        this.GET_COLUMN_URL = "https://api.kanban.lazycoder.xyz/column";
    }
    getList() {
        return this.http.get(this.GET_COLUMN_URL).pipe();
    }
    addList(col) {
        const httpOptions = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({ 'Content-Type': 'application/json' })
        };
        return this.http.post(this.GET_COLUMN_URL, col, httpOptions).pipe();
    }
    updateList(list) {
        const httpOptions = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({ 'Content-Type': 'application/json' })
        };
        return this.http.put(`${this.GET_COLUMN_URL}/${list.id}`, list, httpOptions).pipe();
    }
    removeList(id) {
        const httpOptions = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({ 'Content-Type': 'application/json' })
        };
        return this.http.delete(this.GET_COLUMN_URL + "/" + id, httpOptions).pipe();
    }
};
ListService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }
];
ListService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    })
], ListService);



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

const environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm2015/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");





if (_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_2__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_3__["AppModule"])
    .catch(err => console.error(err));


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /Volumes/Macintosh Data/GITHUB/NEWTECH-PROJECT/src/main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main-es2015.js.map