import React, { useEffect, useRef } from "react";
import { HashLink as Link } from "react-router-hash-link";
import "../styles/home.css";
import TraditionImg from "../assets/landingpage/homeimg.jpg";
import flowerIcon from "../assets/icons/flowericon.png";
import Reservation from "./Reservation";
import Tradition from "./Tradition";
import Delivery from "./Delivery";
import Subscribe from "./Subscribe";
import Testimonials from "./Testimonials";
import { motion } from "framer-motion";

const Home = ({
  products,
  handleCartAdd,
  activeSection,
  setActiveSection,
  applyDiscount,
}) => {
  const observer = useRef(null);

  useEffect(() => {
    observer.current = new IntersectionObserver(
      (entries) => {
        const visibleSection = entries.find(
          (entry) => entry.isIntersecting
        )?.target;
        if (visibleSection) {
          setActiveSection(visibleSection.id);
        }
      },
      {
        threshold: 0.5,
      }
    );
    const sections = document.querySelectorAll(".section");
    sections.forEach((section) => {
      observer.current.observe(section);
    });
    return () => {
      sections.forEach((section) => {
        observer.current.unobserve(section);
      });
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [activeSection]);
  return (
    <>
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        className="home-main"
      >
        <section className="section section-home" id="home">
          <div className="content">
            <h1 className="section-title">
              ENJOY THE TASTE OF
              <br /> <span className="title-highlight">UMAī</span> FOOD
            </h1>
            <p className="section-paragraph">
              Sushi, one of the most popular Japanese dishes, has a rich and
              fascinating history that dates back to the 8th century.
              <span className="title-highlight">
                {" "}
                Fun facts about this project:
              </span>
            </p>
            <ul className="menu-list">
              <li>
                <p>
                  This project aims to be a shopping cart app, but I
                  personalised it around my{" "}
                  <span className="title-highlight">favourite food!</span>
                </p>
                <img
                  src={flowerIcon}
                  width={25}
                  height={25}
                  alt="flower icon"
                />
              </li>
              <li>
                <p>
                  All of the text content in this site was
                  <span className="title-highlight"> AI generated </span> based
                  on my prompts about a family-owned sushi business in Japan.
                </p>
                <img
                  src={flowerIcon}
                  width={25}
                  height={25}
                  alt="flower icon"
                />
              </li>
              <li>
                <p>
                  Umaī means <span className="title-highlight">delicious</span>{" "}
                  in Japanese.
                </p>
                <img
                  src={flowerIcon}
                  width={25}
                  height={25}
                  alt="flower icon"
                />
              </li>
            </ul>
            <button className="section-button" aria-label="Go to Order Food">
              <Link to="/#delivery" className="store-button">
                Order Online
              </Link>
            </button>
          </div>
          <a href="https://unsplash.com/photos/NVX55qVyEkE">
            <img
              className="tradition-img"
              src={TraditionImg}
              alt="japanese restaurant outdoors"
              height={600}
              width={400}
              loading="lazy"
            />
          </a>
        </section>
        <Tradition />
        <Delivery products={products} handleCartAdd={handleCartAdd} />
        <Reservation />
        <Testimonials />
        <Subscribe applyDiscount={applyDiscount} />
      </motion.div>
    </>
  );
};

export default Home;
