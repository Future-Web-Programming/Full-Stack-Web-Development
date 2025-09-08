Perfect — this chapter is critical for **tech interviews**, logical thinking, and real-world problem solving. In Chapter 103, we dive deep into essential **Data Structures using JavaScript**, starting from the basics like **Stacks** and **Queues**, up to more complex ones like **Trees** and **Graphs**.

---

# 🧠 Chapter 103: Data Structures with JavaScript (Stack, Queue, Tree, Graph)

---

## 🎯 Objective

By the end of this chapter, you’ll be able to:

* Understand how core data structures work
* Implement them in JavaScript from scratch
* Solve typical coding challenges using them
* Prepare for interviews with real-world examples

---

## 🧱 Section 1: What Are Data Structures?

> Data structures are ways to **organize and store data** so it can be accessed and modified efficiently.

Common types:

* Stack
* Queue
* Linked List
* Tree
* Graph
* Hash Table

---

## 🥞 Section 2: Stack (LIFO)

### 🔄 Last In, First Out (LIFO)

### ✅ Use Cases:

* Undo functionality
* Browser history
* Function call stack

### ✍️ Implementation:

```js
class Stack {
  constructor() {
    this.items = [];
  }
  push(element) {
    this.items.push(element);
  }
  pop() {
    return this.items.pop();
  }
  peek() {
    return this.items[this.items.length - 1];
  }
  isEmpty() {
    return this.items.length === 0;
  }
}
```

### 🧪 Example:

```js
const stack = new Stack();
stack.push(10);
stack.push(20);
console.log(stack.pop()); // 20
```

---

## 🚦 Section 3: Queue (FIFO)

### 🔁 First In, First Out (FIFO)

### ✅ Use Cases:

* Print queue
* Task scheduling
* Messaging systems

### ✍️ Implementation:

```js
class Queue {
  constructor() {
    this.items = [];
  }
  enqueue(item) {
    this.items.push(item);
  }
  dequeue() {
    return this.items.shift();
  }
  front() {
    return this.items[0];
  }
}
```

### 🧪 Example:

```js
const queue = new Queue();
queue.enqueue('A');
queue.enqueue('B');
console.log(queue.dequeue()); // 'A'
```

---

## 🔗 Section 4: Linked List

### 🔄 Nodes connected in a linear sequence

### ✅ Use Cases:

* Efficient insert/delete in middle
* Music playlist, Image slider

### ✍️ Singly Linked List (basic):

```js
class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}
class LinkedList {
  constructor() {
    this.head = null;
  }

  append(value) {
    const newNode = new Node(value);
    if (!this.head) this.head = newNode;
    else {
      let current = this.head;
      while (current.next) current = current.next;
      current.next = newNode;
    }
  }
}
```

---

## 🌳 Section 5: Tree (Binary Tree)

### 🌿 Hierarchical structure, like a family tree

* One root node
* Children connected through branches

### ✅ Use Cases:

* DOM
* Folder structures
* Search algorithms

### ✍️ Basic Binary Tree Node:

```js
class TreeNode {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}
```

### 🔍 Traversal Example: Inorder

```js
function inorder(node) {
  if (node) {
    inorder(node.left);
    console.log(node.value);
    inorder(node.right);
  }
}
```

---

## 🧭 Section 6: Graph

### 🔄 Nodes (vertices) and connections (edges)

### ✅ Use Cases:

* Social networks
* Maps and routes
* Path finding (e.g. Google Maps)

### ✍️ Adjacency List Example:

```js
class Graph {
  constructor() {
    this.adjacencyList = {};
  }

  addVertex(vertex) {
    if (!this.adjacencyList[vertex]) this.adjacencyList[vertex] = [];
  }

  addEdge(v1, v2) {
    this.adjacencyList[v1].push(v2);
    this.adjacencyList[v2].push(v1);
  }
}
```

---

## 📦 Section 7: Hash Table

### 🔐 Key-value storage

### ✅ Use Cases:

* Fast lookup
* Caching
* Database indexing

### ✍️ Using JavaScript Objects as Hash Table:

```js
const hashTable = {};
hashTable["name"] = "Ali";
console.log(hashTable["name"]); // Ali
```

---

## 💼 Interview Questions Practice

| Structure  | Question                                |
| ---------- | --------------------------------------- |
| Stack      | Check for balanced parentheses          |
| Queue      | Simulate a printer job queue            |
| Tree       | Find the height of a binary tree        |
| Graph      | Find if a path exists between two nodes |
| Hash Table | Find first non-repeating character      |

---

## 🚀 Challenge Project: Browser History Simulation (Stack)

**🔧 Task:** Simulate browser forward/back buttons using a stack data structure.

```js
class BrowserHistory {
  constructor() {
    this.backStack = [];
    this.forwardStack = [];
    this.current = "Home";
  }

  visit(page) {
    this.backStack.push(this.current);
    this.current = page;
    this.forwardStack = [];
  }

  back() {
    if (this.backStack.length) {
      this.forwardStack.push(this.current);
      this.current = this.backStack.pop();
    }
    return this.current;
  }

  forward() {
    if (this.forwardStack.length) {
      this.backStack.push(this.current);
      this.current = this.forwardStack.pop();
    }
    return this.current;
  }
}
```

---

## 🔚 Summary Table

| Structure   | Description  | Use Cases             |
| ----------- | ------------ | --------------------- |
| Stack       | LIFO         | Undo, call stack      |
| Queue       | FIFO         | Scheduler, jobs       |
| Linked List | Dynamic size | Media players, queues |
| Tree        | Hierarchy    | DOM, files            |
| Graph       | Nodes/Edges  | Maps, networks        |
| Hash Table  | Key/Value    | Lookup, caches        |

---

## 🔗 Resources

* [Data Structures Visualized](https://visualgo.net)
* [LeetCode Data Structures Problems](https://leetcode.com/tag/data-structure/)
* [JavaScript Data Structures Handbook (free)](https://github.com/trekhleb/javascript-algorithms)

---

## ✅ Up Next:

➡️ **Chapter 104: Algorithms in JavaScript (Sorting, Searching, Recursion)**
We’ll now tackle algorithmic techniques you’ll need to pass whiteboard interviews and solve real coding challenges.

Would you like to continue with Chapter 104?
