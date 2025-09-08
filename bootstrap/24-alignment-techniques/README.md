# 🧱 Chapter 24: Bootstrap Vertical & Horizontal Alignment Techniques

> 🎯 *Goal: Learn how to vertically and horizontally align elements using Bootstrap’s built-in Flexbox utilities, grid helpers, and spacing classes.*

---

## 📚 What You’ll Learn

* Vertical alignment using Flexbox
* Horizontal alignment in rows and containers
* Using `.align-items-*`, `.justify-content-*`
* Centering using `.mx-auto`, `.text-center`, `.align-self-*`
* Aligning elements in columns and nested layouts
* Responsive alignment techniques
* Real-world layout examples

---

## 🧰 1. Horizontal Alignment with Flexbox

Bootstrap provides `.justify-content-*` classes for horizontal alignment in a **Flex container**:

| Class                      | Alignment      |
| -------------------------- | -------------- |
| `.justify-content-start`   | Left (default) |
| `.justify-content-center`  | Center         |
| `.justify-content-end`     | Right          |
| `.justify-content-between` | Space between  |
| `.justify-content-around`  | Space around   |
| `.justify-content-evenly`  | Equal spacing  |

### ✅ Example:

```html
<div class="d-flex justify-content-center">
  <button class="btn btn-primary">Centered Button</button>
</div>
```

---

## ⬆️ 2. Vertical Alignment with Flexbox

Use `.align-items-*` to control **vertical alignment** inside Flexbox containers.

| Class                 | Effect            |
| --------------------- | ----------------- |
| `.align-items-start`  | Top-align         |
| `.align-items-center` | Vertically center |
| `.align-items-end`    | Bottom-align      |

### ✅ Example:

```html
<div class="d-flex align-items-center" style="height: 200px;">
  <p class="m-0">Vertically Centered Text</p>
</div>
```

> You must give the container a height for vertical centering to be visible.

---

## 🧩 3. Align Items Per Column (`align-self-*`)

To align **individual elements** inside a Flexbox, use:

* `align-self-start`
* `align-self-center`
* `align-self-end`

```html
<div class="d-flex" style="height: 150px;">
  <div class="align-self-end">I’m bottom aligned</div>
</div>
```

---

## 🧷 4. Align Text Content

Use Bootstrap’s `text-*` utilities for inline or block alignment.

```html
<p class="text-start">Left aligned</p>
<p class="text-center">Center aligned</p>
<p class="text-end">Right aligned</p>
```

---

## 🎯 5. Centering Block Elements Horizontally

Use `.mx-auto` to horizontally center block-level elements like cards or buttons.

```html
<button class="btn btn-success d-block mx-auto">Center Me</button>
```

✅ Works only when the element has a width (e.g., `d-block`, not `w-100`).

---

## 📐 6. Vertical Centering in Grid Rows

Grid rows (`.row`) are Flex containers, so vertical alignment works using `.align-items-*`.

```html
<div class="row align-items-center" style="height: 200px;">
  <div class="col">
    <p>I am centered vertically</p>
  </div>
</div>
```

---

## 📱 7. Responsive Alignment

You can make alignment responsive by combining classes:

```html
<div class="d-flex justify-content-center justify-content-md-between">
  <button class="btn btn-primary">Responsive Align</button>
</div>
```

---

## 🔄 8. Combining Alignment Utilities

```html
<div class="d-flex align-items-center justify-content-between" style="height: 150px;">
  <span>Left</span>
  <span>Right</span>
</div>
```

This layout:

* Centers vertically
* Justifies content between left and right

---

## 🧪 9. Real-World Example: Vertically Centered Hero Section

```html
<section class="d-flex align-items-center justify-content-center text-center" style="height: 100vh;">
  <div>
    <h1 class="display-4">Welcome to Bootstrap Mastery</h1>
    <p class="lead">This content is vertically & horizontally centered!</p>
    <a href="#" class="btn btn-primary">Get Started</a>
  </div>
</section>
```

---

## ✍️ 10. Challenge Task

> Create a 2-column layout where:

* Left side has an image (centered vertically)
* Right side has text aligned to top on mobile, centered on large screens
* Use `.align-items-*`, `.justify-content-*`, and `responsive classes`

---

## 📌 Summary

| Task                              | Utility                            |
| --------------------------------- | ---------------------------------- |
| Horizontally center block element | `.mx-auto`                         |
| Center text                       | `.text-center`                     |
| Flexbox horizontal align          | `.justify-content-*`               |
| Flexbox vertical align            | `.align-items-*`                   |
| Individual item align             | `.align-self-*`                    |
| Responsive control                | `.justify-content-md-center`, etc. |

---

## ✅ Up Next:

📘 **Chapter 25: Bootstrap Cards (Advanced Components)**

> Build advanced content layouts with cards, including headers, footers, buttons, backgrounds, overlays, and more.
