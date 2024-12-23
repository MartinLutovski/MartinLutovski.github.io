let numbersArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

let numberList = document.getElementById("numberList");
let sumParagraph = document.getElementById("sum");
let equationParagraph = document.getElementById("equation");

let sum = 0;
let equation = "";

numbersArray.forEach((num, index) => {
  let listNumber = document.createElement("li");
  listNumber.innerText = num;
  numberList.appendChild(listNumber); // add child element, as last child./ appendChild is commonly used to dynamically add new elements to the DOM when building content.
  sum += num;
  equation += num;
  if (index < numbersArray.length - 1) {
    //-1 to remove the last "+"
    equation += " + ";
  }
});
console.log(sum);
console.log(equation);

equation += ` = ${sum}`;
sumParagraph.innerText = `Sum: ${sum}`;
equationParagraph.innerText = `Equation: ${equation}`;
