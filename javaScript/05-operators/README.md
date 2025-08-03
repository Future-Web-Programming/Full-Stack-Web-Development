# 📘 Chapter 5: JavaScript Operators 

## 🔹 1. Operators Overview

JavaScript has several built-in operators used to perform operations on values and variables.

operators are special symbols that perform operations on one or more operands (values). 


```js
2 + 3;  // 5
```
> Here, we used the + operator to add the operands 2 and 3.

## JavaScript Operator Types

> Here is a list of different JavaScript operators you will learn in this tutorial:
```js
**Arithmetic Operators**

**Assignment Operators**

**Comparison Operators**

**Logical Operators**

**Bitwise Operators**

**String Operators**

**Miscellaneous Operators**
```
### ✅ Arithmetic Operators 

```js
+  -  *  /  %  **  ++  --
```

We use arithmetic operators to perform arithmetic calculations like addition, subtraction, etc. 
```js
5 - 3;  // 2
```
Here, we used the - operator to subtract 3 from 5.

### Commonly Used Arithmetic Operators

| Operator	Name	| Example |
|--|--|
| +	Addition |	3 + 4  // 7 |
| -	Subtraction	| 5 - 3  // 2 |
| *	Multiplication	| 2 * 3  // 6 |
| /	Division |	4 / 2  // 2 |
| %	Remainder |	5 % 2  // 1 |
| ++	Increment |(increments by 1)	++5 or 5 | |++ | // 6
| --	Decrement |(decrements by 1)	--4 or 4--  // 3 |
| **	Exponentiation |(Power)	4 ** 2  // 16 |
|--|--|

```js
let x = 5;

// addition operator
console.log("Addition: x + 3 = ", x + 3);

// subtraction operator
console.log("Subtraction: x - 3 =", x - 3);

// multiplication operator
console.log("Multiplication: x * 3 =", x * 3);

// division operator
console.log("Division: x / 3 =", x / 3);

// remainder operator
console.log("Remainder: x % 3 =", x % 3);

// increment operator
console.log("Increment: ++x =", ++x);

// decrement operator
console.log("Decrement: --x =", --x);

// exponentiation operator
console.log("Exponentiation: x ** 3 =", x ** 3);
```

```js
Addition: x + 3 =  8
Subtraction: x - 3 = 2
Multiplication: x * 3 = 15
Division: x / 3 = 1.6666666666666667
Remainder: x % 3 = 2
Increment: ++x = 6
Decrement: --x = 5
Exponentiation: x ** 3 = 125
```
> Note: The increment operator ++ adds 1 to the operand. And, the decrement operator -- decreases the value of the operand by 1.


## Pre-increment (++variable)
The pre-increment operator increments the value of the variable before the variable's value is used in the expression or returned.
The new, incremented value is then used in the current operation.

```js
let x = 5;
let y = ++x; // x becomes 6, then y is assigned 6
console.log(x); // Output: 6
console.log(y); // Output: 6
```

## Post-increment (variable++)

The post-increment operator increments the value of the variable after the variable's original value has been used in the expression or returned.
The original value of the variable is used in the current operation, and then the variable is incremented.
```js
let a = 5;
let b = a++; // b is assigned 5, then a becomes 6
console.log(a); // Output: 6
console.log(b); // Output: 5
```
Key Difference Summary:

> Pre-increment: Increment first, then use the new value.

> Post-increment: Use the current value first, then increment.


### ✅ Assignment Operators 

```js
=  +=  -=  *=  /=  %=
```

```js
let x = 5;
x += 3; // same as x = x + 3
console.log(x); // 8
```

We use assignment operators to assign values to variables.

```js
let x = 5;
```
Here, we used the = operator to assign the value 5 to the variable x.

### Commonly Used Assignment Operators

| Operator	Name	| Example |
|--|--|
=	Assignment Operator	a = 7;
+=	Addition Assignment	a += 5;  // a = a + 5
-=	Subtraction Assignment	a -= 2;  // a = a - 2
*=	Multiplication Assignment	a *= 3;  // a = a * 3
/=	Division Assignment	a /= 2;  // a = a / 2
%=	Remainder Assignment	a %= 2;  // a = a % 2
**=	Exponentiation Assignment	a **= 2;  // a = a**2
|--|--|
```js
// assignment operator
let a = 7;
console.log("Assignment: a = 7, a =", a);

// addition assignment operator
a += 5;  // a = a + 5
console.log("Addition Assignment: a += 5, a =", a);

// subtraction assignment operator
a -= 5;  // a = a - 5
console.log("Subtraction Assignment: a -= 5, a =", a);

// multiplication assignment operator
a *= 2;  // a = a * 2
console.log("Multiplication Assignment: a *= 2, a =", a);

// division assignment operator
a /= 2;  // a = a / 2
console.log("Division Assignment: a /= 2, a =", a);

// remainder assignment operator
a %= 2;  // a = a % 2
console.log("Remainder Assignment: a %= 2, a =", a);

// exponentiation assignment operator
a **= 2;  // a = a**2
console.log("Exponentiation Assignment: a **= 7, a =", a);
```
Output
```js
Assignment: a = 7, a = 7
Addition Assignment: a += 5, a = 12
Subtraction Assignment: a -= 5, a = 7
Multiplication Assignment: a *= 2, a = 14
Division Assignment: a /= 2, a = 7
Remainder Assignment: a %= 2, a = 1
Exponentiation Assignment: a **= 7, a = 1
```
### ✅ Comparison Operators 

```js
==  ===  !=  !==  >  <  >=  <=
```

```js
let age = 18;
console.log(age === 18); // true (strict comparison)
```


We use **comparison operators** to **compare two values** and **return a boolean value** (true or false). For example,
```js
const a = 3, b = 2;
console.log(a > b);
```
```js
// Output: true 
```

Here, we have used the `> comparison operator` to check whether a (whose value is 3) is greater than b (whose value is 2).

Since 3 is greater than 2, we get true as output.

> Note: In the above example, a > b is called a boolean expression since evaluating it results in a boolean value.

**Commonly Used Comparison Operators**

| Operator	| Meaning |	Example |
|--|--|--|
==	Equal to	3 == 5 gives us false
!=	Not equal to	3 != 4 gives us true
`>`	Greater than	4 > 4 gives us false
<	Less than	3 < 3 gives us false
`>=`	Greater than or equal to	4 >= 4 gives us true
<=	Less than or equal to	3 <= 3 gives us true
===	Strictly equal to	3 === "3" gives us false
!==	Strictly not equal to	3 !== "3" gives us true
|--|--|--|
```js
// equal to operator
console.log("Equal to: 2 == 2 is", 2 == 2);

// not equal operator
console.log("Not equal to: 3 != 3 is", 3 != 3);

// strictly equal to operator
console.log("Strictly equal to: 2 === '2' is", 2 === '2');

// strictly not equal to operator
console.log("Strictly not equal to: 2 !== '2' is", 2 !== '2');

// greater than operator
console.log("Greater than: 3 > 3 is", 3 > 3);

// less than operator
console.log("Less than: 2 > 2 is", 2 > 2);

// greater than or equal to operator
console.log("Greater than or equal to: 3 >= 3 is", 3 >= 3);

// less than or equal to operator
console.log("Less than or equal to: 2 <= 2 is", 2 <= 2);
```


### ✅ Logical Operators 
We use logical operators to perform logical operations on boolean expressions. 
```js
const x = 5, y = 3;
console.log((x < 6) && (y < 5));
```
```js
// Output: true
```
Here, && is the logical operator AND. Since both x < 6 and y < 5 are true, the combined result is true.

```js
let isLoggedIn = true;
let hasPermission = false;
console.log(isLoggedIn && hasPermission); // false
```


## **Commonly Used Logical Operators**

| Operator	| Syntax	|Description |
|--|--|--|
&& | (Logical AND)	|expression1 && expression2	true only if both expression1 and expression2 are true
&#124;&#124; OR | (Logical OR)	| expression1 OR  expression2	true if either expression1 or expression2 is true
! |  (Logical NOT)	|!expression	false if expression is true and vice versa
|--|--|
```js
let x = 3;
// logical AND
console.log((x < 5) && (x > 0));  // true
console.log((x < 5) && (x > 6));  // false

// logical OR
console.log((x > 2) || (x > 5));  // true
console.log((x > 3) || (x < 0));  // false

// logical NOT
console.log(!(x == 3));  // false
console.log(!(x < 2));  // true
```

> Note: We use comparison and logical operators in decision-making and loops. You will learn about them in detail in later tutorials.


## String Concatenation Operator

In JavaScript, you can also use the + operator to concatenate (join) two strings. 

```js
let str1 = "Hel", str2 = "lo";
console.log(str1 + str2);
```
```js
// Output: Hello
```

Here, we used the + operator to concatenate str1 and str2.


## Miscellaneous Operators

JavaScript has many more operators besides the ones we listed above. You will learn about them in detail in later tutorials.

| Operator |	Description |	Example |
|:--:|:--:|:--:|
, |	Comma: Evaluates multiple operands and returns the value of the last operand.	| let a = (1, 3, 4);  // 4
?: |	Ternary: Returns value based on the condition.	| (50 > 40) ? "pass" : "fail";  // "pass"
typeof |	Returns the data type of the variable. |	typeof 3;  // "number"
instanceof |	Returns true if the specified object is a valid object of the specified class.	| objectX instanceof ClassX
|--|--|



## typeof Operator
The typeof operator returns the type of variables and values. For example,
```js
const a = 9;

console.log(typeof a); // number
console.log(typeof '9'); // string
console.log(typeof false); // boolean
```


## Bitwise Operators

We use bitwise operators to perform binary operations on integers.

| Operator |	Description	|Example |
|--|--|--|
& |	Bitwise AND	| 5 & 3  // 1
&#124; |	Bitwise OR	| 5 &#124; 3  // 7
^ |	Bitwise XOR	| 5 ^ 3  // 6
~ |	Bitwise NOT	| ~5  // -6
<< |	Left shift| 	5 << 1  // 10
`>>` |	Sign-propagating right shift	| -10 >> 1  // -5
`>>>` |	Zero-fill right shift |	-10 >>> 1  // 2147483643
|--|--|--|

> Note: We rarely use bitwise operators in everyday programming. If you are interested, let me know i'll make a detail video on  Bitwise Operators.

