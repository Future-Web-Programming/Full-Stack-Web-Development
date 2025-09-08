Perfect! 🎯 Let’s dive into **Chapter 58**, where we’ll build a powerful and practical app — an **Expense Tracker** that helps users monitor their daily spending.

---

# 🟩 Chapter 58: Expense Tracker (Add, Delete, Total Calculation with Categories)

🎯 *Build a smart app to track income & expenses, manage categories, and calculate total balance — all using core JavaScript!*

---

## 🎓 Learning Objectives

By the end of this chapter, students will be able to:

* Create and manage financial transactions (income/expense)
* Dynamically render UI from JavaScript data
* Store and retrieve data from Local Storage
* Use arrays, objects, conditional logic, and DOM manipulation
* Perform real-time total calculations (Income, Expenses, Balance)

---

## 🧩 Project Overview

| Feature                | Description                              |
| ---------------------- | ---------------------------------------- |
| Add Transaction        | With title, amount, and category         |
| Track Income & Expense | By +/− values                            |
| Calculate Totals       | Income, Expense, Balance                 |
| Delete Entries         | Remove unwanted transactions             |
| Local Storage Support  | Persist data across refresh              |
| Clean UI               | Transaction list with filters (optional) |

---

## 🧱 HTML Structure

```html
<h2>💰 Expense Tracker</h2>

<form id="expenseForm">
  <input type="text" id="title" placeholder="Title (e.g. Grocery)" required />
  <input type="number" id="amount" placeholder="Amount (e.g. -500 / +1500)" required />
  <select id="category">
    <option value="food">🍽️ Food</option>
    <option value="transport">🚗 Transport</option>
    <option value="shopping">🛍️ Shopping</option>
    <option value="other">📦 Other</option>
  </select>
  <button type="submit">Add</button>
</form>

<div id="summary">
  <p>💸 Income: <span id="income">0</span></p>
  <p>🧾 Expense: <span id="expense">0</span></p>
  <p>📊 Balance: <span id="balance">0</span></p>
</div>

<ul id="transactionList"></ul>
```

---

## ⚙️ JavaScript Functionality

```js
const form = document.getElementById("expenseForm");
const titleInput = document.getElementById("title");
const amountInput = document.getElementById("amount");
const categorySelect = document.getElementById("category");

const incomeDisplay = document.getElementById("income");
const expenseDisplay = document.getElementById("expense");
const balanceDisplay = document.getElementById("balance");
const transactionList = document.getElementById("transactionList");

let transactions = JSON.parse(localStorage.getItem("transactions")) || [];

function saveToLocalStorage() {
  localStorage.setItem("transactions", JSON.stringify(transactions));
}

function calculateTotals() {
  const income = transactions
    .filter(tx => tx.amount > 0)
    .reduce((sum, tx) => sum + tx.amount, 0);
  const expense = transactions
    .filter(tx => tx.amount < 0)
    .reduce((sum, tx) => sum + tx.amount, 0);
  const balance = income + expense;

  incomeDisplay.textContent = income;
  expenseDisplay.textContent = Math.abs(expense);
  balanceDisplay.textContent = balance;
}

function renderTransactions() {
  transactionList.innerHTML = "";
  transactions.forEach((tx, index) => {
    const li = document.createElement("li");
    li.innerHTML = `
      ${tx.title} (${tx.category}) - ₹${tx.amount}
      <button onclick="deleteTransaction(${index})">❌</button>
    `;
    li.style.color = tx.amount < 0 ? "red" : "green";
    transactionList.appendChild(li);
  });
}

function deleteTransaction(index) {
  transactions.splice(index, 1);
  saveToLocalStorage();
  renderTransactions();
  calculateTotals();
}

function addTransaction(e) {
  e.preventDefault();
  const title = titleInput.value.trim();
  const amount = Number(amountInput.value.trim());
  const category = categorySelect.value;

  if (!title || !amount) {
    alert("Please fill in all fields");
    return;
  }

  transactions.push({ title, amount, category });
  saveToLocalStorage();
  renderTransactions();
  calculateTotals();
  form.reset();
}

form.addEventListener("submit", addTransaction);
renderTransactions();
calculateTotals();
```

---

## 🧠 Key JavaScript Concepts

| Concept              | Description                    |
| -------------------- | ------------------------------ |
| Array of Objects     | To store transactions          |
| Filtering & Reducing | To calculate income & expenses |
| DOM Manipulation     | Add/delete entries dynamically |
| Event Handling       | Submit, delete buttons         |
| Local Storage        | Persistent user data           |

---

## 💻 Online Code Editors

* [JSFiddle](https://jsfiddle.net)
* [CodePen](https://codepen.io)
* [Replit](https://replit.com)

---

## 🔧 Student Challenges (Practice)

| Task                             | Concept Practiced      |
| -------------------------------- | ---------------------- |
| Filter by category               | Conditional filtering  |
| Add a date field                 | Form enhancement       |
| Sort transactions by amount/date | Array sort             |
| Add a pie chart for expenses     | Optional with chart.js |
| Make it responsive               | CSS Flex/Grid          |

---

## 📚 Recap

✅ In this chapter, students learned to:

* Add and manage financial transactions
* Use array methods to calculate totals
* Validate form inputs
* Update the DOM dynamically
* Use Local Storage for persistence

---

## 🔮 Coming Up Next

In **Chapter 59**, we will build:

> **A Quiz App — With Score Tracking, Next/Previous Buttons, and Results Screen 🧠**

Ready to make learning fun for users? Let me know and I’ll prepare Chapter 59!
