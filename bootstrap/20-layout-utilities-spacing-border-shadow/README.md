# 📐 Chapter 20: Bootstrap Layout Utilities (Spacing, Sizing, Borders, Shadows)

> 🎯 *Goal: Master Bootstrap’s utility-first classes for layout, spacing, sizing, borders, and shadows — without writing any custom CSS.*

---

## ✅ What You’ll Learn:

* How Bootstrap’s utility-first classes work
* Spacing utilities (`m`, `p`, `mx`, `py`, etc.)
* Width and height utilities
* Border and border-radius utilities
* Shadow utilities for elevation
* Practical layout examples with only utility classes

---

## 🧠 1. What are Utility Classes?

**Utility classes** are predefined single-purpose CSS classes that apply a specific style directly to an element.

🔹 No need for custom CSS
🔹 Clean, consistent, and fast layout building
🔹 Easy responsive design

Example:

```html
<div class="p-3 m-2 bg-light">Hello Bootstrap</div>
```

---

## 📏 2. Spacing Utilities (Margin & Padding)

### Format:

```
{property}{sides}-{breakpoint?}-{size}
```

| Property | Meaning |
| -------- | ------- |
| `m`      | margin  |
| `p`      | padding |

### Sides:

| Shortcut | Sides        |
| -------- | ------------ |
| `t`      | top          |
| `b`      | bottom       |
| `l`      | left         |
| `r`      | right        |
| `x`      | left & right |
| `y`      | top & bottom |
| blank    | all sides    |

---

### 🔢 Spacing Size Scale

| Value  | Spacing                               |
| ------ | ------------------------------------- |
| `0`    | 0                                     |
| `1`    | 0.25rem                               |
| `2`    | 0.5rem                                |
| `3`    | 1rem                                  |
| `4`    | 1.5rem                                |
| `5`    | 3rem                                  |
| `auto` | automatic margin (for centering etc.) |

---

### 🧪 Examples:

```html
<div class="m-3 p-4">All Margin & Padding</div>
<div class="mt-5 mb-2">Margin Top & Bottom</div>
<div class="mx-auto">Horizontally Centered</div>
<div class="px-3 py-2">Horizontal & Vertical Padding</div>
```

---

## 📐 3. Width & Height Utilities

Bootstrap gives you control over the size of elements with simple classes.

### Width Utilities:

```html
.w-25     <!-- 25% width -->
.w-50     <!-- 50% width -->
.w-75     <!-- 75% width -->
.w-100    <!-- 100% width -->
.w-auto   <!-- automatic width -->
```

### Height Utilities:

```html
.h-25     <!-- 25% height -->
.h-50
.h-75
.h-100
.h-auto
```

---

### Example:

```html
<div class="bg-primary w-50 p-3 text-white">50% Width</div>
<div class="bg-success h-100 p-2 text-white" style="height: 200px;">Full Height Inside 200px</div>
```

---

## 🎨 4. Borders and Rounded Corners

### Border Classes:

| Class                                   | Description        |
| --------------------------------------- | ------------------ |
| `border`                                | Adds all borders   |
| `border-top`                            | Top only           |
| `border-bottom`                         | Bottom only        |
| `border-start`                          | Left (LTR)         |
| `border-end`                            | Right (LTR)        |
| `border-0`                              | Remove all borders |
| `border-danger`, `border-success`, etc. | Colored borders    |

---

### Rounded Corners:

| Class            | Description                  |
| ---------------- | ---------------------------- |
| `rounded`        | Rounded on all sides         |
| `rounded-top`    | Top corners only             |
| `rounded-circle` | Circle (for images, avatars) |
| `rounded-0`      | No rounding                  |

---

### Example:

```html
<div class="border border-success rounded p-3">Box with Green Border and Rounded Corners</div>

<img src="avatar.jpg" class="rounded-circle" width="100" />
```

---

## 🕶️ 5. Shadows (Elevations)

Add shadows using these classes:

| Class         | Description          |
| ------------- | -------------------- |
| `shadow-sm`   | Small shadow         |
| `shadow`      | Regular shadow       |
| `shadow-lg`   | Large shadow         |
| `shadow-none` | No shadow (override) |

---

### Example:

```html
<div class="shadow-lg p-4 mb-5 bg-white rounded">
  Elevated Card with Shadow
</div>
```

---

## 🧱 6. Real-World Layout Example (No CSS)

```html
<div class="container my-5">
  <div class="row">
    <div class="col-md-4 p-4 shadow-sm border rounded">
      <h5 class="mb-3">Card One</h5>
      <p>With spacing, border, and shadow</p>
    </div>
    <div class="col-md-4 p-4 shadow-sm border rounded ms-3">
      <h5 class="mb-3">Card Two</h5>
      <p>Built using utility classes only</p>
    </div>
  </div>
</div>
```

✅ You didn’t write a single custom CSS rule!

---

## 🧪 Challenge Task

> 🎯 **Build a pricing section** with 3 cards using:

* `p`, `m`, `shadow`, `rounded`, `border`, `w-100`
* Bonus: Make it responsive using `col-md-4`, `col-lg-3`

---

## 📌 Summary

| Utility      | Use                                    |
| ------------ | -------------------------------------- |
| Spacing      | `m-3`, `pt-4`, `mx-auto`               |
| Width/Height | `w-50`, `h-auto`, `w-100`              |
| Borders      | `border`, `border-0`, `border-success` |
| Rounded      | `rounded`, `rounded-circle`            |
| Shadow       | `shadow`, `shadow-lg`                  |

---

## ✅ Next Up:

📘 **Chapter 21: Bootstrap Display, Position & Overflow Utilities**

> Learn how to control visibility, layout type (block, flex, grid), positioning (absolute, sticky), and overflow using Bootstrap's built-in utility classes.
