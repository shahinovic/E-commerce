import Container from "react-bootstrap/Container";

import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";

const BNav = Navbar;

import {
  FaInstagram,
  FaFacebook,
  FaLinkedin,
  FaTiktok,
  FaTwitter,
  FaYoutube,
} from "react-icons/fa";
import { freshcart_logo } from "../../assets";
import { NavLink } from "react-router-dom";

const MainNavbar = () => {
  return (
    <BNav expand="lg" className="bg-body-tertiary">
      <Container fluid>
        <BNav.Brand href="#">
          <img src={freshcart_logo} alt="" />
        </BNav.Brand>
        <BNav.Toggle aria-controls="navbarScroll" />
        <BNav.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: "100px" }}
            navbarScroll
          >
            <NavLink className="nav-link" to="">
              Home
            </NavLink>
            <NavLink className="nav-link" to="cart">
              Cart
            </NavLink>
            <NavLink className="nav-link" to="home-page">
              Products
            </NavLink>
            <NavLink className="nav-link" to="">
              Categories
            </NavLink>
            <NavLink className="nav-link" to="">
              Brands
            </NavLink>
          </Nav>
          <div className="actions d-flex align-items-center gap-3 justify-content-end">
            <div className="social-links d-flex gap-3">
              <a href="#" className="nav-link">
                <FaInstagram />
              </a>
              <a href="#" className="nav-link">
                <FaFacebook />
              </a>
              <a href="#" className="nav-link">
                <FaTiktok />
              </a>
              <a href="#" className="nav-link">
                <FaTwitter />
              </a>
              <a href="#" className="nav-link">
                <FaLinkedin />
              </a>
              <a href="#" className="nav-link">
                <FaYoutube />
              </a>
            </div>
            <div className="user-actions d-flex gap-3">
              <a href="#" className="nav-link">
                Login
              </a>
              <a href="#" className="nav-link">
                Register
              </a>
            </div>
          </div>
        </BNav.Collapse>
      </Container>
    </BNav>
  );
};

export default MainNavbar;
