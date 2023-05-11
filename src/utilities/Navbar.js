import React from "react";
import { HashLink as Link } from "react-router-hash-link";
import "../styles/navbar.css";
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
      <header className="flex sticky">
        <div className="header-left flex">
          <Link className="logo-wrapper flex" to="/#home">
            <p className="logo-name">Umaī</p>
          </Link>
          <Link to="/cart" className="cart-menu-icon" data-visible="false">
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
              <Link to="/#home" onClick={toggleNav}>
                Home
              </Link>
            </li>
            <li className="active">
              <Link to="/#delivery" onClick={toggleNav}>
                Delivery
              </Link>
            </li>
            <li className="active">
              <Link to="/#tradition" onClick={toggleNav}>
                Tradition
              </Link>
            </li>
            <li className="active">
              <Link to="/#reservation" onClick={toggleNav}>
                Reservation
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
