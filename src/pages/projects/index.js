import React from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import Page from '../../components/shared/page';
import SubNav from '../../components/subNav';
import Map from './map';
import Timeline from './timeline';
import List from './list';
import Project from './project';
import useRdsData from '../../hooks/useRdsData';
import toKebabCase from '../../utils/toKebabCase';

const navItems = [
  {
    to: '/projects/map/',
    title: 'Map',
  },
  {
    to: '/projects/timeline/',
    title: 'Timeline',
  },
  {
    to: '/projects/list/',
    title: 'List',
  },
];

export default () => {
  const projects = useRdsData();

  return (
    <Page>
      <Route path="/projects/" exact>
        <Redirect to="/projects/map/" />
      </Route>

      <SubNav links={navItems} />

      <Switch>
        <Route path="/projects/map/">
          <Map projects={projects} />
        </Route>
        <Route path="/projects/timeline/">
          <Timeline projects={projects} />
        </Route>
        <Route path="/projects/list/">
          <List projects={projects} />
        </Route>
        <Route path="/projects/:projectId/">
          {({ match }) => {
            const project =
              projects &&
              projects.filter(
                ({ project_name }) =>
                  toKebabCase(project_name) === match.params.projectId
              )[0];

            return project ? <Project {...project} /> : null;
          }}
        </Route>
      </Switch>
    </Page>
  );
};
