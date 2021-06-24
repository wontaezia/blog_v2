import styled, { css } from 'styled-components';

export const colors = {
    primary: '#c3fa05',
    black: '#000000',
    white: '#ffffff',
    red: '#cf0000',
    green: '#26AE50',
    beige: '#b8947e',
    darkBlue: '#335f70',
    yellow: '#FAB234',
    hotPink: '#e91e63',
    blue: '#2B6CB0',
    gray: {
        50: '#f7fafc',
        100: '#edf2f7',
        200: '#e2e8f0',
        300: '#cbd5e0',
        400: '#a0aec0',
        500: '#718096',
        600: '#4a5568',
        700: '#2d3748',
        800: '#1a202c',
        900: '#171923',
    },
};

export const themes = {
    dark: {
        background: colors.black,
        text: colors.white,
    },
    light: {
        background: colors.white,
        text: colors.black,
    },
};

export const device = {
    tablet: `(min-width: 768px)`,
    desktop: `(min-width: 1024px)`,
    wideScreen: `(min-width: 1216px)`,
    fullHd: `(min-width: 1408px)`,
};

export const flex = ($justify = null, $align = null, $direction = null) => css`
    display: flex;
    flex-direction: ${$direction};
    justify-content: ${$justify};
    align-items: ${$align};
`;

const prismBaseTheme = css`
    code {
        white-space: pre;
        font-family: 'JetBrains Mono', 'Noto Sans';
        padding: 0;
        font-size: 0.8rem;
    }
    code[class*='language-'],
    pre[class*='language-'] {
        color: ${colors.gray[800]};
        background: none;
        font-family: 'JetBrains Mono', 'Noto Sans';
        font-size: 0.75rem;
        text-align: left;
        word-spacing: normal;
        word-break: normal;
        word-wrap: normal;
        line-height: 1.3;
        -moz-tab-size: 4;
        -o-tab-size: 4;
        tab-size: 4;
        -webkit-hyphens: none;
        -moz-hyphens: none;
        -ms-hyphens: none;
        hyphens: none;
        width: 100%;

        &::before {
            content: none;
        }
    }
    /* Code blocks */
    pre[class*='language-'] {
        padding: 2rem;
        margin: 1.5rem 0;
        overflow: auto;
        min-width: 100%;
        font-size: 0.9rem;
        white-space: nowrap;
    }
    :not(pre) > code[class*='language-'],
    pre[class*='language-'] {
        background: ${colors.gray[50]};
        border: 1px solid ${colors.gray[200]};
        border-radius: 0.5rem;
    }
    /* Inline code */
    :not(pre) > code[class*='language-'] {
        /* padding: 0.1em; */
        border-radius: 0.3em;
        white-space: normal;
    }
    .token.comment,
    .token.prolog,
    .token.doctype,
    .token.cdata {
        color: slategray;
    }
    .token.punctuation {
        color: #999;
    }
    .token.namespace {
        opacity: 0.7;
    }
    .token.property,
    .token.tag,
    .token.boolean,
    .token.number,
    .token.constant,
    .token.symbol,
    .token.deleted {
        color: #905;
    }
    .token.selector,
    .token.attr-name,
    .token.string,
    .token.char,
    .token.builtin,
    .token.inserted {
        color: #690;
    }
    .token.operator,
    .token.entity,
    .token.url,
    .language-css .token.string,
    .style .token.string {
        color: #9a6e3a;
    }
    .token.atrule,
    .token.attr-value,
    .token.keyword {
        color: #07a;
    }
    .token.function,
    .token.class-name {
        color: #dd4a68;
    }
    .token.regex,
    .token.important,
    .token.variable {
        color: #e90;
    }
    .token.important,
    .token.bold {
        font-weight: bold;
    }
    .token.italic {
        font-style: italic;
    }
    .token.entity {
        cursor: help;
    }
    .mdx-marker {
        display: block;
        margin-left: -1rem;
        margin-right: -1rem;
        padding-left: 1rem;
        padding-right: 1rem;
        background-color: ${colors.gray[200]};
        box-shadow: inset 3px 0px 0 0px ${colors.blue};
        min-width: fit-content;
    }
    .remark-code-title {
        padding: 0.5rem 1rem;
        font-family: 'JetBrains Mono', 'Noto Sans';
        background: ${colors.gray[200]};
        color: ${colors.gray[800]};
        border: 1px solid ${colors.gray[200]};
        border-top-left-radius: 0.5rem;
        border-top-right-radius: 0.5rem;
        font-size: 0.8rem;
        font-weight: 600;
        margin-bottom: 0;
        width: 100%;
        + pre {
            border-top-left-radius: 0;
            border-top-right-radius: 0;
            margin-top: 0 !important;
        }
    }
`;

export const prismLightTheme = css`
    ${prismBaseTheme};
    code[class*='language-'],
    pre[class*='language-'] {
        color: ${colors.gray[800]};
    }
    :not(pre) > code[class*='language-'],
    pre[class*='language-'] {
        background: ${colors.gray[50]};
        border: 1px solid ${colors.gray[200]};
    }
    .mdx-marker {
        background-color: hsla(204, 45%, 96%, 1);
    }
`;

export const prismDarkTheme = css`
    ${prismBaseTheme};
    :not(pre) > code[class*='language-'] {
        background: #011627;
    }
    .token.attr-name {
        color: rgb(173, 219, 103);
        font-style: italic;
    }
    .token.comment {
        color: rgb(128, 147, 147);
    }
    .token.string,
    .token.url {
        color: rgb(173, 219, 103);
    }
    .token.variable {
        color: rgb(214, 222, 235);
    }
    .token.number {
        color: rgb(247, 140, 108);
    }
    .token.builtin,
    .token.char,
    .token.constant,
    .token.function {
        color: rgb(130, 170, 255);
    }
    .token.punctuation {
        color: rgb(199, 146, 234);
    }
    .token.selector,
    .token.doctype {
        color: rgb(199, 146, 234);
        font-style: 'italic';
    }
    .token.class-name {
        color: rgb(255, 203, 139);
    }
    .token.tag,
    .token.operator,
    .token.keyword {
        color: #ffa7c4;
    }
    .token.boolean {
        color: rgb(255, 88, 116);
    }
    .token.property {
        color: rgb(128, 203, 196);
    }
    .token.namespace {
        color: rgb(178, 204, 214);
    }
    code[class*='language-'],
    pre[class*='language-'] {
        color: ${colors.gray[50]};
    }
    :not(pre) > code[class*='language-'],
    pre[class*='language-'] {
        background: ${colors.gray[800]};
        border: 1px solid ${colors.gray[700]};
    }
    .mdx-marker {
        background-color: ${colors.gray[700]};
    }
    .remark-code-title {
        background: ${colors.gray[700]};
        color: ${colors.gray[100]};
        border: 1px solid ${colors.gray[700]};
    }
`;

export const Inner = styled.div`
    ${({ currentTheme }) =>
        currentTheme === 'light' ? prismLightTheme : prismDarkTheme}
    position: relative;
    flex-grow: 1;
    width: auto;
    margin: 0 auto;
    padding: 0 32px;

    &::before {
        content: '';
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        height: 140px;
        background: ${({ currentTheme }) =>
            currentTheme === 'light'
                ? `linear-gradient(
            180deg,
            #fff 0%,
            #fff 40%,
            rgba(255, 255, 255, 0.01) 100%
        )`
                : `linear-gradient(
            180deg,
            #000 0%,
            #000 40%,
            rgba(0, 0, 0, 0.01) 100%
        )`};
        z-index: 1;
    }

    @media ${device.desktop} {
        max-width: 960px;
    }
    @media ${device.wideScreen} {
        max-width: 1152px;
    }
    @media ${device.fullHd} {
        max-width: 1244px;
    }
`;
