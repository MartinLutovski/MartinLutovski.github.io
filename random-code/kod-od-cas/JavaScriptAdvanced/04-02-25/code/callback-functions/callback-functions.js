console.log("=============Callback Functions===============");

// Common use-casses:

// 1) setTimeout

// setTimeout(() => {
//     console.log("Hello after 3 seconds");

// },3000)

function handleTimeout() {
  console.log("Hello after 3 seconds");
}

setTimeout(handleTimeout, 3000);

// 2) Event handling

// document.querySelector("button").addEventListener("click", () => {
//   console.log("Button is clicked");
// });

function handleButtonClick() {
  console.log("Button is clicked.");
}

document.querySelector("button").addEventListener("click", handleButtonClick); // same as the comented one

// 3) Asyncronous Operations

function performAsyncOperation(callback) {
  console.log("Async operation started");
  setTimeout(() => {
    const result = "Asyinc operation completed.";
    callback(result);
  }, 5000);
  console.log("......Processing......");
}
function printResult(item) {
  console.log(item);
}
performAsyncOperation(printResult);
debugger;
performAsyncOperation(console.log);

// 4) Higher Order Functions

let testArray = [1, 2, 3, 4, 5, 6, 7];
testArray.forEach((n) => console.log(n));

// 5) Making request to an API

function renderDataFromApi(url, renderFunc) {
  fetch(url)
    .then((response) => response.json())
    .then((data) => {
      console.log(data);
      renderFunc(data);
    });
}

function displayUser(user) {
  // logic for displaying user
  let h3 = document.createElement("h3");
  h3.textContent = `${user.firstName} ${user.lastName}`;
  document.body.appendChild(h3);
}

renderDataFromApi("https://dummyjson.com/users/1", displayUser);

renderDataFromApi("https://dummyjson.com/products/1", function (product) {
  console.log(product);
});

console.log("");

console.log(
  "============== Callback Functions vs Functions  as an argument =============="
);

function callBackFunc(someFunc) {
  console.log("Fetching data ...");
  setTimeout(() => {
    console.log("Data fetched");
    someFunc();
  }, 3000);
  console.log("Processing");
}

callBackFunc(() => console.log("Yeey! We have the data!"));


function functionArguments(func1, func2){
    console.log("Executing functions");
    func1();
    func2();
    
}

functionArguments(() => console.log("Hello from Func1"),() => console.log("Hello from Func2")
)

