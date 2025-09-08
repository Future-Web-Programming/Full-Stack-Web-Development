Awesome! In **Chapter 78**, we’ll build a **Rich Text Notes App** using **Firebase Firestore** and a rich text editor like **Quill.js**. This project will give students hands-on experience with content editing, saving formatted data, and rendering it in real-time — a powerful skill for building modern note-taking, blog, or document apps.

---

# 🟩 Chapter 78: Rich Text Notes App with Firebase Firestore & Quill.js

> 📝 *Create a powerful notes app with real-time database and rich formatting like bold, italic, underline, bullets, links, and more using Firebase + Quill.js.*

---

## 📚 What You’ll Learn

| Topic                                        | ✅ |
| -------------------------------------------- | - |
| Integrate Quill.js Rich Text Editor          | ✅ |
| Save formatted content to Firebase Firestore | ✅ |
| Render HTML notes safely                     | ✅ |
| Live updates (Firestore Realtime)            | ✅ |
| Add/Delete notes                             | ✅ |
| User-auth based note storage                 | ✅ |

---

## 🧱 Project Folder Structure

```
📁 firebase-notes-app/
├── index.html
├── styles.css
├── firebase.js
└── app.js
```

---

## 🔧 Prerequisites

1. Firebase Project (Firestore + Authentication)
2. Quill.js Library (CDN or local)
3. User Authentication setup (login)

---

## 💄 Setup Quill.js

Add this in your `<head>`:

```html
<!-- Quill.js CSS -->
<link href="https://cdn.quilljs.com/1.3.6/quill.snow.css" rel="stylesheet">
```

And before `</body>`:

```html
<!-- Quill.js Script -->
<script src="https://cdn.quilljs.com/1.3.6/quill.js"></script>
```

---

## 🧩 HTML Layout

```html
<h2>📝 Rich Text Notes App</h2>

<div id="editor-container"></div>
<button onclick="saveNote()">💾 Save Note</button>

<h3>Your Notes:</h3>
<div id="notes-list"></div>
```

```css
#editor-container {
  height: 200px;
  margin-bottom: 1rem;
}
.note-card {
  border: 1px solid #ccc;
  padding: 1rem;
  margin-bottom: 10px;
}
```

---

## 🚀 Initialize Quill Editor

```js
const quill = new Quill("#editor-container", {
  theme: "snow",
  placeholder: "Write your note here...",
});
```

---

## 🔌 Firestore Notes Structure

```
"notes" (collection)
 └── noteId (document)
       ├── content: "<p>Rich text</p>"
       ├── timestamp: serverTimestamp()
       └── userId: "uid"
```

---

## 🔹 Save Note (Create)

```js
import {
  addDoc, collection, serverTimestamp
} from "https://www.gstatic.com/firebasejs/10.12.0/firebase-firestore.js";

const notesRef = collection(db, "notes");

async function saveNote() {
  const content = quill.root.innerHTML;
  if (!content || content === "<p><br></p>") return alert("Note is empty!");

  await addDoc(notesRef, {
    content,
    userId: auth.currentUser.uid,
    timestamp: serverTimestamp()
  });

  quill.root.innerHTML = ""; // clear editor
}
```

---

## 🔹 Display Notes (Read)

```js
import {
  onSnapshot, query, where, orderBy
} from "https://www.gstatic.com/firebasejs/10.12.0/firebase-firestore.js";

onSnapshot(
  query(notesRef, where("userId", "==", auth.currentUser.uid), orderBy("timestamp", "desc")),
  (snapshot) => {
    const list = document.getElementById("notes-list");
    list.innerHTML = "";

    snapshot.forEach(doc => {
      const note = doc.data();
      const div = document.createElement("div");
      div.classList.add("note-card");
      div.innerHTML = `
        ${note.content}
        <br/>
        <button onclick="deleteNote('${doc.id}')">🗑️ Delete</button>
      `;
      list.appendChild(div);
    });
  }
);
```

---

## 🔹 Delete Note

```js
import {
  deleteDoc, doc
} from "https://www.gstatic.com/firebasejs/10.12.0/firebase-firestore.js";

function deleteNote(id) {
  if (confirm("Delete this note?")) {
    const noteDoc = doc(db, "notes", id);
    deleteDoc(noteDoc);
  }
}
```

---

## 🔐 Firestore Rules (Security)

```js
rules_version = '2';
service cloud.firestore {
  match /databases/{database}/documents {
    match /notes/{noteId} {
      allow read, write: if request.auth != null && request.auth.uid == resource.data.userId;
    }
  }
}
```

---

## ✨ Bonus Features (Optional)

| Feature                         | Try It? |
| ------------------------------- | ------- |
| Note title + content split      | ✅       |
| Rich Text Preview mode          | ✅       |
| Search/filter notes             | ✅       |
| Add tags or categories          | ✅       |
| Export notes to PDF/HTML        | ✅       |
| Share notes with read-only link | ✅       |

---

## 🧪 Test on:

* [CodeSandbox](https://codesandbox.io/)
* [Replit](https://replit.com/)
* Firebase Hosting

---

## ✅ Summary

| Feature                          | Covered |
| -------------------------------- | ------- |
| Rich Text Editor                 | ✅       |
| Save formatted HTML to Firestore | ✅       |
| Realtime Read & Delete           | ✅       |
| Authenticated Note Access        | ✅       |
| Project-based Skill Building     | ✅       |

---

## 🔜 Coming Up Next: Chapter 79

> **💬 Build a Firebase Realtime Chat App (One-to-One Messaging)**

Ready to move into **real-time chatting with Firebase**?
Shall we proceed to **Chapter 79**?
