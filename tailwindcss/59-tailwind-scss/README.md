# 🎯 Mini Project: White-Label SaaS Landing Page with Tailwind + SCSS

> 📌 Build a customizable SaaS landing page that supports **theme switching**, **SCSS variables**, and **Tailwind utility-first layout**.

---

## 💡 Project Overview

### 🧱 Features:

* Utility-first layout with Tailwind
* SCSS for theme customization (colors, spacing, branding)
* Dark/Light Mode switch
* Reusable button & card components with `@apply`
* Clean responsive design

### 🛠 Tools Used:

* Tailwind CSS
* SCSS (Sass)
* PostCSS or Vite
* Vanilla JS (for toggle)

---

## 📁 Project Structure

```
/white-label-landing/
├── tailwind.config.js
├── postcss.config.js
├── package.json
├── /src
│   ├── index.html
│   ├── styles/
│   │   ├── _variables.scss
│   │   ├── _components.scss
│   │   └── main.scss
│   └── main.js
├── /dist
│   └── style.css
```

---

## 🧵 Step 1: Setup SCSS with Tailwind

Already covered in previous chapter — SCSS compiles to `dist/style.css` using:

```bash
sass src/styles/main.scss dist/style.css --no-source-map
```

---

## 🎨 Step 2: Define SCSS Theme Variables

```scss
// _variables.scss
$primary-color: #4f46e5;
$card-bg: #ffffff;
$text-dark: #1f2937;
$spacing: 1.25rem;
```

---

## 💠 Step 3: Create Reusable SCSS Components with @apply

```scss
// _components.scss
.btn {
  @apply px-6 py-3 rounded font-semibold transition;
}

.btn-primary {
  @apply text-white;
  background-color: $primary-color;
  &:hover {
    background-color: darken($primary-color, 10%);
  }
}

.card {
  @apply p-6 rounded-lg shadow;
  background-color: $card-bg;
  color: $text-dark;
}
```

---

## 📄 Step 4: Main SCSS File

```scss
// main.scss
@tailwind base;
@tailwind components;
@tailwind utilities;

@import './variables';
@import './components';
```

---

## 🧪 Step 5: HTML Markup (index.html)

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>White-Label SaaS</title>
  <link rel="stylesheet" href="/dist/style.css" />
</head>
<body class="bg-gray-100 text-gray-900">
  <header class="text-center py-8">
    <h1 class="text-4xl font-bold">🚀 Your SaaS Platform</h1>
    <p class="text-lg mt-2">Fully customizable white-label solution</p>
  </header>

  <section class="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto p-6">
    <div class="card">
      <h2 class="text-xl font-semibold mb-2">Fast Setup</h2>
      <p>Deploy and go live in minutes with our built-in templates.</p>
    </div>
    <div class="card">
      <h2 class="text-xl font-semibold mb-2">Custom Themes</h2>
      <p>Customize brand colors, fonts, and layouts using SCSS.</p>
    </div>
    <div class="card">
      <h2 class="text-xl font-semibold mb-2">Fully Responsive</h2>
      <p>Built with Tailwind, it looks great on all devices.</p>
    </div>
  </section>

  <footer class="text-center py-8">
    <button class="btn btn-primary">Get Started</button>
  </footer>
</body>
</html>
```

---

## 🌗 Step 6: (Optional) Dark Mode Toggle in JS

```js
// main.js
const toggleDark = () => {
  document.body.classList.toggle("dark");
};
```

Add a dark theme in `tailwind.config.js`:

```js
darkMode: 'class',
```

---

## ✅ What Students Will Learn in This Project

| Skill                              | Learned |
| ---------------------------------- | ------- |
| Utility-first layout with Tailwind | ✅       |
| SCSS theme variables & partials    | ✅       |
| @apply usage in SCSS               | ✅       |
| Reusable components                | ✅       |
| Integration in real-world layout   | ✅       |

---

## 🧠 Bonus Tip

You can build multiple **white-label themes** by swapping the `_variables.scss` file and recompiling:

```bash
sass src/styles/main.scss dist/theme-blue.css
sass src/styles/main.scss dist/theme-green.css
```

---

## 🏁 Project Complete!

You've now built a **real SaaS landing page**, fully customizable using SCSS + Tailwind — exactly what big tech teams do!

