
const taskInput = document.getElementById('taskInput');
const addTaskBtn = document.getElementById('addTaskBtn');
const taskList = document.getElementById('taskList');
let tasks = JSON.parse(localStorage.getItem('tasks')) || [];


function displayTasks() {
  taskList.innerHTML = ''; 
  tasks.forEach((task, index) => {
    const li = document.createElement('li');
    li.textContent = task;
    li.innerHTML += ` <button onclick="deleteTask(${index})">Delete</button>`;
    taskList.appendChild(li);
  });
}

//add a new task
addTaskBtn.addEventListener('click', () => {
  const task = taskInput.value.trim();
  if (task) {
    tasks.push(task); // Add to array tasks
    localStorage.setItem('tasks', JSON.stringify(tasks)); // Save to localStorage
    taskInput.value = ''; // Clear input
    displayTasks(); // Update UI
  }
});

// delete a task
function deleteTask(index) {
  tasks.splice(index, 1); // Remove from array
  localStorage.setItem('tasks', JSON.stringify(tasks)); // Update localStorage
  displayTasks();
}

displayTasks();
