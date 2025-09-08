Perfect! 🌟 In **Chapter 66**, we’ll combine everything students have learned about JavaScript, DOM, Firebase Authentication, and real-time UI updates — and **build a complete protected Todo App** where only logged-in users can create/manage their own todos.

---

# 🟩 Chapter 66: **Firebase Todo App with Auth Protection**

> 🎯 *Learn how to build a real-world Todo application using Firebase Authentication, where users must sign in to manage their personal task list.*

---

## 🎯 Learning Objectives

By the end of this chapter, students will:

* Structure a Todo App that only works after login
* Add and display todos in real-time
* Save todos in the browser (we'll use `localStorage` now and Firebase Database later)
* Secure app functionality based on user authentication
* Understand the separation of UI for authenticated vs. unauthenticated users

---

## 🛠️ Project Setup Overview

We'll build this using:

* ✅ HTML, CSS, JS (vanilla)
* ✅ Firebase Authentication (email/password)
* ✅ `localStorage` for data (later chapters will upgrade to Firestore)

---

## 📁 Folder Structure

```
/firebase-todo-app/
├── index.html
├── style.css
├── app.js
└── firebase-config.js
```

---

## 🔌 firebase-config.js

```js
// firebase-config.js
const firebaseConfig = {
  apiKey: "YOUR_API_KEY",
  authDomain: "your-app.firebaseapp.com",
  projectId: "your-app",
  appId: "YOUR_APP_ID",
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);
const auth = firebase.auth();
```

---

## 🧩 index.html (Basic Structure)

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <title>Firebase Todo App</title>
  <link rel="stylesheet" href="style.css" />
  <script src="https://www.gstatic.com/firebasejs/10.7.1/firebase-app.js"></script>
  <script src="https://www.gstatic.com/firebasejs/10.7.1/firebase-auth.js"></script>
  <script defer src="firebase-config.js"></script>
  <script defer src="app.js"></script>
</head>
<body>
  <div id="auth-section">
    <h2>Login / Register</h2>
    <input type="email" id="email" placeholder="Email" />
    <input type="password" id="password" placeholder="Password" />
    <button onclick="signUp()">Register</button>
    <button onclick="login()">Login</button>
  </div>

  <div id="app-section" style="display: none;">
    <h2>My Todo List</h2>
    <button onclick="logout()">Logout</button>
    <input type="text" id="todoInput" placeholder="Enter your task" />
    <button onclick="addTodo()">Add</button>
    <ul id="todoList"></ul>
  </div>
</body>
</html>
```

---

## 🧠 app.js (Authentication + App Logic)

```js
const authSection = document.getElementById("auth-section");
const appSection = document.getElementById("app-section");

auth.onAuthStateChanged((user) => {
  if (user) {
    authSection.style.display = "none";
    appSection.style.display = "block";
    loadTodos(user.uid);
  } else {
    authSection.style.display = "block";
    appSection.style.display = "none";
  }
});

// Register
function signUp() {
  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;

  auth.createUserWithEmailAndPassword(email, password)
    .then(() => alert("Registered Successfully!"))
    .catch((e) => alert(e.message));
}

// Login
function login() {
  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;

  auth.signInWithEmailAndPassword(email, password)
    .then(() => alert("Login Successful!"))
    .catch((e) => alert(e.message));
}

// Logout
function logout() {
  auth.signOut().then(() => alert("Logged out"));
}
```

---

## ✅ Todo App Logic (Local Storage Per User)

```js
function getUserKey() {
  return `todos_${auth.currentUser.uid}`;
}

function addTodo() {
  const input = document.getElementById("todoInput");
  const todo = input.value.trim();

  if (todo === "") return;

  const key = getUserKey();
  const todos = JSON.parse(localStorage.getItem(key)) || [];
  todos.push(todo);
  localStorage.setItem(key, JSON.stringify(todos));
  input.value = "";
  loadTodos(auth.currentUser.uid);
}

function loadTodos(uid) {
  const key = `todos_${uid}`;
  const todos = JSON.parse(localStorage.getItem(key)) || [];
  const list = document.getElementById("todoList");

  list.innerHTML = "";
  todos.forEach((todo, index) => {
    const li = document.createElement("li");
    li.textContent = todo;

    const del = document.createElement("button");
    del.textContent = "❌";
    del.onclick = () => deleteTodo(index, key);

    li.appendChild(del);
    list.appendChild(li);
  });
}

function deleteTodo(index, key) {
  const todos = JSON.parse(localStorage.getItem(key));
  todos.splice(index, 1);
  localStorage.setItem(key, JSON.stringify(todos));
  loadTodos(auth.currentUser.uid);
}
```

---

## 🎨 style.css (Optional Styling)

```css
body {
  font-family: sans-serif;
  padding: 20px;
  max-width: 500px;
  margin: auto;
}

input, button {
  margin: 5px 0;
  padding: 8px;
  width: 100%;
}

li {
  display: flex;
  justify-content: space-between;
  margin: 5px 0;
  background: #f1f1f1;
  padding: 10px;
}
```

---

## 🧪 Test Online

| Tool                | Link                                                                       |
| ------------------- | -------------------------------------------------------------------------- |
| 🔗 Replit           | [https://replit.com](https://replit.com)                                   |
| 🔗 CodeSandbox      | [https://codesandbox.io](https://codesandbox.io)                           |
| 🔗 Firebase Console | [https://console.firebase.google.com](https://console.firebase.google.com) |

---

## ✅ Recap

✅ Firebase Auth + UI Toggle
✅ Protected Todo Creation
✅ Local storage-based user data
✅ Multiple user support
✅ Logout and dynamic UI

---

## 🔮 Up Next: Chapter 67 Preview

In the next chapter, we’ll store todos in **Firebase Firestore** so users can access their tasks **from anywhere and any device**, even after logout! ☁️

---

Would you like to continue with **Chapter 67: Firebase Firestore Integration for Todo App**?
