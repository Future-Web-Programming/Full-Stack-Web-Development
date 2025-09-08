Great! Let's dive into the **important topic of modules in JavaScript** — a core part of building **modern, maintainable, and scalable applications**.

---

# 🧱 **Chapter 91: ES Modules vs CommonJS**

## 🎯 Objective:

By the end of this chapter, you’ll understand:

* What modules are and why they’re used
* The **difference between CommonJS and ES Modules**
* When to use which one (Node.js vs Browser)
* How to create and import/export modules in both formats
* Real-world scenarios and compatibility issues

---

## 🔍 What Are Modules?

**Modules** allow you to:

* Split your code into **reusable files**
* **Encapsulate logic**
* Manage **dependencies** cleanly

In short: **modular code = cleaner, maintainable projects**

---

## ⚙️ Two Popular Module Systems

| Feature        | CommonJS                       | ES Modules (ESM)          |
| -------------- | ------------------------------ | ------------------------- |
| Syntax         | `require()` / `module.exports` | `import` / `export`       |
| Default in     | Node.js (older versions)       | Browsers + Modern Node.js |
| Load Type      | Synchronous                    | Asynchronous              |
| File Extension | `.js` / `.cjs`                 | `.js` / `.mjs`            |
| Tree Shaking   | ❌ Not supported                | ✅ Supported               |

---

## 🔄 **CommonJS (CJS) – The Node.js Way**

### 📥 Import

```js
const math = require('./math'); // CommonJS
```

### 📤 Export

```js
// math.js
function add(a, b) {
  return a + b;
}
module.exports = { add };
```

> ⚠️ Runs synchronously. Good for server-side (Node.js).

---

## 📦 **ES Modules (ESM) – The Modern Way**

### 📥 Import

```js
import { add } from './math.js';
```

### 📤 Export

```js
// math.js
export function add(a, b) {
  return a + b;
}
```

> ✅ Tree-shaking ready, async, works in browsers and Node 14+ (with `"type": "module"` in `package.json`).

---

## 🚀 Setting up ES Modules in Node.js

1. Set this in `package.json`:

```json
{
  "type": "module"
}
```

2. Use `import/export` in `.js` files
3. Or use `.mjs` extension without setting `"type"` in `package.json`

---

## 🧪 Example Side-by-Side Comparison

### 🔁 CommonJS

**math.js**

```js
function multiply(a, b) {
  return a * b;
}
module.exports = { multiply };
```

**app.js**

```js
const math = require('./math');
console.log(math.multiply(2, 3)); // 6
```

---

### 🆚 ES Modules

**math.js**

```js
export function multiply(a, b) {
  return a * b;
}
```

**app.js**

```js
import { multiply } from './math.js';
console.log(multiply(2, 3)); // 6
```

> Note: You must run this using:

```bash
node app.js
```

...with `"type": "module"` set in your `package.json`.

---

## 🧠 Why ES Modules Are Preferred in Modern Projects

✅ Cleaner syntax
✅ Native browser support
✅ Tree shaking for smaller bundles
✅ Better async support (e.g., `import()` for dynamic loading)

---

## 🏗️ When to Use What?

| Environment             | Recommended System         |
| ----------------------- | -------------------------- |
| Browser (Modern)        | ES Modules (import/export) |
| Node.js (Old)           | CommonJS (`require`)       |
| Node.js (New 14+)       | ES Modules or CommonJS     |
| Bundlers (Webpack/Vite) | ES Modules preferred       |

---

## 🔧 Real-World Scenario

If you're using **Webpack or Vite**, you're probably writing ESM (`import/export`) because these tools handle module resolution and tree shaking.

If you're using **older Node.js scripts or libraries**, you might still see CommonJS.

---

## 💡 Bonus: Dynamic Imports in ES Modules

```js
// Dynamically load only when needed
if (someCondition) {
  const { login } = await import('./auth.js');
  login();
}
```

> Great for **code splitting** and performance optimization!

---

## 🌐 Browser Support

✅ ES Modules are **supported in all modern browsers**
Use `<script type="module" src="main.js"></script>`

---

## ✅ Summary Table

| Concept      | CommonJS         | ES Modules        |
| ------------ | ---------------- | ----------------- |
| Import       | `require()`      | `import`          |
| Export       | `module.exports` | `export`          |
| Execution    | Synchronous      | Asynchronous      |
| Used In      | Node.js          | Browsers, Node.js |
| Tree Shaking | ❌ No             | ✅ Yes             |

---

## 👨‍💻 Assignment

1. Create a **math utility file** using **ES Modules**
2. Write basic functions: `add`, `subtract`, `multiply`, `divide`
3. Import them into a main file and test
4. Convert the same into CommonJS version

---

## 🔗 Useful Tools

* [Node.js ES Modules Docs](https://nodejs.org/api/esm.html)
* [MDN: ES Modules](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Modules)
* [Difference Explained: ESM vs CJS](https://2ality.com/2019/04/modules-nodejs.html)

---

Let me know when you're ready for:

👉 **Chapter 92: Using Prettier, ESLint for Clean Code 🧹**

Or if you want to add **a small real-world modular app project** here.
