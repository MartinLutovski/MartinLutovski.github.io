let input = prompt("Enter your pay:");

console.log(input);
console.log(typeof input);

let parsedInput = parseInt(input);
console.log(parsedInput);
console.log(typeof parsedInput);

if (Number.isNaN(parsedInput)) { alert("The number you've entered isn't a valid number.")}

else if (parsedInput <= 0) { alert("Take a walk!")}

else if (parsedInput <= 1000) { alert("What are you doing?")}
else if ((parsedInput => 1001) && (parsedInput <= 4000)) { alert("Now try working double.")}
else if ((parsedInput => 4001) && (parsedInput <= 10000)) { alert("Now start working smart.")}
else if ((parsedInput => 10001) && (parsedInput < 9999999999999999999999999999999999999999999999)) { alert("No further advice needed.")};


