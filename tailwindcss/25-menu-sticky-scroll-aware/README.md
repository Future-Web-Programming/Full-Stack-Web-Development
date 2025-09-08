## 🧭 Chapter 25: **Responsive Navigation Bars in Tailwind – Sticky, Mobile Hamburger, and Scroll-Aware Menus**

---

### 🎯 What You’ll Master in This Chapter:

By the end, students will:

* Create **multi-device responsive** navigation bars
* Build a **mobile hamburger menu with animation**
* Implement a **sticky header** on scroll
* Make the navbar **change style on scroll** (scroll-aware)
* Learn Tailwind’s layout, z-index, positioning, transitions, and accessibility tricks

---

## 🧱 1. Base Desktop Navbar Structure

```html
<nav class="bg-white shadow-md fixed w-full top-0 z-50">
  <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    <div class="flex justify-between h-16 items-center">
      <div class="text-xl font-bold text-blue-600">FutureTailwind</div>
      <ul class="hidden md:flex space-x-8 text-gray-700">
        <li><a href="#" class="hover:text-blue-600">Home</a></li>
        <li><a href="#" class="hover:text-blue-600">Features</a></li>
        <li><a href="#" class="hover:text-blue-600">Pricing</a></li>
        <li><a href="#" class="hover:text-blue-600">Contact</a></li>
      </ul>
      <!-- Hamburger -->
      <div class="md:hidden">
        <button id="menu-toggle" class="text-gray-700 focus:outline-none">
          <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
              d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>
      </div>
    </div>
  </div>
  <!-- Mobile Menu -->
  <div id="mobile-menu" class="hidden md:hidden px-4 pb-4">
    <a href="#" class="block py-2 text-gray-700 hover:text-blue-600">Home</a>
    <a href="#" class="block py-2 text-gray-700 hover:text-blue-600">Features</a>
    <a href="#" class="block py-2 text-gray-700 hover:text-blue-600">Pricing</a>
    <a href="#" class="block py-2 text-gray-700 hover:text-blue-600">Contact</a>
  </div>
</nav>
```

### 🧠 JavaScript for Hamburger Toggle

```html
<script>
  const menuToggle = document.getElementById('menu-toggle');
  const mobileMenu = document.getElementById('mobile-menu');

  menuToggle.addEventListener('click', () => {
    mobileMenu.classList.toggle('hidden');
  });
</script>
```

---

## 🧊 2. Sticky Header + Shadow on Scroll

Sticky is easy with Tailwind:

```html
<nav class="sticky top-0 bg-white shadow z-50">...</nav>
```

To **add a shadow only after scrolling**, use this minimal JS:

```html
<script>
  const nav = document.querySelector('nav');
  window.addEventListener('scroll', () => {
    if (window.scrollY > 20) {
      nav.classList.add('shadow-lg');
    } else {
      nav.classList.remove('shadow-lg');
    }
  });
</script>
```

You can also add background blur, color transitions, or animations:

```html
<nav class="fixed top-0 w-full z-50 bg-white/80 backdrop-blur-md transition-all duration-300">...</nav>
```

---

## 🧠 Tailwind Concepts Practiced

| Feature                 | Tailwind Classes Used                                      |
| ----------------------- | ---------------------------------------------------------- |
| Responsive Layout       | `hidden md:flex`, `md:hidden`, `max-w-7xl`, `space-x-8`    |
| Sticky Navbar           | `fixed top-0 z-50`, `sticky`, `shadow-lg`, `backdrop-blur` |
| Transitions & Animation | `transition-all`, `duration-300`, `hover:text-blue-600`    |
| Mobile Menu Toggle      | Custom JS + Tailwind `hidden`, `block`, `md:hidden`        |
| Scroll-Aware Effects    | JavaScript + `classList.add/remove()`                      |

---

## 📱 Pro UI Add-ons (Optional)

* **Mobile slide-in menu** using `translate-x-full` and `transition-transform`
* **Dark mode support** with `dark:bg-gray-800`, `dark:text-white`
* **Dropdown on hover** for desktop (in a later chapter)

---

## 🧪 Mini Project Challenge

Build your own **responsive navigation bar** with the following features:

* ✅ Logo + menu for desktop
* ✅ Hamburger menu toggle for mobile
* ✅ Sticky navbar with style change after scroll
* ✅ Smooth animation when opening mobile menu

💡 *Bonus*: Add a scroll-to-section feature using anchor links and `scroll-smooth`.

---

## 📦 Final Output Preview

![Tailwind Responsive Navbar Example](https://tailwindui.com/img/components/preview-dark-navbar.jpg)

> Real-world navigation is essential — this navbar is **production-grade**, highly customizable, and reusable for multiple projects.

---

## ✅ Summary

In this chapter, you:

* Built a responsive navbar using Tailwind’s layout system
* Handled mobile menu with vanilla JS
* Implemented sticky and scroll-aware behavior
* Practiced real-world responsive UI techniques
