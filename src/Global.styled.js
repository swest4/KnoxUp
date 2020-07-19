import React from "react";
import { Global, css } from "@emotion/core";

export default () => (
  <Global
    styles={css`
      body,
      html {
        margin: 0;
        padding: 0;
      }
      body {
        color: white;
        background: linear-gradient(45deg, #060321, #2d224f);
      }
    `}
  />
);
