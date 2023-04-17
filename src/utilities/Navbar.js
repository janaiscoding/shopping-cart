import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const Navbar = (props) => {
  const [sum, setSum] = useState(0);

  const addTotal = () => {
    let total = props.cart.reduce((accumulator, current) => {
      return accumulator + Number(current.quantity);
    }, 0);
    setSum(total);
  };

  useEffect(() => {
    addTotal();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [props.cart]);

  return (
    <>
      <nav className="nav-bar">
        <Link to="/">Home</Link>
        <Link to="/store">Store</Link>
        <Link to="/cart">Cart ({sum}) </Link>
      </nav>
    </>
  );
};

export default Navbar;
