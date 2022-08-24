import React from "react";
import Styles from "./Hero.module.css";
import { Carousel } from "react-bootstrap";
// Images For Carousel
import Image1 from "../assets/caro1.jpg";
import Image2 from "../assets/caro2.jpg";
import Image3 from "../assets/caro3.jpg";

const Hero = () => {
  return (
    // Carousel Items

    <div className={Styles.hero}>
      {/*  Carousel 1 */}
      <Carousel className="carousel">
        <Carousel.Item className="item" interval={3000}>
          <img
            className="d-block w-100"
            src={Image1}
            alt="First slide"
            width="100%"
            height="650px"
          />
          <Carousel.Caption className={Styles.caption}>
            <h1>First slide Title</h1>
            <h4>Nulla vitae elit libero, a pharetra augue mollis interdum.</h4>
          </Carousel.Caption>
        </Carousel.Item>

        {/* Carousel 2 */}
        <Carousel.Item interval={3000}>
          <img
            className="d-block w-100"
            src={Image2}
            alt="First slide"
            width="100%"
            height="650px"
          />
          <Carousel.Caption className={Styles.caption}>
            <h1>Second slide Title</h1>
            <h4>Nulla vitae elit libero, a pharetra augue mollis interdum.</h4>
          </Carousel.Caption>
        </Carousel.Item>

        {/* Carousel 2 */}
        <Carousel.Item interval={3000}>
          <img
            className="d-block w-100"
            src={Image3}
            alt="First slide"
            width="100%"
            height="650px"
          />
          <Carousel.Caption className={Styles.caption}>
            <h1>Third slide Title</h1>
            <h4>Nulla vitae elit libero, a pharetra augue mollis interdum.</h4>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </div>
  );
};

export default Hero;
