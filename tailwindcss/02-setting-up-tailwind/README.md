# 📘 Chapter 2: Setting Up Tailwind CSS (CDN + Local + Vite + Play)

### 🎯 Learning Objectives:

By the end of this chapter, students will:

* Understand multiple ways to use Tailwind CSS
* Set up Tailwind using CDN (no install)
* Set up Tailwind using CLI (manual setup)
* Set up Tailwind with **Vite** (modern, fast build tool)
* Use Tailwind Play (online playground) for low-end machines
* Confirm setup using a sample project

---

## 🛠️ Method 1: Tailwind via CDN (Fastest, No Install)

> Best for: Beginners, testing, learning, practicing small UI

### ✅ Steps:

1. Open any code editor (or browser-based like CodePen)
2. Use the following HTML template:

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <title>Tailwind CDN Setup</title>
    <script src="https://cdn.tailwindcss.com"></script>
  </head>
  <body class="bg-gray-100 p-10 text-center">
    <h1 class="text-3xl font-bold text-blue-600">Tailwind CDN Working!</h1>
    <p class="mt-4 text-gray-700">This is a basic example using Tailwind via CDN.</p>
  </body>
</html>
```

### ✅ Output Preview:

* Background: light gray
* Title: bold blue
* Paragraph: gray text

> 📌 Tailwind CDN loads the entire framework into the browser — not recommended for production, but great for beginners.

---

## 🧪 Method 2: Tailwind Play (Online Editor — No Installation)

> Best for: Students with low-end PCs or no local setup

### ✅ Visit: [https://play.tailwindcss.com](https://play.tailwindcss.com)

* Online editor powered by Tailwind team
* Real-time preview
* Great for testing, prototyping
* Shareable URLs for assignments

### ✅ Example:

```html
<div class="p-6 bg-white rounded-lg shadow-md text-center">
  <h2 class="text-xl font-semibold text-indigo-600">Tailwind Play!</h2>
  <p class="text-gray-700 mt-2">Build without installing anything.</p>
</div>
```

---

## ⚙️ Method 3: Tailwind CLI (Manual Setup - Local Project)

> Best for: Students building **real projects locally**

### ✅ Prerequisites:

* Install **Node.js**: [https://nodejs.org/](https://nodejs.org/)
* Install **VS Code** or any code editor

### ✅ Step-by-step CLI Setup:

```bash
# 1. Create a project folder
mkdir tailwind-cli
cd tailwind-cli

# 2. Initialize npm
npm init -y

# 3. Install Tailwind CSS via CLI
npm install -D tailwindcss

# 4. Generate tailwind.config.js file
npx tailwindcss init

# 5. Create your folders
mkdir src
touch src/input.css
touch index.html
```

### ✅ Add Tailwind directives to `src/input.css`:

```css
@tailwind base;
@tailwind components;
@tailwind utilities;
```

### ✅ Update `package.json` with build script:

```json
"scripts": {
  "build": "npx tailwindcss -i ./src/input.css -o ./dist/output.css --watch"
}
```

### ✅ Link your `output.css` in `index.html`:

```html
<link rel="stylesheet" href="./dist/output.css" />
```

> 🧠 This method gives you **full control** — ideal for advanced customization.

---

## ⚡ Method 4: Tailwind + Vite (Modern Setup)

> Best for: Fast, production-ready frontend projects

### ✅ Install Vite + Tailwind:

```bash
# 1. Create Vite project
npm create vite@latest tailwind-vite -- --template vanilla
cd tailwind-vite

# 2. Install dependencies
npm install

# 3. Install Tailwind
npm install -D tailwindcss postcss autoprefixer
npx tailwindcss init -p
```

### ✅ Add Tailwind to `src/index.css`:

```css
@tailwind base;
@tailwind components;
@tailwind utilities;
```

### ✅ Update `tailwind.config.js` to include all files:

```js
content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
```

### ✅ Run development server:

```bash
npm run dev
```

🚀 That’s it! Vite gives **instant hot reload** and is ideal for real-world projects.

---

## 📁 Summary: When to Use Which Method?

| Method        | Best For              | Tools Needed   |
| ------------- | --------------------- | -------------- |
| CDN           | Testing, learning     | None           |
| Tailwind Play | Low-end devices       | Browser        |
| CLI           | Local projects        | Node.js        |
| Vite          | Professional projects | Node.js + Vite |

---

## ✅ Chapter Mini Project

Create a simple card component using **any of the 4 methods**:

```html
<div class="max-w-sm mx-auto bg-white rounded-lg shadow-lg p-6 text-center">
  <h2 class="text-2xl font-bold text-indigo-700">Setup Complete!</h2>
  <p class="text-gray-600 mt-2">You're ready to master Tailwind CSS 🎉</p>
</div>
```

> ✅ Bonus: Try building the same card in Tailwind Play, CDN, and local — compare experience.
