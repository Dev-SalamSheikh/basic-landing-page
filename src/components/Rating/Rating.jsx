import React from "react";
import Styles from "./Rating.module.css";
import Heading from "../Heading/Heading";
import { Row, Col, Container } from "react-bootstrap";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
// import required modules
import { Pagination, Navigation } from "swiper";

const Rating = () => {
  return (
    <div className={Styles.rating}>
      <Heading title="Recent Customer Reviews" subTitle="Overall Rating: 4.9" />
      <Container>
        <Row>
          <Col md={12}>
            <Swiper
              slidesPerView={3}
              spaceBetween={30}
              slidesPerGroup={3}
              loop={true}
              loopFillGroupWithBlank={true}
              pagination={{
                clickable: true,
              }}
              navigation={true}
              modules={[Pagination, Navigation]}
              className="mySwiper"
            >
              <SwiperSlide>
                <div className={Styles.ratingContent}>
                  <div className={Styles.ratingIcons}>
                    <i class="fa-solid fa-star"></i>
                    <i class="fa-solid fa-star"></i>
                    <i class="fa-solid fa-star"></i>
                    <i class="fa-solid fa-star"></i>
                    <i class="fa-solid fa-star"></i>
                    <span>5.0</span>
                  </div>
                  <p className={Styles.desc}>
                    Paula Lixie is the best. this is my 4th trip with Liberty
                    Travels. I will always use them because of Paula. I have
                    also told several friends about the wonderful service'
                  </p>
                  <div className="author">
                    <p className="m-0" style={{ fontWeight: "500" }}>
                      Becky M.
                    </p>
                    <p>8/19/22</p>
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className={Styles.ratingContent}>
                  <div className={Styles.ratingIcons}>
                    <i class="fa-solid fa-star"></i>
                    <i class="fa-solid fa-star"></i>
                    <i class="fa-solid fa-star"></i>
                    <i class="fa-solid fa-star"></i>
                    <i class="fa-solid fa-star"></i>
                    <span>5.0</span>
                  </div>
                  <p className={Styles.desc}>
                    Paula Lixie is the best. this is my 4th trip with Liberty
                    Travels. I will always use them because of Paula. I have
                    also told several friends about the wonderful service'
                  </p>
                  <div className="author">
                    <p className="m-0" style={{ fontWeight: "500" }}>
                      Becky M.
                    </p>
                    <p>8/19/22</p>
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className={Styles.ratingContent}>
                  <div className={Styles.ratingIcons}>
                    <i class="fa-solid fa-star"></i>
                    <i class="fa-solid fa-star"></i>
                    <i class="fa-solid fa-star"></i>
                    <i class="fa-solid fa-star"></i>
                    <i class="fa-solid fa-star"></i>
                    <span>5.0</span>
                  </div>
                  <p className={Styles.desc}>
                    Paula Lixie is the best. this is my 4th trip with Liberty
                    Travels. I will always use them because of Paula. I have
                    also told several friends about the wonderful service'
                  </p>
                  <div className="author">
                    <p className="m-0" style={{ fontWeight: "500" }}>
                      Becky M.
                    </p>
                    <p>8/19/22</p>
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className={Styles.ratingContent}>
                  <div className={Styles.ratingIcons}>
                    <i class="fa-solid fa-star"></i>
                    <i class="fa-solid fa-star"></i>
                    <i class="fa-solid fa-star"></i>
                    <i class="fa-solid fa-star"></i>
                    <i class="fa-solid fa-star"></i>
                    <span>5.0</span>
                  </div>
                  <p className={Styles.desc}>
                    Paula Lixie is the best. this is my 4th trip with Liberty
                    Travels. I will always use them because of Paula. I have
                    also told several friends about the wonderful service'
                  </p>
                  <div className="author">
                    <p className="m-0" style={{ fontWeight: "500" }}>
                      Becky M.
                    </p>
                    <p>8/19/22</p>
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className={Styles.ratingContent}>
                  <div className={Styles.ratingIcons}>
                    <i class="fa-solid fa-star"></i>
                    <i class="fa-solid fa-star"></i>
                    <i class="fa-solid fa-star"></i>
                    <i class="fa-solid fa-star"></i>
                    <i class="fa-solid fa-star"></i>
                    <span>5.0</span>
                  </div>
                  <p className={Styles.desc}>
                    Paula Lixie is the best. this is my 4th trip with Liberty
                    Travels. I will always use them because of Paula. I have
                    also told several friends about the wonderful service'
                  </p>
                  <div className="author">
                    <p className="m-0" style={{ fontWeight: "500" }}>
                      Becky M.
                    </p>
                    <p>8/19/22</p>
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className={Styles.ratingContent}>
                  <div className={Styles.ratingIcons}>
                    <i class="fa-solid fa-star"></i>
                    <i class="fa-solid fa-star"></i>
                    <i class="fa-solid fa-star"></i>
                    <i class="fa-solid fa-star"></i>
                    <i class="fa-solid fa-star"></i>
                    <span>5.0</span>
                  </div>
                  <p className={Styles.desc}>
                    Paula Lixie is the best. this is my 4th trip with Liberty
                    Travels. I will always use them because of Paula. I have
                    also told several friends about the wonderful service'
                  </p>
                  <div className="author">
                    <p className="m-0" style={{ fontWeight: "500" }}>
                      Becky M.
                    </p>
                    <p>8/19/22</p>
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className={Styles.ratingContent}>
                  <div className={Styles.ratingIcons}>
                    <i class="fa-solid fa-star"></i>
                    <i class="fa-solid fa-star"></i>
                    <i class="fa-solid fa-star"></i>
                    <i class="fa-solid fa-star"></i>
                    <i class="fa-solid fa-star"></i>
                    <span>5.0</span>
                  </div>
                  <p className={Styles.desc}>
                    Paula Lixie is the best. this is my 4th trip with Liberty
                    Travels. I will always use them because of Paula. I have
                    also told several friends about the wonderful service'
                  </p>
                  <div className="author">
                    <p className="m-0" style={{ fontWeight: "500" }}>
                      Becky M.
                    </p>
                    <p>8/19/22</p>
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className={Styles.ratingContent}>
                  <div className={Styles.ratingIcons}>
                    <i class="fa-solid fa-star"></i>
                    <i class="fa-solid fa-star"></i>
                    <i class="fa-solid fa-star"></i>
                    <i class="fa-solid fa-star"></i>
                    <i class="fa-solid fa-star"></i>
                    <span>5.0</span>
                  </div>
                  <p className={Styles.desc}>
                    Paula Lixie is the best. this is my 4th trip with Liberty
                    Travels. I will always use them because of Paula. I have
                    also told several friends about the wonderful service'
                  </p>
                  <div className="author">
                    <p className="m-0" style={{ fontWeight: "500" }}>
                      Becky M.
                    </p>
                    <p>8/19/22</p>
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className={Styles.ratingContent}>
                  <div className={Styles.ratingIcons}>
                    <i class="fa-solid fa-star"></i>
                    <i class="fa-solid fa-star"></i>
                    <i class="fa-solid fa-star"></i>
                    <i class="fa-solid fa-star"></i>
                    <i class="fa-solid fa-star"></i>
                    <span>5.0</span>
                  </div>
                  <p className={Styles.desc}>
                    Paula Lixie is the best. this is my 4th trip with Liberty
                    Travels. I will always use them because of Paula. I have
                    also told several friends about the wonderful service'
                  </p>
                  <div className="author">
                    <p className="m-0" style={{ fontWeight: "500" }}>
                      Becky M.
                    </p>
                    <p>8/19/22</p>
                  </div>
                </div>
              </SwiperSlide>
            </Swiper>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Rating;
