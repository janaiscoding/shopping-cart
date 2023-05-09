import React from "react";
import { HashLink as Link } from "react-router-hash-link";
import "../styles/home.css";
import LandingImg from "../assets/landingpage/landing.png";
import About from "./About";
import Tradition from "./Tradition";
import Sushi from "./Sushi";
import BookTable from "./BookTable";

const Home = ({ products, handleCartAdd, backToTop }) => {
  let titleOne = "OISHī JAPANESE CUISINE AND SUSHI AT ITS FINEST";
  let paraOne =
    "Oishi Japanese cuisine Kaiseki & Sushi Aims to reconceptualise `WASHOKU` by innovating and creating state of art dishes made with a modern twist.";
  return (
    <>
      <div className="home-main">
        <section className="section section-one" id="home">
          <div className="content">
            <h1 className="section-title">{titleOne}</h1>
            <p className="section-paragraph">{paraOne}</p>
            <button className="section-button">
              <Link to="/#discover" className="store-button">
                Order Online
              </Link>
            </button>
          </div>
          <img src={LandingImg} alt="animated sushi table" width={1000} />
        </section>
        <About />
        <Tradition />
        <Sushi products={products} handleCartAdd={handleCartAdd} />
        <BookTable />
      </div>
    </>
  );
};

export default Home;
