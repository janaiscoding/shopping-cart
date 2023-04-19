/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState } from "react";

const StoreItem = (props) => {
  const [quantity, setQuantity] = useState(0);

  const handleQuantityChange = (e) => {
    let quantityNum = Number(e.target.value);
    setQuantity(quantityNum);
  };
  const handleAdd = () => {
    if (quantity > 0) {
      props.handleCartAdd(props.product, quantity);
    }
    if (quantity === 0) {
      console.log("cant add 0 items");
      //create an alert or modal div here which specifies that
    }
    setQuantity(0);
  };

  const handleAddSingular = () => {
    props.handleCartAdd(props.product, 1);
  };

  const handleRemoveSingular = () => {
    if (props.product.quantity > 1) {
      props.handleCartAdd(props.product, -1);
    }
    // last item
    else if (props.product.quantity === 1) {
      //update prod quant to 0
      props.handleCartAdd(props.product, -1);
      //remove from cart
      props.handleCartRemove(props.product);
    }
  };
  return (
    <>
      <div className="card-wrap">
        <div className="item-name">{props.product.name}</div>

        <div className="container">
          <img
            src={props.product.img}
            width={150}
            height={150}
            alt={props.product.name}
            className="item-image"
          ></img>
        </div>
        <div className="item-price">${props.product.price}</div>
        <div className="buttons-control">
          <div className="in-cart"></div>
          <button onClick={handleRemoveSingular}>-1</button>
          <div>In bag: {props.product.quantity}</div>
          <input
            type="number"
            min={"1"}
            max={"99"}
            value={quantity}
            onChange={handleQuantityChange}
          />
          <button onClick={handleAddSingular}>+1</button>
          <button onClick={handleAdd} className="add-button">
            add
          </button>
        </div>
      </div>
    </>
  );
};

export default StoreItem;
