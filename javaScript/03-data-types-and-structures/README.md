# ✅ Chapter 3: Data Types & Structures in JavaScript

## 🧠 What is a Data Type?

Every value in JavaScript has a **type** — a category that defines:

* What the value is
* What you can do with it

Think of data types as **different kinds of information**:

* Is it a number? A name? A yes/no? A collection?

---

## 🟩 Primitive Data Types (7 total)

> These are the **building blocks** of JS. Each holds a single value and is **immutable**.


## Primitive or Immutable Data Types:

Immutable data types cannot be changed after their creation. Any operation that appears to modify an immutable value actually results in the creation of a new value.

Primitive values (strings, numbers, booleans, undefined, null, bigint, symbol) are immutable in JavaScript.

```js
    let myString = "hello";
    myString = myString + " world"; // Creates a new string, doesn't modify "hello"
    console.log(myString); // Output: "hello world"

    let myNumber = 10;
    myNumber = myNumber + 5; // Creates a new number, doesn't modify 10
    console.log(myNumber); // Output: 15
```
---

## 🔍 Type Checking with `typeof`

```js
console.log(typeof "Hello");  // string
console.log(typeof 10);       // number
console.log(typeof true);     // boolean
console.log(typeof {});       // object
console.log(typeof []);       // object ✅
console.log(typeof null);     // object ❗ (weird JS behavior)
```

---

### 1. **String** – Text values
s
```js
let name = "Alice";
let message = 'Hello!';
```

> 📌 Use quotes ("" or '') — no difference

---

### 2. **Number** – Integer or decimal

```js
let age = 30;
let price = 19.99;
```

> ✅ JavaScript has only **one** number type for both integers & floats

---

### 3. **Boolean** – True/False logic

```js
let isLoggedIn = true;
let hasAccess = false;
```

---

### 4. **Undefined** – Declared but not assigned

```js
let email;
console.log(email); // undefined
```

---

### 5. **Null** – Intentionally empty

```js
let score = null;
```

> ❗ `null` means “I know this is empty”

---

### 6. **Symbol** – Unique & immutable identifier (ES6)

```js
const id = Symbol("userId");
```

> Often used in advanced JS for object keys or private values

---

### 7. **BigInt** – Very large integers (ES2020)

```js
let bigNum = 123456789123456789123456789n;
```

> Add `n` at the end to make a BigInt

---

## 🧠 Recap Table: Primitives

| Type      | Example         | Meaning               |
| --------- | --------------- | --------------------- |
| String    | `"Ali"`         | Text                  |
| Number    | `99`, `12.5`    | Numbers               |
| Boolean   | `true`, `false` | Logic (Yes/No)        |
| Undefined | `let x;`        | No value assigned yet |
| Null      | `let x = null;` | Assigned "empty"      |
| Symbol    | `Symbol("id")`  | Unique token          |
| BigInt    | `123456789n`    | Very large numbers    |

---

## 🟦 Non-Primitive Data Types (Reference Types)

> These types store **collections**, and they are **mutable**.


## Mutable Data Types:

Mutable data types can be modified in place after their creation. Changes directly alter the original value.

Objects and arrays are inherently mutable in JavaScript.
```js    let myObject = { name: "Alice", age: 30 };
    myObject.age = 31; // Modifies the original object
    console.log(myObject); // Output: { name: "Alice", age: 31 }

    let myArray = [1, 2, 3];
    myArray.push(4); // Modifies the original array
    console.log(myArray); // Output: [1, 2, 3, 4]
```

---

### 1. **Object** – Key-value pairs

```js
let person = {
  name: "Sara",
  age: 25
};
```

> Think of it as a **dictionary** or **profile**

---

### 2. **Array** – Ordered list of values

```js
let fruits = ["apple", "banana", "mango"];
```

> 🔢 Index starts from 0

---

### 3. **Function** – Reusable block of code

```js
function greet(name) {
  return "Hello " + name;
}

console.log(greet("Ali"));
```

> Functions are **also objects**

---

### 4. **Date Object**

```js
let now = new Date();
console.log(now);
```

> ✅ Used for working with time, dates, schedules

---

### 5. **Regular Expressions (RegExp)**

```js
let pattern = /hello/i;
console.log(pattern.test("Hello World"));
```

> Used to **search or match text** with patterns

---

## ⚙️ JavaScript is Dynamically Typed

> You don’t need to say the data type when declaring a variable. JS figures it out at runtime.

```js
let x = 10;       // Number
x = "Hello";      // Now it's a String
x = [1, 2, 3];    // Now it's an Array
```

> 📌 The type belongs to the **value**, not the variable.


## 🔍 JavaScript Weird Facts

---

### ❗ `NaN` is a Number

```js
console.log(typeof NaN);      // number
console.log(NaN === NaN);     // false ❗
```

> `NaN` stands for “Not a Number”, but its type **is** number.

---

### ❗ Symbol is Always Unique

```js
let s1 = Symbol("id");
let s2 = Symbol("id");

console.log(s1 === s2); // false
```

> Even if description is same, each Symbol is unique.

---

### ❗ Single characters are strings

```js
let a = 'a';      // Still a string
console.log(typeof a); // string
```

> No separate character type in JS

---

### ❗ Primitive values behave like objects temporarily

```js
let str = "hello";
console.log(str.length); // 5

// Internally creates a temporary wrapper object
```

---

## 🧠 Null vs Undefined

| Property | `undefined`           | `null`                  |
| -------- | --------------------- | ----------------------- |
| Meaning  | Declared but no value | Assigned “no value”     |
| Set by   | JavaScript            | Developer (you!)        |
| Type     | `undefined`           | `object` (weird legacy) |

---

## 🧪 Mini Practice: Check Your Learning

```js
let age = 30;
let name = "Aisha";
let isStudent = true;
let city;

console.log(typeof age);         // number
console.log(typeof name);        // string
console.log(typeof isStudent);   // boolean
console.log(typeof city);        // undefined
```

---

## ❌ Common Mistakes to Avoid

| Mistake                    | Why it's wrong                       |
| -------------------------- | ------------------------------------ |
| `null == undefined` → true | They’re different but loosely equal  |
| `typeof null` → object     | Known JavaScript bug                 |
| `typeof []` → object       | Arrays are objects internally        |
| Mixing types without care  | `"5" + 1` = `"51"` (string), not `6` |

---

## 🧩 Let's create a User Profile Card

Create a profile using all data types:

```js
let fullName = "Ali Khan";
let age = 21;
let isStudent = true;
let hobbies = ["coding", "reading"];
let contact = {
  phone: "123456789",
  email: "ali@example.com"
};
```

Print them all using `console.log()`.

---

## 📚 Homework

1. Create a variable of each **primitive type**
2. Create an object representing yourself
3. Use `typeof` on all of them
4. Test: What does `console.log(typeof null)` give?
5. Explore: Try creating a `Symbol` and compare it with another
