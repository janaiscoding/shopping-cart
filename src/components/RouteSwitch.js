import React from "react";
import { Link, Route, Routes, BrowserRouter } from "react-router-dom";
import Homepage from "./HomePage";
import ShopPage from "./ShopPage";
import "../styles/styles.css";

const RouteSwitch = () => {
  return (
    <>
      <BrowserRouter>
        <nav className="nav-bar">
          <Link to="/">Home</Link>
          <Link to="/shop">Shop</Link>
        </nav>
        <Routes>
          <Route exact path="/" element={<Homepage />} />
          <Route path="/shop" element={<ShopPage />} />
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default RouteSwitch;
