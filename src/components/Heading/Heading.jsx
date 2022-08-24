import React from "react";
import Styles from "./Heading.module.css";

const Heading = ({ title, subTitle }) => {
  return (
    <div className={Styles.heading}>
      <h2>{title}</h2>
      <p>{subTitle}</p>
    </div>
  );
};

export default Heading;
