import { createGlobalStyle } from 'styled-components/macro';

const GlobalStyle = createGlobalStyle`
  @import url('https://fonts.googleapis.com/css?family=Raleway&display=swap');
/* Button Normalization */
/**
  * 1. Change the font styles in all browsers.
  * 2. Remove the margin in Firefox and Safari.
  */

  button,
  input,
  optgroup,
  select,
  textarea {
    font-family: inherit; /* 1 */
    font-size: inherit; /* 1 */
    line-height: 1.15; /* 1 */
    margin: 0; /* 2 */
    cursor: pointer;
  }

  textarea {
    cursor: text;
  }

/**
 * Show the overflow in IE.
 * 1. Show the overflow in Edge.
 */

  button,
  input {
    /* 1 */
    overflow: visible;
  }

/**
 * Remove the inheritance of text transform in Edge, Firefox, and IE.
 * 1. Remove the inheritance of text transform in Firefox.
 */

  button,
  select {
    /* 1 */
    text-transform: none;
  }

/**
 * Correct the inability to style clickable types in iOS and Safari.
 */

  button,
  [type='button'],
  [type='reset'],
  [type='submit'] {
    appearance: button;
  }

/**
 * Make everything box-sizing: border-box
 */
  * {
    box-sizing: border-box;
  }
/**
 * Make the html, body and root fill the screen
 */
  html, body, #root {
    height: 100%;
    margin: 0;
    font-family: 'Raleway', sans-serif;
  }
`;

export default GlobalStyle;
