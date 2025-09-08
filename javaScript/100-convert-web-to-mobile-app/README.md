Awesome! Let's now explore how to **convert your web app into a mobile app** using Capacitor.js in:

---

# 📦 Chapter 100: Capacitor.js – Convert Web App to Mobile App

---

## 🎯 Learning Objectives

By the end of this chapter, you’ll be able to:

* Understand what Capacitor.js is and how it works
* Convert any HTML/CSS/JavaScript web app into a mobile app (Android/iOS)
* Access native features like Camera, Filesystem, Geolocation, etc.
* Run your existing web apps on Android phones

---

## 🚀 What is Capacitor.js?

> **Capacitor.js** is a cross-platform **native runtime** developed by **Ionic**, allowing you to run **web apps as native mobile apps** and access **native device APIs** using **JavaScript**.

### ✅ Key Features

| Feature                  | Description                                             |
| ------------------------ | ------------------------------------------------------- |
| Cross-Platform           | Run on Android, iOS, Web, Desktop                       |
| Use Existing Web App     | No need to rewrite – use your existing HTML/CSS/JS code |
| Native Plugin Support    | Use Camera, Filesystem, Notifications, etc.             |
| Works with any Framework | Works with Vanilla JS, React, Vue, Angular, etc.        |

---

## 🛠️ Prerequisites

* Node.js + npm installed
* Android Studio (for Android testing)
* Optional: VS Code

---

## 🧱 Step-by-Step: Convert Your Web App into Mobile App

---

### 1️⃣ Create a Folder for Your App

```bash
mkdir my-capacitor-app
cd my-capacitor-app
```

### 2️⃣ Create a Simple Web App

```bash
mkdir www
cd www
echo "<!DOCTYPE html><html><body><h1>Hello Mobile!</h1></body></html>" > index.html
cd ..
```

🗂 Folder structure:

```
my-capacitor-app/
├── www/
│   └── index.html
```

---

### 3️⃣ Initialize Capacitor

```bash
npm init -y
npm install @capacitor/core @capacitor/cli
npx cap init
```

You’ll be prompted:

* **App name**: MyCapacitorApp
* **App ID**: com.example.myapp
* **Web directory**: `www`

---

### 4️⃣ Add Android Platform

```bash
npx cap add android
```

✅ This creates an `android/` folder with a full Android project!

---

### 5️⃣ Open Android Project in Android Studio

```bash
npx cap open android
```

💡 Run the project on a virtual device or connect your physical Android phone via USB.

---

## 📱 Result:

🎉 You’ve turned your **web app into a native Android app**!

---

## 🧠 Bonus: Add Native Features

Install and use Capacitor plugins:

### Camera Example

```bash
npm install @capacitor/camera
npx cap sync
```

```js
import { Camera } from '@capacitor/camera';

const takePicture = async () => {
  const image = await Camera.getPhoto({
    quality: 90,
    allowEditing: false,
    resultType: 'base64',
  });
  console.log(image.base64String);
};
```

---

## 🔄 Rebuild Tip

Any time you **change the web app** (`www/index.html`, etc.):

```bash
npx cap copy
```

If native code/plugins are added/changed:

```bash
npx cap sync
```

---

## 📦 Capacitor vs Cordova vs React Native

| Feature        | Capacitor   | Cordova     | React Native   |
| -------------- | ----------- | ----------- | -------------- |
| Tech Stack     | HTML/CSS/JS | HTML/CSS/JS | JS + Native    |
| Native UI      | WebView     | WebView     | True Native    |
| Modern Support | ✅ Modern    | 🚫 Outdated | ✅ Native First |
| Learning Curve | Very Low    | Low         | Medium         |

---

## ✅ Mini Project: Web to Mobile

1. Take your existing **JavaScript To-Do App** or **Calculator Project**
2. Wrap it with Capacitor
3. Run it on your Android phone

---

## 🔗 Official Resources

* [Capacitor Docs](https://capacitorjs.com/docs)
* [Android Setup Guide](https://capacitorjs.com/docs/android)
* [Capacitor Plugins](https://capacitorjs.com/docs/apis)

---

## 🧠 Summary

| Topic                | Summary                             |
| -------------------- | ----------------------------------- |
| Capacitor.js         | Turns web apps into mobile apps     |
| Platform Support     | Android, iOS, Web                   |
| Folder Structure     | Keep `www/` for your frontend files |
| Native Plugin Access | Easy via JavaScript APIs            |
| Real Device Testing  | Done via Android Studio or USB      |

---

## ⏭️ Up Next:

➡️ **Chapter 101: PWA – Progressive Web App (Offline Web App Setup)**
Let’s make your web apps **installable**, **offline-ready**, and **mobile-native** without using any native wrapper!

Ready to start Chapter 101?
