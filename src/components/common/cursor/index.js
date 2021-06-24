import React, { useState, useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { useCursor } from '@hooks';
import * as S from '@components/common/cursor/styling';

const Cursor = () => {
    const { isHoverOnTarget } = useCursor();
    const cursorRef = useRef(null);

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
            ref={cursorRef}
        />
    );
};

export default Cursor;
