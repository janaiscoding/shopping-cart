import React from "react";
import { Link } from "react-router-dom";
import "../styles/navbar.css";
import logo from "../assets/sushi.png";
import cartIcon from "../assets/shopping-cart.png";

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
        <div>
          <Link to="/">
            <img className="logo" src={logo} alt="sushi logo" width={50} />
          </Link>
        </div>
        <Link to="/cart" className="cart-menu-icon">
          <img src={cartIcon} />
          {totalQuant === 0 ? "" : <div> {totalQuant}</div>}
        </Link>
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
              <Link to="/">Home</Link>
            </li>
            <li className="active">
              <Link to="/menu">Menu</Link>
            </li>
            <li className="active">
              <Link to="/contact">Contact</Link>
            </li>
          </ul>
        </nav>
      </header>
    </>
  );
};
// change cart icon to display cuter stuff ? icons maybe ?
export default Navbar;
