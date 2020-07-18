import React from 'react';
import { Link } from 'react-router-dom';
import Styles from './styled';

export default () => <Styles>
    <p>Logo</p>
    <ul>
        <li>
            <Link to="/projects/">Projects</Link>

            <ul>
                <li><Link to="/projects/map/">Map</Link></li>
                <li><Link to="/projects/timeline/">Timeline</Link></li>
                <li><Link to="/projects/list/">List</Link></li>
            </ul>
        </li>
        <li><Link to="/contact/">Contact</Link></li>
    </ul>
</Styles>;