Great! Let’s take this course to the next level. In this chapter, we’ll focus on **JSON** — the heart of all modern web APIs — and build a **GitHub User Finder App** using the Fetch API. This is going to be a *real-world* and *career-ready* project.

---

# 🟩 Chapter 70: **Mastering JSON & GitHub API – Build GitHub User Finder App 👨‍💻**

> 🎯 *Learn how to work with JSON data and real APIs by building an application that fetches and displays GitHub user profiles.*

---

## 📚 What You'll Learn

| ✅ Topics                             | ✅ Skills Developed                     |
| ------------------------------------ | -------------------------------------- |
| What is JSON?                        | JSON parsing and stringifying          |
| Working with APIs using Fetch API    | Understanding GitHub REST API          |
| Error handling with `.catch()`       | Real-world API integration             |
| Building a clean user interface (UI) | Web dev skills (HTML, CSS, JS synergy) |

---

## 🔍 What is JSON?

**JSON** stands for:

> JavaScript Object Notation

It is the **standard format** for sending and receiving data between a web browser and a server.

### ✅ JSON Example:

```json
{
  "name": "Future Programming",
  "followers": 1200,
  "repos": 15,
  "is_active": true
}
```

In JS, you parse JSON like this:

```js
const jsonData = '{"name":"Ali"}';
const user = JSON.parse(jsonData);
console.log(user.name); // Ali
```

And stringify like this:

```js
const obj = { course: "JavaScript" };
const jsonString = JSON.stringify(obj);
```

---

## 💡 Project: GitHub User Finder App

### 📦 Features:

* Search any GitHub user
* Show profile picture, bio, location, public repos, and followers
* Link to their profile

---

## 📁 Folder Structure

```
github-user-finder/
│
├── index.html
├── style.css
└── app.js
```

---

## 🔤 Step 1: HTML Structure

```html
<!-- index.html -->
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <title>GitHub Finder</title>
  <link rel="stylesheet" href="style.css" />
</head>
<body>
  <div class="container">
    <h1>🔍 GitHub User Finder</h1>
    <input type="text" id="username" placeholder="Enter GitHub username" />
    <button onclick="searchUser()">Search</button>
    <div id="result"></div>
  </div>

  <script src="app.js"></script>
</body>
</html>
```

---

## 🎨 Step 2: CSS Styling

```css
/* style.css */
body {
  font-family: sans-serif;
  background: #f4f4f4;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
}

.container {
  text-align: center;
  background: white;
  padding: 30px;
  border-radius: 12px;
  box-shadow: 0 0 10px #ccc;
}

input {
  padding: 10px;
  width: 250px;
  margin-top: 10px;
}

button {
  padding: 10px 20px;
  margin-left: 10px;
  background: black;
  color: white;
  border: none;
  cursor: pointer;
}
```

---

## 🔌 Step 3: JavaScript Logic using Fetch API

```js
// app.js
function searchUser() {
  const username = document.getElementById('username').value;
  const url = `https://api.github.com/users/${username}`;

  fetch(url)
    .then(res => res.json())
    .then(data => {
      if (data.message === "Not Found") {
        document.getElementById('result').innerHTML = "<p style='color:red;'>User not found</p>";
        return;
      }

      const html = `
        <img src="${data.avatar_url}" width="120" style="border-radius:50%;" />
        <h2>${data.name}</h2>
        <p>📍 ${data.location || 'Not specified'}</p>
        <p>👥 Followers: ${data.followers}</p>
        <p>📁 Public Repos: ${data.public_repos}</p>
        <a href="${data.html_url}" target="_blank">Visit Profile</a>
      `;
      document.getElementById('result').innerHTML = html;
    })
    .catch(error => {
      console.error('Error:', error);
      document.getElementById('result').innerHTML = "<p style='color:red;'>Something went wrong</p>";
    });
}
```

---

## 🔑 API Info

No API key needed for GitHub's public user data API.

Example URL:
`https://api.github.com/users/futureprogrammingofficial`

---

## 📦 Online Editors (for students)

* [CodePen.io](https://codepen.io)
* [JSFiddle.net](https://jsfiddle.net)
* [StackBlitz.com](https://stackblitz.com)
* [Replit.com](https://replit.com)

---

## 🔁 Concept Recap

| 🔸 Concept       | 💬 Description                          |
| ---------------- | --------------------------------------- |
| JSON             | Data format used in most APIs           |
| Fetch API        | Modern method for AJAX calls            |
| GitHub API       | Public data available from GitHub users |
| DOM Manipulation | Displaying API data in the browser      |

---

## 🧪 Student Homework Task

> ✅ Rebuild this GitHub Finder App with the following extra features:

* Display company, email, or blog if available
* If user is not found, show red alert box
* Clear search field after each search

---

## 🔮 Next Chapter Preview: Chapter 71

> Ready to **connect frontend to backend**? In Chapter 71, we’ll cover `POST` requests and create a **Contact Form App** with backend integration using [Formspree](https://formspree.io/) or Firebase.

---

Would you like to continue with
👉 **Chapter 71: Contact Form App – POST Requests & Form Handling**?
