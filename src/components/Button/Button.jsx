import React from "react";
import Styles from "./Button.module.css";
const Button = ({ text }) => {
  return (
    <div>
      <button className={Styles.button}>{text}</button>
    </div>
  );
};

export default Button;
