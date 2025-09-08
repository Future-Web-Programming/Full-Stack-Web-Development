# 📘 Chapter 28: Creating Your Own Bootstrap Build

### 🎯 Goal: Take full control over your Bootstrap projects by customizing and compiling your own Bootstrap source using modern tools like **Vite** or **Webpack** with **SCSS** support.

---

## ✅ What You'll Learn in This Chapter

| 🔧 Skill                           | ✅ Covered |
| ---------------------------------- | --------- |
| Bootstrap Source Compilation       | ✅ Yes     |
| SCSS + Variables Customization     | ✅ Yes     |
| Vite/Webpack Integration           | ✅ Yes     |
| Removing Unused Bootstrap Features | ✅ Yes     |
| Creating a Lean, Custom Build      | ✅ Yes     |

---

## 🚀 Why Build Your Own Bootstrap?

By default, Bootstrap includes **all components**, utility classes, JavaScript plugins, and styles. This can be overkill if you're only using a portion of it.

🧠 **Benefits of creating a custom build**:

* Reduce CSS/JS file size
* Customize themes, breakpoints, colors
* Remove unused components
* Gain full SCSS control
* Use with modern bundlers (Vite/Webpack)

---

## 🧰 Tools We'll Use

| Tool                       | Purpose                                      |
| -------------------------- | -------------------------------------------- |
| **Vite**                   | Lightning-fast modern bundler                |
| **SCSS**                   | For compiling Bootstrap with custom settings |
| **Bootstrap Source Code**  | Official SCSS-based Bootstrap repo           |
| **PostCSS + Autoprefixer** | To add browser prefixes                      |
| **npm**                    | Package manager for dependencies             |

---

## 🛠 Step-by-Step Setup (Using Vite)

> We’ll use **Vite** for simplicity and speed. You can switch to Webpack later using similar principles.

---

### ✅ Step 1: Create a New Vite Project

```bash
npm create vite@latest bootstrap-custom
cd bootstrap-custom
npm install
```

Choose `vanilla` (no framework) when prompted.

---

### ✅ Step 2: Install Bootstrap from Source

```bash
npm install bootstrap
```

This installs the SCSS source files, JavaScript modules, etc.

---

### ✅ Step 3: Project Structure

Create folders like this:

```
bootstrap-custom/
├── index.html
├── scss/
│   └── custom.scss
├── js/
│   └── main.js
└── vite.config.js
```

---

### ✅ Step 4: Import SCSS Components Selectively

In `scss/custom.scss`:

```scss
// Bootstrap's required imports
@import "bootstrap/scss/functions";
@import "bootstrap/scss/variables";
@import "bootstrap/scss/mixins";

// 👇 Only import what you need (optional)
@import "bootstrap/scss/root";
@import "bootstrap/scss/reboot";
@import "bootstrap/scss/buttons";
@import "bootstrap/scss/utilities";

// Optional: override variables before importing them
$primary: #5f27cd;
$font-family-base: 'Poppins', sans-serif;

// Add custom styles
body {
  background-color: #f8f9fa;
}
```

---

### ✅ Step 5: Add JavaScript (Optional)

In `js/main.js`:

```js
import * as bootstrap from 'bootstrap';

// Example: Modal init
const modal = new bootstrap.Modal(document.getElementById('exampleModal'));
modal.show();
```

---

### ✅ Step 6: Link SCSS and JS in HTML

In `index.html`:

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <title>Custom Bootstrap</title>
</head>
<body>

  <div class="container py-5">
    <h1 class="text-primary">Custom Bootstrap Build</h1>
    <button class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal">Launch Modal</button>
  </div>

  <!-- Modal -->
  <div class="modal fade" id="exampleModal" tabindex="-1">
    <div class="modal-dialog"><div class="modal-content p-3">Hello from Modal</div></div>
  </div>

  <script type="module" src="/js/main.js"></script>
</body>
</html>
```

---

### ✅ Step 7: Configure Vite to Handle SCSS

Install dependencies:

```bash
npm install -D sass
```

Then in `main.js`, import SCSS:

```js
import '../scss/custom.scss';
```

Now you can run:

```bash
npm run dev
```

You’ll see your custom Bootstrap build live!

---

## 📉 Optional: Purge Unused CSS (Optimize Build)

Use tools like:

* **PurgeCSS** with PostCSS
* **Bootstrap Utility API** (covered earlier)
* Manually import only used Bootstrap modules

---

## 🎯 What You Can Customize Now

* Change **colors**, **fonts**, **spacing**, **grid**, **breakpoints**
* Add/remove **components** like modals, carousels, alerts, etc.
* Control **file size** by excluding what you don’t use

---

## 📦 Bonus: Webpack Version (Optional)

If you're using Webpack instead of Vite:

* Install `sass-loader`, `css-loader`, `style-loader`
* Setup entry point for SCSS
* Use `MiniCssExtractPlugin` to output compiled CSS

Let me know if you’d like a Webpack example too!

---

## 🎁 Final Output Preview

![Custom Bootstrap Build Example UI](https://getbootstrap.com/docs/5.3/assets/img/bootstrap-icons.png)

---

## ✅ Summary

| 🔑 Key Takeaway                                | ✅ |
| ---------------------------------------------- | - |
| Use Bootstrap SCSS source to gain full control | ✅ |
| Customize variables, colors, fonts             | ✅ |
| Use Vite/Webpack to compile and serve          | ✅ |
| Remove unnecessary features                    | ✅ |
| Build your own theme or framework on top       | ✅ |

---

## 🧠 Homework / Practice Ideas

* Build your own **Bootstrap theme** using only buttons + cards + modals.
* Replace Bootstrap variables with a **brand color palette**.
* Remove unused components to optimize performance.
