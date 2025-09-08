Awesome! We're now building another performance-focused component in pure JavaScript:

---

# 📘 **Chapter 126: Final Project #6 – Lazy Loading Images with JavaScript**

Lazy loading is a powerful performance technique. It **delays loading images** until they're needed — when they appear in the viewport — improving page load time and user experience.

We'll build a clean gallery where images load only as you scroll down.

---

## 🎯 **What You'll Learn**

* What is lazy loading?
* Using the **Intersection Observer API**
* Replacing placeholders with real images
* Best practices for image optimization
* Creating reusable lazy-loading components

---

## 🧱 Project Structure

```
lazy-loading-app/
├── index.html
├── style.css
└── script.js
```

---

## 📷 **Example Use Case**

Imagine a photo gallery with 100+ images. Instead of loading them all at once (which hurts performance), we load only what’s visible on screen.

---

## 🧩 Key Concept: Intersection Observer

We’ll detect when an image enters the **viewport** and swap the placeholder with the real image.

---

## 📄 **index.html**

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
  <title>Lazy Loading Images</title>
  <link rel="stylesheet" href="style.css" />
</head>
<body>

  <h1 class="title">Lazy Loading Image Gallery</h1>
  <div class="gallery">
    <!-- Repeat image blocks -->
    <img data-src="https://picsum.photos/id/1011/600/400" class="lazy" alt="Lazy Image" src="placeholder.jpg" />
    <img data-src="https://picsum.photos/id/1025/600/400" class="lazy" alt="Lazy Image" src="placeholder.jpg" />
    <img data-src="https://picsum.photos/id/1020/600/400" class="lazy" alt="Lazy Image" src="placeholder.jpg" />
    <img data-src="https://picsum.photos/id/1041/600/400" class="lazy" alt="Lazy Image" src="placeholder.jpg" />
    <!-- Add more images -->
  </div>

  <script src="script.js"></script>
</body>
</html>
```

> ℹ️ Use any `placeholder.jpg` image locally or from the internet as the fallback before real images load.

---

## 🎨 **style.css**

```css
body {
  font-family: 'Segoe UI', sans-serif;
  margin: 0;
  padding: 2rem;
  background: #f5f5f5;
  color: #333;
}

.title {
  text-align: center;
  margin-bottom: 2rem;
}

.gallery {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  gap: 1.5rem;
}

.gallery img {
  width: 100%;
  height: auto;
  display: block;
  border-radius: 10px;
  object-fit: cover;
  filter: blur(10px);
  transition: filter 0.4s ease-in-out;
}
```

---

## 🧠 **script.js**

```javascript
const lazyImages = document.querySelectorAll('img.lazy');

const imageObserver = new IntersectionObserver((entries, observer) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      const img = entry.target;
      const realSrc = img.getAttribute('data-src');

      img.src = realSrc;

      img.onload = () => {
        img.style.filter = 'blur(0)';
      };

      img.classList.remove('lazy');
      observer.unobserve(img);
    }
  });
}, {
  rootMargin: '0px 0px 50px 0px',
  threshold: 0.1
});

lazyImages.forEach(img => {
  imageObserver.observe(img);
});
```

---

## ✅ What’s Happening Here?

1. `data-src` holds the actual image URL.
2. `src="placeholder.jpg"` loads a blurred or empty placeholder.
3. IntersectionObserver checks when the image enters the viewport.
4. Once visible, we load the real image and blur is removed.

---

## ⚡ Why This Matters

* Speeds up initial load time
* Saves bandwidth
* Especially useful in long scroll pages (blogs, shops, media apps)

---

## 🧪 Live Playground

Try it in:

* [CodePen](https://codepen.io/)
* [JSFiddle](https://jsfiddle.net/)
* [StackBlitz](https://stackblitz.com/)

---

## 🧪 Bonus Ideas

* Add a **loading spinner** per image
* Use `.webp` format for faster image loading
* Animate fade-in once image loads
* Lazy-load YouTube videos or iframes

---

## 🚀 Coming Next

**Chapter 127: Final Project #7 – Sticky Navbar with Scroll-Aware Behavior in Pure JS**

This next UI feature ensures the header stays fixed at the top as users scroll — ideal for blogs, dashboards, and content-heavy sites.

Would you like to move forward with **Chapter 127: Sticky Navbar**?
