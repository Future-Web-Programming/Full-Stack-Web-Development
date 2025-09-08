Awesome! Let’s move into **code quality and formatting tools**, a critical part of becoming a **professional developer**.

---

# 🧹 **Chapter 92: Using Prettier & ESLint for Clean Code**

## 🎯 Objective:

By the end of this chapter, you’ll understand:

* Why code formatting and linting matter
* What **Prettier** and **ESLint** are
* How to set them up in a JavaScript project
* Best practices for clean, consistent code
* How to integrate with VS Code & Git

---

## 🧼 Why Clean Code Matters

✅ Easier to **read and maintain**
✅ Avoids **bugs** due to bad formatting
✅ Makes **team collaboration** smooth
✅ Helps with **automation**, **CI/CD**, and **interview readiness**

---

## 🛠️ Tools Overview

| Tool         | Purpose                                              |
| ------------ | ---------------------------------------------------- |
| **Prettier** | Formats your code (style) ✨                          |
| **ESLint**   | Finds problems in your code (bugs, anti-patterns) 🔍 |

> Think of **Prettier** as your auto beautifier, and **ESLint** as your code spell checker.

---

## 📦 Step-by-Step Setup

### ✅ 1. Initialize Your Project

```bash
npm init -y
```

---

### ✅ 2. Install Prettier & ESLint

```bash
npm install --save-dev prettier eslint
```

---

### ✅ 3. Create Config Files

#### 📄 `.prettierrc`

```json
{
  "semi": true,
  "singleQuote": true,
  "tabWidth": 2,
  "trailingComma": "es5"
}
```

#### 📄 `.eslintrc.json`

```json
{
  "env": {
    "browser": true,
    "es2021": true
  },
  "extends": ["eslint:recommended"],
  "parserOptions": {
    "ecmaVersion": "latest",
    "sourceType": "module"
  },
  "rules": {
    "no-unused-vars": "warn",
    "no-console": "off"
  }
}
```

---

## 🧪 Example JavaScript Code Before & After Prettier

### ❌ Before

```js
function hello(){console.log("hi");}
```

### ✅ After Prettier

```js
function hello() {
  console.log("hi");
}
```

---

## 🔄 Auto Format with Prettier

Format all files:

```bash
npx prettier --write .
```

Or format a single file:

```bash
npx prettier script.js --write
```

---

## 🚨 Run ESLint on Your Code

Check for problems:

```bash
npx eslint script.js
```

Fix problems automatically:

```bash
npx eslint script.js --fix
```

---

## 💻 Bonus: VS Code Integration

### 👉 Install Extensions

* [Prettier - Code Formatter](https://marketplace.visualstudio.com/items?itemName=esbenp.prettier-vscode)
* [ESLint](https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint)

### 👉 VS Code Settings (optional)

Add this to `.vscode/settings.json`:

```json
{
  "editor.formatOnSave": true,
  "editor.defaultFormatter": "esbenp.prettier-vscode"
}
```

> 💡 Now your code will auto-format every time you save!

---

## 🧩 Using Both Together

* ESLint checks for **errors or bad practices**
* Prettier ensures **consistent style**
* They can work together using `eslint-config-prettier`

```bash
npm install --save-dev eslint-config-prettier
```

Then update your ESLint config:

```json
"extends": ["eslint:recommended", "prettier"]
```

---

## 🔁 Git Hook Integration (Advanced)

Auto-lint/format before commit:

```bash
npm install --save-dev husky lint-staged
```

```bash
npx husky install
```

Add to `package.json`:

```json
"lint-staged": {
  "*.js": ["eslint --fix", "prettier --write"]
}
```

> ⛓️ Now your code is checked before every Git commit!

---

## 📦 Project Structure Example

```
/my-js-app
  ├── script.js
  ├── .prettierrc
  ├── .eslintrc.json
  ├── package.json
```

---

## 🧠 Summary

| Feature          | Prettier       | ESLint                |
| ---------------- | -------------- | --------------------- |
| Formats Code     | ✅              | ❌ (only some fixable) |
| Finds Problems   | ❌              | ✅                     |
| Used For         | Style          | Quality / Bugs        |
| Auto-Fix on Save | ✅ (via plugin) | ✅ (via plugin)        |

---

## 💻 Assignment

✅ Create a new project
✅ Install Prettier and ESLint
✅ Create config files
✅ Add some messy JavaScript code
✅ Format and lint it
✅ Enable **VS Code auto-format on save**

---

## 🔗 Resources

* [Prettier Official Docs](https://prettier.io/docs/en/index.html)
* [ESLint Docs](https://eslint.org/docs/latest/)
* [eslint-config-prettier](https://github.com/prettier/eslint-config-prettier)

---

✅ Let me know when you're ready for:

➡️ **Chapter 93: Version Control Basics (Git + GitHub) 🔀**
Or if you’d like a mini project to practice Prettier + ESLint setup!
