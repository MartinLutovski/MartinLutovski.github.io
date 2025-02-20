console.log("======== LOGICAL OPERATORS ==========");

console.log(30 > 50); // false
console.log(30 < 50); // true

console.log();
console.log("======== logical AND && ==========");
console.log(true && true);
console.log(true && false);

let num1 = 50;
let num2 = 100;

console.log(num1 < num2 && num2 === 150); // true && false => false

console.log(num1 < num2 && num2 + 50 === 150); // true - all is true

let expression = num1 < num2 && num2 <= 100 && num1 + 10 !== 60;
console.log(expression); // false - last example is not true

console.log();
console.log("======== logical OR || ==========");
console.log(true || false); // true
console.log(false || true); // true
console.log(false || false); // false

let number1 = 3;
let number2 = 13;

console.log(number1 > number2 || number2 >= 10); // false

console.log((5 > 0 && 5 + 6 < 10) || 10 > 5); // breakdown:
// 5 > 0 => true
// 11 < 10 => false
// 10 > 5 => true
// true && false || true
// false || true => true

console.log();
console.log("======== Logical NOT !  ==========");
console.log(!true); // false
console.log(!false); // true

let isValid = false;
console.log(isValid); // false
console.log(!isValid); // true

let numOne = 100;
let numTwo = 1000;

console.log(!(numOne > numTwo) && "Bob" == "Bob"); // true
// breakdown
// 1) !100 > 1000 => !(false) => true
// 2) Bob == Bob => true
// 3) true && true => true

console.log();
console.log("========  EQUALITIES  ==========");

// console.log(3 = '3'); // Invalid - used for assiging assigment
console.log(3 == "3"); // true - sporeduva samo vrednost! equality
console.log(3 === "3"); // false - sporeduva vrednost i TYPE!  strickt equality

console.log();

console.log("========  TRUTHY/FALSY VALUES  ==========");

let numberOne = -1000;
let numberTwo = 0;

console.log(Boolean(numberOne)); // true - in boolean context
console.log(Boolean(numberTwo)); // false - in boolean context

console.log(Boolean("")); // false 
console.log(Boolean(" ")); // true
