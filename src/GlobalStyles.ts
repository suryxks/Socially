import {createGlobalStyle} from 'styled-components'

export const GlobalStyles=createGlobalStyle`
:root{
    --dark-bg:#1C1C1C;
    --cta:#7f5af0;
     --grey-border:#282828;
    --white:#EDEDED;
    --btn-hover:#8865f1;
    --card-bg:#232323;
    --gradientone:#696eff;
    --gridienttwo:#f8acff
}
*, *::before, *::after {
  box-sizing: border-box;
}
/*
  2. Remove default margin
*/
* {
  margin: 0;
  padding: 0;
}
/*
  3. Allow percentage-based heights in the application
*/
html, body {
  height: 100%;
}
/*
  Typographic tweaks!
  4. Add accessible line-height
  5. Improve text rendering
*/
body {
  line-height: 1.5;
  -webkit-font-smoothing: antialiased;
}
/*
  6. Improve media defaults
*/
img, picture, video, canvas, svg {
  display: block;
  max-width: 100%;
}
/*
  7. Remove built-in form typography styles
*/
input, button, textarea, select {
  font: inherit;
}
/*
  8. Avoid text overflows
*/
p, h1, h2, h3, h4, h5, h6 {
  overflow-wrap: break-word;
}
::-webkit-scrollbar {
  width: 5px;
  color: var(--grey-border);
  }
::-webkit-scrollbar-thumb {
  background-color: var(--grey-txt);
  border-radius: 1000px;
    background-color: var(--cta);
    border: 2px solid var(--cta);
}
@media (prefers-reduced-motion: no-preference) {
  html {
    scroll-behavior: smooth;
  }
}
`