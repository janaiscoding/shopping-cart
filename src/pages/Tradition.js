import React from "react";
import TraditionImg from "../assets/images/tradition.webp"
import { HashLink as Link } from "react-router-hash-link";
import { motion } from "framer-motion";

const Tradition = () => {
  let breadcrumbs = "寿司の伝統 / Sushi Tradition";
  let floatingTitle = "寿司の伝統 / Sushi Tradition";
  return (
    <section className="section section-tradition" id="tradition">
      <a href="https://unsplash.com/photos/9sM53e9wTTY">
        <img
          className="tradition-img"
          src={TraditionImg}
          alt="japanese restaurant outdoors"
          height={600}
          width={400}
          loading="lazy"
        />
      </a>
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        className="content"
      >
        <Link to="/#tradition">
          <h2 className="section-breadcrumbs">{breadcrumbs}</h2>
        </Link>
        <h1 className="section-title">
          <span className="floating-title">{floatingTitle}</span>
          OUR UMAī <span className="title-highlight">TRADīTīON</span>
        </h1>
        <p className="section-tradition-paragraph section-paragraph">
          We are a Japanese restaurant that has been serving authentic Japanese
          cuisine for over 50 years. Our restaurant has been a
          <span className="title-highlight"> family tradition </span>
          for generations, and we take great pride in continuing to provide our
          customers with the{" "}
          <span className="title-highlight">
            highest quality dishes and unparalleled service.
          </span>
        </p>
        <button className="section-button" aria-label="Go to Order Food">
          <Link to="/#delivery" className="store-button">
            Order Online
          </Link>
        </button>
      </motion.div>
    </section>
  );
};
export default Tradition;
