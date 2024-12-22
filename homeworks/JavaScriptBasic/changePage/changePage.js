let firstHeader = document.getElementById("myTitle");
firstHeader.innerText = "Even cooler now";

let firstParagraph = document.getElementsByClassName("paragraph")[0];
firstParagraph.innerText = "So far easy";

let secondParagraph = document.getElementsByClassName("paragraph second")[0];
secondParagraph.innerText = "Soooo easy";

let text = document.querySelector(".anotherDiv text");
text.innerText = "not so easy";

let secondDiv = document.getElementsByClassName("anotherDiv")[0];

let thirdDiv = secondDiv.nextElementSibling;
console.log(thirdDiv);

let lastDivH1 = thirdDiv.firstElementChild;
console.log(lastDivH1);
lastDivH1.innerText = "Change already";

let lastDivH3 = thirdDiv.lastElementChild;
lastDivH3.innerText = "FINALY";
