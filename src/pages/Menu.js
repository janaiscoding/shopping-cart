import React from "react";
import MenuItem from "../components/MenuItem";
import "../styles/store.css";

const Menu = ({ products, handleCartAdd, handleCartRemove }) => {
  const allProducts = products.map((product) => (
    <MenuItem
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

export default Menu;
