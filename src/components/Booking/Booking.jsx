import React from "react";
import Styles from "./Booking.module.css";
import { Container, Row, Col } from "react-bootstrap";
// Import Booking Image
import Image from "../assets/booking.jpg";
import Button from "../Button/Button";

const Booking = () => {
  return (
    <div className={Styles.booking}>
      <Container className={Styles.Maincontainer}>
        <Row>
          <Col md={4} className="p-0 sm-p-3">
            <img src={Image} className={Styles.image} alt="BookingImage" />
          </Col>
          <Col md={8} className={Styles.contentContainer}>
            <div>
              <h2>Ready to go? We got you!</h2>
              <p className={Styles.para}>
                Whether it’s to set sail, explore Mexico, or indulge in the
                Caribbean, at Liberty Travel we make it easy to get you going on
                the best vacation... ever! From helping families make memories
                to romantic rendezvous our travel pros provide the expert
                guidance and superior service you need right now.
              </p>
              <Button text="Book Now" />
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Booking;
