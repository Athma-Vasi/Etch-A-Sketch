# The Odin Project - Etch-A-Sketch

This project is designed to teach DOM manipulation by building a browser version of a cross between a sketchpad and an Etch-A-Sketch

## What did I learn?

**TL;DR**

- Grid basics
- FormData class and typing `events` and `this`
- nested `for` loops to generate a 2D grid
- using JS and CSS variables to dynamically modify attributes
- using template literals to interpolate random HSL generator functions
- using keyframes and parsing solutions from stack overflow
- button styling and pseudo-classes

### Grid Basics

I learned how to use grid-template areas to set up a basic 2D template. Using template-cols and template-rows, it was very easy to set up width of each container precisely with respect to a hard-coded parent width. I realized that grid offers more control for 2D layouts and flexbox is for 1D layouts.

### FormData class and typing `events` and `this`

I decided to use a FormData class to grab the color and grid values on submit. This necessitated a deeper understanding of events (to use the `ev.preventDefault()` method) and their corresponding types. TSC would not allow me to use the methods unless I typed the events correctly.

Since the FormData class requires the HTML form element to be passed in, I had to research what `this` is within the scope of the `.addEventListener` callback function. This led me towards a deeper understanding of various HTMLElement types and the correct ones to use. I also gained a basic understanding of scopes and `this`.

### Nested `for` loops to generate a 2D grid

Generating the 2D grid required me to understand nested `for` loops, and how to create a HTMLDivElement inside the loop. I understood how the value of the counter behaves when using `var` or `let`. I realized that each nesting adds another dimension, with three nestings corresponding to a 3D array.

### Styling properties using JS and CSS variables

I learned how to use the style property to change the visual presentation of the grid dynamically using JS. This meant that I also had to figure out CSS variables and how to use them in conjunction with JS to set the grid and brush colors, and the grid amount.

### Template literals and interpolating functions

Template literals are amazing - they allowed me to interpolate an entire function inside to invoke and return a randomly generated HSL string that I can use CSS variables to modify color attributes.

Also, HSL is super versatile and I cant see myself using hex codes or RGB moving forwad.

### How I learned to stop worrying and copy stack overflow code

The hardest part was figuring out how to get the generated grids to change color on mouseover. After much frustration, I stumbled upon a stack overflow answer that solved an unrelated problem. After some modifications, the solution worked! It used keyframes and various animation properties to change the grid colours. It wasn't until much later in my learning journey that I understood these advanced CSS concepts.

It was my first exposure to generosity of strangers at stack overflow and certainly not my last.

### Button styling and pseudo-classes

Since my page looked fairly plain, I focused on jazzing up the buttons. This led me down the rabbit hole of pseudo elements and classes, and box-shadows and transitions.

I learned how to use box-shadows to create the illusion of depth. Together with pseudo-classes and inset attribute, I was able to simulate button being pressed.
