/*
Task:

Perform the following mathematical operations
on the provided variables a and b



Add

Subtract

Multiply

Divide

Increment

Decrement

Reminder
*/

Sol.

// **** DO NOT CHANGE the values *****
const a = 18;
const b = 24;

// Addition of two values
function add() {
    return a + b; // Return the sum of a and b
}

// Subtract small value from larger one
function subtract() {
    return b - a; // Subtract a from b (assuming b is larger)
}

// Multiply two values
function multiply() {
    return a * b; // Return the product of a and b
}

// Divide larger value by small
function divide() {
    return b / a; // Divide b by a (assuming b is larger)
}

// Increase value of a by 1
function increment() {
    return a + 1; // Return a incremented by 1
}

// Decrease value of b by 1
function decrement() {
    return b - 1; // Return b decremented by 1
}

// Divide larger value by small to find the remainder
function reminder() {
    return b % a; // Return the remainder of b divided by a
}