// =========== OPTIONAL PARAMETERS ==============

function multiply(num1, num2 = 10) {
  console.log(`Result: ${num1 * num2}`);
}

multiply(5, 2);
multiply(7);

console.log("=============== FUNCTIONS - FIRST CLASS CITIZENS =============");

// ========= > Starting functions in a variable

let greet = (name) => console.log(`Hello ${name}!`);
greet("Martin");

// ========== > Used as an argument to anoter function*********

function calculator(calculateFunc, num1, num2) {
  return calculateFunc(num1, num2);
}

function sum(number1, number2) {
  return number1 + number2;
}
// debugger;
let sumResult = calculator(sum, 5, 10);

let subtractResult = calculator(
  function (num1, num2) {
    return num1 - num2;
  },
  100,
  80
);

console.log(subtractResult);

function logFunction(func) {
  func();
}

logFunction(() => console.log("Hello"));

// ============ > Used as a return value from anoter function

function getOperation(operator) {
  switch (operator) {
    case "+":
      return (num1, num2) => num1 + num2;
    case "-":
      return (num1, num2) => num1 - num2;
    case "*":
      return (num1, num2) => num1 * num2;
    case "/":
      return (num1, num2) => num1 / num2;
    case "**":
      return (num1, num2) => num1 ** num2;
    default:
      return;
  }
}

const divide = getOperation("/");
console.log(divide(10, 2));

console.log(getOperation("**")(2, 3));

//  =========> Have properties line objects
// not really ok to use.
function greetStudent(name) {
  console.log(`Hello ${name}`);
}
greetStudent.firstName = "Bob";
greetStudent(greetStudent.firstName); // acts as object, stupid really..

greetStudent.getFullName = (lastName) =>
  greetStudent.firstName + " " + lastName; // ?? exactly..

console.log(greetStudent.getFullName("Bobsky"));


console.log("");
console.log(" ================== Function arguments =============");

function someFunction(){
    console.log(arguments);
    console.log(arguments.length);
    
    
}

someFunction("Bob", "Jane", "Tom", "Jill", "OneMoreName");

function sumNumbers(){
    let result = 0;
    for(let i = 0 ; i < arguments.length; i++){
        result += arguments[i];
    }
    return result
}

console.log(sumNumbers(1, 2 ,3 ,4 ,5));

console.log(sumNumbers(10,20,30,40)); // good for using many arguments
