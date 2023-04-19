import React from "react";
import { Link } from "react-router-dom";

const Navbar = ({total}) => { 
  return (
    <>
      <nav className="nav-bar">
        <Link to="/">Home</Link>
        <Link to="/store">Store</Link>
        <Link to="/cart">Cart ({total}) </Link>
      </nav>
    </>
  );
};

export default Navbar;
