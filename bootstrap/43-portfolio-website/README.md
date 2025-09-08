## 📘 Chapter 37: Project 8 — Portfolio Website (Modern, Responsive, Themed)

### 📌 What You’ll Build

By the end of this chapter, we’ll build a professional **Portfolio Website** using Bootstrap 5 that features:

* A hero section with call-to-action
* About, skills, projects, and contact sections
* Scroll animations
* Dark/Light mode toggle
* Mobile-first responsive navigation
* Smooth scrolling
* Reusable Bootstrap layout patterns
* Optional: contact form (ready to integrate with PHP or Netlify)

---

### 🧰 Prerequisites

Make sure you’re comfortable with:

* Bootstrap 5 Grid & Flex utilities
* Customizing Bootstrap colors
* Responsive layouts
* JavaScript (basic DOM manipulation for dark mode & scroll)

---

### 🖼️ Project Layout

```
📁 portfolio-bootstrap/
├── index.html
├── css/
│   └── styles.css
├── js/
│   └── script.js
├── images/
└── README.md
```

---

### 🏗️ Step-by-Step Build

#### ✅ 1. Boilerplate Setup

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>John Doe | Portfolio</title>
  <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/css/bootstrap.min.css" rel="stylesheet" />
  <link rel="stylesheet" href="css/styles.css" />
</head>
<body data-bs-theme="light">
  <!-- Content goes here -->
  <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/js/bootstrap.bundle.min.js"></script>
  <script src="js/script.js"></script>
</body>
</html>
```

---

#### ✅ 2. Hero Section with Navbar

```html
<nav class="navbar navbar-expand-lg bg-body">
  <div class="container">
    <a class="navbar-brand" href="#">John Doe</a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse"
      data-bs-target="#navbarContent">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarContent">
      <ul class="navbar-nav ms-auto gap-3">
        <li class="nav-item"><a class="nav-link" href="#about">About</a></li>
        <li class="nav-item"><a class="nav-link" href="#projects">Projects</a></li>
        <li class="nav-item"><a class="nav-link" href="#contact">Contact</a></li>
        <li class="nav-item">
          <button id="toggle-theme" class="btn btn-outline-secondary btn-sm">🌙</button>
        </li>
      </ul>
    </div>
  </div>
</nav>

<header class="text-center py-5 bg-light">
  <div class="container">
    <h1>Hello, I’m <span class="text-primary">John Doe</span></h1>
    <p class="lead">Frontend Developer | UI/UX Designer</p>
    <a href="#projects" class="btn btn-primary mt-3">View My Work</a>
  </div>
</header>
```

---

#### ✅ 3. About & Skills Section

```html
<section id="about" class="py-5 bg-white">
  <div class="container">
    <h2>About Me</h2>
    <p>I’m a frontend developer who loves building clean, modern web experiences...</p>
    <h4 class="mt-4">Skills</h4>
    <div class="row">
      <div class="col-6 col-md-4">✅ HTML</div>
      <div class="col-6 col-md-4">✅ CSS</div>
      <div class="col-6 col-md-4">✅ JavaScript</div>
      <div class="col-6 col-md-4">✅ Bootstrap</div>
      <div class="col-6 col-md-4">✅ Git</div>
    </div>
  </div>
</section>
```

---

#### ✅ 4. Projects Section

```html
<section id="projects" class="py-5 bg-light">
  <div class="container">
    <h2 class="mb-4">My Projects</h2>
    <div class="row g-4">
      <div class="col-md-6 col-lg-4">
        <div class="card h-100">
          <img src="images/project1.jpg" class="card-img-top" alt="Project">
          <div class="card-body">
            <h5 class="card-title">Landing Page</h5>
            <p class="card-text">A responsive landing page built with Bootstrap 5.</p>
            <a href="#" class="btn btn-sm btn-primary">Preview</a>
          </div>
        </div>
      </div>
      <!-- More cards -->
    </div>
  </div>
</section>
```

---

#### ✅ 5. Contact Section with Form

```html
<section id="contact" class="py-5 bg-white">
  <div class="container">
    <h2>Contact Me</h2>
    <form>
      <div class="mb-3">
        <label for="name" class="form-label">Your Name</label>
        <input type="text" class="form-control" id="name" required />
      </div>
      <div class="mb-3">
        <label for="email" class="form-label">Email address</label>
        <input type="email" class="form-control" id="email" required />
      </div>
      <div class="mb-3">
        <label for="message" class="form-label">Message</label>
        <textarea class="form-control" id="message" rows="4"></textarea>
      </div>
      <button type="submit" class="btn btn-primary">Send</button>
    </form>
  </div>
</section>
```

---

#### ✅ 6. Footer

```html
<footer class="py-3 bg-dark text-white text-center">
  <div class="container">
    <p class="mb-0">© 2025 John Doe — All rights reserved</p>
  </div>
</footer>
```

---

#### ✅ 7. JavaScript for Theme Toggle

```js
// js/script.js
const toggle = document.getElementById('toggle-theme');
toggle.addEventListener('click', () => {
  const body = document.body;
  const currentTheme = body.getAttribute('data-bs-theme');
  body.setAttribute('data-bs-theme', currentTheme === 'light' ? 'dark' : 'light');
});
```

---

### 🌗 Bonus: Add Scroll Animations (AOS or ScrollReveal)

```html
<!-- Add in <head> -->
<link href="https://unpkg.com/aos@2.3.1/dist/aos.css" rel="stylesheet">
<script src="https://unpkg.com/aos@2.3.1/dist/aos.js"></script>

<!-- Init -->
<script>
  AOS.init();
</script>
```

---

### 📦 Deployment Suggestions

* Deploy on GitHub Pages, Netlify, or Vercel
* SEO tags: Add `meta description`, OpenGraph, etc.

---

### ✅ Outcome

You’ll have a **mobile-first, accessible, dark/light themed portfolio site** built with reusable Bootstrap components and layout structures — perfect for real-world use or client work.
