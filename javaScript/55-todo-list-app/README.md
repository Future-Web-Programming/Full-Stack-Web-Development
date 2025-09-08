Awesome! Let’s dive into **Chapter 55**, where we’ll build one of the most essential beginner-to-intermediate JavaScript projects — a **To-Do List App** with full functionality and persistent storage using **Local Storage**.

---

# 🟩 Chapter 55: To-Do List App — Add, Edit, Delete, Persist Tasks Using Local Storage

🎯 *Master DOM manipulation, dynamic arrays, event handling, and Local Storage — all in one hands-on mini project!*

---

## 🎓 Learning Objectives

By the end of this chapter, students will:

* Create a dynamic task list using DOM
* Add, delete, and edit tasks
* Store tasks in Local Storage so they persist on page reload
* Practice stringifying and parsing complex data (arrays of objects)
* Improve UI interaction and logic flow

---

## 📐 Project Overview

We’ll build a To-Do List with the following features:

| Feature            | Description                                         |
| ------------------ | --------------------------------------------------- |
| Add Task           | Input field + button                                |
| View All Tasks     | Display in real-time                                |
| Edit Task          | Update an existing task                             |
| Delete Task        | Remove from UI and Local Storage                    |
| Persistent Storage | Use Local Storage to save tasks across page reloads |

---

## 🧩 HTML Structure

```html
<h2>📋 My To-Do List</h2>
<form id="taskForm">
  <input type="text" id="taskInput" placeholder="Enter new task" required />
  <button type="submit">Add Task</button>
</form>

<ul id="taskList"></ul>
```

---

## 🎯 JavaScript Logic

```js
let tasks = JSON.parse(localStorage.getItem("tasks")) || [];
const taskForm = document.getElementById("taskForm");
const taskInput = document.getElementById("taskInput");
const taskList = document.getElementById("taskList");

function saveTasks() {
  localStorage.setItem("tasks", JSON.stringify(tasks));
}

function renderTasks() {
  taskList.innerHTML = "";

  tasks.forEach((task, index) => {
    let li = document.createElement("li");
    li.innerHTML = `
      ${task}
      <button onclick="editTask(${index})">Edit</button>
      <button onclick="deleteTask(${index})">Delete</button>
    `;
    taskList.appendChild(li);
  });
}

function addTask(e) {
  e.preventDefault();
  let taskText = taskInput.value.trim();
  if (taskText !== "") {
    tasks.push(taskText);
    saveTasks();
    renderTasks();
    taskInput.value = "";
  }
}

function deleteTask(index) {
  tasks.splice(index, 1);
  saveTasks();
  renderTasks();
}

function editTask(index) {
  let newTask = prompt("Edit task:", tasks[index]);
  if (newTask !== null && newTask.trim() !== "") {
    tasks[index] = newTask.trim();
    saveTasks();
    renderTasks();
  }
}

taskForm.addEventListener("submit", addTask);
renderTasks();
```

---

## 🧠 Concepts Covered

| Concept          | Example                                |
| ---------------- | -------------------------------------- |
| DOM Manipulation | `createElement`, `appendChild`, etc.   |
| Event Handling   | `addEventListener`, `onclick`          |
| Array Methods    | `.push()`, `.splice()`, `.forEach()`   |
| Local Storage    | `getItem`, `setItem`, `JSON.stringify` |
| Form Validation  | `if (value.trim() !== "")`             |

---

## 🛠️ Optional Improvements (Mini Challenges)

| Idea                          | Skill Practiced             |
| ----------------------------- | --------------------------- |
| Mark tasks as completed ✅     | Add `task.completed = true` |
| Filter: Show active/completed | Conditional rendering       |
| Drag-and-drop reorder 🔀      | HTML5 drag/drop API         |
| Add due dates/calendar        | `<input type="date">`       |

---

## 💻 Try It Online

* [CodePen](https://codepen.io)
* [JSFiddle](https://jsfiddle.net)
* [PlayCode](https://playcode.io)

---

## 📚 Recap

✅ Create a fully functional CRUD app
✅ Manage arrays of dynamic data
✅ Store and retrieve persistent task data
✅ Practice modular JavaScript functions
✅ Build confidence in real project development

---

## 📦 Bonus Activity for Students

Challenge your students:

> 🔥 *Add a “Clear All Tasks” button with confirmation modal before deleting all tasks.*

---

## 🔮 What’s Next?

In **Chapter 56**, we will build on this project and go one step ahead:

> **“Creating a Notes App With Titles, Content, Timestamps & Local Storage”** — more complexity, more practice.

Would you like to start with **Chapter 56** now?
