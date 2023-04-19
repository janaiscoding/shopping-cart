import React from "react";
import CartItem from "../components/CartItem";

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
      {cart.length === 0 && <div>nothing in the bag</div>}
      {allCartItems}
      <button className="checkout">Checkout</button>
      <div> Total: ${totalPrice}</div>
    </>
  );
};

export default Cart;
