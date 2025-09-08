# 📘 Chapter 3: Tailwind Configuration & Customization

### 🎯 Learning Objectives:

By the end of this chapter, students will:

* Understand the role and structure of `tailwind.config.js`
* Learn how to extend Tailwind's default theme
* Customize colors, fonts, spacing, breakpoints
* Enable and use **Dark Mode**
* Set up `content` paths correctly (to purge unused styles)
* Understand the difference between **extend** vs **override**
* Begin building a personalized design system

---

## 🧠 What is `tailwind.config.js`?

> Tailwind’s configuration file is like your **design system control panel**.

It lets you:

* Customize the look and feel of your project
* Add or override utility classes
* Enable plugins like dark mode, typography, forms
* Define file paths so Tailwind can **purge unused CSS**

---

## 🛠️ How to Generate the Config File

If you used the CLI or Vite method:

```bash
npx tailwindcss init
```

This creates a minimal config:

```js
// tailwind.config.js
module.exports = {
  content: [],
  theme: {
    extend: {},
  },
  plugins: [],
}
```

---

## 🔍 Step-by-Step: How Tailwind Uses This File

### ✅ 1. The `content` Array (Purging Unused CSS)

You must define which files Tailwind should scan to remove unused styles.

```js
content: [
  "./index.html",
  "./src/**/*.{html,js}"
],
```

> 🧠 If you forget to add paths, **Tailwind won’t generate the CSS you use** in those files!

---

### ✅ 2. The `theme` Section

This is where you **customize your design tokens** — like colors, spacing, fonts, screens, etc.

```js
theme: {
  extend: {
    colors: {
      primary: '#1D4ED8',
      brand: {
        light: '#93C5FD',
        DEFAULT: '#3B82F6',
        dark: '#1E40AF',
      }
    },
    fontFamily: {
      heading: ['Poppins', 'sans-serif'],
      body: ['Open Sans', 'sans-serif']
    },
    spacing: {
      '72': '18rem',
      '84': '21rem'
    }
  }
}
```

### 📌 `extend` vs override:

* `extend`: adds to default theme (recommended)
* direct keys (e.g., `colors: {}`): replaces default values

---

## 🎨 Custom Color Example

```js
colors: {
  primary: '#4F46E5', // New utility: bg-primary, text-primary
  danger: '#DC2626',
}
```

In HTML:

```html
<button class="bg-primary text-white py-2 px-4 rounded">
  Custom Primary Button
</button>
```

---

## 🔤 Custom Font Family

```js
fontFamily: {
  heading: ['"Poppins"', 'sans-serif'],
  body: ['"Inter"', 'sans-serif'],
}
```

In HTML:

```html
<h1 class="font-heading text-3xl">Heading with Poppins</h1>
<p class="font-body text-gray-600">Body text with Inter</p>
```

---

## 📱 Custom Breakpoints (Screens)

```js
screens: {
  'sm': '480px',
  'md': '768px',
  'lg': '1024px',
  'xl': '1280px',
  '2xl': '1536px',
}
```

Used like:

```html
<div class="text-sm md:text-lg xl:text-2xl">Responsive Text</div>
```

---

## 🌗 Enabling Dark Mode

```js
darkMode: 'class', // or 'media'
```

In HTML:

```html
<html class="dark"> <!-- toggles dark mode -->
  <div class="bg-white dark:bg-gray-900 text-black dark:text-white">
    This section supports dark mode!
  </div>
</html>
```

🔁 We can toggle `.dark` class using JavaScript in later chapters.

---

## 🧩 Adding Plugins

Example: Typography plugin

```bash
npm install @tailwindcss/typography
```

```js
plugins: [
  require('@tailwindcss/typography')
]
```

Use in HTML:

```html
<article class="prose">
  <h1>Hello Typography</h1>
  <p>This is clean, elegant text styling!</p>
</article>
```

---

## 💡 Pro Tip: Keep a Global Design System

Define colors, fonts, spacing, etc., once in config — then use consistently across all components.

This builds your **own professional Tailwind design system** — a skill companies love.

---

## ✅ Chapter Practice Task

Modify your `tailwind.config.js` to:

1. Add a `primary` color (blue or green)
2. Add a custom font like `"Inter"` or `"Poppins"`
3. Enable `darkMode: 'class'`
4. Use your custom color in a button and test both light and dark themes.

```html
<button class="bg-primary text-white font-heading px-4 py-2 rounded-lg dark:bg-white dark:text-primary">
  Custom Themed Button
</button>
```

---

## 🎓 Summary

| Feature                      | What it Does                                     |
| ---------------------------- | ------------------------------------------------ |
| `content`                    | Scans files for class names                      |
| `extend`                     | Adds to default theme                            |
| `colors`, `fonts`, `spacing` | Define design tokens                             |
| `darkMode`                   | Enable theme switching                           |
| `plugins`                    | Add more functionality (e.g., forms, typography) |
