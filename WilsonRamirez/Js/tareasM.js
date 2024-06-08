import { taskManager } from './tareas.js';

document.addEventListener('DOMContentLoaded', () => {
  taskManager.loadTasks();

  document.getElementById("taskForm").addEventListener("submit", (event) => {
    event.preventDefault(); // Evita el comportamiento predeterminado del formulario

    const taskInput = document.getElementById("taskInput");
    const taskName = taskInput.value;

    taskManager.addTask(taskName);
    taskInput.value = "";
  });

  document.getElementById("taskList").addEventListener("click", (event) => {
    if (event.target.classList.contains("delete-task-btn")) {
      const taskId = event.target.getAttribute("data-task-id");
      taskManager.deleteTask(taskId);
    }

    if (event.target.classList.contains("toggle-task-btn")) {
      const taskId = event.target.getAttribute("data-task-id");
      taskManager.toggleTaskStatus(taskId);
    }
  });

  document.getElementById('showAll').addEventListener('click', () => taskManager.renderTasks('all'));
  document.getElementById('showPending').addEventListener('click', () => taskManager.renderTasks('pending'));
  document.getElementById('showCompleted').addEventListener('click', () => taskManager.renderTasks('completed'));
});
