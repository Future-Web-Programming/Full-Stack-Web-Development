Awesome! 🔐 Let’s take authentication to the next level.

---

# 🟩 Chapter 72: **Advanced Auth System Using `SessionStorage` + Role-Based Access**

> 🎯 *In this chapter, we’ll build a session-based login system with role-based access control (Admin vs. User), which clears on browser close — similar to modern web apps.*

---

## 🔍 Why Session-Based Auth?

Unlike `localStorage`, which keeps data even after the browser is closed, `sessionStorage`:

* 🔐 Stores data only for the duration of the browser session
* 💨 Clears automatically when the tab or browser is closed
* ✅ Useful for temporary or sensitive sessions like dashboards, CMS panels, admin-only tools

---

## 📚 Concepts Covered

| Topic                         | Covered? |
| ----------------------------- | -------- |
| `sessionStorage`              | ✅        |
| JSON parse/stringify          | ✅        |
| Role-based login (Admin/User) | ✅        |
| Logout on browser close       | ✅        |
| Dashboard access control      | ✅        |

---

## 🏗️ Project: Admin/User Login with Role-Based Dashboard

---

### 📁 Folder Structure

```
/project
  ├── index.html         (Login Page)
  ├── dashboard.html     (Protected Dashboard)
  ├── app.js             (Login Logic)
  ├── dashboard.js       (Access Control Logic)
  └── style.css
```

---

## ✅ Step-by-Step Implementation

---

### 🧾 Step 1: Create Fake Users with Roles

```js
// app.js
const users = [
  {
    email: "admin@example.com",
    password: "admin123",
    role: "admin",
  },
  {
    email: "user@example.com",
    password: "user123",
    role: "user",
  }
];
```

---

### 🧪 Step 2: Create Login Form (index.html)

```html
<form id="loginForm">
  <input type="email" id="email" placeholder="Email" required />
  <input type="password" id="password" placeholder="Password" required />
  <button type="submit">Login</button>
</form>
<p id="errorMsg"></p>
```

---

### 🧠 Step 3: Handle Login Logic with sessionStorage

```js
document.getElementById("loginForm").addEventListener("submit", function (e) {
  e.preventDefault();

  const email = document.getElementById("email").value.trim();
  const password = document.getElementById("password").value.trim();

  const user = users.find(
    (u) => u.email === email && u.password === password
  );

  if (user) {
    // Store session data
    sessionStorage.setItem("currentUser", JSON.stringify(user));
    window.location.href = "dashboard.html";
  } else {
    document.getElementById("errorMsg").innerText = "Invalid credentials.";
  }
});
```

---

### 🔐 Step 4: Create Protected Dashboard (dashboard.html)

```html
<h1>Dashboard</h1>
<div id="userDetails"></div>
<button onclick="logout()">Logout</button>

<script src="dashboard.js"></script>
```

---

### 🧠 Step 5: Restrict Access by Role (dashboard.js)

```js
const currentUser = JSON.parse(sessionStorage.getItem("currentUser"));

if (!currentUser) {
  alert("You must login first!");
  window.location.href = "index.html";
} else {
  document.getElementById("userDetails").innerText =
    `Welcome, ${currentUser.email} (${currentUser.role})`;

  // Role-based behavior
  if (currentUser.role === "admin") {
    document.body.style.background = "#d1e7dd";
  } else {
    document.body.style.background = "#f8d7da";
  }
}

function logout() {
  sessionStorage.removeItem("currentUser");
  window.location.href = "index.html";
}
```

---

## 🔁 What Happens on Browser Close?

* All session data is wiped automatically
* Users will have to login again to access dashboard
* More secure than `localStorage`

---

## 🧠 Difference Between Storage Options

| Storage Type     | Lifetime                 | Use Case                  |
| ---------------- | ------------------------ | ------------------------- |
| `localStorage`   | Permanent                | Remember users, dark mode |
| `sessionStorage` | Until tab/browser closed | Auth sessions, forms      |
| Cookies          | Configurable (expires)   | Server communication      |

---

## 💼 Real World Use Case

This structure is the **base of admin dashboards** like:

* CMS panels
* Admin portals
* Role-restricted content

---

## ✅ Challenge Task for Students

Build a **multi-role** system:

* Admin: Can see extra options (e.g. user management)
* User: Can only view personal data
* Add a new fake user and test login/logout flows

---

## 👨‍💻 Online Practice Links

* [JSFiddle](https://jsfiddle.net/)
* [CodePen](https://codepen.io/)
* [Replit](https://replit.com/)
* [StackBlitz](https://stackblitz.com/)

---

## 🧠 Extra Tip (Advanced)

You can enhance this by encrypting the session data or using Firebase Auth (coming up soon).

---

## 🔮 Coming Up Next: Chapter 73

> In Chapter 73, we’ll use a **real backend authentication** system with **Firebase Auth** for production-level apps — including signup, login, password reset, and email verification.

---

Would you like to continue with
👉 **Chapter 73: Firebase Authentication - Realtime Auth System**?
