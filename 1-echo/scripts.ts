// enum declaration

enum LanguagesKnown {English, Urdu, Russian} 

//

enum Technologies {TypeScript, JavaScript, ReactJS}

//////////////////////////
///////////

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

///////////
///////////

var n : Number = 1;
console.log('n');

//////////////////////////
///////////

var ny : any = 1;
var nm : Number = 1;
var st : String = "Hello World";
var isWinter : Boolean = false;
var names : String[] = ["John", "Mark"];

///////////
///////////

// this below is not valid - type can be string or number
// var names: any[] = ["John", "Mark", 5];

///////////
///////////

function getName() : String {
	return "John";
}

///////////
///////////

let unionTypes: number | string;
unionTypes = "string";
unionTypes = "34";

///////////
///////////

console.log('watching...');

///////////
///////////

///////////
// Interfaces
///////////

// interface can extend another interface
// interface can be applied to class, const and function and it can be extended also 

interface AutomobileInterface{
    // brand?: string; // question sign makes it optional
    brand: string;
    speed: number;
    speedMethod(velocidad: number): void
}
const automobile: AutomobileInterface = {
	brand: "BMW",
	speed: 20,
	speedMethod(){
		console.log(`this ${this.brand} is goin at speed of ${this.speed} KM per hours. `);
	}
}

// or for class
// class AutomobileClass implements AutomobileInterface {}