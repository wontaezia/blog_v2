import styled from 'styled-components';
import { motion } from 'framer-motion';
import { flex } from '@styles/theme';

export const Container = styled(motion.div)`
    position: relative;
    height: 100vh;
`;

export const Text = styled.div`
    position: absolute;
    top: 45%;
    left: 50%;
    transform: translate(-50%, -50%);
    font-size: 0;
    font-weight: 800;
    text-align: center;
    color: ${({ theme }) => theme.text};
`;

export const Inner = styled.div`
    position: absolute;
    top: 50%;
    left: 50%;
    ${flex('center')}
    width: 100%;
    max-width: 400px;
    transform: translate(-50%, -50%);
`;

export const MacBook = styled.div`
    max-width: 600px;
    opacity: 0;
`;

export const Icons = styled.div`
    position: absolute;
    ${flex('center', 'center')}

    bottom: 40%;

    svg {
        width: 30px;
        transform: translateY(65%);
        opacity: 0;
    }

    svg + svg {
        margin-left: 0.6rem;
    }
    svg:nth-of-type(even) {
        position: relative;
        top: 16px;
    }
`;
