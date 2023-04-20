import React, { useState } from "react";

const CartItem = ({
  cartItem,
  handleCartRemove,
  handleCartUpdate,
  handleCartAdd,
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
      alert(`${cartItem.name} was removed from bag`);
      handleCartRemove(cartItem);
    }
  };

  return (
    <div className="product-item">
      <div className="product-info">
        <div className="product-name">{cartItem.name}</div>
      </div>
      <div className="img-handle">
        <img
          src={cartItem.img}
          width={150}
          height={150}
          alt={cartItem.name}
          className="product-image"
          loading="lazy"
        ></img>
      </div>
      <div className="buttons-control">
        <div className="increment-decrement">
          <button onClick={handleRemoveSingular} className="minus-one">
            -1
          </button>
          <input
            type="number"
            min={"1"}
            max={"99"}
            value={quantity}
            onChange={(e) => {
              handleQuantityChange(e);
              console.log(quantity);
            }}
          />
          <button onClick={handleAddSingular} className="plus-one">
            +1
          </button>
        </div>
        <div className="custom-input">
          <button
            onClick={() => handleCartRemove(cartItem)}
            className="remove-button"
          >
            Remove
          </button>
          <div className="product-bottom-info">
            <div className="product-price">
              Price: $
              {cartItem.quantity === 0
                ? cartItem.price
                : (cartItem.price * cartItem.quantity).toFixed(2)}
            </div>
            {cartItem.quantity === 0 ? (
              ``
            ) : (
              <div>In bag: {cartItem.quantity}</div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartItem;
