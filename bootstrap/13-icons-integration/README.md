# 🎯 Chapter 13: Bootstrap Icons Integration

Welcome to **Chapter 13** of the **World’s Best Bootstrap Mastery Course**!
In this chapter, you'll learn how to **use Bootstrap Icons** to make your UI **modern, expressive, and professional**—without writing a single SVG manually!

---

## 📦 What You Will Learn

* What are Bootstrap Icons?
* How to include Bootstrap Icons in your project (CDN or npm)
* How to use icons with buttons, alerts, navbars, forms, etc.
* Icon sizing, coloring, alignment, and accessibility
* Real-world UI examples with icons

---

## 🔍 1. What Are Bootstrap Icons?

Bootstrap Icons are a free, open-source library of over **1,800+ SVG icons** designed to work **seamlessly with Bootstrap components**.

Official site: 👉 [https://icons.getbootstrap.com](https://icons.getbootstrap.com)

---

## 🛠️ 2. Installing Bootstrap Icons

### ✅ Option 1: Using CDN (Recommended for beginners)

Paste this inside your `<head>` tag:

```html
<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.11.1/font/bootstrap-icons.css">
```

### ✅ Option 2: Install via npm (for advanced projects)

```bash
npm install bootstrap-icons
```

Then import via:

```scss
@import "node_modules/bootstrap-icons/font/bootstrap-icons.scss";
```

---

## 🖼️ 3. Using Icons in HTML

Use the `<i>` tag or `<span>` with the class name of the icon:

```html
<i class="bi bi-alarm"></i> Alarm
<i class="bi bi-envelope-fill"></i> Email
<i class="bi bi-gear-fill"></i> Settings
```

📘 All icon class names start with `bi bi-`.

---

## 🎯 4. Using Icons with Components

### 🔘 With Buttons

```html
<button class="btn btn-primary">
  <i class="bi bi-check-circle me-1"></i> Submit
</button>
```

### 🚨 With Alerts

```html
<div class="alert alert-danger d-flex align-items-center" role="alert">
  <i class="bi bi-exclamation-triangle-fill me-2"></i>
  Error: Please try again later.
</div>
```

### 📄 With List Items

```html
<ul class="list-group">
  <li class="list-group-item">
    <i class="bi bi-check-circle-fill text-success me-2"></i> Task Completed
  </li>
</ul>
```

### 🔐 With Forms

```html
<div class="input-group mb-3">
  <span class="input-group-text"><i class="bi bi-person-fill"></i></span>
  <input type="text" class="form-control" placeholder="Username">
</div>
```

---

## 🎨 5. Icon Customization

### 🧱 Size Control

```html
<i class="bi bi-star" style="font-size: 2rem;"></i>
```

You can also use Bootstrap utility classes:

```html
<i class="bi bi-heart-fill fs-1"></i> <!-- fs-1 to fs-6 -->
```

### 🌈 Color Control

Use Bootstrap color classes:

```html
<i class="bi bi-check-circle-fill text-success"></i>
<i class="bi bi-x-circle-fill text-danger"></i>
```

---

## ♿ 6. Accessibility Tips

Add `aria-hidden="true"` if icon is decorative:

```html
<i class="bi bi-star" aria-hidden="true"></i>
```

Or add `aria-label` if it's meaningful:

```html
<i class="bi bi-bell" aria-label="Notification"></i>
```

---

## 💼 7. Real World UI Practice

Try designing the following:

✅ Alert with icon + close button
✅ Button with save icon
✅ Form input with user icon
✅ Navbar with search icon
✅ Task list with status icons

---

## 🧑‍💻 Online Editors

Test icons instantly in:

* [CodePen](https://codepen.io/)
* [PlayCode.io](https://playcode.io/)
* [JSFiddle](https://jsfiddle.net/)

---

## ✅ Summary

| Feature     | Syntax                                        |
| ----------- | --------------------------------------------- |
| Alarm Icon  | `<i class="bi bi-alarm"></i>`                 |
| Button Icon | `<button><i class="bi bi-save"></i></button>` |
| Color       | `text-danger`, `text-success`, etc.           |
| Size        | `fs-1` to `fs-6`, `style="font-size:..."`     |

---

## 🚀 What's Next?

In **Chapter 14**, we'll dive into **Bootstrap Grid System** — the heart of responsive layout design in Bootstrap. You’ll learn how to structure any web layout using rows, columns, and breakpoints.
