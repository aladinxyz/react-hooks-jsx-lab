# JSX Lab

## Learning Goals

- Use JSX syntax to create DOM elements

## Instructions

In this lab, we will be rendering a few children components in our top-most
component: `App`. The components are set up, but we need to update the JSX they
return. We'll be writing all our code in the `NavBar.js`, `Home.js`, and
`About.js` files. These files are all located in the `src/components` directory.

Begin with `npm install`. Examine what is rendering in the browser with
`npm start`.

Our goal will be to make our page look like this:

![demo app](https://curriculum-content.s3.amazonaws.com/phase-2/phase-2-hooks-jsx-lab/demo.png)

Once your app matches the demo image, run `learn test` or `npm test` to check
your work.

## Deliverables

### NavBar

The `<NavBar>` component should return the following JSX elements:

- a `<nav>` element
- inside the nav element, there should be two child elements:
  - an `<a>` element, with the `href` attribute set to `#home`, and the content
    text set to "Home"
  - an `<a>` element, with the `href` attribute set to `#about`, and the content
    text set to "About"

### Home

Inside the `<Home>` component, there are a couple of variables defined that will
allow you to insert your name and city into the portfolio page.

The `<Home>` component should return the following JSX elements:

- a `<div>` element with an id of "home"
- inside the div element, there should be one child element:
  - an `<h1>` element, with the `style` attribute set to a color of "firebrick",
    and the content of "Your Name is a Web Developer from Your City"
  - use JSX expression syntax to use the imported `name` and `city` variables
    inside your JSX elements

**Hint**: consult the [React documentation the `style` property][style] to see
how to set the color correctly.

### About

The `<About>` component should return the following JSX elements:

- a `<div>` element with an id of "about"
- inside the div element, there should be three child elements:
  - an `<h2>` element with the content of "About Me"
  - a `<p>` element with any content of your choosing
  - an `<img>` element with the `src` attribute set to the imported `image`
    variable, and the `alt` attribute set to "I made this"

## Resources

- [JSX](https://reactjs.org/docs/introducing-jsx.html)
- [Inline Style in JSX][style]

[style]: https://reactjs.org/docs/dom-elements.html#style
