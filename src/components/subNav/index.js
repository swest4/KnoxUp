import React from 'react';
import { NavLink } from 'react-router-dom';
import Styles from './styled';

export default ({
    links = []
}) => (
    <Styles>
        <ul>
            {
                links.map(
                    ({ to, title }) => (
                        <li key={to}>
                            <NavLink to={to}>{title}</NavLink>
                        </li>
                    )
                )
            }
        </ul>
    </Styles>
);