# 🟩 Chapter 11: JavaScript Functions

**(Build a Grade Calculator App)**

---

## 🧠 What is a Function?

A **function** is a **block of code** that performs a specific task.
You can **call** it again and again whenever needed.

> 💬 Real-life Example: A blender in your kitchen.
> Press the button → Blender does its job (blend fruits).
> Similarly, call the function → It performs its task.

---

## 🔧 Creating a Function

```js
function greet() {
  console.log("Welcome to JavaScript!");
}

greet(); // Call the function
```

🧠 **Remember**: A function does **nothing** until you **call it**!

---

## 🛠 Parameters and Arguments

We can pass **inputs** into functions using **parameters**.

```js
function greetUser(name) {
  console.log("Hello, " + name);
}

greetUser("Ali");
greetUser("Ayesha");
```

| Parameter                  | Argument                          |
| -------------------------- | --------------------------------- |
| name (input in definition) | "Ali" (value passed when calling) |

---

## JavaScript Rest Parameter
When the spread operator is used as a parameter, it is known as the rest parameter.

You can accept multiple arguments in a function call using the rest parameter. 
```js
let printArray = function(...args) {
    console.log(args);
}

// pass a single argument
printArray(3);

// pass multiple arguments
printArray(4, 5, 6);
```
```js
[ 3 ]
[ 4, 5, 6 ]
```

When a single argument is passed to printArray(), the rest parameter takes only one parameter.

When three arguments are passed, the rest parameter takes all three parameters.

> Note: Using the rest parameter will pass the arguments as array elements.

```js
// Output: 8
```
If you pass multiple arguments using the spread operator, the function takes the required number of arguments and ignores the rest.


## Spread Operator as Part of Function Argument

You can also use the spread operator as part of a function argument. 

```js
// function that takes three arguments
function sum(num1, num2 , num3) {
    console.log(num1 + num2 + num3);
}

let num1 = [1, 3, 4, 5];

// pass the first three array elements
sum(...num1); 
```

## 🔁 Reusability with Functions

```js
function square(num) {
  console.log(num * num);
}

square(4);  // 16
square(10); // 100
```

---

## 🔙 Return Values

Functions can return a result using the `return` keyword.

```js
function add(a, b) {
  return a + b;
}

let result = add(5, 3); // 8
console.log(result);
```

> ❗ You can return a value to **use it later** or store it in a variable.

---

## 📦 Why Functions are Powerful

✅ Code is **organized**
✅ Can reuse logic
✅ Easier to **debug & test**
✅ Helps build **modular applications**

---

## 💡 Function Structure Breakdown

```js
function functionName(parameters) {
  // code to run
  return value; // (optional)
}
```

---

## 🎯 Real-World Project: **Marks Percentage & Grade Calculator App**

### 🧩 Goal:

* Input marks of 3 subjects
* Calculate total, percentage
* Give grade based on percentage
* Show result to user

---

### 💻 Step-by-Step Code

```js
function getMarks(subject) {
  let marks = +prompt(`Enter marks for ${subject}:`);
  return marks;
}

function calculateTotal(m1, m2, m3) {
  return m1 + m2 + m3;
}

function calculatePercentage(total, maxMarks) {
  return (total / maxMarks) * 100;
}

function getGrade(percent) {
  if (percent >= 80) return "A+";
  else if (percent >= 70) return "A";
  else if (percent >= 60) return "B";
  else if (percent >= 50) return "C";
  else return "Fail";
}

// 🧪 App Execution

let sub1 = getMarks("Math");
let sub2 = getMarks("English");
let sub3 = getMarks("Science");

let total = calculateTotal(sub1, sub2, sub3);
let percentage = calculatePercentage(total, 300);
let grade = getGrade(percentage);

console.log(`Total Marks: ${total}`);
console.log(`Percentage: ${percentage.toFixed(2)}%`);
console.log(`Grade: ${grade}`);
```

---

## ✅ Sample Output

```
Enter marks for Math: 75  
Enter marks for English: 65  
Enter marks for Science: 80  

Total Marks: 220  
Percentage: 73.33%  
Grade: A
```

---

## 🔍 Function Recap Table

| Concept          | Example                |
| ---------------- | ---------------------- |
| Declare Function | `function greet() {}`  |
| Call Function    | `greet()`              |
| With Parameters  | `function add(a, b)`   |
| With Return      | `return a + b;`        |
| Store Return     | `let sum = add(2, 3);` |

---

## 🧠 Q\&A: Function Confusion Cleared

> ❓ Can a function return nothing?
> ✅ Yes, it can just do something like print, without returning.

> ❓ Can I call a function inside another?
> ✅ Yes! That’s called **nesting functions**, and it’s common.

> ❓ Why use `return` instead of just `console.log`?
> ✅ Because return allows you to **reuse the result** elsewhere.

---

## 🧪 Student Practice Tasks

### ✅ 1. Simple Interest Calculator

```js
// P = principal, R = rate, T = time
// Formula: SI = (P * R * T) / 100
```

Create a function that takes P, R, T, and returns SI.

---

### ✅ 2. Greeting Bot

```js
// Ask user's name and greet them with a function
// greet("Ali") → "Good morning, Ali!"
```

---

### ✅ 3. Circle Area Calculator

```js
// Function that accepts radius and returns area (πr²)
```

---

## ✅ Summary

* Functions = blocks of reusable code
* Can take input (parameters) and give output (return)
* Modular, organized, and essential for real-world apps
* Built your first **function-based app** — Grade Calculator!
