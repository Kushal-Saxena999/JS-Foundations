/*
1.Write a `while` loop that calculates the sum of all  numbers from 1 to 5 and stores the result the result in a variable named `sum`. */

let sum = 0;
let i = 1;

while ( i <= 5) {
  sum += i;
  i++;
}
// console.log(sum);

/*
2.Write a `while` loop that counts down from 5 to 1 and stores the number in an array named `countdown`.
*/
let countdown = [];
j=5;
while(j >= 0){
  countdown = j;//countdown.push(j);
  j--;
  // console.log(countdown);
}
// console.log(countdown);

/*
3.Write a `do while` loop that prompts a user to enter their favourite tea type until they enter `"stop"`. Store each tea type in an array named `teaCollection`.
*/



// let teaCollection = [];
// let tea;
// do {
//   tea = prompt(`Enter your favourite tea (type "stop" to finish)`);
//   if (tea != "stop"){
//     teaCollection.push(tea);
//   } 
// } while (tea !== "stop");
//We can run this code in browser and also after multiple inputing check the teaCollection also.

/*
4.Write a `do while` loop that adds numbers from 1 to 3 and stores the result in a variable named `total`.

*/

let total = 0;
let k = 1;
do{
  total += k;
  k++;
}while(k <= 3);

/*
5.Write a `for` loop that multiplies each element in the array `[2, 4, 6]` by 2 and stores the result in a new array named `multipliedNumbers`
*/

let multipliedNumbers = [];
let numbers = [2, 4, 6];

for (let l = 0; l < numbers.length; l++) {
  takeNumber = numbers[l] * 2;
  multipliedNumbers.push(takeNumber);
  //multipliedNumbers.push(numbers[l] * 2);
}
// console.log(multipliedNumbers);

/*
6. Write a `for` loop that lists all the cities in the array `["Paris", "NewYork", "Tokyo", "London"`
and stores each city in a new array named `cityList`.
*/

let cities = ["Paris", "NewYork", "Tokyo", "London"];
let cityList = [];
for (let c =0; c < cities.length; c++){
  const myCity = cities[c];
  cityList.push(myCity);
}
console.log(cityList);