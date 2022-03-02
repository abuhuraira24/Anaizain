import React, { Component } from "react";
import { Col, Container, Row } from "react-bootstrap";
import Slider from "react-slick";
import bag from "../../assets/images/shopping/bag.png";
import beauty from "../../assets/images/shopping/beauty.png";
import home from "../../assets/images/shopping/home.png";
import ring from "../../assets/images/shopping/ring.png";
import smartphone from "../../assets/images/shopping/smartphone.png";
import shirt from "../../assets/images/shopping/tshirt.png";
import styles from "../../assets/styles/shopping/shopping.module.scss";

export default class SimpleSlider extends Component {
  state = {
    w: 0,
  };

  render() {
    let w = window.innerWidth;
    if (w <= 1040) {
      w = 3;
    } else {
      w = 5;
    }
    const settings = {
      dots: false,
      infinite: true,
      speed: 500,
      slidesToShow: w,
      slidesToScroll: 1,
    };
    return (
      <div className={styles.shoppingCategories}>
        <Container>
          <Row>
            <Col>
              <div>
                <Slider {...settings}>
                  <div className={styles.item}>
                    <img src={shirt} alt="" />
                    <span>Home & Garden</span>
                  </div>
                  <div className={styles.item}>
                    <img src={bag} alt="" />
                    <span>Bags & accesories</span>
                  </div>
                  <div className={styles.item}>
                    <img src={smartphone} alt="" />
                    <span>phones & accesories</span>
                  </div>
                  <div className={styles.item}>
                    <img src={ring} alt="" />
                    <span>Jewelry</span>
                  </div>
                  <div className={styles.item}>
                    <img src={home} alt="" />
                    <span>Home & Garden</span>
                  </div>
                  <div className={styles.item}>
                    <img src={beauty} alt="" />
                    <span>Health & Beauty</span>
                  </div>
                </Slider>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}
