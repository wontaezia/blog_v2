import React from 'react';
import { experiences } from '@assets/data';
import * as S from '@components/resume/experience/styling';

function Expreience() {
    return (
        <S.Container>
            {experiences.map(({ id, title, period, description }) => (
                <S.List className="expreience" key={id}>
                    <S.Title>{title}</S.Title>
                    <S.Period>{period}</S.Period>
                    <S.Description>{description}</S.Description>
                </S.List>
            ))}
        </S.Container>
    );
}

export default Expreience;
