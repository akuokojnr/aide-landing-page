import * as Constants from "common/constants";

import { css } from "@emotion/react";

// NOTE(daniel): minimal css reset
/* prettier-ignore */
const GlobalStyles = () => css`
  @font-face {
    font-family: Inter;
    src: url("/fonts/Inter.ttf");
    font-style: normal;
  }
  
  html, body, div, span, applet, object, iframe,
  h1, h2, h3, h4, h5, h6, p, blockquote, pre,
  a, abbr, acronym, address, big, cite, code,
  del, dfn, em, img, ins, kbd, q, s, samp,
  small, strike, strong, sub, sup, tt, var,
  b, u, i, center,
  dl, dt, dd, ol, ul, li,
  fieldset, form, label, legend,
  table, caption, tbody, tfoot, thead, tr, th, td,
  article, aside, canvas, details, embed,
  figure, figcaption, footer, header, hgroup,
  menu, nav, output, ruby, section, summary,
  time, mark, audio, video {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
    border: 0;
    vertical-align: baseline;
  }
  article, aside, details, figcaption, figure,
  footer, header, hgroup, menu, nav, section, img {
    display: block;
  }
  html, body {
    background: ${Constants.colors.white};
    color: ${Constants.colors.black};
    font-size: 10px;
    font-family: Inter, -apple-system, BlinkMacSystemFont, helvetica neue, helvetica, sans-serif;
  }
  *, *:before, *:after {
    box-sizing: inherit;
  }
`;

export default GlobalStyles;
