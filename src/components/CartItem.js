/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState, useEffect } from "react";

const CartItem = ({ cart, product, handleCartRemove }) => {
  const [quantity, setQuantity] = useState(product.quantity);
  console.log(`current product quant`, quantity);

  useEffect(() => {
    setQuantity(product.quantity);
  }, []);

  const handleQuantityChange = (e) => {
    let quantityNum = Number(e.target.value);
    setQuantity(quantityNum);
  };
  const handleProductQuantity = () => {
    if (quantity === 0) {
      handleCartRemove(product);
    }
    product.quantity = quantity;
    console.log(product);
    console.log(cart);
  };

  return (
    <div className="cart-item">
      <div className="cart-item-name">{product.name} </div>
      <div className="container">
        <img
          src={product.img}
          width={150}
          height={150}
          alt={product.name}
          className="item-image"
        ></img>
      </div>
      <input
        type="number"
        min={"1"}
        max={"99"}
        value={quantity}
        onChange={(e) => {
          handleQuantityChange(e);
          handleProductQuantity();
        }}
      />
      <button onClick={handleCartRemove}>Remove </button>
      <div className="cart-item-info"> Price: ${product.price * quantity} </div>
    </div>
  );
};

export default CartItem;
