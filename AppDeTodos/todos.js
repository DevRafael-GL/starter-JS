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

// btn.addEventListener("click", clicar);
// btn.addEventListener("mouseenter", entrar);

function entrar() {
  btn.innerHTML = "Loading...";
  btn.style.background = "#cf3d43";
}

function clicar() {
  btn.innerHTML = "Concluido";
  btn.style.background = "#75d846";
}

const full = document.querySelector(".data");

function fullscreen(event) {
  if (event.key === "f") {
    console.log("clicou F");
    full.classList.toggle("fullScreen");
  }
}

document.addEventListener("keydown", fullscreen);

const images = document.querySelectorAll("img");

//teste

const tabMenu = document.querySelectorAll(".js-tabmenu li");
const tabContent = document.querySelectorAll(".js-tabcontent section");

if (tabMenu.length && tabContent.length) {
  tabContent[0].classList.add("ativo");

  function activeTab(index) {
    tabContent.forEach((section) => {
      section.classList.remove("ativo");
    });
    tabContent[index].classList.add("ativo");
  }

  tabMenu.forEach((itemMenu, index) => {
    itemMenu.addEventListener("click", () => {
      activeTab(index);
    });
  });
}

//teste
let time = 5000,
  currentImageIndex = 0,
  imagens = document.querySelectorAll(".teste img"),
  maxImage = imagens.length;

function nextImage() {
  imagens[currentImageIndex].classList.remove("active");

  currentImageIndex++;

  if(currentImageIndex >= maxImage){
    currentImageIndex = 0
  }

  imagens[currentImageIndex].classList.add("active");
 
}

function start() {
  setInterval(() => {
    //troca de imagem
    nextImage();
  }, time);
}

window.addEventListener("load", start);
