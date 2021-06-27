import React, { useEffect } from 'react';
import { ThemeProvider } from 'styled-components';
import { useTheme } from '@hooks';
import { themes, Inner } from '@styles/theme';
import { GlobalStyle } from '@styles/global';
import { isBrowser, isSafari } from 'react-device-detect';
import { Cursor, Header, OverLayMenu, Bubble } from '@components/common';

function Layout({ children }) {
    const { currentTheme, setTheme } = useTheme();

    useEffect(() => {
        const prevTheme = window.localStorage.getItem('theme');
        setTheme(prevTheme);
    }, []);

    return (
        <ThemeProvider theme={themes[currentTheme]}>
            <Header />
            <Cursor />
            {isBrowser && !isSafari ? <Bubble /> : null}
            <OverLayMenu />
            <Inner currentTheme={currentTheme}>{children}</Inner>
            <GlobalStyle />
        </ThemeProvider>
    );
}

export default Layout;
