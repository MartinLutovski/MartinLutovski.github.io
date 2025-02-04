console.log("");
console.log("======= SYNCHRONOUS============");

function first() {
  console.log("First thing");
}

function second() {
  console.log("Second thing");
}

function fibonaci(n) {
  if (n <= 1) {
    return n;
  }
  return fibonaci(n - 1) + fibonaci(n - 2);
}

let fibonaciResult = fibonaci(20);
console.log(fibonaciResult);
first();
second();

console.log("");
console.log("======= ASYNCHRONOUS============");

fetch("https://dummyjson.com/products/1")
  .then((response) => response.json())
  .then((products) => console.log("Here is the product", products));

console.log("This is printed after the product!"); // this line is printed first

document.querySelector("button").addEventListener("click", () => {
  console.log("Button is clicked");
});

setTimeout(() => {
  console.log("This is printed after 4 seconds");
}, 4000); // 4000ms - 4s

// setInterval(() => {
//     console.log("This is printed every 3 seconds");

// }, 3000)

// let intervalId = setInterval(() => {
//     console.log("This is printed every 3 seconds");

// }, 3000)

// clearInterval(intervalId); // clears intervals*

function greet(name) {
  setTimeout(() => console.log("Hello ", name), 3500);
  console.log("Hello", name);
}

greet("Martin");


console.log(1);
console.log(2);
console.log(3);


setTimeout(() => console.log(4),1000
)
console.log(5);
setTimeout(() => console.log(6),2000
)

//RESULT
//5
//4
//6


