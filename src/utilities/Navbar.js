import React from "react";
import { Link } from "react-router-dom";

const Navbar = ({ totalQuant }) => {
  return (
    <>
      <nav className="nav-bar">
        <Link to="/">Home</Link>
        <Link to="/store">Store</Link>
        <Link to="/cart">
          Cart ({totalQuant === 0 ? "empty" : totalQuant}){" "}
        </Link>
      </nav>
    </>
  );
};

export default Navbar;
