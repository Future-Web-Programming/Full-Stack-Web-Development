# 📚 Chapter 14: Bootstrap Modal, Collapse, and Tooltips

**Level:** Intermediate
**Module:** JavaScript-powered Bootstrap components
**Goal:** Master how to add interactive elements like modals, collapsible sections, and tooltips using Bootstrap's built-in JS behaviors.

---

## ✅ What You Will Learn

| Feature      | Description                                                 |
| ------------ | ----------------------------------------------------------- |
| **Modal**    | Add popup modals for login, signups, alerts, galleries      |
| **Collapse** | Show/hide content toggles, useful for FAQs, read-more areas |
| **Tooltips** | Small hover hints for better UI/UX                          |

---

## 🛠️ Prerequisites

* Bootstrap JS must be included (`bootstrap.bundle.js`) which contains Popper.js
* Basic knowledge of Bootstrap components (buttons, grid)

---

## 🔹 1. Bootstrap Modal

Modals are dialog popups. Perfect for:

* Login forms
* Alerts
* Lightbox gallery
* Confirm actions

### ✅ HTML Structure

```html
<!-- Button to trigger modal -->
<button type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal">
  Launch Modal
</button>

<!-- Modal -->
<div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div class="modal-dialog">
    <div class="modal-content">
    
      <div class="modal-header">
        <h5 class="modal-title" id="exampleModalLabel">Modal Title</h5>
        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>

      <div class="modal-body">
        This is a sample modal body!
      </div>

      <div class="modal-footer">
        <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
        <button type="button" class="btn btn-primary">Save changes</button>
      </div>

    </div>
  </div>
</div>
```

### 🔸 Common Options

* `.modal-lg` / `.modal-sm`: Control modal size
* `data-bs-backdrop="static"`: Disable outside click
* `data-bs-keyboard="false"`: Disable ESC close

---

## 🔹 2. Bootstrap Collapse

Create expand/collapse sections like accordions or FAQs.

### ✅ Simple Collapse Example

```html
<p>
  <a class="btn btn-info" data-bs-toggle="collapse" href="#collapseExample" role="button" aria-expanded="false">
    Toggle Content
  </a>
</p>
<div class="collapse" id="collapseExample">
  <div class="card card-body">
    Collapsible content goes here!
  </div>
</div>
```

### 🔸 Collapse with Button

```html
<button class="btn btn-warning" type="button" data-bs-toggle="collapse" data-bs-target="#moreContent">
  Show More
</button>
<div class="collapse mt-2" id="moreContent">
  <div class="card card-body">
    Extra hidden content revealed on toggle!
  </div>
</div>
```

---

## 🔹 3. Bootstrap Tooltips

Tooltips are small popups that appear on hover/focus.

### ✅ Basic Usage

```html
<button type="button" class="btn btn-secondary" data-bs-toggle="tooltip" data-bs-placement="top" title="Tooltip on top">
  Hover Me
</button>
```

### 🧠 Important: Activate Tooltips via JS

```js
// JavaScript required to enable tooltips
const tooltipTriggerList = document.querySelectorAll('[data-bs-toggle="tooltip"]')
const tooltipList = [...tooltipTriggerList].map(tooltipTriggerEl => new bootstrap.Tooltip(tooltipTriggerEl))
```

---

## 🧪 Try It Yourself

You can test the full demo here:

🌐 [CodePen Live Example](https://codepen.io/) *(Add link in YouTube description or LMS)*

---

## 💡 Real-World Use Cases

| Feature      | Use Case                                       |
| ------------ | ---------------------------------------------- |
| **Modal**    | Login form, delete confirmation, media gallery |
| **Collapse** | FAQ sections, read more buttons                |
| **Tooltip**  | Helpful hints on icons or form labels          |

---

## ✅ Challenge Task

🎯 Create a responsive **FAQ Section** with:

* Questions using collapsible cards
* Each card has a question as the header, and answer as collapsible content
* Add tooltips on “?” icons beside the questions

---

## ✅ Summary

| Component    | Key Uses                          |
| ------------ | --------------------------------- |
| **Modal**    | Popup windows for forms or alerts |
| **Collapse** | Expand/collapse content sections  |
| **Tooltip**  | Hover hints for extra UX          |

---

## 📦 Next Up: Chapter 15 — Carousel & Toasts

We’ll build auto-playing image sliders and real-time notification toasts.

