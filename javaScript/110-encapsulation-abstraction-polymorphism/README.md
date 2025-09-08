Perfect! Let’s now dive into one of the **most foundational pillars** of writing scalable, maintainable, and reusable JavaScript code — the **4 Pillars of Object-Oriented Programming (OOP)**.

---

## ✅ Chapter 110: **Encapsulation, Abstraction, Inheritance, and Polymorphism in JavaScript**

> 🧠 *Goal: Learn how to structure real-world, scalable code in JavaScript using the 4 OOP pillars — with examples, benefits, and ES6+ implementation.*

---

### 🔷 What are the 4 Pillars of OOP?

| Pillar        | Meaning                                                           |
| ------------- | ----------------------------------------------------------------- |
| Encapsulation | Protecting internal data and exposing only what’s necessary       |
| Abstraction   | Hiding complexity and showing only relevant details               |
| Inheritance   | Reusing code by inheriting behavior from other objects or classes |
| Polymorphism  | Using a unified interface for different types (many forms)        |

---

## 🧱 1. **Encapsulation** – *“Hide the details”*

### 📦 Definition:

Encapsulation is the bundling of **data (state)** and **methods (behavior)** that operate on that data into one unit. It also involves **restricting direct access** to some components.

### ✅ Benefits:

* Prevents unintended changes to state
* Protects object integrity
* Enables API-like class design

### 🔐 ES6 Example: Private Properties

```js
class BankAccount {
  #balance = 0; // private field

  constructor(owner) {
    this.owner = owner;
  }

  deposit(amount) {
    if (amount > 0) this.#balance += amount;
  }

  getBalance() {
    return this.#balance;
  }
}

const acc = new BankAccount("Ayesha");
acc.deposit(5000);
console.log(acc.getBalance()); // ✅ 5000
console.log(acc.#balance);     // ❌ SyntaxError: Private field
```

---

## 🧱 2. **Abstraction** – *“Only show what matters”*

### 📦 Definition:

Abstraction hides **internal implementation details** and exposes only the **essential functionality** to the user.

Think of a car: You don’t need to know how the engine works to drive it — you just use the pedals and steering.

### ✅ Example in JavaScript

```js
class Car {
  #startEngine() {
    console.log("Engine started");
  }

  drive() {
    this.#startEngine(); // abstraction in action
    console.log("Driving...");
  }
}

const car = new Car();
car.drive();     // ✅ Engine started, Driving...
car.#startEngine(); // ❌ Cannot access private method
```

> 🔍 **We expose only `drive()`** — the rest is hidden.

---

## 🧱 3. **Inheritance** – *“Reuse code through extension”*

### 📦 Definition:

Inheritance allows a class (child/subclass) to inherit properties and methods from another class (parent/superclass).

### ✅ ES6 Class Inheritance

```js
class Animal {
  constructor(name) {
    this.name = name;
  }

  speak() {
    console.log(`${this.name} makes a sound`);
  }
}

class Dog extends Animal {
  speak() {
    console.log(`${this.name} barks`);
  }
}

const dog = new Dog("Tiger");
dog.speak(); // Tiger barks
```

> 📌 Inheritance allows `Dog` to reuse and override behavior from `Animal`.

---

## 🧱 4. **Polymorphism** – *“Same interface, different behavior”*

### 📦 Definition:

Polymorphism means "many forms" — the same method name can behave differently depending on the object type.

### ✅ Example: Method Overriding

```js
class Bird {
  fly() {
    console.log("Bird is flying");
  }
}

class Eagle extends Bird {
  fly() {
    console.log("Eagle soars high");
  }
}

class Penguin extends Bird {
  fly() {
    console.log("Penguins can't fly");
  }
}

const birds = [new Eagle(), new Penguin()];

birds.forEach(b => b.fly());
// Eagle soars high
// Penguins can't fly
```

> 🧠 Polymorphism shines when different objects share a common interface but execute differently.

---

### 🧪 Challenge Task

> Create a `Shape` class with a `draw()` method. Extend it with `Circle`, `Square`, and `Triangle`, each overriding `draw()`.

<details>
<summary>✅ Sample Solution</summary>

```js
class Shape {
  draw() {
    console.log("Drawing shape");
  }
}

class Circle extends Shape {
  draw() {
    console.log("Drawing circle");
  }
}

class Square extends Shape {
  draw() {
    console.log("Drawing square");
  }
}

const shapes = [new Circle(), new Square()];
shapes.forEach(s => s.draw());
```

</details>

---

## 🧠 Summary Table

| Concept       | Purpose                         | Example Used                     |
| ------------- | ------------------------------- | -------------------------------- |
| Encapsulation | Hide internal data              | `#balance`, private method       |
| Abstraction   | Show only relevant parts        | `drive()` hides `#startEngine()` |
| Inheritance   | Reuse code from parent          | `Dog extends Animal`             |
| Polymorphism  | Same method, different behavior | `fly()` in Eagle, Penguin        |

---

### 🔗 Related Concepts (Preview for Future Chapters)

* **Composition vs Inheritance**
* **Factory Pattern**
* **Strategy Pattern**
* **Mixin-Based Inheritance**
* **SOLID Principles (Clean Code)**

---

### 🌐 Practice Online

* [Playcode.io](https://playcode.io)
* [CodeSandbox](https://codesandbox.io)
* [StackBlitz](https://stackblitz.com)

---

### 🚀 Next Up: Chapter 111 — *“ES6 Classes vs Constructor Functions”*

We’ll compare older OOP style with the new ES6 class syntax and explore how they work internally.

---

Would you like me to start preparing **Chapter 111: ES6 Classes vs Constructor Functions**?
