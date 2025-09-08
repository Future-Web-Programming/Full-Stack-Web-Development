# 📘 Chapter 7: **Responsive Navigation Bars (Navbars) with Tailwind CSS**

> **Goal:** In this chapter, we’ll learn how to create fully responsive **navigation bars** with Tailwind CSS — including logo, menu links, call-to-action buttons, and hamburger menus for mobile devices.

---

## 🎯 Learning Outcomes

By the end of this chapter, students will:

* Build a **responsive navbar** using Tailwind utility classes
* Use **flexbox**, `justify-between`, and responsive breakpoints
* Implement **hamburger menus** with `hidden`, `block`, `md:flex`, etc.
* Learn how to create **sticky navbars**, transparent navbars, and mobile toggle logic (with JavaScript)
* Build a **real-world navbar** used in landing pages, portfolios, and dashboards

---

## 🔹 1. Basic Navbar Structure

```html
<nav class="bg-white shadow-md">
  <div class="container mx-auto px-6 py-4 flex justify-between items-center">
    <h1 class="text-xl font-bold text-gray-800">TailwindSite</h1>
    <ul class="hidden md:flex space-x-6">
      <li><a href="#" class="text-gray-700 hover:text-blue-600">Home</a></li>
      <li><a href="#" class="text-gray-700 hover:text-blue-600">About</a></li>
      <li><a href="#" class="text-gray-700 hover:text-blue-600">Services</a></li>
      <li><a href="#" class="text-gray-700 hover:text-blue-600">Contact</a></li>
    </ul>
    <a href="#" class="hidden md:inline-block bg-blue-600 text-white px-5 py-2 rounded hover:bg-blue-700 transition">
      Login
    </a>
  </div>
</nav>
```

---

## 📱 2. Mobile-Friendly Navbar with Toggle Button

### ✅ Mobile hamburger toggle (with basic JavaScript):

```html
<nav class="bg-white shadow-md">
  <div class="container mx-auto px-6 py-4 flex justify-between items-center">
    <h1 class="text-xl font-bold text-gray-800">TailwindSite</h1>

    <!-- Hamburger Icon -->
    <button id="menu-btn" class="md:hidden focus:outline-none">
      <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
              d="M4 6h16M4 12h16M4 18h16"/>
      </svg>
    </button>

    <!-- Links (Desktop) -->
    <ul class="hidden md:flex space-x-6">
      <li><a href="#" class="text-gray-700 hover:text-blue-600">Home</a></li>
      <li><a href="#" class="text-gray-700 hover:text-blue-600">About</a></li>
      <li><a href="#" class="text-gray-700 hover:text-blue-600">Services</a></li>
      <li><a href="#" class="text-gray-700 hover:text-blue-600">Contact</a></li>
    </ul>
  </div>

  <!-- Mobile Menu (Hidden by default) -->
  <div id="mobile-menu" class="md:hidden hidden px-6 pb-4">
    <ul class="flex flex-col space-y-4">
      <li><a href="#" class="text-gray-700 hover:text-blue-600">Home</a></li>
      <li><a href="#" class="text-gray-700 hover:text-blue-600">About</a></li>
      <li><a href="#" class="text-gray-700 hover:text-blue-600">Services</a></li>
      <li><a href="#" class="text-gray-700 hover:text-blue-600">Contact</a></li>
    </ul>
  </div>

  <script>
    const btn = document.getElementById('menu-btn');
    const menu = document.getElementById('mobile-menu');
    btn.addEventListener('click', () => {
      menu.classList.toggle('hidden');
    });
  </script>
</nav>
```

---

## 📌 3. Sticky Navbar

```html
<nav class="bg-white shadow-md sticky top-0 z-50">
  <!-- content same as above -->
</nav>
```

* Use `sticky top-0` to fix the navbar at the top
* Add `z-50` to keep it above other content

---

## 🧊 4. Transparent Navbar Over Hero Image

```html
<nav class="absolute top-0 left-0 w-full z-50">
  <div class="container mx-auto px-6 py-4 flex justify-between items-center text-white">
    <h1 class="text-xl font-bold">HeroBrand</h1>
    <ul class="hidden md:flex space-x-6">
      <li><a href="#">Home</a></li>
      <li><a href="#">Portfolio</a></li>
      <li><a href="#">Contact</a></li>
    </ul>
  </div>
</nav>
```

> Combine this with a **hero background image** to overlay it stylishly

---

## 🎨 5. Navbar with Gradient & Button

```html
<nav class="bg-gradient-to-r from-purple-500 to-indigo-600 shadow-md text-white">
  <div class="container mx-auto px-6 py-4 flex justify-between items-center">
    <h1 class="text-xl font-bold">GradientSite</h1>
    <ul class="hidden md:flex space-x-6">
      <li><a href="#" class="hover:underline">Home</a></li>
      <li><a href="#" class="hover:underline">Blog</a></li>
      <li><a href="#" class="hover:underline">Contact</a></li>
    </ul>
    <a href="#" class="hidden md:inline-block bg-white text-indigo-600 px-4 py-2 rounded hover:bg-gray-100 transition">
      Sign Up
    </a>
  </div>
</nav>
```

---

## 🧪 Practice Assignment

> 🔧 Build your own responsive navbar with the following features:

* Logo/Brand
* 4 Menu Items
* A "Sign Up" or "Login" button
* Hamburger icon for mobile
* Mobile menu toggle with vanilla JS

Bonus: Make it **sticky** and overlay it on top of a hero section.

---

## ✅ Summary Table

| Feature   | Utility                                    |
| --------- | ------------------------------------------ |
| Sticky    | `sticky top-0 z-50`                        |
| Spacing   | `px-6`, `py-4`, `space-x-6`                |
| Hide/Show | `hidden`, `md:flex`, `md:hidden`           |
| JS Toggle | `element.classList.toggle('hidden')`       |
| Hover     | `hover:text-blue-600`, `hover:bg-gray-100` |

---

## 🎁 Bonus Resource

**Try this online:**
👉 [Tailwind Play – Navbar Template](https://play.tailwindcss.com/)
