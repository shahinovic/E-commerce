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
  FaShoppingCart,
} from "react-icons/fa";
import { freshcart_logo } from "../../assets";
import { Link, NavLink, useLocation } from "react-router-dom";
import { useContext } from "react";
import { TokenContext } from "../../Context/Token";
import { UserContext } from "../../Context/User";
import { useGetCart } from "../../Hooks/useCart";

const MainNavbar = () => {
  const { token, setToken } = useContext(TokenContext);
  const { setIsCartOpen } = useContext(UserContext);
  const { data } = useGetCart();

  const handleLogout = () => {
    localStorage.removeItem("token");
    setToken(null);
  };

  const currentPath = useLocation().pathname;

  return (
    <BNav expand="lg" className="bg-body-tertiary fixed-top top-0 shadow ">
      <Container>
        <NavLink to="home" className="navbar-brand">
          <img src={freshcart_logo} alt="" />
        </NavLink>
        <BNav.Toggle aria-controls="navbarScroll" />
        <BNav.Collapse id="navbarScroll">
          {token && (
            <Nav
              className="me-auto my-2 my-lg-0"
              style={{ maxHeight: "100px" }}
              navbarScroll
            >
              <NavLink className="nav-link" to="home">
                Home
              </NavLink>
              {/* <NavLink className="nav-link" to="cart">
                Cart
              </NavLink> */}
              <NavLink className="nav-link" to="products">
                Products
              </NavLink>
              <NavLink className="nav-link" to="categories">
                Categories
              </NavLink>
              <NavLink className="nav-link" to="brands">
                Brands
              </NavLink>
            </Nav>
          )}
          <div
            className={`actions ${
              !token ? "ms-auto" : "ms-0"
            } d-flex align-items-center gap-3 justify-content-end`}
          >
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
              {token ? (
                <>
                  <Link
                    to="/"
                    className="nav-link d-flex align-items-center  me-2"
                    onClick={handleLogout}
                  >
                    Logout
                  </Link>

                  <button
                    onClick={() => setIsCartOpen(true)}
                    className="btn cart_btn"
                  >
                    {data?.numOfCartItems > 0 && (
                      <span className="cart_count bg-main">
                        {data?.numOfCartItems}
                      </span>
                    )}
                    <FaShoppingCart />
                  </button>
                </>
              ) : (
                <>
                  {currentPath === "/register" ? (
                    <Link to={"/"} className="nav-link">
                      Login
                    </Link>
                  ) : (
                    <Link to={"/register"} className="nav-link">
                      Register
                    </Link>
                  )}
                </>
              )}
            </div>
          </div>
        </BNav.Collapse>
      </Container>
    </BNav>
  );
};

export default MainNavbar;
