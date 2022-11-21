const name = "Ionaught";

let age = 65;
const isOkay = true;
let nothing;

//isOkay ? console.log("It is true") : console.log("It is false");

// for (let i = 5; i > 0; i--) {
//   console.log("Value: ", i);
// }

// let i = 0;

// while (i < 5) {
//   console.log("Value: ", i);
//   i++;
// }

function myFunction() {
  console.log("My function");
}

// myFunction();

// function square(n) {
//   console.log("Square is ", n * n);
// }

// square(5);

// function sum(a, b) {
//   console.log("The sum is ", a + b);
// }

// sum(4, 9);

// function sum(a, b) {
//   return a + b;
// }

// const sum = (a, b) => {
//   return a + b;
// };

// let result = sum(4, 9);

// console.log(result);

// const sum = function (a, b) {
//   return a + b;
// };

// let result = sum(4, 9);

// console.log(result);

//const sum = (a, b) => a + b;

// const sum = (a) => (b) => a + b;

// let result = sum(5)(8);

// console.log(result);

// let sum = (a, b) => a + b;
// let sub = (a, b) => a - b;

// const operation = (a, b, op) => {
//   return op(a, b);
// };

// let result = operation(4, 5, sum);

// console.log(result);

const arr = [4, 5, 6, 3, 4];

const months = ["jan", "feb", "mar"];

//! [16,25,36,9,16]

let newArr = [];

// for (let i = 0; i < arr.length; i++) {
//   newArr[i] = arr[i] * arr[i];
// }

// const sqr = (n, i) => {
//   newArr[i] = n * n;
// };

// arr.forEach((n, i) => {
//   newArr[i] = n * n;
// });

// let newArr = arr.map((n) => n * n);

// let newArr = arr.map(function (n) {
//   return n * n;
// });

// console.log(newArr);

// function sum(a, b) {
//   return a + b;
// }

// const sum = function (a, b) {
//   return a + b;
// };

// const sum = (a, b) => a + b;

// const res = arr.map((n) => n * n);

// console.log(res);

const obj = {
  name: "Ionaught",
  place: "Tvm",
  age: 1,
  isOkay: true,
  tech: ["HTML", "CSS", "JS", "React"],
  address: {
    pin: 695010,
  },
  seyHello() {
    console.log("Hello");
  },
};

//!JSON

//! JavaScript Object Notation

const newObj = {
  name: "Ionaught",
  place: "Tvm",
  age: 1,
};

// let a = 5;
// a = 6;

/*
{
  "name": "Ionaught",
  "place": "Tvm",
  "age": 1,
}

*/

obj.name = "Ionaught Technologies";

obj.greet = (name) => {
  console.log("Hello " + name);
};

// obj.greet("Ashik");
// console.log(obj.address);

console.log(JSON.stringify(newObj));
