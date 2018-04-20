webpackJsonp(["ui-features.module"],{

/***/ "../../../../../src/app/pages/account.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Account; });
var Account = /** @class */ (function () {
    function Account() {
    }
    return Account;
}());



/***/ }),

/***/ "../../../../../src/app/pages/ui-features/buttons/action-groups/action-groups.component.html":
/***/ (function(module, exports) {

module.exports = "<nb-card>\r\n  <nb-card-body>\r\n    <div class=\"action-groups-header\">\r\n      Action Groups\r\n    </div>\r\n    <nb-actions size=\"medium\">\r\n      <nb-action icon=\"nb-menu\"></nb-action>\r\n      <nb-action icon=\"nb-search\"></nb-action>\r\n      <nb-action icon=\"nb-email\"></nb-action>\r\n      <nb-action disabled icon=\"nb-notifications\"></nb-action>\r\n      <nb-action>\r\n        <nb-user name=\"Han Solo\"></nb-user>\r\n      </nb-action>\r\n      <nb-action icon=\"nb-gear\"></nb-action>\r\n    </nb-actions>\r\n  </nb-card-body>\r\n</nb-card>\r\n"

/***/ }),

/***/ "../../../../../src/app/pages/ui-features/buttons/action-groups/action-groups.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports
exports.push([module.i, "@import url(https://fonts.googleapis.com/css?family=Nixie+One);", ""]);

// module
exports.push([module.i, "/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n/**\n * This is a starting point where we declare the maps of themes and globally available functions/mixins\n */\n/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n/**\n * This mixin generates keyfames.\n * Because of all keyframes can't be scoped,\n * we need to puts unique name in each btn-pulse call.\n */\n/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n/**\n * This mixin generates keyfames.\n * Because of all keyframes can't be scoped,\n * we need to puts unique name in each btn-pulse call.\n */\n/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n/**\n * This mixin generates keyfames.\n * Because of all keyframes can't be scoped,\n * we need to puts unique name in each btn-pulse call.\n */\n/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n/**\n * This mixin generates keyfames.\n * Because of all keyframes can't be scoped,\n * we need to puts unique name in each btn-pulse call.\n */\n/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n:host-context(.nb-theme-default) nb-card-body {\n  display: -ms-flexbox;\n  display: flex;\n  -ms-flex-align: center;\n      align-items: center; }\n\n:host-context(.nb-theme-default) .action-groups-header {\n  -ms-flex-preferred-size: 20%;\n      flex-basis: 20%;\n  color: #2a2a2a;\n  font-family: \"Nixie One\";\n  font-size: 1.125rem;\n  font-weight: 600; }\n\n:host-context(.nb-theme-default) .nb-actions {\n  -ms-flex-preferred-size: 80%;\n      flex-basis: 80%; }\n\n@media (max-width: 767px) {\n  :host-context(.nb-theme-default) nb-card-body {\n    -ms-flex-direction: column;\n        flex-direction: column;\n    -ms-flex-align: start;\n        align-items: flex-start;\n    padding: 0.75rem; }\n    :host-context(.nb-theme-default) nb-card-body .action-groups-header {\n      margin: 0 0 0.5rem 0.25rem; }\n  :host-context(.nb-theme-default) nb-action {\n    padding: 0 0.5rem; }\n    :host-context(.nb-theme-default) nb-action /deep/ .control-icon {\n      font-size: 1.75rem; }\n  :host-context(.nb-theme-default) nb-user /deep/ .user-container {\n    font-size: 0.875rem; }\n  :host-context(.nb-theme-default) nb-user /deep/ .user-picture {\n    height: 1.75rem;\n    width: 1.75rem; } }\n\n@media (max-width: 399px) {\n  :host-context(.nb-theme-default) nb-action {\n    padding: 0 0.375rem; }\n    :host-context(.nb-theme-default) nb-action /deep/ .control-icon {\n      font-size: 1.5rem; }\n  :host-context(.nb-theme-default) nb-user /deep/ .user-container {\n    font-size: 0.75rem; }\n  :host-context(.nb-theme-default) nb-user /deep/ .user-picture {\n    height: 1.5rem;\n    width: 1.5rem; }\n  :host-context(.nb-theme-default) nb-card-body {\n    padding-left: 0;\n    padding-right: 0; } }\n\n:host-context(.nb-theme-cosmic) nb-card-body {\n  display: -ms-flexbox;\n  display: flex;\n  -ms-flex-align: center;\n      align-items: center; }\n\n:host-context(.nb-theme-cosmic) .action-groups-header {\n  -ms-flex-preferred-size: 20%;\n      flex-basis: 20%;\n  color: #ffffff;\n  font-family: \"Nixie One\";\n  font-size: 1.125rem;\n  font-weight: 500; }\n\n:host-context(.nb-theme-cosmic) .nb-actions {\n  -ms-flex-preferred-size: 80%;\n      flex-basis: 80%; }\n\n@media (max-width: 767px) {\n  :host-context(.nb-theme-cosmic) nb-card-body {\n    -ms-flex-direction: column;\n        flex-direction: column;\n    -ms-flex-align: start;\n        align-items: flex-start;\n    padding: 0.75rem; }\n    :host-context(.nb-theme-cosmic) nb-card-body .action-groups-header {\n      margin: 0 0 0.5rem 0.25rem; }\n  :host-context(.nb-theme-cosmic) nb-action {\n    padding: 0 0.5rem; }\n    :host-context(.nb-theme-cosmic) nb-action /deep/ .control-icon {\n      font-size: 1.75rem; }\n  :host-context(.nb-theme-cosmic) nb-user /deep/ .user-container {\n    font-size: 0.875rem; }\n  :host-context(.nb-theme-cosmic) nb-user /deep/ .user-picture {\n    height: 1.75rem;\n    width: 1.75rem; } }\n\n@media (max-width: 399px) {\n  :host-context(.nb-theme-cosmic) nb-action {\n    padding: 0 0.375rem; }\n    :host-context(.nb-theme-cosmic) nb-action /deep/ .control-icon {\n      font-size: 1.5rem; }\n  :host-context(.nb-theme-cosmic) nb-user /deep/ .user-container {\n    font-size: 0.75rem; }\n  :host-context(.nb-theme-cosmic) nb-user /deep/ .user-picture {\n    height: 1.5rem;\n    width: 1.5rem; }\n  :host-context(.nb-theme-cosmic) nb-card-body {\n    padding-left: 0;\n    padding-right: 0; } }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/pages/ui-features/buttons/action-groups/action-groups.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ActionGroupsComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var ActionGroupsComponent = /** @class */ (function () {
    function ActionGroupsComponent() {
    }
    ActionGroupsComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'ngx-action-groups',
            styles: [__webpack_require__("../../../../../src/app/pages/ui-features/buttons/action-groups/action-groups.component.scss")],
            template: __webpack_require__("../../../../../src/app/pages/ui-features/buttons/action-groups/action-groups.component.html"),
        })
    ], ActionGroupsComponent);
    return ActionGroupsComponent;
}());



/***/ }),

/***/ "../../../../../src/app/pages/ui-features/buttons/block-level-buttons/block-level-buttons.component.html":
/***/ (function(module, exports) {

module.exports = "<nb-card>\r\n  <nb-card-header>Block Level Buttons</nb-card-header>\r\n  <nb-card-body>\r\n    <div class=\"row block-level-buttons\">\r\n      <div class=\"col-md-12\">\r\n        <div class=\"btn-group btn-group-full-width\" role=\"group\">\r\n          <button type=\"button\" class=\"btn btn-primary btn-group-icon btn-group-divider btn-fixed\">\r\n            <i class=\"nb-home\"></i>\r\n          </button>\r\n          <button type=\"button\" class=\"btn btn-primary\">Icon Block Button</button>\r\n        </div>\r\n        <button type=\"button\" class=\"btn btn-outline-primary btn-block\">Block Button</button>\r\n      </div>\r\n    </div>\r\n  </nb-card-body>\r\n</nb-card>\r\n"

/***/ }),

/***/ "../../../../../src/app/pages/ui-features/buttons/block-level-buttons/block-level-buttons.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BlockLevelButtonsComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var BlockLevelButtonsComponent = /** @class */ (function () {
    function BlockLevelButtonsComponent() {
    }
    BlockLevelButtonsComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'ngx-block-level-buttons',
            template: __webpack_require__("../../../../../src/app/pages/ui-features/buttons/block-level-buttons/block-level-buttons.component.html"),
        })
    ], BlockLevelButtonsComponent);
    return BlockLevelButtonsComponent;
}());



/***/ }),

/***/ "../../../../../src/app/pages/ui-features/buttons/button-groups/button-groups.component.html":
/***/ (function(module, exports) {

module.exports = "<nb-card>\r\n  <nb-card-header>Button Groups</nb-card-header>\r\n  <nb-card-body>\r\n    <div class=\"row\">\r\n      <div class=\"col-md-12\">\r\n        <div class=\"example-container toggle-types\">\r\n          <div class=\"container-title\">Toggle Types</div>\r\n          <div [(ngModel)]=\"radioModel\" ngbRadioGroup\r\n               class=\"btn-group btn-toggle-group btn-outline-toggle-group btn-group-full-width btn-toggle-radio-group\">\r\n            <label ngbButtonLabel class=\"btn btn-outline-primary\">\r\n              <input ngbButton type=\"radio\" value=\"left\"> Left\r\n            </label>\r\n            <label ngbButtonLabel class=\"btn btn-outline-primary\">\r\n              <input ngbButton type=\"radio\" value=\"middle\"> Middle\r\n            </label>\r\n            <label ngbButtonLabel class=\"btn btn-outline-primary\">\r\n              <input ngbButton type=\"radio\" value=\"right\"> Right\r\n            </label>\r\n          </div>\r\n          <div class=\"btn-group btn-toggle-group btn-group-full-width\" data-toggle=\"buttons\">\r\n            <label ngbButtonLabel class=\"btn btn-primary\" [class.active]=\"checkboxModel.left\">\r\n              <input ngbButton type=\"checkbox\" [(ngModel)]=\"checkboxModel.left\"> Left\r\n            </label>\r\n            <label ngbButtonLabel class=\"btn btn-primary\" [class.active]=\"checkboxModel.middle\">\r\n              <input ngbButton type=\"checkbox\" [(ngModel)]=\"checkboxModel.middle\"> Middle\r\n            </label>\r\n            <label ngbButtonLabel class=\"btn btn-primary\" [class.active]=\"checkboxModel.right\">\r\n              <input ngbButton type=\"checkbox\" [(ngModel)]=\"checkboxModel.right\"> Right\r\n            </label>\r\n          </div>\r\n        </div>\r\n        <div class=\"example-container toolbars-container\">\r\n          <div class=\"pagination-container\">\r\n            <div class=\"container-title\">Pagination</div>\r\n            <div class=\"btn-group btn-toggle-group btn-outline-toggle-group\" data-toggle=\"buttons\"\r\n                 [(ngModel)]=\"paginationModel\" ngbRadioGroup>\r\n              <label ngbButtonLabel class=\"btn btn-outline-success\">\r\n                <input ngbButton type=\"radio\" [value]=\"1\"> 1\r\n              </label>\r\n              <label ngbButtonLabel class=\"btn btn-outline-success\">\r\n                <input ngbButton type=\"radio\" [value]=\"2\"> 2\r\n              </label>\r\n              <label ngbButtonLabel class=\"btn btn-outline-success\">\r\n                <input ngbButton type=\"radio\" [value]=\"3\"> 3\r\n              </label>\r\n              <label ngbButtonLabel class=\"btn btn-outline-success\">\r\n                <input ngbButton type=\"radio\" [value]=\"4\"> 4\r\n              </label>\r\n              <label ngbButtonLabel class=\"btn btn-outline-success\">\r\n                <input ngbButton type=\"radio\" [value]=\"5\"> 5\r\n              </label>\r\n            </div>\r\n          </div>\r\n\r\n          <div class=\"icon-toolbar-container\">\r\n            <div class=\"container-title\">Icon Toolbar</div>\r\n            <div class=\"btn-group btn-toggle-group\" data-toggle=\"buttons\">\r\n              <label ngbButtonLabel class=\"btn btn-success\" [class.active]=\"iconToolbarModel.one\">\r\n                <input ngbButton type=\"checkbox\" [(ngModel)]=\"iconToolbarModel.one\"> 1\r\n              </label>\r\n              <label ngbButtonLabel class=\"btn btn-success\" [class.active]=\"iconToolbarModel.two\">\r\n                <input ngbButton type=\"checkbox\" [(ngModel)]=\"iconToolbarModel.two\"> 2\r\n              </label>\r\n              <label ngbButtonLabel class=\"btn btn-success\" [class.active]=\"iconToolbarModel.three\">\r\n                <input ngbButton type=\"checkbox\" [(ngModel)]=\"iconToolbarModel.three\"> 3\r\n              </label>\r\n              <label ngbButtonLabel class=\"btn btn-success\" [class.active]=\"iconToolbarModel.four\">\r\n                <input ngbButton type=\"checkbox\" [(ngModel)]=\"iconToolbarModel.four\"> 4\r\n              </label>\r\n              <label ngbButtonLabel class=\"btn btn-success\" [class.active]=\"iconToolbarModel.five\">\r\n                <input ngbButton type=\"checkbox\" [(ngModel)]=\"iconToolbarModel.five\"> 5\r\n              </label>\r\n            </div>\r\n          </div>\r\n        </div>\r\n        <div class=\"example-container\">\r\n          <div class=\"container-title divided-button-group\">Divided Button Group</div>\r\n          <div class=\"btn-group btn-divided-group btn-outline-divided-group btn-group-full-width btn-divided-checkbox-group \"\r\n            data-toggle=\"buttons\">\r\n            <label ngbButtonLabel class=\"btn btn-outline-success btn-icon\" [class.active]=\"dividedCheckboxModel.monday\">\r\n              <input ngbButton type=\"checkbox\" [(ngModel)]=\"dividedCheckboxModel.monday\"> <i\r\n              class=\"nb-arrow-thin-down\"></i>\r\n            </label>\r\n            <label ngbButtonLabel class=\"btn btn-outline-success btn-icon\" [class.active]=\"dividedCheckboxModel.tuesday\">\r\n              <input ngbButton type=\"checkbox\" [(ngModel)]=\"dividedCheckboxModel.tuesday\"> <i\r\n              class=\"nb-arrow-thin-up\"></i>\r\n            </label>\r\n            <label ngbButtonLabel class=\"btn btn-outline-success btn-icon\" [class.active]=\"dividedCheckboxModel.wednesday\">\r\n              <input ngbButton type=\"checkbox\" [(ngModel)]=\"dividedCheckboxModel.wednesday\"> <i class=\"nb-arrow-thin-left\"></i>\r\n            </label>\r\n            <label ngbButtonLabel class=\"btn btn-outline-success btn-icon\" [class.active]=\"dividedCheckboxModel.thursday\">\r\n              <input ngbButton type=\"checkbox\" [(ngModel)]=\"dividedCheckboxModel.thursday\"> <i\r\n              class=\"nb-arrow-thin-right\"></i>\r\n            </label>\r\n            <label ngbButtonLabel class=\"btn btn-outline-success btn-icon\" [class.active]=\"dividedCheckboxModel.friday\">\r\n              <input ngbButton type=\"checkbox\" [(ngModel)]=\"dividedCheckboxModel.friday\"> <i class=\"nb-arrow-left\"></i>\r\n            </label>\r\n            <label ngbButtonLabel class=\"btn btn-outline-success btn-icon\" [class.active]=\"dividedCheckboxModel.saturday\">\r\n              <input ngbButton type=\"checkbox\" [(ngModel)]=\"dividedCheckboxModel.saturday\"> <i\r\n              class=\"nb-arrow-right\"></i>\r\n            </label>\r\n          </div>\r\n        </div>\r\n        <div class=\"example-container\">\r\n          <div class=\"container-title\">Divided Button Group</div>\r\n          <div class=\"row\">\r\n            <div [(ngModel)]=\"dividedButtonGroupOne\" ngbRadioGroup\r\n                 class=\"btn-group btn-divided-group btn-outline-divided-group btn-group-full-width col-md-12\">\r\n              <label ngbButtonLabel class=\"btn btn-outline-primary\">\r\n                <input ngbButton type=\"radio\" value=\"left\"> Left\r\n              </label>\r\n              <label ngbButtonLabel class=\"btn btn-outline-primary\">\r\n                <input ngbButton type=\"radio\" value=\"middle\"> Middle\r\n              </label>\r\n              <label ngbButtonLabel class=\"btn btn-outline-primary\">\r\n                <input ngbButton type=\"radio\" value=\"right\"> Right\r\n              </label>\r\n            </div>\r\n          </div>\r\n          <div class=\"btn-group btn-divided-group btn-group-full-width\" data-toggle=\"buttons\">\r\n            <label ngbButtonLabel class=\"btn btn-primary\" [class.active]=\"dividedButtonGroupTwo.left\">\r\n              <input ngbButton type=\"checkbox\" [(ngModel)]=\"dividedButtonGroupTwo.left\"> Left\r\n            </label>\r\n            <label ngbButtonLabel class=\"btn btn-primary\" [class.active]=\"dividedButtonGroupTwo.middle\">\r\n              <input ngbButton type=\"checkbox\" [(ngModel)]=\"dividedButtonGroupTwo.middle\"> Middle\r\n            </label>\r\n            <label ngbButtonLabel class=\"btn btn-primary\" [class.active]=\"dividedButtonGroupTwo.right\">\r\n              <input ngbButton type=\"checkbox\" [(ngModel)]=\"dividedButtonGroupTwo.right\"> Right\r\n            </label>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </nb-card-body>\r\n</nb-card>\r\n"

/***/ }),

/***/ "../../../../../src/app/pages/ui-features/buttons/button-groups/button-groups.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports
exports.push([module.i, "@import url(https://fonts.googleapis.com/css?family=Nixie+One);", ""]);

// module
exports.push([module.i, "/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n/**\n * This is a starting point where we declare the maps of themes and globally available functions/mixins\n */\n/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n/**\n * This mixin generates keyfames.\n * Because of all keyframes can't be scoped,\n * we need to puts unique name in each btn-pulse call.\n */\n/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n/**\n * This mixin generates keyfames.\n * Because of all keyframes can't be scoped,\n * we need to puts unique name in each btn-pulse call.\n */\n/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n/**\n * This mixin generates keyfames.\n * Because of all keyframes can't be scoped,\n * we need to puts unique name in each btn-pulse call.\n */\n/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n/**\n * This mixin generates keyfames.\n * Because of all keyframes can't be scoped,\n * we need to puts unique name in each btn-pulse call.\n */\n/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n:host-context(.nb-theme-default) .toolbars-container {\n  display: -ms-flexbox;\n  display: flex;\n  -ms-flex-direction: column;\n      flex-direction: column; }\n\n:host-context(.nb-theme-default) .pagination-container {\n  margin-right: 1rem; }\n  :host-context(.nb-theme-default) .pagination-container .btn-group > .btn {\n    padding-left: 1.125rem;\n    padding-right: 1.125rem; }\n\n:host-context(.nb-theme-default) .icon-toolbar-container .btn-group > .btn {\n  padding-left: 1.125rem;\n  padding-right: 1.125rem; }\n\n:host-context(.nb-theme-default) .toggle-types .btn-toggle-radio-group {\n  margin-bottom: 1rem; }\n\n:host-context(.nb-theme-default) .divided-button-group .btn-divided-checkbox-group {\n  margin-bottom: 1rem;\n  -ms-flex-wrap: wrap;\n      flex-wrap: wrap; }\n\n:host-context(.nb-theme-default) .example-container:not(:last-child) {\n  margin-bottom: 1.5rem; }\n\n:host-context(.nb-theme-default) .example-container > div:not(:last-child) {\n  margin-bottom: 1rem; }\n\n:host-context(.nb-theme-default) .example-container > .btn-divided-checkbox-group {\n  -ms-flex-wrap: wrap;\n      flex-wrap: wrap; }\n  :host-context(.nb-theme-default) .example-container > .btn-divided-checkbox-group > label {\n    -ms-flex-preferred-size: 10%;\n        flex-basis: 10%;\n    margin: 0 0.25rem 0.5rem 0; }\n\n@media (max-width: 767px) {\n  :host-context(.nb-theme-default) .btn {\n    padding: 0.75rem 0.7rem; } }\n\n:host-context(.nb-theme-cosmic) .toolbars-container {\n  display: -ms-flexbox;\n  display: flex;\n  -ms-flex-direction: column;\n      flex-direction: column; }\n\n:host-context(.nb-theme-cosmic) .pagination-container {\n  margin-right: 1rem; }\n  :host-context(.nb-theme-cosmic) .pagination-container .btn-group > .btn {\n    padding-left: 1.125rem;\n    padding-right: 1.125rem; }\n\n:host-context(.nb-theme-cosmic) .icon-toolbar-container .btn-group > .btn {\n  padding-left: 1.125rem;\n  padding-right: 1.125rem; }\n\n:host-context(.nb-theme-cosmic) .toggle-types .btn-toggle-radio-group {\n  margin-bottom: 1rem; }\n\n:host-context(.nb-theme-cosmic) .divided-button-group .btn-divided-checkbox-group {\n  margin-bottom: 1rem;\n  -ms-flex-wrap: wrap;\n      flex-wrap: wrap; }\n\n:host-context(.nb-theme-cosmic) .example-container:not(:last-child) {\n  margin-bottom: 1.5rem; }\n\n:host-context(.nb-theme-cosmic) .example-container > div:not(:last-child) {\n  margin-bottom: 1rem; }\n\n:host-context(.nb-theme-cosmic) .example-container > .btn-divided-checkbox-group {\n  -ms-flex-wrap: wrap;\n      flex-wrap: wrap; }\n  :host-context(.nb-theme-cosmic) .example-container > .btn-divided-checkbox-group > label {\n    -ms-flex-preferred-size: 10%;\n        flex-basis: 10%;\n    margin: 0 0.25rem 0.5rem 0; }\n\n@media (max-width: 767px) {\n  :host-context(.nb-theme-cosmic) .btn {\n    padding: 0.75rem 0.7rem; } }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/pages/ui-features/buttons/button-groups/button-groups.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ButtonGroupsComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var ButtonGroupsComponent = /** @class */ (function () {
    function ButtonGroupsComponent() {
        this.radioModel = 'left';
        this.checkboxModel = {
            left: false,
            middle: false,
            right: false,
        };
        this.dividedCheckboxModel = {
            monday: true,
            tuesday: true,
            wednesday: false,
            thursday: false,
            friday: false,
            saturday: false,
        };
        this.paginationModel = 1;
        this.iconToolbarModel = {
            one: false,
            two: false,
            three: true,
            four: false,
            five: false,
        };
        this.dividedButtonGroupOne = 'left';
        this.dividedButtonGroupTwo = {
            left: false,
            middle: false,
            right: false,
        };
    }
    ButtonGroupsComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'ngx-button-groups',
            styles: [__webpack_require__("../../../../../src/app/pages/ui-features/buttons/button-groups/button-groups.component.scss")],
            template: __webpack_require__("../../../../../src/app/pages/ui-features/buttons/button-groups/button-groups.component.html"),
        })
    ], ButtonGroupsComponent);
    return ButtonGroupsComponent;
}());



/***/ }),

/***/ "../../../../../src/app/pages/ui-features/buttons/buttons.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"row\" *ngIf=\"api.isLoggedIn==false\">\r\n    <h1>Please log In to Continue...</h1>\r\n</div>\r\n<div class=\"row\" *ngIf=\"api.isLoggedIn\">\r\n\r\n  <div class=\"col-lg-12\">\r\n    <ngx-hero-buttons></ngx-hero-buttons>\r\n  </div>\r\n  <div class=\"col-md-12 col-lg-12 col-xxxl-6\">\r\n    <ngx-shape-buttons></ngx-shape-buttons>\r\n    <ngx-action-groups></ngx-action-groups>\r\n    <ngx-labeled-actions-group></ngx-labeled-actions-group>\r\n\r\n    <div class=\"row\">\r\n      <div class=\"col-lg-5\">\r\n        <ngx-dropdown-buttons></ngx-dropdown-buttons>\r\n        <ngx-icon-buttons></ngx-icon-buttons>\r\n      </div>\r\n      <div class=\"col-lg-7\">\r\n        <ngx-button-groups></ngx-button-groups>\r\n      </div>\r\n    </div>\r\n  </div>\r\n  <div class=\"col-md-12 col-lg-12 col-xxxl-6\">\r\n    <ngx-size-buttons></ngx-size-buttons>\r\n    <ngx-default-buttons></ngx-default-buttons>\r\n    <ngx-block-level-buttons></ngx-block-level-buttons>\r\n  </div>\r\n</div>\r\n"

/***/ }),

/***/ "../../../../../src/app/pages/ui-features/buttons/buttons.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports
exports.push([module.i, "@import url(https://fonts.googleapis.com/css?family=Nixie+One);", ""]);

// module
exports.push([module.i, "/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n/**\n * This is a starting point where we declare the maps of themes and globally available functions/mixins\n */\n/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n/**\n * This mixin generates keyfames.\n * Because of all keyframes can't be scoped,\n * we need to puts unique name in each btn-pulse call.\n */\n/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n/**\n * This mixin generates keyfames.\n * Because of all keyframes can't be scoped,\n * we need to puts unique name in each btn-pulse call.\n */\n/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n/**\n * This mixin generates keyfames.\n * Because of all keyframes can't be scoped,\n * we need to puts unique name in each btn-pulse call.\n */\n/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n/**\n * This mixin generates keyfames.\n * Because of all keyframes can't be scoped,\n * we need to puts unique name in each btn-pulse call.\n */\n/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n:host-context(.nb-theme-default) /deep/ .container-title {\n  color: #a4abb3;\n  font-family: 'Nixie One', cursive;\n  margin-bottom: 0.5rem; }\n\n:host-context(.nb-theme-default) /deep/ .header {\n  font-size: 0.875rem; }\n\n:host-context(.nb-theme-default) /deep/ .subheader {\n  font-size: 0.75rem;\n  font-weight: 300;\n  color: #a4abb3; }\n\n:host-context(.nb-theme-default) /deep/ .btn-demo {\n  width: 180px; }\n\n:host-context(.nb-theme-default) /deep/ .state-container {\n  display: -ms-flexbox;\n  display: flex; }\n  :host-context(.nb-theme-default) /deep/ .state-container:not(:last-child) {\n    margin-bottom: 1rem; }\n  :host-context(.nb-theme-default) /deep/ .state-container .state-value {\n    width: 50px;\n    height: 50px;\n    border-radius: 0.375rem; }\n  :host-context(.nb-theme-default) /deep/ .state-container .state-details {\n    display: -ms-flexbox;\n    display: flex;\n    -ms-flex-direction: column;\n        flex-direction: column;\n    -ms-flex-pack: center;\n        justify-content: center;\n    margin-left: 1rem;\n    height: 50px; }\n\n:host-context(.nb-theme-default) /deep/ .example-container {\n  padding-right: 0; }\n\n:host-context(.nb-theme-default) /deep/ .example-container .container-btn {\n  margin-bottom: 1.5rem; }\n\n:host-context(.nb-theme-default) /deep/ .block-level-buttons .btn-group {\n  margin-bottom: 1rem; }\n\n@media (max-width: 575px) {\n  :host-context(.nb-theme-default) ngx-default-buttons /deep/ nb-card-header {\n    -ms-flex-direction: column;\n        flex-direction: column;\n    -ms-flex-align: left;\n        align-items: left; }\n    :host-context(.nb-theme-default) ngx-default-buttons /deep/ nb-card-header span {\n      margin-bottom: 1rem; } }\n\n@media (max-width: 399px) {\n  :host-context(.nb-theme-default) /deep/.icon-buttons .icon-button-examples button {\n    margin-right: 1rem; }\n  :host-context(.nb-theme-default) ngx-default-buttons /deep/ nb-card-header {\n    -ms-flex-direction: column;\n        flex-direction: column;\n    margin-bottom: 0.5rem; }\n  :host-context(.nb-theme-default) ngx-block-level-buttons /deep/ .btn-primary {\n    padding: 0.75rem 1rem; } }\n\n:host-context(.nb-theme-cosmic) /deep/ .container-title {\n  color: #a1a1e5;\n  font-family: 'Nixie One', cursive;\n  margin-bottom: 0.5rem; }\n\n:host-context(.nb-theme-cosmic) /deep/ .header {\n  font-size: 0.875rem; }\n\n:host-context(.nb-theme-cosmic) /deep/ .subheader {\n  font-size: 0.75rem;\n  font-weight: 300;\n  color: #a1a1e5; }\n\n:host-context(.nb-theme-cosmic) /deep/ .btn-demo {\n  width: 180px; }\n\n:host-context(.nb-theme-cosmic) /deep/ .state-container {\n  display: -ms-flexbox;\n  display: flex; }\n  :host-context(.nb-theme-cosmic) /deep/ .state-container:not(:last-child) {\n    margin-bottom: 1rem; }\n  :host-context(.nb-theme-cosmic) /deep/ .state-container .state-value {\n    width: 50px;\n    height: 50px;\n    border-radius: 0.5rem; }\n  :host-context(.nb-theme-cosmic) /deep/ .state-container .state-details {\n    display: -ms-flexbox;\n    display: flex;\n    -ms-flex-direction: column;\n        flex-direction: column;\n    -ms-flex-pack: center;\n        justify-content: center;\n    margin-left: 1rem;\n    height: 50px; }\n\n:host-context(.nb-theme-cosmic) /deep/ .example-container {\n  padding-right: 0; }\n\n:host-context(.nb-theme-cosmic) /deep/ .example-container .container-btn {\n  margin-bottom: 1.5rem; }\n\n:host-context(.nb-theme-cosmic) /deep/ .block-level-buttons .btn-group {\n  margin-bottom: 1rem; }\n\n@media (max-width: 575px) {\n  :host-context(.nb-theme-cosmic) ngx-default-buttons /deep/ nb-card-header {\n    -ms-flex-direction: column;\n        flex-direction: column;\n    -ms-flex-align: left;\n        align-items: left; }\n    :host-context(.nb-theme-cosmic) ngx-default-buttons /deep/ nb-card-header span {\n      margin-bottom: 1rem; } }\n\n@media (max-width: 399px) {\n  :host-context(.nb-theme-cosmic) /deep/.icon-buttons .icon-button-examples button {\n    margin-right: 1rem; }\n  :host-context(.nb-theme-cosmic) ngx-default-buttons /deep/ nb-card-header {\n    -ms-flex-direction: column;\n        flex-direction: column;\n    margin-bottom: 0.5rem; }\n  :host-context(.nb-theme-cosmic) ngx-block-level-buttons /deep/ .btn-primary {\n    padding: 0.75rem 1rem; } }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/pages/ui-features/buttons/buttons.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ButtonsComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__globalService__ = __webpack_require__("../../../../../src/app/globalService.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ButtonsComponent = /** @class */ (function () {
    function ButtonsComponent(api) {
        this.api = api;
    }
    ButtonsComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'ngx-buttons',
            styles: [__webpack_require__("../../../../../src/app/pages/ui-features/buttons/buttons.component.scss")],
            template: __webpack_require__("../../../../../src/app/pages/ui-features/buttons/buttons.component.html"),
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__globalService__["a" /* GlobalService */]])
    ], ButtonsComponent);
    return ButtonsComponent;
}());



/***/ }),

/***/ "../../../../../src/app/pages/ui-features/buttons/buttons.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ButtonsModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__theme_theme_module__ = __webpack_require__("../../../../../src/app/@theme/theme.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__default_buttons_default_buttons_component__ = __webpack_require__("../../../../../src/app/pages/ui-features/buttons/default-buttons/default-buttons.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__hero_buttons_hero_buttons_component__ = __webpack_require__("../../../../../src/app/pages/ui-features/buttons/hero-buttons/hero-buttons.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__shape_buttons_shape_buttons_component__ = __webpack_require__("../../../../../src/app/pages/ui-features/buttons/shape-buttons/shape-buttons.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__size_buttons_size_buttons_component__ = __webpack_require__("../../../../../src/app/pages/ui-features/buttons/size-buttons/size-buttons.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__buttons_component__ = __webpack_require__("../../../../../src/app/pages/ui-features/buttons/buttons.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__action_groups_action_groups_component__ = __webpack_require__("../../../../../src/app/pages/ui-features/buttons/action-groups/action-groups.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__dropdown_buttons_dropdown_button_component__ = __webpack_require__("../../../../../src/app/pages/ui-features/buttons/dropdown-buttons/dropdown-button.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__block_level_buttons_block_level_buttons_component__ = __webpack_require__("../../../../../src/app/pages/ui-features/buttons/block-level-buttons/block-level-buttons.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__button_groups_button_groups_component__ = __webpack_require__("../../../../../src/app/pages/ui-features/buttons/button-groups/button-groups.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__icon_buttons_icon_buttons_component__ = __webpack_require__("../../../../../src/app/pages/ui-features/buttons/icon-buttons/icon-buttons.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__labeled_actions_group_labeled_actions_group_component__ = __webpack_require__("../../../../../src/app/pages/ui-features/buttons/labeled-actions-group/labeled-actions-group.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};













var components = [
    __WEBPACK_IMPORTED_MODULE_6__buttons_component__["a" /* ButtonsComponent */],
    __WEBPACK_IMPORTED_MODULE_2__default_buttons_default_buttons_component__["a" /* DefaultButtonsComponent */],
    __WEBPACK_IMPORTED_MODULE_3__hero_buttons_hero_buttons_component__["a" /* HeroButtonComponent */],
    __WEBPACK_IMPORTED_MODULE_4__shape_buttons_shape_buttons_component__["a" /* ShapeButtonsComponent */],
    __WEBPACK_IMPORTED_MODULE_5__size_buttons_size_buttons_component__["a" /* SizeButtonsComponent */],
    __WEBPACK_IMPORTED_MODULE_7__action_groups_action_groups_component__["a" /* ActionGroupsComponent */],
    __WEBPACK_IMPORTED_MODULE_8__dropdown_buttons_dropdown_button_component__["a" /* DropdownButtonsComponent */],
    __WEBPACK_IMPORTED_MODULE_9__block_level_buttons_block_level_buttons_component__["a" /* BlockLevelButtonsComponent */],
    __WEBPACK_IMPORTED_MODULE_10__button_groups_button_groups_component__["a" /* ButtonGroupsComponent */],
    __WEBPACK_IMPORTED_MODULE_11__icon_buttons_icon_buttons_component__["a" /* IconButtonsComponent */],
    __WEBPACK_IMPORTED_MODULE_12__labeled_actions_group_labeled_actions_group_component__["a" /* LabeledActionsGroupComponent */],
];
var ButtonsModule = /** @class */ (function () {
    function ButtonsModule() {
    }
    ButtonsModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            imports: [
                __WEBPACK_IMPORTED_MODULE_1__theme_theme_module__["a" /* ThemeModule */],
            ],
            exports: components.slice(),
            declarations: components.slice(),
            providers: [],
        })
    ], ButtonsModule);
    return ButtonsModule;
}());



/***/ }),

/***/ "../../../../../src/app/pages/ui-features/buttons/default-buttons/default-buttons.component.html":
/***/ (function(module, exports) {

module.exports = "<nb-card>\r\n  <nb-card-header>\r\n    <span>Default Buttons</span>\r\n    <div class=\"dropdown\" ngbDropdown>\r\n      <button class=\"btn btn-primary\" type=\"button\" ngbDropdownToggle>\r\n        {{ selectedView.title }}\r\n      </button>\r\n      <ul class=\"dropdown-menu\" ngbDropdownMenu>\r\n        <li class=\"dropdown-item\" *ngFor=\"let v of buttonsViews\" (click)=\"this.selectedView = v\">{{ v.title }}</li>\r\n      </ul>\r\n    </div>\r\n  </nb-card-header>\r\n  <nb-card-body>\r\n    <div class=\"row\">\r\n      <div class=\"example-container col-md-4\" *ngFor=\"let b of buttons[selectedView.key]\">\r\n        <div class=\"container-title\">\r\n          <span>{{ b.containerTitle }}</span>\r\n        </div>\r\n        <div class=\"container-btn\">\r\n          <button class=\"btn {{ b.class }} btn-demo\">{{ b.title }}</button>\r\n        </div>\r\n        <div class=\"{{ b.container }}\">\r\n          <div class=\"state-container\">\r\n            <div class=\"state-value original\"></div>\r\n            <div class=\"state-details\">\r\n              <span class=\"header\">Default</span>\r\n              <span class=\"subheader\">{{ b.default }}</span>\r\n            </div>\r\n          </div>\r\n          <div class=\"state-container\">\r\n            <div class=\"state-value hover\"></div>\r\n            <div class=\"state-details\">\r\n              <span class=\"header\">Hover</span>\r\n              <span class=\"subheader\">14% white</span>\r\n            </div>\r\n          </div>\r\n          <div class=\"state-container\">\r\n            <div class=\"state-value active\"></div>\r\n            <div class=\"state-details\">\r\n              <span class=\"header\">Active</span>\r\n              <span class=\"subheader\">14% black</span>\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </nb-card-body>\r\n</nb-card>\r\n"

/***/ }),

/***/ "../../../../../src/app/pages/ui-features/buttons/default-buttons/default-buttons.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports
exports.push([module.i, "@import url(https://fonts.googleapis.com/css?family=Nixie+One);", ""]);

// module
exports.push([module.i, "/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n/**\n * This is a starting point where we declare the maps of themes and globally available functions/mixins\n */\n/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n/**\n * This mixin generates keyfames.\n * Because of all keyframes can't be scoped,\n * we need to puts unique name in each btn-pulse call.\n */\n/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n/**\n * This mixin generates keyfames.\n * Because of all keyframes can't be scoped,\n * we need to puts unique name in each btn-pulse call.\n */\n/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n/**\n * This mixin generates keyfames.\n * Because of all keyframes can't be scoped,\n * we need to puts unique name in each btn-pulse call.\n */\n/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n/**\n * This mixin generates keyfames.\n * Because of all keyframes can't be scoped,\n * we need to puts unique name in each btn-pulse call.\n */\n/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n:host-context(.nb-theme-default) nb-card-header {\n  display: -ms-flexbox;\n  display: flex;\n  -ms-flex-align: center;\n      align-items: center;\n  -ms-flex-pack: justify;\n      justify-content: space-between; }\n  :host-context(.nb-theme-default) nb-card-header .dropdown {\n    -ms-flex-preferred-size: 30%;\n        flex-basis: 30%;\n    min-width: 220px; }\n\n:host-context(.nb-theme-default) nb-card-body {\n  padding-bottom: 0; }\n\n:host-context(.nb-theme-default) .example-container {\n  margin-bottom: 1.5rem; }\n\n:host-context(.nb-theme-default) .primary-container .original {\n  background-color: #8a7fff; }\n\n:host-context(.nb-theme-default) .primary-container .hover:hover, :host-context(.nb-theme-default) .primary-container .hover.hover {\n  color: #ffffff;\n  background-color: #9a91ff;\n  border-color: transparent; }\n\n:host-context(.nb-theme-default) .primary-container .active:active, :host-context(.nb-theme-default) .primary-container .active.active {\n  color: #ffffff;\n  background-color: #776ddb;\n  border-color: transparent;\n  box-shadow: none; }\n\n:host-context(.nb-theme-default) .primary-container.outline .original {\n  background-color: transparent;\n  border: 2px solid #8a7fff; }\n\n:host-context(.nb-theme-default) .success-container .original {\n  background-color: #40dc7e; }\n\n:host-context(.nb-theme-default) .success-container .hover:hover, :host-context(.nb-theme-default) .success-container .hover.hover {\n  color: #ffffff;\n  background-color: #5be190;\n  border-color: transparent; }\n\n:host-context(.nb-theme-default) .success-container .active:active, :host-context(.nb-theme-default) .success-container .active.active {\n  color: #ffffff;\n  background-color: #37bd6c;\n  border-color: transparent;\n  box-shadow: none; }\n\n:host-context(.nb-theme-default) .success-container.outline .original {\n  background-color: transparent;\n  border: 2px solid #40dc7e; }\n\n:host-context(.nb-theme-default) .warning-container .original {\n  background-color: #ffa100; }\n\n:host-context(.nb-theme-default) .warning-container .hover:hover, :host-context(.nb-theme-default) .warning-container .hover.hover {\n  color: #ffffff;\n  background-color: #ffae24;\n  border-color: transparent; }\n\n:host-context(.nb-theme-default) .warning-container .active:active, :host-context(.nb-theme-default) .warning-container .active.active {\n  color: #ffffff;\n  background-color: #db8a00;\n  border-color: transparent;\n  box-shadow: none; }\n\n:host-context(.nb-theme-default) .warning-container.outline .original {\n  background-color: transparent;\n  border: 2px solid #ffa100; }\n\n:host-context(.nb-theme-default) .info-container .original {\n  background-color: #4ca6ff; }\n\n:host-context(.nb-theme-default) .info-container .hover:hover, :host-context(.nb-theme-default) .info-container .hover.hover {\n  color: #ffffff;\n  background-color: #65b2ff;\n  border-color: transparent; }\n\n:host-context(.nb-theme-default) .info-container .active:active, :host-context(.nb-theme-default) .info-container .active.active {\n  color: #ffffff;\n  background-color: #418fdb;\n  border-color: transparent;\n  box-shadow: none; }\n\n:host-context(.nb-theme-default) .info-container.outline .original {\n  background-color: transparent;\n  border: 2px solid #4ca6ff; }\n\n:host-context(.nb-theme-default) .danger-container .original {\n  background-color: #ff4c6a; }\n\n:host-context(.nb-theme-default) .danger-container .hover:hover, :host-context(.nb-theme-default) .danger-container .hover.hover {\n  color: #ffffff;\n  background-color: #ff657f;\n  border-color: transparent; }\n\n:host-context(.nb-theme-default) .danger-container .active:active, :host-context(.nb-theme-default) .danger-container .active.active {\n  color: #ffffff;\n  background-color: #db415b;\n  border-color: transparent;\n  box-shadow: none; }\n\n:host-context(.nb-theme-default) .danger-container.outline .original {\n  background-color: transparent;\n  border: 2px solid #ff4c6a; }\n\n:host-context(.nb-theme-default) .secondary-container .original {\n  border: 2px solid #dadfe6; }\n\n:host-context(.nb-theme-default) .secondary-container .hover:hover, :host-context(.nb-theme-default) .secondary-container .hover.hover {\n  color: #ffffff;\n  background-color: #dfe3ea;\n  border-color: transparent; }\n\n:host-context(.nb-theme-default) .secondary-container .active:active, :host-context(.nb-theme-default) .secondary-container .active.active {\n  color: #ffffff;\n  background-color: #bbc0c6;\n  border-color: transparent;\n  box-shadow: none; }\n\n:host-context(.nb-theme-default) .secondary-container.outline .original {\n  background-color: transparent;\n  border: 2px solid #dadfe6; }\n\n:host-context(.nb-theme-cosmic) nb-card-header {\n  display: -ms-flexbox;\n  display: flex;\n  -ms-flex-align: center;\n      align-items: center;\n  -ms-flex-pack: justify;\n      justify-content: space-between; }\n  :host-context(.nb-theme-cosmic) nb-card-header .dropdown {\n    -ms-flex-preferred-size: 30%;\n        flex-basis: 30%;\n    min-width: 220px; }\n\n:host-context(.nb-theme-cosmic) nb-card-body {\n  padding-bottom: 0; }\n\n:host-context(.nb-theme-cosmic) .example-container {\n  margin-bottom: 1.5rem; }\n\n:host-context(.nb-theme-cosmic) .primary-container .original {\n  background-color: #7659ff; }\n\n:host-context(.nb-theme-cosmic) .primary-container .hover:hover, :host-context(.nb-theme-cosmic) .primary-container .hover.hover {\n  color: #ffffff;\n  background-color: #8970ff;\n  border-color: transparent; }\n\n:host-context(.nb-theme-cosmic) .primary-container .active:active, :host-context(.nb-theme-cosmic) .primary-container .active.active {\n  color: #ffffff;\n  background-color: #654ddb;\n  border-color: transparent;\n  box-shadow: none; }\n\n:host-context(.nb-theme-cosmic) .primary-container.outline .original {\n  background-color: transparent;\n  border: 2px solid #7659ff; }\n\n:host-context(.nb-theme-cosmic) .success-container .original {\n  background-color: #00d977; }\n\n:host-context(.nb-theme-cosmic) .success-container .hover:hover, :host-context(.nb-theme-cosmic) .success-container .hover.hover {\n  color: #ffffff;\n  background-color: #24de8a;\n  border-color: transparent; }\n\n:host-context(.nb-theme-cosmic) .success-container .active:active, :host-context(.nb-theme-cosmic) .success-container .active.active {\n  color: #ffffff;\n  background-color: #00bb66;\n  border-color: transparent;\n  box-shadow: none; }\n\n:host-context(.nb-theme-cosmic) .success-container.outline .original {\n  background-color: transparent;\n  border: 2px solid #00d977; }\n\n:host-context(.nb-theme-cosmic) .warning-container .original {\n  background-color: #ffa100; }\n\n:host-context(.nb-theme-cosmic) .warning-container .hover:hover, :host-context(.nb-theme-cosmic) .warning-container .hover.hover {\n  color: #ffffff;\n  background-color: #ffae24;\n  border-color: transparent; }\n\n:host-context(.nb-theme-cosmic) .warning-container .active:active, :host-context(.nb-theme-cosmic) .warning-container .active.active {\n  color: #ffffff;\n  background-color: #db8a00;\n  border-color: transparent;\n  box-shadow: none; }\n\n:host-context(.nb-theme-cosmic) .warning-container.outline .original {\n  background-color: transparent;\n  border: 2px solid #ffa100; }\n\n:host-context(.nb-theme-cosmic) .info-container .original {\n  background-color: #0088ff; }\n\n:host-context(.nb-theme-cosmic) .info-container .hover:hover, :host-context(.nb-theme-cosmic) .info-container .hover.hover {\n  color: #ffffff;\n  background-color: #2499ff;\n  border-color: transparent; }\n\n:host-context(.nb-theme-cosmic) .info-container .active:active, :host-context(.nb-theme-cosmic) .info-container .active.active {\n  color: #ffffff;\n  background-color: #0075db;\n  border-color: transparent;\n  box-shadow: none; }\n\n:host-context(.nb-theme-cosmic) .info-container.outline .original {\n  background-color: transparent;\n  border: 2px solid #0088ff; }\n\n:host-context(.nb-theme-cosmic) .danger-container .original {\n  background-color: #ff386a; }\n\n:host-context(.nb-theme-cosmic) .danger-container .hover:hover, :host-context(.nb-theme-cosmic) .danger-container .hover.hover {\n  color: #ffffff;\n  background-color: #ff547f;\n  border-color: transparent; }\n\n:host-context(.nb-theme-cosmic) .danger-container .active:active, :host-context(.nb-theme-cosmic) .danger-container .active.active {\n  color: #ffffff;\n  background-color: #db305b;\n  border-color: transparent;\n  box-shadow: none; }\n\n:host-context(.nb-theme-cosmic) .danger-container.outline .original {\n  background-color: transparent;\n  border: 2px solid #ff386a; }\n\n:host-context(.nb-theme-cosmic) .secondary-container .original {\n  border: 2px solid #7659ff; }\n\n:host-context(.nb-theme-cosmic) .secondary-container .hover:hover, :host-context(.nb-theme-cosmic) .secondary-container .hover.hover {\n  color: #ffffff;\n  background-color: #8970ff;\n  border-color: transparent; }\n\n:host-context(.nb-theme-cosmic) .secondary-container .active:active, :host-context(.nb-theme-cosmic) .secondary-container .active.active {\n  color: #ffffff;\n  background-color: #654ddb;\n  border-color: transparent;\n  box-shadow: none; }\n\n:host-context(.nb-theme-cosmic) .secondary-container.outline .original {\n  background-color: transparent;\n  border: 2px solid #7659ff; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/pages/ui-features/buttons/default-buttons/default-buttons.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DefaultButtonsComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var DefaultButtonsComponent = /** @class */ (function () {
    function DefaultButtonsComponent() {
        this.buttonsViews = [{
                title: 'Default Buttons',
                key: 'default',
            }, {
                title: 'Outline Buttons',
                key: 'outline',
            }];
        this.selectedView = this.buttonsViews[0];
        this.buttons = {
            'default': [
                {
                    class: 'btn-primary',
                    container: 'primary-container',
                    containerTitle: 'Primary Button',
                    title: 'Primary',
                    default: '#7659ff',
                }, {
                    class: 'btn-warning',
                    container: 'warning-container',
                    containerTitle: 'Warning Button',
                    title: 'Warning',
                    default: '#ffcb17',
                }, {
                    class: 'btn-success',
                    container: 'success-container',
                    containerTitle: 'Success Button',
                    title: 'Success',
                    default: '#00d977',
                }, {
                    class: 'btn-info',
                    container: 'info-container',
                    containerTitle: 'Info Button',
                    title: 'Info',
                    default: '#0088ff',
                }, {
                    class: 'btn-danger',
                    container: 'danger-container',
                    containerTitle: 'Danger Button',
                    title: 'Danger',
                    default: '#ff386a',
                }, {
                    class: 'btn-secondary',
                    container: 'secondary-container',
                    containerTitle: 'Default Button',
                    title: 'Default',
                    default: '#bdbaff',
                },
            ],
            'outline': [
                {
                    class: 'btn-outline-primary',
                    container: 'primary-container outline',
                    containerTitle: 'Primary Button',
                    title: 'Primary',
                    default: '#7659ff',
                }, {
                    class: 'btn-outline-warning',
                    container: 'warning-container outline',
                    containerTitle: 'Warning Button',
                    title: 'Warning',
                    default: '#ffcb17',
                }, {
                    class: 'btn-outline-success',
                    container: 'success-container outline',
                    containerTitle: 'Success Button',
                    title: 'Success',
                    default: '#00d977',
                }, {
                    class: 'btn-outline-info',
                    container: 'info-container',
                    containerTitle: 'Info Button',
                    title: 'Info',
                    default: '#0088ff',
                }, {
                    class: 'btn-outline-danger',
                    container: 'danger-container outline',
                    containerTitle: 'Danger Button',
                    title: 'Danger',
                    default: '#ff386a',
                }, {
                    class: 'btn-outline-secondary',
                    container: 'secondary-container outline',
                    containerTitle: 'Default Button',
                    title: 'Default',
                    default: '#bdbaff',
                },
            ],
        };
    }
    DefaultButtonsComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'ngx-default-buttons',
            styles: [__webpack_require__("../../../../../src/app/pages/ui-features/buttons/default-buttons/default-buttons.component.scss")],
            template: __webpack_require__("../../../../../src/app/pages/ui-features/buttons/default-buttons/default-buttons.component.html"),
        })
    ], DefaultButtonsComponent);
    return DefaultButtonsComponent;
}());



/***/ }),

/***/ "../../../../../src/app/pages/ui-features/buttons/dropdown-buttons/dropdown-button.component.html":
/***/ (function(module, exports) {

module.exports = "<nb-card>\r\n  <nb-card-header>Button Dropdowns</nb-card-header>\r\n  <nb-card-body>\r\n    <div class=\"dropdown btn-group\" ngbDropdown>\r\n      <button type=\"button\" class=\"btn btn-primary\">Dropdown</button>\r\n      <button type=\"button\" class=\"btn btn-primary\" ngbDropdownToggle></button>\r\n      <ul class=\"dropdown-menu\" ngbDropdownMenu>\r\n        <li class=\"dropdown-item\">Icon Button</li>\r\n        <li class=\"dropdown-item\">Hero Button</li>\r\n        <li class=\"dropdown-item\">Default</li>\r\n      </ul>\r\n    </div>\r\n    <div class=\"dropdown\" ngbDropdown>\r\n      <button class=\"btn btn-primary\" type=\"button\" ngbDropdownToggle>\r\n        Dropdown\r\n      </button>\r\n      <ul class=\"dropdown-menu\" ngbDropdownMenu>\r\n        <li class=\"dropdown-item\">Icon Button</li>\r\n        <li class=\"dropdown-item\">Hero Button</li>\r\n        <li class=\"dropdown-item\">Default</li>\r\n      </ul>\r\n    </div>\r\n    <div class=\"dropdown\" placement=\"top\" ngbDropdown>\r\n      <button class=\"btn btn-outline-primary\" type=\"button\" ngbDropdownToggle>\r\n        Dropup\r\n      </button>\r\n      <ul class=\"dropdown-menu\" ngbDropdownMenu>\r\n        <li class=\"dropdown-item\">Icon Button</li>\r\n        <li class=\"dropdown-item\">Hero Button</li>\r\n        <li class=\"dropdown-item\">Default</li>\r\n      </ul>\r\n    </div>\r\n    <div class=\"dropdown ghost-dropdown\" ngbDropdown>\r\n      <button class=\"btn btn-primary\" type=\"button\" ngbDropdownToggle>\r\n        Dropdown\r\n      </button>\r\n      <ul class=\"dropdown-menu\" ngbDropdownMenu>\r\n        <li class=\"dropdown-item\">Icon Button</li>\r\n        <li class=\"dropdown-item\">Hero Button</li>\r\n        <li class=\"dropdown-item\">Default</li>\r\n      </ul>\r\n    </div>\r\n  </nb-card-body>\r\n</nb-card>\r\n"

/***/ }),

/***/ "../../../../../src/app/pages/ui-features/buttons/dropdown-buttons/dropdown-button.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports
exports.push([module.i, "@import url(https://fonts.googleapis.com/css?family=Nixie+One);", ""]);

// module
exports.push([module.i, "/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n/**\n * This is a starting point where we declare the maps of themes and globally available functions/mixins\n */\n/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n/**\n * This mixin generates keyfames.\n * Because of all keyframes can't be scoped,\n * we need to puts unique name in each btn-pulse call.\n */\n/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n/**\n * This mixin generates keyfames.\n * Because of all keyframes can't be scoped,\n * we need to puts unique name in each btn-pulse call.\n */\n/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n/**\n * This mixin generates keyfames.\n * Because of all keyframes can't be scoped,\n * we need to puts unique name in each btn-pulse call.\n */\n/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n/**\n * This mixin generates keyfames.\n * Because of all keyframes can't be scoped,\n * we need to puts unique name in each btn-pulse call.\n */\n:host-context(.nb-theme-default) {\n  text-align: center; }\n  :host-context(.nb-theme-default) .dropdown, :host-context(.nb-theme-default) .dropup, :host-context(.nb-theme-default) .btn-group {\n    margin-bottom: 1rem; }\n  :host-context(.nb-theme-default) nb-card-body {\n    overflow: visible; }\n\n:host-context(.nb-theme-cosmic) {\n  text-align: center; }\n  :host-context(.nb-theme-cosmic) .dropdown, :host-context(.nb-theme-cosmic) .dropup, :host-context(.nb-theme-cosmic) .btn-group {\n    margin-bottom: 1rem; }\n  :host-context(.nb-theme-cosmic) nb-card-body {\n    overflow: visible; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/pages/ui-features/buttons/dropdown-buttons/dropdown-button.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DropdownButtonsComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var DropdownButtonsComponent = /** @class */ (function () {
    function DropdownButtonsComponent() {
    }
    DropdownButtonsComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'ngx-dropdown-buttons',
            styles: [__webpack_require__("../../../../../src/app/pages/ui-features/buttons/dropdown-buttons/dropdown-button.component.scss")],
            template: __webpack_require__("../../../../../src/app/pages/ui-features/buttons/dropdown-buttons/dropdown-button.component.html"),
        })
    ], DropdownButtonsComponent);
    return DropdownButtonsComponent;
}());



/***/ }),

/***/ "../../../../../src/app/pages/ui-features/buttons/hero-buttons/hero-buttons.component.html":
/***/ (function(module, exports) {

module.exports = "<nb-card>\r\n  <nb-card-header>Welcome Admin!</nb-card-header>\r\n  <nb-card-body>\r\n    <!-- <div class=\"row\">\r\n      <div class=\"example-container col-sm-6 col-md-4 col-xl-3 col-xxxl-2\" *ngFor=\"let hb of settings\">\r\n        <div class=\"container-title\">\r\n          <span>{{ hb.title }}</span>\r\n        </div>\r\n        <div class=\"container-btn\">\r\n          <button class=\"btn {{ hb.class }} btn-demo\">{{ hb.buttonTitle }}</button>\r\n        </div>\r\n        <div class=\"{{ hb.container }}\">\r\n          <div class=\"state-container\" *ngIf=\"hb[themeName].border\">\r\n            <div class=\"state-value border\"></div>\r\n            <div class=\"state-details\">\r\n              <span class=\"header\">Border</span>\r\n              <span class=\"subheader\">{{ hb[themeName].border }}</span>\r\n            </div>\r\n          </div>\r\n          <div class=\"state-container\" *ngIf=\"hb[themeName].gradientLeft\">\r\n            <div class=\"state-value gradient\"></div>\r\n            <div class=\"state-details\">\r\n              <span class=\"header\">Linear Gradient</span>\r\n              <span class=\"subheader\">{{ hb[themeName].gradientLeft }}</span>\r\n              <span class=\"subheader\">{{ hb[themeName].gradientRight }}</span>\r\n            </div>\r\n          </div>\r\n          <div class=\"state-container\">\r\n            <div class=\"state-value bevel\" [ngClass]=\"{ 'none': !hb[themeName].bevel }\"></div>\r\n            <div class=\"state-details\" *ngIf=\"hb[themeName].bevel\">\r\n              <span class=\"header\">Bevel</span>\r\n              <span class=\"subheader\">0 3px 0 0</span>\r\n              <span class=\"subheader\">{{ hb[themeName].bevel }}</span>\r\n            </div>\r\n            <div class=\"state-details\" *ngIf=\"!hb[themeName].bevel\">\r\n              <span class=\"header\">No Bevel</span>\r\n            </div>\r\n          </div>\r\n          <div class=\"state-container\">\r\n            <div class=\"state-value shadow\" [ngClass]=\"{ 'none': !hb[themeName].shadow }\"></div>\r\n            <div class=\"state-details\" *ngIf=\"hb[themeName].shadow\">\r\n              <span class=\"header\">Shadow</span>\r\n              <span class=\"subheader\">0 4px 10px 0</span>\r\n              <span class=\"subheader\">{{ hb[themeName].shadow }}</span>\r\n            </div>\r\n            <div class=\"state-details\" *ngIf=\"!hb[themeName].shadow\">\r\n              <span class=\"header\">No Shadow</span>\r\n            </div>\r\n          </div>\r\n          <div class=\"state-container\">\r\n            <div class=\"state-value glow\" [ngClass]=\"{ 'none': !hb[themeName].glow }\"></div>\r\n            <div class=\"state-details\" *ngIf=\"hb[themeName].glow\">\r\n              <span class=\"header\">Glow</span>\r\n              <span class=\"subheader\">0 2px 12px 0</span>\r\n              <span class=\"subheader\">{{ hb[themeName].glow }}</span>\r\n            </div>\r\n            <div class=\"state-details\" *ngIf=\"!hb[themeName].glow\">\r\n              <span class=\"header\">No Glow</span>\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div> -->\r\n  </nb-card-body>\r\n</nb-card>\r\n"

/***/ }),

/***/ "../../../../../src/app/pages/ui-features/buttons/hero-buttons/hero-buttons.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports
exports.push([module.i, "@import url(https://fonts.googleapis.com/css?family=Nixie+One);", ""]);

// module
exports.push([module.i, "/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n/**\n * This is a starting point where we declare the maps of themes and globally available functions/mixins\n */\n/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n/**\n * This mixin generates keyfames.\n * Because of all keyframes can't be scoped,\n * we need to puts unique name in each btn-pulse call.\n */\n/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n/**\n * This mixin generates keyfames.\n * Because of all keyframes can't be scoped,\n * we need to puts unique name in each btn-pulse call.\n */\n/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n/**\n * This mixin generates keyfames.\n * Because of all keyframes can't be scoped,\n * we need to puts unique name in each btn-pulse call.\n */\n/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n/**\n * This mixin generates keyfames.\n * Because of all keyframes can't be scoped,\n * we need to puts unique name in each btn-pulse call.\n */\n/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n:host-context(.nb-theme-default) nb-card-body {\n  padding-bottom: 0; }\n\n:host-context(.nb-theme-default) .none {\n  position: relative;\n  transform: rotate(45deg); }\n  :host-context(.nb-theme-default) .none::before, :host-context(.nb-theme-default) .none::after {\n    position: absolute;\n    content: '';\n    background: #dadfe6; }\n  :host-context(.nb-theme-default) .none::before {\n    left: 50%;\n    top: 10%;\n    transform: translateX(-50%);\n    width: 1px;\n    height: 80%; }\n  :host-context(.nb-theme-default) .none::after {\n    top: 50%;\n    left: 10%;\n    transform: translateY(-50%);\n    height: 1px;\n    width: 80%; }\n\n:host-context(.nb-theme-default) .shadow {\n  box-shadow: none; }\n\n:host-context(.nb-theme-default) .primary-container .gradient {\n  background-image: linear-gradient(to right, #b57fff, #8a7fff); }\n\n:host-context(.nb-theme-default) .primary-container .glow {\n  box-shadow: 0 0 0 0 #9f7fff; }\n\n:host-context(.nb-theme-default) .primary-container .bevel {\n  box-shadow: 0 0 0 0 #896ddb; }\n\n:host-context(.nb-theme-default) .warning-container .gradient {\n  background-image: linear-gradient(to right, #ffcc00, #ffa100); }\n\n:host-context(.nb-theme-default) .warning-container .glow {\n  box-shadow: 0 0 0 0 #ffb600; }\n\n:host-context(.nb-theme-default) .warning-container .bevel {\n  box-shadow: 0 0 0 0 #db9d00; }\n\n:host-context(.nb-theme-default) .success-container .gradient {\n  background-image: linear-gradient(to right, #40dcb2, #40dc7e); }\n\n:host-context(.nb-theme-default) .success-container .glow {\n  box-shadow: 0 0 0 0 #40dc98; }\n\n:host-context(.nb-theme-default) .success-container .bevel {\n  box-shadow: 0 0 0 0 #37bd83; }\n\n:host-context(.nb-theme-default) .info-container .gradient {\n  background-image: linear-gradient(to right, #4cc4ff, #4ca6ff); }\n\n:host-context(.nb-theme-default) .info-container .glow {\n  box-shadow: 0 0 0 0 #4cb5ff; }\n\n:host-context(.nb-theme-default) .info-container .bevel {\n  box-shadow: 0 0 0 0 #419cdb; }\n\n:host-context(.nb-theme-default) .danger-container .gradient {\n  background-image: linear-gradient(to right, #ff4ca6, #ff4c6a); }\n\n:host-context(.nb-theme-default) .danger-container .glow {\n  box-shadow: 0 0 0 0 #ff4c88; }\n\n:host-context(.nb-theme-default) .danger-container .bevel {\n  box-shadow: 0 0 0 0 #db4175; }\n\n:host-context(.nb-theme-default) .secondary-container .border {\n  border: 2px solid #dadfe6; }\n\n:host-context(.nb-theme-default) .secondary-container .glow {\n  box-shadow: 0 0 0 0 #dadde6; }\n\n:host-context(.nb-theme-default) .secondary-container .bevel {\n  box-shadow: 0 0 0 0 #bbbec6; }\n\n:host-context(.nb-theme-default) .example-container {\n  margin-bottom: 1.5rem; }\n\n:host-context(.nb-theme-cosmic) nb-card-body {\n  padding-bottom: 0; }\n\n:host-context(.nb-theme-cosmic) .none {\n  position: relative;\n  transform: rotate(45deg); }\n  :host-context(.nb-theme-cosmic) .none::before, :host-context(.nb-theme-cosmic) .none::after {\n    position: absolute;\n    content: '';\n    background: #342e73; }\n  :host-context(.nb-theme-cosmic) .none::before {\n    left: 50%;\n    top: 10%;\n    transform: translateX(-50%);\n    width: 1px;\n    height: 80%; }\n  :host-context(.nb-theme-cosmic) .none::after {\n    top: 50%;\n    left: 10%;\n    transform: translateY(-50%);\n    height: 1px;\n    width: 80%; }\n\n:host-context(.nb-theme-cosmic) .shadow {\n  box-shadow: 0 4px 10px 0 rgba(33, 7, 77, 0.5); }\n\n:host-context(.nb-theme-cosmic) .primary-container .gradient {\n  background-image: linear-gradient(to right, #ad59ff, #7659ff); }\n\n:host-context(.nb-theme-cosmic) .primary-container .glow {\n  box-shadow: 0 2px 8px 0 #9259ff; }\n\n:host-context(.nb-theme-cosmic) .primary-container .bevel {\n  box-shadow: 0 3px 0 0 #7e4ddb; }\n\n:host-context(.nb-theme-cosmic) .warning-container .gradient {\n  background-image: linear-gradient(to right, #ffcc00, #ffa100); }\n\n:host-context(.nb-theme-cosmic) .warning-container .glow {\n  box-shadow: 0 2px 8px 0 #ffb600; }\n\n:host-context(.nb-theme-cosmic) .warning-container .bevel {\n  box-shadow: 0 3px 0 0 #db9d00; }\n\n:host-context(.nb-theme-cosmic) .success-container .gradient {\n  background-image: linear-gradient(to right, #00d9bf, #00d977); }\n\n:host-context(.nb-theme-cosmic) .success-container .glow {\n  box-shadow: 0 2px 8px 0 #00d99b; }\n\n:host-context(.nb-theme-cosmic) .success-container .bevel {\n  box-shadow: 0 3px 0 0 #00bb85; }\n\n:host-context(.nb-theme-cosmic) .info-container .gradient {\n  background-image: linear-gradient(to right, #00b3ff, #0088ff); }\n\n:host-context(.nb-theme-cosmic) .info-container .glow {\n  box-shadow: 0 2px 8px 0 #009dff; }\n\n:host-context(.nb-theme-cosmic) .info-container .bevel {\n  box-shadow: 0 3px 0 0 #0087db; }\n\n:host-context(.nb-theme-cosmic) .danger-container .gradient {\n  background-image: linear-gradient(to right, #ff38ac, #ff386a); }\n\n:host-context(.nb-theme-cosmic) .danger-container .glow {\n  box-shadow: 0 2px 8px 0 #ff388b; }\n\n:host-context(.nb-theme-cosmic) .danger-container .bevel {\n  box-shadow: 0 3px 0 0 #db3078; }\n\n:host-context(.nb-theme-cosmic) .secondary-container .border {\n  border: 2px solid #7659ff; }\n\n:host-context(.nb-theme-cosmic) .secondary-container .glow {\n  box-shadow: 0 2px 8px 0 #9259ff; }\n\n:host-context(.nb-theme-cosmic) .secondary-container .bevel {\n  box-shadow: 0 3px 0 0 #7e4ddb; }\n\n:host-context(.nb-theme-cosmic) .example-container {\n  margin-bottom: 1.5rem; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/pages/ui-features/buttons/hero-buttons/hero-buttons.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HeroButtonComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__nebular_theme__ = __webpack_require__("../../../../@nebular/theme/index.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var HeroButtonComponent = /** @class */ (function () {
    function HeroButtonComponent(themeService) {
        var _this = this;
        this.themeService = themeService;
        this.themeName = 'default';
        this.themeSubscription = this.themeService.getJsTheme().subscribe(function (theme) {
            _this.themeName = theme.name;
            _this.init(theme.variables);
        });
    }
    HeroButtonComponent.prototype.init = function (colors) {
        this.settings = [{
                class: 'btn-hero-primary',
                container: 'primary-container',
                title: 'Primary Button',
                buttonTitle: 'Primary',
                default: {
                    gradientLeft: "adjust-hue(" + colors.primary + ", 20deg)",
                    gradientRight: colors.primary,
                },
                cosmic: {
                    gradientLeft: "adjust-hue(" + colors.primary + ", 20deg)",
                    gradientRight: colors.primary,
                    bevel: "shade(" + colors.primary + ", 14%)",
                    shadow: 'rgba (6, 7, 64, 0.5)',
                    glow: "adjust-hue(" + colors.primary + ", 10deg)",
                },
            }, {
                class: 'btn-hero-warning',
                container: 'warning-container',
                title: 'Warning Button',
                buttonTitle: 'Warning',
                default: {
                    gradientLeft: "adjust-hue(" + colors.warning + ", 10deg)",
                    gradientRight: colors.warning,
                },
                cosmic: {
                    gradientLeft: "adjust-hue(" + colors.warning + ", 10deg)",
                    gradientRight: colors.warning,
                    bevel: "shade(" + colors.warning + ", 14%)",
                    shadow: 'rgba (33, 7, 77, 0.5)',
                    glow: "adjust-hue(" + colors.warning + ", 5deg)",
                },
            }, {
                class: 'btn-hero-success',
                container: 'success-container',
                title: 'Success Button',
                buttonTitle: 'Success',
                default: {
                    gradientLeft: "adjust-hue(" + colors.success + ", 20deg)",
                    gradientRight: colors.success,
                },
                cosmic: {
                    gradientLeft: "adjust-hue(" + colors.success + ", 20deg)",
                    gradientRight: colors.success,
                    bevel: "shade(" + colors.success + ", 14%)",
                    shadow: 'rgba (33, 7, 77, 0.5)',
                    glow: "adjust-hue(" + colors.success + ", 10deg)",
                },
            }, {
                class: 'btn-hero-info',
                container: 'info-container',
                title: 'Info Button',
                buttonTitle: 'Info',
                default: {
                    gradientLeft: "adjust-hue(" + colors.info + ", -10deg)",
                    gradientRight: colors.info,
                },
                cosmic: {
                    gradientLeft: "adjust-hue(" + colors.info + ", -10deg)",
                    gradientRight: colors.info,
                    bevel: "shade(" + colors.info + ", 14%)",
                    shadow: 'rgba (33, 7, 77, 0.5)',
                    glow: "adjust-hue(" + colors.info + ", -5deg)",
                },
            }, {
                class: 'btn-hero-danger',
                container: 'danger-container',
                title: 'Danger Button',
                buttonTitle: 'Danger',
                default: {
                    gradientLeft: "adjust-hue(" + colors.danger + ", -20deg)",
                    gradientRight: colors.danger,
                },
                cosmic: {
                    gradientLeft: "adjust-hue(" + colors.danger + ", -20deg)",
                    gradientRight: colors.danger,
                    bevel: "shade(" + colors.danger + ", 14%)",
                    shadow: 'rgba (33, 7, 77, 0.5)',
                    glow: "adjust-hue(" + colors.danger + ", -10deg)",
                },
            }, {
                class: 'btn-hero-secondary',
                container: 'secondary-container',
                title: 'Ghost Button',
                buttonTitle: 'Ghost',
                default: {
                    border: '#dadfe6',
                },
                cosmic: {
                    border: colors.primary,
                    bevel: '#665ebd',
                    shadow: 'rgba (33, 7, 77, 0.5)',
                    glow: 'rgba (146, 141, 255, 1)',
                },
            }];
    };
    HeroButtonComponent.prototype.ngOnDestroy = function () {
        this.themeSubscription.unsubscribe();
    };
    HeroButtonComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'ngx-hero-buttons',
            styles: [__webpack_require__("../../../../../src/app/pages/ui-features/buttons/hero-buttons/hero-buttons.component.scss")],
            template: __webpack_require__("../../../../../src/app/pages/ui-features/buttons/hero-buttons/hero-buttons.component.html"),
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__nebular_theme__["o" /* NbThemeService */]])
    ], HeroButtonComponent);
    return HeroButtonComponent;
}());



/***/ }),

/***/ "../../../../../src/app/pages/ui-features/buttons/icon-buttons/icon-buttons.component.html":
/***/ (function(module, exports) {

module.exports = "<nb-card>\r\n  <nb-card-header>Icon buttons</nb-card-header>\r\n  <nb-card-body>\r\n    <div class=\"row icon-buttons\">\r\n      <div class=\"col-md-12\">\r\n        <div class=\"btn-group\">\r\n          <button type=\"button\" class=\"btn btn-primary btn-group-icon btn-group-divider\">\r\n            <i class=\"nb-home\"></i>\r\n          </button>\r\n          <button type=\"button\" class=\"btn btn-primary\">Icon Button</button>\r\n        </div>\r\n        <div class=\"btn-with-icon-example\">\r\n          <button type=\"button\" class=\"btn btn-primary btn-with-icon\">\r\n            <i class=\"nb-home\"></i>\r\n            <span>Icon Button</span>\r\n          </button>\r\n        </div>\r\n        <div class=\"icon-button-examples\">\r\n          <button type=\"button\" class=\"btn btn-outline-primary btn-icon\">\r\n            <i class=\"nb-layout-centre\"></i>\r\n          </button>\r\n          <button type=\"button\" class=\"btn btn-outline-success btn-icon\">\r\n            <i class=\"nb-layout-default\"></i>\r\n          </button>\r\n          <button type=\"button\" class=\"btn btn-outline-danger btn-icon\">\r\n            <i class=\"nb-layout-one-column\"></i>\r\n          </button>\r\n        </div>\r\n        <div class=\"icon-button-examples\">\r\n          <button type=\"button\" class=\"btn btn-primary btn-icon\">\r\n            <i class=\"nb-shuffle\"></i>\r\n          </button>\r\n          <button type=\"button\" class=\"btn btn-success btn-icon\">\r\n            <i class=\"nb-skip-backward-outline\"></i>\r\n          </button>\r\n          <button type=\"button\" class=\"btn btn-danger btn-icon\">\r\n            <i class=\"nb-skip-forward-outline\"></i>\r\n          </button>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </nb-card-body>\r\n</nb-card>\r\n"

/***/ }),

/***/ "../../../../../src/app/pages/ui-features/buttons/icon-buttons/icon-buttons.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "nb-card-body div:not(:last-child) {\n  margin-bottom: 1rem; }\n\n.btn-with-icon-example {\n  width: 100%; }\n  .btn-with-icon-example .btn {\n    width: 100%; }\n\n.btn-group:not(:last-child) {\n  margin-bottom: 1rem; }\n\n.icon-button-examples {\n  display: -ms-flexbox;\n  display: flex;\n  -ms-flex-pack: start;\n      justify-content: flex-start; }\n  .icon-button-examples button {\n    margin-right: 2rem;\n    min-width: 4rem; }\n\n.icon-button-examples:not(:last-child) {\n  margin-bottom: 1rem; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/pages/ui-features/buttons/icon-buttons/icon-buttons.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return IconButtonsComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var IconButtonsComponent = /** @class */ (function () {
    function IconButtonsComponent() {
    }
    IconButtonsComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'ngx-icon-buttons',
            styles: [__webpack_require__("../../../../../src/app/pages/ui-features/buttons/icon-buttons/icon-buttons.component.scss")],
            template: __webpack_require__("../../../../../src/app/pages/ui-features/buttons/icon-buttons/icon-buttons.component.html"),
        })
    ], IconButtonsComponent);
    return IconButtonsComponent;
}());



/***/ }),

/***/ "../../../../../src/app/pages/ui-features/buttons/labeled-actions-group/labeled-actions-group.component.html":
/***/ (function(module, exports) {

module.exports = "<nb-card>\r\n  <nb-card-body>\r\n    <nb-actions size=\"medium\" fullWidth>\r\n      <nb-action>\r\n        <i class=\"nb-pause-outline\"></i><span>Pause</span>\r\n      </nb-action>\r\n      <nb-action>\r\n        <i class=\"nb-list\"></i><span>Logs</span>\r\n      </nb-action>\r\n      <nb-action>\r\n        <i class=\"nb-search\"></i><span>Search</span>\r\n      </nb-action>\r\n      <nb-action>\r\n        <i class=\"nb-gear\"></i><span>Setup</span>\r\n      </nb-action>\r\n    </nb-actions>\r\n  </nb-card-body>\r\n</nb-card>\r\n"

/***/ }),

/***/ "../../../../../src/app/pages/ui-features/buttons/labeled-actions-group/labeled-actions-group.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports
exports.push([module.i, "@import url(https://fonts.googleapis.com/css?family=Nixie+One);", ""]);

// module
exports.push([module.i, "/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n/**\n * This is a starting point where we declare the maps of themes and globally available functions/mixins\n */\n/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n/**\n * This mixin generates keyfames.\n * Because of all keyframes can't be scoped,\n * we need to puts unique name in each btn-pulse call.\n */\n/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n/**\n * This mixin generates keyfames.\n * Because of all keyframes can't be scoped,\n * we need to puts unique name in each btn-pulse call.\n */\n/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n/**\n * This mixin generates keyfames.\n * Because of all keyframes can't be scoped,\n * we need to puts unique name in each btn-pulse call.\n */\n/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n/**\n * This mixin generates keyfames.\n * Because of all keyframes can't be scoped,\n * we need to puts unique name in each btn-pulse call.\n */\n/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n:host-context(.nb-theme-default) nb-actions > nb-action {\n  padding: 0; }\n\n:host-context(.nb-theme-default) nb-action i {\n  color: #a4abb3;\n  font-size: 2.5rem;\n  margin-right: 1rem; }\n\n:host-context(.nb-theme-default) nb-action span {\n  font-family: 'Nixie One', cursive;\n  font-weight: 600;\n  color: #2a2a2a;\n  text-transform: uppercase; }\n\n@media (max-width: 991px) {\n  :host-context(.nb-theme-default) nb-actions nb-action {\n    padding: 0 0.75rem; } }\n\n@media (max-width: 767px) {\n  :host-context(.nb-theme-default) nb-card-body {\n    padding: 1rem; }\n  :host-context(.nb-theme-default) nb-action {\n    font-size: 0.75rem; }\n    :host-context(.nb-theme-default) nb-action i {\n      font-size: 2rem;\n      margin-right: 0.5rem; } }\n\n@media (max-width: 575px) {\n  :host-context(.nb-theme-default) nb-action i {\n    font-size: 1.75rem;\n    margin: 0; }\n  :host-context(.nb-theme-default) span {\n    display: none; } }\n\n:host-context(.nb-theme-cosmic) nb-actions > nb-action {\n  padding: 0; }\n\n:host-context(.nb-theme-cosmic) nb-action i {\n  color: #a1a1e5;\n  font-size: 2.5rem;\n  margin-right: 1rem; }\n\n:host-context(.nb-theme-cosmic) nb-action span {\n  font-family: 'Nixie One', cursive;\n  font-weight: 600;\n  color: #ffffff;\n  text-transform: uppercase; }\n\n@media (max-width: 991px) {\n  :host-context(.nb-theme-cosmic) nb-actions nb-action {\n    padding: 0 0.75rem; } }\n\n@media (max-width: 767px) {\n  :host-context(.nb-theme-cosmic) nb-card-body {\n    padding: 1rem; }\n  :host-context(.nb-theme-cosmic) nb-action {\n    font-size: 0.75rem; }\n    :host-context(.nb-theme-cosmic) nb-action i {\n      font-size: 2rem;\n      margin-right: 0.5rem; } }\n\n@media (max-width: 575px) {\n  :host-context(.nb-theme-cosmic) nb-action i {\n    font-size: 1.75rem;\n    margin: 0; }\n  :host-context(.nb-theme-cosmic) span {\n    display: none; } }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/pages/ui-features/buttons/labeled-actions-group/labeled-actions-group.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LabeledActionsGroupComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var LabeledActionsGroupComponent = /** @class */ (function () {
    function LabeledActionsGroupComponent() {
    }
    LabeledActionsGroupComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'ngx-labeled-actions-group',
            styles: [__webpack_require__("../../../../../src/app/pages/ui-features/buttons/labeled-actions-group/labeled-actions-group.component.scss")],
            template: __webpack_require__("../../../../../src/app/pages/ui-features/buttons/labeled-actions-group/labeled-actions-group.component.html"),
        })
    ], LabeledActionsGroupComponent);
    return LabeledActionsGroupComponent;
}());



/***/ }),

/***/ "../../../../../src/app/pages/ui-features/buttons/shape-buttons/shape-buttons.component.html":
/***/ (function(module, exports) {

module.exports = "<nb-card>\r\n  <nb-card-header>Button Shapes</nb-card-header>\r\n  <nb-card-body>\r\n    <div class=\"shape-container\">\r\n      <div class=\"container-title\">\r\n        <span>Rectangle Button</span>\r\n      </div>\r\n      <div class=\"subheader\">\r\n        <span>Border radius:</span>\r\n        <span>4px</span>\r\n      </div>\r\n      <div>\r\n        <button class=\"btn btn-success btn-rectangle btn-demo\">Rectangle</button>\r\n      </div>\r\n    </div>\r\n\r\n    <div class=\"shape-container\">\r\n      <div class=\"container-title\">\r\n        <span>Semi-round Button</span>\r\n      </div>\r\n      <div class=\"subheader\">\r\n        <span>Border radius:</span>\r\n        <span>12px</span>\r\n      </div>\r\n      <div>\r\n        <button class=\"btn btn-success btn-semi-round btn-demo\">Semi-round</button>\r\n      </div>\r\n    </div>\r\n\r\n    <div class=\"shape-container\">\r\n      <div class=\"container-title\">\r\n        <span>Rounded Button</span>\r\n      </div>\r\n      <div class=\"subheader\">\r\n        <span>Border radius:</span>\r\n        <span>round</span>\r\n      </div>\r\n      <div>\r\n        <button class=\"btn btn-success btn-round btn-demo\">Round</button>\r\n      </div>\r\n    </div>\r\n  </nb-card-body>\r\n</nb-card>\r\n"

/***/ }),

/***/ "../../../../../src/app/pages/ui-features/buttons/shape-buttons/shape-buttons.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports
exports.push([module.i, "@import url(https://fonts.googleapis.com/css?family=Nixie+One);", ""]);

// module
exports.push([module.i, "/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n/**\n * This is a starting point where we declare the maps of themes and globally available functions/mixins\n */\n/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n/**\n * This mixin generates keyfames.\n * Because of all keyframes can't be scoped,\n * we need to puts unique name in each btn-pulse call.\n */\n/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n/**\n * This mixin generates keyfames.\n * Because of all keyframes can't be scoped,\n * we need to puts unique name in each btn-pulse call.\n */\n/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n/**\n * This mixin generates keyfames.\n * Because of all keyframes can't be scoped,\n * we need to puts unique name in each btn-pulse call.\n */\n/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n/**\n * This mixin generates keyfames.\n * Because of all keyframes can't be scoped,\n * we need to puts unique name in each btn-pulse call.\n */\n/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n:host-context(.nb-theme-default) nb-card-body {\n  padding: 0 0 29px;\n  display: -ms-flexbox;\n  display: flex;\n  -ms-flex-wrap: wrap;\n      flex-wrap: wrap; }\n\n:host-context(.nb-theme-default) .shape-container {\n  margin: 1.25rem 1.25rem 0; }\n\n:host-context(.nb-theme-default) .container-title {\n  margin-bottom: 0.25rem; }\n\n:host-context(.nb-theme-default) .subheader {\n  margin-bottom: 1rem;\n  font-size: 0.875rem; }\n  :host-context(.nb-theme-default) .subheader span:nth-child(2) {\n    color: #2a2a2a;\n    font-weight: 600; }\n\n:host-context(.nb-theme-cosmic) nb-card-body {\n  padding: 0 0 29px;\n  display: -ms-flexbox;\n  display: flex;\n  -ms-flex-wrap: wrap;\n      flex-wrap: wrap; }\n\n:host-context(.nb-theme-cosmic) .shape-container {\n  margin: 1.25rem 1.25rem 0; }\n\n:host-context(.nb-theme-cosmic) .container-title {\n  margin-bottom: 0.25rem; }\n\n:host-context(.nb-theme-cosmic) .subheader {\n  margin-bottom: 1rem;\n  font-size: 0.875rem; }\n  :host-context(.nb-theme-cosmic) .subheader span:nth-child(2) {\n    color: #ffffff;\n    font-weight: 600; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/pages/ui-features/buttons/shape-buttons/shape-buttons.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ShapeButtonsComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var ShapeButtonsComponent = /** @class */ (function () {
    function ShapeButtonsComponent() {
    }
    ShapeButtonsComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'ngx-shape-buttons',
            styles: [__webpack_require__("../../../../../src/app/pages/ui-features/buttons/shape-buttons/shape-buttons.component.scss")],
            template: __webpack_require__("../../../../../src/app/pages/ui-features/buttons/shape-buttons/shape-buttons.component.html"),
        })
    ], ShapeButtonsComponent);
    return ShapeButtonsComponent;
}());



/***/ }),

/***/ "../../../../../src/app/pages/ui-features/buttons/size-buttons/size-buttons.component.html":
/***/ (function(module, exports) {

module.exports = "<nb-card>\r\n  <nb-card-header>Button Sizes</nb-card-header>\r\n\r\n  <nb-card-body>\r\n    <div class=\"size-container\">\r\n      <div class=\"container-title\">\r\n        <span>Large Button</span>\r\n      </div>\r\n      <div class=\"subheader\">\r\n        <span>0.875rem 1.75rem</span>\r\n      </div>\r\n      <div>\r\n        <button class=\"btn btn-primary btn-lg\">Large Button</button>\r\n      </div>\r\n    </div>\r\n    <div class=\"size-container\">\r\n      <div class=\"container-title\">\r\n        <span>Medium Button</span>\r\n      </div>\r\n      <div class=\"subheader\">\r\n        <span>0.75rem 1.5rem</span>\r\n      </div>\r\n      <div>\r\n        <button class=\"btn btn-primary btn-md\">Medium Button</button>\r\n      </div>\r\n    </div>\r\n    <div class=\"size-container\">\r\n      <div class=\"container-title\">\r\n        <span>Small Button</span>\r\n      </div>\r\n      <div class=\"subheader\">\r\n        <span>0.675rem 1.5rem</span>\r\n      </div>\r\n      <div>\r\n        <button class=\"btn btn-primary btn-sm\">Small Button</button>\r\n      </div>\r\n    </div>\r\n    <div class=\"size-container\">\r\n      <div class=\"container-title\">\r\n        <span>Tiny Button</span>\r\n      </div>\r\n      <div class=\"subheader\">\r\n        <span>0.5rem 1.25rem</span>\r\n      </div>\r\n      <div>\r\n        <button class=\"btn btn-primary btn-tn\">Tiny</button>\r\n      </div>\r\n    </div>\r\n  </nb-card-body>\r\n</nb-card>\r\n"

/***/ }),

/***/ "../../../../../src/app/pages/ui-features/buttons/size-buttons/size-buttons.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports
exports.push([module.i, "@import url(https://fonts.googleapis.com/css?family=Nixie+One);", ""]);

// module
exports.push([module.i, "/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n/**\n * This is a starting point where we declare the maps of themes and globally available functions/mixins\n */\n/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n/**\n * This mixin generates keyfames.\n * Because of all keyframes can't be scoped,\n * we need to puts unique name in each btn-pulse call.\n */\n/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n/**\n * This mixin generates keyfames.\n * Because of all keyframes can't be scoped,\n * we need to puts unique name in each btn-pulse call.\n */\n/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n/**\n * This mixin generates keyfames.\n * Because of all keyframes can't be scoped,\n * we need to puts unique name in each btn-pulse call.\n */\n/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n/**\n * This mixin generates keyfames.\n * Because of all keyframes can't be scoped,\n * we need to puts unique name in each btn-pulse call.\n */\n/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n:host-context(.nb-theme-default) nb-card-body {\n  padding: 0 1.25rem 1.25rem 0;\n  display: -ms-flexbox;\n  display: flex;\n  -ms-flex-wrap: wrap;\n      flex-wrap: wrap; }\n\n:host-context(.nb-theme-default) .container-title {\n  margin-bottom: 0.25rem; }\n\n:host-context(.nb-theme-default) .size-container {\n  margin: 1.25rem 0 0 1.25rem; }\n\n:host-context(.nb-theme-default) .subheader {\n  margin-bottom: 0.75rem;\n  font-size: 0.875rem;\n  font-weight: 500;\n  color: #2a2a2a; }\n\n:host-context(.nb-theme-cosmic) nb-card-body {\n  padding: 0 1.25rem 1.25rem 0;\n  display: -ms-flexbox;\n  display: flex;\n  -ms-flex-wrap: wrap;\n      flex-wrap: wrap; }\n\n:host-context(.nb-theme-cosmic) .container-title {\n  margin-bottom: 0.25rem; }\n\n:host-context(.nb-theme-cosmic) .size-container {\n  margin: 1.25rem 0 0 1.25rem; }\n\n:host-context(.nb-theme-cosmic) .subheader {\n  margin-bottom: 0.75rem;\n  font-size: 0.875rem;\n  font-weight: 500;\n  color: #ffffff; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/pages/ui-features/buttons/size-buttons/size-buttons.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SizeButtonsComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var SizeButtonsComponent = /** @class */ (function () {
    function SizeButtonsComponent() {
    }
    SizeButtonsComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'ngx-size-buttons',
            styles: [__webpack_require__("../../../../../src/app/pages/ui-features/buttons/size-buttons/size-buttons.component.scss")],
            template: __webpack_require__("../../../../../src/app/pages/ui-features/buttons/size-buttons/size-buttons.component.html"),
        })
    ], SizeButtonsComponent);
    return SizeButtonsComponent;
}());



/***/ }),

/***/ "../../../../../src/app/pages/ui-features/grid/grid.component.html":
/***/ (function(module, exports) {

module.exports = "<h1>Not Implemented Yet</h1>\r\n\r\n<!--<div class=\"row\">\r\n  <div class=\"col-md-12\">\r\n    <nb-card>\r\n      <nb-card-header>\r\n        Grid System\r\n      </nb-card-header>\r\n      <nb-card-body>\r\n        <h5 class=\"grid-h\">Stacked to horizontal</h5>\r\n        <div class=\"row show-grid\">\r\n          <div class=\"col-md-1\">\r\n            <div>.col-md-1</div>\r\n          </div>\r\n          <div class=\"col-md-1\">\r\n            <div>.col-md-1</div>\r\n          </div>\r\n          <div class=\"col-md-1\">\r\n            <div>.col-md-1</div>\r\n          </div>\r\n          <div class=\"col-md-1\">\r\n            <div>.col-md-1</div>\r\n          </div>\r\n          <div class=\"col-md-1\">\r\n            <div>.col-md-1</div>\r\n          </div>\r\n          <div class=\"col-md-1\">\r\n            <div>.col-md-1</div>\r\n          </div>\r\n          <div class=\"col-md-1\">\r\n            <div>.col-md-1</div>\r\n          </div>\r\n          <div class=\"col-md-1\">\r\n            <div>.col-md-1</div>\r\n          </div>\r\n          <div class=\"col-md-1\">\r\n            <div>.col-md-1</div>\r\n          </div>\r\n          <div class=\"col-md-1\">\r\n            <div>.col-md-1</div>\r\n          </div>\r\n          <div class=\"col-md-1\">\r\n            <div>.col-md-1</div>\r\n          </div>\r\n          <div class=\"col-md-1\">\r\n            <div>.col-md-1</div>\r\n          </div>\r\n        </div>\r\n        <div class=\"row show-grid\">\r\n          <div class=\"col-md-8\">\r\n            <div>.col-md-8</div>\r\n          </div>\r\n          <div class=\"col-md-4\">\r\n            <div>.col-md-4</div>\r\n          </div>\r\n        </div>\r\n        <div class=\"row show-grid\">\r\n          <div class=\"col-md-4\">\r\n            <div>.col-md-4</div>\r\n          </div>\r\n          <div class=\"col-md-4\">\r\n            <div>.col-md-4</div>\r\n          </div>\r\n          <div class=\"col-md-4\">\r\n            <div>.col-md-4</div>\r\n          </div>\r\n        </div>\r\n        <div class=\"row show-grid\">\r\n          <div class=\"col-md-6\">\r\n            <div>.col-md-6</div>\r\n          </div>\r\n          <div class=\"col-md-6\">\r\n            <div>.col-md-6</div>\r\n          </div>\r\n        </div>\r\n\r\n        <h5 class=\"grid-h\">Mobile and desktop</h5>\r\n        <div class=\"row show-grid\">\r\n          <div class=\"col-12 col-md-8\">\r\n            <div>.col-12 .col-md-8</div>\r\n          </div>\r\n          <div class=\"col-6 col-md-4\">\r\n            <div>.col-6 .col-md-4</div>\r\n          </div>\r\n        </div>\r\n        <div class=\"row show-grid\">\r\n          <div class=\"col-6 col-md-4\">\r\n            <div>.col-6 .col-md-4</div>\r\n          </div>\r\n          <div class=\"col-6 col-md-4\">\r\n            <div>col-6 .col-md-4</div>\r\n          </div>\r\n          <div class=\"col-6 col-md-4\">\r\n            <div>.col-6 .col-md-4</div>\r\n          </div>\r\n        </div>\r\n        <div class=\"row show-grid\">\r\n          <div class=\"col-6\">\r\n            <div>.col-6</div>\r\n          </div>\r\n          <div class=\"col-6\">\r\n            <div>.col-6</div>\r\n          </div>\r\n        </div>\r\n\r\n        <h5 class=\"grid-h\">Mobile, tablet, desktop</h5>\r\n        <div class=\"row show-grid\">\r\n          <div class=\"col-12 col-sm-6 col-md-8\">\r\n            <div>.col-12 .col-sm-6 .col-md-8</div>\r\n          </div>\r\n          <div class=\"col-6 col-md-4\">\r\n            <div>.col-6 .col-md-4</div>\r\n          </div>\r\n        </div>\r\n        <div class=\"row show-grid\">\r\n          <div class=\"col-6 col-sm-4\">\r\n            <div>.col-6 .col-sm-4</div>\r\n          </div>\r\n          <div class=\"col-6 col-sm-4\">\r\n            <div>.col-6 .col-sm-4</div>\r\n          </div>\r\n          <div class=\"col-6 col-sm-4\">\r\n            <div>.col-6 .col-sm-4</div>\r\n          </div>\r\n        </div>\r\n\r\n        <h5 class=\"grid-h\">Column wrapping</h5>\r\n        <div class=\"row show-grid\">\r\n          <div class=\"col-9\">\r\n            <div>.col-9</div>\r\n          </div>\r\n          <div class=\"col-4\">\r\n            <div>.col-4<br>Since 9 + 4 = 13 &gt; 12, this 4-column-wide div gets wrapped onto a new line as one contiguous unit.\r\n            </div>\r\n          </div>\r\n          <div class=\"col-6\">\r\n            <div>.col-6<br>Subsequent columns continue along the new line.</div>\r\n          </div>\r\n        </div>\r\n\r\n        <h5 class=\"grid-h\">Responsive column resets</h5>\r\n        <div class=\"row show-grid\">\r\n          <div class=\"col-6 col-sm-3\">\r\n            <div>.col-6 .col-sm-3\r\n              <p>Resize your viewport or check it out on your phone for an example.</p>\r\n            </div>\r\n          </div>\r\n          <div class=\"col-6 col-sm-3\">\r\n            <div>.col-6 .col-sm-3</div>\r\n          </div>\r\n          <div class=\"col-6 col-sm-3\">\r\n            <div>.col-6 .col-sm-3</div>\r\n          </div>\r\n          <div class=\"col-6 col-sm-3\">\r\n            <div>.col-6 .col-sm-3</div>\r\n          </div>\r\n        </div>\r\n\r\n        <h5 class=\"grid-h\">Offsetting columns</h5>\r\n        <div class=\"row show-grid\">\r\n          <div class=\"col-md-4\">\r\n            <div>.col-md-4</div>\r\n          </div>\r\n          <div class=\"col-md-4 offset-md-4\">\r\n            <div>.col-md-4 .offset-md-4</div>\r\n          </div>\r\n        </div>\r\n        <div class=\"row show-grid\">\r\n          <div class=\"col-md-3 offset-md-3\">\r\n            <div>.col-md-3 .offset-md-3</div>\r\n          </div>\r\n          <div class=\"col-md-3 offset-md-3\">\r\n            <div>.col-md-3 .offset-md-3</div>\r\n          </div>\r\n        </div>\r\n        <div class=\"row show-grid\">\r\n          <div class=\"col-md-6 offset-md-3\">\r\n            <div>.col-md-6 .offset-md-3</div>\r\n          </div>\r\n        </div>\r\n\r\n        <h5 class=\"grid-h\">Grid options</h5>\r\n        <div class=\"table-responsive\">\r\n          <table class=\"table table-bordered table-striped\">\r\n            <thead>\r\n              <tr>\r\n                <th></th>\r\n                <th> Extra small devices\r\n                  <small>Phones (&lt;576px)</small>\r\n                </th>\r\n                <th> Small devices\r\n                  <small>Tablets (≥576px)</small>\r\n                </th>\r\n                <th> Medium devices\r\n                  <small>Desktops (≥768px)</small>\r\n                </th>\r\n                <th> Large devices\r\n                  <small>Desktops (≥992px)</small>\r\n                </th>\r\n                <th> Large devices\r\n                  <small>Desktops (≥1200px)</small>\r\n                </th>\r\n              </tr>\r\n            </thead>\r\n            <tbody>\r\n              <tr>\r\n                <th class=\"text-nowrap\" scope=\"row\">Grid behavior</th>\r\n                <td>Horizontal at all times</td>\r\n                <td colspan=\"4\">Collapsed to start, horizontal above breakpoints</td>\r\n              </tr>\r\n              <tr>\r\n                <th class=\"text-nowrap\" scope=\"row\">Container width</th>\r\n                <td>None (auto)</td>\r\n                <td>540px</td>\r\n                <td>720px</td>\r\n                <td>960px</td>\r\n                <td>1140px</td>\r\n              </tr>\r\n              <tr>\r\n                <th class=\"text-nowrap\" scope=\"row\">Class prefix</th>\r\n                <td><code>.col-</code></td>\r\n                <td><code>.col-sm-</code></td>\r\n                <td><code>.col-md-</code></td>\r\n                <td><code>.col-lg-</code></td>\r\n                <td><code>.col-xl-</code></td>\r\n              </tr>\r\n              <tr>\r\n                <th class=\"text-nowrap\" scope=\"row\"># of columns</th>\r\n                <td colspan=\"5\">12</td>\r\n              </tr>\r\n              <tr>\r\n                <th class=\"text-nowrap\" scope=\"row\">Gutter width</th>\r\n                <td colspan=\"5\">1.875rem / 30px (15px on each side of a column)</td>\r\n              </tr>\r\n              <tr>\r\n                <th class=\"text-nowrap\" scope=\"row\">Nestable</th>\r\n                <td colspan=\"5\">Yes</td>\r\n              </tr>\r\n              <tr>\r\n                <th class=\"text-nowrap\" scope=\"row\">Offsets</th>\r\n                <td colspan=\"5\">Yes</td>\r\n              </tr>\r\n              <tr>\r\n                <th class=\"text-nowrap\" scope=\"row\">Column ordering</th>\r\n                <td colspan=\"5\">Yes</td>\r\n              </tr>\r\n            </tbody>\r\n          </table>\r\n        </div>\r\n      </nb-card-body>\r\n    </nb-card>\r\n  </div>\r\n</div>\r\n-->\r\n"

/***/ }),

/***/ "../../../../../src/app/pages/ui-features/grid/grid.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports
exports.push([module.i, "@import url(https://fonts.googleapis.com/css?family=Nixie+One);", ""]);

// module
exports.push([module.i, "/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n/**\n * This is a starting point where we declare the maps of themes and globally available functions/mixins\n */\n/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n/**\n * This mixin generates keyfames.\n * Because of all keyframes can't be scoped,\n * we need to puts unique name in each btn-pulse call.\n */\n/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n/**\n * This mixin generates keyfames.\n * Because of all keyframes can't be scoped,\n * we need to puts unique name in each btn-pulse call.\n */\n/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n/**\n * This mixin generates keyfames.\n * Because of all keyframes can't be scoped,\n * we need to puts unique name in each btn-pulse call.\n */\n/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n/**\n * This mixin generates keyfames.\n * Because of all keyframes can't be scoped,\n * we need to puts unique name in each btn-pulse call.\n */\n:host-context(.nb-theme-default) .show-grid .row {\n  margin: -0.5rem; }\n\n:host-context(.nb-theme-default) .show-grid div[class^=col-] {\n  padding: 0.5rem;\n  box-sizing: border-box; }\n  :host-context(.nb-theme-default) .show-grid div[class^=col-] div {\n    text-align: center;\n    background-color: #e9edf2;\n    padding: 0.75rem 0.25rem;\n    border-radius: 0.25rem; }\n\n:host-context(.nb-theme-default) .grid-h {\n  margin-top: 1.5rem; }\n  :host-context(.nb-theme-default) .grid-h:first-child {\n    margin-top: 0; }\n\n:host-context(.nb-theme-default) .table-responsive {\n  margin-top: 1rem; }\n\n:host-context(.nb-theme-cosmic) .show-grid .row {\n  margin: -0.5rem; }\n\n:host-context(.nb-theme-cosmic) .show-grid div[class^=col-] {\n  padding: 0.5rem;\n  box-sizing: border-box; }\n  :host-context(.nb-theme-cosmic) .show-grid div[class^=col-] div {\n    text-align: center;\n    background-color: #494299;\n    padding: 0.75rem 0.25rem;\n    border-radius: 0.25rem; }\n\n:host-context(.nb-theme-cosmic) .grid-h {\n  margin-top: 1.5rem; }\n  :host-context(.nb-theme-cosmic) .grid-h:first-child {\n    margin-top: 0; }\n\n:host-context(.nb-theme-cosmic) .table-responsive {\n  margin-top: 1rem; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/pages/ui-features/grid/grid.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return GridComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var GridComponent = /** @class */ (function () {
    function GridComponent() {
    }
    GridComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'ngx-grid',
            styles: [__webpack_require__("../../../../../src/app/pages/ui-features/grid/grid.component.scss")],
            template: __webpack_require__("../../../../../src/app/pages/ui-features/grid/grid.component.html"),
        })
    ], GridComponent);
    return GridComponent;
}());



/***/ }),

/***/ "../../../../../src/app/pages/ui-features/icons/icons.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"row\">\r\n  <div class=\"col-md-12 col-lg-6\">\r\n    <nb-card class=\"nb-icons\">\r\n      <nb-card-header>\r\n        Nebular\r\n      </nb-card-header>\r\n      <nb-card-body>\r\n        <div class=\"icon\" *ngFor=\"let icon of icons.nebular\"><i class=\"{{ icon }}\"></i></div>\r\n      </nb-card-body>\r\n      <nb-card-footer>\r\n        <a href=\"https://www.npmjs.com/package/nebular-icons\" target=\"_blank\">See all Nebular icons</a>\r\n      </nb-card-footer>\r\n    </nb-card>\r\n\r\n    <nb-card>\r\n      <nb-card-header>\r\n        Font awesome icons\r\n      </nb-card-header>\r\n      <nb-card-body>\r\n        <div class=\"icon\" *ngFor=\"let icon of icons.fontAwesome\"><i class=\"fa {{ icon }}\"></i></div>\r\n      </nb-card-body>\r\n      <nb-card-footer>\r\n        <a href=\"http://fortawesome.github.io/Font-Awesome/icons/\" target=\"_blank\">\r\n          See all Font Awesome icons\r\n        </a>\r\n      </nb-card-footer>\r\n    </nb-card>\r\n  </div>\r\n\r\n  <div class=\"col-md-12 col-lg-6\">\r\n    <nb-card>\r\n      <nb-card-header>\r\n        Ionicons\r\n      </nb-card-header>\r\n      <nb-card-body>\r\n        <div class=\"icon\" *ngFor=\"let icon of icons.ionicons\"><i class=\"{{ icon }}\"></i></div>\r\n      </nb-card-body>\r\n      <nb-card-footer>\r\n        <a href=\"http://ionicons.com/\" target=\"_blank\">See all ionicons icons</a>\r\n      </nb-card-footer>\r\n    </nb-card>\r\n  </div>\r\n</div>\r\n"

/***/ }),

/***/ "../../../../../src/app/pages/ui-features/icons/icons.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".icon {\n  display: inline-block;\n  width: 4rem;\n  padding: 1.25rem 0;\n  text-align: center;\n  font-size: 1.25rem; }\n\n.nb-icons .icon {\n  padding: 0.75rem 0;\n  font-size: 1.75rem; }\n\nnb-card-body {\n  padding: 0; }\n\nnb-card-footer {\n  text-align: right; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/pages/ui-features/icons/icons.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return IconsComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var IconsComponent = /** @class */ (function () {
    function IconsComponent() {
        this.icons = {
            nebular: ['nb-alert', 'nb-angle-double-left', 'nb-arrow-down', 'nb-arrow-dropdown', 'nb-arrow-dropleft',
                'nb-arrow-dropright', 'nb-arrow-dropup', 'nb-arrow-left', 'nb-arrow-retweet', 'nb-arrow-right',
                'nb-arrow-thin-down', 'nb-arrow-thin-left', 'nb-arrow-thin-right', 'nb-arrow-thin-up',
                'nb-arrow-up', 'nb-audio', 'nb-bar-chart', 'nb-chekmark', 'nb-chevron-down',
                'nb-chevron-down-outline', 'nb-chevron-left', 'nb-chevron-left-outline', 'nb-chevron-right',
                'nb-chevron-right-outline', 'nb-chevron-up', 'nb-chevron-up-outline', 'nb-close',
                'nb-close-circled', 'nb-cloudy', 'nb-coffee-maker', 'nb-compose', 'nb-edit', 'nb-email',
                'nb-flame-circled', 'nb-gear', 'nb-grid-a', 'nb-grid-a-outline', 'nb-grid-b', 'nb-grid-b-outline',
                'nb-heart', 'nb-home', 'nb-keypad', 'nb-layout-centre', 'nb-layout-default', 'nb-layout-one-column',
                'nb-layout-sidebar-left', 'nb-layout-sidebar-right', 'nb-layout-two-column', 'nb-lightbulb',
                'nb-list', 'nb-location', 'nb-locked', 'nb-loop', 'nb-loop-circled', 'nb-menu', 'nb-notifications',
                'nb-paper-plane', 'nb-partlysunny', 'nb-pause', 'nb-pause-outline', 'nb-person', 'nb-phone',
                'nb-play', 'nb-play-outline', 'nb-plus', 'nb-plus-circled', 'nb-power', 'nb-power-circled',
                'nb-rainy', 'nb-roller-shades', 'nb-search', 'nb-shuffle', 'nb-skip-backward',
                'nb-skip-backward-outline', 'nb-skip-forward', 'nb-skip-forward-outline', 'nb-snowy-circled',
                'nb-square', 'nb-square-outline', 'nb-star', 'nb-sunny', 'nb-sunny-circled', 'nb-tables', 'nb-title',
                'nb-trash', 'nb-volume-high', 'nb-volume-mute'],
            ionicons: [
                'ion-ionic', 'ion-arrow-right-b', 'ion-arrow-down-b', 'ion-arrow-left-b', 'ion-arrow-up-c', 'ion-arrow-right-c',
                'ion-arrow-down-c', 'ion-arrow-left-c', 'ion-arrow-return-right', 'ion-arrow-return-left', 'ion-arrow-swap',
                'ion-arrow-shrink', 'ion-arrow-expand', 'ion-arrow-move', 'ion-arrow-resize', 'ion-chevron-up',
                'ion-chevron-right', 'ion-chevron-down', 'ion-chevron-left', 'ion-navicon-round', 'ion-navicon',
                'ion-drag', 'ion-log-in', 'ion-log-out', 'ion-checkmark-round', 'ion-checkmark', 'ion-checkmark-circled',
                'ion-close-round', 'ion-plus-round', 'ion-minus-round', 'ion-information', 'ion-help',
                'ion-backspace-outline', 'ion-help-buoy', 'ion-asterisk', 'ion-alert', 'ion-alert-circled',
                'ion-refresh', 'ion-loop', 'ion-shuffle', 'ion-home', 'ion-search', 'ion-flag', 'ion-star',
                'ion-heart', 'ion-heart-broken', 'ion-gear-a', 'ion-gear-b', 'ion-toggle-filled', 'ion-toggle',
                'ion-settings', 'ion-wrench', 'ion-hammer', 'ion-edit', 'ion-trash-a', 'ion-trash-b',
                'ion-document', 'ion-document-text', 'ion-clipboard', 'ion-scissors', 'ion-funnel',
                'ion-bookmark', 'ion-email', 'ion-email-unread', 'ion-folder', 'ion-filing', 'ion-archive',
                'ion-reply', 'ion-reply-all', 'ion-forward',
            ],
            fontAwesome: [
                'fa fa-adjust', 'fa fa-anchor', 'fa fa-archive', 'fa fa-area-chart', 'fa fa-arrows', 'fa fa-arrows-h',
                'fa fa-arrows-v', 'fa fa-asterisk', 'fa fa-at', 'fa fa-automobile', 'fa fa-ban', 'fa fa-bank',
                'fa fa-bar-chart', 'fa fa-bar-chart-o', 'fa fa-barcode', 'fa fa-bars', 'fa fa-bed', 'fa fa-beer',
                'fa fa-bell', 'fa fa-bell-o', 'fa fa-bell-slash', 'fa fa-bell-slash-o', 'fa fa-bicycle', 'fa fa-binoculars',
                'fa fa-birthday-cake', 'fa fa-bolt', 'fa fa-bomb', 'fa fa-book', 'fa fa-bookmark', 'fa fa-bookmark-o',
                'fa fa-briefcase', 'fa fa-bug', 'fa fa-building', 'fa fa-building-o', 'fa fa-bullhorn',
            ],
        };
    }
    IconsComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'ngx-icons',
            styles: [__webpack_require__("../../../../../src/app/pages/ui-features/icons/icons.component.scss")],
            template: __webpack_require__("../../../../../src/app/pages/ui-features/icons/icons.component.html"),
        })
    ], IconsComponent);
    return IconsComponent;
}());



/***/ }),

/***/ "../../../../../src/app/pages/ui-features/search-fields/search-fields.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"row\">\r\n  <div class=\"col-md-6\">\r\n    <nb-card>\r\n      <nb-card-header>\r\n        Layout Rotate Search\r\n      </nb-card-header>\r\n      <nb-card-body>\r\n        <nb-search type=\"rotate-layout\" tag=\"rotate-layout\"></nb-search>\r\n      </nb-card-body>\r\n    </nb-card>\r\n  </div>\r\n  <div class=\"col-md-6\">\r\n    <nb-card>\r\n      <nb-card-header>\r\n        Modal Zoomin Search\r\n      </nb-card-header>\r\n      <nb-card-body>\r\n        <nb-search type=\"modal-zoomin\" tag=\"modal-zoomin\"></nb-search>\r\n      </nb-card-body>\r\n    </nb-card>\r\n  </div>\r\n  <div class=\"col-md-6\">\r\n    <nb-card>\r\n      <nb-card-header>\r\n        Modal Move Search\r\n      </nb-card-header>\r\n      <nb-card-body>\r\n        <nb-search type=\"modal-move\" tag=\"modal-move\"></nb-search>\r\n      </nb-card-body>\r\n    </nb-card>\r\n  </div>\r\n  <div class=\"col-md-6\">\r\n    <nb-card>\r\n      <nb-card-header>\r\n        Modal Drop Search\r\n      </nb-card-header>\r\n      <nb-card-body>\r\n        <nb-search type=\"modal-drop\" tag=\"modal-drop\"></nb-search>\r\n      </nb-card-body>\r\n    </nb-card>\r\n  </div>\r\n  <div class=\"col-md-6\">\r\n    <nb-card>\r\n      <nb-card-header>\r\n        Modal Half Search\r\n      </nb-card-header>\r\n      <nb-card-body>\r\n        <nb-search type=\"modal-half\" tag=\"modal-half\"></nb-search>\r\n      </nb-card-body>\r\n    </nb-card>\r\n  </div>\r\n  <div class=\"col-md-6\">\r\n    <nb-card>\r\n      <nb-card-header>\r\n        Curtain Search\r\n      </nb-card-header>\r\n      <nb-card-body>\r\n        <nb-search type=\"curtain\" tag=\"curtain\"></nb-search>\r\n      </nb-card-body>\r\n    </nb-card>\r\n  </div>\r\n  <div class=\"col-md-6\">\r\n    <nb-card>\r\n      <nb-card-header>\r\n        Column Curtain Search\r\n      </nb-card-header>\r\n      <nb-card-body>\r\n        <nb-search type=\"column-curtain\" tag=\"column-curtain\"></nb-search>\r\n      </nb-card-body>\r\n    </nb-card>\r\n  </div>\r\n</div>\r\n\r\n"

/***/ }),

/***/ "../../../../../src/app/pages/ui-features/search-fields/search-fields.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SearchComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var SearchComponent = /** @class */ (function () {
    function SearchComponent() {
    }
    SearchComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'ngx-search-fields',
            template: __webpack_require__("../../../../../src/app/pages/ui-features/search-fields/search-fields.component.html"),
        })
    ], SearchComponent);
    return SearchComponent;
}());



/***/ }),

/***/ "../../../../../src/app/pages/ui-features/tabs/tabs.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"my-font\">\r\n  <div class=\"col-md-6\">\r\n    <nb-card>\r\n      <nb-route-tabset  [tabs]=\"tabs\"></nb-route-tabset>\r\n    </nb-card>\r\n  </div>\r\n</div>\r\n"

/***/ }),

/***/ "../../../../../src/app/pages/ui-features/tabs/tabs.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports
exports.push([module.i, "@import url(https://fonts.googleapis.com/css?family=Nixie+One);", ""]);

// module
exports.push([module.i, "/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n/**\n * This is a starting point where we declare the maps of themes and globally available functions/mixins\n */\n/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n/**\n * This mixin generates keyfames.\n * Because of all keyframes can't be scoped,\n * we need to puts unique name in each btn-pulse call.\n */\n/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n/**\n * This mixin generates keyfames.\n * Because of all keyframes can't be scoped,\n * we need to puts unique name in each btn-pulse call.\n */\n/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n/**\n * This mixin generates keyfames.\n * Because of all keyframes can't be scoped,\n * we need to puts unique name in each btn-pulse call.\n */\n/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n/**\n * This mixin generates keyfames.\n * Because of all keyframes can't be scoped,\n * we need to puts unique name in each btn-pulse call.\n */\n/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n:host-context(.nb-theme-default) nb-tabset {\n  font-family: 'Nixie One';\n  height: 100%;\n  display: -ms-flexbox;\n  display: flex;\n  -ms-flex-direction: column;\n      flex-direction: column; }\n\n:host-context(.nb-theme-default) nb-tab {\n  font-family: 'Nixie One';\n  padding: 1.25rem; }\n\n@media (max-width: 399px) {\n  :host-context(.nb-theme-default) nb-tabset /deep/ ul {\n    font-family: 'Nixie One';\n    font-size: 1rem;\n    padding: 0 0.25rem; } }\n\n:host-context(.nb-theme-cosmic) nb-tabset {\n  font-family: 'Nixie One';\n  height: 100%;\n  display: -ms-flexbox;\n  display: flex;\n  -ms-flex-direction: column;\n      flex-direction: column; }\n\n:host-context(.nb-theme-cosmic) nb-tab {\n  font-family: 'Nixie One';\n  padding: 1.25rem; }\n\n@media (max-width: 399px) {\n  :host-context(.nb-theme-cosmic) nb-tabset /deep/ ul {\n    font-family: 'Nixie One';\n    font-size: 1rem;\n    padding: 0 0.25rem; } }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/pages/ui-features/tabs/tabs.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Tab1Component; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return Tab2Component; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return Tab3Component; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return TabsComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__account__ = __webpack_require__("../../../../../src/app/pages/account.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__account_service__ = __webpack_require__("../../../../../src/app/pages/account.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__newlogin_myauth_aws_service__ = __webpack_require__("../../../../../src/app/newlogin/myauth/aws.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var Tab1Component = /** @class */ (function () {
    function Tab1Component(accountService, awsService) {
        var _this = this;
        this.accountService = accountService;
        this.awsService = awsService;
        this.accounts = [];
        this.selectedAccounts = [];
        this.account1 = new __WEBPACK_IMPORTED_MODULE_1__account__["a" /* Account */]();
        this.account2 = new __WEBPACK_IMPORTED_MODULE_1__account__["a" /* Account */]();
        this.account3 = new __WEBPACK_IMPORTED_MODULE_1__account__["a" /* Account */]();
        this.account4 = new __WEBPACK_IMPORTED_MODULE_1__account__["a" /* Account */]();
        this.account5 = new __WEBPACK_IMPORTED_MODULE_1__account__["a" /* Account */]();
        this.account6 = new __WEBPACK_IMPORTED_MODULE_1__account__["a" /* Account */]();
        this.account7 = new __WEBPACK_IMPORTED_MODULE_1__account__["a" /* Account */]();
        this.account8 = new __WEBPACK_IMPORTED_MODULE_1__account__["a" /* Account */]();
        if (!accountService.isLoggedIn) {
            return;
        }
        this.accountService
            .getOverallbalance()
            .then(function (accounts) {
            _this.accounts = _this.accounts.concat(accounts.map(function (account) {
                if (!account.account_no) {
                    account.account_no = 'no number';
                }
                return account;
            }));
        });
        this.account1.account_no = '111111';
        this.account1.amount = '1000';
        this.account1.currency = 'USD';
        this.account1.bank = 'Nordea';
        this.account1.type = 'Checking';
        this.account1.bank_img = 'assets/images/nordea.png';
        this.account2.account_no = '2222222';
        this.account2.amount = '2000';
        this.account2.currency = 'GBP';
        this.account2.bank = 'Nordea';
        this.account2.type = 'Short Term';
        this.account2.bank_img = 'assets/images/nordea.png';
        this.account3.account_no = '33333333';
        this.account3.amount = '3000';
        this.account3.currency = 'USD';
        this.account3.bank = 'Nordea';
        this.account3.type = 'Checking';
        this.account3.bank_img = 'assets/images/nordea.png';
        this.account4.account_no = '4444444444';
        this.account4.amount = '4000';
        this.account4.currency = 'GBP';
        this.account4.bank = 'RBS';
        this.account4.type = 'Long Term';
        this.account4.bank_img = 'assets/images/rbs_round.png';
        this.account5.account_no = '55555555';
        this.account5.amount = '5000';
        this.account5.currency = 'EUR';
        this.account5.bank = 'RBS';
        this.account5.type = 'Checking';
        this.account5.bank_img = 'assets/images/rbs_round.png';
        this.account6.account_no = '66666666';
        this.account6.amount = '6000';
        this.account6.currency = 'EUR';
        this.account6.bank = 'RBS';
        this.account6.type = 'Short Term';
        this.account6.bank_img = 'assets/images/rbs_round.png';
        this.account7.account_no = '777777777';
        this.account7.amount = '7000';
        this.account7.currency = 'GBP';
        this.account7.bank = 'Starling';
        this.account7.type = 'Long Term';
        this.account7.bank_img = 'assets/images/starling_round.png';
        this.account8.account_no = '888888888';
        this.account8.amount = '8000';
        this.account8.currency = 'USD';
        this.account8.bank = 'Starling';
        this.account8.type = 'Checking';
        this.account8.bank_img = 'assets/images/starling_round.png';
        this.accounts.push(this.account1);
        this.accounts.push(this.account2);
        this.accounts.push(this.account3);
        this.accounts.push(this.account4);
        this.accounts.push(this.account5);
        this.accounts.push(this.account6);
        this.accounts.push(this.account7);
        this.accounts.push(this.account8);
        this.checkingFilter();
    }
    Tab1Component.prototype.checkingFilter = function () {
        this.selectedAccounts = [];
        for (var i = 0; i < this.accounts.length; i++) {
            if (this.accounts[i].type.trim().toUpperCase() == 'Checking'.toUpperCase()) {
                this.selectedAccounts.push(this.accounts[i]);
            }
        }
    };
    Tab1Component.prototype.shortTermFilter = function () {
        this.selectedAccounts = [];
        for (var i = 0; i < this.accounts.length; i++) {
            if (this.accounts[i].type.trim().toUpperCase() == 'Short Term'.toUpperCase()) {
                this.selectedAccounts.push(this.accounts[i]);
            }
        }
    };
    Tab1Component.prototype.longTermFilter = function () {
        this.selectedAccounts = [];
        for (var i = 0; i < this.accounts.length; i++) {
            if (this.accounts[i].type.trim().toUpperCase() == 'Long Term'.toUpperCase()) {
                this.selectedAccounts.push(this.accounts[i]);
            }
        }
    };
    Tab1Component = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'ngx-tab1',
            template: "\n  <div class=\"row\">\n  <div class=\"col-md-12\">\n    <nb-card>\n      <nb-card-header>\n        <div class=\"row\">\n          <div  ngbRadioGroup\n               class=\"btn-group btn-divided-group btn-outline-divided-group btn-group-full-width col-md-8\">\n            <label ngbButtonLabel  class=\"btn btn-outline-primary btn-sm\" (click)=\"checkingFilter()\">\n              <input ngbButton type=\"radio\" value=\"left\"> Checking\n            </label>\n            <label ngbButtonLabel  class=\"btn btn-outline-primary btn-sm\" (click)=\"shortTermFilter()\">\n              <input ngbButton type=\"radio\" value=\"middle\"> Short Term\n            </label>\n            <label ngbButtonLabel  class=\"btn btn-outline-primary btn-sm\" (click)=\"longTermFilter()\">\n              <input ngbButton type=\"radio\" value=\"right\"> Long Term\n            </label>\n          </div>\n        </div>\n      </nb-card-header>\n      <nb-card-body>\n      <div  *ngFor=\"let account of selectedAccounts\">\n        <div class=\"col-md-12\">\n          <nb-card> \n            <nb-card-header>\n            <div>\n            <h6 ><b>Account&nbsp;:</b>  &nbsp; {{account.account_no}} <img src={{account.bank_img}} style=\"width:50px;\" align=\"right\"/></h6>       \n           </div>\n            </nb-card-header>\n            <nb-card-body>\n            <div>\n              <h6 ><b>Balance&nbsp;:</b>&nbsp; {{account.amount}}  &nbsp;&nbsp; {{account.currency}}\n              <button class=\"btn btn-primary btn-tn\" style=\"float: right;\" >Move Funds</button>&nbsp;&nbsp;\n              </h6>  \n              </div>            \n            </nb-card-body>\n          </nb-card>\n        </div>\n        </div>\n      </nb-card-body>\n    </nb-card>\n  </div>\n</div>\n  ",
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__account_service__["a" /* AccountService */], __WEBPACK_IMPORTED_MODULE_3__newlogin_myauth_aws_service__["a" /* AwsService */]])
    ], Tab1Component);
    return Tab1Component;
}());

var Tab2Component = /** @class */ (function () {
    function Tab2Component(accountService) {
        var _this = this;
        this.accountService = accountService;
        this.accounts = [];
        this.selectedAccounts = [];
        this.account1 = new __WEBPACK_IMPORTED_MODULE_1__account__["a" /* Account */]();
        this.account2 = new __WEBPACK_IMPORTED_MODULE_1__account__["a" /* Account */]();
        this.account3 = new __WEBPACK_IMPORTED_MODULE_1__account__["a" /* Account */]();
        this.account4 = new __WEBPACK_IMPORTED_MODULE_1__account__["a" /* Account */]();
        this.account5 = new __WEBPACK_IMPORTED_MODULE_1__account__["a" /* Account */]();
        this.account6 = new __WEBPACK_IMPORTED_MODULE_1__account__["a" /* Account */]();
        this.account7 = new __WEBPACK_IMPORTED_MODULE_1__account__["a" /* Account */]();
        this.account8 = new __WEBPACK_IMPORTED_MODULE_1__account__["a" /* Account */]();
        if (!accountService.isLoggedIn) {
            return;
        }
        this.accountService
            .getOverallbalance()
            .then(function (accounts) {
            _this.accounts = _this.accounts.concat(accounts.map(function (account) {
                if (!account.account_no) {
                    account.account_no = 'no number';
                }
                return account;
            }));
        });
        this.account1.account_no = '111111';
        this.account1.amount = '1000';
        this.account1.currency = 'USD';
        this.account1.bank = 'Nordea';
        this.account1.type = 'Checking';
        this.account1.bank_img = 'assets/images/nordea.png';
        this.account2.account_no = '2222222';
        this.account2.amount = '2000';
        this.account2.currency = 'GBP';
        this.account2.bank = 'Nordea';
        this.account2.type = 'Short Term';
        this.account2.bank_img = 'assets/images/nordea.png';
        this.account3.account_no = '33333333';
        this.account3.amount = '3000';
        this.account3.currency = 'USD';
        this.account3.bank = 'Nordea';
        this.account3.type = 'Checking';
        this.account3.bank_img = 'assets/images/nordea.png';
        this.account4.account_no = '4444444444';
        this.account4.amount = '4000';
        this.account4.currency = 'GBP';
        this.account4.bank = 'RBS';
        this.account4.type = 'Long Term';
        this.account4.bank_img = 'assets/images/rbs_round.png';
        this.account5.account_no = '55555555';
        this.account5.amount = '5000';
        this.account5.currency = 'EUR';
        this.account5.bank = 'RBS';
        this.account5.type = 'Checking';
        this.account5.bank_img = 'assets/images/rbs_round.png';
        this.account6.account_no = '66666666';
        this.account6.amount = '6000';
        this.account6.currency = 'EUR';
        this.account6.bank = 'RBS';
        this.account6.type = 'Short Term';
        this.account6.bank_img = 'assets/images/rbs_round.png';
        this.account7.account_no = '777777777';
        this.account7.amount = '7000';
        this.account7.currency = 'GBP';
        this.account7.bank = 'Starling';
        this.account7.type = 'Long Term';
        this.account7.bank_img = 'assets/images/starling_round.png';
        this.account8.account_no = '888888888';
        this.account8.amount = '8000';
        this.account8.currency = 'USD';
        this.account8.bank = 'Starling';
        this.account8.type = 'Checking';
        this.account8.bank_img = 'assets/images/starling_round.png';
        this.accounts.push(this.account1);
        this.accounts.push(this.account2);
        this.accounts.push(this.account3);
        this.accounts.push(this.account4);
        this.accounts.push(this.account5);
        this.accounts.push(this.account6);
        this.accounts.push(this.account7);
        this.accounts.push(this.account8);
        this.usdFilter();
    }
    Tab2Component.prototype.usdFilter = function () {
        this.selectedAccounts = [];
        for (var i = 0; i < this.accounts.length; i++) {
            if (this.accounts[i].currency == 'USD') {
                this.selectedAccounts.push(this.accounts[i]);
            }
        }
    };
    Tab2Component.prototype.gbpFilter = function () {
        this.selectedAccounts = [];
        for (var i = 0; i < this.accounts.length; i++) {
            if (this.accounts[i].currency == 'GBP') {
                this.selectedAccounts.push(this.accounts[i]);
            }
        }
    };
    Tab2Component.prototype.eurFilter = function () {
        this.selectedAccounts = [];
        for (var i = 0; i < this.accounts.length; i++) {
            if (this.accounts[i].currency == 'EUR') {
                this.selectedAccounts.push(this.accounts[i]);
            }
        }
    };
    Tab2Component = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'ngx-tab2',
            template: "\n  <div class=\"row\">\n  <div class=\"col-md-12\">\n    <nb-card>\n      <nb-card-header>\n        <div class=\"row\">\n          <div ngbRadioGroup\n               class=\"btn-group btn-divided-group btn-outline-divided-group btn-group-full-width col-md-8\">\n            <label ngbButtonLabel  class=\"btn btn-outline-primary btn-sm\" (click)=\"usdFilter()\">\n              <input ngbButton type=\"radio\" value=\"left\"> USD\n            </label>\n            <label ngbButtonLabel  class=\"btn btn-outline-primary btn-sm\" (click)=\"gbpFilter()\">\n              <input ngbButton type=\"radio\" value=\"middle\"> GBP\n            </label>\n            <label ngbButtonLabel  class=\"btn btn-outline-primary btn-sm\" (click)=\"eurFilter()\">\n              <input ngbButton type=\"radio\" value=\"right\"> EUR\n            </label>\n          </div>\n        </div>\n      </nb-card-header>\n      <nb-card-body>\n      <div  *ngFor=\"let account of selectedAccounts\">\n        <div class=\"col-md-12\">\n        <nb-card> \n        <nb-card-header>\n        <div>\n        <h6 ><b>Account&nbsp;:</b>  &nbsp; {{account.account_no}} &nbsp; - &nbsp; {{account.type}} <img src={{account.bank_img}} style=\"margin:auto; width:50px;\" align=\"right\"/></h6>       \n       </div>\n        </nb-card-header>\n        <nb-card-body>\n        <div>\n          <h6 ><b>Balance&nbsp;:</b>&nbsp; {{account.amount}}\n          <button class=\"btn btn-primary btn-tn\" style=\"float: right;\" >Move Funds</button>&nbsp;&nbsp;\n          </h6>  \n          </div>            \n        </nb-card-body>\n      </nb-card>\n        </div>\n        </div>\n      </nb-card-body>\n    </nb-card>\n  </div>\n</div>\n  ",
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__account_service__["a" /* AccountService */]])
    ], Tab2Component);
    return Tab2Component;
}());

var Tab3Component = /** @class */ (function () {
    function Tab3Component(accountService) {
        var _this = this;
        this.accountService = accountService;
        this.accounts = [];
        this.selectedAccounts = [];
        this.account1 = new __WEBPACK_IMPORTED_MODULE_1__account__["a" /* Account */]();
        this.account2 = new __WEBPACK_IMPORTED_MODULE_1__account__["a" /* Account */]();
        this.account3 = new __WEBPACK_IMPORTED_MODULE_1__account__["a" /* Account */]();
        this.account4 = new __WEBPACK_IMPORTED_MODULE_1__account__["a" /* Account */]();
        this.account5 = new __WEBPACK_IMPORTED_MODULE_1__account__["a" /* Account */]();
        this.account6 = new __WEBPACK_IMPORTED_MODULE_1__account__["a" /* Account */]();
        this.account7 = new __WEBPACK_IMPORTED_MODULE_1__account__["a" /* Account */]();
        this.account8 = new __WEBPACK_IMPORTED_MODULE_1__account__["a" /* Account */]();
        if (!accountService.isLoggedIn) {
            return;
        }
        this.accountService
            .getOverallbalance()
            .then(function (accounts) {
            _this.accounts = _this.accounts.concat(accounts.map(function (account) {
                if (!account.account_no) {
                    account.account_no = 'no number';
                }
                return account;
            }));
        });
        this.account1.account_no = '111111';
        this.account1.amount = '1000';
        this.account1.currency = 'USD';
        this.account1.bank = 'Nordea';
        this.account1.type = 'Checking';
        this.account1.bank_img = 'assets/images/nordea.png';
        this.account2.account_no = '2222222';
        this.account2.amount = '2000';
        this.account2.currency = 'GBP';
        this.account2.bank = 'Nordea';
        this.account2.type = 'Short Term';
        this.account2.bank_img = 'assets/images/nordea.png';
        this.account3.account_no = '33333333';
        this.account3.amount = '3000';
        this.account3.currency = 'USD';
        this.account3.bank = 'Nordea';
        this.account3.type = 'Checking';
        this.account3.bank_img = 'assets/images/nordea.png';
        this.account4.account_no = '4444444444';
        this.account4.amount = '4000';
        this.account4.currency = 'GBP';
        this.account4.bank = 'RBS';
        this.account4.type = 'Long Term';
        this.account4.bank_img = 'assets/images/rbs_round.png';
        this.account5.account_no = '55555555';
        this.account5.amount = '5000';
        this.account5.currency = 'EUR';
        this.account5.bank = 'RBS';
        this.account5.type = 'Checking';
        this.account5.bank_img = 'assets/images/rbs_round.png';
        this.account6.account_no = '66666666';
        this.account6.amount = '6000';
        this.account6.currency = 'EUR';
        this.account6.bank = 'RBS';
        this.account6.type = 'Short Term';
        this.account6.bank_img = 'assets/images/rbs_round.png';
        this.account7.account_no = '777777777';
        this.account7.amount = '7000';
        this.account7.currency = 'GBP';
        this.account7.bank = 'Starling';
        this.account7.type = 'Long Term';
        this.account7.bank_img = 'assets/images/starling_round.png';
        this.account8.account_no = '888888888';
        this.account8.amount = '8000';
        this.account8.currency = 'USD';
        this.account8.bank = 'Starling';
        this.account8.type = 'Checking';
        this.account8.bank_img = 'assets/images/starling_round.png';
        this.accounts.push(this.account1);
        this.accounts.push(this.account2);
        this.accounts.push(this.account3);
        this.accounts.push(this.account4);
        this.accounts.push(this.account5);
        this.accounts.push(this.account6);
        this.accounts.push(this.account7);
        this.accounts.push(this.account8);
        this.nordeaFilter();
    }
    Tab3Component.prototype.nordeaFilter = function () {
        this.selectedAccounts = [];
        for (var i = 0; i < this.accounts.length; i++) {
            if (this.accounts[i].bank == 'Nordea') {
                this.selectedAccounts.push(this.accounts[i]);
            }
        }
    };
    Tab3Component.prototype.rbsFilter = function () {
        this.selectedAccounts = [];
        for (var i = 0; i < this.accounts.length; i++) {
            if (this.accounts[i].bank == 'RBS') {
                this.selectedAccounts.push(this.accounts[i]);
            }
        }
    };
    Tab3Component.prototype.starlingFilter = function () {
        this.selectedAccounts = [];
        for (var i = 0; i < this.accounts.length; i++) {
            if (this.accounts[i].bank == 'Starling') {
                this.selectedAccounts.push(this.accounts[i]);
            }
        }
    };
    Tab3Component = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'ngx-tab3',
            template: "\n  <div class=\"row\">\n  <div class=\"col-md-12\">\n    <nb-card>\n      <nb-card-header>\n        <div class=\"row\">\n          <div ngbRadioGroup\n               class=\"btn-group btn-divided-group btn-outline-divided-group btn-group-full-width col-md-8\">\n            <label ngbButtonLabel  class=\"btn btn-outline-primary btn-sm\" (click)=\"nordeaFilter()\">\n              <input ngbButton type=\"radio\" value=\"left\"> Nordea\n            </label>\n            <label ngbButtonLabel  class=\"btn btn-outline-primary btn-sm\" (click)=\"rbsFilter()\">\n              <input ngbButton type=\"radio\" value=\"middle\"> RBS\n            </label>\n            <label ngbButtonLabel   class=\"btn btn-outline-primary btn-sm\" (click)=\"starlingFilter()\">\n              <input ngbButton type=\"radio\" value=\"right\"> Starling\n            </label>\n          </div>\n        </div>\n      </nb-card-header>\n      <nb-card-body>\n      <div  *ngFor=\"let account of selectedAccounts\">\n        <div class=\"col-md-12\">\n          <nb-card> \n            <nb-card-header>\n            <div>\n            <h6 ><b>Account&nbsp;:</b>  &nbsp; {{account.account_no}} &nbsp; - &nbsp; {{account.type}} <img src={{account.bank_img}} style=\"margin:auto; width:50px;\" align=\"right\"/></h6>       \n           </div>\n            </nb-card-header>\n            <nb-card-body>\n            <div>\n              <h6 ><b>Balance&nbsp;:</b>&nbsp; {{account.amount}}  &nbsp;&nbsp; {{account.currency}}\n              <button class=\"btn btn-primary btn-tn\" style=\"float: right;\" >Move Funds</button>&nbsp;&nbsp;\n              </h6>  \n              </div>            \n            </nb-card-body>\n          </nb-card>\n        </div>\n        </div>\n      </nb-card-body>\n    </nb-card>\n  </div>\n</div> \n",
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__account_service__["a" /* AccountService */]])
    ], Tab3Component);
    return Tab3Component;
}());

var TabsComponent = /** @class */ (function () {
    function TabsComponent() {
        this.tabs = [
            {
                title: 'Accoxunts',
                route: '/pages/ui-features/tabs/tab1',
            },
            {
                title: 'Currencies',
                route: '/pages/ui-features/tabs/tab2',
            },
            {
                title: 'Banks',
                route: '/pages/ui-features/tabs/tab3',
            }
        ];
    }
    TabsComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'ngx-tabs',
            styles: [__webpack_require__("../../../../../src/app/pages/ui-features/tabs/tabs.component.scss")],
            template: __webpack_require__("../../../../../src/app/pages/ui-features/tabs/tabs.component.html"),
        })
    ], TabsComponent);
    return TabsComponent;
}());



/***/ }),

/***/ "../../../../../src/app/pages/ui-features/typography/typography.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"row\">\r\n  <div class=\"col-xxxl-8\">\r\n    <div class=\"row\">\r\n      <div class=\"col-md-6 col-xxl-7\">\r\n        <nb-card size=\"medium\">\r\n          <nb-card-header>\r\n            Used Fonts\r\n          </nb-card-header>\r\n          <nb-card-body>\r\n            <div class=\"font-row font-secondary\">\r\n              <div class=\"header\">\r\n                <div class=\"name bold\">Exo</div>\r\n\r\n                <div class=\"variants\">\r\n                  <span class=\"font-w-bold\">Bold</span>\r\n                  <span class=\"font-w-regular\">Regular</span>\r\n                  <span class=\"font-w-light\">Light</span>\r\n                </div>\r\n              </div>\r\n              <p>\r\n                Far far away, behind the word mountains, far from the countries Vokalia and Consonantia,\r\n                there live the blind texts.\r\n                Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean.\r\n              </p>\r\n            </div>\r\n\r\n            <div class=\"font-row font-main\">\r\n              <div class=\"header\">\r\n                <div class=\"name bold\">Roboto</div>\r\n\r\n                <div class=\"variants\">\r\n                  <span class=\"font-w-bold\">Bold</span>\r\n                  <span class=\"font-w-regular\">Regular</span>\r\n                  <span class=\"font-w-light\">Light</span>\r\n                </div>\r\n              </div>\r\n              <p>\r\n                Far far away, behind the word mountains, far from the countries Vokalia and Consonantia,\r\n                there live the blind texts.\r\n                Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean.\r\n              </p>\r\n            </div>\r\n          </nb-card-body>\r\n        </nb-card>\r\n\r\n        <nb-card size=\"small\">\r\n          <nb-card-header>\r\n            Article Example\r\n          </nb-card-header>\r\n          <nb-card-body>\r\n            <h4>So what's About the grammar?</h4>\r\n            <p class=\"text-indent\">\r\n              Far far away, behind the word mountains, far from the countries <strong>Vokalia</strong> and <strong>Consonantia</strong>,\r\n              there live the blind texts.\r\n              They live in <strong>Bookmarksgrove</strong>.\r\n            </p>\r\n            <p class=\"text-indent\">\r\n              A small <strong>river named Duden</strong> flows by their place and supplies it with the\r\n              necessary regelialia. It is a paradisematic country, in which roasted parts of sentences fly\r\n              into your mouth.\r\n              Even the all-powerful Pointing has no control about the blind texts it is an almost\r\n              unorthographic life One day however a small\r\n              line of blind text by the name of\r\n              <a href=\"http://google.com\" target=\"_blank\">Lorem Ipsum</a> decided to leave for\r\n              the far <strong>World of Grammar</strong>.\r\n            </p>\r\n          </nb-card-body>\r\n        </nb-card>\r\n      </div>\r\n      <div class=\"col-md-6 col-xxl-5\">\r\n        <nb-card size=\"medium\" class=\"headings-card\">\r\n          <nb-card-header>\r\n            Headings\r\n          </nb-card-header>\r\n          <nb-card-body>\r\n            <div class=\"header\">\r\n              <div>\r\n                <h1>H1. Heading</h1>\r\n              </div>\r\n\r\n              <div class=\"detail font-w-light\">\r\n                Demibold 2.5rem (40px)\r\n              </div>\r\n            </div>\r\n            <div class=\"header\">\r\n              <div>\r\n                <h2>H2. Heading</h2>\r\n              </div>\r\n\r\n              <div class=\"detail font-w-light\">\r\n                Demibold 2rem (32px)\r\n              </div>\r\n            </div>\r\n            <div class=\"header\">\r\n              <div>\r\n                <h3>H3. Heading</h3>\r\n              </div>\r\n\r\n              <div class=\"detail font-w-light\">\r\n                Demibold 1.75rem (28px)\r\n              </div>\r\n            </div>\r\n            <div class=\"header\">\r\n              <div>\r\n                <h4>H4. Heading</h4>\r\n              </div>\r\n\r\n              <div class=\"detail font-w-light\">\r\n                Demibold 1.5rem (24px)\r\n              </div>\r\n            </div>\r\n            <div class=\"header\">\r\n              <div>\r\n                <h5>H5. Heading</h5>\r\n              </div>\r\n\r\n              <div class=\"detail font-w-light\">\r\n                Demibold 1.25rem (20px)\r\n              </div>\r\n            </div>\r\n            <div class=\"header\">\r\n              <div>\r\n                <h6>H6. Heading</h6>\r\n              </div>\r\n\r\n              <div class=\"detail font-w-light\">\r\n                Demibold 1rem (16px)\r\n              </div>\r\n            </div>\r\n          </nb-card-body>\r\n        </nb-card>\r\n\r\n        <nb-card size=\"small\">\r\n          <nb-card-header>\r\n            Blockquotes\r\n          </nb-card-header>\r\n          <nb-card-body>\r\n            <blockquote class=\"blockquote\">\r\n              <p class=\"mb-0\">Far far away, behind the word mountains, far from the countries Vokalia and Consonantia.\r\n            </blockquote>\r\n            <blockquote class=\"blockquote\">\r\n              <p class=\"mb-0\">Far far away, behind the word mountains, far from the countries.</p>\r\n              <footer class=\"blockquote-footer\">Vladimir Lugovsky</footer>\r\n            </blockquote>\r\n            <blockquote class=\"blockquote-reverse\">\r\n              <p class=\"mb-0\">Far far away, behind the word mountains.</p>\r\n              <footer class=\"blockquote-footer\">Vladimir Lugovsky</footer>\r\n            </blockquote>\r\n          </nb-card-body>\r\n        </nb-card>\r\n      </div>\r\n    </div>\r\n  </div>\r\n\r\n  <div class=\"col-md-6 col-xxxl-4\">\r\n    <nb-card [size]=\"breakpoint.width >= breakpoints.xxxl ? 'xxlarge' : 'large'\">\r\n      <nb-card-header>\r\n        Font Colors\r\n      </nb-card-header>\r\n      <nb-card-body>\r\n        <div class=\"colors\">\r\n          <div class=\"item text-heading\">\r\n            <div class=\"color bg-heading\"></div>\r\n            <div>\r\n              <h5 class=\"text-heading\">Heading Text</h5>\r\n              Far far away, behind the your awesomeness.\r\n            </div>\r\n          </div>\r\n          <div class=\"item text-body\">\r\n            <div class=\"color bg-body\"></div>\r\n            <div>\r\n              <h5 class=\"text-body\">Body Text</h5>\r\n              Far far away, behind the your awesomeness.\r\n            </div>\r\n          </div>\r\n          <div class=\"item text-hint\">\r\n            <div class=\"color bg-hint\"></div>\r\n            <div>\r\n              <h5 class=\"text-hint\">Hint Text</h5>\r\n              Far far away, behind the your awesomeness.\r\n            </div>\r\n          </div>\r\n          <div class=\"item text-link\">\r\n            <div class=\"color bg-link\"></div>\r\n            <div>\r\n              <h5 class=\"text-link\">Link Text</h5>\r\n              Far far away, behind the your awesomeness.\r\n            </div>\r\n          </div>\r\n          <div class=\"item text-primary\">\r\n            <div class=\"color bg-primary\"></div>\r\n            <div>\r\n              <h5 class=\"text-primary\">Primary Text</h5>\r\n              Far far away, behind the your awesomeness.\r\n            </div>\r\n          </div>\r\n          <div class=\"item text-success\">\r\n            <div class=\"color bg-success\"></div>\r\n            <div>\r\n              <h5 class=\"text-success\">Success Text</h5>\r\n              Far far away, behind the your awesomeness.\r\n            </div>\r\n          </div>\r\n          <div class=\"item text-info\">\r\n            <div class=\"color bg-info\"></div>\r\n            <div>\r\n              <h5 class=\"text-info\">Info Text</h5>\r\n              Far far away, behind the your awesomeness.\r\n            </div>\r\n          </div>\r\n          <div class=\"item text-warning\">\r\n            <div class=\"color bg-warning\"></div>\r\n            <div>\r\n              <h5 class=\"text-warning\">Warning Text</h5>\r\n              Far far away, behind the your awesomeness.\r\n            </div>\r\n          </div>\r\n          <div class=\"item text-danger\">\r\n            <div class=\"color bg-danger\"></div>\r\n            <div>\r\n              <h5 class=\"text-danger\">Danger Text</h5>\r\n              Far far away, behind the your awesomeness.\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </nb-card-body>\r\n    </nb-card>\r\n  </div>\r\n\r\n  <div class=\"col-md-6 col-xxxl-4\">\r\n    <nb-card size=\"large\">\r\n      <nb-card-header>\r\n        Alerts\r\n      </nb-card-header>\r\n      <nb-card-body>\r\n        <div class=\"alert alert-primary\" role=\"alert\">\r\n          <strong>Oh snap!</strong> <a href=\"#\" class=\"alert-link\">Change a few things up</a> and try submitting again.\r\n        </div>\r\n        <div class=\"alert alert-hint\" role=\"alert\">\r\n          <strong>Heads up!</strong> This <a href=\"#\" class=\"alert-link\">alert needs your attention</a>, but it's not super important.\r\n        </div>\r\n        <div class=\"alert alert-success\" role=\"alert\">\r\n          <strong>Well done!</strong> You successfully read <a href=\"#\" class=\"alert-link\">this important alert message</a>.\r\n        </div>\r\n        <div class=\"alert alert-info\" role=\"alert\">\r\n          <strong>Heads up!</strong> This <a href=\"#\" class=\"alert-link\">alert needs your attention</a>, but it's not super important.\r\n        </div>\r\n        <div class=\"alert alert-warning\" role=\"alert\">\r\n          <strong>Warning!</strong> Better check yourself, you're <a href=\"#\" class=\"alert-link\">not looking too good</a>.\r\n        </div>\r\n        <div class=\"alert alert-danger\" role=\"alert\">\r\n          <strong>Oh snap!</strong> <a href=\"#\" class=\"alert-link\">Change a few things up</a> and try submitting again.\r\n        </div>\r\n      </nb-card-body>\r\n    </nb-card>\r\n  </div>\r\n\r\n  <div class=\"col-md-6 col-xxxl-4\">\r\n    <nb-card size=\"large\">\r\n      <nb-card-header>\r\n        Text Types\r\n      </nb-card-header>\r\n      <nb-card-body>\r\n        <h4>Highlighted text</h4>\r\n        <p class=\"mb-5\">\r\n          Far far away, behind the word mountains, far from the countries\r\n          Vokalia and <mark>Consonantia, there live the blind texts.</mark>\r\n        </p>\r\n        <h4>Bold Text</h4>\r\n        <p class=\"mb-5\">\r\n          Far far away, behind the word mountains, far from the countries\r\n          Vokalia and <strong>Consonantia, there live the blind texts.</strong>\r\n        </p>\r\n        <h4>Link Text</h4>\r\n        <p class=\"mb-5\">\r\n          Far far away, behind the word mountains, far from the countries\r\n          Vokalia and <a href=\"http://google.com\" target=\"_blank\">Consonantia, there live the blind texts.</a>\r\n        </p>\r\n      </nb-card-body>\r\n    </nb-card>\r\n  </div>\r\n\r\n  <div class=\"col-md-6 col-xxxl-4\">\r\n    <nb-card size=\"large\">\r\n      <nb-card-header>\r\n        Lists\r\n      </nb-card-header>\r\n      <nb-card-body>\r\n        <h4>Ordered List</h4>\r\n        <ol class=\"mb-5\">\r\n          <li>Far far away, behind the word mountains</li>\r\n          <li>Far from the countries Vokalia and Consonantia</li>\r\n          <li>There live the blind texts.</li>\r\n          <li>Right at the coast of the Semantics.</li>\r\n          <li>A small river named Duden flows</li>\r\n        </ol>\r\n\r\n        <h4>Unordered List</h4>\r\n        <ul class=\"mb-5\">\r\n          <li>Far far away, behind the word mountains</li>\r\n          <li>Far from the countries Vokalia and Consonantia</li>\r\n          <li>There live the blind texts.</li>\r\n          <li>Right at the coast of the Semantics.</li>\r\n          <li>A small river named Duden flows</li>\r\n        </ul>\r\n      </nb-card-body>\r\n    </nb-card>\r\n  </div>\r\n</div>\r\n"

/***/ }),

/***/ "../../../../../src/app/pages/ui-features/typography/typography.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports
exports.push([module.i, "@import url(https://fonts.googleapis.com/css?family=Nixie+One);", ""]);

// module
exports.push([module.i, "/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n/**\n * This is a starting point where we declare the maps of themes and globally available functions/mixins\n */\n/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n/**\n * This mixin generates keyfames.\n * Because of all keyframes can't be scoped,\n * we need to puts unique name in each btn-pulse call.\n */\n/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n/**\n * This mixin generates keyfames.\n * Because of all keyframes can't be scoped,\n * we need to puts unique name in each btn-pulse call.\n */\n/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n/**\n * This mixin generates keyfames.\n * Because of all keyframes can't be scoped,\n * we need to puts unique name in each btn-pulse call.\n */\n/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n/**\n * This mixin generates keyfames.\n * Because of all keyframes can't be scoped,\n * we need to puts unique name in each btn-pulse call.\n */\n:host-context(.nb-theme-default) .font-secondary .font-header .name {\n  font-size: 4.5rem;\n  line-height: 4rem;\n  font-weight: 600; }\n\n:host-context(.nb-theme-default) .font-main .font-header .name {\n  font-size: 3rem;\n  font-weight: 600; }\n\n:host-context(.nb-theme-default) .font-row:first-child {\n  margin-bottom: 2rem; }\n\n:host-context(.nb-theme-default) .font-row .header {\n  -ms-flex-align: baseline;\n      align-items: baseline; }\n\n:host-context(.nb-theme-default) .font-row p {\n  margin: 0; }\n\n:host-context(.nb-theme-default) .headings-card nb-card-body {\n  padding: 1rem 1.25rem; }\n\n:host-context(.nb-theme-default) .headings-card .header {\n  padding-bottom: 0.675rem;\n  margin-bottom: 0.675rem; }\n  :host-context(.nb-theme-default) .headings-card .header:last-child {\n    padding-bottom: 0;\n    margin-bottom: 0; }\n\n:host-context(.nb-theme-default) .header {\n  display: -ms-flexbox;\n  display: flex;\n  -ms-flex-wrap: wrap;\n      flex-wrap: wrap;\n  -ms-flex-align: center;\n      align-items: center;\n  padding-bottom: 1rem;\n  margin-bottom: 1rem;\n  border-bottom: 1px solid #ebeef2;\n  color: #2a2a2a; }\n  :host-context(.nb-theme-default) .header:last-child {\n    border-bottom: none;\n    padding: 0;\n    margin: 0; }\n  :host-context(.nb-theme-default) .header div:first-child {\n    flex: 2;\n    -ms-flex: 2 1 auto;\n    line-height: 1;\n    -ms-flex-align: end;\n        align-items: flex-end; }\n    :host-context(.nb-theme-default) .header div:first-child h1, :host-context(.nb-theme-default) .header div:first-child h2, :host-context(.nb-theme-default) .header div:first-child h3, :host-context(.nb-theme-default) .header div:first-child h4, :host-context(.nb-theme-default) .header div:first-child h5, :host-context(.nb-theme-default) .header div:first-child h6 {\n      margin-bottom: 0; }\n  :host-context(.nb-theme-default) .header .variants {\n    flex: 1;\n    -ms-flex: 1 1 auto;\n    display: -ms-flexbox;\n    display: flex;\n    -ms-flex-pack: justify;\n        justify-content: space-between;\n    -ms-flex-align: end;\n        align-items: flex-end; }\n    :host-context(.nb-theme-default) .header .variants span {\n      padding-left: 1rem;\n      font-size: 1.5rem; }\n  :host-context(.nb-theme-default) .header .detail {\n    -ms-flex: 1;\n        flex: 1;\n    display: -ms-flexbox;\n    display: flex;\n    -ms-flex-pack: end;\n        justify-content: flex-end;\n    -ms-flex-align: end;\n        align-items: flex-end;\n    color: #a4abb3; }\n\n:host-context(.nb-theme-default) .colors {\n  display: -ms-flexbox;\n  display: flex;\n  -ms-flex-direction: column;\n      flex-direction: column; }\n  :host-context(.nb-theme-default) .colors .item {\n    display: -ms-flexbox;\n    display: flex;\n    -ms-flex-align: center;\n        align-items: center;\n    margin-bottom: 1.25rem; }\n    :host-context(.nb-theme-default) .colors .item:last-child {\n      margin-bottom: 0; }\n  :host-context(.nb-theme-default) .colors .color {\n    width: 86px;\n    height: 60px;\n    border-top-right-radius: 1rem;\n    border-bottom-left-radius: 1rem;\n    margin-right: 1rem; }\n  :host-context(.nb-theme-default) .colors h1, :host-context(.nb-theme-default) .colors h2, :host-context(.nb-theme-default) .colors h3, :host-context(.nb-theme-default) .colors h4, :host-context(.nb-theme-default) .colors h5, :host-context(.nb-theme-default) .colors h6 {\n    margin-bottom: 0.25rem; }\n\n:host-context(.nb-theme-default) .text-link {\n  color: #3dcc6d; }\n\n:host-context(.nb-theme-default) .bg-link {\n  background: #3dcc6d; }\n\n:host-context(.nb-theme-cosmic) .font-secondary .font-header .name {\n  font-size: 4.5rem;\n  line-height: 4rem;\n  font-weight: 600; }\n\n:host-context(.nb-theme-cosmic) .font-main .font-header .name {\n  font-size: 3rem;\n  font-weight: 600; }\n\n:host-context(.nb-theme-cosmic) .font-row:first-child {\n  margin-bottom: 2rem; }\n\n:host-context(.nb-theme-cosmic) .font-row .header {\n  -ms-flex-align: baseline;\n      align-items: baseline; }\n\n:host-context(.nb-theme-cosmic) .font-row p {\n  margin: 0; }\n\n:host-context(.nb-theme-cosmic) .headings-card nb-card-body {\n  padding: 1rem 1.25rem; }\n\n:host-context(.nb-theme-cosmic) .headings-card .header {\n  padding-bottom: 0.675rem;\n  margin-bottom: 0.675rem; }\n  :host-context(.nb-theme-cosmic) .headings-card .header:last-child {\n    padding-bottom: 0;\n    margin-bottom: 0; }\n\n:host-context(.nb-theme-cosmic) .header {\n  display: -ms-flexbox;\n  display: flex;\n  -ms-flex-wrap: wrap;\n      flex-wrap: wrap;\n  -ms-flex-align: center;\n      align-items: center;\n  padding-bottom: 1rem;\n  margin-bottom: 1rem;\n  border-bottom: 1px solid #342e73;\n  color: #ffffff; }\n  :host-context(.nb-theme-cosmic) .header:last-child {\n    border-bottom: none;\n    padding: 0;\n    margin: 0; }\n  :host-context(.nb-theme-cosmic) .header div:first-child {\n    flex: 2;\n    -ms-flex: 2 1 auto;\n    line-height: 1;\n    -ms-flex-align: end;\n        align-items: flex-end; }\n    :host-context(.nb-theme-cosmic) .header div:first-child h1, :host-context(.nb-theme-cosmic) .header div:first-child h2, :host-context(.nb-theme-cosmic) .header div:first-child h3, :host-context(.nb-theme-cosmic) .header div:first-child h4, :host-context(.nb-theme-cosmic) .header div:first-child h5, :host-context(.nb-theme-cosmic) .header div:first-child h6 {\n      margin-bottom: 0; }\n  :host-context(.nb-theme-cosmic) .header .variants {\n    flex: 1;\n    -ms-flex: 1 1 auto;\n    display: -ms-flexbox;\n    display: flex;\n    -ms-flex-pack: justify;\n        justify-content: space-between;\n    -ms-flex-align: end;\n        align-items: flex-end; }\n    :host-context(.nb-theme-cosmic) .header .variants span {\n      padding-left: 1rem;\n      font-size: 1.5rem; }\n  :host-context(.nb-theme-cosmic) .header .detail {\n    -ms-flex: 1;\n        flex: 1;\n    display: -ms-flexbox;\n    display: flex;\n    -ms-flex-pack: end;\n        justify-content: flex-end;\n    -ms-flex-align: end;\n        align-items: flex-end;\n    color: #a1a1e5; }\n\n:host-context(.nb-theme-cosmic) .colors {\n  display: -ms-flexbox;\n  display: flex;\n  -ms-flex-direction: column;\n      flex-direction: column; }\n  :host-context(.nb-theme-cosmic) .colors .item {\n    display: -ms-flexbox;\n    display: flex;\n    -ms-flex-align: center;\n        align-items: center;\n    margin-bottom: 1.25rem; }\n    :host-context(.nb-theme-cosmic) .colors .item:last-child {\n      margin-bottom: 0; }\n  :host-context(.nb-theme-cosmic) .colors .color {\n    width: 86px;\n    height: 60px;\n    border-top-right-radius: 1rem;\n    border-bottom-left-radius: 1rem;\n    margin-right: 1rem; }\n  :host-context(.nb-theme-cosmic) .colors h1, :host-context(.nb-theme-cosmic) .colors h2, :host-context(.nb-theme-cosmic) .colors h3, :host-context(.nb-theme-cosmic) .colors h4, :host-context(.nb-theme-cosmic) .colors h5, :host-context(.nb-theme-cosmic) .colors h6 {\n    margin-bottom: 0.25rem; }\n\n:host-context(.nb-theme-cosmic) .text-link {\n  color: #00f9a6; }\n\n:host-context(.nb-theme-cosmic) .bg-link {\n  background: #00f9a6; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/pages/ui-features/typography/typography.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TypographyComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__nebular_theme__ = __webpack_require__("../../../../@nebular/theme/index.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var TypographyComponent = /** @class */ (function () {
    function TypographyComponent(themeService, breakpointService) {
        var _this = this;
        this.themeService = themeService;
        this.breakpointService = breakpointService;
        this.breakpoints = this.breakpointService.getBreakpointsMap();
        this.themeSubscription = this.themeService.onMediaQueryChange()
            .subscribe(function (_a) {
            var oldValue = _a[0], newValue = _a[1];
            _this.breakpoint = newValue;
        });
    }
    TypographyComponent.prototype.ngOnDestroy = function () {
        this.themeSubscription.unsubscribe();
    };
    TypographyComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'ngx-typography',
            styles: [__webpack_require__("../../../../../src/app/pages/ui-features/typography/typography.component.scss")],
            template: __webpack_require__("../../../../../src/app/pages/ui-features/typography/typography.component.html"),
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__nebular_theme__["o" /* NbThemeService */],
            __WEBPACK_IMPORTED_MODULE_1__nebular_theme__["f" /* NbMediaBreakpointsService */]])
    ], TypographyComponent);
    return TypographyComponent;
}());



/***/ }),

/***/ "../../../../../src/app/pages/ui-features/ui-features-routing.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UiFeaturesRoutingModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ui_features_component__ = __webpack_require__("../../../../../src/app/pages/ui-features/ui-features.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__buttons_buttons_component__ = __webpack_require__("../../../../../src/app/pages/ui-features/buttons/buttons.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__grid_grid_component__ = __webpack_require__("../../../../../src/app/pages/ui-features/grid/grid.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__icons_icons_component__ = __webpack_require__("../../../../../src/app/pages/ui-features/icons/icons.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__typography_typography_component__ = __webpack_require__("../../../../../src/app/pages/ui-features/typography/typography.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__tabs_tabs_component__ = __webpack_require__("../../../../../src/app/pages/ui-features/tabs/tabs.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__search_fields_search_fields_component__ = __webpack_require__("../../../../../src/app/pages/ui-features/search-fields/search-fields.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};









var routes = [{
        path: '',
        component: __WEBPACK_IMPORTED_MODULE_2__ui_features_component__["a" /* UiFeaturesComponent */],
        children: [{
                path: '',
                redirectTo: 'buttons',
                pathMatch: 'full'
            }, {
                path: 'buttons',
                component: __WEBPACK_IMPORTED_MODULE_3__buttons_buttons_component__["a" /* ButtonsComponent */],
            }, {
                path: 'grid',
                component: __WEBPACK_IMPORTED_MODULE_4__grid_grid_component__["a" /* GridComponent */],
            }, {
                path: 'icons',
                component: __WEBPACK_IMPORTED_MODULE_5__icons_icons_component__["a" /* IconsComponent */],
            }, {
                path: 'typography',
                component: __WEBPACK_IMPORTED_MODULE_6__typography_typography_component__["a" /* TypographyComponent */],
            }, {
                path: 'search-fields',
                component: __WEBPACK_IMPORTED_MODULE_8__search_fields_search_fields_component__["a" /* SearchComponent */],
            }, {
                path: 'tabs',
                component: __WEBPACK_IMPORTED_MODULE_7__tabs_tabs_component__["d" /* TabsComponent */],
                children: [{
                        path: '',
                        redirectTo: 'tab1',
                        pathMatch: 'full',
                    }, {
                        path: 'tab1',
                        component: __WEBPACK_IMPORTED_MODULE_7__tabs_tabs_component__["a" /* Tab1Component */],
                    }, {
                        path: 'tab2',
                        component: __WEBPACK_IMPORTED_MODULE_7__tabs_tabs_component__["b" /* Tab2Component */],
                    }, {
                        path: 'tab3',
                        component: __WEBPACK_IMPORTED_MODULE_7__tabs_tabs_component__["c" /* Tab3Component */],
                    }],
            }],
    }];
var UiFeaturesRoutingModule = /** @class */ (function () {
    function UiFeaturesRoutingModule() {
    }
    UiFeaturesRoutingModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            imports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["d" /* RouterModule */].forChild(routes)],
            exports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["d" /* RouterModule */]],
        })
    ], UiFeaturesRoutingModule);
    return UiFeaturesRoutingModule;
}());



/***/ }),

/***/ "../../../../../src/app/pages/ui-features/ui-features.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UiFeaturesComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var UiFeaturesComponent = /** @class */ (function () {
    function UiFeaturesComponent() {
    }
    UiFeaturesComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'ngx-ui-features',
            template: "\n    <router-outlet ></router-outlet>\n  \n  ",
        })
    ], UiFeaturesComponent);
    return UiFeaturesComponent;
}());



/***/ }),

/***/ "../../../../../src/app/pages/ui-features/ui-features.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UiFeaturesModule", function() { return UiFeaturesModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__theme_theme_module__ = __webpack_require__("../../../../../src/app/@theme/theme.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__buttons_buttons_module__ = __webpack_require__("../../../../../src/app/pages/ui-features/buttons/buttons.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ui_features_routing_module__ = __webpack_require__("../../../../../src/app/pages/ui-features/ui-features-routing.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ui_features_component__ = __webpack_require__("../../../../../src/app/pages/ui-features/ui-features.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__grid_grid_component__ = __webpack_require__("../../../../../src/app/pages/ui-features/grid/grid.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__icons_icons_component__ = __webpack_require__("../../../../../src/app/pages/ui-features/icons/icons.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__typography_typography_component__ = __webpack_require__("../../../../../src/app/pages/ui-features/typography/typography.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__tabs_tabs_component__ = __webpack_require__("../../../../../src/app/pages/ui-features/tabs/tabs.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__search_fields_search_fields_component__ = __webpack_require__("../../../../../src/app/pages/ui-features/search-fields/search-fields.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};










var components = [
    __WEBPACK_IMPORTED_MODULE_4__ui_features_component__["a" /* UiFeaturesComponent */],
    __WEBPACK_IMPORTED_MODULE_5__grid_grid_component__["a" /* GridComponent */],
    __WEBPACK_IMPORTED_MODULE_6__icons_icons_component__["a" /* IconsComponent */],
    __WEBPACK_IMPORTED_MODULE_7__typography_typography_component__["a" /* TypographyComponent */],
    __WEBPACK_IMPORTED_MODULE_8__tabs_tabs_component__["d" /* TabsComponent */],
    __WEBPACK_IMPORTED_MODULE_8__tabs_tabs_component__["a" /* Tab1Component */],
    __WEBPACK_IMPORTED_MODULE_8__tabs_tabs_component__["b" /* Tab2Component */],
    __WEBPACK_IMPORTED_MODULE_8__tabs_tabs_component__["c" /* Tab3Component */],
    __WEBPACK_IMPORTED_MODULE_9__search_fields_search_fields_component__["a" /* SearchComponent */],
];
var UiFeaturesModule = /** @class */ (function () {
    function UiFeaturesModule() {
    }
    UiFeaturesModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            imports: [
                __WEBPACK_IMPORTED_MODULE_1__theme_theme_module__["a" /* ThemeModule */],
                __WEBPACK_IMPORTED_MODULE_3__ui_features_routing_module__["a" /* UiFeaturesRoutingModule */],
                __WEBPACK_IMPORTED_MODULE_2__buttons_buttons_module__["a" /* ButtonsModule */],
            ],
            declarations: components.slice(),
            entryComponents: [],
        })
    ], UiFeaturesModule);
    return UiFeaturesModule;
}());



/***/ })

});
//# sourceMappingURL=ui-features.module.chunk.js.map