function calculateDifference(number) {
  let difference = number - 13;
  if (number > 13) {
    return difference * 2;
  } else {
    return difference;
  }
}

console.log(calculateDifference(10));
console.log(calculateDifference(5));
console.log(calculateDifference(55));
console.log(calculateDifference(100));
