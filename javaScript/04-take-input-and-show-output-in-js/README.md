# 🟩 Chapter 4: Input & Output in JavaScript

**(Build Your First Interactive Greeting App!)**


## 🧠 What is Input & Output?

* **Input** = Taking data **from the user**
* **Output** = Showing data **to the user**


---

## 📥 1. Taking Input from User – `prompt()`

```js
let name = prompt("What is your name?");
```

* A pop-up appears in the browser.
* Whatever the user types gets stored in the `name` variable (as a **string**).

✅ Example:

```js
let city = prompt("Enter your city:");
console.log("You live in: " + city);
```

---

## 📤 2. Showing Output to the User

| Method             | Use                     | When to Use                 |
| ------------------ | ----------------------- | --------------------------- |
| `console.log()`    | Shows output in console | For debugging               |
| `alert()`          | Shows a pop-up          | For quick messages          |
| `document.write()` | Writes directly on page | For simple output on screen |

---

### 🔍 Examples:

```js
console.log("This is console output");  // Developer use

alert("Welcome to our website!");       // Pop-up message

document.write("Thank you for visiting!");  // On the webpage
```

---

## 🚀 3. Build Your First Mini Project: **Greeting App**

> 🎯 Let’s build an app that greets the user using their name!

### 🔸 Step-by-Step Code:

```js
// Step 1: Ask for user's name
let userName = prompt("What is your name?");

// Step 2: Create a greeting message
let message = "Hello, " + userName + "! Welcome to Future Programming.";

// Step 3: Show the message
alert(message);
console.log(message);
document.write("<h2>" + message + "</h2>");
```

> ✅ Try this in: [Replit](https://replit.com/), [PlayCode](https://playcode.io/), or Chrome DevTools

---

## 🧪 Practice Task: Make Your Own Input App

Create a small form using `prompt()` to collect:

* Name
* Age
* Favorite programming language

Then show all values using:

* `alert()`
* `console.log()`
* `document.write()`

> 💡 Hint:

```js
let name = prompt("Your name?");
let age = prompt("Your age?");
let lang = prompt("Favorite programming language?");
```

---

## 🔍 Important Notes

### 🔸 All data from `prompt()` is string

Even if the user types `25`, it’s stored as `"25"` (a string).

You can convert it to a number:

```js
let age = Number(prompt("Enter your age:"));
```

> ✅ You’ll learn about type conversion in Chapter 6.

---

## ❌ Common Mistakes

| Mistake                                       | Why it's wrong                                        |
| --------------------------------------------- | ----------------------------------------------------- |
| Forgetting to use quotes in `prompt()`        | `prompt(Enter name)` ❌ → Use `prompt("Enter name")` ✅ |
| Using `document.write()` after the page loads | It may overwrite the whole page                       |
| Expecting number from `prompt()`              | Always string unless converted manually               |

---

## 🧠 Student Q\&A

> ❓ Where does `console.log()` output go?
> ✅ It appears in **browser console** (`Ctrl + Shift + J`)

> ❓ Why use `alert()` instead of `console.log()`?
> ✅ `alert()` is for **user**, `console.log()` is for **developer**

> ❓ Is `prompt()` used in real projects?
> ✅ Not usually. It's for learning/demo purposes. Real apps use forms.

---

## 📚 Homework

1. Create a **Greeting App** with:

   * User's name
   * Age
   * Favorite subject

2. Show result using:

   * `alert()`
   * `console.log()`
   * `document.write()`

3. Bonus: Ask user’s city and show a welcome message based on it.
