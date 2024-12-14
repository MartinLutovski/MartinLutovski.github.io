function combineNames(firstNames, lastNames) {
  // Check if both arrays have the same length
  if (firstNames.length !== lastNames.length) {
    return "Error: Arrays must have the same length.";
  }

  let fullNames = [];

  for (let i = 0; i < firstNames.length; i++) {
    fullNames.push(`${i + 1}. ${firstNames[i]} ${lastNames[i]}`);
  }

  return fullNames;
}

let first = ["Bob", "Martina", "Tosho", "Cacko"];
let last = ["Bobsky", "Popovska", "Malerot", "Konopishki"];
let full = combineNames(first, last);

console.log(full);
