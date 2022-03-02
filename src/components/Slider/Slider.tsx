import { Button, Carousel, Col, Container, Row } from "react-bootstrap";
import slideImg from "../../assets/images/slider/slide.jpg";
import styles from "../../assets/styles/slider/slider.module.scss";
import Categories from "../Categories/Categories";
import FetureShop from "./FetureShop";
import SliderDemo from "./SliderDemo";

const Slider = () => {
  return (
    <div className="slider mt-4">
      <Container>
        <Row>
          <Col className="col-xl-3 dispaly-none">
            <Categories />
          </Col>
          <Col className="col-xl-6 col-md-12 col-12">
            <Carousel className={styles.carousel}>
              <Carousel.Item>
                <img
                  className="d-block w-100"
                  src={slideImg}
                  alt="First slide"
                />
                <Carousel.Caption className={styles.sliderBtn}>
                  <Button>Shoping Now</Button>
                </Carousel.Caption>
              </Carousel.Item>
              <Carousel.Item>
                <img
                  className="d-block w-100"
                  src={slideImg}
                  alt="First slide"
                />
                <Carousel.Caption className={styles.sliderBtn}>
                  <Button>Shoping Now</Button>
                </Carousel.Caption>
              </Carousel.Item>
            </Carousel>
            <SliderDemo />
          </Col>
          <Col className="col-xl-3 col-md-12 display-flex justify-between m-top-4">
            <FetureShop />
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Slider;
