$(document).ready(function () {
  let ourBtn = $("input[type='button'");

  // first way of adding a click listener

  ourBtn.on("click", function () {
    alert("Button was clicked");
  });

  function saySomething() {
    console.log("aaah, you want to click me??");
  }
  ourBtn.on("mouseover", saySomething);

  // Second way

  ourBtn.click(function () {
    let paragraphs = $("p");
    paragraphs.toggle();
    // paragraphs.css ("visibility", "hidden")
  });
});
