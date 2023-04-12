import React, { useState } from "react";
import data from "../products/data";
import Item from "../components/Item";

const Store = () => {
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
  };

  const allProducts = products.map((product) => (
    <Item
      name={product.name}
      img={product.img}
      price={product.price}
      quantity={product.quantity}
      key={product.id}
      id={product.id}
      onAdd={handleAddEvent}
    />
  ));

  return (
    <>
      <h1>Display all products here</h1>
      <div className="all-products-wrap">{allProducts}</div>
    </>
  );
};

export default Store;
