# 🟩 Chapter 7: Type Conversion & Calculator App

**(Understand Data Types + Build Your First Calculator)**

**BMI Calculator App**
**Basic Simple Calculator App**

---

## 🤔 1. Why Type Conversion?

When we take input using `prompt()`, it always gives us a **string** (text), even if the user enters a number.

> 📌 Example:

```js
let num = prompt("Enter a number:");
console.log(typeof num); // Output: "string"
```

To **do calculations**, we must convert it into a **number**.

---

## 🔁 2. Type Conversion Methods in JavaScript

| Method         | Usage                 | Converts                  |
| -------------- | --------------------- | ------------------------- |
| `Number()`     | `Number("25")`        | Converts string to number |
| `parseInt()`   | `parseInt("12.99")`   | Converts to whole number  |
| `parseFloat()` | `parseFloat("12.99")` | Converts to decimal       |
| `String()`     | `String(99)`          | Number → String           |

---

## 🧪 Examples:

```js
let age = prompt("Enter your age:");
console.log(typeof age); // string

let ageNum = Number(age);
console.log(typeof ageNum); // number
```

> ✅ Always convert user input before calculations!

---

## ➕ 3. Calculator Example: Addition

```js
let num1 = prompt("Enter first number:");
let num2 = prompt("Enter second number:");

// Convert to number
num1 = Number(num1);
num2 = Number(num2);

let result = num1 + num2;
alert("The result is: " + result);
```

---

## ⚙️ 4. Build Your First Project: **Basic Calculator App**

### 🔸 Project Requirements:

* Take two numbers from the user
* Ask which operation they want to perform (+, -, \*, /)
* Show the result using `alert()` and `console.log()`

---

### 🔧 Step-by-Step Code:

```js
let num1 = Number(prompt("Enter first number:"));
let num2 = Number(prompt("Enter second number:"));

let operator = prompt("Enter operator (+, -, *, /)");

let result;

if (operator === "+") {
    result = num1 + num2;
} else if (operator === "-") {
    result = num1 - num2;
} else if (operator === "*") {
    result = num1 * num2;
} else if (operator === "/") {
    result = num1 / num2;
} else {
    result = "Invalid operator!";
}

alert("Result: " + result);
console.log("Result: " + result);
document.write("<h2>Result: " + result + "</h2>");
```

> 💡 Try it on [Replit](https://replit.com/), [PlayCode](https://playcode.io/), or browser console.

---

## BMI Calculator

## BMI Calculator 

```js

let weight = 70; // kg
let height = 1.72; // meter

// calculate the body mass index (BMI)
let bmi = weight / (height * height);

let weightStatus;

if (bmi < 18.5) {
  weightStatus = 'Underweight';
} else if (bmi >= 18.5 && bmi <= 24.9) {
  weightStatus = 'Healthy Weight';
} else if (bmi >= 25 && bmi <= 29.9) {
  weightStatus = 'Overweight';
} else {
  weightStatus = 'Obesity';
}

console.log(weightStatus);
```


## 🧪 Practice Task (Student Exercise)

> 🎯 Make your own **mini calculator** that:

1. Takes user name
2. Takes two numbers
3. Performs subtraction
4. Greets the user by name and shows result

> 🧠 Sample:

```js
let name = prompt("Your name?");
let a = Number(prompt("First number?"));
let b = Number(prompt("Second number?"));

let result = a - b;

alert("Hi " + name + ", your result is: " + result);
```

---

## ❌ Common Mistakes

| Mistake                                            | Why it's wrong                      |
| -------------------------------------------------- | ----------------------------------- |
| `let num = prompt("Enter"); let total = num + 10;` | Adds as string (`"5" + 10 = "510"`) |
| Forgetting `Number()`                              | No type conversion = wrong result   |
| Typing wrong operator (`x` instead of `*`)         | Not recognized                      |

---

## 📚 Homework

1. Take 3 inputs:

   * Your name
   * Two numbers
2. Perform all 4 operations: `+`, `-`, `*`, `/`
3. Use `alert()` to show each result
4. Print all values using `console.log()`

---

## 🧠 Student Q\&A

> ❓ Why doesn't `"5" + 5` give `10`?
> ✅ Because `"5"` is a string → Result: `"55"` (not math)

> ❓ Which is better: `Number()` or `parseInt()`?
> ✅ Use `Number()` if decimal values are allowed.
> Use `parseInt()` if only integers are needed.

> ❓ Can I put everything in one `alert()`?
> ✅ Yes! Use `+` to combine messages.

