## 🛠️ 1. Introduction to Navbar in Bootstrap

Bootstrap offers a powerful `.navbar` component to help create responsive headers with menus.
It supports:

* Brand logos
* Navigation links
* Collapsible menu (hamburger)
* Dropdowns
* Search bars and more!

---

## 💡 2. Basic Navbar Structure (CDN Setup)

```html
<nav class="navbar navbar-expand-lg navbar-light bg-light">
  <div class="container">
    <a class="navbar-brand" href="#">MySite</a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#mainNavbar">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="mainNavbar">
      <ul class="navbar-nav ms-auto">
        <li class="nav-item"><a class="nav-link active" href="#">Home</a></li>
        <li class="nav-item"><a class="nav-link" href="#">About</a></li>
        <li class="nav-item"><a class="nav-link" href="#">Services</a></li>
        <li class="nav-item"><a class="nav-link" href="#">Contact</a></li>
      </ul>
    </div>
  </div>
</nav>
```

---

## 🧱 3. Key Classes Explained

| Class                          | Purpose                                  |
| ------------------------------ | ---------------------------------------- |
| `.navbar`                      | Wrapper for navbar                       |
| `.navbar-expand-lg`            | Expands navbar from large screens and up |
| `.navbar-light / .navbar-dark` | Sets contrast for nav text               |
| `.bg-light / .bg-dark`         | Background colors                        |
| `.navbar-brand`                | Branding / logo                          |
| `.navbar-toggler`              | Hamburger button for collapse            |
| `.collapse.navbar-collapse`    | Collapsible nav section                  |
| `.navbar-nav`                  | Wraps nav items                          |
| `.nav-item`, `.nav-link`       | Defines links                            |

---

## 📱 4. Responsive Navbar with Hamburger Menu

* Uses `navbar-toggler` and `collapse` to toggle navigation on small screens.
* Add `data-bs-toggle="collapse"` and `data-bs-target="#ID"` to control the menu.

✅ Example:

```html
<button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#mainNavbar">
  <span class="navbar-toggler-icon"></span>
</button>
```

---

## 🖼️ 5. Add a Logo or Image as Brand

```html
<a class="navbar-brand" href="#">
  <img src="logo.png" alt="Logo" width="30" height="30" class="d-inline-block align-text-top">
  BrandName
</a>
```

---

## 🌈 6. Customizing Navbar Colors

Bootstrap provides default options, or you can customize:

```html
<nav class="navbar navbar-dark bg-dark"> <!-- dark mode -->
<nav class="navbar navbar-light bg-white"> <!-- light mode -->
```

🛠 Use utility classes like `py-3`, `shadow`, `rounded`, `px-4` for spacing.

---

## 🧩 7. Adding Dropdown to Navbar

```html
<li class="nav-item dropdown">
  <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown">
    Services
  </a>
  <ul class="dropdown-menu">
    <li><a class="dropdown-item" href="#">Design</a></li>
    <li><a class="dropdown-item" href="#">Development</a></li>
  </ul>
</li>
```

---

## 🧪 8. Sticky and Fixed Navbars

| Type             | Class        |
| ---------------- | ------------ |
| Fixed to Top     | `fixed-top`  |
| Sticky on Scroll | `sticky-top` |

```html
<nav class="navbar fixed-top navbar-light bg-light">...</nav>
```

---

## 🦽 9. Navbar Accessibility (A11Y)

✅ Use `aria-controls`, `aria-expanded`, and `aria-label` for the toggler button.
✅ Use semantic `<nav>` and `<ul>` structures.
✅ Ensure focus states are visible for keyboard users.

```html
<button class="navbar-toggler" type="button" data-bs-toggle="collapse" 
  data-bs-target="#mainNavbar" aria-controls="mainNavbar" aria-expanded="false" 
  aria-label="Toggle navigation">
  <span class="navbar-toggler-icon"></span>
</button>
```

---

## 🧑‍💻 10. Real-World Practice: Create a Navigation Bar

🎯 Build a responsive Bootstrap navbar with:

* Brand logo
* Home, About, Services, Contact links
* Dropdown under Services
* Hamburger menu on mobile
* Sticky nav with shadow

---

## 🔗 Online Code Editors

* [CodePen Bootstrap Starter](https://codepen.io/)
* [JSFiddle Bootstrap](https://jsfiddle.net/)
* [Playcode.io](https://playcode.io/)

---

## ✅ Summary

| Feature              | Covered |
| -------------------- | ------- |
| Basic navbar         | ✅       |
| Collapse (hamburger) | ✅       |
| Logo/branding        | ✅       |
| Dropdown menus       | ✅       |
| Color themes         | ✅       |
| Sticky/fixed nav     | ✅       |
| Accessibility        | ✅       |
| Practice project     | ✅       |

---

## 🎓 Homework / Challenge

🔨 **Mini Project**: Build a navigation bar for a real startup website.
Include dropdowns, brand logo, and test responsiveness on all devices.
