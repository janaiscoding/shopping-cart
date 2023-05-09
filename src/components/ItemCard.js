import React from "react";
import Banner from "../assets/products/banner.png";
import "../styles/cardstyle.css";
const ItemCard = ({ product }) => {
  return (
    <div className="product-card">
      <div className="banner">
        <img src={Banner} width={250} alt="banner"/>
        <p className="centered">{product.japanese}</p>
      </div>
      <img
        src={product.img}
        width={150}
        alt={product.name}
        className="product-img"
      />
      <p className="product-name">{product.name}</p>
      <p className="product-price"> ¥ {product.price}</p>
      <></>
    </div>
  );
};

export default ItemCard;
