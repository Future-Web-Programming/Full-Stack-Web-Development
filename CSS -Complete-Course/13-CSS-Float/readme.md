# Lecture 13: CSS Float Property

![css float property lecutre 13](/Assets/CSS%20FLoat%20Property%20Lecture%20-13.png)

Welcome to Lecture 13!
Today, we're going to explore an essential concept in CSS: the `float` property. Floating elements are an essential part of web design and are used to wrap text around images or to create horizontally aligned layouts.

## 1. Introduction to Floating

Floating is a positioning method in CSS that allows an element to be pushed to the left or right, allowing other content to flow around it.

### Syntax

```css
element {
  float: value;
}
```

The value can be left, right, or none.

### 2. Float Left

Floating an element to the left will push it to the left side of its container, and the content that follows will wrap around it.

```css
div {
  float: left;
}
```

### 3. Float Right

Floating an element to the right will push it to the right side of its container.

```css
div {
  float: right;
}
```

### 4. Float None

Using float: none will ensure that the element does not float and stays in its original place within the normal flow of the document.

```css
div {
  float: none;
}
```

### 5. Clearing Floats

Floats can create layout issues if not properly cleared. The clear property is used to control the flow of floated elements.

clear: left; — Clears elements floated to the left.
clear: right; — Clears elements floated to the right.
clear: both; — Clears elements floated to both the left and right.

Example:

```css
.clear {
  clear: both;
}
```

## Exercise

Create a container with two div elements inside.
Float one div to the left and the other to the right.
Add an image and float it to the left, allowing the text to wrap around it.
Experiment with the clear property to manage the layout.

### Conclusion

The float property is a powerful tool in CSS that helps with layout and positioning. Though more modern layout techniques like Flexbox and Grid are now often used instead, understanding how float works is still beneficial as it forms the basis for many web layouts.

Happy coding, and see you in the next lecture.
