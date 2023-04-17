import React, { useState } from "react";
import { Route, Routes, BrowserRouter } from "react-router-dom";
import Navbar from "./Navbar";
import Home from "../pages/Home";
import Store from "../pages/Store";
import Cart from "../components/Cart";

const App = () => {
  const [cart, setCart] = useState([]);

  const handleCartAdd = (product, quantity) => {
    setCart([...cart, { product: product, quantity: quantity }]);
  };

  return (
    <BrowserRouter>
      <Navbar cart={cart} />
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route
          path="/store"
          element={<Store handleCartAdd={handleCartAdd} />}
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
