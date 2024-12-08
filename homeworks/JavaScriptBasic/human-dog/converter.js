function conversion() {
  let age = Number(prompt("Enter age:"));
  let conversionMode = prompt(
    "Type '1' for human to dog, or '2' for dog to human conversion:"
  );

  if (conversionMode === "1") {
    return age * 7;
  } else if (conversionMode === "2") {
    return age / 7;
  } else {
    return "Invalid input!";
  }
}

result = conversion();
alert(`Your calculated age is: ${result}`);
