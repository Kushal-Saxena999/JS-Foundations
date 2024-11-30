/*
Nested Functions and Context
Task 1: Using this in Objects

Create an object person with a method introduce() that uses this

additionally add properties of name & age that will result in Hi, my name is Hitesh and I am 19.5 years old on calling introduce()



Task 2: Function within a function

Write a function outer() that contains another function inner() and returns a value of 'Inner function called' on calling outer()

*/


const person = {
  name: 'Hitesh',
  age: 19.5,
  introduce() {
    return `Hi, my name is ${this.name} and I am ${this.age} years old`;
  }
};
 
function outer() {
  function inner() {
    return 'Inner function called';
  }
 
  return inner();
}



// // Task 1: Using this in Objects
// const person = {
//   name: 'Hitesh',
//   age: 19.5,
//   introduce: function() {
//       return `Hi, my name is ${this.name} and I am ${this.age} years old.`;
//   }
// };

// // Example usage of person object
// console.log(person.introduce()); // Output: Hi, my name is Hitesh and I am 19.5 years old.

// // Task 2: Function within a function
// function outer() {
//   // Inner function defined within outer
//   function inner() {
//       return 'Inner function called';
//   }
//   // Call the inner function and return its value
//   return inner();
// }

// // Example usage of outer function
// console.log(outer()); // Output: Inner function called