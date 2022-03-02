import { Col, Container, Row } from "react-bootstrap";
import styles from "../../assets/styles/footer/footer.module.scss";
const SmallDevice = () => {
  return (
    <footer className={styles.smallDevice}>
      <Container>
        <Row>
          <Col className="col-12">
            <div className={styles.footerCaption}>
              <h4>Sell With Anaizon</h4>
              <ul>
                <li>How much does it cost?</li>
                <li>Beginner's Guide</li>
                <li>Intro to ecommerce</li>
                <li>Inventory Management</li>
                <li>Inventory Management</li>
              </ul>
              <h4 className="mt-4">Swlling Programs</h4>
              <h4 className="mt-4">Anaizon for Brands</h4>
              <h4 className="mt-4"> Ecommerce Resource</h4>
            </div>
          </Col>
        </Row>
      </Container>
      <div className={styles.copyRight}>
        <p>Copyright © 2021 Anaïzan. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default SmallDevice;
