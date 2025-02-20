console.log("========== PROTOTYPES ===========");

const animal = {
  type: "Mamal",
  eat: function () {
    console.log("nom nom nom");
  },
};

const dog = Object.create(animal);
console.log(dog);

dog.bread = "German shepard";

console.log("");
console.log("============ __proto__============");

console.log(dog.type);

console.log(dog.__proto__.type);

console.log(dog);
console.log(dog.__proto__.type);
console.log(dog.__proto__.__proto__.__proto__);
// console.log(dog.__proto__.__proto__.__proto__.__proto__);  ==> NULL

console.log("");
console.log(" ============== prototype ==============");

function Animal(name) {
  this.name = name;
  this.eat = () => console.log(`${this.name} is eating`);
}

console.log(Animal.prototype);

Animal.prototype.makeSound = function () {
  console.log(`${this.name} makes sound!`);
};
console.log(Animal.prototype);

Animal.prototype.isWild = false;
console.log(Animal.prototype);

const cat = new Animal("Cat");
cat.makeSound();
console.log(cat);
console.log(cat.isWild);

console.log("");
console.log(" =========== Object.setPrototypeOf ===============");

const swimAbility = {
  isGoodSwimmer: false,
  swim: function () {
    console.log(
      `${this.name} is swimming!. It is a ${
        this.isGoodSwimmer ? "good" : "bad"
      } swimmer.`
    );
  },
};

// swimAbility.swim() ; we get undefined for name
const turtle = new Animal("Turtle"); // Vodna zelka
turtle.makeSound();
// turtle.swim(); ERROR

Object.setPrototypeOf(turtle, swimAbility);


turtle.isGoodSwimmer = true
turtle.swim();

console.log(turtle);
// turtle.makeSound(); - error - prototype now is swimability

Object.setPrototypeOf(swimAbility, Animal.prototype);
Object.setPrototypeOf(turtle, swimAbility);

turtle.makeSound();
turtle.swim();
turtle.makeSound();
console.log(turtle);


console.log("");
console.log(" ============= Object.getPrototypeOf ===============");

const bird = new Animal("Bird");
bird.makeSound();
// console.log(bird.prototype); UNDEFINED

console.log(Object.getPrototypeOf(bird));
