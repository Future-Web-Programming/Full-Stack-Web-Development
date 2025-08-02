
# 📘 **Chapter 2: Setting Up Your First Bootstrap Project**

✅ *CDN & Local Setup | Beginner-Friendly | Works on All Devices*


## 🧠 **What Are the Two Ways to Use Bootstrap?**

| Method                                | Use Case                                                           |
| ------------------------------------- | ------------------------------------------------------------------ |
| 🔗 **CDN (Content Delivery Network)** | Easiest way to get started (no files to download)                  |
| 💾 **Local Files (Download)**         | Ideal for offline work and full customization (e.g. SCSS, theming) |

---

## 🛠️ **1. Using Bootstrap via CDN (Quickest Way)**

### ✅ Step-by-Step:

1. Create a new file: `index.html`
2. Paste this boilerplate HTML:

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>Bootstrap Project</title>

  <!-- Bootstrap CSS (CDN) -->
  <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css" rel="stylesheet">

</head>
<body>

  <div class="container text-center mt-5">
    <h1 class="text-primary">Hello, Bootstrap!</h1>
    <p>This is your first Bootstrap project using CDN!</p>
  </div>

  <!-- Bootstrap JS (Optional, for components like modal, navbar) -->
  <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/js/bootstrap.bundle.min.js"></script>
</body>
</html>
```

3. Open the file in a browser (double-click or use Live Server in VS Code)

✅ **That’s it! You’re now running Bootstrap from the cloud.**

---

## 💾 **2. Using Bootstrap Locally (Download & Use Offline)**

### 🔽 Download Bootstrap

* Go to [https://getbootstrap.com](https://getbootstrap.com)
* Click **Download** → Choose **Compiled CSS & JS**

You’ll get a zip file like:

```
bootstrap-5.x.x-dist/
├── css/
│   └── bootstrap.min.css
├── js/
│   └── bootstrap.bundle.min.js
```

### ✅ Folder Structure

Create your project folder:

```
my-bootstrap-project/
├── css/
│   └── bootstrap.min.css
├── js/
│   └── bootstrap.bundle.min.js
├── index.html
```

### ✅ Example HTML (Local Version)

```html
<link rel="stylesheet" href="css/bootstrap.min.css">
...
<script src="js/bootstrap.bundle.min.js"></script>
```

Then open `index.html` in your browser. ✅ Done!

---

## 🧑‍💻 **VS Code Setup (For Desktop Users)**

### Recommended Extensions:

* Live Server (by Ritwick Dey)
* Bootstrap 5 Snippets (by Ashok Koyi)
* Prettier (for formatting)
* Emmet (already built-in, for faster HTML)

> 💡 *You can right-click and choose “Open with Live Server” for instant preview.*

---

## 🌐 **Online Editors (For Low-End or Mobile Devices)**

Don’t have a good machine? Use these:

| Platform                              | Features                                     |
| ------------------------------------- | -------------------------------------------- |
| [Replit](https://replit.com/)         | Online VS Code-style editor, instant preview |
| [CodePen](https://codepen.io/)        | Great for quick demos, UI components         |
| [StackBlitz](https://stackblitz.com/) | Runs full HTML/CSS/JS projects               |

✅ We'll share starter templates for each project so you can follow along anywhere.

---

## 🧱 **Create a Base Template (Starter for All Chapters)**

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>Bootstrap Starter</title>
  <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css" rel="stylesheet">
</head>
<body>

  <!-- Start coding here -->
  <div class="container py-5">
    <h1 class="text-center">🚀 Bootstrap Starter Template</h1>
  </div>

  <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/js/bootstrap.bundle.min.js"></script>
</body>
</html>
```

> 💡 Save this template and reuse it in every chapter going forward.

---

## 🎥 **What We Covered in This Chapter**

✅ Bootstrap Setup via CDN
✅ Bootstrap Setup via Download (Local)
✅ Online Editors for flexibility
✅ VS Code tools for live preview
✅ Starter template for the whole course



