import React, { useState } from "react";
import data from "../products/data";
import Item from "../components/Item";
import Cart from "../components/Cart";

const Store = () => {
  const [products, setProducts] = useState(data);
  const [bag, setBag] = useState(data);

  const handleAddEvent = (id) => {
    setProducts((prevState) => {
      const newProducts = prevState.map((product) => {
        if (product.id === id) {
          return {
            ...product,
            quantity: product.quantity++,
          };
        }
        //kinda on the right path ?
        return product;
      });
      return newProducts;
    });
    
    // setBag((prevBag) => {
    //   const allBag = bag.map((bagItem) => {
    //     if (bagItem.id === id && bagItem.quantity > 0) {
    //       return [...prevBag, bagItem];
    //     }
    //     console.log(bagItem);
    //     return bagItem;
    //   });
    //   return allBag;
    // });
  };

  const handleRemoveEvent = (id) => {
    setProducts((prevState) => {
      const newProducts = prevState.map((product) => {
        if (product.id === id && product.quantity > 0) {
          return {
            ...product,
            quantity: product.quantity--,
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
      onRemove={handleRemoveEvent}
    />
  ));

  return (
    <>
      <h1>Display all products here</h1>
      <div className="all-products-wrap">{allProducts}</div>
      <Cart bag={bag} onAdd={handleAddEvent} onRemove={handleRemoveEvent} />
    </>
  );
};

export default Store;
