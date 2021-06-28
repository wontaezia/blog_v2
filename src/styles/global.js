import { createGlobalStyle } from 'styled-components';
import { normalize } from 'styled-normalize';

export const GlobalStyle = createGlobalStyle`
  ${normalize}

  * {
    text-decoration: none;
    cursor: none;
    box-sizing: border-box;
    user-select: none;
  }

  html {
    box-sizing: border-box;
    -webkit-font-smoothing: antialiased;
    font-size: 16px;
  }

  body {
    font-family: 'Baloo Da 2', 'Noto Sans KR', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
    background-color: ${(props) => props.theme.background};
    color: ${(props) => props.theme.text};
    overscroll-behavior: none;
    overflow-x: hidden;
    -ms-overflow-style: none; 
    scrollbar-width: none; 
  }
  body::-webkit-scrollbar {
    display: none; 
  }

  ol,ul,li {
    list-style: none;
  }

  body.no-scroll {
    overflow: hidden;
  }
`;
