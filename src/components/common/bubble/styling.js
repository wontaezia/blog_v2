import styled from 'styled-components';

export const Container = styled.div`
    position: fixed;
    width: 100vw;
    height: 100vh;
    top: 0;
    left: 0;
    z-index: 9999;
    pointer-events: none;
`;

export const Canvas = styled.canvas`
    position: absolute;
    top: 0;
    left: 0;
    width: 100vw;
    height: 100vh;
    z-index: -10;
    filter: url(#gooey-react);
`;
