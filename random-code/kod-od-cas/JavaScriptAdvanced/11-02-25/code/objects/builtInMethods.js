console.log("========== OBJECT BUILT-IN METHODS ======");

// **create**

let person = {
  firstName: "Bob",
  lastName: "Bobsky",
  greet: function () {
    console.log("Hello");
  },
};
console.log(person);

let bob = Object.create(person);
console.log(bob);
console.log(bob.firstName);
console.log(bob.lastName);

// **assign**

let bobAddress = {
  street: "Bobsky street",
  city: "Skopje",
  printInfo: function () {
    console.log("Info");
  },
};

let bobsInfo = Object.assign(bob, bobAddress);
console.log(bobsInfo);
bobsInfo.printInfo();

console.log("");
console.log(" ===== Exploring the object ==========");

let barnie = {
  name: "Barnie",
  age: 1,
  bark: function () {
    console.log("AV AV AV");
  },
};

// ** keys **

let barneysKeys = Object.keys(barnie);
console.log(barneysKeys);

// ** values **
let barneysValues = Object.values(barnie);
console.log(barneysValues);

// ** entries **
let keyValuePairs = Object.entries(barnie);
console.log(keyValuePairs);

console.log("");
console.log(" =========== Changing the object accesibility ==========");

//  **freeze**
Object.freeze(barnie); // prevents any kind of change to the object
barnie.isGoodDog = true;
barnie.name = "Chapo";
console.log(barnie);

// **seal**

let marley = {
  name: "Marley",
  color: "brown",
};
Object.seal(marley); // can change existing propherties, but CANT add new 
marley.color = "gray";
marley.isGoodDog = true;
console.log(marley);

