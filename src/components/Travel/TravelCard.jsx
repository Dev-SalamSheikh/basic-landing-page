import React from "react";
import Styles from "./TravelCard.module.css";

const TravelCard = ({
  Image,
  color,
  city,
  country,
  desc,
  los,
  price,
  bottomCity,
  bottomCountry,
  bottomDesc,
  bottomLos,
  bottomPrice,
}) => {
  return (
    <div className={Styles.travelCard}>
      <div className={Styles.travelImage}>
        <img src={Image} alt="TravelImage" />
      </div>
      <div style={{ backgroundColor: `${color}` }}>
        <div className={Styles.info}>
          <div className={Styles.infoLeft}>
            <span>{city}</span>
            <h3>{country}</h3>
            <div className={Styles.icons}>
              <i class="fa-solid fa-plane-up"></i>
              <i class="fa-solid fa-bed"></i>
              <i class="fa-solid fa-bus"></i>
              <i class="fa-solid fa-martini-glass"></i>
            </div>
          </div>
          <div className={Styles.infoRight}>
            <p>{desc}</p>
            <p className={Styles.los}>{los}</p>
            <p className={Styles.cost}>from {price}</p>
          </div>
        </div>
        <div className={Styles.hrDiv}>
          <hr />
        </div>
        <div className={Styles.infoBottom}>
          <div className={Styles.infoBottomLeft}>
            <span>{bottomCity}</span>
            <h3>{bottomCountry}</h3>
            <div className={Styles.icons}>
              <i class="fa-solid fa-plane-up"></i>
              <i class="fa-solid fa-bed"></i>
              <i class="fa-solid fa-bus"></i>
              <i class="fa-solid fa-martini-glass"></i>
            </div>
          </div>
          <div className={Styles.infoBottomRight}>
            <p>{bottomDesc}</p>
            <p className={Styles.los}>{bottomLos}</p>
            <p className={Styles.cost}>{bottomPrice}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TravelCard;
