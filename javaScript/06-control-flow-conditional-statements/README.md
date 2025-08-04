# 📘 Chapter 6: JavaScript Operators & Conditional Statements

**🔥 Learn:  if/else, ternary, switch, nullish coalescing — with hands-on mini projects**



## Control flow or Condtional Statements

### ✅ if, else, else if:

```js
let score = 85;

if (score >= 90) {
  console.log("A Grade");
} else if (score >= 80) {
  console.log("B Grade");
} else {
  console.log("Try again");
}
```

---

## 🔹 Let's do a Project: 🎓 Grade Calculator

```js
let marks = 76;

if (marks >= 90) {
  console.log("A+");
} else if (marks >= 80) {
  console.log("A");
} else if (marks >= 70) {
  console.log("B");
} else {
  console.log("Fail");
}
```

---

## ✅ Ternary Operator (`? :`)

```js
let age = 18;
let status = (age >= 18) ? "Adult" : "Minor";
console.log(status); // Adult
```

A ternary operator can be used to replace an `if..else` statement in certain situations.

### What is a Ternary operator?
A ternary operator evaluates a condition and executes a block of code based on the condition.

Its syntax is:
```js
condition ? expression1 : expression2
```
The ternary operator evaluates the test condition.

If the condition is true, expression1 is executed.
If the condition is false, expression2 is executed.
The ternary operator takes three operands, hence, the name ternary operator. It is also known as a conditional operator.

Let's write a program to determine if a student passed or failed in the exam based on marks obtained.

```js
// program to check pass or fail

let marks = prompt('Enter your marks :');

// check the condition
let result = (marks >= 40) ? 'pass' : 'fail';

console.log(`You ${result} the exam.`);
```
```js
Output 1
```
Enter your marks: 78
You pass the exam.
Suppose the user enters 78. Then the condition marks >= 40 is checked which evaluates to true. So the first expression pass is assigned to the result variable.

Ternary Operator Used Instead of `if...else`
In JavaScript, a ternary operator can be used to replace certain types of if..else statements. 
```js
// check the age to determine the eligibility to vote
let age = 15;
let result;

if (age >= 18) {
      result = "You are eligible to vote.";
} else {
      result = "You are not eligible to vote yet.";
}

console.log(result);
```
with ternary operator
```js
// ternary operator to check the eligibility to vote
let age = 15;
let result =
    (age >= 18) ? "You are eligible to vote." : "You are not eligible to vote yet";
console.log(result);
```

```js
You are not eligible to vote yet.
```
## Nested ternary operators
You can also nest one ternary operator as an expression inside another ternary operator.

```js
// program to check if number is positive, negative or zero
let a = 3;
let result = (a >= 0) ? (a == 0 ? "zero" : "positive") : "negative";
console.log(`The number is ${result}.`);
```
```js
The number is positive.
```

> Note: You should try to avoid nested ternary operators whenever possible as they make your code hard to read.

### 📌 Urdu Explanation:

Agar condition `true` ho to pehla value chalega, warna dusra.

### 🔸 Mini Project: Theme Switcher

```js
let theme = "dark";
let bgColor = (theme === "dark") ? "#000" : "#fff";
document.body.style.backgroundColor = bgColor;
```

---

## 🔹 5. ✅ Switch Statement

**(multiple condition alternative)**

```js
let day = 2;
switch (day) {
  case 1:
    console.log("Monday");
    break;
  case 2:
    console.log("Tuesday");
    break;
  case 3:
    console.log("Wednesday");
    break;
  default:
    console.log("Invalid day");
}
```

### 📌 Urdu Explanation:

Switch aik cleaner alternative hai `if else if` ka, jab aapko bohot sari conditions check karni ho.

---

### 🔸 Mini Project: Day Message App

```js
let today = new Date().getDay();

switch (today) {
  case 0:
    console.log("Sunday - Relax!");
    break;
  case 1:
    console.log("Monday - Work begins");
    break;
  case 2:
    console.log("Tuesday - Keep going");
    break;
  default:
    console.log("Enjoy your day!");
}
```

---

## ✅ Nullish Coalescing Operator (`??`)

**(fallback for `null` or `undefined` only)**

```js
let username = null;
let displayName = username ?? "Guest";
console.log(displayName); // Guest
```

### 📌 Urdu Explanation:

Agar left value `null` ya `undefined` ho to right value use hoti hai.


---

### 🔸 Mini Demo: User Input Fallback

```js
let input = "";
let result = input ?? "Default Input";
console.log(result); // "" — because it's not null or undefined
```

---

## 🧪 Project: Simple Login System

```js
let username = "admin";
let password = "12345";

if (username === "admin" && password === "12345") {
  console.log("Login successful!");
} else {
  console.log("Login failed!");
}
```

---

## 📦 Final Recap:

| Concept         | Urdu Use Case                      |    |                                      |
| --------------- | ---------------------------------- | -- | ------------------------------------ |
| `if / else`     | Agar yeh ho to yeh karo, warna yeh |    |                                      |
| `? :` (ternary) | Short-hand version of `if/else`    |    |                                      |
| `switch`        | Jab multiple fixed options ho      |    |                                      |
| `??`            | Jab null ya undefined ho           |    |                                      |
| \`              |                                    | \` | Jab koi falsy value fallback dena ho |

---

## 📁 Homework:

1. Create a weather condition checker using `switch`.
2. Use ternary to show `"Even"` or `"Odd"` for a number.
3. Use `??` to fallback a user profile field (like bio or name).
