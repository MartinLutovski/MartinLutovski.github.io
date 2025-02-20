let person = {
  firstName: "Martin",
  lastName: "Lutovski",
  age: 31,
  isEmployeed: true,
  profession: "user",
  programmingLanguages: ["c#", "JS"],
};

// If we want to send data to the server
// we need to pack the data in a json format

// The process of packing the data in to a JSON string
// to be sent to the server is called
// SERIALISATION

let jsonContent = JSON.stringify(person);
console.log(jsonContent);



// If we get a response from the server 
// in a JSON string format, we need to PARSE
// the JSON string into a JavaScript object
// This process is called:
// DESERIALISATION


let jsObject = JSON.parse(jsonContent);
console.log(jsObject);


document.getElementById("firstName").innerText = jsObject.firstName

