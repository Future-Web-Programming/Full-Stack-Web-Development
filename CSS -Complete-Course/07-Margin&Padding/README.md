# Lecture -07

## CSS Margin & Padding

Before we learn about css margin & padding we have to learn about outline which i have missed while we were learning about css border., 

## CSS Outline 


An outline is a line drawn outside the element's border.

it is different then border
```css
  h1{
            outline-style: solid;
            outline-width: 13px;
            outline-color: hsla(360,100%,50%,0.9);
            border: 12px solid orange;
        }

```

Shorthand Property of outline

```css
h1{
    outline: 3px solid blue;
}
```

Margins are used to create _space_ around _elements_, `outside` of any defined `borders`.

margin is an invisible space around box. It pushes other elements away from the box. Margins can have positive or negative values. Setting a negative margin on one side of  box can cause it to overlap other things on the page. Whether using the standard or alternative box model, margin is always added after the size of the visible box has been calculated.

We can control all margins of an element at once using the margin property, or each side individually using the equivalent longhand properties:

```css
p{
  margin: 20px; /*margin short hand property*/
}
```

### Margin - Individual Sides
CSS has properties for specifying the margin for each side of an element:

All the margin properties can have the following values:

### auto - 
browser calculates the margin
### length - 
specifies a margin in px, pt, cm, etc.
### % - 
specifies a margin in % of the width of the containing element

### inherit - 
specifies that the margin should be inherited from the parent element

#### Note: 
>Negative values are allowed.

#### margin-top

```css
  p{margin-top: 10px;}
```
#### margin-right

```css
  p{margin-right: 10px;}
```
#### margin-bottom

```css
  p{margin-bottom: 10px;}
```
#### margin-left

```css
  p{margin-left: 10px;}
```


```css
p {
  margin-top: 100px;
  margin-bottom: 100px;
  margin-right: 150px;
  margin-left: 80px;
}
```

## Margin - Shorthand Property

```css
p{
  margin: 20px; /*margin short hand property*/
}
```

If the margin property has four values:
```css
p{margin: 25px 50px 75px 100px};
```
in this case,
```css
top margin is 25px
right margin is 50px
bottom margin is 75px
left margin is 100px
```

If the margin property has three values:
```css
p {
  margin: 25px 50px 75px;
}

margin: 25px 50px 75px;
top margin is 25px
right and left margins are 50px
bottom margin is 75px
```

If the margin property has two values:

margin: 25px 50px;
top and bottom margins are 25px
right and left margins are 50px

```css
p {
  margin: 25px 50px;
}
```
If the margin property has one value:

margin: 25px;
all four magrins are 25px
```css
p {
  margin: 25px;
}
```
### auto Value
we can set the margin property to auto to `horizontally center` the `element` within `its` `container`.

`element` will then `take` up the `specified` `width`, and the `remaining` `space` will be `split` `equally` between the `left` and `right` `margins`.

Use margin: auto:
```css
div {
  width: 300px;
  margin: auto;
  border: 1px solid red;
}
```
### inherit Value
This example lets the left margin of the <p class="ex1"> element be inherited from the parent element (<div>):

```css
div {
  border: 1px solid red;
  margin-left: 100px;
}
```

### CSS Margin Collapse
Sometimes two margins collapse into a single margin.
Two margins will combine to become one margin. Its size will be equal to the largest individual margin.

```css
h1 {
  margin-bottom: 50px;
}

h2 {
  margin-top: 20px;
}
```
In this example the `<h1> `element has a `bottom margin of 50px` and the `<h2> `element has a `top margin` set to `20px`.

so the `vertical margin` between the `<h1>` and the `<h2>` would be a `total of 70px` (`50px + 20px`).

But `due` to `margin collapse`, the actual margin ends up being `50px`.

## CSS Padding

`Padding` is used to create `space` `around` an `element`'s `content`, `inside` of any defined `borders`.

padding sits between the border and the content area and is used to push content away from the border. Unlike margins, we cannot have a negative padding. Any background applied to our element will display behind the padding.

setting the padding for each side of an element (top, right, bottom, and left).

### Padding - Individual Sides
CSS has properties for specifying the padding for each side of an element:

All the padding properties can have following values:

### length - 
specifies a padding in px, pt, cm, etc.

### % - 

specifies a padding in % of the width of the containing element

### inherit -
specifies that the padding should be inherited from the parent element

### Note: 
>Negative values are not allowed.

```css
padding-top
padding-right
padding-bottom
padding-left
```
Individual Pading Exmaple .
```css
div {
  padding-top: 50px;
  padding-right: 30px;
  padding-bottom: 50px;
  padding-left: 80px;
}
```
### Padding - Shorthand Property
to specify all the padding properties in one property.

##### If the padding property has four values:
```css
  div{
padding: 25px 50px 75px 100px;
}
```
top padding is 25px
right padding is 50px
bottom padding is 75px
left padding is 100px

##### If the padding property has three values:

```css
div {
  padding: 25px 50px 75px;
}
```
padding: 25px 50px 75px;
top padding is 25px
right and left paddings are 50px
bottom padding is 75px

#### If the padding property has two values:

```css
div {
  padding: 25px 50px;
}
```

top and bottom paddings are 25px
right and left paddings are 50px

##### If the padding property has one value:

```css
div {
  padding: 25px;
}
```

all four paddings are 25px

## Padding and Element Width

CSS `width property` `specifies` the `width` of the `element's ``content` area. 

`content area` is the `portion` `inside` the `padding`, `border`, and `margin` of an `element`.

So, if element has a `specified` `width`, the `padding added` `to` that `element` `will be added` `to`  `total width` of the `element`. 

```css
div {
  width: 300px;
  padding: 25px;
}
```

Here, the `<div> `element is given a `width` of `300px`. However, `actual` `width` of the `<div>` `element` will be `350px` (300px + 25px of left padding + 25px of right padding):


`To keep` the `width` at `300px`, `no matter` the `amount of padding`, we  can `use` the `box-sizing` property. 

with this element will `maintain` its `actual width`; if we `increase`  `padding`, `available content` `space` will `decrease`.

```css
div {
  width: 300px;
  padding: 25px;
  box-sizing: border-box;
}
```
