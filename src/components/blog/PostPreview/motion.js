import { gsap } from 'gsap';
// import ScrollTrigger from 'gsap/dist/ScrollTrigger';

export const getTitleMotion = (query, listQuery) => {
    const tl = gsap.timeline({ paused: true });

    tl.addLabel('start')
        .to(
            query('a span'),
            {
                opacity: 1,
                duration: 0.6,
                ease: 'Power1.inOut',
                stagger: 0.1,
            },
            'start',
        )
        .to(
            query('a span'),
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
            [listQuery('.post0'), listQuery('.post1')],
            {
                opacity: 1,
                duration: 0.8,
                ease: 'Power1.inOut',
                stagger: 0.2,
            },
            'title-=0.4',
        )
        .to(
            [listQuery('.post0'), listQuery('.post1')],
            {
                y: 0,
                duration: 0.8,
                ease: 'Power2.out',
                stagger: 0.2,
            },
            'title-=0.4',
        );

    return tl;
};
