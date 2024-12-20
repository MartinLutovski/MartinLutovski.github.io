let toDoList = []; //empty array to store values

// add a new todo
function addToDo() {
  let newToDo = prompt("Enter a new todo (leave blank or cancel to finish):");

  while (newToDo) {
    toDoList.push(newToDo);
    newToDo = prompt("Enter another todo (leave blank or cancel to finish):");
  }
}

// display todos
function displayToDos() {
  if (toDoList.length === 0) {
    console.log("Your ToDo list is empty.");
  } else {
    console.log("Your ToDo List:");
    for (let i = 0; i < toDoList.length; i++) {
      console.log(`${i + 1}. ${toDoList[i]}`);
    }
  }
}

addToDo();
displayToDos();
