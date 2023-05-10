import React from "react";
import { HashLink as Link } from "react-router-hash-link";
import "../styles/home.css";
import Ramen from "../assets/landingpage/ramen.jpg";
import Reservation from "./Reservation";
import Tradition from "./Tradition";
import Delivery from "./Delivery";
import Subscribe from "./Subscribe";
import Testimonials from "./Testimonials";
import { motion } from "framer-motion";

const Home = ({ products, handleCartAdd }) => {

  let paraOne =
    "We are a Japanese restaurant that has been serving authentic Japanese cuisine for over 50 years. Our restaurant has been a family tradition for generations, and we take great pride in continuing to provide our customers with the highest quality dishes and unparalleled service.";
  return (
    <>
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        className="home-main"
      >
        <section className="section section-one" id="home">
          <div className="content">
            <h1 className="section-title">ENJOY THE TASTE OF <span className="title-highlight">UMAī</span> FOOD</h1>
            <p className="section-paragraph">{paraOne}</p>
            <button className="section-button">
              <Link to="/#delivery" className="store-button">
                Order Online
              </Link>
            </button>
          </div>
          <img
            src={Ramen}
            alt="animated sushi table"
            // width={1000}
            className="landing-img"
          />
        </section>
        <Delivery products={products} handleCartAdd={handleCartAdd} />
        <Tradition />
        <Reservation />
        <Testimonials />
        <Subscribe />
      </motion.div>
    </>
  );
};

export default Home;
