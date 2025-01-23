console.log("==========ARROW FUNCTIONS============");

// ======> Regular function
function sayHello() {
  console.log("Hello");
}
sayHello();

// Anonymus function
let SayHelloAnonymus = function () {
  console.log("Hello Anonymus");
};
SayHelloAnonymus();

// Arrow function
let sayHelloArrow = () => {
  console.log("Hello Arrow!");
};
sayHelloArrow();

let sayHelloArrowOneLine = () =>
  console.log("Hello Arrow! *1 line arrow functin");
sayHelloArrowOneLine();

// =============== No parameters, return ==================

function getRandomNumber() {
  return Math.floor(Math.random() * 100);
}

// const getRandom = () => {
//     return Math.floor(Math.random() * 100)}; moze i vo edna linija - primer odma dole

const getRandom = () => Math.floor(Math.random() * 100);

let randomNum = getRandom();
console.log(randomNum);


//  ========= One parameter , one expresion (return value) ===========

function isEven(number) {
  return number % 2 === 0;
}

const isNumberEven = (number) => number % 2 === 0;

console.log(`The number 68 is even:`, isNumberEven(68));




//  ===== Multiple parameters , one expression (returns value) ======

const sum = (num1, num2) => num1 + num2 // funkcija
console.log(sum(20, 30));

// ===== Multiple parameters , multiple expression ======

const getMaxNumber = (num1, num2) => {
    if (num1 > num2){
        return num1
    }
    return num2
}
console.log(getMaxNumber(55, 33));



// Arrow functions in an event listener 

document.querySelector("button").addEventListener("click", () => {
    console.log("click");
    
})


const postsUrl = "https://jsonplaceholder.typicode.com/posts";
fetch(postsUrl)
  .then(function (response) {
    const parsedData = response.json();
    return parsedData;
  })

  .then(function (data) {
    console.log(data);
  })

  .catch(function (error) {
    console.error("ERROR OCCURED!", error);
  });

//   ===== Using Arrow functions

fetch(postsUrl)
.then(response => response.json())
.then(data => console.log(data))
.catch(error => console.log(error))

