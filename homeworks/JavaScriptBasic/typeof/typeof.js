function getType(input) {
  let type = typeof input;
  console.log(`The type of the input is: ${type}`);
  return type;
}

getType(Infinity); 
getType("random text"); 
getType(true); 
getType({}); 
getType(); 