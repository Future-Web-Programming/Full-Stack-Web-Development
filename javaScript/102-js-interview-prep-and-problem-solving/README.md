Great! Now that students are equipped with real-world JavaScript projects and concepts, it’s time to **prepare them for technical interviews** — the next big milestone on the job roadmap.

---

# 💼 Chapter 102: JavaScript Interview Questions & Problem Solving

---

## 🎯 Objective

By the end of this chapter, students will:

* Understand **core JavaScript interview concepts**
* Solve real **coding challenges**
* Master **theory + coding** blend for job interviews
* Be prepared for **junior to mid-level roles**

---

## 📚 Section 1: Must-Know JavaScript Theory Questions

These are frequently asked in interviews — be ready with **concise and confident answers**.

---

### 1️⃣ What is the difference between `var`, `let`, and `const`?

| Keyword | Scope          | Hoisted | Reassignable | Redeclarable |
| ------- | -------------- | ------- | ------------ | ------------ |
| `var`   | Function scope | Yes     | ✅ Yes        | ✅ Yes        |
| `let`   | Block scope    | No      | ✅ Yes        | ❌ No         |
| `const` | Block scope    | No      | ❌ No         | ❌ No         |

---

### 2️⃣ Explain the `this` keyword.

* In **global scope**: refers to `window`
* In **object method**: refers to that object
* In **arrow functions**: `this` is lexically bound (inherits from parent)

```js
const obj = {
  name: "Ali",
  greet: function () {
    console.log(this.name); // "Ali"
  },
};
```

---

### 3️⃣ What is a Closure?

> A function that “remembers” the variables from its outer scope even after the outer function has finished executing.

```js
function outer() {
  let counter = 0;
  return function inner() {
    counter++;
    console.log(counter);
  };
}

const count = outer();
count(); // 1
count(); // 2
```

---

### 4️⃣ Explain `==` vs `===`.

* `==` – **loose equality** (performs type coercion)
* `===` – **strict equality** (no coercion)

```js
0 == '0'    // true
0 === '0'   // false
```

---

### 5️⃣ What is the Event Loop in JavaScript?

> JS is single-threaded. The event loop lets async code run non-blocking by pushing tasks from the **callback queue** or **microtask queue** to the call stack.

---

## 🧠 Section 2: Common Coding Questions

Each question includes:

* ✅ Problem
* 💡 Approach
* 💻 Code
* ⏱️ Time complexity

---

### 1️⃣ Reverse a String

```js
function reverseString(str) {
  return str.split('').reverse().join('');
}
console.log(reverseString("hello")); // "olleh"
```

🕒 O(n)

---

### 2️⃣ Check for Palindrome

```js
function isPalindrome(str) {
  const reversed = str.split('').reverse().join('');
  return str === reversed;
}
```

---

### 3️⃣ FizzBuzz Problem

```js
function fizzBuzz(n) {
  for(let i = 1; i <= n; i++) {
    if(i % 15 === 0) console.log("FizzBuzz");
    else if(i % 3 === 0) console.log("Fizz");
    else if(i % 5 === 0) console.log("Buzz");
    else console.log(i);
  }
}
```

---

### 4️⃣ Find Max in Array

```js
function findMax(arr) {
  return Math.max(...arr);
}
```

---

### 5️⃣ Count Vowels

```js
function countVowels(str) {
  return str.match(/[aeiou]/gi)?.length || 0;
}
```

---

## 💡 Section 3: Tips to Crack JS Interviews

1. **Don’t memorize — understand**
2. Practice **100+ problems** on [LeetCode](https://leetcode.com), [Codewars](https://codewars.com)
3. Focus on:

   * Arrays, Strings
   * Objects & Loops
   * Recursion
   * ES6+ Features
   * DOM/Browser APIs
4. Use online code pads in interviews: [JSFiddle](https://jsfiddle.net), [PlayCode.io](https://playcode.io)

---

## 🚀 Practice Challenge: Daily Problem

> **💻 Question:** Write a function to flatten a nested array.

```js
// Example: [1, [2, [3, 4]], 5] => [1, 2, 3, 4, 5]

function flattenArray(arr) {
  return arr.flat(Infinity);
}
```

---

## 🧪 Mock Interview Questions

| Topic           | Sample Question                                |
| --------------- | ---------------------------------------------- |
| ES6 Features    | What are arrow functions and spread syntax?    |
| Asynchronous JS | Difference between `async/await` and `.then()` |
| DOM             | How to select and modify an element            |
| Event Handling  | What is event bubbling and delegation?         |
| Performance     | What is debouncing?                            |
| Memory          | What causes memory leaks in JS?                |

---

## 🔚 Summary

| Topic                 | Key Takeaway                            |
| --------------------- | --------------------------------------- |
| Theory Prep           | Focus on closures, scope, async, `this` |
| Coding Questions      | Reverse, Palindrome, Array problems     |
| Interview Practice    | Solve daily problems, mock interviews   |
| Online Practice Sites | LeetCode, HackerRank, JSFiddle          |

---

## 🔗 Resources

* [JavaScript 450+ Questions Sheet (Google Sheet)](https://bit.ly/js-450-questions)
* [Frontend Interview Handbook](https://frontendinterviewhandbook.com)
* [LeetCode JavaScript Practice](https://leetcode.com/problemset/all/?difficulty=Easy&topicSlugs=javascript)

---

## ✅ Up Next:

➡️ **Chapter 103: Data Structures in JavaScript (Stack, Queue, Tree, etc.)**

We’ll now introduce core data structures with **visuals + code examples**, helping you **crack tech interviews** and solve complex problems confidently.

Would you like to continue to Chapter 103?
