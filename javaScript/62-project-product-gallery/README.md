Awesome! Let’s now build something **visually rich and practical** — a **Responsive Product Gallery with Live Search and Category Filters**. This is exactly what modern eCommerce sites like Amazon or Daraz use.

---

# 🟩 Chapter 62: **Responsive Product Gallery with Search & Filter**

> 🎯 *Learn how to dynamically display products, apply search and category filters, and create a responsive UI using pure JavaScript — no frameworks.*

---

## 🎯 Learning Objectives

By the end of this chapter, students will:

* Build a responsive product gallery with dynamic cards
* Implement real-time product filtering by name (search)
* Filter by category using dropdowns or buttons
* Understand how to combine search + filters
* Practice array methods (`filter`, `map`) and DOM updates

---

## 🧠 Core JavaScript Concepts

| Concept           | Application in this Project                 |
| ----------------- | ------------------------------------------- |
| DOM Manipulation  | Dynamically create product cards            |
| Array Methods     | `filter()`, `map()` for real-time filtering |
| Event Handling    | On input change, button click               |
| Responsive Design | Combine JS with CSS Grid or Flexbox         |
| Data Structuring  | Products stored as array of objects         |

---

## 🧱 HTML Structure

```html
<h2>🛍️ Product Gallery with Search & Filter</h2>

<input type="text" id="searchInput" placeholder="Search products..." />

<select id="categoryFilter">
  <option value="all">All Categories</option>
  <option value="clothing">Clothing</option>
  <option value="electronics">Electronics</option>
  <option value="shoes">Shoes</option>
</select>

<div id="productContainer" class="grid"></div>
```

---

## 🎨 Basic CSS Idea

Use a simple grid layout:

```css
.grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(180px, 1fr));
  gap: 1rem;
}
.product-card {
  border: 1px solid #ccc;
  padding: 10px;
  border-radius: 8px;
  text-align: center;
}
```

---

## 🧩 JavaScript Logic

```js
const products = [
  { id: 1, name: "T-Shirt", price: 20, category: "clothing" },
  { id: 2, name: "Laptop", price: 800, category: "electronics" },
  { id: 3, name: "Sneakers", price: 60, category: "shoes" },
  { id: 4, name: "Smartphone", price: 600, category: "electronics" },
  { id: 5, name: "Jacket", price: 120, category: "clothing" },
];

const searchInput = document.getElementById("searchInput");
const categoryFilter = document.getElementById("categoryFilter");
const productContainer = document.getElementById("productContainer");

function renderProducts(filteredProducts) {
  productContainer.innerHTML = "";

  if (filteredProducts.length === 0) {
    productContainer.innerHTML = "<p>No products found.</p>";
    return;
  }

  filteredProducts.forEach(product => {
    const div = document.createElement("div");
    div.classList.add("product-card");
    div.innerHTML = `
      <h4>${product.name}</h4>
      <p>$${product.price}</p>
      <span>${product.category}</span>
    `;
    productContainer.appendChild(div);
  });
}

function filterProducts() {
  const searchTerm = searchInput.value.toLowerCase();
  const selectedCategory = categoryFilter.value;

  const filtered = products.filter(product => {
    const matchesSearch = product.name.toLowerCase().includes(searchTerm);
    const matchesCategory =
      selectedCategory === "all" || product.category === selectedCategory;

    return matchesSearch && matchesCategory;
  });

  renderProducts(filtered);
}

searchInput.addEventListener("input", filterProducts);
categoryFilter.addEventListener("change", filterProducts);

// Initial render
renderProducts(products);
```

---

## 🧪 Practice Tasks

| Task                                         | Skill Practiced               |
| -------------------------------------------- | ----------------------------- |
| Add price sorting (Low to High, High to Low) | Sorting arrays                |
| Add product images                           | Dynamic HTML                  |
| Display "No results found"                   | Conditional rendering         |
| Animate the product cards                    | CSS transitions or animations |

---

## 💻 Try Online

| Platform                           | Link (Manual Paste)             |
| ---------------------------------- | ------------------------------- |
| [CodePen](https://codepen.io)      | Paste HTML + CSS + JS           |
| [PlayCode.io](https://playcode.io) | Works perfectly for full UI     |
| [Replit](https://replit.com)       | Create full responsive projects |

---

## 🧠 What Students Will Master

* Search filters (live update)
* Dropdown category filtering
* DOM manipulation using JavaScript
* Clean product UI using responsive CSS
* Real-world UI/UX logic like eCommerce sites

---

## 🔮 Next Chapter (63 Preview)

We’ll now use this knowledge to build:

> 📋 **A Product Management Dashboard with Add, Edit, Delete — using LocalStorage**

Think of it as a **mini admin panel**, perfect to learn how to manage CRUD operations locally without backend.

---

Would you like to continue to **Chapter 63**?
