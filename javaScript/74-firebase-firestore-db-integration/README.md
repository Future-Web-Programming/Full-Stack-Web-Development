Awesome! 🔥 You're now entering the **Realtime Web App Zone** — let’s learn how to use **Firebase Firestore** to store and retrieve data like a professional.

---

# 🟩 Chapter 74: **Firebase Firestore – Realtime Database Integration**

> 🔥 *This chapter teaches you how to connect your web app with Firebase Firestore to store, read, update, and delete user data in real time.*

---

## 📦 What is Firestore?

Firestore is a cloud-based **NoSQL database** by Firebase. It is:

* ⚡ Realtime
* 🌍 Scalable
* 🔐 Secure with Rules
* ☁️ Perfect for web/mobile apps

---

## 📚 What You'll Learn

| Feature                        | Covered ✅ |
| ------------------------------ | --------- |
| Setup Firestore in your app    | ✅         |
| Add user profile to Firestore  | ✅         |
| Fetch user data (realtime)     | ✅         |
| Update user data               | ✅         |
| Delete document from Firestore | ✅         |

---

## 🔧 Tools & Prerequisites

* Firebase project (already created in Ch. 73)
* Enabled **Firestore Database**
* Basic HTML/CSS/JS
* Firebase SDKs (modular)

---

## 🔥 Step-by-Step Implementation

---

### 🔹 Step 1: Enable Firestore

1. Go to [Firebase Console](https://console.firebase.google.com)
2. Select your project → **Build → Firestore Database**
3. Click **Create Database** → Start in test mode (for dev only)
4. Choose the location → Click **Enable**

---

### 🔹 Step 2: Setup Firestore SDK

Update your `firebase.js`:

```js
// firebase.js
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.0/firebase-app.js";
import { getAuth } from "https://www.gstatic.com/firebasejs/10.12.0/firebase-auth.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/10.12.0/firebase-firestore.js";

const firebaseConfig = {
  apiKey: "YOUR_API_KEY",
  authDomain: "YOUR_PROJECT.firebaseapp.com",
  projectId: "YOUR_PROJECT_ID",
  appId: "YOUR_APP_ID"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
```

---

### 🔹 Step 3: Add User Profile on Signup

Update your signup logic (`app.js`):

```js
import {
  doc,
  setDoc
} from "https://www.gstatic.com/firebasejs/10.12.0/firebase-firestore.js";
import { db } from "./firebase.js";

// After createUserWithEmailAndPassword
await setDoc(doc(db, "users", user.uid), {
  email: user.email,
  createdAt: new Date().toISOString()
});
```

✅ This saves a new document in Firestore under `users/{uid}`.

---

### 🔹 Step 4: Fetch User Profile (Dashboard)

```js
import {
  doc,
  getDoc
} from "https://www.gstatic.com/firebasejs/10.12.0/firebase-firestore.js";

const docRef = doc(db, "users", auth.currentUser.uid);
const docSnap = await getDoc(docRef);

if (docSnap.exists()) {
  const data = docSnap.data();
  document.body.innerHTML += `<p>Welcome, ${data.email}</p>`;
} else {
  console.log("No such user data!");
}
```

---

### 🔹 Step 5: Realtime Updates

```js
import { onSnapshot } from "https://www.gstatic.com/firebasejs/10.12.0/firebase-firestore.js";

onSnapshot(doc(db, "users", auth.currentUser.uid), (docSnap) => {
  const data = docSnap.data();
  console.log("Live Data: ", data);
});
```

---

### 🔹 Step 6: Update Profile

```js
import { updateDoc } from "https://www.gstatic.com/firebasejs/10.12.0/firebase-firestore.js";

const userRef = doc(db, "users", auth.currentUser.uid);
await updateDoc(userRef, {
  fullName: "Future Developer",
  city: "Lahore"
});
```

---

### 🔹 Step 7: Delete User Data

```js
import { deleteDoc } from "https://www.gstatic.com/firebasejs/10.12.0/firebase-firestore.js";

await deleteDoc(doc(db, "users", auth.currentUser.uid));
```

---

## 🔐 Firestore Rules (Optional but Important)

In **Firebase Console → Firestore → Rules**:

```plaintext
rules_version = '2';
service cloud.firestore {
  match /databases/{database}/documents {
    match /users/{userId} {
      allow read, write: if request.auth != null && request.auth.uid == userId;
    }
  }
}
```

✅ This ensures users can only access their own data.

---

## 💡 Bonus Features to Try

| Feature                 | Concepts                   |
| ----------------------- | -------------------------- |
| Realtime User Chat      | Firestore subcollections   |
| Admin Panel             | Role-based rules           |
| Save user profile image | Firebase Storage           |
| Firestore Pagination    | `limit()` + `startAfter()` |

---

## ✅ Student Task

* Add more user fields (name, age, etc.)
* Show full profile on dashboard
* Build a profile editor
* Track last login date

---

## 💻 Practice Online

* [Replit + Firebase Firestore](https://replit.com)
* [StackBlitz](https://stackblitz.com)

---

## 🧠 Summary

You now know how to:

* ✅ Setup Firestore
* 🧾 Store structured documents
* 📥 Read & update data
* 🔄 Listen to realtime changes
* 🔐 Secure your data with rules

---

## 🚀 Coming Up: Chapter 75

> **Firebase Storage – Upload & Manage Profile Pictures (or files)**

You’ll let users upload and display files like avatars, using Firebase Storage.

---

Would you like to continue to 👉 **Chapter 75: Firebase Storage – Upload & Display Images**?
