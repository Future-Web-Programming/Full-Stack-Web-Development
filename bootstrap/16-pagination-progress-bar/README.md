# 📚 Chapter 16: Pagination, Spinners, and Progress Bars

**Level:** Intermediate
**Module:** Visual Feedback & Navigation
**Goal:** Build user-friendly navigation for long lists and provide elegant visual feedback with spinners and progress bars.

---

## ✅ What You Will Learn

| Feature           | Purpose                                          |
| ----------------- | ------------------------------------------------ |
| **Pagination**    | Break long lists/tables into pages               |
| **Spinners**      | Show loading or background processing status     |
| **Progress Bars** | Indicate task progress (e.g. uploads, downloads) |

---

## 🔹 1. Bootstrap Pagination

Pagination is used to divide large content (like blog posts, product lists) into manageable pages.

---

### ✅ Basic Pagination

```html
<nav aria-label="Page navigation example">
  <ul class="pagination justify-content-center">
    <li class="page-item disabled">
      <a class="page-link">Previous</a>
    </li>
    <li class="page-item active">
      <a class="page-link" href="#">1</a>
    </li>
    <li class="page-item">
      <a class="page-link" href="#">2</a>
    </li>
    <li class="page-item">
      <a class="page-link" href="#">3</a>
    </li>
    <li class="page-item">
      <a class="page-link" href="#">Next</a>
    </li>
  </ul>
</nav>
```

---

### 💡 Custom Pagination Styles

| Style             | Example Class                      |
| ----------------- | ---------------------------------- |
| **Centered**      | `.justify-content-center`          |
| **Small/Large**   | `.pagination-sm`, `.pagination-lg` |
| **Disabled Page** | `.disabled` on `li`                |
| **Active Page**   | `.active` on `li`                  |

---

## 🔹 2. Bootstrap Spinners

Spinners show loading states (e.g., when fetching data or submitting forms).

---

### ✅ Border Spinner

```html
<div class="spinner-border text-primary" role="status">
  <span class="visually-hidden">Loading...</span>
</div>
```

---

### ✅ Growing Spinner

```html
<div class="spinner-grow text-success" role="status">
  <span class="visually-hidden">Loading...</span>
</div>
```

---

### ✅ Spinner in Buttons

```html
<button class="btn btn-primary" type="button" disabled>
  <span class="spinner-border spinner-border-sm" role="status" aria-hidden="true"></span>
  Loading...
</button>
```

> 💡 Ideal for login buttons or AJAX calls.

---

## 🔹 3. Bootstrap Progress Bars

Use to show file upload status, download progress, or onboarding steps.

---

### ✅ Basic Progress Bar

```html
<div class="progress">
  <div class="progress-bar" role="progressbar" style="width: 60%;" aria-valuenow="60"
    aria-valuemin="0" aria-valuemax="100">60%</div>
</div>
```

---

### ✅ Colored Progress Bars

```html
<div class="progress my-3">
  <div class="progress-bar bg-success" style="width: 75%;">Uploading</div>
</div>

<div class="progress">
  <div class="progress-bar bg-danger" style="width: 45%;">Failed</div>
</div>
```

---

### ✅ Animated & Striped

```html
<div class="progress my-3">
  <div class="progress-bar progress-bar-striped progress-bar-animated bg-info" style="width: 90%;">
    Processing...
  </div>
</div>
```

---

## 🧠 Real-World Use Cases

| Component         | Use Case Example                       |
| ----------------- | -------------------------------------- |
| **Pagination**    | Blog posts, product lists, user tables |
| **Spinners**      | AJAX calls, API fetching, form submit  |
| **Progress Bars** | File uploads, checkout process steps   |

---

## ✅ Bonus: Show/Hide Spinner with JavaScript

```html
<!-- Spinner -->
<div id="loader" class="spinner-border text-primary d-none" role="status"></div>

<!-- JavaScript -->
<script>
  document.getElementById("loader").classList.remove("d-none");
  // Hide after 2 seconds
  setTimeout(() => {
    document.getElementById("loader").classList.add("d-none");
  }, 2000);
</script>
```

---

## 🎯 Challenge Task

Build a **"Product List with Pagination"** using:

* Pagination at the bottom
* Spinner shown while loading
* Upload button with progress bar (simulate with timeout)

---

## 🧪 Playground

🔗 [Try it Live on CodePen](https://codepen.io/) *(Add working demo in your YouTube/video description)*

---

## ✅ Summary

| Component         | Role                              |
| ----------------- | --------------------------------- |
| **Pagination**    | Break content into multiple pages |
| **Spinners**      | Indicate loading or processing    |
| **Progress Bars** | Visualize completion or progress  |

---

## 🔜 Up Next: Chapter 17 – Bootstrap Alerts, Badges & Breadcrumbs

Let’s explore how to show warning messages, user notifications, and navigation paths.
