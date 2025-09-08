Perfect! Welcome to the **modern developer workflow** 🔥 — In this chapter, we dive into **Package Managers**, a key tool for every serious JavaScript developer.

---

# 📦 Chapter 88: Package Managers (npm & yarn)

---

## 🎯 Objective

Understand what **package managers** are, why they are essential, and how to use:

* **npm** (Node Package Manager)
* **yarn** (Meta’s package manager alternative)
* Explore `package.json` and manage project dependencies

By the end, you'll confidently install, update, remove, and manage packages like a pro.

---

## 🤔 What Is a Package Manager?

A **package manager** helps you:

* Install JavaScript libraries (packages)
* Track versions
* Manage dependencies
* Share your own code as packages

Without a package manager, every developer would have to manually download and manage libraries — which is painful and error-prone!

---

## 📦 What is npm?

> npm = Node Package Manager
> It's the **default** package manager for Node.js.

### 🌍 npm hosts over **2 million+ packages** (libraries, tools, frameworks)

### ✅ Benefits:

* Automatically manages `node_modules`
* Handles versioning
* Includes `package.json` to manage project meta & dependencies

---

## 🧪 Initialize npm in Your Project

```bash
npm init
```

It asks questions and creates a `package.json` file.

➡️ Or skip all questions:

```bash
npm init -y
```

---

## 🔧 package.json – What It Contains?

```json
{
  "name": "my-awesome-app",
  "version": "1.0.0",
  "description": "Learning npm",
  "scripts": {
    "start": "node index.js"
  },
  "dependencies": {
    "axios": "^1.5.0"
  },
  "devDependencies": {
    "nodemon": "^3.0.1"
  }
}
```

| Field           | Meaning                                     |
| --------------- | ------------------------------------------- |
| name/version    | Project metadata                            |
| scripts         | Run custom commands                         |
| dependencies    | Packages required in production             |
| devDependencies | Used only during development (e.g. nodemon) |

---

## 📥 Install a Package

```bash
npm install axios
```

This:

* Adds `axios` to `node_modules/`
* Updates `package.json` & `package-lock.json`

### Install as Dev Dependency:

```bash
npm install nodemon --save-dev
```

> Dev-only tools like testing libraries, build tools, linters, etc.

---

## ❌ Uninstall a Package

```bash
npm uninstall axios
```

---

## 🔄 Update a Package

```bash
npm update
```

---

## 📜 package-lock.json?

This file:

* Locks exact version numbers
* Ensures team members install **identical** dependencies

Don’t delete it — it ensures consistency!

---

## 🚀 Running Scripts

Add a script in `package.json`:

```json
"scripts": {
  "start": "node app.js",
  "dev": "nodemon app.js"
}
```

Then run:

```bash
npm run start
npm run dev
```

---

## 🔄 Global vs Local Install

| Type   | Command                  | Use Case                                  |
| ------ | ------------------------ | ----------------------------------------- |
| Local  | `npm install axios`      | Used in this project only                 |
| Global | `npm install -g nodemon` | Available across all projects (CLI tools) |

---

# 🧵 What Is Yarn?

> Yarn = “Yet Another Resource Negotiator”

Created by **Facebook**, it's an **alternative to npm** with:

* Faster installs (via caching)
* Offline mode
* Better dependency resolution (deterministic lock files)

---

## 📦 Install Yarn

```bash
npm install -g yarn
```

Then initialize:

```bash
yarn init
```

---

## 📘 Yarn vs npm Commands

| Action          | npm                              | yarn                     |
| --------------- | -------------------------------- | ------------------------ |
| Init project    | `npm init`                       | `yarn init`              |
| Install package | `npm install axios`              | `yarn add axios`         |
| Remove package  | `npm uninstall axios`            | `yarn remove axios`      |
| Install dev dep | `npm install nodemon --save-dev` | `yarn add nodemon --dev` |
| Run script      | `npm run dev`                    | `yarn dev`               |

---

## 🛠️ Project: Package Playground

Let’s create a project using both npm and yarn.

### Step-by-Step:

1. Create a folder `js-playground`
2. Run `npm init -y`
3. Install:

   * `axios`
   * `nodemon` (dev)
4. Add this to `scripts`:

   ```json
   "start": "node index.js",
   "dev": "nodemon index.js"
   ```
5. Test with:

   ```js
   const axios = require('axios');
   axios.get('https://jsonplaceholder.typicode.com/posts/1')
     .then(res => console.log(res.data));
   ```

---

## 🌍 Explore npm Packages

* [npmjs.com](https://www.npmjs.com/) — search thousands of packages
* Top Packages:

  * `express` (backend server)
  * `lodash` (utility library)
  * `axios` (HTTP client)
  * `dotenv` (env config)

---

## 🧠 Interview Tip

> ❓ What’s the difference between dependencies and devDependencies?

| dependencies         | devDependencies            |
| -------------------- | -------------------------- |
| Needed in production | Needed only in development |
| E.g. axios, express  | E.g. nodemon, eslint       |

---

## 🔧 Recommended Tools for Practice

* [Repl.it](https://replit.com/)
* [StackBlitz](https://stackblitz.com/)
* [Glitch](https://glitch.com/)

✅ These support npm and let you test online!

---

## 📝 Homework

1. Create a project with `axios` and `nodemon`
2. Add start/dev scripts
3. Practice removing and updating packages
4. Try switching to **Yarn** in another project

---

## ✅ Summary

| Tool              | Purpose                                    |
| ----------------- | ------------------------------------------ |
| npm               | Install/manage packages                    |
| yarn              | Alternative to npm with performance boosts |
| package.json      | Tracks project dependencies/scripts        |
| package-lock.json | Locks versions for consistency             |

---

## ⏭️ Coming Next:

### ⚙️ **Chapter 89: Webpack, Vite & Parcel – Modern JS Bundlers**

Would you like to proceed with Chapter 89 now?
