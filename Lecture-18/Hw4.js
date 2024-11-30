/*
Higher-Order Functions and Arrow Functions
All the following tasks must be strictly be writtern in arrow functions only.



Task 1: Using Array Methods

Write a function squareNumbers(arr) using map() and arrow functions



Task 2: Custom Filter Function

Create a function filterEvenNumbers(arr) using filter() and arrow functions



Task 3: Sum of Positive Numbers

Write a function sumPositiveNumbers(arr) that takes an array of numbers and returns the sum of all positive numbers using filter() and reduce() with arrow functions



Task 4: Transform Array of Objects

Write a function getNames(arr) that takes an array of objects where each object has a name property, and returns an array of just the names using map() and arrow functions



Task 5: Find the Longest Word

Write a function findLongestWord(arr) that takes an array of strings and returns the longest word using reduce() and an arrow function
*/





// Task 1: Using Array Methods - Square Numbers
const squareNumbers = (arr) => arr.map(num => num * num);

// Task 2: Custom Filter Function - Filter Even Numbers
const filterEvenNumbers = (arr) => arr.filter(num => num % 2 === 0);

// Task 3: Sum of Positive Numbers
const sumPositiveNumbers = (arr) => 
    arr.filter(num => num > 0).reduce((sum, num) => sum + num, 0);

// Task 4: Transform Array of Objects - Get Names
const getNames = (arr) => arr.map(obj => obj.name);

// Task 5: Find the Longest Word
const findLongestWord = (arr) => 
    arr.reduce((longest, word) => word.length > longest.length ? word : longest, '');

// Example usage:

// Task 1: Square Numbers
console.log(squareNumbers([1, 2, 3, 4])); // Output: [1, 4, 9, 16]

// Task 2: Filter Even Numbers
console.log(filterEvenNumbers([1, 2, 3, 4, 5, 6])); // Output: [2, 4, 6]

// Task 3: Sum of Positive Numbers
console.log(sumPositiveNumbers([-1, 2, -3, 4, 5])); // Output: 7

// Task 4: Get Names from Array of Objects
console.log(getNames([{ name: 'Alice' }, { name: 'Bob' }, { name: 'Charlie' }])); 
// Output: ['Alice', 'Bob', 'Charlie']

// Task 5: Find the Longest Word
console.log(findLongestWord(['apple', 'banana', 'cherry', 'date'])); // Output: 'banana'