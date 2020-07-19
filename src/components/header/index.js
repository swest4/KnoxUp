import React from 'react';
import { NavLink } from 'react-router-dom';
import { useInView } from 'react-intersection-observer';
import Styles from './styled';
import Logo from '../../svgs/Logo';
import BusinessIcon from '../../svgs/business';
import ExploreIcon from '../../svgs/explore';
import TimelineIcon from '../../svgs/timeline';
import ListIcon from '../../svgs/list';
import EmailIcon from '../../svgs/email';

export default () => {
  const [ref, inView] = useInView({ threshold: 0.25, triggerOnce: true });

  return (
    <Styles ref={ref} className={inView ? 'active' : ''}>
      <ul>
        <li>
          <NavLink to="/" exact>
            <Logo className="logo" />
            <p>Home</p>
          </NavLink>
        </li>

        <li>
          <NavLink to="/projects/">
            <BusinessIcon />
            <p>Projects</p>
          </NavLink>

          <ul>
            <li>
              <NavLink to="/projects/map/">
                <ExploreIcon />
                <p>Map</p>
              </NavLink>
            </li>
            <li>
              <NavLink to="/projects/timeline/">
                <TimelineIcon />
                <p>Timeline</p>
              </NavLink>
            </li>
            <li>
              <NavLink to="/projects/list/">
                <ListIcon />
                <p>List</p>
              </NavLink>
            </li>
          </ul>
        </li>

        <li>
          <NavLink to="/contact/">
            <EmailIcon />
            <p>Contact</p>
          </NavLink>
        </li>
      </ul>
    </Styles>
  );
};
