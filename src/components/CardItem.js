import React from "react";

const CardItem = ({ id, product, onAdd }) => {
  return (
    <>
      <div className="card-wrap" key={id}>
        <div className="container">
          <img
            src={product.img}
            width={150}
            height={150}
            alt={product.name}
          ></img>
        </div>
        <div>Name: {product.name}</div>
        <div>Price per item: {product.price}</div>
        <div>Bag Quantity: {product.quantity}</div>
        <div> Total price: {product.price * product.quantity} </div>
        <button onClick={() => onAdd(id)}>Add 1</button>
      </div>
    </>
  );
};

export default CardItem;
