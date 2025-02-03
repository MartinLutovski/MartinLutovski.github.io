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
console.log(" ========== every =============");

// Example 1: Are all numbers positive?

const allPositive = numbers.every((n) => n > 0);
console.log(allPositive);

// Example 2: Are all students older than 20?

const allOlder = students.every((s) => s.age > 20);
console.log("Over", allOlder);

console.log("");
console.log(" ======== some =========");

// Example 1: Is there at least one even number?

const hasEvenNumber = numbers.some((n) => n % 2 === 0);
console.log(hasEvenNumber);

// Example 2: Is there any stundent under 20?

const anyUnder = students.some((student) => student.age < 20);
console.log(anyUnder);

console.log("");
console.log(" ========== find =============");

// Example 1: Find first even number larger than 20

const firstEvenNumber = numbers.find((n) => n % 2 === 0 && n > 20);
console.log(firstEvenNumber);

// Example 2: Find the first student starting on letter "J"
const firstStudentStartingWithJ = students.find((s) =>
  s.firstName.startsWith("J")
);
console.log(firstStudentStartingWithJ);

console.log("");
console.log(" ======== findIndex ========");

// Example 1: Find the index of the first number greater than 40

const indexNumberLargerThan40 = numbers.findIndex((n) => n > 40);
console.log(indexNumberLargerThan40);

console.log("");
console.log(" ========= includes =========");

// Example 1: Check if 2 exists in numbers array
console.log(numbers.includes(21)); // false - there is no 21

// Example 2: Check if there is a student named "Marie"

// const hasMarie = students.includes("Marie"); // looks for specific value - false
// console.log(hasMarie);

const hasMarie = students.some((s) => s.firstName === "Marie");
console.log(hasMarie); // true

console.log("");
console.log(" =========== flat ============");

const nestedArray = [1, [2, 3], [4, [5, 6]], 7];
console.log(nestedArray);
const flattenedOneLevel = nestedArray.flat(1);
console.log(flattenedOneLevel);
const flatennedTwoLevel = nestedArray.flat(2);
console.log(flatennedTwoLevel);

console.log("");
console.log(" =========== flatMap ===============");

// example in class code

console.log("");
console.log(" ========== split ( for strings ) ===========");

const sentence = "JavaScript is awesome";
const words = sentence.split(" ");
console.log(words);

console.log("");
console.log(" ========= join ===========");
const joinedSentence = words.join(" ");
console.log(joinedSentence);

console.log("");
console.log(" ========= reverse =========");

const numbersToRevers = [1, 2, 3, 4 ,5 ,6 ,7];
const reversedNumbers = numbersToRevers.reverse();
console.log(reversedNumbers);


