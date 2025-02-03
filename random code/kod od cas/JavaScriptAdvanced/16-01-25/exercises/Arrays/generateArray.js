// ## Generating arrays

// Generate an array that has all the numbers that are divisible by 3 from 1 to 1000

let divisableByThree = [];

for (let i = 1; i <= 1000; i++) {
    if (i % 3 === 0) {
      divisableByThree.push(i);
    }
  }

  console.log(divisableByThree);
  
// * Generate an array that has all the even numbers that are divisible by 4 from 1 to 1000
  let evenDivisibleBy4 = [];
  for (let i = 1; i <= 1000; i++) {
    if (i % 4 === 0) {
      evenDivisibleBy4.push(i);
    }
  }
  console.log(evenDivisibleBy4);


//   * Generate an array that has all the numbers that end with the digit 1 from 1 to 1000

let endsWithOne = [];

for (let i = 1; i <= 1000; i++) {
    if (i % 10 === 1) {
      endsWithOne.push(i);
    }
  }

  console.log(endsWithOne);
  
// ## Clean arrays

// * Create a function that cleans an array of any values and leaves only STRINGS

let testArrayString = [1, 2, 3, "4", "5", NaN, undefined, 8, 9, true];

function filterStrings(testArrayString) {
    let resultString = [];
  for (let i = 0; i < testArrayString.length; i++) {
    if (typeof testArrayString[i] === 'string') {
      resultString.push(testArrayString[i]);
    }
  }
  return resultString;
}

console.log(filterStrings(testArrayString));

// * Create a function that cleans an array of any values and leaves only NUMBERS

function filterNumbers(testArrayString) {
    let resultNumbers = [];
    for (let i = 0; i < testArrayString.length; i++) {
        if (typeof testArrayString[i] === 'number' && testArrayString[i]) {
            resultNumbers.push(testArrayString[i])
        }
    }
    return resultNumbers
}

console.log(filterNumbers(testArrayString));

// * Create a function that cleans undefined, null, NaN, false and "" and leaves all other values

function cleanFalsyValues(testArrayString) {
    let nonFalsy = [];
    for (let i = 0; i < testArrayString.length; i++) {
      if (testArrayString[i] !== undefined && testArrayString[i] !== null && testArrayString[i] !== false && testArrayString[i] !== "" && !isNaN(testArrayString[i])) {
        nonFalsy.push(testArrayString[i]);
      }
    }
    return nonFalsy;
  }

console.log(cleanFalsyValues(testArrayString));



