// function product(p1, p2){
//     return p1 * p2;
// }

// let result = product(4, 3);
// document.getElementById("demo").innerHTML = result;


// function myFunction(a, b) {

//   return a * b; // Function returns the product of a and b
// }


// let x = myFunction(4, 3); // Function is called, the return value will end up in x

// document.getElementById("demo").innerHTML = x;


/*
The () Operator
The () operator invokes (calls) the function:
*/

// function toCelsius(f) {
//     return (5/9) * (f-32);
// }
  
// let value = toCelsius(77);  

// document.getElementById("demo").innerHTML = value;



// Accessing a function with incorrect parameters can return an incorrect answer:

// function toCelsius(f) {
//     return (5/9) * (f-32);
// }
  
// let value = toCelsius();
// document.getElementById("demo").innerHTML = value;



// Accessing a function without () returns the function and not the function result:

// function toCelsius(f) {
//     return (5/9) * (f-32);
// }

// let value = toCelsius;
// document.getElementById("demo").innerHTML = value;


// Note - As you see from the examples above, toCelsius refers to the function object, and toCelsius() refers to the function result.




// Functions Used as Variable Values
// Functions can be used the same way as you use variables, in all types of formulas, assignments, and calculations.


// Example - Instead of using a variable to store the return value of a function:
/*
let x = toCelsius(77);
let text = "The temperature is " + x + " Celsius";
*/

// let text = "The temperature is " + toCelsius(77) + " Celsius.";
// document.getElementById("demo").innerHTML = text;

// function toCelsius(fahrenheit) {
//   return (5/9) * (fahrenheit-32);
// } 



// Local Variables
// Variables declared within a JavaScript function, become LOCAL to the function.
// Local variables can only be accessed from within the function.

/*
Example
// code here can NOT use carName

function myFunction() {
  let carName = "Volvo";
  // code here CAN use carName
}

// code here can NOT use carName
*/

// let text = "Outside: " + typeof carName;
// document.getElementById("demo1").innerHTML = text;

// function myFunction() {
//   let carName = "Volvo";
//   let text = "Inside: " + typeof carName + " " + carName; 
//   document.getElementById("demo2").innerHTML = text;
// }

// myFunction();


// Since local variables are only recognized inside their functions, variables with the same name can be used in different functions.
// Local variables are created when a function starts, and deleted when the function is completed.