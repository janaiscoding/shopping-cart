/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState, useEffect } from "react";
import { Route, Routes, HashRouter } from "react-router-dom";
import dataSecond from "../assets/products/dataSecond";
import Navbar from "./Navbar";
import Home from "../pages/Home";
// import Menu from "../pages/Menu";
import MyFooter from "./MyFooter";
import Tradition from "../pages/Tradition";
import Sushi from "../pages/Sushi";
import Cart from "../pages/Cart";
import Contact from "../pages/Contact";
import arrowTopIcon from "../assets/icons/arrowhead-up.png";

const App = () => {
  const [cart, setCart] = useState([]);
  const [totalPrice, setTotalPrice] = useState(0);
  const [products] = useState(dataSecond);
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
  //my handler for scrolling 
  const scrollFunction = () => {
    let arrowTop = document.querySelector(".arrow-top");
    if (
      document.body.scrollTop > 20 ||
      document.documentElement.scrollTop > 20
    ) {
      arrowTop.setAttribute("data-visible", true);
    } else {
      arrowTop.setAttribute("data-visible", false);
    }
  };
  const backToTop = () => {
    document.body.scrollTop = 0; // For Safari
    document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
  };
  window.onscroll = scrollFunction;
  useEffect(() => {
    addTotal();
  }, [cart]);
  return (
    <HashRouter>
      <Navbar totalQuant={totalQuant} />
      <img
        src={arrowTopIcon}
        className="arrow-top"
        data-visible="false"
        width={32}
        alt="scroll back to top arrow"
        onClick={backToTop}
      />
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
              totalPrice={totalPrice}
              handleCartAdd={handleCartAdd}
              handleCartUpdate={handleCartUpdate}
              handleCartRemove={handleCartRemove}
            />
          }
        />
        <Route path="/#tradition" element={<Tradition />} />
        <Route path="/#sushi" element={<Sushi />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
      <MyFooter />
    </HashRouter>
  );
};

export default App;
