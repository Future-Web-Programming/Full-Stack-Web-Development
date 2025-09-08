## 🧾 Chapter 21: Building a Responsive Pricing Table with Tailwind CSS

---

### 🎯 Goal of This Chapter:

By the end of this chapter, students will:

* Understand the design principles behind pricing tables
* Build a beautiful, **responsive pricing table layout**
* Use Tailwind utility classes for spacing, grids, cards, typography, and buttons
* Learn how to visually **highlight a featured plan**
* Make it responsive for mobile-first users

---

## 🧱 What is a Pricing Table?

A **pricing table** displays the cost and features of different service or product plans in a comparative format. It usually includes:

* Plan name (e.g. Basic, Pro, Premium)
* Price
* Features list
* Call-to-action (e.g. Buy Now)

---

## 💡 Layout Strategy

We'll build a **3-column responsive pricing grid**, like this:

```plaintext
+----------------+----------------+----------------+
|     Basic      |     Pro 🔥     |   Enterprise   |
+----------------+----------------+----------------+
```

On mobile, it should stack vertically.

---

## 🔧 Step-by-Step HTML + Tailwind Markup

```html
<section class="py-16 bg-gray-100">
  <div class="max-w-6xl mx-auto px-6">
    <h2 class="text-3xl font-bold text-center mb-12">Our Pricing Plans</h2>

    <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
      
      <!-- Basic Plan -->
      <div class="bg-white rounded-lg shadow p-8">
        <h3 class="text-xl font-semibold mb-4">Basic</h3>
        <p class="text-4xl font-bold mb-4">$9<span class="text-sm">/mo</span></p>
        <ul class="space-y-2 mb-6 text-gray-600">
          <li>✔ 1 Project</li>
          <li>✔ 5GB Storage</li>
          <li>✔ Email Support</li>
        </ul>
        <button class="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700">
          Choose Plan
        </button>
      </div>

      <!-- Pro Plan (highlighted) -->
      <div class="bg-blue-600 text-white rounded-lg shadow-lg p-8 scale-105 relative z-10">
        <div class="absolute top-0 left-0 right-0 py-1 bg-yellow-400 text-black text-center font-bold rounded-t-lg">
          Most Popular
        </div>
        <h3 class="text-xl font-semibold mt-6 mb-4">Pro</h3>
        <p class="text-4xl font-bold mb-4">$29<span class="text-sm">/mo</span></p>
        <ul class="space-y-2 mb-6">
          <li>✔ 10 Projects</li>
          <li>✔ 50GB Storage</li>
          <li>✔ Priority Support</li>
        </ul>
        <button class="w-full bg-white text-blue-600 py-2 rounded hover:bg-gray-100">
          Choose Plan
        </button>
      </div>

      <!-- Enterprise Plan -->
      <div class="bg-white rounded-lg shadow p-8">
        <h3 class="text-xl font-semibold mb-4">Enterprise</h3>
        <p class="text-4xl font-bold mb-4">$99<span class="text-sm">/mo</span></p>
        <ul class="space-y-2 mb-6 text-gray-600">
          <li>✔ Unlimited Projects</li>
          <li>✔ 1TB Storage</li>
          <li>✔ 24/7 Support</li>
        </ul>
        <button class="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700">
          Choose Plan
        </button>
      </div>

    </div>
  </div>
</section>
```

---

## 🧠 Key Tailwind Concepts Used:

| Concept            | Utility Examples                              |
| ------------------ | --------------------------------------------- |
| **Grid System**    | `grid-cols-1 md:grid-cols-3 gap-8`            |
| **Card Design**    | `bg-white`, `shadow`, `rounded-lg`, `p-8`     |
| **Text Utilities** | `text-xl`, `font-semibold`, `text-gray-600`   |
| **Buttons**        | `bg-blue-600`, `hover:bg-blue-700`, `rounded` |
| **Highlight Plan** | `scale-105`, `shadow-lg`, `text-white`        |
| **Badge**          | `absolute top-0 bg-yellow-400`                |

---

## 📱 Mobile First + Responsive UX

* Starts with 1 column on mobile (`grid-cols-1`)
* Converts to 3-column layout on medium devices (`md:grid-cols-3`)
* Buttons and text scale appropriately

---

## 🌟 Bonus Tip:

To make pricing dynamic or interactive later, we can:

* Use Tailwind with Alpine.js
* Fetch pricing from a JSON file or API

---

## 🧪 Student Challenge:

Recreate this layout and:

* Add a **monthly/yearly toggle** (optional)
* Add icons for each feature using [Heroicons](https://heroicons.com/)
* Animate the "Most Popular" card on hover (e.g. `hover:scale-105`)

---

## ✅ Summary:

You now know how to:

* Build stunning pricing sections using Tailwind CSS
* Use grids, spacing, typography, colors effectively
* Design mobile-first layouts with visual emphasis
