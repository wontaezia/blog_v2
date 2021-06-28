import styled from 'styled-components';
import { motion } from 'framer-motion';
import { colors, device, flex } from '@styles/theme';

export const Container = styled(motion.header)`
    position: fixed;
    top: 22px;
    right: 0;
    left: 0;
    width: 100%;
    height: 0px;
    z-index: 99;

    a,
    button > span {
        color: ${({ theme, isMenuOpen }) =>
            isMenuOpen ? theme.background : theme.text};
        font-size: 1rem;
        font-weight: 800;
        letter-spacing: -0.05em;
        text-transform: uppercase;
        transition: color 0.6s ease-in-out;
        transition-delay: ${({ isMenuOpen }) => (isMenuOpen ? '0s' : '0.6s')};
    }
`;

export const Github = styled.div`
    width: 80px;
    text-align: right;
    text-transform: uppercase;
`;

export const Inner = styled.div`
    position: relative;
    flex-grow: 1;
    width: auto;
    margin: 0 auto;

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

export const Flex = styled.div`
    position: relative;
    ${flex('space-between', 'center')}
    height: auto;
    padding: 0 32px;
`;

export const Logo = styled.h1`
    ${flex('flex-start', 'center')}
    width: 80px;
    margin: 0;
`;

export const MenuContainer = styled.div`
    ${flex('space-between', 'center')}
`;

export const ThemeButton = styled.button`
    outline: none;
    border: none;
    background: none;
    padding: 10px 0 10px 10px;
`;

export const Menu = styled.div`
    button {
        position: relative;
        display: inline-flex;
        align-items: center;
        height: 24px;
        padding: 10px 20px;
        padding-right: 0;
        background: none;
        border: none;
        transform-origin: center;
        outline: none;
        font-weight: 700;
        text-align: right;
        text-transform: uppercase;
        letter-spacing: -0.06em;
        color: ${({ theme, isMenuOpen }) =>
            isMenuOpen ? theme.background : theme.text};
        transition: color 0.6s ease-in-out;
        transition-delay: ${({ isMenuOpen }) => (isMenuOpen ? '0s' : '0.6s')};
    }
`;
