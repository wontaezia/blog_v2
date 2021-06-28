import { createGlobalStyle } from 'styled-components';
import { normalize } from 'styled-normalize';

export const GlobalStyle = createGlobalStyle`
  @font-face {
      font-family: 'Poppins';
      font-style: normal;
      font-weight: 400;
      src: url('/fonts/Poppins-Regular.woff') format('woff');
      unicode-range: U+0041-005A, U+0061-007A, U+0030-0039;
  }
  @font-face {
      font-family: 'Poppins';
      font-style: normal;
      font-weight: 500;
      src: url('/fonts/Poppins-Medium.woff') format('woff');
      unicode-range: U+0041-005A, U+0061-007A, U+0030-0039;
  }
  @font-face {
      font-family: 'Poppins';
      font-style: normal;
      font-weight: 700;
      src: url('/fonts/Poppins-Bold.woff') format('woff');
      unicode-range: U+0041-005A, U+0061-007A, U+0030-0039;
  }
  @font-face {
      font-family: 'Noto Sans KR';
      font-style: normal;
      font-weight: 300;
      src: url('/fonts/NotoSansKR-Light.woff') format('woff');
  }
  @font-face {
      font-family: 'Noto Sans KR';
      font-style: normal;
      font-weight: 400;
      src: url('/fonts/NotoSansKR-Regular.woff') format('woff');
  }
  @font-face {
      font-family: 'Noto Sans KR';
      font-style: normal;
      font-weight: 700;
      src: url('/fonts/NotoSansKR-Bold.woff') format('woff');
  }
  @font-face {
      font-family: 'JetBrains Mono';
      font-style: normal;
      font-weight: 400;
      src: url('/fonts/JetBrainsMono-Regular.woff') format('woff');
  }

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
    font-family: 'Poppins', 'Noto Sans KR', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
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
