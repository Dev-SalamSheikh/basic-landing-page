import React from "react";
import Styles from "./Service.module.css";

const ServiceCard = ({ img, title, desc }) => {
  return (
    <div className={Styles.serviceCard}>
      <div className="serviceImage">
        <img src={img} alt={title} />
      </div>
      <div className={Styles.serviceHeading}>
        <h1>
          <a href="*">{title}</a>
        </h1>
      </div>
      <div className="serviceDesc">
        <p>{desc}</p>
      </div>
    </div>
  );
};

export default ServiceCard;
