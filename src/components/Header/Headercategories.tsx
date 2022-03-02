import { Container, Nav, Navbar, NavDropdown } from "react-bootstrap";
import { AiOutlineDown } from "react-icons/ai";
import { CgFormatLeft } from "react-icons/cg";
import styles from "../../assets/styles/header/header.module.scss";

const Headercategories = () => {
  return (
    <div className="header-cat dispaly-none">
      <Navbar bg="light" expand={false}>
        <Container>
          <Navbar.Toggle
            aria-controls="offcanvasNavbar"
            className={styles.categories}
          >
            <CgFormatLeft />
            <span>ALL CATEGORIES</span>
          </Navbar.Toggle>

          <Nav className={`${styles.cat}`}>
            <Nav.Link href="#home">Factories</Nav.Link>
            <Nav.Link href="#link">Officials Shops</Nav.Link>
            <Nav.Link href="#home">
              Made In Africa
              <AiOutlineDown />
            </Nav.Link>
            <Nav.Link href="#link">
              Trade Services
              <AiOutlineDown />
            </Nav.Link>
            <Nav.Link href="#home">
              Source on Anaizan.com
              <AiOutlineDown />
            </Nav.Link>
            <Nav.Link href="#link">
              Sell on Anaizan
              <AiOutlineDown />
            </Nav.Link>
          </Nav>
          <NavDropdown title="English-XOF" id="basic-nav-dropdown">
            <NavDropdown.Item href="#action/3.1">Bangla</NavDropdown.Item>
          </NavDropdown>
          <NavDropdown title="Ship-to : " id="basic-nav-dropdown">
            <NavDropdown.Item href="#action/3.1">Bangladesh</NavDropdown.Item>
          </NavDropdown>
        </Container>
      </Navbar>
    </div>
  );
};

export default Headercategories;
