import React, { useState, useEffect } from "react";
import { Route, Routes, BrowserRouter } from "react-router-dom";
import data from "../products/data";
import Navbar from "./Navbar";
import Home from "../pages/Home";
import Store from "../pages/Store";
import Cart from "../components/Cart";

const App = () => {
  const [cart, setCart] = useState([]);
  const [products] = useState(data);
  const [total, setTotal] = useState(0);

  const handleCartAdd = (product, quantity) => {
    const productIndex = cart.findIndex((i) => i.id === product.id);
    console.log(productIndex);
    if (productIndex > -1) {
      const newCart = cart.slice();
      console.log("first item added");

      newCart[productIndex].quantity += quantity;

      setCart(newCart);
    } else {
      console.log("other items added");
      setCart([...cart, product]);
    }
    console.log(cart);
  };

  const handleCartRemove = (product) => {
    const productIndex = cart.findIndex((i) => i.id === product.id);
    const newCart = cart.slice();
    newCart.splice(productIndex, 1);
    setCart(newCart);
  };

  const addTotal = () => {
    let sum = cart.reduce((accumulator, current) => {
      return accumulator + Number(current.quantity);
    }, 0);
    setTotal(sum);
  };

  useEffect(() => {
    addTotal();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [cart]);

  return (
    <BrowserRouter>
      <Navbar total={total} />
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route
          path="/store"
          element={<Store handleCartAdd={handleCartAdd} products={products} />}
        />
        <Route
          path="/cart"
          element={
            <Cart
              handleCartAdd={handleCartAdd}
              cart={cart}
              handleCartRemove={handleCartRemove}
            />
          }
        />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
