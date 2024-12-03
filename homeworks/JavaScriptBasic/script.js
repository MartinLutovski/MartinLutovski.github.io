// console.log("isitworking")

let phone = 119.95;
let tax = 5;
let percentage = 100;
let onepercent = phone / percentage;
let phoneplustax = phone + onepercent * tax;
let totalprice = 30;
let display = phoneplustax * totalprice;

console.log(display);


document.getElementById("phoneplustaxmultiplyedby30").innerText = display;