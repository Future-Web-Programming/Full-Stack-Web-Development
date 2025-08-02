# Lecture 18 - Box Shadow - Drop Shadow - and Text Shadow

## Box Shadow

box-shadow property we used  in CSS for putting shadows on elements

Syntax:

```css
box-shadow: [horizontal offset] [vertical offset] [blur radius] [optional spread radius] [color];

/* single drop shadow example */
box-shadow: 10px 5px 10px 20px rgba(0,0,0,0.2);

/* double shadow expample */
box-shadow: 10px 5px 10px 20px rgba(0,0,0,0.2), 10px 5px 10px 20px rgba(0,0,0,0.2)
```

### Horizontal Offset - x-Offset

If we set value in positive shadow will be apply towards right side of box if we set value in negative shadow will apply towards left side.

### Vertical offset - y-Offset

If we set value in Positive shadow will apply towards bottom of box and setting negative value shadow will apply towards top side of box.

### Blur Radius

How much Blur We want to set our Shadow if we set blur radius to `0` shadow will be sharp, the higher the number, the more blurred it will be

### Spread Radius

It is an optional positive values increases size of the shadow, negative values decrease the size.

## Multiple Drop Shadow

We can add multiple dorp shadow with comma seprated.

```css
/* double shadow expample */
box-shadow: 10px 5px 10px 20px rgba(0,0,0,0.2), 10px 5px 10px 20px rgba(0,0,0,0.2)
```

## Drop Shadow

drop-shadow() CSS function applies a drop shadow effect to the input image. if we add box shadow to image then image looks weired.

Syntax:

```css
drop-shadow(offset-x offset-y blur-radius color)

filter: drop-shadow(10px,20px 10px rgba(0,0,0,0.2))
```

## Text Shadow

text-shadow CSS property adds shadows to text. It accepts a `comma-separated` list of shadows to be applied to the text and any of its decorations. Each shadow is described by some combination of `X` and `Y` `offsets` from the element, blur radius, and color.

Syntax:

```css
/* offset-x | offset-y | blur-radius | color */
```