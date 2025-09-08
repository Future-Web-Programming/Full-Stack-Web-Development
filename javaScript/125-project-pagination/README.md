Absolutely! Let's build another crucial feature — **Pagination** — using only **vanilla JavaScript**.

---

# 📘 **Chapter 125: Final Project #5 – Pagination with Pure JavaScript**

Pagination helps divide long lists of data (e.g., blog posts, products, users) into manageable pages. This makes your app **faster**, **more organized**, and **user-friendly**.

In this project, we'll create a simple paginated list that dynamically updates as the user navigates.

---

## 🎯 **What You Will Learn**

* How pagination works under the hood
* Slicing data with JavaScript (`.slice()`)
* Rendering UI from arrays
* Creating dynamic pagination buttons
* Handling active state, next/prev logic

---

## 📁 **Project Structure**

```
pagination-app/
├── index.html
├── style.css
└── script.js
```

---

## 🧱 Project Preview

We’ll paginate a dataset (like user names or blog titles) and show 5 items per page with page buttons (`1 2 3 →`).

---

## 📄 **index.html**

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
  <title>Pagination with JavaScript</title>
  <link rel="stylesheet" href="style.css" />
</head>
<body>

  <div class="container">
    <h2>Paginated List</h2>
    <ul id="list" class="list"></ul>
    <div id="pagination" class="pagination"></div>
  </div>

  <script src="script.js"></script>
</body>
</html>
```

---

## 🎨 **style.css**

```css
body {
  font-family: 'Segoe UI', sans-serif;
  background: #f2f2f2;
  display: flex;
  justify-content: center;
  padding: 50px;
}

.container {
  background: #fff;
  padding: 2rem;
  border-radius: 10px;
  width: 400px;
  box-shadow: 0 0 10px rgba(0,0,0,0.1);
}

h2 {
  text-align: center;
  margin-bottom: 1rem;
}

.list {
  list-style: none;
  padding: 0;
  margin-bottom: 1.5rem;
}

.list li {
  background: #e9ecef;
  margin-bottom: 10px;
  padding: 10px;
  border-radius: 5px;
}

.pagination {
  text-align: center;
}

.pagination button {
  padding: 8px 12px;
  margin: 0 5px;
  background: #007bff;
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;
}

.pagination button.active {
  background-color: #0056b3;
}

.pagination button:disabled {
  background: #ccc;
  cursor: not-allowed;
}
```

---

## 🧠 **script.js**

```javascript
const listEl = document.getElementById('list');
const paginationEl = document.getElementById('pagination');

const data = Array.from({ length: 50 }, (_, i) => `Item ${i + 1}`);
const itemsPerPage = 5;
let currentPage = 1;

function displayList(items, wrapper, rowsPerPage, page) {
  wrapper.innerHTML = "";
  page--;

  const start = page * rowsPerPage;
  const end = start + rowsPerPage;
  const paginatedItems = items.slice(start, end);

  for (let i = 0; i < paginatedItems.length; i++) {
    const item = paginatedItems[i];

    const li = document.createElement('li');
    li.textContent = item;

    wrapper.appendChild(li);
  }
}

function setupPagination(items, wrapper, rowsPerPage) {
  wrapper.innerHTML = "";

  const pageCount = Math.ceil(items.length / rowsPerPage);

  for (let i = 1; i <= pageCount; i++) {
    const btn = createPaginationButton(i);
    wrapper.appendChild(btn);
  }
}

function createPaginationButton(page) {
  const button = document.createElement('button');
  button.textContent = page;

  if (currentPage === page) button.classList.add('active');

  button.addEventListener('click', function () {
    currentPage = page;
    displayList(data, listEl, itemsPerPage, currentPage);

    const currentBtn = document.querySelector('.pagination button.active');
    if (currentBtn) currentBtn.classList.remove('active');

    button.classList.add('active');
  });

  return button;
}

displayList(data, listEl, itemsPerPage, currentPage);
setupPagination(data, paginationEl, itemsPerPage);
```

---

## ✅ **Key Concepts Practiced**

* Array slicing for pagination logic
* DOM manipulation and rendering
* Pagination button generation
* Managing active state
* Dynamic UI updates

---

## 💪 **Optional Challenges**

* Add **Next/Previous** buttons
* Highlight current page dynamically
* Paginate API data (e.g., users from `https://jsonplaceholder.typicode.com/users`)
* Add smooth transitions or animations
* Allow selecting items per page via dropdown

---

## 🧪 Try It Live

* [JSFiddle](https://jsfiddle.net/)
* [CodePen](https://codepen.io/)
* [StackBlitz](https://stackblitz.com/)

---

## 🚀 Coming Next

**Chapter 126: Final Project #6 – Lazy Loading Images with JavaScript**

We’ll learn how to defer the loading of images until they’re in the viewport — a powerful performance optimization technique.

Shall we begin **Chapter 126**?
