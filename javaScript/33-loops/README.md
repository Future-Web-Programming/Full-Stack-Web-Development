# 🟩 Chapter 33: Loops in JavaScript

**(for, while, do...while — Easy to Understand with Real-Life Examples)**

---

## 🎯 Learning Outcomes

By the end of this chapter, students will be able to:

* Understand what loops are and why we use them
* Use `for`, `while`, and `do...while` loops effectively
* Use loops with arrays and conditional logic
* Avoid common mistakes like infinite loops
* Build mini-projects using loops

---

## 🧠 1. What Are Loops?

Loops are used to **repeat code** until a **condition** is met.

> Example: “Repeat 5 push-ups.”
> In JavaScript:
> `do { pushup(); } while (count < 5)`

---

## 🔁 2. The `for` Loop

### 🔹 Syntax:

```js
for (initialization; condition; update) {
  // code to repeat
}
```

### 🔹 Example:

```js
for (let i = 1; i <= 5; i++) {
  console.log("Pushup", i);
}
```

**Output:**

```
Pushup 1
Pushup 2
Pushup 3
Pushup 4
Pushup 5
```

---

## 🔄 3. The `while` Loop

### 🔹 Syntax:

```js
let i = 1;
while (i <= 5) {
  console.log("Jump", i);
  i++;
}
```

**Best when:** You don’t know how many times to loop ahead of time.

---

## 🔁 4. The `do...while` Loop

Runs the code **at least once**, even if the condition is false.

```js
let i = 1;
do {
  console.log("Run", i);
  i++;
} while (i <= 3);
```

---

## 📌 5. Looping Over Arrays

```js
let fruits = ["apple", "banana", "cherry"];

for (let i = 0; i < fruits.length; i++) {
  console.log(fruits[i]);
}
```

---

## 🚫 6. Common Mistakes to Avoid

| ❌ Mistake                   | 🛠 Fix                                    |
| --------------------------- | ----------------------------------------- |
| Infinite loop               | Ensure condition will eventually be false |
| Off-by-one error            | Carefully set `i <=`, `i <` etc.          |
| Changing array size in loop | Avoid modifying array while iterating     |

---

## 🧠 Real-Life Examples

### ✅ Countdown Timer

```js
for (let i = 10; i >= 1; i--) {
  console.log(i);
}
console.log("Blastoff!");
```

### ✅ Even Numbers Printer

```js
for (let i = 2; i <= 10; i += 2) {
  console.log(i);
}
```

### ✅ Simple Table of 5

```js
let num = 5;
for (let i = 1; i <= 10; i++) {
  console.log(`${num} x ${i} = ${num * i}`);
}
```

---

## 🧪 Mini Projects Using Loops

### 🔹 1. Multiplication Table Generator

> Input a number → Output full table using a loop.

### 🔹 2. Sum of All Numbers from 1 to n

```js
let sum = 0;
for (let i = 1; i <= 100; i++) {
  sum += i;
}
console.log("Sum:", sum);
```

### 🔹 3. Reverse a String using Loop

```js
let str = "hello";
let reversed = "";

for (let i = str.length - 1; i >= 0; i--) {
  reversed += str[i];
}
console.log(reversed); // "olleh"
```

---

## 🔗 Online Practice Playground

* [JSFiddle](https://jsfiddle.net/)
* [PlayCode](https://playcode.io/)
* [Replit Loop Practice](https://replit.com/)

---


## 🧠 Homework / Practice

1. Print odd numbers from 1 to 50
2. Create a star pattern using loops:

```
*
**
***
****
*****
```

3. Write a program to count how many times the letter "a" appears in a word
4. Build a simple login simulator that allows 3 attempts using a loop

