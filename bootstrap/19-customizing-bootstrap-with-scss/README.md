# 🎨 Chapter 19: Customizing Bootstrap with SCSS (Advanced Theme Control)

> 🎯 *Goal: Learn how to deeply customize Bootstrap by editing SCSS variables, enabling/disabling components, and building your own theme.*

---

## 📌 What You'll Learn:

* What is SCSS and why Bootstrap uses it
* Setting up Bootstrap with SCSS via npm or CDN
* Overriding Bootstrap SCSS variables
* Enabling/disabling Bootstrap components
* Creating your own Bootstrap theme
* Tools: Sass CLI, Vite, Webpack, Live Server

---

## 🧠 1. Why SCSS?

Bootstrap is written in **SCSS (Sassy CSS)** — a powerful CSS preprocessor that allows:

* Variables
* Nesting
* Reusable mixins
* Modular architecture
* Easy customization

Using SCSS, you can fully customize Bootstrap to create your **own design system** without hacking the core files.

---

## 🔧 2. Installation Options

### ✅ Option 1: Using npm (recommended for real projects)

```bash
npm init -y
npm install bootstrap sass
```

### ✅ Option 2: Download Bootstrap Source (manual)

* Go to: [https://getbootstrap.com/docs/5.3/getting-started/download/](https://getbootstrap.com/docs/5.3/getting-started/download/)
* Download the **source code** version (not compiled CSS).
* You'll get access to:

  * `scss/` folder with all SCSS partials
  * `js/` and examples

---

## 📁 3. Bootstrap SCSS Folder Structure

```
bootstrap/
├── scss/
│   ├── bootstrap.scss         # Main entry point
│   ├── _variables.scss        # Theme variables
│   ├── _buttons.scss          # Component file
│   ├── _mixins/               # Mixins (functions)
│   └── ...                    # All other components
```

📌 You’ll modify or override variables **before** importing the `bootstrap.scss` file.

---

## 🛠️ 4. Creating a Custom SCSS Setup

### ✅ `custom.scss`

```scss
// Step 1: Override Bootstrap variables here
$primary: #ff5722;
$font-family-base: 'Poppins', sans-serif;
$border-radius: 1rem;

// Step 2: Import Bootstrap
@import "../node_modules/bootstrap/scss/bootstrap";
```

> 🔥 Tip: You **must override variables BEFORE** importing Bootstrap.

---

## ⚙️ 5. Compile SCSS with Sass CLI

Install Sass globally if not already:

```bash
npm install -g sass
```

Compile `custom.scss` into `custom.css`:

```bash
sass custom.scss custom.css
```

Now use your custom CSS in HTML:

```html
<link rel="stylesheet" href="custom.css">
```

---

## 🧩 6. Enable/Disable Bootstrap Components

Bootstrap lets you **disable any component** to reduce file size:

```scss
$enable-alerts: false;
$enable-carousel: false;
```

Then import Bootstrap:

```scss
@import "../node_modules/bootstrap/scss/bootstrap";
```

✅ This will **exclude alerts and carousels** from your build.

---

## 🎨 7. Customize Colors, Spacing, Buttons

You can fully change your Bootstrap theme with SCSS:

```scss
$theme-colors: (
  "primary": #4caf50,
  "secondary": #607d8b,
  "success": #8bc34a,
  "danger": #f44336
);

$spacer: 2rem;
$border-radius-lg: 2rem;
```

Bootstrap uses these variables throughout its components.

---

## 🧪 8. Full Example — Custom Theme SCSS

```scss
// custom.scss

// Override core variables
$primary: #673ab7;
$secondary: #009688;
$font-size-base: 1.1rem;
$border-radius: 0.75rem;

// Import Bootstrap
@import "../node_modules/bootstrap/scss/bootstrap";
```

### HTML Example

```html
<link rel="stylesheet" href="custom.css">

<button class="btn btn-primary">Custom Primary</button>
```

---

## ⚡ 9. Using Vite/Webpack for Auto Compilation (Optional)

If you want live-reloading and modern dev setup:

* **Vite Setup** (basic):

```bash
npm create vite@latest bootstrap-custom
cd bootstrap-custom
npm install
npm install bootstrap sass
```

Then inside `main.scss`, write your custom SCSS and import it in `main.js`.

---

## 💡 10. Pro Developer Tips

| Tip                                             | Use                   |
| ----------------------------------------------- | --------------------- |
| ✅ Use `_custom.scss` partial                    | Separate custom theme |
| ✅ Only import needed Bootstrap files            | Better performance    |
| ✅ Use `@use` instead of `@import` (modern Sass) | Modular setup         |
| ✅ Define dark/light modes                       | Theming flexibility   |

---

## 🧪 Mini Challenge

> 🎯 Create a custom Bootstrap theme using your favorite color palette (e.g., Instagram purple-pink, ocean blue, etc.), compile it via Sass CLI, and build a homepage with your custom design.

---

## 📌 Summary

| Feature            | Usage                                 |
| ------------------ | ------------------------------------- |
| SCSS Variables     | `$primary`, `$font-family-base`, etc. |
| Overriding         | Before importing Bootstrap            |
| SCSS Compilation   | `sass input.scss output.css`          |
| Disable Components | `$enable-alerts: false;`              |
| Build System       | Sass CLI, Vite, Webpack               |

---

## ✅ Next Up:

📘 **Chapter 20: Bootstrap Layout Utilities (Spacing, Sizing, Borders, Shadows)**

> Learn how to master Bootstrap's utility-first layout system with margin/padding classes, sizing utilities, border radius, and shadows.
