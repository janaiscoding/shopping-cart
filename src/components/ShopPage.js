import React, { useState } from "react";
import data from "../products/data";
import CardItem from "./CardItem";

const ShopPage = () => {
  const [products, setProducts] = useState(data);

  const handleAddEvent = (id) => {
    setProducts((prevState) => {
      const newProducts = prevState.map((product) => {
        if (product.id === id) {
          return {
            ...product,
            quantity: product.quantity++,
          };
        }
        return product;
      });
      return newProducts;
    });
    console.log(products);
  };

  const allProducts = products.map((product) => (
    <CardItem
      key={product.id}
      id={product.id}
      product={product}
      onAdd={handleAddEvent}
    />
  ));

  return (
    <>
      <h1>Here is my Shop page</h1>
      <p>
        Here is where I will display all the shop products and their event
        handlers ?
      </p>
      <div className="all-products-wrap">{allProducts}</div>
    </>
  );
};

export default ShopPage;
