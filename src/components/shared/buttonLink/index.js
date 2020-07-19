import React from "react";
import Styles from "./styled";

export default ({ children, to = "" }) => <Styles href={to}>{children}</Styles>;
