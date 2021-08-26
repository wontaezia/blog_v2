import styled from 'styled-components';
import { device, colors } from '@styles/theme';

export const CanvasContainer = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;
  z-index: -1;
`;

export const PostCount = styled.h4`
  position: relative;
  margin: 18rem 0 1rem;
  color: ${({ theme }) => theme.text};
  font-weight: 700;
  font-size: 1.2rem;
  text-align: right;
`;

export const PostList = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: 4em 1.4em;
  margin: 1rem 0 18rem;

  @media (min-width: 500px) {
    grid-template-columns: 1fr 1fr;
  }

  @media ${device.tablet} {
    grid-template-columns: 1fr 1fr 1fr;
  }
`;

export const Post = styled.div``;

export const Thumbnail = styled.div`
  position: relative;
  align-self: center;
  justify-self: start;

  img {
    width: 100%;
    display: block;
    opacity: 0;
  }
`;

export const Info = styled.div`
  display: block;
  align-self: center;
  justify-self: end;
  text-decoration: none;
  padding: 1.6rem 0;
`;

export const PublishedAt = styled.span`
  display: block;
  color: ${colors.gray[500]};
  font-weight: 500;
  font-size: 0.8rem;
  opacity: 0.33;
  margin-bottom: 0.4em;
`;

export const Title = styled.h2`
  display: -webkit-box;
  margin-bottom: 0.8rem;
  color: ${({ theme }) => theme.text};
  font-weight: bold;
  font-size: 1rem;
  line-height: 1.333;
  transition: color 0.3s ease-in-out 0s;
  word-break: keep-all;
  text-overflow: ellipsis;
  overflow-wrap: normal;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  white-space: normal;
  overflow: hidden;

  @media ${device.desktop} {
    font-size: 1.2rem;
  }
`;
