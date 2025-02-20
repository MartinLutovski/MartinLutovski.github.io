console.log(" ============= VALUE TYPE ===========");

let valueTypeVariable = "This is a string";
let newValueTypeVariable = valueTypeVariable;
newValueTypeVariable = "This is a NEW string";
console.log(valueTypeVariable);
console.log(newValueTypeVariable);

console.log("");
console.log(" =========== REFERENCE TYPE ===========");

// Example with object

let personObject = {
  id: 1,
  firstName: "Bob",
  lastName: "Bobsky",
  printFullName: function () {
    console.log(`${this.firstName} ${this.lastName}`);
  },
};

let newPersonObject = personObject;
newPersonObject.firstName = "Pink";
newPersonObject.lastName = "Panter";

personObject.printFullName();
newPersonObject.printFullName();

// Example with an aray

let testArray = [1, 2, 3, 4];
let newTestArray = testArray;
newTestArray.push(1000);
console.log(testArray);
console.log(newTestArray);

console.log("");
console.log(" ================ Creating Copy of an Array ===================");

let numbersArray = [1, 2, 3, 4, 5];
// =======> Using custom function
function copyArray(array){
    let result = [];
    array.forEach(item => result.push(item));
    return result;
}

let numbersArrayCopy = copyArray(numbersArray);
numbersArrayCopy.pop();
console.log("The copy" , numbersArrayCopy);
console.log("The original", numbersArray);


// =====> Using slice()

let numbersArraySliceCopy = numbersArray.slice();
numbersArraySliceCopy.push(123, 123, 123);
console.log("The slice copy", numbersArraySliceCopy);
console.log("The original", numbersArray);


// ======> Using map()

let numbersArrayMapCopy = numbersArray.map( n => n);
numbersArrayMapCopy.pop();
console.log(numbersArrayMapCopy);


// ==== > Using spread operator (BONUS)

let numbersArraySpreadCopy = [...numbersArray];
numbersArraySpreadCopy.shift();
console.log("The spread copy", numbersArraySpreadCopy);
console.log("The original", numbersArray);


