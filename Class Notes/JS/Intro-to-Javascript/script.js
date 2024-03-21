// console.log("my script is running!");


// // declare a variable and store a string inside it in a string

// // declaration variables
// var MyString = "intro to javascript";


// let MyScript = "my script";

// // with const you cannot change the initial value of the variable
// const myScript3 = "my script3";


// myscript4 = "my script";

// console.log(MyScript + myScript3);
// console.log(MyString);


// console.log(MyScript.toLocaleLowerCase()); 
// console.log(MyScript.toLocaleUpperCase());
// console.log(MyScript.length);
// console.log(MyScript(0)); // returns the first letter of the string because strings are iterable objects in javascript

// console.log(MyScript.replace("a", "e"));// replaces all of the letters a and e


// // mathematical operators
// let a = 5;
// let b = 10;

// console.log(a + b);
// console.log(a - b);
// console.log(a / b);
// console.log(a * b);
// console.log(a % b);
// console.log(math.sort(a + b));
// console.log(math.max(a + b));




// let c = 10;
// let d = 5;
// // relational operators
// console.log(c == d);
// console.log(d == c);
// console.log(a!= b);
// console.log(a < b);
// console.log(a < c || c < d);




// // if else conditional operators

// let FirstNumber = prompt("please enter your first number");
// let SecondNumber = prompt("please enter your second number");
// let operand = prompt("please enter your operand from the following '+', '-', '/', '*'");

// console.log(FirstNumber + SecondNumber + operand)

// let result;

// // calculator using if/else operators

// if (operand == '+') {
//     result = FirstNumber + SecondNumber
// }
// else if (operand == '-') {
//     result = FirstNumber - SecondNumber
// }
// else if (operand == '/') {
//     result = FirstNumber / SecondNumber
// }
// else if (operand == '*') {
//     result = FirstNumber * SecondNumber
// }


// alert('The calculated results is: ${result}');



// // calculator using the switch operator

// switch(operand) {
//     case '+'
//     case '-'
//     case '/'
//     case '*'
// }



// loops
for (let i = 0; i < 10; i++) {
    for (let j = 0; j < 10; j++) {
        console.log(i+j);
    }
    console.log(i);
}

let numOfloops = prompt("how many loops?");
let mystring = "dinosaur are very cool";


if (numOfloops < 0) {
    for(let i = 0; i > numOfloops; i--) {
        console.log(i);
}
}

for(let i = 0; i <numOfloops; i++) {
    console.log(i);
}