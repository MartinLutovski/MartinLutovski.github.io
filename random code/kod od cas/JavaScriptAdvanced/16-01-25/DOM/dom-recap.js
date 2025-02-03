console.log("============DOM-Manipulation============");

console.log("");

console.log("============Selectors============");

const title = document.querySelector("h1");
const firstParagraph = document.querySelector("[name= 'Paragraph One']");

const secondParagraph = document.getElementsByTagName("p")[1];
const firstDiv = document.getElementById("first-div");
const secondDiv = document.querySelector(".second-div");
const thirdDiv = secondDiv.nextElementSibling;

console.log("");
console.log("============GET or CHANGE DATA of an ELEMENT============");

console.log(title.innerText);
console.log(title.textContent);

title.firstChild.removeAttribute("hidden");

let paragraphCostumAttribute = firstParagraph.getAttribute("costumAttribute");
console.log(paragraphCostumAttribute);

title.style.color = "darkred";

console.log("");
console.log("=========Creating and Appending new Elements============");

let h2 = document.createElement("h2");
h2.innerText = "H2 created using JS";
h2.style.color = "magenta";
firstDiv.appendChild(h2);

let paragraph = document.createElement("p");
paragraph.innerText = "This is a paragraph";
firstDiv.appendChild(paragraph);

