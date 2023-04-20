import React from "react";
import { Link } from "react-router-dom";
import "../styles/home.css";

const Home = () => {
  return (
    <>
      <div className="home-main">
        <div className="button-wrapper">
          <Link to="/menu" className="store-button">
            Order Online
          </Link>
          <Link to="/contact" className="reserve-button">
            Reservations
          </Link>
        </div>
      </div>
    </>
  );
};

export default Home;
