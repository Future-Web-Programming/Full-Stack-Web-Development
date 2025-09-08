Great! Now that your students understand **functions**, it's time to introduce them to one of the **most important building blocks of programming** — **conditional statements**.

These allow JavaScript to **make decisions**, respond to different scenarios, and control how your code behaves based on conditions.

---

# 🟩 Chapter 32: Conditional Statements in JavaScript

**(if, else, else if, switch — with Real-Life Examples)**

---

## 🎯 Learning Outcomes

By the end of this chapter, students will:

* Understand what conditional statements are
* Use `if`, `else if`, and `else` effectively
* Understand logical comparison operators (`>`, `===`, `&&`, etc.)
* Use `switch` for multiple conditions
* Build decision-based logic in projects

---

## 🧠 1. What Are Conditional Statements?

Conditional statements are used to **execute code only if certain conditions are true**.

> Think of it like:
> **"If it rains, take an umbrella. Otherwise, go as usual."**

---

## ✅ 2. The `if` Statement

```js
let age = 18;

if (age >= 18) {
  console.log("You are eligible to vote.");
}
```

✅ If the condition is true, the block runs.

---

## ➕ 3. `else` Statement

```js
let age = 16;

if (age >= 18) {
  console.log("You can vote.");
} else {
  console.log("You are too young to vote.");
}
```

---

## 🔀 4. `else if` Statement

Use this when you have **multiple conditions**:

```js
let marks = 75;

if (marks >= 90) {
  console.log("Grade: A+");
} else if (marks >= 80) {
  console.log("Grade: A");
} else if (marks >= 70) {
  console.log("Grade: B");
} else {
  console.log("Grade: Needs Improvement");
}
```

---

## 🧪 5. Comparison Operators

| Operator | Meaning          | Example             |
| -------- | ---------------- | ------------------- |
| `==`     | Equal (loose)    | `5 == '5'` → true   |
| `===`    | Equal (strict)   | `5 === '5'` → false |
| `!=`     | Not equal        | `10 != 5` → true    |
| `>`      | Greater than     | `10 > 5` → true     |
| `<`      | Less than        | `5 < 10` → true     |
| `>=`     | Greater or equal | `5 >= 5` → true     |
| `<=`     | Less or equal    | `4 <= 4` → true     |

---

## ⚙️ 6. Logical Operators

| Operator | Meaning                 | Example                              |                        |            |   |                  |
| -------- | ----------------------- | ------------------------------------ | ---------------------- | ---------- | - | ---------------- |
| `&&`     | AND (both must be true) | `age >= 18 && citizen === true`      |                        |            |   |                  |
| \`       |                         | \`                                   | OR (at least one true) | \`age < 18 |   | income < 50000\` |
| `!`      | NOT (negate condition)  | `!loggedIn` is true if not logged in |                        |            |   |                  |

---

## 🎛 7. `switch` Statement

Best when checking against **many fixed values**:

```js
let day = "Monday";

switch(day) {
  case "Monday":
    console.log("Start of the week");
    break;
  case "Friday":
    console.log("Weekend is near");
    break;
  default:
    console.log("Just a regular day");
}
```

---

## 🧠 Real-World Examples

### 1. Login System

```js
let username = "admin";
let password = "1234";

if (username === "admin" && password === "1234") {
  console.log("Login successful!");
} else {
  console.log("Invalid credentials.");
}
```

### 2. Weather Advice

```js
let temperature = 36;

if (temperature > 40) {
  console.log("It's very hot, stay hydrated.");
} else if (temperature > 30) {
  console.log("It's warm today.");
} else {
  console.log("Pleasant weather.");
}
```

---

## 🛠 Mini Projects (with `if` / `switch`)

### ✅ Voting Eligibility Checker

Input: `age`
Output: `"Eligible"` or `"Not eligible"`

### ✅ Grade Calculator (90+ = A, 80+ = B, etc.)

Input: `marks`
Output: `"Your grade is A"` etc.

### ✅ Simple Calculator using `switch`

```js
let operator = "+";
let num1 = 10, num2 = 5;

switch(operator) {
  case "+":
    console.log(num1 + num2);
    break;
  case "-":
    console.log(num1 - num2);
    break;
  default:
    console.log("Invalid operator");
}
```

---

## 🎥 YouTube Lecture Flow Suggestion

1. Visual intro: "What if logic?"
2. Code real-life examples with voting & grading
3. Show mistakes: missing `else`, wrong operators
4. Show `switch` with a menu system
5. Mini project walkthrough

---

## 🔗 Online Practice Tools

* [JSFiddle](https://jsfiddle.net/)
* [PlayCode.io](https://playcode.io/)
* [Replit - Control Flow Playground](https://replit.com/)

---

## 🧪 Homework / Practice Challenges

1. Create a program to check if a number is even or odd
2. Write a program to check if the user passed or failed
3. Build a basic currency converter using `switch`
4. Check age group: (0-12 = Child, 13-19 = Teen, 20+ = Adult)

---

## 🔜 Next Chapter

**Chapter 33 – Loops in JavaScript: for, while, do-while**

> In the next chapter, you’ll learn how to repeat tasks and process lists of data using loops — one of the most powerful features of programming.

---

Would you like to begin preparing **Chapter 33: Loops in JavaScript** now?
