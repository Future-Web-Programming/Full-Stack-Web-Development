# 📘 Chapter 11: Typography & Text Styling in Tailwind CSS

> **Goal:** Teach students how to beautifully style text using Tailwind's powerful typography utility classes. This includes headings, paragraphs, line height, letter spacing, font styles, text colors, alignment, and advanced utilities like `prose`.

---

## 🧠 What You Will Learn

✅ Font families and font weights
✅ Text sizing and scaling (`text-sm`, `text-3xl`, etc.)
✅ Letter spacing (`tracking-*`) and line height (`leading-*`)
✅ Text color, alignment, and decoration
✅ Responsive typography
✅ Advanced typography with `@tailwind/typography` (Prose plugin)
✅ Real-world typography layout examples

---

## ✍️ Basic Text Utilities

### 🔹 Font Size

| Class       | Size Example     |
| ----------- | ---------------- |
| `text-xs`   | Extra small text |
| `text-sm`   | Small text       |
| `text-base` | Normal text      |
| `text-lg`   | Large text       |
| `text-3xl`  | Extra large      |
| `text-6xl`  | Huge headings    |

```html
<h1 class="text-4xl font-bold">Welcome to Tailwind!</h1>
<p class="text-base text-gray-700">This is a paragraph with base size.</p>
```

---

## 🔤 Font Family & Weight

| Class            | Description             |
| ---------------- | ----------------------- |
| `font-sans`      | Default sans-serif font |
| `font-serif`     | Serif font              |
| `font-mono`      | Monospace font          |
| `font-light`     | Light weight            |
| `font-bold`      | Bold text               |
| `font-extrabold` | Extra bold text         |

```html
<p class="font-serif font-light text-lg">Elegant serif font</p>
```

---

## 📏 Line Height & Letter Spacing

| Class              | Description                  |
| ------------------ | ---------------------------- |
| `leading-none`     | Tightest line height         |
| `leading-loose`    | Looser spacing between lines |
| `tracking-tighter` | Less letter spacing          |
| `tracking-widest`  | Very wide letter spacing     |

```html
<p class="text-lg leading-relaxed tracking-wide">
  Tailwind gives precise control over spacing.
</p>
```

---

## 🎨 Text Color & Alignment

| Class           | Description         |
| --------------- | ------------------- |
| `text-red-500`  | Red text color      |
| `text-gray-700` | Neutral gray text   |
| `text-center`   | Center aligned text |
| `text-right`    | Right aligned text  |

```html
<p class="text-center text-blue-600 text-xl">Centered Headline</p>
```

---

## 🧩 Responsive Typography

```html
<h1 class="text-2xl sm:text-3xl md:text-5xl font-bold">
  Responsive Typography
</h1>
```

| Class prefix | Breakpoint |
| ------------ | ---------- |
| `sm:`        | ≥ 640px    |
| `md:`        | ≥ 768px    |
| `lg:`        | ≥ 1024px   |

---

## ✨ Bonus: Using the Typography Plugin (`@tailwindcss/typography`)

> Tailwind includes an official plugin for styling rich text content like blog posts, docs, etc.

### 🛠 Setup

Install via npm:

```bash
npm install -D @tailwindcss/typography
```

Add to your `tailwind.config.js`:

```js
plugins: [
  require('@tailwindcss/typography'),
],
```

Then apply `prose` class:

```html
<article class="prose lg:prose-xl">
  <h1>What is Tailwind CSS?</h1>
  <p>Tailwind is a utility-first CSS framework...</p>
</article>
```

✅ Automatically styles all elements (headings, lists, tables, code, etc.) in a beautiful way.

---

## 💡 Tips

* Use `text-gray-700` or `text-neutral-700` for comfortable reading.
* Combine `leading-relaxed` with `tracking-normal` for readability.
* Use `prose` for long-form content like blogs and documentation.
* Responsive typography is key to mobile-first design.

---

## 🔥 Project: Build a Stylish Blog Article Layout

```html
<section class="prose lg:prose-lg mx-auto p-4">
  <h1>How Tailwind Changed My Workflow</h1>
  <p>Writing CSS used to be stressful. With Tailwind, I can...</p>
  <h2>Benefits of Utility-First</h2>
  <ul>
    <li>Faster development</li>
    <li>Consistent design</li>
    <li>No naming conflicts</li>
  </ul>
</section>
```

---

## 🧠 Practice / Homework

1. Recreate a typography-rich blog post layout.
2. Try using different font weights and spacings.
3. Install and apply the `@tailwindcss/typography` plugin.
4. Design a responsive quote or testimonial section.
