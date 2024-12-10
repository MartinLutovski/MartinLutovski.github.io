let a = 1;

// While loop 
while (a <= 10){
    console.log(a);
    a++; // a = a + 1
    
}

let fruits = ["apple", "banana", "orange", "grape"];
console.log(fruits);
let count = 0

while(count < fruits.length) {
    console.log(fruits[count]);
    count++;
    
}


// do/while, another looping structure
let b = 1
let c = 1
console.log("====Using while()======");
while(b < 5){
    console.log("Hello ", + b);
    b++;
}
    
console.log("===== Using do/while()");

do {
    console.log("Hello "+ c );
    c++;
    
} while (c < 5)