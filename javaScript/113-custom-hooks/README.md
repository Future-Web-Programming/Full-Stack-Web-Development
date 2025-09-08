Perfect! Now that we've built our **MiniJS framework**, it’s time to take the next powerful leap forward:

---

# ✅ Chapter 113: Custom Hooks / Composable Functions in JavaScript

> 🎯 *Goal: Learn how to modularize logic using **custom hooks** (a concept inspired by React Hooks) or **composable functions**, even without a framework.*

---

## 🧠 Why Learn This?

In modern frameworks like **React**, **Vue**, or **Solid**, developers reuse logic across components via **Hooks** or **Composables**.

This is key for:

* Code **reusability**
* Clean **separation of concerns**
* Better **testability**
* Simplified **stateful logic**

---

## 📖 What Are Hooks/Composables?

Hooks or composable functions are **functions that encapsulate reusable stateful logic**.

They:

* Don’t render UI directly
* Return useful data or functions
* Keep UI code clean and DRY

> Think of them like helpers that are aware of **state**, **events**, or even **lifecycle**.

---

## 🔸 Custom Hook: `useCounter()`

Let’s implement a simple custom hook in plain JavaScript.

```js
// hooks/useCounter.js
export function useCounter(initialValue = 0) {
  let count = initialValue;

  function increment() {
    count++;
    console.log("Count incremented to", count);
    return count;
  }

  function decrement() {
    count--;
    console.log("Count decremented to", count);
    return count;
  }

  return {
    getCount: () => count,
    increment,
    decrement,
  };
}
```

Use it like:

```js
import { useCounter } from './hooks/useCounter.js';

const counter = useCounter(5);

console.log(counter.getCount()); // 5
counter.increment(); // 6
counter.decrement(); // 5
```

> 🧠 This is a “hook-style” function that manages state internally.

---

## 🔸 Composable in DOM Context

Let’s build a more practical hook that interacts with the DOM and state.

```js
// hooks/useToggle.js
export function useToggle(defaultState = false) {
  let state = defaultState;

  function toggle() {
    state = !state;
    console.log("State toggled:", state);
    return state;
  }

  return {
    get: () => state,
    toggle,
  };
}
```

### 👇 How to use in HTML + JS:

```html
<!-- index.html -->
<button id="themeBtn">Toggle Theme</button>
<script type="module">
  import { useToggle } from './hooks/useToggle.js';

  const darkMode = useToggle(false);

  document.getElementById('themeBtn').onclick = () => {
    const isDark = darkMode.toggle();
    document.body.style.background = isDark ? "#111" : "#fff";
    document.body.style.color = isDark ? "#fff" : "#000";
  };
</script>
```

---

## 🔄 Stateful Custom Hook for Form

```js
// hooks/useForm.js
export function useForm(initialValues = {}) {
  let values = { ...initialValues };

  function setField(name, value) {
    values[name] = value;
    return values;
  }

  function getValues() {
    return values;
  }

  return {
    setField,
    getValues,
  };
}
```

Use it like:

```js
const form = useForm({ email: '', password: '' });

form.setField('email', 'example@gmail.com');
console.log(form.getValues()); // { email: 'example@gmail.com', password: '' }
```

---

## 🧩 Reusability Example: Create a Hook-Based Counter Component

```js
// app.js
import { useCounter } from './hooks/useCounter.js';

const CounterComponent = () => {
  const counter = useCounter(0);

  const root = document.getElementById("root");
  root.innerHTML = `
    <div>
      <h2>Count: <span id="count">${counter.getCount()}</span></h2>
      <button id="incBtn">+1</button>
      <button id="decBtn">-1</button>
    </div>
  `;

  document.getElementById("incBtn").onclick = () => {
    document.getElementById("count").textContent = counter.increment();
  };

  document.getElementById("decBtn").onclick = () => {
    document.getElementById("count").textContent = counter.decrement();
  };
};

CounterComponent();
```

---

## 🧠 Benefits of Custom Hooks/Composables

| Feature               | Benefit                              |
| --------------------- | ------------------------------------ |
| Logic Reuse           | Use the same hook in multiple places |
| Cleaner UI Code       | Focus only on rendering              |
| Better Testing        | Hooks are pure functions             |
| Scalable Architecture | Ideal for large apps/frameworks      |

---

## 🔬 How Frameworks Use Hooks

| Framework | Term         | Example                     |
| --------- | ------------ | --------------------------- |
| React     | Custom Hooks | `useEffect()`, `useState()` |
| Vue 3     | Composables  | `useFetch()`, `useForm()`   |
| SolidJS   | Signals      | `createSignal()`            |
| Svelte    | Stores       | `$store`, `writable()`      |

> In all cases, these are **functions that manage logic, not UI**.

---

## 🎯 What to Do Next?

You can now:

* Write reusable hooks like `useTheme()`, `useScroll()`, `useModal()`, etc.
* Use them inside your `MiniJS` components
* Understand how **React/Vue/Solid** internally manage logic sharing

---

## 🧪 Challenge

> Build the following:

1. A `useTimer()` hook — starts a counter from 0 every second
2. A `useLocalStorage()` hook — saves and loads values in `localStorage`

---

## 📦 Bonus Practice Ideas

* `useMousePosition()` – returns `{ x, y }` of mouse
* `useOnlineStatus()` – returns true/false if user is online
* `useKeyPress()` – triggers function on key press

---

## 🌐 Try It Online

Test your hook creations on:

* [CodeSandbox](https://codesandbox.io/)
* [JSFiddle](https://jsfiddle.net/)
* [StackBlitz](https://stackblitz.com/)

---

## ✅ Summary

You’ve learned:

* What custom hooks and composables are
* How to write reusable, stateful JavaScript logic
* How modern frameworks **abstract logic from UI**

---

## 🔜 Coming Up Next…

**Chapter 114: Writing Testable JavaScript (Vitest / Jest)**

> Learn how to write **unit tests** for your logic, custom hooks, and components.

---

Would you like to move on and start preparing **Chapter 114: Writing Testable JavaScript**?
