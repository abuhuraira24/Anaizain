import {
  Button,
  Col,
  Container,
  Form,
  FormControl,
  Row,
} from "react-bootstrap";
import {
  FaFacebookSquare,
  FaInstagram,
  FaLinkedin,
  FaTwitterSquare,
} from "react-icons/fa";
import appStore from "../../assets/images/footer/appstore.png";
import playStore from "../../assets/images/footer/playstore.png";
import styles from "../../assets/styles/footer/footer.module.scss";

const Footer = () => {
  return (
    <footer className={styles.largeFooter}>
      <Container>
        <div className={styles.footer}>
          <Row>
            <Col>
              <div className={styles.seachbar}>
                <Form className="d-flex position-relative w-50 left-25">
                  <FormControl
                    type="search"
                    className={styles.searchpanle}
                    aria-label="Search"
                  />
                  <Button className={styles.button}>Search</Button>
                </Form>
                <p>
                  Trade Alert: Delivering the latest product trends and industry
                  straight to your inbox
                </p>
              </div>
            </Col>
          </Row>
          <div className={styles.foooterInfo}>
            <Row>
              <Col className="col-lg-8 col-md-8 mt-5">
                <Row>
                  <Col className="col-lg-4">
                    <div className={styles.info}>
                      <h5>Get to Know Us </h5>

                      <ul>
                        <li>About Anaizan</li>
                        <li>About Anaizan Group</li>
                        <li> Careers</li>
                        <li>Blog</li>
                        <li>Investor Relations</li>
                      </ul>
                    </div>
                  </Col>
                  <Col className="col-lg-4">
                    <div className={styles.info}>
                      <h5> Sell on Anaizan.com </h5>
                      <ul>
                        <li>Learning Center</li>
                        <li> Partner Program</li>
                      </ul>
                    </div>
                  </Col>
                  <Col className="col-lg-4">
                    <div className={styles.info}>
                      <h5>Customer Services</h5>

                      <ul>
                        <li> Help Center</li>
                        <li>Contact Us</li>
                        <li> Report Abuse</li>
                        <li>Submit a Dispute</li>
                        <li>Policies & Rules</li>
                      </ul>
                    </div>
                  </Col>
                </Row>
                <Row className="mt-5">
                  <Col className="col-lg-4">
                    <div className={styles.info}>
                      <h5> Make Money with Us</h5>

                      <ul>
                        <li> Become a Partner</li>
                        <li>Become an Affiliate</li>
                        <li>Become an Influcer</li>
                        <li> Advertise Your Products</li>
                        <li>Self-Publish with Us</li>
                      </ul>
                    </div>
                  </Col>
                  <Col className="col-lg-4">
                    <div className={styles.info}>
                      <h5>Source on Anaizan.com </h5>

                      <ul>
                        <li>All Categories</li>
                        <li>Request for Quotation</li>
                        <li> Regional Channels</li>
                        <li>Ready to Ship</li>
                        <li>Anaizan.com Select</li>
                      </ul>
                    </div>
                  </Col>
                  <Col className="col-lg-4">
                    <div className={styles.info}>
                      <h5>Trade Services </h5>

                      <ul>
                        <li>Buyer Sourcing Service</li>
                        <li>Online Trade Meeting</li>
                        <li> Global Online Expo</li>
                        <li>Publish Showroom</li>
                      </ul>
                    </div>
                  </Col>
                </Row>
              </Col>
              <Col className="col-lg-4 col-md-4 mt-5">
                <div className={styles.info}>
                  <h5>Useful Links </h5>
                  <ul>
                    <li> Premium OEM Factories</li>
                    <li>African Products</li>
                    <li> Vérified Suppliers</li>
                    <li>Official Shops</li>
                    <li>Top Ranking Suppliers</li>
                    <li>Dropshiping</li>
                    <li>Customized Products</li>
                    <li>Flash Deals</li>
                    <li>How Sell on Anaizan</li>
                    <li>Set up Stores</li>
                    <li>Post a products</li>
                  </ul>
                </div>
              </Col>
            </Row>
          </div>
        </div>
      </Container>
      <p className={styles.turner}></p>
      <div className={styles.socialIcon}>
        <Container>
          <Row className="my-5">
            <Col className="col-lg-2">
              <h5>Télécharger:</h5>
              <div className={styles.merketlace}>
                <div className={styles.playStore}>
                  <img src={playStore} alt="playStore" />
                </div>
                <div className={styles.appstore}>
                  <img src={appStore} alt="appStore" />
                </div>
              </div>
            </Col>
            <Col className="col-lg-8">
              <div className={styles.policyList}>
                <ul>
                  <li>Anaizan Group</li>
                  <li>Anaizan Marketplace</li>
                  <li>Anaizancoud.com</li>
                  <li>Anaizan Telecom</li>
                  <li>Anagopay</li>
                  <li>Lazada</li>
                  <li>Anaizan Security</li>
                </ul>
              </div>
              <div className={styles.lang}>
                <p>
                  Anaïzan.com Español - Português - Deutsch - Français -
                  Italiano - Pусский - 한국어 - 日本語 - ภาษาไทย - Türk -
                  Nederlands - tiếng Việt - Indonesian
                </p>
              </div>
            </Col>
            <Col className="col-lg-2">
              <div className={styles.socialIcon}>
                <h5>Suivez nous sur:</h5>
                <div className={styles.icons}>
                  <FaFacebookSquare />
                  <FaInstagram />
                  <FaLinkedin />
                  <FaTwitterSquare />
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
      <div className={styles.copyRight}>
        <Container>
          <p>Copyright © 2021 Anaïzan. All rights reserved.</p>
          <p>
            Privacy / Terms of use / Cookie preferences / Protect my personal
            data / AdChoices
          </p>
        </Container>
      </div>
    </footer>
  );
};

export default Footer;
