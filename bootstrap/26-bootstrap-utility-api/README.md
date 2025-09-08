# 📘 **Chapter 20: Bootstrap Utility API**

**🎯 Topic**: *How to Generate Custom Utility Classes (Power Feature!)*
**🎓 Difficulty**: Intermediate to Advanced
**🏗️ Project Focus**: Creating custom utility classes (margin, padding, colors, etc.) using the Utility API

---

## 🔍 What is the Bootstrap Utility API?

The **Utility API** is one of Bootstrap 5’s most powerful features. It allows you to:

* Extend Bootstrap with your **own utility classes**
* Customize **spacing, borders, shadows**, and **responsive utilities**
* Generate entire sets of CSS classes using **Sass maps and loops**

---

## ✅ Why Learn the Utility API?

* Replace repetitive custom CSS with scalable utility classes
* Add **your own rules** like `.text-glow`, `.bg-glass`, `.border-dashed`
* Customize the look and feel of Bootstrap without bloating CSS
* Create **design systems** and **themes** quickly

---

## ⚙️ How It Works

Bootstrap’s Utility API works using Sass maps defined in the Bootstrap source files (like `_utilities.scss`).

### Example Sass Map for Spacing:

```scss
$utilities: (
  "margin-top": (
    property: margin-top,
    class: mt,
    values: (
      0: 0,
      1: .25rem,
      2: .5rem,
      3: 1rem,
    )
  ),
);
```

This generates:

```css
.mt-0 { margin-top: 0; }
.mt-1 { margin-top: 0.25rem; }
.mt-2 { margin-top: 0.5rem; }
.mt-3 { margin-top: 1rem; }
```

---

## 🧪 Real Example: Add Custom Utilities

Let’s say you want to create a utility class like `.text-shadow` and `.border-dashed`.

### Step 1: Install Bootstrap via Source (SCSS)

```bash
npm install bootstrap
```

### Step 2: Create a Custom SCSS File

```scss
// styles.scss

@import "node_modules/bootstrap/scss/functions";
@import "node_modules/bootstrap/scss/variables";
@import "node_modules/bootstrap/scss/maps";
@import "node_modules/bootstrap/scss/mixins";
@import "node_modules/bootstrap/scss/utilities";

// Add your custom utility:
$utilities: map-merge(
  $utilities,
  (
    "text-shadow": (
      property: text-shadow,
      class: text-shadow,
      values: (
        sm: 1px 1px 2px #000,
        lg: 2px 2px 4px #333
      )
    ),
    "border-style": (
      property: border-style,
      class: border,
      values: (
        dashed: dashed,
        dotted: dotted
      )
    )
  )
);

// Now import the rest of Bootstrap
@import "node_modules/bootstrap/scss/bootstrap";
```

### Output Classes:

```css
.text-shadow-sm { text-shadow: 1px 1px 2px #000; }
.text-shadow-lg { text-shadow: 2px 2px 4px #333; }

.border-dashed { border-style: dashed; }
.border-dotted { border-style: dotted; }
```

---

## 🛠️ Online Playground: Demo

🔗 [CodeSandbox Demo (Custom Utilities)](https://codesandbox.io/s/bootstrap-utility-api-example)
*(You can also test this locally using Vite, Laravel Mix, or Webpack)*

---

## 📦 Pro Tip: Combine Utilities with Responsive Variants

```scss
$utilities: map-merge(
  $utilities,
  (
    "opacity": (
      property: opacity,
      class: o,
      responsive: true,
      values: (
        10: 0.1,
        25: 0.25,
        50: 0.5,
        75: 0.75,
        100: 1
      )
    )
  )
);
```

This generates:

```css
.o-10 { opacity: 0.1; }
.o-md-50 { opacity: 0.5 on medium+ screens }
```

---

## 💼 Use Cases in Real Projects

| Use Case                 | Example                                                 |
| ------------------------ | ------------------------------------------------------- |
| Dark Glass Background    | `.bg-dark.bg-opacity-75.text-shadow-sm`                 |
| Dotted Borders in Tables | `.border-dotted.border-bottom`                          |
| Custom Shadows           | `.text-shadow-lg` on headers for glow effect            |
| Utility-based Dashboards | Use `.g-3`, `.row-cols-2`, `.mt-auto`, etc. dynamically |

---

## 🧠 Summary

| Feature                  | Description                                               |
| ------------------------ | --------------------------------------------------------- |
| **Utility API**          | Bootstrap’s system to generate classes dynamically        |
| **\$utilities Map**      | Sass object that defines the custom classes               |
| **Extend/Override**      | Use `map-merge()` to add your own utilities               |
| **Build Tools Required** | Must use SCSS workflow (Vite, Webpack, Laravel Mix, etc.) |

---

## 📝 Assignment

> ✅ Create a utility class for `box-shadow` with `.shadow-xs`, `.shadow-sm`, `.shadow-lg` using the Utility API.
> ✅ Then apply it to cards, buttons, or sections in your layout.

