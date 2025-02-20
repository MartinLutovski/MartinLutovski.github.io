// === Check the HTML - traditional HTML NANDLERS ===
function sayHello() {
  alert("Hello there!");
}

function greet(message) {
  alert(message);
}

// ========== Using traditional DOM event handlers
let increaseBtn = document.getElementById("increaseBtn");
let decreaseBtn = document.getElementById("decreaseBtn");
let resultParagraph = document.getElementById("result");
let resetBtn = document.getElementById("reset");
let count = 0;
increaseBtn.onclick = function () {
  count++;
  resultParagraph.innerText = count;
};

// decrease with a declared function
function decrease() {
  if (count > 0) {
    count--;
  }
  resultParagraph.innerText = count;
}

function reset() {
  count = 0;
  resultParagraph.innerText = "Reset!";
}
decreaseBtn.onclick = decrease; // just the name, no (), becouse the 'user' trigers it
resetBtn.onclick = reset;

// IF you add more than one click event on same button
// it will always consider the lastly added one
// and override the previous click event
// resetBtn,onclick = decrease;

// ======== Using EVENT Listeners===================

let fNameInput = document.getElementById("fName");
let lNameInput = document.getElementById("lName");
let saveBtn = document.getElementById("btnSave");
let saveUserParagraph = document.getElementById("saveResult");

saveBtn.addEventListener("click", function () {
  let fNameValue = fNameInput.value;
  let lNameValue = lNameInput.value;

  saveUserParagraph.innerText = `${fNameValue} ${lNameValue} saved to database!`;
  fNameInput.value = "";
  lNameInput.value = "";
  sayHello();
});

