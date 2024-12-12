function sumMaxMin(arr) {
  let numbersOnly = arr.filter(
    (item) => typeof item === "number" && !isNaN(item)
  );

  if (numbersOnly.length === 0) {
    return "Error: No valid numbers in the array.";
  }

  let max = Math.max(...numbersOnly);
  let min = Math.min(...numbersOnly);

  let sum = max + min;

  return `Max: ${max}, Min: ${min}, Sum: ${sum}`;
}

// let arr = [3, 5, 6, 8, 11];
// console.log(sumMaxMin(arr)); === only numbers ===

// let arr = ["test", null, true];
// console.log(sumMaxMin(arr)); === not valid/ no numbers ===

let arr = [3, 5, "random", 6, 8, null, 11];
console.log(sumMaxMin(arr));
