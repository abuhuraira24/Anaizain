import { Card, Container, Row } from "react-bootstrap";
import cabl from "../../assets/images/shopping/cabl.png";
import styles from "../../assets/styles/shopping/shopping.module.scss";
import ShoppingCategories from "./ShoppingCategories";
const Shopping = () => {
  return (
    <div>
      <ShoppingCategories />
      <Container>
        <Row>
          <Card className={styles.cartImg}>
            <Card.Img variant="top" src={cabl} />
            <Card.Body className={styles.caption}>
              <p>High Quality A AMI LEVEL 3 blue green Disposable steri...</p>
              <h6>CFA 108 - CFA 324</h6>
              <h5>$ 7,50 - $ 8,50</h5>
              <div className={styles.bottomInfo}>
                <span>10 Pieces</span>
                <span>Verified Seller</span>
              </div>
            </Card.Body>
          </Card>
          <Card className={styles.cartImg}>
            <Card.Img variant="top" src={cabl} />
            <Card.Body className={styles.caption}>
              <p>High Quality A AMI LEVEL 3 blue green Disposable steri...</p>
              <h6>CFA 108 - CFA 324</h6>
              <h5>$ 7,50 - $ 8,50</h5>
              <div className={styles.bottomInfo}>
                <span>10 Pieces</span>
                <span>Verified Seller</span>
              </div>
            </Card.Body>
          </Card>
          <Card className={styles.cartImg}>
            <Card.Img variant="top" src={cabl} />
            <Card.Body className={styles.caption}>
              <p>High Quality A AMI LEVEL 3 blue green Disposable steri...</p>
              <h6>CFA 108 - CFA 324</h6>
              <h5>$ 7,50 - $ 8,50</h5>
              <div className={styles.bottomInfo}>
                <span>10 Pieces</span>
                <span>Verified Seller</span>
              </div>
            </Card.Body>
          </Card>
          <Card className={styles.cartImg}>
            <Card.Img variant="top" src={cabl} />
            <Card.Body className={styles.caption}>
              <p>High Quality A AMI LEVEL 3 blue green Disposable steri...</p>
              <h6>CFA 108 - CFA 324</h6>
              <h5>$ 7,50 - $ 8,50</h5>
              <div className={styles.bottomInfo}>
                <span>10 Pieces</span>
                <span>Verified Seller</span>
              </div>
            </Card.Body>
          </Card>
          <Card className={styles.cartImg}>
            <Card.Img variant="top" src={cabl} />
            <Card.Body className={styles.caption}>
              <p>High Quality A AMI LEVEL 3 blue green Disposable steri...</p>
              <h6>CFA 108 - CFA 324</h6>
              <h5>$ 7,50 - $ 8,50</h5>
              <div className={styles.bottomInfo}>
                <span>10 Pieces</span>
                <span>Verified Seller</span>
              </div>
            </Card.Body>
          </Card>
        </Row>
      </Container>
    </div>
  );
};

export default Shopping;
