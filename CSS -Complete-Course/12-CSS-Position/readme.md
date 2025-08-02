# Lecture :12
[![ CSS Position Property](/Assets/Lecture%20-%2012%20-%20CSS%20-%20Position%20Property.png)](https://www.youtube.com/playlist?list=PLZ3EtyMeDWcmVt6YhqZsUC-ywqngUpB6l)
## Understanding the CSS Position Property

Good day, everyone! Today, we'll be diving into a vital part of CSS  "position" property. Mastering CSS positioning is a crucial skill to develop when it comes to creating dynamic and visually engaging websites.

The position property in CSS defines how an element is positioned in a layout. There are five key types of positioning:

- Static (Default Postion)
- Relative (Relative to it's Default Postion)
- Absolute (Relative to it's nearest Ancesstor[parent] if parent have not postion then it will be top left corner of browser web page.)
- Fixed (Element will be fix to corner of web page)
- Sticky

## 1. Static Positioning

By default, elements are statically positioned. This means they're positioned according to the normal flow of the page. They're not affected by top, bottom, left, or right properties.

```css
div {
  position: static;
}
```

## 2. Relative Positioning

An element with position relative is positioned relative to its normal position. If you set the top, right, bottom, and left properties of these elements, it will cause it to adjust from its normal position.

```css
div {
  position: relative;
  left: 20px;
}
```

## 3. Absolute Positioning

An element with position absolute is positioned relative to the nearest positioned ancestor (instead of positioned relative to the viewport). If an absolute positioned element has no positioned ancestors, it uses the document body, and moves along with page scrolling.

```css
div {
  position: absolute;
  top: 80px;
  right: 0;
}
```

## 4. Fixed Positioning

An element with position fixed is positioned relative to the viewport, which means it always stays in the same place even if the page is scrolled. The top, right, bottom, and left properties are used to position the element.

```css
div {
  position: fixed;
  bottom: 0;
  right: 0;
}
```

## 5. Sticky Positioning

An element with position sticky is positioned based on the user's scroll position. It behaves like position: relative until a given offset position is met in the viewport, then it behaves like position: fixed.

```css
div {
  position: sticky;
  top: 0;
}
```

### Bonus Part of the Video

## Z-index

with this we can adjust the behaviour of element (Which element look at top) by defalut element have z-index: 0 ,

Exercise:

I encourage you all to try out each of these position properties in your CSS file and observe the changes. Experiment with different values of top, bottom, left, and right properties.

Remember, mastering CSS positioning is about practicing and experimenting with your code. We'll conclude today's lecture here. For the next session, we'll be studying more about different CSS properties and their uses.