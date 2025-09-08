# 🏷️ Chapter 32: Tailwind CSS Badges & Tooltips

📅 **Release Date:** 28 July 2025
🎯 **Goal:** Master how to build elegant **badges** (notifications, labels) and interactive **tooltips** (hover popups) using Tailwind’s utility classes—no JavaScript required for basic interactions.

---

## 🧠 What Are Badges & Tooltips?

| Element     | Use Case Examples                             |
| ----------- | --------------------------------------------- |
| **Badge**   | Notification count, tags, statuses (e.g., 5+) |
| **Tooltip** | Show hidden info on hover/focus               |

---

## 🔹 1. Simple Notification Badge (Top-Right Dot)

```html
<div class="relative inline-block">
  <button class="bg-blue-600 text-white px-4 py-2 rounded-full">Inbox</button>
  <span class="absolute top-0 right-0 block h-2 w-2 rounded-full ring-2 ring-white bg-red-500"></span>
</div>
```

> 🔍 This creates a small red dot on the button's top-right corner.

---

## 🔢 2. Badge with Count

```html
<div class="relative inline-block">
  <button class="bg-gray-200 px-4 py-2 rounded">Messages</button>
  <span class="absolute top-0 right-0 -mt-1 -mr-1 bg-red-600 text-white text-xs px-2 py-0.5 rounded-full">9+</span>
</div>
```

| Utility Used     | Purpose                |
| ---------------- | ---------------------- |
| `absolute top-0` | Positioning badge top  |
| `-mt-1 -mr-1`    | Nudging toward corners |
| `rounded-full`   | Circle badge shape     |

---

## 🟦 3. Badges in Buttons or Cards

```html
<button class="relative bg-blue-500 text-white px-4 py-2 rounded">
  Cart
  <span class="absolute -top-2 -right-2 bg-yellow-400 text-black text-xs px-2 py-0.5 rounded-full">3</span>
</button>
```

---

## 🏷️ 4. Tag-Like Badges (Inline)

```html
<span class="inline-block bg-purple-100 text-purple-800 text-xs px-2 py-1 rounded-full">New</span>
```

> You can use this for **statuses**, **categories**, **labels**, etc.

---

## 🧩 5. Hover-Based Tooltips with `group-hover`

```html
<div class="relative group inline-block">
  <button class="bg-gray-800 text-white px-4 py-2 rounded">Hover Me</button>
  <div class="absolute bottom-full mb-2 hidden group-hover:block bg-black text-white text-xs rounded px-2 py-1">
    This is a tooltip!
  </div>
</div>
```

| Technique                     | Used For                   |
| ----------------------------- | -------------------------- |
| `group` + `group-hover:block` | Revealing tooltip on hover |
| `absolute bottom-full`        | Positioning above button   |

---

## 👁️‍🗨️ 6. Tooltip with Arrow

```html
<div class="relative group inline-block">
  <span class="bg-blue-600 text-white px-4 py-1 rounded">Hover</span>
  <div class="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 hidden group-hover:block bg-black text-white text-xs rounded px-2 py-1">
    Tooltip Text
    <div class="absolute top-full left-1/2 -translate-x-1/2 w-2 h-2 bg-black rotate-45"></div>
  </div>
</div>
```

> The small rotated square below creates the **arrow effect**!

---

## 🧪 7. Advanced Tooltip with `peer`

```html
<div class="relative">
  <input type="text" class="peer border px-4 py-2 rounded" placeholder="Hover input" />
  <div class="absolute top-full left-0 mt-1 hidden peer-hover:block bg-gray-900 text-white text-xs px-3 py-1 rounded">
    Enter your username here
  </div>
</div>
```

| Utility            | Description                        |
| ------------------ | ---------------------------------- |
| `peer`             | Makes tooltip react to input hover |
| `peer-hover:block` | Shows tooltip on hover             |

---

## ✨ Styling Variants for Badges

| Status  | Class Example                   |
| ------- | ------------------------------- |
| New     | `bg-green-100 text-green-700`   |
| Warning | `bg-yellow-100 text-yellow-700` |
| Error   | `bg-red-100 text-red-700`       |
| Info    | `bg-blue-100 text-blue-700`     |

---

## 📦 Bonus: Tooltips Library Option

If you want advanced tooltips with animations, you can use:

```bash
npm install @headlessui/react
```

Or simple ones via external lightweight plugins (like Tippy.js) + Tailwind integration.

---

## 🧠 Summary

| Component | Key Concepts Used                                |
| --------- | ------------------------------------------------ |
| Badges    | `absolute`, `rounded-full`, `text-xs`, `bg-*`    |
| Tooltips  | `group`, `group-hover`, `peer-hover`, `absolute` |

---

## ✅ Challenge

Create:

* A card with a product badge: "NEW", "BESTSELLER"
* An input with tooltip on hover (e.g., "Must be 8+ chars")
* A button with badge + tooltip combo (e.g., “Cart” with count and tip)

---

## 🔚 What You Learned:

* Building badge indicators for buttons, text, cards
* Interactive hover tooltips using only Tailwind CSS utilities
* Combining `absolute`, `group-hover`, and `peer` for behavior

---

## 🔜 Up Next:

**Chapter 33 — Tailwind Pagination Design**

> Build beautiful, responsive paginations using flex, spacing, active state styles, and accessibility best practices.
