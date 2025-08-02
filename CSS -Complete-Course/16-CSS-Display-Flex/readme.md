# Lecture 16: Mastering Display Flex Properties in CSS

![Learn About CSS FLexbox](/Assets/Lecture%20-16%20Flexbox%20in%20CSS%20-%20Learn%20CSS%20FLexbox%20in%20One%20Video.png)

In this lecture, we will cover a wide range of concepts related to the `display: flex` property in CSS, from the basics to advanced techniques. We'll explore how Flexbox can be used to create flexible and responsive layouts, and we'll provide examples to illustrate each concept.

Before the Flexbox Layout module, there were four layout modes:

`Block`, for sections in a webpage
`Inline`, for text
`Table`, for two-dimensional table data
`Positioned`, for explicit position of an element

The Flexible Box Layout Module, makes it easier to design flexible responsive layout structure without using float or positioning.


**1. Introduction to Display Flex:**
Flexbox is a powerful layout model that allows us to create dynamic and flexible layouts with ease. It's particularly useful for building responsive designs and aligning items within a container. Let's dive into the world of Flexbox.

**2. Basic Concepts of Flexbox:**
To start using the Flexbox model, you need to first define a flex container.
Flexbox consists of a flex container and its child flex items. By setting the container's `display` property to `flex`, we activate the Flexbox layout. Flex items are placed along the main axis and the cross axis.

**Example:**

```html
<!DOCTYPE html>
<html>
<head>
  <style>
    .flex-container {
      display: flex;
    }

    .flex-item {
      margin: 10px;
      padding: 20px;
      border: 1px solid #ddd;
    }
  </style>
</head>
<body>
  <div class="flex-container">
    <div class="flex-item">Item 1</div>
    <div class="flex-item">Item 2</div>
    <div class="flex-item">Item 3</div>
  </div>
</body>
</html>
```

## CSS Flex Container

### Parent Element (Container)

Display defines a flex container; inline or block depending on the given value. It enables a flex context for all its direct children.

![Flex Container - Picture Credit CSS Tricks](https://css-tricks.com/wp-content/uploads/2018/10/01-container.svg)

```css
.container {
  display: flex; /* or inline-flex */
}
```

## flex items

Child Elements (Items)
The direct child elements of a flex container automatically becomes flexible (flex) items.

![Flex Items - Picture Credit CSS Tricks](https://css-tricks.com/wp-content/uploads/2018/10/02-items.svg)

## Flex Container Properties

flex container properties are:

`flex-direction`
`flex-wrap`
`flex-flow`
`justify-content`
`align-items`
`align-content`
`gap`
`row-gap`
`column-gap`

### `flex-direction`

defines in which direction the container wants to stack the flex items.
Values include `row`, `column`, `row-reverse`,`column-reverse`, `justify-content`, `align-items`,  and `align-content`.

```css
.flex-container {
  display: flex;
  flex-direction: column;
}
```

`column` value stacks the flex items vertically (from top to bottom):

```css
.flex-container {
  display: flex;
  flex-direction: column;
}
```

`column-reverse` value stacks the flex items vertically (but from bottom to top):

```css
.flex-container {
  display: flex;
  flex-direction: column-reverse;
}
```

`row` value stacks the flex items horizontally (from left to right):

```css
.flex-container {
  display: flex;
  flex-direction: row;
}
```

`row-reverse` value stacks the flex items horizontally (but from right to left):

```css
.flex-container {
  display: flex;
  flex-direction: row-reverse;
}
```

### `flex-wrap`

Controls whether flex items should wrap when they exceed the container's width. Values are `nowrap`, `wrap`, and `wrap-reverse`.

`wrap` value specifies that the flex items will wrap if necessary:

```css
.flex-container {
  display: flex;
  flex-wrap: wrap;
}
```

`nowrap` value specifies that the flex items will not wrap (this is default):

```css
.flex-container {
  display: flex;
  flex-wrap: nowrap;
}
```

`wrap-reverse` value specifies that the flexible items will wrap if necessary, in reverse order:

```css
.flex-container {
  display: flex;
  flex-wrap: wrap-reverse;
}
```

### `flex-flow`

A shorthand property combining `flex-direction` and `flex-wrap`.

```css
.flex-container {
  display: flex;
  flex-flow: row wrap;
}
```

### `justify-content`

justify content property is used to align the flex items and the values are `center` , `flex-start` , `flex-end`,`space-around`,`space-between`
  
`center`  value aligns the flex items at the center of the container 

```css
.flex-container {
  display: flex;
  justify-content: center;
}
```

  `flex-start` value aligns the flex items at the beginning of the container (this is default)

```css
.flex-container {
  display: flex;
  justify-content: flex-start;
}
```

`flex-end` value aligns the flex items at the end of the container:

```css
.flex-container {
  display: flex;
  justify-content: flex-end;
}
```

`space-around` value displays the flex items with space before, between, and after the lines:

```css
.flex-container {
  display: flex;
  justify-content: space-around;
}
```

`space-between` value displays the flex items with space between the lines:

```css
.flex-container {
  display: flex;
  justify-content: space-between;
}
```

### `align-items`

align-items property is used to align the flex items and the values are `center`,`flex-start`,`flex-end`,`stretch`,`baseline`

`center` value aligns the flex items in the middle of the container:

```css
.flex-container {
  display: flex;
  height: 200px;
  align-items: center;
}
```

`flex-start` value aligns the flex items at the top of the container:

```css
.flex-container {
  display: flex;
  height: 200px;
  align-items: flex-start;
}
```

`flex-end` value aligns the flex items at the bottom of the container:

```css
.flex-container {
  display: flex;
  height: 200px;
  align-items: flex-end;
}
```

`stretch` value stretches the flex items to fill the container (this is default):

```css
.flex-container {
  display: flex;
  height: 200px;
  align-items: stretch;
}
```

`baseline` value aligns the flex items such as their baselines aligns:

```css
.flex-container {
  display: flex;
  height: 200px;
  align-items: baseline;
}
```

### `align-content`

align-content property is used to align the flex lines

with the `flex-wrap` property set to wrap, to **better demonstrate** the align-content property.

values are `space-between`,`space-around`,`stretch`,`center`,`flex-start`, `flex-end`

`space-between` value displays the flex lines with equal space between them:

```css
.flex-container {
  display: flex;
  height: 600px;
  flex-wrap: wrap;
  align-content: space-between;
}
```

`space-around` value displays the flex lines with space before, between, and after them:

```css
.flex-container {
  display: flex;
  height: 600px;
  flex-wrap: wrap;
  align-content: space-around;
}
```

`stretch` value stretches the flex lines to take up the remaining space (this is default):

```css
.flex-container {
  display: flex;
  height: 600px;
  flex-wrap: wrap;
  align-content: stretch;
}
```

`center` value displays the flex lines in the middle of the container:

```css
.flex-container {
  display: flex;
  height: 600px;
  flex-wrap: wrap;
  align-content: center;
}
```

`flex-start` value displays the flex lines at the start of the container:

```css
.flex-container {
  display: flex;
  height: 600px;
  flex-wrap: wrap;
  align-content: flex-start;
}
```

`flex-end` value displays the flex lines at the end of the container: 

```css
.flex-container {
  display: flex;
  height: 600px;
  flex-wrap: wrap;
  align-content: flex-end;
}
```

### `gap` `row-gap` `column-gap`

`gap` property explicitly controls the space between flex items. It applies that spacing only between items not on the outer edges.

```css
.container {
  display: flex;
  ...
  gap: 10px;
  gap: 10px 20px; /* row-gap column gap */
  row-gap: 10px;
  column-gap: 20px;
}
```

## FLex Items

Child Elements (Items)
The direct child elements of a flex container automatically becomes flexible (flex) items.

```css
<div class="flex-container">
  <div>1</div>
  <div>2</div>
  <div>3</div>
  <div>4</div>
</div>
```

## Flex Item Properties

`order`
`flex-grow`
`flex-shrink`
`flex-basis`
`flex`
`align-self`

### `order`

`order` property specifies the order of the flex items.

order property can change the order of the flex items:

```html
<div class="flex-container">
  <div style="order: 3">1</div>
  <div style="order: 2">2</div>
  <div style="order: 4">3</div>
  <div style="order: 1">4</div>
</div>
```

### `flex-grow`

flex-grow property specifies how much a flex item will grow relative to the rest of the flex items.

```html
<div class="flex-container">
  <div style="flex-grow: 1">1</div>
  <div style="flex-grow: 1">2</div>
  <div style="flex-grow: 8">3</div>
</div>
```

### `flex-shrink`

flex-shrink property specifies how much a flex item will shrink relative to the rest of the flex items.

```html
<div class="flex-container">
  <div>1</div>
  <div>2</div>
  <div style="flex-shrink: 0">3</div>
  <div>4</div>
  <div>5</div>
  <div>6</div>
  <div>7</div>
  <div>8</div>
  <div>9</div>
  <div>10</div>
</div>
```

### `flex-basis`

flex-basis property specifies the initial length of a flex item.

**Example:**

```html
Set the initial length of the third flex item to 200 pixels:

<div class="flex-container">
  <div>1</div>
  <div>2</div>
  <div style="flex-basis: 200px">3</div>
  <div>4</div>
</div>
```

### `flex Property`

`flex` property is a `shorthand` property for the `flex-grow`, `flex-shrink`, and `flex-basis` properties.

```html
Make the third flex item not growable (0), not shrinkable (0), and with an initial length of 200 pixels:

<div class="flex-container">
  <div>1</div>
  <div>2</div>
  <div style="flex: 0 0 200px">3</div>
  <div>4</div>
</div>
```

### `align-self` Property

align-self property specifies the alignment for the selected item inside the flexible container.

align-self property overrides the default alignment set by the container's align-items property.

```html
<div class="flex-container">
  <div>1</div>
  <div>2</div>
  <div style="align-self: center">3</div>
  <div>4</div>
</div>
```

## Flexbox and Responsive Design

Flexbox is a great tool for creating responsive layouts. Use media queries to adapt layouts to different screen sizes.


For example, if you want to create a two-column layout for most screen sizes, and a one-column layout for small screen sizes (such as phones and tablets), you can change the flex-direction from row to column at a specific breakpoint (800px in the example below):

**Example:**

```css
.flex-container {
  display: flex;
  flex-direction: row;
}

/* Responsive layout - makes a one column layout instead of a two-column layout */
@media (max-width: 800px) {
  .flex-container {
    flex-direction: column;
  }
}
```

Another way is to change the percentage of the flex property of the flex items to create different layouts for different screen sizes. Note that we also have to include flex-wrap: wrap; on the flex container for this example to work

```css
.flex-container {
  display: flex;
  flex-wrap: wrap;
}

.flex-item-left {
  flex: 50%;
}

.flex-item-right {
  flex: 50%;
}

/* Responsive layout - makes a one column layout instead of a two-column layout */
@media (max-width: 800px) {
  .flex-item-right, .flex-item-left {
    flex: 100%;
  }
}
```
