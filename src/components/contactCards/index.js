import React from 'react';
import { useInView } from 'react-intersection-observer';
import Styles from './styled';
import EmailIcon from '../../svgs/email';
import LinkedInIcon from '../../svgs/linkedIn';
import TwitterIcon from '../../svgs/twitter';

const icons = {
  email: <EmailIcon />,
  linkedin: <LinkedInIcon />,
  twitter: <TwitterIcon />,
};

export default ({ contacts = [] }) => {
  const [ref, inView] = useInView({ threshold: 0.25, triggerOnce: true });

  return (
    <Styles ref={ref} className={inView ? 'active' : ''}>
      <div className="inner">
        {contacts.map(({ name, social }) => (
          <div className="card">
            <h4>{name}</h4>
            <ul>
              {social.map(({ type, value }) => (
                <li key={value}>
                  <a
                    href={type === 'email' ? `mailto:${value}` : value}
                    target={type === 'email' ? '_self' : '_blank'}
                    rel="noopener noreferrer">
                    {icons[type]}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </Styles>
  );
};
