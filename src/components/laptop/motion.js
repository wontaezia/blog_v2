import { gsap } from 'gsap';

export const getIntroTimeline = (query) => {
    const tl = gsap.timeline({ paused: true });

    tl.addLabel('start')
        .to(
            query('.macbook'),
            {
                opacity: 1,
                duration: 2,
                ease: 'Power1.inOut',
                stagger: 0.1,
            },
            'start',
        )
        .addLabel('macbook')
        .to(
            query('.stack--icons svg'),
            {
                opacity: 1,
                duration: 0.6,
                ease: 'Power1.inOut',
                stagger: 0.1,
            },
            'macbook-=.4',
        )
        .to(
            query('.stack--icons svg'),
            {
                y: 0,
                duration: 0.6,
                ease: 'Power2.out',
                stagger: 0.1,
            },
            'macbook-=.4',
        );

    return tl;
};
