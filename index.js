// select html elements
let input = document.querySelector(".input");
let submit = document.querySelector(".add");
let tasksEl = document.querySelector(".tasks");
let container = document.querySelector(".container");

// create empty array to store your tasks inside it
let taskArray = [];
let storageArray = [];
// check if there is a data inside the local storage
if (localStorage.length > 0) {
  getDataFromLocalStorage();
}
// when you click the add button
submit.onclick = function (e) {
  // if the input field is empty don't do anything
  if (input.value !== "") {
    taskArray.push(input.value);
    input.value = "";
    console.log(taskArray);
    // function to add the task to the body of the html
    renderTask(taskArray);
    // function to delete tasks
    deleteTask();
  }
};

function getDataFromLocalStorage() {
  let storedTasks = JSON.parse(localStorage.getItem("tasks")); //get them back
  for (const task of storedTasks) {
    let taskEl = document.createElement("div");
    let spanDltButton = document.createElement("span");
    taskEl.textContent = task;
    taskEl.classList.add("task");
    spanDltButton.textContent = "delete";
    taskEl.appendChild(spanDltButton);
    tasksEl.appendChild(taskEl);
    container.appendChild(tasksEl);
    document.body.appendChild(container);
  }
}

function renderTask(array) {
  array.forEach(function (task) {
    let taskEl = document.createElement("div");
    let spanDltButton = document.createElement("span");
    taskEl.textContent = task;
    taskEl.classList.add("task");
    spanDltButton.textContent = "delete";
    taskEl.appendChild(spanDltButton);
    tasksEl.appendChild(taskEl);
    container.appendChild(tasksEl);
    document.body.appendChild(container);
    // store all tasks in storage array so you can used it to restore data from local storage
    storageArray.push(task);
    console.log(storageArray);
    // store tasks  in the local storage
    localStorage.setItem("tasks", JSON.stringify(storageArray));
    taskArray = [];
  });
}

function deleteTask() {
  const btns = document.querySelectorAll("span");
  for (const btn of btns) {
    btn.addEventListener("click", function (e) {
      e.currentTarget.parentNode.remove();
    });
  }
}
