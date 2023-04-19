import React from "react";
import { Link } from "react-router-dom";
import "../styles/home.css";

const Home = () => {
  return (
    <>
      <div className="home-main">
        <div className="button-wrapper">
          <Link to="/store">
            <button className="store-button">Order Online</button>
          </Link>
          <Link to="/contact">
          <button className="reserve-button">Reservations</button>
          </Link>
        </div>
      </div>
    </>
  );
};

export default Home;
