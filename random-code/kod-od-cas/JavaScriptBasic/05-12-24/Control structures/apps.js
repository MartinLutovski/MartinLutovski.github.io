console.log("============ CONTROL STRUCTURES ============");
// 1) Conditional statements
// 2) Switch statements
// 3) Looping structures

// Purpouse: Control the flow of a program

console.log();
console.log("============ Conditional Statements ============");

let num = -5;
//  Example bellow: Program to check wheter a given number is positive, negative or zero
console.log("============ IF Statments ============");
// Base Syntax
// if (Boolean statement) {
//     // code ....
// }

if (num > 0) {
  console.log(`The number ${num} is positive.`);
}

console.log("============ ELSE Statments ============");

// else {

// }

// num = 123314;
if (num > 0) {
  console.log(`The number ${num} is positive.`);
} else {
  console.log(`The number ${num} is not positive.`);
}

console.log("============ ELSE IF Statments ============");

num = 101;
if (num >100) {
    console.log("The number is lager than 100");
    
} else if (num > 0) { 
    console.log(`The number ${num} is positive.`);
} else if (num < 0 ) {
    console.log(`The number ${num} is negative.`);
    
} else {
    console.log('The number is zero.');
    
}

if (num < -5) {
    console.log("Number is smaller than -5");
    
} // zasebna => ke se ispise/izvrsi, zatoa sto ne e vgnezdeno


console.log();
console.log("============ GETTING AN INPUT ============");

let input = prompt ("Enter a number:");
console.log(input);
console.log(typeof input);

console.log("Bellow after parsing the input into integer");


let parsedNumber = parseInt(input);
console.log(parsedNumber);
console.log(typeof parsedNumber);

if (Number.isNaN(parsedNumber)) {
    alert("You've entered and invalid number!");

} else {
    alert (`The parsed number is ${parsedNumber}`)
}