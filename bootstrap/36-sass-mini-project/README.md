# 📘 Chapter 29: Final Mini Project – SaaS Landing Page with Bootstrap

### 🚀 Build a Fully Responsive, Animated SaaS Website Using Bootstrap 5 + AOS + Custom SCSS

---

## 🎯 Objective

Design and build a **professional SaaS landing page** using Bootstrap’s grid, components, utility classes, and animation tools. You'll apply everything you've learned so far — layout, spacing, typography, custom theming, and responsiveness.

---

## ✅ What You’ll Learn by Building This

| Skill                                   | Covered |
| --------------------------------------- | ------- |
| Responsive Layout Design                | ✅ Yes   |
| Bootstrap Grid System                   | ✅ Yes   |
| Components: Navbar, Cards, Modals, etc. | ✅ Yes   |
| Utility Classes for Spacing & Alignment | ✅ Yes   |
| Custom Colors/Themes                    | ✅ Yes   |
| Animations using AOS                    | ✅ Yes   |
| Call-to-Action Design (CTA)             | ✅ Yes   |

---

## 💼 Project Overview: SaaS Landing Page

This mini project mimics modern SaaS startups like Notion, Linear, Slack, etc.

### 📦 Sections We'll Build:

1. **Sticky Navbar**
2. **Hero Section** (headline, CTA)
3. **Feature Cards**
4. **Pricing Section**
5. **Testimonials**
6. **FAQ (Accordion)**
7. **Footer**
8. **Newsletter Signup Modal**
9. **Scroll-based Animations**

---

## 🧱 Starter Project Structure

```bash
saas-landing/
├── index.html
├── css/
│   └── style.css
├── js/
│   └── main.js
├── scss/
│   └── custom.scss
├── assets/
│   └── images/
├── libs/
│   └── aos/
└── README.md
```

---

## 🔌 CDN & Assets

Include in your `<head>`:

```html
<!-- Bootstrap -->
<link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css" rel="stylesheet">
<!-- AOS Animation -->
<link href="https://cdn.jsdelivr.net/npm/aos@2.3.4/dist/aos.css" rel="stylesheet">
<!-- Custom CSS -->
<link rel="stylesheet" href="css/style.css">
```

Include just before `</body>`:

```html
<!-- Bootstrap Bundle -->
<script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/js/bootstrap.bundle.min.js"></script>
<!-- AOS -->
<script src="https://cdn.jsdelivr.net/npm/aos@2.3.4/dist/aos.js"></script>
<!-- Main JS -->
<script src="js/main.js"></script>
```

---

## 🧱 Section 1: Sticky Navbar

```html
<nav class="navbar navbar-expand-lg bg-white shadow-sm fixed-top">
  <div class="container">
    <a class="navbar-brand fw-bold" href="#">SaaSy</a>
    <button class="navbar-toggler" data-bs-toggle="collapse" data-bs-target="#navMenu">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navMenu">
      <ul class="navbar-nav ms-auto">
        <li class="nav-item"><a href="#features" class="nav-link">Features</a></li>
        <li class="nav-item"><a href="#pricing" class="nav-link">Pricing</a></li>
        <li class="nav-item"><a href="#faq" class="nav-link">FAQ</a></li>
        <li class="nav-item"><button class="btn btn-primary ms-2" data-bs-toggle="modal" data-bs-target="#signupModal">Get Started</button></li>
      </ul>
    </div>
  </div>
</nav>
```

---

## 🌟 Section 2: Hero Section

```html
<section class="hero text-center py-5 bg-light" style="margin-top: 80px;">
  <div class="container" data-aos="fade-up">
    <h1 class="display-4 fw-bold">Simplify Your Workflow</h1>
    <p class="lead mt-3">The all-in-one platform for startups and teams.</p>
    <a href="#features" class="btn btn-primary btn-lg mt-4">Explore Features</a>
  </div>
</section>
```

---

## 💡 Section 3: Feature Cards

```html
<section id="features" class="py-5">
  <div class="container">
    <h2 class="text-center mb-4">Our Features</h2>
    <div class="row g-4">
      <div class="col-md-4" data-aos="fade-up">
        <div class="card h-100 shadow-sm">
          <div class="card-body">
            <h5 class="card-title">Real-time Sync</h5>
            <p class="card-text">Collaborate instantly across devices.</p>
          </div>
        </div>
      </div>
      <div class="col-md-4" data-aos="fade-up" data-aos-delay="100">
        <div class="card h-100 shadow-sm">
          <div class="card-body">
            <h5 class="card-title">Security First</h5>
            <p class="card-text">End-to-end encryption built in.</p>
          </div>
        </div>
      </div>
      <div class="col-md-4" data-aos="fade-up" data-aos-delay="200">
        <div class="card h-100 shadow-sm">
          <div class="card-body">
            <h5 class="card-title">AI-Powered Insights</h5>
            <p class="card-text">Smart suggestions that save time.</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>
```

---

## 💰 Section 4: Pricing Table

```html
<section id="pricing" class="py-5 bg-light">
  <div class="container">
    <h2 class="text-center mb-4">Simple Pricing</h2>
    <div class="row g-4">
      <div class="col-md-6 col-lg-4" data-aos="zoom-in">
        <div class="card h-100 shadow-sm text-center">
          <div class="card-body">
            <h5>Starter</h5>
            <h2>$9/mo</h2>
            <p>Great for small teams</p>
            <ul class="list-unstyled">
              <li>✔ 5 Projects</li>
              <li>✔ Basic Analytics</li>
            </ul>
            <a href="#" class="btn btn-outline-primary mt-3">Choose Plan</a>
          </div>
        </div>
      </div>
      <div class="col-md-6 col-lg-4" data-aos="zoom-in" data-aos-delay="100">
        <div class="card h-100 shadow-sm text-center border-primary">
          <div class="card-body">
            <h5 class="text-primary">Pro</h5>
            <h2 class="text-primary">$29/mo</h2>
            <p>Perfect for growing teams</p>
            <ul class="list-unstyled">
              <li>✔ Unlimited Projects</li>
              <li>✔ Advanced Analytics</li>
              <li>✔ Priority Support</li>
            </ul>
            <a href="#" class="btn btn-primary mt-3">Choose Plan</a>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>
```

---

## 🙋‍♂️ Section 5: FAQ with Accordion

```html
<section id="faq" class="py-5">
  <div class="container">
    <h2 class="text-center mb-4">Frequently Asked Questions</h2>
    <div class="accordion" id="faqAccordion">
      <div class="accordion-item" data-aos="fade-up">
        <h2 class="accordion-header">
          <button class="accordion-button" data-bs-toggle="collapse" data-bs-target="#faq1">
            What is SaaSy?
          </button>
        </h2>
        <div id="faq1" class="accordion-collapse collapse show" data-bs-parent="#faqAccordion">
          <div class="accordion-body">SaaSy is a productivity platform built for startups.</div>
        </div>
      </div>
      <div class="accordion-item" data-aos="fade-up" data-aos-delay="100">
        <h2 class="accordion-header">
          <button class="accordion-button collapsed" data-bs-toggle="collapse" data-bs-target="#faq2">
            Is there a free trial?
          </button>
        </h2>
        <div id="faq2" class="accordion-collapse collapse" data-bs-parent="#faqAccordion">
          <div class="accordion-body">Yes! You get 14 days to try everything free.</div>
        </div>
      </div>
    </div>
  </div>
</section>
```

---

## 🔔 Modal for Signup

```html
<div class="modal fade" id="signupModal" tabindex="-1">
  <div class="modal-dialog modal-dialog-centered">
    <div class="modal-content p-4">
      <h5>Join SaaSy</h5>
      <input type="email" placeholder="Your email" class="form-control my-2" />
      <button class="btn btn-primary w-100">Get Started</button>
    </div>
  </div>
</div>
```

---

## ⚙️ `main.js`

```js
AOS.init({
  duration: 800,
  once: true
});
```

---

## 📱 Responsive Design Tips

* Use `container`, `row`, `col-md`, `col-lg`
* Add `py-5`, `text-center`, `shadow`, `g-4` for spacing
* Use Bootstrap utility classes for margin/padding/grid

---

## ✅ Final Output (Preview)

![SaaS Bootstrap Preview](https://user-images.githubusercontent.com/24855502/187066651-49601997-f4dc-465c-94a2-c3e2e7de4d68.png)

---

## 🎁 Bonus Challenge

* Replace Bootstrap’s default theme with your **own color palette**
* Add **scrollspy navigation** (active links)
* Add a **dark mode toggle**
