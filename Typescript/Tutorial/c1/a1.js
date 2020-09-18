"use strict";
exports.__esModule = true;
exports.User = exports.greeting = void 0;
exports.greeting = "Hello world!";
var User = /** @class */ (function () {
    function User(id, name) {
        this.id = id;
        this.name = name;
    }
    User.prototype.display = function () {
        console.log(this.id + "," + this.name);
    };
    return User;
}());
exports.User = User;
