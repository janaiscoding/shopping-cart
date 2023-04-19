import React from "react";
import CartItem from "./CartItem";

const Cart = ({
  cart,
  handleCartAdd,
  handleCartRemove,
  totalPrice,
  handleCartUpdate,
}) => {
  const allProducts = cart.map((cartItem) => (
    <CartItem
      key={cartItem.id}
      product={cartItem}
      handleCartAdd={handleCartAdd}
      handleCartUpdate={handleCartUpdate}
      handleCartRemove={handleCartRemove}
    />
  ));

  return (
    <>
      {cart.length === 0 && <div>nothing in the bag</div>}
      {allProducts}
      <button className="checkout">Checkout</button>
      <div> Total: ${totalPrice}</div>
    </>
  );
};

export default Cart;
