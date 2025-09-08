Great! Let’s move into **Mobile App Development** with:

---

# 📱 Chapter 99: What is React Native? Mobile App Basics

---

## 🎯 Learning Objectives

By the end of this chapter, you'll:

* Understand what **React Native** is and how it differs from React.js
* Learn how to set up a React Native development environment
* Build your **first mobile app** using React Native
* Explore React Native components and styling
* Understand how JavaScript powers real mobile apps (Android + iOS)

---

## 🚀 What is React Native?

> **React Native** is a **cross-platform framework** created by **Meta (Facebook)** that allows developers to **build native mobile apps** using **JavaScript** and **React**.

✅ **One codebase**, runs on both **iOS and Android**

✅ Uses **native components** (not web views like hybrid frameworks)

✅ Ideal for those who already know **JavaScript + React**

---

## 🧠 React vs React Native – What's the Difference?

| Feature    | React (Web)               | React Native (Mobile)                      |
| ---------- | ------------------------- | ------------------------------------------ |
| Platform   | Web browsers              | iOS + Android                              |
| DOM        | Uses HTML DOM             | Uses native mobile components              |
| Styling    | CSS                       | `StyleSheet.create()` (like inline styles) |
| Routing    | React Router              | React Navigation                           |
| Components | `<div>`, `<button>`, etc. | `<View>`, `<Text>`, `<Button>`             |

---

## 🛠️ React Native Setup Options

### 🟩 Beginner-Friendly: **Expo (Recommended)**

> No need to install Android Studio or Xcode initially

1. Install Expo CLI:

```bash
npm install -g expo-cli
```

2. Create your first project:

```bash
npx create-expo-app myFirstApp
cd myFirstApp
npm start
```

3. Install the **Expo Go** app on your phone (iOS or Android)
   Scan the QR code and run the app live!

---

### ⚙️ Pro-Level: **React Native CLI (Full Control)**

Requires installing Android Studio / Xcode (macOS only for iOS).

```bash
npx react-native init MyApp
cd MyApp
npx react-native run-android
```

---

## 📱 Your First React Native App (Expo)

```jsx
// App.js
import React, { useState } from 'react';
import { Text, View, Button, StyleSheet } from 'react-native';

export default function App() {
  const [count, setCount] = useState(0);

  return (
    <View style={styles.container}>
      <Text style={styles.text}>Count: {count}</Text>
      <Button title="Increase" onPress={() => setCount(count + 1)} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1, justifyContent: 'center', alignItems: 'center',
  },
  text: {
    fontSize: 24, marginBottom: 10,
  },
});
```

🧪 Try this app on [Snack (Web Playground for React Native)](https://snack.expo.dev/)

---

## 📦 Built-in Core Components

| React Native Component | Purpose                  |
| ---------------------- | ------------------------ |
| `<View>`               | Like a `<div>` container |
| `<Text>`               | Renders text             |
| `<Button>`             | Native button            |
| `<TextInput>`          | Input field              |
| `<Image>`              | Displays an image        |
| `<ScrollView>`         | Makes content scrollable |

---

## 🎨 Styling in React Native

React Native uses JavaScript styles (not traditional CSS).

```js
const styles = StyleSheet.create({
  box: {
    backgroundColor: 'blue',
    width: 100,
    height: 100,
  }
});
```

---

## 🔌 Navigation & Screens

Use `react-navigation` to move between screens:

```bash
npm install @react-navigation/native
```

You'll learn multi-screen apps in later chapters.

---

## 📱 Live Testing Options

| Method               | Platform                      | Tools Used               |
| -------------------- | ----------------------------- | ------------------------ |
| **Expo Go App**      | Android/iOS phone             | Live preview via QR      |
| **Android Emulator** | Desktop (Windows/Linux/macOS) | Android Studio required  |
| **Xcode Simulator**  | macOS only                    | Required for iOS testing |

---

## 🌍 Real-World Apps Built with React Native

* Facebook
* Instagram
* Discord
* Uber Eats
* Walmart
* Shopify

---

## 🧠 Summary

| Concept      | Summary                                   |
| ------------ | ----------------------------------------- |
| React Native | Build native mobile apps using JS + React |
| Expo vs CLI  | Expo = simple, CLI = powerful             |
| Components   | Use `View`, `Text`, `Button`, etc.        |
| Styling      | Done via `StyleSheet.create()`            |
| Platforms    | iOS + Android from same codebase          |

---

## ✅ Mini Assignment

Build a simple mobile app that:

* Displays a greeting
* Has a button that toggles light/dark mode (change background color)

---

## ⏭️ Up Next:

➡️ **Chapter 100: Capacitor.js – Convert Web App to Mobile App**

Let’s learn how to turn your existing **HTML + JS** apps into native apps using **Capacitor.js** 🚀

Would you like to continue to Chapter 100?
