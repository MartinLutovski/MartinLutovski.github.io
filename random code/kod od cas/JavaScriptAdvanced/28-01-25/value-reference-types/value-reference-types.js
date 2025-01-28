console.log(" ============= VALUE TYPE ===========");

let valueTypeVariable = "This is a string";
let newValueTypeVariable = valueTypeVariable;
newValueTypeVariable = "This is a NEW string"
console.log(valueTypeVariable);
console.log(newValueTypeVariable);


console.log("");
console.log(" =========== REFERENCE TYPE ===========");

// Example with object

let personObject = {
    id: 1,
    firstName: "Bob",
    lastName: "Bobsky",
    printFullName: function() {
        console.log(`${this.firstName} ${this.lastName}`);
        
    }
}

let newPersonObject = personObject;
newPersonObject.firstName = "Pink"
newPersonObject.lastName = "Panter"

personObject.printFullName();
newPersonObject.printFullName();


// Example with an aray

let testArray = [1, 2, 3 ,4];
let newTestArray = testArray;
newTestArray.push(1000);
console.log(testArray);
console.log(newTestArray);





