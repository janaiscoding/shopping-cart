import React from "react";

const Item = ({ id, name, img, price, quantity, onAdd, onRemove }) => {
  return (
    <>
      <div className="card-wrap" key={id}>
       
        <div className="container">
          <img src={img} width={150} height={150} alt={name}></img>
        </div>
        <div className="item-name">{name}</div>
        <div className="item-price">${price}</div>

        {quantity === 0 ? (
          <button onClick={() => onAdd(id)} className="add-button">
            Add to cart
          </button>
        ) : (
          <div className="buttons-control">
            <button onClick={() => onRemove(id)} className="remove-button">
              -
            </button>
            <div className="in-cart">In cart: {quantity}</div>
            <button onClick={() => onAdd(id)} className="add-button">
              +
            </button>
          </div>
        )}
      </div>
    </>
  );
};

export default Item;
