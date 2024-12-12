let martin = {
    firstName: "Martin",
    age: 31,
    hasAPet: true,
    isLazy: undefined,

    getLazy: function () {
        console.log(this.isLazy);
        
    }
}

martin.getLazy()

console.log(`${martin.firstName} is ${martin.age} years old.`);

martin.firstName = "Viktor";
martin.age = 19;
martin.hasAPet = true;
martin.isLazy = true;

console.log(martin);
console.log(`${martin.firstName} is ${martin.age} years old.`);

