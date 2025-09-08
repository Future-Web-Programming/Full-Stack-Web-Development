## 🎓 Chapter 12: Tables, Badges, and Alerts in Bootstrap

Welcome to Chapter 12 of the **Bootstrap Mastery Course**!
In this chapter, we’ll explore **three essential UI components** that improve data presentation and user feedback:
📊 **Tables**, 🔖 **Badges**, and ⚠️ **Alerts**.

---

### 📦 What You Will Learn

* How to create responsive, styled tables
* Add stripes, borders, hover effects to tables
* Use badges for dynamic data counts (like notification dots)
* Design alert boxes with Bootstrap and dismiss functionality
* Add icons and colors for user-friendly messages

---

## 📋 1. Bootstrap Tables

Bootstrap provides classes to easily style and enhance HTML `<table>` elements.

### ✅ Basic Table

```html
<table class="table">
  <thead>
    <tr>
      <th>#</th>
      <th>Student</th>
      <th>Course</th>
      <th>Status</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>1</td>
      <td>Ayesha</td>
      <td>Web Design</td>
      <td>Active</td>
    </tr>
    <tr>
      <td>2</td>
      <td>Ali</td>
      <td>JavaScript</td>
      <td>Inactive</td>
    </tr>
  </tbody>
</table>
```

---

### 🧪 Table Variants

| Feature            | Class               |
| ------------------ | ------------------- |
| Striped Rows       | `.table-striped`    |
| Bordered           | `.table-bordered`   |
| Hover effect       | `.table-hover`      |
| Dark theme         | `.table-dark`       |
| Small table        | `.table-sm`         |
| Responsive wrapper | `.table-responsive` |

#### Example:

```html
<div class="table-responsive">
  <table class="table table-striped table-hover table-bordered table-sm">
    ...
  </table>
</div>
```

---

## 🔖 2. Bootstrap Badges

Badges are used to show small counts or labels (like notifications).

### 🎯 Usage with Text

```html
<h4>
  Messages <span class="badge bg-primary">4</span>
</h4>
```

### 🎯 Usage with Buttons

```html
<button type="button" class="btn btn-success">
  Inbox <span class="badge bg-light text-dark">7</span>
</button>
```

### 🧑‍🎨 Badge Colors

* `bg-primary`
* `bg-secondary`
* `bg-success`
* `bg-danger`
* `bg-warning`
* `bg-info`
* `bg-dark`

You can also round badges using `rounded-pill`:

```html
<span class="badge bg-danger rounded-pill">99+</span>
```

---

## ⚠️ 3. Bootstrap Alerts

Alerts are used to provide feedback to users like success, error, or info messages.

### ✅ Basic Alert

```html
<div class="alert alert-success" role="alert">
  🎉 Your form was submitted successfully!
</div>
```

### ❌ Danger Alert with Icon (optional)

```html
<div class="alert alert-danger d-flex align-items-center" role="alert">
  <i class="bi bi-exclamation-triangle-fill me-2"></i>
  <div>❌ Error! Something went wrong.</div>
</div>
```

*(Make sure Bootstrap Icons are loaded if you're using icons.)*

### 🔒 Dismissible Alerts

```html
<div class="alert alert-warning alert-dismissible fade show" role="alert">
  ⚠️ Please check your input fields.
  <button type="button" class="btn-close" data-bs-dismiss="alert"></button>
</div>
```

---

## 🧠 Practice Task

✅ Create a student table with the following features:

* Striped, bordered, and hoverable
* Status column uses badges (`Active`, `Inactive`, etc.)
* Above table, show an alert: “Loaded 10 student records successfully!”

---

## 🌐 Online Editors

You can practice this chapter using:

* 💻 [CodePen](https://codepen.io/)
* 💻 [JSFiddle](https://jsfiddle.net/)
* 💻 [StackBlitz](https://stackblitz.com/)
* 💻 [Playcode](https://playcode.io/)

---

## 🧩 Summary

| Component | Usage                                    |
| --------- | ---------------------------------------- |
| **Table** | Display data in grid format              |
| **Badge** | Show counts, statuses                    |
| **Alert** | Feedback messages (success, error, info) |

---

## 🔚 What's Next?

In the next chapter, we’ll explore **Bootstrap Icons** and how to integrate icons like checkmarks, warnings, and social icons into your UIs with ease.
