let contacts = []; // empty array to store values

// add a new contact
function addContact() {
  while (true) {
    let newContact = prompt(
      "Enter a contact full name (leave blank or cancel to finish):"
    );
    if (!newContact) break;

    let newNumber = prompt("Enter a phone number:");
    if (!newNumber) {
      alert("Phone number empty!");
      continue;
    }
    contacts.push({ name: newContact, phone: newNumber });
    alert(`Your contact: ${newContact} #${newNumber}, was added.`);
  }
}

// display phone book
function displayPhoneBook() {
  if (contacts.length === 0) {
    console.log("Your Phone Book is empty.");
  } else {
    console.log("Your Phone Book:");
    contacts.forEach((contact, index) => {
      console.log(`${index + 1}. ${contact.name} - ${contact.phone}`);
    });
  }
}

addContact();
displayPhoneBook();
