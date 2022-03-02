import { Col, Container, Row } from "react-bootstrap";
import car from "../../assets/images/verified/car.png";
import styles from "../../assets/styles/verifiedCompany/verified.module.scss";

const VarfiedComoany = () => {
  return (
    <div className={styles.verifiedCompany}>
      <Container fluid>
        <div className={styles.verify}>
          {/* <Row>
            <Col>
              <div className={styles.title}>
                <h5>VERIFIED COMPANIES</h5>
              </div>
            </Col>
          </Row> */}
          <div className={styles.items}>
            <Row>
              <Col className="col-lg-4 col-md-4 col-sm-6 col-12">
                <div className={styles.item}>
                  <div className={styles.img}>
                    <img src={car} alt="car" />
                  </div>
                  <div className={styles.caption}>
                    <h5>Vetements Bien Finis Avec Des Design À La</h5>
                    <p>
                      High Quality A AMI LEVEL 3 blue green Disposable sterile
                      60 gms
                    </p>
                  </div>
                </div>
              </Col>
              <Col className="col-lg-4 col-md-4 col-sm-6 col-12 d-s-nn">
                <div className={styles.item}>
                  <div className={styles.img}>
                    <img src={car} alt="car" />
                  </div>
                  <div className={styles.caption}>
                    <h5>Vetements Bien Finis Avec Des Design À La</h5>
                    <p>
                      High Quality A AMI LEVEL 3 blue green Disposable sterile
                      60 gms
                    </p>
                  </div>
                </div>
              </Col>
              <Col className="col-lg-4 col-md-4 col-sm-6 col-12 d-sm-nn">
                <div className={styles.item}>
                  <div className={styles.img}>
                    <img src={car} alt="car" />
                  </div>
                  <div className={styles.caption}>
                    <h5>Vetements Bien Finis Avec Des Design À La</h5>
                    <p>
                      High Quality A AMI LEVEL 3 blue green Disposable sterile
                      60 gms
                    </p>
                  </div>
                </div>
              </Col>
            </Row>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default VarfiedComoany;
