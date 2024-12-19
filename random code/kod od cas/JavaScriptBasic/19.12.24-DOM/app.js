//  ================ SELECTORS ===============

// Select by Id

let myFirstElement = document.getElementById("main");
console.log(myFirstElement);

// Select by Tag name

let paragraphs = document.getElementsByTagName("p");
console.log(paragraphs);
console.log("First paragraph in my html file", paragraphs[0]);

let divs = document.getElementsByTagName("div");
console.log(divs);
console.log("Second div in my html file", divs[1]);

// Select by Class name

let paragraphsByClassName = document.getElementsByClassName("myParagraph");
console.log(paragraphsByClassName);

let mySecondParagraph = document.getElementsByClassName("second");
console.log(mySecondParagraph);

// Query selectors - Just 1 element at a time

let myHeaderTag = document.querySelector("h1");
console.log(myHeaderTag);

let myHeaderId = document.querySelector("#myTitle");
console.log(myHeaderId);

let myDivClass = document.querySelector(".myDiv");
console.log(myDivClass);

//  querySelectorAll()  - All elements with the name

let allHeaders = document.querySelectorAll("h1");

console.log(allHeaders);

// =========== Traversing through the DOM tree ==============

// nextElementSibling
let myHeader = document.getElementById("myTitle");
let sibling = myHeader.nextElementSibling;
console.log("My header", myHeader);
console.log("First sibling", sibling);

// firstElementChild

let firstDiv = document.getElementById("main");
let divSibling = firstDiv.nextElementSibling;
console.log(divSibling);

let firstDivChild = firstDiv.firstElementChild;
console.log(firstDivChild);

let secondDivSibling = divSibling.firstElementChild;
console.log(secondDivSibling);

let firstDivParent = firstDiv.parentElement;
console.log(firstDivParent);

let elementToFind =
  document.getElementById("main").nextElementSibling.firstElementChild; // you can acces,horizontaly and verticaly, can get complicated
console.log(elementToFind);

let bodyElement = document.querySelector('body');

let allChildren = bodyElement.children;
let firstChild = bodyElement.firstElementChild;
let lastChild = bodyElement.lastElementChild;

console.log(allChildren);
console.log(firstChild);
console.log(lastChild);



