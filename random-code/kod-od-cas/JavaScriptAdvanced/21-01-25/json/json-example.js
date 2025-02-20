console.log("===============JSON===========");

console.log("");

console.log("Create JSON from JavaScript Object");

let jsObject = {
  firstName: "Bob",
  lastName: "Bobsky",
  age: 31,
  isStudent: true,
  favouriteSubjects: ["JavaScript", "C#"],
  printInfo: function () {
    console.log(`${this.firstName} ${this.lastName} is ${this.age} years old.`);
  },
};
console.log(jsObject);
jsObject.printInfo();
console.log(typeof jsObject);

// ========> Serialize JavaScript object to JSON

let jsonString = JSON.stringify(jsObject);

console.log(jsonString);
console.log(typeof jsonString);

console.log("");
console.log("================ Create JavaScript Object from JSON =================");

let courseJson = `
{
  "trainer": "John Doe",
  "assistant": "Jane Doe",
  "students": [
    "Bob",
    "Samantha",
    "Chris",
    "Jill",
    "Greg",
    "Maria",
    "Tom",
    "Sue"
  ],
  "academy": "Code"
}`
;

//  Deserialization JSON to JavaScript Object

let jsonObject = JSON.parse(courseJson);

console.log(jsonObject);
console.log(jsonObject.trainer);

