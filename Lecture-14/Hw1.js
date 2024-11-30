/*
Task 1:

Write a function stringToNumber that takes a string input and tries to convert it to a number. If the conversion fails, return "Not a number".



Task 2:

Write a function flipBoolean that takes any input and converts it to its boolean equivalent, then flips it. For example, true becomes false, 0 becomes true, etc.



Task 3:

Write a function whatAmI that takes an input and returns a string describing its type after conversion. If it's a number, return "I'm a number!", if it's a string, return "I'm a string!"



Task 4:

Write a function isItTruthy that takes an input and returns "It's truthy!" if the value is truthy in JavaScript, or "It's falsey!" if it's falsey.
*/

Sol.1

function stringToNumber(inputString) {
  // Attempt to convert the string to a number
  const number = Number(inputString);
  
  // Check if the conversion resulted in NaN (Not a Number)
  if (isNaN(number)) {
      return "Not a number";
  }
  
  return number;
}

Sol.2

function flipBoolean(input) {
  // Convert the input to its boolean equivalent
  const booleanValue = Boolean(input);
  
  // Flip the boolean value
  return !booleanValue;
}

Sol.3

function whatAmI(input) {
  // Convert the input to a number
  const numberValue = Number(input);

  // Check if the input is a number
  if (!isNaN(numberValue) && typeof input !== 'boolean') {
      return "I'm a number!";
  }

  // Check if the input is a string
  if (typeof input === 'string') {
      return "I'm a string!";
  }

  // If neither, return a default message
  return "I'm neither a number nor a string!";
}

Sol.4

function isItTruthy(input) {
  // Check if the input is truthy or falsy
  if (input) {
      return "It's truthy!";
  } else {
      return "It's falsey!";
  }
}