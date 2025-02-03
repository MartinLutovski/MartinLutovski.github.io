console.log("=========== SCOPES ===========");

let globalNumber = 1234;

// GLOBAL SCOPE - ACCESS THEM EVRYWHERE.
function printGlobalNumber() {
  globalNumber = 5555;
  console.log(globalNumber);
}

printGlobalNumber();

// LOCAL SCOPE - FUNCTIONS SCOPE

// Example 1

function localScope(number) {
  let localNumber = 100;
  let result = localNumber + number;
  console.log(`The result is`, result);
}
localScope(132);
// console.log(localNumber); out of the function scope

// Example 2
let greeting = "Hello from Qinshift Academy";
function printGreeting() {
  let greeting = "Happy holidays!"; // it prints this greeting becouse is the most relevant
  console.log(greeting);
}

printGreeting();

// Example 3

function outerFunction() {
  let outerVariable = "I'm from the outer function";
  function innerFunction() {
    let innerVariable = "I'm from the inner function";
    console.log(outerVariable);
    console.log(innerVariable);
  }
  innerFunction(); // the outer function basicaly just calls the inner function
}

outerFunction();
// innerFunction(); ERROR -


//  BLOCK SCOPE - IF ELSE


// Example 1
if (50 < 100){
    let blockNumber = 50 + 100;
    console.log(blockNumber);
    
}

// console.log(blockNumber); ERROR - undefined becouse its in the {} braces 
// Everything inside is unreachable outside


// Example 2
let counter = 0;
while (counter <= 10) {
    console.log(counter);
    counter++;
    let testCounter = counter;
    
}

// console.log(testCounter); ERROR
console.log(counter); // 11

