import React from "react";
import StoreItem from "../components/StoreItem";

const Store = ({ products, handleCartAdd }) => {

  const allProducts = products.map((product) => (
    <StoreItem
      product={product}
      key={product.id}
      handleCartAdd={handleCartAdd}
    />
  ));

  return (
    <>
      <div className="all-products-wrap">{allProducts}</div>
    </>
  );
};

export default Store;
