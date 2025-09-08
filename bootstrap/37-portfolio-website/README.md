# 🎯 Chapter 30: Project 1 – Personal Portfolio Website

**📚 Phase 3: Real-World Projects (Capstone Phase)**
**Goal:** Build a fully responsive, clean, and modern portfolio website using Bootstrap 5.

---

## 🧑‍💻 What You’ll Build:

A personal developer/creative portfolio website with:

* Hero section with intro
* About section
* Skills & timeline
* Project showcase
* Contact form with validation
* Fully responsive design using Bootstrap 5

---

## 🔧 Tools & Technologies:

* ✅ HTML5 + Bootstrap 5
* ✅ Bootstrap Grid & Utilities
* ✅ Bootstrap Cards, Modals, Navbars, Forms
* ✅ Bootstrap Icons / FontAwesome
* ✅ Basic CSS (optional)
* ✅ Optional PHP backend for contact form (or placeholder only)

---

## 🎨 Page Structure:

| Section          | Description                                       |
| ---------------- | ------------------------------------------------- |
| ✅ Navbar         | Fixed top, links to sections, collapses on mobile |
| ✅ Hero Section   | Name, title, profile image, intro buttons         |
| ✅ About Section  | Short intro, timeline (cards or plain text)       |
| ✅ Skills Section | Icons/cards showing technical skills              |
| ✅ Projects       | Bootstrap cards with modal preview                |
| ✅ Contact Form   | Bootstrap form with validation                    |
| ✅ Footer         | Social links, copyright                           |

---

## 🖥️ Live Layout Plan:

```html
<body>
  <!-- Navbar -->
  <!-- Hero Section -->
  <!-- About Section -->
  <!-- Skills Section -->
  <!-- Projects Section -->
  <!-- Contact Section -->
  <!-- Footer -->
</body>
```

---

## 🧱 Step-by-Step Breakdown:

### ✅ 1. Navbar

```html
<nav class="navbar navbar-expand-lg navbar-dark bg-dark fixed-top">
  <div class="container">
    <a class="navbar-brand" href="#">👨‍💻 YourName</a>
    <button class="navbar-toggler" ... ></button>
    <div class="collapse navbar-collapse">
      <ul class="navbar-nav ms-auto">
        <li><a class="nav-link" href="#about">About</a></li>
        <li><a class="nav-link" href="#skills">Skills</a></li>
        <li><a class="nav-link" href="#projects">Projects</a></li>
        <li><a class="nav-link" href="#contact">Contact</a></li>
      </ul>
    </div>
  </div>
</nav>
```

---

### ✅ 2. Hero Section

```html
<section class="bg-light text-center py-5 mt-5">
  <div class="container">
    <img src="your-image.jpg" class="rounded-circle mb-3" width="150">
    <h1>Hello, I'm <span class="text-primary">YourName</span></h1>
    <p class="lead">Frontend Developer | UI Designer</p>
    <a href="#projects" class="btn btn-primary">See My Work</a>
    <a href="#contact" class="btn btn-outline-dark">Contact</a>
  </div>
</section>
```

---

### ✅ 3. About Section

```html
<section id="about" class="py-5">
  <div class="container">
    <h2>About Me</h2>
    <p>I am a passionate frontend developer from Pakistan/India...</p>
    <!-- Optional Timeline UI -->
  </div>
</section>
```

---

### ✅ 4. Skills Section

```html
<section id="skills" class="bg-light py-5">
  <div class="container">
    <h2>Skills</h2>
    <div class="row text-center">
      <div class="col-md-3"><i class="bi bi-filetype-html"></i><p>HTML5</p></div>
      <div class="col-md-3"><i class="bi bi-filetype-css"></i><p>CSS3</p></div>
      <div class="col-md-3"><i class="bi bi-bootstrap-fill"></i><p>Bootstrap</p></div>
      <div class="col-md-3"><i class="bi bi-filetype-js"></i><p>JavaScript</p></div>
    </div>
  </div>
</section>
```

---

### ✅ 5. Projects Section (Cards + Modal)

```html
<section id="projects" class="py-5">
  <div class="container">
    <h2>Projects</h2>
    <div class="row g-4">
      <div class="col-md-4">
        <div class="card h-100">
          <img src="project1.jpg" class="card-img-top" alt="">
          <div class="card-body">
            <h5 class="card-title">Portfolio Website</h5>
            <p class="card-text">A clean personal site built with Bootstrap.</p>
            <a href="#" class="btn btn-outline-primary" data-bs-toggle="modal" data-bs-target="#project1">Preview</a>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>

<!-- Modal Preview -->
<div class="modal fade" id="project1" tabindex="-1">
  <div class="modal-dialog modal-lg">
    <div class="modal-content">
      <div class="modal-header"><h5>Project Preview</h5></div>
      <div class="modal-body"><img src="project1-full.jpg" class="img-fluid"></div>
    </div>
  </div>
</div>
```

---

### ✅ 6. Contact Section

```html
<section id="contact" class="bg-light py-5">
  <div class="container">
    <h2>Contact Me</h2>
    <form>
      <div class="mb-3">
        <input type="text" class="form-control" placeholder="Your Name" required>
      </div>
      <div class="mb-3">
        <input type="email" class="form-control" placeholder="Your Email" required>
      </div>
      <div class="mb-3">
        <textarea class="form-control" rows="4" placeholder="Your Message"></textarea>
      </div>
      <button type="submit" class="btn btn-primary">Send</button>
    </form>
  </div>
</section>
```

---

### ✅ 7. Footer

```html
<footer class="bg-dark text-white text-center py-4">
  <p>&copy; 2025 YourName. All rights reserved.</p>
  <div>
    <a href="https://github.com/yourusername" class="text-white mx-2"><i class="bi bi-github"></i></a>
    <a href="https://linkedin.com/in/yourusername" class="text-white mx-2"><i class="bi bi-linkedin"></i></a>
  </div>
</footer>
```

---

## 🧪 Project Tips:

* Use Bootstrap scrollspy or `scroll-behavior: smooth` for section links
* Optional: Use PHP for contact form processing (from Chapter 25)
* Deploy to GitHub Pages or Netlify

---

## 🔗 Demo Inspiration:

* [https://startbootstrap.com/template/creative](https://startbootstrap.com/template/creative)
* [https://bootstrapmade.com/devfolio-bootstrap-portfolio-template/](https://bootstrapmade.com/devfolio-bootstrap-portfolio-template/)

---

## ✅ What You’ll Practice:

✔ Responsive layout
✔ Navbar collapse
✔ Bootstrap cards and modals
✔ Form validation
✔ Section-based page
✔ Live project deployment (next chapter)
