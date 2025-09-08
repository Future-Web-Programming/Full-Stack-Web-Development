Perfect! In **Chapter 77**, we’ll build a **Realtime To-Do App** using **Firebase Firestore**, where users can **Create, Read, Update, and Delete (CRUD)** tasks. This is one of the best beginner-friendly yet practical projects that teaches how to manage dynamic data with a realtime backend.

---

# 🟩 Chapter 77: Build a Realtime To-Do App with Firebase Firestore (CRUD)

> ✅ *Learn CRUD operations with real-time updates using Firebase Firestore. Perfect for managing tasks, notes, or reminders!*

---

## 📚 What You’ll Learn

| Skill                                        | ✅ |
| -------------------------------------------- | - |
| Add tasks to Firestore                       | ✅ |
| Display tasks in realtime                    | ✅ |
| Update tasks dynamically                     | ✅ |
| Delete tasks with confirmation               | ✅ |
| Use Firebase Authentication (logged-in only) | ✅ |

---

## 🧱 Project Folder Structure

```
📁 firebase-todo-app/
├── index.html
├── styles.css
├── firebase.js
└── app.js
```

---

## 🔧 Prerequisites

1. Firebase project with:

   * Firestore Database enabled 🔥
   * Authentication enabled 🔐
2. User should be logged in (handled in earlier chapters ✅)

---

## 🧩 HTML Layout

```html
<div id="todoApp">
  <h2>📋 My Realtime To-Do App</h2>
  <input type="text" id="taskInput" placeholder="Enter task..." />
  <button onclick="addTask()">➕ Add</button>
  
  <ul id="taskList"></ul>
</div>
```

---

## 🔌 Firebase Firestore Structure

```
"todos" (collection)
  └── todoId (document)
        ├── text: "Learn JS"
        ├── userId: "abc123"
        └── timestamp: Date
```

---

## 🔹 JavaScript: Add Task (Create)

```js
import {
  addDoc, collection, serverTimestamp
} from "https://www.gstatic.com/firebasejs/10.12.0/firebase-firestore.js";

const todoRef = collection(db, "todos");

async function addTask() {
  const taskInput = document.getElementById("taskInput");
  const text = taskInput.value.trim();
  if (!text) return alert("Task can't be empty!");

  await addDoc(todoRef, {
    text,
    userId: auth.currentUser.uid,
    timestamp: serverTimestamp()
  });

  taskInput.value = "";
}
```

---

## 🔹 JavaScript: Read Tasks (Realtime)

```js
import {
  onSnapshot, query, where, orderBy
} from "https://www.gstatic.com/firebasejs/10.12.0/firebase-firestore.js";

onSnapshot(
  query(todoRef, where("userId", "==", auth.currentUser.uid), orderBy("timestamp")),
  (snapshot) => {
    const taskList = document.getElementById("taskList");
    taskList.innerHTML = "";

    snapshot.forEach(doc => {
      const data = doc.data();
      const li = document.createElement("li");
      li.innerHTML = `
        ${data.text}
        <button onclick="editTask('${doc.id}', '${data.text}')">✏️</button>
        <button onclick="deleteTask('${doc.id}')">🗑️</button>
      `;
      taskList.appendChild(li);
    });
  }
);
```

---

## 🔹 JavaScript: Edit Task (Update)

```js
import {
  updateDoc, doc
} from "https://www.gstatic.com/firebasejs/10.12.0/firebase-firestore.js";

function editTask(id, oldText) {
  const newText = prompt("Edit your task:", oldText);
  if (newText) {
    const taskDoc = doc(db, "todos", id);
    updateDoc(taskDoc, { text: newText });
  }
}
```

---

## 🔹 JavaScript: Delete Task

```js
import {
  deleteDoc, doc
} from "https://www.gstatic.com/firebasejs/10.12.0/firebase-firestore.js";

function deleteTask(id) {
  if (confirm("Are you sure you want to delete this task?")) {
    const taskDoc = doc(db, "todos", id);
    deleteDoc(taskDoc);
  }
}
```

---

## 🔒 Firestore Rules

```js
rules_version = '2';
service cloud.firestore {
  match /databases/{database}/documents {
    
    match /todos/{todoId} {
      allow read, write: if request.auth != null && request.auth.uid == resource.data.userId;
    }

  }
}
```

---

## 💡 Bonus Features (Practice)

| Feature                        | ✅ |
| ------------------------------ | - |
| Mark tasks as complete         | ✅ |
| Add due dates                  | ✅ |
| Sort tasks (by date, alphabet) | ✅ |
| Filter: completed vs. pending  | ✅ |
| Drag-and-drop sorting (HTML5)  | ✅ |
| Task priority colors (CSS)     | ✅ |

---

## 🧪 Test It On

* [Replit](https://replit.com/)
* [CodeSandbox](https://codesandbox.io/)
* Local + Firebase Hosting

---

## ✅ Summary

| Concept                         | Status |
| ------------------------------- | ------ |
| Realtime Read from Firestore    | ✅      |
| Add / Update / Delete documents | ✅      |
| Firestore Rules & Security      | ✅      |
| Realtime UI Rendering           | ✅      |
| User-based task filtering       | ✅      |

---

## 🚀 Coming Up Next: Chapter 78

> **Build a Notes App with Rich Text Editing and Firebase Firestore**

Shall we continue with 👉 **Chapter 78: Firebase Notes App with Rich Text Editing (Quill.js or ContentEditable)**?
