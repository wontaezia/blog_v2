import { gsap } from 'gsap';
import ScrollTrigger from 'gsap/dist/ScrollTrigger';

const handlePostTrigger = (listQuery) => {
    const posts = gsap.utils.toArray(listQuery('.post'));

    posts.forEach((post, i) => {
        const postTimeline = getPostTrigger(post, i);

        ScrollTrigger.create({
            trigger: post,
            start: '10% 100%',
            onEnter() {
                postTimeline.play();
            },
        });
    });
};

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
                onComplete() {
                    handlePostTrigger(listQuery);
                },
            },
            'start',
        );

    return tl;
};

export const getPostTrigger = (post, i) => {
    const tl = gsap.timeline({
        paused: true,
    });

    tl.addLabel('start')
        .to(
            post,
            {
                delay() {
                    return i % 2 ? 0.2 : 0;
                },
                opacity: 1,
                duration: 0.8,
                ease: 'Power1.inOut',
            },
            'start',
        )
        .to(
            post,
            {
                delay() {
                    return i % 2 ? 0.2 : 0;
                },
                y: 0,
                duration: 0.8,
                ease: 'Power2.out',
            },
            'start',
        );

    return tl;
};
