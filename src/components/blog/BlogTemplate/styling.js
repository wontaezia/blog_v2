import styled from 'styled-components';
import { motion } from 'framer-motion';
import { flex, device, colors } from '@styles/theme';

export const Container = styled.div`
    max-width: 46rem;
    padding: 12rem 0 16rem;
    margin: 0 auto;
    font-size: 1rem;
    line-height: 1.3;

    p,
    ul {
        padding: 0;
        margin: 0;
    }
`;

export const Title = styled.h1`
    ${flex(null, 'center')}
    margin-bottom: 0;
    font-weight: 700;
    font-size: 2rem;
    line-height: 1.2;
    cursor: text;
    opacity: 0;
    transform: translateY(50%);

    @media ${device.tablet} {
        font-size: 4rem;
    }
`;

export const Info = styled.div`
    ${flex(null, 'center')}
    margin: 2rem 0 4rem;
    color: ${colors.gray[500]};
    font-size: 0.85rem;

    span {
        transform: translateY(2rem);
        opacity: 0;
    }

    span:nth-of-type(3) {
        margin: 0 0.3rem;
    }
`;

export const Icon = styled.span`
    ${flex('center', 'center')}
    width: 2rem;
    height: 2rem;
    margin-right: 1rem;
    background-color: ${({ theme }) => theme.text};
    color: ${({ theme }) => theme.background};
    border-radius: 50%;
    font-size: 0.8rem;
    font-weight: 700;
`;

export const Body = styled(motion.div)`
    line-height: 1.5;

    code {
        position: relative;

        &::before {
            content: '';
            position: absolute;
            bottom: -2px;
            left: 0;
            display: block;
            width: 100%;
            height: 4px;
            background: ${colors.primary};
            z-index: -1;
        }
    }

    ul,
    li,
    ol {
        list-style: initial;
    }

    img {
        width: 100%;
        margin: 2rem 0;
    }

    .thumbnail {
        height: 30rem;
        object-fit: cover;
    }

    iframe {
        width: 100%;
    }

    a {
        position: relative;
        padding: 0 4px;
        background-color: ${colors.primary};
        color: ${({ theme }) => theme.text};
        font-size: 0.8rem;
    }

    pre {
        padding: 2rem 0;
        margin-bottom: 2rem;
    }

    pre code {
        width: 100%;
    }

    h2,
    h3,
    h4 {
        padding: 1rem 0;
        margin: 2rem auto 3rem;
        border-bottom: 0.1rem solid rgba(0, 0, 0, 0.1);
    }

    h2 {
        font-size: 2rem;
    }

    h3 {
        font-size: 1.4rem;
    }

    h4 {
        font-size: 1.2rem;
    }

    h5 {
        font-size: 1rem;
        margin: 3rem auto 3rem;
    }

    p {
        font-size: 0.9rem;
        line-height: 1.6;
    }

    p.box {
        padding: 2rem 3rem;
        margin-bottom: 2rem;
        border: 1px solid ${({ theme }) => theme.text};
        border-left: 0.5rem solid ${({ theme }) => theme.text};
        background: ${({ theme }) => theme.background};
        color: ${({ theme }) => theme.text};
        font-size: 0.9rem;

        b {
            display: block;
            margin-bottom: 2rem;
            font-size: 1.4rem;
        }

        .point {
            color: ${({ theme }) => theme.$darkGray};
            font-size: 1rem;
        }
    }

    li {
        position: relative;
        left: 20px;
        padding: 0.4rem;
        font-size: 14px;
        word-break: break-all;

        &::before {
            content: '';
            position: absolute;
            top: 1.4rem;
            left: -20px;
            display: inline-block;
            width: 6px;
            height: 6px;
            background: ${({ theme }) => theme.$black};
            border-radius: 50%;
        }
    }

    figcaption {
        margin-top: -2rem;
        font-size: 0.8rem;
    }

    figcaption a {
        color: ${({ theme }) => theme.$darkGray};
        font-weight: 700;
    }

    .youtube {
        position: relative;
        width: 100%;
        padding-bottom: 100%;

        iframe {
            position: absolute;
            width: 100%;
            height: calc(100% / 16 * 9);
        }
    }
`;
