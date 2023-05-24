import React from "react";
import Banner from "../assets/products/banner.png";
import "../styles/cardstyle.css";
const ItemCard = ({ product, handleAdd }) => {
  const handleCartAnimation = (e) => {
    const image = e.target.parentNode.childNodes[1];
    image.style.transform = "scale(1.1)";
    setTimeout(() => {
      image.style.transform = "scale(1)";
    }, 100);
  };

  return (
    <div className="product-card">
      <div className="banner">
        <img src={Banner} width={250} height="auto" alt="banner" />
        <p className="centered">{product.japanese}</p>
      </div>
      <img
        src={product.img}
        width="auto"
        height={100}
        alt={product.name}
        className="product-img"
      />
      <p className="product-name">{product.name}</p>
      <p className="product-price"> ¥ {product.price}</p>
      <button
        className="order-button"
        aria-label="add product in your cart"
        onClick={(e) => {
          handleAdd(product, 1);
          handleCartAnimation(e);
        }}
      >
        Add to Cart
      </button>
    </div>
  );
};

export default ItemCard;
