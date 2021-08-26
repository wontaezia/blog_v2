import gsap from 'gsap';
import ScrollTrigger from 'gsap/dist/ScrollTrigger';
import { getHomeTimeline } from '@timeline/home';

const getDefaultTimeline = (node, delay) => {
  const tl = gsap.timeline({
    paused: true,
    defaults: { duration: 0.3, delay, ease: 'Power1.easeIn' },
  });

  tl.fromTo(
    node.current,
    {
      opacity: 0,
    },
    {
      opacity: 1,
    },
  );

  return tl;
};

export const play = (pathname, router, node, appears) => {
  const delay = appears ? 0.8 : 0.6;
  let timeline;

  // page
  switch (pathname) {
    case '/': {
      timeline = getHomeTimeline(node, delay);
      break;
    }

    default: {
      // dynamic routing
      if (pathname.includes('/portfolio/')) {
        timeline = getDetailTimeline(node, delay);
        break;
      }
      if (pathname === '/portfolio') {
        if (!search) {
          console.log('g');
          timeline = getPortfolioTimeline(node, delay);
          break;
        }
      }
      timeline = getDefaultTimeline(node, delay);
      break;
    }
  }
  requestAnimationFrame(() => timeline.play());
};

export const exit = (node) => {
  const tl = gsap.timeline({ paused: true });
  console.log('exit');
  console.log({ node });
  gsap.set(window, { scrollTo: { y: 0 } });

  tl.to(node.current, {
    duration: 0.6,
    opacity: 0,
    ease: 'Power3.easeInOut',
    onComplete: () => {
      ScrollTrigger.getAll().forEach((t) => t.kill());
      window.scrollTo(0, 0);
    },
  });
  tl.play();
};
