# 📘 Chapter 8: Mastering Loops in JavaScript (In-Depth)

## 🧠 Introduction

Loops allow us to **repeat tasks** efficiently. In JavaScript, they’re the building blocks for iteration — essential in arrays, tables, games, DOM manipulation, and more.

---

## 🟢 Basic Loop Types

### 🔁 1. `for` Loop

```js
for (let i = 0; i < 5; i++) {
  console.log("i =", i);
}
```

---

### 🔄 2. `while` Loop

```js
let i = 0;
while (i < 5) {
  console.log("i =", i);
  i++;
}
```

---

### 🔂 3. `do...while` Loop

```js
let i = 0;
do {
  console.log("i =", i);
  i++;
} while (i < 5);
```

---

## ✅ Real-World Mini Project: Table Generator

```js
let num = 5;
for (let i = 1; i <= 10; i++) {
  console.log(`${num} x ${i} = ${num * i}`);
}
```

---

## 🧨 Break and Continue — Powerful Loop Controls

### 🔴 `break`: Exit the loop immediately

```js
for (let i = 1; i <= 10; i++) {
  if (i === 5) break;
  console.log(i);
}
```

📤 Output: `1 2 3 4`

---

### 🟡 `continue`: Skip current iteration

```js
for (let i = 1; i <= 5; i++) {
  if (i === 3) continue;
  console.log(i);
}
```

📤 Output: `1 2 4 5`

---

## 🔄 Looping Through Arrays

```js
let colors = ["red", "green", "blue"];
for (let i = 0; i < colors.length; i++) {
  console.log(colors[i]);
}
```

---

## 🔄 `for...of`: Simpler Loop for Arrays and Strings

```js
let fruits = ["apple", "banana", "mango"];
for (let fruit of fruits) {
  console.log(fruit);
}
```

### 👉 Works on: Arrays, Strings, Sets, Maps (iterables)

```js
for (let char of "Future") {
  console.log(char);
}
```

---

## ⚠️ `for...in`: Looping Through Object Properties

```js
let user = {
  name: "Ali",
  age: 22,
  country: "Pakistan"
};

for (let key in user) {
  console.log(`${key}: ${user[key]}`);
}
```

⚠️ Do **not** use `for...in` for arrays — it includes unwanted keys!

---

## 🧠 Bonus: Difference Between `for...in` vs `for...of`

```js
let arr = [10, 20, 30];
arr.extra = "value";

for (let key in arr) {
  console.log("for...in:", key); // includes indexes and custom keys
}

for (let val of arr) {
  console.log("for...of:", val); // only values
}
```

---

## 🔍 Looping Through Objects with `Object.entries()`

```js
let product = {
  name: "Laptop",
  price: 1500,
  brand: "HP"
};

for (let [key, value] of Object.entries(product)) {
  console.log(`${key}: ${value}`);
}
```

✅ Also use:

* `Object.keys(obj)` → all keys
* `Object.values(obj)` → all values

---

## 🔁 Nested Loops

```js
for (let i = 1; i <= 2; i++) {
  for (let j = 1; j <= 3; j++) {
    console.log(`i=${i}, j=${j}`);
  }
}
```

---

## 🚩 Labeled Loops (Advanced Use)

```js
outer: for (let i = 1; i <= 3; i++) {
  for (let j = 1; j <= 3; j++) {
    if (i === 2 && j === 2) break outer;
    console.log(`i=${i}, j=${j}`);
  }
}
```

---

## 🧪 Practice Mini Projects

### ✅ 1. Skip Even Numbers

```js
for (let i = 1; i <= 10; i++) {
  if (i % 2 === 0) continue;
  console.log(i);
}
```

---

### ✅ 2. Stop at First Match

```js
let items = ["pen", "notebook", "eraser", "mouse"];
for (let item of items) {
  if (item === "eraser") {
    console.log("Found!");
    break;
  }
}
```

---

### ✅ 3. Print Object Details

```js
let car = { brand: "Toyota", model: "Corolla", year: 2022 };

for (let key in car) {
  console.log(`${key}: ${car[key]}`);
}
```

---

### ✅ 4. Use `for...of` with Strings

```js
let name = "Future";
for (let char of name) {
  console.log(char);
}
```

---

## 🧠 Final Tips

| Loop Type          | Best For                   |
| ------------------ | -------------------------- |
| `for`              | Custom steps, index access |
| `while`            | Unknown iterations         |
| `for...of`         | Arrays, Strings, Sets      |
| `for...in`         | Objects (keys)             |
| `Object.entries()` | Key + Value of objects     |

---

## 🏁 Homework Tasks

1. Create an app that skips every 3rd item using `continue`
2. Count only completed tasks from a To-Do list using a loop
3. Display user info using `Object.entries`
4. Reverse a string using `for...of`
5. Detect and break if a secret code appears in a loop
