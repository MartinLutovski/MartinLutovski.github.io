console.log("Anonymus Functions");

// Anonymus Function in an event listener

document.querySelector("button").addEventListener("click", function () {
  console.log("Button is clicked!");
});

// ==========Anonymus Function in a fetch

// https://jsonplaceholder.typicode.com/posts

const postsUrl = "https://jsonplaceholder.typicode.com/posts";
fetch(postsUrl)
  .then(function (response) {
    const parsedData = response.json();
    return parsedData;
  })

  .then(function (data) {
    console.log(data);
  })

  .catch(function (error) {
    console.error("ERROR OCCURED!", error);
  });

let greet = function (name) {  // funkcija vo promenliva, posto zasto da ne!
  console.log(`Hello ${name}!`);
};

let functionTwo = function(){
    console.log("Do something");
    
}
console.log(typeof greet);

greet("Bob");


