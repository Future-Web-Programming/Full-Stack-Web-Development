

# 📘 **Chapter 3: Containers and Layouts in Bootstrap**

✅ *Mastering `.container`, `.row`, `.col` — The Backbone of Bootstrap Layouts*

---

## 🎯 **Chapter Goals**

By the end of this chapter, students will:

* Understand the concept of **containers** in Bootstrap
* Learn how the **Grid System** works (12-column layout)
* Build their first **responsive layout** using rows and columns
* Use **fluid vs fixed-width containers** for different design needs
* Practice creating simple layout structures

---

## 🧠 **What is a Container in Bootstrap?**

A **container** is the most basic layout element in Bootstrap. It wraps your content and centers it nicely on the page.

### ✅ Types of Containers:

| Class                     | Description                                                                          |
| ------------------------- | ------------------------------------------------------------------------------------ |
| `.container`              | Fixed-width container (changes at breakpoints)                                       |
| `.container-fluid`        | Full-width container (always 100% width)                                             |
| `.container-{breakpoint}` | Responsive container based on a specific screen size (`sm`, `md`, `lg`, `xl`, `xxl`) |

### 📦 Example:

```html
<div class="container">
  <h1>Hello, fixed container!</h1>
</div>

<div class="container-fluid">
  <h1>Hello, full-width layout!</h1>
</div>
```

---

## 🧱 **Bootstrap Grid System: Rows & Columns**

Bootstrap uses a **12-column grid system**. This means any row can contain up to 12 column units (in total).

### ✅ Structure:

```html
<div class="container">
  <div class="row">
    <div class="col">Column 1</div>
    <div class="col">Column 2</div>
  </div>
</div>
```

### 🔎 What’s Happening Here?

* `.container` holds everything
* `.row` creates a horizontal row
* `.col` automatically divides available space equally

---

## 🧮 **Custom Column Sizes (col-\*)**

You can manually assign sizes to columns using `col-{number}` classes:

| Class     | Description                                     |
| --------- | ----------------------------------------------- |
| `.col-6`  | Takes 6 out of 12 grid spaces                   |
| `.col-4`  | Takes 4 out of 12 (so 3 columns of equal width) |
| `.col-3`  | Four equal columns                              |
| `.col-12` | Full width column (1 per row)                   |

### 🎯 Example:

```html
<div class="row">
  <div class="col-4 bg-primary text-white p-3">4 cols</div>
  <div class="col-4 bg-success text-white p-3">4 cols</div>
  <div class="col-4 bg-danger text-white p-3">4 cols</div>
</div>
```

✅ Total: 4 + 4 + 4 = 12 → Perfect fit!

---

## 📱 **Responsive Columns (col-sm-*, col-md-*, etc.)**

Bootstrap allows responsive layouts using **breakpoint prefixes**:

```html
<div class="col-sm-12 col-md-6 col-lg-4">
  <!-- Full width on small, half on medium, 1/3 on large screens -->
</div>
```

### 📱 Breakpoints Table

| Class Prefix | Min Width |
| ------------ | --------- |
| `col-sm-*`   | ≥ 576px   |
| `col-md-*`   | ≥ 768px   |
| `col-lg-*`   | ≥ 992px   |
| `col-xl-*`   | ≥ 1200px  |
| `col-xxl-*`  | ≥ 1400px  |

---

## 🎨 **Spacing with Gutters & Utilities**

Bootstrap rows have built-in **gutters** (space between columns), but you can also control them:

* `.g-0` — no gap
* `.g-3` — medium gap
* `.gy-3` — vertical gap only
* `.gx-5` — horizontal gap only

---

## 🛠️ **Build a Simple 2-Column Layout (Starter Project)**

```html
<div class="container mt-5">
  <div class="row">
    <div class="col-md-6 bg-light p-4">
      <h2>Left Side</h2>
      <p>This is one half of the screen.</p>
    </div>
    <div class="col-md-6 bg-dark text-white p-4">
      <h2>Right Side</h2>
      <p>This is the other half.</p>
    </div>
  </div>
</div>
```

✅ Try resizing the screen to see the **responsive behavior!**

---

## 💻 **Try It Live (Online Editors)**

🔹 [CodePen Template](https://codepen.io/)
🔹 [Replit Starter](https://replit.com/)
🔹 [StackBlitz Live Preview](https://stackblitz.com/)

> *(Add links later once you publish these templates)*

---

## 🧠 **Practice Tasks (Mini Challenges)**

1. Create a 3-column layout using `.col-4`
2. Make it responsive: Use `.col-md-4 col-sm-12`
3. Try changing background colors and adding some spacing

---

## 🎥 **What We Covered in This Chapter**

✅ `.container`, `.container-fluid`, and breakpoints
✅ `.row` and `.col` layout structure
✅ Manual and responsive column sizing
✅ Gutters, spacing, and grid logic
✅ Built a real responsive layout!

---

## ✅ **Next Up: Chapter 4 — Bootstrap Grid System Deep Dive**

We’ll explore:

* Nested rows and columns
* Auto-layout columns
* Grid ordering and offsetting
* Real layout patterns (2-1 column, sidebar-main, etc.)
