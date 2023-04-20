import React from "react";
import StoreItem from "../components/StoreItem";
import "../styles/store.css";

const Store = ({ products, handleCartAdd, handleCartRemove }) => {
  const allProducts = products.map((product) => (
    <StoreItem
      product={product}
      key={product.id}
      handleCartAdd={handleCartAdd}
      handleCartRemove={handleCartRemove}
    />
  ));

  return (
    <div className="store-main">
      <div className="all-products-wrap">{allProducts}</div>
    </div>
  );
};

export default Store;
