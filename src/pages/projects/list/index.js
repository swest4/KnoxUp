import React from 'react';
import Page from '../../../components/shared/page';
import ProjectsList from '../../../components/projectsList';

export default ({ projects = [] }) => (
  <Page>
    <ProjectsList projects={projects} />
  </Page>
);
