# Lecture 14: CSS Media Queries

Welcome to Lecture 14! In this session, we'll explore the concept of media queries in CSS. Media queries are vital for building responsive web designs that adapt to different devices and screen sizes.

![CSS Media Quries](/Assets/Lecture%20-14%20CSS%20Media%20Quries.png)

## 1. Introduction to Media Queries

Media queries allow you to apply different styles depending on the characteristics of the device rendering the content, such as the display type, width, height, orientation, and even resolution.

### Basic Syntax

```css
@media media-type and (media-feature) {
  /* CSS rules go here */
}
```

## 2. Media Types

Media types describe the general category of a device. While not often used today,

```css
@media (max-width: 600px) {
  body {
    background-color: lightblue;
  }
}
```

## 3. Common Media Features

Media features identify specific characteristics of the user agent, output device, or environment.

Width and Height
min-width
max-width
min-height
max-height
Example:

```css
@media (min-width: 768px) and (max-width: 1024px) {
  /* CSS rules for tablets */
}

```

### Conclusion

Media queries are the cornerstone of responsive web design, allowing designers to create user-friendly layouts that adapt to different devices and user preferences. Understanding and mastering media queries is essential for any modern web developer.

Keep experimenting, and see you in the next lecture!
