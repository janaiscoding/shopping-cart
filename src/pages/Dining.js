import React from "react";
import leftSectionTwoImage from "../assets/images/restaurant.webp";
import { HashLink as Link } from "react-router-hash-link";
import { motion } from "framer-motion";

const Dining = () => {
  let title = "Book your table today";
  let breadcrumbs = "予約 / Dining";
  let floatingTitle = "予約 / Dining";
  return (
    <section className="section section-dining" id="dining">
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        className="content"
      >
        <Link to="/#dining">
          <h2 className="section-breadcrumbs">{breadcrumbs}</h2>
        </Link>
        <h1 className="section-title">
          <span className="floating-title">{floatingTitle}</span>
          {title}
        </h1>
        <p className="section-paragraph section-reservation-paragraph">
          When it comes to experiencing the{" "}
          <span className="title-highlight"> rich and delicious flavors</span>{" "}
          of Japanese cuisine, reserving a dinner table at a Japanese restaurant
          is a must. Whether you're looking to enjoy a sushi platter, indulge in
          a hot bowl of ramen, or savor some authentic Japanese dishes, booking
          a table beforehand ensures you'll have a
          <span className="title-highlight">
            {" "}
            hassle-free dining experience.
          </span>
        </p>
          <Link to="/reservation" className="section-button store-button">
            Reservation
          </Link>
      </motion.div>
      <a href="https://unsplash.com/photos/HvhinFxq4_s">
        <img
          className="reservation-img"
          src={leftSectionTwoImage}
          alt="restaurant pic with lightbulbs outside"
          height={600}
          width={400}
          loading="lazy"
        />
      </a>
    </section>
  );
};
export default Dining;
