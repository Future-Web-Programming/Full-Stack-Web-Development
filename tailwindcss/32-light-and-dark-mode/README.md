# 🌗 **Chapter 32: Building a Light/Dark Mode Switcher using Tailwind CSS + LocalStorage**

---

## 🎯 \*\*Chapter Goal:

Empower students to add a modern, user-friendly Light/Dark mode switch to any website\*\*—with Tailwind’s built-in dark mode support and LocalStorage for remembering user preference.

---

## 📘 Topics Covered:

### ✅ 1. Understanding Tailwind's Dark Mode

* Tailwind supports two strategies:

  * `media` → based on system settings
  * `class` → toggle with a class (recommended)
* Configuration in `tailwind.config.js`:

  ```js
  module.exports = {
    darkMode: 'class', // or 'media'
  }
  ```

---

### ✅ 2. Creating a Toggle Button (Light ↔ Dark)

```html
<button id="theme-toggle" class="p-2 rounded bg-gray-300 dark:bg-gray-700">
  Toggle Theme
</button>
```

---

### ✅ 3. Applying Dark Styles

Use `dark:` prefix:

```html
<div class="bg-white text-black dark:bg-gray-900 dark:text-white">
  Hello World!
</div>
```

---

### ✅ 4. Implementing Theme Toggle with JavaScript

Add the class `.dark` to `<html>` manually:

```js
const toggleBtn = document.getElementById('theme-toggle');
const html = document.documentElement;

toggleBtn.addEventListener('click', () => {
  html.classList.toggle('dark');
  localStorage.setItem('theme', html.classList.contains('dark') ? 'dark' : 'light');
});
```

---

### ✅ 5. Remember User Preference with LocalStorage

On page load, restore preference:

```js
if (localStorage.getItem('theme') === 'dark') {
  document.documentElement.classList.add('dark');
}
```

---

### ✅ 6. Adding System Preference Fallback (Optional)

```js
if (localStorage.getItem('theme') === 'dark' ||
    (!localStorage.getItem('theme') && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
  document.documentElement.classList.add('dark');
}
```

---

### ✅ 7. Dark Mode Styling Best Practices

* Avoid `bg-white`, prefer utility layers (`bg-neutral-100`, `text-gray-900`)
* Use Tailwind’s semantic color utility scale
* Example:

  ```html
  <div class="bg-neutral-100 text-gray-800 dark:bg-neutral-900 dark:text-gray-100">
    This works in both themes.
  </div>
  ```

---

## 🔥 Mini Project: Build a Light/Dark Themed Blog Card

Create a blog card with:

* Author profile
* Article title + summary
* Light/Dark theme support with toggle
* Use transition classes like:

  * `transition-colors duration-300 ease-in-out`

---

## 📚 Homework:

> 🎨 Rebuild your personal portfolio or homepage with light/dark support.
> Save theme using LocalStorage.
> Bonus: Add a floating toggle button that persists across pages.

---

## ✅ Summary Checklist

* [x] Tailwind dark mode enabled
* [x] Toggle with button
* [x] Save mode in LocalStorage
* [x] Restore mode on reload
* [x] Use `dark:` classes effectively
* [x] Accessible theme contrast

