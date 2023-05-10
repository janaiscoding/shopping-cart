import React from "react";
import { HashLink as Link } from "react-router-hash-link";
import bookTableImageLeft from "../assets/landingpage/leftbannerfix.png";
import bookTableImageRight from "../assets/landingpage/rightbanner.png";
import "../styles/contact.css";
import { motion } from "framer-motion";
const Contact = () => {
  let title = "Book a Table for Dinner";
  let breadcrumbs = "席を予約する / Book Table";
  let floatingTitle = "席を予約する / Book Table"
  return (
    <section className="section section-five section-contact" id="contact">
      <img src={bookTableImageLeft} alt="animated sushi table" height={400} />
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        className="content"
      >
        <Link to="/contact">
          <h2 className="section-breadcrumbs">{breadcrumbs}</h2>
        </Link>
        <h1 className="section-title">
        <span className="floating-title">{floatingTitle}</span>
        {title}</h1>
        <form className="section-form">
          <div className="form-group">
            <div className="form-label-group">
              <label htmlFor="name">Name: </label>
              <input type="text" name="name" id="name" required />
            </div>
            <div className="form-label-group">
              <label htmlFor="email">Email: </label>
              <input type="text" name="email" id="email" required />
            </div>
          </div>
          <div className="form-group">
            <div className="form-label-group">
              <label htmlFor="phone">Phone: </label>
              <input type="tel" name="phone" id="phone" required />
            </div>
            <div className="form-label-group">
              <label htmlFor="res-date">Reservation Date: </label>
              <input type="date" name="res-date" id="res-date" required />
            </div>
          </div>
          <div className="form-group">
            <div className="form-label-group">
              <label htmlFor="notes">Notes: </label>
              <input type="text" name="notes" id="notes" />
            </div>
          </div>
        </form>
        <button className="section-button book-button">
          Submit Reservation
        </button>
      </motion.div>
      <img
        className="right-img"
        src={bookTableImageRight}
        alt="animated sushi table"
        height={400}
      />
    </section>
  );
};
export default Contact;
