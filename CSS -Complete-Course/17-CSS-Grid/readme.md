# Lecture - 17 CSS Grid

[![CSS Grid Container](/Assets/Lecture%20-17%20CSS%20Grid%20-%20Learn%20Complete%20CSS%20Grid%20in%20One%20Video.png)](https://www.youtube.com/@futureprogramming){:target="_blank"}

## Grid Layout

CSS Grid Layout (aka “Grid” or “CSS Grid”), is a `two-dimensional` grid-based layout system that, `compared` to any web `layout system` of the `past`, completely changes the way we design user interfaces. CSS has always been used to layout our web pages, but it’s never done a very good job of it.

First, we used `tables, then floats, positioning and inline-block`, but all of `these methods` were essentially `hacks` and left out a lot of important functionality (vertical centering, for instance).

`Flexbox` is also a very `great layout tool`, `but` its `one-directional flow` has different use cases — and they actually work together quite well!

`Grid` is the very `first CSS module created specifically` to `solve` the `layout problems` we’ve all been hacking our way around for as long as we’ve been making websites.

## Important CSS Grid terminology

Before diving into the concepts of Grid `it’s important to understand` the `terminology`. Since the terms involved here are all kinda conceptually similar, it’s easy to confuse them with one another if you don’t first memorize their meanings defined by the Grid specification. But don’t worry, there aren’t many of them.

## Grid Container

html `element` on which `display: grid` is applied. It’s the direct parent of all the grid items. In this example container is the grid container.

```html
<div class="container">
  <div class="item item-1"> </div>
  <div class="item item-2"> </div>
  <div class="item item-3"> </div>
</div>
```

## Grid Line

`dividing lines` that make up the structure of the grid. They can be either `vertical` (“`column grid lines`”) or `horizontal` (“`row grid lines`”) and reside on either side of a row or column. Here the yellow line is an example of a column grid line.

The lines between `columns` are called `column lines`.

The lines between `rows` are called `row lines`.

![Grid Lines](https://www.w3schools.com/css/grid_lines.png)

Place a grid item at column line 1, and let it end on column line 3:

```css
.item1 {
  grid-column-start: 1;
  grid-column-end: 3;
}
```

## Grid Columns

The `vertical lines` of `grid items` are called `columns`.

![Gird Colmuns](https://www.w3schools.com/css/grid_columns.png)

### Grid Rows

The `horizontal lines of grid items` are called `rows`.

![Grid Rows](https://www.w3schools.com/css/grid_rows.png)

## Grid Track

`space between two adjacent grid lines`. **You can think of** them as the `columns or rows of the grid`. Here’s the grid track between the second and third-row grid lines.

## Grid Area

total space surrounded by four `grid lines` like this `||`. A grid area may be composed of any number of grid cells. Here’s the grid area between row grid lines 1 and 3, and column grid lines 1 and 3.

## Grid Container Properties

Here are some of the CSS Grid Container properties:
`display`
`grid-template-columns`
`grid-template-rows`
`grid-template-areas`
`grid-template`
`grid-column-gap`
`grid-row-gap`
`grid-gap`
`justify-items`
`align-items`
`place-items`
`justify-content`
`align-content`
`place-content`
`grid-auto-columns`
`grid-auto-rows`
`grid-auto-flow`

### Display

Defines the element as a `grid container` and establishes a new grid formatting context for its contents.

Values:

`grid` – generates a block-level grid
`inline-grid` – generates an inline-level grid

```css
.grid-container {
  display: grid;
}
```

All direct children of the grid container automatically become grid items.

### `grid-template-columns`

grid-template-columns property `defines the number of columns` in your grid layout, and it can define the width of each column.

value is a space-separated-list, where each value defines the width of the respective column.

If you want your grid layout to contain 4 columns, specify the width of the 4 columns, or "auto" if all columns should have the same width.

Make a grid with 4 columns:

```css
.grid-container {
  display: grid;
  grid-template-columns: auto auto auto auto;
}
```

Note: If you have more than 4 items in a 4 columns grid, the grid will automatically add a new row to put the items in.

grid-template-columns property can also be used to specify the size (width) of the columns.

```css
Example
Set a size for the 4 columns:

.grid-container {
  display: grid;
  grid-template-columns: 80px 200px auto 40px;
}
```

### `grid-template-rows`

grid-template-rows property `defines the height of each row`. value is a space-separated-list, where each value defines the height of the respective row:

```css
Example
.grid-container {
  display: grid;
  grid-template-rows: 80px 200px;
}
```

### `grid template areas`

grid-template-areas property `specifies named grid areas`, establishing the `cells` in the `grid and assigning them names`.

Defines a grid template by referencing the names of the grid areas which are specified with the grid-area property. Repeating the name of a grid area causes the content to span those cells. A period signifies an empty cell. The syntax itself provides a visualization of the structure of the grid.

Values:

`<grid-area-name>` – the name of a grid area specified with grid-area
`.` – a period signifies an empty grid cell
`none` – no grid areas are defined

```css


.container {
  display: grid;
  grid-template-columns: 50px 50px 50px 50px;
  grid-template-rows: auto;
  grid-template-areas: 
    "header header header header"
    "main main . sidebar"
    "footer footer footer footer";
}
.item-b {
  grid-area: main;
}
.item-c {
  grid-area: sidebar;
}
.item-d {
  grid-area: footer;
}
```

### `grid template`

A shorthand for setting `grid-template-rows`, `grid-template-columns`, and `grid-template-areas` in a single declaration.

Values:

`none` – sets all three properties to their initial values
`<grid-template-rows>` / `<grid-template-columns>` – sets grid-template-columns and `grid-template-rows` to the specified values, respectively, and sets `grid-template-areas` to none

```css
/* grid-template-rows / grid-template-columns values */
.grid-container
{
  grid-template: 100px 1fr / 50px 1fr;
grid-template: auto 1fr / auto 1fr auto;
grid-template: [linename] 100px / [columnname1] 30% [columnname2] 70%;
grid-template: fit-content(100px) / fit-content(40%);
}
/* grid-template-areas grid-template-rows / grid-template-column values */
.grid-container
{
  grid-template:
  "a a a"
  "b b b";
grid-template:
  "a a a" 20%
  "b b b" auto;
grid-template:
  [header-top] "a a a" [header-bottom]
  [main-top] "b b b" 1fr [main-bottom]
  / auto 1fr auto;
}
```

### column-gap, row-gap, grid-column-gap, grid-row-gap

Specifies the size of the grid lines. You can think of it like setting the width of the gutters between the columns/rows.

Values:

`<line-size>` – a length value

```css
.container {
  /* standard */
  column-gap: <line-size>;
  row-gap: <line-size>;

  /* old */
  grid-column-gap: <line-size>;
  grid-row-gap: <line-size>;
}
  .container {
  grid-template-columns: 100px 50px 100px;
  grid-template-rows: 80px auto 80px; 
  column-gap: 10px;
  row-gap: 15px;
}

```

### gap , grid-gap

shorthand for `row-gap` and `column-gap`

Values:

`<grid-row-gap>` `<grid-column-gap>` – length values

```css
.container {
  /* standard */
  gap: <grid-row-gap> <grid-column-gap>;

  /* old */
  grid-gap: <grid-row-gap> <grid-column-gap>;
}
Example:

.container {
  grid-template-columns: 100px 50px 100px;
  grid-template-rows: 80px auto 80px; 
  gap: 15px 10px;
}
```

### `Justify Items`

`Aligns grid items` along the `inline (row) axis` (as opposed to align-items which aligns along the block (column) axis). This value applies to all grid items inside the container.

Values:

`start` – aligns items to be flush with the start edge of their cell
`end` – aligns items to be flush with the end edge of their cell
`center` – aligns items in the center of their cell
`stretch` – fills the whole width of the cell (this is the default)

```css
#container {
  display: grid;
  justify-items: end;
}
```

### align items

`Aligns grid items` along the `block (column) axis` (as opposed to justify-items which aligns along the inline (row) axis). This value applies to all grid items inside the container.

Values:

`stretch` – fills the whole height of the cell (this is the default)
`start` – aligns items to be flush with the start edge of their cell
`end` – aligns items to be flush with the end edge of their cell
`center` – aligns items in the center of their cell
`baseline` – align items along text baseline. There are modifiers to baseline — first baseline and last baseline which will use the baseline from the first or last line in the case of multi-line text.

```css
#container {
  display: grid;
  position: relative;
  align-items: end;
}
```

### `place-items`

place-items `sets` both the `align-items` and `justify-items` properties in a single declaration.

Values:

`<align-items>` / `<justify-items>` –  first value sets align-items, the second value justify-items. If the second value is omitted, the first value is assigned to both properties.

```css
#container {
  place-items: start center;
}
```

### `justify-content`

Sometimes the total size of your grid might be less than the size of its grid container. This could happen if all of your grid items are sized with non-flexible units like px. In this case you can set the alignment of the grid within the grid container. This `property aligns the grid along the inline (row) axis` (as opposed to align-content which aligns the grid along the block (column) axis).

Values:

`start` – aligns the grid to be flush with the start edge of the grid container
`end` – aligns the grid to be flush with the end edge of the grid container
`center` – aligns the grid in the center of the grid container
`stretch` – resizes the grid items to allow the grid to fill the full width of the grid container
`space-around` – places an even amount of space between each grid item, with half-sized spaces on the far ends
`space-between` – places an even amount of space between each grid item, with no space at the far ends
`space-evenly` – places an even amount of space between each grid item, including the far ends

```css
.container {
  justify-content: start | end | center | stretch | space-around | space-between | space-evenly;    
}
Examples:

.container {
  justify-content: start;
}
```

### `align-content`

align-content property is used to `vertically align the whole grid` inside the container.

Sometimes the total size of your grid might be less than the size of its grid container. This could happen if all of your grid items are sized with non-flexible units like px. In this case you can set the alignment of the grid within the grid container. This property aligns the grid along the **block (column) axis** (as opposed to justify-content which aligns the grid along the inline (row) axis).

Values:

`start` – aligns the grid to be flush with the start edge of the grid container
`end` – aligns the grid to be flush with the end edge of the grid container
`center` – aligns the grid in the center of the grid container
`stretch` – resizes the grid items to allow the grid to fill the full height of the grid container
`space-around` – places an even amount of space between each grid item, with half-sized spaces on the far ends
`space-between` – places an even amount of space between each grid item, with no space at the far ends
`space-evenly` – places an even amount of space between each grid item, including the far ends

```css
.container {
  align-content: start | end | center | stretch | space-around | space-between | space-evenly;    
}
Examples:

.container {
  align-content: start;    
}
```

### Place content

place-content property is used in flexbox and grid layouts, and is a `shorthand` property for the following properties:

`align-content`
`justify-content`
If the place-content property has two

Values:

`<align-content>` / `<justify-content>` – The first value sets align-content, the second value justify-content. If the second value is omitted, the first value is assigned to both properties.

```css
#container
{place-content: end space-between;
place-content: space-around start;
place-content: start space-evenly;
place-content: end center;
place-content: end;
}
```

### grid-auto-columns & grid-auto-rows

`Specifies the size` of any auto-generated grid tracks (aka implicit grid tracks). `Implicit tracks get created` when there are `more grid items` than cells in the grid or when a grid item is placed outside of the explicit grid.

Values:

`<track-size>` – can be a length, a percentage, or a fraction of the free space in the grid (using the fr unit)

```css
.container {
  grid-auto-columns: <track-size> ...;
  grid-auto-rows: <track-size> ...;
}

.container {
  grid-template-columns: 60px 60px;
  grid-template-rows: 90px 90px;
}
```

### `grid-auto-flow`

If you have grid items that you don’t explicitly place on the grid, the auto-placement algorithm kicks in to automatically place the items. This property controls how the auto-placement algorithm works.

Values:

`row` – tells the auto-placement algorithm to fill in each row in turn, adding new rows as necessary (default)
`column` – tells the auto-placement algorithm to fill in each column in turn, adding new columns as necessary
`dense` – tells the auto-placement algorithm to attempt to fill in holes earlier in the grid if smaller items come up later

```css
.container {
  grid-auto-flow: row | column | row dense | column dense;
}
```

Note that dense only changes the visual order of your items and might cause them to appear out of order, which is bad for accessibility.

You define a grid with five columns and two rows, and set grid-auto-flow to row (which is also the default):

```css
.container {
  display: grid;
  grid-template-columns: 60px 60px 60px 60px 60px;
  grid-template-rows: 30px 30px;
  grid-auto-flow: row;
}

When placing the items on the grid, you only specify spots for two of them:

.item-a {
  grid-column: 1;
  grid-row: 1 / 3;
}
.item-e {
  grid-column: 5;
  grid-row: 1 / 3;
}
```

### grid

`shorthand` `for` setting `all` of the following properties in a single declaration: `grid-template-rows`, `grid-template-columns`, `grid-template-areas`, `grid-auto-rows`, `grid-auto-columns`, and `grid-auto-flow` (Note: You can only specify the explicit or the implicit grid properties in a single grid declaration).

Values:

`none` – sets all sub-properties to their initial values.
`<grid-template>` – works the same as the grid-template shorthand.
`<grid-template-rows>` / [ auto-flow && dense? ] `<grid-auto-columns>`? – sets `grid-template-rows` to the specified value.

If the auto-flow keyword is to the right of the slash, it sets grid-auto-flow to column. If the dense keyword is specified additionally, the auto-placement algorithm uses a “dense” packing algorithm. If grid-auto-columns is omitted, it is set to auto.

[ auto-flow && dense? ] `<grid-auto-rows>`? / `<grid-template-columns>` – sets grid-template-columns to the specified value. If the auto-flow keyword is to the left of the slash, it sets grid-auto-flow to row. If the dense keyword is specified additionally, the auto-placement algorithm uses a “dense” packing algorithm. If grid-auto-rows is omitted, it is set to auto.
Examples:

The following two code blocks are equivalent:

```css
.container {
  grid: 100px 300px / 3fr 1fr;
}

.container {
  grid-template-rows: 100px 300px;
  grid-template-columns: 3fr 1fr;
}
The following two code blocks are equivalent:

.container {
  grid: auto-flow / 200px 1fr;
}

.container {
  grid-auto-flow: row;
  grid-template-columns: 200px 1fr;
}
The following two code blocks are equivalent:

.container {
  grid: auto-flow dense 100px / 1fr 2fr;
}

.container {
  grid-auto-flow: row dense;
  grid-auto-rows: 100px;
  grid-template-columns: 1fr 2fr;
}
And the following two code blocks are equivalent:

.container {
  grid: 100px 300px / auto-flow 200px;
}

.container {
  grid-template-rows: 100px 300px;
  grid-auto-flow: column;
  grid-auto-columns: 200px;
}
```

It also accepts a more complex but quite handy syntax for setting everything at once. You specify grid-template-areas, grid-template-rows and grid-template-columns, and all the other sub-properties are set to their initial values. What you’re doing is specifying the line names and track sizes inline with their respective grid areas. This is easiest to describe with an example:

```css
.container {
  grid: [row1-start] "header header header" 1fr [row1-end]
        [row2-start] "footer footer footer" 25px [row2-end]
        / auto 50px auto;
}
That’s equivalent to this:

.container {
  grid-template-areas: 
    "header header header"
    "footer footer footer";
  grid-template-rows: [row1-start] 1fr [row1-end row2-start] 25px [row2-end];
  grid-template-columns: auto 50px auto;    
}
```

## Special Units & Functions

### fr units

You’ll likely end up using a lot of fractional units in CSS Grid, like 1fr. They essentially mean “portion of the remaining space”. So a declaration like:

```css
grid-template-columns: 1fr 3fr;
```

Means, loosely, 25% 75%. Except that those percentage values are much more firm than fractional units are. For example, if you added padding to those percentage-based columns, now you’ve broken 100% width (assuming a content-box box model). Fractional units also much more friendly in combination with other units, as you can imagine:

```css
grid-template-columns: 50px min-content 1fr;
```

### Sizing Keywords

When sizing rows and columns, you can use all the lengths you are used to, like px, rem, %, etc, but you also have keywords:

`min-content`: the minimum size of the content. Imagine a line of text like “E pluribus unum”, the min-content is likely the width of the word “pluribus”.

`max-content`: the maximum size of the content. Imagine the sentence above, the max-content is the length of the whole sentence.

`auto`: this keyword is a lot like fr units, except that they “lose” the fight in sizing against fr units when allocating the remaining space.
Fractional units: see above

### Sizing Functions

`fit-content()` function uses the space available, but never less than min-content and never more than max-content.

`minmax() function` does exactly what it seems like: it sets a minimum and maximum value for what the length is able to be. This is useful for in combination with relative units. Like you may want a column to be only able to shrink so far. This is extremely useful and probably what you want:

```css
grid-template-columns: minmax(100px, 1fr) 3fr;
```

## repeat() Function and Keywords

repeat() function can save some typing:

```css
grid-template-columns:
  1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr;

/* easier: */
grid-template-columns:
  repeat(8, 1fr);

/* especially when: */
grid-template-columns:
  repeat(8, minmax(10px, 1fr));
```

But repeat() can get extra fancy when combined with keywords:

`auto-fill`: Fit as many possible columns as possible on a row, even if they are empty.

`auto-fit`: Fit whatever columns there are into the space. Prefer expanding columns to fill space rather than empty columns.
This bears the most famous snippet in all of CSS Grid and one of the all-time great

```css
grid-template-columns: 
  repeat(auto-fit, minmax(250px, 1fr));
```

## grid items Properties

grid container contains grid items.

By default, a container has one grid item for each column, in each row, but you can style the grid items so that they will span multiple columns and/or rows.

`grid-column-start`
`grid-column-end`
`grid-row-start`
`grid-row-end`
`grid-column`
`grid-row`
`grid-area`
`justify-self`
`align-self`
`place-self`

```css
grid-column-start
grid-column-end
grid-row-start
grid-row-end
```

Determines a grid item’s location within the grid by referring to specific grid lines. grid-column-start/grid-row-start is the line where the item begins, and grid-column-end/grid-row-end is the line where the item ends.

`<line>` – can be a number to refer to a numbered grid line, or a name to refer to a named grid line
span `<number>` – the item will span across the provided number of grid tracks
span `<name>` – the item will span across until it hits the next line with the provided name
`auto` – indicates auto-placement, an automatic span, or a default span of one

```css
.item-a {
  grid-column-start: 2;
  grid-column-end: five;
  grid-row-start: row1-start;
  grid-row-end: 3;
}
```

### grid-column & grid-row

Shorthand for grid-column-start + grid-column-end, and grid-row-start + grid-row-end, respectively.

Values:

`<start-line>` / `<end-line>` – each one accepts all the same values as the longhand version, including span

```css
.item-c {
  grid-column: 3 / span 2;
  grid-row: third-line / 4;
}
```

### grid-column

grid-column property defines on which column(s) to place an item.

You define where the item will start, and where the item will end.

Note: The `grid-column` property is a `shorthand` property for the `grid-column-start` and the `grid-column-end` properties.

To place an item, you can refer to line numbers, or use the keyword "span" to define how many columns the item will span.

```css
Example
Make "item1" start on column 1 and end before column 5:

.item1 {
  grid-column: 1 / 5;
}

Example
Make "item1" start on column 1 and span 3 columns:

.item1 {
  grid-column: 1 / span 3;
}

Example
Make "item2" start on column 2 and span 3 columns:

.item2 {
  grid-column: 2 / span 3;
}
```

### grid-row

grid-row property defines on which row to place an item.

You define where the item will start, and where the item will end.

Note: The `grid-row property` is a `shorthand` property for the `grid-row-start` and the `grid-row-end` properties.

To place an item, you can refer to `line numbers`, or use the keyword "`span`" to define `how many rows the item will span`:

```css
Example
Make "item1" start on row-line 1 and end on row-line 4:

.item1 {
  grid-row: 1 / 4;
}

Example
Make "item1" start on row 1 and span 2 rows:

.item1 {
  grid-row: 1 / span 2;
}
```

### grid-area

Gives an item a name so that it can be referenced by a template created with the grid-template-areas property. Alternatively, this property can be used as an even shorter shorthand for grid-row-start + grid-column-start + grid-row-end + grid-column-end.

Values:

`<name>` – a name of your choosing
`<row-start> `/ `<column-start>` / `<row-end>` / `<column-end>` – can be numbers or named lines

### grid-area

grid-area property can be used as a `shorthand` property for the `grid-row-start`, `grid-column-start`, `grid-row-end` and the `grid-column-end` properties.

```css
Example
Make "item8" start on row-line 1 and column-line 2, and end on row-line 5 and column line 6:


.item8 {
  grid-area: 1 / 2 / 5 / 6;
}

Example
Make "item8" start on row-line 2 and column-line 1, and span 2 rows and 3 columns:

.item8 {
  grid-area: 2 / 1 / span 2 / span 3;
}

```

### justify-self

Aligns a grid item inside a cell along the inline (row) axis (as opposed to align-self which aligns along the block (column) axis). This value applies to a grid item inside a single cell.

Values:

`start` – aligns the grid item to be flush with the start edge of the cell
`end` – aligns the grid item to be flush with the end edge of the cell
`center` – aligns the grid item in the center of the cell
`stretch` – fills the whole width of the cell (this is the default)

```css
.item-a {
  justify-self: start;
}
```

To set alignment for all the items in a grid, this behavior can also be set on the grid container via the justify-items property.

### align-self

Aligns a grid item inside a cell along the block (column) axis (as opposed to justify-self which aligns along the inline (row) axis). This value applies to the content inside a single grid item.

Values:

start – aligns the grid item to be flush with the start edge of the cell
end – aligns the grid item to be flush with the end edge of the cell
center – aligns the grid item in the center of the cell
stretch – fills the whole height of the cell (this is the default)

```css
.item-a {
  align-self: start;
}
```

### place-self

place-self sets both the align-self and justify-self properties in a single declaration.

Values:

auto – The “default” alignment for the layout mode.
<align-self> / <justify-self> – The first value sets align-self, the second value justify-self. If the second value is omitted, the first value is assigned to both properties.

```css
.item-a {
  place-self: center;
}
```
