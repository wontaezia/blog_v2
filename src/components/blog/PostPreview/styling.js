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

    a {
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

export const PostCount = styled.h4`
    position: relative;
    font-weight: 700;
    font-size: 1.2rem;
    text-align: right;
    color: ${({ theme }) => theme.text};

    &::before {
        content: ${({ tag }) => `'${tag ? `#${tag}` : ''}'`};
        display: ${({ tag }) => (tag ? 'inline-block' : 'none')};
        padding: 0.6rem;
        margin: 1rem 1rem 0 0;
        background: ${colors.primary};
        color: ${colors.black};
        font-size: 1.2rem;
    }
`;

export const PostList = styled.ul`
    display: grid;
    grid-template-columns: repeat(1, 1fr);
    gap: 3rem;
    margin: 0;
    padding: 0;
    padding-bottom: 10rem;
    margin-top: 10rem;
    color: ${({ theme }) => theme.text};

    @media ${device.tablet} {
        grid-template-columns: repeat(2, 1fr);
    }
`;

export const Post = styled.li`
    position: relative;
    overflow: hidden;
    z-index: 1;

    &.post0,
    &.post1 {
        opacity: 0;
        transform: translateY(20%);
    }

    & > a::before {
        content: '';
        display: none;
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 30rem;
        background: rgba(0, 0, 0, 0.14);
        transition: all 1s;
        opacity: 1;
        z-index: 2;
    }

    & > a:hover img {
        transform: scale(1.2);
    }

    & > a:hover::before {
        opacity: 0;
    }

    @media ${device.tablet} {
        & > a::before {
            display: block;
        }
    }
`;

export const Loading = styled.div`
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: ${({ theme }) => theme.text};
    transform: translateY(-120%);
    z-index: 3;
`;

export const Thumbnail = styled.div`
    background-color: #fff;

    &:hover div {
        opacity: 1;
    }

    img {
        width: 100%;
        height: 30rem;
        object-fit: cover;
        transition: transform 0.4s ease-out;
    }
`;

export const Text = styled.div`
    padding: 1.6rem 0;
`;

export const Title = styled.h3`
    display: -webkit-box;
    margin-bottom: 0.8rem;
    color: ${({ theme }) => theme.text};
    font-weight: bold;
    font-size: 1.2rem;
    line-height: 1.333;
    transition: color 0.3s ease-in-out 0s;
    word-break: keep-all;
    text-overflow: ellipsis;
    overflow-wrap: normal;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
    white-space: normal;
    overflow: hidden;
`;

export const CreateAt = styled.span`
    color: ${colors.gray[400]};
    font-weight: 500;
    font-size: 1rem;
    opacity: 0.33;
`;

export const Tags = styled.ul`
    ${flex('flex-start')}
    flex-wrap: wrap;
    margin: 0;
    padding: 0;
    margin: 1rem 0 1rem;

    li {
        margin-right: 1rem;
        color: ${colors.gray[600]};
        font-weight: 500;
        font-size: 1rem;
        line-height: 1.6;

        a {
            color: inherit;
        }

        &:hover {
            color: ${colors.primary};
        }

        &::before {
            content: '#';
        }
    }
`;
