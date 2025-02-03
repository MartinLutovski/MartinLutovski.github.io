console.log("================= HIGHER ORDER FUNCTIONS =================");

// ===> TEST DATA
const numbers = [5, 10, 15, 20, 25, 30, 35, 40, 45, 50];

const students = [
  {
    id: 1,
    firstName: "Bob",
    lastName: "Bobsky",
    age: 20,
    gender: "Male",
    isActive: true,
  },
  {
    id: 2,
    firstName: "John",
    lastName: "Smith",
    age: 23,
    gender: "Male",
    isActive: false,
  },
  {
    id: 3,
    firstName: "Marie",
    lastName: "Mosky",
    age: 19,
    gender: "Female",
    isActive: true,
  },
  {
    id: 4,
    firstName: "Jane",
    lastName: "Doe",
    age: 22,
    gender: "Female",
    isActive: false,
  },
  {
    id: 5,
    firstName: "Ana",
    lastName: "Taylor",
    age: 21,
    gender: "Female",
    isActive: true,
  },
];

console.log("");
console.log("============= forEach ==============");

for (const number of numbers) {
  console.log(number);
}
numbers.forEach((num) => console.log(num)); // Same as before, easier syntax for cyclus
let test = numbers.forEach((num) => console.log(num)); // Same as before, easier syntax for cyclus
console.log(test); // undefined

students.forEach((student) => {
  console.log(`${student.firstName} ${student.lastName}`);
  if (student.age < 21) {
    console.log("The student is underage");
  }
});

console.log("");
console.log(" ============== filter =============");

const evenNumbersResult = [];
for (const number of numbers) {
  if (number % 2 === 0) {
    evenNumbersResult.push(number);
  }
}
console.log(evenNumbersResult);

// Example 1: Even numbers
const evenNumbers = numbers.filter((number) => number % 2 === 0); // Same as before, better/easier syntax
console.log(evenNumbers);

// Example 2: Female students
const femaleStudents = students.filter(
  (student) => student.gender === "Female"
);
console.log(femaleStudents);

console.log("");
console.log("============= map =============");

// Example 1: Squared numbers

const squaredNumbers = numbers.map((num) => num * num);
console.log(squaredNumbers);

// Example 2: Get Students full name

const studentFullName = students.map(
  (students) => `${students.firstName} ${students.lastName}`
);
console.log(studentFullName);

// Example 3: Get students full names of all the female students

const femaleStudentsFullName = students
  .filter((student) => student.gender === "Female")
  .map((student) => `${student.firstName} ${student.lastName}`);
console.log(femaleStudentsFullName);

console.log("");
console.log(" =========== reduce ========"); // ja pominuva cela niz, i vrakja edna edinstvena vrednost

// Example 1: Get sum & average of numbers
const sumOfNumbers = numbers.reduce(
  (accumulator, current) => accumulator + current,
  0
);
console.log(sumOfNumbers);
console.log(sumOfNumbers / numbers.length);

// Example 2: Get average age of students
const studentsAverageAge = students.reduce((acc, curr) => acc + curr.age, 0);
console.log(studentsAverageAge);

// Step by step ..
const studentAverageAge =
  students.reduce((acc, curr) => {
    // 1) Add the current students age to the accumulator
    acc += curr.age;
    // 2) Return the update accumulator for the next iteration
    return acc;
  }, 0) / students.length;
console.log(studentAverageAge);

console.log("");
console.log("========= sort ===========");

const sortingNumbersArray = [-5, 3, 20, -100, 1000, 55, 33, 100, 0];

// Example 1: Sorting Numbers
// const sortNumbersAsc = sortingNumbersArray.sort((a, b) => a - b); // Asscending - od najmalo do najgolemo - i ja menuva postoeckata niza
// console.log(sortNumbersAsc);
// console.log(sortingNumbersArray);

sortingNumbersArray.sort((a, b) => b - a); // Descending - od najgolemo do najmalo.
console.log(sortingNumbersArray);

// Example 3: Sort students by age

students.sort((a, b) => a.age - b.age);
console.log(students);

// Example 3: Sort students by first name
// Sorting with strings

students.sort((a, b ) => a.firstName.localeCompare(b.firstName)); 

const newArray = students;
newArray.push(123);
console.log(newArray);
console.log(students);

