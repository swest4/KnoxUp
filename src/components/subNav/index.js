import React, { createRef, useEffect, useState } from 'react';
import { NavLink } from 'react-router-dom';
import { useInView } from 'react-intersection-observer';
import Styles from './styled';

export default ({ links = [] }) => {
  const [indicatorStyles, setIndicatorStyles] = useState({
    width: 0,
    left: '50%',
    opacity: 0,
  });
  const listRef = createRef(null);
  const [ref, inView] = useInView({ threshold: 0.25, triggerOnce: true });

  useEffect(() => {
    const activeChild = listRef.current.querySelector('.active');
    const { offsetWidth: width = 0, offsetLeft: left = '50%' } =
      activeChild || {};

    if (indicatorStyles.width !== width || indicatorStyles.left !== left) {
      setIndicatorStyles({
        width,
        left,
        opacity: activeChild ? 1 : 0,
      });
    }
  });

  return (
    <Styles ref={ref} className={inView ? 'active' : ''}>
      <ul ref={listRef}>
        {links.map(({ to, title }, i) => (
          <li key={to} style={{ transitionDelay: `${i * 0.2}s` }}>
            <NavLink to={to}>{title}</NavLink>
          </li>
        ))}
      </ul>
      <div className="indicator" style={indicatorStyles} />
    </Styles>
  );
};
