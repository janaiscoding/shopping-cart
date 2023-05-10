import React from "react";
import { HashLink as Link } from "react-router-hash-link";
import bookTableImageLeft from "../assets/landingpage/leftbannerfix.png";
import bookTableImageRight from "../assets/landingpage/rightbanner.png";
import { motion } from "framer-motion";
import "../styles/subscribe.css"

const Subscribe = () => {
  let title = "Joīn Membershīp to get 25% off";
  let para =
    "Sign up to stay notified with our latest news and promotions.";
  let breadcrumbs = "購読 / Subscribe";
  let floatingTitle="購読 / Subscribe";
  return (
    <section className="section section-five" id="subscribe">
      <img src={bookTableImageLeft} alt="animated sushi table" width={400} />
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        className="content"
      >
        <Link to="/#subscribe">
          <h2 className="section-breadcrumbs">{breadcrumbs}</h2>
        </Link>
        <h1 className="section-title">
        <span className="floating-title">{floatingTitle}</span>
        {title}</h1>
        <p className="section-paragraph">{para}</p>
        <input 
        type="text" 
        name="email" 
        id="subscribe-email"
        placeholder="Enter your email address" />
      </motion.div>
      <img
        className="right-img"
        src={bookTableImageRight}
        alt="animated sushi table"
        width={400}
      />
    </section>
  );
};
export default Subscribe;
