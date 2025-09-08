Perfect! Here's the detailed Markdown for:

---

# 🟪 Chapter 86: Recursion in JavaScript 🔁

---

## 🎯 **Objective**

Learn what **recursion** is, when to use it, how it works under the hood, and how to **solve real-world problems** with recursive functions.

We'll also compare it with loops and see where **recursion shines** and where it should be avoided.

---

## 🔄 What is Recursion?

**Recursion** is when a function **calls itself** in order to solve a problem.

### 📦 Example:

```js
function greet(name) {
  if (name.length === 0) return;
  console.log("Hello " + name);
  greet(name.slice(1));
}

greet("John");
// Hello John
// Hello ohn
// Hello hn
// Hello n
```

---

## 🔍 Basic Structure of a Recursive Function

Every recursive function has **two parts**:

1. **Base Case** – When to stop calling itself (important to avoid infinite loop)
2. **Recursive Case** – When the function calls itself

```js
function recurse() {
  if (baseCondition) return;     // Base case
  recurse();                     // Recursive call
}
```

---

## 📐 Visual Example: Countdown

```js
function countdown(n) {
  if (n === 0) {
    console.log("Done!");
    return;
  }
  console.log(n);
  countdown(n - 1); // Recursive call
}

countdown(5);
```

⏬ Output:

```
5
4
3
2
1
Done!
```

---

## ✅ Real-World Examples of Recursion

| Problem                     | Use Case                |
| --------------------------- | ----------------------- |
| 🔢 Factorial                | Math/Combinatorics      |
| 🧮 Fibonacci Numbers        | Series Calculations     |
| 🗂️ Folder/File Tree Search | File system traversal   |
| 🧬 JSON Deep Parsing        | Nested object structure |
| 🌳 Binary Tree Traversal    | Data structures         |

---

## 🧪 Factorial with Recursion

```js
function factorial(n) {
  if (n === 1) return 1;
  return n * factorial(n - 1);
}

console.log(factorial(5)); // 120
```

> 🔄 `factorial(5)` calls `factorial(4)` which calls `factorial(3)` ... until it hits `factorial(1)`

---

## 🔁 Recursion vs Loop

### 🔄 Recursion:

```js
function print(n) {
  if (n === 0) return;
  console.log(n);
  print(n - 1);
}
```

### 🔁 Loop:

```js
for (let i = 5; i > 0; i--) {
  console.log(i);
}
```

| Feature     | Recursion         | Loop             |
| ----------- | ----------------- | ---------------- |
| Readability | Great for trees   | Great for linear |
| Stack Usage | More memory       | Efficient        |
| Complexity  | Elegant, abstract | Easy to debug    |

---

## ⚠️ Common Mistakes

| Mistake              | How to Fix                                  |
| -------------------- | ------------------------------------------- |
| ❌ No base case       | Add a stopping condition                    |
| ❌ Infinite recursion | Ensure you're moving toward base case       |
| ❌ Stack Overflow     | Avoid too many nested calls or large inputs |

---

## 🧠 Call Stack Explained with Recursion

Let’s trace `factorial(3)`:

```
Call: factorial(3)
  ↳ factorial(2)
    ↳ factorial(1)
      ↳ returns 1
    ↳ returns 2 * 1 = 2
  ↳ returns 3 * 2 = 6
```

🧠 JavaScript manages all these calls in a **call stack** – LIFO (Last In, First Out).

---

## 🧪 Practice Exercise

### 🔁 Fibonacci Series (Recursive)

```js
function fibonacci(n) {
  if (n < 2) return n;
  return fibonacci(n - 1) + fibonacci(n - 2);
}

console.log(fibonacci(6)); // 8
```

> But it's **inefficient** for large numbers — better to use **memoization** or **loops** for performance.

---

## 📦 Advanced Use: Traversing Nested Objects

```js
const data = {
  name: "A",
  children: [
    { name: "B", children: [] },
    { name: "C", children: [
      { name: "D", children: [] }
    ]}
  ]
};

function traverse(node) {
  console.log(node.name);
  node.children.forEach(traverse);
}

traverse(data);
```

> Great example for DOM traversal, file systems, trees, etc.

---

## 🧪 Try It Online

Test recursive functions live on:

* [PlayCode.io](https://playcode.io/)
* [JSFiddle](https://jsfiddle.net)
* [CodePen.io](https://codepen.io/)

---

## 📘 Homework

1. Write a recursive function to reverse a string
2. Calculate power: `pow(x, n)` using recursion
3. Count the total nodes in a nested object
4. Write a recursive function that flattens an array

---

## 🧠 Interview Tip

> ❓ *“What’s the difference between recursion and iteration?”*
> ✅ Recursion uses **call stack**, iteration uses **loops**.
> ✅ Recursion is ideal for **nested/branching problems** like **trees**.

---

## 📌 Summary

| Concept    | Key Takeaway                             |
| ---------- | ---------------------------------------- |
| Recursion  | Function calls itself                    |
| Base Case  | Must exist to avoid infinite calls       |
| Call Stack | Keeps track of active recursive calls    |
| Use Cases  | Trees, folder structures, nested objects |

---

✅ Once you're confident, let's move to **Chapter 87: Design Patterns in JavaScript (Factory, Singleton, Observer...) 🏗️**

Would you like me to begin?
