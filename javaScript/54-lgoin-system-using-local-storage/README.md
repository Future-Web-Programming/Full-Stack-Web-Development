Awesome! Let's begin **Chapter 54**, where we combine everything students have learned so far — **forms**, **validation**, and now **Local Storage** — to build a **real-world signup/login system** with **persistent data**.

---

# 🟩 Chapter 54: Signup/Login System Using JavaScript & Local Storage

🎯 *Learn how to store and retrieve user data in the browser using Local Storage — no backend required!*

---

## 🔑 Learning Objectives

By the end of this chapter, students will:

* Understand how **Local Storage** works in browsers
* Save form data (username/email/password) persistently
* Build a **Signup/Login form** with JavaScript
* Validate and match login credentials
* Use `JSON.stringify()` and `JSON.parse()`

---

## 📦 What is Local Storage?

Local Storage allows web apps to store **key-value pairs** in a user's browser with no expiration date.

```js
// Save
localStorage.setItem("key", "value");

// Read
let value = localStorage.getItem("key");

// Remove
localStorage.removeItem("key");

// Clear all
localStorage.clear();
```

✅ Stores strings only
✅ Persistent across tabs/sessions
❌ Not secure (don't store real passwords!)

---

## 🛠️ Project: Signup/Login App (Without Backend)

### 🧩 HTML Structure

```html
<h2>Signup</h2>
<form id="signupForm">
  <input type="text" id="username" placeholder="Username" required />
  <input type="email" id="email" placeholder="Email" required />
  <input type="password" id="password" placeholder="Password" required />
  <button type="submit">Sign Up</button>
  <p id="signupMessage"></p>
</form>

<hr>

<h2>Login</h2>
<form id="loginForm">
  <input type="email" id="loginEmail" placeholder="Email" required />
  <input type="password" id="loginPassword" placeholder="Password" required />
  <button type="submit">Login</button>
  <p id="loginMessage"></p>
</form>
```

---

### 🧠 JavaScript Logic

```js
// Signup
document.getElementById("signupForm").addEventListener("submit", function (e) {
  e.preventDefault();

  let username = document.getElementById("username").value.trim();
  let email = document.getElementById("email").value.trim();
  let password = document.getElementById("password").value;

  let users = JSON.parse(localStorage.getItem("users")) || [];

  let userExists = users.find(user => user.email === email);

  if (userExists) {
    document.getElementById("signupMessage").textContent = "Email already exists!";
  } else {
    users.push({ username, email, password });
    localStorage.setItem("users", JSON.stringify(users));
    document.getElementById("signupMessage").textContent = "Signup successful!";
    this.reset();
  }
});

// Login
document.getElementById("loginForm").addEventListener("submit", function (e) {
  e.preventDefault();

  let email = document.getElementById("loginEmail").value.trim();
  let password = document.getElementById("loginPassword").value;

  let users = JSON.parse(localStorage.getItem("users")) || [];

  let found = users.find(user => user.email === email && user.password === password);

  if (found) {
    document.getElementById("loginMessage").textContent = `Welcome, ${found.username}!`;
  } else {
    document.getElementById("loginMessage").textContent = "Invalid email or password!";
  }
});
```

---

## 🔐 Important Notes

* ❗ **Never store real passwords in Local Storage**
* This is only for **practice/demo purposes**
* For real apps, always use a **backend + hashing**

---

## 💡 Tip: View Data in Console

```js
console.log(localStorage.getItem("users"));
```

---

## 🧪 Try This: Auto-Login Message

```js
window.addEventListener("load", () => {
  const users = JSON.parse(localStorage.getItem("users"));
  if (users && users.length > 0) {
    console.log("Registered Users:", users);
  }
});
```

---

## 💻 Practice Projects

| Project Idea           | Skills Practiced              |
| ---------------------- | ----------------------------- |
| Contact Form with Save | Form input + Local Storage    |
| Notes App              | Multiple entries, delete/edit |
| Task Manager           | CRUD with browser memory      |
| Budget Tracker         | Persistent records            |

---

## 🌐 Try It Online

* [CodePen](https://codepen.io)
* [JSFiddle](https://jsfiddle.net)
* [PlayCode](https://playcode.io)

---

## 🧠 Recap

✅ Save and retrieve data with Local Storage
✅ Use `JSON.stringify()` to store arrays/objects
✅ Form validation with conditionals
✅ Build a real-life Signup/Login system in pure JS

---

## 🔮 What's Next?

In **Chapter 55**, we’ll unlock another power move:

> **"Building a To-Do List App with Add, Edit, Delete, and Local Storage"** – an interactive project to manage tasks like a real productivity app.

Would you like to continue with **Chapter 55** now?
