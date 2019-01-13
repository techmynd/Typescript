// enum declaration
enum LanguagesKnown {English, Urdu, Russian} 
//
enum Technologies {TypeScript, JavaScript, ReactJS}

//////////////////////////

// Interface declaration
interface StudentInfo {
	Name: string,
	Age: number,
	Phone: number
}

console.log('hello world');

//////////////////////////

// typescript
function hello(string : String){
	console.log('hello ' + string);
}

hello("John");

var n : Number = 1;
console.log('n');

//////////////////////////

var ny : any = 1;
var nm : Number = 1;
var st : String = "Hello World";
var isWinter : Boolean = false;
var names : String[] = ["John", "Mark"];

// this below is not valid - type can be string or number
//var names : any[] = ["John", "Mark", 5];

function getName() : String {
	return "John";
}

