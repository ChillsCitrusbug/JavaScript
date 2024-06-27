// try catch
// try {
//     adlert("welcome");
// } catch (error) {
//     let element = document.querySelector("#error");
//     element.innerHTML = error.message;    // alternative error.name
// }

// try throw catch
// function myFunction() {
//     const message = document.getElementById("p01");
//     message.innerHTML = "";
//     let x = document.getElementById("demo").value;
//     try { 
//       if(x.trim() == "")  throw "empty";
//       if(isNaN(x)) throw "not a number";
//       x = Number(x);
//       if(x < 5)  throw "too low";
//       if(x > 10)   throw "too high";
//     }
//     catch(err) {
//       message.innerHTML = "Input is " + err;
//     }
// }

// try throw catch finally
// function myFunction() {
//     const message = document.getElementById("p01");
//     message.innerHTML = "";
//     let x = document.getElementById("demo").value;
//     try { 
//       if(x.trim() == "")  throw "is empty";
//       if(isNaN(x)) throw "is not a number"; 
//       x = Number(x);
//       if(x > 10)   throw "is too high";
//       if(x < 5)  throw "is too low";
//     }
//     catch(err) {
//       message.innerHTML = "Input " + err;
//     }
//     finally {
//       document.getElementById("demo").value = "";
//     }
// }

// error object - parameter pass in catch - parameter.name will give error name or parameter.message will give error message
// range error, reference error, syntax error, type error, URI(uniform resource identifier) error
// here is the example of range error
// let num = 1;
// try {
//   num.toPrecision(500);
// }
// catch(err) {
//   document.getElementById("demo").innerHTML = err.name; // alternative err.message
// }