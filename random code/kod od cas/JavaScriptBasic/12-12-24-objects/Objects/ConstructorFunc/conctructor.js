
// Create an object using Constructor Function

function Person(firstName, lastName, birthYear, isEmployed) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.birthYear = birthYear;
    this.isEmployed = isEmployed;
    this.getFullName  = function() {
        return `${this.firstName} ${this.lastName}`;
    }

    this.callculateAge = function(currentYear) {
        return currentYear - this.birthYear;
    }
}

let martin = new Person("Martin", "Lutovski" , 1993, true);
let frose = new Person("Frosina", "Stamenkovska", 1993, true);

martin.isLazy = false;

console.log(martin);
console.log(frose);


console.log(frose.callculateAge(2024));
console.log(martin.callculateAge(2024));


function windowSize() {
    let width = this.innerWidth;
    let height = this.innerHeight;
    return [width, height];
}

console.log(windowSize());


console.log(this) // dava properties od cel window na browser.