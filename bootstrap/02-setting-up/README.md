## Lecture-02 Bootstrap Containers

Containers are used to pad the content inside of them, and there are two container classes available:

The .container class provides a responsive fixed width container
The .container-fluid class provides a full width container, spanning the entire width of the viewport

```css
.container
.container-fluid
```

Fixed Container
Use the .container class to create a responsive, fixed-width container.

Note that its width (max-width) will change on different screen sizes:

Extra small

```css
<576px	Small
≥576px	Medium
≥768px	Large
≥992px	Extra Large
≥1200px	XXL
≥1400px
max-width	100%	540px	720px	960px	1140px	1320px
```

Open the example below and resize the browser window to see that the container width will change at different breakpoints:

Example

```css
<div class="container">
  <h1>My First Bootstrap Page</h1>
  <p>This is some text.</p>
</div>
```

The XXL breakpoint (≥1400px) is new in Bootstrap 5, while the largest breakpoint in Bootstrap 4 is Extra large (≥1200px).

Fluid Container
Use the .container-fluid class to create a full width container, that will always span the entire width of the screen (width is always 100%):

Example

```html
<div class="container-fluid">
  <h1>My First Bootstrap Page</h1>
  <p>This is some text.</p>
</div>
```

Container Padding
By default, containers have left and right padding, with no top or bottom padding. Therefore, we often use spacing utilities, such as extra padding and margins to make them look even better. For example, .pt-5 means "add a large top padding":

Example
```<div class="container pt-5"></div>```
Container Border and Color
Other utilities, such as borders and colors, are also often used together with containers:

Example

```html
<div class="container p-5 my-5 border"></div>

<div class="container p-5 my-5 bg-dark text-white"></div>

<div class="container p-5 my-5 bg-primary text-white"></div>
```

You will learn much more about colors and border utilities in a later chapter.

Responsive Containers
You can also use the .container-sm|md|lg|xl classes to determine when the container should be responsive.

The max-width of the container will change on different screen sizes/viewports:

```css
Class	Extra small
<576px	Small
≥576px	Medium
≥768px	Large
≥992px	Extra large
≥1200px	XXL
≥1400px
.container-sm	100%	540px	720px	960px	1140px	1320px
.container-md	100%	100%	720px	960px	1140px	1320px
.container-lg	100%	100%	100%	960px	1140px	1320px
.container-xl	100%	100%	100%	100%	1140px	1320px
.container-xxl	100%	100%	100%	100%	100%	1320px
```

Example

```html
<div class="container-sm">.container-sm</div>
<div class="container-md">.container-md</div>
<div class="container-lg">.container-lg</div>
<div class="container-xl">.container-xl</div>
<div class="container-xxl">.container-xxl</div>
```