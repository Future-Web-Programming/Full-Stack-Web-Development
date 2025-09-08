Perfect! 🔥 In **Chapter 75**, we’ll take your Firebase app to the next level by adding **file upload capabilities** using **Firebase Storage** — a critical feature in most modern web apps (e.g., uploading profile pictures, documents, posts, etc.).

---

# 🟩 Chapter 75: Firebase Storage – Upload & Display Images

> 📦 *Learn how to let users upload, store, and display images securely in the cloud using Firebase Storage.*

---

## 📚 What You’ll Learn

| Feature                           | ✅ |
| --------------------------------- | - |
| Firebase Storage Setup            | ✅ |
| Upload image from form/input      | ✅ |
| Store file with user UID          | ✅ |
| Get public image URL              | ✅ |
| Show image on profile/dashboard   | ✅ |
| Secure access using Storage Rules | ✅ |

---

## 🔧 Prerequisites

* Firebase project already set up ✅
* Firebase Auth & Firestore working ✅
* Firebase Storage enabled ✅

---

## 🔥 Step-by-Step Guide

---

### 🔹 Step 1: Enable Firebase Storage

1. Go to [Firebase Console](https://console.firebase.google.com)
2. Choose your project → **Build → Storage**
3. Click **"Get Started"**
4. Select default rules for now (we'll update later)

---

### 🔹 Step 2: Add Firebase Storage SDK

Update `firebase.js`:

```js
import { getStorage } from "https://www.gstatic.com/firebasejs/10.12.0/firebase-storage.js";

export const storage = getStorage(app);
```

---

### 🔹 Step 3: Create Image Upload Form (HTML)

```html
<input type="file" id="fileInput" accept="image/*" />
<button onclick="uploadImage()">Upload Image</button>
<img id="profileImage" width="200" />
```

---

### 🔹 Step 4: Upload File to Firebase Storage

```js
import {
  ref,
  uploadBytes,
  getDownloadURL
} from "https://www.gstatic.com/firebasejs/10.12.0/firebase-storage.js";
import { storage } from "./firebase.js";

async function uploadImage() {
  const fileInput = document.getElementById('fileInput');
  const file = fileInput.files[0];
  const uid = auth.currentUser.uid;

  if (!file) return alert("No file selected!");

  const storageRef = ref(storage, `users/${uid}/profile.jpg`);

  await uploadBytes(storageRef, file);
  const imageUrl = await getDownloadURL(storageRef);

  document.getElementById('profileImage').src = imageUrl;

  alert("Image uploaded successfully!");
}
```

✅ This saves the image to:
`gs://your-bucket/users/{uid}/profile.jpg`

---

### 🔹 Step 5: Show Image Later (e.g. Dashboard)

```js
const storageRef = ref(storage, `users/${auth.currentUser.uid}/profile.jpg`);
const imageUrl = await getDownloadURL(storageRef);
document.getElementById("profileImage").src = imageUrl;
```

---

### 🔒 Step 6: Secure Your Storage Access

Go to **Storage > Rules** and update:

```plaintext
rules_version = '2';
service firebase.storage {
  match /b/{bucket}/o {
    match /users/{userId}/{allPaths=**} {
      allow read, write: if request.auth != null && request.auth.uid == userId;
    }
  }
}
```

✅ This ensures each user can only access their own files.

---

## 💡 Optional: Save Image URL to Firestore

If you want to show image on multiple pages or apps:

```js
import { doc, updateDoc } from "https://www.gstatic.com/firebasejs/10.12.0/firebase-firestore.js";
import { db } from "./firebase.js";

await updateDoc(doc(db, "users", auth.currentUser.uid), {
  profileImage: imageUrl
});
```

---

## 🧠 Student Task

* ✅ Upload multiple images
* ✅ Show uploaded gallery (extra project)
* ✅ Add progress bar using `uploadBytesResumable()`
* ✅ Use image preview before upload

---

## 💻 Practice Platforms

* [JSFiddle + Firebase](https://jsfiddle.net)
* [Replit](https://replit.com)
* [CodeSandbox](https://codesandbox.io)

---

## ✅ Summary

| Skill                    | Status |
| ------------------------ | ------ |
| Enable Firebase Storage  | ✅      |
| Upload file to Storage   | ✅      |
| Get public file URL      | ✅      |
| Display image in browser | ✅      |
| Set up secure rules      | ✅      |

---

## 🎯 Real-Life Use Cases

* Profile pictures
* File submissions
* Post image uploads
* Blog banners
* E-commerce product images

---

## 🚀 Coming Up Next: Chapter 76

> **Firebase Project: Real-Time Chat App Using Firestore & Storage**

Would you like to move to 👉 **Chapter 76: Firebase Chat App with Realtime Messaging + Image Support**?
