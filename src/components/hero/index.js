import React from "react";
import { useInView } from "react-intersection-observer";
import Styles from "./styled";

export default () => {
  const [ref, inView] = useInView({ threshold: 0.25, triggerOnce: true });
  return (
    <Styles ref={ref} className={inView ? "active" : ""}>
      <div>
        <h1>KnoxUp</h1>
        <h2>Upgrades to Knoxville</h2>
      </div>
      <div className="buildingWrap">
        <figure>
          <img src="/WhiteLily.svg" alt="White Lily Building" />
        </figure>
        <figure>
          <img src="/Elkmont.svg" alt="Elkmont Building" />
        </figure>
        <figure>
          <img src="/Sullivans.svg" alt="Sullivans Building" />
        </figure>
        <figure>
          <img src="/Embassy.svg" alt="Embassy Building" />
        </figure>
      </div>
    </Styles>
  );
};
