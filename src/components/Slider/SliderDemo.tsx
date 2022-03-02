import { Col, Container, Row } from "react-bootstrap";
import mobile from "../../assets/images/feture/mobile.png";
import styles from "../../assets/styles/slider/slider.module.scss";

const SliderDemo = () => {
  return (
    <div className={styles.sliderDemos}>
      <Container>
        <Row>
          <Col className="col-12 col-md-12 d-flex justify-content-between">
            <Row className="width-100">
              <Col className="col-3 col-lg-3 col-sm-3 col-6">
                <div className={styles.item}>
                  <div className={styles.demoimg}>
                    <img src={mobile} alt="mobile" />
                  </div>
                  <div className="demotitle">
                    <h5>Mobile Phone & Accessories</h5>
                  </div>
                </div>
              </Col>
              <Col className="col-3 col-lg-3 col-sm-3 col-6">
                <div className={styles.item}>
                  <div className={styles.demoimg}>
                    <img src={mobile} alt="mobile" />
                  </div>
                  <div className="demotitle">
                    <h5>Mobile Phone & Accessories</h5>
                  </div>
                </div>
              </Col>
              <Col className="col-3 col-lg-3 col-sm-3 col-6">
                <div className={styles.item}>
                  <div className={styles.demoimg}>
                    <img src={mobile} alt="mobile" />
                  </div>
                  <div className="demotitle">
                    <h5>Mobile Phone & Accessories</h5>
                  </div>
                </div>
              </Col>
              <Col className="col-3 col-lg-3 col-sm-3 col-6">
                <div className={styles.item}>
                  <div className={styles.demoimg}>
                    <img src={mobile} alt="mobile" />
                  </div>
                  <div className="demotitle">
                    <h5>Mobile Phone & Accessories</h5>
                  </div>
                </div>
              </Col>
            </Row>
            {/* <div className={styles.item}>
              <div className={styles.demoimg}>
                <img src={mobile} alt="mobile" />
              </div>
              <div className="demotitle">
                <h5>Mobile Phone & Accessories</h5>
              </div>
            </div>
            <div className={styles.item}>
              <div className={styles.demoimg}>
                <img src={mobile} alt="mobile" />
              </div>
              <div className="demotitle">
                <h5>Mobile Phone & Accessories</h5>
              </div>
            </div>
            <div className={styles.item}>
              <div className={styles.demoimg}>
                <img src={mobile} alt="mobile" />
              </div>
              <div className="demotitle">
                <h5>Mobile Phone & Accessories</h5>
              </div>
            </div> */}
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default SliderDemo;
