# Lecture -10

## Display inline - inline-block and display: block:

Before we learn about Display, as we have study in HTML Module, some elements have block level scope and some have inline inline scope.

## CSS Display Property

Display property specifies display behavior (type of rendering box) of an element.

### Display: inline

Displays an element as an inline element (like `<span>)`. Any height and width properties will have no effect. and it will take space according to inner content.

```css
h2{
        display: inline;
}

```

### Display: block

Displays an element as a block element (like `<p>`). It starts on a new line, and takes up the whole width. we can control widh and height of element.

```css
h2{
        display: block;
    }
```

### Display: inline-block

Displays an element as an inline-level block container. element itself is formatted as an inline element, but we can apply height and width values

```css
h2{
        display: inline-block;
    }
```