let balance = 10000;

let amount = Number(
  prompt(`You have ${balance}! Enter the amout you want to withdraw:`)
);

function atm(amount) {
  if (isNaN(amount)) {
    return "Invalid input: please enter a valid number.";
  }

  if (amount <= 0) {
    return "Invalid input: amount must be greater than zero.";
  }
  
  if (amount <= balance) {
    balance -= amount;
    return `You withdrew: ${amount}. Remaining balance: ${balance}`;
  } else if (amount < 0) {
    return "Invalid amount";
  } else {
    return "Not enough balance.";
  }
}

alert(atm(amount));
document.getElementById("atm").innerText = atm(amount)
