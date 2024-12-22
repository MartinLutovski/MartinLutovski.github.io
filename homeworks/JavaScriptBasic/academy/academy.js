// Academy entity/object
function Academy(academyName, numberOfGroups, numberOfClassrooms) {
  this.academyName = academyName;
  this.numberOfGroups = numberOfGroups;
  this.numberOfClassrooms = numberOfClassrooms;

  this.displayName = function () {
    console.log(`Academy Name: ${this.academyName}`);
  };
}

// Group entity/object
function Group(name, numberOfStudents) {
  this.name = name;
  this.numberOfStudents = numberOfStudents;
  this.students = [];

  this.displayNumberOfStudents = function () {
    console.log(
      `Number of Students in Group '${this.name}': ${this.numberOfStudents}`
    );
  };
}

// Student entity/object
function Student(firstName, lastName, age, eMail, academy, group) {
  this.firstName = firstName;
  this.lastName = lastName;
  this.age = age;
  this.eMail = eMail;
  this.academy = academy; // note to self - it adds the object Academy to new students
  this.group = group; // note to self - it adds the object Group to new students

  this.displayAcademy = function () {
    console.log(
      `Student ${this.firstName} ${this.lastName} is enrolled in: ${this.academy.academyName}`
    );
  };
  this.studentAge = function () {
    console.log(`${this.firstName} ${this.lastName} is ${this.age} old.`);
  };
  this.studentEmail = function () {
    console.log(
      `The email address of ${this.firstName} ${this.lastName} is ${this.eMail}`
    );
  };
}

let academy = new Academy("Qinshift Academy", 7, 2);

let group = new Group("Full Stack", 120);

let studentOne = new Student(
  "Martin",
  "Lutovski",
  31,
  "martinlutovski@gmail.com",
  academy,
  group
);
let studentTwo = new Student(
  "Bob",
  "Bobsky",
  22,
  "bob.bobsky@gmail.com",
  academy,
  group
);
let studentThree = new Student(
  "Tosho",
  "Malerot",
  43,
  "toshomalerot@k15.com",
  academy,
  group
);
let studentFour = new Student(
  "Cacko",
  "Konopishki",
  44,
  "cackokonopishki@k15.com",
  academy,
  group
);
let studentFive = new Student(
  "Mile",
  "Panika",
  45,
  "milepanika@k15.com",
  academy,
  group
);

group.students.push(studentOne);
group.students.push(studentTwo);
group.students.push(studentThree);
group.students.push(studentFour);
group.students.push(studentFive);

group.numberOfStudents = group.students.length;

academy.displayName();
studentOne.displayAcademy();
studentTwo.displayAcademy();
group.displayNumberOfStudents();
studentThree.studentAge();
studentFour.studentEmail();
