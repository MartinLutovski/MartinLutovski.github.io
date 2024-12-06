// console.log("isitworking");


function sum(firstNumber, secondNumber) {
    return firstNumber + secondNumber;
}

function diff(firstNum, secondNUm){
    return firstNum - secondNUm
}

function multiply(firstNum, secondNUm){
    return firstNum * secondNUm
}

function divide(firstNum, secondNUm){
    return firstNum / secondNUm
}

console.log(sum(13, 24));
console.log(sum(50, 50));

console.log(diff(15, 5));
console.log(diff(100, 10));

console.log(multiply(100, 100));
console.log(multiply(15, 5));

console.log(divide(100,10));
console.log(divide(10,100));

let num1 = parseInt(prompt("Enter first number:"));
let num2 = parseInt(prompt("Enter second number:"));

console.log(sum(num1,num2));



