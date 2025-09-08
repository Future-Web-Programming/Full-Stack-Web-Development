# 📦 Chapter 21: Bootstrap Display, Position & Overflow Utilities

> 🎯 *Goal: Learn how to control layout behavior with Bootstrap utility classes like `display`, `position`, `overflow`, and more—without writing custom CSS!*

---

## ✅ What You’ll Learn:

* Display utilities: `d-block`, `d-flex`, `d-none`, etc.
* Position utilities: `position-relative`, `position-absolute`, etc.
* Responsive display changes
* Overflow handling: `overflow-auto`, `overflow-hidden`
* Visibility utilities
* Real layout examples without any CSS

---

## 📺 1. Display Utility Classes

These classes allow you to **set or change an element’s display** property:

| Class                      | Description                   |
| -------------------------- | ----------------------------- |
| `d-none`                   | Hides the element             |
| `d-block`                  | Makes the element block-level |
| `d-inline`                 | Makes the element inline      |
| `d-inline-block`           | Inline + block-like           |
| `d-flex`                   | Applies Flexbox               |
| `d-grid`                   | Applies CSS Grid              |
| `d-inline-flex`            | Inline + Flexbox              |
| `d-table` / `d-table-cell` | Table behaviors               |

---

### ✅ Responsive Display Classes

Use this format:

```
d-{breakpoint}-{value}
```

| Example             | Meaning                               |
| ------------------- | ------------------------------------- |
| `d-none d-md-block` | Hidden on mobile, visible on tablets+ |
| `d-lg-flex`         | Flexbox only on large screens         |

📱 Breakpoints:

* `sm` – ≥576px
* `md` – ≥768px
* `lg` – ≥992px
* `xl` – ≥1200px
* `xxl` – ≥1400px

---

### 🧪 Examples:

```html
<p class="d-none d-md-block">Only visible on tablet and larger</p>
<div class="d-flex justify-content-between">
  <span>Left</span>
  <span>Right</span>
</div>
```

---

## 📍 2. Position Utilities

Bootstrap provides shortcuts for controlling element positioning using `position-*` classes.

### Position Types:

| Class               | Description              |
| ------------------- | ------------------------ |
| `position-static`   | Default                  |
| `position-relative` | Used with offset helpers |
| `position-absolute` | Removed from normal flow |
| `position-fixed`    | Fixed to viewport        |
| `position-sticky`   | Sticky on scroll         |

---

### Offset Helpers:

To move elements with positioning:

```html
.top-0     .top-50     .bottom-0
.start-0   .start-50   .end-0
.translate-middle
```

Use `translate-middle` to center with `top-50 start-50`.

---

### 📦 Example (Absolute Center):

```html
<div class="position-relative" style="height: 300px;">
  <div class="position-absolute top-50 start-50 translate-middle bg-primary text-white p-3">
    I'm centered!
  </div>
</div>
```

---

## 💦 3. Overflow Utilities

Control content overflow easily:

| Class              | Description                 |
| ------------------ | --------------------------- |
| `overflow-auto`    | Adds scrollbars when needed |
| `overflow-hidden`  | Hides overflowing content   |
| `overflow-visible` | Default                     |
| `overflow-scroll`  | Always show scrollbars      |

---

### Example:

```html
<div class="overflow-auto" style="height: 150px;">
  <p>Long scrollable content...</p>
</div>
```

---

## 👁️ 4. Visibility Utilities

Control visibility without affecting layout.

| Class       | Description                                  |
| ----------- | -------------------------------------------- |
| `visible`   | Element is visible (default)                 |
| `invisible` | Element is hidden (but still takes up space) |

📍 Use `d-none` to completely remove from layout
📍 Use `invisible` to hide but retain layout space

---

### Example:

```html
<p class="invisible">You can't see me, but I still take space</p>
<p class="d-none">I am completely removed</p>
```

---

## 🧱 5. Real-World Layout Example

```html
<div class="container my-5">
  <div class="d-flex justify-content-between align-items-center p-4 bg-light position-relative">
    <h4 class="mb-0">Dashboard</h4>
    <button class="btn btn-primary position-absolute top-0 end-0 m-3">Action</button>
  </div>
</div>
```

✅ Combines display (`d-flex`), positioning (`position-absolute`), and spacing utilities.

---

## 💡 Pro Tip:

Use `position-sticky` on headers and navbars to create sticky effects without JavaScript.

```html
<nav class="navbar bg-dark text-white position-sticky top-0">Sticky Navbar</nav>
```

---

## 🧪 Challenge Task

> 🎯 **Build a modal-like component** using:

* `position-absolute`
* `top-50 start-50 translate-middle`
* `shadow`, `rounded`, and `overflow-auto`
* Bonus: Make it responsive using `d-none d-md-block`

---

## 🧾 Summary Table

| Feature    | Key Classes                                                   |
| ---------- | ------------------------------------------------------------- |
| Display    | `d-none`, `d-flex`, `d-grid`, `d-lg-block`                    |
| Position   | `position-relative`, `position-absolute`, `top-0`, `start-50` |
| Overflow   | `overflow-auto`, `overflow-hidden`                            |
| Visibility | `invisible`, `visible`                                        |

---

## ✅ Next Up:

📘 **Chapter 22: Bootstrap Flexbox Utilities**

> Master Flexbox the Bootstrap way—align items, justify content, control direction, wrapping, and spacing like a pro.
