Great! In **Chapter 60**, we’ll build a **Drag-and-Drop To-Do List App** — a real-world, interactive project that teaches *advanced DOM manipulation, drag events*, and clean **state management** using only **Vanilla JavaScript** — no libraries needed.

---

# 🟩 Chapter 60: **To-Do List App with Drag and Drop**

> 🎓 *Learn how to create a modern to-do app where users can reorder tasks by dragging and dropping them — a real UX enhancement used in Trello, Notion, and more!*

---

## 🎯 Learning Objectives

By the end of this chapter, students will:

* Create a dynamic to-do list with add/remove/edit functionality
* Implement drag-and-drop reordering
* Understand the drag events (`dragstart`, `dragover`, `drop`)
* Use arrays to manage task state
* Enhance UX with visual feedback (like drag-hover effects)

---

## 🧠 Core JavaScript Concepts

| Concept                  | Application                               |
| ------------------------ | ----------------------------------------- |
| Arrays                   | Store task data                           |
| DOM Manipulation         | Add, update, delete, and reorder tasks    |
| Event Handling           | Drag, Drop, Input, Click events           |
| Local Storage (optional) | Persisting tasks across sessions          |
| CSS for UX               | Highlight drop targets and dragging items |

---

## 🧱 HTML Structure

```html
<div class="app">
  <h2>📝 My To-Do List</h2>
  <div class="todo-input">
    <input type="text" id="todoInput" placeholder="Enter a new task" />
    <button onclick="addTask()">➕ Add Task</button>
  </div>

  <ul id="todoList" class="task-list"></ul>
</div>
```

---

## 🎨 CSS (Optional Styling Idea)

Use CSS to add:

* Hover effect while dragging
* Drag placeholder with border
* Cursor style for draggable items

We'll keep this optional and focus on logic first.

---

## 🧩 JavaScript Code

```js
let tasks = [];

function addTask() {
  const input = document.getElementById("todoInput");
  const taskText = input.value.trim();
  if (taskText === "") return alert("Please enter a task.");
  
  tasks.push(taskText);
  input.value = "";
  renderTasks();
}

function renderTasks() {
  const list = document.getElementById("todoList");
  list.innerHTML = "";

  tasks.forEach((task, index) => {
    const li = document.createElement("li");
    li.setAttribute("draggable", true);
    li.setAttribute("data-index", index);
    li.classList.add("draggable-item");

    li.innerHTML = `
      ${task}
      <button onclick="deleteTask(${index})">❌</button>
    `;

    addDragEvents(li);
    list.appendChild(li);
  });
}

function deleteTask(index) {
  tasks.splice(index, 1);
  renderTasks();
}

// Drag & Drop Logic
let draggedIndex = null;

function addDragEvents(el) {
  el.addEventListener("dragstart", function (e) {
    draggedIndex = +this.dataset.index;
    this.classList.add("dragging");
  });

  el.addEventListener("dragend", function () {
    this.classList.remove("dragging");
  });

  el.addEventListener("dragover", function (e) {
    e.preventDefault();
    this.classList.add("drag-over");
  });

  el.addEventListener("dragleave", function () {
    this.classList.remove("drag-over");
  });

  el.addEventListener("drop", function () {
    const targetIndex = +this.dataset.index;
    if (draggedIndex === null || draggedIndex === targetIndex) return;

    // Swap tasks
    [tasks[draggedIndex], tasks[targetIndex]] = [tasks[targetIndex], tasks[draggedIndex]];
    renderTasks();
  });
}

// Initial Load
renderTasks();
```

---

## 🧪 Practice Challenges

| Challenge                           | Concepts Covered           |
| ----------------------------------- | -------------------------- |
| Add Edit Task Functionality         | DOM Update, Input Logic    |
| Save tasks to localStorage          | localStorage               |
| Task priority / categories          | Data modeling              |
| Completed task style (checkbox)     | Class toggle, Conditionals |
| Enable drag-and-drop across columns | Advanced DnD               |

---

## 💻 Online Code Editors

Students can try this project on:

* [PlayCode.io](https://playcode.io)
* [CodePen](https://codepen.io)
* [JSFiddle](https://jsfiddle.net)
* [Replit](https://replit.com)

---

## 📚 Recap

✅ In this chapter, students learned how to:

* Create a dynamic to-do list
* Use drag-and-drop to reorder tasks
* Handle multiple DOM events like `dragstart`, `drop`, and `dragover`
* Update array data and rerender tasks efficiently

---

## 🔮 Coming Next

In **Chapter 61**, we’ll build:

> 📦 **Shopping Cart System with Add to Cart, Quantity Management, and Total Price** — perfect for building real-world eCommerce features.

Let me know when you're ready to continue to Chapter 61!
