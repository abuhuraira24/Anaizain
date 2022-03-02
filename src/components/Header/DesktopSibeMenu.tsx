import { Navbar, Offcanvas } from "react-bootstrap";

const DesktopSibeMenu = () => {
  return (
    <Navbar.Offcanvas
      id="offcanvasNavbar"
      aria-labelledby="offcanvasNavbarLabel"
      placement="end"
    >
      <Offcanvas.Header closeButton>
        <Offcanvas.Title id="offcanvasNavbarLabel">
          ALL CATEGORIES
        </Offcanvas.Title>
      </Offcanvas.Header>
      <Offcanvas.Body></Offcanvas.Body>
    </Navbar.Offcanvas>
  );
};

export default DesktopSibeMenu;
