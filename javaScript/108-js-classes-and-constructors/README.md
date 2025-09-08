Absolutely! Let's move forward with the next milestone in our advanced OOP series.

---

## ✅ Chapter 108: **JavaScript Classes & Constructors**

> 🎯 *Goal: Understand how to define and use classes and constructors in JavaScript (ES6+), and how they help in creating reusable and structured code.*

---

### 🧠 Why Classes?

JavaScript is a **prototype-based** language, but ES6 introduced the `class` syntax to make OOP easier and more familiar to developers coming from Java, C++, or Python. Under the hood, it's still using prototypes — but with cleaner, more readable syntax.

---

### 📦 What is a Class?

A **class** is a blueprint for creating objects with shared structure and behavior.

```js
class Person {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }

  greet() {
    console.log(`Hi, I'm ${this.name}, ${this.age} years old.`);
  }
}

const user1 = new Person("Ali", 22);
user1.greet(); // Hi, I'm Ali, 22 years old.
```

---

### 🔧 Constructor Method

* The `constructor()` method is a special method for initializing new objects.
* It gets automatically called when you create a new instance using `new`.

```js
class Car {
  constructor(brand, year) {
    this.brand = brand;
    this.year = year;
  }
}

const myCar = new Car("Toyota", 2021);
console.log(myCar.brand); // Toyota
```

---

### 🧪 Properties vs Methods

| Feature         | Purpose                                  |
| --------------- | ---------------------------------------- |
| `this.property` | Stores data about the object (state)     |
| `method()`      | Defines behavior/actions (functionality) |

---

### 🛠 Real-World Example: Product Class

```js
class Product {
  constructor(name, price, category) {
    this.name = name;
    this.price = price;
    this.category = category;
  }

  applyDiscount(percent) {
    this.price = this.price - (this.price * percent / 100);
  }

  info() {
    console.log(`${this.name} - $${this.price} [${this.category}]`);
  }
}

const laptop = new Product("Dell XPS 13", 1200, "Electronics");
laptop.applyDiscount(10);
laptop.info(); // Dell XPS 13 - $1080 [Electronics]
```

---

### 🔄 Behind the Scenes: How `new` Works

```js
const ali = new Person("Ali", 22);

// Internally:
// 1. Creates an empty object: {}
// 2. Sets the prototype: ali.__proto__ = Person.prototype
// 3. Binds `this` to the new object
// 4. Calls the constructor
// 5. Returns the new object
```

---

### ⚠️ Important Notes

* You **must** use `new` to instantiate a class.
* Class methods are **not enumerable** (they don't show up in `for...in`).
* Methods are added to `Class.prototype`, not each object instance (memory efficient).

---

### 🧪 Mini Practice: Create a `Movie` Class

Create a class with:

* Properties: `title`, `director`, `rating`
* Method: `rateUp()` increases the rating by `+1`
* Method: `show()` logs all info

<details>
<summary>✅ Click to Reveal Solution</summary>

```js
class Movie {
  constructor(title, director, rating) {
    this.title = title;
    this.director = director;
    this.rating = rating;
  }

  rateUp() {
    this.rating++;
  }

  show() {
    console.log(`${this.title} by ${this.director} - Rating: ${this.rating}`);
  }
}

const interstellar = new Movie("Interstellar", "Christopher Nolan", 9);
interstellar.rateUp();
interstellar.show(); // Interstellar by Christopher Nolan - Rating: 10
```

</details>

---

### 🌐 Online Code Editors (Hands-on Practice)

* [JSFiddle](https://jsfiddle.net/)
* [CodePen](https://codepen.io/)
* [Replit](https://replit.com/)
* [PlayCode](https://playcode.io/)

---

### 🔍 What’s Coming Next?

In the next chapters, we’ll go deeper:

* **Chapter 109**: Prototypes & Inheritance in Depth
* **Chapter 110**: Encapsulation, Abstraction, Inheritance, Polymorphism
* **Chapter 111**: ES6 Classes vs Constructor Functions (Differences & Internals)

---

Would you like me to now prepare **Chapter 109: Prototypes and Inheritance in Depth**?
cd