document.addEventListener("DOMContentLoaded", function () {
  const addButton = document.getElementById("add-task-btn");
  const taskInput = document.getElementById("task-input");
  const taskList = document.getElementById("task-list");

  function addTask() {
    const taskText = taskInput.value.trim();

    // Prevent adding empty tasks
    if (taskText === "") {
      alert("Please enter a task.");
      return;
    }

    // Create a new <li> element and set its content
    const listItem = document.createElement("li");
    listItem.textContent = taskText;

    // Create a remove button
    const removeButton = document.createElement("button");
    removeButton.textContent = "Remove";
    removeButton.className = "remove-btn";

    // Remove the task when clicked
    removeButton.onclick = function () {
      taskList.removeChild(listItem);
    };

    // Append button to <li>, then add <li> to <ul>
    listItem.appendChild(removeButton);
    taskList.appendChild(listItem);

    // Clear input field after adding
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
