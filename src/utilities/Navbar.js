import React from "react";
import { HashLink as Link } from "react-router-hash-link";
import "../styles/navbar.css";
import logo from "../assets/icons/logo.png";
import cartIcon from "../assets/icons/shopping-cart.png";

const Navbar = ({ totalQuant }) => {
  const toggleNav = () => {
    const primaryNav = document.querySelector(".primary-navigation");
    const navToggle = document.querySelector(".mobile-nav-toggle");
    const visibility = primaryNav.getAttribute("data-visible");
    if (visibility === "false") {
      primaryNav.setAttribute("data-visible", true);
      navToggle.setAttribute("aria-expanded", true);
    } else {
      primaryNav.setAttribute("data-visible", false);
      navToggle.setAttribute("aria-expanded", false);
    }
  };
  return (
    <>
      <header className="flex">
        <div className="header-left flex">
          <Link className="logo-wrapper flex" to="/">
            <img className="logo" src={logo} alt="sushi logo" width={50} />
            <p className="logo-name">Oishī</p>
          </Link>
          <Link to="/cart" className="cart-menu-icon">
            <img src={cartIcon} alt="cart button" />
            {totalQuant === 0 ? "" : <div> {totalQuant}</div>}
          </Link>
        </div>

        <button
          className="mobile-nav-toggle"
          aria-controls="primary-navigation"
          aria-expanded="false"
          onClick={toggleNav}
        ></button>
        <nav>
          <ul
            id="primary-navigation"
            className="primary-navigation flex"
            data-visible="false"
          >
            <li className="active">
              <Link to="/#menu" onClick={toggleNav}>
                Menu
              </Link>
            </li>
            <li className="active">
              <Link to="/#discover" onClick={toggleNav}>
                Foods
              </Link>
            </li>
            <li className="active">
              <Link to="/#about" onClick={toggleNav}>
                About us
              </Link>
            </li>
            <li className="active">
              <Link to="/checkout" onClick={toggleNav}>
                Checkout
              </Link>
            </li>
            <li className="active contact-button">
              <Link to="/contact" onClick={toggleNav}>
                Contact Us
              </Link>
            </li>
          </ul>
        </nav>
      </header>
    </>
  );
};
// change cart icon to display cuter stuff ? icons maybe ?
export default Navbar;
