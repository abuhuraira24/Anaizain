import { Button, Container, Form, FormControl, Navbar } from "react-bootstrap";
import logo from "../../assets/images/logo.png";
import styles from "../../assets/styles/header/header.module.scss";
import HeaderIcon from "./HeaderIcon";

const Header = () => {
  return (
    <header>
      <Navbar bg="light" expand="lg" className="border-bottom">
        <Container>
          <Navbar.Brand className={styles.logo} href="#">
            <img src={logo} alt="anaizain" />
          </Navbar.Brand>
          <Form className="d-flex position-relative w-50 lef-0">
            <FormControl
              type="search"
              className={styles.searchpanle}
              aria-label="Search"
            />
            <Button className={styles.button}>Search</Button>
          </Form>
          <HeaderIcon />
        </Container>
      </Navbar>
    </header>
  );
};

export default Header;
