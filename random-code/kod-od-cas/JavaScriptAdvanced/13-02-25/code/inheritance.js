console.log(" ============= INHERATANCE EXAMPLES ==================");

function Employee(firstName, lastName, age, salary) {
  this.firstName = firstName;
  this.lastName = lastName;
  this.age = age;
  this.salary = salary;
  //   this.programmingLanguages = programmingLanguages ?? [];
  this.printInfo = function () {
    console.log(
      `Employee:${this.firstName} ${this.lastName}. ${this.age}. Salary: ${this.salary} `
    );
  };
}

function Developer(firstName, lastName, age, salary, programmingLanguages) {
  Object.setPrototypeOf(this, new Employee(firstName, lastName, age, salary));
  //   this.firstName = firstName;
  //   this.lastName = lastName;
  //   this.age = age;
  //   this.salary = salary;
  this.programmingLanguages = programmingLanguages ?? [];
  //   this.printInfo = function () {
  //     console.log(
  //       `Employee:${this.firstName} ${this.lastName}. ${this.age}. Salary: ${this.salary} `
  //     );
  //   };
  this.code = function () {
    console.log(`${this.firstName} is doing magic. :D`);
  };
}

function Manager(firstName, lastName, age, salary, team) {
  Object.setPrototypeOf(this, new Employee(firstName, lastName, age, salary));
  //   this.firstName = firstName;
  //   this.lastName = lastName;
  //   this.age = age;
  //   this.salary = salary;
  //   this.team = team;
  //   this.printInfo = function () {
  //     console.log(
  //       `Employee:${this.firstName} ${this.lastName}. ${this.age}. Salary: ${this.salary} `
  //     );
  //   };
  this.team = team;
  this.organiseMeeting = function () {
    console.log(
      `The Manager ${this.firstName} is organising a meeting for the ${this.team} team!`
    );
  };
}

function Tester(firstName, lastName, age, salary, bugsFound) {
  Object.setPrototypeOf(this, new Employee(firstName, lastName, age, salary));
  this.bugsFound = bugsFound;
  this.testSoftware = function () {
    console.log(
      `${this.firstName} is testing the software and found ${this.bugsFound} bugs`
    );
  };
}

const martin = new Developer("Martin", "Lutovski", 31, 10_000, [
  "JavaScript",
  "C#",
]);

martin.printInfo();
martin.code();
console.log(martin);

const robert = new Manager("Robert", "Robertski", 35, 15_000, "G2");
robert.printInfo();
robert.organiseMeeting();

const cvetan = new Tester("Cvetan", "Cvetkovski", 27, 7_000, 20);
cvetan.printInfo();
cvetan.testSoftware();
