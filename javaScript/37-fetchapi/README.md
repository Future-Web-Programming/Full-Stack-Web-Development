Perfect! 🎉 Now that we understand **JSON**, we’re ready to bring our JavaScript skills to life by **connecting to the internet** and **loading real data** from APIs using...

---

# 🟩 Chapter 37: Fetch API – Connecting Your JavaScript App to the Web

🌐 *Make Real-Time Data Requests in JavaScript*

---

## 🎯 Learning Goals

By the end of this chapter, students will:

* Understand what an **API** is
* Learn how to make **GET** requests using `fetch()`
* Handle **JSON data responses**
* Practice fetching and displaying live data
* Understand **promises** and asynchronous operations

---

## 🧠 1. What is an API?

**API (Application Programming Interface)** allows two apps to talk to each other.

### Real-world examples:

* Weather App → Weather API
* News App → News API
* eCommerce App → Product API
* Currency Converter → Exchange Rate API

> ✅ Your browser app can use `fetch()` to call a server and get data in JSON format.

---

## 🔧 2. Introduction to `fetch()`

```js
fetch("https://api.example.com/data")
  .then(response => response.json())
  .then(data => {
    console.log(data);
  });
```

### 🔄 What happens here?

1. ✅ `fetch()` makes a request to the server
2. ✅ `.then(response => response.json())` parses JSON response
3. ✅ `.then(data => {...})` gives you the actual usable data

---

## 📦 3. Example – Get JSON Data from a Fake API

Let’s use [JSONPlaceholder](https://jsonplaceholder.typicode.com/) – a free fake API.

```js
fetch("https://jsonplaceholder.typicode.com/users")
  .then(res => res.json())
  .then(data => {
    for (let user of data) {
      console.log(user.name + " - " + user.email);
    }
  })
  .catch(err => console.log("Error:", err));
```

---

## ⚠️ 4. Handling Errors with `.catch()`

Always handle errors in network requests.

```js
fetch("https://wrong-api.com/data")
  .then(res => res.json())
  .then(data => console.log(data))
  .catch(error => console.error("Something went wrong:", error));
```

---

## 🔍 5. Working with DOM + Fetch

Let’s display data in the HTML page.

```html
<ul id="userList"></ul>

<script>
fetch("https://jsonplaceholder.typicode.com/users")
  .then(res => res.json())
  .then(users => {
    let list = document.getElementById("userList");
    users.forEach(user => {
      let li = document.createElement("li");
      li.textContent = `${user.name} - ${user.email}`;
      list.appendChild(li);
    });
  });
</script>
```

---

## 🧪 6. Practice Task

Fetch posts from this API and log the title of each post.

```js
fetch("https://jsonplaceholder.typicode.com/posts")
  .then(res => res.json())
  .then(posts => {
    posts.forEach(post => {
      console.log(post.title);
    });
  });
```

---

## 🔄 7. GET vs POST (Basic Intro)

* `GET` – Fetch/read data
* `POST` – Send/create data (coming in next chapter)

```js
// Example GET
fetch("https://api.com/products");

// Example POST (next chapter)
fetch("https://api.com/products", {
  method: "POST",
  headers: {
    "Content-Type": "application/json"
  },
  body: JSON.stringify({ name: "Shirt", price: 25 })
});
```

---

## 🛠 Mini Project: User Directory Viewer

1. Fetch data from `https://jsonplaceholder.typicode.com/users`
2. Display name, email, city in the DOM

```html
<ul id="users"></ul>

<script>
fetch("https://jsonplaceholder.typicode.com/users")
  .then(res => res.json())
  .then(data => {
    let ul = document.getElementById("users");
    data.forEach(user => {
      let li = document.createElement("li");
      li.innerHTML = `<strong>${user.name}</strong> from ${user.address.city} <br> Email: ${user.email}`;
      ul.appendChild(li);
    });
  });
</script>
```

---

## 🌐 More Public APIs to Try

* 🔗 [https://jsonplaceholder.typicode.com](https://jsonplaceholder.typicode.com)
* 🌦 [https://openweathermap.org/api](https://openweathermap.org/api)
* 📰 [https://newsapi.org](https://newsapi.org)
* 🪙 [https://api.coindesk.com/v1/bpi/currentprice.json](https://api.coindesk.com/v1/bpi/currentprice.json)

---

## 🧪 Practice Challenges

1. Display a list of blog post titles
2. Create a dropdown of user names from API data
3. Build a basic weather viewer with hardcoded city
4. Add error handling: show alert if fetch fails

---

## 💻 Online Editors

* [JSFiddle](https://jsfiddle.net/)
* [CodeSandbox](https://codesandbox.io/)
* [Replit](https://replit.com)

---

## 🎬 YouTube Lecture Plan

1. Quick API explanation
2. `fetch()` in console: live demo
3. Fetch + display names on page
4. Mini Project: API user directory
5. Challenge: student to fetch blog posts and display

---

## ✅ Summary

| Concept         | Description                        |
| --------------- | ---------------------------------- |
| API             | Data source for your JS apps       |
| fetch()         | Makes a network request            |
| .json()         | Converts response to usable format |
| .then/.catch    | Handles success and error          |
| JSONPlaceholder | Fake API for practice              |

---

## 🔜 Coming Next:

**Chapter 38 – POST Requests with fetch(): Sending Data to the Server**

You’ll learn how to build forms and **send data to an API**, like registering a user or submitting a comment.

---

Ready to move on with **Chapter 38: POST Requests in JavaScript**?
