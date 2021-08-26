import { forwardRef } from 'react';
import * as S from '@components/home/styling.js';

const Home = forwardRef((props, ref) => {
  return (
    <S.Container ref={ref}>
      <S.Hello className="hello">
        <span>안</span>
        <span>녕</span>
        <span>하</span>
        <span>세</span>
        <span>요</span>
      </S.Hello>
      <S.Introduce className="introduce">
        <div className="bold">성장하는 </div> 개발자 정원태입니다.
      </S.Introduce>
    </S.Container>
  );
});

export default Home;
