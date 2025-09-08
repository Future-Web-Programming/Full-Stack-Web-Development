
# 🟩 Chapter 13: JavaScript Object Methods

**(Build a Mini Calculator & More)**

> Note: before start learnig about Object methods, we have to learn about object spread operator first.

## Spread Operator With Object
You can also use the spread operator with object literals. For example,
```js
let obj1 = { x : 1, y : 2 };
let obj2 = { z : 3 };

// use the spread operator to add
// members of obj1 and obj2 to obj3
let obj3 = {...obj1, ...obj2};

// add obj1 and obj2 without spread operator
let obj4 = {obj1, obj2};

console.log("obj3 =", obj3);
console.log("obj4 =", obj4);
```
```js

obj3 = { x: 1, y: 2, z: 3 }
obj4 = { obj1: { x: 1, y: 2 }, obj2: { z: 3 } }
```

> Here, the properties of obj1 and obj2 are added to obj3 using the spread operator.

However, when we add those two objects to obj4 without using the spread operator, we get obj1 and obj2 as keys for obj4.
## 📦 What is an Object Method?

An **object method** is simply a **function inside an object**.

```js
let person = {
  name: "Ali",
  greet: function() {
    console.log("Hello, I am " + this.name);
  }
};

person.greet();  // Hello, I am Ali
```

🧠 `this` refers to the object the method is inside.

---

## 🧠 Why Use Methods?

* Organizes behavior inside data
* Helps objects "act" like real-world entities
* Keeps code clean and modular

---

## 🔍 Method Syntax Overview

```js
let objectName = {
  key: value,
  methodName: function() {
    // do something
  }
};
```

OR using **shorthand syntax**:

```js
let objectName = {
  methodName() {
    // do something
  }
};
```

---

## 🎯 Example 1: Basic Method with `this`

```js
let student = {
  name: "Ayesha",
  age: 20,
  showDetails: function() {
    console.log("Name: " + this.name + ", Age: " + this.age);
  }
};

student.showDetails(); // Name: Ayesha, Age: 20
```

---

## 🎯 Example 2: Calculator App Using Object

```js
let calculator = {
  num1: 10,
  num2: 5,

  add: function() {
    return this.num1 + this.num2;
  },

  subtract: function() {
    return this.num1 - this.num2;
  },

  multiply: function() {
    return this.num1 * this.num2;
  },

  divide: function() {
    return this.num1 / this.num2;
  }
};

console.log("Add:", calculator.add());         // 15
console.log("Subtract:", calculator.subtract()); // 5
console.log("Multiply:", calculator.multiply()); // 50
console.log("Divide:", calculator.divide());     // 2
```

---

## ⚙️ Reusable with Parameters

Let’s now build a **flexible calculator**:

```js
let calculator = {
  add: function(a, b) {
    return a + b;
  },
  subtract: function(a, b) {
    return a - b;
  },
  multiply: function(a, b) {
    return a * b;
  },
  divide: function(a, b) {
    return a / b;
  }
};

console.log(calculator.add(12, 3));     // 15
console.log(calculator.multiply(4, 6)); // 24
```

---

## 🎯 Real-World Mini App: Profile Generator

```js
let user = {
  firstName: "Bilal",
  lastName: "Ahmed",
  age: 21,

  fullName: function() {
    return this.firstName + " " + this.lastName;
  },

  bio: function() {
    return this.fullName() + " is " + this.age + " years old.";
  }
};

console.log(user.fullName()); // Bilal Ahmed
console.log(user.bio());      // Bilal Ahmed is 21 years old.
```

---

## 🧠 Understanding `this`

| Situation                               | `this` Refers To |
| --------------------------------------- | ---------------- |
| Inside an object method                 | That object      |
| Inside a regular function (strict mode) | `undefined`      |
| Outside any function                    | Global object    |

🧪 Try logging:

```js
console.log(this); // In browser → Window object
```

---

## 💡 Why Use Object Methods?

✅ Keeps logic tied to data
✅ Reusable and maintainable
✅ Real-world simulation (like OOP)

---

## 📚 Bonus: Dynamic Object with Method

```js
function createUser(name, age) {
  return {
    name,
    age,
    showInfo() {
      console.log(`${this.name} is ${this.age} years old`);
    }
  };
}

let u1 = createUser("Hamza", 25);
u1.showInfo(); // Hamza is 25 years old
```

---

## 🎯 YouTube Presentation Flow

1. Animate: Object as a person doing tasks
2. Show method with and without `this`
3. Build a calculator live
4. Let students build their own profile or product
5. Challenge at end

---

## 🧪 Student Practice Tasks

### ✅ 1. Create a Book object

```js
let book = {
  title: "JS Mastery",
  author: "Future Programming",
  summary: function() {
    // Show title by author
  }
};
```

---

### ✅ 2. Product Price Calculator

```js
let product = {
  name: "Keyboard",
  price: 3000,
  quantity: 3,
  totalPrice: function() {
    // return price * quantity
  }
};
```

---

### ✅ 3. BMI Calculator Method

```js
let person = {
  weight: 60,
  height: 1.7,
  bmi: function() {
    // BMI = weight / (height^2)
  }
};
```

---

## ✅ Summary

* Methods are **functions inside objects**
* Use `this` to access the object’s own properties
* Useful for calculators, profiles, dynamic behavior
* You built a **calculator and profile generator app**

---

## 🔜 Coming Next: Chapter 14 – JavaScript Arrays

In Chapter 14, we’ll cover:

* What arrays are
* How to store and manipulate lists of data
* Push, pop, loop, and use array methods
* Projects: Todo App, Guest List App

---

Would you like me to now prepare
**Chapter 14: JavaScript Arrays + Projects**?
