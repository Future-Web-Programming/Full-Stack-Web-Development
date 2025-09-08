# 🌟 Chapter 32: Blog UI Template with Bootstrap

> 🔥 **Goal:** Build a modern, responsive blog interface using Bootstrap components like cards, sidebar navigation, pagination, and single-post layout.

---

## ✅ What You'll Learn

* How to create a **modern blog layout** using Bootstrap
* Build responsive **sidebar navigation**
* Use **cards** for blog posts
* Create a **single post layout**
* Implement **pagination** UI
* Tips for managing blog-style content with Bootstrap

---

## 🧱 Folder Structure (Optional)

```
blog-ui-template/
│
├── index.html
├── post.html
├── css/
│   └── style.css (optional)
└── img/
    └── (images for blog posts)
```

---

## 🧑‍🎨 Blog UI Template Features

| Feature             | Description                      |
| ------------------- | -------------------------------- |
| 🧱 Cards            | For listing blog posts           |
| 📚 Sidebar          | Category/filter/navigation links |
| 📄 Single Post View | Clean reading layout             |
| 🔢 Pagination       | To navigate through blog pages   |
| 📱 Responsive       | Mobile-friendly by default       |

---

## 🖥 Step-by-Step Implementation

### 🔹 1. Basic HTML Setup + Bootstrap

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
  <title>My Blog UI</title>
  <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css" rel="stylesheet">
</head>
<body>
```

---

### 🔹 2. Navbar (Top Navigation)

```html
<nav class="navbar navbar-expand-lg navbar-dark bg-dark">
  <div class="container">
    <a class="navbar-brand" href="#">📝 My Blog</a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navContent">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navContent">
      <ul class="navbar-nav ms-auto">
        <li class="nav-item"><a class="nav-link" href="#">Home</a></li>
        <li class="nav-item"><a class="nav-link" href="#">Categories</a></li>
        <li class="nav-item"><a class="nav-link" href="#">About</a></li>
      </ul>
    </div>
  </div>
</nav>
```

---

### 🔹 3. Main Blog Layout: Grid with Sidebar + Post List

```html
<div class="container my-5">
  <div class="row">
    
    <!-- Sidebar -->
    <aside class="col-lg-3 mb-4">
      <div class="bg-light p-3 rounded shadow-sm">
        <h5 class="mb-3">Categories</h5>
        <ul class="list-unstyled">
          <li><a href="#" class="text-decoration-none">Technology</a></li>
          <li><a href="#" class="text-decoration-none">Business</a></li>
          <li><a href="#" class="text-decoration-none">Lifestyle</a></li>
          <li><a href="#" class="text-decoration-none">Tutorials</a></li>
        </ul>
      </div>
    </aside>

    <!-- Blog Posts -->
    <section class="col-lg-9">
      <div class="row g-4">
        <!-- Post 1 -->
        <div class="col-md-6">
          <div class="card h-100 shadow-sm">
            <img src="img/post1.jpg" class="card-img-top" alt="Post Image">
            <div class="card-body">
              <h5 class="card-title">Getting Started with Bootstrap</h5>
              <p class="card-text">Bootstrap makes web design easier. Learn how to build modern layouts quickly.</p>
              <a href="post.html" class="btn btn-primary btn-sm">Read More</a>
            </div>
          </div>
        </div>
        
        <!-- Repeat for more posts -->
        
      </div>

      <!-- Pagination -->
      <nav class="mt-5">
        <ul class="pagination justify-content-center">
          <li class="page-item disabled"><a class="page-link">Previous</a></li>
          <li class="page-item active"><a class="page-link">1</a></li>
          <li class="page-item"><a class="page-link">2</a></li>
          <li class="page-item"><a class="page-link">Next</a></li>
        </ul>
      </nav>
    </section>
  </div>
</div>
```

---

### 🔹 4. Single Post Layout (`post.html`)

```html
<div class="container my-5">
  <div class="row justify-content-center">
    <div class="col-lg-8">
      <article>
        <h1 class="mb-3">Getting Started with Bootstrap</h1>
        <p class="text-muted">Published on July 29, 2025</p>
        <img src="img/post1.jpg" class="img-fluid rounded mb-4" alt="Post">
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit...</p>
        <!-- More content -->
      </article>
    </div>
  </div>
</div>
```

---

## 🎨 Bonus UI Enhancements

| Feature           | How                                                         |
| ----------------- | ----------------------------------------------------------- |
| 🔎 Search         | Add a Bootstrap input field in the sidebar                  |
| 🌓 Dark Mode      | Toggle class with JS (if covered in previous chapters)      |
| 📱 Mobile Sidebar | Collapse sidebar on small devices using `d-none d-lg-block` |

---

## ✅ Summary Checklist

* [x] Responsive navbar
* [x] Sidebar with categories
* [x] Card-based blog post previews
* [x] Pagination controls
* [x] Single post layout page
* [x] Clean, mobile-friendly layout

---

## 📁 Live Project Ideas

Let students deploy this on:

* [GitHub Pages](https://pages.github.com/)
* [Netlify](https://www.netlify.com/)
* Or integrate with a CMS (WordPress headless or PHP backend in future chapters)

---

## 📌 Assignment for Students

* Customize the sidebar with their own categories
* Add 6 blog posts with unique cards
* Create at least 2 separate post pages
* Try adding hover effects and tags using Bootstrap utility classes

