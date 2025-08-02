# 🧱 Chapter 13: Borders, Dividers & Shadows in Tailwind CSS

> **Goal:** Teach students how to use Tailwind to apply borders, rounded corners, dividers between elements, and stunning shadow effects to elevate UI components.

---

## 🧠 What You Will Learn

✅ Border widths, colors, and styles
✅ Rounded corners (`rounded-*`)
✅ Border sides (`border-t`, `border-b`, etc.)
✅ Dividers between flex/grid items
✅ Shadows from subtle to strong (`shadow-sm`, `shadow-2xl`)
✅ Ring utilities for focus states

---

## 1️⃣ Basic Borders

```html
<div class="border border-gray-400 p-4">
  Basic bordered box
</div>
```

### 🔧 Customizing Borders

| Class                  | Description              |
| ---------------------- | ------------------------ |
| `border`               | Default 1px solid border |
| `border-2`, `border-4` | Thicker borders          |
| `border-red-500`       | Red-colored border       |
| `border-dashed`        | Dashed style             |
| `border-dotted`        | Dotted style             |

---

## 2️⃣ Border Sides

Tailwind allows you to apply borders only to specific sides.

```html
<div class="border-t-4 border-t-blue-500 p-4">
  Top border only
</div>
```

| Class      | Applies To    |
| ---------- | ------------- |
| `border-t` | Top border    |
| `border-b` | Bottom border |
| `border-l` | Left border   |
| `border-r` | Right border  |

---

## 3️⃣ Rounded Corners (`rounded-*`)

```html
<div class="rounded-lg bg-blue-500 text-white p-4">
  Rounded corner box
</div>
```

| Class          | Corner Radius               |
| -------------- | --------------------------- |
| `rounded-none` | No rounding                 |
| `rounded-sm`   | Small rounding              |
| `rounded-md`   | Medium rounding             |
| `rounded-lg`   | Large rounding              |
| `rounded-full` | Fully rounded (circle/oval) |

### 🧠 Bonus: Per-side Rounded

| Class            | Rounds...       |
| ---------------- | --------------- |
| `rounded-t-lg`   | Top only        |
| `rounded-b-md`   | Bottom only     |
| `rounded-l-full` | Left side fully |

---

## 4️⃣ Dividers Between Items

Great for separating items in a list or flex/grid layout.

```html
<div class="divide-y divide-gray-300">
  <div>Item 1</div>
  <div>Item 2</div>
  <div>Item 3</div>
</div>
```

### 🔁 Directional Dividers

| Class            | Effect                   |
| ---------------- | ------------------------ |
| `divide-y`       | Horizontal dividers      |
| `divide-x`       | Vertical dividers (flex) |
| `divide-dashed`  | Dashed divider line      |
| `divide-red-400` | Color of divider         |

---

## 5️⃣ Shadows for Depth

Tailwind provides a range of preset shadows from subtle to bold.

```html
<div class="shadow-md p-6 rounded bg-white">
  Card with medium shadow
</div>
```

| Class         | Shadow Strength  |
| ------------- | ---------------- |
| `shadow-sm`   | Light shadow     |
| `shadow`      | Default (medium) |
| `shadow-md`   | Slightly deeper  |
| `shadow-lg`   | Large shadow     |
| `shadow-xl`   | Extra large      |
| `shadow-2xl`  | Very deep shadow |
| `shadow-none` | Removes shadow   |

---

## 6️⃣ Colored & Inner Shadows

```html
<div class="shadow-inner bg-gray-100 p-6">
  Inner shadow effect
</div>
```

### 💡 Combine with ring for focus state

```html
<input class="ring-2 ring-blue-500 focus:ring-4 focus:ring-blue-300 rounded px-4 py-2" placeholder="Your name" />
```

---

## 🎨 Example: Card with Border, Shadow, and Rounded Corners

```html
<div class="max-w-sm mx-auto border border-gray-300 rounded-lg shadow-md p-6 bg-white">
  <h2 class="text-xl font-bold mb-2">Tailwind Card</h2>
  <p class="text-gray-600">This card has border, shadow, and rounded corners!</p>
</div>
```

---

## 💡 Design Tip

> Use `divide-*` for internal item separation and `shadow-*` to elevate UI elements above the background. Combine `rounded-lg` and `shadow-md` for professional cards.

---

## 🧪 Practice Task

1. Create a flexbox row with `divide-x` between items.
2. Build a card component with:

   * A `shadow-lg`
   * `rounded-xl`
   * `border` on all sides
3. Create buttons with different `ring-*` focus effects.
4. Make a bordered alert box with a left border only.
