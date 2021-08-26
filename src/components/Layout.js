import React, { useEffect } from 'react';
import { ThemeProvider } from 'styled-components';
import { useTheme } from '@hooks';
import { themes } from '@styles/theme';
import { Inner } from '@styles/layout';
import { GlobalStyle } from '@styles/global';
import { isBrowser } from 'react-device-detect';
import { Cursor, Header, OverLayMenu } from '@components/common';

function Layout({ children }) {
    const { currentTheme, setTheme } = useTheme();

    useEffect(() => {
        const prevTheme = window.localStorage.getItem('theme');
        setTheme(prevTheme);
    }, []);

    return (
        <ThemeProvider theme={themes[currentTheme]}>
            <Header />
            <OverLayMenu />

            <Inner currentTheme={currentTheme}>{children}</Inner>
            {isBrowser ? <Cursor /> : null}
            <GlobalStyle />
        </ThemeProvider>
    );
}

export default Layout;
