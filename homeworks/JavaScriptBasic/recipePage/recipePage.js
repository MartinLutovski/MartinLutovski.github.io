function createRecipe() {
  let recipeName = prompt("What is the name of your recipe?");
  if (!recipeName) {
    alert("You must provide a recipe name!");
    return;
  }

  let numIngredients = parseInt(
    prompt("How many ingredients does the recipe need?")
  );
  if (isNaN(numIngredients) || numIngredients <= 0) {
    alert("Please provide a valid number of ingredients.");
    return;
  }

  let ingredients = []; // To store multiple ingredients
  for (let i = 0; i < numIngredients; i++) {
    let ingredient = prompt(`Enter the name of ingredient #${i + 1}:`);
    if (ingredient) {
      ingredients.push(ingredient);
    } else {
      alert("Ingredient name cannot be empty.");
      i--; // Repeat if input empty
    }
  }

  // Write to HTML
  let recipeDiv = document.getElementById("recipe");
  let heading = document.createElement("h3");
  heading.innerText = recipeName;
  recipeDiv.appendChild(heading); // note to self, same object again, look at previous homework (arraySum.js)

  // Unordered list
  let ingredientList = document.createElement("ul");
  ingredients.forEach((ingredient) => {
    let listItem = document.createElement("li");
    listItem.innerText = ingredient;
    ingredientList.appendChild(listItem);
  });
  recipeDiv.appendChild(ingredientList);

  // Bonus tr/td table
  let table = document.createElement("table");
  ingredients.forEach((ingredient, index) => {
    let row = document.createElement("tr");
    let cellNumber = document.createElement("td");
    let cellName = document.createElement("td");
    cellNumber.innerText = index + 1; // Ingredient number
    cellName.innerText = ingredient; // Ingredient name
    row.appendChild(cellNumber);
    row.appendChild(cellName);
    table.appendChild(row);
  });
  recipeDiv.appendChild(table);
}

createRecipe();
