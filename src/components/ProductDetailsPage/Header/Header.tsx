import { Button, Container, Form, FormControl, Navbar } from "react-bootstrap";
import logo from "../../../assets/images/logo.png";
import details from "../../../assets/styles/ProductDetails/header/details.module.scss";
import styles from "../../../assets/styles/ProductDetails/header/header.module.scss";
import TopBar from "../../Header/TopBar";
import HeaderIcon from "../../ProductDetailsPage/Header/HeaderIcon";
import Headercategories from "./Headercategories";
const Header = () => {
  return (
    <header>
      <TopBar />
      <Navbar bg="light" expand="lg" className="border-bottom">
        <Container>
          <Navbar.Brand className={styles.logo} href="#">
            <img src={logo} alt="anaizain" />
          </Navbar.Brand>
          <Form className={"d-flex position-relative w-50 lef-0"}>
            <FormControl
              type="search"
              className={`${styles.searchpanle} ${details.formStyle}`}
              aria-label="Search"
            />
            <select className={details.selectOptions}>
              <option value="Products">Willi</option>
              <option value="Products">Products</option>
              <option value="Products">Products</option>
              <option value="Products" selected>
                Products
              </option>
            </select>
            <Button className={`${styles.button} ${details.button}`}>
              Search
            </Button>
          </Form>
          <HeaderIcon />
        </Container>
      </Navbar>
      <Headercategories />
    </header>
  );
};

export default Header;
