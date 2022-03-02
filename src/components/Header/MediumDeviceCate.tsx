import { Container, Nav, Navbar } from "react-bootstrap";
import { CgFormatLeft } from "react-icons/cg";
import styles from "../../assets/styles/header/header.module.scss";

const MediumDeviceCate = () => {
  return (
    <div className="header-cat d-none mediumdevice">
      <Navbar bg="light" expand={false}>
        <Container>
          <Navbar.Toggle
            aria-controls="offcanvasNavbar"
            className={styles.categories}
          >
            <CgFormatLeft />
            <span>Categories</span>
          </Navbar.Toggle>

          <Nav className={`mr-auto ${styles.cat}`}>
            <Nav.Link href="#home">Ready To Ship</Nav.Link>
            <Nav.Link href="#link">Trade Shows</Nav.Link>
            <Nav.Link href="#home">Personal Protection</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
    </div>
  );
};

export default MediumDeviceCate;
