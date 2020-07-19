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
        background: linear-gradient(183deg, #000000, #22135b);
      }
    `}
  />
);
