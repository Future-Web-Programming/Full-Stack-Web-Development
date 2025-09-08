Perfect! Let's dive into:

---

# 📘 **Chapter 122: Final Project #2 – Building a Carousel / Slider Component (Pure JavaScript)**

A **carousel** (or slider) is a powerful and commonly used UI pattern for showcasing content, images, or testimonials. In this project, we'll build a fully functional, responsive slider using **only vanilla JavaScript** — no external libraries.

---

## 🎯 **What You Will Learn**

* DOM manipulation and dynamic class toggling
* Handling transitions and animations
* Navigating with Next/Prev buttons
* Keyboard arrow navigation
* Dots/pagination controls
* Auto-slide (bonus)
* Responsive design techniques
* Optional: touch/swipe support

---

## 📁 **Project Structure**

```
carousel-slider/
│
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
  <title>JavaScript Carousel Slider</title>
  <link rel="stylesheet" href="style.css" />
</head>
<body>

  <h1>JavaScript Carousel / Slider</h1>

  <div class="slider">
    <div class="slide active"><img src="https://picsum.photos/id/1018/800/400" alt="Slide 1"></div>
    <div class="slide"><img src="https://picsum.photos/id/1015/800/400" alt="Slide 2"></div>
    <div class="slide"><img src="https://picsum.photos/id/1019/800/400" alt="Slide 3"></div>

    <button class="btn prev">❮</button>
    <button class="btn next">❯</button>

    <div class="dots"></div>
  </div>

  <script src="script.js"></script>
</body>
</html>
```

---

## 🎨 **style.css**

```css
body {
  font-family: sans-serif;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 2rem;
}

.slider {
  position: relative;
  width: 80%;
  max-width: 800px;
  overflow: hidden;
  border-radius: 10px;
  box-shadow: 0 4px 15px rgba(0,0,0,0.2);
}

.slide {
  display: none;
  transition: opacity 0.5s ease-in-out;
}

.slide.active {
  display: block;
}

.slide img {
  width: 100%;
  display: block;
  border-radius: 10px;
}

.btn {
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  background-color: rgba(0,0,0,0.5);
  color: white;
  border: none;
  padding: 12px;
  font-size: 1.5rem;
  cursor: pointer;
  border-radius: 50%;
  z-index: 10;
}

.prev { left: 10px; }
.next { right: 10px; }

.dots {
  text-align: center;
  margin-top: 1rem;
}

.dots button {
  height: 12px;
  width: 12px;
  margin: 0 5px;
  background-color: #bbb;
  border: none;
  border-radius: 50%;
  display: inline-block;
  cursor: pointer;
}

.dots button.active {
  background-color: #333;
}
```

---

## 🧠 **script.js**

```javascript
const slides = document.querySelectorAll('.slide');
const prevBtn = document.querySelector('.prev');
const nextBtn = document.querySelector('.next');
const dotsContainer = document.querySelector('.dots');

let currentSlide = 0;

// Create dots
slides.forEach((_, i) => {
  const dot = document.createElement('button');
  dot.classList.add('dot');
  if (i === 0) dot.classList.add('active');
  dot.setAttribute('data-slide', i);
  dotsContainer.appendChild(dot);
});

// Select dots after creation
const dots = document.querySelectorAll('.dots button');

function showSlide(slideIndex) {
  slides.forEach((slide, i) => {
    slide.classList.toggle('active', i === slideIndex);
    dots[i].classList.toggle('active', i === slideIndex);
  });
  currentSlide = slideIndex;
}

function nextSlide() {
  const newIndex = (currentSlide + 1) % slides.length;
  showSlide(newIndex);
}

function prevSlide() {
  const newIndex = (currentSlide - 1 + slides.length) % slides.length;
  showSlide(newIndex);
}

// Event listeners
nextBtn.addEventListener('click', nextSlide);
prevBtn.addEventListener('click', prevSlide);

dots.forEach(dot => {
  dot.addEventListener('click', () => {
    const slideIndex = +dot.getAttribute('data-slide');
    showSlide(slideIndex);
  });
});

// Keyboard support
document.addEventListener('keydown', e => {
  if (e.key === 'ArrowRight') nextSlide();
  if (e.key === 'ArrowLeft') prevSlide();
});

// Optional: Auto slide every 5s
// setInterval(nextSlide, 5000);
```

---

## 🧪 **Practice Challenges**

* ⏸ Add **Pause on Hover**
* 💡 Add **Auto-Slide with Pause/Resume Button**
* 🖱 Add **Touch/Swipe Gesture Support** (using `touchstart` and `touchend`)
* 🧩 Turn it into a **reusable component** with configuration options

---

## ✅ **What We Built**

✅ Modern, responsive image carousel
✅ Full Next/Prev button control
✅ Dot-based pagination
✅ Keyboard navigation
✅ Smooth UX transitions

---

## 📦 Use Cases

* Testimonial sliders
* Product showcases
* Hero section sliders
* Portfolio galleries

---

## 🔁 Bonus: Convert it into a component or class-based pattern later (OOP style)

---

Let me know when you're ready to move to:
🔜 **Chapter 123: Final Project #3 – Smooth Scrolling (Anchor Navigation UI)**
We’ll build a section-based landing page with smooth scrolling and active link highlighting!

Shall we begin?
