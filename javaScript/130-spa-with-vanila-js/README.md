Perfect! 🎉 This is a big milestone. In **Chapter 130**, we'll bring together many JavaScript skills and concepts to build a **Single Page Application (SPA)** using **only Vanilla JavaScript** — no React, Vue, or libraries. Just you, JS, and the DOM.

---

# 🔥 Chapter 130: Final Project #10 – Vanilla JS Single Page Application (SPA) with Routing

> This project will simulate how frameworks like React or Vue handle client-side routing — but without using any library. You'll truly understand how a basic frontend router works.

---

## 🧠 What You’ll Learn

* Hash-based routing in the browser
* Dynamic content rendering
* DOM manipulation for routing
* SPA principles: no page reloads, smooth navigation
* Structuring components and views

---

## 📁 Project Structure

```
vanilla-spa/
├── index.html
├── style.css
├── app.js
├── routes/
│   ├── home.js
│   ├── about.js
│   └── contact.js
```

---

## 🔧 Step-by-Step Breakdown

---

### ✅ 1. `index.html`

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1" />
  <title>Vanilla JS SPA</title>
  <link rel="stylesheet" href="style.css" />
</head>
<body>
  <nav>
    <a href="#/">Home</a>
    <a href="#/about">About</a>
    <a href="#/contact">Contact</a>
  </nav>

  <main id="app">
    <!-- Views will be injected here -->
  </main>

  <script type="module" src="app.js"></script>
</body>
</html>
```

---

### 🎨 2. `style.css`

```css
body {
  font-family: sans-serif;
  margin: 0;
  padding: 0;
  background: #f5f5f5;
  color: #333;
}

nav {
  background: #111;
  padding: 1rem;
  display: flex;
  gap: 1rem;
}

nav a {
  color: white;
  text-decoration: none;
}

main {
  padding: 2rem;
}
```

---

### 📦 3. `app.js` (Router Logic)

```javascript
import Home from './routes/home.js';
import About from './routes/about.js';
import Contact from './routes/contact.js';

// Routes map
const routes = {
  '/': Home,
  '/about': About,
  '/contact': Contact
};

// Router function
function router() {
  const path = location.hash.slice(1).toLowerCase() || '/';
  const view = routes[path];

  if (view) {
    document.getElementById('app').innerHTML = view();
  } else {
    document.getElementById('app').innerHTML = `<h2>404 - Page Not Found</h2>`;
  }
}

// Handle routing
window.addEventListener('hashchange', router);
window.addEventListener('load', router);
```

---

### 🔍 4. Views (`routes/*.js`)

#### 🏠 `routes/home.js`

```javascript
export default function Home() {
  return `
    <h1>Welcome to Home Page</h1>
    <p>This is the main landing page of our SPA.</p>
  `;
}
```

#### 👤 `routes/about.js`

```javascript
export default function About() {
  return `
    <h1>About Us</h1>
    <p>This is a basic SPA made using just JavaScript.</p>
  `;
}
```

#### 📞 `routes/contact.js`

```javascript
export default function Contact() {
  return `
    <h1>Contact</h1>
    <p>Email: example@futurejs.com</p>
  `;
}
```

---

## 🧠 Why This Matters

Client-side routing is the foundation of modern frameworks like **React Router**, **Vue Router**, **Next.js**, and more.

Building it manually helps you understand:

* How routes work behind the scenes
* How DOM manipulation replaces page reloads
* How to load and switch views with clean architecture

---

## 🚀 Bonus Ideas

| Feature             | Description                               |
| ------------------- | ----------------------------------------- |
| 404 Page            | Display custom message for bad routes     |
| Lazy-load views     | Dynamically import views only when needed |
| Nested routes       | Add sub-sections in pages                 |
| Form handling       | Add forms with JS-based validation        |
| History API routing | Use pushState for cleaner URLs            |

---

## 🧪 Try It Online

* [CodePen (w/ Modules)](https://codepen.io)
* [StackBlitz (Recommended for modules)](https://stackblitz.com)

---

## 📚 Summary

| Feature                     | We Did |
| --------------------------- | ------ |
| Hash-based routing          | ✅      |
| Dynamic component rendering | ✅      |
| Clean file structure        | ✅      |
| No framework required       | ✅      |

---

## 🏁 Final Words

Congratulations! You've built your **own frontend router** — something most JavaScript developers only use through frameworks. This puts you miles ahead.

---

## 🎓 What’s Next?

You’ve completed all 10 Pure JavaScript Capstone Projects!

If you'd like, I can now help you:

* Package these projects for portfolio
* Deploy them to GitHub Pages
* Move toward React, Vue, or Svelte fundamentals
* Start a new “Advanced JS Patterns & Architecture” series

Would you like to close the course here with a **certificate/project wrap-up**, or extend with **a mini framework from scratch (React-style)**?

Let me know!
