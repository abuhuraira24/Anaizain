import React, { Component } from "react";
import { Button, Col, Container, Row } from "react-bootstrap";
import Slider from "react-slick";
import car from "../../assets/images/carosel/car.png";
import styles from "../../assets/styles/Carosel/carosel.module.scss";
class SimpleSlider extends Component {
  render() {
    const settings = {
      dots: false,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1,
    };
    return (
      <Container>
        <Row>
          <Col>
            <div>
              <Slider {...settings}>
                <div>
                  <div className={styles.items}>
                    <div className={styles.itemCation}>
                      <div className={styles.caption}>
                        <h4>Automobile</h4>
                        <p>
                          Lorem Ipsum is simply dummy text of the printing and
                          typesetting industry. Lorem Ipsum has been the
                          industry's standard dummy
                        </p>
                        <Button>BUY YOUR CAR</Button>
                      </div>
                    </div>
                    <div className={styles.itemImg}>
                      <img src={car} alt="car" />
                    </div>
                  </div>
                </div>
                <div>
                  <div className={styles.items}>
                    <div className={styles.itemCation}>
                      <div className={styles.caption}>
                        <h4>Automobile</h4>
                        <p>
                          Lorem Ipsum is simply dummy text of the printing and
                          typesetting industry. Lorem Ipsum has been the
                          industry's standard dummy
                        </p>
                        <Button>BUY YOUR CAR</Button>
                      </div>
                    </div>
                    <div className={styles.itemImg}>
                      <img src={car} alt="car" />
                    </div>
                  </div>
                </div>
              </Slider>
            </div>
          </Col>
        </Row>
      </Container>
    );
  }
}

export default SimpleSlider;
