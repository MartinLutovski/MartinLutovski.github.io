function sumArray(numbers) {
  for (let i = 0; i < numbers.length; i++) {
    if (!validateNumber(numbers[i])) {
      return `Error: '${numbers[i]}' is not a valid number.`;
    }
  }

  let sum = 0;
  for (let i = 0; i < numbers.length; i++) {
    sum += numbers[i];
  }

  return `The sum of the numbers is: ${sum}`;
}

function validateNumber(num) {
  return typeof num === "number" && !isNaN(num);
}

// let inputArray = [10, 20, 100, 40, 50];
// console.log(sumArray(inputArray));      === 220 ===

// let inputArray = [1000, 1000, 1000, 1000, 1000];
// console.log(sumArray(inputArray));      === 5000 ===

// let inputArray = [10, 20, NaN, 40, 50];
// console.log(sumArray(inputArray));      === NaN ===

// let inputArray = [10, 20, Infinity, 40, 50];
// console.log(sumArray(inputArray));      === Infinity ===

// let inputArray = [10, true, 100, 40, 50];
// console.log(sumArray(inputArray));      === true ===

// let inputArray = [10, 20, "", 40, 50];
// console.log(sumArray(inputArray));      === empty string ===

let inputArray = [10, 20, 100, null, 50];
console.log(sumArray(inputArray)); // === null ===
