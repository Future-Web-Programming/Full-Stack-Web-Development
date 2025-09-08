

# 🔘 Chapter 6: Mastering Buttons in Bootstrap

✅ *Explore Variants, Sizes, Groups, States & Real-World Usage*

---

## 🎯 **Chapter Objectives**

By the end of this chapter, students will:

* Master **all Bootstrap button types and variations**
* Use button **colors**, **sizes**, **outline styles**, and **states**
* Create **button groups**, **toolbars**, and **block-level buttons**
* Build real UI examples like **call-to-actions**, **filter menus**, and **nav controls**

---

## 🔰 **1. Basic Button Structure**

Bootstrap buttons are created using the `.btn` class + a **variant** like `.btn-primary`, `.btn-success`, etc.

```html
<button class="btn btn-primary">Primary</button>
<a href="#" class="btn btn-success">Success Link</a>
<input type="button" class="btn btn-danger" value="Danger" />
```

✅ Can be used on: `<button>`, `<a>`, `<input>`
✅ Add `disabled`, `active`, `aria-pressed` as needed

---

## 🎨 **2. Button Variants (Colors)**

| Class            | Description          |
| ---------------- | -------------------- |
| `.btn-primary`   | Main action (blue)   |
| `.btn-secondary` | Neutral gray action  |
| `.btn-success`   | Positive (green)     |
| `.btn-danger`    | Negative (red)       |
| `.btn-warning`   | Caution (orange)     |
| `.btn-info`      | Informational (teal) |
| `.btn-light`     | Light UI button      |
| `.btn-dark`      | Dark UI button       |

```html
<button class="btn btn-warning">Warning</button>
<button class="btn btn-info">Info</button>
```

---

## ✏️ **3. Outline Buttons**

Use `.btn-outline-*` to create outlined buttons with transparent backgrounds.

```html
<button class="btn btn-outline-primary">Outline Primary</button>
<button class="btn btn-outline-danger">Outline Danger</button>
```

---

## 📏 **4. Button Sizes**

| Class     | Description           |
| --------- | --------------------- |
| `.btn-lg` | Large button          |
| `.btn-sm` | Small button          |
| Default   | Medium (default size) |

```html
<button class="btn btn-primary btn-lg">Large</button>
<button class="btn btn-secondary btn-sm">Small</button>
```

---

## 🔒 **5. Disabled & Active States**

* Add `.disabled` or `disabled` attribute
* Add `.active` to simulate active state

```html
<button class="btn btn-secondary" disabled>Disabled</button>
<button class="btn btn-success active">Active Button</button>
```

🧠 Accessibility: Use `aria-disabled="true"` for `<a>` elements.

---

## 🔗 **6. Block-Level Buttons**

To make buttons full-width, use:

```html
<button class="btn btn-primary w-100">Full Width</button>
```

For responsiveness, combine with grid or flexbox utilities.

---

## 🔘 **7. Button Groups**

Group buttons horizontally or vertically:

### 🔹 Horizontal:

```html
<div class="btn-group">
  <button class="btn btn-primary">Left</button>
  <button class="btn btn-primary">Middle</button>
  <button class="btn btn-primary">Right</button>
</div>
```

### 🔹 Vertical:

```html
<div class="btn-group-vertical">
  <button class="btn btn-outline-dark">Top</button>
  <button class="btn btn-outline-dark">Middle</button>
  <button class="btn btn-outline-dark">Bottom</button>
</div>
```

---

## 🧰 **8. Button Toolbars**

Create toolbars by combining multiple button groups:

```html
<div class="btn-toolbar">
  <div class="btn-group me-2">
    <button class="btn btn-outline-secondary">1</button>
    <button class="btn btn-outline-secondary">2</button>
  </div>
  <div class="btn-group">
    <button class="btn btn-outline-secondary">A</button>
    <button class="btn btn-outline-secondary">B</button>
  </div>
</div>
```

🧠 Use `.me-2` or spacing utilities for gaps.

---

## 💡 **9. Real-World Examples**

### ✅ Call to Action:

```html
<div class="text-center mt-5">
  <h2 class="mb-3">Join Our Newsletter</h2>
  <button class="btn btn-success btn-lg">Subscribe Now</button>
</div>
```

---

### ✅ Filter Menu Buttons:

```html
<div class="btn-group">
  <button class="btn btn-outline-primary active">All</button>
  <button class="btn btn-outline-primary">Web</button>
  <button class="btn btn-outline-primary">Mobile</button>
</div>
```

---

## 🧠 **Practice Challenges**

1. Create a row of 3 large buttons using `.btn-group`
2. Make a pricing CTA with a `btn-lg`, `btn-success`, and `w-100`
3. Add a toolbar of icons using Bootstrap Icons + buttons
4. Build a dark-themed header with `.btn-outline-light` buttons

---

## 💻 **Live Practice Links**

* [CodePen Button Demo](https://codepen.io/)
* [Play on JSFiddle](https://jsfiddle.net/)
* [Bootstrap Sandbox](https://getbootstrap.com/docs/5.3/components/buttons/)

---

## 📦 **Quick Summary**

✅ `.btn` + variant for styles
✅ `.btn-outline-*` for borders only
✅ `.btn-sm`, `.btn-lg` for size
✅ `.disabled`, `.active`, `aria-pressed`
✅ `.btn-group`, `.btn-toolbar` for organization
✅ `w-100` or grid for full-width CTAs

---

## ⏭️ **Next Up: Chapter 7 — Images, Figures & Responsive Media in Bootstrap**

In Chapter 7, we'll explore:

* Making images responsive with `.img-fluid`
* Using figure components
* Image alignment, shapes, and thumbnails
* Responsive embed for videos and media
