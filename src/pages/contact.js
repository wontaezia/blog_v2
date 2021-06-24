import React, { useEffect, useRef } from 'react';
import Link from 'next/link';
import { gsap } from 'gsap';
import * as S from '@components/contact/styling';
import * as M from '@components/contact/motion';

function Contact() {
    const containerRef = useRef(null);
    const query = gsap.utils.selector(containerRef);

    useEffect(() => {
        const titleTimeline = M.getTitleMotion(query);

        gsap.delayedCall(1, () => {
            titleTimeline.play();
        });
    }, []);

    return (
        <div ref={containerRef}>
            <S.MainTitle>
                <div className="contact--title">
                    <span>C</span>
                    <span>o</span>
                    <span>n</span>
                    <span>t</span>
                    <span>a</span>
                    <span>c</span>
                    <span>t</span>
                </div>
                <S.Line />
            </S.MainTitle>
            <S.Container>
                <a href="mailto:wontae1206@gmail.com">
                    <S.Mail className="mailto">wontae1206@gmail.com</S.Mail>
                </a>
            </S.Container>
        </div>
    );
}

export default Contact;
