import styled from 'styled-components';
import { flex } from '@styles/theme';

export const Container = styled.ul`
    ${flex(null, null, 'column')}
    padding: 0;
    margin: 0;
`;

export const List = styled.li``;

export const Description = styled.p`
    font-size: 1rem;
`;

export const Title = styled.h3`
    margin-top: 2rem;
    font-weight: bolder;
    font-size: 1.6rem;
`;

export const Period = styled.span`
    display: block;
    margin: 1rem 0 2rem;
    font-size: 1rem;
`;
