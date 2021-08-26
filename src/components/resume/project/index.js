import React from 'react';
import Link from 'next/link';
import { projects } from '@assets/data';
import * as S from '@components/resume/project/styling';

const Project = () => {
  return (
    <S.Container>
      {projects.map(
        ({
          id,
          title,
          period,
          team,
          description,
          whatIDid,
          techStack,
          links,
        }) => (
          <S.Inner key={id}>
            <S.Title>
              <span>
                {title}
                <span className="marker"></span>
              </span>
              <S.Links>
                {links.github && (
                  <a href={links.github} rel="noreferrer" target="_blank">
                    Github &gt;
                  </a>
                )}
                {links.posting && (
                  <Link href={links.posting}>
                    <a>블로그 포스팅 &gt;</a>
                  </Link>
                )}
              </S.Links>
            </S.Title>
            <S.Detail>
              <li>
                <span>작업 기간</span>
                <span>{period}</span>
              </li>
              <li>
                <span>참여 인원</span>
                <span>{team}</span>
              </li>
              <li>
                <span>설명</span>
                <div>
                  {description.map((paragraph, index) => (
                    <p key={index}>{paragraph}</p>
                  ))}
                </div>
              </li>
              <S.WhatIDid>
                <span>구현 내용</span>
                <ul>
                  {whatIDid.map((line, index) => (
                    <li key={index}>{line}</li>
                  ))}
                </ul>
              </S.WhatIDid>
              <S.TechStack>
                <span>기술 스택</span>
                <ul>
                  {techStack.map((stack, index) => (
                    <li key={index}>{stack}</li>
                  ))}
                </ul>
              </S.TechStack>
            </S.Detail>
          </S.Inner>
        ),
      )}
    </S.Container>
  );
};

export default Project;
