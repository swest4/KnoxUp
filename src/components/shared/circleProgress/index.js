import React from 'react';
import Styles from './styled';

export default ({ children }) => (
  <Styles className="circle_progress">
    <div className="children">{children}</div>
  </Styles>
);
