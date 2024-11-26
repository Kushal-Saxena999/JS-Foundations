//Number

let balance = 120
let anotherbalance = new Number(120);

// console.log(balance);
// console.log(anotherbalance);
// console.log(typeof balance);
// console.log(typeof anotherbalance);

//Boolean
let isActive = true;
let isReallyActive = new Boolean(true) //not recommended

//null and undefined

let firstname = null;
let lastname = undefined;
// console.log(firstname);
// console.log(lastname);


//String

let myString = "Hello";
let myStringOne = "Hola";
let username = "kushal";

// let oldGreet = myString + " Kushal";
// console.log(oldGreet);

// Best Way (By String Interpolation)
let greetMessage = `Hello ${username}!`;
// console.log(greetMessage);

let demoOne = `Value is ${2 * 2}`;
// console.log(demoOne);

let sm1 = Symbol("Kushal");
let sm2 = Symbol("Kushal");

console.log(sm1 == sm2);



