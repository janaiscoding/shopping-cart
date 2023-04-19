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
      {cart.length === 0 && (
        <div className="bag-empty">
          Your cart is currently empty ... go buy some sushi
          <Link to="/store"> Store </Link>
        </div>
      )}
      <div className="total"> Total: ${totalPrice}</div>
      <button className="checkout"> Order</button>
      <div className="all-cart-wrap">{allCartItems}</div>
    </div>
  );
};

export default Cart;
