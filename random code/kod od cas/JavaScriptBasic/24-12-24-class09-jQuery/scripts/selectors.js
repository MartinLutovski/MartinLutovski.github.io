$(document).ready(function () {
  // Selectors in jQuery

  console.log("================SELECTORS=========");

  let allElements = $("*"); // select all the elements from the DOM
  let jsSelection = document.getElementById("mainTitle"); // DOM selection - vanila javaScript
  let mainTitleHeader = $("#mainTitle"); // select by ID

  let innerWrapperElements = $(".innerWrapper"); // select by Class

  console.log(allElements);
  console.log(jsSelection);

  console.log(mainTitleHeader[0].innerText);
  console.log(innerWrapperElements);

  let elementsByMultipleSelectors = $(".innerWrapper, .wrapper, #mainTitle");
  console.log(elementsByMultipleSelectors);

  let paragraphs = $("p");
  console.log(paragraphs);

  let firstParagraph = $("p:first");
  console.log(firstParagraph);

  let lastParagraph = $("p:last");
  console.log(lastParagraph);

  let firstChildren = $("h3:first-child"); // all h3 elements, which are first child in their parrent
  console.log(firstChildren);

  let lastChildren = $("p:last-child"); // all paragraph elements, which are last child in their parrent
  console.log(lastChildren);

  let secondChildren = $("p:nth-child(2)"); // second children, in their parrent
  console.log(secondChildren);

  // DOM VS jQuery

  console.log("======DOM VS jQuery=========");

  let firstParagraphDOM = paragraphs[0];
  console.log(firstParagraphDOM); // DOM objects
  console.log(firstParagraphDOM.innerText); // DOM objects
  console.log(firstParagraphDOM.innerHTML); // DOM objects

  let firstParagraphJquery = paragraphs.first(); // jQuery elements
  console.log(firstParagraphJquery.text()); // jQuery elements
  console.log(firstParagraphJquery.html()); // jQuery elements

  paragraphs.last().text("Hello from Qinshift");

  let secondParagraph = paragraphs.get(1);
  console.log(secondParagraph);

  let prevSibling = paragraphs.last().prev().text(); // from all the paragraphs last, then previous, then the text
  console.log(prevSibling);

  let inputs = $("input");
  console.log(inputs);

  let inputText = $('input[value="Cool"]');
  console.log(inputText.val());

  inputText.val("This is the new COOL value");

  inputText.hide(); // hides the previous NEW COOL value
  inputText.show(); // now it shows it

  paragraphs.last().css("background-color", "red");
  paragraphs.last().css("color", "yellow");

  paragraphs.last().after("<h1>Wooow! After</h1>"); // adding HTML via jQuery
  paragraphs.last().before("<h1>Wooow! Before</h1>"); // adding HTML via jQuery
});
