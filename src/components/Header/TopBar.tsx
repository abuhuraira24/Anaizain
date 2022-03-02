import { Col, Container, Row } from "react-bootstrap";
import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaYoutube,
} from "react-icons/fa";
import styles from "../../assets/styles/header/topbar.module.scss";

const TopBar = () => {
  return (
    <div className={styles.topbar}>
      <Container>
        <Row>
          <Col className="col-lg-10 col-md-12 col-12 text-center d-flex justify-content-center aligh-items-center">
            <p>Bienvenue Sur Votre Plateforme De Commerce en Ligm</p>
          </Col>
          <Col className="col-lg-2 d-flex justify-content-end dispaly-none">
            <span>
              <FaInstagram />
            </span>
            <span>
              <FaYoutube />
            </span>
            <span>
              <FaFacebookF />
            </span>
            <span>
              <FaLinkedinIn />
            </span>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default TopBar;
