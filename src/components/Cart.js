import React from "react";
import CartItem from "./CartItem";

const Cart = ({cart, handleCartAdd, handleCartRemove}) => {
  const allProducts = cart.map((cartItem) => (
    <CartItem 
    cart={cart}
    product={cartItem} 
    handleCartAdd={handleCartAdd}
    handleCartRemove={handleCartRemove}/>
  ));
  
  return (
    <>
      {cart.length === 0 && <div>nothing in the bag</div>}
      {allProducts}
      {/* <div>your total: {sum}</div> */}
      <button className="checkout">Checkout</button>
      <div> Total: $0</div>
    </>
  );
};

export default Cart;
