import React, { useState } from "react";
import { HashLink as Link } from "react-router-hash-link";
import bookTableImageLeft from "../assets/images/leftbannerfix.png";
import bookTableImageRight from "../assets/images/rightbanner.png";
import { motion } from "framer-motion";
import "../styles/subscribe.css";

const Subscribe = ({ applyDiscount }) => {
  const [email, setEmail] = useState("");
  let breadcrumbs = "購読 / Subscribe";
  let floatingTitle = "購読 / Subscribe";
  const handleSubscription = (e) => {
    e.preventDefault();
    if (email === "") {
      createPopup("error");
    } else {
      applyDiscount();
      createPopup("discount");
      setEmail("");
    }
  };
  const createPopup = (type) => {
    const popupAlert = document.createElement("div");
    popupAlert.classList.add("popup");
    if (type === "error") popupAlert.innerText = `Your email cannot be empty!`;
    else if (type === "discount")
      popupAlert.innerText = `You joined membership! Enjoy 25% off to your next purchase!`;
    document.querySelector(".section-subscribe").append(popupAlert);
    setTimeout(() => {
      popupAlert.remove();
    }, 1000);
  };
  return (

    <section className="section section-subscribe" id="subscribe">
      <img
        src={bookTableImageLeft}
        alt="animated sushi table"
        width={300}
        loading="lazy"
        style={{ height: "100%" }}
      />
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
          Joīn Membershīp to get
          <br /> 25% off
        </h1>
        <p className="section-paragraph">
          Insert an email address to get a discount.
          <br />
          This works in the shopping cart.
        </p>
        <form
          className="sub-event-wrapper"
          onSubmit={(e) => handleSubscription(e)}
        >
          <input
            type="email"
            name="email"
            id="subscribe-email"
            placeholder="Enter your email address"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <button type="submit" className="subscribe-button">
            Submit
          </button>
        </form>
      </motion.div>
      <img
        className="right-img"
        src={bookTableImageRight}
        alt="animated sushi table"
        width={300}
        height="auto"
        loading="lazy"
      />
    </section>

  );
};
export default Subscribe;
