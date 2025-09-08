Awesome! Let’s dive into one of the most crucial skills for writing **robust and production-grade applications**.

---

# ✅ Chapter 115: Error Handling & Defensive Programming in JavaScript

> 🎯 *Goal: Learn how to write resilient, bug-resistant JavaScript by mastering error handling and applying defensive programming principles.*

---

## 🧠 Why Error Handling Matters

Even the best-written code can fail — users enter wrong input, network fails, files are missing, or APIs respond unexpectedly.

**Error handling** allows you to:

* Prevent app crashes 💥
* Guide the user gracefully 🧭
* Log problems for debugging 🪵
* Keep systems stable in production 🧱

> In interviews and real-world dev work, **error resilience** = **professionalism**.

---

## 🔍 Types of Errors in JavaScript

| Type                | Example                            |
| ------------------- | ---------------------------------- |
| ❌ Syntax Error      | Missing `{`, unexpected `token`    |
| ❌ Runtime Error     | `undefined is not a function`      |
| ❌ Logical Error     | Code runs but returns wrong output |
| ❌ Network/API Error | Failed fetch, bad status codes     |
| ❌ Async Errors      | Unhandled `Promise.reject()`       |

---

## ✅ `try...catch` – Basic Error Handling

```js
try {
  // risky code
  const json = JSON.parse(userInput);
} catch (error) {
  console.error("Invalid input!", error);
}
```

### 📌 Notes:

* Only **runtime errors** inside the `try` block are caught.
* `catch(error)` gives you the error object.
* `finally` runs **regardless** of success/failure.

```js
finally {
  console.log('Cleanup actions');
}
```

---

## 🧠 Throwing Custom Errors

You can **raise** your own errors:

```js
function divide(a, b) {
  if (b === 0) {
    throw new Error('Cannot divide by zero');
  }
  return a / b;
}
```

### Catching it:

```js
try {
  divide(10, 0);
} catch (err) {
  console.warn('Math error:', err.message);
}
```

---

## 🛡️ Defensive Programming Mindset

> Don't assume anything. Always **validate, sanitize, and guard**.

| Principle                  | Example                            |   |           |
| -------------------------- | ---------------------------------- | - | --------- |
| ✅ Check for null/undefined | `if (!data) return;`               |   |           |
| ✅ Validate inputs          | `typeof`, `Array.isArray()`, regex |   |           |
| ✅ Use default values       | \`const name = input               |   | "Guest"\` |
| ✅ Fail gracefully          | Show messages, don’t crash         |   |           |
| ✅ Log unexpected issues    | `console.warn`, `console.error`    |   |           |

---

## 🧰 Common Defensive Patterns

### 1. ✅ Input Validation

```js
function greet(name) {
  if (typeof name !== "string" || name.length === 0) {
    throw new Error("Invalid name input");
  }
  return `Hello, ${name}`;
}
```

### 2. ✅ Default Fallbacks

```js
function getUserRole(user) {
  return user?.role ?? 'guest';
}
```

### 3. ✅ Guard Clauses

```js
function sendEmail(email) {
  if (!email.includes("@")) return;
  // send email logic...
}
```

### 4. ✅ Early Returns

Avoid deep nesting:

```js
function process(user) {
  if (!user) return;
  if (!user.isActive) return;

  // Continue...
}
```

---

## 🔄 Error Handling in Async Code

### ✅ `try...catch` with `async/await`

```js
async function fetchUser() {
  try {
    const res = await fetch('/api/user');
    if (!res.ok) throw new Error('API failed');
    const data = await res.json();
    return data;
  } catch (err) {
    console.error("API Error:", err.message);
  }
}
```

### ❌ Mistake: Not awaiting async calls in try block

```js
try {
  const result = someAsyncFn(); // not awaited!
} catch (err) {
  // won't catch the error
}
```

---

## ✅ Create Custom Error Classes

```js
class ValidationError extends Error {
  constructor(message) {
    super(message);
    this.name = 'ValidationError';
  }
}
```

Use it:

```js
function register(email) {
  if (!email.includes("@")) {
    throw new ValidationError("Email must be valid.");
  }
}
```

---

## 🧪 Defensive Testing Examples

### 1. Validate input

```js
function add(a, b) {
  if (typeof a !== "number" || typeof b !== "number") {
    throw new Error("Arguments must be numbers");
  }
  return a + b;
}
```

### 2. Use test cases:

```js
expect(() => add("1", 2)).toThrow("Arguments must be numbers");
```

---

## 📊 Logging & Monitoring (for real projects)

* Use `console.error`, `console.warn` in dev
* In production:

  * Log to remote servers (e.g., Sentry, LogRocket, CloudWatch)
  * Track errors by severity
  * Monitor frequency of crashes

---

## 🧠 Best Practices Summary

| Rule                             | Benefit                         |
| -------------------------------- | ------------------------------- |
| ✅ Use `try...catch` wisely       | Prevent crashes                 |
| ✅ Don’t catch everything blindly | Only catch where it makes sense |
| ✅ Validate external data         | Prevent unexpected bugs         |
| ✅ Throw helpful errors           | Debug and guide user            |
| ✅ Never trust user input         | Validate everything             |
| ✅ Use `finally` for cleanup      | Consistency in code             |

---

## 🛠 Practice Challenges

1. Build a `safeDivide(a, b)` function that never crashes and always returns a fallback.
2. Create a `parseUser(jsonString)` function that validates keys like `name`, `age`, and throws meaningful errors.
3. Simulate a form handler that validates and displays custom error messages on invalid input.

---

## 🌐 Online Practice

* [JS Error Handling Playground](https://replit.com)
* [CodeSandbox + try/catch](https://codesandbox.io)

---

## ✅ Summary

In this chapter, you learned:

* What kinds of errors JavaScript can throw
* How to use `try...catch`, custom errors, defensive checks
* Why validation and early returns make your code safer
* How to write crash-resistant async code

---

## 🔜 Up Next…

### **Chapter 116: Event Delegation & Pub/Sub Architecture**

> Learn how to write **scalable** UI code with event delegation and build your own lightweight **publish/subscribe** event system (used in frameworks).

Shall we begin Chapter 116?
