import styled from 'styled-components';
import { device, colors } from '@styles/theme';
import { prismLightTheme, prismDarkTheme } from '@styles/prism';

export const Container = styled.div`
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

export const Inner = styled.div`
  ${({ currentTheme }) =>
    currentTheme === 'light' ? prismLightTheme : prismDarkTheme}
  position: relative;
  width: auto;
  padding: 0 6rem;
  margin: 0 auto;

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
            ${colors.white} 0%,
            ${colors.white} 40%,
            rgba(255, 255, 255, 0.01) 100%
        )`
        : `linear-gradient(
            180deg,
            ${colors.black} 0%,
            ${colors.black} 40%,
            rgba(12, 12, 12, 0.01) 100%
        )`};
    z-index: 2;
    pointer-events: none;
  }

  @media (max-width: 600px) {
    padding: 0 2rem;
  }
`;
