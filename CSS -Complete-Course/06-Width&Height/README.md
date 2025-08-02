# Lecture -06

## Height and Width

### CSS Setting height and width

CSS Height, Width and Max-width
` CSS height` and `width` properties are used to `set the height` and `width` `of` an `element`.

CSS `max-width` property is used to `set` the `maximum width` `of` an `element`.


It sets the height/width of the area inside the padding, border, and margin of the element.

### CSS height and width Values

height and width properties may have the following values:

#### auto - 
This is default. browser calculates the height and width

#### length - 
Defines the height/width in px, cm, etc.

#### % - 
Defines the height/width in percent of the containing block

#### initial - 
Sets the height/width to its default value

#### inherit - 
height/width will be inherited from its parent value

```css
div {
  height: 200px;
  width: 500px;
  background-color: powderblue;
}
```
`problem` with  `<div>` above `occurs` when `browser window` is `smaller` than the `width` of `element` (500px). `browser` then `adds` a `horizontal scrollbar` to the `page`.

`instead` of `using` just `width` `use max-width`, it will `improve` the` browser's handling` of small windows.


```css
div {
  height: 200px;
  width: 50%;
  background-color: powderblue;
}
```

### Note: 
Remember that the `height` and `width` properties `do not include` `padding`, `borders`, or `margins`! 

### Setting max-width

`max-width` property is used to `set` the `maximum width` of an `element`.

`max-width` can be `specified` in length values, like px, cm, etc., or in percent (%) of the containing block, or set to none (this is default. Means that there is no maximum width).

```css
div {
  height: 200px;
  max-width: 500px;
  background-color: powderblue;
}
```

### Note: 
`If` for `some` `reason` we `use both` the `width property` and the `max-width property` on the `same` `element`, and the `value` `of` the `width property` is `larger` than  `max-width property`;  `max-width` `property will be used` (and the width property will be ignored).

```css
div {
  max-width: 500px;
  height: 100px;
  background-color: powderblue;
}
```
