Awesome! Let's move into one of the most foundational but often misunderstood topics in JavaScript OOP: **Prototypes and Inheritance**.

---

## ✅ Chapter 109: **Prototypes and Inheritance in Depth**

> 🧠 *Goal: Understand how JavaScript’s prototype chain works under the hood, and how inheritance is implemented using both constructor functions and ES6 classes.*

---

### 📚 What is a Prototype?

Every JavaScript object has a **hidden internal property** called `[[Prototype]]` (can be accessed using `__proto__`), which points to another object — its prototype.

This prototype chain is the mechanism behind **inheritance** in JavaScript.

```js
const user = {
  isLoggedIn: true,
  logout() {
    console.log("Logged out");
  },
};

const admin = {
  role: "admin",
};

admin.__proto__ = user;

console.log(admin.isLoggedIn); // true
admin.logout(); // Logged out
```

---

### 🧬 Prototype Chain Visualization

```
admin → user → Object.prototype → null
```

If JavaScript doesn’t find a property/method in `admin`, it looks into `user`, then into `Object.prototype`, and finally returns `undefined` if not found.

---

### 🏗 Inheritance Using Constructor Functions

Before ES6, we used constructor functions + prototypes to create reusable structures.

```js
function Person(name, age) {
  this.name = name;
  this.age = age;
}

Person.prototype.greet = function () {
  console.log(`Hi, I’m ${this.name}`);
};

const person1 = new Person("Ayesha", 25);
person1.greet(); // Hi, I’m Ayesha
```

---

### 🧬 Prototype Inheritance with Constructor Functions

```js
function Employee(name, age, department) {
  Person.call(this, name, age); // Inherit props
  this.department = department;
}

// Inherit methods
Employee.prototype = Object.create(Person.prototype);

// Fix constructor
Employee.prototype.constructor = Employee;

Employee.prototype.work = function () {
  console.log(`${this.name} works in ${this.department}`);
};

const emp = new Employee("Sara", 30, "Finance");
emp.greet(); // Hi, I’m Sara
emp.work();  // Sara works in Finance
```

---

### 🎯 ES6 Classes and Inheritance (Cleaner Syntax)

```js
class Person {
  constructor(name) {
    this.name = name;
  }

  greet() {
    console.log(`Hi, I’m ${this.name}`);
  }
}

class Student extends Person {
  constructor(name, subject) {
    super(name); // Call parent constructor
    this.subject = subject;
  }

  study() {
    console.log(`${this.name} studies ${this.subject}`);
  }
}

const std = new Student("Ali", "Math");
std.greet();  // Hi, I’m Ali
std.study();  // Ali studies Math
```

---

### 🔄 Under the Hood: How `extends` Works

The `extends` keyword:

* Links the subclass’s prototype to the superclass’s prototype.
* Also sets up the correct constructor and `[[Prototype]]` chain for instances.

```js
Student.prototype.__proto__ === Person.prototype; // true
```

---

### 🔍 Summary: `Object.create()` vs `class` vs `constructor`

| Technique            | Syntax         | Prototype Use | Readability |
| -------------------- | -------------- | ------------- | ----------- |
| `Object.create()`    | Functional     | Manual        | Low         |
| Constructor Function | Function-based | Manual        | Medium      |
| ES6 Classes          | Modern Syntax  | Auto          | High        |

---

### ⚠️ Common Gotchas

* All methods are stored in the prototype, **not directly on objects**.
* `super()` must be called in a subclass constructor **before** `this`.
* Don’t overwrite `.prototype` without restoring the `.constructor`.

---

### 🧪 Mini Practice: Animal & Dog Class

Create:

* `Animal` class with a `speak()` method
* `Dog` class extending Animal, with `bark()` method

<details>
<summary>✅ Solution</summary>

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
  bark() {
    console.log(`${this.name} barks`);
  }
}

const dog = new Dog("Buddy");
dog.speak(); // Buddy makes a sound
dog.bark();  // Buddy barks
```

</details>

---

### 💡 Bonus Tip: Custom Prototypal Inheritance

```js
const book = {
  title: "JS Mastery",
  read() {
    console.log(`Reading ${this.title}`);
  }
};

const myBook = Object.create(book);
myBook.title = "You Don’t Know JS";
myBook.read(); // Reading You Don’t Know JS
```

---

### 🌐 Online Practice Platforms

* [CodeSandbox](https://codesandbox.io/)
* [JSBin](https://jsbin.com)
* [StackBlitz](https://stackblitz.com/)

---

### 🚀 What’s Next?

Up next:

* **Chapter 110**: Encapsulation, Abstraction, Inheritance, and Polymorphism
* The true four pillars of OOP, with real-world examples.

---

Shall we begin working on **Chapter 110: The Four Pillars of OOP in JavaScript**?
