# Full Stack Web Development with javaScript

[![future Programming](https://yt3.googleusercontent.com/d07YcomDgk4R22ujcEkffxHA2GhbIKS0hxfTR0ju5AKklML2Xb05vD3RUlxIMFAtlGG6mG3hcQ=s160-c-k-c0x00ffffff-no-rj)](https://www.youtube.com/@futureprogramming)

## Chapter - 02 
# Storing the information you need — Variables

What variables are and why they are so important.?

Declaring variables with let, initializing them with values, and reassigning with new values.

Creating constants with const.

The difference between variables and constants, and when you would use each one.
Variable naming best practices.

The different types of value that can be stored in variables — strings, numbers, booleans, arrays, and objects.

### What is Variable?
A variable is a named container used for storing values. A piece of information that we might reference multiple times can be stored in a variable for later use or modification. In JavaScript, the value contained inside a variable can be any JavaScript data type, including a number, string, or object.

Variables store data in memory which can later be accessed and modified. Variables can also be reassigned and given a new value. 

They also provide a way of labeling data with a descriptive name, so our programs can be understood more clearly by the reader and ourselves. It is helpful to think of variables as containers that hold information. Their sole purpose is to label and store data in memory. This data can then be used throughout your program.

variables can contain anything — not just strings and numbers. Variables can also contain complex data and even entire functions to do amazing things.

[![Variable Example](https://developer.mozilla.org/en-US/docs/Learn_web_development/Core/Scripting/Variables/boxes.png)](https://developer.mozilla.org/en-US/docs/Learn_web_development/Core/Scripting/Variables)

## Declaring a variable
To use a variable, you've first got to create it — more accurately, we call this declaring the variable. To do this, we type the keyword let followed by the name you want to call your variable:

```js
let myName;
let myAge;
```

Note: In JavaScript, all code instructions should end with a semicolon `(;)` — your code may work correctly for single lines, but probably won't when you are writing multiple lines of code together. Try to get into the habit of including it.

Open Dev Console or Terminal and run your file, You can test whether these values now exist in the execution environment by typing just the variable's name, e.g.

```js
myName;
myAge;
```
They currently have no value; they are empty containers. When you enter the variable names, you should get a value of undefined returned. If they don't exist we will get ReferenceError: variable is not defined, 

now what that means, declared variable and not declared at all, they are very different things. 

In the box analogy you saw above, not existing would mean there's no box (variable) for a value to go in. No value defined would mean that there is a box, but it has no value inside it.

### Initializing a variable
Once you've declared a variable, you can initialize it with a value. You do this by typing the variable name, followed by an equals sign (=), followed by the value you want to give it. For example:

```js
myName = "Chris";
myAge = 37;
```

`Note:` Make sure you don't confuse the assignment operator `(=)` with the equality operator `(==)`. The individual = symbol assigns value while the == symbol checks if two things are equal.

Try going back to the console now and typing in these lines. You should see the value you've assigned to the variable returned in the console to confirm it, in each case. Again, you can return your variable values by typing their name into the console — try these again:

```js
myName;
myAge;
```
You can declare and initialize a variable at the same time, like this:

```js
let myRollNumber = 20;
```
This is probably what you'll do most of the time, as it is quicker than doing the two actions on two separate lines.


## Naming Variables. 
Variable names are known as identifiers in JavaScript. 

Variable names can consist only of `letters` `(a-z)`, `numbers (0-9)`, `dollar sign` symbols `($)`, and underscores `(_)`

`Note:` Not to Do When Naming Variables.

Variable names cannot contain any whitespace characters (tabs or spaces)

Numbers cannot begin the name of any variable

There are several reserved keywords which cannot be used as the name of a variable

Variable names are case sensitive

JavaScript also has the convention of using `camel case` (sometimes stylized as camelCase) in the names of functions and variables declared with var or let. This is the practice of writing the first word lowercase, and then capitalizing the first letter of every subsequent word with no spaces between them. Most variables that are not constants will follow this convention, with some exceptions. The names of variables that are constant, declared with the const keyword, are typically written in all uppercase.

This may seem like a lot of rules to learn, but it will very quickly become second nature to write valid and conventional variable names.

 When you are naming variables, think hard about the names. Try your best to `make sure` that the `name you assign` your variable is accurately `descriptive and understandable` to another reader. Sometimes that other reader is yourself when you revisit a program that you wrote months or even years earlier.

When you assign a variable, you use the `=` symbol. The name of the variable goes on the left and the value you want to store in the variable goes on the right.


## Difference Between var, let, and const

`var` is `function-scoped`, while let and const are `block-scoped`. This distinction is crucial for preventing unintended variable access and collisions.

In JavaScript, var, let, and const are all used to declare variables, but they differ in scope, hoisting, and mutability. var is function-scoped and hoisted, while let and const are block-scoped. const declares a constant variable that cannot be reassigned after initialization. Generally, it's recommended to use let and const for cleaner, more maintainable code, opting for const when a variable's value should not be changed. 

## Variable Scope
A variable's scope determines where in a program a variable is available for use. A variable's scope is defined by where the variable is initialized or created. 

this defines the accessibility and visibility of variables within different parts of a program. It determines where a variable can be declared, accessed, and modified. 

There are three primary types of variable scope in JavaScript:

## Global Scope:
Variables declared in the global scope are accessible from anywhere within the entire JavaScript program.
They are declared outside of any function or block.

## Function Scope or (Local Scope):
Variables declared within a function have function scope or local scope to the function.
They are only accessible within the function where they are defined and `cannot be accessed from outside that function`.
Each function creates its own local scope.

Local scope in JavaScript is like a private room within a building – it's an enclosed space where variables are only accessible from within that specific room.

When you declare a variable in local scope, it is limited in visibility to the block of code, function, or conditional statement in which it is defined.

Variables in local scope are protected from interference or modification by code outside their scope, providing a level of isolation.

## Block Scope:
Introduced with let and const in ES6 (ECMAScript 2015).
Variables declared with let and const are confined to the block of code (e.g., if statements, for loops, while loops, or any {} block) in which they are defined.
They cannot be accessed from outside that specific block.


## Hoisting:
var declarations, wherever they occur in a script, are processed before any code within the script is executed. Declaring a variable anywhere in the code is equivalent to declaring it at the top. This also means that a variable can appear to be used before it's declared. This behavior is called hoisting, as it appears that the variable declaration is moved to the top of the function, static initialization block, or script source in which it occurs.

## Re-declaration and Re-assignment:
var allows re-declaration and re-assignment within the same scope. let allows re-assignment but not re-declaration within the same scope. const does not allow re-assignment or re-declaration, ensuring a constant value for the variable reference (though the contents of arrays or objects declared with const can be modified).

Understanding variable scope is fundamental for writing clean, predictable, and maintainable JavaScript code, preventing issues like variable shadowing and global namespace pollution.