Perfect! Let’s move forward.

---

# 🧬 **Chapter 90: Babel – JavaScript Transpiler**

## 🎯 Objective:

In this chapter, you'll learn:

* What Babel is and **why it's essential** in modern JavaScript development.
* How Babel works behind the scenes (Transpiling).
* How to configure Babel manually in a project.
* Common Babel plugins and presets.
* Real-world use cases (e.g., converting ES6+ code to ES5 for browser compatibility).

---

## 🧠 What is Babel?

> **Babel** is a JavaScript **transpiler** that converts modern JavaScript (ES6+) into **backward-compatible ES5** JavaScript so it can run on older browsers.

### 📌 Why do we need Babel?

* Older browsers (like IE11) **don't understand modern JavaScript**.
* Babel lets you **write modern code** while still supporting legacy environments.

---

## 🔍 What is a Transpiler?

A **transpiler** (source-to-source compiler) takes code written in one version/language and **converts it to another version** (usually older).

**Example:**

```js
// ES6+
const greet = (name) => `Hello, ${name}`;

// ES5 (after Babel)
var greet = function(name) {
  return "Hello, " + name;
};
```

---

## 🔧 Setting Up Babel from Scratch

### ✅ Step 1: Initialize your project

```bash
npm init -y
```

### ✅ Step 2: Install Babel CLI and core packages

```bash
npm install --save-dev @babel/core @babel/cli @babel/preset-env
```

### ✅ Step 3: Create a `.babelrc` config file

```json
{
  "presets": ["@babel/preset-env"]
}
```

### ✅ Step 4: Create your project structure

```
/project
  /src
    index.js  → modern JS code
  /dist       → transpiled output
```

### ✅ Step 5: Add a build script in `package.json`

```json
"scripts": {
  "build": "babel src --out-dir dist"
}
```

### ✅ Step 6: Run Babel

```bash
npm run build
```

---

## 🧪 Babel in Action

### 👨‍💻 `src/index.js`

```js
const greet = (name) => {
  console.log(`Hello, ${name}!`);
};
greet("Future Programming");
```

### 🔄 After transpile → `dist/index.js`

```js
"use strict";

var greet = function greet(name) {
  console.log("Hello, " + name + "!");
};
greet("Future Programming");
```

---

## 🧩 What is `@babel/preset-env`?

A smart preset that:

* Automatically determines what JS features need to be transpiled.
* Uses your **target browser list**.

### ✨ Optional Config (in `.babelrc`)

```json
{
  "presets": [
    ["@babel/preset-env", {
      "targets": "> 0.25%, not dead"
    }]
  ]
}
```

---

## 📦 Common Babel Plugins

| Plugin                                    | Description                         |
| ----------------------------------------- | ----------------------------------- |
| `@babel/plugin-transform-arrow-functions` | Converts ES6 arrow functions to ES5 |
| `@babel/plugin-transform-block-scoping`   | Converts `let`/`const` to `var`     |
| `@babel/plugin-proposal-class-properties` | Enables class fields                |
| `@babel/plugin-transform-runtime`         | Avoids code duplication             |

Install via:

```bash
npm install --save-dev @babel/plugin-transform-arrow-functions
```

Use in `.babelrc`:

```json
{
  "plugins": ["@babel/plugin-transform-arrow-functions"]
}
```

---

## ⚙️ Babel + Webpack Integration

In real-world apps, Babel is often used with **Webpack** via `babel-loader`.

```bash
npm install --save-dev babel-loader
```

```js
// webpack.config.js
module.exports = {
  module: {
    rules: [
      {
        test: /\.m?js$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader"
        }
      }
    ]
  }
};
```

---

## 🌐 Online Babel Playground

Try Babel in the browser:

* [Babel REPL](https://babeljs.io/repl)

---

## 👨‍🏫 Project Idea

> 🔨 **Create a small ES6 JavaScript app (e.g., calculator, note app) and transpile it with Babel into ES5.**

Deploy the ES5 version to GitHub Pages or Netlify for legacy browser support.

---

## 📌 Summary

| Feature             | Description                        |
| ------------------- | ---------------------------------- |
| Babel               | JavaScript transpiler (ES6 → ES5)  |
| `.babelrc`          | Babel configuration file           |
| `@babel/preset-env` | Smart preset for browser targeting |
| Used With           | Webpack, Parcel, or standalone     |

---

Let me know when you're ready to move to:

### 👉 **Chapter 91: ES Modules vs CommonJS 🧱**

Or if you'd like a **code-based assignment** for this chapter.
