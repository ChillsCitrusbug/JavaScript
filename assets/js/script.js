// first js line
// document.write("hello")

// ***** variables *****

//Automatically-In this first example, x, y, and z are undeclared variables. They are automatically declared when first used.
a = 1;
b = 7;
c = a + b;
document.getElementById("automatically").innerHTML =
"The value of c is: " + c;


//Note-It is considered good programming practice to always declare variables before use.


//Using var-From the examples you can guess: x stores the value 5. y stores the value 6. z stores the value 11.
var d = 22;
var e = 30;
var f = d + e;
document.getElementById("using_var").innerHTML =
"The value of f is: " + f;


//Note-The var keyword should only be used in code written for older browsers.


//Using let
let g = 500;
let h = 600;
let i = g + h;
document.getElementById("using_let").innerHTML =
"The value of i is: " + i;

//Using const
const j = 512;
const k = 663;
const l = j + k;
document.getElementById("using_const").innerHTML =
"The value of l is: " + l;

//Mixed using let and const
const price1 = 53;
const price2 = 66;
let total = price1 + price2;
document.getElementById("mixed").innerHTML =
"The total is: " + total;

/* The two variables price1 and price2 are declared with the const keyword.
These are constant values and cannot be changed.
The variable total is declared with the let keyword.
The value total can be changed. */

/* When to Use var, let, or const?
1. Always declare variables
2. Always use const if the value should not be changed
3. Always use const if the type should not be changed (Arrays and Objects)
4. Only use let if you can't use const
5. Only use var if you MUST support old browsers. */


// ***** data types *****

// Numbers:
let length = 16;
let weight = 7.5;

// Strings:
let color = "Yellow";
let lastName = "Johnson";

// Booleans
let m = true;
let n = false;

// Object:
const person = {firstName:"John", lastName:"Doe"};

// Array object:
const cars = ["Saab", "Volvo", "BMW"];

// Date object:
const date = new Date("2022-03-25");


//Note-A JavaScript variable can hold any type of data.


/* In programming, data types is an important concept.
To be able to operate on variables, it is important to know something about the type.
Without data types, a computer cannot safely solve this: */
let o = 16 + "Volvo";
/* Does it make any sense to add "Volvo" to sixteen? Will it produce an error or will it produce a result?
JavaScript will treat the example above as: */
let p = "16" + "Volvo";


//Note-When adding a number and a string, JavaScript will treat the number as a string.


let q = 16 + "Volvo";
document.getElementById("d1").innerHTML = q;

let r = "Volvo" + 16;
document.getElementById("d2").innerHTML = r;


//JavaScript evaluates expressions from left to right. Different sequences can produce different results:

let s = 16 + 4 + "Volvo";
document.getElementById("d3").innerHTML = s;

let t = "Volvo" + 16 + 4;
document.getElementById("d4").innerHTML = t;


/* In the s example, JavaScript treats 16 and 4 as numbers, until it reaches "Volvo".
In the t example, since the first operand is a string, all operands are treated as strings. */


//JavaScript Types are Dynamic-JavaScript has dynamic types. This means that the same variable can be used to hold different data types.

let u;         // Now u is undefined
u = 5;         // Now u is a Number
u = "John";    // Now u is a String

document.getElementById("d5").innerHTML = u;



// JavaScript strings
let carName1 = "Volvo XC60";
let carName2 = 'Volvo XC60';

document.getElementById("strings").innerHTML =
carName1 + "<br>" + 
carName2; 