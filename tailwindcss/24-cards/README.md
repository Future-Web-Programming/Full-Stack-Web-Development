## 💳 Chapter 24: **Tailwind CSS Cards – Product, Profile & Pricing Cards (Interactive & Responsive)**

---

### 🎯 Goal of This Chapter:

By the end of this chapter, students will:

* Design **flexible and reusable card components** using Tailwind CSS
* Create **Product Cards**, **Profile Cards**, and **Pricing Cards**
* Use **hover, focus, and click effects** to make cards interactive
* Learn to handle **card layouts on mobile and desktop**

---

## 🧠 Why This Is Important

Cards are the **building blocks** of almost every modern UI. Whether it's:

* Displaying a product,
* Showcasing a user profile, or
* Listing service plans…

…you’ll use cards **everywhere** in real-world projects.

---

## 📦 Component Types We’ll Build

1. 📦 **Product Card** (with image, price, rating, and add-to-cart button)
2. 👤 **Profile Card** (with avatar, name, bio, and social links)
3. 💸 **Pricing Card** (with plan, features list, CTA button, and hover effect)

---

## 🧱 1. Product Card Example

```html
<div class="max-w-sm bg-white border border-gray-200 rounded-lg shadow hover:shadow-lg transition p-5">
  <img class="rounded-lg w-full h-48 object-cover mb-4" src="https://source.unsplash.com/400x300/?watch" alt="product" />
  <h5 class="text-xl font-semibold tracking-tight text-gray-900">Luxury Watch</h5>
  <p class="text-gray-600 mt-2">$249.00</p>
  <div class="flex items-center mt-3">
    <button class="text-white bg-blue-600 hover:bg-blue-700 focus:ring-2 focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2">
      Add to Cart
    </button>
  </div>
</div>
```

---

## 🧱 2. Profile Card Example

```html
<div class="max-w-sm bg-white rounded-xl shadow-md overflow-hidden text-center p-6">
  <img class="w-24 h-24 mx-auto rounded-full border-4 border-blue-500" src="https://i.pravatar.cc/100?img=3" alt="User" />
  <h3 class="mt-4 text-xl font-bold text-gray-800">Jane Doe</h3>
  <p class="text-gray-500">UI/UX Designer at FutureWeb</p>
  <div class="flex justify-center gap-4 mt-4 text-blue-500">
    <a href="#"><i class="fab fa-twitter"></i></a>
    <a href="#"><i class="fab fa-linkedin"></i></a>
    <a href="#"><i class="fab fa-github"></i></a>
  </div>
</div>
```

> You can replace icons using [Heroicons](https://heroicons.com/) or [Lucide](https://lucide.dev/).

---

## 🧱 3. Pricing Card Example

```html
<div class="max-w-sm bg-white border border-gray-300 rounded-lg shadow-lg p-6 text-center hover:scale-105 transition-transform">
  <h2 class="text-2xl font-bold mb-4">Pro Plan</h2>
  <p class="text-gray-700 text-4xl font-extrabold mb-4">$19<span class="text-base font-medium">/mo</span></p>
  <ul class="text-gray-600 text-left space-y-2 mb-6">
    <li>✔ 10 Projects</li>
    <li>✔ Unlimited Access</li>
    <li>✔ 24/7 Support</li>
  </ul>
  <button class="bg-blue-600 text-white px-6 py-2 rounded-md font-medium hover:bg-blue-700">
    Choose Plan
  </button>
</div>
```

🌀 Add multiple cards in a grid:

```html
<div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
  <!-- Repeat cards here -->
</div>
```

---

## ✨ Best Tailwind Classes for Cards

| Purpose         | Classes Example                                           |
| --------------- | --------------------------------------------------------- |
| Layout          | `max-w-sm`, `p-4`, `grid`, `gap-*`, `flex`, `text-center` |
| Border & Shadow | `rounded-lg`, `border`, `shadow`, `hover:shadow-lg`       |
| Typography      | `text-xl`, `font-bold`, `text-gray-*`                     |
| Effects         | `hover:scale-105`, `transition`, `duration-300`           |
| Responsive      | `grid-cols-1 md:grid-cols-2 lg:grid-cols-3`               |

---

## 🧪 Student Challenge

👉 Create the following 3 types of cards:

* **1 Product card** with image, name, price, and button
* **1 Profile card** with avatar, name, profession, and 3 social icons
* **1 Pricing card** with plan name, price, feature list, and CTA

✅ Try wrapping all cards in a responsive grid.

✅ Use hover, scale, or ring effects creatively.

✅ Optional: Animate card entrance using AOS or `@keyframes`.

---

## ✅ Summary

You learned to:

* Build reusable, interactive card components
* Handle layouts and spacing with Tailwind
* Use transition and scale effects
* Prepare UI components that are used **90% of the time** in modern apps
