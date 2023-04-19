import React from "react";
import CartItem from "../components/CartItem";
import "../styles/cart.css";
import { Link } from "react-router-dom";

const Cart = ({
  cart,
  handleCartAdd,
  handleCartRemove,
  totalPrice,
  handleCartUpdate,
}) => {
  const allCartItems = cart.map((cartItem) => (
    <CartItem
      key={cartItem.id}
      cartItem={cartItem}
      handleCartAdd={handleCartAdd}
      handleCartUpdate={handleCartUpdate}
      handleCartRemove={handleCartRemove}
    />
  ));

  return (
    <div className="cart-main">
      <div className="cart-info">
        {cart.length === 0 ? (
          <button className="bag-empty">
            <Link to="/store"> Bag empty. Check Store? </Link>
          </button>
        ) : (
            <button className="checkout"> Give Order: ${totalPrice.toFixed(2)} </button>
        )}
      </div>

      <div className="all-cart-wrap">{allCartItems}</div>
    </div>
  );
};

export default Cart;
