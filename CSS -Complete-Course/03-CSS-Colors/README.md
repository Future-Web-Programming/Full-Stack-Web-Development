# Lecture 03;

## Colors & (RGB - RGBA - HEX - HSL - HSLA) Values

CSS, `color` can be `specifiy` by using a predefined `color name` or `Color Values`.

Background Color
set the background color for HTML elements:
```css
h1{
    background-color:DodgerBlue;
    }
```

Text Color
```css
h1{
    color:yellow;
    }
```

Border Color
```css

h1{
    border-color:2px solid yellow;
    }
```

## CSS Colors values

## RGB,
`RGB `color value represents `RED, GREEN, and BLUE`
0 -> 255

Each parameter (red, green, and blue) defines the `intensity` of the color between` 0 `and `255`.

For example:
`rgb(255, 0, 0)` is displayed as `red`, because red is set to `its highest value` `255` and the others are set to 0.
```css
h1{
    background-color: rgb(255, 0, 0);
}
```
### To display black
set `all color` parameters to 0, like this: `rgb`(`0, 0, 0`).
```css
h1{
    background-color: rgb(0,0,0);
}
```
### To display white
set `all color` parameters to `255`, like this: rgb(255, 255, 255).
```css
h1{
    background-color: rgb(255, 255, 255);
}
```
### Shades of gray 
`shades of gray` often defined using `equal values` for `all` the 3 light sources:
```css
h1{
    background-color: rgb(120,120,120);
}
```

## RGBA
`RGBA color values` are an `extension of RGB` color values with an `alpha channel` - which `specifies` the `opacity for a color`.

RGBA color value is specified
```css
rgba(red, green, blue, alpha);
h1{
    background-color: rgba(0,0,0,0.2);
}
```
>alpha parameter is a number between `0.0` (_**fully transparent**_) and `1.0` (not transparent at all)
## HEX

A `hexadecimal color` is `specified` with: `#RRGGBB`, _ `RR (red)`, `GG (green)` and `BB (blue)`_ `hexadecimal integers` `specify` the `components` of the `color`.

hexadecimal values between `00` and `ff`  0 -> 9 == a -> f

For example:
 `#ff0000` is displayed as `red`, because red is set to its `highest` value (`ff`) and the `others are set` to the `lowest` value (`00`).

```css

h1{
    background-color: #ff0000;
}
```
### To display black:
set all values to `00`, like this: `#000000`.
```css

h1{
    background-color: #000000;
}
```
### To display white: 
set all values to ff, like this: 
`#ffffff`.  
```css

h1{
    background-color: #ffffff;
}
```
### 3 Digit HEX Value

`3-digit` `hex code `is a `shorthand` for some `6-digit` hex codes

`#rgb`
3-digit hex code can only be `used` when `both` the `values` (RR, GG, and BB) are the `same` for each component
#ff00cc
it can be written like this: #f0c

```css

h1{
    background-color: #f0c;
}
```
### HSL
`Hue is a degree` on the `color wheel` from `0 to 360`. 0 is red, 120 is green, and 240 is blue.

`Saturation` is a `percentage value`.` 0% means a shade of gray`, and `100%` is the `full color`.

`Lightness `is also a percentage. `0%` is `black`, `50%` is` neither light or dark`, `100% `is `white`
HSL stands for hue, saturation, and lightness

hsl(hue, saturation, lightness)

```css

h1{
    background-color: hsl(120, 50%, 50%);
}
```
### Hue 
is a `degree` on the `color wheel` from `0 to 360`. `0 is red`, `120 is green`, and `240 is blue`.
```css

h1{
    background-color: hsl(120,);
}
```
### Saturation
is a percentage value. `0%` means a `shade of gray`, and `100%` is the `full color`.
```css

h1{
    background-color: hsl(120, 0%,);
}
```
### Lightness
is also a percentage. `0%` is` black`, `50%` is `neither light` or `dark`, `100%` is `white`

```css

h1{
    background-color: hsl(120, 0%, 100%);
}
```
### HSLA Value

`HSLA` color values are an `extension` of` HSL color` values with an `alpha channel` which specifies the opacity for a color.

`hsla(hue, saturation, lightness, alpha)`

alpha parameter is a number between `0.0` (fully transparent) and `1.0` (not transparent at all)

```css

h1{
    background-color: hsla(120, 50%, 50%,0.5);
}
```