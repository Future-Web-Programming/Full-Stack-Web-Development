

# ♻️ Chapter 44: Reusing Styles with `@apply` & Component Patterns

> In this chapter, you’ll learn how to **reuse utility classes** using Tailwind’s powerful `@apply` directive. We’ll also introduce **component-driven CSS patterns** to keep your Tailwind codebase **clean, scalable, and maintainable**.

---

## 🧠 Why Use `@apply`?

Tailwind encourages utility-first styling. But repeating the same long list of classes (e.g., for buttons, cards) can clutter your HTML.

`@apply` allows you to:

* Keep your HTML clean
* Define reusable class styles in CSS
* Centralize component styles for easier updates

---

## 🧪 1. Using `@apply` – Basic Example

### ✅ Step 1: Create a CSS file and include it in your project

```css
/* styles.css */
.btn {
  @apply px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700;
}

.card {
  @apply p-6 shadow-md rounded bg-white border border-gray-200;
}
```

### ✅ Step 2: Import it in your HTML or main CSS entry (if using PostCSS, Vite, etc.)

```css
@tailwind base;
@tailwind components;
@tailwind utilities;
@import './styles.css';
```

### ✅ Step 3: Use in your HTML

```html
<button class="btn">Click Me</button>

<div class="card">
  <h2 class="text-xl font-semibold">Card Title</h2>
  <p>This is a reusable card component.</p>
</div>
```

---

## 🧱 2. Building Reusable UI Components

Use `@apply` to define base UI components like:

```css
/* components.css */
.badge {
  @apply inline-block px-2 py-1 text-xs font-bold rounded;
}

.badge-success {
  @apply badge bg-green-500 text-white;
}

.badge-danger {
  @apply badge bg-red-500 text-white;
}
```

```html
<span class="badge-success">Success</span>
<span class="badge-danger">Failed</span>
```

---

## 🎯 3. Tips for Organizing Component Patterns

| Best Practice              | Description                                                                 |
| -------------------------- | --------------------------------------------------------------------------- |
| 🗂 **Component Folder**    | Keep a `components.css` or `components` folder                              |
| 🏷 **Naming Convention**   | Use `.btn-primary`, `.badge-success` etc.                                   |
| 🧪 **Avoid Complex Logic** | Only use `@apply` for static styles, not responsive states with breakpoints |

> ❗️Avoid using `@apply` with responsive variants (`sm:hover:bg-blue-500`) — this is unsupported!

---

## 🧰 4. Use `@layer` to Group Components

You can define custom components inside Tailwind's `@layer components` block:

```css
@layer components {
  .input {
    @apply px-4 py-2 border rounded focus:outline-none focus:ring;
  }

  .btn-outline {
    @apply px-4 py-2 border border-blue-600 text-blue-600 hover:bg-blue-50;
  }
}
```

---

## ✨ Real-World Examples

### Reusable Button UI

```css
@layer components {
  .btn {
    @apply inline-flex items-center justify-center px-4 py-2 font-medium rounded shadow-sm;
  }

  .btn-primary {
    @apply btn bg-blue-600 text-white hover:bg-blue-700;
  }

  .btn-secondary {
    @apply btn bg-gray-100 text-gray-800 hover:bg-gray-200;
  }
}
```

---

## 💼 Use Case in Teams and Design Systems

When building **larger projects or teams**, separating components helps:

* Enforce design consistency
* Simplify component reuse
* Enable theme switching more easily

---

## 🧠 Homework

1. Create `.btn-primary`, `.btn-secondary`, and `.btn-danger` styles using `@apply`.
2. Build a custom `.input` field class with hover/focus states.
3. Try separating your UI into a `components.css` file.

---

## ✅ Summary

| Concept             | Description                                             |
| ------------------- | ------------------------------------------------------- |
| `@apply`            | Extract repetitive utility classes into CSS             |
| `@layer components` | Group styles for Tailwind processing                    |
| Component Patterns  | Use class-based patterns like `.btn`, `.card`, `.badge` |
| Benefits            | Clean HTML, reusable styles, scalable codebase          |

---

Next up:
✅ **Chapter 45: Utility-First vs Component-Driven Design Debate**

