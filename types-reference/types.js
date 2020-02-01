// check data type
var finalValue = 20;
if (typeof finalValue == "number") {
    console.log("its a number");
}
// union types // with or
var realAge = 20; // 20 and "20" both are okay for this
//  [number | string] > it can be a number or string
var canBeNullValue = 12;
// number 
var age = 20;
// string
var myName = "Hiroshi";
// array
var fruits = ["Grapes", "Oranges", "Apple"];
var fruitsGroup = ["Grapes", "Oranges", "Apple"];
// boolean
var switcher = true;
// tuples (mix array)
var items = ["Stret name", 16];
var moreItems = [16, "Stret name"];
// enum ##############
// e.g. make numbers more expressive // add colors values to use later
// enum is lik a custom type
// declare custom types to use later
// declaration // these assignmnts will receive index assignment
var Color;
(function (Color) {
    Color[Color["Grey"] = 0] = "Grey";
    Color[Color["Blue"] = 1] = "Blue";
    Color[Color["Green"] = 2] = "Green";
    Color[Color["Black"] = 100] = "Black";
    Color[Color["White"] = 101] = "White";
    Color["Yellow"] = "Yellow"; // yellow
})(Color || (Color = {}));
// usage
var myColor = Color.Green;
console.log("myColor FROM ENUM =-=-=-=- ", myColor); // will output 2
// functions
function myNameIs() {
    return "Javed";
}
function sayHelloInConsole() {
    console.log("Hello");
    // return "Hello"; // you cant use return with void
}
function getInfo(userID, userName) { }
function getInfoTwo(userID, userName) { }
function getInfoThree(firsName, lastName) {
    return "firsName lastName";
}
function getInfoFour(x, y) {
    return x + y;
}
// let funcName = function() {}
// turns into below
var myAdd = function (x, y) { return x + y; };
// optional
function buildName(firstName, lastName) {
    // ...
}
// function types
// let multiply = (value1, value2) => {}
var multiply;
// console.log( multiply(2,5) )
// es6 functions
var countDown = function (start) { };
var startFrom = function (start) { return start; };
// objects ##########################
var userData = {
    name: "John",
    age: 30
};
// becomes ... 
var usrData = {
    name: "John Doe",
    age: 30
};
var myUserData = {
    name: "John Doe",
    age: 30
};
//////////////////////
// never //// never type for exceptions
function neverReturnThis() {
    throw new Error("Error Message");
}
// array spread operator
// makeArray takes array of numbers and here is how to define it
function makeArray() {
    var myArgs = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        myArgs[_i] = arguments[_i];
    }
    return myArgs;
}
console.log(makeArray(1, 2));
// or
function makeArrayy(name) {
    var myArgs = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        myArgs[_i - 1] = arguments[_i];
    }
    return name + myArgs;
}
console.log(makeArrayy("John", 1, 2));
