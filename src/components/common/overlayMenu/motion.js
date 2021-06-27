import { gsap } from 'gsap';

const paths = {
    top: 'M 0 100 V 100 Q 50 100 100 100 V 100 z',
    openMiddle: 'M 0 100 V 50 Q 50 0 100 50 V 100 z',
    closeMiddle: 'M 0 100 V 50 Q 50 100 100 50 V 100 z',
    bottom: 'M 0 100 V 0 Q 50 0 100 0 V 100 z',
};

export const getOverlayTimeline = (
    ref,
    isOpen,
    setIsMenuActive,
    menuSelector,
) => {
    const query = gsap.utils.selector(ref);
    const allMenu = gsap.utils.toArray(menuSelector('.overlay-menu span'));
    gsap.killTweensOf(ref);
    const tl = gsap.timeline({
        paused: true,
    });

    tl.addLabel('start')
        .to(ref, {
            delay: isOpen ? 0 : 0.2,
            duration: 0.8,
            attr: { d: isOpen ? paths.openMiddle : paths.closeMiddle },
            ease: 'Power2.easeIn',
        })
        .to(ref, {
            duration: isOpen ? 0.8 : 0.6,
            attr: { d: isOpen ? paths.bottom : paths.top },
            ease: 'Power2.easeOut',
            onComplete: () => {
                setIsMenuActive(isOpen);
            },
        })
        .to(
            allMenu,
            {
                opacity: isOpen ? 1 : 0,
                ease: 'Power1.easeOut',
                duration: isOpen ? 0.8 : 0.6,
                stagger: isOpen ? 0.06 : -0.06,
                delay: isOpen ? 1 : 0,
            },
            'start',
        )
        .to(
            allMenu,
            {
                y: isOpen ? '0' : '-60%',
                ease: 'Power2.inOut',
                duration: 0.8,
                stagger: isOpen ? 0.06 : -0.06,
                delay: isOpen ? 0.8 : 0,
                onComplete: () => {
                    if (!isOpen) {
                        gsap.set(allMenu, { y: '60%' });
                    }
                },
            },
            'start',
        );

    return tl;
};
