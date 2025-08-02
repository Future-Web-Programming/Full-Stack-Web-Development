# Lecture 1;

## CSS Introduction , How to Add CSS in HTML, Precdence of CSS, 
## What is CSS?

CSS is used to define styles for your web pages, including the design, layout and variations in display for different devices and screen sizes.


### How To Add or include CSS in HTML

There are Three Ways to Insert CSS let's learn one by one.
### Inline CSS

An inline style may be used to apply a unique style for a single element.

To use inline styles, add the style attribute to the relevant element
```html
<h1 style="color:blue;text-align:center;">I am heading</h1>
```
### Internal CSS
An internal style sheet may be used if one single HTML page has a unique style.

internal style is defined inside the 
```css
<style> element, inside the head section.
```

### External CSS
With an external style sheet, you can change the look of an entire website by changing just one file!

External styles are defined within the `<link> `element, inside the `<head>` section of an HTML page

```html
<link rel="stylesheet" href="style.css">
```

### Highest Priority of Css

`1` - `Inline style` (inside an HTML element) have higher priority other than
`2`- `External and internal style` sheets (in the head section)
`3`- `Browser default`