Awesome! Chapter 104 is one of the most important and practical chapters for becoming a **job-ready JavaScript developer**. It covers core **algorithms** you’ll see in coding interviews, technical assessments, and even real-world apps.

---

# 📐 Chapter 104: Algorithms in JavaScript

### (Sorting, Searching, Recursion, and Big-O)

---

## 🎯 Objectives

By the end of this chapter, you will:

* Understand key algorithm types: Sorting, Searching, Recursion
* Write optimized versions of these algorithms in JavaScript
* Analyze time and space complexity using **Big-O Notation**
* Practice with interview-style questions

---

## 📦 Section 1: What Are Algorithms?

> An **algorithm** is a step-by-step set of instructions to solve a specific problem efficiently.

Example: Finding the largest number in an array is a basic algorithm.

---

## 🧠 Section 2: Big-O Notation (Time & Space Complexity)

### ⏱️ Common Big-O Time Complexities:

| Notation | Description      | Example            |
| -------- | ---------------- | ------------------ |
| O(1)     | Constant Time    | Access by index    |
| O(n)     | Linear Time      | Loop through array |
| O(n²)    | Quadratic Time   | Nested loops       |
| O(log n) | Logarithmic Time | Binary Search      |

### ✍️ Example: O(n) vs O(1)

```js
function linearSearch(arr, target) {
  for (let item of arr) {
    if (item === target) return true; // O(n)
  }
  return false;
}

function accessIndex(arr, i) {
  return arr[i]; // O(1)
}
```

---

## 🔁 Section 3: Recursion

### 🔄 A function calling itself until a base condition is met.

### ✅ Use Cases:

* Tree traversal
* Backtracking
* Divide & conquer algorithms

### 📘 Example: Factorial

```js
function factorial(n) {
  if (n === 1) return 1;
  return n * factorial(n - 1);
}

console.log(factorial(5)); // 120
```

### 🔁 Example: Fibonacci (Recursive & Optimized)

```js
// Naive (exponential time)
function fib(n) {
  if (n < 2) return n;
  return fib(n - 1) + fib(n - 2);
}

// Optimized (Memoization)
const memo = {};
function fibMemo(n) {
  if (n in memo) return memo[n];
  if (n < 2) return n;
  memo[n] = fibMemo(n - 1) + fibMemo(n - 2);
  return memo[n];
}
```

---

## 🔍 Section 4: Searching Algorithms

---

### 1️⃣ Linear Search (O(n))

```js
function linearSearch(arr, target) {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === target) return i;
  }
  return -1;
}
```

---

### 2️⃣ Binary Search (O(log n)) — Only for **Sorted Arrays**

```js
function binarySearch(arr, target) {
  let left = 0, right = arr.length - 1;
  while (left <= right) {
    let mid = Math.floor((left + right) / 2);
    if (arr[mid] === target) return mid;
    else if (arr[mid] < target) left = mid + 1;
    else right = mid - 1;
  }
  return -1;
}
```

---

## 🔄 Section 5: Sorting Algorithms

---

### 📊 1. Bubble Sort (O(n²)) - Basic and intuitive

```js
function bubbleSort(arr) {
  let n = arr.length;
  for (let i = 0; i < n - 1; i++) {
    for (let j = 0; j < n - i - 1; j++) {
      if (arr[j] > arr[j + 1]) {
        [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
      }
    }
  }
  return arr;
}
```

---

### ⚡ 2. Merge Sort (O(n log n)) - Divide & Conquer

```js
function mergeSort(arr) {
  if (arr.length <= 1) return arr;

  const mid = Math.floor(arr.length / 2);
  const left = mergeSort(arr.slice(0, mid));
  const right = mergeSort(arr.slice(mid));

  return merge(left, right);
}

function merge(left, right) {
  let result = [], l = 0, r = 0;
  while (l < left.length && r < right.length) {
    if (left[l] < right[r]) result.push(left[l++]);
    else result.push(right[r++]);
  }
  return [...result, ...left.slice(l), ...right.slice(r)];
}
```

---

### 🔥 3. Quick Sort (Average: O(n log n))

```js
function quickSort(arr) {
  if (arr.length <= 1) return arr;

  let pivot = arr[arr.length - 1];
  let left = [], right = [];

  for (let i = 0; i < arr.length - 1; i++) {
    arr[i] < pivot ? left.push(arr[i]) : right.push(arr[i]);
  }

  return [...quickSort(left), pivot, ...quickSort(right)];
}
```

---

## 🧪 Section 6: Practice Problems

| Problem                            | Concepts Used       |
| ---------------------------------- | ------------------- |
| Reverse a string (with recursion)  | Recursion, string   |
| Palindrome check                   | Two-pointer, string |
| Find duplicate in array            | Hash table          |
| Find peak in a mountain array      | Binary search       |
| Sort scores from highest to lowest | Sorting algorithms  |

---

## 💻 Mini Project: Leaderboard Sort

**Task:** Sort players by score in descending order using your own quickSort or mergeSort.

```js
const players = [
  { name: "Ali", score: 75 },
  { name: "Sara", score: 92 },
  { name: "Umar", score: 85 },
];

players.sort((a, b) => b.score - a.score);
console.log(players);
```

---

## 🧠 Summary Table

| Algorithm     | Time Complexity | Use Case                        |
| ------------- | --------------- | ------------------------------- |
| Linear Search | O(n)            | Unsorted search                 |
| Binary Search | O(log n)        | Sorted arrays                   |
| Bubble Sort   | O(n²)           | Simple but inefficient sorting  |
| Merge Sort    | O(n log n)      | Efficient + stable sorting      |
| Quick Sort    | O(n log n) avg  | Fast sorting (in-place)         |
| Recursion     | Varies          | Trees, graphs, divide & conquer |

---

## 🧰 Resources for Mastery

* [Visualgo – Visualize Algorithms](https://visualgo.net)
* [Leetcode Easy & Medium](https://leetcode.com/problemset/)
* [JavaScript Algorithms GitHub Repo](https://github.com/trekhleb/javascript-algorithms)

---

## ✅ Up Next:

➡️ **Chapter 105: Building Your Portfolio + Resume + GitHub Strategy**
Time to build your **developer brand** and become visible to recruiters and clients!

Would you like to begin Chapter 105 now?
