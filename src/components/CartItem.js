import React, { useState } from "react";

const CartItem = ({ cartItem, handleCartRemove, handleCartUpdate }) => {
  const [quantity, setQuantity] = useState(cartItem.quantity);

  const handleQuantityChange = (e) => {
    let quantNum = Number(e.target.value);
    setQuantity(quantNum);
  };

  return (
    <div className="cart-item">
      <div className="cart-item-name">{cartItem.name} </div>
      <div className="container">
        <img
          src={cartItem.img}
          width={150}
          height={150}
          alt={cartItem.name}
          className="item-image"
        ></img>
      </div>
      <input
        type="number"
        min={"0"}
        max={"99"}
        value={quantity}
        onChange={(e) => {
          handleQuantityChange(e);
          handleCartUpdate(cartItem, quantity);
        }}
      />
      <button onClick={() => handleCartRemove(cartItem)}>Remove</button>
      <div className="cart-item-info"> Price: ${cartItem.price * quantity} </div>
    </div>
  );
};

export default CartItem;
