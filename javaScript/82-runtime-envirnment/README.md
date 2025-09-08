Perfect! Chapter 83 brings clarity to what really happens **behind the scenes** when JavaScript runs — in both the **browser** and **Node.js** environments.

---

# 🟩 Chapter 83: JavaScript Runtime Environment

🌐 Browser | ⚙️ Node.js | 🧰 Web APIs | 🔁 Event Loop Explained

---

## 📌 What You’ll Learn

* What is a **JavaScript Runtime Environment**
* Difference between **Browser** vs **Node.js** environments
* What are **Web APIs**
* How the **Call Stack**, **Event Loop**, **Callback Queue**, and **Microtask Queue** work together
* Real-world examples with visuals
* 🛠 Tools: JS Visualizer, DevTools

---

## 🚀 What is a JavaScript Runtime Environment?

JavaScript is not a standalone language — it needs a host environment to run.
A **Runtime Environment** provides everything JS needs to execute:

> ✅ Engine + APIs + Event Loop = JS Runtime

---

## 🧠 JavaScript Engine (e.g., V8)

* **Reads and executes JavaScript code**
* Converts JS → Machine Code
* Examples:

  * **V8** → Used by Chrome & Node.js
  * **SpiderMonkey** → Firefox
  * **JavaScriptCore** → Safari

---

## 🌐 Browser Runtime Environment

Built into every modern web browser like Chrome, Firefox, Edge...

### ✅ Includes:

| Component      | Role                                          |
| -------------- | --------------------------------------------- |
| JS Engine      | Runs JS code (e.g., V8 in Chrome)             |
| Web APIs       | `DOM`, `fetch`, `setTimeout`, `console`, etc. |
| Event Loop     | Manages async operations                      |
| Call Stack     | Executes functions                            |
| Callback Queue | Stores callbacks from Web APIs                |

---

### 🌍 Example in Browser:

```js
console.log("1");

setTimeout(() => {
  console.log("2");
}, 1000);

console.log("3");
```

> Output:

```
1  
3  
2
```

---

## ⚙️ Node.js Runtime Environment

Node.js is a runtime environment for **running JavaScript outside the browser**.

### ✅ Includes:

| Component  | Role                         |
| ---------- | ---------------------------- |
| JS Engine  | V8                           |
| Node APIs  | `fs`, `http`, `events`, etc. |
| Event Loop | Same event loop concept      |
| Libuv      | Library for async IO         |
| Modules    | `require`, `exports`         |

---

### 🌍 Example in Node.js:

```js
const fs = require("fs");

fs.readFile("data.txt", "utf-8", (err, data) => {
  if (err) throw err;
  console.log(data);
});

console.log("Reading file...");
```

> Output:

```
Reading file...  
[file content]
```

---

## 🧰 What are Web APIs?

These are **functions and tools provided by the browser** that aren't part of JS itself.

| Web API     | Example                                      |
| ----------- | -------------------------------------------- |
| DOM API     | `document.querySelector()`                   |
| Timer API   | `setTimeout()`, `setInterval()`              |
| Fetch API   | `fetch()`                                    |
| Geolocation | `navigator.geolocation.getCurrentPosition()` |
| Canvas      | `canvas.getContext()`                        |

> JS code calls these APIs → browser handles them → puts results in Callback Queue → Event Loop processes them

---

## 🔁 How the Event Loop Works

JS is **single-threaded** (1 thing at a time) — but handles **async operations** via:

1. **Call Stack** – Executes current functions
2. **Web APIs** – Browser handles async tasks
3. **Callback Queue** – Stores finished async callbacks
4. **Microtask Queue** – For Promises, etc.
5. **Event Loop** – Decides what to run next

---

### 🧪 Visual Flow:

```js
console.log("Start");

setTimeout(() => console.log("Timeout"), 0);

Promise.resolve().then(() => console.log("Promise"));

console.log("End");
```

> Output:

```
Start  
End  
Promise  
Timeout
```

---

## 🎯 Browser vs Node.js Comparison

| Feature       | Browser            | Node.js               |
| ------------- | ------------------ | --------------------- |
| Purpose       | Web interaction    | Backend/server        |
| APIs          | DOM, Canvas, Fetch | File system, HTTP, OS |
| Modules       | ES Modules         | CommonJS & ES Modules |
| Global Object | `window`           | `global`              |
| Event Loop    | Yes                | Yes (via libuv)       |

---

## 🛠 Tools & Visualizers

* [JS Visualizer 9000](https://www.jsv9000.app/)
* Chrome DevTools → Sources → Call Stack
* Node.js Debugging with `--inspect`

---

## ✅ Summary

| Concept    | Takeaway                                                 |
| ---------- | -------------------------------------------------------- |
| Runtime    | JS needs an environment (browser or Node.js)             |
| Browser    | Has DOM, Web APIs, runs in frontend                      |
| Node.js    | For backend, includes fs, http, etc.                     |
| Web APIs   | Async features like `setTimeout`, `fetch`                |
| Event Loop | Handles async behavior even though JS is single-threaded |

---

## 🧑‍🏫 Assignment

1. Write a script using:

   * `setTimeout()`
   * `Promise`
   * Normal logs

2. Use [jsv9000.app](https://www.jsv9000.app/) to simulate how it runs in the browser.

3. Try the same script in Node.js → see output order.

---

Shall we move on to:
🟩 **Chapter 84: JavaScript Modules (ES6 Modules, Import/Export, and Modular Architecture)?**
