document.addEventListener("DOMContentLoaded", () => {
    const taskInput = document.getElementById("task__input");
    const taskList = document.getElementById("tasks__list");
    const taskForm = document.getElementById("tasks__form");
  
    // Функция для добавления задачи
    function addTask(taskText) {
      const task = document.createElement("div");
      task.className = "task";
  
      const taskTitle = document.createElement("div");
      taskTitle.className = "task__title";
      taskTitle.textContent = taskText;
  
      const removeButton = document.createElement("a");
      removeButton.className = "task__remove";
      removeButton.textContent = "×";
      removeButton.href = "#";
  
      // Обработчик клика для удаления задачи
      removeButton.addEventListener("click", () => {
        task.remove();
        saveTasks();
      });
  
      task.appendChild(taskTitle);
      task.appendChild(removeButton);
      taskList.appendChild(task);
  
      saveTasks();
    }
  
    // Функция для сохранения задач в локальное хранилище
    function saveTasks() {
      const tasks = [];
      const taskElements = taskList.getElementsByClassName("task__title");
      for (let i = 0; i < taskElements.length; i++) {
        tasks.push(taskElements[i].textContent);
      }
      localStorage.setItem("tasks", JSON.stringify(tasks));
    }
  
    // Обработчик отправки формы (добавление задачи)
    taskForm.addEventListener("submit", (e) => {
      e.preventDefault();
      const taskText = taskInput.value.trim();
      if (taskText !== "") {
        addTask(taskText);
        taskInput.value = "";
      }
    });
  
    // Загрузка задач из локального хранилища при загрузке страницы
    function loadTasks() {
      const storedTasks = JSON.parse(localStorage.getItem("tasks"));
      if (storedTasks) {
        storedTasks.forEach((taskText) => {
          addTask(taskText);
        });
      }
    }
  
    loadTasks();
  });  