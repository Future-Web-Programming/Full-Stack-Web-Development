# 📦 Chapter 31: **Project 2 — Restaurant Website with Bootstrap 5**

> 🧑‍🍳 **Goal:** Build a beautiful, responsive, real-world Restaurant Website using Bootstrap 5. We’ll include a food menu, image gallery, contact section, and a table booking modal—all using clean HTML + Bootstrap UI components.

---

## ✅ What You’ll Build in This Chapter

A fully responsive **restaurant website** that includes:

* 🍽️ Hero Section with Welcome Text
* 📋 Food Menu with Categories (Starters, Main Course, Desserts)
* 🖼️ Gallery of Restaurant Images
* 📞 Contact Section (with Map + Contact Form)
* 📆 Table Booking Modal (Bootstrap Modal)
* 📱 Fully Responsive for Mobile, Tablet, and Desktop
* 🌙 (Optional) Dark Mode toggle

---

## 🛠️ Technologies Used

* HTML5
* Bootstrap 5 (CDN / SCSS Optional)
* Google Fonts
* Bootstrap Icons
* JS for modal trigger (optional)
* Embed tools (Google Maps / OpenStreetMap)

---

## 🧱 Page Structure

```html
<header>     <!-- Navbar -->
<section>    <!-- Hero Banner -->
<section>    <!-- Menu Section -->
<section>    <!-- Gallery -->
<section>    <!-- Contact Form + Map -->
<footer>     <!-- Copyright -->
```

---

## 🎯 Key Bootstrap Components Covered

| Feature       | Bootstrap Topics                     |
| ------------- | ------------------------------------ |
| Hero Section  | Jumbotron / Flexbox / Text Utilities |
| Menu Grid     | Cards, Rows/Cols, Typography         |
| Gallery       | Image Grid with Hover                |
| Booking Modal | Bootstrap Modals                     |
| Contact Form  | Forms + Validation                   |
| Navbar        | Collapse, Branding                   |
| Footer        | Grid, Utility Classes                |

---

## 💡 Step-by-Step Guide

---

### 1️⃣ Setup the Project

```html
<!-- index.html -->
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>Bootstrap Restaurant Website</title>
  <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css" rel="stylesheet" />
  <link href="https://cdn.jsdelivr.net/npm/bootstrap-icons/font/bootstrap-icons.css" rel="stylesheet">
  <link href="style.css" rel="stylesheet" />
</head>
<body>
```

---

### 2️⃣ Navbar with Brand Logo and Booking Button

```html
<nav class="navbar navbar-expand-lg navbar-dark bg-dark sticky-top">
  <div class="container">
    <a class="navbar-brand" href="#">🍕 RestoBite</a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarNav">
      <ul class="navbar-nav ms-auto">
        <li class="nav-item"><a class="nav-link" href="#menu">Menu</a></li>
        <li class="nav-item"><a class="nav-link" href="#gallery">Gallery</a></li>
        <li class="nav-item"><a class="nav-link" href="#contact">Contact</a></li>
        <li class="nav-item">
          <button class="btn btn-warning btn-sm ms-3" data-bs-toggle="modal" data-bs-target="#bookingModal">
            Book Table
          </button>
        </li>
      </ul>
    </div>
  </div>
</nav>
```

---

### 3️⃣ Hero Section

```html
<section class="bg-dark text-light text-center p-5">
  <div class="container">
    <h1 class="display-4">Welcome to RestoBite</h1>
    <p class="lead">Delicious Food. Cozy Ambience. Unforgettable Experience.</p>
    <a href="#menu" class="btn btn-outline-light mt-3">View Menu</a>
  </div>
</section>
```

---

### 4️⃣ Menu Section (Cards + Categories)

```html
<section id="menu" class="py-5">
  <div class="container">
    <h2 class="text-center mb-4">Our Menu</h2>
    <div class="row g-4">
      <div class="col-md-4">
        <div class="card h-100">
          <img src="img/starter.jpg" class="card-img-top" alt="Starter">
          <div class="card-body">
            <h5 class="card-title">Starters</h5>
            <p class="card-text">Fresh and tasty appetizers to get you started.</p>
          </div>
        </div>
      </div>
      <!-- Repeat for Main Course & Desserts -->
    </div>
  </div>
</section>
```

---

### 5️⃣ Gallery Section

```html
<section id="gallery" class="bg-light py-5">
  <div class="container">
    <h2 class="text-center mb-4">Gallery</h2>
    <div class="row g-3">
      <div class="col-md-4">
        <img src="img/gallery1.jpg" class="img-fluid rounded shadow" alt="gallery" />
      </div>
      <!-- Repeat for more images -->
    </div>
  </div>
</section>
```

---

### 6️⃣ Booking Modal

```html
<!-- Booking Modal -->
<div class="modal fade" id="bookingModal" tabindex="-1">
  <div class="modal-dialog">
    <form class="modal-content">
      <div class="modal-header">
        <h5 class="modal-title">Book a Table</h5>
        <button type="button" class="btn-close" data-bs-dismiss="modal"></button>
      </div>
      <div class="modal-body">
        <input type="text" placeholder="Your Name" class="form-control mb-2" required>
        <input type="email" placeholder="Email" class="form-control mb-2" required>
        <input type="datetime-local" class="form-control mb-2" required>
      </div>
      <div class="modal-footer">
        <button class="btn btn-primary w-100">Submit</button>
      </div>
    </form>
  </div>
</div>
```

---

### 7️⃣ Contact Section (with Map)

```html
<section id="contact" class="py-5">
  <div class="container">
    <h2 class="text-center mb-4">Contact Us</h2>
    <div class="row">
      <div class="col-md-6 mb-4">
        <iframe src="https://maps.google.com/maps?q=Lahore&t=&z=13&ie=UTF8&iwloc=&output=embed"
          width="100%" height="300" style="border:0;" allowfullscreen="" loading="lazy"></iframe>
      </div>
      <div class="col-md-6">
        <form>
          <input type="text" class="form-control mb-2" placeholder="Name" required>
          <input type="email" class="form-control mb-2" placeholder="Email" required>
          <textarea class="form-control mb-2" placeholder="Message" rows="4" required></textarea>
          <button class="btn btn-dark w-100">Send Message</button>
        </form>
      </div>
    </div>
  </div>
</section>
```

---

### 8️⃣ Footer

```html
<footer class="bg-dark text-white text-center py-3">
  <small>&copy; 2025 RestoBite. All rights reserved.</small>
</footer>
```

---

## 🎨 Bonus: Dark Mode Support (Optional)

Add a toggle switch + dark/light Bootstrap classes using custom JS. You can reuse logic from Chapter 21 (Dark Mode Support).

---

## 🎁 Download Assets (Images, Icons, Fonts)

Make sure to:

* Use royalty-free food images (from Unsplash or Pexels)
* Google Fonts: `'Poppins'`, `'Playfair Display'`
* Bootstrap Icons (via CDN)

---

## 📦 Final Output (Live Preview Mockup)

```
[Navbar] — Home | Menu | Gallery | Contact | Book Table

[Hero] — Welcome Message + CTA Button

[Menu] — Cards: Starters | Main Course | Desserts

[Gallery] — 3x2 Image Grid

[Booking Modal] — Name, Email, Date/Time

[Contact Section] — Google Map + Form

[Footer] — Copyright
```

---

## 🧠 What Students Will Learn

* How to build **real-world restaurant UI** using Bootstrap
* How to structure layouts using Bootstrap grid & flex utilities
* How to use Bootstrap modals and forms
* Responsive gallery layouts and card design
* How to apply spacing, colors, and Bootstrap typography

---

## ✅ Your Turn!

Encourage students to:

* Customize the menu categories
* Add more modal validation
* Add animation (fade-in, hover effects)
* Deploy the site using Netlify/GitHub (coming in Chapter 38)
