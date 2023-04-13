import React from "react";
import Item from "./Item";

const Cart = ({ bag, onAdd, onRemove }) => {
  const allBag = bag.map((product) => (
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
  const handleBag = () => {
    console.log(bag);
  };
  return (
    <>
      <h1> Your shopping bag</h1>
      <div> List of products </div>
      <div>{allBag}</div>
      <button onClick={handleBag}>Click to check bag</button>
    </>
  );
};

export default Cart;
