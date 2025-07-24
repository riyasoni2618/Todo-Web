const form = document.getElementById('todo-form');
const taskInput = document.getElementById('task-input');
const taskList = document.getElementById('task-list');
const completedList = document.getElementById('completed-list');
const themeToggle = document.getElementById('theme-toggle');
const body = document.body;

// Add task logic
form.addEventListener('submit', function(e) {
  e.preventDefault();
  const taskText = taskInput.value.trim();
  if (taskText !== '') {
    addTask(taskText);
    taskInput.value = '';
  }
});

function addTask(text) {
  const li = document.createElement('li');
  const checkbox = document.createElement('input');
  checkbox.type = 'checkbox';

  checkbox.addEventListener('change', function() {
    if (checkbox.checked) {
      li.classList.add('completed');
      taskList.removeChild(li);
      completedList.appendChild(li);
    }
  });

  li.appendChild(checkbox);
  li.appendChild(document.createTextNode(text));
  taskList.appendChild(li);
}

// Theme toggle logic
themeToggle.addEventListener('click', () => {
  body.classList.toggle('dark');
  body.classList.toggle('light');

  const isDark = body.classList.contains('dark');
  themeToggle.textContent = isDark ? '☀️ Light Mode' : '🌙 Dark Mode';
});
