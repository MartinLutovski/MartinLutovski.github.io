// console.log("isitworking")

let phone = 119.95;
let tax = 5;
let percentage = 100;
let onepercent = phone / percentage;
let phoneplustax = phone + onepercent * tax;
let numberOfPhones = 30;
let totalCost = phoneplustax * numberOfPhones;

console.log(totalCost);


document.getElementById("phoneplustaxmultiplyedby30").innerText = totalCost;