import React from 'react';
import { skills } from '@assets/data';
import * as S from '@components/resume/skill/styling';

const Skill = () => {
  return (
    <S.Container>
      {skills.map(({ id, title, description }) => (
        <S.List className="skill" key={id}>
          <S.Title>
            <S.Text>{title}</S.Text>
          </S.Title>
          <p>{description}</p>
        </S.List>
      ))}
    </S.Container>
  );
};

export default Skill;
