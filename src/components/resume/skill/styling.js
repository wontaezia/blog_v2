import styled, { css } from 'styled-components';
import { flex } from '@styles/theme';

export const Container = styled.ul`
    padding: 0;
`;

export const List = styled.li`
    font-size: 1.6rem;

    p {
        font-size: 1rem;
        line-height: 1.5;
    }
`;

export const Title = styled.div`
    ${flex(null, 'center')}
    margin: 2rem 0 1rem;
`;

export const Text = styled.h3`
    margin-right: 1rem;
    font-weight: bolder;
    font-size: 1.6rem;
`;
