Perfect! Let’s now build another essential UI component using **pure JavaScript**: a sticky navigation bar that enhances UX and scroll behavior.

---

# 📘 **Chapter 127: Final Project #7 – Sticky Navbar with Scroll-Aware Behavior in Pure JavaScript**

Sticky navbars stay at the top of the page when you scroll past a certain point, making your UI more usable, especially in long pages or apps.

We'll create a **responsive sticky header** that:

* Becomes fixed after scrolling past the hero section.
* Smoothly transitions into view.
* Works in pure JavaScript using the Intersection Observer API.

---

## 🎯 What You’ll Learn

* How to make a navbar “stick” on scroll
* Intersection Observer for detecting scroll position
* Scroll behavior control with `position: fixed`
* Clean transitions and scroll optimizations

---

## 🧱 Project Structure

```
sticky-navbar/
├── index.html
├── style.css
└── script.js
```

---

## 📄 `index.html`

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
  <title>Sticky Navbar</title>
  <link rel="stylesheet" href="style.css" />
</head>
<body>

  <header class="header">
    <nav class="nav">
      <div class="logo">JS Course</div>
      <ul class="nav-links">
        <li><a href="#">Home</a></li>
        <li><a href="#">Projects</a></li>
        <li><a href="#">About</a></li>
      </ul>
    </nav>
  </header>

  <section class="hero" id="hero">
    <h1>Sticky Navbar with JavaScript</h1>
    <p>Scroll down to see it in action</p>
  </section>

  <main class="content">
    <!-- Simulated content -->
    <p>Lorem ipsum dolor sit amet...</p>
    <p>(Add multiple paragraphs here for scrolling)</p>
  </main>

  <script src="script.js"></script>
</body>
</html>
```

---

## 🎨 `style.css`

```css
/* Reset */
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

body {
  font-family: 'Segoe UI', sans-serif;
  line-height: 1.6;
}

.header {
  width: 100%;
  background: #fff;
  box-shadow: 0 1px 4px rgba(0, 0, 0, 0.1);
  transition: all 0.3s ease;
  z-index: 999;
}

.nav {
  max-width: 1200px;
  margin: 0 auto;
  padding: 1rem 2rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.nav .logo {
  font-size: 1.5rem;
  font-weight: bold;
  color: #333;
}

.nav .nav-links {
  list-style: none;
  display: flex;
  gap: 1.5rem;
}

.nav .nav-links a {
  text-decoration: none;
  color: #333;
  font-weight: 500;
}

.hero {
  height: 80vh;
  background: linear-gradient(135deg, #6e8efb, #a777e3);
  color: white;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
}

.hero h1 {
  font-size: 3rem;
}

.hero p {
  font-size: 1.25rem;
  margin-top: 1rem;
}

.content {
  padding: 3rem 2rem;
  max-width: 800px;
  margin: auto;
}

.sticky {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  animation: slideDown 0.3s ease-in-out;
}

@keyframes slideDown {
  from {
    transform: translateY(-100%);
  }
  to {
    transform: translateY(0);
  }
}
```

---

## 🧠 `script.js`

```javascript
const header = document.querySelector('.header');
const hero = document.querySelector('#hero');

const observer = new IntersectionObserver(
  entries => {
    const entry = entries[0];

    if (!entry.isIntersecting) {
      header.classList.add('sticky');
    } else {
      header.classList.remove('sticky');
    }
  },
  {
    root: null,
    threshold: 0,
    rootMargin: '-80px', // Adjust based on header height
  }
);

observer.observe(hero);
```

---

## ✅ How It Works

* `IntersectionObserver` watches the **hero** section.
* When it's **no longer visible**, we apply `.sticky` class to `header`.
* `position: fixed` makes the navbar float at top.
* Smooth transition animates the appearance.

---

## 🧪 Live Test It

Use:

* [CodePen](https://codepen.io/)
* [StackBlitz](https://stackblitz.com/)
* [JSFiddle](https://jsfiddle.net/)

---

## 🚀 Bonus Challenges

* Make nav links highlight on scroll
* Add **scroll-up** hide/show effect
* Add active section highlight with `scrollIntoView()`
* Add mobile hamburger menu

---

## 📦 Reusability Tip

You can use this sticky navbar on **portfolios**, **blogs**, **landing pages**, and **admin dashboards**.

---

## 🔜 Coming Next

**Chapter 128: Final Project #8 – Modal Popups with Smooth Animations**

We'll build beautiful and reusable modal popups with open/close animations — no libraries needed.

Shall we continue with **Chapter 128: Modal Popups in Pure JS**?
