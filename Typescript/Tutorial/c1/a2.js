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
var Mag = /** @class */ (function (_super) {
    __extends(Mag, _super);
    function Mag(empId, empName) {
        var _this = _super.call(this, empId, empName) || this;
        _this.empId = empId;
        _this.empName = empName;
        return _this;
    }
    Mag.prototype.display1 = function () {
        console.log(this.empId + " :" + this.empName);
    };
    return Mag;
}(a1_1.User));
var a = new Mag(1, "Gobal Krishnan V");
a.display();
