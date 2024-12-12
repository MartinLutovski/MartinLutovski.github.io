function arrayOfStrings() {
    let userInput = prompt(
      "Please TYPE ANYTHING, separated by spaces (e.g., 'Just random stuf etc free use ! , ? as long as separated by space'):"
    );
  
    if (userInput === null) {
      return "Prompt canceled please refresh.";
    }
  
    let splitInput = userInput.split(" ");

    let output = splitInput.join(" ");
  
    return output;
  }
  
  alert(arrayOfStrings());