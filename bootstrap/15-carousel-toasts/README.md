
# 📚 Chapter 15: Bootstrap Carousel & Toasts

**Level:** Intermediate
**Module:** Interactive & Media Components
**Goal:** Learn how to implement dynamic **image sliders** (carousel) and real-time **toast notifications** using Bootstrap.

---

## ✅ What You Will Learn

| Component    | Description                                                        |
| ------------ | ------------------------------------------------------------------ |
| **Carousel** | Create sliders for images, testimonials, or featured content       |
| **Toasts**   | Build subtle real-time notifications (like success/error messages) |

---

## 🔹 1. Bootstrap Carousel

Bootstrap Carousel is used to slide through images or content. It’s ideal for:

* Hero sections
* Product showcases
* Client testimonials

---

### ✅ Basic Carousel Structure

```html
<div id="heroCarousel" class="carousel slide" data-bs-ride="carousel">

  <!-- Indicators -->
  <div class="carousel-indicators">
    <button type="button" data-bs-target="#heroCarousel" data-bs-slide-to="0" class="active"></button>
    <button type="button" data-bs-target="#heroCarousel" data-bs-slide-to="1"></button>
    <button type="button" data-bs-target="#heroCarousel" data-bs-slide-to="2"></button>
  </div>

  <!-- Slides -->
  <div class="carousel-inner">
    <div class="carousel-item active">
      <img src="image1.jpg" class="d-block w-100" alt="Slide 1">
      <div class="carousel-caption d-none d-md-block">
        <h5>Welcome to Our Website</h5>
        <p>Explore our features and services.</p>
      </div>
    </div>

    <div class="carousel-item">
      <img src="image2.jpg" class="d-block w-100" alt="Slide 2">
      <div class="carousel-caption d-none d-md-block">
        <h5>Our Clients</h5>
        <p>See what people say about us.</p>
      </div>
    </div>

    <div class="carousel-item">
      <img src="image3.jpg" class="d-block w-100" alt="Slide 3">
      <div class="carousel-caption d-none d-md-block">
        <h5>Join Us</h5>
        <p>Be part of our growing community.</p>
      </div>
    </div>
  </div>

  <!-- Controls -->
  <button class="carousel-control-prev" type="button" data-bs-target="#heroCarousel" data-bs-slide="prev">
    <span class="carousel-control-prev-icon"></span>
  </button>
  <button class="carousel-control-next" type="button" data-bs-target="#heroCarousel" data-bs-slide="next">
    <span class="carousel-control-next-icon"></span>
  </button>

</div>
```

---

### ⚙️ Carousel Settings

| Attribute                 | Description               |
| ------------------------- | ------------------------- |
| `data-bs-ride="carousel"` | Auto-slide enabled        |
| `data-bs-interval="3000"` | Time in ms between slides |
| `.active`                 | Set the first item        |

---

### 💡 Customization Ideas

* Add fade effect: `carousel-fade`
* Pause on hover: use JavaScript config
* Disable auto-slide: remove `data-bs-ride`

---

## 🔹 2. Bootstrap Toasts

Toasts are lightweight notifications, like:

* “Item added to cart”
* “Form submitted successfully”
* “Login failed”

---

### ✅ Basic Toast Example

```html
<!-- Button to trigger -->
<button class="btn btn-primary" id="showToastBtn">Show Toast</button>

<!-- Toast -->
<div class="toast-container position-fixed bottom-0 end-0 p-3">
  <div id="liveToast" class="toast" role="alert" aria-live="assertive" aria-atomic="true">
    <div class="toast-header">
      <strong class="me-auto text-success">Success</strong>
      <small>Just now</small>
      <button type="button" class="btn-close" data-bs-dismiss="toast"></button>
    </div>
    <div class="toast-body">
      Your message has been sent!
    </div>
  </div>
</div>
```

---

### ✅ Activate Toast with JavaScript

```js
document.getElementById('showToastBtn').addEventListener('click', () => {
  const toast = new bootstrap.Toast(document.getElementById('liveToast'))
  toast.show()
})
```

---

### 🧠 Toast Options

| Option                 | Description               |
| ---------------------- | ------------------------- |
| `autohide: true/false` | Hide automatically        |
| `delay: 3000`          | Time before it disappears |
| `.show()`              | Manually trigger via JS   |

---

## 💡 Real-World Use Cases

| Component    | Use Case                                  |
| ------------ | ----------------------------------------- |
| **Carousel** | Homepage slider, gallery, services        |
| **Toasts**   | Success/error notifications, user actions |

---

## ✅ Challenge Task

🎯 Build a **"Featured Products Slider"** using the carousel:

* Show 3 featured products
* Each with image, title, and description
* Add captions & navigation controls

Then, add a **"Buy Now"** button with a **toast** message:
🛒 “Product added to cart!”

---

## 🧪 Playground

🔗 [Try it Live on CodePen](https://codepen.io/)
(*Add working demo in your YouTube/video description*)

---

## ✅ Summary

| Component    | Key Purpose                           |
| ------------ | ------------------------------------- |
| **Carousel** | Slideshow for images or content       |
| **Toasts**   | Popup messages for real-time feedback |

---

## 🔜 Up Next: Chapter 16 – Pagination, Spinners, and Progress Bars

Let’s learn how to use loading indicators and paginate long lists.
