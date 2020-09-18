"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
exports.__esModule = true;
var a1_1 = require("./a1");
var Sup = /** @class */ (function (_super) {
    __extends(Sup, _super);
    function Sup(name, code) {
        var _this = _super.call(this, name) || this;
        _this.name = name;
        _this.code = code;
        console.log("constructor" + name + "," + _this.code);
        return _this;
    }
    Sup.prototype.test = function (obj) {
        return new Sup(obj, 12);
    };
    return Sup;
}(a1_1.Person));
var emp = new Sup("Gobal Krishnan V", 100);
console.log(emp.test("Gobal Krishnan V"));
