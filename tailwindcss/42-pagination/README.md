Great! Let's continue our **World-Class Tailwind CSS Course** with:

---

# 📚 Chapter 33: Tailwind CSS Pagination Design

📅 **Release Date:** 28 July 2025
🎯 **Goal:** Learn how to design beautiful, responsive, and accessible **pagination components** using only Tailwind CSS—no JavaScript required.

---

## ✅ What is Pagination?

Pagination is the process of dividing content into **separate pages** with navigational controls like:

```
[1] [2] [3] [Next]
```

Used in:

* Blogs, tables, e-commerce listings, admin panels, etc.

---

## 🔹 1. Basic Pagination with Numbers

```html
<div class="flex justify-center space-x-2 mt-6">
  <a href="#" class="px-3 py-1 rounded border border-gray-300 hover:bg-gray-100">1</a>
  <a href="#" class="px-3 py-1 rounded border border-gray-300 hover:bg-gray-100">2</a>
  <a href="#" class="px-3 py-1 rounded border border-gray-300 hover:bg-gray-100">3</a>
</div>
```

> Simple number-based pagination with hover effects.

---

## 🔘 2. Active Page Style

```html
<a href="#" class="px-3 py-1 rounded border border-blue-600 bg-blue-600 text-white font-medium">2</a>
```

> Highlight the **current page** using different colors like `bg-blue-600 text-white`.

---

## ⏮️ 3. Pagination with Arrows (Prev/Next)

```html
<div class="flex justify-center items-center space-x-1 mt-6">
  <a href="#" class="px-3 py-1 border rounded hover:bg-gray-100">Prev</a>
  <a href="#" class="px-3 py-1 border rounded hover:bg-gray-100">1</a>
  <a href="#" class="px-3 py-1 border bg-blue-500 text-white rounded">2</a>
  <a href="#" class="px-3 py-1 border rounded hover:bg-gray-100">3</a>
  <a href="#" class="px-3 py-1 border rounded hover:bg-gray-100">Next</a>
</div>
```

---

## ✨ 4. Fancy Responsive Pagination (Mobile-Friendly)

```html
<div class="flex flex-col md:flex-row justify-center items-center mt-6 space-y-2 md:space-y-0 md:space-x-2">
  <a href="#" class="px-3 py-1 border rounded hover:bg-gray-100">← Prev</a>
  <a href="#" class="px-3 py-1 border rounded hover:bg-gray-100">1</a>
  <a href="#" class="px-3 py-1 border bg-blue-600 text-white rounded">2</a>
  <a href="#" class="px-3 py-1 border rounded hover:bg-gray-100">3</a>
  <a href="#" class="px-3 py-1 border rounded hover:bg-gray-100">Next →</a>
</div>
```

> Stack vertically on small screens and side-by-side on larger ones.

---

## 🔍 5. Pagination with Ellipsis (`...`)

```html
<div class="flex justify-center items-center space-x-1 mt-6">
  <a href="#" class="px-3 py-1 border rounded">1</a>
  <span class="px-3 py-1">...</span>
  <a href="#" class="px-3 py-1 border rounded">7</a>
  <a href="#" class="px-3 py-1 border bg-blue-600 text-white rounded">8</a>
  <a href="#" class="px-3 py-1 border rounded">9</a>
  <span class="px-3 py-1">...</span>
  <a href="#" class="px-3 py-1 border rounded">20</a>
</div>
```

> Useful when the number of pages is large.

---

## 🎯 6. Accessibility Best Practices

* Use `aria-current="page"` for the current active page.
* Example:

```html
<a href="#" class="px-3 py-1 bg-blue-600 text-white rounded" aria-current="page">4</a>
```

---

## 🧪 7. With Icons (Using Heroicons)

```html
<script src="https://unpkg.com/feather-icons"></script>

<div class="flex justify-center items-center space-x-2">
  <button class="px-2 py-1 border rounded flex items-center gap-1">
    <i data-feather="arrow-left"></i> Prev
  </button>
  <button class="px-2 py-1 border rounded">1</button>
  <button class="px-2 py-1 border bg-blue-600 text-white rounded">2</button>
  <button class="px-2 py-1 border rounded">3</button>
  <button class="px-2 py-1 border rounded flex items-center gap-1">
    Next <i data-feather="arrow-right"></i>
  </button>
</div>

<script>
  feather.replace()
</script>
```

---

## 🧠 Summary

| Feature       | Tailwind Classes You Learned              |
| ------------- | ----------------------------------------- |
| Layout        | `flex`, `justify-center`, `items-center`  |
| Spacing       | `space-x-*`, `space-y-*`, `mt-*`          |
| Styling       | `border`, `rounded`, `hover:bg-*`, `bg-*` |
| Accessibility | `aria-current`, semantic tags             |

---

## ✅ Practice Tasks

* Build pagination with:

  * \[1] \[2] \[3] … \[10] (like Google)
  * Prev/Next + icons
  * Responsive vertical/stacked pagination on mobile

---

## 📦 Bonus: JavaScript-Enhanced Pagination (for Later)

Once you master the CSS-only version, you can enhance this with:

* Active page logic
* Dynamic rendering
* AJAX data fetching (covered in a later JavaScript course)

---

## 🔚 Up Next:

**Chapter 34 — Tailwind CSS Breadcrumbs Navigation**

> Learn how to build SEO-friendly, accessible breadcrumb trails for navigation inside dashboards, e-commerce sites, and web apps.

Would you like to proceed to Chapter 34?
