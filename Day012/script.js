const addNewTaskBtn = document.getElementById("task-button");
const taskContainer = document.getElementById("list-container");
const inputField = document.getElementById("task");

addNewTaskBtn.addEventListener("click", function() {
  const newTask = document.createElement("h3");
  newTask.innerText = inputField.value;
  if(inputField.value.length == 0 ) {
    return 0 
  }
  taskContainer.appendChild(newTask);
  inputField.value = "";
  newTask.addEventListener("click", function() {
    newTask.style.textDecoration = "line-through";
    newTask.style.color = "red" ; 
  })
  newTask.addEventListener("dblclick", function() {
    taskContainer.removeChild(newTask);
})
})