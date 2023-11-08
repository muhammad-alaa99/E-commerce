import React from "react";
import { Container, Nav, NavDropdown,NavLink,Navbar } from "react-bootstrap";
import { AiFillBehanceCircle,AiOutlineShoppingCart } from 'react-icons/ai';
import '../../../style/Nav.css'
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
const Header = () => {
  const { cart } = useSelector((state) => state.Products);
  return (
    <>
      <Navbar expand="lg"  className="nav position-fixed text-light p-0">
      <Container>
        <Navbar.Brand href="#home"><AiFillBehanceCircle  className="icon"/></Navbar.Brand>
        <Navbar.Toggle className="bg-light" aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto ">
            <Link className="nav-link fw-bold text-light text-sm-center" to="/">Products</Link>
            <NavLink className="nav-link fw-bold text-light text-sm-center " href='#offers'>offers</NavLink>
            <NavLink className="nav-link fw-bold text-light text-sm-center " href='#testimonial'>testimonial</NavLink>
            
          </Nav>
        <div className="position-relative cart mx-sm-auto mx-md-auto m-lg-0  ">
         <Link to="/cart"> <AiOutlineShoppingCart className="icon  "/> </Link>
          <span className="counter position-absolute">{cart.length}</span>
         </div>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    </>
  );
};

export default Header;
