# CSS Units

CSS has several different units for expressing a length.

Many CSS properties take "length" values, such as width, margin, padding, font-size, etc.

Length is a number followed by a length unit, such as 10px, 2em, etc.

```css
h1 {
  font-size: 60px;
}

p {
  font-size: 25px;
  line-height: 50px;
}
```

Note: whitespace cannot appear between the number and the unit. However, if the value is 0, the unit can be omitted. for example

```css
h1 {
  font-size: 60 px;
}

p {
  font-size: 0;

}
```
## Lengths

numeric type you will come across most frequently is `<length>`. For example, 10px (pixels) or 30em. There are two types of lengths used in CSS — relative and absolute. It's important to know the difference in order to understand how big things will become.

There are two types of length units: absolute and relative.

## Absolute length units
absolute length units are fixed and a length expressed in any of these will appear as exactly that size.

Absolute length units are not recommended for use on screen, because screen sizes vary so much. However, they can be used if the output medium is known, such as for print layout.

following are all absolute length units — they are not relative to anything else, and are generally considered to always be the same size.

Unit |	Name | Equivalent to
--- | ---- | --- 
cm	| Centimeters |	1cm = 37.8px = 25.2/64in
mm	| Millimeters |	1mm = 1/10th of 1cm
pt	| Points	| 1pt = 1/72nd of 1in
px	| Pixels	| 1px = 1/96th of 1in
in	| Inches	| 1in = 2.54cm = 96px

[Checkout Full list](https://developer.mozilla.org/en-US/docs/Learn/CSS/Building_blocks/Values_and_units, "MDN")

[Checkout Full list](https://www.w3schools.com/cssref/css_units.php, "W3School")

## Relative length units
Relative length units specify a length relative to another length property. Relative length units scale better between different rendering medium.

Relative length units are relative to something else, perhaps the size of the parent element's font, or the size of the viewport. The benefit of using relative units is that with some careful planning you can make it so the size of text or other elements scales relative to everything else on the page. Some of the most useful units for web development are listed in the table below.

Unit |	Relative to 
--- | --- 
em |	Font  size of the parent, in the case of typographical properties like font-size, and font size of the element itself, in the case of other properties like width.
rem	|Font size of the root element.
vw	|1% of the viewport's width.
vh	|1% of the viewport's height.
vmin|	1% of the viewport's smaller dimension.
vmax|	1% of the viewport's larger dimension.

[Checkout Full List](https://developer.mozilla.org/en-US/docs/Learn/CSS/Building_blocks/Values_and_units, "MDN")

[Checkout Full list](https://www.w3schools.com/cssref/css_units.php, "W3School")