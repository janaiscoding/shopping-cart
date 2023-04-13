import React from "react";

const Item = ({ id, name, img, price, quantity, onAdd, onRemove }) => {
  return (
    <>
      <div className="card-wrap" key={id}>
        <div className="container">
          <img src={img} width={150} height={150} alt={name}></img>
        </div>
        <div>Name: {name}</div>
        <div>Price per item: {price}</div>
        <div> Total price: {price * quantity} </div>
        <div className="buttons-control">
          <button onClick={() => onRemove(id)}>-</button>
          <div>In cart: {quantity}</div>
          <button onClick={() => onAdd(id)}>+</button>
        </div>
      </div>
    </>
  );
};

export default Item;
