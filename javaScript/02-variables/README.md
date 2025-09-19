# Full Stack Web Development with javaScript

[![future Programming](https://yt3.googleusercontent.com/jjFcQvztsZHkTCW5J9iS-TIJMka4keJvmr3GFZt58ARkAfPTHoHKe00DyG3c5Z1As6EXYqp2MQ=s160-c-k-c0x00ffffff-no-rj)](https://www.youtube.com/@futureprogramming)



# ✅ Chapter 2: Storing the Information You Need — **Variables**

## 🔥 1. Why Variables Are So Important

> Imagine a computer trying to remember your name, age, or score in a game.

We use **variables** to *store* and *label* data for later use.

Think of a variable like a **box with a label**:

```js
let userName = "Ali";
```

You're saying: “Hey JavaScript, here’s a box called `userName`, and it contains the word *Ali*.”

---

## 🧠 2. What is a Variable?

A **variable** is:

* A **named container** for data
* Used to **store** values (numbers, strings, objects, etc.)
* Can be **reused** and **updated**

✅ Think of it as:
“Store something → give it a name → use it anytime”

---

Example:

```js
let name = "Bob";
let isLoggedIn = true;
let passingMarksIs = 35;
```
[![Variable Example](https://developer.mozilla.org/en-US/docs/Learn_web_development/Core/Scripting/Variables/boxes.png)](https://developer.mozilla.org/en-US/docs/Learn_web_development/Core/Scripting/Variables)


## 📦 4. Declaring Variables

### 🔹 Using `let`

```js
let age = 25;
console.log(age);  // Output: 25
```

* `let` allows you to change the value later

### 🔹 Using `const`

```js
const country = "Pakistan";
console.log(country);
```

* `const` means the value **cannot change** once assigned

### 🔹 Using `var` (Old-school, avoid unless needed)

```js
var city = "Karachi";
console.log(city);
```

> ✅ Use `let` and `const` in modern JavaScript.

---

## 🏷️ 5. Naming Rules for Variables

✅ Valid:

* `userName`
* `total_price`
* `_score`
* `$value`

❌ Invalid:

* `1name` → can’t start with a number
* `full name` → no spaces
* `let` → reserved keyword

> 🐫 Use `camelCase` for most variables: `userEmail`, `firstName`, etc.

---

## 🧠 6. Variable Types (Data Types)

| Type          | Example         | Description               |
| ------------- | --------------- | ------------------------- |
| **String**    | `"Ali"`         | Text (in quotes)          |
| **Number**    | `25`            | Any numeric value         |
| **Boolean**   | `true`, `false` | Yes/No or On/Off          |
| **Undefined** | —               | Declared but not assigned |
| **Null**      | `null`          | Empty value (intended)    |

---

## 🎯 7. Declaring & Initializing

```js
let myName; // Declared, not initialized
console.log(myName); // undefined

myName = "Ali"; // Now initialized
console.log(myName); // Ali
```

Or directly:

```js
let myAge = 21;
```

---

## ♻️ 8. Updating Variables

```js
let city = "Lahore";
city = "Islamabad"; // Allowed with let
```

```js
const PI = 3.14;
PI = 3.14159; // ❌ Error! const cannot be changed
```

---

## 🧱 9. Scope — Where Can You Access Variables?

### 🔹 Global Scope

```js
let name = "Ali";
// Accessible anywhere in the file
```

### 🔹 Function Scope (local)

```js
function greet() {
  let message = "Hello!";
  console.log(message);
}
greet();
// console.log(message); ❌ Error — not accessible here
```

### 🔹 Block Scope

```js
if (true) {
  let secret = "hidden";
}
// console.log(secret); ❌ Not accessible
```

> `let` and `const` are block-scoped; `var` is function-scoped.

---


## 🔁 11. Re-declaration vs Re-assignment

| Keyword | Re-declare? | Re-assign? |
| ------- | ----------- | ---------- |
| var     | ✅ Yes       | ✅ Yes      |
| let     | ❌ No        | ✅ Yes      |
| const   | ❌ No        | ❌ No       |

---

## 🧪 12. Practice Time!

### Task:

```js
let myName = "Sara";
let myAge = 22;
let isLearningJS = true;

console.log(myName);
console.log(myAge);
console.log(isLearningJS);
```

---

## ❌ 13. Common Mistakes

| Code                  | Problem                       |
| --------------------- | ----------------------------- |
| `let 1name = "Ali"`   | Can't start with number       |
| `const city;`         | Must assign value immediately |
| `let place = Karachi` | `"Karachi"` must be in quotes |

---

## 🎓 14. Student FAQs

**Q: Can I change a `const` variable?**
A: ❌ No, that’s why it’s called a constant.

**Q: Why use `let` instead of `var`?**
A: ✅ `let` is block-scoped and safer — less room for bugs.

**Q: Can I name a variable `for`?**
A: ❌ No, it’s a reserved word.

---

## 🎯 15. Mini Assignment

1. Declare 5 variables:

   * `fullName`
   * `age`
   * `courseName`
   * `isSubscribed`
   * `country`

2. Print them using `console.log()`

3. Change values and observe results

---

## 🎁 16. Bonus Practice

```js
let a = 10;
let b = 5;

console.log("Sum:", a + b);
console.log("Difference:", a - b);
console.log("Product:", a * b);
console.log("Division:", a / b);
```
