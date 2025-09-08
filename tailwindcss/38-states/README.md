
# 🎯 Chapter 22: Hover, Focus & Active States in Tailwind CSS

📅 **Release Date:** 27 July 2025
🚀 **Goal:** Learn how to style interactive states like hover, focus, and active using Tailwind’s state variants and utility classes.

---

## 🧠 What You’ll Learn

* The concept of interaction states (`hover:`, `focus:`, `active:`)
* How to combine them with utility classes
* Building interactive buttons, inputs, cards, and nav menus
* Group hover and peer-based interactions

---

## ⚡ 1. What Are Interaction States?

Tailwind allows you to add styling that only activates during certain **UI interaction states**:

| Variant   | Triggered When...                   |
| --------- | ----------------------------------- |
| `hover:`  | The user hovers over an element     |
| `focus:`  | The element is focused (input, btn) |
| `active:` | The element is being clicked/held   |

---

## ✅ 2. Basic Usage Examples

### 🔘 Hover Example

```html
<button class="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-800">
  Hover Me
</button>
```

### 🧪 Focus Example (for inputs)

```html
<input class="border-2 border-gray-300 focus:outline-none focus:border-blue-500 px-4 py-2 rounded" placeholder="Type here" />
```

### 🎯 Active Example (on click)

```html
<button class="bg-green-500 text-white px-4 py-2 active:bg-green-700">
  Click Me
</button>
```

---

## 👥 3. Group Hover Interactions

Use `group` to style **child elements** when the **parent is hovered**.

```html
<div class="group w-40 h-40 bg-gray-100 p-4 hover:shadow-lg rounded-lg">
  <h2 class="text-lg group-hover:text-blue-600">Hover Card</h2>
  <p class="text-sm text-gray-500 group-hover:text-black">More info here...</p>
</div>
```

> 🧠 Use `group` on parent and `group-hover:` on children.

---

## 🧩 4. Real-World UI Examples

### 📦 Hover Card with Elevation

```html
<div class="w-64 p-4 bg-white rounded shadow-md hover:shadow-xl transition-shadow duration-300">
  <h3 class="text-xl font-semibold">Card Title</h3>
  <p class="text-gray-600 mt-2">Description content...</p>
</div>
```

### 💡 Focus Ring for Accessibility

```html
<button class="bg-indigo-600 text-white px-4 py-2 rounded focus:outline-none focus:ring-4 focus:ring-indigo-300">
  Accessible Button
</button>
```

---

## 🔄 5. Combining States

You can chain multiple variants together:

```html
<button class="bg-gray-200 hover:bg-blue-500 focus:bg-green-500 active:bg-red-500 text-white px-4 py-2 rounded">
  Try All States
</button>
```

---

## 🧪 Bonus: `peer` Variant

Trigger sibling styling when an element (like a checkbox) is focused/checked.

```html
<label class="flex items-center space-x-2">
  <input type="checkbox" class="peer hidden">
  <span class="px-4 py-2 bg-gray-200 peer-checked:bg-blue-500">Select Me</span>
</label>
```

---

## 📚 Summary

| Variant         | Syntax Example                | Description                          |
| --------------- | ----------------------------- | ------------------------------------ |
| `hover:`        | `hover:bg-blue-700`           | On mouse hover                       |
| `focus:`        | `focus:outline-none`          | On input/button focus                |
| `active:`       | `active:scale-95`             | On click/tap (active state)          |
| `group-hover:`  | `group-hover:text-indigo-600` | Child changes when parent is hovered |
| `peer-checked:` | `peer-checked:bg-indigo-500`  | Use with checkboxes/radios           |

---

## ✅ Practice Task

Create a **Navigation Bar** with hover effects:

* Change text color on `hover`
* Add underline on `hover`
* Add `active` styles on menu items

---

## 🔚 Conclusion

Tailwind’s interactive variants allow you to easily create rich, responsive UIs with zero custom CSS. You can combine these states to build elegant user experiences.

---

## 🔜 Up Next:

**Chapter 23 – Pseudo-classes and Group Modifiers in Tailwind**

> Learn how to target advanced states like `first:`, `last:`, `odd:`, `even:`, `group-hover`, and more.
