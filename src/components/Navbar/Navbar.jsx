import React, { useState } from "react";
import Styles from "./Navbar.module.css";
import { Container, Row, Col } from "react-bootstrap";

const Navbar = () => {
  const [showMenu, setshowMenu] = useState(false);
  return (
    <div className={Styles.navbar}>
      <Container fluid>
        <Row>
          <Col md={3} sm={6}>
            <div className={Styles.logoSection}>
              <span className={Styles.logo}>Logo Here</span>
            </div>
          </Col>
          <Col md={6} sm={6}>
            <div className={Styles.searchBar}>
              <input
                className={Styles.input}
                type="text"
                placeholder="Looking for Something..?"
              />
              <button className={Styles.button}>Search</button>
            </div>
          </Col>
          <Col md={3}>
            <div className={Styles.menu}>
              {!showMenu ? (
                <i
                  class="fa-solid fa-bars"
                  onClick={() => setshowMenu(!showMenu)}
                ></i>
              ) : (
                ""
              )}
              {showMenu && (
                <div className={Styles.menuItem}>
                  <span
                    className={Styles.close}
                    onClick={() => setshowMenu(false)}
                  >
                    <i class="fa-solid fa-xmark"></i>
                  </span>
                  <ul>
                    <li>
                      <span>Travel</span>
                    </li>
                    <li>
                      <a href="*">Vacations</a>
                    </li>
                    <li>
                      <a href="*">Destinations</a>
                    </li>
                    <li>
                      <a href="*">Irresistible Offer</a>
                    </li>
                    <li>
                      <a href="*">Travel</a>
                    </li>
                    <li>
                      <a href="*">More</a>
                    </li>
                  </ul>
                  <ul>
                    <li>
                      <span>Contact with Us</span>
                    </li>
                    <li>
                      <a href="*">
                        <i class="fa-solid fa-location-dot"></i> Find a Store
                      </a>
                    </li>
                    <li>
                      {" "}
                      <a href="*">
                        <i class="fa-solid fa-user-tie"></i> Find an Expert
                      </a>
                    </li>
                    <li>
                      <a href="*">
                        <i class="fa-solid fa-phone"></i> Call Us
                      </a>
                    </li>
                    <li>
                      <a href="*">
                        <i class="fa-solid fa-envelope"></i> Email Us
                      </a>
                    </li>
                  </ul>
                </div>
              )}
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Navbar;
