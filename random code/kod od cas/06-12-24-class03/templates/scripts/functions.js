// ============= Function Declaration ==========

function sayHello() {
  console.log("Hello there!");
}

// ====== Calling a FUNCTION to be executed ======
sayHello();
sayHello();
sayHello();

// Uste 1 primer na funkcija i povikuvanje.
function sayGoodbye() {
  console.log("Goodbye! See you next week!");
}

sayGoodbye();

function addTwoNumbers() {
  let firstNum = 22;
  let secondNum = 324;
  let result = firstNum + secondNum;
  console.log(`The sum of the two number is ${result}`);
}

addTwoNumbers();
addTwoNumbers();
addTwoNumbers();

function sumTwoNumbers() {
  let firstNum = parseInt(prompt("Please enter first number:"));
  let secondNum = parseInt(prompt("Please enter second number:"));
  let result = firstNum + secondNum;
  console.log(`The sum of the two numbers is ${result}`);
}

// sumTwoNumbers();

// ===== Functions with input parameters (arguments) ==========

function sayMyFullName(firstName, lastName) {
  document.write(`${firstName}  ${lastName}`);
}

sayMyFullName(`Martin`, `Lutovski`);

function greetPerson(personName = prompt("Please enter your name:")) {
  console.log(`Hello there ${personName}`);
}

greetPerson("Martin");
greetPerson("Viktor");
greetPerson("Mario");
greetPerson("Pozdrav nazad");
// greetPerson();


//  ============== Functions that return values ==============

function returnValue(value){
    return value;
}


console.log(returnValue("This will be returned!"));



function greetSomeone(personName){
    let greeting = `Hello there ${personName}`;
    return greeting;
}

console.log(greetSomeone("Martin"));
console.log(greetSomeone ("Test"));
let greetMessage = greetSomeone("Martin");
console.log(greetMessage);
alert(greetMessage);


//  ======= Parametar missmatch ======

function sayMyNameAndYears(firstName,lastName,years = 31){
  console.log(`${firstName} ${lastName} is ${years} old.`);
  
}

sayMyNameAndYears("Martin","Lutovski", 31);
sayMyNameAndYears(31,"Lutovski", "Martin");
sayMyNameAndYears("test",31 , true);
sayMyNameAndYears("Martin", "Lutovski"); // undefined parametar, sme definirale 3 parametri. // definiravme gore default vrednost na godini //default value


// alert e funckcija, parseInt isto, built in vo JS

function myCustomAlert (message){
  alert(message);
}

myCustomAlert("Hello there!");

let myNum = Number("22");
console.log(typeof(myNum));
let myString = String (22);
console.log(typeof(myString));



let car = "Ford Mustang"  // se sto e definirano vo parent scope moze da se definira segde, toa sto e vo funkcija definirano e samo za funkcijata

function drive(car){
  console.log(`I am driving ${car}`);
  
}

drive("Opel Astra");
drive();