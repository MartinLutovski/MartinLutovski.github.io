// function Employee(firstName, lastName, age, salary) {
//   this.firstName = firstName;
//   this.lastName = lastName;
//   this.age = age;
//   this.salary = salary;
//   this.printInfo = function () {
//     console.log(
//       `Employee:${this.firstName} ${this.lastName}. ${this.age}. Salary: ${this.salary} `
//     );
//   };
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
      `Employee:${this.firstName} ${this.lastName}. ${this.age}. Salary: ${this.salary} `
    );
  }
}

const firstEmployee = new Employee("Martin", "Lutovski", 31, 10_000);

console.log(firstEmployee);
firstEmployee.printInfo();

class Developer extends Employee{
    
    constructor(programingLanguages) {
        super(firstName, lastName, age, salary);
        this.programingLanguages = programingLanguages
    }
    code() {
        console.log();
        
    }
}

const alice = new Developer("Alice", "Johnson", 29, 15_000, ["JavaScript", "Python", "C++"]);