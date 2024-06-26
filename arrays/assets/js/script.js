// array creation
// let arr = [1, 2, 3, 5, 9];

// array constructor
// let brr = ['chills', 1, true];

// console.log(brr);
// console.log(typeof(brr));

// access elements of array
// console.log(brr[2]);

// array methods
// push, pop, shift, unshift, slice, splice, map, filter, reduce, sort, indexof, find, foreach, findindex


// push-insert at end
// pop-remove last item
// brr.push('solanki');
// console.log(brr);
// brr.pop();
// console.log(brr);


// shift-remove first item
// unshift-add first item
// brr.shift();
// console.log(brr);
// brr.unshift('aakash');
// console.log(brr);


//
// brr.push(20);
// brr.push(40);
// brr.push(70);
// brr.push(80);
// console.log(brr);
//

// slice - new part (shallow copy)
// console.log(brr.slice(2, 4));

// splice - content change-insert, replace, remove
// brr.splice(1,2,'kunal');  // 1 index se two value remove karo and kunal insert karo
// console.log(brr);


// brr.splice(1,0,'jaimin');  
// console.log(brr);


//map
// let arr2 = [10, 40, 90];
// let ans = arr2.map((number) => {
//     return number * number;
// })
// console.log(ans);


// let arr2 = [10, 40, 90];
// let ans = arr2.map((number, index) => {
//     console.log(number);
//     console.log(index);
// })


// filter

// let arr = [10, 20, 14, 21, 25, 84, 97, 27];

// let evenArray = arr.filter((number) => {
//     return number % 2 === 0;
//     // if(number % 2 === 0){
//     //     return true;
//     // }
//     // else{
//     //     return false;
//     // }
// });

// console.log(evenArray);



// let arr = [1, 5, 'chills', 'solanki', true, null];

// let ans = arr.filter((value) => {
//     return typeof(value) === 'string';
//     // if(typeof(value) === 'string'){
//     //     return true;
//     // }
//     // else{
//     //     return false;
//     // }
// });

// console.log(ans);




// reduce - can do complex calculations, give single output
// acc, curr
// acc default first(10) value lega and is case me curr dusri(30) value lega
// acc ko initialize karenge tab acc=intialize wali value and curr =first value(10)

// let arr = [10, 30, 40, 90];

// let ans = arr.reduce((acc, curr) => {
//         return acc + curr;
// }, 0);

// console.log(ans);



// sort
// let arr = ['banana', 'zibra', 'leopard', 'apple'];

// let sorted = arr.sort();
// console.log(sorted);
// console.log(arr);


// arr.reverse();
// console.log(arr);

// descending - by combining sort and reverse
// arr.sort();
// arr.reverse();
// console.log(arr);


//The difference between toSorted() and sort() is that the first method creates a new array, keeping the original array unchanged, while the last method alters the original array.
// let months = ["Jan", "Feb", "Mar", "Apr"];
// let sorted = months.toSorted();
// console.log(sorted);
// console.log(months);
// same with reverse


// numeric sort
/*
By default, the sort() function sorts values as strings.

This works well for strings ("Apple" comes before "Banana").

If numbers are sorted as strings, "25" is bigger than "100", because "2" is bigger than "1".

Because of this, the sort() method will produce incorrect result when sorting numbers.

You can fix this by providing a compare function:
*/

// problem
// let arr = [9, 10, 1, 5, 100, 200, 8, 2];
// arr.sort();
// console.log(arr);

// solution - compare function
// const points = [40, 100, 1, 5, 25, 10];
// document.getElementById("demo1").innerHTML = points;  

// points.sort(function(a, b){return a - b});  
// document.getElementById("demo2").innerHTML = points;

/*
The Compare Function
The purpose of the compare function is to define an alternative sort order.

The compare function should return a negative, zero, or positive value, depending on the arguments:

function(a, b){return a - b}
When the sort() function compares two values, it sends the values to the compare function, and sorts the values according to the returned (negative, zero, positive) value.

If the result is negative, a is sorted before b.

If the result is positive, b is sorted before a.

If the result is 0, no changes are done with the sort order of the two values.

Example:

The compare function compares all the values in the array, two values at a time (a, b).

When comparing 40 and 100, the sort() method calls the compare function(40, 100).

The function calculates 40 - 100 (a - b), and since the result is negative (-60),  the sort function will sort 40 as a value lower than 100.

You can use this code snippet to experiment with numerically and alphabetically sorting:
*/

// const points = [40, 100, 1, 5, 25, 10];
// document.getElementById("demo").innerHTML = points;  

// function myFunction1() {
//   points.sort();
//   document.getElementById("demo").innerHTML = points;
// }
// function myFunction2() {
//   points.sort(function(a, b){return a - b});
//   document.getElementById("demo").innerHTML = points;
// }



//indexof method
// let arr = [9, 10, 1, 5, 100, 200, 8, 2];
// console.log(arr.indexOf(200));


//find method

/*
Array Find Methods:
Method	Finds
indexOf()	The index of the first element with a specified value
lastIndexOf()	The index of the last element with a specified value
find()	The value of the first element that passes a test
findLast()	The value of the last element that passes a test
findIndex()	The index of the first element that passes a test
findLastIndex()	The index of the last element that passes a test
*/


// find()

/*
Syntax
array.find(function(currentValue, index, arr),thisValue)

Parameters
function()	Required. A function to run for each array element.
currentValue	Required. The value of the current element.
index	Optional. The index of the current element.
arr	Optional. The array of the current element.
thisValue	Optional. Default undefined. A value passed to the function as its this value.

Return Value
Type	          Description
A value	          The value of the first element that pass the test. Otherwise it returns undefined.
*/

/*
Example 1
Find the value of the first element with a value over 18:
*/
// let ages = [10, 14, 18, 65];

// function checkAge(value){
//     return value > 18;
// }

// document.getElementById('demo').innerHTML = ages.find(checkAge);

/*
Description
The find() method returns the value of the first element that passes a test.

The find() method executes a function for each array element.

The find() method returns undefined if no elements are found.

The find() method does not execute the function for empty elements.

The find() method does not change the original array.
*/

// findLast()
// const ages = [3, 10, 18, 20, 25, 14, 64, 15, 12];

// document.getElementById("demo").innerHTML = ages.findLast(checkAge);

// function checkAge(age) {
//   return age > 18;
// }

// indexOf()
//Find the first index of "Apple":
// const fruits = ["Banana", "Orange", "Apple", "Mango", "Apple"];
// let index = fruits.indexOf("Apple");

// document.getElementById("demo").innerHTML = index;

// Start at index 3:
// const fruits = ["Banana", "Orange", "Apple", "Mango", "Apple"];
// let index = fruits.indexOf("Apple", 3);

// document.getElementById("demo").innerHTML = index;

/*
Description
The indexOf() method returns the first index (position) of a specified value.

The indexOf() method returns -1 if the value is not found.

The indexOf() method starts at a specified index and searches from left to right (from the given start postion to the end of the array).

By default the search starts at the first element and ends at the last.

Negative start values counts from the last element (but still searches from left to right).
*/

/*
Syntax
array.indexOf(item, start)

Parameters
Parameter	     Description
item	Required. The value to search for.
start	Optional. Where to start the search. Default value is 0. Negative values start the search from the end of the array.	

Return Value
Type	Description
A number	The index (position) of the first item found. -1 if the item is not found.
*/

//Find the first index of "Apple", starting from the last element:
// const fruits = ["Banana", "Orange", "Apple", "Mango", "Apple"];
// let index = fruits.indexOf("Apple", -1);

// document.getElementById("demo").innerHTML = index;



// lastIndexOf()
//Find the last index of "Apple":
// const fruits = ["Apple", "Orange", "Apple", "Mango", "Apple", "Cherry"];
// let index = fruits.lastIndexOf("Apple");

// document.getElementById("demo").innerHTML = index;

/*
Description
The lastIndexOf() method returns the last index (position) of a specified value.

The lastIndexOf() method returns -1 if the value is not found.

The lastIndexOf() starts at a specified index and searches from right to left (from the given position to the beginning of the array).

By default the search starts at the last element and ends at the first.

Negative start values counts from the last element (but still searches from right to left).
*/

/*
Syntax
array.lastIndexOf(item, start)

Parameters
Parameter	Description
item	Required. The value to search for.
start	Optional. Where to start the search. Default is the last element (array.length-1). Negative start values counts from the last element (but still searches from right to left).

Return Value
Type	Description
A number	The position of the specified item. -1 if the item is not found.
*/

// Start the search at position 4:
// const fruits = ["Orange","Apple","Mango","Apple","Banana","Apple"];
// let index = fruits.lastIndexOf("Apple", 4);

// document.getElementById("demo").innerHTML = index;

//Start the search at the second last position:
// const fruits = ["Orange","Apple","Mango","Apple","Banana","Apple"];
// let index = fruits.lastIndexOf("Apple", -2);

// document.getElementById("demo").innerHTML = index;




//findIndex()
// const ages = [3, 10, 18, 20, 54, 45, 14, 22];

// document.getElementById("demo").innerHTML = ages.findIndex(checkAge);

// function checkAge(age) {
//   return age > 18;
// }

//findLastIndex()
// const ages = [3, 10, 18, 20, 54, 45, 14, 22, 10];

// document.getElementById("demo").innerHTML = ages.findLastIndex(checkAge);

// function checkAge(age) {
//   return age > 18;
// }



// foreach method

// let arr = [9, 10, 1, 5, 100, 200, 8, 2];
// arr.forEach((value, index) => {
//     console.log('number: ', value, ' index: ', index);
// });

// length method
// console.log(arr.length);





// arrays with functions
// let arr = [10, 20, 30, 40, 50];

// function getSum(arr){
//     let sum = 0;
//     arr.forEach((value) => {
//         sum = sum + value;
        
//     });
//     return sum;



//     // let len = arr.length;
//     // let sum = 0;
//     // for(let index = 0; index < len; index++){
//     //     sum = sum + arr[index];
//     // }
//     // return sum;
// }

// let totalSum = getSum(arr);
// console.log(totalSum);




// let arr = [10, 20, 18, 25, 12, 15];

// let evenArray = arr.filter((number) => {
//     return number > 18;

// });

// console.log(evenArray);