import React, { useEffect, useRef } from 'react';
import Image from 'next/image';
import { gsap } from 'gsap';
import {
    JsIcon,
    ReduxIcon,
    GsapIcon,
    ReactIcon,
    NextIcon,
} from '@assets/svg/stack-icon';
import macbookFrame from '@assets/images/mac-frame.png';
import * as S from '@components/laptop/styling';
import * as M from '@components/laptop/motion';

function Stack() {
    const containerRef = useRef(null);
    const query = gsap.utils.selector(containerRef);

    useEffect(() => {
        const introTimeline = M.getIntroTimeline(query);

        gsap.delayedCall(1, () => {
            introTimeline.play();
        });
    }, []);

    return (
        <S.Container ref={containerRef}>
            <S.Inner>
                <S.Icons className="stack--icons">
                    <JsIcon />
                    <ReduxIcon />
                    <ReactIcon />
                    <NextIcon />
                    <GsapIcon />
                </S.Icons>
                <S.MacBook className="macbook">
                    <S.Text>Hello, There!</S.Text>
                    <Image src={macbookFrame} alt="macbook frame" />
                </S.MacBook>
            </S.Inner>
        </S.Container>
    );
}

export default Stack;
