import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <>
      <div className="home-main">
        <Link to="/store">
          <button className="store-button">Order delicious sushi</button>
        </Link>
      </div>
    </>
  );
};

export default Home;
