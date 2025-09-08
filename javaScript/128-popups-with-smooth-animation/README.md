Great! Let's now build another must-have component found in almost every modern web app: **modal popups**, also known as **dialog boxes**.

---

# 📘 **Chapter 128: Final Project #8 – Modal Popups with Smooth Animations in Pure JavaScript**

Modals are used to show important information or prompt the user for action without navigating away from the current page.

We’ll build a **reusable, animated modal popup** using only HTML, CSS, and JavaScript.

---

## 🎯 What You’ll Learn

* How modals work under the hood (no Bootstrap, no library)
* DOM manipulation to open/close modals
* CSS transitions and `transform` for animation
* Using overlay to dim the background
* Keyboard accessibility (`Escape` key)

---

## 🧱 Project Structure

```
modal-popup/
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
  <title>Modal Popup</title>
  <link rel="stylesheet" href="style.css" />
</head>
<body>

  <main class="container">
    <h1>Modal Popup in Pure JavaScript</h1>
    <button class="btn-open">Open Modal</button>
  </main>

  <!-- Overlay -->
  <div class="overlay hidden"></div>

  <!-- Modal -->
  <div class="modal hidden">
    <button class="btn-close">&times;</button>
    <h2>Welcome!</h2>
    <p>This is a custom modal built without any library.</p>
  </div>

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
  background: #f5f5f5;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
}

.container {
  text-align: center;
}

button {
  padding: 10px 20px;
  font-size: 1rem;
  cursor: pointer;
  border: none;
  border-radius: 5px;
  background: #6c63ff;
  color: #fff;
  transition: background 0.3s;
}

button:hover {
  background: #5848e5;
}

.modal,
.overlay {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  transition: all 0.3s ease-in-out;
}

.overlay {
  background: rgba(0, 0, 0, 0.5);
  z-index: 100;
  opacity: 0;
  pointer-events: none;
}

.modal {
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%) scale(0.8);
  background: white;
  padding: 2rem;
  border-radius: 10px;
  z-index: 200;
  width: 90%;
  max-width: 400px;
  opacity: 0;
  pointer-events: none;
  box-shadow: 0 5px 15px rgba(0,0,0,0.2);
}

.modal h2 {
  margin-bottom: 10px;
}

.modal p {
  font-size: 1rem;
}

.btn-close {
  position: absolute;
  top: 10px;
  right: 15px;
  background: transparent;
  font-size: 1.5rem;
  border: none;
  cursor: pointer;
}

/* Show Modal & Overlay */
.modal.show,
.overlay.show {
  opacity: 1;
  pointer-events: auto;
}

.modal.show {
  transform: translate(-50%, -50%) scale(1);
}

/* Utility */
.hidden {
  display: none;
}
```

---

## 🧠 `script.js`

```javascript
const openBtn = document.querySelector('.btn-open');
const closeBtn = document.querySelector('.btn-close');
const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');

// Functions
function openModal() {
  modal.classList.add('show');
  overlay.classList.add('show');
}

function closeModal() {
  modal.classList.remove('show');
  overlay.classList.remove('show');
}

// Event Listeners
openBtn.addEventListener('click', openModal);
closeBtn.addEventListener('click', closeModal);
overlay.addEventListener('click', closeModal);

// Close with Escape key
document.addEventListener('keydown', function (e) {
  if (e.key === 'Escape' && modal.classList.contains('show')) {
    closeModal();
  }
});
```

---

## ✅ How It Works

* Modal and overlay start `hidden` and `opacity: 0`.
* Clicking "Open Modal" adds `show` classes.
* CSS transitions + `transform: scale()` animate the popup.
* Clicking "X", overlay, or pressing Escape closes it.

---

## 💡 Bonus: Make It Reusable

You could extract this logic into a `createModal()` function or component-style logic to reuse modals throughout your app.

---

## 🧪 Try It Online

Test on:

* [StackBlitz](https://stackblitz.com/)
* [CodePen](https://codepen.io/)
* [JSFiddle](https://jsfiddle.net/)

---

## 🔧 Challenges

* Support multiple modals with different content
* Animate modal slide-in from bottom or top
* Trap focus inside modal for accessibility

---

## 🔜 Coming Next

**Chapter 129: Final Project #9 – Dark / Light Theme Switcher with LocalStorage**

We’ll build a dark mode toggle button that persists the user’s preference across sessions using JavaScript and localStorage.

Would you like to move forward with **Chapter 129 – Theme Switcher**?
