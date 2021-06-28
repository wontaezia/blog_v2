import React, { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import { gsap } from 'gsap';
import { useMenu, useCursor, useTheme } from '@hooks';
import * as S from '@components/common/overlayMenu/styling';
import * as M from '@components/common/overlayMenu/motion';

const menus = ['resume', 'blog', 'contact'];

function OverlayMenu() {
    const [isMenuActive, setIsMenuActive] = useState(false);
    const [isPlayOnce, setIsPlayOnce] = useState(false);
    const pathRef = useRef(null);
    const menuContainerRef = useRef(null);
    const menuSelector = gsap.utils.selector(menuContainerRef);
    const { isMenuOpen, setMenuState } = useMenu();
    const { handleCursorType } = useCursor();

    const onClickLink = () => {
        const isScrollLock = document.body.classList.contains('no-scroll');
        setMenuState();

        if (isScrollLock) {
            document.body.classList.remove('no-scroll');
        } else {
            document.body.classList.add('no-scroll');
        }
    };

    useEffect(() => {
        if (pathRef.current && isPlayOnce) {
            const overlayTimeline = M.getOverlayTimeline(
                pathRef.current,
                isMenuOpen,
                setIsMenuActive,
                menuSelector,
            );
            overlayTimeline.play();
        } else {
            setIsPlayOnce(true);
        }
    }, [isMenuOpen]);

    return (
        <S.Container isMenuActive={isMenuActive}>
            <S.Overlay viewBox="0 0 100 100" preserveAspectRatio="none">
                <S.OverlayPath
                    ref={pathRef}
                    d="M 0 100 V 100 Q 50 100 100 100 V 100 z"
                />
            </S.Overlay>
            <S.MenuContainer ref={menuContainerRef}>
                <S.Menu isMenuActive={isMenuActive}>
                    {menus.map((menu) => (
                        <li
                            key={menu}
                            className="overlay-menu"
                            onMouseEnter={() => {
                                handleCursorType('hovered');
                            }}
                            onMouseLeave={() => handleCursorType('default')}
                            onClick={onClickLink}
                        >
                            <Link href={`/${menu}`}>
                                <a>
                                    <S.Arrow>
                                        <svg viewBox="0 0 101 57">
                                            <path
                                                d="M33 34H0V24h81.429L66 7.884 73.548 0l19.877 20.763.027-.029L101 28.618 73.829 57l-7.548-7.884L80.753 34H33z"
                                                fill="#000"
                                                fillRule="evenodd"
                                            ></path>
                                        </svg>
                                    </S.Arrow>
                                    <S.InnerText>{menu}</S.InnerText>
                                </a>
                            </Link>
                        </li>
                    ))}
                </S.Menu>
            </S.MenuContainer>
        </S.Container>
    );
}

export default OverlayMenu;
