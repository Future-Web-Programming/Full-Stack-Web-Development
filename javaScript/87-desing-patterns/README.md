Awesome! Let’s dive into one of the most **professional and job-relevant** chapters in your course:

---

# 🏗️ Chapter 87: Design Patterns in JavaScript

---

## 🎯 Objective

Understand **what Design Patterns are**, why they matter, and how to implement **real-world patterns in JavaScript**, including:

* 🏭 Factory Pattern
* 👤 Singleton Pattern
* 👀 Observer Pattern
* 🔀 Module Pattern (covered earlier, now reinforced)

These patterns **prepare you for interviews**, **scalable codebases**, and **real-world app architecture**.

---

## 🧱 What Are Design Patterns?

**Design Patterns** are **reusable solutions** to common software problems.

They help with:

* Code **organization**
* **Reusability**
* **Scalability**
* **Communication** between developers

They are **language-independent** but applied differently in JavaScript.

---

## 🔢 3 Major Types of Design Patterns

| Type           | Description                        |
| -------------- | ---------------------------------- |
| **Creational** | How objects are created            |
| **Structural** | How objects are composed           |
| **Behavioral** | How objects communicate and behave |

---

# 🏭 1. Factory Pattern

Used to create **objects without specifying exact class/type** — helpful when dealing with **similar types of objects**.

### 📦 Use Case Example:

Let’s say we need different users:

```js
function UserFactory() {
  this.createUser = function(name, type) {
    let user;
    if (type === "admin") {
      user = new Admin(name);
    } else if (type === "guest") {
      user = new Guest(name);
    }
    user.type = type;
    return user;
  };
}

function Admin(name) {
  this.name = name;
  this.permissions = "ALL";
}

function Guest(name) {
  this.name = name;
  this.permissions = "READ-ONLY";
}

// Usage
const factory = new UserFactory();
const u1 = factory.createUser("Ali", "admin");
const u2 = factory.createUser("Zara", "guest");

console.log(u1); // Admin { name: 'Ali', type: 'admin' }
console.log(u2); // Guest { name: 'Zara', type: 'guest' }
```

✅ Clean separation of object logic
✅ Easier to scale new user types

---

# 👤 2. Singleton Pattern

Ensures **only one instance** of a class is created — commonly used for **state management**, **config**, **caches**, etc.

### 🔁 Example:

```js
const Settings = (function () {
  let instance;

  function createInstance() {
    return { theme: "dark", language: "en" };
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

// Usage
const s1 = Settings.getInstance();
const s2 = Settings.getInstance();

console.log(s1 === s2); // true ✅
```

> ✅ Helps manage **global state** without polluting global scope

---

# 👀 3. Observer Pattern

Used when **one object (subject)** notifies **other objects (observers)** when something changes — like in **chat apps**, **UI updates**, etc.

### 📡 Concept:

* **Subject** = The source of data change
* **Observers** = Subscribers that want updates

### Example:

```js
class Subject {
  constructor() {
    this.observers = [];
  }

  subscribe(fn) {
    this.observers.push(fn);
  }

  unsubscribe(fn) {
    this.observers = this.observers.filter(sub => sub !== fn);
  }

  notify(data) {
    this.observers.forEach(fn => fn(data));
  }
}

// Usage
const subject = new Subject();

function logger(data) {
  console.log("Logger received:", data);
}

function dashboard(data) {
  console.log("Dashboard updated:", data);
}

subject.subscribe(logger);
subject.subscribe(dashboard);

subject.notify("User logged in");

// Output:
// Logger received: User logged in
// Dashboard updated: User logged in
```

✅ Used in **event-driven architectures** and **frontend frameworks**

---

# 🧩 Bonus: Module Pattern (Refresher)

Used to **encapsulate code**, hide implementation, and expose only what’s needed.

```js
const CartModule = (function () {
  let cart = [];

  function addItem(item) {
    cart.push(item);
  }

  function getTotal() {
    return cart.length;
  }

  return {
    addItem,
    getTotal
  };
})();

CartModule.addItem("Shoes");
CartModule.addItem("Shirt");

console.log(CartModule.getTotal()); // 2
```

✅ Prevents global scope pollution
✅ Excellent for building scalable features

---

## 📘 Real-World Usage

| Pattern   | Real Usage                            |
| --------- | ------------------------------------- |
| Factory   | Creating users, alerts, UI components |
| Singleton | Config, App State, Redux Store        |
| Observer  | Event systems, UI updates             |
| Module    | Reusable modules, plugins             |

---

## 🔧 Build Project Idea: Notification System

📌 Use Observer Pattern to build:

* A notification center where multiple modules can subscribe
* A user clicks a button → triggers notification → all listeners respond

---

## 🧠 Interview Tip

> ❓“What’s the difference between Factory and Constructor Pattern?”
> ✅ Factory abstracts object creation
> ✅ Constructor uses `new` keyword

---

## 🧪 Try These Online:

* [JSFiddle](https://jsfiddle.net)
* [PlayCode.io](https://playcode.io/)
* [CodePen](https://codepen.io/)

---

## 📝 Homework

1. Create a **Factory pattern** for creating animals (`dog`, `cat`, `bird`)
2. Implement a **Singleton** settings manager for a web app
3. Use the **Observer Pattern** for a mini chat room UI
4. Rewrite your earlier `Todo App` using **Module Pattern**

---

## 🧠 Summary

| Pattern   | Use Case                              |
| --------- | ------------------------------------- |
| Factory   | Abstracting object creation           |
| Singleton | One global instance (settings, state) |
| Observer  | Event listeners, pub-sub model        |
| Module    | Encapsulation and code organization   |

---

✅ Ready to move into **Chapter 88: npm & yarn - Package Managers**?

Would you like me to begin preparing Chapter 88?
