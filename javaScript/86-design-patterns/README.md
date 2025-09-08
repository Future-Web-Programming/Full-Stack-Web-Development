Perfect! Let’s create **🟩 Chapter 87: Design Patterns in JavaScript (Factory, Singleton, Observer...)** — one of the most powerful tools for writing scalable, clean, and professional code.

---

# 🟩 Chapter 87: Design Patterns in JavaScript

### 💡 Goal: Learn how to structure and organize your JavaScript code using tried-and-tested **design patterns** like Factory, Singleton, and Observer.

---

## 📌 What Are Design Patterns?

> Design patterns are **reusable solutions** to common problems in software design.
> They are **not code**, but **guidelines** or **templates** for writing better, cleaner, and more maintainable code.

---

## 🧠 Why Learn Design Patterns?

✅ Improve code **readability & structure**
✅ Make your code **scalable and reusable**
✅ Learn how **frameworks like React, Angular, Vue** are built
✅ Ace **JavaScript interviews** and job tasks

---

## 🧱 Categories of Design Patterns

| Type           | Examples                     |
| -------------- | ---------------------------- |
| **Creational** | Factory, Singleton           |
| **Structural** | Module, Decorator, Proxy     |
| **Behavioral** | Observer, Iterator, Strategy |

---

# 🔨 Let’s Learn These 3 Popular Patterns

---

## 🔹 1. Factory Pattern

> Used to **create objects** without specifying the exact class or type.

### ✅ Use Case:

When you want to create different types of users, products, or shapes.

### 📦 Example:

```js
function UserFactory(type) {
  if (type === 'admin') {
    return { role: 'Admin', canEdit: true, canDelete: true };
  } else if (type === 'guest') {
    return { role: 'Guest', canEdit: false, canDelete: false };
  }
}

const adminUser = UserFactory('admin');
const guestUser = UserFactory('guest');

console.log(adminUser); // { role: 'Admin', canEdit: true, canDelete: true }
```

---

## 🔹 2. Singleton Pattern

> Ensures only **one instance** of an object is created — used for config, DB, logging, etc.

### ✅ Use Case:

When you want a **global** object that should not be recreated.

### 📦 Example:

```js
const Settings = (function () {
  let instance;

  function createInstance() {
    return {
      appName: "Future Programming App",
      theme: "dark"
    };
  }

  return {
    getInstance: function () {
      if (!instance) {
        instance = createInstance();
      }
      return instance;
    }
  };
})();

const config1 = Settings.getInstance();
const config2 = Settings.getInstance();

console.log(config1 === config2); // true
```

---

## 🔹 3. Observer Pattern

> When **one object updates**, all **dependent objects are notified**.
> Also known as **Pub/Sub (Publish–Subscribe)**.

### ✅ Use Case:

Used in **event-driven systems**, **chat apps**, or **real-time notifications**.

### 📦 Example:

```js
class Observable {
  constructor() {
    this.observers = [];
  }

  subscribe(fn) {
    this.observers.push(fn);
  }

  notify(data) {
    this.observers.forEach(fn => fn(data));
  }
}

const newsChannel = new Observable();

newsChannel.subscribe((headline) => console.log("User1 got news:", headline));
newsChannel.subscribe((headline) => console.log("User2 got news:", headline));

newsChannel.notify("🚨 JavaScript is now AI-powered!");
```

---

## 💬 Real-World Example: Observer in DOM

```js
document.addEventListener('click', () => {
  console.log("Clicked!");
});
```

This is a **built-in Observer Pattern** — the browser notifies your callback when the `click` happens.

---

# 🧪 Practice Exercise

Create a `NotificationService` using Observer Pattern.

* It should allow users to **subscribe/unsubscribe**
* When `notify()` is called, show a message to all subscribers

---

## 🌐 Online Editors for Practice

| Platform        | Link                                             |
| --------------- | ------------------------------------------------ |
| **CodeSandbox** | [https://codesandbox.io](https://codesandbox.io) |
| **Replit**      | [https://replit.com](https://replit.com)         |
| **JSFiddle**    | [https://jsfiddle.net](https://jsfiddle.net)     |

---

# 🎓 Summary

| Pattern   | Purpose                         |
| --------- | ------------------------------- |
| Factory   | Create objects flexibly         |
| Singleton | One global object instance      |
| Observer  | One-to-many notification system |

---

## ✅ What’s Next?

> 🟩 **Chapter 88: Package Managers (npm, yarn) 📦**
> Learn how to manage JavaScript libraries like a pro!

---

Would you like a **project idea** that combines these patterns (like building a mini messaging system)?
