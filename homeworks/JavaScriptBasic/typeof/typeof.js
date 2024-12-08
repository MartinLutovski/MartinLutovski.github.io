function getType(input) {
  let type = typeof input;
  console.log(`The type of the input is: ${type}`);
  return type;
}

getType(Infinity); // Number
getType("random text"); // String
getType(true); // Boolean
getType({}); // Object
getType(); // Undefined
