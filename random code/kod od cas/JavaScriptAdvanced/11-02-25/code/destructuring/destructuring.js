console.log("=========== DESTRUCTURING ============");

let usersObj = {
  id: 1,
  firstName: "Emily",
  lastName: "Johnson",
  maidenName: "Smith",
  age: 28,
  gender: "female",
  email: "emily.johnson@x.dummyjson.com",
  phone: "+81 965-431-3024",
  username: "emilys",
  password: "emilyspass",
  birthDate: "1996-5-30",
  image: "https://dummyjson.com/icon/emilys/128",
  bloodGroup: "O-",
  height: 193.24,
  weight: 63.16,
  eyeColor: "Green",
  hair: { color: "Brown", type: "Curly" },
  ip: "42.48.100.32",
  address: {
    address: "626 Main Street",
    city: "Phoenix",
    state: "Mississippi",
    stateCode: "MS",
    postalCode: "29112",
    coordinates: { lat: -77.16213, lng: -92.084824 },
    country: "United States",
  },
  macAddress: "47:fa:41:18:ec:eb",
  university: "University of Wisconsin--Madison",
  bank: {
    cardExpire: "03/26",
    cardNumber: "9289760655481815",
    cardType: "Elo",
    currency: "CNY",
    iban: "YPUXISOBI7TTHPK2BR3HAIXL",
  },
  company: {
    department: "Engineering",
    name: "Dooley, Kozey and Cronin",
    title: "Sales Manager",
    address: {
      address: "263 Tenth Street",
      city: "San Francisco",
      state: "Wisconsin",
      stateCode: "WI",
      postalCode: "37657",
      coordinates: { lat: 71.814525, lng: -161.150263 },
      country: "United States",
    },
  },
  ein: "977-175",
  ssn: "900-590-289",
  userAgent:
    "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/96.0.4664.93 Safari/537.36",
  crypto: {
    coin: "Bitcoin",
    wallet: "0xb9fc2fe63b2a6c003f1c324c3bfa53259162181a",
    network: "Ethereum (ERC20)",
  },
  role: "admin",
};

console.log("");
console.log(" ========== Object Destructuring ==========");

// Example: take id, firstName, lastName withouth Destructuring
// const id = usersObj.id;
// const firstName = usersObj.firstName;
// const lastName = usersObj.lastName;
// console.log(id, firstName, lastName);

//  ===> Example: take id, firstName, lastName WITH DESTRUCTURING
let { id, firstName, lastName } = usersObj;
console.log(id, firstName, lastName);

console.log("");
console.log("========= Parameters Destructuring =======");

// Example without destructuring
function getUserInfo(user) {
  return `${user.firstName} ${user.lastName}`;
}
console.log(getUserInfo(usersObj));

// Example with destructuring

function getUserInfoDest({ firstName, lastName, age }) {
  return `${firstName} ${lastName} ${age}`;
}

console.log(getUserInfoDest(usersObj));

console.log("");
console.log("=========== Arrays Destructuring ===========");

let testArray = [100, 300, 5_000, 400, 10_000];

// Example take the first 3 items from the array - WITHOUT DESTRUCTURING
let firstNumber = testArray[0];
let secondNumber = testArray[1];
let thirdNumber = testArray[2];
console.log(firstNumber, secondNumber, thirdNumber);

// Example take the first 3 items from the array - WITH DESTRUCTURING
let [itemOne, itemTwo, itemThree, itemFive] = testArray;
console.log(itemOne, itemTwo, itemThree, itemFive); // itemFive = 400 - its the fourth index item in the array

// Example take first and third div with class array-demo  WITH DESTRUCTURING

let [firstDiv, , thirdDiv] = document.getElementsByClassName("array-demo"); // with an empty space for any item not needed
console.log(firstDiv);
console.log(thirdDiv);

// Example destructuring with default values

const testArrayTwo = ["First string", "Second string"];
let [firstString, secondString, thirdString = "Third String"] = testArrayTwo;
console.log(firstString, secondString, thirdString);

// Example: Swapping variables using array destructuring
// let a = 10;
// let b = 20;
let a = 10,
  b = 20;

// let temp = a
// a = b;
// b = temp;
// console.log(a, b);

//  with destructuring

[a, b] = [b, a];
console.log(a, b);

console.log("");
console.log("========= Spread operator ===========");
const numbers = [-5, 10, 30, 123, 10_000];
console.log(Math.max(numbers)); // NaN
// console.log(Math.max(-5, 10, 30, 123, 10_000)); // Really bad, needs the whole array to be copied
console.log(Math.max(...numbers));

console.log(numbers); // returns array
console.log(...numbers); // returns only values

const dogs = ["Bax", "Chapo", "Sharko"];
const cats = ["Bela", "Crna"];

let allPetsArr = [] // nightmare with for, push

const allPets = [...dogs, ... cats];
console.log(allPets);


// *** spread with objects



