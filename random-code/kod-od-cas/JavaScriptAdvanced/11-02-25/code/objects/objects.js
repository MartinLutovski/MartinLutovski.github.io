console.log("=============== OBJECTS PART 1 ===============");

// Example Anonymous object

let dog = {
  name: "Marley",
  color: "Blonde", // Example of old syntax, will happen.
  age: 1,
  owner: {
    firstName: "Bob",
    lastName: "Bobsky",
  },
  bark: function () {
    console.log("Av av Mjau!");
  },
  printInfo: function () {
    console.log(
      `Dog: ${this.name}, Age: ${this.age}, Owner: ${this.owner.firstName}`
    );
  },
  getThis: this,
  printThisAnonymous: () => {
    console.log(this);
  },
  printThis: function () {
    console.log(this);
  },
};
dog.printInfo(); // All return Window object from DOM
console.log(dog.getThis);
dog.printThisAnonymous();
dog.printThis;

dog.printInfo();

// Example constructor function

function Person(firstName, lastName) {
  // if (firstName) {
  //     this.firstName = firstName
  // }
  // else {this.firstname = "unnanmed"}
  this.firstName = firstName ? firstName : "unnamed"; // same as above, ternary operator "?" - better syntax
  this.lastName = lastName;

  this.getFullName = function () {
    return `${this.firstName} ${this.lastName}`;
  };
  this.getThis = this;
}

let john = new Person("John", "Doe");
console.log(john.getFullName());
