import styled from 'styled-components';
import { motion } from 'framer-motion';
import { device, flex } from '@styles/theme';

export const Container = styled(motion.div)`
    position: fixed;
    top: 0;
    left: 0;
    width: 100vw;
    height: 100vh;
    pointer-events: ${({ isMenuActive }) =>
        isMenuActive ? 'initial' : 'none'};
    z-index: 9;
`;

export const Overlay = styled.svg`
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    transform: rotate(180deg);
    pointer-events: none;
`;

export const OverlayPath = styled(motion.path)`
    fill: ${(props) => props.theme.text};
`;

export const MenuContainer = styled.div`
    position: relative;
    width: 100%;
    height: 100vh;
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

export const Menu = styled.ul`
    position: absolute;
    bottom: 96px;
    left: 0;
    margin: 0;
    font-size: 4rem;
    padding: 0 32px;
    pointer-events: ${({ isMenuActive }) =>
        isMenuActive ? 'initial' : 'none'};

    li {
        overflow: hidden;
    }

    li:hover a {
        transform: translateX(0);
    }

    a {
        display: flex;
        transform: translateX(-130px);
        transition: transform 0.3s ease-in-out;
    }

    @media ${device.tablet} {
        font-size: 6rem;
    }
`;

export const InnerText = styled.span`
    color: ${({ theme }) => theme.background};
    font-weight: 800;
    text-transform: uppercase;
    opacity: 0;
    transform: translateY(60%);
`;

export const Arrow = styled.span`
    ${flex(null, 'center')}

    svg {
        width: 100px;
        height: 100%;
        margin-right: 30px;

        path {
            fill: ${({ theme }) => theme.background};
        }
    }
`;
