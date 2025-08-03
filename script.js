// Ensure the script runs after the DOM is fully loaded
document.addEventListener("DOMContentLoaded", function () {
  // Select the necessary DOM elements
  const addButton = document.getElementById("add-task-btn");
  const taskInput = document.getElementById("task-input");
  const taskList = document.getElementById("task-list");

  // Function to create and add a task
  function addTask() {
    const taskText = taskInput.value.trim();

    if (taskText === "") {
      alert("Please enter a task.");
      return;
    }

    // Create a <li> element and set its content
    const listItem = document.createElement("li");
    listItem.textContent = taskText;

    // Create a "Remove" button
    const removeButton = document.createElement("button");
    removeButton.textContent = "Remove";
    removeButton.className = "remove-btn"; // No use of classList.add

    // Set the onclick event for the remove button
    removeButton.onclick = function () {
      taskList.removeChild(listItem);
    };

    // Append the remove button to the <li>, then <li> to the task list
    listItem.appendChild(removeButton);
    taskList.appendChild(listItem);

    // Clear the input field
    taskInput.value = "";
  }

  // Add task on button click
  addButton.addEventListener("click", addTask);

  // Add task on Enter key press
  taskInput.addEventListener("keypress", function (event) {
    if (event.key === "Enter") {
      addTask();
    }
  });
});
// Wait until the DOM is fully loaded
document.addEventListener("DOMContentLoaded", function () {
  // Select DOM elements
  const addButton = document.getElementById("add-task-btn");
  const taskInput = document.getElementById("task-input");
  const taskList = document.getElementById("task-list");

  // Load tasks from Local Storage and render them
  loadTasks();

  // Function to create and add a task
  function addTask(taskText, save = true) {
    if (taskText.trim() === "") {
      alert("Please enter a task.");
      return;
    }

    // Create list item and remove button
    const listItem = document.createElement("li");
    listItem.textContent = taskText;

    const removeButton = document.createElement("button");
    removeButton.textContent = "Remove";
    removeButton.className = "remove-btn";

    // Remove task from DOM and Local Storage
    removeButton.onclick = function () {
      taskList.removeChild(listItem);
      removeTaskFromStorage(taskText);
    };

    listItem.appendChild(removeButton);
    taskList.appendChild(listItem);

    // Only update storage if task is newly added by user
    if (save) {
      const storedTasks = JSON.parse(localStorage.getItem("tasks") || "[]");
      storedTasks.push(taskText);
      localStorage.setItem("tasks", JSON.stringify(storedTasks));
    }

    taskInput.value = "";
  }

  // Function to load tasks on page load
  function loadTasks() {
    const storedTasks = JSON.parse(localStorage.getItem("tasks") || "[]");
    storedTasks.forEach(taskText => addTask(taskText, false)); // Don't double save
  }

  // Function to remove a task from Local Storage
  function removeTaskFromStorage(taskText) {
    let storedTasks = JSON.parse(localStorage.getItem("tasks") || "[]");
    storedTasks = storedTasks.filter(task => task !== taskText);
    localStorage.setItem("tasks", JSON.stringify(storedTasks));
  }

  // Add task on button click
  addButton.addEventListener("click", function () {
    addTask(taskInput.value);
  });

  // Add task on Enter key press
  taskInput.addEventListener("keypress", function (event) {
    if (event.key === "Enter") {
      addTask(taskInput.value);
    }
  });
});
