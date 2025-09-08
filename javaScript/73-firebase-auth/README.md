Perfect! 🎉 Let’s now take your authentication system to the **next professional level** using **Firebase Authentication** — trusted by thousands of production-grade web and mobile apps.

---

# 🟩 Chapter 73: **Firebase Authentication - Realtime Auth System**

> 🎯 *In this chapter, you'll build a real-world login & signup system with email/password using Firebase Auth — including email verification and password reset!*

---

## 🔐 Why Firebase Auth?

Firebase Authentication is a **secure, scalable**, and **easy-to-integrate** solution provided by Google. It supports:

* ✅ Email/Password authentication
* 📱 Social logins (Google, Facebook, etc.)
* 🔐 Realtime auth state tracking
* 📩 Email verification & 🔁 password reset
* 🔄 Auth state persistence

---

## 📚 What You’ll Learn

| Topic                        | Covered |
| ---------------------------- | ------- |
| Firebase project setup       | ✅       |
| Enable email/password auth   | ✅       |
| Signup, Login, Logout        | ✅       |
| Auth state change listener   | ✅       |
| Email verification           | ✅       |
| Password reset               | ✅       |
| Realtime protected dashboard | ✅       |

---

## 🧱 Tools & Prerequisites

* Firebase Account: [https://firebase.google.com](https://firebase.google.com)
* Basic HTML/CSS/JS skills
* Internet connection
* Modern browser

---

## 🏗️ Project Structure

```
/firebase-auth-app
  ├── index.html          → Login form
  ├── signup.html         → Registration form
  ├── dashboard.html      → Protected page
  ├── forgot.html         → Password reset
  ├── app.js              → Auth logic
  ├── firebase.js         → Firebase config
  └── style.css
```

---

## 🔧 Step-by-Step Setup

---

### 🔹 Step 1: Setup Firebase Project

1. Go to [Firebase Console](https://console.firebase.google.com)
2. Click "Add project" → name it → disable analytics
3. After project is created:

   * Go to **Build → Authentication → Get Started**
   * Enable **Email/Password**

---

### 🔹 Step 2: Add Firebase SDK to Your HTML

Get your project’s config from:

`Project Settings → General → Web App → Firebase SDK config`

Paste it into `firebase.js`

```js
// firebase.js
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.0/firebase-app.js";
import { getAuth } from "https://www.gstatic.com/firebasejs/10.12.0/firebase-auth.js";

const firebaseConfig = {
  apiKey: "YOUR_API_KEY",
  authDomain: "YOUR_PROJECT.firebaseapp.com",
  projectId: "YOUR_PROJECT_ID",
  appId: "YOUR_APP_ID"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
```

---

### 🔹 Step 3: Signup Functionality (`signup.html`)

```html
<form id="signupForm">
  <input type="email" id="email" placeholder="Email" required />
  <input type="password" id="password" placeholder="Password" required />
  <button type="submit">Signup</button>
</form>
```

```js
// app.js (Signup)
import { createUserWithEmailAndPassword, sendEmailVerification } from "https://www.gstatic.com/firebasejs/10.12.0/firebase-auth.js";
import { auth } from "./firebase.js";

document.getElementById("signupForm").addEventListener("submit", async (e) => {
  e.preventDefault();
  const email = emailInput.value;
  const password = passwordInput.value;

  try {
    const userCred = await createUserWithEmailAndPassword(auth, email, password);
    await sendEmailVerification(userCred.user);
    alert("Signup successful! Verify your email.");
    window.location.href = "index.html";
  } catch (err) {
    alert("Signup failed: " + err.message);
  }
});
```

---

### 🔹 Step 4: Login (`index.html`)

```js
import { signInWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/10.12.0/firebase-auth.js";
import { auth } from "./firebase.js";

document.getElementById("loginForm").addEventListener("submit", async (e) => {
  e.preventDefault();

  try {
    const userCred = await signInWithEmailAndPassword(auth, email, password);
    if (!userCred.user.emailVerified) {
      alert("Please verify your email.");
      return;
    }
    alert("Login successful!");
    window.location.href = "dashboard.html";
  } catch (err) {
    alert("Login failed: " + err.message);
  }
});
```

---

### 🔹 Step 5: Realtime Auth State Check (`dashboard.html`)

```js
import { onAuthStateChanged, signOut } from "https://www.gstatic.com/firebasejs/10.12.0/firebase-auth.js";
import { auth } from "./firebase.js";

onAuthStateChanged(auth, (user) => {
  if (!user) {
    window.location.href = "index.html";
  } else {
    document.body.innerHTML += `<h2>Welcome ${user.email}</h2>`;
  }
});

function logout() {
  signOut(auth);
}
```

---

### 🔹 Step 6: Password Reset (`forgot.html`)

```js
import { sendPasswordResetEmail } from "https://www.gstatic.com/firebasejs/10.12.0/firebase-auth.js";
import { auth } from "./firebase.js";

document.getElementById("resetBtn").addEventListener("click", async () => {
  const email = document.getElementById("resetEmail").value;
  try {
    await sendPasswordResetEmail(auth, email);
    alert("Reset link sent to your email.");
  } catch (err) {
    alert("Reset failed: " + err.message);
  }
});
```

---

## 🔐 Optional: Persist Login (Until Manual Logout)

Firebase automatically persists sessions unless you explicitly call `signOut()` — great for dashboards.

---

## 💡 Bonus Features to Try

| Feature                 | Tools Needed             |
| ----------------------- | ------------------------ |
| Google Login            | `signInWithPopup()`      |
| Custom claims for roles | Firebase Admin SDK       |
| Firestore user profiles | Firestore DB             |
| Realtime chat system    | Firestore or Realtime DB |

---

## 💻 Practice Online

* [Replit + Firebase Auth](https://replit.com/)
* [Firebase Hosting](https://firebase.google.com/docs/hosting)

---

## 🧠 Student Task

* Add **"Remember me"** using session/local storage
* Restrict dashboard until email is verified
* Create a logout button
* Use Firestore to store additional user info

---

## 🎯 Summary

You now know how to:

* ✅ Integrate Firebase Auth
* 🔐 Secure your dashboard
* 🔁 Handle password reset & email verification
* 💻 Build real-world login systems

---

## 🔮 Coming Up: Chapter 74

> **Firebase Firestore – Realtime Database for User Data**

We'll store full user profiles in a database, fetch them in real time, and build user dashboards!

---

Would you like to continue with 👉 **Chapter 74: Firebase Firestore – Realtime Database Integration**?
