# 🟣 **Chapter 35: Bootstrap 5 Advanced JavaScript APIs**

> 🚀 *Master how Bootstrap's JavaScript plugins work under the hood — manually initialize them, interact via JavaScript, and build dynamic UI interactions like a pro!*

---

## ✅ What You’ll Learn:

| Feature                           | Description                                                                                   |
| --------------------------------- | --------------------------------------------------------------------------------------------- |
| 🔌 **Manual Initialization**      | How to use `new bootstrap.Component()` to programmatically control modals, tooltips, etc.     |
| 🧠 **Underlying JS APIs**         | Deep dive into how Bootstrap plugins like Collapse, Dropdowns, Offcanvas work with vanilla JS |
| 🎛️ **JavaScript Methods**        | Explore powerful plugin methods: `.show()`, `.hide()`, `.toggle()`, `.dispose()` etc.         |
| 📌 **Custom Event Handling**      | Listen to Bootstrap JS events like `show.bs.modal`, `hide.bs.toast`, etc.                     |
| 🧪 **Interactivity & Conditions** | Control UI behavior with JS logic: auto-close popovers, validation before open, etc.          |
| 🔄 **Resetting & Reinitializing** | Learn how to reset or destroy Bootstrap plugins using `.dispose()`                            |

---

## 🧪 Real-World Use Case

Build a dynamic feedback system:

* A **modal** that only opens after a user passes validation
* A **tooltip** that appears after form submission success
* **Toast** messages controlled via JavaScript (not data attributes)

---

## 📦 Bootstrap JavaScript Plugin List

| Plugin    | JS Class              |
| --------- | --------------------- |
| Modal     | `bootstrap.Modal`     |
| Collapse  | `bootstrap.Collapse`  |
| Dropdown  | `bootstrap.Dropdown`  |
| Offcanvas | `bootstrap.Offcanvas` |
| Toast     | `bootstrap.Toast`     |
| Tooltip   | `bootstrap.Tooltip`   |
| Popover   | `bootstrap.Popover`   |
| Tab       | `bootstrap.Tab`       |
| ScrollSpy | `bootstrap.ScrollSpy` |
| Carousel  | `bootstrap.Carousel`  |

---

## 📋 Sample Code Snippets

### 🛠️ Initialize Modal via JavaScript

```js
const myModal = new bootstrap.Modal(document.getElementById('exampleModal'));
myModal.show();
```

---

### 🧹 Dispose Plugin

```js
const tooltip = bootstrap.Tooltip.getInstance(document.querySelector('#myTooltip'));
tooltip.dispose();
```

---

### 🧏‍♀️ Listen to Modal Events

```js
const modal = document.getElementById('exampleModal');
modal.addEventListener('hide.bs.modal', function () {
  alert('Modal is being closed!');
});
```

---

### 🔁 Toggle Toast Notification

```js
const toastEl = document.getElementById('liveToast');
const toast = new bootstrap.Toast(toastEl);
toast.show();
```

---

## 📌 Best Practices

* Always **check for plugin instance** before applying logic.
* Use `.dispose()` to **clean up memory** (especially with dynamic modals).
* Prefer JS control over data-attributes in complex UIs.
* Combine with `setTimeout()` or AJAX events for dynamic behavior.

---

## 🎯 Challenge Task

🔧 Create a **form validation UI** where:

* Modal appears *only* if the form is valid.
* Toast shows a success message dynamically.
* Tooltip auto-activates when hovering over an input error.
