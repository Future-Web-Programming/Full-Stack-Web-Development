# Lecture 04

## CSS Backgrounds (Background-Color, Background Image, and it's properties)

CSS background properties are used to add background effects for elements

## Background-color
background-color property specifies the background color of an element

```css
body {
  background-color: lightblue;
}
```
Opacity 
opacity property specifies the opacity/transparency of an element
value from 0.0 - 1.0
```css
div {
  background-color: green;
  opacity: 0.3;
}
```
>!Important:

When `using opacity` property to `add transparency` to the `background` of an element, _`all of its child elements inherit_ `the `same transparency`. 

#### opacity using RGBA

If we `do not` want to `apply opacity` to `child elements`, like in our example above, `use RGBA color values`. The following example sets the opacity for the background color and not the text:

```css
div {
  background: rgba(0, 128, 0, 0.3) /* Green background with 30% opacity */
}
```

## Background-image
background-image property `specifies` an `image` to use `as` the `background` of an element.

By default, the image is repeated so it covers the entire element.
```css
body {
background-image: url("paper.gif");
}
```
### background-size

#### Property Values:

##### auto
Default value. The background image is displayed in its original size	

##### contain
Resize the background image to make sure the image is fully visible	

##### cover
Resize the background image to cover the entire container, even if it has to stretch the image or cut a little bit off one of the edges	

### Background-repeat
By default, the background-image property repeats an image both horizontally and vertically.

To repeat an image Horizontally, set background-repeat: repeat-x;
```css
body {
height: 500px;
width: 100%;
background-image: url("pexels-stijn-dijkstra-2674064.jpg");
background-repeat: repeat-x;
background-size: cover;

}
```

 To repeat an image vertically, set background-repeat: repeat-y;
```css
body {
height: 500px;
width: 100%;
background-image: url("pexels-stijn-dijkstra-2674064.jpg");
background-repeat: repeat-y;
background-size: cover;

}
```

### Background-position
background-position property is used to specify the position of the background image.

```css
body {
background-image: url("pexels-stijn-dijkstra-2674064.jpg");
background-repeat: no-repeat;
background-position: right top;
}
```
### Background-attachment
background-attachment property specifies whether the background image should scroll or be fixed (will not scroll with the rest of the page):

```css
body {
  background-image: url("img_tree.png");
  background-repeat: no-repeat;
  background-position: right top;
  margin-right: 200px;
  background-attachment: fixed;
}
```
### Background (shorthand property)

To shorten the code, it is also possible to specify all the background properties in one single property. This is called a shorthand property.


Instead of writing:👇


```css
body {
  background-image: url("img_tree.png");
  background-repeat: no-repeat;
  background-position: right top;
  margin-right: 200px;
  background-attachment: fixed;
}
```

We can use shorthand property background:

Use the shorthand property to set the background properties in one declaration:

```css
body {
background: #ffffff url("img_tree.png") no-repeat right top;
}
```

Shorthand property the order of the property values is:

```css
background-color
background-image
background-repeat
background-attachment
background-position

```
>It does not matter if one of the property values is missing as in above example we skipped background-attachment