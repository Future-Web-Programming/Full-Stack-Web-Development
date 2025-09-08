# 📘 Chapter 5: Typography in Bootstrap

✅ *Master Text, Headings, Display Classes, Utilities & Hierarchy*

---

## 🎯 **Chapter Goals**

By the end of this chapter, students will:

* Use Bootstrap’s built-in typography system effectively
* Understand **semantic HTML headings** and **display classes**
* Customize and align text with utility classes
* Master tools like `lead`, `muted`, `small`, and `text-wrap`
* Build professional **hero sections**, **article content**, and **call-to-actions**

---

## 🔤 **1. Bootstrap Typography Overview**

Bootstrap provides a **beautiful, responsive default typographic system** that includes:

| Feature          | Description                                               |
| ---------------- | --------------------------------------------------------- |
| Headings         | `<h1>` to `<h6>`                                          |
| Display Headings | `.display-1` to `.display-6`                              |
| Paragraphs       | Styled with proper line height                            |
| Utility Classes  | For alignment, transformation, wrapping, truncation, etc. |

---

## 🔠 **2. Semantic Headings: `<h1>` to `<h6>`**

### ✅ Example:

```html
<h1>Heading One</h1>
<h2>Heading Two</h2>
<h3>Heading Three</h3>
```

🧠 Use semantic heading tags for **SEO & accessibility**. Don’t style with `<div>` unnecessarily.

---

## 💥 **3. Display Headings (`.display-*`)**

Use `display-1` to `display-6` for **larger, bold headings** (great for heroes).

### ✅ Example:

```html
<h1 class="display-1">Big Hero Text</h1>
<h2 class="display-4">Stand Out</h2>
```

| Class        | Description            |
| ------------ | ---------------------- |
| `.display-1` | Largest                |
| `.display-6` | Smaller but still bold |

---

## ✍️ **4. Lead Paragraphs & Small Text**

Use `.lead` for emphasis and `.small` for muted info.

### ✅ Example:

```html
<p class="lead">This is a lead paragraph. Great for intros or marketing copy.</p>
<p><small>Published on: July 2025</small></p>
```

| Class    | Use Case                            |
| -------- | ----------------------------------- |
| `.lead`  | Eye-catching intro                  |
| `.small` | Legal disclaimers, timestamps, etc. |

---

## 🧰 **5. Text Utility Classes**

Bootstrap offers dozens of helpful classes for text formatting:

| Class                                                      | Description         |
| ---------------------------------------------------------- | ------------------- |
| `.text-start` / `.text-center` / `.text-end`               | Align text          |
| `.text-uppercase` / `.text-lowercase` / `.text-capitalize` | Transform case      |
| `.text-muted`                                              | Reduce emphasis     |
| `.fw-bold`, `.fw-light`, `.fst-italic`                     | Font weight & style |
| `.text-decoration-underline` / `.text-decoration-none`     | Underline or remove |

### ✅ Example:

```html
<p class="text-center text-uppercase text-muted fw-bold">
  Centered & Muted Heading
</p>
```

---

## ✂️ **6. Text Wrapping and Truncation**

| Class            | Description                           |
| ---------------- | ------------------------------------- |
| `.text-wrap`     | Forces text to wrap                   |
| `.text-nowrap`   | Prevents wrapping                     |
| `.text-truncate` | Truncates text with `...` if overflow |

```html
<p class="text-truncate" style="max-width: 200px;">
  This is a long sentence that will truncate with ellipsis.
</p>
```

---

## 📚 **7. Build a Hero Section with Display Text**

```html
<div class="container py-5 text-center">
  <h1 class="display-3 fw-bold">Level Up Your Skills</h1>
  <p class="lead text-muted">Master Bootstrap and build professional websites with ease.</p>
  <a href="#" class="btn btn-primary btn-lg mt-3">Get Started</a>
</div>
```

✅ Great example of hierarchy:
`display heading` + `lead paragraph` + `CTA button`

---

## 🧠 **Practice Tasks**

1. Create an article layout using `<h1>`, `<h2>`, and `.lead`
2. Make a centered hero block with `.display-1`, `.lead`, and `.btn`
3. Use `.text-uppercase` and `.text-muted` on menu items
4. Build a pricing title with `.fw-bold`, `.fst-italic`, and `.text-end`

---

## 💻 **Try It Live (Online Editors)**

* 🔗 [CodePen Practice – Typography](https://codepen.io/)
* 🔗 [StackBlitz Starter](https://stackblitz.com/)
* 🔗 [Replit Playground](https://replit.com/)

---

## 🎥 **What We Covered**

✅ HTML & display headings
✅ Typography utility classes
✅ Paragraph enhancements with `.lead`, `.small`
✅ Responsive text styling and truncation
✅ Real UI example: Hero section

---

## ⏭️ **Next Up: Chapter 6 — Buttons in Bootstrap**

In the next chapter, we’ll learn how to:

* Use all button styles (`.btn-primary`, `.btn-outline-*`, `.btn-lg`, etc.)
* Create **button groups**, **toggle states**, **block buttons**, and more
* Build a real CTA block with buttons and icons
