import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import { useTheme, useCursor, useMenu } from '@hooks';
import * as S from '@components/common/header/styling';
import * as M from '@components/common/header/motion';

const Header = () => {
  const { toggleTheme, currentTheme } = useTheme();
  const { handleCursorType } = useCursor();
  const { setMenuState, isMenuOpen } = useMenu();
  const [isClicked, setIsClicked] = useState(false);

  const handleMenu = () => {
    const isScrollLock = document.body.classList.contains('no-scroll');
    setIsClicked(true);
    setMenuState();
    handleCursorType('default');

    if (isScrollLock) {
      document.body.classList.remove('no-scroll');
    } else {
      document.body.classList.add('no-scroll');
    }
  };

  useEffect(() => {
    let timer;
    if (isClicked) {
      timer = setTimeout(() => {
        setIsClicked(false);
      }, 800);
    }
    return () => clearTimeout(timer);
  }, [isClicked]);

  return (
    <S.Container isMenuOpen={isMenuOpen} {...M.container}>
      <S.Inner>
        <S.Flex>
          <S.Logo
            onClick={isMenuOpen ? handleMenu : null}
            onMouseEnter={() => {
              handleCursorType('hovered');
            }}
            onMouseLeave={() => handleCursorType('default')}
          >
            <Link href="/">
              <a>wontae</a>
            </Link>
          </S.Logo>
          <S.Right>
            <S.ThemeButton
              onMouseEnter={() => {
                handleCursorType('hovered');
              }}
              onMouseLeave={() => handleCursorType('default')}
              onClick={toggleTheme}
              isMenuOpen={isMenuOpen}
            >
              <span />
            </S.ThemeButton>
            <S.Menu isMenuOpen={isMenuOpen}>
              <button
                onMouseEnter={() => {
                  handleCursorType('hovered');
                }}
                onMouseLeave={() => handleCursorType('default')}
                disabled={isClicked}
                onClick={handleMenu}
              >
                {isMenuOpen ? 'CLOSE' : 'MENU'}
              </button>
            </S.Menu>
          </S.Right>
        </S.Flex>
      </S.Inner>
    </S.Container>
  );
};

export default Header;
