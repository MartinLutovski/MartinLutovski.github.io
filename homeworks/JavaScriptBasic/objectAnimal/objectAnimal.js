// let animal = {
//   // Properties
//   name: "Badi",
//   kind: "Dog",

//   // Method
//   speak: function (message) {
//     console.log(`${this.name} the ${this.kind} says: '${message}'`);
//   },
// };

// animal.speak("AV AV");

// // Changing properties
// animal.name = "Bela";
// animal.kind = "Cat";

// animal.speak("Mjau");

// Now with prompt

// let animal = {
//   name: prompt("Enter the animal's name:"),
//   kind: prompt("Enter the kind of animal:"),

//   speak: function (message) { if (animal.name )
//     alert(`${this.name} the ${this.kind} says: '${message}'`);
//   },
// };

// animal.speak(prompt("What do you want the animal to say?"));   ================= prompt should be outside object, in order for the object to be more modular.

// prompt outside bellow

let animal = {
  name: "",
  kind: "",

  speak: function (message) {
    if (this.name && this.kind) {
      alert(`${this.name} the ${this.kind} says: '${message}'`);
    } else {
      alert("Please enter animal name and kind first!");
    }
  },
};

animal.name = prompt("Enter the animal's name:");
animal.kind = prompt("Enter the kind of animal:");

animal.speak(prompt("What do you want the animal to say?"));
