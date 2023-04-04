"use strict";

/*
 * Array Homework [Bonus]
 */
// // Exercise 1
// const students = ["Le", "Gia", "Anh", "Khoa", "GM", "Iviettech"];
// students.push("Johnny");
// students.unshift("Anna");
// console.log(students);
// students[2] = "Yui Hatano";
// console.log(students);
// students.pop();
// console.log(students);
// students.shift();
// console.log(students);

// // Exercise 2
// function calculatePrice() {
//   const amount = [];
//   let input;
//   while (true) {
//     input = prompt("Enter a price");
//     if (input.toLocaleLowerCase() === "done") {
//       break;
//     }
//     const number = parseFloat(input);
//     if (isNaN(number) || number < 0) {
//       alert("Invalid number");
//     } else {
//       amount.push(number);
//     }
//   }
//   const totalAmount = amount.reduce((a, b) => a + b, 0);
//   alert(`Total amount: ${totalAmount}`);
// };
// calculatePrice();

// // Exercises 3
// const arr = [1, -2, 3, 4, -9, 6, 5, 2, 6, 7, 0, 3, 5, 3, -6, 4, -7];

// const arrayASC = arr.slice().sort((a, b) => a - b);
// const arrayDESC = arr.slice().sort((a, b) => b - a);
// console.log(arrayASC);
// console.log(arrayDESC);

// const largestNumIndex = arr.indexOf(arrayDESC[0]);

// const prevIndices = [largestNumIndex - 2, largestNumIndex - 1];
// const nextIndices = [largestNumIndex + 1, largestNumIndex + 2];

// prevIndices[0] = prevIndices[0] < 0 ? 0 : prevIndices[0];
// prevIndices[1] = prevIndices[1] < 0 ? 0 : prevIndices[1];
// nextIndices[0] = nextIndices[0] >= arr.length ? arr.length - 1 : nextIndices[0];
// nextIndices[1] = nextIndices[1] >= arr.length ? arr.length - 1 : nextIndices[1];

// const sum = arr[prevIndices[0]] + arr[prevIndices[1]] + arr[nextIndices[0]] + arr[nextIndices[1]];
// console.log(sum);

// //Exercises 4
// const paragraphes = `Pokémon (Japanese: ポケモン Hepburn: Pokemon?) (English: /ˈpoʊkɪˌmɒn, -ki-, -keɪ-/)[1][2] also known as Pocket Monsters (Japanese: ポケットモンスター Hepburn: Poketto Monsutā?, n. d Pocket Monsters) in Japan, is a media franchise managed by The Pokémon Company, a Japanese consortium between Nintendo, Game Freak and Creatures.[3] The franchise rights are shared by all three companies, but Nintendo is the sole owner of the trademark.[4] The franchise was created by Satoshi Tajiri in 1999,[5] and focuses on fictional creatures called "Pokémon", which humans, are known as Pokémon Trainers. Catch and train to fight each other to play sports. The English tagline for the franchise is "Gotta Catch 'Em All".[6][7] The works in the franchise are set in the Pokémon universe.`;
// const numberPokemon = (paragraphes.match(/Pokémon/g) || []).length;
// const newText = paragraphes.replace(/Pokémon/g,"Pocket Monster");
// const sentences = newText.split(/[.?!]+/);
// sentences.forEach(sentence => console.log(sentence.trim()));



/*
 * Java Assignment 2 - Arrays and More skill
 */

// Exercises 1 
// 1
// const array = new Array(10);
// for (let i = 0; i < 10; i++) {
//   array[i] = i;
// }
// // 2
// var printArray = (arr) => arr.forEach(element => {
//   console.log(element);
// });

// printArray(array);

// // 3
// var functionThree = () => {
//   let input = prompt("Please enter a number");
//   input = parseInt(input);
//   console.log(`${input} is ${array.includes(input) ? "exists" : "not exist"} in array`);
// }
// // 4 
// console.log(Math.max(...array));
// // 5
// const sumArr = array.reduce((a,b) => a+b, 0);
// console.log(sumArr);

// // 6 
// const sortedDESC = array.slice().sort((a,b) =>b-a);
// console.log(sortedDESC);

// // Exercises 2
// function getInput(prompt, type = "number") {
//   while (true) {
//     const input = prompt(prompt);
//     if (type === "number" && isNaN(input)) {
//       console.log("Invalid input. Please enter a number.");
//     } else {
//       return type === "number" ? parseInt(input) : input;
//     }
//   }
// }

// function inputArray(n, m) {
//   const arr = new Array(n);
//   for (let i = 0; i < n; i++) {
//     arr[i] = new Array(m);
//     for (let j = 0; j < m; j++) {
//       arr[i][j] = getInput(`Enter element [${i}][${j}]: `);
//     }
//   }
//   return arr;
// }

// function printArray(arr) {
//   for (let i = 0; i < arr.length; i++) {
//     console.log(arr[i].join("\t"));
//   }
// }

// function sumArray(arr) {
//   let sum = 0;
//   for (let i = 0; i < arr.length; i++) {
//     for (let j = 0; j < arr[i].length; j++) {
//       sum += arr[i][j];
//     }
//   }
//   return sum;
// }

// function searchArray(arr, num) {
//   for (let i = 0; i < arr.length; i++) {
//     for (let j = 0; j < arr[i].length; j++) {
//       if (arr[i][j] === num) {
//         return true;
//       }
//     }
//   }
//   return false;
// }

// function sortArray(arr) {
//   const flatArr = arr.flat();
//   flatArr.sort((a, b) => a - b);
//   for (let i = 0; i < arr.length; i++) {
//     arr[i] = flatArr.slice(i * arr[i].length, (i + 1) * arr[i].length);
//   }
//   return arr;
// }

// function main() {
//   const n = getInput("Enter the number of rows: ");
//   const m = getInput("Enter the number of columns: ");
//   const arr = inputArray(n, m);
//   console.log("Array:");
//   printArray(arr);
//   console.log(`Total: ${sumArray(arr)}`);
//   const num = getInput("Enter a number to search for: ");
//   console.log(searchArray(arr, num) ? "Found" : "Not found");
//   console.log("Sorted array:");
//   printArray(sortArray(arr));
// }

// main();

// // Exercises 3
// let names = prompt("Enter a list of names, separated by commas:").split(",");

// for (let i = 0; i < names.length; i++) {
//   names[i] = names[i].trim();
// }

// names.sort();

// console.log("Sorted names:");
// for (let i = 0; i < names.length; i++) {
//   console.log(names[i]);
// }


/*
 * JavaScript Assignment 1 Basic
 */

// Exercises 1
let a = 10;
let b = 20;
let tmp = a;
a = b;
b = tmp;
console.log(a, b);

// Exercises 2

const arrayCords = [];
let count = 0;
while(count < 3){
  let inputNumber = parseFloat(prompt("Enter cord number"));
  arrayCords.push(inputNumber);
}

const average = arrayCords.reduce((a, b) => a + b, 0) / arrayCords.length;

if (average >= 8) {
  alert("A");
}
else if (average >= 6.5 && average < 8) {
  alert("B");
} else if (average >= 5 && average < 6.5) {
  alert("C");
} else {
  alert("D");
}

// Exercises 3
let tmpA = parseFloat(prompt("Enter a value for a:"));
let tmpB = parseFloat(prompt("Enter a value for b:"));

// Check if a is zero (equation is invalid if a is zero)
if (tmpA === 0) {
  console.log("Error: a cannot be zero.");
} else {
  // Calculate the value of x using the equation ax + b = 0
  let x = -tmpB / tmpA;
  
  // Print the value of x to the screen
  console.log("The value of x is:", x);
}
// Exercises 4

let tmpA2 = parseFloat(prompt("Enter a value for a:"));
let tmpB2 = parseFloat(prompt("Enter a value for b:"));
let tmpC2 = parseFloat(prompt("Enter a value for c:"));

// Calculate the discriminant
let discriminant = Math.pow(tmpB2, 2) - 4 * tmpA2 * tmpC2;

// Check the value of the discriminant
if (discriminant < 0) {
  console.log("The equation has no real roots.");
} else if (discriminant === 0) {
  let x = -tmpB2 / (2 * tmpA2);
  console.log("The equation has one root:", x);
} else {
  let x1 = (-tmpB2 + Math.sqrt(discriminant)) / (2 * tmpA2);
  let x2 = (-tmpB2 - Math.sqrt(discriminant)) / (2 * tmpA2);
  console.log("The equation has two roots:", x1, "and", x2);
}

// Exercise 5
let sum = 0;

for (let i = 1; i <= 50; i++) {
  sum += i;
}

console.log("The sum of the first 50 integer numbers is: " + sum);

// Exercise 6
let tmpN2 = 20;
let fibonacci = [0, 1];

for (let i = 2; i <= tmpN2; i++) {
  fibonacci[i] = fibonacci[i - 1] + fibonacci[i - 2];
}

console.log("The first 20 Fibonacci numbers are: " + fibonacci.slice(0, n).join(", "));

// Exercise 7
// Create an empty array to store the list of students
let studentList = [];

// Function to add a new student to the list
function addStudent() {
  let student = {};
  student.code = prompt("Enter student code:");
  student.name = prompt("Enter student name:");
  student.age = prompt("Enter student age:");
  student.sex = prompt("Enter student sex:");
  studentList.push(student);
}

// Function to print all students in the list
function printStudents() {
  console.log("List of students:");
  console.log(studentList);
}

// Main loop to add and print students
while (true) {
  let action = prompt("Enter 'a' to add a student, 'p' to print all students, or 'esc' to exit:");
  if (action === "a") {
    addStudent();
  } else if (action === "p") {
    printStudents();
  } else if (action === "esc") {
    break;
  }
}

// Exercise 8
const date = new Date();
const year = date.getFullYear();

const n = parseInt(prompt("Enter a number from 1 to 12:"));

switch(n) {
  case 1:
  case 3:
  case 5:
  case 7:
  case 8:
  case 10:
  case 12:
    console.log(`The month ${n} has 31 days in ${year}.`);
    break;
  case 4:
  case 6:
  case 9:
  case 11:
    console.log(`The month ${n} has 30 days in ${year}.`);
    break;
  case 2:
    if (year % 4 == 0 && year % 100 != 0 || year % 400 == 0) {
      console.log(`The month ${n} has 29 days in ${year}.`);
    } else {
      console.log(`The month ${n} has 28 days in ${year}.`);
    }
    break;
  default:
    console.log("Error: Enter a number from 1 to 12.");
}

// Exercises 9
function greatestCommonDivisor(a, b) {
  if (b == 0) {
    return a;
  } else {
    return greatestCommonDivisor(b, a % b);
  }
}

// Accept two integers from user
let tmpA3 = parseInt(prompt("Enter first integer: "));
let tmpB3 = parseInt(prompt("Enter second integer: "));

// Call greatestCommonDivisor function and print result
let gcd = greatestCommonDivisor(tmpA3, tmpB3);
console.log("The greatest common divisor of " + tmpA3 + " and " + tmpB3 + " is " + gcd + ".");

// Exercises 10

let tmpN = parseInt(prompt("Enter a number:"));

for (let i = 1; i <= tmpN; i++) {
  let row = "";
  for (let j = 1; j <= i; j++) {
    row += "*";
  }
  console.log(row);
}
// Exercises 11

// Accept the value of N from user
let N = parseInt(prompt("Enter the value of N: "));

// Loop through each row
for(let i = 1; i <= N; i++) {
  // Loop through each column
  let row = "";
  for(let j = 1; j <= N-i; j++) {
    row += " ";
  }
  for(let j = 1; j <= i; j++) {
    row += "*";
  }
  console.log(row);
}
