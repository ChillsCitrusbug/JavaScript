// Operators

// arithmatic operators

let a = 10;
let b = 5;

// binary
// document.write(a+b)
// document.write("<br>")
// document.write(a-b)
// document.write("<br>")
// document.write(a*b)
// document.write("<br>")
// document.write(a/b)
// document.write("<br>")
// document.write(a%b)
// document.write("<br>")
// document.write(a**b)
// document.write("<br>")

// unary
// document.write(++b) // first incr then use
// document.write(b++) // first use then incr
// document.write(b--) // first use then dcr
// document.write(--b) // first dcr then use


// assignment operator

let c = 30; // = assign

// c += 5;
// document.write(c)

// c -= 5;
// document.write(c)

// c *= 5;
// document.write(c)

// c /= 5;
// document.write(c)

// c %= 5;
// document.write(c)

// c **= 5;
// document.write(c)


// comparison operators - it will always output boolean value true or false 

// > < >= <=
// document.write(10>5)
// document.write('<br>')
// document.write(10<5)
// document.write('<br>')
// document.write(10>=5)
// document.write('<br>')
// document.write(10<=5)
// document.write('<br>')

// ==  loose equality - equal values 
// document.write(10==10)
// document.write('10'==10)
// document.write('<br>')

// === strict equality - equal values as well as data types
// document.write(10===10)
// document.write('<br>')
// document.write(10==='10')



// != not equals to

// !== not equal values as well as not equal data types


// string operators

// let d = "hello"
// let e = "chills"
// document.write(d+e)


// let f = "hello"
// f+="chills"
// document.write(f)


// ternary operator

// let age = 15;
// let status1 = (age>18) ? 'i can vote' : 'i can not vote';
// document.write(status1);


// logical operator

// let ans = (true && true && true);
// document.write(ans);

// let ans = (true && false && true);
// document.write(ans);

// let ans = (false || false || false);
// document.write(ans);

// let ans = (false || false || true);
// document.write(ans);

// document.write(!true);
// document.write(!false);

// logical operators working with non booleans

// document.write(false && 'chills');

// document.write(false || 'chills');

// document.write(true && '');

// document.write(15 || null);

// short circuiting

// document.write(false || 7 || 11 || 30);

// document.write(1 && null && 2 && 4);


// bitwise operator

// document.write(2&5); // 010 & 101 // and
// document.write(2|5); // 010 | 101 = 111 = 7 // or

// document.write(~0); // -1 // not

// document.write(2 ^ 2) // xor
// document.write(2 ^ 3) // xor


// document.write(10<<1); // left shift number=10 a=1 => number * (2**a)
// document.write(10<<3);
// document.write(10>>1); // right shift number / (2**a)



// ***** Conditionals *****

//if
// let age1 = 135;
// if(age1 >= 18){
//     document.write("can vote");
// }

// // if_else
// let age = 135;
// if(age >= 18){
//     document.write("can vote");
// }
// else{
//     document.write('can not vote');
// }

//if_else_if here last else is optional 
// let number = 5;

// if(number == 1) {
//     document.write('A');
// }
// else if(number == 2) {
//     document.write('B');
// }
// else if(number == 3) {
//     document.write('C');
// }
// else if(number == 4) {
//     document.write('D');
// }
// else {
//     document.write('F');
// }


// nested if
// let number = 4;
// let age = 24;

// if(number == 1) {
//     document.write('A');
// }
// else if(number == 2) {
//     document.write('B');
// }
// else if(number == 3) {
//     document.write('C');
// }
// else if(number == 4) {
//     if(age > 18){
//         document.write('i can vote');
//     }
//     document.write('D');
// }



// switch here last default is optional
// let num = 3;

// switch(num){
//     case 1: document.write("A");
//     break;
//     case 2: document.write("B");
//     break;
//     case 3: document.write("C");
//     break;
//     case 4: document.write("D");
//     break;
//     default: document.write("F");
// }






