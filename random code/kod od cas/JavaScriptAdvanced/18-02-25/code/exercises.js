//  ## Task 1 🙎‍♂️
// - Define a class `Person` with the following properties:
// - `firstName` (String)
// - `lastName` (String)
// - `age` (Number)

// - Add a constructor to initialize these properties.
// - Add a method `getFullName()` that returns the full name (first name + last name).
// - Create a class `Student` that **inherits** from `Person`.
// - Add an additional property to `Student`: `grade` (Number) representing the student's grade.
// - Add a method `getStudentInfo()` that returns the student's full name and grade.

class Person {
  constructor(firstName, lastName, age) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.age = age;
  }

  getFullName() {
    return `${this.firstName} ${this.lastName}`;
  }
}

class Student extends Person {
  constructor(firstName, lastName, age, grade) {
    super(firstName, lastName, age);
    this.grade = grade;
  }

  getStudentInfo() {
    return `${this.getFullName()} - Grade: ${this.grade}`;
  }
}

const student1 = new Student("Martin", "Lutovski", 31, "A");
console.log(student1.getFullName());
console.log(student1.getStudentInfo());

// ## Task 2 🚗
// - Create a class `Car` with properties:
//     - `brand` (String)
//     - `model` (String)
//     - `speed` (Number)

// - Add a **getter** for `speed` that returns the speed in kilometers per hour (km/h).
// - Add a **setter** for `speed` that ensures the speed is never less than zero. If it is, throw an error with the message `"Speed cannot be negative"`.
// - Add method `printInfo()` that prints the car information.

class Car {
  constructor(brand, model, speed) {
    this.brand = brand;
    this.model = model;
    this.speed = speed;
  }

  get speed() {
    return this._speed;
  }

  set speed(value) {
    if (value < 0) {
      throw new Error("Speed cannot be negative");
    }
    this._speed = value;
  }

  printInfo() {
    console.log(`Brand: ${this.brand}`);
    console.log(`Model: ${this.model}`);
    console.log(`Speed: ${this.speed} km/h`);
  }
}

const car = new Car("Renault", "Megane", 220);

car.printInfo();

// ## Task 3 🏎️
// - Create a class `ElectricCar` that inherits from `Car`.
// - Add a property `batteryLevel` (Number) for the `ElectricCar` class.
// - Add a method `chargeBattery()` that increases the `batteryLevel` by 10.
// - Add a static method `getTotalElectricCars()` to track and return the total number of `ElectricCar` instances created.

class ElectricCar extends Car {

  static totalElectricCars = 0;

  
  constructor(brand, model, speed, batteryLevel) {
    super(brand, model, speed);
    this.batteryLevel = batteryLevel;
    ElectricCar.totalElectricCars++;
  }


  chargeBattery() {
    this.batteryLevel += 10;
    console.log(`Battery level is now: ${this.batteryLevel}%`);
  }


  static getTotalElectricCars() {
    return ElectricCar.totalElectricCars;
  }

 
  printInfo() {
    super.printInfo();
    console.log(`Battery Level: ${this.batteryLevel}%`);
  }
}

const electricCar1 = new ElectricCar("Tesla", "Model S", 150, 80);
electricCar1.printInfo();

electricCar1.chargeBattery();

const electricCar2 = new ElectricCar("Nissan", "Leaf", 120, 75);
electricCar2.printInfo();


console.log(
  `Total ElectricCars created: ${ElectricCar.getTotalElectricCars()}`
);
