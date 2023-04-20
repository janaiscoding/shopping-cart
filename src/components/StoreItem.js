/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState } from "react";

const StoreItem = ({ product, handleCartAdd, handleCartRemove }) => {
  const [quantity, setQuantity] = useState(0);

  const handleQuantityChange = (e) => {
    let quantityNum = Number(e.target.value);
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
      alert("Add more than 0 items");
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
      alert(`${product.name} was removed from bag`);
      handleCartRemove(product);
    }
  };
  return (
    <>
      <div className="product-item">
        <div className="product-info">
          <div className="product-name">{product.name}</div>
        </div>
        <div className="img-handle">
          <img
            src={product.img}
            width={300}
            height={200}
            alt={product.name}
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
              min={"0"}
              max={"99"}
              value={quantity}
              onChange={handleQuantityChange}
            />
            <button onClick={handleAddSingular} className="plus-one">
              +1
            </button>
          </div>
          <div className="custom-input">
            <button
              onClick={() => handleAdd(product, quantity)}
              className="add-button"
            >
              Add Custom
            </button>
            <div className="product-bottom-info">
              <div className="product-price">
                Price: $
                {product.quantity === 0
                  ? product.price
                  : (product.price * product.quantity).toFixed(2)}
              </div>
              {product.quantity === 0 ? (
                ``
              ) : (
                <div className="in-bag">In bag: {product.quantity}</div>
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default StoreItem;
