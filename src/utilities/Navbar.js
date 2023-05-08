import React from "react";
import { Link } from "react-router-dom";
import "../styles/navbar.css";
import logo from "../assets/sushi.png";

const Navbar = ({ totalQuant }) => {
  const toggleNav = (e) => {
    let myButton = document.querySelector(".nav-bar");
    if (myButton.className === "nav-bar") {
      myButton.className += " responsive";
    } else {
      myButton.className = "nav-bar";
    }
  };

  return (
    <>
      <header className="flex">
        <div>
          <img className="logo" src={logo} alt="sushi logo" width={50} />
        </div>
        <nav>
          <ul id="primary-navigation" className="primary-navigation flex">
            <li className="active">
              <Link to="/">
                <span aria-hidden="true">00</span>Home
              </Link>
            </li>
            <li className="active">
              <Link to="/menu">
                <span aria-hidden="true">01</span>Menu
              </Link>
            </li>
            <li className="active">
              <Link to="/contact">
                <span aria-hidden="true">02</span>Contact
              </Link>
            </li>
            <li className="active">
              <Link to="/cart">
                <span aria-hidden="true">03</span>Cart (
                {totalQuant === 0 ? "empty" : totalQuant})
              </Link>
            </li>
          </ul>
        </nav>
        <button onClick={toggleNav} className="nav-toggle">
          R
        </button>
      </header>
    </>
  );
};
// change cart icon to display cuter stuff ? icons maybe ?
export default Navbar;
