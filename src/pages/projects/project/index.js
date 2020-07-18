import React from 'react';
import Page from '../../../components/shared/page';

export default ({ match: { params: { projectId = false } = {} } = {} }) => (
    <Page>
        <p>Project Hero - {projectId}</p>
        <p>Project Overview</p>
    </Page>
);
