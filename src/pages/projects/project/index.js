import React from 'react';
import Page from '../../../components/shared/page';
import ProjectHero from '../../../components/heroProject';
import ProjectOverview from '../../../components/projectOverview';

export default ({ project_name, project_address, ...rest }) => (
  <Page>
    <ProjectHero title={project_name} subTitle={project_address} />
    <ProjectOverview {...rest} />
  </Page>
);
