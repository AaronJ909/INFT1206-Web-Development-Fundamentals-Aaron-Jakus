// console.log("Javascript is running");


// let mixArray = [10, "A string", [2,3,4], {mykey: "myvalue"}, true];


// console.log(mixArray);

// console.log(mixArray[0]); // returns the element at index 0 from the array
// mixArray.push("Dinosaur"); // the array.push() method will append a new element to the array

// console.log(mixArray);

// console.log(mixArray.slice(0, 3)); // slice will return a section of the array from the startindex to the end index. ex 0 to 3


// mixArray.pop(); // array.pop() will remove the last element from the array

// console.log(mixArray);

// mixArray.shift(); 

// console.log(mixArray); // array.shift() will remove the first element from the array

// mixArray.unshift(200); // adds a new element to the beginning of the array

// console.log(mixArray);

// console.log(mixArray.length); // array.length will return the length of the array

// console.log(mixArray[mixArray.length - 1]); // will return the last element in the array

// console.log(mixArray.reverse()); // array.reverse() will reverse the order of the elements in the array

// // mutating methods means it will modify the original array

// // non mutating methods means that there will not be any modifications of the original array

// let copyofmixarray = [...mixArray]; // the spread (...) operator will copy with contents of an iterable object (ex. arrays, objects, strings)

// ---------------------- Objects ----------------------------------
// let car = {
//     type: "Super Car", // type = key supercar = value
//     brand: "Bugatti", // these are key-value pairs
//     year: 2016,
//     color: "white",
//     subcar: {color: "red"}, // object nesting
//     greeting: () => console.log("Hello, world"),
//     updatecolor: (colorArg) => (this.color = colorArg),

// };

// let key = "type";

// console.log(car["type"]); // returns value of the "type" key inside the car object
// console.log(car[key]); // returns value of the "type" key inside the car object
// console.log(car.type); // returns value of the "type" key inside the car object
// console.log(car.subcar.color); // returns value of the "subcar" key inside the car object
// console.log(car["subcar"]["color"]);


// console.log(Object.keys(car)); // returns an array of all keys in the object car

// console.log(Object.values(car)); // returns an array of all values in the object car

// console.log(Object.entries(car)); // returns an array of arrays they include both the key and the value for each entry also known as a 2 dimensional array

// console.log(car.color); 
// car.updatecolor("blue");
// console.log(car.color); 

// ---------------------------- Functions ------------------------------------
// we want to create a function that take 2 numbers as inputs and return the sum of those numbers
function sum(a,b) { // a and b are the inputs
    console.log(a+b); 
    let sum = a+b;
    return sum; // returns the value of the sum variable to the caller (invoker)
}

let sumoffourandtwo = sum(4, 2);

console.log(sumoffourandtwo + 10);


//function declaration
function sum(a,b) {
    return a + b;
}

//function expression
const sumex = function sum(a,b) {
    return a + b;
}

//arrow function
const sumarrow = (a,b) => a + b; //implicit returns





// scope refers to the visibility of variables in different components of your code

function newscope() { // creating a new block/blocked scope
    let num = 10;
}
console.log(num)


// Closures
function function1(a,b) {
    
    function function2(c) {
        console.log(a,b,c); // inner function can see and modify outer functions variables
        return c;
    }
    function2(10);
    console.log(c); // outer function cannot see the inner functions variables

}
function1(2, 4);


