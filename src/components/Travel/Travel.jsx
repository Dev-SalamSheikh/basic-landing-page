import React from "react";
import Heading from "../Heading/Heading";
import { Container, Row, Col } from "react-bootstrap";
import Styles from "./Travel.module.css";
import TravelCard from "./TravelCard";
// Import Images for Travel
import Image from "../assets/travel.jpg";
import Image2 from "../assets/travel2.jpg";
import Image3 from "../assets/travel3.jpg";

const Travel = () => {
  return (
    <div className={Styles.travel}>
      <Heading
        title="Travel Favorites"
        subTitle="Need help deciding where to go next? Take a look at some of our travelers’ recommended vacations."
      />
      <Container>
        <Row>
          <Col md={4}>
            <TravelCard
              Image={Image}
              color="#263374"
              city="Riviera Maya"
              country="MEXICO"
              desc="La Casa de la Playa | Air & Vacation Package"
              los="4 nights"
              price="$4,665"
              bottomCity="Riviera Maya"
              bottomCountry="Mexico"
              bottomDesc="El Dorado Seaside Suites | Air & Vacation Package"
              bottomLos="4 nights"
              bottomPrice="$1,079"
            />
          </Col>
          <Col md={4}>
            <TravelCard
              Image={Image2}
              color="#CC242A"
              city="Riviera Maya"
              country="MEXICO"
              desc="La Casa de la Playa | Air & Vacation Package"
              los="4 nights"
              price="$4,665"
              bottomCity="Riviera Maya"
              bottomCountry="Mexico"
              bottomDesc="El Dorado Seaside Suites | Air & Vacation Package"
              bottomLos="4 nights"
              bottomPrice="$1,079"
            />
          </Col>
          <Col md={4}>
            <TravelCard
              Image={Image3}
              color="#0BA8E0"
              city="Riviera Maya"
              country="MEXICO"
              desc="La Casa de la Playa | Air & Vacation Package"
              los="4 nights"
              price="$4,665"
              bottomCity="Riviera Maya"
              bottomCountry="Mexico"
              bottomDesc="El Dorado Seaside Suites | Air & Vacation Package"
              bottomLos="4 nights"
              bottomPrice="$1,079"
            />
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Travel;
