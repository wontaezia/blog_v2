import React, { useEffect, useRef, forwardRef } from 'react';
import { gsap } from 'gsap';
import ScrollTrigger from 'gsap/dist/ScrollTrigger';
import { Project, Experience, Skill } from '@components/resume';
import * as S from '@components/resume/styling';
import * as M from '@components/resume/motion';
import { Container } from 'src/styles/layout';

const Resume = forwardRef((props, ref) => {
  const resumeRef = useRef(null);
  const query = gsap.utils.selector(resumeRef);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    const titleTimeLine = M.getTitleTimeline(query);
    const markers = gsap.utils.toArray(query('.marker'));
    gsap.delayedCall(1.4, () => {
      titleTimeLine.play();
    });

    markers.forEach((marker) => M.getMakerTrigger(marker));

    return () => {
      ScrollTrigger.getAll().forEach((t) => t.kill());
    };
  }, []);

  return (
    <Container>
      <S.Container query={query} ref={ref}>
        <div ref={resumeRef}>
          <S.Title className="title">
            안녕하세요, <br />
            정원태입니다.
          </S.Title>
          <S.Subhead className="subhead--introduce">Introduce.</S.Subhead>
          <S.Introduce className="introduce">
            사용자의 입장에서 해결해야 할 문제점을 찾고 협업을 통해 개선해나가는
            과정 속에서{' '}
            <span>
              성장하고 있는 신입 프론트엔드
              <span className="introduce--marker" />
            </span>{' '}
            개발자입니다. <br />
            사용자 누구나 기대한 대로 작동하는 웹사이트를 선호하며 기술 문서
            읽는 것을 좋아해 새로운 기술에 빠르게 적응합니다.
          </S.Introduce>
          <S.Subhead className="subhead--projects">Projects.</S.Subhead>
          <Project />
          <S.Subhead>Experience.</S.Subhead>
          <Experience />
          <S.Subhead>Skill.</S.Subhead>
          <Skill />
        </div>
      </S.Container>
    </Container>
  );
});

export default Resume;
