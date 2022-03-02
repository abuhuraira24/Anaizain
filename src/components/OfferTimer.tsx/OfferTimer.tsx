import { Col, Container, Row } from "react-bootstrap";
import styles from "../../assets/styles/OfferTimer/timerpart.module.scss";
import CaroselItems from "./CaroselItems";
import Timer from "./Timer";

const OfferTimer = () => {
  return (
    <div className={styles.offertimer}>
      <Container>
        <Row>
          <Col className="col-xxl-4 col-md-4 col-sm-12">
            <Timer />
          </Col>
          <Col className="col-xxl-4 col-md-4 col-sm-6 col-12">
            <CaroselItems />
          </Col>
          <Col className="col-xxl-4 col-md-4 col-sm-6  col-12">
            <CaroselItems />
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default OfferTimer;
