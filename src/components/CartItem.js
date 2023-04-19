import React, { useState } from "react";

const CartItem = ({ product, handleCartRemove, handleCartUpdate }) => {
  const [quantity, setQuantity] = useState(product.quantity);

  const handleQuantityChange = (e) => {
    let quantityNum = Number(e.target.value);
    setQuantity(quantityNum);
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
        min={"0"}
        max={"99"}
        value={quantity}
        onChange={(e) => {
          handleQuantityChange(e);
          handleCartUpdate(product, quantity);
          console.log(product);
        }}
      />
      <button onClick={handleCartRemove}>Remove </button>
      <div className="cart-item-info"> Price: ${product.price * quantity} </div>
    </div>
  );
};

export default CartItem;
