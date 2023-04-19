import React, { useState, useEffect } from "react";
import { Route, Routes, BrowserRouter } from "react-router-dom";
import data from "../products/data";
import Navbar from "./Navbar";
import Home from "../pages/Home";
import Store from "../pages/Store";
import Cart from "../components/Cart";

const App = () => {
  const [cart, setCart] = useState([]);
  const [totalPrice, setTotalPrice] = useState(0);
  const [products] = useState(data);
  const [totalQuant, setTotalQuant] = useState(0);
  // usable on store page and cart
  const handleCartAdd = (product, quantity) => {
    //checking if it exists or not
    const productIndex = cart.findIndex((i) => i.id === product.id);

    console.log(`my product index in the cart`, productIndex);
    if (productIndex > -1) {
      console.log(`updating new cart with product which exists`);
      const newCart = cart.slice();
      newCart[productIndex].quantity += quantity;
      setCart(newCart);
    } else {
      console.log(`adding new product`);
      console.log(`cart before`, cart);
      console.log(`new product to be added`, product);
      product.quantity = quantity;
      setCart([...cart, product]);
      console.log(`cart after`, cart);
    }
    console.log(`cart after adding stuff to it`, cart);
  };

  //only used on individual products inside the Cart page
  const handleCartUpdate = (product, quantity) => {
    const productIndex = cart.findIndex((i) => i.id === product.id);
    const newCart = cart.slice();
    newCart[productIndex].quantity = quantity;
    setCart(newCart);
  };

  // remove when you decrement from Store page or Remove from Cart page
  const handleCartRemove = (product) => {
    const productIndex = cart.findIndex((i) => i.id === product.id);
    const newCart = cart.slice();
    newCart.splice(productIndex, 1);
    setCart(newCart);
  };

  // update total price and total items in cart
  const addTotal = () => {
    let sumQuantity = cart.reduce((accumulator, current) => {
      return accumulator + Number(current.quantity);
    }, 0);
    let sumPrice = cart.reduce((accumulator, current) => {
      return accumulator + Number(current.price * current.quantity);
    }, 0);

    setTotalPrice(sumPrice);
    setTotalQuant(sumQuantity);
  };

  useEffect(() => {
    addTotal();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [cart]);

  return (
    <BrowserRouter>
      <Navbar totalQuant={totalQuant} />
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route
          path="/store"
          element={
            <Store
              handleCartAdd={handleCartAdd}
              products={products}
              handleCartRemove={handleCartRemove}
            />
          }
        />
        <Route
          path="/cart"
          element={
            <Cart
              handleCartAdd={handleCartAdd}
              handleCartUpdate={handleCartUpdate}
              cart={cart}
              handleCartRemove={handleCartRemove}
              totalPrice={totalPrice}
            />
          }
        />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
