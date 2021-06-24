import { gsap } from 'gsap';

export const body = {
    initial: { opacity: 0 },
    animate: { opacity: 1 },
    exit: { opacity: 0 },
    transition: {
        delay: 1,
        duration: 1.6,
        type: 'twwen',
        ease: 'easeInOut',
    },
};

export const getBlogTimeline = (query) => {
    const tl = gsap.timeline({ paused: true });

    tl.addLabel('start')
        .to(
            query('.post--title'),
            {
                y: 0,
                duration: 0.8,
                ease: 'Power2.out',
            },
            'start',
        )
        .to(
            query('.post--title'),
            {
                opacity: 1,
                duration: 0.8,
                ease: 'Power1.inOut',
            },
            'start',
        )
        .addLabel('title')
        .to(
            query('.post--info span'),
            {
                y: 0,
                duration: 0.6,
                ease: 'Power2.out',
                stagger: 0.06,
            },
            'title+=.2',
        )
        .to(
            query('.post--info span'),
            {
                opacity: 1,
                duration: 0.6,
                ease: 'Power1.inOut',
                stagger: 0.06,
            },
            'title+=.2',
        );

    return tl;
};
