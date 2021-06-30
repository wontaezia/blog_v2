import { gsap } from 'gsap';

export const getTitleMotion = (query) => {
    const tl = gsap.timeline({ paused: true });
    tl.addLabel('start')
        .to(
            query('.contact--title span'),
            {
                opacity: 1,
                duration: 0.6,
                ease: 'Power1.inOut',
                stagger: 0.1,
            },
            'start',
        )
        .to(
            query('.contact--title span'),
            {
                y: 0,
                duration: 0.6,
                ease: 'Power2.out',
                stagger: 0.1,
            },
            'start',
        )
        .addLabel('title')
        .to(
            query('.mailto'),
            {
                opacity: 1,
                duration: 0.8,
                ease: 'Power1.inout',
            },
            'title-=.2',
        );

    return tl;
};
