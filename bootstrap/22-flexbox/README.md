
# 🎯 Chapter 22: Bootstrap Flexbox Utilities

> ✅ *Goal: Master Flexbox layout using Bootstrap’s utility classes—no custom CSS needed!*

---

## 📚 What You’ll Learn:

* What is Flexbox?
* Bootstrap Flexbox classes: `d-flex`, `justify-content-*`, `align-items-*`, etc.
* Control direction, alignment, gaps, wrap, and grow/shrink behavior
* Responsive Flexbox utilities
* Build real-world layout examples with Bootstrap Flex

---

## 🔧 1. Enable Flexbox

Use `d-flex` to make an element a flex container:

```html
<div class="d-flex">
  <div>Item 1</div>
  <div>Item 2</div>
</div>
```

---

## 🧭 2. Flex Direction

Control direction of flex items:

| Class                 | Description              |
| --------------------- | ------------------------ |
| `flex-row`            | (default) Horizontal row |
| `flex-column`         | Vertical column          |
| `flex-row-reverse`    | Reverse horizontal       |
| `flex-column-reverse` | Reverse vertical         |

```html
<div class="d-flex flex-column">
  <div>One</div>
  <div>Two</div>
</div>
```

---

## 🎯 3. Justify Content

Controls horizontal alignment:

| Class                     | Description                |
| ------------------------- | -------------------------- |
| `justify-content-start`   | Align items left (default) |
| `justify-content-center`  | Center items               |
| `justify-content-end`     | Align right                |
| `justify-content-between` | Space between              |
| `justify-content-around`  | Space around               |
| `justify-content-evenly`  | Equal spacing              |

```html
<div class="d-flex justify-content-between">
  <span>Left</span>
  <span>Right</span>
</div>
```

---

## ⬆️ 4. Align Items (Vertical Alignment)

| Class                  | Description              |
| ---------------------- | ------------------------ |
| `align-items-start`    | Top aligned              |
| `align-items-center`   | Centered                 |
| `align-items-end`      | Bottom aligned           |
| `align-items-stretch`  | Stretch to fill          |
| `align-items-baseline` | Align with text baseline |

```html
<div class="d-flex align-items-center" style="height: 100px;">
  <div class="bg-primary text-white p-2">A</div>
  <div class="bg-warning text-dark p-5">B</div>
</div>
```

---

## 🔁 5. Flex Wrap

| Class               | Description                       |
| ------------------- | --------------------------------- |
| `flex-wrap`         | Items wrap to next line (default) |
| `flex-nowrap`       | No wrapping                       |
| `flex-wrap-reverse` | Wrap in reverse                   |

```html
<div class="d-flex flex-wrap">
  <div class="p-2">Box 1</div>
  <div class="p-2">Box 2</div>
  ...
</div>
```

---

## 🪄 6. Align Self (Individual items)

Control vertical alignment for **one item only**:

| Class               | Description |
| ------------------- | ----------- |
| `align-self-start`  | Top         |
| `align-self-center` | Center      |
| `align-self-end`    | Bottom      |

```html
<div class="d-flex" style="height: 100px;">
  <div class="align-self-end bg-info p-2">I'm lower</div>
</div>
```

---

## 📏 7. Flex Grow & Shrink

| Class                           | Description                 |
| ------------------------------- | --------------------------- |
| `flex-grow-1`                   | Let item grow to fill space |
| `flex-shrink-1`                 | Allow shrinking (default)   |
| `flex-fill`                     | Grow to equal size          |
| `flex-grow-0` / `flex-shrink-0` | Disable grow/shrink         |

```html
<div class="d-flex">
  <div class="flex-grow-1 bg-success p-3">Grow me</div>
  <div class="bg-dark text-white p-3">Don't grow</div>
</div>
```

---

## 🔄 8. Responsive Flex Classes

Use format:

```
d-{breakpoint}-flex
flex-{breakpoint}-row
justify-content-{breakpoint}-center
```

Example:

```html
<div class="d-flex flex-column flex-md-row justify-content-md-between">
  <div>Left</div>
  <div>Right</div>
</div>
```

---

## 🧱 9. Real Project Example

```html
<div class="container my-4">
  <div class="d-flex flex-column flex-lg-row justify-content-between align-items-center gap-3">
    <div class="bg-light p-3 rounded shadow-sm w-100">Card 1</div>
    <div class="bg-light p-3 rounded shadow-sm w-100">Card 2</div>
    <div class="bg-light p-3 rounded shadow-sm w-100">Card 3</div>
  </div>
</div>
```

🧠 This layout:

* Stacks vertically on mobile
* Horizontally aligns on large screens
* Auto wraps and evenly spaces items

---

## 🎯 Challenge Exercise

> Build a responsive **Pricing Table** using:

* `d-flex`
* `flex-column` for mobile
* `flex-lg-row` for desktop
* `gap-4`, `shadow`, `rounded`, `align-items-stretch`

---

## 🧾 Summary Table

| Utility                        | Description                          |
| ------------------------------ | ------------------------------------ |
| `d-flex`                       | Enable Flexbox                       |
| `flex-row`, `flex-column`      | Set direction                        |
| `justify-content-*`            | Align horizontally                   |
| `align-items-*`                | Align vertically                     |
| `flex-wrap`, `nowrap`          | Control wrapping                     |
| `flex-grow-*`, `flex-shrink-*` | Grow/shrink behavior                 |
| `align-self-*`                 | Control alignment of individual item |

---

## ✅ Next Up:

📘 **Chapter 23: Bootstrap Grid System (Advanced)**

> Learn how to combine Flexbox and Bootstrap’s grid system to create perfect responsive layouts!
