$(document).ready(function () {
  let greetingHeader = $("h1:last");
  console.log(greetingHeader);

  let input = $("input:text");
  console.log(input.val);

  let btn = $("input:button");
  console.log(btn);

  btn.on("click", function () {
    let userMessage = input.val();

    greetingHeader.css("background-color", "gray");
    greetingHeader.text(userMessage);
  });
});
