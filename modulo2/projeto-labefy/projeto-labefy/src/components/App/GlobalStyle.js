import { createGlobalStyle } from 'styled-components';
import RobotoFont from "./Fonts";

const GlobalStyle = createGlobalStyle`
  ${RobotoFont}
  body {
      margin: 0;
      padding: 0;
    font: 1rem Roboto, Verdana, sans-serif;
  }
`;

export default GlobalStyle;


