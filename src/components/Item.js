import React from "react";

const Item = ({ id, name, img, price, quantity, onAdd }) => {
  return (
    <>
      <div className="card-wrap" key={id}>
        <div className="container">
          <img src={img} width={150} height={150} alt={name}></img>
        </div>
        <div>Name: {name}</div>
        <div>Price per item: {price}</div>
        <div>Bag Quantity: {quantity}</div>
        <div> Total price: {price * quantity} </div>
        <button onClick={() => onAdd(id)}>+1</button>
      </div>
    </>
  );
};

export default Item;
