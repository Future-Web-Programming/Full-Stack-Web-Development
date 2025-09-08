Awesome! In **Chapter 21**, we’ll teach students how to **store and retrieve data** in the browser using **Local Storage** and **Session Storage** — which is crucial for features like "Remember Me", saving settings, to-do lists, etc.

---

# 🟩 Chapter 21: JavaScript Local Storage & Session Storage

**(Storing User Data in the Browser + Mini Projects)**

---

## 🎯 Learning Outcomes

By the end of this chapter, students will:

* Understand the difference between **localStorage** and **sessionStorage**
* Store and retrieve key-value data using the browser
* Persist data across page reloads
* Build a **"Remember Me" login form**
* Create a **Mini To-Do App**

---

## 🧠 What is Web Storage?

Web Storage lets JavaScript store data **inside the user's browser**.

| Storage Type     | Description                                     |
| ---------------- | ----------------------------------------------- |
| `localStorage`   | Stores data with **no expiration**              |
| `sessionStorage` | Stores data **until the browser tab is closed** |

---

## ✅ localStorage Basics

### ➕ Save data

```js
localStorage.setItem("username", "futureDev");
```

### 📤 Retrieve data

```js
let name = localStorage.getItem("username");
console.log(name); // futureDev
```

### ❌ Remove data

```js
localStorage.removeItem("username");
```

### 🔄 Clear everything

```js
localStorage.clear();
```

---

## 📌 Example: Saving Theme Preference

```js
localStorage.setItem("theme", "dark");
let theme = localStorage.getItem("theme");
console.log("User prefers:", theme); // dark
```

---

## ✅ sessionStorage Basics

Same syntax, different use-case:

```js
sessionStorage.setItem("cartItems", "3");
sessionStorage.getItem("cartItems");
```

> 🧠 This data **disappears** when the tab is closed.

---

## 🔐 Real Project: "Remember Me" Login Form

### ✅ HTML

```html
<form id="loginForm">
  <input type="text" id="username" placeholder="Username" />
  <input type="checkbox" id="rememberMe" /> Remember Me
  <button type="submit">Login</button>
</form>
```

### ✅ JavaScript

```js
const loginForm = document.getElementById("loginForm");
const usernameInput = document.getElementById("username");
const rememberMeCheckbox = document.getElementById("rememberMe");

window.addEventListener("DOMContentLoaded", () => {
  const savedUsername = localStorage.getItem("savedUser");
  if (savedUsername) {
    usernameInput.value = savedUsername;
    rememberMeCheckbox.checked = true;
  }
});

loginForm.addEventListener("submit", (e) => {
  e.preventDefault();
  const username = usernameInput.value.trim();

  if (rememberMeCheckbox.checked) {
    localStorage.setItem("savedUser", username);
  } else {
    localStorage.removeItem("savedUser");
  }

  alert("Login successful!");
});
```

---

## 📝 Real Project 2: Mini To-Do App with localStorage

### ✅ HTML

```html
<input type="text" id="todoInput" placeholder="New Task" />
<button onclick="addTodo()">Add</button>
<ul id="todoList"></ul>
```

### ✅ JavaScript

```js
let todos = JSON.parse(localStorage.getItem("todos")) || [];

function renderTodos() {
  const list = document.getElementById("todoList");
  list.innerHTML = "";
  todos.forEach((todo, i) => {
    list.innerHTML += `<li>${todo} <button onclick="deleteTodo(${i})">❌</button></li>`;
  });
}

function addTodo() {
  const input = document.getElementById("todoInput");
  const task = input.value.trim();
  if (task) {
    todos.push(task);
    localStorage.setItem("todos", JSON.stringify(todos));
    input.value = "";
    renderTodos();
  }
}

function deleteTodo(index) {
  todos.splice(index, 1);
  localStorage.setItem("todos", JSON.stringify(todos));
  renderTodos();
}

renderTodos();
```

---

## 🔬 Browser Dev Tools: Inspect Local Storage

1. Open your page
2. Press `F12` or `Right-click → Inspect`
3. Go to **Application tab → Local Storage / Session Storage**

---

## ✅ Summary Table

| Feature       | localStorage                | sessionStorage   |
| ------------- | --------------------------- | ---------------- |
| Life Span     | Forever (until cleared)     | Until tab closes |
| Storage Limit | \~5MB                       | \~5MB            |
| Syntax        | `.setItem()` / `.getItem()` | Same             |
| Use Cases     | Remember Me, Theme, Cart    | Temp data, tabs  |

---

## 💡 Real-world Use Cases

* Save login info
* Theme (dark/light mode)
* Shopping cart
* Draft autosave
* Game progress
* Language preference

---

## 🎯 YouTube Lecture Flow

1. What is web storage?
2. Difference between local and session storage
3. How to store/retrieve data
4. "Remember Me" form walkthrough
5. Mini To-Do App walkthrough
6. DevTools inspection
7. Quiz + Challenge

---

## 🧪 Practice Tasks

1. Create a **Notes app**:

   * Add, edit, delete notes
   * Store them in localStorage
2. Build a **shopping cart system**:

   * Store selected items using localStorage
3. Implement **theme switcher** (light/dark)

---

## 📚 Homework

✅ Create a **quiz app** that remembers the user's score
✅ Store form data (name, email, feedback) in localStorage
✅ Bonus: Build a "recently visited pages" history system using sessionStorage

---

## 🧠 Chapter Recap

| Concept          | Summary                  |
| ---------------- | ------------------------ |
| localStorage     | Save data persistently   |
| sessionStorage   | Save data for a session  |
| JSON.stringify() | Convert object to string |
| JSON.parse()     | Convert string to object |
| Projects         | Login form, To-Do app    |

---

## 🔜 Next Chapter:

**Chapter 22 – JavaScript Date & Time Handling**

> Learn how to work with timestamps, real-time clocks, countdowns, and even schedule notifications with JavaScript's Date object!

---

Would you like to proceed to **Chapter 22: JavaScript Date & Time**?
