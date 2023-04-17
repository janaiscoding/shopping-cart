/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState, useEffect } from "react";

const CartItem = (props) => {
  const [quantity, setQuantity] = useState(0);

  useEffect(() => {
    setQuantity(props.quantity);
  }, []);

  const handleQuantityChange = (e) => {
    setQuantity(e.target.value);
  };
  return (
    <div className="cart-item">
      <div className="cart-item-name">{props.cartItem.name} </div>
      <div className="container">
        <img
          src={props.cartItem.img}
          width={150}
          height={150}
          alt={props.cartItem.name}
          className="item-image"
        ></img>
      </div>
      <input
        type="number"
        min={"0"}
        max={"100"}
        value={quantity}
        onChange={handleQuantityChange}
      />
      <div className="cart-item-info">
        {" "}
        Price: ${props.cartItem.price * quantity}{" "}
      </div>
    </div>
  );
};

export default CartItem;
