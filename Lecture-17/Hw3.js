/*Task 1: Sum of First N Natural Numbers

Write a function sumOfN(n) that returns the sum of the first n natural numbers



Task 2: Multiplication Table

Write a function printMultiplicationTable(n) that returns the multiplication table for n. Values return in the array must be of the format 2 * 2 = 4



Task 3: Count Vowels in a String

Write a function countVowels(str) that returns the number of vowels (in both lower & uppercase) in the given string str.
*/

// Task 1: Sum of First N Natural Numbers
function sumOfN(n) {
  // Using the formula n(n + 1) / 2 to calculate the sum
  return (n * (n + 1)) / 2;
}

// Task 2: Multiplication Table
function printMultiplicationTable(n) {
  const table = [];
  for (let i = 1; i <= 10; i++) {
      // Format: "n * i = result"
      table.push(`${n} * ${i} = ${n * i}`);
  }
  return table;
}

// Task 3: Count Vowels in a String
function countVowels(str) {
  const vowels = /[aeiouAEIOU]/g; // Regular expression to match vowels
  const matches = str.match(vowels); // Find all matches
  return matches ? matches.length : 0; // Return count or zero if no matches
}

// Example usage:

// Task 1: Sum of First N Natural Numbers
console.log(sumOfN(5)); // Output: 15 (1 + 2 + 3 + 4 + 5)

// Task 2: Multiplication Table
console.log(printMultiplicationTable(2));
/* Output:
[
  '2 * 1 = 2',
  '2 * 2 = 4',
  '2 * 3 = 6',
  '2 * 4 = 8',
  '2 * 5 = 10',
  '2 * 6 = 12',
  '2 * 7 = 14',
  '2 * 8 = 16',
  '2 * 9 = 18',
  '2 * 10 = 20'
]
*/

// Task 3: Count Vowels in a String
console.log(countVowels("Hello World")); // Output: 3 ('e', 'o', 'o')
console.log(countVowels("Programming")); // Output: 3 ('o', 'a', 'i')