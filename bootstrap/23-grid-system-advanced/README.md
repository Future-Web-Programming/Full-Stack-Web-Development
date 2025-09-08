# 🧱 Chapter 23: Bootstrap Grid System (Advanced)

> ✅ *Goal: Master responsive layouts using Bootstrap's powerful 12-column grid system combined with Flexbox utilities.*

---

## 📚 What You’ll Learn:

* Deep dive into Bootstrap's 12-column grid
* Responsive breakpoints (`col-sm`, `col-md`, `col-lg`, etc.)
* Nesting grids and offsetting columns
* Auto-layout columns vs fixed-width
* Column ordering and reordering
* Grid with Flexbox utilities
* Real-world examples and patterns

---

## 🗂️ 1. Grid Basics Refresher

```html
<div class="container">
  <div class="row">
    <div class="col">Column A</div>
    <div class="col">Column B</div>
  </div>
</div>
```

* `container`: adds padding and centers layout
* `row`: wraps columns
* `col`: auto-distributes width equally

---

## 🧮 2. 12-Column Grid System

The grid system is based on **12 columns**.

```html
<div class="row">
  <div class="col-4">Width: 4</div>
  <div class="col-8">Width: 8</div>
</div>
```

> ⚠️ The total of column widths inside a row should not exceed 12.

---

## 📱 3. Responsive Column Classes

| Class      | Screen Size | Min Width |
| ---------- | ----------- | --------- |
| `col-`     | Extra small | `<576px`  |
| `col-sm-`  | Small       | `≥576px`  |
| `col-md-`  | Medium      | `≥768px`  |
| `col-lg-`  | Large       | `≥992px`  |
| `col-xl-`  | Extra Large | `≥1200px` |
| `col-xxl-` | XXL         | `≥1400px` |

```html
<div class="row">
  <div class="col-12 col-md-6 col-lg-4">Responsive</div>
</div>
```

---

## 🔄 4. Auto Layout Columns

When using just `col`, Bootstrap auto-divides space equally.

```html
<div class="row">
  <div class="col">1</div>
  <div class="col">2</div>
  <div class="col">3</div>
</div>
```

> All three columns will be of equal width.

---

## 🔀 5. Column Reordering

Use `order` classes:

```html
<div class="row">
  <div class="col order-3">Third</div>
  <div class="col order-1">First</div>
  <div class="col order-2">Second</div>
</div>
```

✅ Responsive ordering is also available: `order-md-1`, `order-lg-3`, etc.

---

## ↔️ 6. Offset Columns

Push a column to the right by using offset:

```html
<div class="row">
  <div class="col-md-4 offset-md-4">Centered block</div>
</div>
```

---

## 🪟 7. Nesting Grids

Grids can be nested inside columns for complex layouts:

```html
<div class="row">
  <div class="col-md-6">
    <div class="row">
      <div class="col-6">Nested 1</div>
      <div class="col-6">Nested 2</div>
    </div>
  </div>
</div>
```

---

## 🧠 8. Combining Grid with Flex Utilities

You can mix grids with Flexbox classes for more control:

```html
<div class="row d-flex align-items-center">
  <div class="col-md-6">Image</div>
  <div class="col-md-6">Text aligned center</div>
</div>
```

---

## 💡 9. Gutters and Gaps

Control spacing between columns:

* `g-0` to `g-5` → sets gutters (horizontal and vertical)
* `gx-*` → horizontal gutters only
* `gy-*` → vertical gutters only

```html
<div class="row g-4">
  <div class="col">A</div>
  <div class="col">B</div>
</div>
```

---

## 🧰 10. Real-World Example: Responsive Services Section

```html
<div class="container my-5">
  <div class="row g-4">
    <div class="col-12 col-md-6 col-lg-4">
      <div class="p-4 bg-light rounded shadow-sm">Service 1</div>
    </div>
    <div class="col-12 col-md-6 col-lg-4">
      <div class="p-4 bg-light rounded shadow-sm">Service 2</div>
    </div>
    <div class="col-12 col-md-6 col-lg-4">
      <div class="p-4 bg-light rounded shadow-sm">Service 3</div>
    </div>
  </div>
</div>
```

✅ Mobile-first layout
✅ Responsive column widths
✅ Gutters added with `g-4`

---

## 🎯 Challenge Task

> Build a 3-column pricing table that:

* Stacks on mobile
* Is centered using offset
* Reorders columns on larger screens
* Uses `g-3`, `shadow`, and `rounded`

---

## 📌 Summary

| Concept        | Utility                             |
| -------------- | ----------------------------------- |
| Grid Container | `.container` / `.container-fluid`   |
| Grid Rows      | `.row`                              |
| Columns        | `.col`, `.col-6`, `.col-md-4`, etc. |
| Offset         | `.offset-*`                         |
| Order          | `.order-*`                          |
| Nesting        | Grid inside a column                |
| Gutters        | `g-*`, `gx-*`, `gy-*`               |
| Responsive     | `.col-sm-*`, `.col-md-*`, etc.      |

---

## ✅ Up Next:

📘 **Chapter 24: Bootstrap Vertical & Horizontal Alignment Techniques**

> Learn how to vertically center content, horizontally align sections, and combine utility classes for perfect positioning!
