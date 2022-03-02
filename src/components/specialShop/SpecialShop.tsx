import { Col, Container, Row } from "react-bootstrap";
import { FaStar } from "react-icons/fa";
import remot from "../../assets/images/speciashop/remot.png";
import laptop from "../../assets/images/topretedshop/laptop.png";
import styles from "../../assets/styles/specialshop/specialshop.module.scss";
import Shopping from "./Shopping";

const SpecialShop = () => {
  return (
    <div className={styles.specialshop}>
      <Container>
        <Row>
          <Col className="col-xxl-3 col-md-3 col-sm-12 col-12">
            <div className={styles.item}>
              <div className={styles.specialOffer}>
                <div className={styles.offerprice}>
                  <span>
                    <span className="text-light">Save</span>
                    <h6>$20.00</h6>
                  </span>
                </div>
              </div>
              <div className={styles.speacialimg}>
                <span>Special offer</span>
                <img src={remot} alt="remot" />
              </div>
              <div className={styles.specialcaption}>
                <div className={styles.specialbtn}>
                  <h6>Game Console Controner + USB 3.0 cable</h6>
                  <span className={styles.pricebtn}>
                    $ 79.00 <span className={styles.rotet}>$ 119.00</span>{" "}
                  </span>
                </div>
              </div>
              <div className={styles.progressbar}>
                <div className={styles.prog}>
                  <span></span>
                </div>
                <div className={styles.available}>
                  <span>
                    Already Sold : <span>70</span>
                  </span>
                  <span>
                    Available : <span>28</span>
                  </span>
                </div>
              </div>
              <div className={styles.timer}>
                <h6>Hurry Up! Offer Ends In :</h6>
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
              </div>
            </div>

            {/*=== ferure shop ===*/}
            <div className={styles.feturitems}>
              <div className={styles.fetureShop}>
                <Row>
                  <Col className="col-xxl-6 col-md-12 col-sm-6 col-6">
                    <div className={styles.singleFetureImg}>
                      <img src={laptop} alt="laptop" />
                    </div>
                  </Col>
                  <Col className="col-xxl-6 col-md-12 col-sm-6 col-6">
                    <div className={styles.caption}>
                      <h6>Notebook Black spire Nitro VN7-591G</h6>
                      <ul className={styles.star}>
                        <li>
                          <FaStar />
                        </li>
                        <li>
                          <FaStar />
                        </li>
                        <li>
                          <FaStar />
                        </li>
                        <li>
                          <FaStar />
                        </li>
                      </ul>
                      <h4>24900.00 CFA</h4>
                    </div>
                  </Col>
                </Row>
              </div>
              <div className={styles.fetureShop}>
                <Row>
                  <Col className="col-xxl-6 col-md-12 col-sm-6 col-6">
                    <div className={styles.singleFetureImg}>
                      <img src={laptop} alt="laptop" />
                    </div>
                  </Col>
                  <Col className="col-xxl-6 col-md-12 col-sm-6 col-6">
                    <div className={styles.caption}>
                      <h6>Notebook Black spire Nitro VN7-591G</h6>
                      <ul className={styles.star}>
                        <li>
                          <FaStar />
                        </li>
                        <li>
                          <FaStar />
                        </li>
                        <li>
                          <FaStar />
                        </li>
                        <li>
                          <FaStar />
                        </li>
                      </ul>
                      <h4>24900.00 CFA</h4>
                    </div>
                  </Col>
                </Row>
              </div>
              <div className={styles.fetureShop}>
                <Row>
                  <Col className="col-xxl-6 col-md-12 col-sm-6 col-6">
                    <div className={styles.singleFetureImg}>
                      <img src={laptop} alt="laptop" />
                    </div>
                  </Col>
                  <Col className="col-xxl-6 col-md-12 col-sm-6 col-6">
                    <div className={styles.caption}>
                      <h6>Notebook Black spire Nitro VN7-591G</h6>
                      <ul className={styles.star}>
                        <li>
                          <FaStar />
                        </li>
                        <li>
                          <FaStar />
                        </li>
                        <li>
                          <FaStar />
                        </li>
                        <li>
                          <FaStar />
                        </li>
                      </ul>
                      <h4>24900.00 CFA</h4>
                    </div>
                  </Col>
                </Row>
              </div>
            </div>
          </Col>
          <Col className="col-xxl-9 col-md-9 col-sm-12 col-12">
            <div className="specialshop">
              <div className={styles.header}>
                <div className={styles.headerbtn}>
                  <span>Top Ranked</span>
                </div>
                <div className={styles.menu}>
                  <span>Top Rabked</span>
                  <span>Top Rabked</span>
                </div>
              </div>
              <div className="items">
                <Container fluid className="p-0">
                  <Row>
                    <Col className="col-xxl-3 col-lg-3 col-md-4 col-sm-6 col-12">
                      <Shopping />
                    </Col>
                    <Col className="col-xxl-3 col-lg-3 col-md-4 col-sm-6 col-12">
                      <Shopping />
                    </Col>
                    <Col className="col-xxl-3 col-lg-3 col-md-4 col-sm-6 col-12">
                      <Shopping />
                    </Col>
                    <Col className="col-xxl-3 col-lg-3 col-md-4 col-sm-6 col-12">
                      <Shopping />
                    </Col>
                    <Col className="col-xxl-3 col-lg-3 col-md-4 col-sm-6 col-12">
                      <Shopping />
                    </Col>
                    <Col className="col-xxl-3 col-lg-3 col-md-4 col-sm-6 col-12">
                      <Shopping />
                    </Col>
                    <Col className="col-xxl-3 col-lg-3 col-md-4 col-sm-6 col-12 sm-d-none ">
                      <Shopping />
                    </Col>
                    <Col className="col-xxl-3 col-lg-3 col-md-4 col-sm-6 col-12 sm-d-none ">
                      <Shopping />
                    </Col>
                    <Col className="col-xxl-3 col-lg-3 col-md-4 col-sm-6 col-12 sm-d-none ">
                      <Shopping />
                    </Col>
                    <Col className="col-xxl-3 col-lg-3 col-md-4 col-sm-6 col-12 sm-d-none ">
                      <Shopping />
                    </Col>
                    <Col className="col-xxl-3 col-lg-3 col-md-4 col-sm-6 col-12 sm-d-none ">
                      <Shopping />
                    </Col>
                    <Col className="col-xxl-3 col-lg-3 col-md-4 col-sm-6 col-12 sm-d-none ">
                      <Shopping />
                    </Col>
                    <Col className="col-xxl-3 col-lg-3 col-md-4 col-sm-6 col-12 sm-d-none ">
                      <Shopping />
                    </Col>
                    <Col className="col-xxl-3 col-lg-3 col-md-4 col-sm-6 col-12 sm-d-none ">
                      <Shopping />
                    </Col>
                    <Col className="col-xxl-3 col-lg-3 col-md-4 col-sm-6 col-12 sm-d-none ">
                      <Shopping />
                    </Col>
                    <Col className="col-xxl-3 col-lg-3 col-md-4 col-sm-6 col-12 ">
                      <Shopping />
                    </Col>
                  </Row>
                </Container>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default SpecialShop;
