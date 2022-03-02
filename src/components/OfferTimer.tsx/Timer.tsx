import { Col, Container, Row } from "react-bootstrap";
import hand from "../../assets/images/offertimer/hand.png";
import styles from "../../assets/styles/OfferTimer/timerpart.module.scss";

const Timer = () => {
  return (
    <div className={styles.timer}>
      <Container>
        <Row>
          <Col className="col-7"></Col>
          <Col className="col-5">
            <span className={styles.offertitle}>Hurry Up! Offer Ends In :</span>
          </Col>
        </Row>

        <Row>
          <Col className="col-12">
            <div className={styles.shoppinOfferTimer}>
              <Row className=".sm-w-100">
                <Col className="col-lg-6 col-xxl-6 p-0 col-md-12">
                  {/* timer image */}
                  <div className={styles.image}>
                    <img src={hand} alt="hand" />
                    <span>Deals of the week</span>
                  </div>
                </Col>
                <Col className="col-lg-6 col-xxl-6 p-0 col-md-12">
                  {/* timer part */}
                  <div className={styles.timerPart}>
                    <div className={styles.counter}>
                      <span>
                        <span>06</span>
                        <p>HOURS</p>
                      </span>
                      <p>:</p>
                      <span>
                        <span>06</span>
                        <p>MENS</p>
                      </span>
                      <p>:</p>
                      <span>
                        <span>06</span>
                        <p>SEC</p>
                      </span>
                    </div>
                    <div className={styles.btnTitle}>
                      <h6>Game Console Controner USB 3.0 cable </h6>
                      <div className={styles.price}>
                        <span>$ 79.00</span>
                        <p>$ 19.00</p>
                      </div>
                      <span className="d-block">
                        <span>Available : </span>
                        <span>
                          Solid : <p>70</p>
                        </span>
                      </span>
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

export default Timer;
