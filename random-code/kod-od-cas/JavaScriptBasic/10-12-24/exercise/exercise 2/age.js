function calculateAge(birthYear, birthdayHasPassed) {
  if (birthdayHasPassed === "Y") {
    return currentYear - birthYear;
  }

  let currentYear = new Date().getFullYear();
  return currentYear - birthYear - 1;
}

let userInput = prompt("Did your birthday pass? Enter Y or N");

console.log(calculateAge(1993));
console.log(calculateAge(1990));
console.log(calculateAge(2007));
