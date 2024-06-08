const taskManager = (() => {
    let tasks = [];
  
    const loadTasks = () => {
      const savedTasks = localStorage.getItem('tasks');
      if (savedTasks) {
        tasks = JSON.parse(savedTasks);
      }
      renderTasks();
    };
  
    const saveTasks = () => {
      localStorage.setItem('tasks', JSON.stringify(tasks));
    };
  
    const addTask = (taskName) => {
      if (taskName.trim() === "") return;
      const newTask = {
        id: Date.now().toString(),
        name: taskName,
        completed: false,
      };
      tasks.push(newTask);
      saveTasks();
      renderTasks();
    };
  
    const deleteTask = (taskId) => {
      tasks = tasks.filter(task => task.id !== taskId);
      saveTasks();
      renderTasks();
    };
  
    const toggleTaskStatus = (taskId) => {
      const task = tasks.find(task => task.id === taskId);
      if (task) {
        task.completed = !task.completed;
        saveTasks();
        renderTasks();
      }
    };
  
    const renderTasks = (filter = 'all') => {
      const taskList = document.getElementById('taskList');
      taskList.innerHTML = '';
  
      const filteredTasks = tasks.filter(task => {
        if (filter === 'completed') return task.completed;
        if (filter === 'pending') return !task.completed;
        return true;
      });
  
      filteredTasks.forEach(task => {
        const taskItem = document.createElement('li');
        taskItem.className = 'list-group-item d-flex justify-content-between align-items-center';
        taskItem.innerHTML = `
          <span class="${task.completed ? 'completed-task' : ''}">${task.name}</span>
          <div>
            <button class="btn btn-sm btn-success toggle-task-btn" data-task-id="${task.id}">
              <i class="bi ${task.completed ? 'bi-check-lg' : 'bi-check-circle'}"></i>
            </button>
            <button class="btn btn-sm btn-danger delete-task-btn" data-task-id="${task.id}">
              <i class="bi bi-trash"></i>
            </button>
          </div>
        `;
        taskList.appendChild(taskItem);
      });
    };
  
    return {
      loadTasks,
      addTask,
      deleteTask,
      toggleTaskStatus,
      renderTasks,
    };
  })();
  
  export { taskManager };
  