import React, { useState } from "react";
import data from "../products/data";
import CardItem from "./CardItem";
import ShopCart from "./ShopCart";

const ShopPage = () => {
  // all my products for Add events
  const [products, setProducts] = useState(data);

  const sumTotal = () => {
    return products
      .reduce(
        (total, cartItem) => total + cartItem.price * cartItem.quantity,
        0
      )
      .toFixed(2);
  };

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
    <CardItem
      key={product.id}
      id={product.id}
      img={product.img}
      quantity={product.quantity}
      product={product}
      onAdd={handleAddEvent}
    />
  ));

  return (
    <>
      <ShopCart handleTotal={sumTotal()} handleItem={selectItem} />
      <h1>Display all products here</h1>
      <div className="all-products-wrap">{allProducts}</div>
    </>
  );
};

export default ShopPage;
