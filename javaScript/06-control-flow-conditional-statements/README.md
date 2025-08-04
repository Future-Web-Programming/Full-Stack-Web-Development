# 📘 Chapter 6: Control Flow (Conditional Statements)

**🔥 Learn:  if/else, ternary, switch, nullish coalescing — with hands-on mini projects**


## Projects 

**Vote Eligbility Checker** 

**Month pridictor based on the number***

and many more.

## Control flow or Condtional Statements

### ✅ if, 
The if statement executes block if a condition is true
```js
if( condition )
   statement;
```
The condition can be a value or an expression. Typically, the condition evaluates to a boolean value, which is true or false.

If the condition evaluates to true, the if statement executes the statement. Otherwise, the if statement passes the control to the next statement after it.

If you have more than one statement to execute, you need to wrap them in a block using a pair of curly braces ({}) as follows:


```js
if (condition) {
  // statements to execute
}
```

```js
let age = 18;
if (age >= 18) {
  console.log('You can sign up');
}
```

## Nested If statement

It’s possible to use an if statement inside another if statement. 

```js
let age = 18;
let state = 'PU';

if (state == 'PU') {
  if (age >= 18) {
    console.log('You can drive.');
  }
}
```

> Note: In practice, you should avoid using nested if statements as much as possible.

For example, you can use the logical AND operator && to combine the conditions and use an if statements as follows:

```js
let age = 18;
let state = 'PU';

if (state == 'PU' && age == 18) {
  console.log('You can drive.');
}
```
## if else 

The if statement executes a block if a condition is true. When the condition is false, it does nothing.

But if you want to execute a statement if the condition is false, you can use an if...else statement.

Here’s the syntax of the if...else statement:

```js 
if( condition ) {
  // ...
} else { 
  // ...
}
```

In this syntax, the condition is a value or an expression that evaluates to true or false. If the condition is true, the if...else statement executes the block that follows the if branch.

If the condition is false, the if...else statement executes the block that follows the else branch.

Typically, the condition evaluates to a boolean value, which is true or false. However, if it evaluates to a non-boolean value, the if...else statement will convert it to the boolean value.


```js
let age = 18;

if (age >= 18) {
  console.log('You can sign up.');
} else {
  console.log('You must be at least 18 to sign up.');
}
```
The following example uses a logical operator AND (&&) as the condition in the if block:

```js
let age = 16;
let country = 'USA';

if (age >= 16 && country === 'USA') {
  console.log('You can get a driving license.');
} else {
  console.log('You are not eligible to get a driving license.');
}
```

## if else if

The if an if…else statements accepts a single condition and executes the if or else block accordingly based on the condition.

To check multiple conditions and execute the corresponding block if a condition is true, you use the if...else...if statement like this:

```js
if (condition1) {
  // ...
} else if (condition2) {
  // ...
} else if (condition3) {
  //...
} else {
  //...
}
```

In this syntax, the if...else...if statement has three conditions. In theory, you can have as many conditions as you want to, where each else...if branch has a condition.

The if...else...if statement checks the conditions from top to bottom and executes the corresponding block if the condition is true.

The if...else...if statement stops evaluating the remaining conditions as soon as a condition is true. For example, if the condition2 is true, the if...else...if statement won’t evaluate the condition3.

If all the conditions are false, the if...else...if statement executes the block in the else branch.

## Display month based on month number

```js
let month = 6;
let monthName;

if (month == 1) {
  monthName = 'Jan';
} else if (month == 2) {
  monthName = 'Feb';
} else if (month == 3) {
  monthName = 'Mar';
} else if (month == 4) {
  monthName = 'Apr';
} else if (month == 5) {
  monthName = 'May';
} else if (month == 6) {
  monthName = 'Jun';
} else if (month == 7) {
  monthName = 'Jul';
} else if (month == 8) {
  monthName = 'Aug';
} else if (month == 9) {
  monthName = 'Sep';
} else if (month == 10) {
  monthName = 'Oct';
} else if (month == 11) {
  monthName = 'Nov';
} else if (month == 12) {
  monthName = 'Dec';
} else {
  monthName = 'Invalid month';
}
console.log(monthName);
```

```js
let score = 85;

if (score >= 90) {
  console.log("A Grade");
} else if (score >= 80) {
  console.log("B Grade");
} else {
  console.log("Try again");
}
```

---

## 🔹 Let's do a Project: 🎓 Grade Calculator

```js
let marks = 76;

if (marks >= 90) {
  console.log("A+");
} else if (marks >= 80) {
  console.log("A");
} else if (marks >= 70) {
  console.log("B");
} else {
  console.log("Fail");
}
```


---

## ✅ Ternary Operator (`? :`)

```js
let age = 18;
let status = (age >= 18) ? "Adult" : "Minor";
console.log(status); // Adult
```

A ternary operator can be used to replace an `if..else` statement in certain situations.

### What is a Ternary operator?
A ternary operator evaluates a condition and executes a block of code based on the condition.

Its syntax is:
```js
condition ? expression1 : expression2
```
The ternary operator evaluates the test condition.

If the condition is true, expression1 is executed.
If the condition is false, expression2 is executed.
The ternary operator takes three operands, hence, the name ternary operator. It is also known as a conditional operator.

Let's write a program to determine if a student passed or failed in the exam based on marks obtained.

## vote eligiblity checker
```js
// program to check pass or fail

let marks = prompt('Enter your marks :');

// check the condition
let result = (marks >= 40) ? 'pass' : 'fail';

console.log(`You ${result} the exam.`);
```
```js
Output 1
```
Enter your marks: 78
You pass the exam.
Suppose the user enters 78. Then the condition marks >= 40 is checked which evaluates to true. So the first expression pass is assigned to the result variable.

Ternary Operator Used Instead of `if...else`
In JavaScript, a ternary operator can be used to replace certain types of if..else statements. 
```js
// check the age to determine the eligibility to vote
let age = 15;
let result;

if (age >= 18) {
      result = "You are eligible to vote.";
} else {
      result = "You are not eligible to vote yet.";
}

console.log(result);
```
with ternary operator
```js
// ternary operator to check the eligibility to vote
let age = 15;
let result =
    (age >= 18) ? "You are eligible to vote." : "You are not eligible to vote yet";
console.log(result);
```

```js
You are not eligible to vote yet.
```
## Nested ternary operators
You can also nest one ternary operator as an expression inside another ternary operator.

```js
// program to check if number is positive, negative or zero
let a = 3;
let result = (a >= 0) ? (a == 0 ? "zero" : "positive") : "negative";
console.log(`The number is ${result}.`);
```
```js
The number is positive.
```

> Note: You should try to avoid nested ternary operators whenever possible as they make your code hard to read.

### 📌 Urdu Explanation:

Agar condition `true` ho to pehla value chalega, warna dusra.

### 🔸 Mini Project: Theme Switcher

```js
let theme = "dark";
let bgColor = (theme === "dark") ? "#000" : "#fff";
document.body.style.backgroundColor = bgColor;
```

---

## 🔹 5. ✅ Switch Statement

**(multiple condition alternative)**

switch statement evaluates an expression, compares its results with case values, and executes the statement associated with the matching case value.

The following illustrates the syntax of the switch statement:

```js
switch (expression) {
    case value1:
        statement1;
        break;
    case value2:
        statement2;
        break;
    case value3:
        statement3;
        break;
    default:
        statement;
}
```
## How it works.

First, evaluate the expression inside the parentheses after the switch keyword.

Second, compare the result of the expression with the value1, value2, … in the case branches from top to bottom. 

The switch statement uses the strict comparison (===).

Third, execute the statement in the case branch where the result of the expression equals the value that follows the case keyword. 

The break statement exits the switch statement. If you omit the break statement, the code execution falls through the original case branch into the next one. 

If the result of the expression does not strictly equal any value, the switch statement will execute the statement in the default branch.

The switch statement will stop comparing the expression‘s result with the remaining case values as long as it finds a match.

The switch statement is like the if…else…if statement. But it has more readable syntax.

> Note: In practice, you often use a switch statement to replace a complex if-else-if statement to make the code more readable.


## Get Day of the week using Switch 

```js
let day = 2;
let dayName;
switch (day) {
  case 1:
    dayName = ("Monday");
    break;
  case 2:
    dayName = ("Tuesday");
    break;
  case 3:
    dayName = ("Wednesday");
    break;
  default:
    dayName = ("Invalid day");
}
console.log(dayName)
```

### 📌 Urdu Explanation:

Switch aik cleaner alternative hai `if else if` ka, jab aapko bohot sari conditions check karni ho.

---

### 🔸 Mini Project: Day Message App

```js
let today = new Date().getDay();

switch (today) {
  case 0:
    console.log("Sunday - Relax!");
    break;
  case 1:
    console.log("Monday - Work begins");
    break;
  case 2:
    console.log("Tuesday - Keep going");
    break;
  default:
    console.log("Enjoy your day!");
}
```

---

## ✅ Nullish Coalescing Operator (`??`)

**(fallback for `null` or `undefined` only)**
ES2020 introduced the nullish coalescing operator denoted by the double question marks (??). The nullish coalescing operator is a logical operator that accepts two values:

The nullish coalescing operator returns the second value (value2) if the first value (value2) is null or undefined. Technically, the nullish coalescing operator is equivalent to the following block:

```js
const result = value1;
if(result === null || result === undefined) {
   result = value2;
}
```
## Why nullish coalescing operator
When assigning a default value to a variable, you often use the logical OR operator (||). For example:
```js
let count;
let result = count || 1 ;
console.log(result); // 1
```

In this example, the count variable is undefined, it is coerced to false. Therefore, the result is 1.

However, the logical OR operator (||) sometimes is confusing if you consider 0 or empty strings '' as a valid value like this:

```js
let count = 0;
let result = count || 1;
```
The result is 1, not 0, which you may not expect.

The nullish coalescing operator helps you to avoid this pitfall. It only returns the second value when the first one is either null or undefined.


```js
let username = null;
let displayName = username ?? "Guest";
console.log(displayName); // Guest
```

### 📌 Urdu Explanation:

Agar left value `null` ya `undefined` ho to right value use hoti hai.


---

### 🔸 Mini Demo: User Input Fallback

```js
let input = "";
let result = input ?? "Default Input";
console.log(result); // "" — because it's not null or undefined
```

---

## 🧪 Project: Simple Login System

```js
let username = "admin";
let password = "12345";

if (username === "admin" && password === "12345") {
  console.log("Login successful!");
} else {
  console.log("Login failed!");
}
```

---

## 📦 Final Recap:

| Concept         | Urdu Use Case                      |    |                                      |
| --------------- | ---------------------------------- | -- | ------------------------------------ |
| `if / else`     | Agar yeh ho to yeh karo, warna yeh |    |                                      |
| `? :` (ternary) | Short-hand version of `if/else`    |    |                                      |
| `switch`        | Jab multiple fixed options ho      |    |                                      |
| `??`            | Jab null ya undefined ho           |    |                                      |
| \`              |                                    | \` | Jab koi falsy value fallback dena ho |

---

## 📁 Homework:

1. Use ternary to show `"Even"` or `"Odd"` for a number.
2. Use `??` to fallback a user profile field (like bio or name).
