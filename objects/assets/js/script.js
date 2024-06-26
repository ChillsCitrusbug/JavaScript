// objects - In real life, objects are things like: houses, cars, people, animals, or any other subjects. - Objects are variables too. But objects can contain many values.



// * object creation - two ways

// 1. object literals
// const car = {
//     name : "BMW",
//     model : "GT",
//     color : "Black",
//     speed : 300
// };

// 2. using new keyword (no need to use this)

// const car = new Object();
// car.name = "BMW";
// car.model = "GT";
// car.color = "Black";
// car.speed = 300;



// * object properties - key value pairs are properties of object
// name BMW, model GT, color Black, speed 300 are the properties

// access properties - two ways

// 1. car.name;
// document.getElementById("car").innerHTML = car.color;

// 2. car["name"];
// document.getElementById("car").innerHTML = car["name"];

// adding new properties
// car.shape = "Rectangle";
// document.getElementById("car").innerHTML = car.shape;

// deleting properties
// delete car.shape;
// document.getElementById("car").innerHTML = car.shape;

// nested objects
// const myObj = {
//     name: "John",
//     age: 30,
//     myCars: {
//       car1: "Ford",
//       car2: "BMW",
//       car3: "Fiat"
//     }
// };
// access
// document.getElementById("car").innerHTML = myObj.myCars.car2;



// * object methods - Methods are actions that can be performed on objects. Methods are function definitions stored as property values.

// const car = {
//     name : "BMW",
//     model : "GT",
//     color : "Black",
//     speed : 300,
//     full_details : function(){return this.name + this.model + this.color + this.speed;}
// };

// document.getElementById("car").innerHTML = car.full_details();   

// this - refers to the car objects

// access methods
// objName.function() execute function
// objName.function will give function definition

// adding method to an object
// myObj.details = function() {
//     return this.name + " " + this.age;
// };

// document.getElementById("car").innerHTML = myObj.details();

// using js methods
// myObj.details = function() {
//     return (this.name + " " + this.age).toUpperCase();
// };

// document.getElementById("car").innerHTML = myObj.details();



// *Objects are Mutable - Any changes to x will also change person
// const x = car;
// document.getElementById("car").innerHTML = x.name;



// *Display objects - Displaying a JavaScript object will output [object Object].

// const myObj = {
//     name: "John",
//     age: 30,
//     myCars: {
//       car1: "Ford",
//       car2: "BMW",
//       car3: "Fiat"
//     }
// };

// displaying object properties
// document.getElementById("car").innerHTML = myObj.name + ", " + myObj.age + ", " + myObj.myCars.car1 + ", " + myObj.myCars.car2 + ", " + myObj.myCars.car3;

// displaying properties in a loop
// let text = "";
// for(let x in myObj){
//     text += myObj[x] + " ";
// };
// document.getElementById("car").innerHTML = text;

// using Object.values()
// const text = Object.values(myObj);
// document.getElementById("car").innerHTML = text;

// using object entries
// let text = "";
// for (let [obj, value] of Object.entries(myObj)) {
//   text += obj + ": " + value + "<br>";
// };
// document.getElementById("car").innerHTML = text;

// using JSON.stringify()
// let text = JSON.stringify(myObj);
// document.getElementById("car").innerHTML = text; 



// *Object Constructor

// function Person(first, last, age){
//     this.firstName = first;
//     this.lastName = last;
//     this.age = age;
//     this.country = "India" // default value - same given to all objects
// }

// let person1 = new Person("chills", "solanki", 21);
// let person2 = new Person("ronak", "solanki", 25);
// let person3 = new Person("viranch", "solanki", 25);
// let person4 = new Person("vraj", "surani", 22);

// person1.favoriteColor = "Beige"; // adding property to an object
// document.getElementById("car").innerHTML = person1.favoriteColor;

// adding a property to a constructor
// Person.prototype.language = "Gujarati";
// document.getElementById("car").innerHTML = person1.language;

// construction function methods
// function Person(first, last, age){
//     this.firstName = first;
//     this.lastName = last;
//     this.age = age;
//     this.fullName = function(){
//         return this.firstName + " " + this.lastName;
//     };
// }

// let person1 = new Person("chills", "solanki", 21);
// let person2 = new Person("ronak", "solanki", 25);
// let person3 = new Person("viranch", "solanki", 25);
// let person4 = new Person("vraj", "surani", 22);

// document.getElementById("car").innerHTML = person1.fullName();

// adding method to an object
// person1.nameAge = function(){
//     return this.firstName + " " + this.age;
// };
// document.getElementById("car").innerHTML = person1.nameAge();

// adding method function to constructor
// Person.prototype.age5 = function(age){
//     return age5 = this.age + 5;
// }
// document.getElementById("car").innerHTML = person1.age5();