Awesome! In **Chapter 76**, we’ll build one of the **most in-demand real-world projects** — a **Realtime Chat Application** using **Firebase Firestore + Firebase Storage**. This is where students learn how to build scalable, production-ready messaging systems just like WhatsApp, Messenger, or Discord.

---

# 🟩 Chapter 76: Build a Realtime Chat App using Firebase Firestore & Storage

> 💬 *Learn to build a full-featured messaging app with user authentication, real-time message sync, and image sharing.*

---

## 📚 What You’ll Learn

| Feature                                  | ✅ |
| ---------------------------------------- | - |
| Firebase Firestore Realtime Sync         | ✅ |
| Send & receive messages instantly        | ✅ |
| Upload & share images (chat attachments) | ✅ |
| Show sender info & timestamps            | ✅ |
| Authentication-based chat flow           | ✅ |
| Scroll to latest message                 | ✅ |

---

## 🧱 Project Structure

```
📁 chat-app/
├── index.html
├── app.js
├── firebase.js
└── styles.css
```

---

## 🔧 Prerequisites

* Firebase Auth enabled
* Firestore Database enabled
* Firebase Storage enabled
* Users can login and register (done in earlier chapters ✅)

---

## 🔹 Step 1: HTML UI (Basic Chat Template)

```html
<div id="chatContainer">
  <div id="messages"></div>

  <input type="text" id="messageInput" placeholder="Type a message..." />
  <input type="file" id="imageInput" />
  <button onclick="sendMessage()">Send</button>
</div>
```

---

## 🔹 Step 2: Setup Firestore Chat Collection

**Structure:**

```js
"chats" (collection)
  └── messageId (document)
       ├── text: "Hello"
       ├── senderId: "userUID"
       ├── timestamp: Date
       └── imageUrl: "https://..." (optional)
```

---

## 🔹 Step 3: Realtime Message Listener

```js
import {
  collection,
  addDoc,
  serverTimestamp,
  onSnapshot,
  query,
  orderBy
} from "https://www.gstatic.com/firebasejs/10.12.0/firebase-firestore.js";

const chatRef = collection(db, "chats");

onSnapshot(query(chatRef, orderBy("timestamp")), (snapshot) => {
  const messagesDiv = document.getElementById("messages");
  messagesDiv.innerHTML = ""; // clear before re-rendering

  snapshot.forEach(doc => {
    const data = doc.data();
    const msgDiv = document.createElement("div");
    
    msgDiv.innerHTML = `
      <strong>${data.senderId}</strong>: 
      ${data.text || ""} 
      ${data.imageUrl ? `<img src="${data.imageUrl}" width="100"/>` : ""}
    `;
    messagesDiv.appendChild(msgDiv);
  });

  messagesDiv.scrollTop = messagesDiv.scrollHeight;
});
```

---

## 🔹 Step 4: Send Text + Image Message

```js
import {
  ref,
  uploadBytes,
  getDownloadURL
} from "https://www.gstatic.com/firebasejs/10.12.0/firebase-storage.js";

async function sendMessage() {
  const msgInput = document.getElementById("messageInput");
  const imageInput = document.getElementById("imageInput");

  const message = msgInput.value;
  const file = imageInput.files[0];

  let imageUrl = "";

  if (file) {
    const storageRef = ref(storage, `chatImages/${Date.now()}-${file.name}`);
    await uploadBytes(storageRef, file);
    imageUrl = await getDownloadURL(storageRef);
  }

  await addDoc(chatRef, {
    senderId: auth.currentUser.uid,
    text: message || "",
    imageUrl: imageUrl || "",
    timestamp: serverTimestamp()
  });

  msgInput.value = "";
  imageInput.value = null;
}
```

---

## 🔒 Step 5: Firestore & Storage Rules

```js
// Firestore rules
match /chats/{docId} {
  allow read, write: if request.auth != null;
}

// Storage rules
match /chatImages/{fileName} {
  allow read, write: if request.auth != null;
}
```

---

## 🧠 Student Practice Tasks

| Challenge                              | ✅ |
| -------------------------------------- | - |
| Add emoji support 😃                   | ✅ |
| Add username display                   | ✅ |
| Group messages by day                  | ✅ |
| Scroll to latest message automatically | ✅ |
| Add read receipts / typing indicator   | ✅ |
| Filter bad words using JS array        | ✅ |

---

## 💻 Test Your App On

* [Replit](https://replit.com)
* [CodeSandbox](https://codesandbox.io)
* [Firebase Hosting](https://firebase.google.com/docs/hosting)

---

## 🧪 Bonus Feature Ideas

* Group chat support
* One-to-one chat (with `chats/{roomId}/messages`)
* Notification on new message
* Auto-delete message after X mins (like Snapchat)
* Upload documents or videos

---

## ✅ Summary

| Skill                          | Status |
| ------------------------------ | ------ |
| Realtime chat using Firestore  | ✅      |
| File/image upload in messages  | ✅      |
| Display messages dynamically   | ✅      |
| Secure access with Firebase    | ✅      |
| Build WhatsApp-like UI (Bonus) | ✅      |

---

## 🚀 Coming Up Next: Chapter 77

> **Build a Realtime To-Do App With Firebase + Firestore**

Shall we continue with 👉 **Chapter 77: Realtime Todo App with CRUD operations using Firestore**?
