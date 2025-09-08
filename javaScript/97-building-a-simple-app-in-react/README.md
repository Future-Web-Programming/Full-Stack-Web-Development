Great! Let’s begin:

---

# ⚛️ Chapter 97: Building a Simple App in React (CDN-Based)

---

## 🎯 Learning Goals

By the end of this chapter, you’ll:

* Understand how to use **React without any build tools**
* Create your **first React component**
* Use **JSX**, `useState`, and basic **event handling**
* Build a small interactive app using **only HTML + CDN**

> ✅ No `npm`, `Vite`, or `create-react-app` required!

---

## 📦 What Is a CDN-Based React App?

Using a **CDN (Content Delivery Network)**, we can directly include React & ReactDOM in our HTML file and build simple React apps **without setup or tooling**.

---

## 🗂️ File Structure

```
📁 react-cdn-demo
├── index.html
```

---

## 🧪 Project: **Counter App in React (via CDN)**

### 🔹 Step 1: Create `index.html`

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <title>React CDN App</title>
</head>
<body>
  <div id="root"></div>

  <!-- React & ReactDOM via CDN -->
  <script src="https://unpkg.com/react@18/umd/react.development.js" crossorigin></script>
  <script src="https://unpkg.com/react-dom@18/umd/react-dom.development.js" crossorigin></script>
  <script src="https://unpkg.com/@babel/standalone/babel.min.js"></script>

  <!-- Your React code -->
  <script type="text/babel">
    const { useState } = React;

    function Counter() {
      const [count, setCount] = useState(0);

      return (
        <div style={{ textAlign: "center", marginTop: "50px" }}>
          <h1>React CDN Counter App</h1>
          <h2>{count}</h2>
          <button onClick={() => setCount(count + 1)}>Increment</button>
          <button onClick={() => setCount(count - 1)} style={{ marginLeft: '10px' }}>Decrement</button>
        </div>
      );
    }

    const root = ReactDOM.createRoot(document.getElementById("root"));
    root.render(<Counter />);
  </script>
</body>
</html>
```

---

## 🔍 Let’s Break It Down

| Section                    | Description                                           |
| -------------------------- | ----------------------------------------------------- |
| `React@18` & `ReactDOM@18` | Core React libraries loaded from CDN                  |
| `@babel/standalone`        | Translates JSX to JavaScript (browser-based compiler) |
| `useState()`               | React Hook for state management                       |
| `onClick`                  | Event handling inside JSX                             |

---

## 🧠 What is JSX?

JSX = JavaScript + XML
It lets us write HTML-like syntax in JavaScript:

```jsx
<h1>Hello React</h1>
```

JSX is **not valid JavaScript**, so Babel is used to convert it into:

```js
React.createElement("h1", null, "Hello React");
```

---

## ✅ Output:

When you open the `index.html` in the browser, you’ll see:

```
React CDN Counter App
[ 0 ]
[Increment] [Decrement]
```

Each button click updates the counter using `useState`.

---

## 🛠 Tip for Practice

Try creating more components:

* Todo App (with add/remove items)
* Light/Dark Mode Toggle
* Greeting Message (input + state)

---

## 🧪 Challenge for Students

🔹 Extend the counter app:

* Add a **Reset** button
* Show whether the number is **even or odd**
* Add a custom title from an **input field**

---

## 🧼 Pros of CDN-Based React

| ✅ Pros                   | ❌ Cons                            |
| ------------------------ | --------------------------------- |
| Easy to start            | Not suitable for large apps       |
| No setup needed          | No file bundling or optimization  |
| Great for learning       | JSX compiled in browser (slower)  |
| Share via single `.html` | Can’t use modern libraries easily |

---

## 🧠 Real-World Insight

CDN React is best for:

* Rapid prototyping
* Teaching and learning
* Testing isolated components

For **production apps**, we shift to `Vite`, `CRA`, or `Next.js`.

---

## ⏭️ Next Chapter:

➡️ **Chapter 98: React vs Vue vs Svelte vs Angular – Full Comparison**
We’ll compare the top frontend frameworks and help students choose what fits them best.

Shall we move on?
