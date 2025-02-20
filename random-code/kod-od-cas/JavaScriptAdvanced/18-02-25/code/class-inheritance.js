console.log(
  "==================CLASSES ** not rly intro - next class =================="
);

// function Employee(firstName, lastName, age, salary) {
//     this.firstName = firstName;
//     this.lastName = lastName;
//     this.age = age;
//     this.salary = salary;
//     this.printInfo = function () {
//         console.log(`Employee: ${this.firstName} ${this.lastName}. Age ${this.age}. Salary ${this.salary}.`);
//     }
// }

class Employee {
  constructor(firstName, lastName, age, salary) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.age = age;
    this.salary = salary;
  }

  printInfo() {
    console.log(
      `Employee: ${this.firstName} ${this.lastName}. Age ${this.age}. Salary ${this.salary}.`
    );
  }

  greetColleague(name) {
    console.log(`${this.firstName} says hello to ${name}`);
  }
}

const bob = new Employee("Bob", "Bobsky", 30, 3000);
console.log(bob);
bob.printInfo();
bob.greetColleague("Martin");

console.log("");
console.log("==================Inheritance WITH CLASSES==================");

// function Developer(firstName, lastName, age, salary, programmingLanguages) {
// //   Object.setPrototypeOf(this, new Employee(firstName, lastName, age, salary));
//   Employee.call(this, firstName, lastName, age, salary, programmingLanguages) // does the same as above, suposedly easyer syntax
//   this.programmingLanguages = programmingLanguages ?? [];
//   this.code = function () {
//     console.log(`${this.firstName} is doing magic :D`);
//   };
// }

class Developer extends Employee {
  constructor(firstName, lastName, age, salary, programmingLanguages) {
    super(firstName, lastName, age, salary);
    this.programmingLanguages = programmingLanguages;
  }
  code() {
    console.log(`${this.firstName} is doing magic :D`);
  }
}

class Tester extends Employee {
  constructor(firstName, lastName, age, salary, bugsFound) {
    super(firstName, lastName, age, salary);
    this.bugsFound = bugsFound;
  }
  testSoftware() {
    console.log(
      `${this.firstName} is testing the software and found ${this.bugsFound} bugs.`
    );
  }
}

class Manager extends Employee {
  constructor(firstName, lastName, age, salary, department) {
    super(firstName, lastName, age, salary);
    this.department = department;
  }
  organiseMeeting() {
    console.log(
      `The Manager ${this.firstName} is organising meeting for the ${this.team} team.`
    );
  }
}

class AutomationTester extends Tester {
  constructor(
    firstName,
    lastName,
    age,
    salary,
    bugsFound,
    automationFramework
  ) {
    super(firstName, lastName, age, salary, bugsFound);
    this.automationFramework = automationFramework;
  }
  writeAutomationTests() {
    console.log(
      `${this.firstName} is writing automation test using ${this.automationFramework} framework`
    );
  }
}

const automationTester = new AutomationTester(
  "Testko",
  "Testerovski",
  33,
  3000,
  55,
  "Selenium"
);
const menager = new Manager("Zvonko", "Zvonkovski", 56, "Shef");
const tester = new Tester("Bobce", "Bobanovski", 33, 2500, 5);
const dev = new Developer("John", "Doe", Infinity, 3500, ["C#", "JavaScript"]);

dev.printInfo();
dev.code();
automationTester.printInfo();
automationTester.writeAutomationTests();
console.log(automationTester.__proto__);
console.log(automationTester.__proto__.__proto__);
console.log(automationTester.__proto__.__proto__.__proto__);

console.log("");
console.log(" ========= Check if an object is an instance of a class");

console.log(dev instanceof Developer); // true
console.log(dev instanceof Employee); // true
console.log(dev instanceof Tester); // false

console.log(automationTester instanceof AutomationTester); // true
console.log(automationTester instanceof Tester); // true
console.log(automationTester instanceof Employee); // true
