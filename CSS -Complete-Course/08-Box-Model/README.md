# Lecture -08

## CSS Box Model

All HTML elements can be considered as boxes.

### CSS Box Model

CSS box model is essentially a box that wraps around every HTML element. 
It consists of margins, borders, padding, and the actual content. 

![CSS Box Model](https://developer.mozilla.org/en-US/docs/Learn/CSS/Building_blocks/The_box_model/box-model-devtools.png "CSS Box Model Picture by MDN")



### Content - 
content of the box, includes text, images etc content of box.
### Padding - 
we use to create space around the content inside border as transparent. 
### Border -  
we use to set the border around padding and content.
### Margin - 
we use to set create space outside of border as transparent.

Box Model allows us to add a border around elements, and to define space between elements. 

```css
div {
  width: 300px;
  border: 15px solid green;
  padding: 50px;
  margin: 20px;
}
```

### Width and Height of an Element
In order to set the width and height of element correctly in all browsers, we need to know how the box model works.


```css
div {
  width: 320px;
  padding: 10px;
  border: 5px solid gray;
  margin: 0;
}
```
Here is the calculation of total width and Height of element:
320px (width)
+ 20px (left + right padding)
+ 10px (left + right border)
= 350px

>Total width of an element should be calculated like this:

### Element total width:

> width = width + left padding + right padding + left border + right border + left Outline + Right Outline

#### Total height of an element

>height = height + top padding + bottom padding + top border + bottom border + + Top Outline + Bottom Outline
