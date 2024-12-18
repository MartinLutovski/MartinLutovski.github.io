function averageCheck(grades) {
  let total = 0;
  for (let i = 0; i < grades.length; i++) {
    total += grades[i];
  }

  let average = total / grades.length;

  if (average >= 8) {
    alert(`The student passed with an average of ${average.toFixed(2)}.`); // decimal point method
  } else {
    alert(`The student failed with an average of ${average.toFixed(2)}.`);
  }
}

// let grades = [10, 9, 8, 7, 6]; // >=8.0
// let grades = [10, 10, 9, 10, 9]; // >
let grades = [6, 7, 6, 8, 6]; // <
averageCheck(grades);
