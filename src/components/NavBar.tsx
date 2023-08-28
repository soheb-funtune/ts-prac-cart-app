import { Navbar as NavbarBS, Nav, Button, Container } from "react-bootstrap";
import { NavLink } from "react-router-dom";
import { useShopingCart } from "../context/ShopingCartContext";
const NavBar = () => {
  const { cartQuantity, openCart } = useShopingCart();
  return (
    <NavbarBS sticky={"top"} className={"bg-white shadow-sm mb-3"}>
      <Container>
        <Nav className="me-auto">
          <Nav.Link as={NavLink} to="/">
            Home
          </Nav.Link>
          <Nav.Link as={NavLink} to="/store">
            Store
          </Nav.Link>
          <Nav.Link as={NavLink} to="/about">
            About
          </Nav.Link>
        </Nav>
        <Button
          onClick={() => openCart()}
          style={{ padding: "2px 5px", position: "relative" }}
          variant="outline-primary d-flex rounded-circle"
        >
          🛒
          <span
            style={{
              position: "absolute",
              right: "0px",
              bottom: "-10px",
              lineHeight: 1,
              padding: "2px 5px",
              color: "white",
            }}
            className=" rounded-circle bg-danger"
          >
            {cartQuantity}
          </span>
        </Button>
      </Container>
    </NavbarBS>
  );
};

export default NavBar;
