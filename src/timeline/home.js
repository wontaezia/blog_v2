import { gsap } from 'gsap';

export const getHomeTimeline = (node, delay) => {
    const tl = gsap.timeline({
        paused: true,
    });
    const query = gsap.utils.selector(node);

    gsap.set(window, { scrollTo: { y: 0 } });

    tl.to(query('.hello span'), {
        rotate: 0,
        y: 0,
        duration: 0.8,
        ease: 'Power3.easeOut',
        stagger: {
            from: 'center',
            amount: 0.2,
            ease: 'Power0.easeInOut',
        },
    })
        .addLabel('hello')
        .to(
            query('.hello'),
            {
                y: 0,
                ease: 'Power2.easeOut',
                duration: 0.6,
            },
            'hello+=.25',
        )
        .to(
            query('.introduce'),
            {
                y: 0,
                opacity: 1,
                ease: 'Power2.easeOut',
                duration: 0.6,
            },
            'hello+=.25',
        );

    return tl;
};
