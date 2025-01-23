console.log("========== RECURSION===============");

// ====> Example: FACTORIEL
// 5! = 5 * 4 * 3 * 2 * 1= 120
function factoriel(number){
    if (number <= 1) {
        return 1;
    }
    return number * factoriel(number - 1)
}
console.log(factoriel(5));

//  1) 5 => 5 * factoriel(4) - prva iteracija
//  2) 4 => 4 * factoriel(3) - vtora iteracija
//  3) 3 => 3 * factoriel(2) - treta iteracija
//  4) 2 => 2 * factoriel(1) - cetvrta iteracija
//  5) 1 => 1
// Result => 120


//  Example SUM to NUMBER
function sumToNumber(number){
    if (number === 0  ){
        return 0;
    }
    return number + sumToNumber(--number) // -- namali za 1 pa iskoristi ja vrednosta na number, obratno number-- go iskoristuva pa namaluva.
}

console.log(sumToNumber(5));



// ===== > Example Fibonacci
// 0, 1, 1, 2, 3, 5, 8, 13, 21, 34

function fibonacci(n) {
    if (n <= 1){
        return n;
    }

    return fibonacci(n - 1) + fibonacci(n - 2);
}

console.log(`Fibonacci of 5 is`, fibonacci(5));
console.log(`Fibonacci of 25 is`, fibonacci(25));

