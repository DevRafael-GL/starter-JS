const listElement = document.querySelector("#app ul");
const inputElement = document.querySelector("#app input");
const buttonElement = document.querySelector("#app button");

var todos = JSON.parse(localStorage.getItem("list_todos")) || [];

function renderTodos() {
  listElement.innerHTML = "";

  for (todo of todos) {
    let todoElement = document.createElement("li");
    let todoText = document.createTextNode(todo);

    let linkElement = document.createElement("a");

    linkElement.setAttribute("href", "#");

    let pos = todos.indexOf(todo);
    linkElement.setAttribute("onclick", "deleteTodo(" + pos + ")");

    let linkText = document.createTextNode("🗑 Excluir");

    linkElement.appendChild(linkText);

    todoElement.appendChild(todoText);
    todoElement.appendChild(linkElement);
    listElement.appendChild(todoElement);
  }
}

renderTodos();

function addTodo() {
  let todoText = inputElement.value;

  todos.push(todoText);
  inputElement.value = "";
  renderTodos();
  saveToStorage();
}

buttonElement.onclick = addTodo;

function deleteTodo(pos) {
  todos.splice(pos, 1);
  renderTodos();
  saveToStorage();
}

function saveToStorage() {
  localStorage.setItem("list_todos", JSON.stringify(todos));
}

document.querySelectorAll("#app > .menu").forEach((menu) => {
  menu.addEventListener("click", (ev) => {
    ev.preventDefault();
    menu.parentNode.classList.toggle("active");
  });
});

function relogio() {
  let data = new Date();
  let horas = data.getHours();
  let minutos = data.getMinutes();
  let segundos = data.getSeconds();

  if (horas < 10) {
    horas = "0" + horas;
  }

  if (minutos < 10) {
    minutos = "0" + minutos;
  }

  if (segundos < 10) {
    segundos = "0" + segundos;
  }

  document.querySelector(".data").innerHTML =
    horas + ":" + minutos + ":" + segundos;
}

window.setInterval("relogio()", 1000);

const btn = document.querySelector(".ct");

btn.addEventListener("click", clicar);
btn.addEventListener("mouseenter", entrar);

function entrar() {
  btn.innerHTML = "Loading...";
  btn.style.background = "#cf3d43";
}

function clicar() {
  btn.innerHTML = "Concluido";
  btn.style.background = "#75d846";
}
