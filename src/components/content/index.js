import React from 'react';
import { useInView } from 'react-intersection-observer';
import Styles from './styled';

export default ({ children, align = 'center' }) => {
  const [ref, inView] = useInView({ threshold: 0.87, triggerOnce: true });

  return (
    <Styles ref={ref} className={inView ? 'active' : ''} align={align}>
      <div className="inner">{children}</div>
    </Styles>
  );
};
