import styled from 'styled-components';
import { flex, colors, device } from '@styles/theme';

export const Container = styled.div`
    ${flex(null, null, 'column')}
`;

export const Inner = styled.div`
    ul {
        padding: 0;
    }
`;

export const Title = styled.h3`
    ${flex(null, 'flex-start', 'column')}
    flex-wrap: wrap;
    margin-top: 2rem;
    font-weight: bolder;
    font-size: 1.6rem;
    line-height: 1.5;

    > span {
        position: relative;
        overflow-x: hidden;

        .marker {
            content: '';
            position: absolute;
            bottom: 0;
            left: 0;
            display: inline-block;
            width: 100%;
            height: 0.6rem;
            margin-top: 0.2rem;
            margin-right: 0.5em;
            background: ${colors.primary};
            transform: translateX(-100%);
            z-index: -1;
        }
    }

    @media ${device.tablet} {
        ${flex(null, 'center', 'row')}
    }
`;

export const Detail = styled.ul`
    padding: 2rem 0 1rem 1rem;

    & > li {
        ${flex(null, 'flex-start', 'column')}
        display: flex;
        flex-direction: column;
        padding: 0.5rem 0;

        span,
        p,
        li {
            font-size: 1rem;
        }

        p {
            margin: 0;
        }

        p + p {
            margin-top: 10px;
        }
    }

    span:first-child {
        padding-bottom: 0.8rem;
        min-width: 14rem;
        font-weight: 600;
        font-size: 1.2rem;
    }

    @media ${device.tablet} {
        & > li {
            flex-direction: row;
        }

        span:first-child {
            padding-bottom: 0;
        }
    }
`;

export const WhatIDid = styled.li`
    li::before {
        content: '- ';
    }

    li {
        line-height: 2;
    }
`;

export const TechStack = styled.li`
    ul {
        display: flex;
        flex-wrap: wrap;
    }

    li {
        margin-right: 2rem;
    }
`;

export const Links = styled.div`
    ${flex(null, 'center')}

    a {
        font-size: 0.8rem;
        text-transform: uppercase;
        padding: 0.2rem 0.4rem;
        background: ${({ theme }) => theme.text};
        color: ${({ theme }) => theme.background};
        margin-top: 0.4rem;

        &:first-child {
            margin: 0.4rem 1.6rem 0 0rem;
        }
    }

    @media ${device.tablet} {
        a:first-child {
            margin-left: 2rem;
        }
    }
`;
