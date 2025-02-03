console.log("======================Arrays======================");

let mixedArray = [true, 234, "String", NaN, 12_342_131];

let testArray = [1, 23, 54, 1345345345, 134_535, 43];

console.log("");
console.log(
  "======================Array built-in methods======================"
);

// push() item
testArray.push(123);
console.log(testArray);

// unshift()
testArray.unshift(111111);
console.log(testArray);

// pop()

let lastItem = testArray.pop();
console.log(testArray);

// shift()

testArray.splice(2, 1); // deletes element index 2, "1" tells how many elements from index 2 onward to delete
console.log(testArray);

let testArrayTwo = [111, 222, 333, 444];
let newArray = testArrayTwo.slice(2, 3);
console.log(newArray);


console.log("");
console.log("================ Loops ================");


console.log("================ While ================");
// let whileTestArray = [1, 2 ,3 ,4 ,5]
// let counter = 0;
// while(counter < whileTestArray.length) {
//     console.log(whileTestArray[counter]);
//     counter++;
    
// }


console.log("================ Do While ================");

console.log("================ For ================");

