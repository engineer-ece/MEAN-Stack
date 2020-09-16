;
function add(key, value) {
    console.log("add ==>" + key + "::" + value);
}
function update(key, value) {
    console.log("update ==>" + key + "::" + value);
}
var a1 = add;
a1(1, "m1");
a1 = update;
a1(2, "m2");
