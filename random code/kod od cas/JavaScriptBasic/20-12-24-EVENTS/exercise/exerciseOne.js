let helloThere = document.getElementById("helloName");

function sayHello() {
  alert("Hello there Martin!");
}

helloThere.addEventListener("click", function () {
  sayHello();
});
