# 📘 Chapter 29: Building a Responsive Pricing Section with Toggle (Monthly/Yearly) Using Tailwind CSS

## 🎯 What You Will Learn

In this chapter, we’ll take Tailwind utility mastery to the next level by:

* Building a **fully responsive pricing component** with **three plans**
* Adding an **interactive toggle switch** for **monthly/yearly pricing**
* Structuring UI for **real business use cases** (SaaS, tools, AI services)
* Deep dive into **component design**, **group-hover**, **peer interaction**, and **transition states**
* Strengthening your understanding of **layout flexibility** using Tailwind

By the end of this chapter, students will be able to build **high-end pricing tables** used on modern websites like Stripe, Notion, Framer, or SaaS startups.

---

## 🧠 Concepts Covered

| Concept                                                | Description                               |
| ------------------------------------------------------ | ----------------------------------------- |
| `flex`, `grid`, `gap`, `min-w`                         | Layout systems for pricing boxes          |
| `peer`, `checked`, `transition-all`                    | Interactive behavior with checkbox toggle |
| `dark:` & `hover:` states                              | For visually enriched pricing UI          |
| `bg-gradient-to-r`, `text-transparent`, `bg-clip-text` | For modern gradient headlines             |
| Responsive strategy                                    | Mobile-first pricing table design         |
| Utility-first thinking                                 | Applying only necessary classes smartly   |

---

## 📦 Project: SaaS Pricing Section with Plan Toggle

We’ll create a **SaaS-style pricing section** with:

* **3 pricing plans** (Basic, Pro, Enterprise)
* Monthly ↔️ Yearly **switch toggle**
* Feature comparison using **icons and bullet points**
* Highlighted "Most Popular" plan
* Fully **responsive and dark-mode ready**

---

## 🖥 Live Demo Preview (Outcome)

> 💡 A student who completes this chapter should be able to independently:

* Build pricing tables for real clients
* Add toggle interactivity with Tailwind and basic JS
* Style beautifully and responsively with minimal code
* Understand UX principles in pricing table layout

---

## 📂 Folder Structure

```bash
pricing-toggle/
│
├── index.html
├── style.css (Tailwind CDN or build output)
└── script.js (toggle pricing logic)
```

---

## 🔧 Step-by-Step Guide

### ✅ 1. Set Up HTML Structure

```html
<section class="py-20 bg-gray-50 dark:bg-gray-900">
  <div class="container mx-auto text-center">
    <h2 class="text-4xl font-bold mb-4">Our Pricing Plans</h2>
    <!-- Toggle -->
    <div class="flex items-center justify-center space-x-4 mb-10">
      <span>Monthly</span>
      <label class="relative inline-flex items-center cursor-pointer">
        <input type="checkbox" id="togglePricing" class="sr-only peer">
        <div class="w-11 h-6 bg-gray-200 peer-focus:outline-none rounded-full peer peer-checked:bg-indigo-600 transition-all"></div>
        <span class="absolute left-1 top-1 w-4 h-4 bg-white rounded-full transition-transform peer-checked:translate-x-full"></span>
      </label>
      <span>Yearly</span>
    </div>
    <!-- Pricing Grid -->
    <div id="pricingPlans" class="grid md:grid-cols-3 gap-6">
      <!-- Plan cards will be injected here by JS -->
    </div>
  </div>
</section>
```

---

### ✅ 2. Add Plan Card Templates via JS

Use JavaScript to inject dynamic pricing for Monthly/Yearly toggle.

```js
const plans = [
  {
    name: 'Basic',
    monthly: '$9',
    yearly: '$90',
    features: ['1 User', '5 Projects', 'Basic Support'],
    popular: false,
  },
  {
    name: 'Pro',
    monthly: '$19',
    yearly: '$180',
    features: ['5 Users', '25 Projects', 'Priority Support'],
    popular: true,
  },
  {
    name: 'Enterprise',
    monthly: '$49',
    yearly: '$490',
    features: ['Unlimited Users', 'Unlimited Projects', '24/7 Support'],
    popular: false,
  },
];

function renderPlans(yearly = false) {
  const container = document.getElementById('pricingPlans');
  container.innerHTML = '';
  plans.forEach(plan => {
    const price = yearly ? plan.yearly : plan.monthly;
    const card = `
    <div class="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-md border ${plan.popular ? 'border-indigo-600' : 'border-gray-200'}">
      <h3 class="text-xl font-semibold mb-2">${plan.name}</h3>
      <p class="text-4xl font-bold mb-4">${price}</p>
      <ul class="mb-6 space-y-2 text-left">
        ${plan.features.map(f => `<li>✅ ${f}</li>`).join('')}
      </ul>
      <button class="w-full bg-indigo-600 text-white px-4 py-2 rounded-lg hover:bg-indigo-700 transition">Choose Plan</button>
    </div>
    `;
    container.innerHTML += card;
  });
}

document.getElementById('togglePricing').addEventListener('change', function () {
  renderPlans(this.checked);
});

renderPlans(); // Load monthly by default
```

---

## 🧪 Tips for Students

* Test your design on all devices using Chrome DevTools.
* Try adding `hover:scale-105` or `transition-shadow` for plan cards.
* Use `group-hover`, `peer-focus` if you want to animate popular plan styles.
* For advanced challenge: Add an animated toggle bar instead of a checkbox.

---

## ✅ After This Chapter, You Can:

* Build fully responsive SaaS UIs.
* Implement toggle-based pricing interfaces.
* Understand how Tailwind pairs with JS logic cleanly.
* Pitch this section in your freelance portfolio.

---

## 🎯 Challenge for You

> 🔥 Build a "Startup Comparison Table" that lists features of 3 different startup plans with:

* Left-aligned feature names
* Checkmarks for availability
* Mobile toggle collapse behavior

Absolutely! Here's **Chapter 29** of your **World’s Best Tailwind CSS Course (Free on YouTube | From Pakistan & India | Launched July 25, 2025)**.

---

# 📘 Chapter 29: Building a Responsive Pricing Section with Toggle (Monthly/Yearly) Using Tailwind CSS

## 🎯 What You Will Learn

In this chapter, we’ll take Tailwind utility mastery to the next level by:

* Building a **fully responsive pricing component** with **three plans**
* Adding an **interactive toggle switch** for **monthly/yearly pricing**
* Structuring UI for **real business use cases** (SaaS, tools, AI services)
* Deep dive into **component design**, **group-hover**, **peer interaction**, and **transition states**
* Strengthening your understanding of **layout flexibility** using Tailwind

By the end of this chapter, students will be able to build **high-end pricing tables** used on modern websites like Stripe, Notion, Framer, or SaaS startups.

---

## 🧠 Concepts Covered

| Concept                                                | Description                               |
| ------------------------------------------------------ | ----------------------------------------- |
| `flex`, `grid`, `gap`, `min-w`                         | Layout systems for pricing boxes          |
| `peer`, `checked`, `transition-all`                    | Interactive behavior with checkbox toggle |
| `dark:` & `hover:` states                              | For visually enriched pricing UI          |
| `bg-gradient-to-r`, `text-transparent`, `bg-clip-text` | For modern gradient headlines             |
| Responsive strategy                                    | Mobile-first pricing table design         |
| Utility-first thinking                                 | Applying only necessary classes smartly   |

---

## 📦 Project: SaaS Pricing Section with Plan Toggle

We’ll create a **SaaS-style pricing section** with:

* **3 pricing plans** (Basic, Pro, Enterprise)
* Monthly ↔️ Yearly **switch toggle**
* Feature comparison using **icons and bullet points**
* Highlighted "Most Popular" plan
* Fully **responsive and dark-mode ready**

---

## 🖥 Live Demo Preview (Outcome)

> 💡 A student who completes this chapter should be able to independently:

* Build pricing tables for real clients
* Add toggle interactivity with Tailwind and basic JS
* Style beautifully and responsively with minimal code
* Understand UX principles in pricing table layout

---

## 📂 Folder Structure

```bash
pricing-toggle/
│
├── index.html
├── style.css (Tailwind CDN or build output)
└── script.js (toggle pricing logic)
```

---

## 🔧 Step-by-Step Guide

### ✅ 1. Set Up HTML Structure

```html
<section class="py-20 bg-gray-50 dark:bg-gray-900">
  <div class="container mx-auto text-center">
    <h2 class="text-4xl font-bold mb-4">Our Pricing Plans</h2>
    <!-- Toggle -->
    <div class="flex items-center justify-center space-x-4 mb-10">
      <span>Monthly</span>
      <label class="relative inline-flex items-center cursor-pointer">
        <input type="checkbox" id="togglePricing" class="sr-only peer">
        <div class="w-11 h-6 bg-gray-200 peer-focus:outline-none rounded-full peer peer-checked:bg-indigo-600 transition-all"></div>
        <span class="absolute left-1 top-1 w-4 h-4 bg-white rounded-full transition-transform peer-checked:translate-x-full"></span>
      </label>
      <span>Yearly</span>
    </div>
    <!-- Pricing Grid -->
    <div id="pricingPlans" class="grid md:grid-cols-3 gap-6">
      <!-- Plan cards will be injected here by JS -->
    </div>
  </div>
</section>
```

---

### ✅ 2. Add Plan Card Templates via JS

Use JavaScript to inject dynamic pricing for Monthly/Yearly toggle.

```js
const plans = [
  {
    name: 'Basic',
    monthly: '$9',
    yearly: '$90',
    features: ['1 User', '5 Projects', 'Basic Support'],
    popular: false,
  },
  {
    name: 'Pro',
    monthly: '$19',
    yearly: '$180',
    features: ['5 Users', '25 Projects', 'Priority Support'],
    popular: true,
  },
  {
    name: 'Enterprise',
    monthly: '$49',
    yearly: '$490',
    features: ['Unlimited Users', 'Unlimited Projects', '24/7 Support'],
    popular: false,
  },
];

function renderPlans(yearly = false) {
  const container = document.getElementById('pricingPlans');
  container.innerHTML = '';
  plans.forEach(plan => {
    const price = yearly ? plan.yearly : plan.monthly;
    const card = `
    <div class="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-md border ${plan.popular ? 'border-indigo-600' : 'border-gray-200'}">
      <h3 class="text-xl font-semibold mb-2">${plan.name}</h3>
      <p class="text-4xl font-bold mb-4">${price}</p>
      <ul class="mb-6 space-y-2 text-left">
        ${plan.features.map(f => `<li>✅ ${f}</li>`).join('')}
      </ul>
      <button class="w-full bg-indigo-600 text-white px-4 py-2 rounded-lg hover:bg-indigo-700 transition">Choose Plan</button>
    </div>
    `;
    container.innerHTML += card;
  });
}

document.getElementById('togglePricing').addEventListener('change', function () {
  renderPlans(this.checked);
});

renderPlans(); // Load monthly by default
```

---

## 🧪 Tips for Students

* Test your design on all devices using Chrome DevTools.
* Try adding `hover:scale-105` or `transition-shadow` for plan cards.
* Use `group-hover`, `peer-focus` if you want to animate popular plan styles.
* For advanced challenge: Add an animated toggle bar instead of a checkbox.

---

## ✅ After This Chapter, You Can:

* Build fully responsive SaaS UIs.
* Implement toggle-based pricing interfaces.
* Understand how Tailwind pairs with JS logic cleanly.
* Pitch this section in your freelance portfolio.

---

## 🎯 Challenge for You

> 🔥 Build a "Startup Comparison Table" that lists features of 3 different startup plans with:

* Left-aligned feature names
* Checkmarks for availability
* Mobile toggle collapse behavior
