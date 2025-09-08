Excellent! Let’s begin:

---

# 📘 **Chapter 123: Final Project #3 – Smooth Scrolling & Active Navigation (Pure JavaScript)**

Smooth scrolling and active section highlighting are core features in modern websites—especially landing pages. In this project, you’ll build a responsive one-page website with smooth scrolling navigation, section highlighting, and sticky navbar.

---

## 🎯 **What You Will Learn**

* Smooth scrolling using JavaScript
* Anchor navigation with `scrollIntoView`
* Sticky navbar with IntersectionObserver
* Scroll spy (active link highlighting)
* Responsive section navigation
* Optional: Back-to-top button

---

## 📁 **Project Structure**

```
smooth-scroll-site/
├── index.html
├── style.css
└── script.js
```

---

## 📄 **index.html**

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
  <title>Smooth Scrolling Navigation</title>
  <link rel="stylesheet" href="style.css" />
</head>
<body>

  <header class="header" id="header">
    <nav class="nav">
      <ul class="nav__links">
        <li><a href="#section1" class="nav__link">Home</a></li>
        <li><a href="#section2" class="nav__link">About</a></li>
        <li><a href="#section3" class="nav__link">Services</a></li>
        <li><a href="#section4" class="nav__link">Contact</a></li>
      </ul>
    </nav>
  </header>

  <main>
    <section id="section1" class="section">Welcome to Home</section>
    <section id="section2" class="section">About Us</section>
    <section id="section3" class="section">Our Services</section>
    <section id="section4" class="section">Contact Us</section>
  </main>

  <script src="script.js"></script>
</body>
</html>
```

---

## 🎨 **style.css**

```css
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

body {
  font-family: sans-serif;
  scroll-behavior: smooth; /* optional fallback */
}

.header {
  background-color: #222;
  color: white;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  z-index: 1000;
}

.nav {
  max-width: 960px;
  margin: auto;
  padding: 1rem;
}

.nav__links {
  list-style: none;
  display: flex;
  justify-content: space-around;
}

.nav__link {
  color: white;
  text-decoration: none;
  font-size: 1.1rem;
  padding: 0.5rem 1rem;
}

.nav__link.active {
  background-color: #fff;
  color: #222;
  border-radius: 5px;
}

.section {
  min-height: 100vh;
  padding: 120px 2rem 2rem;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 2rem;
  background-color: #f2f2f2;
  border-bottom: 1px solid #ddd;
}

#section1 { background-color: #e9f5ff; }
#section2 { background-color: #e3ffe9; }
#section3 { background-color: #fff9e6; }
#section4 { background-color: #ffe9ec; }
```

---

## 🧠 **script.js**

```javascript
// Smooth scroll
document.querySelectorAll('.nav__link').forEach(link => {
  link.addEventListener('click', function(e) {
    e.preventDefault();
    const targetId = this.getAttribute('href');
    const section = document.querySelector(targetId);
    section.scrollIntoView({ behavior: 'smooth' });
  });
});

// Active link (scroll spy)
const sections = document.querySelectorAll('section');
const navLinks = document.querySelectorAll('.nav__link');

const observer = new IntersectionObserver(
  entries => {
    entries.forEach(entry => {
      const id = entry.target.getAttribute('id');
      const navLink = document.querySelector(`.nav__link[href="#${id}"]`);
      if (entry.isIntersecting) {
        navLinks.forEach(link => link.classList.remove('active'));
        navLink.classList.add('active');
      }
    });
  },
  {
    threshold: 0.5,
  }
);

sections.forEach(section => observer.observe(section));
```

---

## 🔥 **Bonus Features (Optional)**

* Add a **“Scroll to Top”** button
* Add **section fade-in** on scroll
* Highlight navbar only after scrolling starts
* Use `scroll-padding-top` if sticky nav overlaps section headings

---

## 🧪 **Challenges**

* Can you support **URL hash linking** (`/index.html#about`)?
* Make it mobile-responsive with a hamburger menu
* Add smooth scroll behavior **with offset correction**

---

## ✅ **Key Concepts Practiced**

* `scrollIntoView({ behavior: "smooth" })`
* IntersectionObserver API
* Class toggling and DOM navigation
* Sticky nav and layout offset
* Responsive single-page app structure

---

## 📦 Use Cases

* Landing pages
* Portfolios
* Product overview pages
* Mobile-first web apps

---

When you're ready, we’ll continue to:

🔜 **Chapter 124: Final Project #4 – Form Validation with JavaScript**

We’ll cover real-time form field validation, error messages, regex patterns, and more — all in **pure JS**.

Would you like to begin Chapter 124 now?
