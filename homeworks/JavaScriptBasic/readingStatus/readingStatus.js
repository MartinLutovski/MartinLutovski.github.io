// let book = {
//   title: "Зоки Поки",
//   author: "Оливера Николова",
//   readingStatus: false, // boolean

//   displayStatus: function () {
//     if (this.readingStatus) {
//       return `Already read '${this.title}' by ${this.author}.`;
//     } else {
//       return `You still need to read '${this.title}' by ${this.author}.`;
//     }
//   },
// };

// console.log(book.displayStatus());

// book.title = "Шифри на каменот";
// book.author = "Оливера Николова";
// book.readingStatus = true;

// console.log(book.displayStatus());

// Now with prompt
// function validateInput(input) {
//   while (input === null || input.trim() === "") {
//     input = prompt("Invalid input! Please enter a valid value:");
//   }
//   return input.trim();
// } // Note to self: doesnt work if it isn't declared above.

// let book = {
//   title: validateInput(prompt("Enter the book title:")),
//   author: validateInput(prompt("Enter the author's name:")),
//   readingStatus: confirm(
//     "Have you read this book? Click OK for yes, Cancel for no."
//   ), // tnx Google, prasanje: ova e object vo JS?

//   displayStatus: function () {
//     if (this.readingStatus) {
//       return `Already read '${this.title}' by ${this.author}.`;
//     } else {
//       return `You still need to read '${this.title}' by ${this.author}.`;
//     }
//   },
// };

// alert(book.displayStatus());    as with object animal, prompts should be outside object/method, in order to achieve better modularity.

// bellow with prompt outside
function validateInput(input) {
  while (input === null || input.trim() === "") {
    input = prompt("Invalid input! Please enter a valid value:");
  }
  return input.trim();
} // Note to self: doesnt work if it isn't declared above.

let book = {
  title: "",
  author: "",
  readingStatus: "",

  displayStatus: function () {
    if (this.readingStatus) {
      return `Already read '${this.title}' by ${this.author}.`;
    } else {
      return `You still need to read '${this.title}' by ${this.author}.`;
    }
  },
};

book.title = validateInput(prompt("Enter the book title:"));
book.author = validateInput(prompt("Enter the author's name:"));
(book.readingStatus = confirm(
  "Have you read this book? Click OK for yes, Cancel for no."
)), // tnx Google, prasanje: ova e object vo JS?
  alert(book.displayStatus());
