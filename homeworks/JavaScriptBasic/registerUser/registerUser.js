let inputs = document.getElementById("userInputs").children;
let result = document.getElementById("result");
let submitBtn = document.getElementById("submit");

function getUserInfo(inputElements) {
  let resultMessage = "User: ";
  for (let input of inputElements) {
    if (input.value.trim() === "") {
      // empty imput check
      return "Error: All information must be filled!";
    }
    resultMessage += input.value.trim() + " ";
  }
  resultMessage += "is registered!";
  return resultMessage;
}

submitBtn.addEventListener("click", function () {
  result.innerText = getUserInfo(inputs);
});
