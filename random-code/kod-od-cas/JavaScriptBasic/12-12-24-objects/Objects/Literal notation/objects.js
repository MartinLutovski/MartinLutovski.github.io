// Create an object - Literal Notation

let person = {
  firstName: "Martin",
  lastName: "Lutovski",
  age: 31,
  hobbies: ["swimming", "reading books", "running"],
  isLazy: false,
  "Is employed": true,

  getFullName: function () {
    return this.firstName + " " + this.lastName;
  },

  showHobbies: function () {
    for (let hobby of this.hobbies) {
      console.log(hobby);
    }
  },
};


console.log(person);
console.log(person.firstName);
console.log(person.age);
console.log(person.getFullName());
person.showHobbies();


// We can change the objects after their creation
// Add property or method after the object is created

person.height = 178;
console.log(person);

person.getHeight = function () {
    return this.height;
}

console.log(person.getHeight());

console.log(person['lastName']);  // <=== Another way to acces objects by using [], usualy for propherties with empty space
console.log(person['Is employed']); // <=== example

