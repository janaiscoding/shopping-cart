import React, { useState } from "react";
import data from "../products/data";
import Item from "../components/Item";
import Cart from "../components/Cart";

const Store = () => {
  const [products, setProducts] = useState(data);
  const [cart, setCart] = useState([]);
  const [visibility, setVisibility] = useState("hide-class");

  const changeVisibility = () => {
    if (visibility === "hide-cart") {
      setVisibility("show-cart");
    } else setVisibility("hide-cart");
  };

  const handleAddEvent = (id) => {
    setProducts((prevState) => {
      const newProducts = prevState.map((product) => {
        if (product.id === id) {
          let isInCart = false;
          if (cart.length > 0) {
            cart.forEach((item) => {
              if (item.name === product.name) {
                item.quantity = product.quantity;
                isInCart = true;
              }
            });
          }
          if (!isInCart) {
            setCart([...cart, product]);
          }
          return {
            ...product,
            quantity: product.quantity++,
          };
        }
        return product;
      });
      return newProducts;
    });

    console.log(cart);
  };

  const handleRemoveEvent = (id) => {
    setProducts((prevState) => {
      const newProducts = prevState.map((product) => {
        if (product.id === id && product.quantity >= 0) {
          cart.forEach((item) => {
            if (item.name === product.name) {
              item.quantity = product.quantity;
              let newCart = cart.filter((items) => items.quantity > 0);
              setCart(newCart);
            }
          });
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
      <button onClick={changeVisibility}>Show Cart</button>
      <div className="all-products-wrap">{allProducts}</div>
      <Cart cart={cart} 
      onAdd={handleAddEvent} 
      onRemove={handleRemoveEvent} 
      visibility={visibility} />
    </>
  );
};

export default Store;
