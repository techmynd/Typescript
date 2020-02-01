// check data type
let finalValue = 20
if (typeof finalValue == "number") {
  console.log("its a number")
}

// union types // with or
let realAge: number | string = 20 // 20 and "20" both are okay for this
//  [number | string] > it can be a number or string
let canBeNullValue: number | null = 12

// number 
  let age: number = 20
    
  // string
  let myName: string = "Hiroshi"
  
  // array
  let fruits: any[] = ["Grapes", "Oranges", "Apple"]
  let fruitsGroup: any = ["Grapes", "Oranges", "Apple"]
  
  // boolean
  let switcher: boolean = true
  
  // tuples (mix array)
  let items: [string, number] = ["Stret name", 16]
  let moreItems: [number, string] = [16, "Stret name"]

  // enum ##############
  // e.g. make numbers more expressive // add colors values to use later
  // enum is lik a custom type
  // declare custom types to use later
  
  // declaration // these assignmnts will receive index assignment
  enum Color {
    Grey, // 0
    Blue, // 1
    Green, // 2
    Black = 100, // 100
    White, // 101  << coz it is continuing from above
    Yellow = "Yellow" // yellow
  }
  // usage
  let myColor: Color = Color.Green
  console.log("myColor FROM ENUM =-=-=-=- ", myColor) // will output 2

  // functions
  function myNameIs(): string { 
    return "Javed";
  }

  function sayHelloInConsole(): void {
    console.log("Hello");
    // return "Hello"; // you cant use return with void
  }
  
  function getInfo(userID: number, userName: string) {}

  function getInfoTwo(userID: number, userName: string): any {}

  function getInfoThree(firsName: string, lastName: string): string {
    return `firsName lastName`;
  }

  function getInfoFour(x: number, y: number): number {
    return x + y;
  }

  // let funcName = function() {}
  // turns into below
  let myAdd: (x: number, y: number) => number = function(x: number, y: number): number { return x + y; }

  // optional
  function buildName(firstName: string, lastName?: string) {
    // ...
  }

  // function types
  // let multiply = (value1, value2) => {}
  let multiply: (value1: number, value2: number) => number;
  // console.log( multiply(2,5) )

  // es6 functions
  const countDown = (start: number):void => {}  
  const startFrom = (start: number):any => { return start }

  // objects ##########################
  let userData = {
    name: "John",
    age: 30
  }
  // becomes ... 
  let usrData: { name: string, age: number } = {
    name: "John Doe",
    age: 30
  }

  // or /////////////////////////////////////
  type Complex = { name: string, age: number }
  let myUserData: Complex = {
    name: "John Doe",
    age: 30
  }
  //////////////////////

  // never //// never type for exceptions
  function neverReturnThis():never {
    throw new Error("Error Message");
  }

  // array spread operator
  // makeArray takes array of numbers and here is how to define it
  function makeArray(...myArgs: number[]) {
    return myArgs;
  }
  console.log( makeArray(1, 2) )
  // or
  function makeArrayy(name: string, ...myArgs: number[]): any {
    return name + myArgs;
  }
  console.log( makeArrayy("John", 1, 2) )








