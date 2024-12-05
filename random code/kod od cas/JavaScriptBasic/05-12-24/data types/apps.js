console.log('================STRINGS================')

let firstName;
firstName = 'Bob';

let lastName = 'Bobsky';

// ===> usinge quotes
let doubleQoutes = "This is a string with double quotes";
//  using single quotes 
let singleQuotes = 'this is a string with single quotes';
// ====>
let backtikString = `this is backtick`;


console.log('====== Combining strings=========');
// =====> using '+'
let fullName = 'First Name:' + '' + firstName;

console.log(fullName);

console.log('Last Name: ' + '' + lastName);

console.log(firstName + ' is ' + 30 + ' Years old');
// =====>bellow example of string
console.log(2 + 2);
console.log(2 + '2');

// ====> bellow is an example of  string interpolation
fullName = `Full Name ${firstName} ${lastName}`;
console.log(fullName);



console.log('================ Quotes withnin strings ================');

// let sentence = 'this isn't possible'

let sentence1 = "This isn't hard ";
let sentence2 = `He replied: "Hey there"`;
let sentence3 = 'This isn\'t possible' 
let sentence4 = '\'TO BE\' or \'NOT TO BE\' ';
let  sentence5 = `" ${sentence4}, the question is now!"`;

console.log(sentence5);


console.log('================ NON-VALUE-VALUES ================');

// undefined
let undefinableVariable;
console.log(undefinableVariable);

//  null

let emptyVariable = null;
console.log(emptyVariable);


console.log('================ SPECIAL NUMBER ================');

console.log('================ NaN ================'); // not a number
console.log(typeof NaN);
let result = 100 / 'desert';
console.log(result);

console.log(isNaN (result)); // true
console.log(isNaN('text')); // true
console.log(Number.isNaN('text')); // false


console.log('================ Infinity ================');
let infinity = Infinity;
console.log(infinity);
console.log(typeof infinity);
console.log(1 / 0 );
console.log(-1 / 0);




