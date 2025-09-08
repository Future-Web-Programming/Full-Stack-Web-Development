Perfect! You’re about to take your JavaScript skills to a **professional level** by learning how to package and publish your own **JavaScript library** to **npm** – a key skill for any serious developer.

---

# ✅ Chapter 117: Creating a JavaScript Library from Scratch (Publish to npm)

> 🎯 *Goal: Learn how to build, structure, document, and publish a reusable JavaScript library to npm.*

---

## 🧠 What is a JavaScript Library?

A **library** is a reusable piece of code that solves a specific problem or adds new functionality that can be used across multiple projects.

Famous examples:

* 📦 `lodash` – utility functions
* 📦 `axios` – HTTP requests
* 📦 `moment` – date/time (deprecated now)

---

## ✅ What You’ll Learn in This Chapter

1. Create a JavaScript utility module
2. Make it reusable and configurable
3. Structure it as an npm package
4. Add documentation (README)
5. Publish it to npm
6. Use it in any project

---

## 🛠 Step 1: Initialize Your Library Project

Create a folder:

```bash
mkdir my-js-utils
cd my-js-utils
npm init -y
```

You now have a `package.json` file.

---

## 🛠 Step 2: Create Your Library Code

Create a `src/` folder and add your logic:

```bash
mkdir src
touch src/index.js
```

Add some basic functions to `src/index.js`:

```js
// src/index.js

export function capitalize(str) {
  return str.charAt(0).toUpperCase() + str.slice(1);
}

export function isEven(num) {
  return num % 2 === 0;
}
```

---

## 🛠 Step 3: Create an Entry Point

We need to create an entry file (`index.js`) in root to expose these functions.

```js
// index.js
import { capitalize, isEven } from './src/index.js';

export { capitalize, isEven };
```

---

## 🛠 Step 4: Make It Compatible with npm

Update your `package.json`:

```json
{
  "name": "my-js-utils",
  "version": "1.0.0",
  "description": "Reusable JavaScript utility functions",
  "main": "index.js",
  "type": "module",
  "keywords": ["javascript", "utils", "library"],
  "author": "Your Name",
  "license": "MIT"
}
```

---

## 🛠 Step 5: Add a README.md

Create a `README.md` for GitHub/npm:

````md
# my-js-utils

Simple reusable JavaScript utility functions.

## Installation

```bash
npm install my-js-utils
````

## Usage

```js
import { capitalize, isEven } from 'my-js-utils';

console.log(capitalize('hello')); // Hello
console.log(isEven(4)); // true
```

````

---

## 🛠 Step 6: Test Your Package Locally

You can link it locally before publishing:

```bash
npm link
````

Then in any project:

```bash
npm link my-js-utils
```

✅ Now test your library in a real-world app.

---

## 🛠 Step 7: Publish to npm

### 🔐 Create an npm account

If you don’t have one:

```bash
npm adduser
```

### 📤 Publish your package

```bash
npm publish
```

🎉 Your library is now live!

> If the name is taken, change `"name"` in `package.json` to something unique.

---

## 🧼 Optional Enhancements

| Feature               | Benefit                              |
| --------------------- | ------------------------------------ |
| ✅ TypeScript          | Add type safety                      |
| ✅ Babel               | Transpile modern JS to be compatible |
| ✅ Tests (Jest/Vitest) | Add reliability with unit tests      |
| ✅ Linting (ESLint)    | Ensure clean code                    |
| ✅ GitHub Repo         | Host and version control             |

---

## 💡 Example: Publish a “math-utils” Library

```js
// src/math.js
export const add = (a, b) => a + b;
export const square = n => n * n;
```

```js
// index.js
export * from './src/math.js';
```

Published as: `@your-username/math-utils`

---

## 🔐 Versioning Tips (Semantic Versioning)

| Version | Meaning                                 |
| ------- | --------------------------------------- |
| `1.0.0` | Initial stable release                  |
| `1.1.0` | Added new features, backward compatible |
| `2.0.0` | Breaking changes introduced             |

Update version before publishing:

```bash
npm version patch    # 1.0.1
npm version minor    # 1.1.0
npm version major    # 2.0.0
```

---

## ✅ Summary

| Step                  | What You Did                |
| --------------------- | --------------------------- |
| 📁 Setup Project      | Initialized npm, added code |
| 🧱 Exported Functions | Modular code structure      |
| 📄 Added README       | Documentation for users     |
| 🚀 Published to npm   | Package live for public use |

---

## 💻 Online Playground & GitHub Templates

* [StackBlitz Library Boilerplate](https://stackblitz.com)
* [GitHub Template Repo for JS Libraries](https://github.com)

---

## 🔚 Next Up…

### **Chapter 118: How JavaScript Frameworks Work Under the Hood**

> Unlock the core architecture behind React, Vue, and Angular by building a simplified framework from scratch. Understand virtual DOM, component lifecycle, reactivity, and more.

---

Would you like to move to **Chapter 118** or do you want a mini-project challenge to apply this npm module publishing knowledge?
