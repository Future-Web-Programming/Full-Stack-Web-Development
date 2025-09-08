# 📘 Chapter 5: Mastering Flexbox & Grid in Tailwind CSS

### 🎯 Learning Objectives:

By the end of this chapter, students will be able to:

* Use `flex`, `grid`, and layout utilities in Tailwind
* Align and justify elements with `Flexbox`
* Create responsive grids using `Grid` utilities
* Build real-world UI layouts like **cards, sidebars, navbars, galleries**
* Combine layout utilities with spacing, sizing, and responsive modifiers

---

## 🔷 1. Introduction to Layout Utilities in Tailwind

### ✅ `flex`, `grid`, `block`, `inline-block`, `hidden`

```html
<div class="flex">...</div>
<div class="grid">...</div>
```

---

## 🧱 2. Flexbox in Tailwind

Tailwind provides all necessary Flexbox classes:

### ✅ Basic Flexbox Setup:

```html
<div class="flex">
  <div class="bg-red-300 p-4">Item 1</div>
  <div class="bg-blue-300 p-4">Item 2</div>
</div>
```

### ✅ Direction:

```html
<div class="flex flex-col md:flex-row">...</div>
```

* `flex-row`, `flex-col`, `flex-row-reverse`

### ✅ Justify Content:

| Class             | Behavior      |
| ----------------- | ------------- |
| `justify-start`   | Start (left)  |
| `justify-center`  | Center        |
| `justify-end`     | End (right)   |
| `justify-between` | Equal spacing |
| `justify-around`  | Space around  |
| `justify-evenly`  | Equal space   |

```html
<div class="flex justify-between">...</div>
```

### ✅ Align Items:

| Class           | Behavior    |
| --------------- | ----------- |
| `items-start`   | Top         |
| `items-center`  | Center      |
| `items-end`     | Bottom      |
| `items-stretch` | Full height |

```html
<div class="flex items-center h-32">...</div>
```

### ✅ Gap Between Flex Items

```html
<div class="flex gap-4">...</div>
```

---

## 💡 Flexbox Practical Example: Navbar

```html
<nav class="flex justify-between items-center bg-gray-800 p-4 text-white">
  <div class="text-lg font-bold">Logo</div>
  <ul class="flex gap-4">
    <li><a href="#">Home</a></li>
    <li><a href="#">About</a></li>
    <li><a href="#">Contact</a></li>
  </ul>
</nav>
```

---

## 🔳 3. Grid System in Tailwind CSS

### ✅ Basic Grid:

```html
<div class="grid grid-cols-2 gap-4">
  <div class="bg-green-200">1</div>
  <div class="bg-blue-200">2</div>
</div>
```

* `grid-cols-1` to `grid-cols-12`

### ✅ Responsive Grid:

```html
<div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
  <div class="bg-yellow-200">Box</div>
  ...
</div>
```

### ✅ Grid Rows:

```html
<div class="grid grid-rows-3 gap-2">...</div>
```

---

## 🔀 Grid Advanced: Column Spans and Gaps

```html
<div class="grid grid-cols-3 gap-4">
  <div class="col-span-2 bg-red-200">Wider Box</div>
  <div class="bg-blue-200">Box</div>
</div>
```

---

## 📷 Grid Example: Image Gallery

```html
<div class="grid grid-cols-2 md:grid-cols-4 gap-4">
  <img src="https://via.placeholder.com/150" class="w-full rounded" />
  ...
</div>
```

---

## 📐 Combine Flex and Grid

Tailwind allows **hybrid layouts** with both flex and grid:

```html
<div class="grid grid-cols-3 gap-4">
  <div class="col-span-1 bg-gray-100 p-4">Sidebar</div>
  <div class="col-span-2 flex flex-col gap-4">
    <div class="bg-white p-4 shadow">Main Content</div>
    <div class="bg-white p-4 shadow">More Content</div>
  </div>
</div>
```

---

## 🧪 Practice Task: Responsive Card Layout with Grid + Flex

### 💻 Goal: Build this layout:

```html
<div class="grid grid-cols-1 md:grid-cols-3 gap-6">
  <div class="bg-white p-6 rounded shadow">
    <h3 class="text-xl font-bold mb-2">Card Title</h3>
    <p class="text-gray-600">Some descriptive text here.</p>
    <button class="mt-4 bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700">
      Read More
    </button>
  </div>
  ...
</div>
```

---

## 🧠 Tip: Use `devtools` or [Tailwind Play](https://play.tailwindcss.com/) to inspect layout changes visually.

---

## 🧩 Summary Table

| Utility                              | Description                       |
| ------------------------------------ | --------------------------------- |
| `flex`, `flex-row`, `flex-col`       | Flex layout and direction         |
| `justify-*`, `items-*`               | Align items inside flex container |
| `grid`, `grid-cols-*`, `grid-rows-*` | Create grid layouts               |
| `col-span-*`, `row-span-*`           | Control item span                 |
| `gap-*`                              | Spacing between elements          |
| `md:grid-cols-*`, `lg:flex`          | Responsive layout modifiers       |

---

## 🧰 Bonus Tools

* 🔧 [Tailwind Play](https://play.tailwindcss.com) – Code editor with preview
* 🎨 [Tailwind Cheat Sheet](https://tailwindcomponents.com/cheatsheet/) – Fast class reference
* 📐 [Grid Layout Visualizer](https://cssgrid-generator.netlify.app/)
