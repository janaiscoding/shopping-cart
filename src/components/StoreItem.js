/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState } from "react";

const StoreItem = ({ product, handleCartAdd, handleCartRemove }) => {
  const [quantity, setQuantity] = useState(0);

  const handleQuantityChange = (e) => {
    let quantityNum = Number(e.target.value);
    console.log(quantityNum);
    setQuantity(quantityNum);
  };
  const handleAdd = (product, quantity) => {
    // product.quantity = quantity;
    if (quantity > 0) {
      console.log(`the quantity passed to be added`, quantity);
      handleCartAdd(product, quantity);
    }
    if (quantity === 0) {
      console.log("cant add 0 items");
      //create an alert or modal div here which specifies that you cant add 0 items
    }
    //reset quant
    setQuantity(0);
  };

  const handleAddSingular = () => {
    handleCartAdd(product, 1);
  };

  const handleRemoveSingular = () => {
    if (product.quantity > 1) {
      handleCartAdd(product, -1);
    }
    // last item
    else if (product.quantity === 1) {
      //update prod quant to 0
      handleCartAdd(product, -1);
      //remove from cart
      // maybe add a popup with "item was removed from bag"
      handleCartRemove(product);
    }
  };
  return (
    <>
      <div className="card-wrap">
        <div className="card-info">
          <div className="item-name">{product.name}</div>
          <div className="item-price">
            Price: $
            {product.quantity === 0
              ? product.price
              : product.price * product.quantity}
          </div>
          {product.quantity === 0 ? `` : <div>In bag: {product.quantity}</div>}
        </div>
        <div className="container">
          <img
            src={product.img}
            width={300}
            height={250}
            alt={product.name}
            className="item-image"
          ></img>
        </div>
        <div className="buttons-control">
          <button onClick={handleRemoveSingular}>-1</button>
          <input
            type="number"
            min={"1"}
            max={"99"}
            value={quantity}
            onChange={handleQuantityChange}
          />
          <button onClick={handleAddSingular}>+1</button>
          <button
            onClick={() => handleAdd(product, quantity)}
            className="add-button"
          >
            add
          </button>
        </div>
      </div>
    </>
  );
};

export default StoreItem;
