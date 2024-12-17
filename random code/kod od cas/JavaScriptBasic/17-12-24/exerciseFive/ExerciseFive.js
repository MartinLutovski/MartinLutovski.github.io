function calculateExpenses(rent, bills) {
    let startingBalance = parseInt(prompt("Enter your salary:"));
    let totalExpense = rent + bills;
    let remainingBalance = startingBalance - totalExpense;
    
    console.log(`Total rent and bills: $${totalExpense}`);
    console.log(`Remaining balance: $${remainingBalance}`);
}


let rent = parseInt(Math.abs(prompt("Enter your rent:")));  // Math.abs za da ne moze da si dodavam na balans :D
let bills = parseInt(Math.abs(prompt("Enter your bills:"))); // Math.abs za da ne moze da si dodavam na balans :D

calculateExpenses(rent, bills);