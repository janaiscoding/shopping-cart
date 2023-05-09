import React from "react";
import { Link } from "react-router-dom";
import "../styles/home.css";
import LandingImg from "../assets/landingpage/landing.png";
import AboutUs from "./AboutUs";
import MenuMain from "./Menu2";
import DiscoverMenu from "./DiscoverMenu";

const Home = ({ products }) => {
  let titleOne = "OISHī JAPANESE CUISINE AND SUSHI AT ITS FINEST";
  let paraOne =
    "Oishi Japanese cuisine Kaiseki & Sushi Aims to reconceptualise `WASHOKU` by innovating and creating state of art dishes made with a modern twist.";
  return (
    <>
      <div className="home-main">
        <section className="section section-one">
          <div className="content">
            <h1 className="section-title">{titleOne}</h1>
            <p className="section-paragraph">{paraOne}</p>
            <button className="section-button">
              <Link to="/menu" className="store-button">
                Order Online
              </Link>
            </button>
          </div>
          <img src={LandingImg} alt="animated sushi table" width={1000} />
        </section>
        <AboutUs />
        <MenuMain />
        <DiscoverMenu products={products} />
      </div>
    </>
  );
};

export default Home;
