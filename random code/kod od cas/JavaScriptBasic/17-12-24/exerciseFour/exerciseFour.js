function closer(numberOne, numberTwo) {
  let numberOneDivided = 100 - numberOne;
  let numberTwoDivided = 100 - numberTwo;

  if (numberOneDivided < numberTwoDivided) {
    return numberOne;
  } else if (numberOneDivided > numberTwoDivided) {
    return numberTwo;
  } else {
    return "Equal";
  }
}

console.log(closer(50, 50));
console.log(closer(5, 50));
console.log(closer(100, 110));

function closerToHundred(firstNum, secondNum) {
  let controlValue = 100;

  if (firstNum < 0 || secondNum < 0) {
    console.log("Cannot insert a negative number, try again!");
  } else {
    let firstDiff = Math.abs(controlValue - firstNum);
    let secondDiff = Math.abs(controlValue - secondNum);

    if (firstDiff < secondDiff) {
      console.log(`${firstNum} is closer to ${controlValue}`);
    } else if (secondDiff < firstDiff) {
      console.log(`${secondNum} is closer to ${controlValue}`);
    } else {
      console.log(`Both numbers are equally close to ${controlValue}`);
    }
  }
}

closerToHundred(100, 150);
closerToHundred(100, 100);
