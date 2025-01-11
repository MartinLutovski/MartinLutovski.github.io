// ============== VARIABLES ==============

const numberInput = document.getElementById("numberInput"); // Input field for the number
const convertBtn = document.getElementById("convertBtn"); // Button to trigger conversion
const resultField = document.getElementById("result"); // Field to display the result
const errorMessage = document.getElementById("errorMessage"); // Field to display error messages

// Word representation arrays
const belowTwenty = [
  "zero",
  "one",
  "two",
  "three",
  "four",
  "five",
  "six",
  "seven",
  "eight",
  "nine",
  "ten",
  "eleven",
  "twelve",
  "thirteen",
  "fourteen",
  "fifteen",
  "sixteen",
  "seventeen",
  "eighteen",
  "nineteen",
];
const tens = [
  "",
  "",
  "twenty",
  "thirty",
  "forty",
  "fifty",
  "sixty",
  "seventy",
  "eighty",
  "ninety",
];
const thousands = ["", "thousand", "million"];

// ============== FUNCTIONS ==============

/**
 * Validate the input number.
 * @param {string} input - Raw input value.
 * @returns {number|null} - A valid number or null if invalid.
 */
function validateInput(input) {
  const trimmedInput = input.trim();
  if (!/^\d+$/.test(trimmedInput) || +trimmedInput > 1000000) {
    return null;
  }
  return parseInt(trimmedInput, 10); // Decimal number
}

/**
 * Convert a number to its word representation.
 * @param {number} num - The number to convert.
 * @returns {string} - The word representation.
 */
function convertNumberToWords(num) {
  if (num === 0) return "zero";

  let result = "";
  let index = 0;

  while (num > 0) {
    if (num % 1000 !== 0) {
      result = `${convertChunk(num % 1000)} ${
        thousands[index]
      } ${result}`.trim();
    }
    num = Math.floor(num / 1000);
    index++;
  }

  return result;
}

/**
 * Convert a chunk of up to three digits to words.
 * @param {number} chunk - The chunk to convert.
 * @returns {string} - The word representation of the chunk.
 */
function convertChunk(chunk) {
  if (chunk < 20) {
    return belowTwenty[chunk];
  } else if (chunk < 100) {
    return `${tens[Math.floor(chunk / 10)]}${
      chunk % 10 === 0 ? "" : `-${belowTwenty[chunk % 10]}`
    }`;
  } else {
    return `${belowTwenty[Math.floor(chunk / 100)]} hundred${
      chunk % 100 === 0 ? "" : ` ${convertChunk(chunk % 100)}`
    }`;
  }
}

/**
 * Handle the conversion process and display results/errors.
 */
function handleConversion() {
  errorMessage.textContent = ""; // Clear previous error
  resultField.textContent = ""; // Clear previous result

  const inputNumber = validateInput(numberInput.value);
  if (inputNumber === null) {
    errorMessage.textContent =
      "Please enter a valid number between 0 and 1,000,000.";
    return;
  }

  resultField.textContent = convertNumberToWords(inputNumber);
}

// ============== EVENTS ==============

convertBtn.addEventListener("click", handleConversion);
