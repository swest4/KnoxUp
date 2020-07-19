import React from 'react';
import Page from '../../../components/shared/page';
import Timeline from '../../../components/timeline';

export default ({ projects = [] }) => (
  <Page>
    <p>Timeline Filters</p>
    <Timeline projects={projects} />
  </Page>
);
