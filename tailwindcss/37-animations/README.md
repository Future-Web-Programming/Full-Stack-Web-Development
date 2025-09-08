# 🎯 Chapter 21: Animations with Tailwind CSS

📅 **Release Date:** 27 July 2025
🚀 **Goal:** Learn how to add prebuilt and custom animations using Tailwind’s `animate-*` utility classes and keyframes.

---

## 🧠 What You’ll Learn

* Built-in animation classes in Tailwind CSS
* Key animation utilities like `animate-bounce`, `animate-ping`, etc.
* How to create custom animations using `@keyframes`
* Real-world animated UI examples like loaders, attention-grabbing cards, and icons

---

## ⚡ 1. Built-in Animation Utilities

Tailwind comes with a few default animations out of the box.

### ✅ Common `animate-*` Classes

| Class            | Description                           |
| ---------------- | ------------------------------------- |
| `animate-none`   | Disables animation                    |
| `animate-spin`   | Continuous 360° rotation              |
| `animate-ping`   | Pulsing circle (radar effect)         |
| `animate-pulse`  | Subtle fade in/out for loading states |
| `animate-bounce` | Bounces element up and down           |

### 🧪 Example: Loading Spinner

```html
<div class="w-10 h-10 border-4 border-blue-500 border-t-transparent rounded-full animate-spin"></div>
```

### 🧪 Example: Ping Dot (Notification)

```html
<span class="relative flex h-4 w-4">
  <span class="animate-ping absolute inline-flex h-full w-full rounded-full bg-sky-400 opacity-75"></span>
  <span class="relative inline-flex rounded-full h-4 w-4 bg-sky-500"></span>
</span>
```

---

## ✨ 2. Custom Animations Using Keyframes

You can define your own keyframes and animation utilities by extending the Tailwind config.

### 🛠 Add Custom Animation in `tailwind.config.js`

```js
module.exports = {
  theme: {
    extend: {
      animation: {
        wiggle: 'wiggle 1s ease-in-out infinite',
        fadeIn: 'fadeIn 2s ease-in-out forwards'
      },
      keyframes: {
        wiggle: {
          '0%, 100%': { transform: 'rotate(-3deg)' },
          '50%': { transform: 'rotate(3deg)' },
        },
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
      }
    }
  }
}
```

### 🔥 Usage in HTML

```html
<button class="animate-wiggle bg-blue-600 text-white px-4 py-2 rounded">
  Wiggle Button
</button>

<div class="animate-fadeIn text-lg mt-6">
  I fade in smoothly!
</div>
```

---

## 🧱 3. Real-World UI Examples

### 🔄 Example: Attention Bouncing Card

```html
<div class="animate-bounce w-32 h-32 bg-pink-400 text-white rounded flex items-center justify-center">
  Bounce!
</div>
```

### ⏳ Example: Pulse Loading Placeholder

```html
<div class="w-full h-4 bg-gray-300 rounded animate-pulse"></div>
```

---

## 🧠 Pro Tips

* Use `animate-pulse` for skeleton loaders
* Use `animate-ping` for notification badges
* Extend Tailwind config to build branded animations
* Pair with `hover:` or `group-hover:` for interactive effects

---

## 📚 Summary

| Utility             | Description                    | Use Case                        |
| ------------------- | ------------------------------ | ------------------------------- |
| `animate-spin`      | Rotating loader icon           | Spinners, refresh buttons       |
| `animate-pulse`     | Fading in/out                  | Skeleton loaders                |
| `animate-bounce`    | Bouncy effect                  | Call-to-action UI               |
| `animate-ping`      | Ping/pulse outer circle        | Notification indicator          |
| Custom `@keyframes` | Your own animation definitions | Fade-ins, wobbles, slides, etc. |

---

## ✅ Practice Task

Create a **Notification Bell** with a pulsing red dot on top using:

* `animate-ping`
* `absolute` positioning
* Tailwind `ring` or `bg-red-500` utilities

---

## 🔚 Conclusion

Animations bring your UI to life—and with Tailwind, they’re fast and expressive. You can go from utility to creativity in seconds!

---

## 🔜 Up Next:

**Chapter 22 – Hover, Focus & Active States in Tailwind**

> Master interaction states and create interactive buttons, cards, inputs, and more.
