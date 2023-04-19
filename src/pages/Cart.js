import React from "react";
import CartItem from "../components/CartItem";
import "../styles/cart.css";

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
      {cart.length === 0 && <div className="bag-empty">nothing in the bag</div>}
      <div className="all-cart-wrap">{allCartItems}</div>
      <button className="checkout">Checkout</button>
      <div className="total"> Total: ${totalPrice}</div>
    </div>
  );
};

export default Cart;
