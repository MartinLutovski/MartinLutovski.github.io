function weightInChickens(weight) {
  return weight / 0.5;
}

let resultDiv = document.getElementById("result");

let input = parseInt(prompt("Please enter how much you weigh:"));
if (!isNaN(input)) {
  resultDiv.innerHTML = `<h3> ${input}KG is ${weightInChickens(
    input
  )} <img src="assets/chicken.png" alt="chicken" style="height:22vh"></h3>`;
} else {
  resultDiv.innerHTML = `<h3> Sorry! Wrong input! Refresh the page again! It's worth it, trust me. </h3>`;
}
