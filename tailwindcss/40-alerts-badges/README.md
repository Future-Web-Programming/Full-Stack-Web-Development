# 🚨 Chapter 29: Alerts, Toasts & Notifications in Tailwind CSS

📅 **Release Date:** 28 July 2025
🎯 **Goal:** Build reusable alert components, animated toast notifications, and contextual feedback UIs using Tailwind’s utility-first approach—without custom CSS or JavaScript (for basic versions).

---

## 🔔 1. What Are Alerts, Toasts, and Notifications?

| Type             | Purpose                                 | Behavior                     |
| ---------------- | --------------------------------------- | ---------------------------- |
| **Alert**        | Inline message, visible on page load    | Static, dismissible          |
| **Toast**        | Temporary pop-up, often timed or manual | Floating, auto-dismiss       |
| **Notification** | Feedback/messages based on user actions | Can be real-time, persistent |

---

## 🧱 2. Static Alerts (Success, Warning, Danger)

### ✅ Basic Alert Component

```html
<div class="bg-green-100 border border-green-400 text-green-700 px-4 py-3 rounded relative" role="alert">
  <strong class="font-bold">Success!</strong>
  <span class="block sm:inline">Your action has been saved.</span>
</div>
```

> 📌 You can create variations by changing `green` to `yellow`, `red`, or `blue`.

---

### 🚦 Alert Variants

| Type    | Tailwind Classes                                  |
| ------- | ------------------------------------------------- |
| Success | `bg-green-100 border-green-400 text-green-700`    |
| Warning | `bg-yellow-100 border-yellow-400 text-yellow-700` |
| Danger  | `bg-red-100 border-red-400 text-red-700`          |
| Info    | `bg-blue-100 border-blue-400 text-blue-700`       |

---

## ❌ 3. Dismissible Alerts

Tailwind doesn’t include JavaScript, but here's a simple HTML+JS approach:

```html
<div id="alert" class="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded relative" role="alert">
  <strong class="font-bold">Error!</strong>
  <span class="block sm:inline">Something went wrong.</span>
  <span onclick="document.getElementById('alert').remove();" class="absolute top-0 bottom-0 right-0 px-4 py-3">
    ❌
  </span>
</div>
```

> 🔄 You can replace `❌` with a Heroicons SVG or icon font.

---

## 📦 4. Toast Notifications (Bottom Corner / Auto-dismiss)

### ⚡ Basic Toast Container (Fixed position)

```html
<div class="fixed bottom-4 right-4 space-y-2 z-50">
  <div class="bg-gray-900 text-white px-6 py-3 rounded-lg shadow-lg animate-slide-in">
    🔔 Notification: Your file has been uploaded!
  </div>
</div>
```

> Add `.animate-slide-in` using Tailwind’s custom animation class or via `transition ease-in-out transform`.

---

### 🎯 Adding Animation with Tailwind

Extend Tailwind config with custom animation:

```js
// tailwind.config.js
module.exports = {
  theme: {
    extend: {
      keyframes: {
        slideIn: {
          '0%': { opacity: 0, transform: 'translateX(100%)' },
          '100%': { opacity: 1, transform: 'translateX(0)' },
        },
      },
      animation: {
        'slide-in': 'slideIn 0.5s ease-out forwards',
      },
    },
  },
}
```

Now use: `animate-slide-in`

---

## 📱 5. Notification Panels (Topbar or Sidebar Notifications)

```html
<div class="bg-blue-600 text-white px-4 py-2 text-sm text-center">
  📢 System Maintenance Tonight @ 12 AM
</div>
```

Add `fixed top-0 w-full` to make it sticky.

---

## 🛠️ 6. Advanced UI Tip: Stack Multiple Toasts

```html
<div class="fixed bottom-6 right-6 space-y-4 z-50">
  <div class="bg-green-600 text-white px-5 py-3 rounded shadow">✅ Saved successfully</div>
  <div class="bg-red-600 text-white px-5 py-3 rounded shadow">❌ Failed to update</div>
</div>
```

---

## 🧪 Challenge: Build a Reusable Alert Component

### Requirements:

* Success, Warning, Error types
* Optional close button
* Toast mode with slide-in effect
* Accessible with `role="alert"`

---

## 🧠 Summary

| Component     | Key Utilities                                     |
| ------------- | ------------------------------------------------- |
| Alerts        | `bg-*`, `border-*`, `text-*`, `rounded`, `px/py`  |
| Toasts        | `fixed`, `z-50`, `animate-*`, `shadow`, `rounded` |
| Notifications | `text-sm`, `w-full`, `top-0`, `centered text`     |

---

## 🔚 What You Learned:

* How to build static and dismissible alerts
* How to build toast notifications with animation
* How to position and style notifications with only Tailwind

---

## 🔜 Up Next:

**Chapter 32 — Tailwind CSS Badges & Tooltips**

> Build beautiful, responsive badge indicators (e.g., unread counts) and tooltips with Tailwind’s utility classes and `group-hover`/`peer` tricks.

