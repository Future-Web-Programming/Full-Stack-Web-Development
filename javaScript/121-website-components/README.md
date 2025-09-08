Awesome! Let’s begin **Chapter 121: Final Project #1 – Tabs, Accordion, and Dropdown (Pure JavaScript)**
This project marks the beginning of the final capstone series. We’ll build a fully functional and modern **Tabs**, **Accordion**, and **Dropdown UI**—all from scratch using only HTML, CSS, and JavaScript.

---

## 📘 Chapter 121: Tabs, Accordion, and Dropdown (Vanilla JS Capstone Project #1)

### 🎯 What You Will Learn

* DOM manipulation and event delegation
* Tab-based navigation
* Accordion behavior for content toggling
* Dropdown toggle menus with click outside detection
* ARIA accessibility considerations (intro)
* Smooth animations and UX best practices

---

### 🧰 Tools & Prerequisites

✅ You should know:

* JavaScript DOM & Events
* JavaScript Functions & Conditionals
* Basic HTML & CSS
* `classList`, `querySelectorAll`, `addEventListener`

---

## 📁 Project Structure

```
tabs-accordion-dropdown/
│
├── index.html
├── style.css
└── script.js
```

---

## 📄 index.html

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>Tabs | Accordion | Dropdown</title>
  <link rel="stylesheet" href="style.css" />
</head>
<body>

  <h1>Tabs | Accordion | Dropdown</h1>

  <!-- TABS -->
  <section class="tabs-section">
    <div class="tabs">
      <button class="tab active" data-tab="1">Home</button>
      <button class="tab" data-tab="2">About</button>
      <button class="tab" data-tab="3">Contact</button>
    </div>
    <div class="tab-content active" data-content="1">Welcome to the homepage!</div>
    <div class="tab-content" data-content="2">About us content goes here.</div>
    <div class="tab-content" data-content="3">Contact us via email or phone.</div>
  </section>

  <!-- ACCORDION -->
  <section class="accordion-section">
    <div class="accordion-item">
      <button class="accordion-header">What is JavaScript?</button>
      <div class="accordion-body">JavaScript is a scripting language for the web.</div>
    </div>
    <div class="accordion-item">
      <button class="accordion-header">What is DOM?</button>
      <div class="accordion-body">DOM stands for Document Object Model.</div>
    </div>
  </section>

  <!-- DROPDOWN -->
  <section class="dropdown-section">
    <button class="dropdown-toggle">Select Language</button>
    <ul class="dropdown-menu">
      <li>JavaScript</li>
      <li>Python</li>
      <li>Java</li>
    </ul>
  </section>

  <script src="script.js"></script>
</body>
</html>
```

---

## 🎨 style.css

```css
body {
  font-family: Arial, sans-serif;
  padding: 2rem;
}

.tabs {
  display: flex;
  gap: 1rem;
  margin-bottom: 1rem;
}

.tab {
  padding: 10px 20px;
  cursor: pointer;
  background-color: #eee;
  border: none;
}

.tab.active {
  background-color: #333;
  color: white;
}

.tab-content {
  display: none;
  padding: 1rem;
  background: #f9f9f9;
  margin-bottom: 2rem;
}

.tab-content.active {
  display: block;
}

.accordion-header {
  background-color: #444;
  color: white;
  padding: 1rem;
  cursor: pointer;
  border: none;
  width: 100%;
  text-align: left;
}

.accordion-body {
  display: none;
  padding: 1rem;
  background-color: #eee;
}

.accordion-item.active .accordion-body {
  display: block;
}

.dropdown-section {
  position: relative;
  margin-top: 2rem;
}

.dropdown-toggle {
  padding: 10px 15px;
  cursor: pointer;
}

.dropdown-menu {
  display: none;
  position: absolute;
  top: 40px;
  left: 0;
  background-color: white;
  border: 1px solid #ccc;
  list-style: none;
  padding: 10px 0;
  width: 200px;
}

.dropdown-menu li {
  padding: 10px;
  cursor: pointer;
}

.dropdown-section.active .dropdown-menu {
  display: block;
}
```

---

## 🧠 script.js

```javascript
// TABS
const tabs = document.querySelectorAll('.tab');
const tabContents = document.querySelectorAll('.tab-content');

tabs.forEach(tab => {
  tab.addEventListener('click', () => {
    const target = tab.dataset.tab;

    tabs.forEach(t => t.classList.remove('active'));
    tabContents.forEach(c => c.classList.remove('active'));

    tab.classList.add('active');
    document.querySelector(`.tab-content[data-content="${target}"]`).classList.add('active');
  });
});

// ACCORDION
const accordions = document.querySelectorAll('.accordion-header');

accordions.forEach(header => {
  header.addEventListener('click', () => {
    const parent = header.parentElement;
    parent.classList.toggle('active');
  });
});

// DROPDOWN
const dropdownToggle = document.querySelector('.dropdown-toggle');
const dropdownSection = document.querySelector('.dropdown-section');

dropdownToggle.addEventListener('click', () => {
  dropdownSection.classList.toggle('active');
});

// Close dropdown when clicking outside
document.addEventListener('click', (e) => {
  if (!dropdownSection.contains(e.target)) {
    dropdownSection.classList.remove('active');
  }
});
```

---

## ✅ What We’ve Built

* **Tabs:** Switch content dynamically without reloading the page.
* **Accordion:** Expand/collapse answers or content blocks.
* **Dropdown:** UI-friendly language selector with click-outside detection.

---

## 💡 Real-World Use Cases

* Navigation UIs
* FAQ sections
* Language or settings dropdowns
* Frontend interview question demonstrations

---

## 🧪 Practice Exercises (Optional)

* Add smooth transitions with CSS
* Close accordion when opening another
* Store selected tab in `localStorage`

---

Let me know when you're ready for:
🔜 **Chapter 122: Final Project #2 – Carousel/Slider Component**
We'll build a responsive slider with JavaScript navigation, transitions, and touch support.

Shall we begin?
