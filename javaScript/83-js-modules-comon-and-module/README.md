Great! Let’s dive into one of the most powerful and **modern** features of JavaScript — **Modules**. This chapter lays the foundation for writing **scalable**, **maintainable**, and **reusable** code in real-world projects.

---

# 🟩 Chapter 84: JavaScript Modules (ES6 Modules, Import/Export, Modular Architecture)

---

## 📌 What You’ll Learn

* What are Modules in JavaScript
* Why modular programming is important
* Difference between ES6 Modules and CommonJS
* `export` vs `export default`
* `import` syntax variations
* Real-world structure: multi-file, multi-module project
* Browser and Node.js support
* Hands-on project using ES Modules

---

## 🧠 What are Modules?

A **module** is just a file containing JavaScript code — variables, functions, or classes — that is **self-contained** and can be **imported** into other files.

### ✅ Why use Modules?

| Without Modules    | With Modules            |
| ------------------ | ----------------------- |
| Spaghetti code     | Organized code          |
| Difficult to reuse | Easy to reuse           |
| One big file       | Smaller, readable files |
| Hard to test       | Easy to test & debug    |

---

## 📦 Modular Programming Concept

Modular programming breaks a big problem into smaller, manageable, isolated units (files/modules), such as:

```js
// calculator.js
export function add(a, b) {
  return a + b;
}
```

```js
// app.js
import { add } from "./calculator.js";
console.log(add(2, 3)); // 5
```

---

## 🔄 ES6 Modules: Export & Import

### ✅ Named Exports

```js
// utils.js
export const PI = 3.14;
export function square(x) {
  return x * x;
}
```

```js
// main.js
import { PI, square } from './utils.js';
console.log(PI);
console.log(square(5));
```

> Use `{}` when importing named exports.

---

### ✅ Default Export

```js
// logger.js
export default function log(message) {
  console.log(`LOG: ${message}`);
}
```

```js
// app.js
import log from './logger.js';
log("App started");
```

> Use **no curly braces** with `default`.

---

### ✅ Rename Imports

```js
import { square as sq } from './utils.js';
console.log(sq(4)); // 16
```

---

## 🧠 Difference: CommonJS vs ES Modules

| Feature        | CommonJS (Node.js) | ES Modules (Browser/Modern Node)            |
| -------------- | ------------------ | ------------------------------------------- |
| Export         | `module.exports`   | `export`, `export default`                  |
| Import         | `require()`        | `import`                                    |
| File Extension | `.js`              | `.js` or `.mjs`                             |
| Sync/Async     | Synchronous        | Asynchronous                                |
| Usage          | Node.js (default)  | Modern Browsers, Node (with `type: module`) |

---

### CommonJS Example (in Node.js)

```js
// math.js
function add(a, b) {
  return a + b;
}
module.exports = { add };
```

```js
// app.js
const { add } = require('./math');
console.log(add(2, 3));
```

---

## 🧱 How to Structure Projects

```
📁 my-app
 ┣ 📁 modules
 ┃ ┣ 📄 math.js
 ┃ ┣ 📄 logger.js
 ┣ 📄 main.js
 ┣ 📄 index.html
```

* Each module has a single responsibility.
* Keep logic reusable and readable.

---

## 🌐 Using ES Modules in the Browser

```html
<script type="module" src="main.js"></script>
```

✅ Important:

* Modules are loaded asynchronously.
* Must use **relative paths** like `./utils.js`

---

## 🧪 Browser Module Example

### 📄 `math.js`

```js
export function multiply(a, b) {
  return a * b;
}
```

### 📄 `main.js`

```js
import { multiply } from './math.js';
console.log(multiply(3, 4)); // 12
```

### 📄 `index.html`

```html
<!DOCTYPE html>
<html>
  <body>
    <script type="module" src="main.js"></script>
  </body>
</html>
```

---

## 🛠 Browser Support

All modern browsers support ES Modules:

* Chrome
* Firefox
* Safari
* Edge

If you need to support older browsers, consider using **bundlers** like:

* Webpack
* Parcel
* Vite

---

## 🧪 Mini Project: Modular Todo App (3 Files)

**1. `todo.js`**

```js
export let todos = [];

export function addTodo(task) {
  todos.push(task);
}
```

**2. `display.js`**

```js
import { todos } from './todo.js';

export function showTodos() {
  console.log("Todos:", todos);
}
```

**3. `main.js`**

```js
import { addTodo } from './todo.js';
import { showTodos } from './display.js';

addTodo("Learn JS Modules");
showTodos();
```

**4. `index.html`**

```html
<script type="module" src="main.js"></script>
```

✅ Runs directly in the browser using modules!

---

## ✅ Summary

| Concept          | Description                                            |
| ---------------- | ------------------------------------------------------ |
| Module           | A reusable JS file with exports                        |
| `export`         | Share code                                             |
| `import`         | Use shared code                                        |
| `default export` | One main value from a file                             |
| Browser support  | Use `type="module"`                                    |
| Node.js          | Use `.mjs` or set `"type": "module"` in `package.json` |

---

## 🧑‍🏫 Homework

* Create a mini calculator with 2 modules:

  * `math.js` with basic operations
  * `app.js` to take input and print result
* Test it in the browser using `<script type="module">`

---

### Ready to move on?

Next up:
🟩 **Chapter 85: JavaScript Bundlers (Webpack, Parcel, Vite - Introduction & Setup)**
Shall we begin?
