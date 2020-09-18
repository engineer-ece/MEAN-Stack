function greet(word) {
    var names = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        names[_i - 1] = arguments[_i];
    }
    console.log(word + " " + names.join(", ") + "!?");
}
greet("Hello", "Gobal", "Krishnan", "V");
greet("Hello");
