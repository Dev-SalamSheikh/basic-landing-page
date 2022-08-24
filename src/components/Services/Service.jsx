import React from "react";
import Styles from "./Service.module.css";
import { Container, Row, Col } from "react-bootstrap";
import ServiceCard from "./ServiceCard";
// Service Images Import
import Image1 from "../assets/service.png";
import Image2 from "../assets/service2.png";
import Image3 from "../assets/service3.png";
import Image4 from "../assets/service4.png";

const Service = () => {
  return (
    <div className={Styles.service}>
      <Container>
        <Row>
          {/* Service Card No 1 */}
          <Col md={3} sm={6}>
            <ServiceCard
              img={Image1}
              title="Guidence"
              desc="Expert insight & travel knowledge"
            />
          </Col>

          {/* Service Card No 2 */}
          <Col md={3} sm={6}>
            <ServiceCard
              img={Image2}
              title="Value"
              desc="Irresistible rates, offers & benefits"
            />
          </Col>

          {/* Service Card No 3 */}
          <Col md={3} sm={6}>
            <ServiceCard
              img={Image3}
              title="Peace of Mind"
              desc="Reassurance to book with confidence"
            />
          </Col>

          {/* Service Card No 4 */}
          <Col md={3} sm={6}>
            <ServiceCard
              img={Image4}
              title="Service"
              desc="Beside you every step of the way"
            />
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Service;
