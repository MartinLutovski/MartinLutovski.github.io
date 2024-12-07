let balance = 10000

let amount = Number(prompt(`You have ${balance}! Enter the amout you want to withdraw:`));

function atm(amount) {
    if (amount <= balance) {
        balance -= amount;
        return `You withdrew: ${amount}. Remaining balance: ${balance}`
    } else {
        return "Not enough balance.";
    }
}

alert(atm(amount));