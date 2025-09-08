Awesome! Let’s begin one of the **most exciting and practical chapters** of this course — where we **build a mini JavaScript framework** (like a tiny version of React) using everything we’ve learned so far, especially OOP and component architecture.

---

# ✅ Chapter 112: Building a Mini JavaScript Framework (React-Style Architecture)

> 🎯 *Goal: Learn how frameworks like React work under the hood by building your own mini UI rendering system using JavaScript.*

---

## 🧠 Why Build Your Own Framework?

Most students learn **how to use** frameworks like React or Vue — but **don’t know how they actually work**.

By building one:

* You'll understand **component-based architecture**
* Learn **virtual DOM ideas**
* Create **reusable UI building blocks**
* Use **OOP + Functional JS** for real-world architecture

---

## 📦 What We'll Build

We’re going to build:

### ✅ A mini framework called `MiniJS`:

* `Mini.createComponent()` – to define components
* `Mini.render()` – to render into the DOM
* Support for:

  * Props
  * State
  * JSX-style structure (using JS objects)

---

## 🛠️ Project Structure

```
/mini-js-framework
  ├── index.html
  ├── app.js
  └── mini.js  ← (our framework)
```

---

## 🔹 Step 1: Basic HTML Setup

```html
<!-- index.html -->
<!DOCTYPE html>
<html>
<head>
  <title>MiniJS Framework</title>
</head>
<body>
  <div id="root"></div>

  <script src="mini.js"></script>
  <script src="app.js"></script>
</body>
</html>
```

---

## 🔹 Step 2: Create the `Mini` Framework Core

```js
// mini.js
const Mini = (function () {
  function createComponent({ render }) {
    return {
      render,
    };
  }

  function renderComponent(component, target) {
    const html = component.render();
    document.querySelector(target).innerHTML = html;
  }

  return {
    createComponent,
    render: renderComponent,
  };
})();
```

✅ This allows:

```js
Mini.createComponent({ render: () => '<h1>Hello</h1>' });
```

---

## 🔹 Step 3: Create Your First Component (in `app.js`)

```js
// app.js
const Hello = Mini.createComponent({
  render: function () {
    return `<h1>Hello from MiniJS!</h1>`;
  },
});

Mini.render(Hello, '#root');
```

---

## 🔹 Step 4: Add Props Support

Update `mini.js`:

```js
function createComponent({ render }) {
  return function (props = {}) {
    return {
      render: () => render(props),
    };
  };
}
```

Use it like:

```js
const Greeting = Mini.createComponent({
  render: (props) => `<h2>Welcome, ${props.name}</h2>`,
});

const hello = Greeting({ name: 'Ali' });
Mini.render(hello, '#root');
```

---

## 🔹 Step 5: Add Simple State (Reactive-ish)

Let’s simulate basic state with a closure:

```js
function createComponent({ render, setup }) {
  return function (props = {}) {
    const state = setup ? setup() : {};
    return {
      render: () => render(props, state),
      state,
    };
  };
}
```

Use in `app.js`:

```js
const Counter = Mini.createComponent({
  setup() {
    return { count: 0 };
  },
  render(props, state) {
    return `
      <div>
        <h3>Count: ${state.count}</h3>
        <button onclick="increment()">+1</button>
      </div>
    `;
  },
});

const App = Counter();
Mini.render(App, '#root');

function increment() {
  App.state.count++;
  Mini.render(App, '#root');
}
```

---

## 🎨 Result

![MiniJS in action](https://i.imgur.com/V1MzMo7.png)

> 💥 We now have a working **component** with:

* Props
* State
* DOM Rendering
* Re-rendering on events

---

## 🧩 What Concepts Did We Use?

* **Factory functions** to generate components
* **Closures** for internal state
* **Reactivity simulation** by re-rendering
* **OOP pattern** to encapsulate logic

---

## 🧠 Concepts Learned Behind the Scenes

| React Concept        | MiniJS Equivalent          |
| -------------------- | -------------------------- |
| `useState()`         | `setup()` returning object |
| Functional Component | `Mini.createComponent()`   |
| `render()`           | Our `render()` function    |
| Virtual DOM          | ❌ (not yet implemented)    |
| JSX                  | ✅ Simulated with strings   |
| Props                | ✅ Handled                  |

---

## 📦 Bonus: Add JSX-like DSL (Optional Advanced)

```js
const Button = (text, onclick) =>
  `<button onclick="${onclick}">${text}</button>`;
```

Then use:

```js
const UI = () => `
  <div>
    <h1>Framework Vibes</h1>
    ${Button('+1', 'increment()')}
  </div>
`;
```

---

## 📚 You Just Created:

* A **reactive component system**
* A **JS-based UI rendering framework**
* The base of what tools like **React**, **Vue**, and **Solid.js** do

---

## 🧪 Challenge

> Create a `TodoApp` with:

* Add Task
* Delete Task
* Renders UI on each change

---

## 🌐 Try it Online

Use:

* [CodePen](https://codepen.io/)
* [StackBlitz](https://stackblitz.com/)
* [CodeSandbox](https://codesandbox.io/)

---

## 🚀 Coming Next: Chapter 113 — *Custom Hooks / Composable Functions in JavaScript*

We’ll take the next big step and implement **React-style hooks or composables** with `useState()`, `useEffect()` simulations.

---

Would you like to start preparing **Chapter 113: Custom Hooks / Composable Functions**?
