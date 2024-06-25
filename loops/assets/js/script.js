// Loops

/*
for
for/in
for/of
while
do/while
*/

// *** for loop ***

// The for statement creates a loop with 3 optional expressions:

/* for (expression 1; expression 2; expression 3) {
  // code block to be executed
}
Expression 1 is executed (one time) before the execution of the code block.
Expression 2 defines the condition for executing the code block.
Expression 3 is executed (every time) after the code block has been executed. */





// let text = "";
// for (let i = 0; i < 5; i++) {
//   text += "The number is " + i + "<br>";
// }

// document.getElementById("demo").innerHTML = text;

/* From the example above, you can read:
Expression 1 sets a variable before the loop starts (let i = 0).
Expression 2 defines the condition for the loop to run (i must be less than 5).
Expression 3 increases a value (i++) each time the code block in the loop has been executed. */





/* Expression 1
Normally you will use expression 1 to initialize the variable used in the loop (let i = 0).
This is not always the case. JavaScript doesn't care. Expression 1 is optional.
You can initiate many values in expression 1 (separated by comma): */

// const cars = ["BMW", "Volvo", "Saab", "Ford"];
// let i, len, text;
// for (i = 0, len = cars.length, text = ""; i < len; i++) {
//   text += cars[i] + "<br>";
// }
// document.getElementById("demo").innerHTML = text;

// And you can omit expression 1 (like when your values are set before the loop starts):

// const cars = ["BMW", "Volvo", "Saab", "Ford"];
// let i = 2;
// let len = cars.length;
// let text = "";

// for (; i < len; i++) {
//   text += cars[i] + "<br>";
// }

// document.getElementById("demo").innerHTML = text;





/*
Expression 2
Often expression 2 is used to evaluate the condition of the initial variable.
This is not always the case. JavaScript doesn't care. Expression 2 is also optional.
If expression 2 returns true, the loop will start over again. If it returns false, the loop will end.
If you omit expression 2, you must provide a break inside the loop. Otherwise the loop will never end.*/





/*Expression 3
Often expression 3 increments the value of the initial variable.
This is not always the case. JavaScript doesn't care. Expression 3 is optional.
Expression 3 can do anything like negative increment (i--), positive increment (i = i + 15), or anything else.
Expression 3 can also be omitted (like when you increment your values inside the loop):*/

// const cars = ["BMW", "Volvo", "Saab", "Ford"];

// let i = 0;
// let len = cars.length;
// let text = "";

// for (; i < len; ) {
//   text += cars[i] + "<br>";
//   i++;
// }
// document.getElementById("demo").innerHTML = text;





// Loop Scope

// Using var in a loop:
// var i = 5;
// for (var i = 0; i < 10; i++) {
//   // some statements
// }
// document.getElementById("demo").innerHTML = i;

// Using let in a loop:
// let i = 5;
// for (let i = 0; i < 10; i++) {
//   // some statements
// }
// document.getElementById("demo").innerHTML = i;

/* In the first example, using var, the variable declared in the loop redeclares the variable outside the loop.
In the second example, using let, the variable declared in the loop does not redeclare the variable outside the loop.
When let is used to declare the i variable in a loop, the i variable will only be visible within the loop. */









// *** for in loop ***

// The JavaScript for in statement loops through the properties of an Object:

/* Syntax
for (key in object) {
  // code block to be executed
}*/




 
// const person = {fname:"John", lname:"Doe", age:25}; 

// let txt = "";
// for (let x in person) {
// txt += person[x] + " ";
// }

// document.getElementById("demo").innerHTML = txt;

/* Example Explained
The for in loop iterates over a person object
Each iteration returns a key (x)
The key is used to access the value of the key
The value of the key is person[x] */





// for in over arrays
/* The JavaScript for in statement can also loop over the properties of an Array:

Syntax
for (variable in array) {
  code
}*/


// const numbers = [45, 4, 9, 16, 25];

// let txt = "";
// for (let x in numbers) {
//   txt += numbers[x] + "<br>"; 
// }

// document.getElementById("demo").innerHTML = txt;

/* Do not use for in over an Array if the index order is important.
The index order is implementation-dependent, and array values may not be accessed in the order you expect
It is better to use a for loop, a for of loop, or Array.forEach() when the order is important. */



// for of loop

// const person = ['aman', 'chills', 'aakash']; 

// let txt = "";
// for (let x of person) {
// txt += x + " ";
// }

// document.getElementById("demo").innerHTML = txt;









// ***** while loops*****


// *** while loop ***

// let text = "";
// let i = 0;
// while (i < 10) {
//   text += i + "<br>";
//   i++;
// }
// document.getElementById("demo").innerHTML = text;


// *** do while loop ***
// let text = ""
// let i = 0;

// do {
//   text += "<br>The number is " + i;
//   i++;
// }
// while (i < 10);  

// document.getElementById("demo").innerHTML = text;


// let text = ""
// let i = 10;

// do {
//   text += "<br>The number is " + i;
//   i++;
// }
// while (i < 7);  

// document.getElementById("demo").innerHTML = text;
