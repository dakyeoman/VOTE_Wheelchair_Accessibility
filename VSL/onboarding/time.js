const toDoForm = document.getElementById("todo-form");
const toDoInput = toDoForm.querySelector("#todo-form input");
const toDoList = document.getElementById("todo-list");

const TODOS_KEY = "todo"
let toDos = [];

function saveToDos(){ 
    //localStorage에 String으로 저장
    localStorage.setItem("TODOS_KEY", toDos);
}

function paintToDo(newTodo){
    const span = document.createElement("span");
    span.innerText = newTodo.text;
}

function handleToDoSubmit(event) {
    event.preventDefault();
    const newTodo = toDoInput.value;
    const newTodoObj = newTodo
        
    
    toDos.push(newTodoObj);
    paintToDo(newTodo);
    saveToDos();
}

toDoForm.addEventListener("submit", handleToDoSubmit);

const savedToDos = localStorage.getItem("TODOS_KEY");
console.log(savedToDos);


document.getElementById("time").innerHTML=saveToDos;





