function conversion() {
  let celsiusFarenheit = Number(prompt("Enter temperature:"));
  let conversionMode = prompt(
    `You entered: ${celsiusFarenheit} degrees. Type 'c' for celsius to farenheit, or 'f' farenheit to celsius:`
  );

  if (conversionMode === "c") {
    return celsiusFarenheit * 1.8 + 32;
  } else if (conversionMode === "f") {
    return (5 / 9) * (celsiusFarenheit - 32);
  } else {
    return "Invalid input!";
  }
}

result = conversion();
alert(`The temperature is: ${result}`);
