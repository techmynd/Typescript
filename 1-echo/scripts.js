// enum declaration
var LanguagesKnown;
(function (LanguagesKnown) {
    LanguagesKnown[LanguagesKnown["English"] = 0] = "English";
    LanguagesKnown[LanguagesKnown["Urdu"] = 1] = "Urdu";
    LanguagesKnown[LanguagesKnown["Russian"] = 2] = "Russian";
})(LanguagesKnown || (LanguagesKnown = {}));
//
var Technologies;
(function (Technologies) {
    Technologies[Technologies["TypeScript"] = 0] = "TypeScript";
    Technologies[Technologies["JavaScript"] = 1] = "JavaScript";
    Technologies[Technologies["ReactJS"] = 2] = "ReactJS";
})(Technologies || (Technologies = {}));
console.log('hello world');
//////////////////////////
// typescript
function hello(string) {
    console.log('hello ' + string);
}
hello("John");
///////////
///////////
var n = 1;
console.log('n');
//////////////////////////
///////////
var ny = 1;
var nm = 1;
var st = "Hello World";
var isWinter = false;
var names = ["John", "Mark"];
///////////
///////////
// this below is not valid - type can be string or number
// var names: any[] = ["John", "Mark", 5];
///////////
///////////
function getName() {
    return "John";
}
///////////
///////////
var unionTypes;
unionTypes = "string";
unionTypes = "34";
///////////
///////////
console.log('watching...');
var automobile = {
    brand: "BMW",
    speed: 20,
    speedMethod: function () {
        console.log("this " + this.brand + " is goin at speed of " + this.speed + " KM per hours. ");
    }
};
// or for class
// class AutomobileClass implements AutomobileInterface {}
///////////////////////
// namespace in ts
//////////////////////
var MJK;
(function (MJK) {
    function run() {
        console.log('run');
    }
    MJK.run = run;
    function walk() {
        console.log('walk');
    }
    MJK.walk = walk;
    function stop() {
        console.log('stop');
    }
    MJK.stop = stop;
})(MJK || (MJK = {}));
MJK.walk();
MJK.run();
MJK.stop();
// https://www.typescriptlang.org/docs/handbook/namespaces-and-modules.html
