import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`
  * {
    box-sizing: border-box;
  }
  body {
    margin: 0;
    padding: 0;
    background-color: ${({ theme }) => theme.colors.background};
    min-height: 100vh;
    font-family: 'SF Pro Display', sans-serif;
    font-size: 17px;
    color: ${({ theme }) => theme.colors.textPrimary};
  }
`;

export default GlobalStyles;
