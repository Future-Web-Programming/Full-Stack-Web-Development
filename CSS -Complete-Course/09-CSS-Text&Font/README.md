# Lecture -09

## Styling Text with Css using CSS Text and Fonts Properties

# CSS Text Properties
CSS has a lot of properties for formatting text.

### Color
to Set the Text Color

```css
    h1{
        color: #000;
    }

```
### Background Color

to set background color of any element.
```css
h1{
    background-color: #afc;
}
```
## Text layout

### Text Alinment
text-align property is used to control how text is aligned within its containing content box.

>left: Left-justifies the text.

>right: Right-justifies the text.

>center: Centers the text.

>justify: Makes the text spread out, varying the gaps in between the words so that all lines of text are the same width.

```css
h1 {
  text-align: center;
}
```

### Line height
line-height property sets the height of each line of text. This property can not only take most length and size units, but can also take a unitless value
```css
p {
  line-height: 1.6;
}
```

### Letter and word spacing
letter-spacing and word-spacing properties allow you to set the spacing between letters and words in our text.
```css
p::first-line {
  letter-spacing: 4px;
  word-spacing: 4px;
}
```

## Text Decoration
text-decoration shorthand CSS property sets the appearance of decorative lines on text.


>text-decoration-line

>text-decoration-color

>text-decoration-style

>text-decoration-thickness

>text-decoration

```css
h1 {
  text-decoration-line: underline;
  text-decoration-thickness: auto;
}
```

Shorthand Property

```css
h1 {
  text-decoration: none;
}
```

### Text Transformation
property is used to specify uppercase and lowercase letters in a text.

```css
p.uppercase {
  text-transform: uppercase;
}

p.lowercase {
  text-transform: lowercase;
}

p.capitalize {
  text-transform: capitalize;
}
```

### Text Shadow
text-shadow CSS property adds shadows to text. 
we only specify the horizontal shadow (2px) and the vertical shadow (2px):
and can add blur.

```css
h1 {
  /* offset-x | offset-y | blur-radius | color */
  text-shadow: 2px 2px 2px red; 
}
```

## Text Direction


What if we have arabic or any other lanague wich start from right to left for that we have. 

### CSS Direction Property
direction CSS property sets direction of text, table columns, and horizontal overflow. Use rtl for languages written from right to left (like Urdu or Arabic), and ltr for those written from left to right (like English and most other languages).
```html
<p>هذه الفقرة باللغة العربية ، لذا يجب الانتقال من اليمين إلى اليسار.</p>
<p>یہ پیراگراف عربی میں ہے ، لہذا آپ کو دائیں سے بائیں منتقل ہونا چاہئے۔</p>
<p>यह पैराग्राफ अरबी में है, इसलिए आपको दाएं से बाएं जाना चाहिए।</p>
```

```css
p{
      direction: rtl;
      unicode-bidi: bidi-override;
   }
```

## writing-mode

writing-mode CSS property sets whether lines of text are laid out horizontally or vertically, as well as the direction in which blocks progress. When set for an entire document, it should be set on the root element (html element for HTML documents).
```css
p{
  writing-mode: horizontal-tb;
}
p{
  writing-mode: vertical-lr;
}
p{
  writing-mode: vertical-rl;
}
```

## Text Orientation
text-orientation CSS property sets the orientation of the text characters in a line. It only affects text in vertical mode (when `writing-mode` is not horizontal-tb). It is useful for controlling the display of languages that use vertical script, and also for making vertical table headers.


```
### CSS Fonts

### Font families

To set a different font for your text, you use the font-family property — this allows you to specify a font (or list of fonts) for the browser to apply to the selected elements.

browser will only apply a font if it is available on the machine the website is being accessed on; if not, it will just use a browser default font. 
```css
p {
  font-family: arial;
}

```

## Default fonts / Generic Font Families

CSS defines five generic names for fonts: serif, sans-serif, monospace, cursive, and fantasy.

#### Serif fonts:
have a small stroke at edges of each letter. They create a sense of formality and elegance.

#### Sans-serif:
fonts have clean lines (no small strokes attached). They create a modern and minimalistic look.

#### Monospace fonts:
Fonts where every character has the same width, typically used in code listings.

#### Cursive fonts:
imitate human handwriting.

#### Fantasy fonts:
are decorative playful fonts.


Difference Between Serif and Sans-serif Fonts

![FonT Selection](https://www.w3schools.com/css/serif.gif "Pic by w3school")

A font-family example

Let's add to our previous example, giving the paragraphs a sans-serif font:


```css
p {
  color: red;
  font-family: Helvetica, Arial, sans-serif;
}


```
### Web safe fonts
Speaking of font availability, there are only a certain number of fonts that are generally available across all systems and can therefore be used without much worry. These are the so-called web safe fonts.


### Fallback Fonts
However, there are no 100% completely web safe fonts. There is always a chance that a font is not found or is not installed properly.

Therefore, it is very important to always use fallback fonts.

This means that you should add a list of similar "backup fonts" in the font-family property. If the first font does not work, the browser will try the next one, and the next one, and so on. Always end the list with a generic font family name.

```css
p {
font-family: Tahoma, Verdana, sans-serif;
}

```

```css 
Arial (sans-serif)
Verdana (sans-serif)
Tahoma (sans-serif)
Trebuchet MS (sans-serif)
Times New Roman (serif)
Georgia (serif)
Garamond (serif)
Courier New (monospace)
Brush Script MT (cursive)
```


### CSS Font Style

Font Style
font-style property is mostly used to specify italic text.

This property has three values:

normal - text is shown normally
italic - text is shown in italics
oblique - text is "leaning" (oblique is very similar to italic, but less supported)

```css
p.normal {
  font-style: normal;
}
```

### Font Weight
font-weight property specifies  weight of a font:
```css
p.normal {
  font-weight: normal;
}
```
### Font Variant
font-variant property specifies whether or not a text should be displayed in a small-caps font.
```css
p.normal {
  font-variant: normal;
}
```

### CSS Font Size
font-size property sets the size of the text.

Being able to manage the text size is important in web design. However, we should not use font size adjustments to make paragraphs look like headings, or headings look like paragraphs.

Always use the proper HTML tags, like `<h1>` - `<h6>` for headings and `<p>` for para

### Absolute size:

Sets text to a specified size
Does not allow a user to change text size in all browsers.

Absolute size is useful when physical size of the output is known

### Relative size:

Sets the size relative to surrounding elements
Allows a user to change text size in browsers

Set Font Size With Pixels
Setting text size with pixels gives you full control over the text size:

```css
h1 {
  font-size: 40px;
}
```

Set Font Size With `Em`
To allow users to resize text , many developers use em instead of pixels.

`1em` is equal to the current font size. The default text size in browsers is 16px. So, the default size of 1em is 16px.

size can be calculated from pixels to em using this formula: pixels/16=em

```css
h1 {
  font-size: 2.5em; /* 40px/16=2.5em */
}

```

Use a Combination of Percent and Em
The solution that works in all browsers, is to set a default font-size in percent for `<body>` element:

```css
body {
  font-size: 100%;
}

h1 {
  font-size: 2.5em;
}

h2 {
  font-size: 1.875em;
}

p {
  font-size: 0.875em;
}
```

### Responsive Font Size
text size can be set with a vw unit, which means the "viewport width".

That way the text size will follow the size of the browser window:

```html
<h1 style="font-size:10vw">Hello World</h1>
```

### CSS Google Fonts

### Google Fonts
If you do not want to use any of the standard fonts in HTML, you can use Google Fonts.

Google Fonts are free to use, and have more than 1000 fonts to choose from.

How To Use Google Fonts
Just add a special style sheet link in the `<head>` section and then refer to the font in the CSS.

```html
<head>
<link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Sofia">
<style>
body {
  font-family: "Sofia", sans-serif;
}
</style>
</head>
```

### Use Multiple Google Fonts
To use multiple Google fonts, just separate the font names with a pipe character (|), like this:

```css
<head>
<link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Audiowide|Sofia|Trirong">
<style>
h1.a {font-family: "Audiowide", sans-serif;}
h1.b {font-family: "Sofia", sans-serif;}
h1.c {font-family: "Trirong", serif;}
</style>
</head>
```

### Styling Google Fonts
Of course you can style Google Fonts as you like, with CSS!


### Enabling Font Effects
Google has also enabled different font effects that you can use.

First add effect=effectname to the Google API, then add a special class name to the element that is going to use the special effect. The class name always starts with font-effect- and ends with the effectname.

```html
<head>
<link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Sofia&effect=fire">
<style>
body {
  font-family: "Sofia", sans-serif;
  font-size: 30px;
}
</style>
</head>
<body>

<h1 class="font-effect-fire">Sofia on Fire</h1>

</body>
```

## CSS Great Font Pairings
Font Pairing Rules
1. Complement
It is always safe to find font pairings that complement one another.

A great font combination should harmonize, without being too similar or too different.

2. Use Font Superfamilies
A font superfamily is a set of fonts designed to work well together. So, using different fonts within the same superfamily is safe.

For example, the Lucida superfamily contains the following fonts: Lucida Sans, Lucida Serif, Lucida Typewriter Sans, Lucida Typewriter Serif and Lucida Math.

3. Contrast is King
Two fonts that are too similar will often conflict. However, contrasts, done the right way, brings out the best in each font.

Example: Combining serif with sans serif is a well known combination.

A strong superfamily includes both serif and sans serif variations of the same font (e.g. Lucida and Lucida Sans).

4. Choose Only One Boss
One font should be the boss. This establishes a hierarchy for the fonts on your page. This can be achieved by varying the size, weight and color.

```css
body {
  background-color: black;
  font-family: Verdana, sans-serif;
  font-size: 16px;
  color: gray;
}

h1 {
  font-family: Georgia, serif;
  font-size: 60px;
  color: white;
}
```

## CSS Shorthand Font Property
To shorten code, it is also possible to specify all the individual font properties in one property.

font property is a shorthand property for:

```css
font-style
font-variant
font-weight
font-size/line-height
font-family
```
Note: font-size and font-family values are required. If one of the other values is missing, their default value are used.
```css
p.a {
  font: 20px Arial, sans-serif;
}

p.b {
  font: italic small-caps bold 12px/30px Georgia, serif;
}
```