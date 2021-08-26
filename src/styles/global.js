import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
  // IBM Plex Sans
  @font-face {
    font-family: 'IBM Plex Sans';
    font-style: normal;
    font-weight: 300;
    src: local(''),
        url('/fonts/ibm-plex-sans-v8-latin-300.woff2') format('woff2'), 
        url('/fonts/ibm-plex-sans-v8-latin-300.woff') format('woff'), 
        url('/fonts/ibm-plex-sans-v8-latin-300.ttf') format('truetype');
    unicode-range: U+0041-005A, U+0061-007A, U+0030-0039;
  }
  @font-face {
    font-family: 'IBM Plex Sans';
    font-style: normal;
    font-weight: 400;
    src: local(''),
        url('/fonts/ibm-plex-sans-v8-latin-regular.woff2') format('woff2'), 
        url('/fonts/ibm-plex-sans-v8-latin-regular.woff') format('woff'), 
        url('/fonts/ibm-plex-sans-v8-latin-regular.ttf') format('truetype');
    unicode-range: U+0041-005A, U+0061-007A, U+0030-0039;
  }
  // Noto Sans KR
  @font-face {
    font-family: 'Noto Sans KR';
    font-style: normal;
    font-weight: 300;
    src: local(''),
        url('/fonts/noto-sans-kr-v13-latin-300.woff2') format('woff2'), 
        url('/fonts/noto-sans-kr-v13-latin-300.woff') format('woff'), 
  }
  @font-face {
    font-family: 'Noto Sans KR';
    font-style: normal;
    font-weight: 400;
    src: local(''),
        url('/fonts/noto-sans-kr-v13-latin-regular.woff2') format('woff2'), 
        url('/fonts/noto-sans-kr-v13-latin-regular.woff') format('woff'), 
  }
  @font-face {
    font-family: 'Noto Sans KR';
    font-style: normal;
    font-weight: 700;
    src: local(''),
        url('/fonts/noto-sans-kr-v13-latin-700.woff2') format('woff2'), 
        url('/fonts/noto-sans-kr-v13-latin-700.woff') format('woff'), 
  }
  // JetBrains Mono
  @font-face {
    font-family: 'JetBrains Mono';
    font-style: normal;
    font-weight: 400;
    src: local(''),
        url('/fonts/jetbrains-mono-v6-latin-regular.woff2') format('woff2'), 
        url('/fonts/jetbrains-mono-v6-latin-regular.woff') format('woff'), 
        url('/fonts/jetbrains-mono-v6-latin-regular.ttf') format('truetype');
  }
  @font-face {
      font-family: 'Dolce Vita';
      font-style: normal;
      font-weight: 700;
      src: url('/fonts/dolce-vita-heavy-bold.woff2') format('woff2'),
           url('/fonts/dolce-vita-heavy-bold.woff') format('woff'),
           url('/fonts/dolce-vita-heavy-bold.ttf') format('truetype');
  }


*{-webkit-box-sizing:border-box;-moz-box-sizing:border-box;box-sizing:border-box;margin:0;padding:0}
html{-webkit-tap-highlight-color:rgba(0,0,0,0);-webkit-tap-highlight-color:transparent;outline:none}
header,footer,section,article,aside,nav,hgroup,details,menu,figure,figcaption{display:block}
body,p,h1,h2,h3,h4,h5,h6,em,ul,ol,li,dl,dt,dd,div,table,th,td,form,fieldset,legend,input,textarea,button,select,label,iframe,pre,code,blockquote,video,audio,object,img,canvas,address,article,aside,details,figcaption,figure,footer,header,hgroup,menu,nav,section,object{margin:0;padding:0}
body{-webkit-text-size-adjust:none;font-weight:400}
h1,h2,h3,h4,h5,h6{font-size:100%;font-weight:inherit}
hr,legend{display:none}
ul,ol,dl,dt,dd{list-style:none}
table{width:100%;margin:0;padding:0;border:none;border-collapse:collapse;border-spacing:0}
tr,th,td{border:none;-webkit-box-orient:vertical}
caption{visibility:hidden;overflow:hidden;width:0;height:0;font-size:0;line-height:0}
input[type=text],input[type=password],input[type=button],input[type=number],input[type=tel],input[type=email],input[type=search],input[type=hidden],textarea,select{-webkit-box-sizing:border-box;-moz-box-sizing:border-box;box-sizing:border-box;-ms-border-radius:0;-webkit-border-radius:0;-moz-border-radius:0;border-radius:0;-moz-appearance:none;-o-appearance:none;-ms-appearance:none;-webkit-appearance:none;border:none;background-color:transparent;outline:none}
input[type=checkbox],input[type=radio]{-moz-appearance:none;-o-appearance:none;-ms-appearance:none;-webkit-appearance:none;background-color:transparent;-ms-border-radius:0;-webkit-border-radius:0;-moz-border-radius:0;border-radius:0;outline:none;border:none}
input,textarea,select,button{font-family:inherit;font-size:inherit;font-weight:inherit;vertical-align:middle}
button{overflow:visible;border:none;background-color:transparent;cursor:pointer;-webkit-appearance:none;text-decoration:none;outline:none}
button::-moz-focus-inner{padding:0;border:none}
button,a,a:hover,a:active,a:focus{text-decoration:none;outline:none}
em{font-style:normal}
img{vertical-align:top}
a{color: #000;}
i{font-style: normal;}

  * {
    text-decoration: none;
    cursor: none;
    user-select: none;
  }

  html {
    -webkit-font-smoothing: antialiased;
    font-size: 16px;
    min-height: 100vh;


    /* iOS only */
    @supports (-webkit-touch-callout: none) {
        min-height: -webkit-fill-available;
    }

  }


  body {
    font-family: 'IBM Plex Sans', 'Noto Sans KR', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
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
