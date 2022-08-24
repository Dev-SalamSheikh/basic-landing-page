import React from "react";
import Styles from "./Footer.module.css";
import { Row, Col, Container } from "react-bootstrap";
import Button from "../Button/Button";

const Footer = () => {
  return (
    <div className={Styles.footer}>
      <div className={Styles.wrapContainer}>
        <Container>
          <Row>
            <Col md={4} className={Styles.footerLogoContainer}>
              <div className={Styles.footerLogo}>
                <span>Logo Here</span>
              </div>
              <div className={Styles.footerLogoContent}>
                <p>Don't miss out on travel deals</p>
                <p className={Styles.footerDesc}>
                  Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                  Quasi quia corrupti debitis quisquam? Sunt tempore atque, sit
                  omnis quos nulla.
                </p>
                <div className={Styles.footerBtn}>
                  <Button text="Subscribe" />
                </div>
              </div>
            </Col>
            <Col md={2}>
              <div className={Styles.socialLinks}>
                <span className={Styles.title}>FIND US</span>
                <div className="socialLink">
                  <ul>
                    <li>
                      <i class="fa-brands fa-square-facebook"></i>{" "}
                      <a href="*">Facebook</a>
                    </li>
                    <li>
                      <i class="fa-brands fa-instagram"></i>{" "}
                      <a href="*">Instagram</a>
                    </li>
                    <li>
                      <i class="fa-brands fa-pinterest"></i>{" "}
                      <a href="*">Pinterest</a>
                    </li>
                    <li>
                      <i class="fa-brands fa-twitter"></i>{" "}
                      <a href="*">Twitter</a>
                    </li>
                    <li>
                      <i class="fa-brands fa-youtube"></i>{" "}
                      <a href="*">Youtube</a>
                    </li>
                  </ul>
                </div>
              </div>
            </Col>
            <Col md={2}>
              <div className={Styles.siteLinks}>
                <span className={Styles.title}>SITE LINKS</span>
                <div className="socialLink">
                  <ul>
                    <li>
                      <a href="*">Traveler Resources Hub</a>
                    </li>
                    <li>
                      <a href="*">Corporate Social Responsibility</a>
                    </li>
                    <li>
                      <a href="*">Careers</a>
                    </li>
                    <li>
                      <a href="*">Our Brands</a>
                    </li>
                    <li>
                      <a href="*">Newsroom</a>
                    </li>
                    <li>
                      <a href="*">Frequently Asked Questions</a>
                    </li>
                    <li>
                      <a href="*">Liberty Travel Gift Cards</a>
                    </li>
                    <li>
                      <a href="*">About</a>
                    </li>
                    <li>
                      <a href="*">Liberty's Top Choices</a>
                    </li>
                    <li>
                      <a href="*">Contact Us</a>
                    </li>
                  </ul>
                </div>
              </div>
            </Col>
            <Col md={2}>
              <div className={Styles.siteLinks}>
                <span className={Styles.title}>VACATION TYPES</span>
                <div className="socialLink">
                  <ul>
                    <li>
                      <a href="*">Traveler Resources Hub</a>
                    </li>
                    <li>
                      <a href="*">Last Minute</a>
                    </li>
                    <li>
                      <a href="*">AboHoneymoonut</a>
                    </li>
                    <li>
                      <a href="*">Golf & Spa</a>
                    </li>
                    <li>
                      <a href="*">Family</a>
                    </li>
                    <li>
                      <a href="*">Exotic</a>
                    </li>
                    <li>
                      <a href="*">Casino</a>
                    </li>
                    <li>
                      <a href="*">Beach</a>
                    </li>
                    <li>
                      <a href="*">All Inclusive</a>
                    </li>
                    <li>
                      <a href="*">Adults Only</a>
                    </li>
                  </ul>
                </div>
              </div>
            </Col>
            <Col md={2}>
              <div className={Styles.siteLinks}>
                <span className={Styles.title}>DESTINATIONS</span>
                <div className="socialLink">
                  <ul>
                    <li>
                      <a href="*">USA</a>
                    </li>
                    <li>
                      <a href="*">Mexico</a>
                    </li>
                    <li>
                      <a href="*">Europe</a>
                    </li>
                    <li>
                      <a href="*">Central America</a>
                    </li>
                    <li>
                      <a href="*">South America</a>
                    </li>
                    <li>
                      <a href="*">South Pacific</a>
                    </li>
                    <li>
                      <a href="*">Australia</a>
                    </li>
                    <li>
                      <a href="*">Indian Ocean</a>
                    </li>
                    <li>
                      <a href="*">Asia</a>
                    </li>
                    <li>
                      <a href="*">Africa</a>
                    </li>
                    <li>
                      <a href="*">Middle East</a>
                    </li>
                    <li>
                      <a href="*">Antarctica</a>
                    </li>
                  </ul>
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
    </div>
  );
};

export default Footer;
