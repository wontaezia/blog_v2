import { css } from 'styled-components';

export const colors = {
    primary: '#c3fa05',
    black: '#121212',
    white: '#fefefe',
    red: '#cf0000',
    green: '#26AE50',
    beige: '#b8947e',
    darkBlue: '#335f70',
    yellow: '#FAB234',
    orange: '#f75f17',
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
    landscape: `(min-width: 640px)`,
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
