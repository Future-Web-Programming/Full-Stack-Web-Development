Great! Chapter 49 will help your students **master working with JSON**, especially when receiving or sending data via APIs — a core skill in real-world JavaScript development.

---

# 🟩 Chapter 49: **Working with JSON in JavaScript**

🧠 *Learn how to parse, stringify, and work with JSON in web projects.*

---

## 🎯 Learning Objectives

By the end of this chapter, students will:

* Understand what **JSON** is and why it's used
* Learn how to **convert JSON to JavaScript** objects (`parse`)
* Learn how to **convert JavaScript objects to JSON** (`stringify`)
* Practice handling **nested JSON**
* Store JSON in **localStorage**
* Create a small project: *Todo List App with JSON + localStorage*

---

## 📦 What is JSON?

> **JSON** stands for **JavaScript Object Notation** — it's a lightweight data format used to exchange data between server and client.

### 🧾 Example of JSON:

```json
{
  "name": "Ali",
  "age": 24,
  "skills": ["HTML", "CSS", "JavaScript"]
}
```

It looks like a JavaScript object, but it's actually a **string**!

---

## 🔄 JSON vs JavaScript Object

| Feature   | JavaScript Object    | JSON                      |
| --------- | -------------------- | ------------------------- |
| Data Type | Object               | String                    |
| Used In   | JavaScript only      | JavaScript, APIs, storage |
| Quotes    | Keys can be unquoted | Keys *must* be in quotes  |

---

## 🔍 `JSON.parse()` – Convert JSON to JS Object

```js
const jsonData = '{"name":"Fatima","age":22}';
const user = JSON.parse(jsonData);
console.log(user.name); // Fatima
```

---

## 📝 `JSON.stringify()` – Convert JS Object to JSON

```js
const user = { name: "Fatima", age: 22 };
const json = JSON.stringify(user);
console.log(json); // '{"name":"Fatima","age":22}'
```

---

## 🧩 Nested JSON Example

```json
{
  "user": {
    "name": "Ali",
    "location": {
      "city": "Lahore",
      "country": "Pakistan"
    }
  }
}
```

```js
const data = `{
  "user": {
    "name": "Ali",
    "location": {
      "city": "Lahore",
      "country": "Pakistan"
    }
  }
}`;

const obj = JSON.parse(data);
console.log(obj.user.location.city); // Lahore
```

---

## 💽 Storing JSON in localStorage

```js
const user = { name: "Ayesha", age: 21 };

localStorage.setItem("user", JSON.stringify(user));

const savedUser = JSON.parse(localStorage.getItem("user"));
console.log(savedUser.name); // Ayesha
```

---

## 💻 Mini Project: Todo List App using JSON + localStorage

### 🖼️ HTML

```html
<input type="text" id="todo-input" placeholder="Enter todo">
<button onclick="addTodo()">Add</button>
<ul id="todo-list"></ul>
```

### 🧠 JavaScript

```js
let todos = JSON.parse(localStorage.getItem("todos")) || [];

function renderTodos() {
  document.getElementById("todo-list").innerHTML = "";
  todos.forEach((todo, index) => {
    document.getElementById("todo-list").innerHTML += `
      <li>${todo} <button onclick="deleteTodo(${index})">Delete</button></li>
    `;
  });
}

function addTodo() {
  let input = document.getElementById("todo-input");
  todos.push(input.value);
  input.value = "";
  localStorage.setItem("todos", JSON.stringify(todos));
  renderTodos();
}

function deleteTodo(index) {
  todos.splice(index, 1);
  localStorage.setItem("todos", JSON.stringify(todos));
  renderTodos();
}

renderTodos();
```

---

## 📚 Summary Table

| Method                   | Description                     |
| ------------------------ | ------------------------------- |
| `JSON.stringify()`       | Convert object → JSON string    |
| `JSON.parse()`           | Convert JSON string → JS object |
| `localStorage.setItem()` | Save data to browser storage    |
| `localStorage.getItem()` | Retrieve data from storage      |

---

## 🌍 Online Practice

* [PlayCode.io](https://playcode.io)
* [JSFiddle](https://jsfiddle.net)
* [Replit](https://replit.com)

---

## 🎓 Challenge Exercises

| Task                                                | Description            |
| --------------------------------------------------- | ---------------------- |
| Create a student object and save it in localStorage | Use `JSON.stringify()` |
| Load student data on page load                      | Use `JSON.parse()`     |
| Store an array of products                          | Practice nested JSON   |
| Fetch user data and display it                      | Combine JSON + fetch   |

---

## 👨‍🏫 YouTube Teaching Tips

* Show how JSON comes from real APIs
* Use browser DevTools → Application tab → localStorage
* Compare real object vs JSON side-by-side
* Show common error: forgetting to stringify before saving

---

## ✅ Real-World Applications of JSON

* Saving settings, preferences, or login state
* Transferring user data to/from servers
* Reading config files
* Communicating between frontend ↔ backend

---

## ⏭️ Coming Up Next:

**Chapter 50: Introduction to DOM (Document Object Model)**
Learn how to access and manipulate HTML using JavaScript!

Would you like to continue with Chapter 50?
