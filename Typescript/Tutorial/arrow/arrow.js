var sum = function (x, y) {
    console.log(x + y);
};
sum(10, 20);
var User = /** @class */ (function () {
    function User() {
        var _this = this;
        this.display = function () { return console.log(_this.name); };
    }
    return User;
}());
var usr = new User();
usr.name = "Gobal Krishnan V";
usr.display();
