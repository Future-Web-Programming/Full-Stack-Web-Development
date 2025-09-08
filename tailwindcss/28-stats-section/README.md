## 📊 Chapter 28: **Stats Section – Counters, Metrics, Trust Badges & Responsive Layouts**

---

### 🎯 What You’ll Learn in This Chapter:

* Design **stat/counter sections** using Tailwind's `grid`, `flex`, and `text` utilities
* Use **icons**, **headings**, **numbers**, and **descriptive text** in alignment
* Create **responsive, animated number counters**
* Add **trust badges, client logos, or review stats**
* Apply **light/dark themes**, subtle borders, spacing & visual hierarchy

---

## 🧱 1. Simple Horizontal Stats (4 Columns)

```html
<section class="bg-white py-20">
  <div class="max-w-6xl mx-auto px-6 grid grid-cols-2 md:grid-cols-4 gap-10 text-center">
    <div>
      <h3 class="text-4xl font-bold text-indigo-600">10K+</h3>
      <p class="mt-2 text-gray-600">Active Users</p>
    </div>
    <div>
      <h3 class="text-4xl font-bold text-indigo-600">2M</h3>
      <p class="mt-2 text-gray-600">Monthly Views</p>
    </div>
    <div>
      <h3 class="text-4xl font-bold text-indigo-600">5 Stars</h3>
      <p class="mt-2 text-gray-600">User Ratings</p>
    </div>
    <div>
      <h3 class="text-4xl font-bold text-indigo-600">120+</h3>
      <p class="mt-2 text-gray-600">Global Clients</p>
    </div>
  </div>
</section>
```

---

## 🖼️ 2. Stats with Icons (Using [Lucide](https://lucide.dev/) or Heroicons)

```html
<section class="bg-gray-50 py-16">
  <div class="max-w-5xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 px-6 text-center">
    <div>
      <div class="text-indigo-600 mb-2 text-4xl">
        🚀
      </div>
      <h4 class="text-3xl font-bold">500+</h4>
      <p class="text-gray-500">Projects Delivered</p>
    </div>
    <div>
      <div class="text-indigo-600 mb-2 text-4xl">
        👨‍💻
      </div>
      <h4 class="text-3xl font-bold">20+</h4>
      <p class="text-gray-500">Expert Developers</p>
    </div>
    <div>
      <div class="text-indigo-600 mb-2 text-4xl">
        🌍
      </div>
      <h4 class="text-3xl font-bold">15 Countries</h4>
      <p class="text-gray-500">Worldwide Reach</p>
    </div>
    <div>
      <div class="text-indigo-600 mb-2 text-4xl">
        💼
      </div>
      <h4 class="text-3xl font-bold">200+ Clients</h4>
      <p class="text-gray-500">Satisfied Businesses</p>
    </div>
  </div>
</section>
```

---

## 🔢 3. Animated Counter Stats (w/ JavaScript)

```html
<section class="bg-white py-16">
  <div class="max-w-4xl mx-auto text-center grid grid-cols-2 md:grid-cols-4 gap-10">
    <div>
      <h3 class="text-4xl font-bold text-indigo-600 counter" data-target="10000">0</h3>
      <p class="mt-2 text-gray-600">Followers</p>
    </div>
    <div>
      <h3 class="text-4xl font-bold text-indigo-600 counter" data-target="8000">0</h3>
      <p class="mt-2 text-gray-600">Downloads</p>
    </div>
    <div>
      <h3 class="text-4xl font-bold text-indigo-600 counter" data-target="2500">0</h3>
      <p class="mt-2 text-gray-600">Subscribers</p>
    </div>
    <div>
      <h3 class="text-4xl font-bold text-indigo-600 counter" data-target="350">0</h3>
      <p class="mt-2 text-gray-600">Reviews</p>
    </div>
  </div>
</section>

<script>
  document.querySelectorAll('.counter').forEach(counter => {
    const update = () => {
      const target = +counter.getAttribute('data-target');
      const count = +counter.innerText;
      const increment = target / 100;

      if (count < target) {
        counter.innerText = Math.ceil(count + increment);
        setTimeout(update, 20);
      } else {
        counter.innerText = target;
      }
    };
    update();
  });
</script>
```

---

## 🎖️ 4. Trusted By Logos (Client Logos as Stats Trust Signals)

```html
<section class="bg-gray-100 py-16">
  <div class="max-w-5xl mx-auto text-center px-6">
    <h3 class="text-lg text-gray-600 mb-6">Trusted by teams at</h3>
    <div class="flex flex-wrap justify-center items-center gap-10">
      <img src="https://upload.wikimedia.org/wikipedia/commons/a/a6/Logo_NIKE.svg" class="h-10 grayscale hover:grayscale-0 transition" alt="Nike">
      <img src="https://upload.wikimedia.org/wikipedia/commons/4/44/Microsoft_logo.svg" class="h-10 grayscale hover:grayscale-0 transition" alt="Microsoft">
      <img src="https://upload.wikimedia.org/wikipedia/commons/a/ab/Logo_Tesla_Motors.svg" class="h-10 grayscale hover:grayscale-0 transition" alt="Tesla">
      <img src="https://upload.wikimedia.org/wikipedia/commons/f/fa/Apple_logo_black.svg" class="h-10 grayscale hover:grayscale-0 transition" alt="Apple">
    </div>
  </div>
</section>
```

---

## 🧠 Tailwind Utilities in Action

| Purpose               | Tailwind Classes                                  |
| --------------------- | ------------------------------------------------- |
| Grid/Flex Layout      | `grid-cols-4`, `flex-wrap`, `gap-10`              |
| Typography            | `text-4xl`, `font-bold`, `text-gray-600`          |
| Spacing               | `px-6`, `py-16`, `mt-2`, `mb-6`                   |
| Icons/Logos           | `text-4xl`, `grayscale`, `transition`, `hover:*`  |
| Animation (custom JS) | Manual counter animation using `innerText` update |

---

## 🧪 Practice Tasks for Students

* ✅ Build a **Stats Card UI** with `bg-white`, `shadow`, `hover:scale-105`
* ✅ Animate counters on scroll using `IntersectionObserver`
* ✅ Add **light/dark mode toggle** to switch stat color schemes
* ✅ Show stats in a **carousel** using [Swiper.js](https://swiperjs.com/) or Tailwind plugins

---

## 📚 Summary

In this chapter, you’ve learned how to:

* Create beautiful, responsive **stats sections** using Tailwind
* Combine **typography, layout, and iconography** to build trust
* Add **JS-based counters** to show real-time data
* Style **brand logos** with hover effects and grayscale transitions

---

### 🔜 Up Next:

**Chapter 29: Testimonials – Beautiful Cards, Stars, Avatar Layouts & Ratings**
