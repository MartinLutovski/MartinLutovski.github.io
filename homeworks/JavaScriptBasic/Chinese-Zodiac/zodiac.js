let year = prompt("Please enter the year you are born in:");
let parsedYear = parseInt(year);

let zodiacIndex = (parsedYear - 4) % 12;

switch (zodiacIndex) {
  case 0:
    zodiacAnimal = "Rat";
    break;
  case 1:
    zodiacAnimal = "Ox";
    break;
  case 2:
    zodiacAnimal = "Tiger";
    break;
  case 3:
    zodiacAnimal = "Rabbit";
    break;
  case 4:
    zodiacAnimal = "Dragon";
    break;
  case 5:
    zodiacAnimal = "Snake";
    break;
  case 6:
    zodiacAnimal = "Horse";
    break;
  case 7:
    zodiacAnimal = "Goat";
    break;
  case 8:
    zodiacAnimal = "Monkey";
    break;
  case 9:
    zodiacAnimal = "Rooster";
    break;
  case 10:
    zodiacAnimal = "Dog";
    break;
  case 11:
    zodiacAnimal = "Pig";
    break;
  default:
    zodiacAnimal = "Invalid value entered";
}

alert(zodiacAnimal);
