import React from 'react';
import { useInView } from 'react-intersection-observer';
import Styles from './styled';

export default ({ columnOne, columnTwo, columnThree }) => {
  const [ref, inView] = useInView({ threshold: 0.25, triggerOnce: true });

  return (
    <Styles ref={ref} className={inView ? 'active' : ''}>
      <div className="inner">
        <div className="column">{columnOne}</div>
        <div className="column">{columnTwo}</div>
        <div className="column">{columnThree}</div>
      </div>
    </Styles>
  );
};
