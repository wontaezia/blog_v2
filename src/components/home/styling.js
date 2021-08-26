import styled from 'styled-components';
import { device, flex } from '@styles/theme';

export const Container = styled.div`
  position: relative;
  ${flex('center', 'center')}
  flex-direction: column;
  width: 100%;
  height: 100vh;
  font-size: 2.4rem;
  letter-spacing: -0.2rem;
  line-height: 1.4;
  text-align: center;
  font-weight: 500;

  div:not(.work) {
    display: flex;
    color: ${({ theme }) => theme.text};
    overflow: hidden;
  }

  /* iOS only */
  @supports (-webkit-touch-callout: none) {
    height: -webkit-fill-available;
  }

  @media ${device.mobile} {
  }
`;

export const Hello = styled.div`
  transform: translateY(60%);

  span {
    transform: translateY(100%);
  }
`;

export const Introduce = styled.div`
  opacity: 0;
  transform: translateY(60%);

  .bold {
    font-weight: bold;
    margin-right: 6px;
  }
`;
