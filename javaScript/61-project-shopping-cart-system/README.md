Awesome! Let’s now build a **real-world eCommerce project** — a mini **Shopping Cart System** using only **Vanilla JavaScript**, no frameworks or libraries.

---

# 🟩 Chapter 61: **Build a Shopping Cart System in JavaScript**

> 🛒 *Learn how to add products to cart, manage quantities, calculate total price, and dynamically update the UI — just like a real online store!*

---

## 🎯 Learning Objectives

By the end of this chapter, students will be able to:

* Create a product listing dynamically
* Add items to a cart and manage quantities
* Calculate and display total price
* Remove items from cart
* Use arrays and objects to manage data
* Update the DOM based on cart changes

---

## 🧠 Core JavaScript Concepts

| Concept                    | Application in this Project          |
| -------------------------- | ------------------------------------ |
| Arrays & Objects           | Store product and cart data          |
| DOM Manipulation           | Render products & cart items         |
| Event Handling             | Add to cart, remove, update quantity |
| `forEach`, `map`, `filter` | Iterate and manage state             |
| Dynamic UI rendering       | Reflect real-time cart changes       |

---

## 🧱 Project Structure

### ✅ HTML Structure

```html
<h2>🛍️ Simple JavaScript Shopping Cart</h2>

<div class="container">
  <div id="productList" class="products"></div>
  <div class="cart">
    <h3>Your Cart 🛒</h3>
    <ul id="cartItems"></ul>
    <p>Total: $<span id="totalPrice">0.00</span></p>
  </div>
</div>
```

---

## 🎨 Optional CSS (Basic Idea)

* Use Flexbox to arrange `productList` and `cart` side-by-side
* Style `.product`, `.cart-item`, and `button` for better UX

---

## 🧩 JavaScript Code

```js
const products = [
  { id: 1, name: "T-Shirt", price: 15 },
  { id: 2, name: "Jeans", price: 40 },
  { id: 3, name: "Sneakers", price: 60 },
];

let cart = [];

function renderProducts() {
  const productList = document.getElementById("productList");
  productList.innerHTML = "";

  products.forEach(product => {
    const div = document.createElement("div");
    div.classList.add("product");
    div.innerHTML = `
      <h4>${product.name}</h4>
      <p>$${product.price}</p>
      <button onclick="addToCart(${product.id})">Add to Cart</button>
    `;
    productList.appendChild(div);
  });
}

function addToCart(productId) {
  const product = products.find(p => p.id === productId);
  const cartItem = cart.find(item => item.id === productId);

  if (cartItem) {
    cartItem.quantity++;
  } else {
    cart.push({ ...product, quantity: 1 });
  }

  renderCart();
}

function renderCart() {
  const cartList = document.getElementById("cartItems");
  const totalSpan = document.getElementById("totalPrice");
  cartList.innerHTML = "";

  let total = 0;

  cart.forEach(item => {
    total += item.price * item.quantity;

    const li = document.createElement("li");
    li.classList.add("cart-item");
    li.innerHTML = `
      ${item.name} x${item.quantity} = $${item.price * item.quantity}
      <button onclick="removeFromCart(${item.id})">❌</button>
    `;
    cartList.appendChild(li);
  });

  totalSpan.textContent = total.toFixed(2);
}

function removeFromCart(productId) {
  cart = cart.filter(item => item.id !== productId);
  renderCart();
}

renderProducts();
```

---

## ✅ Bonus Ideas (Advanced Features for Practice)

| Feature                      | Concepts Reinforced      |
| ---------------------------- | ------------------------ |
| Quantity + / – buttons       | DOM event targeting      |
| Persist cart in localStorage | Data persistence         |
| Discounts or coupon codes    | Conditional logic, forms |
| Add product images           | Dynamic HTML rendering   |
| Create product detail modal  | Event delegation         |

---

## 💻 Try It Online

| Platform                              | Link Example               |
| ------------------------------------- | -------------------------- |
| 🧪 [PlayCode.io](https://playcode.io) | Full HTML, CSS, JS support |
| 🧪 [CodePen](https://codepen.io)      | Great for live preview     |
| 🧪 [JSFiddle](https://jsfiddle.net)   | Easy to fork and edit      |
| 🧪 [Replit](https://replit.com)       | Good for full file system  |

---

## 🧪 Practice Tasks

1. Add a product filter by price
2. Create a “Clear Cart” button
3. Add localStorage support for cart persistence
4. Show item image and description
5. Animate add-to-cart interaction

---

## 📚 Recap

✅ In this chapter, students learned how to:

* Build a shopping cart system from scratch
* Use arrays and objects to manage state
* Dynamically render the UI based on data
* Handle real-time updates to cart and total price

---

## 🔮 Coming Up Next

In **Chapter 62**, we’ll build:

> 📦 **A Responsive Product Gallery with Search and Category Filters** — great for learning how to build interactive UI with live filtering!

Shall we move on to Chapter 62?
