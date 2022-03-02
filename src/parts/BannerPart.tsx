import { Col, Container, Row } from "react-bootstrap";
import girl from "../assets/images/banner/girl.png";
import styles from "../assets/styles/Banner/banner.module.scss";

const BannerPart = () => {
  return (
    <div className={styles.banner}>
      <Container className={styles.bannerBg}>
        <Row>
          <Col className="col-4">
            <div className={styles.caption}>
              <span>Shop and</span>
              <h3>SAVE BIG</h3>

              <span className={styles.dash}>on hottest tablets</span>
            </div>
          </Col>
          <Col className="col-4">
            <div className={styles.button}>
              <p className={styles.subTitel}>Starting at</p>
              <span>
                $79
                <p className={styles.ninteen}>99</p>
              </span>
            </div>
          </Col>
          <Col className="col-4">
            <div className={styles.bannerImg}>
              <img src={girl} alt="girl" />
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default BannerPart;
