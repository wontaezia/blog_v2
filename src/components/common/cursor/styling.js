import styled from 'styled-components';
import { colors } from '@styles/theme';

export const Cursor = styled.div`
    position: absolute;
    top: 0;
    left: 0;
    width: 32px;
    height: 32px;
    background: ${({ currentTheme, isMenuOpen }) =>
        currentTheme === 'light'
            ? isMenuOpen
                ? '#fff'
                : '#000'
            : isMenuOpen
            ? '#000'
            : '#fff'};
    border-radius: 100%;
    transform: translate(-50%, -50%);
    transition: all 0.1s ease-in-out;
    transition-property: width, height, border;
    will-change: width, height, transform, border;
    pointer-events: none;
    z-index: 999;
    /* mix-blend-mode: difference; */

    &.hovered {
        /* background: transparent !important; */
        width: 56px;
        height: 56px;
        /* opacity: 0.6; */
        /* border: 4px solid ${colors.primary}; */
    }

    &.hovered.pointer {
        /* border: 4px solid ${(props) => props.theme.text}; */
    }
`;
