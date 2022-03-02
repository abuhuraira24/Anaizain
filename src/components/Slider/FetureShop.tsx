import { Col, Container, Row } from "react-bootstrap";
import { FaAngleRight } from "react-icons/fa";
import camera from "../../assets/images/feture/camera.png";
import phone from "../../assets/images/feture/phone.png";
import tablet from "../../assets/images/feture/tablet.png";
import styles from "../../assets/styles/slider/slider.module.scss";

const FetureShop = () => {
  return (
    <>
      <div className={`${styles.fetureItems}`}>
        <Container fluid className="p-0">
          <Row>
            <Col className="col-12 col-xl-6 col-lg-6 col-md-6 col-sm-12">
              <div className={styles.img}>
                <img src={camera} alt="camera" />
              </div>
            </Col>
            <Col className="col-12 col-xl-6 col-lg-6 col-md-6 col-sm-12">
              <div className={styles.caption}>
                <div className={styles.title}>
                  <h5>
                    Catch Big <span>DEALS</span> on The Cameras
                  </h5>
                </div>
                <div className={styles.button}>
                  <span>Shop Now</span>
                  <FaAngleRight />
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
      <div className={styles.fetureItems}>
        <Container fluid className="p-0">
          <Row>
            <Col className="col-12 col-xl-6 col-lg-6 col-md-6 col-sm-12">
              <div className={styles.img}>
                <img src={phone} alt="camera" />
              </div>
            </Col>
            <Col className="col-12 col-xl-6 col-lg-6 col-md-6 col-sm-12">
              <div className={styles.caption}>
                <div className={styles.title}>
                  <h5>
                    Shop the <span>HOTTEST</span> Products
                  </h5>
                </div>
                <div className={styles.button}>
                  <span>Shop Now</span>
                  <FaAngleRight />
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
      <div className={styles.fetureItems}>
        <Container fluid className="p-0">
          <Row>
            <Col className="col-12 col-xl-6 col-lg-6 col-md-6 col-sm-12">
              <div className={styles.img}>
                <img src={tablet} alt="camera" />
              </div>
            </Col>
            <Col className="col-12 col-xl-6 col-lg-6 col-md-6 col-sm-12">
              <div className={styles.caption}>
                <div className={styles.title}>
                  <h5>
                    Tablets, Smartphones <span>& MORE</span>
                  </h5>
                </div>
                <div className={styles.button}>
                  <span>Shop Now</span>
                  <FaAngleRight />
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
    </>
  );
};

export default FetureShop;
