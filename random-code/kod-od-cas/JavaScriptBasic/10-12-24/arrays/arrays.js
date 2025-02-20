// Empty array
let emptyArray = [];
console.log(emptyArray);
console.log(typeof emptyArray);

// Array of string values
let days = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"];
console.log(days);

// Mixed value array
let mixedArray = [`Martin`, 12, true, undefined, null, 22.4, NaN];
console.log(mixedArray);
// Acces an element from the array by its position/index
let firstElement = mixedArray[0];
console.log(firstElement);
console.log(`First element of mixed arrays: ${firstElement}`);

let sunday = days[6];
console.log(sunday);

// Change value of an existing element of the array
mixedArray[0] = "Frose";
console.log(`The mixed array after the change is:`);
console.log(mixedArray);

// Length of an array
console.log(`The length of the array is: ${days.length}`);

// Add new element in the array
mixedArray[7] = "Angel";
console.log(mixedArray);
// Dynamic with .length instead of adding the last value
mixedArray[mixedArray.length] = "Sandra";
console.log(mixedArray);

//Insert element in an Array - push() unshift()
// push - add at the end of an array
let numbers = [1, 2, 3, 4, 5];
console.log(numbers);
numbers.push(6); //Insert element at the end of the array
numbers.push(7); // Insert element at the end of the array
numbers.push(8, 9, 10); // Insert as much elements as you need in the array
console.log(numbers);
numbers.push("Martin", "Frose");
console.log(numbers);

// unshift - add before the start of an array
numbers.unshift(-2, -1, 0);
console.log(numbers);


// Delete an element from an array - pop() shift()
//pop() deletes an element from the end
numbers.pop();
numbers.pop();
console.log(numbers);
// shift() deletes an element from the start
numbers.shift();
console.log(numbers);



