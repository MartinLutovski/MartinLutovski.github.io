// HOISTING ONLY WORKS FOR FUNCTIONS DECLARED AS "function"
sayHello();

function sayHello() {
  console.log("Hello, I'm hoisted!");
}

sayHello();


// sayHelloArrow();  ERROR
let sayHelloArrow = () => console.log("Hello from arrow!");
sayHelloArrow();



// console.log(test); ERROR
let test = "Test let"
console.log(test);

// console.log(testConst); ERROR
const testConst = "Test const"
console.log(testConst);


// DO NOT USE "VAR" !!! - *It works retarded!