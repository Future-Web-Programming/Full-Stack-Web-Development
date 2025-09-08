# 🌐 Chapter 27: Bootstrap with React or Vue

**📚 Topic:** Add Bootstrap to SPA (React-Bootstrap / Vue-Bootstrap)
**🎯 Goal:** Learn how to use Bootstrap effectively inside modern frontend frameworks like React or Vue.

---

## 🔥 Why This Chapter Matters

Modern web development is moving toward **component-based architectures** using frameworks like **React** and **Vue**. However, integrating a **UI framework like Bootstrap** with these libraries requires a different approach than traditional HTML.

This chapter will show you:

* How to integrate Bootstrap with a **React SPA** or a **Vue.js app**
* The **right way** to use Bootstrap's CSS and JavaScript components in those environments
* The difference between using Bootstrap directly vs using **framework-specific libraries** like `react-bootstrap` and `bootstrap-vue`

---

## ✅ What You Will Learn

| Topic                             | React                                    | Vue                                   |
| --------------------------------- | ---------------------------------------- | ------------------------------------- |
| Install Bootstrap                 | ✅                                        | ✅                                     |
| Use Bootstrap CSS                 | ✅                                        | ✅                                     |
| Use Bootstrap JS (modals, toasts) | Via React wrappers or manually with refs | Via directives or Vue wrappers        |
| Component Libraries               | `react-bootstrap`, `reactstrap`          | `bootstrap-vue`, `bootstrap-vue-next` |
| Build Example UI                  | ✅                                        | ✅                                     |

---

## 🔧 Option 1: Using Bootstrap with React

### 📦 Step 1: Create React App

```bash
npx create-react-app bootstrap-react
cd bootstrap-react
```

### 🎨 Step 2: Install Bootstrap

```bash
npm install bootstrap
```

Then in `src/index.js` or `App.js`:

```js
import 'bootstrap/dist/css/bootstrap.min.css';
```

---

### 💡 Option A: Use Bootstrap CSS Only

Use Bootstrap classes directly in JSX:

```jsx
<button className="btn btn-primary">Click Me</button>
```

---

### 💡 Option B: Use React-Bootstrap (Component-Based)

```bash
npm install react-bootstrap
```

Example:

```jsx
import { Button, Card } from 'react-bootstrap';

function MyCard() {
  return (
    <Card>
      <Card.Body>
        <Card.Title>Hello React-Bootstrap</Card.Title>
        <Button variant="primary">Click Me</Button>
      </Card.Body>
    </Card>
  );
}
```

🔁 This uses actual React components under the hood (not just class names).

---

## 🧪 Handling Bootstrap JS Components (like Modal)

Bootstrap JavaScript components like **modals** require either:

* Manual DOM integration via `refs`
* OR using the `react-bootstrap` components (recommended)

Example:

```jsx
import { Modal } from 'react-bootstrap';
```

---

## 🔧 Option 2: Using Bootstrap with Vue

### 🛠 Step 1: Create a Vue App

```bash
npm init vue@latest
cd <your-app>
npm install
```

### 🎨 Step 2: Install Bootstrap

```bash
npm install bootstrap
```

Then in `main.js`:

```js
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap'
```

---

### 💡 Option A: Use Bootstrap CSS Classes

```html
<template>
  <button class="btn btn-success">Hello Vue</button>
</template>
```

---

### 💡 Option B: Use BootstrapVue (Component-Based)

```bash
npm install bootstrap-vue-3
```

Then in `main.js`:

```js
import BootstrapVue3 from 'bootstrap-vue-3'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue-3/dist/bootstrap-vue-3.css'

const app = createApp(App)
app.use(BootstrapVue3)
app.mount('#app')
```

Now use components like:

```html
<BButton variant="primary">Vue Button</BButton>
```

---

## 🧠 Key Differences

| Feature                 | Raw Bootstrap | React-Bootstrap | BootstrapVue |
| ----------------------- | ------------- | --------------- | ------------ |
| CSS Only                | ✅             | ❌               | ❌            |
| Component-Based         | ❌             | ✅               | ✅            |
| Bootstrap JS Support    | Manual        | Built-in        | Built-in     |
| React/Vue State Support | ❌             | ✅               | ✅            |

---

## 📁 Folder Examples

* `bootstrap-react/`

  * Uses `react-bootstrap` for all UIs
* `bootstrap-vue/`

  * Uses `bootstrap-vue-3` or manual class-based integration

---

## 🧪 Mini Challenge

✅ Convert a **Bootstrap card layout** using `react-bootstrap` and `bootstrap-vue`.
✅ Use Modal component to show details on button click in both frameworks.

---

## 📦 Resources

* [React-Bootstrap Docs](https://react-bootstrap.github.io/)
* [Bootstrap-Vue 3 Docs](https://bootstrap-vue.org/)
* [Bootstrap JS Docs](https://getbootstrap.com/docs/5.3/components/modal/)
* [Official Bootstrap](https://getbootstrap.com/)

---

## 🧠 Summary

| Framework | Bootstrap Integration        | Component Libraries                     |
| --------- | ---------------------------- | --------------------------------------- |
| React     | Import CSS + React-Bootstrap | `react-bootstrap`, `reactstrap`         |
| Vue       | Import CSS + Bootstrap-Vue   | `bootstrap-vue-3`, `bootstrap-vue-next` |

---

✅ This chapter ensures students can confidently use Bootstrap with **modern JavaScript frameworks**, an essential real-world skill for 2025 and beyond.
