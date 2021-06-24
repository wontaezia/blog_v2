import styled from 'styled-components';
import { device, colors, flex } from '@styles/theme';

export const MainTitle = styled.h1`
    position: relative;
    padding-bottom: 3rem;
    margin: 18rem 0 0;
    font-weight: 700;
    font-size: 5rem;
    line-height: 1.333;
    overflow: hidden;
    letter-spacing: -0.06em;

    div:first-of-type {
        position: relative;
        display: block;
        color: ${({ theme }) => theme.text};

        span {
            opacity: 0;
            display: inline-block;
            transform: translateY(50%);
        }
    }
`;

export const Line = styled.div`
    position: absolute;
    left: 0;
    bottom: 0;
    width: 100%;
    height: 1px;
    background: ${colors.gray[800]};
`;

export const Container = styled.div`
    .mailto {
        opacity: 0;
    }
`;

export const Mail = styled.div`
    margin-top: 3rem;
    font-size: 1.5rem;
    color: ${({ theme }) => theme.text};
    text-decoration: underline;

    @media ${device.tablet} {
        font-size: 5rem;
    }
`;
