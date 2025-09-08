# 🎯 Chapter 19: Z-Index, Overflow & Object Fit in Tailwind CSS

📅 **Release Date:** 25 July 2025
🔥 **Goal:** Learn how to control stacking order (`z-index`), handle overflow content, and manage media rendering using Tailwind’s `object-fit` utilities.

---

## 🧠 What You’ll Learn

* How `z-index` works in CSS and how Tailwind handles it
* How to control overflowing content using `overflow-*`
* How to resize and crop media with `object-fit`
* Real-world UI usage: dropdowns, image galleries, scroll containers

---

## 🔢 1. Z-Index Utilities (`z-*`)

Z-index controls which elements appear on top of others.

| Class                       | CSS Equivalent      | Usage                 |
| --------------------------- | ------------------- | --------------------- |
| `z-0`                       | `z-index: 0`        | Default stacking      |
| `z-10`                      | `z-index: 10`       | Bring element forward |
| `z-20`, `z-30`, ..., `z-50` | More forward layers |                       |
| `z-auto`                    | `z-index: auto`     | Resets stacking       |

### ✅ Example: Modal on Top

```html
<div class="fixed inset-0 bg-black bg-opacity-50 z-40">
  <div class="bg-white p-6 rounded shadow-lg z-50 relative">
    I'm a modal!
  </div>
</div>
```

> 🔁 Always use `relative`, `absolute`, or `fixed` along with `z-*` for stacking to take effect.

---

## 💥 2. Overflow Utilities

Overflow occurs when content spills outside its container. Tailwind offers:

| Class              | Description                 |
| ------------------ | --------------------------- |
| `overflow-auto`    | Scrolls only if necessary   |
| `overflow-hidden`  | Hides overflow content      |
| `overflow-visible` | Shows overflow (default)    |
| `overflow-scroll`  | Always scrollbars           |
| `overflow-x-*`     | Horizontal overflow control |
| `overflow-y-*`     | Vertical overflow control   |

### ✅ Example: Scrollable Card

```html
<div class="h-48 w-64 overflow-y-scroll bg-gray-100 p-4">
  <p>Long content here...</p>
</div>
```

> 🎯 Useful for chat UIs, custom scroll areas, notifications, etc.

---

## 🖼️ 3. Object Fit Utilities

Tailwind’s `object-*` classes control how media (like images or videos) fit in containers.

| Class               | Description                                    |
| ------------------- | ---------------------------------------------- |
| `object-contain`    | Scale media to fit without cropping            |
| `object-cover`      | Crop to fill the box                           |
| `object-fill`       | Stretch to fill                                |
| `object-none`       | Default                                        |
| `object-scale-down` | Fits if smaller, otherwise acts like `contain` |

### ✅ Example: Image Gallery

```html
<img src="/images/cat.jpg" class="h-48 w-full object-cover rounded-lg" />
```

> 📸 Use `object-cover` for consistent-sized thumbnails and hero sections.

---

## 🔧 4. Real-World Mini Project

**Use Case:** Build a scrollable card component with an image and modal stack using all three utilities.

```html
<div class="relative z-10">
  <img src="gallery.jpg" class="object-cover w-full h-64 rounded" />
  <button class="absolute bottom-2 right-2 bg-black bg-opacity-50 text-white px-2 py-1 text-sm rounded z-20">
    View
  </button>
</div>

<div class="h-48 overflow-y-scroll mt-4 p-4 bg-gray-100">
  <p>Lots of text here inside scroll area...</p>
</div>
```

---

## ✅ Summary Table

| Utility    | Class Example                        | Use Case                   |
| ---------- | ------------------------------------ | -------------------------- |
| Z-Index    | `z-10`, `z-50`                       | Modals, Dropdowns          |
| Overflow   | `overflow-auto`, `overflow-y-scroll` | Chat boxes, notifications  |
| Object Fit | `object-cover`, `object-contain`     | Images, thumbnails, videos |

---

## 💡 Pro Tips

* Use `z-*` with `position-*` to create dropdowns, tooltips, and popups.
* Combine `overflow-hidden` with `rounded-*` to clip images.
* Use `object-cover` for fixed height image cards or team member galleries.

---

## 🔜 Up Next:

**Chapter 20 – Transitions & Transform Utilities in Tailwind**
