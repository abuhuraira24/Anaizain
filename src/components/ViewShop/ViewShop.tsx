import { Col, Container, Row } from "react-bootstrap";
import { FaAngleRight } from "react-icons/fa";
import bag from "../../assets/images/viewShop/bag.png";
import cap from "../../assets/images/viewShop/cap.png";
import shart from "../../assets/images/viewShop/shart.png";
import tupi from "../../assets/images/viewShop/tupi.png";
import styles from "../../assets/styles/viewShop/ViewShop.module.scss";
const ViewShop = () => {
  return (
    <div className={styles.viewShop}>
      <Container className={styles.bgshop}>
        <Row>
          <Col className={styles.bgshop}>
            <div className={styles.viewShopTitle}>
              <h5>360° view Shops</h5>
              <span>
                See All <FaAngleRight />
              </span>
            </div>
            <div className={styles.shopBody}>
              <Row>
                <Col
                  className={`col-xxl-3 col-md-3 col-sm-6 ${styles.shopBody}`}
                >
                  <div className={styles.item}>
                    <div className={styles.itemimg}>
                      <img src={shart} alt="shart" />
                    </div>
                    <div className={styles.shopCaption}>
                      <h5>Leather Wear</h5>
                      <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Adipiscing dictum a tempor, aliquet{" "}
                      </p>
                    </div>
                  </div>
                </Col>
                <Col
                  className={`col-xxl-3 col-md-3 col-sm-6 ${styles.shopBody}`}
                >
                  <div className={styles.item}>
                    <div className={styles.itemimg}>
                      <img src={bag} alt="bag" />
                    </div>
                    <div className={styles.shopCaption}>
                      <h5>Bag Shop</h5>
                      <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Adipiscing dictum a tempor, aliquet{" "}
                      </p>
                    </div>
                  </div>
                </Col>
                <Col
                  className={`col-xxl-3 col-md-3 col-sm-6 ${styles.shopBody}`}
                >
                  <div className={styles.item}>
                    <div className={styles.itemimg}>
                      <img src={cap} alt="cap" />
                    </div>
                    <div className={styles.shopCaption}>
                      <h5>Tent Shop</h5>
                      <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Adipiscing dictum a tempor, aliquet{" "}
                      </p>
                    </div>
                  </div>
                </Col>
                <Col
                  className={`col-xxl-3 col-md-3 col-sm-6 ${styles.shopBody}`}
                >
                  <div className={styles.item}>
                    <div className={styles.itemimg}>
                      <img src={tupi} alt="tupi" />
                    </div>
                    <div className={styles.shopCaption}>
                      <h5>Cap shop</h5>
                      <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Adipiscing dictum a tempor, aliquet{" "}
                      </p>
                    </div>
                  </div>
                </Col>
              </Row>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default ViewShop;
