import React from "react";
import Item from "./Item";

const Cart = ({ cart, onAdd, onRemove, visibility }) => {
  const allProducts = cart.map((product) => (
    <Item
      name={product.name}
      img={product.img}
      price={product.price}
      quantity={product.quantity}
      key={product.id}
      id={product.id}
      onAdd={onAdd}
      onRemove={onRemove}
    />
  ));
  return (
    <>
      <div className={visibility}>
        {cart.length === 0 && <div>nothing in the bag</div>}
        {allProducts}
      </div>
    </>
  );
};

export default Cart;
