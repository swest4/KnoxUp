import React from 'react';
import { Global, css } from '@emotion/core';

export default () => (
    <Global styles={
        css`
            body, html {
                margin: 0;
                padding: 0;
            }
        `
    } />
)