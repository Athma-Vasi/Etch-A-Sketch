# The Odin Project - Etch-A-Sketch

This project is designed to teach DOM manipulation by building a browser version of a cross between a sketchpad and an Etch-A-Sketch

## What did I learn?

**TL;DR**

- Grid basics
- FormData class and typing `events` and `this`
- nested `for` loops to generate a 2D grid
- using JS to set style properties
- using css variables to dynamically modify attributes
- using template literals to interpolate random HSL generator functions
- using keyframes and parsing solutions from stack overflow

### Grid Basics

I learned how to use grid-template areas to set up a basic 2D template. Using template-cols and template-rows, it was very easy to set up width of each container precisely with respect to a hard-coded parent width. I realized that grid offers more control for 2D layouts and flexbox is for 1D layouts.

### FormData class and the value of `this`

I decided to use a FormData class to grab the color and grid values on submit. This necessitated a deeper understanding of events (to use the `ev.preventDefault()`) and their corresponding types. VSCode would not show me the methods unless I typed the events correctly.

Since the FormData class requires the HTML form element to be passed in, I had to research what `this` is within the scope of the `.addEventListener` callback function. This led me towards a deeper understanding of various HTMLElement types and the correct ones to use.

### Nested `for` loops to generate a 2D grid
