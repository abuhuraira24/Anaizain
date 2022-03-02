import React, { Component } from "react";
import { Col, Container, Row } from "react-bootstrap";
import Slider from "react-slick";
import car from "../../assets/images/verified/car.png";
import styles from "../../assets/styles/verifiedCompany/verified.module.scss";
export default class SimpleSlider extends Component {
  render() {
    const showItem = () => {
      let show = window.innerWidth;
      if (show <= 1040) {
        show = 2;
      } else if (show <= 500) {
        show = 1;
      } else {
        show = 3;
      }
      return show;
    };
    console.log(showItem());
    window.addEventListener("scroll", showItem);

    const settings = {
      dots: false,
      infinite: true,
      speed: 500,
      slidesToShow: showItem(),
      slidesToScroll: 1,
    };
    return (
      <div className={styles.slickCarosel}>
        <Container>
          <Row>
            <Col>
              <div className={styles.title}>
                <h5>VERIFIED COMPANIES</h5>
              </div>
            </Col>
          </Row>
          <Row>
            <Col>
              <div>
                <Slider {...settings}>
                  <div>
                    <div className={styles.items}>
                      <div className={styles.item}>
                        <div className={styles.img}>
                          <img src={car} alt="car" />
                        </div>
                        <div className={styles.caption}>
                          <h5>Vetements Bien Finis Avec Des Design À La</h5>
                          <p>
                            High Quality A AMI LEVEL 3 blue green Disposable
                            sterile 60 gms
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div>
                    <div className={styles.items}>
                      <div className={styles.item}>
                        <div className={styles.img}>
                          <img src={car} alt="car" />
                        </div>
                        <div className={styles.caption}>
                          <h5>Vetements Bien Finis Avec Des Design À La</h5>
                          <p>
                            High Quality A AMI LEVEL 3 blue green Disposable
                            sterile 60 gms
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div>
                    <div className={styles.items}>
                      <div className={styles.item}>
                        <div className={styles.img}>
                          <img src={car} alt="car" />
                        </div>
                        <div className={styles.caption}>
                          <h5>Vetements Bien Finis Avec Des Design À La</h5>
                          <p>
                            High Quality A AMI LEVEL 3 blue green Disposable
                            sterile 60 gms
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div>
                    <div className={styles.items}>
                      <div className={styles.item}>
                        <div className={styles.img}>
                          <img src={car} alt="car" />
                        </div>
                        <div className={styles.caption}>
                          <h5>Vetements Bien Finis Avec Des Design À La</h5>
                          <p>
                            High Quality A AMI LEVEL 3 blue green Disposable
                            sterile 60 gms
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div>
                    <div className={styles.items}>
                      <div className={styles.item}>
                        <div className={styles.img}>
                          <img src={car} alt="car" />
                        </div>
                        <div className={styles.caption}>
                          <h5>Vetements Bien Finis Avec Des Design À La</h5>
                          <p>
                            High Quality A AMI LEVEL 3 blue green Disposable
                            sterile 60 gms
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div>
                    <div className={styles.items}>
                      <div className={styles.item}>
                        <div className={styles.img}>
                          <img src={car} alt="car" />
                        </div>
                        <div className={styles.caption}>
                          <h5>Vetements Bien Finis Avec Des Design À La</h5>
                          <p>
                            High Quality A AMI LEVEL 3 blue green Disposable
                            sterile 60 gms
                          </p>
                        </div>
                      </div>
                    </div>
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
