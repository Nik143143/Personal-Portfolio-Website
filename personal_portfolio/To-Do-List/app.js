// Wait for the DOM to fully load before running the script
document.addEventListener("DOMContentLoaded", () => {
  // Get references to DOM elements
  const taskInput = document.getElementById("taskInput");
  const addTaskBtn = document.getElementById("addTaskBtn");
  const taskList = document.getElementById("taskList");
  const clearAllBtn = document.getElementById("clearAllBtn");

  // Function to add a new task to the list
  const addTask = () => {
    // Get the user-entered value and trim whitespace
    const taskText = taskInput.value.trim();
    if (taskText === "") {
      alert("Please enter a task");
      return;
    }
    // Create list item and checkbox for completion
    const listItem = document.createElement("li");
    const completeCheckBox = document.createElement("input");
    completeCheckBox.type = "checkbox";
    completeCheckBox.className = "complete-checkbox";
    // Toggle completed class when checkbox is changed
    completeCheckBox.addEventListener("change", () => {
      listItem.classList.toggle("completed");
    });
    // Create span for task text
    const taskSpan = document.createElement("span");
    taskSpan.className = "taskText";
    taskSpan.textContent = taskText;

    // Create delete button for removing the task
    const deleteBtn = document.createElement("button");
    deleteBtn.className = "delete-btn";
    deleteBtn.textContent = "x";
    deleteBtn.addEventListener("click", () => {
      listItem.remove();
    });

    // Append checkbox, text, and delete button to list item
    listItem.appendChild(completeCheckBox);
    listItem.appendChild(taskSpan);
    listItem.appendChild(deleteBtn);
    taskList.appendChild(listItem);

    // Clear the input field after adding
    taskInput.value = "";
  };

  // Function to clear all tasks from the list
  const clearAllTasks = () => {
    taskList.innerHTML = "";
  };

  // Event listeners for adding and clearing tasks
  addTaskBtn.addEventListener("click", addTask);
  clearAllBtn.addEventListener("click", clearAllTasks);
});
