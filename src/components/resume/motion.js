import { gsap } from 'gsap';

export const getTitleTimeline = (query) => {
    const tl = gsap.timeline({ paused: true });

    gsap.set(window, { scrollTo: { y: 0 } });
    tl.addLabel('start')
        .to(
            query('.title'),
            {
                opacity: 1,
                duration: 0.8,
                ease: 'Power1.inOut',
            },
            'start',
        )
        .to(
            query('.title'),
            {
                y: 0,
                duration: 0.8,
                ease: 'Power2.out',
            },
            'start',
        )
        .to(
            query('.subhead--introduce'),
            {
                opacity: 1,
                duration: 0.8,
                ease: 'Power1.inOut',
            },
            'start+=.65',
        )
        .to(
            query('.subhead--introduce'),
            {
                y: 0,
                duration: 0.8,
                ease: 'Power2.out',
            },
            'start+=.65',
        )
        .to(
            query('.introduce'),
            {
                opacity: 1,
                duration: 0.6,
                ease: 'Power1.inOut',
                // stagger: 0.2,
            },
            'start+=.85',
        )
        .to(
            query('.introduce'),
            {
                y: 0,
                duration: 0.8,
                ease: 'Power2.out',
            },
            'start+=.85',
        )
        .to(
            query('.subhead--projects'),
            {
                opacity: 1,
                duration: 1.2,
                ease: 'Power1.inOut',
            },
            'start+=1.5',
        )
        .to(
            query('.subhead--projects'),
            {
                y: 0,
                duration: 1.2,
                ease: 'Power2.out',
            },
            'start+=1.5',
        )
        .addLabel('text')
        .to(
            query('.introduce--marker'),
            {
                scaleX: 1,
                duration: 0.7,
                ease: 'Power2.out',
            },
            'text-=.5',
        );

    return tl;
};

export const getMakerTrigger = (marker) => {
    gsap.to(marker, {
        scrollTrigger: {
            trigger: marker,
            start: '+=100px 100%',
        },
        x: '0%',
        duration: 0.7,
        ease: 'Power2.out',
    });
};
