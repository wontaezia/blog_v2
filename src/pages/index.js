import React, { forwardRef } from 'react';
import Home from '@components/home';

const Main = forwardRef((props, ref) => {
  return <Home ref={ref} />;
});

export default Main;
