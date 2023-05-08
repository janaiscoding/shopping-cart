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
    <>
      <div className="cart-main">
        <div className="cart-redirect">
          {cart.length === 0 ? (
            <Link to="/menu" className="cart-redirect bag-empty">
              Bag empty. Check Store?
            </Link>
          ) : (
            <Link to="/checkout" className="cart-redirect checkout">
              Order Now: ${totalPrice.toFixed(2)}
            </Link>
          )}
        </div>
        <div className="all-cart-wrap">{allCartItems}</div>
      </div>
    </>
  );
};

export default Cart;
