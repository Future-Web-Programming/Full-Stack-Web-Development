Excellent! Let’s now enter the **testing phase** of your JavaScript mastery.

---

# ✅ Chapter 114: Writing Testable JavaScript – Unit Testing with Vitest & Jest

> 🎯 *Goal: Learn how to write unit tests for your JavaScript logic using modern test runners like **Vitest** (Vite-native) and **Jest**.*

---

## 🧠 Why Learn JavaScript Testing?

In real-world applications and open-source projects, testing is **critical** for:

| Benefit                   | Description                                   |
| ------------------------- | --------------------------------------------- |
| ✅ Catching bugs early     | Prevent regressions in large codebases        |
| ✅ Refactoring with safety | Make code changes with confidence             |
| ✅ Documentation by tests  | Tests act as living documentation             |
| ✅ Reusability             | Modular, tested functions are easier to reuse |

> 📌 Frameworks like React, Vue, Node.js backends, and JS libraries are **heavily tested**.

---

## 🔍 What Is Unit Testing?

**Unit Testing** means testing small, isolated “units” of logic (functions, components, classes) to ensure they behave correctly.

Example:
Test this function 👇

```js
function add(a, b) {
  return a + b;
}
```

Make sure it returns:

* `add(2, 3) → 5`
* `add(-1, 1) → 0`

---

## 🧪 Tools: Vitest vs Jest

| Tool       | About                                    | Ideal For                |
| ---------- | ---------------------------------------- | ------------------------ |
| **Vitest** | Vite-native, blazing fast, modern syntax | Frontend (Vite/ESM apps) |
| **Jest**   | Battle-tested, supports CJS/ESM          | Node.js, React, backend  |

For our course:
✅ We'll use **Vitest** (modern) and compare with Jest.

---

## 🚀 Getting Started with Vitest

### 🛠 Step 1: Initialize Vite Project

```bash
npm create vite@latest js-vitest-demo
cd js-vitest-demo
npm install
```

### 🛠 Step 2: Install Vitest

```bash
npm install -D vitest
```

Update `package.json`:

```json
"scripts": {
  "dev": "vite",
  "test": "vitest"
}
```

---

## 🧪 Step 3: Write Your First Test

Let’s test a `math.js` file.

```js
// utils/math.js
export function add(a, b) {
  return a + b;
}
```

### Create test file:

```js
// utils/math.test.js
import { describe, it, expect } from 'vitest';
import { add } from './math.js';

describe('add()', () => {
  it('should add two positive numbers', () => {
    expect(add(2, 3)).toBe(5);
  });

  it('should work with negatives', () => {
    expect(add(-1, -1)).toBe(-2);
  });
});
```

### Run the test:

```bash
npm run test
```

> 🧪 ✅ If everything works, you’ll see a green output with passed tests!

---

## 📘 Anatomy of a Vitest Test

```js
describe('group of tests', () => {
  it('specific test', () => {
    expect(value).toBe(expectedValue);
  });
});
```

Other useful matchers:

| Matcher         | Meaning                             |
| --------------- | ----------------------------------- |
| `.toBe()`       | Strict equality (===)               |
| `.toEqual()`    | Deep object equality                |
| `.toBeTruthy()` | Truthy value                        |
| `.toContain()`  | Checks arrays/strings for inclusion |

---

## 🧪 Testing Your Own Hook

Say you made this composable:

```js
export function useCounter(initial = 0) {
  let count = initial;
  return {
    get: () => count,
    inc: () => ++count,
    dec: () => --count,
  };
}
```

### Create a test:

```js
import { useCounter } from './useCounter.js';

describe('useCounter()', () => {
  it('should initialize correctly', () => {
    const counter = useCounter(10);
    expect(counter.get()).toBe(10);
  });

  it('should increment', () => {
    const counter = useCounter();
    counter.inc();
    expect(counter.get()).toBe(1);
  });

  it('should decrement', () => {
    const counter = useCounter(5);
    counter.dec();
    expect(counter.get()).toBe(4);
  });
});
```

---

## 📦 Bonus: Testing DOM Functions

Let’s test DOM behavior using `jsdom` (comes with Vitest).

```js
export function updateTitle(text) {
  document.title = text;
}
```

```js
import { describe, it, expect } from 'vitest';
import { updateTitle } from './title.js';

describe('updateTitle()', () => {
  it('should update the document title', () => {
    updateTitle('My Page');
    expect(document.title).toBe('My Page');
  });
});
```

---

## 🧪 Using Jest (Optional Alternative)

Install Jest:

```bash
npm install --save-dev jest
```

Write a test:

```js
test('adds numbers', () => {
  expect(add(2, 2)).toBe(4);
});
```

Run with:

```bash
npx jest
```

---

## ✅ Best Practices for Writing Tests

| Practice                    | Description                         |
| --------------------------- | ----------------------------------- |
| One assertion per test      | Keep it simple                      |
| Descriptive test names      | Explain what it tests               |
| Avoid external dependencies | Keep unit tests isolated            |
| Test edge cases             | Empty input, nulls, errors          |
| Use coverage tools          | Identify untested lines (see below) |

---

## 📊 Code Coverage (Optional)

Enable in Vitest by running:

```bash
npx vitest run --coverage
```

---

## 🧪 Real-World Testing Use Cases

| Use Case          | What You Can Test                          |
| ----------------- | ------------------------------------------ |
| Composables/Hooks | Logic in `useForm`, `useCounter`, etc.     |
| Utility Functions | Date formatting, math, validation          |
| DOM Logic         | UI updates, title change, modal open/close |
| Fetch Functions   | Mock API responses using `vitest-mock`     |

---

## 🔬 Practice Challenges

1. Write tests for your `useForm()` composable.
2. Create a utility function `isEmailValid()` and write 5 test cases.
3. Build `useTimer()` composable and write tests for incrementing seconds.

---

## 🧪 Online Environments to Practice

* [Vitest Playground](https://stackblitz.com/edit/vitest)
* [Jest + JS playground](https://replit.com/)

---

## ✅ Summary

In this chapter, you learned:

* What is unit testing and why it’s important
* How to test JS logic using **Vitest** and **Jest**
* How to write tests for hooks, utilities, and DOM interactions

---

## 🔜 Coming Up Next...

**Chapter 115: Error Handling & Defensive Programming**

> Learn how to build **robust**, **error-resilient** JavaScript apps with best practices.

---

Would you like to move ahead with **Chapter 115: Error Handling & Defensive Programming**?
