import React from 'react';
import Page from '../../../components/shared/page';
import ProjectHero from '../../../components/heroProject';

export default ({ project_name, project_address, end_date, ...rest }) =>
  console.log(rest) || (
    <Page>
      <ProjectHero title={project_name} subTitle={project_address} />
      <p style={{ minHeight: '100vh' }}>Project Overview</p>
    </Page>
  );
