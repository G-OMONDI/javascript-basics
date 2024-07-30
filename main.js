console.log('JavaScript is linked successfully!');
// String
let myString = "Hello, JavaScript!";

// Number
let myNumber = 42;

// Boolean
let myBoolean = true;

// Null
let myNull = null;

// Undefined
let myUndefined;

// Object
let myObject = {
    name: "Glen",
    age: 30,
    isStudent: false
};

// Symbol
let mySymbol = Symbol('mySymbol');

console.log('String:', myString);
console.log('Number:', myNumber);
console.log('Boolean:', myBoolean);
console.log('Null:', myNull);
console.log('Undefined:', myUndefined);
console.log('Object:', myObject);
console.log('Symbol:', mySymbol);

// Array of numbers
let numbers = [8, 19, 12, 20, 7];

// 2. Use the map method to create a new array where each number is multiplied by 2
let doubledNumbers = numbers.map(num => num * 2);
console.log('Doubled Numbers:', doubledNumbers);

// 3. Use the filter method to create a new array that only includes numbers greater than 10
let numbersGreaterThanTen = doubledNumbers.filter(num => num > 10);
console.log('Numbers Greater Than 10:', numbersGreaterThanTen);

// 4. Use the reduce method to find the sum of all numbers in the array
let sumOfNumbers = numbers.reduce((total, num) => total + num, 0);
console.log('Sum of Numbers:', sumOfNumbers);

// 5. Use the forEach method to print each number in the array to the console
console.log('Original Numbers:');
numbers.forEach(num => console.log(num));

// 1. Create a function named greet that takes a name parameter and prints a greeting message to the console
function greet(name) {
    console.log(`Hello, ${name}!`);
}

// Example usage:
greet('Alice');

// 2. Create a function named sumArray that takes an array of numbers as a parameter and returns the sum of all elements
function sumArray(arr) {
    return arr.reduce((total, num) => total + num, 0);
}

// Example usage:
let sum = sumArray([1, 2, 3, 4, 5]);
console.log('Sum of array:', sum);

// 3. Create a function named findMax that takes an array of numbers as a parameter and returns the maximum number
function findMax(arr) {
    return Math.max(...arr);
}

// Example usage:
let max = findMax([1, 2, 3, 4, 5]);
console.log('Maximum number in array:', max);

