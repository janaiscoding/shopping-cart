import React, { useState } from "react";
import data from "../products/data"
import StoreItem from "../components/StoreItem";

const Store = ({handleCartAdd }) => {
  const [products] = useState(data);

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
