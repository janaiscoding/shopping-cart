import React, { useEffect, useState } from "react";
import { HashLink as Link } from "react-router-hash-link";
import bookTableImageLeft from "../assets/landingpage/leftbannerfix.png";
import bookTableImageRight from "../assets/landingpage/rightbanner.png";
import "../styles/contact.css";
import { motion } from "framer-motion";
const Contact = ({ setActiveSection }) => {
  let title = "Book a Table for Dinner";
  let breadcrumbs = "席を予約する / Book Table";
  let floatingTitle = "席を予約する / Book Table";
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [reservDate, setReservDate] = useState("");
  const [notes, setNotes] = useState("");
  const handleSubmit = (e) => {
    e.preventDefault();
    createPopup();
  };
  const createPopup = () => {
    const popupAlert = document.createElement("div");
    popupAlert.classList.add("popup");
    popupAlert.innerText = `Your reservation has been submitted on the date of ${reservDate} for ${name}`;
    document.querySelector(".section-contact").append(popupAlert);
    setTimeout(() => {
      popupAlert.remove();
      setName("");
      setEmail("");
      setPhone("");
      setReservDate("");
      setNotes("");
    }, 2000);
  };
  useEffect(() => {
    setActiveSection(null);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return (
    <section
      className=" section section-subscribe section-contact"
      id="contact"
    >
      <img
        src={bookTableImageLeft}
        alt="animated sushi table"
        height={400}
        loading="lazy"
      />
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
          {title}
        </h1>
        <p className="section-paragraph">
          This reservation form works.
        </p>
        <form className="section-form" onSubmit={(e) => handleSubmit(e)}>
          <div className="form-group">
            <div className="form-label-group">
              <label htmlFor="name">*Name: </label>
              <input
                type="text"
                name="name"
                id="name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
              />
            </div>
            <div className="form-label-group">
              <label htmlFor="email">*Email: </label>
              <input
                type="email"
                name="email"
                id="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>
          </div>
          <div className="form-group">
            <div className="form-label-group">
              <label htmlFor="phone">*Phone: </label>
              <input
                type="tel"
                name="phone"
                id="phone"
                required
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
              />
            </div>
            <div className="form-label-group">
              <label htmlFor="res-date">*Reservation Date: </label>
              <input
                type="date"
                name="res-date"
                id="res-date"
                value={reservDate}
                onChange={(e) => setReservDate(e.target.value)}
                required
              />
            </div>
          </div>
          <div className="form-group">
            <div className="form-label-group">
              <label htmlFor="notes">Notes: </label>
              <input
                type="text"
                name="notes"
                id="notes"
                value={notes}
                onChange={(e) => setNotes(e.target.value)}
              />
            </div>
          </div>
          <button
            className="section-button submit-reservation-button"
            aria-label="Submit reservation"
            type="submit"
          >
            Submit Reservation
          </button>
        </form>
      </motion.div>
      <img
        className="right-img"
        src={bookTableImageRight}
        alt="animated sushi table"
        height={400}
        width="auto"
        loading="lazy"
      />
    </section>
  );
};
export default Contact;
