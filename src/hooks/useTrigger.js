// import { useEffect, useState, useRef } from 'react';
// import { gsap } from 'gsap';
// import { ScrollTrigger } from 'gsap/ScrollTrigger';

// function useTrigger(trigger, timeline, option) {

// }

// export default useTrigger;

// useEffect(() => {
//   ScrollTrigger.refresh();

//   const tl = gsap.timeline({
//     scrollTrigger: {
//       trigger: listRef.current[1],
//       start: '50% 100%',
//     },
//   });

//   tl.addLabel('start').to(
//     listRef.current[1],
//     { opacity: 1, duration: 0.7, ease: 'Power1.inOut' },
//     'start'
//   );

//   gsap.from(masterRef.current, {
//     scrollTrigger: {
//       trigger: masterRef.current,
//       start: '0% 100%',
//     },
//     y: '10%',
//     duration: 0.7,
//     ease: 'Power2.out',
//   });
// }, [i18n]);
