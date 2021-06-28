import React, { useState, useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { useCursor, useTheme, useMenu } from '@hooks';
import * as S from '@components/common/cursor/styling';

const Cursor = () => {
    const cursorRef = useRef(null);
    const { isHoverOnTarget } = useCursor();
    const { currentTheme } = useTheme();
    const { isMenuOpen } = useMenu();

    const onMouseMove = (event) => {
        const { pageX: x, pageY: y } = event;
        gsap.set(cursorRef.current, { x, y });
    };

    useEffect(() => {
        document.addEventListener('mousemove', onMouseMove);

        return () => {
            document.removeEventListener('mousemove', onMouseMove);
            gsap.killTweensOf(cursorRef.current);
        };
    }, []);

    return (
        <S.Cursor
            className={`${
                !!isHoverOnTarget ? 'hovered' : ''
            } ${isHoverOnTarget}`}
            currentTheme={currentTheme}
            isMenuOpen={isMenuOpen}
            ref={cursorRef}
        />
    );
};

export default Cursor;
