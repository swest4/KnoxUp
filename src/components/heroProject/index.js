import React from "react";
import { useInView } from "react-intersection-observer";
import Styles from "./styled";

export default ({ title = "", subTitle = "", children }) => {
  const [ref, inView] = useInView({ threshold: 0.25, triggerOnce: true });

  return (
    <Styles ref={ref} className={inView ? "active" : ""}>
      <div className="inner">
        <h1>{title}</h1>
        <h2>{subTitle}</h2>
        {children}
      </div>
    </Styles>
  );
};
