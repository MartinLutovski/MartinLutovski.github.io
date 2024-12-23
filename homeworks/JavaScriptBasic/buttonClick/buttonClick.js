let body = document.getElementById("body");
let headers = document.getElementsByClassName("headers");
let paragraphs = document.getElementsByClassName("paragraph");
let btn = document.getElementById("changestyle");

function changeBody(element) {
  element.style.backgroundColor = "black";
}

function changeHeaders(elements) {
  for (let i = 0; i < elements.length; i++) {
    elements[i].style.color = "white";
    elements[i].style.fontSize = "50px";
    elements[i].style.fontStyle = "italic";
  }
}

// bellow and above, getElementsByClassName returns a collection, not a single element.
// So you have to iterate for each element containted

function changeParagraphs(elements) {
  for (let i = 0; i < elements.length; i++) {
    elements[i].style.color = "gray";
    elements[i].style.fontSize = "25px";
  }
}

btn.addEventListener("click", function () {
  changeBody(body);
  changeHeaders(headers);
  changeParagraphs(paragraphs);
});
