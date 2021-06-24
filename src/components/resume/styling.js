import styled from 'styled-components';
import { device, colors } from '@styles/theme';

export const Container = styled.div`
    padding-bottom: 10rem;

    > p {
        font-size: 1.4rem;
        line-height: 1;
    }
`;

export const Introduce = styled.p`
    &.introduce {
        opacity: 0;
        transform: translateY(90%);
        font-size: 1.2rem;
        line-height: 1.5;
    }

    > span {
        position: relative;
        overflow-x: hidden;
    }

    .introduce--marker {
        position: absolute;
        bottom: 0;
        left: 0;
        display: inline-block;
        width: 100%;
        height: 0.6rem;
        margin-top: 0.2rem;
        margin-right: 0.5em;
        background: ${colors.primary};
        transform: scaleX(0);
        transform-origin: left;
        z-index: -1;
    }
`;

export const Title = styled.h1`
    padding-bottom: 3rem;
    margin: 18rem 0 8rem;
    font-weight: 700;
    font-size: 3rem;
    line-height: 1.333;
    opacity: 0;
    transform: translateY(50%);

    br {
        display: block;
    }

    @media ${device.tablet} {
        font-size: 5rem;
        br {
            display: none;
        }
    }
`;

export const Subhead = styled.h2`
    margin: 6rem 0 4rem;

    &.subhead--introduce {
        transform: translateY(50%);
        opacity: 0;
    }
    &.subhead--projects {
        transform: translateY(80%);
        opacity: 0;
    }

    &:not(:first-child) {
        margin-top: 8rem;
    }

    font-size: 2.8rem;
    font-weight: bolder;
    color: ${({ theme }) => theme.$mainColor};
`;
