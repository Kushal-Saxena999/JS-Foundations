/*
1. Declare an array named 'teaFlavors' that contains the strings ~"green tea"`, `"black tea"` and `"oolong tea"`.
    Access the first element of the array and store it in a variable named `firstTea`.
*/

// let teaFlavors = ["green tea", "black tea", "oolong tea"]
// // let teaFl = new Array("") Another way of creating Array.

// const firstTea = teaFlavors[0]

/*
2. Declare an array named `cities` containing `"London"`, `"Paris"`, and `"New York"`.Access the third element of the array and stored in a variable named `flavouredCity`.

*/

// let cities = ["London", "Tokyo", "Paris", "New York"]
// const favouriteCity = cities[2];

/* 
3. You have an array named `teaTypes` containing `"herbal tea"`, `"white tea"` and `"masala chai".
Change the second element of the array to `"jasmine tea"`.
*/

// let teaTypes = ["herbal tea", "white tea", "masala chai"]
// teaTypes[1] = "jasmine tea";

/*
4. Declare an array named 'citiesVisited' containing `"Mumbai"` and `"Sydney"`.
   Add `"Berlin"` to the array using the `push` method.

*/

// let citiesVisited = ["Mumbai", "Sydney"];
// citiesVisited.push("Berlin");
// console.log(citiesVisited);

/* 
5. You have an array named `teaOrders` with `"chai"`, `"iced tea"`, `"matcha"` and `"earl grey"`.
Remove the last element of the array using the `pop` method and store it in a variable named 
`lastOrder`.
*/

// let teaOrders = ["chai", "iced tea", "matcha", "earl grey"];
// lastOrder = teaOrders.pop();
// console.log(teaOrders);

/* 
6. You have an array named `popularTeas` containing `"green tea"`, `"oolong tea"`, and `"chai"` . Create a soft copy of this array named `softCopyTres`. */

let popularTeas = ["green tea", "oolong tea", "chai"];
let softCopyTres = popularTeas;
popularTeas.pop();
// console.log(softCopyTres);
// console.log(popularTeas);

/*
7. You have an array named `topCities` containing `"Berlin"`, `"Singapore"` and `"New York"`. Create a hard copy of this array named `hardCopyCities`.
*/
let topCities = ["Berlin", "Singapore", "New York"]
// let hardCopyCities = [... topCities];
let hardCopyCities = topCities.slice();
topCities.pop();
// console.log(hardCopyCities);

/*
You have two arrays: `europeanCities` containing `"Paris"` and `"Rome"` and `asianCities` containing `"Tokyo"` and `"Bangkok"`.
Merge these two arrays in to a new array named `worldCities` */

let europeanCities = ["Paris", "Rome"];// Don't use + operator
let asianCities = ["Tokyo", "Bangkok"];
// let worldCities = [europeanCities, asianCities];//Creates 2D array(not way we want)
let worldCities = europeanCities.concat(asianCities);
// console.log(worldCities);

/*
9. You have an array named `teaMenu` containing `"masala chai"`, `"oolong tea"`, `"green tea"` and 
`"earl grey"`.
   Find the length of the array and store it in a variable named  `menulength`.
   */

   let teaMenu = ["Masala chai", "oolong tea", "green tea", "earl grey"];
   let menulength = teaMenu.length;


/*
10. You have an array named `cityBucketList` containing `"Kyto"`, `"London"`, `"Capetown"` and `Vancouver`.
    Check if `"London"` is in the array and store the result in a variable named `isLondonList`

    */
   let cityBucketList = ["Kyto", "London", "CapeTown", "Vancouver"];
   let isLondonList = cityBucketList.includes("London");
   console.log(isLondonList);