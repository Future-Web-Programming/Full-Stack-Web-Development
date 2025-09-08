# 📘 **Chapter 21: Bootstrap Themes & Dark Mode**

**🎯 Topic**: *Custom Themes, Dark/Light Switchers Using Variables and Classes*
**🎓 Difficulty**: Intermediate
**🧑‍🎨 Objective**: Master Bootstrap's theming system and build a **Dark/Light mode switcher**

---

## 🔍 What is Bootstrap Theming?

Bootstrap’s theming system allows you to customize the **look and feel** of your entire website using:

* CSS variables (`--bs-*`)
* Sass variables (`$primary`, `$font-family-base`)
* Bootstrap’s **dark mode support**
* Optional 3rd party or custom themes

---

## 🎨 Theme Customization Options

| Method                     | Description                                              |
| -------------------------- | -------------------------------------------------------- |
| **CSS Variables**          | Modify at runtime (great for Dark Mode)                  |
| **Sass Variables**         | Compile-time customization (recommended for themes)      |
| **Theme Utilities**        | Easily theme buttons, alerts, etc., with utility classes |
| **Custom Class Switching** | Toggle between `.theme-light` and `.theme-dark`          |

---

## 🧪 Example 1: Overriding Theme Colors with Sass

```scss
// _custom.scss

$primary: #4b0082;   // Indigo
$secondary: #ff4500; // OrangeRed

@import "node_modules/bootstrap/scss/bootstrap";
```

🛠️ Compile using Vite, Webpack, or Laravel Mix.

---

## 🌙 Implementing Dark/Light Mode Switcher

There are **two main ways** to implement Dark Mode in Bootstrap:

### ✅ Option 1: CSS Variable-Based Dark Mode (Preferred)

**Step 1**: Wrap your app in a theme class:

```html
<body class="theme-light">
<!-- OR -->
<body class="theme-dark">
```

**Step 2**: Define light/dark variable overrides in SCSS:

```scss
.theme-dark {
  --bs-body-bg: #121212;
  --bs-body-color: #f1f1f1;
  --bs-primary: #0d6efd;
  --bs-secondary: #6c757d;
}

.theme-light {
  --bs-body-bg: #fff;
  --bs-body-color: #212529;
  --bs-primary: #0d6efd;
}
```

---

### ✅ Option 2: Auto Detect OS Dark Mode

Use `@media (prefers-color-scheme: dark)`:

```scss
@media (prefers-color-scheme: dark) {
  body {
    --bs-body-bg: #111;
    --bs-body-color: #eee;
  }
}
```

⚠️ This method is **automatic**, but you lose manual toggle control.

---

## 💡 Bonus: JavaScript Toggle Switch

```html
<button id="toggleTheme" class="btn btn-secondary">Toggle Theme</button>
```

```js
const btn = document.getElementById("toggleTheme");
btn.onclick = () => {
  document.body.classList.toggle("theme-dark");
  document.body.classList.toggle("theme-light");
};
```

---

## 🧪 Example 2: Themed Components

```html
<div class="card text-bg-primary mb-3">
  <div class="card-body">
    <h5 class="card-title">Dark Mode Themed Card</h5>
    <p class="card-text">This card changes based on the selected theme.</p>
  </div>
</div>
```

With `.theme-dark`, the card will auto-adapt if you’re using `--bs-primary`.

---

## 🧰 Tools & Resources

| Tool                   | Use                                   |
| ---------------------- | ------------------------------------- |
| Bootstrap Sass         | Required for deep theme customization |
| Vite/Webpack           | To compile custom Bootstrap builds    |
| Bootswatch             | Free ready-made Bootstrap themes      |
| `prefers-color-scheme` | Native CSS dark mode support          |

---

## 🧠 Summary

| Feature              | Benefit                                         |
| -------------------- | ----------------------------------------------- |
| **CSS Variables**    | Great for runtime theming (dark/light switcher) |
| **Sass Variables**   | Best for deep customization                     |
| **Media Queries**    | Allows automatic OS-based dark mode             |
| **Custom Switchers** | Let users toggle themes manually                |

---

## 💼 Real-World Use Cases

| Scenario          | Application                                     |
| ----------------- | ----------------------------------------------- |
| Admin Panel       | Toggle light/dark themes via button             |
| Blog              | Use dark mode at night based on system settings |
| eCommerce         | Themed components based on seasons or branding  |
| Bootstrap SaaS UI | Support multiple themes for branding customers  |

---

## 📝 Assignment

> ✅ Create a full **Dark Mode Switcher** using a toggle button that changes the theme of your Bootstrap layout.
> ✅ Style `.card`, `.btn`, and `.alert` components using CSS variables.

---

## 🔗 Demo & Source Code

💻 [CodeSandbox Demo: Dark Mode Switcher](https://codesandbox.io/s/bootstrap-dark-mode-switcher)
🧾 [Download SCSS Theme Template (GitHub)](https://github.com/twbs/bootstrap-themes)
