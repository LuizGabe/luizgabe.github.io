import { createGlobalStyle } from 'styled-components';
import colors from './colorVariable';
 
const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    padding: 0;
    font-family: Open-Sans, Helvetica, Sans-Serif;
    background-color: ${colors.body};
  }
`;
 
export default GlobalStyle;