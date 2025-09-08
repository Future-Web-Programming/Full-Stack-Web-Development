# 🟩 Chapter 12: JavaScript Objects

**(Build a Student Record App)**

## 📦 What is an Object?

An **object** in JavaScript is a **collection of related data**.
Think of it as a **mini database**.

> 💬 Urdu/Hindi: Object ek aisi cheez hai jismein aap key-value pairs ke zariye information store karte hain.

### ✅ Real-Life Analogy: A Student

| Property | Value |
| -------- | ----- |
| Name     | Ali   |
| Age      | 17    |
| Grade    | A     |

---

## 🛠 Creating an Object

```js
let student = {
  name: "Ali",
  age: 17,
  grade: "A"
};
```

---

## 🔍 Object Syntax Breakdown

```js
let objectName = {
  key1: value1,
  key2: value2,
  ...
};
```

---

## 🧾 Accessing Object Values

### 🔹 Dot Notation:

```js
console.log(student.name);  // "Ali"
```

### 🔹 Bracket Notation:

```js
console.log(student["age"]);  // 17
```

> ✅ Bracket notation is helpful when key is dynamic or has spaces

---

## ✏️ Updating Object Values

```js
student.grade = "A+";
student["age"] = 18;
```

---

## ➕ Adding New Properties

```js
student.city = "Lahore";
```

---

## ❌ Deleting a Property

```js
delete student.city;
```

---

## 🔁 Looping Through an Object

```js
for (let key in student) {
  console.log(key + ": " + student[key]);
}
```

---

## 🧠 Object vs Array (Key Difference)

| Feature  | Object           | Array              |
| -------- | ---------------- | ------------------ |
| Stores   | Key-value pairs  | List of values     |
| Use case | Complex data     | Ordered data       |
| Syntax   | `{ key: value }` | `[value1, value2]` |

---

## 🔐 Nested Objects

```js
let student = {
  name: "Ayesha",
  age: 18,
  marks: {
    math: 90,
    english: 85
  }
};

console.log(student.marks.math);  // 90
```

---

## 🧩 Real World Project: Student Record App

### 🧪 Goal:

Build a mini app that stores student data and shows:

* Name
* Roll Number
* Subjects with marks
* Total and average
* Grade (via function)

---

### 🔸 Step-by-Step Code

```js
let student = {
  name: "Usman",
  rollNo: 123,
  marks: {
    math: 85,
    english: 78,
    science: 92
  }
};

function calculateTotal(marks) {
  return marks.math + marks.english + marks.science;
}

function calculateAverage(total) {
  return total / 3;
}

function getGrade(avg) {
  if (avg >= 80) return "A+";
  else if (avg >= 70) return "A";
  else if (avg >= 60) return "B";
  else return "Fail";
}

// App Execution
let totalMarks = calculateTotal(student.marks);
let averageMarks = calculateAverage(totalMarks);
let grade = getGrade(averageMarks);

console.log("Student Name:", student.name);
console.log("Roll Number:", student.rollNo);
console.log("Total Marks:", totalMarks);
console.log("Average Marks:", averageMarks.toFixed(2));
console.log("Grade:", grade);
```

---

## 🧪 Output

```
Student Name: Usman  
Roll Number: 123  
Total Marks: 255  
Average Marks: 85.00  
Grade: A+
```


---

## ✅ Student Practice Tasks

### 🔸 Task 1: Create an object for your own profile

```js
// name, age, city, skills (array)
```

### 🔸 Task 2: Make a product object

```js
// name, price, quantity
// Show total price: price * quantity
```

### 🔸 Task 3: Nested Object - Student with multiple subjects

```js
// Build object with subjects as nested keys
// Use function to calculate total
```

---

## ❓ FAQ

> ❓ Can object keys be numbers?
> ✅ No. Object keys are always strings (internally).

> ❓ Can we store a function inside an object?
> ✅ Yes! That’s called a **method**. You’ll learn this in Chapter 13.

> ❓ Are arrays also objects?
> ✅ Technically, yes. Arrays are a **special type of object**.


