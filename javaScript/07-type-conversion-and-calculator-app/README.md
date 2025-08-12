# 🟩 Chapter 7: Type Conversion & Calculator App

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


---

> Before starting writing code for BMI Calculator , let's first understand how it's work.

## BMI Formula and WHO Rules

### **1️⃣ The BMI formula**

We calculate BMI as:

$$
\text{BMI} = \frac{\text{Weight (kg)}}{\text{Height (m)}^2}
$$

Example:
Weight = **70 kg**
Height = **1.72 m**

$$
BMI = \frac{70}{1.72 \times 1.72} \approx 23.66
$$

---

### **2️⃣ The BMI ranges (WHO standard)**

The *numbers* 18.5, 25, and 30 are **cutoff points** for different health categories:

| BMI range       | Category       |
| --------------- | -------------- |
| **< 18.5**      | Underweight    |
| **18.5 – 24.9** | Healthy Weight |
| **25 – 29.9**   | Overweight     |
| **≥ 30**        | Obesity        |

If you measure height in **feet** (which is common in Pakistan, India, US), you **must** first convert it to meters before applying the formula. Otherwise, the BMI will be wrong.

---

### 📏 Height Conversion Formula feet to meeter

1 foot = **0.3048 meters**
1 inch = **0.0254 meters**

If someone’s height is given in **feet + inches**, you do:

$$
\text{meters} = (\text{feet} \times 0.3048) + (\text{inches} \times 0.0254)
$$

---

✅ **Example** – Height 5′ 9″

* Feet part: $5 \times 0.3048 = 1.524 \, m$
* Inches part: $9 \times 0.0254 = 0.2286 \, m$
* Total height = **1.524 + 0.2286 = 1.7526 m** (\~1.75 m)

---

💡 So yes — if you want BMI to be **accurate**, you must:

1. Convert **height** to meters.
2. Make sure **weight** is in kilograms.


## BMI Calculator Example

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
> for example how this conversion will be done.

**Step 1: Convert height from feet to meters**

**5.9 feet**.
1 foot = **0.3048 meters**

$$
5.9 \times 0.3048 = 1.79832 \, \text{meters}
$$

(We can round to **1.80 m**)

---

**Step 2: Apply the BMI formula**

$$
\text{BMI} = \frac{\text{Weight (kg)}}{\text{Height (m)}^2}
$$

$$
\text{BMI} = \frac{92.4}{(1.80 \times 1.80)}
$$

$$
\text{BMI} = \frac{92.4}{3.24}
$$

$$
\text{BMI} \approx 28.52
$$

---

**Step 3: Find category** (using the standard table)

* **< 18.5** → Underweight
* **18.5 – 24.9** → Healthy weight
* **25 – 29.9** → Overweight 
* **≥ 30** → Obesity

📌 **Result**: Answer for this BMI is **28.52**, which falls in the **Overweight** category.

---


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

