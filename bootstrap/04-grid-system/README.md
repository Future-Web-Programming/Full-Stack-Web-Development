

# 📘 **Chapter 4: Bootstrap Grid System Deep Dive**

✅ *Nesting, Column Sizing, Ordering, Offsets, and Advanced Layout Patterns*

---

## 🎯 **Chapter Goals**

By the end of this chapter, students will:

* Understand how to **nest rows and columns**
* Create **auto-layout and fixed column** combinations
* Master **offsets**, **gutters**, and **column reordering**
* Build **real layout patterns** (2-column + sidebar, pricing plans, etc.)
* Become confident in crafting **responsive page structures**

---

## 🧠 **Recap: Bootstrap Grid Basics**

* Bootstrap’s grid system is built on **12 columns**
* Use `.row` and `.col` to create layout structure
* You can use **`.col` for auto sizing**, or **`.col-4` etc. for custom widths**

---

## 🔄 **1. Nesting Rows and Columns**

> Nesting allows you to add a new grid **inside a column** — useful for complex layouts.

### ✅ Example:

```html
<div class="container">
  <div class="row">
    <div class="col-6 bg-primary text-white">
      Parent Column

      <div class="row mt-3">
        <div class="col-6 bg-light text-dark">Nested Col 1</div>
        <div class="col-6 bg-dark text-white">Nested Col 2</div>
      </div>
    </div>
    <div class="col-6 bg-success text-white">
      Another Parent Column
    </div>
  </div>
</div>
```

✅ Try resizing it — nested grids still follow the 12-column system inside the parent.

---

## ⚖️ **2. Fixed vs Auto Layout Columns**

| Class    | Behavior                          |
| -------- | --------------------------------- |
| `.col`   | Auto-adjusts to remaining space   |
| `.col-6` | Takes fixed width of 6/12 columns |

### 🔧 Example:

```html
<div class="row">
  <div class="col-3 bg-danger text-white">Fixed (3)</div>
  <div class="col bg-secondary text-white">Auto</div>
</div>
```

✅ Useful when mixing fixed width sidebars with flexible content.

---

## 🧭 **3. Offsetting Columns (Create Spacing)**

Use `offset-*` classes to move a column to the right by a number of columns.

### ✅ Example:

```html
<div class="row">
  <div class="col-4 offset-4 bg-warning text-center py-3">
    Centered Block (offset-4)
  </div>
</div>
```

| Class          | Description                    |
| -------------- | ------------------------------ |
| `.offset-1`    | Moves column right by 1 column |
| `.offset-md-3` | Moves it at `md` screen sizes  |

---

## 🔄 **4. Reordering Columns (Visual Rearranging)**

Use `order-*` classes to rearrange columns without changing HTML order.

### ✅ Example:

```html
<div class="row">
  <div class="col-4 order-2 bg-info text-white">Second in view</div>
  <div class="col-8 order-1 bg-dark text-white">First in view</div>
</div>
```

| Class                        | Description                  |
| ---------------------------- | ---------------------------- |
| `order-1` to `order-12`      | Sets visual order            |
| `order-first` / `order-last` | Force first or last position |
| `order-md-1`                 | Responsive reordering        |

---

## 🎨 **5. Gutter Control (Spacing Between Columns)**

Use `.g-*`, `.gx-*`, `.gy-*` for layout spacing:

```html
<div class="row g-4">
  <div class="col bg-light p-3">Column 1</div>
  <div class="col bg-light p-3">Column 2</div>
</div>
```

| Class            | Function                     |
| ---------------- | ---------------------------- |
| `.g-0` to `.g-5` | Gap between rows and columns |
| `.gx-3`          | Horizontal spacing only      |
| `.gy-1`          | Vertical spacing only        |

---

## 💼 **6. Real Layout Pattern Examples**

### ✅ 2-1 Layout (Main + Sidebar)

```html
<div class="row">
  <div class="col-md-8 bg-light p-3">Main Content</div>
  <div class="col-md-4 bg-secondary text-white p-3">Sidebar</div>
</div>
```

### ✅ Pricing Plans (3 Equal Columns)

```html
<div class="row text-center">
  <div class="col-md-4 bg-light p-4">Basic</div>
  <div class="col-md-4 bg-primary text-white p-4">Pro</div>
  <div class="col-md-4 bg-light p-4">Enterprise</div>
</div>
```

### ✅ Centered Card

```html
<div class="row">
  <div class="col-md-6 offset-md-3 bg-light p-4">
    Centered card with offset
  </div>
</div>
```

---

## 🧠 **Practice Tasks**

1. Create a 2-column layout with a nested row inside one of the columns
2. Use `offset-3` to center a 6-column block
3. Make a 3-column layout and reorder columns on mobile
4. Build a sidebar layout that stacks on smaller screens

---

## 💻 **Try It Live (Online Editors)**

🟢 [CodePen Starter Template](https://codepen.io/)
🟢 [StackBlitz Practice Project](https://stackblitz.com/)
🟢 [Replit Code Playground](https://replit.com/)

> (Add your real project links once uploaded)

---

## 🎥 **What We Covered in This Chapter**

✅ Nested rows & columns
✅ Fixed vs auto column widths
✅ Column offsetting
✅ Reordering content
✅ Responsive real-world layouts

---

## ✅ **Next Up: Chapter 5 — Typography in Bootstrap**

We’ll learn:

* Heading levels, display classes, text alignment
* Typography utilities (lead, muted, uppercase, etc.)
* Responsive text and custom font sizing
* Building a “hero” section with proper type hierarchy
