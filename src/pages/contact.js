import React, { forwardRef } from 'react';
import * as S from '@components/contact/styling';

const Contact = forwardRef((props, ref) => {
  return (
    <div ref={ref}>
      <S.Container>
        <a href="mailto:wontae1206@gmail.com">
          <S.Mail className="mailto">wontae1206@gmail.com</S.Mail>
        </a>
      </S.Container>
    </div>
  );
});

export default Contact;
