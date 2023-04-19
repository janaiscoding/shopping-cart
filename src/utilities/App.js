import React, { useState } from "react";
import { Route, Routes, BrowserRouter } from "react-router-dom";
import data from "../products/data";
import Navbar from "./Navbar";
import Home from "../pages/Home";
import Store from "../pages/Store";
import Cart from "../components/Cart";

const App = () => {
  const [cart, setCart] = useState([]);
  const [products] = useState(data);

  const handleCartAdd = (product, quantity) => {
    const productIndex = cart.findIndex((i) => i.id === product.id);
    console.log(productIndex)
    if (productIndex > -1) {
      const newCart = cart.slice();
      console.log("first item added");
      
      newCart[productIndex].quantity += quantity;

      setCart(newCart);
    } else {
      console.log("other items added")
      setCart([...cart, product]);
    }
    console.log(cart)
  };

  return (
    <BrowserRouter>
      <Navbar cart={cart} />
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route
          path="/store"
          element={<Store handleCartAdd={handleCartAdd} products={products} />}
        />
        <Route
          path="/cart"
          element={<Cart handleCartAdd={handleCartAdd} cart={cart} />}
        />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
