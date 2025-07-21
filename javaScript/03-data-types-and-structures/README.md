# Full Stack Web Development with javaScript

[![future Programming](https://yt3.googleusercontent.com/d07YcomDgk4R22ujcEkffxHA2GhbIKS0hxfTR0ju5AKklML2Xb05vD3RUlxIMFAtlGG6mG3hcQ=s160-c-k-c0x00ffffff-no-rj)](https://www.youtube.com/@futureprogramming)

## Chapter -03

# Data types and structures

Primitives are the simplest types of data in JavaScript. 

A primitive literal is a value, with no wrapper or properties of its own. Primitive literals are immutable, meaning they can't be changed to represent other values in the same way that JavaScript's more complex object-based data structures can. For example, while the value of a variable named theTruth can be reassigned a value of false, the boolean literal true can never represent any value other than true, in the same way the number literal 5 can never represent the value of another number.

There are seven primitive data types:



## String
String: Represents textual data, enclosed in single or double quotes.
```js
    let name = "Alice";
    let greeting = 'Hello, world!';
```
## Number
Number: Represents both integer and floating-point numerical values.
```js
    let age = 30;
    let price = 19.99;
```
## Boolean: 
Represents a logical entity with two possible values: true or false.
```js
    let isActive = true;
    let isLoggedOut = false;
```

Undefined: Indicates a variable that has been declared but not yet assigned a value. 
```js
    let unassignedVariable; // unassignedVariable is undefined
```

## Null: 
Represents the intentional absence of any object value. It is a primitive value, but it is often confused with undefined.
```js
    let emptyValue = null;
```
Symbol: Introduced in ES6, Symbols are unique and immutable values, often used as object property keys to avoid naming collisions.
```js
    const id = Symbol('uniqueId');
```

## BigInt: 
Introduced in ES11, BigInt can represent whole numbers larger than Number.MAX_SAFE_INTEGER.
```js
    let largeNumber = 9007199254740991n; // 'n' suffix indicates a BigInt
```

## Non-Primitive Data Types
The data types that are derived from primitive data types are known as non-primitive data types. It is also known as derived data types or reference data types.

This is a complex data type that can store collections of data and more complex entities.

## Object: 
A collection of key-value pairs. Arrays and Functions are also specialized types of objects.

```js
    let person = {
        firstName: "John",
        lastName: "Doe",
        age: 30
    };

    let colors = ["red", "green", "blue"]; // Array (a type of object)

    function greet() { // Function (a type of object)
        console.log("Hello!");
    }
```

## Arrays
An Array is a special kind of object used to store an ordered collection of values, which can be of any data type.


```js
let a1 = [1, 2, 3, 4, 5];
console.log(a1);
​
let a2 = [1, "two", { name: "Object" }, [3, 4, 5]];
console.log(a2);
```


## Function
A function in JavaScript is a block of reusable code designed to perform a specific task when called.
```js
// Defining a function to greet a user
function greet(name) { return "Hello, " + name + "!"; }
// Calling the function
console.log(greet("Ajay"));
```

## Date Object
The Date object in JavaScript is used to work with dates and times, allowing for date creation, manipulation, and formatting.

```js
// Creating a new Date object for the current date and time
let currentDate = new Date();
// Displaying the current date and time
console.log(currentDate);
```

## Regular Expression
A RegExp (Regular Expression) in JavaScript is an object used to define search patterns for matching text in strings.

```js
// Creating a regular expression to match the word "hello"
let pattern = /hello/;
// Testing the pattern against a string
let result = pattern.test("Hello, world!"); // Returns true because "Hello" matches the pattern
console.log(result);
```

## Important facts to Know

## Dynamically Typed : 
JavaScript Variables are not bound to a specific data type. Mainly data type is stored with value (not with variable name) and is decided & checked at run time.

```js
let x = 42;   
console.log(x)
​
x = "hello";  
console.log(x)
​
x = [1, 2, 3]
console.log(x)
```

## Everything is an Object (Sort of): 
In JavaScript, Functions are objects, arrays are objects, and even primitive values can behave like objects temporarily when you try to access properties on them.

```js
let s = "hello";
console.log(s.length);  
​
// Example with a number
let x = 42;
console.log(x.toString()); 
​
// Example with a boolean
let y = true;
console.log(y.toString());
​
/* Internal Working of primitives
   to be treeated as objects
   
// Temporary wrapper object
let temp = new String("hello"); 
​
console.log(temp.length); // 5
​
// The wrapper is discarded after use
temp = null; */
```

## NaN is not equal to itself: 
NaN Stands for “Not-a-Number”, It is used to represent a computational error. NaN is technically of type number.

```js
console.log(typeof NaN);
console.log(NaN === NaN);
```
## A Symbol is Never Equal to Another One : 

Symbol is a unique and immutable data type often used for creating private properties and methods. Symbols are never equal to any other Symbol.
```js
let s1 = Symbol("abc");
let s2 = Symbol("abc");
console.log(s1 === s2);
```

## Undefined and Null: 

undefined represents a variable that has been declared but not assigned, while null is an explicit assignment representing “no value”.

## Integers are Floating are Numbers only.

There is only one type number that covers both integers and floating point numbers.

```js
let x = 42;     // Integer
let y = 42.5;   // Floating-point
​
console.log(typeof x); 
console.log(typeof y);
```

## A character is also a string. 
There is no separate type for characters. A single character is also a string.

```js
let s1 = "gfg";   // String
let s2 = 'g';    // Character
​
console.log(typeof s1); 
console.log(typeof s2);
```