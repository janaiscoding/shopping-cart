/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState, useEffect } from "react";
import { Route, Routes, BrowserRouter } from "react-router-dom";
import dataSet from "../assets/products/dataSet.js";
import Navbar from "./Navbar";
import Home from "../pages/Home";
// import Menu from "../pages/Menu";
import MyFooter from "./MyFooter";
import Tradition from "../pages/Tradition";
import Delivery from "../pages/Delivery";
import Cart from "../pages/Cart";
import Contact from "../pages/Contact";
import ScrollToTop from "./ScrollToTop.js";

const App = () => {
  const [cart, setCart] = useState([]);
  const [totalPrice, setTotalPrice] = useState(0);
  const [products] = useState(dataSet);
  const [totalQuant, setTotalQuant] = useState(0);

  // Used on store page and cart
  const handleCartAdd = (product, quantity) => {
    //Check if it exists in current cart
    const productIndex = cart.findIndex(
      (cartItem) => cartItem.id === product.id
    );
    // if it's > -1 it means it exists
    if (productIndex > -1) {
      const newCart = cart.slice();
      // Support for adding additional
      newCart[productIndex].quantity += quantity;
      setCart(newCart);
    } else {
      // Support for setting initial quantity
      product.quantity = quantity;
      // Set after already existing Cart
      setCart([...cart, product]);
    }
  };

  //Only used on individual products inside the Cart page
  const handleCartUpdate = (product, quantity) => {
    const productIndex = cart.findIndex((i) => i.id === product.id);
    const newCart = cart.slice();
    newCart[productIndex].quantity = quantity;
    setCart(newCart);
  };

  // Remove when you decrement from Store page up to 0 or Remove directly from Cart page
  const handleCartRemove = (product) => {
    const productIndex = cart.findIndex((i) => i.id === product.id);
    const newCart = cart.slice();
    newCart.splice(productIndex, 1);
    setCart(newCart);
    product.quantity = 0;
  };

  // Update total price and total items in cart (for Navbar and Cart page)
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
  }, [cart]);
  return (
    <BrowserRouter>
    <ScrollToTop/>
      <Navbar totalQuant={totalQuant} />
      <Routes>
        <Route
          exact
          path="/"
          element={
            <Home
              products={products}
              cart={cart}
              totalPrice={totalPrice}
              handleCartAdd={handleCartAdd}
              handleCartUpdate={handleCartUpdate}
              handleCartRemove={handleCartRemove}
            />
          }
        />
        <Route
          path="/cart"
          element={
            <Cart
              cart={cart}
              setCart={setCart}
              totalPrice={totalPrice}
              handleCartAdd={handleCartAdd}
              handleCartUpdate={handleCartUpdate}
              handleCartRemove={handleCartRemove}
            />
          }
        />
        <Route path="/#tradition" element={<Tradition />} />
        <Route path="/#delivery" element={<Delivery />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
      <MyFooter />
    </BrowserRouter>
  );
};

export default App;
