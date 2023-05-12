import React from "react";
import leftSectionTwoImage from "../assets/landingpage/restaurant.jpg";
import { HashLink as Link } from "react-router-hash-link";
import { motion } from "framer-motion";

const Reservation = () => {
  let title = "Book your table today";
  let para =
    "When it comes to experiencing the rich and delicious flavors of Japanese cuisine, reserving a dinner table at a Japanese restaurant is a must. Whether you're looking to enjoy a sushi platter, indulge in a hot bowl of ramen, or savor some authentic Japanese dishes, booking a table beforehand ensures you'll have a hassle-free dining experience.";
  let breadcrumbs = "予約 / Reservation";
  let floatingTitle = "予約 / Reservation";
  return (
    <section className="section section-two" id="reservation">
      <a href="https://unsplash.com/photos/HvhinFxq4_s">
        <img
          className="reservation-img"
          src={leftSectionTwoImage}
          alt="restaurant pic with lightbulbs outside"
          height={700}
          width="auto"
          loading="lazy"
        />
      </a>
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        className="content"
      >
        <Link to="/#reservation">
          <h2 className="section-breadcrumbs">{breadcrumbs}</h2>
        </Link>
        <h1 className="section-title">
          <span className="floating-title">{floatingTitle}</span>
          {title}
        </h1>
        <p className="section-paragraph">{para}</p>
        <button className="section-button">
          <Link to="/contact" className="store-button">
            Reservation
          </Link>
        </button>
      </motion.div>
    </section>
  );
};
export default Reservation;
