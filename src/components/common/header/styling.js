import styled from 'styled-components';
import { motion } from 'framer-motion';
import { colors, device, flex } from '@styles/theme';

export const Container = styled(motion.header)`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  z-index: 99;
  padding: 4rem 6rem;
  font-weight: 700;
  pointer-events: none;

  a,
  button > span {
    color: ${({ theme, isMenuOpen }) =>
      isMenuOpen ? theme.background : theme.text};
    letter-spacing: -0.05em;
    transition: color 0.6s ease-in-out;
    transition-delay: ${({ isMenuOpen }) => (isMenuOpen ? '0s' : '0.6s')};
  }

  @media (max-width: 600px) {
    padding: 1rem 2rem;
  }
`;

export const Github = styled.div`
  width: 80px;
  text-align: right;
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
`;

export const Logo = styled.h1`
  ${flex('center', 'center')}
  margin: 0;
  font-size: 10px;
  text-transform: uppercase;
  pointer-events: initial;
  text-decoration: line-through;
  font-weight: 700;
  a {
    margin: 0;
    padding: 0;

    display: block;
    letter-spacing: 0.2rem;
  }
`;

export const MenuContainer = styled.div`
  ${flex('space-between', 'center')}
`;

export const Right = styled.div`
  ${flex(null, 'center')}
  font-size: 10px;
`;

export const ThemeButton = styled.button`
  outline: none;
  border: none;
  background: none;
  display: flex;
  align-items: center;
  width: 44px;
  padding: 10px 10px 10px 0px;
  margin-top: 2px;
  font-weight: 700;
  letter-spacing: -0.06em;
  color: ${({ theme, isMenuOpen }) =>
    isMenuOpen ? theme.background : theme.text};
  text-align: left;
  transition: color 0.6s ease-in-out;
  transition-delay: ${({ isMenuOpen }) => (isMenuOpen ? '0s' : '0.6s')};
  pointer-events: initial;

  span {
    position: relative;
    display: block;
    width: 16px;
    height: 16px;
    border-radius: 50%;
    border: 1px solid;
    overflow: hidden;
    transform: rotate(135deg);

    &::before {
      content: '';
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 50%;
      display: block;
      background-color: ${({ theme, isMenuOpen }) =>
        isMenuOpen ? theme.background : theme.text};
      transition: background 0.6s ease-in-out;
      transition-delay: ${({ isMenuOpen }) => (isMenuOpen ? '0s' : '0.6s')};
    }
  }
`;

export const Menu = styled.div`
  width: 3.2rem;
  pointer-events: initial;

  button {
    position: relative;
    width: 100%;
    height: auto;
    letter-spacing: 0.2rem;
    text-align: right;
    color: ${({ theme, isMenuOpen }) =>
      isMenuOpen ? theme.background : theme.text};
    transition: color 0.6s ease-in-out;
    transition-delay: ${({ isMenuOpen }) => (isMenuOpen ? '0s' : '0.6s')};
  }
`;
