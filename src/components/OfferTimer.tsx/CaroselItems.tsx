import { Carousel, Col, Container, Row } from "react-bootstrap";
import { FcBarChart } from "react-icons/fc";
import camera from "../../assets/images/TimerCarosel/camera.png";
import mobile from "../../assets/images/TimerCarosel/mobile.png";
import tablet from "../../assets/images/TimerCarosel/tablet.png";
import styles from "../../assets/styles/OfferTimer/timerpart.module.scss";
const CaroselItems = () => {
  return (
    <Container fluid className="p-0 msmt-2">
      <Row>
        <Col className="px-2">
          <div className={styles.singleItem}>
            <div className={styles.caroselTitle}>
              <FcBarChart />
              <h4>Online personalization center</h4>
            </div>
            <div className={styles.CaroselBody}>
              <Carousel className="mt-4 slider">
                <Row>
                  <Col className="col-4">
                    <div className={styles.caroselImg}>
                      <img src={mobile} alt="mobile" />
                    </div>
                    <div className={styles.itemCaption}>
                      <h5>Lorem ipsum</h5>
                      <p>
                        sit amet, consecteture adipisciing wlit. gravida vivera
                      </p>
                      <span>Gravida viverra </span>
                    </div>
                  </Col>
                  <Col className="col-4">
                    <div className={styles.caroselImg}>
                      <img src={camera} alt="camera" />
                    </div>
                    <div className={styles.itemCaption}>
                      <h5>Lorem ipsum</h5>
                      <p>
                        sit amet, consecteture adipisciing wlit. gravida vivera
                      </p>
                      <span>Gravida viverra </span>
                    </div>
                  </Col>
                  <Col className="col-4">
                    <div className={styles.caroselImg}>
                      <img src={tablet} alt="tablet" />
                    </div>
                    <div className={styles.itemCaption}>
                      <h5>Lorem ipsum</h5>
                      <p>
                        sit amet, consecteture adipisciing wlit. gravida vivera
                      </p>
                      <span>Gravida viverra </span>
                    </div>
                  </Col>
                </Row>
              </Carousel>
            </div>
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default CaroselItems;
