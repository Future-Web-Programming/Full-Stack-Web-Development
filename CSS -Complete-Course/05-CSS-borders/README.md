# Lecture 5

#### Borders - border-width - border-style - indvidual sides border - Shorthand Border

CSS border properties allow you to specify border style, width, and color of an element's border.

I have borders on all sides.
```css
p{
border: 4px solid #af2fff;
}
```

I have a red bottom border.
```css
p{
border-bottom: 4px solid #af2fff;
}
```
I have rounded borders.

```css
p{
border: 4px solid #af2fff;
}
```

I have a blue left border.
```css
 p {
           border-left: 12px solid blue;
            
        }
```
### CSS Border Style
border-style property specifies what kind of border to display.

there are number of border style porperties, we can search it online when we need.

```css
 p {
           border-style: solid;
            
        }
```

## Border Sides

#### CSS Border Width
specifies the width of the four borders.

width can be set as a specific size in `px, pt, cm, em, etc`.
```css
p.one {
  border-style: solid;
  border-width: 5px 20px; /* in pixel*/
}
```

### CSS Border Color
border-color property is used to set the color of border

```css
p{
  border-style: solid;
  border-color: blue;
}
```

## Indvidual border
we can also specify all the individual border properties for just one side:

Left Border
```
p {
  border-left: 6px solid red;
}
```
## Rounder Borders
CSS Rounded Borders
The border-radius property is used to add rounded border corner


```css
p {
  border: 2px solid red;
  border-radius: 5px;
}
```
## Border sides

CSS Border - Individual Sides

In CSS, there are also properties for specifying each of the borders (top, right, bottom, and left):

```css
p {
  border-top-style: dotted;
  border-right-style: solid;
  border-bottom-style: dotted;
  border-left-style: solid;
}
```

## Border Shorthand
CSS Border - Shorthand Property

```css
p{
border: 4px solid #af2fff;
}
```