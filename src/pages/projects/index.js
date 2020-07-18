import React from 'react';
import { Route, Switch, Redirect, NavLink } from 'react-router-dom';
import Page from '../../components/shared/page';
import Map from './map';
import Timeline from './timeline';
import List from './list';
import Project from './project';

export default () => (
    <Page>
        <Route path="/projects/" exact>
            <Redirect to="/projects/map/" />
        </Route>

        <ul>
            <li><NavLink to="/projects/map/">Map</NavLink></li>
            <li><NavLink to="/projects/timeline/">Timeline</NavLink></li>
            <li><NavLink to="/projects/list/">List</NavLink></li>
        </ul>

        <Switch>
            <Route path="/projects/map/" component={Map} />
            <Route path="/projects/timeline/" component={Timeline} />
            <Route path="/projects/list/" component={List} />
            <Route path="/projects/:projectId/" component={Project} />
        </Switch>
    </Page>
);
