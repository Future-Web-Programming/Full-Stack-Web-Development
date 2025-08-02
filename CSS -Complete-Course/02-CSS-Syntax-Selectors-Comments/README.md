## Lecture -02
CSS Syntax, Selectors & Comments.
### CSS Syntax

![CSS Example](https://www.w3schools.com/css/img_selector.gif "Good Example of CSS Syntax by W3 School")


### CSS Selector

CSS selectors are used to "find" (or select) the HTML elements you want to style

```css
    slector{
        property: value;
    }
```

### CSS Universal Selector

universal selector (*) selects all HTML elements on the page
```css
* {
  margin: 0;
  padding: 0;
}
```
### Simple selectors 
we select elements based on name, id, class

there are other ways as well but as we progressed in our course will learn. 

### Css id Selector

id selector uses the id attribute of an HTML element to select a specific element

To select an element with a specific id, write a hash `#idName`

```css
    #para{
        background-color: blue;
    }
```

### CSS class Selector

 class selector selects HTML elements with a specific class attribute

 To select elements with a specific class, write a `.classname`

```css
    .para{
        background-color: blue;
    }
```

we can also specify that only specific HTML elements should be affected by a class

```css
    p.para{
        background-color: blue;
    }
```

HTML elements can also have more than one class

```html
<p class="para main">I am Para.</p>
```


### CSS Grouping Selector

Sometime we want to style same styles on multiple elements so for that It will be better to group the selectors, to minimize the code, rather writing one by one.

```css
h1, h2, p {
  background-color: blue;
  color: white;
}
```

### CSS Comments

Comments are used to explain the code, and may help when you edit the source code at a later date.

Comments are ignored by browsers.
```css
/* This is a single-line comment */
p.para {
  color: black; /* text color set to black */
}
```

Comments can also span multiple lines: 

```css
/* This is
a multi-line
comment */
p.para {
  color: black; /* text color set to black */
}
```