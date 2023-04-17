import React from "react";
import { Route, Routes, BrowserRouter } from "react-router-dom";
import Navbar from "./Navbar";
import Home from "../pages/Home";
import Store from "../pages/Store";

const App = () => {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/store" element={<Store />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
