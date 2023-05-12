import React, { useState } from "react";

const CartItem = ({
  cartItem,
  handleCartAdd,
  handleCartUpdate,
  handleCartRemove,
}) => {
  const [quantity, setQuantity] = useState(cartItem.quantity);

  const handleQuantityChange = (e) => {
    let quantNum = Number(e.target.value);
    setQuantity(quantNum);
    handleCartUpdate(cartItem, quantNum);
  };
  const handleAddSingular = () => {
    handleCartAdd(cartItem, 1);
    setQuantity(cartItem.quantity);
  };

  const handleRemoveSingular = () => {
    if (cartItem.quantity > 1) {
      handleCartAdd(cartItem, -1);
      setQuantity(cartItem.quantity);
    }
    // last item
    else if (cartItem.quantity === 1) {
      //update prod quant to 0
      handleCartAdd(cartItem, -1);
      //remove from cart
      // maybe add a popup with "item was removed from bag"
      handleCartRemove(cartItem);
    }
  };

  return (
    <div className="cart-item">
      <div className="item-info">
        <img src={cartItem.img} alt={cartItem.name} width={100} height="auto"/>
        <div className="product-name"> {cartItem.name}</div>
      </div>
      <div className="cart-item-right">
      <div className="cart-handle-change">
        <div
          className="remove-one-cart-button"
          onClick={() => handleRemoveSingular()}
        >
          -
        </div>
        <input
          type="number"
          min={"1"}
          max={"99"}
          value={quantity}
          aria-label="insert custom quantity"
          onChange={(e) => {
            handleQuantityChange(e);
            console.log(quantity);
          }}
        />
        <div
          className="add-one-cart-button"
          onClick={() => handleAddSingular()}
        >
          +
        </div>
      </div>
      <div className="cart-item-price">
        ¥{cartItem.price * cartItem.quantity}
      </div>
      <div className="remove-button" onClick={() => handleCartRemove(cartItem)}>
        x
      </div>
      </div>
    </div>
  );
};

export default CartItem;
