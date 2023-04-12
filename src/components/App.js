import React from "react";
import { Link, Route, Routes, BrowserRouter } from "react-router-dom";
import Home from "./Home";
import Store from "./Store";
import "../styles/styles.css";

const App = () => {
  return (
    <BrowserRouter>
      <nav className="nav-bar">
        <Link to="/">Home</Link>
        <Link to="/store">Store</Link>
      </nav>
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/store" element={<Store />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
