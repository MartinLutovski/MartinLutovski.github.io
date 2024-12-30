// ===========> VARIABLES <=============
const todoInput = document.getElementById("todoInput");
const addTodoBtn = document.getElementById("addBtn");
const todoList = document.getElementById("ulList");
const todoItems = [];

// ===========> FUNCTIONS <=============
function Todo(name, isCompleted) {
  this.name = name;
  this.isCompleted = isCompleted;
}
// Logic for adding new Todo
function addNewTodo() {
  const todoInputValue = todoInput.value;
  console.log(todoInputValue);
  if (!todoInputValue) {
    alert("Please enter value.");
    return;
  }

  const newTodo = new Todo(todoInputValue, false);
  todoItems.push(newTodo);
  todoInput.value = "";
}

function renderTodos() {
  todoList.innerHTML = "";
  let htmlBuilder = "";
  for (let i = 0; i < todoItems.length; i++) {
    // todoList.innerHTML += `<li>`
    let todo = todoItems[i];
    htmlBuilder += `<li>`;
    if (todo.isCompleted) {
      htmlBuilder += `
      <input type="checkbox" data-todoindex= "${i}" checked/><span><del>${todo.name}</span>
      `;
    } else {
      htmlBuilder += ` <input data-todoindex="${i}" type="checkbox" /><span>${todo.name}</span>`;
    }

    htmlBuilder += `</li>`;
  }
  todoList.innerHTML = htmlBuilder;
}

function toggleTodoStatus(index) {
  const todo = todoItems[index];
  todo.isCompleted = !todo.isCompleted;
}

// ===========> EVENTS <================
// even.preventDefault();

// Logic for displaying new Todo
addTodoBtn.addEventListener("click", function (event) {
  console.log(event);
  addNewTodo();
  renderTodos();
});
if (todoItems.length > 0) {
  renderTodos();
}

todoList.addEventListener("change", function (e) {
  console.log(e.target);
  console.log(e.target.dataset);

  const todoIndex = e.target.dataset.todoindex;
  toggleTodoStatus(todoIndex);
  renderTodos();
});
