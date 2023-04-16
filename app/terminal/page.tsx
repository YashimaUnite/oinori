import React from "react";

import nLaneInstance from "../components/terminal/NLane";
import styles from "./page.module.css";

const Page = () => {
  return (
    <div>
      <div className={styles.title}>Terminal UI</div>
      <div className={styles.name}>{nLaneInstance.props.name}</div>
      <div className={styles.lanes}>
        {nLaneInstance.lanes.map((lane) => (
          <div key={lane.props.name} className={styles.laneName}>
            {lane.props.name}
          </div>
        ))}
      </div>
    </div>
  );
};


export default Page;
