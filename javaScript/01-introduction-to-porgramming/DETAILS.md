# Full Stack Web Development with javaScript

[![future Programming](https://yt3.googleusercontent.com/d07YcomDgk4R22ujcEkffxHA2GhbIKS0hxfTR0ju5AKklML2Xb05vD3RUlxIMFAtlGG6mG3hcQ=s160-c-k-c0x00ffffff-no-rj)](https://www.youtube.com/@futureprogramming)

## Chapter -01 
## Brief Introduction to javaScript

## What is javaScript ?

![javaScript](https://www.w3schools.com/whatis/img_js.png)

javaScript is a scripting or programming language of the web, it is high-level, interpreted programming language primarily, we use to add functionality or intrectivity into our Website, It allows web pages to be dynamic and responsive, handling tasks like updating content, validating forms, and creating animations, making carousel , popups, alerts, displaying timely content updates, interactive maps, animated 2D/3D graphics, and pretty much everything else. (Okay, not everything,). 

but it is amazing, It is the third layer of the layer standard web technologies, two of which (HTML and CSS) we have covered.  but now javaScript is more popular then ever becuase javaScript is also used in backend Development can run on server with the help of Node JS, (it's the Run time of javaScript), 

```js
<!DOCTYPE html>
<html>
<body>

<h2>What Can JavaScript Do?</h2>

<p>JavaScript can change HTML attribute values.</p>

<p>In this case JavaScript changes the value of the src (source) attribute of an image.</p>

<button onclick="document.getElementById('myImage').src='img_bulbon.gif'">Turn on the light</button>

<img id="myImage" src="img_bulboff.gif" style="width:100px">

<button onclick="document.getElementById('myImage').src='img_bulboff.gif'">Turn off the light</button>

</body>
</html>
```

JavaScript is a single-threaded language that executes one task at a time.
It is an Interpreted language which means it executes the code line by line.
The data type of the variable is decided at run-time in JavaScript that’s why it is called dynamically typed.

JavaScript is a dynamic, interpreted programming language. Users primarily use it for developing the interactive front-end of web applications, but you can also use it in back-end development in tandem with Node.js.

JavaScript typically runs on the client’s side, which means it is executed directly in the user’s web browser. This integration makes JavaScript an essential part of building advanced features for web applications. Digital creators use JavaScript in everything, from simple web page animations to complex interactive games and applications.

JavaScript’s syntax is similar to other programming languages, such as Python. However, it is a more flexible, dynamic language that allows developers to run code more quickly. It is also weakly typed, meaning variables do not declare a specific data type. This makes it easier for developers to write code and makes it a more approachable coding language for beginners. (But with typeScript we can also declare types and much more )

One of JavaScript's unique features is its ability to manipulate a web page's document object model (DOM) in real-time. The DOM is a hierarchical structure that represents the HTML elements of a web page, and JavaScript manipulates this structure in real-time. This allows developers to create dynamic, interactive web pages that respond to input.

Another feature of JavaScript is its support for asynchronous programming. Asynchronous programming allows code to execute without blocking the main thread, leading to faster, more efficient code. This efficiency is vital for web applications to respond quickly to user input and events.

## Javascript Versions

This language has evolved through several versions, namely ES1, ES2, ES3, ES5, and the transformative ES6. 

ES2015 adds significant features and syntactic sugar to allow writing complex applications. Some of the features that ES6 has to offer include

Classes, Modules, Arrows
Enhanced object literals
Template strings
Destructuring
Default and rest parameters
Spread operator
let and const
Iterators for..of
Generators
map and set
Proxies and Symbols
Promises
Math, Number, String, Array, Object APIs and etc

After ES6 javaScript is releasing ES2016, version with the year continusly with updates.


### What is the difference between async and sync in JavaScript?
The differences between asynchronous and synchronous include: 
`Async` behaviour is non-blocking, which means it will send multiple requests to a server. 

`Sync` is blocking — it will only send the server one request at a time and wait for that request to be answered by the server.

As a versatile programming language, JavaScript handles front-end and back-end development. With help from frameworks like Node.js, developers can use JavaScript to create server-side applications and build full-stack web applications.

### Where we can use javaScript? 
we can use javaScript anywhere, now javaScript use in frontend, backend, desktop application development, Mobile Application Development, Web 3, Blockchain , IOT and Artificial Intelligence etc.


## How browsers understands javaScript ?

The browser has an embedded engine sometimes called a “JavaScript virtual machine”.

Different engines have different “codenames”. For example:

V8 – in Chrome, Opera and Edge.

SpiderMonkey – in Firefox.

Safari uses the JavaScriptCore engine, also known as Nitro or SquirrelFish etc.

## Java & javaScript are Same?

When JavaScript was created, it initially had another name: “LiveScript”. But Java was very popular at that time, so it was decided that positioning a new language as a “younger brother” of Java would help.

But as it evolved, JavaScript became a fully independent language with its own specification called ECMAScript, and now it has no relation to Java at all.

### History of javaScript. 

JavaScript, initially called Mocha, then LiveScript, was created by Brendan Eich at Netscape in 1995 to add dynamic behavior to web pages. Java was very popular at that time, developer named it javaScript so that it should also gain popularity in the programmers world, java and javaScript don't have any other relation, due to this, it's quickly gained popularity, leading to the development of the ECMA-262 standard (ECMAScript) to unify its various implementations. Over time, JavaScript has evolved from a simple scripting language for web pages to a powerful, versatile language used for everything from front-end development to server-side applications and even mobile app development. 
This Artilce provides a comprehensive overview of the history of JavaScript, including the key figures and milestones [History of javaScript](https://deno.com/blog/history-of-javascript) 


## Library vs Framework

in simple words, Library is a combination of modules (funcitons) , many modules comes to geather and forms a library, and many libraries comes to geather and forms a framework.

## javaScript verstality. 
JavaScript frameworks are collections of JavaScript libraries that feature pre-written code, which can save Developers lots of time when it comes to completing basic web and software development tasks, making it much easier to build dynamic, interactive web apps and mobile applications. These frameworks allow for predictability and maintainability, both of which allow for scalable, healthy software that can last long-term.

Popular JavaScript frameworks include React, React Native, Angular, and Vue. You may have heard of Node.js in the context of JavaScript frameworks, but it is actually not considered a framework. It is, in fact, a JavaScript runtime environment, which is a set of components used to create and run a JavaScript application.


### What is JavaScript doing on your page?

When you load a web page in your browser, you are running your code (HTML, CSS, and JavaScript) inside an execution environment (the browser tab). This is like a factory that takes in raw materials (the code) and outputs a product (the web page).

[![What javascript is doing on web page](https://developer.mozilla.org/en-US/docs/Learn_web_development/Core/Scripting/What_is_JavaScript/execution.png)](https://developer.mozilla.org/en-US/docs/Learn_web_development/Core/Scripting/What_is_JavaScript)


## JavaScript running order
When the browser encounters a block of JavaScript, it generally runs it in order, from top to bottom. This means that you need to be careful what order you put things in. 

`Note:` It is not always true that JavaScript runs exactly in order from top to bottom, due to behaviors like hoisting, but for now, bear in mind that generally items need to be defined before you can use them.


### What you can do with JavaScript?

JavaScript can be used to create interactive websites, web and mobile applications, games, and even virtual reality experiences. It's a versatile language for both front-end and back-end development, powering dynamic content, animations, and responsive interfaces. 

`Web Development`:
Interactive web pages:
JavaScript is essential for adding dynamic elements like buttons, animations, and form validation to web pages. etc.

`Single-page applications (SPAs)`:
JavaScript frameworks like React, Angular, and Vue.js enable building SPAs where content updates without full page reloads, enhancing user experience. 

`Web servers`:

With Node.js, Deno, & Bun JavaScript can be used to create server-side applications and APIs. 

`Data visualization`:
JavaScript libraries like D3.js allow for creating interactive charts and graphs for data representation. 

`Mobile App Development`:
Frameworks like React Native allow developers to build mobile apps for both iOS and Android using JavaScript.

`Game development`: JavaScript frameworks like Phaser enable the creation of web-based games. Babylon. js is one of the most popular 3D game engines used by developers

`Virtual reality`: JavaScript can be used to build VR experiences with frameworks like A-Frame. 

`Artificial intelligence`: While not the primary language for AI, JavaScript can be used for certain AI tasks, especially those within web-based applications. 

`Real-time updates`: JavaScript excels at providing real-time updates to web applications through technologies like WebSockets. 

`Desktop applications`: JavaScript frameworks like Electron allow for building desktop applications using web technologies. 

`Internet of Things (IoT)`: JavaScript can be used to write applications for IoT devices. 

`blockChain`:
JavaScript plays a significant role in blockchain software development by providing a range of capabilities tailored for decentralized apps. 
When combined with frameworks like Ethereum’s Solidity, this language can together create smart contracts with predefined rules on the Ethereum network. 
`Web3.js` is a JavaScript library that facilitates interaction with the Ethereum blockchain, such as deploying smart contracts, sending transactions, and reading data.

### Let's Write Our First Hallo World Program

To add JavaScript to a website, you can either embed it directly within your HTML using `<script>` tags or link to an external .js file. The `<script>` tag can be placed in the `<head>` or `<body>` of your HTML document, but placing it at the bottom of the `<body>` is generally recommended to ensure the HTML elements are loaded first. 



### Inline JavaScript
Open your HTML file: in a text editor. 
Locate the `<script>` tag: If you want to add inline JavaScript, insert the `<script>` tag within the <head> or <body> sections of your HTML file. 
Write your JavaScript code: Place your JavaScript code within the opening and closing `<script>` tags. 
Code

```js   
console.log("hallo World")
```

### External JavaScript
Create a JavaScript file: Create a new file with a .js extension (e.g., script.js) in your project's directory.
Write your JavaScript code: Add your JavaScript code to the .js file. 
JavaScript

```js
console.log("Hallo World")
```

Link the external file: In your HTML file, use the `<script>` tag with the src attribute to link the external JavaScript file. Place this tag within the `<head>` or `<body>` of your HTML. 

```js
<script src="script.js"></script>
```
Placement: Generally, it's recommended to place the `<script>`tag with the src attribute at the bottom of the `<body>` section, right before the closing `</body> `tag. This allows the HTML content to load first, preventing potential delays in page rendering. 


## Comments in JavaScript
Just like HTML, sometimes we may want to put a note beside our code which does not need to be executed.

We can do this in JavaScript in two ways:

with single-line comments, like this: 
```js
// a single line comment
```
or with multi-line comments, like this:
```js
/*
a multi
line comment
*/
```