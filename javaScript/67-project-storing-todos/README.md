Perfect! 🌐 In **Chapter 67**, we'll upgrade our Todo app by integrating **Firebase Firestore** so each user's todos are stored **online in real-time**, accessible from any device after login.

---

# 🟩 Chapter 67: **Storing Todos in Firebase Firestore**

> 🎯 *Learn how to use Firebase Firestore to store user-specific todos with real-time sync and persistent cloud storage.*

---

## 🎯 Learning Objectives

By the end of this chapter, students will:

* Connect Firebase Firestore to a JavaScript app
* Save user todos to Firestore
* Retrieve todos in real-time based on authenticated user
* Delete todos from Firestore
* Understand basic Firestore document structure

---

## 🔧 Firebase Setup Recap

1. Go to [Firebase Console](https://console.firebase.google.com/)
2. Select your project
3. Click **"Firestore Database" → Create Database**
4. Choose **"Start in test mode"**
5. Add a collection named `todos`

---

## 📁 Folder Structure Update

```
/firebase-todo-firestore/
├── index.html
├── style.css
├── app.js
├── firebase-config.js
```

---

## 🔌 Updated firebase-config.js

```js
// firebase-config.js
const firebaseConfig = {
  apiKey: "YOUR_API_KEY",
  authDomain: "your-app.firebaseapp.com",
  projectId: "your-app-id",
  appId: "YOUR_APP_ID",
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);
const auth = firebase.auth();
const db = firebase.firestore();
```

> Make sure to add Firestore SDK in your HTML too:

```html
<script src="https://www.gstatic.com/firebasejs/10.7.1/firebase-firestore.js"></script>
```

---

## 🧩 index.html (Same as Chapter 66)

No major changes — just reuse the structure:

* Auth section
* App section with input and todo list

---

## 🧠 app.js — Updated for Firestore Integration

```js
// Listen for Auth changes
auth.onAuthStateChanged((user) => {
  if (user) {
    document.getElementById("auth-section").style.display = "none";
    document.getElementById("app-section").style.display = "block";
    loadTodos(user.uid);
  } else {
    document.getElementById("auth-section").style.display = "block";
    document.getElementById("app-section").style.display = "none";
  }
});

// Register
function signUp() {
  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;
  auth.createUserWithEmailAndPassword(email, password)
    .then(() => alert("Registered Successfully"))
    .catch((err) => alert(err.message));
}

// Login
function login() {
  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;
  auth.signInWithEmailAndPassword(email, password)
    .then(() => alert("Login Successful"))
    .catch((err) => alert(err.message));
}

// Logout
function logout() {
  auth.signOut().then(() => alert("Logged Out"));
}
```

---

## ✅ Add Todo to Firestore

```js
function addTodo() {
  const todoText = document.getElementById("todoInput").value.trim();
  const user = auth.currentUser;

  if (!todoText || !user) return;

  db.collection("todos").add({
    text: todoText,
    uid: user.uid,
    createdAt: firebase.firestore.FieldValue.serverTimestamp()
  }).then(() => {
    document.getElementById("todoInput").value = "";
  });
}
```

---

## 📥 Load Todos from Firestore

```js
function loadTodos(uid) {
  const list = document.getElementById("todoList");
  list.innerHTML = "";

  db.collection("todos")
    .where("uid", "==", uid)
    .orderBy("createdAt")
    .onSnapshot((snapshot) => {
      list.innerHTML = ""; // Clear on refresh
      snapshot.forEach((doc) => {
        const todo = doc.data();
        const li = document.createElement("li");
        li.textContent = todo.text;

        const delBtn = document.createElement("button");
        delBtn.textContent = "❌";
        delBtn.onclick = () => deleteTodo(doc.id);

        li.appendChild(delBtn);
        list.appendChild(li);
      });
    });
}
```

---

## ❌ Delete Todo

```js
function deleteTodo(id) {
  db.collection("todos").doc(id).delete();
}
```

---

## 🔒 Firestore Rules (Recommended)

```js
rules_version = '2';
service cloud.firestore {
  match /databases/{database}/documents {
    match /todos/{todoId} {
      allow read, write: if request.auth != null && request.auth.uid == resource.data.uid;
    }
  }
}
```

---

## ✅ Final Flow Summary

| Feature         | Status        |
| --------------- | ------------- |
| User Auth       | ✅ Done        |
| Add Todo        | ✅ Cloud-based |
| View Todo       | ✅ Realtime    |
| Delete Todo     | ✅ Secure      |
| Data by User    | ✅ Isolated    |
| Access Anywhere | ✅ Cloud Sync  |

---

## 💡 Online Testing Tools

* 🔗 [Replit](https://replit.com/)
* 🔗 [Firebase Console](https://console.firebase.google.com/)
* 🔗 [CodePen](https://codepen.io/) *(Not ideal for auth apps but usable)*

---

## 📦 Bonus Challenge

> 🔐 Add Edit Todo feature
> ⏳ Add timestamps for created/updated
> 🎨 Tag todos as "complete"

---

## 🔮 Up Next: Chapter 68 Preview

In Chapter 68, we’ll **deploy the app online** (Firebase Hosting, Netlify, or GitHub Pages) so students can **launch real-world apps** live — just like professional developers.

---

Would you like to continue with **Chapter 68: Deploying JavaScript Projects Online**?
