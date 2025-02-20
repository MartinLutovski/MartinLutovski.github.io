// 1. Function that takes a number through a parameter and returns how many digits that number has
const countDigits = (num) => num.toString().length;
console.log(countDigits(1));
console.log(countDigits(11));
console.log(countDigits(100));
console.log(countDigits(1001));

// 2. Function that takes a number through a parameter and returns if its even or odd

const evenOrOdd = (num) => {
  if (num % 2 === 0) {
    return "Even";
  } else {
    return "Odd";
  }
};
console.log(evenOrOdd(5));
console.log(evenOrOdd(4));

// 3. Function that takes a number through a parameter and returns if its positive or negative

const positiveOrNegative = (num) => {
  if (num > 0) {
    return "Positive";
  } else if (num < 0) {
    return "Negative";
  } else {
    return "Zero";
  }
};

console.log(positiveOrNegative(-5));
console.log(positiveOrNegative(5));
console.log(positiveOrNegative(0));
